// =============================================================
// NEUMOLOGÍA — árbol de secciones + contenido médico
// =============================================================
const NEUMO_TREE = {
  title:'NEUMOLOGÍA',
  intro:true,
  children: [
    {id:'neumo-obj', title:'Objetivos de la rotación', leaf:true, content:()=>N_OBJ},
    {id:'n1', title:'1. Insuficiencia respiratoria y gasometría', leaf:true, content:()=>N1},
    {id:'n2', title:'2. Oxigenoterapia', children:[
      {id:'n2a', title:'a. Dispositivos (interactivo)', leaf:true, content:()=>N2A},
      {id:'n2b', title:'b. Bajo flujo vs alto flujo', leaf:true, content:()=>N2B},
      {id:'n2c', title:'c. Soporte con presión: CPAP, VNI, VMI', leaf:true, content:()=>N2C},
      {id:'n2d', title:'d. Cómo elegir y cuándo escalar', leaf:true, content:()=>N2D},
    ]},
    {id:'n3', title:'3. Neumonía adquirida en la comunidad', leaf:true, content:()=>N3},
    {id:'n4', title:'4. Neumonía nosocomial y asociada a ventilación', leaf:true, content:()=>N4},
    {id:'n5', title:'5. Infiltrados en el inmunodeprimido', leaf:true, hem:true, content:()=>N5},
    {id:'n6', title:'6. Tuberculosis', leaf:true, content:()=>N6},
    {id:'n7', title:'7. Tromboembolismo pulmonar', leaf:true, hem:true, content:()=>N7},
    {id:'n8', title:'8. Derrame pleural', leaf:true, content:()=>N8},
    {id:'n9', title:'9. Toxicidad pulmonar por fármacos', leaf:true, hem:true, content:()=>N9},
  ]
};

/* =========================================================
   WIDGET — dispositivos de oxigenoterapia
   ========================================================= */
registerWidgetData('O2_DEVICES', {
  items:[
    {k:'gafas', label:'Gafas nasales', tag:'Bajo flujo', html:
      '<h4>Gafas nasales (cánula convencional)</h4>' +
      '<div class="pk-key"><span><b>Flujo:</b> 1-6 L/min</span><span><b>FiO₂:</b> ~24-40 %</span>' +
      '<span><b>Regla:</b> cada litro sube ≈ 4 % la FiO₂</span></div>' +
      '<ul>' +
      '<li>Cómodas: permiten comer, hablar y expectorar. Primera opción en hipoxemia leve.</li>' +
      '<li>La FiO₂ real es <b>impredecible</b>: depende del volumen corriente y de si respira por boca o nariz. A mayor demanda inspiratoria, más aire ambiente arrastra y <b>menor</b> FiO₂ efectiva.</li>' +
      '<li>Por encima de 6 L/min no ganas FiO₂ y resecas la mucosa: cambia de dispositivo.</li>' +
      '</ul>'},
    {k:'venturi', label:'Mascarilla Venturi', tag:'Alto flujo (FiO₂ fija)', html:
      '<h4>Mascarilla Venturi (efecto Venturi)</h4>' +
      '<div class="pk-key"><span><b>FiO₂:</b> 24, 28, 31, 35, 40, 50 %</span><span><b>Regulada por:</b> la válvula de color</span></div>' +
      '<ul>' +
      '<li>Es <b>alto flujo conceptualmente</b>: el chorro de oxígeno arrastra un volumen fijo de aire, de modo que entrega un flujo total mayor que el que el paciente demanda. Por eso la <b>FiO₂ es constante y fiable</b>.</li>' +
      '<li>Dispositivo de elección cuando necesitas <b>controlar exactamente la FiO₂</b>: el caso típico es el <b>EPOC retenedor</b>, donde una FiO₂ excesiva empeora la hipercapnia.</li>' +
      '<li>Cada válvula exige un flujo mínimo de O₂ concreto: si no lo pones, la FiO₂ no es la etiquetada.</li>' +
      '</ul>'},
    {k:'simple', label:'Mascarilla simple', tag:'Bajo flujo', html:
      '<h4>Mascarilla facial simple</h4>' +
      '<div class="pk-key"><span><b>Flujo:</b> 5-10 L/min</span><span><b>FiO₂:</b> ~40-60 %</span></div>' +
      '<ul>' +
      '<li>Nunca por debajo de 5 L/min: con flujos bajos el CO₂ espirado se acumula dentro de la mascarilla y lo reinhala.</li>' +
      '<li>FiO₂ igualmente variable. Interfiere con comer y hablar.</li>' +
      '</ul>'},
    {k:'reservorio', label:'Mascarilla con reservorio', tag:'Bajo flujo · alta FiO₂', html:
      '<h4>Mascarilla con reservorio (no reinhalación)</h4>' +
      '<div class="pk-key"><span><b>Flujo:</b> 10-15 L/min</span><span><b>FiO₂:</b> hasta ~80-90 %</span></div>' +
      '<ul>' +
      '<li>La bolsa debe permanecer <b>siempre parcialmente inflada</b>; si se colapsa en la inspiración, sube el flujo.</li>' +
      '<li>Es el recurso para la hipoxemia grave mientras preparas algo mejor. <b>No es un tratamiento definitivo</b>: si el paciente lo necesita mantenido, hay que escalar.</li>' +
      '</ul>'},
    {k:'oaf', label:'Oxigenoterapia de alto flujo', tag:'OAF · cánula nasal de alto flujo', html:
      '<h4>Oxigenoterapia de alto flujo (OAF / CNAF)</h4>' +
      '<div class="pk-key"><span><b>Flujo:</b> 20-60 L/min</span><span><b>FiO₂:</b> 21-100 % regulable</span>' +
      '<span><b>Gas:</b> caliente y humidificado</span></div>' +
      '<ul>' +
      '<li><b>FiO₂ real y estable</b>, porque el flujo supera la demanda inspiratoria del paciente.</li>' +
      '<li>Genera una <b>PEEP ligera</b> (≈ 2-5 cmH₂O, más con la boca cerrada) y <b>lava el espacio muerto</b> nasofaríngeo, reduciendo el trabajo respiratorio.</li>' +
      '<li>Muy bien tolerada: permite hablar, comer y expectorar, a diferencia de la VNI.</li>' +
      '<li>Indicación estrella: <b>insuficiencia respiratoria hipoxémica aguda (tipo I)</b>.</li>' +
      '<li>Vigila el <b>índice ROX</b> = (SpO₂/FiO₂)/FR. Un ROX bajo o que no mejora a las 2-12 h anticipa el fracaso: no demores la intubación.</li>' +
      '</ul>'},
    {k:'cpap', label:'CPAP', tag:'Presión · un solo nivel', html:
      '<h4>CPAP — presión positiva continua</h4>' +
      '<div class="pk-key"><span><b>Aporta:</b> una sola presión constante</span><span><b>Típico:</b> 5-12 cmH₂O</span></div>' +
      '<ul>' +
      '<li>Mantiene el alveolo abierto durante todo el ciclo: <b>recluta</b> alveolos colapsados y mejora la oxigenación.</li>' +
      '<li>No aporta presión de soporte inspiratoria, así que <b>no descarga la musculatura ni lava CO₂</b> de forma directa.</li>' +
      '<li>Indicaciones: <b>edema agudo de pulmón cardiogénico</b> (reduce precarga y poscarga), SAHS, atelectasias.</li>' +
      '</ul>'},
    {k:'vni', label:'VNI / BiPAP', tag:'Presión · dos niveles', html:
      '<h4>VNI con dos niveles (BiPAP)</h4>' +
      '<div class="pk-key"><span><b>IPAP:</b> presión inspiratoria</span><span><b>EPAP:</b> presión espiratoria (= PEEP)</span>' +
      '<span><b>Presión de soporte:</b> IPAP − EPAP</span></div>' +
      '<ul>' +
      '<li>La <b>EPAP</b> recluta y mejora la oxigenación; la <b>diferencia IPAP−EPAP</b> aumenta el volumen corriente y por tanto <b>lava CO₂</b>.</li>' +
      '<li>Indicación de máxima evidencia: <b>EPOC agudizado con acidosis respiratoria</b> (pH &lt;7.35 con hipercapnia). También edema agudo de pulmón y destete.</li>' +
      '<li>Si quieres bajar la pCO₂ → sube la IPAP. Si quieres subir la pO₂ → sube la EPAP (o la FiO₂).</li>' +
      '<li>Contraindicada si: parada, bajo nivel de consciencia con riesgo de aspiración, vómitos, inestabilidad grave, cirugía facial o secreciones incontrolables.</li>' +
      '</ul>'},
    {k:'vmi', label:'Ventilación mecánica invasiva', tag:'Intubación', html:
      '<h4>Ventilación mecánica invasiva</h4>' +
      '<div class="pk-key"><span><b>Control total</b> de FiO₂, PEEP, volumen y frecuencia</span></div>' +
      '<ul>' +
      '<li>Indicada ante fracaso de las medidas previas, parada, coma, agotamiento respiratorio o incapacidad de proteger la vía aérea.</li>' +
      '<li><b>Ventilación protectora</b>: volumen corriente 6 mL/kg de peso ideal, presión meseta &lt;30 cmH₂O, PEEP según tablas.</li>' +
      '<li>En el paciente hematológico la decisión de intubar debe ir acompañada de una conversación honesta sobre pronóstico y objetivos: no siempre es lo indicado.</li>' +
      '</ul>'}
  ]
});

/* =========================================================
   CONTENIDO
   ========================================================= */

const N_OBJ = `
<p class="comment">// neumología — enfoque para el residente de hematología</p>
<div class="callout"><span class="tag">OBJETIVO</span> Interpretar una gasometría arterial, elegir con criterio el dispositivo de oxigenoterapia, reconocer cuándo hay que escalar el soporte, y orientar el infiltrado pulmonar del paciente inmunodeprimido, que casi nunca es una neumonía comunitaria corriente.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Insuficiencia respiratoria y gasometría arterial</li>
<li>Oxigenoterapia: dispositivos, flujo, presión y escalada</li>
<li>Neumonía adquirida en la comunidad</li>
<li>Neumonía nosocomial y asociada a ventilación</li>
<li>Infiltrados pulmonares en el inmunodeprimido</li>
<li>Tuberculosis</li>
<li>Tromboembolismo pulmonar</li>
<li>Derrame pleural</li>
<li>Toxicidad pulmonar por fármacos</li>
</ol>
`;

const N1 = `
<p class="comment">// insuficiencia respiratoria — el punto de partida de todo</p>
<h3>Definición y tipos</h3>
<div class="table-wrap"><table class="itable" data-table-id="n1-1">
<caption>Tipo I frente a tipo II</caption>
<thead><tr><th></th><th>Tipo I — hipoxémica</th><th>Tipo II — hipercápnica</th></tr></thead>
<tbody>
<tr><td>Gasometría</td><td>pO₂ &lt;60 mmHg con pCO₂ normal o baja</td><td>pO₂ &lt;60 mmHg con pCO₂ &gt;45 mmHg</td></tr>
<tr><td>Problema</td><td>Fallo del intercambio (alveolo enfermo)</td><td>Fallo de la bomba (no ventila lo suficiente)</td></tr>
<tr><td>Causas</td><td>Neumonía, SDRA, edema pulmonar, TEP, atelectasia</td><td>EPOC, obesidad-hipoventilación, sedantes, enfermedad neuromuscular, fatiga muscular</td></tr>
<tr><td>Gradiente A-a</td><td>Aumentado</td><td>Normal si es hipoventilación pura; aumentado si hay patología pulmonar añadida</td></tr>
<tr><td>Soporte típico</td><td>OAF; si fracasa, intubación</td><td>VNI con dos niveles</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Los cinco mecanismos de hipoxemia</h3>
<ol>
<li><strong>Alteración ventilación/perfusión (V/Q):</strong> el más frecuente. Mejora con oxígeno.</li>
<li><strong>Shunt:</strong> sangre que no contacta con alveolo ventilado. <em>No mejora</em> apenas con oxígeno — pista diagnóstica clave.</li>
<li><strong>Hipoventilación:</strong> gradiente A-a normal, pCO₂ alta.</li>
<li><strong>Alteración de la difusión:</strong> enfermedad intersticial; se nota sobre todo con el esfuerzo.</li>
<li><strong>Baja FiO₂ ambiental:</strong> altitud.</li>
</ol>

<h3>Cálculos útiles</h3>
<ul>
<li><strong>Gradiente alveolo-arterial:</strong> A-a = [FiO₂ × (760 − 47) − pCO₂/0.8] − pO₂. Normal ≈ edad/4 + 4.</li>
<li><strong>Cociente PaO₂/FiO₂:</strong> &lt;300 lesión pulmonar; &lt;200 SDRA moderado; &lt;100 SDRA grave.</li>
<li><strong>Regla rápida:</strong> pO₂ esperada ≈ FiO₂ × 5. Con FiO₂ 0.5 esperarías pO₂ ~250; si tiene 80, hay un problema serio de intercambio.</li>
</ul>

<div class="callout"><span class="tag">RELACIÓN</span> Para el análisis ácido-base completo (anión gap, compensación, trastornos mixtos) usa los algoritmos interactivos de <span class="inline-code">Nefrología → 20. Trastornos del pH</span>.</div>
`;

const N2A = `
<p class="comment">// dispositivos de oxigenoterapia</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cada dispositivo para ver flujo, FiO₂ que consigue, cómo funciona y cuándo elegirlo.</div>
<div data-widget="picker" data-src="O2_DEVICES"></div>

<h3>Resumen comparativo</h3>
<div class="table-wrap"><table class="itable" data-table-id="n2a-1">
<caption>De menor a mayor soporte</caption>
<thead><tr><th>Dispositivo</th><th>Flujo</th><th>FiO₂</th><th>¿FiO₂ fiable?</th><th>¿Aporta presión?</th></tr></thead>
<tbody>
<tr><td>Gafas nasales</td><td>1-6 L/min</td><td>24-40 %</td><td>No</td><td>No</td></tr>
<tr><td>Mascarilla simple</td><td>5-10 L/min</td><td>40-60 %</td><td>No</td><td>No</td></tr>
<tr><td>Venturi</td><td>Según válvula</td><td>24-50 % fija</td><td><strong>Sí</strong></td><td>No</td></tr>
<tr><td>Reservorio</td><td>10-15 L/min</td><td>80-90 %</td><td>No</td><td>No</td></tr>
<tr><td>Alto flujo (OAF)</td><td>20-60 L/min</td><td>21-100 %</td><td><strong>Sí</strong></td><td>PEEP ligera (2-5)</td></tr>
<tr><td>CPAP</td><td>—</td><td>Regulable</td><td>Sí</td><td>Un nivel</td></tr>
<tr><td>VNI / BiPAP</td><td>—</td><td>Regulable</td><td>Sí</td><td>Dos niveles</td></tr>
<tr><td>Invasiva</td><td>—</td><td>21-100 %</td><td>Sí</td><td>Control total</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const N2B = `
<p class="comment">// bajo flujo y alto flujo: qué significa realmente</p>
<div class="callout"><span class="tag">CONCEPTO</span> "Alto flujo" <strong>no</strong> quiere decir mucha FiO₂. Quiere decir que el dispositivo entrega un flujo <em>igual o superior al flujo inspiratorio del paciente</em>. Cuando eso ocurre, el paciente no arrastra aire ambiente y la FiO₂ que programas es la que recibe.</div>

<h3>Por qué la FiO₂ de las gafas es un espejismo</h3>
<p>Un adulto con dificultad respiratoria genera un flujo inspiratorio pico de <strong>30-60 L/min</strong>. Si le pones gafas a 4 L/min, el resto (más del 90 % del volumen) lo toma del aire ambiente al 21 %. Por eso la FiO₂ real cae justo cuando el paciente está peor: a más taquipnea, más dilución.</p>

<div class="diagram-wrap">
<div class="diagram-caption">// flujo del dispositivo frente a demanda del paciente</div>
<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="26" fill="var(--text-dim)" font-size="11" font-family="var(--mono)">DEMANDA DEL PACIENTE (30-60 L/min)</text>
  <rect x="20" y="36" width="560" height="26" rx="4" fill="var(--text-dim)" opacity="0.18"/>
  <rect x="20" y="36" width="560" height="26" rx="4" fill="none" stroke="var(--border)"/>

  <text x="20" y="96" fill="var(--accent3)" font-size="11" font-family="var(--mono)">GAFAS 4 L/min → el resto es aire ambiente al 21 %</text>
  <rect x="20" y="106" width="52" height="26" rx="4" fill="var(--accent3)" opacity="0.55"/>
  <rect x="72" y="106" width="508" height="26" rx="4" fill="var(--text-dim)" opacity="0.12"/>
  <text x="330" y="124" fill="var(--text-dim)" font-size="10.5" text-anchor="middle" font-family="var(--mono)">aire ambiente arrastrado → diluye la FiO₂</text>

  <text x="20" y="176" fill="var(--accent)" font-size="11" font-family="var(--mono)">ALTO FLUJO 50 L/min → cubre toda la demanda</text>
  <rect x="20" y="186" width="560" height="26" rx="4" fill="var(--accent)" opacity="0.42"/>
  <text x="300" y="204" fill="#0a0a0c" font-size="10.5" text-anchor="middle" font-family="var(--mono)" font-weight="bold">la FiO₂ programada = la FiO₂ recibida</text>
  <text x="20" y="238" fill="var(--text-dim)" font-size="10" font-family="var(--mono)">La mascarilla Venturi logra lo mismo por efecto Venturi, aunque con FiO₂ máxima más baja.</text>
</svg>
</div>

<h3>Consecuencias prácticas</h3>
<ul>
<li>Si necesitas una <strong>FiO₂ exacta</strong> (EPOC retenedor, ensayos de destete): Venturi u OAF, nunca gafas.</li>
<li>Si el paciente está <strong>muy taquipneico</strong>, los dispositivos de bajo flujo rinden mucho menos de lo que indica la etiqueta.</li>
<li>La OAF además <strong>humidifica y calienta</strong>, lo que mejora el aclaramiento de secreciones y la tolerancia — muy relevante si el paciente lo va a llevar días.</li>
</ul>

<div class="callout warn"><span class="tag">EPOC</span> En el retenedor crónico el objetivo de saturación es <strong>88-92 %</strong>, no 98 %. Un exceso de oxígeno empeora la hipercapnia (efecto Haldane y pérdida de vasoconstricción hipóxica), no solo por "quitarle el estímulo respiratorio".</div>
`;

const N2C = `
<p class="comment">// soporte con presión</p>
<h3>Los dos parámetros que hay que entender</h3>
<div class="table-wrap"><table class="itable" data-table-id="n2c-1">
<caption>Qué toco según lo que quiero corregir</caption>
<thead><tr><th>Problema</th><th>Qué ajusto</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>pO₂ baja (oxigenación)</td><td>↑ EPAP/PEEP o ↑ FiO₂</td><td>La PEEP recluta alveolos colapsados y aumenta la superficie de intercambio</td></tr>
<tr><td>pCO₂ alta (ventilación)</td><td>↑ IPAP (aumenta la diferencia IPAP−EPAP)</td><td>Más presión de soporte = más volumen corriente = más lavado de CO₂</td></tr>
<tr><td>Trabajo respiratorio excesivo</td><td>↑ presión de soporte</td><td>Descarga la musculatura inspiratoria</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Indicaciones con mejor evidencia</h3>
<ul>
<li><strong>VNI con dos niveles:</strong> EPOC agudizado con acidosis respiratoria (pH &lt;7.35 y pCO₂ elevada) — reduce intubación y mortalidad. También en edema agudo de pulmón y en el destete del EPOC.</li>
<li><strong>CPAP:</strong> edema agudo de pulmón cardiogénico, SAHS, atelectasias postoperatorias.</li>
<li><strong>OAF:</strong> insuficiencia respiratoria hipoxémica aguda; también tras extubación y para procedimientos como la broncoscopia.</li>
</ul>

<h3>Contraindicaciones de la ventilación no invasiva</h3>
<ul>
<li>Parada respiratoria o necesidad inmediata de intubación.</li>
<li>Bajo nivel de consciencia con incapacidad de proteger la vía aérea (excepción: coma hipercápnico del EPOC, donde puede intentarse en un medio vigilado).</li>
<li>Vómitos, hemorragia digestiva alta activa, obstrucción de la vía aérea superior.</li>
<li>Inestabilidad hemodinámica o arritmia grave.</li>
<li>Cirugía o traumatismo facial, imposibilidad de sellar la interfaz.</li>
<li>Secreciones abundantes que el paciente no puede manejar.</li>
</ul>

<div class="callout warn"><span class="tag">TRAMPA</span> El mayor riesgo de la VNI y la OAF no es el dispositivo: es <strong>retrasar una intubación necesaria</strong>. Fija de antemano un plazo (1-2 h) y unos criterios objetivos de respuesta; si no mejora, escala.</div>
`;

const N2D = `
<p class="comment">// cómo elegir el dispositivo y cuándo escalar</p>
<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — guía rápida, no sustituye el protocolo del centro</div>
<div class="fa-step" data-step="start">
  <p><strong>Paciente con insuficiencia respiratoria aguda. ¿Qué muestra la gasometría?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'hipox')">Hipoxemia con pCO₂ normal o baja (tipo I)</button>
  <button class="flow-btn" onclick="faGoTo(this,'hiperc')">Hipercapnia con acidosis (tipo II)</button>
  <button class="flow-btn" onclick="faGoTo(this,'eap')">Edema agudo de pulmón cardiogénico</button>
</div>

<div class="fa-step" data-step="hipox" hidden>
  <p><strong>Tipo I.</strong> ¿Cuánto oxígeno necesita?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-gafas')">Poco: satura bien con gafas a 2-4 L</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-oaf')">Mucho: no llega con mascarilla o está taquipneico</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-gafas" hidden>
  <div class="callout">Gafas nasales, objetivo de saturación 94-98 % (88-92 % si es retenedor crónico). Reevalúa la gasometría y el trabajo respiratorio.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-oaf" hidden>
  <div class="callout"><span class="tag">OAF</span> Alto flujo: empieza con 50 L/min y ajusta la FiO₂ para saturación objetivo. <strong>Vigila el índice ROX</strong> = (SpO₂/FiO₂)/FR a las 2, 6 y 12 h. Si no mejora o empeora, no insistas: intubación.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="hiperc" hidden>
  <p><strong>Tipo II con acidosis.</strong> ¿Nivel de consciencia y capacidad de proteger la vía aérea?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-vni')">Consciente y colaborador</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-vmi')">Bajo nivel de consciencia, vómitos o inestabilidad</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-vni" hidden>
  <div class="callout"><span class="tag">VNI</span> Dos niveles: IPAP 12-16 y EPAP 4-6 cmH₂O de inicio, subiendo IPAP según la pCO₂. Oxígeno para saturación 88-92 %. <strong>Gasometría de control en 1-2 h</strong>: si el pH no mejora, plantea intubación.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-vmi" hidden>
  <div class="callout warn"><span class="tag">INVASIVA</span> La VNI está contraindicada. Intubación y ventilación mecánica, salvo que exista una limitación del esfuerzo terapéutico acordada.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="eap" hidden>
  <div class="callout"><span class="tag">CPAP</span> CPAP 8-10 cmH₂O junto al tratamiento médico (diurético, nitratos): reduce precarga y poscarga y mejora la oxigenación rápidamente. Si además retiene CO₂ por agotamiento, pasa a dos niveles.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Señales de que hay que escalar sin esperar más</h3>
<ul>
<li>Frecuencia respiratoria &gt;35 o en aumento pese al soporte.</li>
<li>Uso de musculatura accesoria, respiración paradójica, incapacidad de hablar en frases.</li>
<li>Deterioro del nivel de consciencia o agitación.</li>
<li>pH que sigue cayendo pese a 1-2 h de VNI bien ajustada.</li>
<li>Inestabilidad hemodinámica o isquemia asociada.</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> En el paciente hematológico gravemente inmunodeprimido, la OAF y la VNI evitan la intubación en una parte de los casos y con ello el riesgo de neumonía asociada a ventilación. Pero el fracaso tardío empeora el pronóstico: conviene decidir pronto, con el intensivista, y dejar clara la intención terapéutica en la historia.</div>
`;

const N3 = `
<p class="comment">// neumonía adquirida en la comunidad</p>
<h3>Etiología según el contexto</h3>
<ul>
<li><strong>Típica:</strong> S. pneumoniae (el más frecuente), H. influenzae. Inicio brusco, fiebre alta, condensación lobar.</li>
<li><strong>Atípica:</strong> Mycoplasma, Chlamydia, Legionella. Curso subagudo, tos seca, disociación clínico-radiológica.</li>
<li><strong>Legionella:</strong> sospecha con hiponatremia, diarrea, elevación de transaminasas y afectación neurológica. Antígeno en orina.</li>
<li><strong>Aspirativa:</strong> anaerobios; en alcohólicos, bajo nivel de consciencia o disfagia. Segmentos declives.</li>
</ul>

<h3>CURB-65 — decide el destino</h3>
<div class="table-wrap"><table class="itable" data-table-id="n3-1">
<caption>Un punto por criterio</caption>
<thead><tr><th>Criterio</th><th>Puntuación total → destino</th></tr></thead>
<tbody>
<tr><td><strong>C</strong>onfusión</td><td>0-1 → ambulatorio</td></tr>
<tr><td><strong>U</strong>rea &gt;44 mg/dL (BUN &gt;19)</td><td>2 → valorar ingreso u observación</td></tr>
<tr><td><strong>R</strong>espiratoria: FR ≥30</td><td>≥3 → ingreso; valorar UCI</td></tr>
<tr><td><strong>B</strong>lood pressure: TAS &lt;90 o TAD ≤60</td><td>4-5 → UCI</td></tr>
<tr><td><strong>65</strong> años o más</td><td></td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Tratamiento empírico orientativo</h3>
<div class="table-wrap"><table class="itable" data-table-id="n3-2">
<caption>Ajustar siempre al protocolo local y a las resistencias de la zona</caption>
<thead><tr><th>Situación</th><th>Pauta</th></tr></thead>
<tbody>
<tr><td>Ambulatoria sin comorbilidad</td><td>Amoxicilina a dosis altas, o azitromicina si sospecha de atípica</td></tr>
<tr><td>Ambulatoria con comorbilidad</td><td>Amoxicilina-clavulánico + macrólido, o levofloxacino en monoterapia</td></tr>
<tr><td>Ingreso en planta</td><td>Ceftriaxona + azitromicina, o levofloxacino</td></tr>
<tr><td>Ingreso en UCI</td><td>Ceftriaxona + macrólido IV (o quinolona); añadir cobertura antipseudomónica si hay factores de riesgo</td></tr>
<tr><td>Sospecha de aspiración</td><td>Amoxicilina-clavulánico o ertapenem</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Duración habitual: 5-7 días si hay buena respuesta y estabilidad clínica 48-72 h. Prolongar solo si hay complicaciones (absceso, empiema, bacteriemia por S. aureus).</p>
`;

const N4 = `
<p class="comment">// neumonía nosocomial y asociada a ventilación</p>
<h3>Definiciones</h3>
<ul>
<li><strong>Nosocomial:</strong> aparece ≥48 h tras el ingreso.</li>
<li><strong>Asociada a ventilación:</strong> ≥48 h tras la intubación.</li>
</ul>

<h3>Gérmenes a cubrir</h3>
<p>Pseudomonas aeruginosa, enterobacterias (incluidas BLEE), Acinetobacter y S. aureus (SAMS o SAMR). El espectro cambia mucho según la flora de cada unidad: consulta el mapa microbiológico de tu hospital.</p>

<h3>Factores de riesgo de multirresistencia</h3>
<ul>
<li>Antibióticos IV en los 90 días previos.</li>
<li>Ingreso prolongado (≥5 días) antes del episodio.</li>
<li>Shock séptico en el momento del diagnóstico.</li>
<li>SDRA o terapia renal sustitutiva previa.</li>
<li>Colonización conocida por germen multirresistente.</li>
</ul>

<h3>Tratamiento empírico</h3>
<ul>
<li>Betalactámico antipseudomónico: piperacilina-tazobactam, cefepime o meropenem.</li>
<li>Añadir cobertura de SAMR (vancomicina o linezolid) si hay prevalencia local alta o colonización conocida.</li>
<li>Doble cobertura antipseudomónica solo si hay shock o alto riesgo de resistencia; desescalar en cuanto llegue el cultivo.</li>
<li>Duración habitual: 7 días si hay buena evolución.</li>
</ul>

<div class="callout"><span class="tag">LINEZOLID vs VANCOMICINA</span> En neumonía por SAMR el linezolid alcanza mejores concentraciones en el epitelio pulmonar. En un paciente hematológico, pesa en contra su mielotoxicidad; en uno con insuficiencia renal, pesa a favor frente a la vancomicina.</div>
`;

const N5 = `
<p class="comment">// infiltrados pulmonares en el paciente inmunodeprimido</p>
<div class="callout warn"><span class="tag">REGLA</span> En un paciente hematológico un infiltrado pulmonar <strong>no</strong> es por defecto una neumonía bacteriana. El diagnóstico diferencial incluye hongos, virus, Pneumocystis, toxicidad por fármacos, hemorragia alveolar, infiltración tumoral y sobrecarga de volumen.</div>

<h3>Orientación por patrón radiológico</h3>
<div class="table-wrap"><table class="itable" data-table-id="n5-1">
<caption>Patrón en TC → sospecha principal</caption>
<thead><tr><th>Patrón</th><th>Sospechar</th><th>Prueba dirigida</th></tr></thead>
<tbody>
<tr><td>Nódulos con signo del halo</td><td>Aspergilosis invasora</td><td>Galactomanano en suero y lavado broncoalveolar</td></tr>
<tr><td>Nódulos múltiples con cavitación</td><td>Hongos filamentosos, Nocardia, micobacterias, embolias sépticas</td><td>Cultivos, broncoscopia</td></tr>
<tr><td>Vidrio deslustrado difuso bilateral</td><td>Pneumocystis, CMV, toxicidad farmacológica, edema</td><td>PCR de Pneumocystis y CMV, beta-D-glucano</td></tr>
<tr><td>Condensación lobar</td><td>Neumonía bacteriana clásica</td><td>Antígenos en orina, hemocultivos</td></tr>
<tr><td>Vidrio deslustrado + descenso de hemoglobina</td><td>Hemorragia alveolar difusa</td><td>Lavado broncoalveolar con retornos hemáticos crecientes</td></tr>
<tr><td>Infiltrados que aparecen al recuperar neutrófilos</td><td>Síndrome de reconstitución inmune</td><td>Contexto clínico; a veces corticoides</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Pneumocystis jirovecii</h3>
<ul>
<li>Clínica: disnea progresiva, tos seca, hipoxemia desproporcionada a la auscultación, LDH elevada.</li>
<li>Radiografía puede ser casi normal; la TC muestra vidrio deslustrado en alas de mariposa.</li>
<li>Tratamiento: <strong>cotrimoxazol a dosis altas</strong> 21 días. Añadir <strong>corticoides</strong> si pO₂ &lt;70 mmHg o gradiente A-a &gt;35 (en VIH la evidencia es sólida; en no-VIH se extrapola).</li>
<li>Aparece sobre todo con corticoides prolongados, análogos de purinas, TPH y LLA sin profilaxis.</li>
</ul>

<h3>Cuándo hacer broncoscopia</h3>
<p>Ante infiltrado sin diagnóstico tras pruebas no invasivas, sobre todo si va a cambiar el tratamiento. Valorar la trombopenia y la oxigenación antes: si las plaquetas están muy bajas hay que transfundir, y si la hipoxemia es grave puede requerir soporte con OAF durante el procedimiento.</p>
`;

const N6 = `
<p class="comment">// tuberculosis</p>
<h3>Formas y sospecha</h3>
<ul>
<li><strong>Pulmonar:</strong> tos &gt;2-3 semanas, febrícula, sudoración nocturna, pérdida de peso. Infiltrado en lóbulos superiores con cavitación.</li>
<li><strong>Miliar y extrapulmonar:</strong> más frecuente en inmunodeprimidos; puede cursar con citopenias y fiebre sin foco.</li>
<li>En el paciente inmunodeprimido la presentación es más atípica y la baciloscopia menos rentable.</li>
</ul>

<h3>Diagnóstico</h3>
<ul>
<li>Baciloscopia (Ziehl-Neelsen o auramina) y cultivo en medio de Löwenstein — lento pero definitivo.</li>
<li>PCR de M. tuberculosis: resultado rápido y detecta resistencia a rifampicina.</li>
<li>Mantoux e IGRA sirven para infección latente, <strong>no</strong> para enfermedad activa, y pueden ser falsamente negativos en inmunodeprimidos.</li>
</ul>

<h3>Tratamiento</h3>
<p>Fase inicial 2 meses con <strong>isoniazida + rifampicina + pirazinamida + etambutol</strong>, seguida de 4 meses con isoniazida + rifampicina.</p>
<div class="table-wrap"><table class="itable" data-table-id="n6-1">
<caption>Toxicidades a vigilar</caption>
<thead><tr><th>Fármaco</th><th>Toxicidad característica</th></tr></thead>
<tbody>
<tr><td>Isoniazida</td><td>Hepatitis y neuropatía periférica (prevenir con piridoxina)</td></tr>
<tr><td>Rifampicina</td><td>Hepatitis, tinción naranja de secreciones y <strong>potente inductor enzimático</strong></td></tr>
<tr><td>Pirazinamida</td><td>Hepatitis, hiperuricemia</td></tr>
<tr><td>Etambutol</td><td>Neuritis óptica (vigilar visión de colores)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">HEMATO</span> La <strong>rifampicina</strong> induce el CYP3A4 y hunde los niveles de inhibidores de calcineurina, azoles, anticoagulantes orales y muchos citostáticos. En trasplantados y en pacientes con inmunosupresión activa, su introducción exige reajustar todo el tratamiento y monitorizar niveles.</div>
`;

const N7 = `
<p class="comment">// tromboembolismo pulmonar</p>
<div class="callout warn"><span class="tag">HEMATO</span> El cáncer multiplica el riesgo trombótico, y las neoplasias hematológicas activas no son una excepción. Ante disnea súbita o deterioro inexplicado en un paciente oncológico, el TEP debe estar siempre en la lista.</div>

<h3>Sospecha y probabilidad</h3>
<ul>
<li>Disnea o dolor torácico de inicio brusco, taquicardia, síncope, hipoxemia con radiografía poco llamativa.</li>
<li><strong>Escala de Wells</strong> o Ginebra para estimar probabilidad clínica.</li>
<li><strong>Dímero D:</strong> alto valor predictivo negativo cuando la probabilidad es baja o intermedia. En el paciente oncológico está elevado casi siempre, así que <em>pierde utilidad</em>: si la sospecha es alta, ve directo a la imagen.</li>
<li><strong>Angio-TC de arterias pulmonares</strong> es la prueba de elección. Gammagrafía V/Q si hay insuficiencia renal o alergia al contraste.</li>
</ul>

<h3>ECG y ecocardiograma</h3>
<ul>
<li>ECG: lo más frecuente es la taquicardia sinusal; el patrón S1Q3T3 y el bloqueo de rama derecha nuevo son sugerentes pero poco sensibles.</li>
<li>Ecocardiograma: sobrecarga de ventrículo derecho — marca gravedad y orienta a tratamiento de reperfusión.</li>
</ul>

<h3>Estratificación y tratamiento</h3>
<div class="table-wrap"><table class="itable" data-table-id="n7-1">
<caption>Riesgo y actitud</caption>
<thead><tr><th>Riesgo</th><th>Definición</th><th>Tratamiento</th></tr></thead>
<tbody>
<tr><td>Alto</td><td>Inestabilidad hemodinámica / shock</td><td>Fibrinólisis sistémica (o embolectomía si está contraindicada)</td></tr>
<tr><td>Intermedio</td><td>Estable con disfunción del VD y/o biomarcadores elevados</td><td>Anticoagulación con vigilancia estrecha; rescate si se deteriora</td></tr>
<tr><td>Bajo</td><td>Estable, sin disfunción del VD, PESI bajo</td><td>Anticoagulación; posible manejo ambulatorio en casos seleccionados</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">RELACIÓN</span> Para elección de anticoagulante, dosis y manejo con trombopenia, ver <span class="inline-code">Coagulación → Anticoagulantes</span> y <span class="inline-code">Cardiología → 8</span>.</div>
`;

const N8 = `
<p class="comment">// derrame pleural</p>
<h3>Criterios de Light — trasudado o exudado</h3>
<p>Es <strong>exudado</strong> si cumple <em>al menos uno</em>:</p>
<ul>
<li>Proteínas líquido / proteínas suero &gt; 0.5</li>
<li>LDH líquido / LDH suero &gt; 0.6</li>
<li>LDH del líquido &gt; 2/3 del límite superior normal del suero</li>
</ul>

<div class="table-wrap"><table class="itable" data-table-id="n8-1">
<caption>Causas según el tipo</caption>
<thead><tr><th>Trasudado</th><th>Exudado</th></tr></thead>
<tbody>
<tr><td>Insuficiencia cardiaca</td><td>Paraneumónico y empiema</td></tr>
<tr><td>Cirrosis con hipoalbuminemia</td><td>Neoplásico (incluidos linfomas)</td></tr>
<tr><td>Síndrome nefrótico</td><td>Tuberculosis</td></tr>
<tr><td>Diálisis peritoneal</td><td>Tromboembolismo pulmonar</td></tr>
<tr><td></td><td>Enfermedades autoinmunes, pancreatitis, quilotórax</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Parámetros que orientan</h3>
<ul>
<li><strong>pH &lt;7.20, glucosa baja, LDH muy alta</strong> en un paraneumónico → derrame complicado: requiere <strong>drenaje</strong>, no solo antibiótico.</li>
<li><strong>Predominio linfocitario</strong> → tuberculosis o neoplasia. ADA elevada apoya tuberculosis.</li>
<li><strong>Citología</strong> para descartar afectación neoplásica; a veces hacen falta varias muestras.</li>
<li><strong>Triglicéridos altos</strong> → quilotórax: pensar en linfoma o lesión del conducto torácico.</li>
</ul>

<div class="callout warn"><span class="tag">HEMATO</span> Antes de una toracocentesis revisa plaquetas y coagulación. En el paciente hematológico el quilotórax y el derrame linfomatoso son diagnósticos a considerar, y la citología con inmunofenotipo del líquido puede ser diagnóstica.</div>
`;

const N9 = `
<p class="comment">// toxicidad pulmonar por fármacos</p>
<div class="table-wrap"><table class="itable" data-table-id="n9-1">
<caption>Fármacos hematológicos con toxicidad pulmonar</caption>
<thead><tr><th>Fármaco</th><th>Cuadro</th><th>Claves</th></tr></thead>
<tbody>
<tr><td>Bleomicina</td><td>Neumonitis y fibrosis</td><td>Dosis-dependiente; el oxígeno a alta FiO₂ la agrava — avisar en cualquier anestesia posterior</td></tr>
<tr><td>Metotrexato</td><td>Neumonitis por hipersensibilidad</td><td>Puede aparecer a cualquier dosis; suele responder a corticoides</td></tr>
<tr><td>Busulfán, carmustina</td><td>Fibrosis tardía</td><td>Meses o años después del tratamiento</td></tr>
<tr><td>Ácido transretinoico (ATRA)</td><td>Síndrome de diferenciación</td><td>Fiebre, disnea, infiltrados, edema, hipotensión. Tratamiento: <strong>dexametasona precoz</strong></td></tr>
<tr><td>Inhibidores de mTOR</td><td>Neumonitis</td><td>Vidrio deslustrado; mejora al suspender</td></tr>
<tr><td>Inmunoterapia (anti-PD1/PDL1)</td><td>Neumonitis inmunomediada</td><td>Corticoides a dosis altas; puede requerir inmunosupresores adicionales</td></tr>
<tr><td>CAR-T</td><td>Distrés en el contexto del síndrome de liberación de citocinas</td><td>Tocilizumab ± corticoides</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">SÍNDROME DE DIFERENCIACIÓN</span> En la leucemia promielocítica tratada con ATRA o trióxido de arsénico, la aparición de fiebre, disnea e infiltrados obliga a iniciar <strong>dexametasona de inmediato</strong>, sin esperar a descartar infección. Es una de las pocas situaciones donde el corticoide no puede esperar.</div>
`;
