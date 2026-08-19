// =============================================================
// HOME — archivador clínico (pantalla de inicio)
// Se apoya en SPECIALTIES (js/specialties.js) y en activateTab()
// =============================================================
(function(){
'use strict';

// Iconos de línea, uno por especialidad. Trazo simple, hereda el color.
const ICONS = {
  nefrologia:
    '<path d="M14 3.4c-5 0-8.6 4.3-8.6 9.3 0 4.5 3.2 7.9 7.4 7.9 2.7 0 4.7-1.9 4.7-4.4 0-1.8-1.2-3-2.8-3-1.1 0-2 .6-2.3 1.5"/>' +
    '<path d="M12.6 12.8H9.8"/>',
  cardiologia:
    '<path d="M12 20.3l-1.1-1C6.1 15 3 12.2 3 8.8 3 6.1 5.1 4 7.8 4c1.5 0 3 .7 4.2 2C13.2 4.7 14.7 4 16.2 4 18.9 4 21 6.1 21 8.8c0 3.4-3.1 6.2-7.9 10.5l-1.1 1z"/>',
  neumologia:
    '<path d="M12 3v9"/>' +
    '<path d="M12 7.5c-1.7 0-2.7 1-3.1 2.4l-2.2 7c-.5 1.6.7 3.2 2.4 3.2H10c1.1 0 2-.9 2-2V7.5z"/>' +
    '<path d="M12 7.5c1.7 0 2.7 1 3.1 2.4l2.2 7c.5 1.6-.7 3.2-2.4 3.2H14c-1.1 0-2-.9-2-2V7.5z"/>',
  infecciosas:
    '<circle cx="12" cy="12" r="5.4"/>' +
    '<path d="M12 2.4v3.1M12 18.5v3.1M2.4 12h3.1M18.5 12h3.1M5.2 5.2l2.2 2.2M16.6 16.6l2.2 2.2M18.8 5.2l-2.2 2.2M7.4 16.6l-2.2 2.2"/>',
  interna:
    '<path d="M6 3v5.2a4 4 0 0 0 8 0V3"/>' +
    '<path d="M6 3H4.4M14 3h1.6"/>' +
    '<path d="M10 12.2v2.6a4 4 0 0 0 8 0v-1.6"/>' +
    '<circle cx="18" cy="11" r="2.1"/>',
  coagulacion:
    '<path d="M12 3.4s5.6 6.2 5.6 9.7a5.6 5.6 0 0 1-11.2 0C6.4 9.6 12 3.4 12 3.4z"/>' +
    '<path d="M9.2 13.4h5.6M10.4 16h3.2"/>',
  bancosangre:
    '<rect x="6" y="6.2" width="12" height="13.8" rx="3"/>' +
    '<path d="M10 3.2h4v3h-4z"/>' +
    '<path d="M12 10.6s2.2 2.6 2.2 4a2.2 2.2 0 0 1-4.4 0c0-1.4 2.2-4 2.2-4z"/>'
};

const TAB_X = ['9%', '34%', '58%'];

let homeEl, cabinetEl, detailEl, openId = null;

function icon(id){
  return '<svg class="folder-icon" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[id] || '') + '</svg>';
}

function sectionCount(spec){
  const n = collectLeafIds(spec.tree).length;
  return n <= 1 ? 'en preparación' : (n + ' apartados');
}

function buildFolders(){
  cabinetEl.innerHTML = '';
  SPECIALTIES.forEach((spec, i)=>{
    const btn = document.createElement('button');
    btn.className = 'folder';
    btn.dataset.id = spec.id;
    btn.style.setProperty('--tab-x', TAB_X[i % TAB_X.length]);
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
      '<span class="folder-back"></span>' +
      '<span class="folder-tab">' + spec.label + '</span>' +
      '<span class="folder-front">' +
        icon(spec.id) +
        '<span class="folder-txt">' +
          '<span class="folder-name">' + spec.title + '</span>' +
          '<span class="folder-meta">' + sectionCount(spec) + '</span>' +
        '</span>' +
      '</span>';
    btn.addEventListener('click', ()=> toggleFolder(spec.id));
    cabinetEl.appendChild(btn);
  });
}

function toggleFolder(id){
  const spec = SPECIALTIES.find(s=> s.id === id);
  if(!spec) return;

  if(openId === id){ closeDetail(); return; }
  openId = id;

  cabinetEl.querySelectorAll('.folder').forEach(f=>{
    const on = f.dataset.id === id;
    f.classList.toggle('is-open', on);
    f.setAttribute('aria-expanded', on ? 'true' : 'false');
  });

  detailEl.querySelector('.folder-detail-title').textContent = spec.title;
  detailEl.querySelector('.folder-detail-desc').textContent = spec.desc;
  detailEl.querySelector('.folder-open-btn').firstChild.textContent = 'Abrir ' + spec.title + ' ';
  detailEl.classList.add('is-open');
}

function closeDetail(){
  openId = null;
  cabinetEl.querySelectorAll('.folder').forEach(f=>{
    f.classList.remove('is-open');
    f.setAttribute('aria-expanded', 'false');
  });
  detailEl.classList.remove('is-open');
}

// ---- navegación entre la home y el área de estudio ----
function enterSpecialty(id){
  if(!id) return;
  homeEl.hidden = true;
  activateTab(id);
  window.scrollTo({top:0, behavior:'instant'});
}
function goHome(){
  homeEl.hidden = false;
  closeDetail();
}
window.goHome = goHome;

function init(){
  homeEl    = document.getElementById('home');
  cabinetEl = document.getElementById('cabinet');
  detailEl  = document.getElementById('folderDetail');
  if(!homeEl || !cabinetEl) return;

  buildFolders();

  detailEl.querySelector('.folder-open-btn').addEventListener('click', ()=> enterSpecialty(openId));
  document.getElementById('homeNotebook').addEventListener('click', ()=>{
    document.getElementById('notebookBtn').click();
  });
  document.getElementById('homeFavs').addEventListener('click', ()=>{
    enterSpecialty(openId || SPECIALTIES[0].id);
    setTimeout(()=> document.getElementById('favBtn').click(), 60);
  });
  document.getElementById('backHome').addEventListener('click', goHome);

  // Esc cierra el detalle abierto
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !homeEl.hidden && openId) closeDetail();
  });
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

})();
