// =============================================================
// MEDICINA INTERNA — árbol de secciones + contenido médico
// =============================================================
const INTERNA_TREE = {
  title:'MEDICINA INTERNA',
  intro:true,
  children: [
    {id:'interna-obj', title:'Objetivos de la rotación', leaf:true, content:()=>MI_OBJ},
    {id:'m1', title:'1. Síndrome febril y fiebre sin foco', leaf:true, content:()=>M1},
    {id:'m2', title:'2. Disnea aguda: diagnóstico diferencial', leaf:true, content:()=>M2},
    {id:'m3', title:'3. Dolor torácico', leaf:true, content:()=>M3},
    {id:'m4', title:'4. Alteración del nivel de consciencia', leaf:true, content:()=>M4},
    {id:'m5', title:'5. Síndrome constitucional y adenopatías', leaf:true, hem:true, content:()=>M5},
    {id:'m6', title:'6. Interpretación de la analítica básica', leaf:true, content:()=>M6},
    {id:'m7', title:'7. Polifarmacia y ajuste en el anciano', leaf:true, content:()=>M7},
    {id:'m8', title:'8. Nutrición del paciente hospitalizado', leaf:true, content:()=>M8},
    {id:'m9', title:'9. Cuidados paliativos y control de síntomas', leaf:true, content:()=>M9},
  ]
};

/* =========================================================
   WIDGET — control de síntomas en paliativos
   ========================================================= */
registerWidgetData('SINTOMAS_PAL', {
  items:[
    {k:'dolor', label:'Dolor', tag:'Escalera analgésica', html:
      '<h4>Dolor</h4>' +
      '<div class="pk-key"><span><b>1er escalón:</b> paracetamol · AINE</span>' +
      '<span><b>2º:</b> tramadol · codeína</span><span><b>3º:</b> morfina · fentanilo · oxicodona</span></div>' +
      '<ul>' +
      '<li><b>Dosis de rescate</b> = 1/6 de la dosis total diaria. Si necesita más de 3-4 rescates al día, sube la dosis base.</li>' +
      '<li><b>Rotación de opioides</b> si hay toxicidad o mala respuesta: reduce un 25-50 % la dosis equianalgésica al cambiar.</li>' +
      '<li><b>Dolor neuropático:</b> añade gabapentina, pregabalina o duloxetina; los opioides solos rinden peor.</li>' +
      '<li><b>Dolor óseo</b> (frecuente en mieloma y metástasis): AINE si es posible, bifosfonatos, radioterapia antiálgica.</li>' +
      '<li>Con la morfina, pauta <b>siempre</b> un laxante desde el primer día: el estreñimiento no desarrolla tolerancia.</li>' +
      '</ul>'},
    {k:'disnea', label:'Disnea', tag:'Síntoma más angustiante', html:
      '<h4>Disnea</h4>' +
      '<ul>' +
      '<li><b>Morfina a dosis bajas</b> es el tratamiento de elección: reduce la sensación de falta de aire sin deprimir la respiración a esas dosis.</li>' +
      '<li>Añadir <b>benzodiacepina</b> (lorazepam, midazolam) si hay componente ansioso, que casi siempre lo hay.</li>' +
      '<li>Medidas no farmacológicas con evidencia real: <b>aire fresco en la cara</b> (ventilador), posición incorporada, compañía.</li>' +
      '<li>El oxígeno solo ayuda si hay hipoxemia; en el paciente normoxémico no aporta más que el ventilador.</li>' +
      '</ul>'},
    {k:'nauseas', label:'Náuseas y vómitos', tag:'Elegir según el mecanismo', html:
      '<h4>Náuseas y vómitos</h4>' +
      '<ul>' +
      '<li><b>Por fármacos u opioides</b> (zona gatillo quimiorreceptora) → haloperidol.</li>' +
      '<li><b>Por estasis gástrica</b> → metoclopramida (procinético).</li>' +
      '<li><b>Por hipertensión intracraneal</b> → dexametasona.</li>' +
      '<li><b>Por quimioterapia</b> → antagonistas 5-HT3 (ondansetrón) ± aprepitant ± corticoide.</li>' +
      '<li><b>Obstrucción intestinal maligna</b> → butilescopolamina + octreótido + corticoide; evitar procinéticos si es completa.</li>' +
      '</ul>'},
    {k:'delirium', label:'Delirium', tag:'Muy infradiagnosticado', html:
      '<h4>Delirium</h4>' +
      '<ul>' +
      '<li>Busca siempre causas reversibles: <b>fármacos</b> (opioides, anticolinérgicos, benzodiacepinas), infección, hipercalcemia, hiponatremia, retención urinaria, estreñimiento, hipoxemia, dolor mal controlado.</li>' +
      '<li>Medidas ambientales primero: luz natural, orientación, presencia de familiares, retirar sondas innecesarias, respetar el sueño.</li>' +
      '<li>Farmacológico: <b>haloperidol</b> a dosis bajas. Evita benzodiacepinas salvo en delirium por abstinencia alcohólica.</li>' +
      '<li>La forma <b>hipoactiva</b> es la más frecuente y la que más se pasa por alto: el paciente tranquilo y somnoliento también está en delirium.</li>' +
      '</ul>'},
    {k:'secreciones', label:'Estertores y secreciones', tag:'Últimos días', html:
      '<h4>Estertores premortem</h4>' +
      '<ul>' +
      '<li>Producidos por secreciones en la vía aérea alta en el paciente que ya no traga.</li>' +
      '<li><b>Butilescopolamina</b> o escopolamina: actúan sobre la producción nueva, no sobre lo ya acumulado, así que hay que darlas <b>pronto</b>.</li>' +
      '<li>Evitar aspiraciones repetidas: molestan mucho y sirven de poco.</li>' +
      '<li>Explicar a la familia que el ruido angustia más al que lo escucha que al paciente, que no tiene sensación de ahogo.</li>' +
      '</ul>'},
    {k:'sedacion', label:'Sedación paliativa', tag:'Indicación concreta', html:
      '<h4>Sedación paliativa</h4>' +
      '<ul>' +
      '<li>Indicada ante un <b>síntoma refractario</b> (no controlable con los medios disponibles en un plazo razonable) en situación de últimos días.</li>' +
      '<li>Requiere <b>consentimiento</b> del paciente o, si no es posible, de su representante, y debe quedar todo registrado en la historia.</li>' +
      '<li>Fármaco habitual: <b>midazolam</b>; levomepromazina si el síntoma es delirium refractario.</li>' +
      '<li>No es eutanasia: el objetivo es aliviar el síntoma, ajustando la dosis al nivel mínimo que lo consigue.</li>' +
      '</ul>'}
  ]
});

/* =========================================================
   CONTENIDO
   ========================================================= */

const MI_OBJ = `
<p class="comment">// medicina interna — la base transversal de todas las guardias</p>
<div class="callout"><span class="tag">OBJETIVO</span> Ordenar el razonamiento clínico ante los grandes síndromes de planta y guardia: fiebre, disnea, dolor torácico y alteración de la consciencia. Y adquirir dos habilidades que la hematología usa a diario: ajustar tratamientos en el paciente frágil y controlar síntomas al final de la vida.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Síndrome febril y fiebre sin foco</li>
<li>Disnea aguda: diagnóstico diferencial</li>
<li>Dolor torácico</li>
<li>Alteración del nivel de consciencia</li>
<li>Síndrome constitucional y adenopatías</li>
<li>Interpretación de la analítica básica</li>
<li>Polifarmacia y ajuste en el anciano</li>
<li>Nutrición del paciente hospitalizado</li>
<li>Cuidados paliativos y control de síntomas</li>
</ol>
`;

const M1 = `
<p class="comment">// síndrome febril</p>
<h3>Lo primero: ¿fiebre de qué tipo?</h3>
<ul>
<li><strong>Fiebre con foco evidente</strong> → tratar el foco.</li>
<li><strong>Fiebre sin foco en paciente estable</strong> → estudio ordenado.</li>
<li><strong>Fiebre en inmunodeprimido o neutropénico</strong> → urgencia: ver <span class="inline-code">Infecciosas → 4</span>.</li>
<li><strong>Fiebre de origen desconocido:</strong> &gt;38.3 ºC durante &gt;3 semanas sin diagnóstico tras estudio inicial adecuado.</li>
</ul>

<h3>Las cuatro grandes categorías de la fiebre prolongada</h3>
<div class="table-wrap"><table class="itable" data-table-id="m1-1">
<caption>Causas de fiebre de origen desconocido</caption>
<thead><tr><th>Categoría</th><th>Ejemplos</th><th>Pistas</th></tr></thead>
<tbody>
<tr><td>Infecciosa</td><td>Endocarditis, tuberculosis, absceso profundo, brucelosis, VIH</td><td>Soplo nuevo, viajes, contacto animal, conductas de riesgo</td></tr>
<tr><td>Neoplásica</td><td>Linfoma, leucemia, hipernefroma, hepatocarcinoma</td><td>Síndrome constitucional, adenopatías, LDH alta, sudoración nocturna</td></tr>
<tr><td>Inflamatoria / autoinmune</td><td>Arteritis de células gigantes, polimialgia, enfermedad de Still, vasculitis</td><td>VSG muy alta, clínica articular, cefalea temporal en el mayor</td></tr>
<tr><td>Miscelánea</td><td>Fiebre por fármacos, tromboembolismo, hematoma en reabsorción, hipertiroidismo, fiebre facticia</td><td>Relación temporal con un fármaco nuevo, eosinofilia</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Fiebre por fármacos</h3>
<ul>
<li>Diagnóstico de exclusión, pero muy frecuente y muy olvidado.</li>
<li>Pistas: paciente que "está bien" pese a la fiebre, eosinofilia, rash, relación temporal con un fármaco nuevo.</li>
<li>Culpables habituales: betalactámicos, sulfamidas, alopurinol, anticomiciales, anfotericina B, bleomicina, citarabina.</li>
<li>Cede en 48-72 h tras retirar el responsable.</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> En hematología, antes de asumir infección conviene descartar tres causas propias: <strong>fiebre tumoral</strong> (linfoma, leucemia activa), <strong>fiebre por citocinas</strong> (síndrome de liberación tras CAR-T o anticuerpos biespecíficos) y <strong>reacción transfusional</strong>. Las tres se manejan de forma muy distinta a una sepsis.</div>
`;

const M2 = `
<p class="comment">// disnea aguda — diagnóstico diferencial</p>
<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — orientación rápida en la cabecera</div>
<div class="fa-step" data-step="start">
  <p><strong>Paciente con disnea aguda. ¿Qué encuentras al auscultar?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'crepitantes')">Crepitantes bilaterales</button>
  <button class="flow-btn" onclick="faGoTo(this,'sibilancias')">Sibilancias</button>
  <button class="flow-btn" onclick="faGoTo(this,'asimetrico')">Hipoventilación asimétrica</button>
  <button class="flow-btn" onclick="faGoTo(this,'limpio')">Auscultación normal</button>
</div>
<div class="fa-step" data-step="crepitantes" hidden>
  <div class="callout"><span class="tag">SOSPECHA</span> Insuficiencia cardiaca / edema agudo de pulmón, neumonía bilateral, SDRA, sobrecarga de volumen (frecuente tras transfusión o sueroterapia). Pide radiografía, NT-proBNP, gasometría y ecoscopia si puedes: las líneas B apoyan origen cardiogénico.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="sibilancias" hidden>
  <div class="callout"><span class="tag">SOSPECHA</span> Broncoespasmo: asma, EPOC agudizado, reacción alérgica. Ojo con el "asma cardial": la insuficiencia cardiaca también puede dar sibilancias. Si hay estridor y no sibilancias, piensa en obstrucción de vía aérea alta y es una emergencia.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="asimetrico" hidden>
  <div class="callout"><span class="tag">SOSPECHA</span> Derrame pleural, neumotórax, atelectasia o condensación extensa. Percute: mate sugiere derrame, timpánico sugiere neumotórax. Radiografía urgente; si hay inestabilidad con timpanismo, piensa en neumotórax a tensión y no esperes a la imagen.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="limpio" hidden>
  <div class="callout warn"><span class="tag">CUIDADO</span> La auscultación normal con disnea e hipoxemia es la presentación típica del <strong>tromboembolismo pulmonar</strong>. También: anemia grave, acidosis metabólica con respiración de Kussmaul, ansiedad (diagnóstico de exclusión), shunt intracardiaco. En un paciente oncohematológico, el TEP es la primera sospecha.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Datos que orientan rápido</h3>
<div class="table-wrap"><table class="itable" data-table-id="m2-1">
<caption>Pistas de cabecera</caption>
<thead><tr><th>Hallazgo</th><th>Orienta a</th></tr></thead>
<tbody>
<tr><td>Ortopnea y disnea paroxística nocturna</td><td>Insuficiencia cardiaca</td></tr>
<tr><td>Dolor pleurítico + disnea súbita</td><td>TEP o neumotórax</td></tr>
<tr><td>Fiebre y expectoración purulenta</td><td>Neumonía</td></tr>
<tr><td>Ingurgitación yugular con campos limpios</td><td>TEP, taponamiento, neumotórax a tensión</td></tr>
<tr><td>Hipoxemia que no mejora con oxígeno</td><td>Shunt: SDRA, atelectasia extensa, cortocircuito</td></tr>
<tr><td>Palidez extrema sin hipoxemia</td><td>Anemia aguda</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const M3 = `
<p class="comment">// dolor torácico</p>
<h3>Las cinco causas que no puedes pasar por alto</h3>
<ol>
<li><strong>Síndrome coronario agudo</strong> — ECG en los primeros 10 minutos.</li>
<li><strong>Tromboembolismo pulmonar</strong>.</li>
<li><strong>Disección aórtica</strong> — dolor desgarrante irradiado a espalda, asimetría de pulsos o de tensión entre brazos.</li>
<li><strong>Neumotórax a tensión</strong>.</li>
<li><strong>Rotura esofágica</strong> — tras vómitos intensos, enfisema subcutáneo.</li>
</ol>

<div class="table-wrap"><table class="itable" data-table-id="m3-1">
<caption>Características que orientan</caption>
<thead><tr><th>Tipo</th><th>Descripción</th><th>Modificadores</th></tr></thead>
<tbody>
<tr><td>Isquémico</td><td>Opresivo, retroesternal, irradiado a brazo o mandíbula, con cortejo vegetativo</td><td>Empeora con el esfuerzo, cede con reposo o nitratos</td></tr>
<tr><td>Pericárdico</td><td>Punzante, mantenido</td><td>Mejora al inclinarse hacia delante, empeora en decúbito y con la inspiración</td></tr>
<tr><td>Pleurítico</td><td>Punzante, localizado</td><td>Aumenta claramente con la respiración y la tos</td></tr>
<tr><td>Aórtico</td><td>Desgarrante, máximo desde el inicio, irradiado a espalda</td><td>Asimetría de pulsos o de TA</td></tr>
<tr><td>Osteomuscular</td><td>Localizado a punta de dedo</td><td>Reproducible con la palpación</td></tr>
<tr><td>Esofágico</td><td>Urente, retroesternal</td><td>Relación con las comidas y el decúbito</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">RELACIÓN</span> Para la lectura del ECG y el manejo del síndrome coronario, ver <span class="inline-code">Cardiología → 1 y 3</span>. Para el TEP, <span class="inline-code">Neumología → 7</span>.</div>
`;

const M4 = `
<p class="comment">// alteración del nivel de consciencia</p>
<h3>Lo urgente primero</h3>
<p>Antes de cualquier estudio: vía aérea, respiración, circulación, <strong>glucemia capilar</strong> y pupilas. La hipoglucemia y la intoxicación por opioides son reversibles en segundos y no perdonan la demora.</p>

<h3>Causas por sistemas</h3>
<div class="table-wrap"><table class="itable" data-table-id="m4-1">
<caption>Diagnóstico diferencial</caption>
<thead><tr><th>Grupo</th><th>Causas</th></tr></thead>
<tbody>
<tr><td>Metabólico</td><td>Hipoglucemia, hiponatremia, hipercalcemia, uremia, encefalopatía hepática, hipoxia, hipercapnia</td></tr>
<tr><td>Tóxico</td><td>Opioides, benzodiacepinas, alcohol, anticolinérgicos, síndrome serotoninérgico</td></tr>
<tr><td>Infeccioso</td><td>Meningitis, encefalitis, sepsis con encefalopatía</td></tr>
<tr><td>Neurológico estructural</td><td>Ictus, hemorragia, hematoma subdural, tumor, hipertensión intracraneal</td></tr>
<tr><td>Convulsivo</td><td>Estado postcrítico, estatus no convulsivo</td></tr>
<tr><td>Endocrino</td><td>Coma mixedematoso, crisis adrenal, cetoacidosis, estado hiperosmolar</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Exploración que más rinde</h3>
<ul>
<li><strong>Pupilas:</strong> puntiformes → opioides o lesión protuberancial; midriasis arreactiva → anticolinérgicos, herniación; anisocoria → lesión estructural.</li>
<li><strong>Signos de focalidad</strong> → sugieren causa estructural: TC urgente.</li>
<li><strong>Rigidez de nuca y fiebre</strong> → meningitis: no retrases el antibiótico por hacer la punción lumbar.</li>
<li><strong>Asterixis</strong> → encefalopatía metabólica (hepática, urémica, hipercápnica).</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> En el paciente hematológico añade a la lista: <strong>hiperleucocitosis con leucostasis</strong>, infiltración meníngea, hemorragia intracraneal por trombopenia, síndrome de encefalopatía asociada a CAR-T (ICANS), PRES por inhibidores de calcineurina y encefalitis viral. Una TC normal no descarta ninguna de ellas.</div>
`;

const M5 = `
<p class="comment">// síndrome constitucional y adenopatías</p>
<h3>Síndrome constitucional</h3>
<p>Astenia, anorexia y pérdida de peso involuntaria (&gt;5 % en 6 meses). No es un diagnóstico: es una señal de alarma que obliga a buscar neoplasia, infección crónica, enfermedad inflamatoria o causa endocrina.</p>

<h3>Adenopatías: qué las hace sospechosas</h3>
<div class="table-wrap"><table class="itable" data-table-id="m5-1">
<caption>Benignas frente a sospechosas</caption>
<thead><tr><th>Rasgo</th><th>Sugiere benignidad</th><th>Sugiere malignidad</th></tr></thead>
<tbody>
<tr><td>Tamaño</td><td>&lt;1 cm</td><td>&gt;2 cm</td></tr>
<tr><td>Consistencia</td><td>Blanda, elástica</td><td>Dura, pétrea</td></tr>
<tr><td>Movilidad</td><td>Móvil</td><td>Adherida a planos</td></tr>
<tr><td>Dolor</td><td>Dolorosa (inflamatoria)</td><td>Indolora</td></tr>
<tr><td>Evolución</td><td>Regresa en semanas</td><td>Crecimiento progresivo</td></tr>
<tr><td>Localización</td><td>Cervical o inguinal aislada</td><td><strong>Supraclavicular</strong>, mediastínica, retroperitoneal</td></tr>
<tr><td>Acompañantes</td><td>Cuadro infeccioso claro</td><td>Síntomas B: fiebre, sudoración nocturna, pérdida de peso</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">BIOPSIA</span> Si sospechas linfoma, la técnica correcta es la <strong>biopsia excisional del ganglio entero</strong>, no la PAAF: el diagnóstico depende de la arquitectura ganglionar, que la punción destruye. Elige el ganglio más grande y de más tiempo de evolución, evitando el inguinal si hay alternativa.</div>

<h3>Otros datos con valor</h3>
<ul>
<li><strong>LDH elevada:</strong> marcador de carga tumoral y recambio celular, y factor pronóstico en linfomas.</li>
<li><strong>Esplenomegalia:</strong> síndrome linfoproliferativo, mieloproliferativo, hipertensión portal, infección (mononucleosis, endocarditis, leishmaniasis).</li>
<li><strong>Prurito sin lesiones cutáneas:</strong> clásico del linfoma de Hodgkin y de la policitemia vera (prurito acuagénico).</li>
</ul>
`;

const M6 = `
<p class="comment">// interpretación de la analítica básica</p>
<h3>Hemograma: pensar por líneas</h3>
<div class="table-wrap"><table class="itable" data-table-id="m6-1">
<caption>Qué mirar en cada serie</caption>
<thead><tr><th>Alteración</th><th>Primeros pasos</th></tr></thead>
<tbody>
<tr><td>Anemia</td><td>VCM (micro/normo/macrocítica) + reticulocitos (regenerativa o no) → ver <span class="inline-code">Nefrología → 19</span> para la anemia renal</td></tr>
<tr><td>Leucocitosis</td><td>Fórmula: neutrofilia (infección, corticoides, estrés), linfocitosis (viral, síndrome linfoproliferativo), eosinofilia (alergia, parásitos, fármacos)</td></tr>
<tr><td>Leucopenia</td><td>¿Aislada o pancitopenia? ¿Fármacos? ¿Infección viral? ¿Infiltración medular?</td></tr>
<tr><td>Trombopenia</td><td>Descartar pseudotrombopenia por EDTA (repetir en citrato), luego consumo vs producción</td></tr>
<tr><td>Pancitopenia</td><td>Siempre pensar en médula: aplasia, infiltración, mielodisplasia, déficit de B12/fólico, hiperesplenismo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Trampas de laboratorio que conviene conocer</h3>
<ul>
<li><strong>Pseudohiperpotasemia:</strong> hemólisis de la muestra, o leucocitosis y trombocitosis extremas. Frecuente en síndromes mieloproliferativos.</li>
<li><strong>Pseudohiponatremia:</strong> hiperlipidemia o hiperproteinemia — típica del mieloma con paraproteína alta.</li>
<li><strong>Pseudotrombopenia por EDTA:</strong> agregados plaquetarios in vitro; repetir en tubo de citrato.</li>
<li><strong>Calcio total engañoso:</strong> corregir por albúmina o medir calcio iónico.</li>
<li><strong>Creatinina en el paciente caquéctico:</strong> puede ser "normal" con filtrado glomerular muy bajo por poca masa muscular.</li>
</ul>

<h3>Reactantes de fase aguda</h3>
<ul>
<li><strong>PCR:</strong> sube y baja rápido; útil para seguir la respuesta al tratamiento.</li>
<li><strong>Procalcitonina:</strong> más específica de infección bacteriana; ayuda a decidir la retirada del antibiótico, aunque en el neutropénico su rendimiento es menor.</li>
<li><strong>VSG:</strong> lenta; muy alta en arteritis de células gigantes, mieloma e infecciones crónicas.</li>
<li><strong>Ferritina:</strong> reactante de fase aguda — una ferritina normal en un paciente inflamado no descarta ferropenia. Valores extremadamente altos orientan a síndrome hemofagocítico.</li>
</ul>
`;

const M7 = `
<p class="comment">// polifarmacia y ajuste en el paciente frágil</p>
<h3>Principios</h3>
<ul>
<li><strong>Revisar la lista completa</strong> en cada ingreso: incluidos los fármacos que el paciente toma por su cuenta y los suplementos.</li>
<li><strong>Deprescribir</strong> es un acto médico: quitar un fármaco innecesario mejora tanto como añadir uno bueno.</li>
<li><strong>Empezar bajo e ir despacio</strong> con cualquier fármaco nuevo en el anciano.</li>
<li>Ante un síntoma nuevo, la primera hipótesis debe ser <strong>efecto adverso del último fármaco introducido</strong>, no una enfermedad nueva. Evita la cascada de prescripción.</li>
</ul>

<h3>Fármacos de riesgo en el anciano</h3>
<div class="table-wrap"><table class="itable" data-table-id="m7-1">
<caption>Los que más problemas dan</caption>
<thead><tr><th>Grupo</th><th>Riesgo principal</th></tr></thead>
<tbody>
<tr><td>Benzodiacepinas de vida media larga</td><td>Caídas, fracturas, delirium</td></tr>
<tr><td>Anticolinérgicos</td><td>Confusión, retención urinaria, estreñimiento, sequedad</td></tr>
<tr><td>AINE</td><td>Sangrado digestivo, insuficiencia renal, descompensación de insuficiencia cardiaca</td></tr>
<tr><td>Antipsicóticos</td><td>Mortalidad aumentada en demencia, parkinsonismo</td></tr>
<tr><td>Digoxina a dosis altas</td><td>Intoxicación, sobre todo si hay deterioro renal</td></tr>
<tr><td>Sulfonilureas de acción larga</td><td>Hipoglucemias graves y prolongadas</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Valoración geriátrica antes de un tratamiento intensivo</h3>
<p>Antes de indicar quimioterapia intensiva en un paciente mayor, la edad cronológica importa menos que la <strong>fragilidad</strong>: situación funcional (índice de Barthel), cognitiva, nutricional, comorbilidad y soporte social. Existen escalas específicas de valoración geriátrica en oncología que predicen mejor la toxicidad que la impresión clínica.</p>

<div class="callout"><span class="tag">RELACIÓN</span> Para el ajuste de dosis por función renal, ver <span class="inline-code">Nefrología → 11</span>. Para interacciones con inmunosupresores, <span class="inline-code">Nefrología → 18b</span>.</div>
`;

const M8 = `
<p class="comment">// nutrición del paciente hospitalizado</p>
<h3>Por qué importa</h3>
<p>La desnutrición hospitalaria alarga estancias, aumenta infecciones y empeora la cicatrización y la tolerancia al tratamiento. En el paciente onco-hematológico se suma la mucositis, las náuseas, la anorexia tumoral y la inflamación crónica.</p>

<h3>Cribado y valoración</h3>
<ul>
<li>Herramientas de cribado como MUST o NRS-2002 al ingreso.</li>
<li>Datos que orientan: pérdida de peso involuntaria, ingesta inferior al 50 % durante &gt;1 semana, albúmina baja (más marcador de inflamación que de nutrición), pérdida de masa muscular.</li>
</ul>

<h3>Escalera de soporte nutricional</h3>
<ol>
<li><strong>Dieta oral adaptada</strong>: fraccionada, enriquecida, con las texturas que tolere.</li>
<li><strong>Suplementos orales</strong> si no cubre requerimientos.</li>
<li><strong>Nutrición enteral</strong> por sonda: si el tubo digestivo funciona, se usa. Es más fisiológica, mantiene la barrera intestinal y tiene menos complicaciones infecciosas.</li>
<li><strong>Nutrición parenteral</strong>: solo si el intestino no es utilizable (íleo, obstrucción, mucositis grave, enteritis por EICH). Mayor riesgo de infección de catéter y de alteraciones metabólicas.</li>
</ol>

<div class="callout warn"><span class="tag">SÍNDROME DE REALIMENTACIÓN</span> En el paciente muy desnutrido, reiniciar el aporte calórico provoca una entrada masiva de fósforo, potasio y magnesio a la célula. Puede causar arritmias, insuficiencia cardiaca y muerte. Prevención: empezar con pocas calorías, <strong>tiamina antes de los hidratos</strong>, y monitorizar fósforo, potasio y magnesio a diario los primeros días.</div>
`;

const M9 = `
<p class="comment">// cuidados paliativos y control de síntomas</p>
<div class="callout"><span class="tag">IDEA</span> Los cuidados paliativos no son "cuando ya no hay nada que hacer": son un abordaje simultáneo al tratamiento activo, que mejora la calidad de vida y en algunos escenarios incluso la supervivencia. En hematología se introducen demasiado tarde con frecuencia.</div>

<h3>Control de síntomas</h3>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cada síntoma para ver el enfoque y los fármacos concretos.</div>
<div data-widget="picker" data-src="SINTOMAS_PAL"></div>

<h3>Equivalencias de opioides (orientativas)</h3>
<div class="table-wrap"><table class="itable" data-table-id="m9-1">
<caption>Comprobar siempre con la tabla de tu centro antes de rotar</caption>
<thead><tr><th>Fármaco</th><th>Equivalencia aproximada</th></tr></thead>
<tbody>
<tr><td>Morfina oral</td><td>Referencia</td></tr>
<tr><td>Morfina subcutánea</td><td>La mitad de la dosis oral</td></tr>
<tr><td>Morfina intravenosa</td><td>Un tercio de la dosis oral</td></tr>
<tr><td>Oxicodona oral</td><td>Aproximadamente el doble de potente que la morfina oral</td></tr>
<tr><td>Tramadol oral</td><td>Aproximadamente una décima parte de la potencia de la morfina</td></tr>
<tr><td>Fentanilo transdérmico</td><td>Según tabla específica; útil si hay dolor estable y mala vía oral</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Conversaciones difíciles</h3>
<ul>
<li>Explorar primero <strong>qué sabe y qué quiere saber</strong> el paciente antes de informar.</li>
<li>Hablar de <strong>objetivos</strong> ("qué es importante para usted") antes que de tratamientos concretos.</li>
<li>Registrar en la historia las decisiones de <strong>limitación del esfuerzo terapéutico</strong> y quién participó en ellas.</li>
<li>Anticipar: es mejor decidir sobre intubación o reanimación con tiempo que a las tres de la madrugada en una guardia.</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> La trayectoria de las hemopatías es distinta a la de los tumores sólidos: son enfermedades con posibilidad de respuesta hasta fases muy avanzadas, lo que hace difícil identificar el punto de cambio de enfoque. Por eso conviene un modelo de <strong>atención compartida</strong>, con paliativos implicados en paralelo al tratamiento activo, y no una derivación tardía.</div>
`;
