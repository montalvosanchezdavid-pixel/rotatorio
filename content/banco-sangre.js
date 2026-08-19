// =============================================================
// BANCO DE SANGRE — árbol de secciones + contenido médico
// =============================================================
const BANCO_TREE = {
  title:'BANCO DE SANGRE',
  intro:true,
  children: [
    {id:'banco-obj', title:'Objetivos de la rotación', leaf:true, content:()=>B_OBJ},
    {id:'b1', title:'1. Grupos sanguíneos y compatibilidad', children:[
      {id:'b1a', title:'a. Sistema ABO y Rh', leaf:true, content:()=>B1A},
      {id:'b1b', title:'b. Compatibilidad (interactivo)', leaf:true, content:()=>B1B},
    ]},
    {id:'b2', title:'2. Componentes sanguíneos', leaf:true, content:()=>B2},
    {id:'b3', title:'3. Pruebas pretransfusionales', leaf:true, content:()=>B3},
    {id:'b4', title:'4. Indicaciones y umbrales', leaf:true, content:()=>B4},
    {id:'b5', title:'5. Reacciones transfusionales (interactivo)', leaf:true, content:()=>B5},
    {id:'b6', title:'6. Transfusión masiva', leaf:true, content:()=>B6},
    {id:'b7', title:'7. Modificaciones de los componentes', leaf:true, hem:true, content:()=>B7},
    {id:'b8', title:'8. Transfusión en el trasplante y la aloinmunización', leaf:true, hem:true, content:()=>B8},
    {id:'b9', title:'9. Donación y aféresis', leaf:true, content:()=>B9},
  ]
};

/* =========================================================
   WIDGETS
   ========================================================= */
registerWidgetData('ABO_HEMATIES', {
  caption:'Receptor ↓ / Donante →',
  legend:{2:'Compatible', 1:'Solo en emergencia', 0:'Incompatible'},
  labels:{rowYes:'Puede recibir de:', colYes:'Puede donar a:'},
  hint:'Pulsa un receptor (izquierda) o un donante (arriba) para ver su compatibilidad.',
  colTitle:'Ver a quién puede donar ',
  cols:[
    {k:'oneg', label:'O −', group:'Donante', note:'Donante universal de hematíes: sin antígenos A, B ni D.'},
    {k:'opos', label:'O +', group:'Donante'},
    {k:'aneg', label:'A −', group:'Donante'},
    {k:'apos', label:'A +', group:'Donante'},
    {k:'bneg', label:'B −', group:'Donante'},
    {k:'bpos', label:'B +', group:'Donante'},
    {k:'abneg',label:'AB −',group:'Donante'},
    {k:'abpos',label:'AB +',group:'Donante'}
  ],
  rows:[
    {k:'r-oneg', label:'O −', family:'Receptor', note:'Solo puede recibir O negativo. Es el receptor más restringido y por eso el O− es la reserva crítica de todo banco de sangre.',
     cov:{oneg:2}},
    {k:'r-opos', label:'O +', family:'Receptor', note:'Recibe cualquier hematíe del grupo O.',
     cov:{oneg:2, opos:2}},
    {k:'r-aneg', label:'A −', family:'Receptor', note:'Tiene anti-B de forma natural y puede formar anti-D.',
     cov:{oneg:2, aneg:2}},
    {k:'r-apos', label:'A +', family:'Receptor', cov:{oneg:2, opos:2, aneg:2, apos:2}},
    {k:'r-bneg', label:'B −', family:'Receptor', note:'Tiene anti-A de forma natural.',
     cov:{oneg:2, bneg:2}},
    {k:'r-bpos', label:'B +', family:'Receptor', cov:{oneg:2, opos:2, bneg:2, bpos:2}},
    {k:'r-abneg',label:'AB −',family:'Receptor', note:'Sin anti-A ni anti-B; solo la barrera Rh.',
     cov:{oneg:2, aneg:2, bneg:2, abneg:2}},
    {k:'r-abpos',label:'AB +',family:'Receptor', note:'Receptor universal de hematíes: no tiene anti-A, anti-B ni anti-D.',
     cov:{oneg:2, opos:2, aneg:2, apos:2, bneg:2, bpos:2, abneg:2, abpos:2}}
  ]
});

registerWidgetData('ABO_PLASMA', {
  caption:'Receptor ↓ / Donante →',
  legend:{2:'Compatible', 1:'Precaución', 0:'Incompatible'},
  labels:{rowYes:'Puede recibir plasma de:', colYes:'Puede donar plasma a:'},
  hint:'Pulsa un receptor (izquierda) o un donante (arriba) para ver su compatibilidad.',
  colTitle:'Ver a quién puede donar plasma ',
  cols:[
    {k:'p-o',  label:'O',  group:'Plasma donante', note:'El plasma O lleva anti-A y anti-B: solo sirve para receptores O.'},
    {k:'p-a',  label:'A',  group:'Plasma donante'},
    {k:'p-b',  label:'B',  group:'Plasma donante'},
    {k:'p-ab', label:'AB', group:'Plasma donante', note:'Donante universal de plasma: no contiene anti-A ni anti-B.'}
  ],
  rows:[
    {k:'pr-o',  label:'O',  family:'Receptor', note:'Para plasma, el receptor O es el más permisivo: acepta todos los grupos.',
     cov:{'p-o':2, 'p-a':2, 'p-b':2, 'p-ab':2}},
    {k:'pr-a',  label:'A',  family:'Receptor', cov:{'p-a':2, 'p-ab':2}},
    {k:'pr-b',  label:'B',  family:'Receptor', cov:{'p-b':2, 'p-ab':2}},
    {k:'pr-ab', label:'AB', family:'Receptor', note:'Solo acepta plasma AB: es el más restringido, justo al revés que con los hematíes.',
     cov:{'p-ab':2}}
  ]
});

registerWidgetData('COMPONENTES', {
  items:[
    {k:'ch', label:'Concentrado de hematíes', tag:'~250-300 mL', html:
      '<h4>Concentrado de hematíes</h4>' +
      '<div class="pk-key"><span><b>Sube:</b> ~1 g/dL de Hb por unidad</span>' +
      '<span><b>Conservación:</b> 2-6 ºC, hasta 42 días</span><span><b>Infusión:</b> en menos de 4 h</span></div>' +
      '<ul>' +
      '<li>Indicado para mejorar el transporte de oxígeno, no para corregir un número.</li>' +
      '<li>Requiere <b>compatibilidad ABO y Rh</b> y pruebas cruzadas.</li>' +
      '<li>Solo se infunde con <b>suero fisiológico</b>: el Ringer lactato contiene calcio y puede coagular la unidad; los glucosados producen hemólisis.</li>' +
      '<li>En el paciente cardiópata o anciano, transfundir lento y valorar diurético para evitar sobrecarga (TACO).</li>' +
      '</ul>'},
    {k:'plaq', label:'Concentrado de plaquetas', tag:'Pool o aféresis', html:
      '<h4>Concentrado de plaquetas</h4>' +
      '<div class="pk-key"><span><b>Sube:</b> ~20-40 × 10⁹/L por dosis</span>' +
      '<span><b>Conservación:</b> 20-24 ºC en agitación, 5-7 días</span></div>' +
      '<ul>' +
      '<li>Al conservarse a temperatura ambiente son el componente con <b>mayor riesgo de contaminación bacteriana</b>.</li>' +
      '<li>Se prefiere ABO idéntico; si no hay, se puede cruzar el grupo vigilando el volumen de plasma incompatible.</li>' +
      '<li>En mujeres en edad fértil Rh negativas que reciben plaquetas Rh positivas, valorar <b>profilaxis anti-D</b>.</li>' +
      '<li><b>Refractariedad:</b> si el incremento post-transfusional es pobre de forma repetida, distinguir causas inmunes (anticuerpos HLA) de no inmunes (fiebre, sepsis, esplenomegalia, CID, anfotericina).</li>' +
      '</ul>'},
    {k:'pfc', label:'Plasma fresco congelado', tag:'~200-300 mL', html:
      '<h4>Plasma fresco congelado</h4>' +
      '<div class="pk-key"><span><b>Dosis:</b> 10-15 mL/kg</span><span><b>Aporta:</b> todos los factores de coagulación</span></div>' +
      '<ul>' +
      '<li>Indicado en <b>déficit múltiple de factores con sangrado</b>: CID, hepatopatía, transfusión masiva.</li>' +
      '<li>Requiere <b>compatibilidad ABO inversa</b> a la de los hematíes: el AB es el donante universal de plasma.</li>' +
      '<li>Es el tratamiento de reposición en la <b>PTT</b>, donde aporta ADAMTS13.</li>' +
      '<li>No usarlo para "corregir un INR" en un paciente que no sangra ni va a ser intervenido: el complejo protrombínico es más eficaz y con menos volumen.</li>' +
      '<li>Es el componente que más se asocia a <b>TRALI</b>.</li>' +
      '</ul>'},
    {k:'crio', label:'Crioprecipitado', tag:'Rico en fibrinógeno', html:
      '<h4>Crioprecipitado</h4>' +
      '<div class="pk-key"><span><b>Contiene:</b> fibrinógeno, FvW, factor VIII, factor XIII, fibronectina</span></div>' +
      '<ul>' +
      '<li>Indicación principal: <b>hipofibrinogenemia</b> con sangrado (objetivo &gt;150 mg/dL, y &gt;200 en obstetricia).</li>' +
      '<li>Situaciones típicas: CID, leucemia promielocítica, transfusión masiva, sangrado tras fibrinólisis.</li>' +
      '<li>Donde exista, el <b>concentrado de fibrinógeno</b> es preferible: dosis exacta, menor volumen y menor riesgo infeccioso.</li>' +
      '</ul>'}
  ]
});

/* =========================================================
   CONTENIDO
   ========================================================= */

const B_OBJ = `
<p class="comment">// banco de sangre — medicina transfusional</p>
<div class="callout"><span class="tag">OBJETIVO</span> Saber qué componente pedir y por qué, entender la compatibilidad más allá de memorizarla, reconocer y actuar ante una reacción transfusional, y manejar las particularidades del paciente hematológico: irradiación, refractariedad plaquetaria y trasplante con cambio de grupo.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Grupos sanguíneos y compatibilidad</li>
<li>Componentes sanguíneos</li>
<li>Pruebas pretransfusionales</li>
<li>Indicaciones y umbrales</li>
<li>Reacciones transfusionales</li>
<li>Transfusión masiva</li>
<li>Modificaciones de los componentes</li>
<li>Transfusión en el trasplante y aloinmunización</li>
<li>Donación y aféresis</li>
</ol>
<div class="callout warn"><span class="tag">REGLA DE ORO</span> El error transfusional más grave sigue siendo el <strong>error de identificación</strong>: paciente equivocado, muestra mal etiquetada o bolsa cruzada. La comprobación a pie de cama, con el paciente presente, no se delega ni se salta nunca.</div>
`;

const B1A = `
<p class="comment">// sistema ABO y sistema Rh</p>
<h3>ABO: por qué es tan crítico</h3>
<p>Es el único sistema en el que existen <strong>anticuerpos naturales</strong>: una persona del grupo A tiene anti-B desde los primeros meses de vida sin haber estado expuesta nunca. Son de tipo IgM, activan el complemento y producen <strong>hemólisis intravascular inmediata</strong>. Por eso un error ABO puede matar en minutos.</p>

<div class="table-wrap"><table class="itable" data-table-id="b1a-1">
<caption>Antígenos y anticuerpos del sistema ABO</caption>
<thead><tr><th>Grupo</th><th>Antígeno en el hematíe</th><th>Anticuerpo en el plasma</th><th>Frecuencia aproximada</th></tr></thead>
<tbody>
<tr><td>O</td><td>Ninguno</td><td>Anti-A y anti-B</td><td>~45 %</td></tr>
<tr><td>A</td><td>A</td><td>Anti-B</td><td>~40 %</td></tr>
<tr><td>B</td><td>B</td><td>Anti-A</td><td>~10 %</td></tr>
<tr><td>AB</td><td>A y B</td><td>Ninguno</td><td>~5 %</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Sistema Rh</h3>
<ul>
<li>El antígeno relevante es el <strong>D</strong>. Se es Rh positivo o negativo según lo tenga o no.</li>
<li><strong>No hay anticuerpos naturales anti-D</strong>: solo aparecen tras exposición (transfusión o embarazo). Por eso la primera transfusión incompatible en Rh no suele dar reacción inmediata, pero sensibiliza.</li>
<li>Trascendencia: <strong>enfermedad hemolítica del recién nacido</strong> en mujeres Rh negativas sensibilizadas, y reacciones hemolíticas retardadas.</li>
<li>Prioridad absoluta en mujeres en edad fértil Rh negativas: no transfundir Rh positivo salvo urgencia vital sin alternativa.</li>
</ul>

<h3>Otros sistemas</h3>
<p>Kell, Duffy, Kidd y MNS producen anticuerpos <strong>irregulares</strong> (inmunes, tras exposición). Son la causa de las reacciones hemolíticas retardadas y de los problemas para encontrar sangre compatible en pacientes politransfundidos.</p>
`;

const B1B = `
<p class="comment">// compatibilidad — matrices interactivas</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa un <strong>receptor</strong> (izquierda) para ver de qué grupos puede recibir, o un <strong>donante</strong> (arriba) para ver a quién puede donar.</div>

<h3>Hematíes</h3>
<div data-widget="matrix" data-src="ABO_HEMATIES"></div>

<h3>Plasma — la lógica es la inversa</h3>
<p>Con los hematíes importa el <strong>antígeno</strong> que lleva la bolsa; con el plasma importa el <strong>anticuerpo</strong> que contiene. Por eso los papeles de donante universal se invierten.</p>
<div data-widget="matrix" data-src="ABO_PLASMA"></div>

<div class="table-wrap"><table class="itable" data-table-id="b1b-1">
<caption>Resumen que conviene tener automatizado</caption>
<thead><tr><th>Componente</th><th>Donante universal</th><th>Receptor universal</th></tr></thead>
<tbody>
<tr><td>Hematíes</td><td><strong>O negativo</strong></td><td>AB positivo</td></tr>
<tr><td>Plasma</td><td><strong>AB</strong></td><td>O</td></tr>
<tr><td>Plaquetas</td><td>Preferible ABO idéntico; el plasma del pool marca la compatibilidad</td><td>—</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">EMERGENCIA VITAL</span> Si no hay tiempo para el grupo: <strong>O negativo</strong> en mujeres en edad fértil y cuando se desconoce todo; O positivo es aceptable en varones y mujeres posmenopáusicas para preservar la reserva de O negativo. Extrae siempre la muestra para grupo y pruebas <em>antes</em> de transfundir.</div>
`;

const B2 = `
<p class="comment">// componentes sanguíneos</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cada componente para ver dosis, efecto esperado, conservación y sus problemas propios.</div>
<div data-widget="picker" data-src="COMPONENTES"></div>

<div class="callout"><span class="tag">PRINCIPIO</span> La transfusión moderna es <strong>por componentes</strong>: se transfunde solo lo que falta. La sangre total prácticamente no se usa, salvo en algunos protocolos de trauma.</div>
`;

const B3 = `
<p class="comment">// pruebas pretransfusionales</p>
<h3>Qué se hace antes de cada transfusión</h3>
<ol>
<li><strong>Grupo ABO y Rh</strong> del receptor: prueba directa (antígenos del hematíe) y prueba inversa o sérica (anticuerpos del plasma). Deben concordar; si no, hay que investigar.</li>
<li><strong>Escrutinio de anticuerpos irregulares</strong> (test de Coombs indirecto): detecta anticuerpos frente a otros sistemas. Si es positivo, hay que identificarlos y buscar unidades carentes de ese antígeno, lo que puede llevar horas o días.</li>
<li><strong>Pruebas cruzadas</strong>: se enfrenta el suero del receptor con los hematíes de la unidad concreta.</li>
</ol>

<h3>Coombs directo e indirecto</h3>
<div class="table-wrap"><table class="itable" data-table-id="b3-1">
<caption>No confundirlos</caption>
<thead><tr><th></th><th>Coombs directo</th><th>Coombs indirecto</th></tr></thead>
<tbody>
<tr><td>Qué detecta</td><td>Anticuerpos ya unidos a los hematíes <em>del paciente</em></td><td>Anticuerpos libres en el <em>suero</em> del paciente</td></tr>
<tr><td>Para qué se usa</td><td>Diagnóstico de anemia hemolítica autoinmune, reacción transfusional, enfermedad hemolítica del recién nacido</td><td>Escrutinio pretransfusional y control del embarazo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">HEMATO</span> El <strong>daratumumab</strong> (anti-CD38) interfiere con el escrutinio de anticuerpos y da paneles positivos falsos, porque el CD38 está en los hematíes reactivos. Hay que avisar al banco <strong>antes</strong> de iniciarlo y obtener un fenotipo eritrocitario basal; después se emplean técnicas específicas (tratamiento con ditiotreitol) para poder cruzar sangre.</div>
`;

const B4 = `
<p class="comment">// indicaciones y umbrales</p>
<div class="callout"><span class="tag">FILOSOFÍA</span> La estrategia <strong>restrictiva</strong> ha demostrado ser al menos igual de segura que la liberal en la mayoría de escenarios, con menos complicaciones. Se transfunde por clínica, no por cifra, y siempre <strong>de una en una</strong>, reevaluando después.</div>

<div class="table-wrap"><table class="itable" data-table-id="b4-1">
<caption>Umbrales orientativos de hematíes</caption>
<thead><tr><th>Situación</th><th>Umbral de hemoglobina</th></tr></thead>
<tbody>
<tr><td>Paciente estable hospitalizado</td><td>7 g/dL</td></tr>
<tr><td>Cardiopatía isquémica o cirugía cardiaca</td><td>8 g/dL</td></tr>
<tr><td>Hemorragia aguda con inestabilidad</td><td>Según clínica, no esperar a la cifra</td></tr>
<tr><td>Paciente oncohematológico en tratamiento</td><td>7-8 g/dL, individualizando según síntomas y comorbilidad</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="table-wrap"><table class="itable" data-table-id="b4-2">
<caption>Umbrales orientativos de plaquetas</caption>
<thead><tr><th>Situación</th><th>Umbral</th></tr></thead>
<tbody>
<tr><td>Profilaxis en paciente estable con hipoplasia medular</td><td>10 × 10⁹/L</td></tr>
<tr><td>Fiebre, sepsis o mucositis</td><td>20 × 10⁹/L</td></tr>
<tr><td>Procedimiento invasivo menor, punción lumbar</td><td>50 × 10⁹/L</td></tr>
<tr><td>Cirugía mayor o neurocirugía</td><td>100 × 10⁹/L</td></tr>
<tr><td>Sangrado activo grave</td><td>&gt;50 × 10⁹/L (100 si es en SNC)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">CUÁNDO NO TRANSFUNDIR PLAQUETAS</span> En la <strong>PTT</strong> y en la <strong>HIT</strong> la transfusión de plaquetas puede agravar la trombosis: se reserva para hemorragia con riesgo vital. En la PTI tampoco es el tratamiento: la respuesta es pobre y transitoria.</div>
`;

const B5 = `
<p class="comment">// reacciones transfusionales</p>
<div class="callout warn"><span class="tag">PRIMER PASO SIEMPRE</span> Ante cualquier reacción: <strong>detener la transfusión</strong>, mantener la vía con suero fisiológico, comprobar la identidad del paciente y de la bolsa, y avisar al banco de sangre enviando la unidad y muestras nuevas.</div>

<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — orientación por el síntoma dominante</div>
<div class="fa-step" data-step="start">
  <p><strong>Reacción durante o poco después de la transfusión. ¿Qué predomina?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'fiebre')">Fiebre y escalofríos</button>
  <button class="flow-btn" onclick="faGoTo(this,'disnea')">Disnea</button>
  <button class="flow-btn" onclick="faGoTo(this,'urti')">Urticaria o prurito</button>
  <button class="flow-btn" onclick="faGoTo(this,'shock')">Shock, dolor lumbar, orina oscura</button>
</div>

<div class="fa-step" data-step="fiebre" hidden>
  <p><strong>Fiebre.</strong> ¿Cómo está el paciente por lo demás?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-febril')">Estable, solo fiebre y tiritona</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-sepsis')">Fiebre alta con hipotensión y mal estado</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-febril" hidden>
  <div class="callout"><span class="tag">FEBRIL NO HEMOLÍTICA</span> La más frecuente. Causada por citocinas acumuladas o anticuerpos antileucocitarios. Detener, descartar hemólisis, antitérmico. La leucodepleción universal ha reducido mucho su incidencia. <strong>Siempre hay que descartar antes la hemolítica aguda y la contaminación bacteriana.</strong></div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-sepsis" hidden>
  <div class="callout warn"><span class="tag">CONTAMINACIÓN BACTERIANA</span> Sospéchala sobre todo con <strong>plaquetas</strong>, que se guardan a temperatura ambiente. Hemocultivos del paciente y cultivo de la bolsa, antibiótico de amplio espectro inmediato y soporte hemodinámico.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="disnea" hidden>
  <p><strong>Disnea.</strong> ¿Tensión arterial y respuesta a diuréticos?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-taco')">Hipertensión, ingurgitación yugular, mejora con diurético</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-trali')">Hipotensión, fiebre, no mejora con diurético</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-taco" hidden>
  <div class="callout"><span class="tag">TACO</span> Sobrecarga circulatoria asociada a transfusión. Típica en ancianos, cardiópatas e insuficiencia renal. Tratamiento: incorporar, oxígeno, <strong>diurético</strong>. Prevención: transfundir lento, de una en una, y valorar diurético profiláctico en pacientes de riesgo.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-trali" hidden>
  <div class="callout warn"><span class="tag">TRALI</span> Lesión pulmonar aguda asociada a transfusión: edema pulmonar <strong>no cardiogénico</strong> en las primeras 6 h, con infiltrados bilaterales y presión de llenado normal. Tratamiento de soporte respiratorio; <strong>los diuréticos no ayudan</strong> y pueden perjudicar. Más asociada al plasma. Notificación obligatoria al banco para bloquear al donante.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="urti" hidden>
  <p><strong>Reacción cutánea.</strong> ¿Hay compromiso respiratorio o hipotensión?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-alergica')">No, solo habones y prurito</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-anafilaxia')">Sí, broncoespasmo o hipotensión</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-alergica" hidden>
  <div class="callout"><span class="tag">ALÉRGICA LEVE</span> Antihistamínico. Es la única reacción en la que, si cede por completo, se puede <strong>reanudar</strong> la transfusión con vigilancia estrecha.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-anafilaxia" hidden>
  <div class="callout warn"><span class="tag">ANAFILAXIA</span> Adrenalina intramuscular, soporte de vía aérea y volumen. Piensa en <strong>déficit de IgA</strong> con anticuerpos anti-IgA: en esos pacientes hay que usar componentes lavados o de donante también deficitario en IgA. No reanudar nunca.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="shock" hidden>
  <div class="callout warn"><span class="tag">HEMOLÍTICA AGUDA</span> La más grave: incompatibilidad ABO, casi siempre por <strong>error de identificación</strong>. Fiebre, dolor lumbar y en el trayecto venoso, hipotensión, hemoglobinuria, CID e insuficiencia renal. Actuación: parar de inmediato, sueroterapia abundante para mantener diuresis, soporte hemodinámico, vigilar coagulación y función renal, y comunicación urgente al banco. En el paciente anestesiado, a veces el único signo es la hipotensión o el sangrado difuso en el campo.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Reacciones tardías</h3>
<ul>
<li><strong>Hemolítica retardada:</strong> días o semanas después, por respuesta secundaria a un anticuerpo irregular. Descenso inexplicado de hemoglobina con Coombs directo positivo.</li>
<li><strong>Púrpura postransfusional:</strong> trombopenia grave 5-10 días después, por anticuerpos antiplaquetarios.</li>
<li><strong>Enfermedad injerto contra huésped asociada a transfusión:</strong> rara y casi siempre mortal. Se previene con la <strong>irradiación</strong> de los componentes.</li>
<li><strong>Hemosiderosis</strong> en politransfundidos: quelación cuando la ferritina se mantiene alta.</li>
</ul>
`;

const B6 = `
<p class="comment">// transfusión masiva</p>
<h3>Definición</h3>
<p>Reposición de una volemia en 24 h, o 4 concentrados en 1 hora con sangrado activo, o pérdida de más de 150 mL/min.</p>

<h3>Protocolo</h3>
<ul>
<li>Transfusión en <strong>proporciones equilibradas</strong>, del orden de 1:1:1 (hematíes : plasma : plaquetas), para reponer también la capacidad de coagular y no solo el transporte de oxígeno.</li>
<li><strong>Ácido tranexámico</strong> precoz en el sangrado traumático: eficaz sobre todo en las 3 primeras horas.</li>
<li>Control del foco de sangrado: es lo único que detiene el proceso.</li>
<li>Uso de dispositivos de <strong>calentamiento</strong> y de infusión rápida.</li>
</ul>

<h3>La tríada letal y otras complicaciones</h3>
<div class="table-wrap"><table class="itable" data-table-id="b6-1">
<caption>Qué vigilar y por qué</caption>
<thead><tr><th>Problema</th><th>Mecanismo</th><th>Actuación</th></tr></thead>
<tbody>
<tr><td>Hipotermia</td><td>Infusión de grandes volúmenes fríos</td><td>Calentadores; la hipotermia agrava la coagulopatía</td></tr>
<tr><td>Acidosis</td><td>Hipoperfusión</td><td>Restaurar perfusión, no dar bicarbonato de rutina</td></tr>
<tr><td>Coagulopatía</td><td>Consumo, dilución, hipotermia y acidosis</td><td>Plasma, fibrinógeno y plaquetas guiados si es posible por tromboelastografía</td></tr>
<tr><td>Hipocalcemia</td><td><strong>Citrato</strong> de los componentes que quela el calcio</td><td>Calcio intravenoso; vigilar calcio iónico y QT</td></tr>
<tr><td>Hiperpotasemia</td><td>Potasio liberado por los hematíes almacenados</td><td>Monitorizar; unidades más frescas si es posible</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">CITRATO</span> Es la causa más olvidada de hipocalcemia grave en transfusión masiva y en aféresis. Se manifiesta con parestesias periorales, temblor, prolongación del QT y, si progresa, hipotensión y tetania. Mide calcio iónico, no calcio total.</div>
`;

const B7 = `
<p class="comment">// modificaciones de los componentes</p>
<div class="table-wrap"><table class="itable" data-table-id="b7-1">
<caption>Qué evita cada modificación y a quién se aplica</caption>
<thead><tr><th>Modificación</th><th>Previene</th><th>Indicaciones</th></tr></thead>
<tbody>
<tr><td><strong>Irradiado</strong></td><td>Enfermedad injerto contra huésped asociada a transfusión</td><td>Trasplante de progenitores, linfoma de Hodgkin, análogos de purinas (fludarabina), inmunodeficiencias congénitas, donante familiar, transfusión intrauterina</td></tr>
<tr><td><strong>Leucodepletado</strong></td><td>Reacción febril no hemolítica, aloinmunización HLA, transmisión de CMV</td><td>Universal en España</td></tr>
<tr><td><strong>Lavado</strong></td><td>Reacciones alérgicas graves</td><td>Déficit de IgA con anticuerpos anti-IgA, reacciones alérgicas repetidas y graves</td></tr>
<tr><td><strong>CMV negativo</strong></td><td>Transmisión de CMV</td><td>Receptores CMV negativos de trasplante, embarazadas, prematuros (la leucodepleción ofrece protección casi equivalente)</td></tr>
<tr><td><strong>Fenotipado extendido</strong></td><td>Aloinmunización frente a antígenos menores</td><td>Politransfundidos crónicos: talasemia, drepanocitosis, mielodisplasia</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">IRRADIACIÓN</span> Es la modificación que más se olvida y la de consecuencias más graves. La EICH asociada a transfusión tiene una mortalidad cercana al 90 % y no tiene tratamiento eficaz: la única herramienta es la prevención. Ante la duda en un paciente inmunodeprimido, consulta con el banco antes de transfundir.</div>
`;

const B8 = `
<p class="comment">// transfusión en el trasplante y aloinmunización</p>
<h3>Trasplante con incompatibilidad ABO</h3>
<p>A diferencia del trasplante de órgano sólido, el trasplante de progenitores <strong>sí puede realizarse con incompatibilidad ABO</strong>, porque las células progenitoras no expresan antígenos ABO. Pero obliga a un manejo transfusional cuidadoso durante el cambio de grupo.</p>
<div class="table-wrap"><table class="itable" data-table-id="b8-1">
<caption>Estrategia durante el periodo de cambio de grupo</caption>
<thead><tr><th>Componente</th><th>Regla práctica</th></tr></thead>
<tbody>
<tr><td>Hematíes</td><td>Del grupo compatible con <strong>ambos</strong>: receptor y donante (a menudo O)</td></tr>
<tr><td>Plasma y plaquetas</td><td>Del grupo cuyo plasma sea compatible con ambos (a menudo AB)</td></tr>
<tr><td>Duración</td><td>Hasta que el grupo del donante esté establecido y el escrutinio confirme el cambio</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Refractariedad plaquetaria</h3>
<ul>
<li>Se define por un <strong>incremento post-transfusional insuficiente</strong> en dos o más transfusiones consecutivas, medido a la hora.</li>
<li><strong>Causas no inmunes</strong> (las más frecuentes): fiebre, sepsis, CID, esplenomegalia, anfotericina B, EICH, sangrado activo.</li>
<li><strong>Causas inmunes:</strong> anticuerpos anti-HLA (lo habitual) o anti-HPA. Se estudian con panel de anticuerpos.</li>
<li>Si es inmune: plaquetas <strong>HLA compatibles</strong> o seleccionadas por prueba cruzada.</li>
<li>Prevención: leucodepleción universal, que ha reducido drásticamente la aloinmunización HLA.</li>
</ul>

<div class="callout"><span class="tag">CÁLCULO</span> El incremento corregido del recuento (CCI) ajusta el aumento de plaquetas por la superficie corporal y el número de plaquetas transfundidas. Un CCI bajo a la hora sugiere causa inmune; un CCI normal a la hora pero bajo a las 24 h sugiere consumo periférico.</div>
`;

const B9 = `
<p class="comment">// donación y aféresis</p>
<h3>Donación de sangre total</h3>
<ul>
<li>Intervalo mínimo habitual: 2 meses, con un máximo de 4 donaciones al año en varones y 3 en mujeres.</li>
<li>Requisitos básicos: peso ≥50 kg, hemoglobina mínima según sexo, constantes y anamnesis de riesgo.</li>
<li>Cada unidad se somete a cribado obligatorio de VIH, VHB, VHC y sífilis, con técnicas serológicas y de detección genómica.</li>
</ul>

<h3>Aféresis de donante</h3>
<ul>
<li>Permite obtener un componente concreto (plaquetas, plasma, hematíes) devolviendo el resto al donante.</li>
<li>Ventaja de las plaquetas de aféresis: la dosis procede de un <strong>único donante</strong>, lo que reduce la exposición a antígenos frente al pool de varios donantes.</li>
<li>Efecto adverso más típico: <strong>hipocalcemia por citrato</strong> — parestesias periorales y sabor metálico. Se maneja bajando el flujo y aportando calcio.</li>
</ul>

<h3>Donación de progenitores hematopoyéticos</h3>
<ul>
<li>Movilización con <strong>G-CSF</strong> durante varios días y recogida por aféresis, o extracción directa de médula ósea en quirófano.</li>
<li>Efectos del G-CSF: dolor óseo, cefalea, febrícula; la rotura esplénica es excepcional pero descrita.</li>
<li>Objetivo habitual de células CD34+ por kilo del receptor; si la movilización es insuficiente se emplea plerixafor.</li>
</ul>

<div class="callout"><span class="tag">RELACIÓN</span> Los aspectos técnicos de la aféresis terapéutica —recambio plasmático, reposición con albúmina o plasma, complicaciones— están desarrollados en <span class="inline-code">Nefrología → 7. Aféresis terapéutica</span>.</div>
`;
