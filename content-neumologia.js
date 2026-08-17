// =============================================================
// NEUMOLOGÍA — árbol de secciones + contenido médico
// =============================================================
const NEUMO_TREE = {
  title:'NEUMOLOGÍA',
  intro:true,
  children: [
    {id:'neumo-obj', title:'Objetivos de la rotación', leaf:true, content:()=>NEUMO_PLACEHOLDER},
  ]
};

const NEUMO_PLACEHOLDER = `
<p class="comment">// todavía no hay contenido en este apartado</p>
<div class="callout"><span class="tag">PRÓXIMAMENTE</span> Este índice está preparado para irse rellenando durante la rotación de Neumología. Dime qué objetivos o temas quieres que añada (o pásame el índice oficial de la rotación, como hicimos con Nefrología) y lo iremos construyendo igual: contenido, tablas interactivas, y diagramas si hace falta.</div>
`;
