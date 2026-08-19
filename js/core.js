// =============================================================
// CORE — registro de especialidades y utilidades compartidas
// Se carga ANTES que el contenido y que la app.
// =============================================================

// ---- registro de especialidades ----
// Cada archivo de content/ se registra a sí mismo. Para añadir una
// especialidad nueva basta con crear su archivo y su <script>.
const SPECIALTIES = [];
function registerSpecialty(cfg){
  // cfg: {id, short, label, accent, tree}
  SPECIALTIES.push(cfg);
}

// ---- almacenamiento (con reserva en memoria si falla localStorage) ----
const memStore = {};
const safeStorage = {
  getItem(k){ try{ return localStorage.getItem(k); }catch(e){ return Object.prototype.hasOwnProperty.call(memStore,k) ? memStore[k] : null; } },
  setItem(k,v){ try{ localStorage.setItem(k,v); }catch(e){ memStore[k]=v; } },
  removeItem(k){ try{ localStorage.removeItem(k); }catch(e){ delete memStore[k]; } }
};

// ---- utilidades de árbol (compartidas por app y buscador) ----
// Recorre un árbol y devuelve el nodo con ese id, con su ruta.
function findInTree(root, id, path){
  path = path || [root.title];
  for(const child of root.children || []){
    const p = path.concat(child.title);
    if(child.id === id) return {node:child, path:p};
    if(child.children){
      const hit = findInTree(child, id, p);
      if(hit) return hit;
    }
  }
  return null;
}

// Devuelve todos los ids de hoja de un árbol.
function collectLeafIds(node, out){
  out = out || [];
  (node.children || []).forEach(c=>{
    if(c.leaf) out.push(c.id);
    if(c.children) collectLeafIds(c, out);
  });
  return out;
}
