// =============================================================
// INFECCIOSAS — árbol de secciones + contenido médico
// =============================================================
const INFECCIOSAS_TREE = {
  title:'INFECCIOSAS',
  intro:true,
  children: [
    {id:'infec-obj', title:'Objetivos de la rotación', leaf:true, content:()=>INFECCIOSAS_PLACEHOLDER},
  ]
};

const INFECCIOSAS_PLACEHOLDER = `
<p class="comment">// todavía no hay contenido en este apartado</p>
<div class="callout"><span class="tag">PRÓXIMAMENTE</span> Este índice está preparado para irse rellenando durante la rotación de Enfermedades Infecciosas. Dime qué objetivos o temas quieres que añada (o pásame el índice oficial de la rotación, como hicimos con Nefrología) y lo iremos construyendo igual: contenido, tablas interactivas, y diagramas si hace falta.</div>
`;
