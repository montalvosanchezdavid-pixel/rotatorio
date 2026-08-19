// =============================================================
// WIDGETS — componentes interactivos reutilizables por el contenido
//   matrix → matriz de cobertura (antibióticos, compatibilidad ABO…)
//   picker → selector de fichas con panel de detalle
// El contenido solo pone el marcador; aquí se construye al abrir el apartado.
// =============================================================

function initWidgets(root){
  if(!root) return;
  root.querySelectorAll('[data-widget="matrix"]').forEach(buildMatrix);
  root.querySelectorAll('[data-widget="picker"]').forEach(buildPicker);
}

/* ---------------------------------------------------------
   MATRIZ DE COBERTURA
   data = { caption, cols:[{k,label,group}], rows:[{k,label,family,note,cov:{colKey:0|1|2}}],
            legend:{0,1,2} }
   --------------------------------------------------------- */
function buildMatrix(host){
  const data = WIDGET_DATA[host.dataset.src];
  if(!data){ host.innerHTML = '<p class="comment">// datos no encontrados</p>'; return; }
  host.innerHTML = '';
  host.classList.add('mx-host');

  const legend = data.legend || {2:'Cubre', 1:'Variable', 0:'No cubre'};
  // etiquetas del panel de detalle (configurables por widget)
  const L = Object.assign({rowYes:'Cubre:', rowMaybe:'Variable:', colYes:'Lo cubren:', colMaybe:'Variable:'}, data.labels || {});

  const wrap = document.createElement('div');
  wrap.className = 'mx-wrap';

  // barra superior: leyenda + buscador
  const bar = document.createElement('div');
  bar.className = 'mx-bar';
  bar.innerHTML =
    '<div class="mx-legend">' +
      '<span><i class="mx-dot lv2"></i>' + legend[2] + '</span>' +
      '<span><i class="mx-dot lv1"></i>' + legend[1] + '</span>' +
      '<span><i class="mx-dot lv0"></i>' + legend[0] + '</span>' +
    '</div>' +
    '<input class="mx-search" type="search" placeholder="filtrar…" spellcheck="false">';
  wrap.appendChild(bar);

  // tabla
  const scroll = document.createElement('div');
  scroll.className = 'mx-scroll';
  const table = document.createElement('table');
  table.className = 'mx-table';

  // cabecera con grupos
  const thead = document.createElement('thead');
  if(data.cols.some(c=>c.group)){
    const trG = document.createElement('tr');
    trG.className = 'mx-grouprow';
    trG.innerHTML = '<th class="mx-corner"></th>';
    let i = 0;
    while(i < data.cols.length){
      const g = data.cols[i].group || '';
      let span = 1;
      while(i + span < data.cols.length && (data.cols[i+span].group || '') === g) span++;
      const th = document.createElement('th');
      th.colSpan = span;
      th.textContent = g;
      trG.appendChild(th);
      i += span;
    }
    thead.appendChild(trG);
  }
  const trH = document.createElement('tr');
  trH.innerHTML = '<th class="mx-corner">' + (data.caption || '') + '</th>';
  data.cols.forEach(c=>{
    const th = document.createElement('th');
    th.className = 'mx-colh';
    th.dataset.col = c.k;
    th.innerHTML = '<span>' + c.label + '</span>';
    th.title = (data.colTitle || 'Ver detalle de ') + c.label;
    th.onclick = ()=> selectCol(c.k);
    trH.appendChild(th);
  });
  thead.appendChild(trH);
  table.appendChild(thead);

  // filas
  const tbody = document.createElement('tbody');
  data.rows.forEach(r=>{
    const tr = document.createElement('tr');
    tr.dataset.row = r.k;
    const th = document.createElement('th');
    th.className = 'mx-rowh';
    th.innerHTML = '<span class="mx-rowname">' + r.label + '</span>' +
                   (r.family ? '<span class="mx-fam">' + r.family + '</span>' : '');
    th.onclick = ()=> selectRow(r.k);
    tr.appendChild(th);
    data.cols.forEach(c=>{
      const v = (r.cov && r.cov[c.k] !== undefined) ? r.cov[c.k] : 0;
      const td = document.createElement('td');
      td.className = 'mx-cell lv' + v;
      td.dataset.col = c.k;
      td.title = r.label + ' · ' + c.label + ' — ' + legend[v];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  scroll.appendChild(table);
  wrap.appendChild(scroll);

  // panel de detalle
  const info = document.createElement('div');
  info.className = 'mx-info';
  info.innerHTML = '<span class="mx-info-hint">' +
    (data.hint || 'Pulsa una fila (izquierda) o una columna (arriba) para verla destacada.') + '</span>';
  wrap.appendChild(info);
  host.appendChild(wrap);

  function clearSel(){
    table.querySelectorAll('.is-rowsel').forEach(e=>e.classList.remove('is-rowsel'));
    table.querySelectorAll('.is-colsel').forEach(e=>e.classList.remove('is-colsel'));
  }

  function selectRow(key){
    const r = data.rows.find(x=>x.k===key);
    clearSel();
    const tr = tbody.querySelector('tr[data-row="'+key+'"]');
    if(tr) tr.classList.add('is-rowsel');
    const cubre = data.cols.filter(c=> (r.cov&&r.cov[c.k])===2).map(c=>c.label);
    const parcial = data.cols.filter(c=> (r.cov&&r.cov[c.k])===1).map(c=>c.label);
    info.innerHTML =
      '<strong>' + r.label + '</strong>' + (r.family ? ' <em>· ' + r.family + '</em>' : '') +
      (r.note ? '<div class="mx-note">' + r.note + '</div>' : '') +
      '<div class="mx-list"><b>' + L.rowYes + '</b> ' + (cubre.length ? cubre.join(' · ') : '—') + '</div>' +
      (parcial.length ? '<div class="mx-list mx-list--v"><b>' + L.rowMaybe + '</b> ' + parcial.join(' · ') + '</div>' : '');
  }

  function selectCol(key){
    const c = data.cols.find(x=>x.k===key);
    clearSel();
    table.querySelectorAll('[data-col="'+key+'"]').forEach(e=>e.classList.add('is-colsel'));
    const activos = data.rows.filter(r=> (r.cov&&r.cov[key])===2).map(r=>r.label);
    const parcial = data.rows.filter(r=> (r.cov&&r.cov[key])===1).map(r=>r.label);
    info.innerHTML =
      '<strong>' + c.label + '</strong>' + (c.group ? ' <em>· ' + c.group + '</em>' : '') +
      (c.note ? '<div class="mx-note">' + c.note + '</div>' : '') +
      '<div class="mx-list"><b>' + L.colYes + '</b> ' + (activos.length ? activos.join(' · ') : '—') + '</div>' +
      (parcial.length ? '<div class="mx-list mx-list--v"><b>' + L.colMaybe + '</b> ' + parcial.join(' · ') + '</div>' : '');
  }

  // filtro
  bar.querySelector('.mx-search').addEventListener('input', (e)=>{
    const q = e.target.value.trim().toLowerCase();
    tbody.querySelectorAll('tr').forEach(tr=>{
      const name = tr.querySelector('.mx-rowname').textContent.toLowerCase();
      const fam = (tr.querySelector('.mx-fam') || {textContent:''}).textContent.toLowerCase();
      tr.hidden = q.length > 0 && !name.includes(q) && !fam.includes(q);
    });
  });
}

/* ---------------------------------------------------------
   SELECTOR DE FICHAS
   data = { items:[{k,label,tag,html}] }
   --------------------------------------------------------- */
function buildPicker(host){
  const data = WIDGET_DATA[host.dataset.src];
  if(!data){ host.innerHTML = '<p class="comment">// datos no encontrados</p>'; return; }
  host.innerHTML = '';
  host.classList.add('pk-host');

  const chips = document.createElement('div');
  chips.className = 'pk-chips';
  const panel = document.createElement('div');
  panel.className = 'pk-panel';

  data.items.forEach((it, i)=>{
    const b = document.createElement('button');
    b.className = 'pk-chip' + (i===0 ? ' is-on' : '');
    b.innerHTML = (it.tag ? '<span class="pk-tag">' + it.tag + '</span>' : '') + it.label;
    b.onclick = ()=>{
      chips.querySelectorAll('.pk-chip').forEach(c=>c.classList.remove('is-on'));
      b.classList.add('is-on');
      panel.innerHTML = it.html;
      panel.classList.remove('pk-in');
      void panel.offsetWidth;
      panel.classList.add('pk-in');
    };
    chips.appendChild(b);
  });

  host.appendChild(chips);
  host.appendChild(panel);
  panel.innerHTML = data.items[0].html;
  panel.classList.add('pk-in');
}
