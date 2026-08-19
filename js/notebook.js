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

// ---------- contenido inicial de la libreta ----------
// Se escribe solo si la libreta está vacía: nunca sobrescribe notas propias.
const NB_SEED = [

// ---- página 1 ----
'<div><b>ANTIBIÓTICOS EN LA NEUTROPENIA FEBRIL</b></div>' +
'<div><br></div>' +
'<div><b>Definición</b></div>' +
'<div>Neutrófilos &lt;500/µL (o &lt;1000 con descenso previsto a &lt;500 en 48h)</div>' +
'<div>+ Tª ≥38.3ºC aislada o ≥38ºC mantenida ≥1h.</div>' +
'<div><br></div>' +
'<div><b>Lo primero (primera hora)</b></div>' +
'<div>· Hemocultivos: 2 sets — periférico + cada luz del catéter.</div>' +
'<div>· Antibiótico IV en la 1ª hora. NO esperar a los cultivos.</div>' +
'<div>· Foco: piel/catéter, boca (mucositis), perianal (no tacto rectal),</div>' +
'<div>&nbsp;&nbsp;pulmón, orina, abdomen. Rx tórax si clínica respiratoria.</div>' +
'<div><br></div>' +
'<div><b>Alto riesgo → ingreso + monoterapia antipseudomónica</b></div>' +
'<div>· Piperacilina-tazobactam 4/0.5 g IV c/6-8h</div>' +
'<div>· Cefepime 2 g IV c/8h</div>' +
'<div>· Meropenem 1 g IV c/8h (si sepsis, BLEE previa o alergia)</div>' +
'<div><br></div>' +
'<div><b>Añadir cobertura Gram+ SOLO si:</b></div>' +
'<div>· Inestabilidad hemodinámica / sepsis</div>' +
'<div>· Sospecha de infección del catéter</div>' +
'<div>· Infección de piel y partes blandas</div>' +
'<div>· Mucositis grave</div>' +
'<div>· Colonización conocida por SARM / neumococo resistente</div>' +
'<div>· Hemocultivo + para Gram+ pendiente de identificar</div>' +
'<div>→ Vancomicina (o daptomicina / linezolid).</div>' +
'<div>→ Retirar a las 48-72h si los cultivos no lo confirman.</div>' +
'<div><br></div>' +
'<div><b>Bajo riesgo (MASCC ≥21) → ambulatorio VO</b></div>' +
'<div>Ciprofloxacino + amoxicilina-clavulánico, con control estrecho.</div>' +
'<div>(No si profilaxis previa con quinolonas.)</div>' +
'<div><br></div>' +
'<div><b>Antifúngico empírico</b></div>' +
'<div>Fiebre persistente &gt;4-7 días pese a antibiótico de amplio espectro</div>' +
'<div>con neutropenia prolongada → caspofungina / L-anfotericina B /</div>' +
'<div>voriconazol. TC de tórax + galactomanano.</div>' +
'<div>OJO: azoles ↑ niveles de anticalcineurínicos y ↑ QT.</div>' +
'<div><br></div>' +
'<div><b>Duración</b></div>' +
'<div>Hasta apirexia + neutrófilos &gt;500, o completar el tratamiento del</div>' +
'<div>foco documentado. Desescalar en cuanto haya cultivos.</div>',

// ---- página 2 ----
'<div><b>CASCADA DE COAGULACIÓN Y DIANA DE LOS FÁRMACOS</b></div>' +
'<div><br></div>' +
'<div><b>Vía intrínseca</b> (mide el TTPa)</div>' +
'<div>XII → XI → IX + VIII ↘</div>' +
'<div><b>Vía extrínseca</b> (mide el TP / INR)</div>' +
'<div>Factor tisular + VII ↘</div>' +
'<div><b>Vía común</b></div>' +
'<div>X + V → protrombina (II) → TROMBINA (IIa)</div>' +
'<div>→ fibrinógeno (I) → FIBRINA → XIII la estabiliza</div>' +
'<div><br></div>' +
'<div><b>¿Dónde actúa cada fármaco?</b></div>' +
'<div><br></div>' +
'<div>· <b>HNF</b> → potencia antitrombina: inhibe IIa y Xa por igual.</div>' +
'<div>&nbsp;&nbsp;Control TTPa · antídoto protamina.</div>' +
'<div>· <b>HBPM</b> → antitrombina, sobre todo anti-Xa.</div>' +
'<div>&nbsp;&nbsp;Control anti-Xa · protamina revierte solo parcialmente.</div>' +
'<div>· <b>Fondaparinux</b> → anti-Xa puro. Sin antídoto directo.</div>' +
'<div>· <b>Warfarina / acenocumarol</b> → inhiben VKORC1:</div>' +
'<div>&nbsp;&nbsp;↓ factores II, VII, IX, X + proteínas C y S.</div>' +
'<div>&nbsp;&nbsp;Control INR · antídoto vitamina K + CCP.</div>' +
'<div>· <b>Rivaroxabán / apixabán / edoxabán</b> → inhiben Xa directo.</div>' +
'<div>&nbsp;&nbsp;Antídoto andexanet alfa (o CCP si no hay).</div>' +
'<div>· <b>Dabigatrán</b> → inhibe IIa (trombina) directo.</div>' +
'<div>&nbsp;&nbsp;Antídoto idarucizumab.</div>' +
'<div>· <b>Argatrobán / bivalirudina</b> → inhiben IIa directo.</div>' +
'<div>&nbsp;&nbsp;De elección en la HIT.</div>' +
'<div><br></div>' +
'<div><b>Para no olvidar</b></div>' +
'<div>· Vitamina K = factores 1972 (X, IX, VII, II) + PC y PS.</div>' +
'<div>· El VII tiene la vida media más corta (~6h): el INR sube antes de</div>' +
'<div>&nbsp;&nbsp;que haya anticoagulación real.</div>' +
'<div>· Al inicio de la warfarina cae antes la proteína C → estado</div>' +
'<div>&nbsp;&nbsp;protrombótico transitorio (necrosis cutánea) → puentear con</div>' +
'<div>&nbsp;&nbsp;heparina ≥5 días y hasta INR en rango 2 días seguidos.</div>',

// ---- página 3 ----
'<div><b>ANTICOAGULANTES</b></div>' +
'<div>mecanismo · indicaciones · dosis · contraindicaciones</div>' +
'<div><br></div>' +
'<div><b>HNF</b> — antitrombina (IIa = Xa)</div>' +
'<div>Bolo 80 U/kg + perfusión 18 U/kg/h; TTPa 1.5-2.5x basal.</div>' +
'<div>Útil si: insuficiencia renal grave, alto riesgo de sangrado,</div>' +
'<div>periprocedimiento (vida media corta, reversible).</div>' +
'<div>CI: HIT previa, sangrado activo.</div>' +
'<div><br></div>' +
'<div><b>Enoxaparina</b> — HBPM, anti-Xa</div>' +
'<div>Profilaxis 40 mg/24h SC · Tratamiento 1 mg/kg/12h</div>' +
'<div>o 1.5 mg/kg/24h. Si ClCr &lt;30: 1 mg/kg/24h.</div>' +
'<div>CI: ClCr &lt;15 o diálisis (usar HNF), sangrado activo, HIT.</div>' +
'<div><br></div>' +
'<div><b>Fondaparinux</b> — anti-Xa puro</div>' +
'<div>Profilaxis 2.5 mg/24h · Tratamiento 7.5 mg/24h</div>' +
'<div>(5 mg si &lt;50 kg; 10 mg si &gt;100 kg).</div>' +
'<div>Alternativa en la HIT. CI: ClCr &lt;30.</div>' +
'<div><br></div>' +
'<div><b>Acenocumarol / warfarina</b> — anti-vitamina K</div>' +
'<div>Objetivo INR 2-3 (2.5-3.5 en válvula mecánica mitral).</div>' +
'<div>Indicaciones donde el ACOD NO vale: SAF triple positivo,</div>' +
'<div>válvula mecánica, estenosis mitral moderada-grave.</div>' +
'<div>CI: embarazo (1er trimestre y periparto). Muchas interacciones.</div>' +
'<div><br></div>' +
'<div><b>ACOD</b></div>' +
'<div>· Apixabán: ETV 10 mg/12h × 7d → 5 mg/12h.</div>' +
'<div>&nbsp;&nbsp;FA 5 mg/12h (2.5 si 2 de 3: ≥80a, ≤60 kg, Cr ≥1.5).</div>' +
'<div>· Rivaroxabán: 15 mg/12h × 21d → 20 mg/24h con comida.</div>' +
'<div>· Edoxabán: 60 mg/24h tras ≥5 días de heparina</div>' +
'<div>&nbsp;&nbsp;(30 mg si ClCr 15-50, ≤60 kg o inhibidor de P-gp).</div>' +
'<div>· Dabigatrán: 150 mg/12h tras ≥5 días de heparina.</div>' +
'<div>CI comunes: SAF triple +, válvula mecánica, estenosis mitral</div>' +
'<div>moderada-grave, embarazo/lactancia, ClCr muy bajo.</div>' +
'<div><br></div>' +
'<div><b>En el paciente onco-hematológico</b></div>' +
'<div>· ETV asociada a cáncer: HBPM o ACOD (apixabán, edoxabán,</div>' +
'<div>&nbsp;&nbsp;rivaroxabán). Cuidado con tumores GI/GU no resecados.</div>' +
'<div>· Trombopenia: &gt;50k dosis plena · 25-50k individualizar o</div>' +
'<div>&nbsp;&nbsp;reducir · &lt;25k suspender y valorar filtro de cava si TEV</div>' +
'<div>&nbsp;&nbsp;muy reciente.</div>' +
'<div>· HIT: suspender TODA heparina (también los lavados de vía) →</div>' +
'<div>&nbsp;&nbsp;argatrobán o fondaparinux. Nunca dejar solo antiagregado.</div>',

// ---- página 4 ----
'<div><b>ANTIAGREGANTES</b></div>' +
'<div>mecanismo · indicaciones · dosis · contraindicaciones</div>' +
'<div><br></div>' +
'<div><b>AAS</b> — inhibe COX-1 irreversible → ↓ tromboxano A2</div>' +
'<div>75-100 mg/24h (carga 250-300 mg en el SCA).</div>' +
'<div>Prevención secundaria CV, SCA, ictus isquémico.</div>' +
'<div>Efecto durante toda la vida de la plaqueta (7-10 días).</div>' +
'<div>CI: alergia, sangrado activo, úlcera péptica activa.</div>' +
'<div><br></div>' +
'<div><b>Clopidogrel</b> — bloquea P2Y12, irreversible</div>' +
'<div>Profármaco: necesita CYP2C19 (mala respuesta si alelo perdedor;</div>' +
'<div>ojo con omeprazol, mejor pantoprazol).</div>' +
'<div>Carga 300-600 mg → 75 mg/24h. Suspender 5 días antes de cirugía.</div>' +
'<div><br></div>' +
'<div><b>Prasugrel</b> — P2Y12 irreversible, más potente y rápido</div>' +
'<div>Carga 60 mg → 10 mg/24h (5 mg si &gt;75 años o &lt;60 kg).</div>' +
'<div>CI: ictus o AIT previo. Suspender 7 días.</div>' +
'<div><br></div>' +
'<div><b>Ticagrelor</b> — P2Y12 reversible, no es profármaco</div>' +
'<div>Carga 180 mg → 90 mg/12h. Suspender 3-5 días.</div>' +
'<div>Efectos: disnea, pausas/bradicardia, ↑ ácido úrico.</div>' +
'<div>No asociar con AAS a dosis &gt;100 mg/24h.</div>' +
'<div><br></div>' +
'<div><b>Inhibidores GP IIb/IIIa</b> — abciximab, tirofibán, eptifibatida</div>' +
'<div>Bloquean la vía final de la agregación. IV, en ICP o alta carga</div>' +
'<div>trombótica. Pueden dar trombopenia aguda grave (vigilar a las 2-4h).</div>' +
'<div><br></div>' +
'<div><b>Doble antiagregación (DAPT)</b></div>' +
'<div>AAS + inhibidor P2Y12; la duración depende del stent y del SCA.</div>' +
'<div>Nunca suspender por cuenta propia tras un stent reciente:</div>' +
'<div>consultar SIEMPRE con cardiología.</div>' +
'<div><br></div>' +
'<div><b>En el paciente onco-hematológico</b></div>' +
'<div>· No hay antídoto: si sangrado grave → transfusión de plaquetas</div>' +
'<div>&nbsp;&nbsp;(poco eficaz con ticagrelor, porque circula libre y bloquea</div>' +
'<div>&nbsp;&nbsp;también las plaquetas transfundidas).</div>' +
'<div>· Umbrales orientativos con trombopenia: AAS suele mantenerse</div>' +
'<div>&nbsp;&nbsp;con &gt;10-20k; la DAPT requiere &gt;30-50k. Individualizar.</div>' +
'<div>· Si hay que hacer un procedimiento, valorar riesgo trombótico</div>' +
'<div>&nbsp;&nbsp;del stent frente al hemorrágico: decisión conjunta.</div>'
];

function isBlankNotebook(arr){
  return !arr || !arr.some(p => (p||'').replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim().length);
}

// ---------- estado ----------
function load(){
  try{
    const raw = store.getItem(NB_KEY);
    if(raw){
      const data = JSON.parse(raw);
      if(Array.isArray(data.pages) && data.pages.length){
        pages = data.pages;
        pos = Math.max(0, data.pos|0);
        // libreta creada pero aún sin escribir nada → sembrar contenido
        if(isBlankNotebook(pages)){ pages = NB_SEED.slice(); pos = 0; save(true); }
        return;
      }
    }
  }catch(e){}
  pages = NB_SEED.slice();
  pos = 0;
}
let saveTimer = null;
function save(now){
  clearTimeout(saveTimer);
  const doIt = ()=> store.setItem(NB_KEY, JSON.stringify({pages, pos, v:1}));
  if(now) doIt(); else saveTimer = setTimeout(doIt, 400);
}

// ---------- índices ----------
// pos 0 = portada (una sola hoja, a la derecha, como un libro cerrado).
// pos >= 1 = pliego: izquierda 2*pos-3 · derecha 2*pos-2 (móvil: pos-1).
const COVER = -1000; // marca de portada (fuera del rango de páginas)
const NONE  = -999;  // no hay hoja

const COVER_HTML =
  '<div class="nb-cover">' +
    '<div class="nb-cover-line"></div>' +
    '<div class="nb-cover-title">Notebook</div>' +
    '<div class="nb-cover-sub">David Montalvo · rotatorio</div>' +
    '<div class="nb-cover-line"></div>' +
  '</div>';

function isCoverIdx(i){ return i === COVER; }
function leftIdx(){ return (twoUp && pos >= 1) ? (2*pos - 3) : NONE; }
function rightIdx(){ return pos === 0 ? COVER : (twoUp ? (2*pos - 2) : (pos - 1)); }
function maxPos(){ return twoUp ? (Math.floor(pages.length/2) + 1) : pages.length; }
function canNext(){ return pos < maxPos(); }
function canPrev(){ return pos > 0; }
function focusedIdx(){
  if(pos === 0) return 0;
  return Math.min(Math.max(0, rightIdx()), pages.length - 1);
}
// ¿en qué pos queda visible la página i?
function posForPage(i){
  if(!twoUp) return i + 1;
  return (i % 2 === 0) ? (i/2 + 1) : ((i + 3)/2);
}

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
  el.fmt       = document.getElementById('nbFmt');
}

// ---------- pintado ----------
function paperHtml(i){
  if(isCoverIdx(i)) return COVER_HTML;
  return (i >= 0 && i < pages.length) ? (pages[i] || '') : null;
}

// Aplica contenido + estado a una cara (hoja visible o cara que gira)
function paintPaper(paperEl, folioEl, sideEl, idx, editable){
  const html = paperHtml(idx);
  const cover = isCoverIdx(idx);
  if(sideEl) sideEl.classList.toggle('is-blank', html === null);
  paperEl.classList.toggle('is-cover', cover);
  paperEl.innerHTML = html || '';
  paperEl.contentEditable = (editable && html !== null && !cover) ? 'true' : 'false';
  if(folioEl) folioEl.textContent = (html !== null && !cover) ? (idx + 1) : '';
}

function render(){
  const li = leftIdx(), ri = rightIdx();
  paintPaper(el.leftPaper,  el.leftFolio,  el.leftSide,  li, true);
  paintPaper(el.rightPaper, el.rightFolio, el.rightSide, ri, true);

  el.btnPrev.disabled = !canPrev();
  el.btnNext.disabled = !canNext();
  el.edgePrev.classList.toggle('is-off', !canPrev());
  el.edgeNext.classList.toggle('is-off', !canNext());

  const total = pages.length;
  const lh = paperHtml(li), rh = paperHtml(ri);
  if(pos === 0){
    el.counter.innerHTML = '<b>portada</b> / ' + total;
  }else if(twoUp && lh !== null && rh !== null){
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

// Índices que se ven en una posición dada (sin tocar el estado)
function idxAt(p, side){
  if(side === 'right') return p === 0 ? COVER : (twoUp ? (2*p - 2) : (p - 1));
  return (twoUp && p >= 1) ? (2*p - 3) : NONE;
}

// prepara la hoja que gira; dir: 1 = avanzar, -1 = retroceder
function prepareFlip(dir){
  const target = pos + dir;
  let frontIdx, backIdx;

  if(dir === 1){
    // gira la hoja de la derecha: su cara es lo que hay ahora, su dorso lo que
    // quedará a la izquierda al terminar
    frontIdx = idxAt(pos, 'right');
    backIdx  = twoUp ? idxAt(target, 'left') : NONE;
    // debajo asoma ya la página que quedará a la derecha
    paintPaper(el.rightPaper, el.rightFolio, el.rightSide, idxAt(target, 'right'), false);
  }else{
    // vuelve la hoja anterior: acaba en la derecha, y su dorso es la izquierda actual
    frontIdx = idxAt(target, 'right');
    backIdx  = twoUp ? idxAt(pos, 'left') : NONE;
    if(twoUp) paintPaper(el.leftPaper, el.leftFolio, el.leftSide, idxAt(target, 'left'), false);
  }

  paintPaper(el.flipFront.querySelector('.nb-paper'), el.flipFront.querySelector('.nb-folio'), null, frontIdx, false);
  paintPaper(el.flipBack.querySelector('.nb-paper'),  el.flipBack.querySelector('.nb-folio'),  null, backIdx,  false);
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
  if(el.fmt) el.fmt.hidden = true;

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
  pos = posForPage(i);
  render();
}

// ---------- páginas ----------
function addPage(){
  if(animating) return;
  const i = pages.length;
  pages.push('');
  save(true);
  goToPage(i);
  // enfoca la hoja donde haya caído la página nueva
  setTimeout(()=>{
    const target = (leftIdx() === i) ? el.leftPaper : el.rightPaper;
    if(target.isContentEditable) target.focus();
  }, 60);
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

// ---------- formato: negrita, cursiva, subrayado de color, tablas ----------
const HL = {
  amarillo:'rgba(255,209,102,0.30)',
  verde:   'rgba(0,255,156,0.24)',
  azul:    'rgba(0,200,255,0.26)',
  rosa:    'rgba(255,107,107,0.28)'
};
let lastRange = null;

function inPaper(node){
  while(node && node !== document){
    if(node.classList && node.classList.contains('nb-paper') && node.isContentEditable) return node;
    node = node.parentNode;
  }
  return null;
}

function rememberSelection(){
  const sel = window.getSelection();
  if(sel && sel.rangeCount) lastRange = sel.getRangeAt(0).cloneRange();
}
function restoreSelection(){
  if(!lastRange) return;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(lastRange);
}

function exec(cmd, val){
  restoreSelection();
  try{ document.execCommand('styleWithCSS', false, true); }catch(e){}
  document.execCommand(cmd, false, val || null);
  rememberSelection();
  syncPaperToModel();
}

// vuelca lo editado al modelo (tras cualquier comando de formato)
function syncPaperToModel(){
  const li = leftIdx(), ri = rightIdx();
  if(el.leftPaper.isContentEditable  && li >= 0 && li < pages.length) pages[li] = el.leftPaper.innerHTML;
  if(el.rightPaper.isContentEditable && ri >= 0 && ri < pages.length) pages[ri] = el.rightPaper.innerHTML;
  save();
}

function positionToolbar(){
  const sel = window.getSelection();
  if(!sel || !sel.rangeCount) return;
  const rect = sel.getRangeAt(0).getBoundingClientRect();
  if(!rect.width && !rect.height) return;
  const bar = el.fmt;
  bar.hidden = false;
  const bw = bar.offsetWidth, bh = bar.offsetHeight;
  let x = rect.left + rect.width/2 - bw/2;
  let y = rect.top - bh - 10;
  x = Math.max(8, Math.min(window.innerWidth - bw - 8, x));
  if(y < 8) y = rect.bottom + 10;
  bar.style.left = x + 'px';
  bar.style.top  = y + 'px';
}

function updateToolbar(){
  const sel = window.getSelection();
  if(!sel || sel.isCollapsed || !sel.rangeCount){ el.fmt.hidden = true; return; }
  if(!inPaper(sel.anchorNode) || !inPaper(sel.focusNode)){ el.fmt.hidden = true; return; }
  rememberSelection();
  positionToolbar();
}

// ---- tablas ----
function insertTable(){
  const paper = document.activeElement && inPaper(document.activeElement) ? document.activeElement : null;
  const target = paper || (el.rightPaper.isContentEditable ? el.rightPaper : el.leftPaper);
  if(!target || !target.isContentEditable){ return; }
  target.focus();
  if(lastRange && inPaper(lastRange.startContainer)) restoreSelection();
  const cell = '<td><br></td>';
  const row  = '<tr>' + cell.repeat(3) + '</tr>';
  const html = '<table class="nb-table"><tbody>' + row.repeat(3) + '</tbody></table><div><br></div>';
  document.execCommand('insertHTML', false, html);
  syncPaperToModel();
}

// Tab dentro de una tabla: siguiente celda; en la última, crea fila nueva.
function tableTab(e){
  const sel = window.getSelection();
  if(!sel.rangeCount) return false;
  let node = sel.anchorNode;
  while(node && node.nodeName !== 'TD') node = node.parentNode;
  if(!node) return false;
  e.preventDefault();
  const cells = [...node.closest('table').querySelectorAll('td')];
  let i = cells.indexOf(node) + (e.shiftKey ? -1 : 1);
  if(i >= cells.length){
    const tr = node.closest('tr');
    const nueva = tr.cloneNode(true);
    nueva.querySelectorAll('td').forEach(td=> td.innerHTML = '<br>');
    tr.parentNode.appendChild(nueva);
    placeCaret(nueva.querySelector('td'));
    syncPaperToModel();
    return true;
  }
  if(i < 0) i = 0;
  placeCaret(cells[i]);
  return true;
}
function placeCaret(td){
  const r = document.createRange();
  r.selectNodeContents(td);
  r.collapse(true);
  const s = window.getSelection();
  s.removeAllRanges();
  s.addRange(r);
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
  if(el.fmt) el.fmt.hidden = true;
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

  // ---- barra de formato flotante ----
  document.getElementById('nbTable').addEventListener('click', insertTable);
  document.addEventListener('selectionchange', ()=>{ if(isOpen) updateToolbar(); });
  el.fmt.addEventListener('mousedown', e=> e.preventDefault()); // no robar el foco
  el.fmt.addEventListener('click', (e)=>{
    const b = e.target.closest('button');
    if(!b) return;
    if(b.dataset.cmd) exec(b.dataset.cmd);
    else if(b.dataset.hl) exec('hiliteColor', b.dataset.hl === 'none' ? 'transparent' : HL[b.dataset.hl]);
  });

  // Tab dentro de tablas + atajos de formato
  [el.leftPaper, el.rightPaper].forEach(p=>{
    p.addEventListener('keydown', (e)=>{
      if(e.key === 'Tab' && tableTab(e)) return;
      if((e.ctrlKey || e.metaKey) && !e.shiftKey){
        const k = e.key.toLowerCase();
        if(k === 'b' || k === 'i'){
          e.preventDefault();
          rememberSelection();
          exec(k === 'b' ? 'bold' : 'italic');
        }
      }
    });
  });

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
