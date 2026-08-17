// =============================================================
// APP — lógica de la aplicación (independiente del contenido)
// =============================================================
const TABS = [
  {id:'nefrologia', label:'NEFROLOGÍA'},
  {id:'cardiologia', label:'CARDIOLOGÍA'},
];

const TREE = { nefrologia: NEFRO_TREE, cardiologia: CARDIO_TREE };

/* =========================================================
   RENDER
   ========================================================= */
const tabsEl = document.getElementById('tabs');
const treeEl = document.getElementById('sectionTree');
const welcomeEl = document.getElementById('welcome');
const contentWrapEl = document.getElementById('contentWrap');
const sectionTitleEl = document.getElementById('sectionTitle');
const sectionContentEl = document.getElementById('sectionContent');
const breadcrumbEl = document.getElementById('breadcrumb');
const saveIndicator = document.getElementById('saveIndicator');
const editToggle = document.getElementById('editToggle');
const toastEl = document.getElementById('toast');

let editMode = false;
let currentLeaf = null;
let currentPath = [];

function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(()=>toastEl.classList.remove('show'), 1800);
}

// ---- tabs ----
TABS.forEach((t,i)=>{
  const b = document.createElement('button');
  b.className = 'tab-btn' + (i===0?' active':'');
  b.style.setProperty('--i', i);
  b.textContent = t.label;
  b.onclick = ()=>{
    document.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderSidebarTree(t.id);
  };
  tabsEl.appendChild(b);
});

// ---- sidebar tree ----
function buildTree(node, depth, path){
  const ul = document.createElement('ul');
  ul.className = 'tree';
  (node.children||[]).forEach(child=>{
    const li = document.createElement('li');
    li.className = 'depth-'+depth;
    const row = document.createElement('div');
    row.className = 'node' + (child.leaf ? ' leaf' : '');
    const newPath = path.concat(child.title);
    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.textContent = child.children ? '▸' : '';
    const bullet = document.createElement('span');
    bullet.className = 'bullet';
    bullet.textContent = child.leaf ? '●' : '▾'.slice(0,0) || '■';
    if(!child.leaf) bullet.textContent = '■';
    const label = document.createElement('span');
    label.textContent = child.title;
    row.appendChild(caret);
    row.appendChild(bullet);
    row.appendChild(label);
    if(child.hem){
      const hemTag = document.createElement('span');
      hemTag.className = 'hem-tag';
      hemTag.textContent = 'HEM';
      row.appendChild(hemTag);
    }
    li.appendChild(row);

    if(child.children){
      const childUl = buildTree(child, depth+1, newPath);
      childUl.classList.add('children');
      li.appendChild(childUl);
      row.onclick = ()=>{
        row.classList.toggle('open');
        childUl.classList.toggle('open');
      };
    }
    if(child.leaf){
      row.onclick = ()=>{
        document.querySelectorAll('.node.active').forEach(n=>n.classList.remove('active'));
        row.classList.add('active');
        openLeaf(child, newPath);
      };
    }
    ul.appendChild(li);
  });
  return ul;
}

function renderSidebarTree(tabId){
  const rootNode = TREE[tabId];
  treeEl.innerHTML = '';
  const rootTree = buildTree(rootNode, 1, [rootNode.title]);
  treeEl.appendChild(rootTree);
  rootTree.classList.add('open');
  currentLeaf = null;
  welcomeEl.style.display = 'block';
  contentWrapEl.style.display = 'none';
}
renderSidebarTree(TABS[0].id);

// ---- storage (con fallback en memoria si localStorage no está disponible) ----
const STORE_PREFIX = 'nefro_blog_';
function storageKey(id){ return STORE_PREFIX + id; }
const memStore = {};
const safeStorage = {
  getItem(k){ try{ return localStorage.getItem(k); }catch(e){ return memStore.hasOwnProperty(k) ? memStore[k] : null; } },
  setItem(k,v){ try{ localStorage.setItem(k,v); }catch(e){ memStore[k]=v; } },
  removeItem(k){ try{ localStorage.removeItem(k); }catch(e){ delete memStore[k]; } }
};

function openLeaf(child, path){
  disposeHeart3D();
  currentLeaf = child;
  currentPath = path;
  welcomeEl.style.display = 'none';
  contentWrapEl.style.display = 'block';
  breadcrumbEl.innerHTML = path.map((p,i)=> (i>0?' <span>›</span> ':'') + (i===path.length-1? '<span>'+p+'</span>' : p)).join('');
  sectionTitleEl.textContent = child.title;

  const saved = safeStorage.getItem(storageKey(child.id));
  sectionContentEl.innerHTML = saved !== null ? saved : child.content();
  sectionContentEl.contentEditable = editMode ? 'true' : 'false';
  saveIndicator.classList.remove('show');
  window.scrollTo({top:0, behavior:'instant'});

  if(child.id === 'c12'){
    setTimeout(()=> ensureThreeLoaded(initHeart3D), 0);
  }
}

// ---- edit mode ----
editToggle.onclick = ()=>{
  editMode = !editMode;
  editToggle.textContent = '✎ editar: ' + (editMode ? 'ON' : 'OFF');
  editToggle.style.color = editMode ? 'var(--accent)' : '';
  editToggle.style.borderColor = editMode ? 'var(--accent)' : '';
  if(currentLeaf){
    sectionContentEl.contentEditable = editMode ? 'true' : 'false';
    if(editMode) sectionContentEl.focus();
  }
};

let saveTimer = null;
sectionContentEl.addEventListener('input', ()=>{
  if(!currentLeaf) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{
    safeStorage.setItem(storageKey(currentLeaf.id), sectionContentEl.innerHTML);
    saveIndicator.classList.add('show');
    setTimeout(()=>saveIndicator.classList.remove('show'), 1500);
  }, 500);
});

document.getElementById('resetBtn').onclick = ()=>{
  if(!currentLeaf) return;
  if(confirm('¿Restaurar el contenido original de este apartado? Se perderán tus ediciones guardadas aquí.')){
    safeStorage.removeItem(storageKey(currentLeaf.id));
    sectionContentEl.innerHTML = currentLeaf.content();
    toast('Restaurado ✓');
  }
};

// ---- exportar / importar copia de seguridad ----
function collectAllLeafIds(node){
  let ids = [];
  (node.children||[]).forEach(c=>{
    if(c.leaf) ids.push(c.id);
    if(c.children) ids = ids.concat(collectAllLeafIds(c));
  });
  return ids;
}
const ALL_LEAF_IDS = Object.keys(TREE).reduce((ids, key)=> ids.concat(collectAllLeafIds(TREE[key])), []);

document.getElementById('exportBtn').onclick = ()=>{
  const data = {};
  ALL_LEAF_IDS.forEach(id=>{
    const v = safeStorage.getItem(storageKey(id));
    if(v !== null) data[id] = v;
  });
  if(Object.keys(data).length === 0){
    toast('No hay ediciones que exportar todavía');
    return;
  }
  const payload = {app:'rotatorio-nefro', exportedAt: new Date().toISOString(), data};
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rotatorio-nefro-backup-' + new Date().toISOString().slice(0,10) + '.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast('Copia de seguridad descargada ✓');
};

const importFileEl = document.getElementById('importFile');
document.getElementById('importBtn').onclick = ()=> importFileEl.click();
importFileEl.addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const payload = JSON.parse(reader.result);
      const data = payload.data || payload;
      let count = 0;
      Object.keys(data).forEach(id=>{
        if(ALL_LEAF_IDS.includes(id)){
          safeStorage.setItem(storageKey(id), data[id]);
          count++;
        }
      });
      if(count === 0){
        toast('El archivo no contiene secciones reconocidas');
        return;
      }
      if(currentLeaf){
        const saved = safeStorage.getItem(storageKey(currentLeaf.id));
        sectionContentEl.innerHTML = saved !== null ? saved : currentLeaf.content();
      }
      toast('Importadas ' + count + ' secciones ✓');
    }catch(err){
      alert('Archivo no válido: ' + err.message);
    }
  };
  reader.readAsText(file);
  importFileEl.value = '';
});

/* =========================================================
   TABLE INTERACTIONS
   ========================================================= */
function addRow(btn){
  const wrap = btn.closest('.table-wrap');
  const tbody = wrap.querySelector('tbody');
  const cols = wrap.querySelectorAll('thead th').length;
  const tr = document.createElement('tr');
  for(let i=0;i<cols;i++){
    const td = document.createElement('td');
    td.contentEditable = 'true';
    td.textContent = 'nueva celda';
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
  triggerSave();
}
function delRow(btn){
  const wrap = btn.closest('.table-wrap');
  const rows = wrap.querySelectorAll('tbody tr');
  if(rows.length>0){ rows[rows.length-1].remove(); triggerSave(); }
}
function addCol(btn){
  const wrap = btn.closest('.table-wrap');
  const headRow = wrap.querySelector('thead tr');
  const th = document.createElement('th');
  th.contentEditable = 'true';
  th.textContent = 'Nueva columna';
  headRow.appendChild(th);
  wrap.querySelectorAll('tbody tr').forEach(tr=>{
    const td = document.createElement('td');
    td.contentEditable = 'true';
    td.textContent = '—';
    tr.appendChild(td);
  });
  triggerSave();
}
function delCol(btn){
  const wrap = btn.closest('.table-wrap');
  const headCells = wrap.querySelectorAll('thead th');
  if(headCells.length<=1) return;
  const idx = headCells.length-1;
  headCells[idx].remove();
  wrap.querySelectorAll('tbody tr').forEach(tr=>{
    const cells = tr.querySelectorAll('td');
    if(cells[idx]) cells[idx].remove();
  });
  triggerSave();
}
function triggerSave(){
  if(!currentLeaf) return;
  safeStorage.setItem(storageKey(currentLeaf.id), sectionContentEl.innerHTML);
  saveIndicator.classList.add('show');
  setTimeout(()=>saveIndicator.classList.remove('show'), 1500);
}

// ---- diagramas interactivos ----
function highlightPart(el){
  const wrap = el.closest('.diagram-wrap');
  if(!wrap) return;
  wrap.querySelectorAll('.hit').forEach(h=>h.classList.remove('active-part'));
  el.classList.add('active-part');
  const info = wrap.querySelector('.diagram-info');
  if(info) info.innerHTML = '<strong>' + el.dataset.title + ':</strong> ' + el.dataset.desc;
}

function faGoTo(el, step){
  const wrap = el.closest('.diagram-wrap');
  if(!wrap) return;
  wrap.querySelectorAll('.fa-step').forEach(s=>{ s.hidden = (s.dataset.step !== step); });
}

// ---- corazón 3D (Three.js, carga perezosa desde CDN solo si se abre este apartado) ----
let heart3D = null;

function disposeHeart3D(){
  if(!heart3D) return;
  if(heart3D.raf) cancelAnimationFrame(heart3D.raf);
  if(heart3D.resizeHandler) window.removeEventListener('resize', heart3D.resizeHandler);
  if(heart3D.canvasEl && heart3D.clickHandler) heart3D.canvasEl.removeEventListener('click', heart3D.clickHandler);
  if(heart3D.renderer){
    heart3D.renderer.dispose();
    const dom = heart3D.renderer.domElement;
    if(dom && dom.parentNode) dom.parentNode.removeChild(dom);
  }
  heart3D = null;
}

function ensureThreeLoaded(cb){
  if(window.THREE && window.THREE.OrbitControls){ cb(); return; }
  let core = document.getElementById('threejs-core-script');
  if(core){ core.addEventListener('load', ()=> ensureThreeLoaded(cb)); return; }
  core = document.createElement('script');
  core.id = 'threejs-core-script';
  core.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js';
  core.onload = ()=>{
    const controls = document.createElement('script');
    controls.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js';
    controls.onload = cb;
    controls.onerror = heart3DShowError;
    document.head.appendChild(controls);
  };
  core.onerror = heart3DShowError;
  document.head.appendChild(core);
}

function heart3DShowError(){
  const info = document.getElementById('heart3dInfo');
  if(info) info.innerHTML = 'No se ha podido cargar el motor 3D (Three.js desde CDN) — comprueba tu conexión a internet. El resto de la web funciona sin conexión, pero este diagrama concreto necesita esa librería externa la primera vez.';
}

const HEART3D_PARTS = [
  {key:'lm', name:'Tronco común izquierdo (TCI)', color:0xffd166, radius:0.05,
   desc:'Segmento inicial corto que nace de la aorta y se bifurca en descendente anterior y circunfleja. Su obstrucción ("enfermedad de tronco") es de altísimo riesgo — indicación típica de revascularización urgente.',
   points:[[0.15,1.25,0.3],[0.0,1.0,0.65]]},
  {key:'lad', name:'Descendente anterior (DA / LAD)', color:0x00ff9c, radius:0.038,
   desc:'Recorre el surco interventricular anterior hasta el ápex. Irriga la cara anterior y los dos tercios anteriores del septo. Su oclusión proximal ("widow maker") es de las más graves — ST elevado en V1-V4.',
   points:[[0.0,1.0,0.65],[0.05,0.4,0.62],[0.0,-0.3,0.55],[-0.05,-0.9,0.42],[0.0,-1.5,0.15]]},
  {key:'d1', name:'Rama diagonal (D1)', color:0x7fffb0, radius:0.028,
   desc:'Rama de la descendente anterior que irriga la pared anterolateral. Puede dar cambios asociados en I, aVL además de en precordiales.',
   points:[[0.0,0.5,0.62],[0.5,0.15,0.55],[0.75,-0.2,0.45]]},
  {key:'cx', name:'Circunfleja (Cx)', color:0xff6b6b, radius:0.038,
   desc:'Nace del tronco común izquierdo y recorre el surco auriculoventricular izquierdo hacia la cara lateral/posterior. Irriga la pared lateral — cambios típicos en I, aVL, V5-V6.',
   points:[[0.0,1.0,0.65],[-0.55,0.7,0.4],[-0.9,0.3,-0.05],[-0.8,-0.2,-0.4],[-0.45,-0.65,-0.5]]},
  {key:'om1', name:'Marginal obtusa (OM1)', color:0xff9e9e, radius:0.028,
   desc:'Rama de la circunfleja que irriga la pared lateral del ventrículo izquierdo.',
   points:[[-0.85,0.35,-0.05],[-1.1,0.0,-0.15],[-1.2,-0.35,-0.2]]},
  {key:'rca', name:'Coronaria derecha (CD / RCA)', color:0x00c8ff, radius:0.038,
   desc:'Recorre el surco auriculoventricular derecho hasta la cara inferior, dando la descendente posterior en la mayoría de personas ("dominancia derecha"). Irriga el ventrículo derecho y la cara inferior — cambios en II, III, aVF. También irriga el nodo sinusal y el nodo AV en la mayoría de casos (bradiarritmias frecuentes en el IAM inferior).',
   points:[[0.35,1.05,0.35],[0.75,0.55,0.1],[0.8,0.0,-0.25],[0.55,-0.55,-0.45],[0.15,-1.0,-0.5]]},
];

function initHeart3D(){
  disposeHeart3D();
  const container = document.getElementById('heart3dCanvas');
  if(!container || !window.THREE){ heart3DShowError(); return; }
  const infoEl = document.getElementById('heart3dInfo');
  if(infoEl) infoEl.innerHTML = 'Arrastra para rotar, scroll para hacer zoom. Haz click en una arteria para ver su nombre y territorio.';

  const width = container.clientWidth || 600;
  const height = container.clientHeight || 420;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 100);
  camera.position.set(0, 0.1, 4.7);

  const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.85);
  dirLight.position.set(2,3,4);
  scene.add(dirLight);
  const rimLight = new THREE.DirectionalLight(0x4488ff, 0.35);
  rimLight.position.set(-3,-2,-2);
  scene.add(rimLight);
  const warmLight = new THREE.PointLight(0xff8899, 0.4, 8);
  warmLight.position.set(0.5, 0.5, 3);
  scene.add(warmLight);

  // silueta cónica y redondeada (geometría de revolución) — se parece mucho más a un músculo cardiaco real que un contorno plano
  const profile = [
    [0.00,-1.65], [0.08,-1.55], [0.35,-1.10], [0.65,-0.65],
    [0.85,-0.15], [0.95, 0.35], [0.85, 0.85], [0.55, 1.15],
    [0.15, 1.28], [0.00, 1.32]
  ].map(p=> new THREE.Vector2(p[0], p[1]));
  const heartGeo = new THREE.LatheGeometry(profile, 48);
  heartGeo.scale(1.15, 1, 0.85); // ligeramente más ancho que profundo, como un corazón real
  heartGeo.computeVertexNormals();

  const heartMesh = new THREE.Mesh(heartGeo, new THREE.MeshPhongMaterial({ color:0x3a1620, transparent:true, opacity:0.62, shininess:45, specular:0x774455, side:THREE.DoubleSide }));
  scene.add(heartMesh);

  const edgeLines = new THREE.LineSegments(new THREE.EdgesGeometry(heartGeo, 20), new THREE.LineBasicMaterial({ color:0x774455, transparent:true, opacity:0.4 }));
  heartMesh.add(edgeLines);

  // grandes vasos (decorativos, no clicables) — dan contexto anatómico en la base
  const aortaCurve = new THREE.CatmullRomCurve3([[0.05,1.25,0.1],[0.25,1.55,0.05],[0.5,1.65,-0.1]].map(p=>new THREE.Vector3(...p)));
  const aortaMesh = new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 20, 0.09, 8, false), new THREE.MeshPhongMaterial({ color:0x8a4a55, transparent:true, opacity:0.7 }));
  scene.add(aortaMesh);
  const pulmCurve = new THREE.CatmullRomCurve3([[-0.05,1.22,0.25],[-0.2,1.5,0.35],[-0.4,1.6,0.3]].map(p=>new THREE.Vector3(...p)));
  const pulmMesh = new THREE.Mesh(new THREE.TubeGeometry(pulmCurve, 20, 0.09, 8, false), new THREE.MeshPhongMaterial({ color:0x4a6a8a, transparent:true, opacity:0.7 }));
  scene.add(pulmMesh);

  const arteryMeshes = [];
  HEART3D_PARTS.forEach(part=>{
    const pts = part.points.map(p=> new THREE.Vector3(p[0], p[1], p[2]));
    const curve = new THREE.CatmullRomCurve3(pts);
    const tubeGeo = new THREE.TubeGeometry(curve, 40, part.radius, 10, false);
    const tubeMat = new THREE.MeshPhongMaterial({ color:part.color, emissive:part.color, emissiveIntensity:0.35, shininess:60 });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    tubeMesh.userData = part;
    scene.add(tubeMesh);
    arteryMeshes.push(tubeMesh);
  });

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 2.5;
  controls.maxDistance = 8;
  controls.target.set(0,-0.15,0);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let activeMesh = null;

  function onClick(ev){
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(arteryMeshes);
    if(hits.length){
      if(activeMesh) activeMesh.material.emissiveIntensity = 0.35;
      activeMesh = hits[0].object;
      activeMesh.material.emissiveIntensity = 1.1;
      const p = activeMesh.userData;
      if(infoEl) infoEl.innerHTML = '<strong>' + p.name + ':</strong> ' + p.desc;
    }
  }
  renderer.domElement.addEventListener('click', onClick);

  function onResize(){
    const w = container.clientWidth || width;
    const h = container.clientHeight || height;
    camera.aspect = w/h;
    camera.updateProjectionMatrix();
    renderer.setSize(w,h);
  }
  window.addEventListener('resize', onResize);

  const state = { renderer, scene, camera, controls, resizeHandler:onResize, canvasEl:renderer.domElement, clickHandler:onClick, raf:null };
  heart3D = state;
  const clock = new THREE.Clock();
  function animate(){
    state.raf = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    const pulse = 1 + 0.025 * Math.max(0, Math.sin(t * 2.1)) ** 3; // late sutil, más marcado en la "sístole"
    heartMesh.scale.set(pulse, pulse, pulse);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
