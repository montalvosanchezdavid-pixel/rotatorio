// =============================================================
// COAGULACIÓN — árbol de secciones + contenido médico
// =============================================================
const COAG_TREE = {
  title:'COAGULACIÓN',
  intro:true,
  children: [
    {id:'coag-obj', title:'Objetivos de la rotación', leaf:true, content:()=>COAG_PLACEHOLDER},
  ]
};

const COAG_PLACEHOLDER = `
<p class="comment">// todavía no hay contenido en este apartado</p>
<div class="callout"><span class="tag">PRÓXIMAMENTE</span> Este índice está preparado para irse rellenando durante la rotación de Coagulación. Dime qué objetivos o temas quieres que añada (o pásame el índice oficial de la rotación, como hicimos con Nefrología) y lo iremos construyendo igual: contenido, tablas interactivas, y diagramas si hace falta.</div>
`;
