// =============================================================
// ENDOCRINO — árbol de secciones + contenido médico
// =============================================================
const ENDO_TREE = {
  title:'ENDOCRINO',
  intro:true,
  children: [
    {id:'endo-obj', title:'Objetivos de la rotación', leaf:true, content:()=>E_OBJ},
    {id:'e1', title:'1. Fisiología de la ADH (interactivo)', leaf:true, content:()=>E1},
    {id:'e2', title:'2. Regulación de la secreción', leaf:true, content:()=>E2},
    {id:'e3', title:'3. Diagnóstico de la poliuria (interactivo)', leaf:true, content:()=>E3},
    {id:'e4', title:'4. Diabetes insípida central y nefrogénica', leaf:true, content:()=>E4},
    {id:'e5', title:'5. SIADH', leaf:true, content:()=>E5},
  ]
};

/* =========================================================
   CONTENIDO
   ========================================================= */

const E_OBJ = `
<p class="comment">// endocrino — empezamos por el eje de la ADH, con más entradas en camino</p>
<div class="callout"><span class="tag">OBJETIVO</span> Entender el eje hipotálamo-hipófisis-riñón que regula el agua libre: cómo se sintetiza y libera la ADH, qué hace cada receptor, y cómo razonar ante una poliuria o una hiponatremia hasta llegar al diagnóstico correcto.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Fisiología de la ADH: síntesis, receptores y mecanismo renal (diagrama interactivo)</li>
<li>Regulación de la secreción: estímulo osmótico y no osmótico</li>
<li>Diagnóstico de la poliuria y prueba de restricción hídrica (algoritmo interactivo)</li>
<li>Diabetes insípida central y nefrogénica: causas y tratamiento</li>
<li>SIADH</li>
</ol>
<p class="comment">// basado en tus láminas de diabetes insípida y SIADH</p>
`;

/* ---------------------------------------------------------
   1. FISIOLOGÍA DE LA ADH — diagrama interactivo
   --------------------------------------------------------- */
const E1 = `
<p class="comment">// eje hipotálamo-hipófisis: síntesis, receptores y acción renal</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cualquier caja del esquema para ver su función. El recorrido va de arriba abajo: síntesis → liberación → los tres receptores → mecanismo en el túbulo colector.</div>

<div class="diagram-wrap">
<div class="diagram-caption">// síntesis hipotalámica → liberación hipofisaria → RV1 / RV2 / RV3 → túbulo colector</div>
<svg viewBox="0 0 700 620" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="eflecha" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <polygon points="0 0, 9 4.5, 0 9" fill="var(--text-dim)"/>
    </marker>
  </defs>

  <!-- ===== hipotálamo ===== -->
  <rect class="hit" data-title="Núcleos magnocelulares (SON / PVN)" data-desc="Las neuronas del núcleo supraóptico (SON) y paraventricular (PVN) sintetizan la prohormona de ADH, unida a neurofisina II, que viaja por los axones hasta la neurohipófisis. El mismo sistema, con neurofisina I, sintetiza oxitocina — interviene en la lactancia y el parto."
    x="250" y="16" width="200" height="50" rx="4" fill="var(--accent2)" opacity="0.16" onclick="highlightPart(this)"/>
  <text x="350" y="38" fill="var(--accent2)" font-size="13" font-weight="bold" text-anchor="middle" font-family="var(--mono)">NÚCLEOS MAGNOCELULARES</text>
  <text x="350" y="55" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">SON / PVN — neurofisina I y II</text>

  <line x1="350" y1="66" x2="350" y2="98" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#eflecha)"/>

  <!-- ===== neurohipófisis ===== -->
  <rect class="hit" data-title="Neurohipófisis — liberación de ADH" data-desc="Almacena y libera la ADH (arginina-vasopresina, AVP) ya sintetizada a la circulación, en respuesta al estímulo osmótico o no osmótico. Es liberación, no síntesis de novo: la hormona viene preformada desde el hipotálamo."
    x="250" y="100" width="200" height="46" rx="4" fill="var(--yellow)" opacity="0.16" onclick="highlightPart(this)"/>
  <text x="350" y="120" fill="var(--yellow)" font-size="13" font-weight="bold" text-anchor="middle" font-family="var(--mono)">NEUROHIPÓFISIS</text>
  <text x="350" y="137" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">libera ADH / AVP (vasopresina)</text>

  <line x1="300" y1="146" x2="140" y2="196" stroke="var(--text-dim)" stroke-width="1.3" marker-end="url(#eflecha)"/>
  <line x1="350" y1="146" x2="350" y2="196" stroke="var(--text-dim)" stroke-width="1.3" marker-end="url(#eflecha)"/>
  <line x1="400" y1="146" x2="560" y2="196" stroke="var(--text-dim)" stroke-width="1.3" marker-end="url(#eflecha)"/>

  <!-- ===== V1aR ===== -->
  <g class="hit" data-title="Receptor V1a (RV1)" data-desc="Vascular y hepático: vasoconstricción, agregación plaquetaria y glucogenólisis. También media el aumento de aldosterona y cortisol. Es la diana de la terlipresina en el sangrado por varices esofágicas y en el síndrome hepatorrenal." onclick="highlightPart(this)">
    <rect x="30" y="198" width="220" height="104" rx="4" fill="var(--accent3)" opacity="0.14"/>
    <text x="140" y="222" fill="var(--accent3)" font-size="13" font-weight="bold" text-anchor="middle" font-family="var(--mono)">RV1 (V1aR)</text>
    <text x="140" y="242" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">vasos y plaquetas</text>
    <text x="140" y="262" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">vasoconstricción</text>
    <text x="140" y="278" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">agregación plaquetaria</text>
    <text x="140" y="294" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">↑ aldosterona y cortisol</text>
  </g>

  <!-- ===== V2R ===== -->
  <g class="hit" data-title="Receptor V2 (RV2)" data-desc="El más relevante en la práctica clínica: en el riñón concentra la orina y diluye el plasma — es la diana de la desmopresina y de los vaptanes. También aumenta los factores de coagulación VIII y el factor von Willebrand: por eso la desmopresina se usa en la enfermedad de von Willebrand leve y en la hemofilia A leve." onclick="highlightPart(this)">
    <rect x="260" y="198" width="180" height="104" rx="4" fill="var(--accent)" opacity="0.16"/>
    <text x="350" y="222" fill="var(--accent)" font-size="13" font-weight="bold" text-anchor="middle" font-family="var(--mono)">RV2 (V2R)</text>
    <text x="350" y="242" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">riñón (y endotelio)</text>
    <text x="350" y="262" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">↑ factores VIII y FvW</text>
    <text x="350" y="278" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">riñón: concentra orina</text>
    <text x="350" y="294" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">y diluye el plasma</text>
  </g>

  <!-- ===== V1bR ===== -->
  <g class="hit" data-title="Receptor V1b / V3 (RV3)" data-desc="Hipofisario y central: potencia el efecto del CRH aumentando la liberación de ACTH, y también de GH. Participa en la comunicación y el comportamiento a nivel cerebral, sobre todo en la respuesta al estrés." onclick="highlightPart(this)">
    <rect x="450" y="198" width="220" height="104" rx="4" fill="var(--accent2)" opacity="0.14"/>
    <text x="560" y="222" fill="var(--accent2)" font-size="13" font-weight="bold" text-anchor="middle" font-family="var(--mono)">RV3 (V1bR)</text>
    <text x="560" y="242" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">hipófisis y cerebro</text>
    <text x="560" y="262" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">CRH: ↑ ACTH, ↑ GH</text>
    <text x="560" y="278" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">comunicación y</text>
    <text x="560" y="294" fill="var(--text)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">comportamiento</text>
  </g>

  <line x1="350" y1="302" x2="350" y2="332" stroke="var(--text-dim)" stroke-width="1.3" marker-end="url(#eflecha)"/>
  <text x="360" y="322" fill="var(--text-dim)" font-size="9" font-family="var(--mono)">acción en el riñón</text>

  <!-- ===== túbulo colector ===== -->
  <rect x="60" y="336" width="580" height="230" rx="6" fill="none" stroke="var(--border)"/>
  <text x="350" y="358" fill="var(--text-dim)" font-size="10" letter-spacing="1" text-anchor="middle" font-family="var(--mono)">CÉLULA PRINCIPAL DEL TÚBULO COLECTOR</text>

  <text x="100" y="470" fill="var(--text-dim)" font-size="10" text-anchor="middle" font-family="var(--mono)">LUZ TUBULAR</text>
  <text x="600" y="470" fill="var(--text-dim)" font-size="10" text-anchor="middle" font-family="var(--mono)">SANGRE</text>

  <rect x="180" y="390" width="340" height="130" rx="4" fill="var(--bg-elev)" stroke="var(--border)"/>

  <g class="hit" data-title="Membrana basolateral: receptor V2" data-desc="La ADH circulante se une al V2R en la membrana basolateral (lado de la sangre). Activa una proteína Gs, que estimula la adenilato ciclasa y genera AMPc dentro de la célula." onclick="highlightPart(this)">
    <rect x="470" y="410" width="60" height="90" rx="3" fill="var(--accent)" opacity="0.2"/>
    <text x="500" y="400" fill="var(--accent)" font-size="10" font-weight="bold" text-anchor="middle" font-family="var(--mono)">V2R</text>
  </g>

  <g class="hit" data-title="AMPc y proteína kinasa A" data-desc="El AMPc generado activa la proteína kinasa A (PKA), que fosforila las vesículas que contienen los canales de acuaporina-2 (AQP2): es la señal para que se trasloquen hacia la membrana apical." onclick="highlightPart(this)">
    <rect x="330" y="410" width="120" height="40" rx="3" fill="var(--yellow)" opacity="0.16"/>
    <text x="390" y="434" fill="var(--yellow)" font-size="10" text-anchor="middle" font-family="var(--mono)">AMPc → PKA</text>
  </g>

  <g class="hit" data-title="AQP2 en la membrana apical" data-desc="Los canales de acuaporina-2 (AQP2) se insertan en la membrana apical (luminal) y dejan pasar el agua desde la luz tubular hacia la célula; de ahí, por AQP3/AQP4 constitutivas, hacia el intersticio y la sangre. Resultado: orina concentrada (Osm urinaria 50-1200 mOsm/kg) y plasma diluido." onclick="highlightPart(this)">
    <rect x="200" y="460" width="130" height="40" rx="3" fill="var(--accent2)" opacity="0.18"/>
    <text x="265" y="484" fill="var(--accent2)" font-size="10" text-anchor="middle" font-family="var(--mono)">AQP2 apical</text>
  </g>

  <line x1="200" y1="455" x2="180" y2="440" stroke="var(--text-dim)" stroke-width="1" marker-end="url(#eflecha)"/>
  <line x1="120" y1="450" x2="195" y2="475" stroke="var(--accent2)" stroke-width="1.3" marker-end="url(#eflecha)"/>
  <text x="140" y="440" fill="var(--accent2)" font-size="9" font-family="var(--mono)">H₂O</text>
  <line x1="520" y1="475" x2="595" y2="450" stroke="var(--accent2)" stroke-width="1.3" marker-end="url(#eflecha)"/>
  <text x="555" y="440" fill="var(--accent2)" font-size="9" font-family="var(--mono)">H₂O</text>

  <text x="350" y="550" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">Osm urinaria resultante: 50 – 1200 mOsm/kg</text>
</svg>
<div class="diagram-info">Selecciona una caja del esquema para ver su función.</div>
</div>
`;

/* ---------------------------------------------------------
   2. REGULACIÓN DE LA SECRECIÓN
   --------------------------------------------------------- */
const E2 = `
<p class="comment">// qué dispara y qué frena la liberación de ADH</p>

<h3>Estímulo principal: osmolalidad plasmática</h3>
<div class="callout"><span class="tag">UMBRAL</span> La ADH empieza a liberarse a partir de una Osmp de <strong>~280-290 mOsm/kg</strong>. A partir de ~290 mOsm/kg la secreción ya es máxima, y ese mismo nivel coincide con el umbral de la sed: la sed es el mecanismo de reserva cuando la ADH ya no puede concentrar más.</div>
<p>Es el sistema más sensible: basta un cambio de un 1-2 % en la osmolalidad plasmática para modificar la secreción de ADH.</p>

<h3>Estímulos no osmóticos</h3>
<p>Menos sensibles que el osmótico — necesitan cambios más grandes (~10 % de la volemia o la presión) para activarse, pero cuando lo hacen pueden anular el freno osmótico:</p>
<div class="table-wrap"><table class="itable" data-table-id="e2-1">
<thead><tr><th>Estímulo</th><th>Vía</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>Hipotensión</td><td>Barorreceptores del seno carotídeo</td><td>Necesita una caída de presión relevante para activarse</td></tr>
<tr><td>Hipovolemia</td><td>Receptores de baja presión (estiramiento auricular)</td><td>Requiere ~10 % de caída de volemia</td></tr>
<tr><td>Náuseas</td><td>Estímulo directo, muy potente</td><td>Puede disparar la ADH de forma desproporcionada a la osmolalidad — causa clásica de hiponatremia aguda tras cirugía o quimioterapia</td></tr>
<tr><td>Dolor y estrés</td><td>Vías centrales</td><td>Otro estímulo no osmótico habitual en el paciente hospitalizado</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Fármacos y factores que modifican la secreción</h3>
<div class="table-wrap"><table class="itable" data-table-id="e2-2">
<thead><tr><th>↑ Aumentan la ADH</th><th>↓ Disminuyen la ADH</th></tr></thead>
<tbody>
<tr><td>Nicotina, opioides (morfina)</td><td>Alcohol (etanol)</td></tr>
<tr><td>Ciclofosfamida, vincristina</td><td>Fenitoína</td></tr>
<tr><td>Carbamazepina, ISRS</td><td>Clonidina</td></tr>
<tr><td>Náuseas, dolor, estrés</td><td>Cortisol (retroalimentación negativa)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">HEM</span> Ciclofosfamida y vincristina están entre las causas farmacológicas de SIADH más relevantes en un servicio de hematología/oncología — vigila la natremia tras iniciarlas.</div>
`;

/* ---------------------------------------------------------
   3. DIAGNÓSTICO DE LA POLIURIA — algoritmo interactivo
   --------------------------------------------------------- */
const E3 = `
<p class="comment">// poliuria → prueba de restricción hídrica → diagnóstico</p>
<div class="callout"><span class="tag">DEFINICIÓN</span> Poliuria: diuresis &gt;3-3.5 L/día en el adulto. Genera polidipsia compensatoria (o es al revés, según la causa) — el primer paso siempre es medir la <strong>osmolalidad urinaria</strong>.</div>

<div class="diagram-wrap">
<div class="diagram-caption">// sigue el árbol pulsando la opción que corresponda</div>
<div class="fa-step" data-step="start">
  <p><strong>Poliuria confirmada (&gt;3-3.5 L/día). ¿Osmolalidad urinaria basal?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'alta')">Alta (&gt;300 mOsm/kg)</button>
  <button class="flow-btn" onclick="faGoTo(this,'baja')">Baja (&lt;300 mOsm/kg)</button>
</div>

<div class="fa-step" data-step="alta" hidden>
  <div class="callout warn"><span class="tag">DIURESIS OSMÓTICA</span> El soluto arrastra agua. Causa más frecuente: <strong>hiperglucemia</strong> (glucosuria). También manitol, urea elevada (tras obstrucción resuelta, catabolismo) o diuréticos. No es un fallo de la ADH — no hace falta prueba de restricción hídrica, trata la causa.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="baja" hidden>
  <p><strong>Diuresis acuosa (Osm Uri &lt;300).</strong> Aquí sí hay un fallo del eje ADH-riñón o un exceso de ingesta. Siguiente paso: <strong>prueba de restricción hídrica</strong> — se retira el agua y se mide cómo responden Osmp, Nap y ADH (o copeptina).</p>
  <button class="flow-btn" onclick="faGoTo(this,'central')">Osmp ↑, Nap ↑, ADH ↓ (responde a desmopresina)</button>
  <button class="flow-btn" onclick="faGoTo(this,'nefro')">Osmp ↑, Nap ↑, ADH normal (no responde a desmopresina)</button>
  <button class="flow-btn" onclick="faGoTo(this,'pp')">Osmp ↓/normal, Nap ↓/normal, ADH normal</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="central" hidden>
  <div class="callout"><span class="tag">DI CENTRAL</span> Falta de secreción de ADH. Al restringir agua, el riñón no puede concentrar por sí solo (Osmp y Nap suben, ADH/copeptina no acompaña) — pero al dar desmopresina exógena, SÍ concentra: el riñón funciona, lo que falla es la hipófisis. Ver apartado 4.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="nefro" hidden>
  <div class="callout warn"><span class="tag">DI NEFROGÉNICA</span> Incapacidad del riñón para responder a la ADH. La ADH se libera con normalidad (o incluso alta) pero el túbulo colector no concentra la orina, y tampoco responde a la desmopresina exógena. Ver apartado 4.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="pp" hidden>
  <div class="callout"><span class="tag">POLIDIPSIA PRIMARIA</span> Ingesta hídrica excesiva y primaria: el eje ADH-riñón está intacto, simplemente se suprime la ADH porque la Osmp está en el límite bajo. Causas: esquizofrenia, TOC, traumatismo craneoencefálico o esclerosis múltiple (lesión del centro de la sed), e iatrogenia por diuréticos.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>
`;

/* ---------------------------------------------------------
   4. DIABETES INSÍPIDA CENTRAL Y NEFROGÉNICA
   --------------------------------------------------------- */
const E4 = `
<p class="comment">// FALLO ADH → poliuria 3-3.5 L/día → polidipsia compensatoria</p>

<h3>Diabetes insípida central</h3>
<div class="callout"><span class="tag">MECANISMO</span> Falta de secreción de ADH por la neurohipófisis. Responde a la desmopresina exógena.</div>
<div class="table-wrap"><table class="itable" data-table-id="e4-1">
<thead><tr><th>Tipo</th><th>Frecuencia</th><th>Causas</th></tr></thead>
<tbody>
<tr><td>Primaria</td><td>~7 %</td><td>Idiopática</td></tr>
<tr><td>Secundaria</td><td>~93 %</td><td>Destrucción del eje hipotálamo-hipofisario: tumor, cirugía o traumatismo hipofisario, hipofisitis autoinmune, infiltrativas (histiocitosis, sarcoidosis), metástasis. Típicamente de <strong>inicio brusco</strong></td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p><strong>Tratamiento:</strong> desmopresina (análogo sintético de la ADH, selectivo de V2R).</p>

<h3>Diabetes insípida nefrogénica</h3>
<div class="callout warn"><span class="tag">MECANISMO</span> El riñón es incapaz de responder a la ADH. No responde a la desmopresina.</div>
<div class="table-wrap"><table class="itable" data-table-id="e4-2">
<thead><tr><th>Tipo</th><th>Causas</th></tr></thead>
<tbody>
<tr><td>Primaria</td><td>Genética: mutación del receptor V2 o del canal AQP2</td></tr>
<tr><td>Secundaria</td><td>Fármacos: <strong>litio</strong>, demeclociclina · Trastornos metabólicos: hipopotasemia, hipercalcemia · Sobrehidratación crónica, entre otras</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p><strong>Tratamiento:</strong> corregir la causa si es posible, y si no — tratamiento paradójico: <strong>tiazidas</strong> + <strong>AINEs</strong> + dieta baja en sodio. Al provocar depleción de volumen leve, aumentan la reabsorción proximal de agua y sodio, reduciendo el volumen que llega al túbulo colector y, con ello, el volumen final de orina.</p>

<h3>DI central vs. nefrogénica — de un vistazo</h3>
<div class="table-wrap"><table class="itable" data-table-id="e4-3">
<thead><tr><th></th><th>DI central</th><th>DI nefrogénica</th></tr></thead>
<tbody>
<tr><td>ADH plasmática / copeptina</td><td>Baja</td><td>Normal o alta</td></tr>
<tr><td>Respuesta a desmopresina</td><td>Sí concentra</td><td>No concentra</td></tr>
<tr><td>Osmp y Na⁺ en la restricción hídrica</td><td>Suben</td><td>Suben</td></tr>
<tr><td>Tratamiento</td><td>Desmopresina</td><td>Corregir causa, tiazidas + AINEs + ↓Na dieta</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

/* ---------------------------------------------------------
   5. SIADH
   --------------------------------------------------------- */
const E5 = `
<p class="comment">// el extremo opuesto del espectro: exceso de ADH</p>
<div class="callout"><span class="tag">DEFINICIÓN</span> Secreción inadecuada de ADH: la orina se concentra a pesar de una osmolalidad plasmática baja. Produce una hiponatremia <strong>euvolémica</strong>. Es el reverso de la diabetes insípida — mientras que en la DI falta ADH y sobra agua libre en orina, en el SIADH sobra ADH y falta agua libre en orina.</div>

<h3>Criterios diagnósticos (Bartter-Schwartz)</h3>
<ul>
<li>Hiponatremia con Osmp baja (&lt;275 mOsm/kg)</li>
<li>Osmolalidad urinaria inapropiadamente alta (&gt;100 mOsm/kg) para esa Osmp</li>
<li>Euvolemia clínica — sin edemas ni signos de depleción de volumen</li>
<li>Natriuresis conservada (Na urinario &gt;30-40 mEq/L) a pesar de la hiponatremia</li>
<li>Función tiroidea, suprarrenal y renal normales, sin diuréticos activos</li>
</ul>

<h3>Causas</h3>
<div class="table-wrap"><table class="itable" data-table-id="e5-1">
<thead><tr><th>Grupo</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>Pulmonar</td><td>Neumonía, tuberculosis, ventilación con presión positiva</td></tr>
<tr><td>SNC</td><td>Meningitis, hemorragia subaracnoidea, traumatismo craneoencefálico, ictus</td></tr>
<tr><td>Tumoral</td><td>Carcinoma microcítico de pulmón (causa paraneoplásica clásica)</td></tr>
<tr><td>Fármacos</td><td>Carbamazepina, ISRS, <strong>ciclofosfamida</strong>, <strong>vincristina</strong>, opioides</td></tr>
<tr><td>Náuseas / dolor / estrés</td><td>Estímulo no osmótico directo — muy frecuente en el paciente hospitalizado</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">HEM</span> Ciclofosfamida y vincristina son causas farmacológicas de SIADH especialmente relevantes en hematología — ante una hiponatremia tras quimioterapia, piénsalo.</div>

<h3>Tratamiento</h3>
<ul>
<li><strong>Restricción hídrica</strong> (~800-1000 mL/día) como primera medida en la mayoría de los casos.</li>
<li>Comprimidos de sal / dieta rica en sodio si la restricción no basta.</li>
<li><strong>Tolvaptán</strong> (antagonista del V2R) en casos seleccionados, con inicio hospitalario y monitorización estrecha del sodio.</li>
<li>Suero salino hipertónico si hay síntomas neurológicos graves o hiponatremia aguda grave — corrección lenta y controlada para evitar el <strong>síndrome de desmielinización osmótica</strong>.</li>
</ul>
<p class="comment">// para el manejo detallado de la corrección del sodio, ver Nefrología → trastornos del sodio</p>
`;
