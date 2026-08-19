// =============================================================
// URGENCIAS — árbol de secciones + contenido médico
// =============================================================
const URG_TREE = {
  title:'URGENCIAS',
  intro:true,
  children: [
    {id:'urg-obj', title:'Objetivos y método', leaf:true, content:()=>U_OBJ},
    {id:'u1', title:'1. Plantilla general de historia', leaf:true, content:()=>U1},
    {id:'u2', title:'2. Plantillas por síntoma (interactivo)', leaf:true, content:()=>U2},
    {id:'u3', title:'3. Qué pruebas pedir (interactivo)', leaf:true, content:()=>U3},
    {id:'u4', title:'4. Antibioterapia por foco', children:[
      {id:'u4a', title:'a. Urinario y genital', leaf:true, content:()=>U4A},
      {id:'u4b', title:'b. Respiratorio y ORL', leaf:true, content:()=>U4B},
      {id:'u4c', title:'c. Piel y partes blandas', leaf:true, content:()=>U4C},
      {id:'u4d', title:'d. Abdominal y digestivo', leaf:true, content:()=>U4D},
      {id:'u4e', title:'e. SNC y otros focos', leaf:true, content:()=>U4E},
    ]},
    {id:'u5', title:'5. Criterios de gravedad y alta', leaf:true, content:()=>U5},
    {id:'u6', title:'6. Fármacos frecuentes en guardia', leaf:true, content:()=>U6},
  ]
};

/* =========================================================
   WIDGET — plantillas por síntoma
   ========================================================= */
registerWidgetData('PLANTILLAS_SINTOMA', {
  items:[
    {k:'torax', label:'Dolor torácico', tag:'Cardio · respiratorio', html:
      '<h4>Dolor torácico</h4>' +
      '<div class="pk-key"><span><b>Descartar:</b> SCA · TEP · disección · neumotórax · rotura esofágica</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> carácter (opresivo, punzante, urente, desgarrante), localización e irradiación, intensidad, inicio (súbito o progresivo), duración, desencadenantes (esfuerzo, respiración, decúbito, comida), qué lo alivia, cortejo vegetativo, síntomas acompañantes (disnea, síncope, palpitaciones, fiebre).</li>' +
      '<li><b>Factores de riesgo:</b> HTA, DM, dislipemia, tabaco, antecedentes familiares, cardiopatía previa, inmovilización, cirugía o neoplasia reciente.</li>' +
      '<li><b>Exploración:</b> constantes con <b>TA en ambos brazos</b>, pulsos periféricos simétricos, ingurgitación yugular, auscultación cardiaca (soplos, roce, tonos) y pulmonar, palpación de la pared torácica, exploración de miembros inferiores.</li>' +
      '<li><b>Pruebas:</b> ECG en los primeros 10 minutos y seriado, troponina seriada, hemograma, bioquímica, coagulación, Rx tórax. Dímero D si sospecha de TEP con probabilidad baja o intermedia. Angio-TC si sospecha de TEP o disección.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por dolor torácico de XX horas de evolución.\n' +
      'Refiere dolor de características opresivas/punzantes, localizado en región retroesternal/costal, con/sin irradiación a brazo izquierdo, mandíbula o espalda, de intensidad XX/10, de inicio súbito/progresivo, que aumenta/no se modifica con la respiración, el decúbito ni la palpación. Se acompaña/no se acompaña de cortejo vegetativo, disnea, síncope ni palpitaciones. No refiere fiebre ni clínica infecciosa.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. FRCV: XX. Enfermedades: XX. Intervenciones quirúrgicas: XX. Tratamiento habitual: XX. Situación basal: independiente para las ABVD. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Normocoloreado, normohidratado y normoperfundido. Eupneico en reposo.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %  FR XX\n' +
      'Cardiocirculatorio: tonos rítmicos, sin soplos ni roce. No ingurgitación yugular. Pulsos periféricos presentes y simétricos.\n' +
      'Pulmonar: murmullo vesicular conservado, sin ruidos sobreañadidos.\n' +
      'Abdomen: blando, depresible, no doloroso, sin masas ni megalias. Sin signos de irritación peritoneal.\n' +
      'Miembros inferiores: sin edemas ni signos de trombosis venosa profunda.\n\n' +
      'Pruebas complementarias:\n' +
      '- ECG: ritmo sinusal a XX lpm, sin alteraciones agudas de la repolarización.\n' +
      '- Analítica: hemograma, bioquímica con troponina y coagulación (detallar).\n' +
      '- Rx tórax: sin condensaciones ni derrame. Silueta cardiomediastínica normal.\n\n' +
      'Evolución: permanece hemodinámicamente estable durante su estancia, sin nuevos episodios de dolor. Troponina seriada sin ascenso.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'abdomen', label:'Dolor abdominal', tag:'Digestivo', html:
      '<h4>Dolor abdominal</h4>' +
      '<div class="pk-key"><span><b>No pasar por alto:</b> abdomen agudo quirúrgico · isquemia mesentérica · aneurisma roto · embarazo ectópico</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> localización e irradiación, tipo (cólico, continuo, urente), migración del dolor (periumbilical → fosa ilíaca derecha en apendicitis), relación con la ingesta, ritmo intestinal, náuseas y vómitos (biliosos, fecaloideos, en poso de café), fiebre, síndrome miccional, última deposición y ventoseo. En mujer: <b>FUR</b> y posibilidad de embarazo.</li>' +
      '<li><b>Exploración:</b> inspección (cicatrices, distensión, hernias), auscultación de ruidos, palpación superficial y profunda, signos de irritación peritoneal (Blumberg, defensa), Murphy, Rovsing, puñopercusión renal. <b>Tacto rectal</b> si sospecha de hemorragia digestiva, impactación o proceso pélvico.</li>' +
      '<li><b>Pruebas:</b> hemograma, bioquímica con perfil hepático, amilasa/lipasa, PCR, coagulación, sistemático de orina, <b>β-hCG en mujer en edad fértil</b>, Rx abdomen si sospecha de obstrucción o perforación, ecografía abdominal, TC si duda diagnóstica o sospecha de complicación.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por dolor abdominal de XX horas de evolución.\n' +
      'Refiere dolor localizado en XX, de carácter cólico/continuo, intensidad XX/10, con/sin irradiación a XX, que no cede/cede parcialmente con analgesia habitual. Asocia náuseas y vómitos de contenido alimentario/bilioso (XX episodios), sin productos patológicos. Ritmo intestinal conservado / estreñimiento de XX días / deposiciones diarreicas sin productos patológicos. Refiere última deposición hace XX y ventoseo conservado. No fiebre termometrada ni síndrome miccional. FUR: XX.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX. Intervenciones quirúrgicas: XX (importante en sospecha de obstrucción). Tratamiento habitual: XX. Situación basal: independiente para las ABVD. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Normocoloreado, normohidratado y normoperfundido.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %\n' +
      'Cardiocirculatorio: tonos rítmicos, sin soplos.\n' +
      'Pulmonar: murmullo vesicular conservado.\n' +
      'Abdomen: blando y depresible / doloroso a la palpación en XX. Ruidos hidroaéreos presentes/aumentados/ausentes. Sin masas ni megalias. Blumberg negativo/positivo. Murphy negativo/positivo. Puñopercusión renal bilateral negativa. Sin hernias ni eventraciones.\n' +
      'Tacto rectal: ampolla rectal ocupada por heces de características normales, sin restos hemáticos ni melenas. (Si procede)\n\n' +
      'Pruebas complementarias:\n' +
      '- Analítica: hemograma, bioquímica con perfil hepático y amilasa, PCR, coagulación (detallar).\n' +
      '- Sistemático de orina: XX. β-hCG: XX.\n' +
      '- Rx abdomen: sin niveles hidroaéreos ni neumoperitoneo.\n' +
      '- Ecografía abdominal: XX.\n\n' +
      'Evolución: tras analgesia queda asintomático / persiste dolor. Tolera la ingesta oral.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'disnea', label:'Disnea', tag:'Respiratorio', html:
      '<h4>Disnea</h4>' +
      '<div class="pk-key"><span><b>Descartar:</b> insuficiencia cardiaca · neumonía · EPOC agudizado · TEP · neumotórax · anemia</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> tiempo de evolución (súbita orienta a TEP o neumotórax), progresión, clase funcional previa y actual, ortopnea y disnea paroxística nocturna, tos y expectoración (color, cantidad, hemoptisis), dolor torácico, fiebre, edemas, aumento de peso, cumplimiento del tratamiento habitual.</li>' +
      '<li><b>Exploración:</b> trabajo respiratorio y uso de musculatura accesoria, capacidad para hablar en frases completas, saturación con y sin oxígeno, ingurgitación yugular, auscultación (crepitantes, sibilancias, hipoventilación), edemas y signos de trombosis venosa.</li>' +
      '<li><b>Pruebas:</b> gasometría arterial, ECG, Rx tórax, hemograma, bioquímica con NT-proBNP, dímero D si sospecha de TEP.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por disnea de XX días de evolución.\n' +
      'Refiere disnea progresiva hasta hacerse de mínimos esfuerzos/reposo, partiendo de una clase funcional basal XX. Asocia/no asocia ortopnea, disnea paroxística nocturna ni edemas en miembros inferiores. Presenta tos con expectoración XX, sin hemoptisis. No dolor torácico ni fiebre termometrada. No refiere inmovilización prolongada, cirugía reciente ni antecedente de trombosis.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX (EPOC, insuficiencia cardiaca, asma). Tratamiento habitual y cumplimiento: XX. Situación basal: XX. Hábitos tóxicos: XX paquetes-año.\n\n' +
      'Exploración física:\n' +
      'General: consciente y orientado. Taquipneico en reposo / eupneico. Habla en frases completas / entrecortadas. Sin trabajo respiratorio ni uso de musculatura accesoria.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX % (basal / con XX L)  FR XX\n' +
      'Cardiocirculatorio: tonos rítmicos, sin soplos. Ingurgitación yugular presente/ausente.\n' +
      'Pulmonar: murmullo vesicular conservado / crepitantes bibasales / sibilancias espiratorias difusas / hipoventilación en XX.\n' +
      'Abdomen: blando, depresible, no doloroso.\n' +
      'Miembros inferiores: sin edemas ni signos de trombosis venosa profunda.\n\n' +
      'Pruebas complementarias:\n' +
      '- Gasometría arterial (FiO2 XX): pH XX, pCO2 XX, pO2 XX, HCO3 XX, lactato XX.\n' +
      '- ECG: XX.\n' +
      '- Rx tórax: XX.\n' +
      '- Analítica: hemograma, bioquímica con NT-proBNP, dímero D (detallar).\n\n' +
      'Evolución: tras oxigenoterapia y tratamiento presenta mejoría clínica y gasométrica.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'fiebre', label:'Fiebre / síndrome febril', tag:'Infeccioso', html:
      '<h4>Fiebre</h4>' +
      '<div class="pk-key"><span><b>Buscar foco:</b> respiratorio · urinario · abdominal · piel · SNC · catéter</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> tiempo de evolución, patrón, escalofríos y tiritona (sugiere bacteriemia), y <b>focalidad</b> por aparatos: tos y expectoración, síndrome miccional, dolor abdominal y ritmo intestinal, cefalea y rigidez de nuca, lesiones cutáneas, odinofagia y otalgia. Viajes, contacto con animales, ambiente epidémico, antibióticos recientes, portador de catéter o prótesis, inmunosupresión.</li>' +
      '<li><b>Exploración:</b> siempre completa aunque el foco parezca claro. Piel (exantema, petequias, puntos de punción), faringe y otoscopia, adenopatías, auscultación, abdomen, puñopercusión renal, signos meníngeos, exploración de la región perianal y de heridas.</li>' +
      '<li><b>Pruebas:</b> hemograma, bioquímica con PCR y función renal, sistemático de orina, <b>hemocultivos antes del antibiótico</b> si hay criterios de gravedad o sospecha de bacteriemia, Rx tórax, urocultivo. Lactato si hay criterios de sepsis.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por fiebre de hasta XX ºC de XX días de evolución.\n' +
      'Refiere sensación distérmica con/sin escalofríos y tiritona. Interrogado por focalidad infecciosa: no refiere tos ni expectoración, no síndrome miccional, no dolor abdominal ni alteración del ritmo intestinal, no cefalea ni rigidez de nuca, no odinofagia ni otalgia, no lesiones cutáneas. No viajes recientes, contacto con animales ni ambiente epidémico familiar. No ha tomado antibióticos previamente.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX. Intervenciones quirúrgicas: XX. Portador de XX (catéter, prótesis, sonda). Tratamiento habitual: XX. Situación basal: XX. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Buen estado general. Normohidratado y normoperfundido. Sin exantemas ni petequias.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %  FR XX\n' +
      'Cabeza y cuello: faringe sin exudados. Otoscopia normal. No adenopatías. Sin rigidez de nuca ni signos meníngeos.\n' +
      'Cardiocirculatorio: tonos rítmicos, sin soplos.\n' +
      'Pulmonar: murmullo vesicular conservado, sin ruidos sobreañadidos.\n' +
      'Abdomen: blando, depresible, no doloroso. Puñopercusión renal bilateral negativa.\n' +
      'Piel: sin lesiones. Punto de inserción de catéter sin signos inflamatorios.\n\n' +
      'Pruebas complementarias:\n' +
      '- Analítica: hemograma, bioquímica con PCR y función renal (detallar).\n' +
      '- Sistemático y sedimento de orina: XX.\n' +
      '- Hemocultivos x2 extraídos previos a antibioterapia.\n' +
      '- Rx tórax: XX.\n\n' +
      'Evolución: permanece hemodinámicamente estable, con descenso térmico tras antitérmico.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'cefalea', label:'Cefalea', tag:'Neurológico', html:
      '<h4>Cefalea</h4>' +
      '<div class="pk-key"><span><b>Banderas rojas:</b> inicio en trueno · fiebre con rigidez · focalidad · edema de papila · &gt;50 años de novo · inmunodeprimido · empeora con Valsalva</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> forma de inicio (súbita "en trueno" obliga a descartar hemorragia subaracnoidea), localización, carácter, intensidad, duración, si es la peor de su vida, si difiere de sus cefaleas habituales, factores que la modifican (decúbito, Valsalva, luz, ruido), síntomas acompañantes (náuseas, fotofobia, aura, fiebre, focalidad, alteración visual).</li>' +
      '<li><b>Exploración:</b> constantes con TA, nivel de consciencia, <b>exploración neurológica completa</b> con pares craneales y fondo de ojo, signos meníngeos, palpación de arterias temporales en mayores de 50 años, exploración cervical.</li>' +
      '<li><b>Pruebas:</b> solo si hay banderas rojas. TC craneal sin contraste; punción lumbar si sospecha de hemorragia subaracnoidea con TC normal o de meningitis. VSG y PCR si sospecha de arteritis de células gigantes.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por cefalea de XX horas de evolución.\n' +
      'Refiere cefalea de localización XX, de carácter pulsátil/opresivo, intensidad XX/10, de inicio progresivo/súbito, similar/diferente a sus cefaleas habituales. Asocia/no asocia náuseas, vómitos, fotofobia, fonofobia ni aura visual. No fiebre, no rigidez de nuca, no focalidad neurológica, no alteración visual. No empeora con maniobras de Valsalva ni con el decúbito. No traumatismo craneal reciente.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX (migraña conocida, HTA). Tratamiento habitual: XX. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Buen estado general.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %\n' +
      'Neurológico: Glasgow 15. Pupilas isocóricas y normorreactivas. Pares craneales sin alteraciones. Fuerza y sensibilidad conservadas y simétricas en las cuatro extremidades. Reflejos osteotendinosos presentes y simétricos. No dismetría. Marcha normal. Sin signos meníngeos. Fondo de ojo sin edema de papila.\n' +
      'Arterias temporales palpables, no induradas ni dolorosas.\n' +
      'Cardiocirculatorio y pulmonar sin hallazgos.\n\n' +
      'Pruebas complementarias:\n' +
      '- No se consideran necesarias por ausencia de datos de alarma / TC craneal: XX.\n\n' +
      'Evolución: cede la cefalea tras analgesia, permaneciendo asintomático.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'sincope', label:'Síncope y mareo', tag:'Cardio · neuro', html:
      '<h4>Síncope</h4>' +
      '<div class="pk-key"><span><b>Distinguir:</b> vasovagal · ortostático · <b>cardiogénico</b> (el de riesgo) · neurológico</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> qué hacía en ese momento (esfuerzo o decúbito orientan a cardiogénico), pródromos (sudoración y náuseas sugieren vasovagal; su ausencia es dato de alarma), duración, recuperación (inmediata frente a confusión postcrítica), testigos, movimientos anormales, relajación de esfínteres, mordedura lateral de lengua, traumatismo asociado.</li>' +
      '<li><b>Datos de alarma:</b> síncope durante el esfuerzo o en decúbito, palpitaciones previas, cardiopatía estructural conocida, muerte súbita familiar, ECG patológico, ausencia de pródromos.</li>' +
      '<li><b>Exploración:</b> constantes con <b>TA en decúbito y bipedestación</b>, auscultación cardiaca (soplo aórtico), exploración neurológica, tacto rectal si sospecha de sangrado digestivo como causa.</li>' +
      '<li><b>Pruebas:</b> ECG siempre, glucemia, hemograma y bioquímica. β-hCG en mujer en edad fértil. Otras según sospecha.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por episodio de pérdida transitoria de consciencia de XX minutos de duración.\n' +
      'El episodio ocurrió estando en bipedestación/sedestación/durante el esfuerzo, precedido de pródromos consistentes en sudoración, náuseas y visión borrosa / sin pródromos. Presenció el episodio un familiar, que refiere pérdida de consciencia de segundos de duración, sin movimientos tónico-clónicos, sin relajación de esfínteres ni mordedura lingual, con recuperación espontánea y completa, sin confusión posterior. No traumatismo craneal. No palpitaciones ni dolor torácico previos. No antecedente de episodios similares.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX. Cardiopatía estructural conocida: XX. Antecedentes familiares de muerte súbita: XX. Tratamiento habitual (especial atención a antihipertensivos y diuréticos): XX. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Buen estado general. Normocoloreado y normohidratado.\n' +
      'TA en decúbito XX/XX  TA en bipedestación XX/XX  FC XX  Tª XX  SatO2 XX %  Glucemia capilar XX\n' +
      'Cardiocirculatorio: tonos rítmicos, sin soplos. Pulsos periféricos presentes y simétricos.\n' +
      'Pulmonar: murmullo vesicular conservado.\n' +
      'Abdomen: blando, depresible, no doloroso.\n' +
      'Neurológico: sin focalidad. Glasgow 15.\n\n' +
      'Pruebas complementarias:\n' +
      '- ECG: ritmo sinusal a XX lpm, PR y QT normales, sin alteraciones de la repolarización ni signos de preexcitación.\n' +
      '- Analítica: hemograma, bioquímica (detallar).\n\n' +
      'Evolución: permanece asintomático y hemodinámicamente estable durante la observación, sin nuevos episodios.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'urinario', label:'Síntomas urinarios', tag:'Nefrourológico', html:
      '<h4>Síndrome miccional</h4>' +
      '<div class="pk-key"><span><b>Diferenciar:</b> cistitis · pielonefritis · prostatitis · cólico renal · retención aguda de orina</span></div>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> disuria, polaquiuria, urgencia, tenesmo, hematuria, dolor lumbar o en flanco, fiebre y tiritona (orientan a afectación alta), náuseas y vómitos, secreción uretral, relaciones sexuales de riesgo, episodios previos, manipulación urológica o sondaje, en varón clínica prostática previa.</li>' +
      '<li><b>Exploración:</b> temperatura, <b>puñopercusión renal bilateral</b>, palpación abdominal buscando globo vesical, exploración genital y testicular en varón, tacto rectal si sospecha de prostatitis (<b>sin masaje prostático</b>).</li>' +
      '<li><b>Pruebas:</b> sistemático y sedimento de orina, urocultivo (obligado en varón, embarazo, pielonefritis y toda ITU complicada), hemograma y bioquímica con función renal si hay fiebre o afectación general, hemocultivos si fiebre alta, ecografía si sospecha de obstrucción o mala evolución.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por síndrome miccional de XX días de evolución.\n' +
      'Refiere disuria, polaquiuria y urgencia miccional, con/sin hematuria macroscópica. Asocia/no asocia dolor lumbar, fiebre termometrada ni tiritona. No náuseas ni vómitos. No secreción uretral ni relaciones sexuales de riesgo. Refiere XX episodios previos similares. No manipulación urológica ni sondaje reciente. (En varón: no clínica prostática previa.) FUR: XX.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX. Litiasis renal previa: XX. Tratamiento habitual: XX. Hábitos tóxicos: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Buen estado general. Normohidratado.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %\n' +
      'Cardiocirculatorio y pulmonar sin hallazgos.\n' +
      'Abdomen: blando y depresible, doloroso a la palpación en hipogastrio. Sin globo vesical. Sin signos de irritación peritoneal. Puñopercusión renal derecha/izquierda negativa/positiva.\n' +
      'Genital (si procede): testes en bolsa, no dolorosos, sin signos inflamatorios. Reflejo cremastérico conservado.\n\n' +
      'Pruebas complementarias:\n' +
      '- Sistemático y sedimento de orina: leucocituria, nitritos XX, hematuria XX.\n' +
      '- Urocultivo recogido.\n' +
      '- Analítica: hemograma, bioquímica con función renal (detallar).\n\n' +
      'Evolución: buen control sintomático, tolera vía oral.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'},

    {k:'digestivo', label:'Vómitos y diarrea', tag:'Digestivo', html:
      '<h4>Vómitos y diarrea</h4>' +
      '<ul>' +
      '<li><b>Anamnesis dirigida:</b> número de episodios, <b>características del vómito</b> (alimentario, bilioso, fecaloideo, hemático o en poso de café), relación con la ingesta, número y aspecto de las deposiciones (líquidas, con moco, sangre o pus), dolor abdominal, fiebre, ambiente epidémico, ingesta de alimentos sospechosos, viajes, antibióticos recientes (pensar en <i>C. difficile</i>), capacidad de tolerar líquidos.</li>' +
      '<li><b>Datos de alarma:</b> vómito fecaloideo o ausencia de ventoseo (obstrucción), hematemesis, deposiciones con sangre, signos de deshidratación grave, dolor desproporcionado a la exploración (isquemia mesentérica).</li>' +
      '<li><b>Exploración:</b> estado de hidratación (mucosas, pliegue cutáneo, relleno capilar), constantes con TA en decúbito y bipedestación, abdomen completo, tacto rectal si hay sospecha de sangrado.</li>' +
      '<li><b>Pruebas:</b> hemograma, bioquímica con iones y función renal, gasometría venosa si vómitos abundantes (alcalosis metabólica hipoclorémica), coprocultivo y toxina de <i>C. difficile</i> si procede, Rx abdomen si sospecha de obstrucción.</li>' +
      '</ul>' +
      '<div class="tpl-box">' +
      '<div class="tpl-head">Plantilla<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>' +
      '<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por vómitos y deposiciones diarreicas de XX horas de evolución.\n' +
      'Refiere XX episodios de vómitos de contenido alimentario/bilioso, sin restos hemáticos ni posos de café, y XX deposiciones líquidas sin productos patológicos (sin moco, sangre ni pus). Asocia dolor abdominal cólico difuso, con/sin fiebre termometrada. Refiere ambiente epidémico familiar / ingesta previa de XX. No viajes recientes ni toma de antibióticos en las últimas semanas. Tolerancia oral conservada/nula.\n\n' +
      'Antecedentes personales: sin alergias medicamentosas conocidas. Enfermedades: XX. Intervenciones quirúrgicas abdominales: XX. Tratamiento habitual: XX. Situación basal: XX.\n\n' +
      'Exploración física:\n' +
      'General: consciente, orientado y colaborador. Normohidratado / signos de deshidratación con mucosas secas. Normoperfundido.\n' +
      'TA XX/XX  FC XX  Tª XX  SatO2 XX %\n' +
      'Cardiocirculatorio y pulmonar sin hallazgos.\n' +
      'Abdomen: blando y depresible, doloroso de forma difusa sin focalidad, sin signos de irritación peritoneal. Ruidos hidroaéreos aumentados. No masas ni megalias.\n' +
      'Tacto rectal (si procede): sin restos hemáticos ni melenas.\n\n' +
      'Pruebas complementarias:\n' +
      '- Analítica: hemograma, bioquímica con iones y función renal, PCR (detallar).\n' +
      '- Gasometría venosa: XX.\n' +
      '- Coprocultivo / toxina de C. difficile: XX.\n\n' +
      'Evolución: tras sueroterapia y antiemético presenta mejoría, iniciando tolerancia oral de forma adecuada.\n\n' +
      'Juicio clínico: XX\n' +
      'Tratamiento y destino: XX</pre></div>'}
  ]
});

/* =========================================================
   WIDGET — qué pruebas pedir según el síntoma
   ========================================================= */
registerWidgetData('PRUEBAS_SINTOMA', {
  caption:'Síntoma / prueba',
  hint:'Pulsa un síntoma (izquierda) para ver qué pedir, o una prueba (arriba) para ver cuándo se usa.',
  colTitle:'Ver en qué síntomas se pide ',
  legend:{2:'Casi siempre', 1:'Según sospecha', 0:'No de rutina'},
  labels:{rowYes:'Pedir:', rowMaybe:'Valorar según sospecha:', colYes:'Se pide en:', colMaybe:'Se valora en:'},
  cols:[
    {k:'hemo',   label:'Hemograma',    group:'Analítica'},
    {k:'bioq',   label:'Bioquímica',   group:'Analítica'},
    {k:'coag',   label:'Coagulación',  group:'Analítica'},
    {k:'gaso',   label:'Gasometría',   group:'Analítica'},
    {k:'tropo',  label:'Troponina',    group:'Analítica'},
    {k:'dd',     label:'Dímero D',     group:'Analítica', note:'Alto valor predictivo negativo. Poco útil si la probabilidad clínica es alta o el paciente es oncológico.'},
    {k:'orina',  label:'Orina',        group:'Analítica'},
    {k:'bhcg',   label:'β-hCG',        group:'Analítica', note:'Obligada en toda mujer en edad fértil con dolor abdominal, síncope o antes de una prueba con radiación.'},
    {k:'ecg',    label:'ECG',          group:'Imagen y otros'},
    {k:'rxtx',   label:'Rx tórax',     group:'Imagen y otros'},
    {k:'rxabd',  label:'Rx abdomen',   group:'Imagen y otros'},
    {k:'eco',    label:'Ecografía',    group:'Imagen y otros'},
    {k:'tc',     label:'TC',           group:'Imagen y otros'},
    {k:'cult',   label:'Cultivos',     group:'Imagen y otros', note:'Hemocultivos antes del antibiótico siempre que haya criterios de gravedad o sospecha de bacteriemia.'}
  ],
  rows:[
    {k:'s-torax', label:'Dolor torácico', note:'ECG en los primeros 10 minutos y troponina seriada. Angio-TC si sospecha de TEP o disección.',
     cov:{hemo:2, bioq:2, coag:2, tropo:2, ecg:2, rxtx:2, dd:1, gaso:1, tc:1}},
    {k:'s-disnea', label:'Disnea', note:'La gasometría cambia el manejo: distingue insuficiencia respiratoria tipo I de tipo II.',
     cov:{hemo:2, bioq:2, gaso:2, ecg:2, rxtx:2, dd:1, tropo:1, coag:1, tc:1}},
    {k:'s-abdomen', label:'Dolor abdominal', note:'β-hCG obligada en mujer en edad fértil. La ecografía es de primera línea en sospecha biliar; la TC si hay duda o sospecha de complicación.',
     cov:{hemo:2, bioq:2, orina:2, bhcg:2, coag:1, rxabd:1, eco:1, tc:1, ecg:1}},
    {k:'s-fiebre', label:'Fiebre sin foco', note:'Hemocultivos antes del antibiótico. Exploración completa aunque el foco parezca evidente.',
     cov:{hemo:2, bioq:2, orina:2, cult:2, rxtx:2, gaso:1, coag:1, eco:1}},
    {k:'s-cefalea', label:'Cefalea', note:'Sin banderas rojas no hace falta ninguna prueba. Con ellas, TC craneal; punción lumbar si sospecha de hemorragia subaracnoidea con TC normal.',
     cov:{tc:1, hemo:1, bioq:1, coag:1}},
    {k:'s-sincope', label:'Síncope', note:'El ECG es obligatorio en todos los casos: es lo que descarta la causa cardiogénica.',
     cov:{ecg:2, hemo:2, bioq:2, bhcg:1, tropo:1, tc:1}},
    {k:'s-digest', label:'Vómitos y diarrea', note:'Gasometría venosa si los vómitos son abundantes: alcalosis metabólica hipoclorémica.',
     cov:{hemo:2, bioq:2, gaso:1, orina:1, rxabd:1, cult:1, bhcg:1}},
    {k:'s-urinario', label:'Síntomas urinarios', note:'Urocultivo obligado en varón, embarazo, pielonefritis y toda ITU complicada.',
     cov:{orina:2, cult:2, hemo:1, bioq:1, eco:1}},
    {k:'s-hda', label:'Hemorragia digestiva', note:'Reservar sangre y cruzar. La coagulación condiciona la reversión si está anticoagulado.',
     cov:{hemo:2, bioq:2, coag:2, ecg:1, tc:1}},
    {k:'s-consc', label:'Alteración de consciencia', note:'Glucemia capilar inmediata: es lo primero y lo más reversible.',
     cov:{hemo:2, bioq:2, gaso:2, ecg:2, tc:2, orina:1, coag:1}},
    {k:'s-lumbal', label:'Lumbalgia', note:'Sin banderas rojas no requiere pruebas. Con déficit neurológico, fiebre o antecedente tumoral, imagen urgente.',
     cov:{hemo:1, bioq:1, orina:1, tc:1}}
  ]
});

/* =========================================================
   CONTENIDO
   ========================================================= */

const U_OBJ = `
<p class="comment">// urgencias — método de trabajo</p>
<div class="callout"><span class="tag">OBJETIVO</span> Tener un esquema fijo que aplicar a cualquier paciente que entra por la puerta, y tenerlo tan interiorizado que la cabeza quede libre para pensar en el diagnóstico y no en el orden de la historia.</div>

<h3>La estructura, siempre la misma</h3>
<ol>
<li><strong>Anamnesis</strong> — motivo de consulta y tiempo de evolución, ampliación dirigida del síntoma, y antecedentes.</li>
<li><strong>Exploración</strong> — general, cardiocirculatorio, pulmonar, abdomen y rectal si procede.</li>
<li><strong>Pruebas complementarias</strong></li>
<li><strong>Evolución</strong></li>
<li><strong>Tratamiento y destino</strong></li>
</ol>

<h3>Cómo se amplía la anamnesis</h3>
<p>Tras la frase de apertura, el trabajo real está en <em>orientar el síntoma</em>:</p>
<ul>
<li><strong>Si hay dolor:</strong> localización, irradiación, carácter, intensidad, inicio, duración, qué lo aumenta y qué lo alivia.</li>
<li><strong>Si hay fiebre:</strong> recorrer la focalidad infecciosa por aparatos, aunque el foco parezca evidente.</li>
<li><strong>Si hay vómitos:</strong> número, contenido (alimentario, bilioso, fecaloideo, hemático), relación con la ingesta.</li>
<li><strong>Siempre:</strong> síntomas acompañantes y los que el paciente <em>no</em> tiene, porque también orientan.</li>
</ul>

<h3>Antecedentes: el bloque que no conviene abreviar</h3>
<ul>
<li>Alergias medicamentosas (RAM)</li>
<li>Enfermedades conocidas y factores de riesgo</li>
<li>Intervenciones quirúrgicas — decisivo en el dolor abdominal</li>
<li>Tratamiento habitual y cumplimiento</li>
<li>Situación basal y funcional</li>
<li>Hábitos tóxicos</li>
<li>FUR en mujer en edad fértil</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> En el paciente oncohematológico añade siempre tres preguntas: <strong>fecha del último ciclo</strong> de quimioterapia, si es <strong>portador de catéter</strong> y cuál es su <strong>situación hematológica actual</strong>. Cambian por completo el enfoque de la fiebre y del sangrado. Ver <span class="inline-code">Infecciosas → 4. Neutropenia febril</span>.</div>

<h3>Índice de contenidos</h3>
<ol>
<li>Plantilla general de historia</li>
<li>Plantillas por síntoma, con anamnesis dirigida y exploración</li>
<li>Qué pruebas pedir según el síntoma</li>
<li>Antibioterapia por foco</li>
<li>Criterios de gravedad y de alta</li>
<li>Fármacos frecuentes en guardia</li>
</ol>
`;

const U1 = `
<p class="comment">// plantilla general de historia de urgencias</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa <strong>copiar</strong> y pégala en el sistema del hospital. Las XX son los huecos a rellenar. En el apartado 2 tienes esta misma plantilla ya adaptada a cada síntoma.</div>

<div class="tpl-box">
<div class="tpl-head">Plantilla general<button class="tpl-copy" onclick="copiarPlantilla(this)">copiar</button></div>
<pre class="tpl-text">Acude a Urgencias varón/mujer de XX años por XX de XX horas/días de evolución.

Refiere XX (ampliar el síntoma principal: localización, carácter, intensidad, irradiación, factores que lo modifican). Asocia/no asocia XX. Interrogado por focalidad infecciosa, no refiere clínica respiratoria, urinaria, digestiva ni cutánea. No otra sintomatología por aparatos.

Antecedentes personales:
- Alergias medicamentosas: no conocidas / XX
- Enfermedades: XX
- Intervenciones quirúrgicas: XX
- Tratamiento habitual: XX
- Situación basal: independiente para las actividades básicas de la vida diaria. Vive con XX.
- Hábitos tóxicos: XX
- FUR: XX (mujer en edad fértil)

Exploración física:
General: consciente, orientado y colaborador. Buen estado general. Normocoloreado, normohidratado y normoperfundido. Eupneico en reposo.
Constantes: TA XX/XX  FC XX  Tª XX  SatO2 XX %  FR XX  Glucemia XX
Cardiocirculatorio: tonos rítmicos, sin soplos ni roce. No ingurgitación yugular. Pulsos periféricos presentes y simétricos.
Pulmonar: murmullo vesicular conservado, sin ruidos sobreañadidos.
Abdomen: blando y depresible, no doloroso a la palpación. Sin masas ni megalias. Sin signos de irritación peritoneal. Ruidos hidroaéreos presentes. Puñopercusión renal bilateral negativa.
Tacto rectal: XX (si procede)
Miembros inferiores: sin edemas ni signos de trombosis venosa profunda.
Neurológico: sin focalidad. Glasgow 15.

Pruebas complementarias:
- Analítica: hemograma XX, bioquímica XX, coagulación XX
- Sistemático de orina: XX
- ECG: XX
- Rx tórax / abdomen: XX
- Otras: XX

Evolución: permanece hemodinámicamente estable durante su estancia en Urgencias. XX

Juicio clínico: XX

Tratamiento y destino: XX</pre>
</div>

<h3>Frases de exploración normal, para tener a mano</h3>
<div class="table-wrap"><table class="itable" data-table-id="u1-1">
<caption>Bloques de exploración</caption>
<thead><tr><th>Aparato</th><th>Redacción de normalidad</th></tr></thead>
<tbody>
<tr><td>General</td><td>Consciente, orientado y colaborador. Buen estado general. Normocoloreado, normohidratado y normoperfundido. Eupneico en reposo.</td></tr>
<tr><td>Cardiocirculatorio</td><td>Tonos rítmicos, sin soplos ni roce. No ingurgitación yugular. Pulsos periféricos presentes y simétricos.</td></tr>
<tr><td>Pulmonar</td><td>Murmullo vesicular conservado, sin ruidos sobreañadidos.</td></tr>
<tr><td>Abdomen</td><td>Blando y depresible, no doloroso. Sin masas ni megalias. Sin signos de irritación peritoneal. Ruidos hidroaéreos presentes. Puñopercusión renal bilateral negativa.</td></tr>
<tr><td>Rectal</td><td>Ampolla rectal ocupada por heces de características normales, sin restos hemáticos ni melenas. Próstata de tamaño y consistencia normales, no dolorosa.</td></tr>
<tr><td>Neurológico</td><td>Glasgow 15. Pupilas isocóricas y normorreactivas. Pares craneales sin alteraciones. Fuerza y sensibilidad conservadas y simétricas. Sin signos meníngeos.</td></tr>
<tr><td>Miembros inferiores</td><td>Sin edemas ni signos de trombosis venosa profunda.</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const U2 = `
<p class="comment">// plantillas por síntoma</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Elige el síntoma. Cada ficha tiene la <strong>anamnesis dirigida</strong> (qué preguntar de más), la <strong>exploración específica</strong>, las <strong>pruebas</strong> y la plantilla completa lista para copiar.</div>

<div data-widget="picker" data-src="PLANTILLAS_SINTOMA"></div>
`;

const U3 = `
<p class="comment">// qué pruebas pedir según el síntoma</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa un <strong>síntoma</strong> para ver el paquete de pruebas, o una <strong>prueba</strong> para ver en qué situaciones se pide.</div>

<div data-widget="matrix" data-src="PRUEBAS_SINTOMA"></div>

<h3>Principios al pedir pruebas</h3>
<ul>
<li><strong>Que la prueba cambie tu actuación.</strong> Si el resultado no va a modificar lo que haces, probablemente no hace falta.</li>
<li><strong>El ECG es barato, rápido e inocuo:</strong> ante la duda, hazlo. Dolor torácico, síncope, disnea, alteración de consciencia y palpitaciones lo llevan siempre.</li>
<li><strong>β-hCG</strong> en toda mujer en edad fértil con dolor abdominal, síncope o antes de una prueba con radiación.</li>
<li><strong>Hemocultivos antes del antibiótico</strong>, salvo que retrasen el tratamiento en un paciente inestable.</li>
<li><strong>La radiografía normal no descarta</strong> neumonía precoz, neumotórax pequeño ni obstrucción incipiente. Si la clínica manda, sigue.</li>
</ul>

<div class="callout warn"><span class="tag">TRAMPAS FRECUENTES</span> Dímero D en un paciente oncológico o mayor: casi siempre alto, no sirve para descartar. Troponina aislada: se eleva en muchas cosas además del infarto — lo que importa es la <strong>cinética</strong>. Y una analítica normal en las primeras horas no descarta un cuadro que está empezando.</div>
`;

const U4A = `
<p class="comment">// antibioterapia: foco urinario y genital</p>
<div class="callout warn"><span class="tag">ANTES DE EMPEZAR</span> Las pautas son orientativas. Ajusta siempre al <strong>protocolo y al mapa de resistencias de tu hospital</strong>, a la función renal y a los cultivos previos del paciente.</div>

<div class="table-wrap"><table class="itable" data-table-id="u4a-1">
<caption>Infección urinaria según el cuadro</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento de elección</th><th>Duración</th><th>Claves</th></tr></thead>
<tbody>
<tr><td><strong>Cistitis no complicada</strong><br>(mujer no gestante)</td><td>Fosfomicina trometamol 3 g dosis única<br>o nitrofurantoína 100 mg/12 h</td><td>Dosis única / 5 días</td><td>No hace falta urocultivo de rutina. <strong>Evitar quinolonas</strong> como primera línea</td></tr>
<tr><td><strong>ITU en varón</strong></td><td>Ciprofloxacino 500 mg/12 h<br>o cotrimoxazol 160/800 mg/12 h</td><td>7-14 días</td><td>Se considera <strong>siempre complicada</strong>. Urocultivo obligado. Hay que cubrir próstata: <strong>la nitrofurantoína y la fosfomicina no penetran bien</strong></td></tr>
<tr><td><strong>Cistitis en gestante</strong></td><td>Fosfomicina 3 g<br>o amoxicilina-clavulánico<br>o cefuroxima</td><td>5-7 días</td><td>Urocultivo siempre, antes y después. Quinolonas contraindicadas</td></tr>
<tr><td><strong>Pielonefritis aguda no complicada</strong><br>(ambulatoria)</td><td>Ciprofloxacino 500 mg/12 h<br>o ceftriaxona 1 g IM/IV inicial y seguir vía oral</td><td>7-10 días</td><td>Urocultivo y hemocultivos. Ecografía si no mejora en 48-72 h</td></tr>
<tr><td><strong>Pielonefritis con criterios de ingreso</strong></td><td>Ceftriaxona 1-2 g/24 h IV<br>Si riesgo de BLEE o Pseudomonas: piperacilina-tazobactam o carbapenémico</td><td>10-14 días</td><td>Ingreso si: vómitos, sepsis, embarazo, comorbilidad, obstrucción o mala tolerancia oral</td></tr>
<tr><td><strong>Prostatitis aguda</strong></td><td>Ciprofloxacino 500 mg/12 h<br>o levofloxacino 500 mg/24 h</td><td>2-4 semanas</td><td><strong>No hacer masaje prostático</strong> (riesgo de bacteriemia). En menores de 35 años cubrir además ITS</td></tr>
<tr><td><strong>Epididimitis / orquiepididimitis</strong><br>&lt;35 años o conducta de riesgo</td><td>Ceftriaxona 500 mg IM dosis única<br>+ doxiciclina 100 mg/12 h</td><td>10-14 días</td><td>Etiología de ITS: gonococo y Chlamydia. Tratar a la pareja</td></tr>
<tr><td><strong>Epididimitis</strong><br>&gt;35 años o patología urológica</td><td>Levofloxacino 500 mg/24 h<br>o ciprofloxacino 500 mg/12 h</td><td>10-14 días</td><td>Etiología por enterobacterias</td></tr>
<tr><td><strong>ITU asociada a sonda</strong></td><td>Según cultivo; empírico de amplio espectro si hay sepsis</td><td>7 días</td><td><strong>Recambiar o retirar la sonda</strong>. Solo tratar si es sintomática</td></tr>
<tr><td><strong>Bacteriuria asintomática</strong></td><td><strong>No tratar</strong></td><td>—</td><td>Excepciones: embarazo y antes de procedimiento urológico invasivo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">TORSIÓN TESTICULAR</span> Ante dolor testicular agudo, lo primero es descartarla: es una <strong>urgencia quirúrgica con ventana de horas</strong>. Orientan a torsión el inicio brusco, la ausencia de síndrome miccional y fiebre, el teste elevado y horizontalizado y el <strong>reflejo cremastérico abolido</strong>. Ante la duda, ecografía Doppler urgente y aviso a Urología — no la trates como epididimitis.</div>

<h3>Otras infecciones genitales</h3>
<div class="table-wrap"><table class="itable" data-table-id="u4a-2">
<caption>Cuadros de transmisión sexual y pélvicos</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Claves</th></tr></thead>
<tbody>
<tr><td>Uretritis / cervicitis</td><td>Ceftriaxona 500 mg IM dosis única + doxiciclina 100 mg/12 h 7 días</td><td>Se cubren gonococo y Chlamydia a la vez. Estudio y tratamiento de la pareja</td></tr>
<tr><td>Enfermedad inflamatoria pélvica</td><td>Ceftriaxona 500 mg IM + doxiciclina 100 mg/12 h + metronidazol 500 mg/12 h, 14 días</td><td>Ingreso si fiebre alta, absceso tuboovárico, embarazo o mala tolerancia oral</td></tr>
<tr><td>Vaginosis bacteriana</td><td>Metronidazol 500 mg/12 h 7 días</td><td>No es ITS. Flujo maloliente con test de aminas positivo</td></tr>
<tr><td>Candidiasis vulvovaginal</td><td>Fluconazol 150 mg dosis única</td><td>Prurito intenso con flujo grumoso</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const U4B = `
<p class="comment">// antibioterapia: foco respiratorio y ORL</p>
<div class="table-wrap"><table class="itable" data-table-id="u4b-1">
<caption>Infección respiratoria</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Duración</th><th>Claves</th></tr></thead>
<tbody>
<tr><td><strong>NAC ambulatoria sin comorbilidad</strong></td><td>Amoxicilina 1 g/8 h</td><td>5-7 días</td><td>Valorar añadir macrólido si sospecha de atípica</td></tr>
<tr><td><strong>NAC ambulatoria con comorbilidad</strong></td><td>Amoxicilina-clavulánico 875/125 mg/8 h + azitromicina<br>o levofloxacino 500 mg/24 h</td><td>5-7 días</td><td>Decidir destino con <strong>CURB-65</strong></td></tr>
<tr><td><strong>NAC con ingreso</strong></td><td>Ceftriaxona 1-2 g/24 h + azitromicina<br>o levofloxacino</td><td>5-7 días</td><td>Antígenos de neumococo y Legionella en orina</td></tr>
<tr><td><strong>NAC grave / UCI</strong></td><td>Ceftriaxona + macrólido IV; cobertura antipseudomónica si hay factores de riesgo</td><td>7-10 días</td><td>Hemocultivos siempre</td></tr>
<tr><td><strong>Neumonía aspirativa</strong></td><td>Amoxicilina-clavulánico o ertapenem</td><td>7 días</td><td>Cubrir anaerobios. Valorar disfagia</td></tr>
<tr><td><strong>EPOC agudizado</strong></td><td>Amoxicilina-clavulánico o levofloxacino</td><td>5-7 días</td><td>Antibiótico solo si cumple <strong>2 de 3 criterios de Anthonisen</strong>: más disnea, más esputo, esputo purulento</td></tr>
<tr><td><strong>Bronquitis aguda</strong></td><td><strong>No antibiótico</strong></td><td>—</td><td>Casi siempre viral</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="table-wrap"><table class="itable" data-table-id="u4b-2">
<caption>Infección ORL</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Claves</th></tr></thead>
<tbody>
<tr><td>Faringoamigdalitis</td><td>Penicilina V o amoxicilina 10 días<br>Alergia: azitromicina</td><td>Antibiótico solo con <strong>criterios de Centor</strong> ≥3: fiebre, exudado, adenopatías, ausencia de tos</td></tr>
<tr><td>Otitis media aguda</td><td>Amoxicilina a dosis altas 7 días</td><td>Amoxicilina-clavulánico si fracaso o antibiótico reciente</td></tr>
<tr><td>Sinusitis aguda</td><td>Amoxicilina-clavulánico 7-10 días</td><td>Solo si dura &gt;10 días, empeora tras mejorar, o hay fiebre alta con dolor intenso</td></tr>
<tr><td>Otitis externa</td><td>Gotas de ciprofloxacino tópico</td><td>En diabético o inmunodeprimido, descartar <strong>otitis externa maligna</strong> por Pseudomonas</td></tr>
<tr><td>Absceso periamigdalino</td><td>Drenaje + amoxicilina-clavulánico IV</td><td>Aviso a ORL. Vigilar compromiso de vía aérea</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">RELACIÓN</span> Para el CURB-65 completo, la elección de dispositivo de oxígeno y el manejo de la insuficiencia respiratoria, ver <span class="inline-code">Neumología → 2 y 3</span>.</div>
`;

const U4C = `
<p class="comment">// antibioterapia: piel y partes blandas</p>
<div class="table-wrap"><table class="itable" data-table-id="u4c-1">
<caption>Infecciones cutáneas</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Duración</th><th>Claves</th></tr></thead>
<tbody>
<tr><td><strong>Erisipela</strong></td><td>Amoxicilina o penicilina<br>Alergia: clindamicina</td><td>7-10 días</td><td>Placa bien delimitada y sobreelevada. Casi siempre estreptococo</td></tr>
<tr><td><strong>Celulitis</strong></td><td>Amoxicilina-clavulánico o cefazolina<br>Si sospecha de SAMR: cotrimoxazol, doxiciclina o clindamicina</td><td>7-10 días</td><td>Bordes mal definidos. Marcar el borde con rotulador para vigilar la progresión</td></tr>
<tr><td><strong>Absceso</strong></td><td><strong>Drenaje</strong> ± antibiótico</td><td>5-7 días</td><td>El drenaje es el tratamiento; el antibiótico se añade si hay celulitis extensa, fiebre o inmunodepresión</td></tr>
<tr><td><strong>Mordedura de perro o gato</strong></td><td>Amoxicilina-clavulánico</td><td>5-7 días (profilaxis 3-5)</td><td>Cubrir <em>Pasteurella</em>. Valorar profilaxis antitetánica y antirrábica. No suturar de primera intención salvo en cara</td></tr>
<tr><td><strong>Mordedura humana</strong></td><td>Amoxicilina-clavulánico</td><td>5-7 días</td><td>Alta tasa de infección. Cubrir <em>Eikenella</em>. Explorar tendones y articulaciones</td></tr>
<tr><td><strong>Pie diabético infectado</strong></td><td>Leve: amoxicilina-clavulánico<br>Moderado-grave: piperacilina-tazobactam ± cobertura de SAMR</td><td>Según profundidad</td><td>Descartar osteomielitis con la <strong>prueba del sondaje óseo</strong> y radiografía. Valorar isquemia</td></tr>
<tr><td><strong>Fascitis necrosante</strong></td><td><strong>Cirugía urgente</strong> + piperacilina-tazobactam o carbapenémico + <strong>clindamicina</strong> ± linezolid</td><td>Según evolución</td><td>La clindamicina se añade porque inhibe la producción de toxinas</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">SEÑALES DE ALARMA</span> Sospecha infección necrosante ante <strong>dolor desproporcionado</strong> a los hallazgos, progresión muy rápida en horas, crepitación, bullas hemorrágicas, anestesia de la zona o afectación sistémica grave. No es un diagnóstico de imagen: es de quirófano, y cada hora de retraso cuenta.</div>
`;

const U4D = `
<p class="comment">// antibioterapia: foco abdominal y digestivo</p>
<div class="table-wrap"><table class="itable" data-table-id="u4d-1">
<caption>Infección intraabdominal</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Claves</th></tr></thead>
<tbody>
<tr><td><strong>Diverticulitis no complicada</strong></td><td>Amoxicilina-clavulánico<br>o ciprofloxacino + metronidazol</td><td>Casos leves seleccionados pueden manejarse sin antibiótico. TC para estadificar</td></tr>
<tr><td><strong>Diverticulitis complicada</strong></td><td>Piperacilina-tazobactam o ertapenem IV</td><td>Absceso &gt;4 cm: drenaje percutáneo</td></tr>
<tr><td><strong>Colecistitis aguda</strong></td><td>Amoxicilina-clavulánico o ceftriaxona + metronidazol</td><td>El tratamiento definitivo es la <strong>colecistectomía</strong></td></tr>
<tr><td><strong>Colangitis aguda</strong></td><td>Piperacilina-tazobactam o ceftriaxona + metronidazol</td><td><strong>Urgencia:</strong> requiere drenaje biliar (CPRE). Tríada de Charcot: fiebre, ictericia y dolor</td></tr>
<tr><td><strong>Apendicitis</strong></td><td>Amoxicilina-clavulánico o ertapenem</td><td>El tratamiento es quirúrgico. Antibiótico solo perioperatorio salvo casos seleccionados</td></tr>
<tr><td><strong>Peritonitis bacteriana espontánea</strong></td><td>Cefotaxima o ceftriaxona 5 días</td><td>Diagnóstico: <strong>&gt;250 polimorfonucleares/µL</strong> en líquido ascítico. Añadir <strong>albúmina</strong> para prevenir el síndrome hepatorrenal</td></tr>
<tr><td><strong>Gastroenteritis aguda</strong></td><td><strong>Sin antibiótico</strong>; rehidratación</td><td>Antibiótico solo si hay fiebre alta con disentería, inmunodepresión o sepsis</td></tr>
<tr><td><strong>Colitis por C. difficile</strong></td><td>Vancomicina oral 125 mg/6 h o fidaxomicina, 10 días</td><td>Suspender el antibiótico causal. <strong>El metronidazol ya no es primera línea</strong>. Vancomicina oral porque no se absorbe</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">PRINCIPIO</span> En el foco abdominal, el antibiótico casi nunca resuelve solo: la clave es el <strong>control del foco</strong> — drenaje del absceso, desobstrucción de la vía biliar, cirugía. Si el paciente no mejora en 48-72 h, la primera pregunta no es "¿cambio de antibiótico?" sino "¿hay algo por drenar?".</div>
`;

const U4E = `
<p class="comment">// antibioterapia: SNC y otros focos</p>
<h3>Meningitis aguda</h3>
<div class="callout warn"><span class="tag">NO RETRASAR</span> Si hay sospecha clínica, el orden es: hemocultivos → <strong>dexametasona + antibiótico</strong> → TC si procede → punción lumbar. No esperes a la TC ni a la punción para dar el antibiótico.</div>

<div class="table-wrap"><table class="itable" data-table-id="u4e-1">
<caption>Tratamiento empírico según el contexto</caption>
<thead><tr><th>Situación</th><th>Tratamiento empírico</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>Adulto sano &lt;50 años</td><td>Cefotaxima o ceftriaxona a dosis altas + vancomicina</td><td>Neumococo y meningococo; la vancomicina cubre neumococo resistente</td></tr>
<tr><td><strong>&gt;50 años, inmunodeprimido, embarazo, alcoholismo</strong></td><td>Añadir <strong>ampicilina</strong></td><td>Cubrir <em>Listeria</em>, que las cefalosporinas NO cubren</td></tr>
<tr><td>Neuroquirúrgico o traumatismo</td><td>Meropenem o cefepime + vancomicina</td><td>Cubrir Pseudomonas y estafilococos</td></tr>
<tr><td>Sospecha de encefalitis herpética</td><td>Añadir <strong>aciclovir</strong> IV</td><td>Ante focalidad, crisis o alteración de conducta: no esperar a la PCR</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Cuándo hacer TC antes de la punción lumbar</h3>
<ul>
<li>Focalidad neurológica</li>
<li>Crisis convulsiva de novo</li>
<li>Bajo nivel de consciencia</li>
<li>Inmunodepresión grave</li>
<li>Papiledema o sospecha de hipertensión intracraneal</li>
</ul>

<h3>Interpretación del líquido cefalorraquídeo</h3>
<div class="table-wrap"><table class="itable" data-table-id="u4e-2">
<caption>Perfiles del LCR</caption>
<thead><tr><th></th><th>Bacteriana</th><th>Viral</th><th>Tuberculosa / fúngica</th></tr></thead>
<tbody>
<tr><td>Aspecto</td><td>Turbio</td><td>Claro</td><td>Claro u opalescente</td></tr>
<tr><td>Células</td><td>Cientos-miles, polimorfonucleares</td><td>Decenas-cientos, linfocitos</td><td>Decenas-cientos, linfocitos</td></tr>
<tr><td>Glucosa</td><td><strong>Baja</strong></td><td>Normal</td><td><strong>Baja</strong></td></tr>
<tr><td>Proteínas</td><td>Muy altas</td><td>Normales o algo altas</td><td>Muy altas</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Otros focos</h3>
<div class="table-wrap"><table class="itable" data-table-id="u4e-3">
<caption>Situaciones frecuentes en guardia</caption>
<thead><tr><th>Cuadro</th><th>Tratamiento</th><th>Claves</th></tr></thead>
<tbody>
<tr><td>Artritis séptica</td><td>Cloxacilina o cefazolina; vancomicina si riesgo de SAMR</td><td><strong>Artrocentesis antes del antibiótico</strong>. Drenaje articular</td></tr>
<tr><td>Osteomielitis</td><td>Según cultivo; tratamiento prolongado</td><td>Intentar biopsia ósea antes de iniciar</td></tr>
<tr><td>Endocarditis</td><td>Según válvula y germen; empírico con cobertura de estafilococo</td><td><strong>Tres hemocultivos separados</strong> antes del antibiótico. Ecocardiograma</td></tr>
<tr><td>Sepsis sin foco</td><td>Amplio espectro precoz según el foco más probable y la flora local</td><td>Lactato, hemocultivos y antibiótico en la primera hora</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">RELACIÓN</span> Para elegir el antibiótico por espectro, consulta la matriz interactiva de <span class="inline-code">Infecciosas → 1</span>. Para el paciente neutropénico, <span class="inline-code">Infecciosas → 4</span>.</div>
`;

const U5 = `
<p class="comment">// criterios de gravedad y decisión de destino</p>
<h3>Lo que hace que un paciente no se vaya de alta</h3>
<div class="table-wrap"><table class="itable" data-table-id="u5-1">
<caption>Señales objetivas de gravedad</caption>
<thead><tr><th>Parámetro</th><th>Alarma</th></tr></thead>
<tbody>
<tr><td>Tensión arterial sistólica</td><td>&lt;90 mmHg, o caída &gt;40 respecto a su basal</td></tr>
<tr><td>Frecuencia cardiaca</td><td>&gt;120 o &lt;40 lpm</td></tr>
<tr><td>Frecuencia respiratoria</td><td>&gt;22-30 rpm</td></tr>
<tr><td>Saturación</td><td>&lt;92 % con aire ambiente (o &lt;88 % en retenedor crónico)</td></tr>
<tr><td>Nivel de consciencia</td><td>Cualquier alteración nueva</td></tr>
<tr><td>Lactato</td><td>&gt;2 mmol/L</td></tr>
<tr><td>Diuresis</td><td>&lt;0.5 mL/kg/h</td></tr>
<tr><td>Temperatura</td><td>&gt;39 ºC con mal estado, o <strong>hipotermia</strong> &lt;36 ºC</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>qSOFA — cribado rápido de sepsis</h3>
<p>Un punto por cada uno: TAS ≤100 mmHg · frecuencia respiratoria ≥22 · alteración del nivel de consciencia. <strong>Dos o más puntos</strong> obligan a descartar sepsis activamente.</p>

<h3>Antes de dar un alta</h3>
<ul>
<li>¿Está el paciente <strong>estable y reevaluado</strong> tras el tratamiento, no solo al llegar?</li>
<li>¿<strong>Tolera la vía oral</strong> si el tratamiento es oral?</li>
<li>¿El dolor está controlado con lo que se va a llevar a casa?</li>
<li>¿Tiene <strong>soporte en domicilio</strong> y puede volver si empeora?</li>
<li>¿Le has explicado los <strong>signos de alarma</strong> concretos por los que debe regresar?</li>
<li>¿Está claro el <strong>seguimiento</strong>: con quién y cuándo?</li>
</ul>

<div class="callout warn"><span class="tag">EL PACIENTE MAYOR</span> En el anciano frágil los signos clásicos fallan: puede haber sepsis sin fiebre ni leucocitosis, e infarto sin dolor. Un cuadro confusional agudo o una caída de nueva aparición pueden ser la única manifestación de una infección o de un problema grave. Baja el umbral de sospecha.</div>

<div class="callout warn"><span class="tag">HEMATO</span> Un paciente oncohematológico con fiebre <strong>no se va de alta sin conocer el recuento de neutrófilos</strong>. Si está neutropénico, es una urgencia y necesita antibiótico en la primera hora.</div>
`;

const U6 = `
<p class="comment">// fármacos frecuentes en guardia</p>
<div class="callout warn"><span class="tag">AVISO</span> Dosis orientativas para adulto con función renal y hepática normales. Comprueba siempre alergias, función renal e interacciones antes de prescribir.</div>

<div class="table-wrap"><table class="itable" data-table-id="u6-1">
<caption>Analgesia y antitérmicos</caption>
<thead><tr><th>Fármaco</th><th>Dosis habitual</th><th>Precauciones</th></tr></thead>
<tbody>
<tr><td>Paracetamol</td><td>1 g/8 h IV u oral</td><td>Máximo 3-4 g/día. Reducir en hepatopatía y peso bajo</td></tr>
<tr><td>Metamizol</td><td>575 mg oral o 2 g IV/8 h</td><td>Riesgo de <strong>agranulocitosis</strong> e hipotensión si se infunde rápido</td></tr>
<tr><td>Ibuprofeno / dexketoprofeno</td><td>600 mg/8 h · 25-50 mg/8 h</td><td>Evitar en insuficiencia renal, sangrado digestivo, insuficiencia cardiaca y anticoagulados</td></tr>
<tr><td>Tramadol</td><td>50-100 mg/8 h</td><td>Náuseas frecuentes. Baja el umbral convulsivo</td></tr>
<tr><td>Morfina</td><td>2-4 mg IV, repetible</td><td>Titular despacio. Vigilar nivel de consciencia y respiración</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="table-wrap"><table class="itable" data-table-id="u6-2">
<caption>Sintomáticos y otros</caption>
<thead><tr><th>Fármaco</th><th>Dosis</th><th>Uso</th></tr></thead>
<tbody>
<tr><td>Metoclopramida</td><td>10 mg/8 h</td><td>Náuseas y vómitos con estasis gástrica. Riesgo de distonía en jóvenes</td></tr>
<tr><td>Ondansetrón</td><td>4-8 mg IV</td><td>Vómitos por quimioterapia. <strong>Prolonga el QT</strong></td></tr>
<tr><td>Butilescopolamina</td><td>20 mg IV/IM</td><td>Dolor cólico</td></tr>
<tr><td>Omeprazol / pantoprazol</td><td>40 mg IV</td><td>Hemorragia digestiva alta (bolo y perfusión)</td></tr>
<tr><td>Salbutamol + ipratropio</td><td>Nebulizado</td><td>Broncoespasmo</td></tr>
<tr><td>Metilprednisolona</td><td>40-60 mg IV</td><td>Agudización de asma o EPOC, reacción alérgica</td></tr>
<tr><td>Furosemida</td><td>20-40 mg IV</td><td>Sobrecarga de volumen. Vigilar potasio</td></tr>
<tr><td>Adrenalina</td><td>0.5 mg IM (1:1000)</td><td><strong>Anafilaxia</strong>: intramuscular en cara anterolateral del muslo, no subcutánea</td></tr>
<tr><td>Diazepam / midazolam</td><td>5-10 mg IV lento</td><td>Crisis convulsiva, agitación</td></tr>
<tr><td>Naloxona</td><td>0.4 mg IV, repetible</td><td>Sobredosis de opioides</td></tr>
<tr><td>Flumazenilo</td><td>0.2 mg IV</td><td>Intoxicación por benzodiacepinas. Precaución: puede desencadenar convulsiones</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">RELACIÓN</span> Para sueroterapia y elección de cristaloides, ver <span class="inline-code">Nefrología → 5</span>. Para ajuste de dosis por función renal, <span class="inline-code">Nefrología → 11</span>.</div>
`;
