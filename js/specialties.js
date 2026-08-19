// =============================================================
// ESPECIALIDADES — índice único del archivador
// Para añadir una nueva: crea content/<nombre>.js, añade su <script>
// en index.html y una línea aquí. Nada más.
//   short → nav superior · label → lengüeta · title → nombre legible
// =============================================================
registerSpecialty({
  id:'nefrologia', short:'NEF', label:'Nefrología', title:'Nefrología', tree:NEFRO_TREE,
  desc:'Fracaso renal agudo, enfermedad renal crónica, equilibrio ácido-base, trastornos hidroelectrolíticos, diálisis y trasplante.'
});
registerSpecialty({
  id:'cardiologia', short:'CAR', label:'Cardiología', title:'Cardiología', tree:CARDIO_TREE,
  desc:'Lectura sistemática del ECG, arritmias, síndrome coronario agudo, cardiotoxicidad por quimioterapia y anatomía coronaria en 3D.'
});
registerSpecialty({
  id:'neumologia', short:'NML', label:'Neumología', title:'Neumología', tree:NEUMO_TREE,
  desc:'Insuficiencia respiratoria, patología pulmonar del paciente inmunodeprimido y manejo de la vía aérea. Pendiente de la rotación.'
});
registerSpecialty({
  id:'infecciosas', short:'INF', label:'Infecciosas', title:'Infecciosas', tree:INFECCIOSAS_TREE,
  desc:'Neutropenia febril, antibioterapia empírica, infecciones oportunistas y profilaxis en el paciente hematológico.'
});
registerSpecialty({
  id:'interna', short:'MI', label:'Medicina Interna', title:'Medicina Interna', tree:INTERNA_TREE,
  desc:'Manejo global del paciente pluripatológico en planta y en guardia, con enfoque en el diagnóstico diferencial.'
});
registerSpecialty({
  id:'coagulacion', short:'COAG', label:'Coagulación', title:'Coagulación', tree:COAG_TREE,
  desc:'Hemostasia, estudio de trombofilias, anticoagulación y manejo de sus complicaciones hemorrágicas.'
});
registerSpecialty({
  id:'bancosangre', short:'BS', label:'Banco de Sangre', title:'Banco de Sangre', tree:BANCO_TREE,
  desc:'Componentes sanguíneos, pruebas de compatibilidad, indicaciones transfusionales y reacciones adversas.'
});
