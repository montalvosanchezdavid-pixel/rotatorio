// =============================================================
// NOTEBOOK — libreta digital interactiva (módulo autocontenido)
// Modelo de hojas: en escritorio se ven 2 páginas (pliego) y gira
// una hoja completa (cara + dorso). En móvil se ve 1 página.
// =============================================================
(function(){
'use strict';

const NB_KEY = 'rotatorio_notebook_v1';
const FLIP_MS = 660;

// almacenamiento: reutiliza el safeStorage de app.js si existe
const store = (typeof safeStorage !== 'undefined') ? safeStorage : {
  getItem(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } },
  setItem(k,v){ try{ localStorage.setItem(k,v); }catch(e){} }
};

let pages = [];      // array de HTML (una entrada por página)
let pos = 0;         // escritorio: índice de hoja · móvil: índice de página
let twoUp = false;   // true = pliego de 2 páginas
let isOpen = false;
let animating = false;

// ---------- estado ----------
function load(){
  try{
    const raw = store.getItem(NB_KEY);
    if(raw){
      const data = JSON.parse(raw);
      if(Array.isArray(data.pages) && data.pages.length){
        pages = data.pages;
        pos = Math.max(0, data.pos|0);
        return;
      }
    }
  }catch(e){}
  pages = ['', '', '', ''];
  pos = 0;
}
let saveTimer = null;
function save(now){
  clearTimeout(saveTimer);
  const doIt = ()=> store.setItem(NB_KEY, JSON.stringify({pages, pos, v:1}));
  if(now) doIt(); else saveTimer = setTimeout(doIt, 400);
}

// ---------- índices ----------
function leftIdx(){ return twoUp ? 2*pos - 1 : -1; }
function rightIdx(){ return twoUp ? 2*pos : pos; }
function canNext(){ return twoUp ? (2*pos + 1 <= pages.length - 1) : (pos < pages.length - 1); }
function canPrev(){ return pos > 0; }
function focusedIdx(){ return Math.min(rightIdx(), pages.length - 1); }

// ---------- DOM ----------
let el = {};
function cacheDom(){
  el.overlay   = document.getElementById('nbOverlay');
  el.book      = document.getElementById('nbBook');
  el.leftSide  = document.getElementById('nbLeft');
  el.rightSide = document.getElementById('nbRight');
  el.leftPaper = document.getElementById('nbLeftPaper');
  el.rightPaper= document.getElementById('nbRightPaper');
  el.leftFolio = document.getElementById('nbLeftFolio');
  el.rightFolio= document.getElementById('nbRightFolio');
  el.flip      = document.getElementById('nbFlip');
  el.flipFront = document.getElementById('nbFlipFront');
  el.flipBack  = document.getElementById('nbFlipBack');
  el.shadeF    = document.getElementById('nbShadeFront');
  el.shadeB    = document.getElementById('nbShadeBack');
  el.edgePrev  = document.getElementById('nbEdgePrev');
  el.edgeNext  = document.getElementById('nbEdgeNext');
  el.counter   = document.getElementById('nbCounter');
  el.btnPrev   = document.getElementById('nbPrev');
  el.btnNext   = document.getElementById('nbNext');
  el.search    = document.getElementById('nbSearch');
  el.results   = document.getElementById('nbResults');
}

// ---------- pintado ----------
function paperHtml(i){ return (i >= 0 && i < pages.length) ? (pages[i] || '') : null; }

function render(){
  const li = leftIdx(), ri = rightIdx();
  const lh = paperHtml(li), rh = paperHtml(ri);

  el.leftSide.classList.toggle('is-blank', lh === null);
  el.rightSide.classList.toggle('is-blank', rh === null);

  el.leftPaper.innerHTML = lh || '';
  el.rightPaper.innerHTML = rh || '';
  el.leftPaper.contentEditable = (lh !== null) ? 'true' : 'false';
  el.rightPaper.contentEditable = (rh !== null) ? 'true' : 'false';
  el.leftFolio.textContent  = (lh !== null) ? (li + 1) : '';
  el.rightFolio.textContent = (rh !== null) ? (ri + 1) : '';

  el.btnPrev.disabled = !canPrev();
  el.btnNext.disabled = !canNext();
  el.edgePrev.classList.toggle('is-off', !canPrev());
  el.edgeNext.classList.toggle('is-off', !canNext());

  const total = pages.length;
  if(twoUp && lh !== null && rh !== null){
    el.counter.innerHTML = '<b>' + (li+1) + '–' + (ri+1) + '</b> / ' + total;
  }else{
    el.counter.innerHTML = '<b>' + (focusedIdx()+1) + '</b> / ' + total;
  }
  save();
}

// guarda lo que se escribe en la página correcta
function bindEditing(paper, getIndex){
  paper.addEventListener('input', ()=>{
    const i = getIndex();
    if(i >= 0 && i < pages.length){ pages[i] = paper.innerHTML; save(); }
  });
  // Enter genera <div>, mantenemos texto plano y limpio al pegar
  paper.addEventListener('paste', (e)=>{
    e.preventDefault();
    const txt = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, txt);
  });
}

// ---------- animación de giro ----------
function setFlipAngle(deg, progress){
  el.flip.style.transform = 'rotateY(' + deg + 'deg)';
  el.shadeF.style.opacity = (0.60 * progress).toFixed(3);
  el.shadeB.style.opacity = (0.68 * (1 - progress)).toFixed(3);
}

// prepara la hoja que gira; dir: 1 = avanzar, -1 = retroceder
function prepareFlip(dir){
  let frontHtml, backHtml, frontNo, backNo;

  if(dir === 1){
    if(twoUp){
      frontHtml = paperHtml(2*pos);     frontNo = 2*pos + 1;
      backHtml  = paperHtml(2*pos + 1); backNo  = 2*pos + 2;
      // bajo la hoja aparece ya la página siguiente del pliego
      const nr = paperHtml(2*pos + 2);
      el.rightSide.classList.toggle('is-blank', nr === null);
      el.rightPaper.innerHTML = nr || '';
      el.rightPaper.contentEditable = 'false';
      el.rightFolio.textContent = (nr !== null) ? (2*pos + 3) : '';
    }else{
      frontHtml = paperHtml(pos);       frontNo = pos + 1;
      backHtml  = null;                 backNo  = null;
      const nr = paperHtml(pos + 1);
      el.rightPaper.innerHTML = nr || '';
      el.rightPaper.contentEditable = 'false';
      el.rightFolio.textContent = (nr !== null) ? (pos + 2) : '';
    }
  }else{
    if(twoUp){
      frontHtml = paperHtml(2*pos - 2); frontNo = 2*pos - 1;
      backHtml  = paperHtml(2*pos - 1); backNo  = 2*pos;
      // bajo la hoja aparece la página izquierda del pliego anterior
      const nl = paperHtml(2*pos - 3);
      el.leftSide.classList.toggle('is-blank', nl === null);
      el.leftPaper.innerHTML = nl || '';
      el.leftPaper.contentEditable = 'false';
      el.leftFolio.textContent = (nl !== null) ? (2*pos - 2) : '';
    }else{
      frontHtml = paperHtml(pos - 1);   frontNo = pos;
      backHtml  = null;                 backNo  = null;
    }
  }

  el.flipFront.querySelector('.nb-paper').innerHTML = frontHtml || '';
  el.flipBack.querySelector('.nb-paper').innerHTML  = backHtml  || '';
  el.flipFront.querySelector('.nb-folio').textContent = frontNo || '';
  el.flipBack.querySelector('.nb-folio').textContent  = backNo  || '';
  el.flip.hidden = false;
}

function finishFlip(dir){
  el.flip.hidden = true;
  el.flip.classList.remove('is-anim');
  el.flip.style.transform = '';
  el.shadeF.style.opacity = 0;
  el.shadeB.style.opacity = 0;
  pos += dir;
  animating = false;
  render();
}

function flip(dir){
  if(animating) return;
  if(dir === 1 && !canNext()) return;
  if(dir === -1 && !canPrev()) return;
  animating = true;
  hideResults();

  prepareFlip(dir);
  setFlipAngle(dir === 1 ? 0 : -180, dir === 1 ? 0 : 1);

  // fuerza reflow para que la transición arranque desde el ángulo inicial
  void el.flip.offsetWidth;
  el.flip.classList.add('is-anim');
  setFlipAngle(dir === 1 ? -180 : 0, dir === 1 ? 1 : 0);

  setTimeout(()=> finishFlip(dir), FLIP_MS + 20);
}

// ---------- arrastre (ratón y táctil) ----------
let drag = null;
function edgeWidth(){
  return twoUp ? el.book.offsetWidth / 2 : el.book.offsetWidth;
}

function startDrag(e, dir){
  if(animating) return;
  if(dir === 1 && !canNext()) return;
  if(dir === -1 && !canPrev()) return;
  drag = {dir, startX:e.clientX, moved:false, angle:(dir===1?0:-180)};
  animating = true;
  prepareFlip(dir);
  el.flip.classList.remove('is-anim');
  setFlipAngle(drag.angle, dir === 1 ? 0 : 1);
  try{ e.currentTarget.setPointerCapture(e.pointerId); }catch(err){}
  e.preventDefault();
}

function moveDrag(e){
  if(!drag) return;
  const dx = e.clientX - drag.startX;
  if(Math.abs(dx) > 4) drag.moved = true;
  const w = edgeWidth();
  let p; // progreso 0..1 del giro
  if(drag.dir === 1) p = Math.min(1, Math.max(0, -dx / w));
  else               p = 1 - Math.min(1, Math.max(0, dx / w));
  drag.angle = -180 * p;
  drag.progress = p;
  setFlipAngle(drag.angle, p);
}

function endDrag(){
  if(!drag) return;
  const d = drag; drag = null;
  const p = (typeof d.progress === 'number') ? d.progress : (d.dir===1?0:1);
  // sin arrastre real → se trata como clic en la flecha
  if(!d.moved){
    el.flip.classList.add('is-anim');
    setFlipAngle(d.dir === 1 ? -180 : 0, d.dir === 1 ? 1 : 0);
    setTimeout(()=> finishFlip(d.dir), FLIP_MS + 20);
    return;
  }
  const complete = (d.dir === 1) ? (p > 0.35) : (p < 0.65);
  el.flip.classList.add('is-anim');
  if(complete){
    setFlipAngle(d.dir === 1 ? -180 : 0, d.dir === 1 ? 1 : 0);
    setTimeout(()=> finishFlip(d.dir), FLIP_MS + 20);
  }else{
    // vuelve suavemente a su sitio
    setFlipAngle(d.dir === 1 ? 0 : -180, d.dir === 1 ? 0 : 1);
    setTimeout(()=>{
      el.flip.hidden = true;
      el.flip.classList.remove('is-anim');
      el.flip.style.transform = '';
      animating = false;
      render();
    }, FLIP_MS + 20);
  }
}

// ---------- buscador ----------
function plainText(html){
  const d = document.createElement('div');
  d.innerHTML = html || '';
  return (d.textContent || '').replace(/\s+/g,' ').trim();
}
function esc(s){ return s.replace(/[&<>]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

function hideResults(){ if(el.results) el.results.hidden = true; }

function runSearch(q){
  q = (q||'').trim();
  if(q.length < 2){ hideResults(); return; }
  const needle = q.toLowerCase();
  const hits = [];
  pages.forEach((html, i)=>{
    const txt = plainText(html);
    const at = txt.toLowerCase().indexOf(needle);
    if(at !== -1){
      const from = Math.max(0, at - 28);
      let snip = txt.slice(from, at + needle.length + 42);
      if(from > 0) snip = '…' + snip;
      const rel = at - from + (from > 0 ? 1 : 0);
      const marked = esc(snip.slice(0, rel)) + '<b>' + esc(snip.substr(rel, needle.length)) + '</b>' + esc(snip.slice(rel + needle.length));
      hits.push({i, marked});
    }
  });

  el.results.innerHTML = '';
  if(!hits.length){
    el.results.innerHTML = '<div class="nb-no-result">Sin resultados para “' + esc(q) + '”</div>';
    el.results.hidden = false;
    return;
  }
  const nums = hits.map(h=> h.i + 1);
  const list = nums.length === 1 ? ('página ' + nums[0])
    : ('páginas ' + nums.slice(0,-1).join(', ') + ' y ' + nums[nums.length-1]);
  const head = document.createElement('div');
  head.className = 'nb-results-head';
  head.innerHTML = esc(q) + ' — <b>' + list + '</b>';
  el.results.appendChild(head);

  hits.forEach(h=>{
    const row = document.createElement('div');
    row.className = 'nb-result';
    row.innerHTML = '<span class="nb-result-pg">Página ' + (h.i+1) + '</span>' +
                    '<span class="nb-result-sn">' + h.marked + '</span>';
    row.onclick = ()=>{ goToPage(h.i); hideResults(); };
    el.results.appendChild(row);
  });
  el.results.hidden = false;
}

function goToPage(i){
  if(animating) return;
  i = Math.max(0, Math.min(pages.length - 1, i));
  pos = twoUp ? Math.floor(i / 2) : i;
  // en pliego, la página buscada debe quedar visible (izq o dcha)
  if(twoUp && (2*pos !== i) && (2*pos - 1 !== i)) pos = Math.ceil(i / 2);
  render();
}

// ---------- páginas ----------
function addPage(){
  if(animating) return;
  pages.push('');
  save(true);
  goToPage(pages.length - 1);
  const p = el.rightPaper;
  setTimeout(()=>{ if(p.isContentEditable) p.focus(); }, 60);
}

function deletePage(){
  if(animating) return;
  const i = focusedIdx();
  if(pages.length <= 1){ pages[0] = ''; render(); return; }
  const txt = plainText(pages[i]);
  const msg = '¿Eliminar la página ' + (i+1) + '?' + (txt ? '\n\nContiene texto y no se podrá recuperar.' : '');
  if(!confirm(msg)) return;
  pages.splice(i, 1);
  save(true);
  goToPage(Math.min(i, pages.length - 1));
}

// ---------- responsive ----------
function syncMode(){
  const next = window.matchMedia('(min-width: 901px)').matches;
  if(next === twoUp) return false;
  const cur = focusedIdx();
  twoUp = next;
  pos = twoUp ? Math.floor(cur / 2) : cur;
  return true;
}

// ---------- abrir / cerrar ----------
function open(){
  cacheDom();
  isOpen = true;
  syncMode();
  el.overlay.hidden = false;
  document.body.classList.add('nb-open');
  render();
}
function close(){
  isOpen = false;
  save(true);
  el.overlay.hidden = true;
  document.body.classList.remove('nb-open');
  hideResults();
}

// ---------- arranque ----------
function init(){
  cacheDom();
  if(!el.overlay) return;
  load();
  twoUp = window.matchMedia('(min-width: 901px)').matches;

  document.getElementById('notebookBtn').addEventListener('click', open);
  document.getElementById('nbClose').addEventListener('click', close);
  el.btnPrev.addEventListener('click', ()=> flip(-1));
  el.btnNext.addEventListener('click', ()=> flip(1));
  document.getElementById('nbAddPage').addEventListener('click', addPage);
  document.getElementById('nbDelPage').addEventListener('click', deletePage);

  bindEditing(el.leftPaper,  ()=> leftIdx());
  bindEditing(el.rightPaper, ()=> rightIdx());

  // arrastre desde los laterales
  [[el.edgeNext, 1], [el.edgePrev, -1]].forEach(([node, dir])=>{
    node.addEventListener('pointerdown', e=> startDrag(e, dir));
    node.addEventListener('pointermove', moveDrag);
    node.addEventListener('pointerup', endDrag);
    node.addEventListener('pointercancel', endDrag);
  });

  // buscador
  let searchTimer = null;
  el.search.addEventListener('input', ()=>{
    clearTimeout(searchTimer);
    searchTimer = setTimeout(()=> runSearch(el.search.value), 180);
  });
  el.search.addEventListener('focus', ()=>{ if(el.search.value.trim().length >= 2) runSearch(el.search.value); });
  document.addEventListener('click', (e)=>{
    if(isOpen && !e.target.closest('.nb-search-wrap')) hideResults();
  });

  // teclado
  document.addEventListener('keydown', (e)=>{
    if(!isOpen) return;
    if(e.key === 'Escape'){ close(); return; }
    const typing = e.target.isContentEditable || e.target.tagName === 'INPUT';
    if(typing) return;
    if(e.key === 'ArrowRight') flip(1);
    if(e.key === 'ArrowLeft')  flip(-1);
  });

  window.addEventListener('resize', ()=>{
    if(!isOpen) return;
    if(syncMode()) render();
  });
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

})();
