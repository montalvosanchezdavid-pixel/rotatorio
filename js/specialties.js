// =============================================================
// ESPECIALIDADES — índice único del archivador
// Para añadir una nueva: crea content/<nombre>.js, añade su <script>
// en index.html y una línea aquí. Nada más.
//   short → pestaña superior · label → nombre completo (tooltip y panel)
// =============================================================
registerSpecialty({ id:'urgencias',   short:'URG',  label:'Urgencias',       tree:URG_TREE });
registerSpecialty({ id:'endocrino',   short:'END',  label:'Endocrino',       tree:ENDO_TREE });
registerSpecialty({ id:'nefrologia',  short:'NEF',  label:'Nefrología',      tree:NEFRO_TREE });
registerSpecialty({ id:'cardiologia', short:'CAR',  label:'Cardiología',     tree:CARDIO_TREE });
registerSpecialty({ id:'neumologia',  short:'NML',  label:'Neumología',      tree:NEUMO_TREE });
registerSpecialty({ id:'infecciosas', short:'INF',  label:'Infecciosas',     tree:INFECCIOSAS_TREE });
registerSpecialty({ id:'interna',     short:'MI',   label:'Medicina Interna',tree:INTERNA_TREE });
registerSpecialty({ id:'coagulacion', short:'COAG', label:'Coagulación',     tree:COAG_TREE });
registerSpecialty({ id:'bancosangre', short:'BS',   label:'Banco de Sangre', tree:BANCO_TREE });
