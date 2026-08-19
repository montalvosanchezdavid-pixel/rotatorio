// =============================================================
// CARDIOLOGÍA — árbol de secciones + contenido médico
// =============================================================
const CARDIO_TREE = {
    title:'CARDIOLOGÍA',
    intro:true,
    children: [
      {id:'cobj', title:'Objetivos / por qué le importa a hematología', leaf:true, content:()=>C_OBJ},
      {id:'c1', title:'1. Lectura sistemática del ECG', children:[
        {id:'c1a', title:'a. Ritmo y frecuencia', leaf:true, content:()=>C1A},
        {id:'c1b', title:'b. Eje eléctrico', leaf:true, content:()=>C1B},
        {id:'c1c', title:'c. Intervalos: PR, QRS, QT', leaf:true, content:()=>C1C},
        {id:'c1d', title:'d. Ondas P, QRS y ST-T', leaf:true, content:()=>C1D},
        {id:'c1e', title:'e. Patrones patológicos clave', leaf:true, content:()=>C1E},
      ]},
      {id:'c2', title:'2. Arritmias frecuentes', children:[
        {id:'c2a', title:'a. Fibrilación auricular', leaf:true, content:()=>C2A},
        {id:'c2b', title:'b. Taquicardias supraventriculares', leaf:true, content:()=>C2B},
        {id:'c2c', title:'c. Bradiarritmias y bloqueos AV', leaf:true, content:()=>C2C},
        {id:'c2d', title:'d. Arritmias ventriculares', leaf:true, content:()=>C2D},
      ]},
      {id:'c3', title:'3. Síndrome coronario agudo', leaf:true, content:()=>C3},
      {id:'c4', title:'4. Insuficiencia cardiaca', leaf:true, content:()=>C4},
      {id:'c5', title:'5. Cardiotoxicidad por quimio/radioterapia', leaf:true, content:()=>C5},
      {id:'c6', title:'6. Amiloidosis cardiaca', leaf:true, content:()=>C6},
      {id:'c7', title:'7. Derrame pericárdico y taponamiento', leaf:true, content:()=>C7},
      {id:'c8', title:'8. Anticoagulación en el paciente onco-hematológico', leaf:true, content:()=>C8},
      {id:'c9', title:'9. Biomarcadores cardiacos', leaf:true, content:()=>C9},
      {id:'c10', title:'10. Hipertensión arterial', leaf:true, content:()=>C10},
      {id:'c11', title:'11. Soplos, valvulopatías y endocarditis', leaf:true, content:()=>C11},
      {id:'c12', title:'12. Anatomía coronaria 3D (interactivo)', leaf:true, content:()=>C12},
    ]
};

/* =========================================================
   CONTENIDO — CARDIOLOGÍA
   ========================================================= */

const C_OBJ = `
<p class="comment">// por qué le importa la cardiología a un residente de hematología</p>
<div class="callout"><span class="tag">OBJETIVO</span> Reconocer y manejar de forma inicial los problemas cardiológicos más frecuentes en el paciente onco-hematológico: cardiotoxicidad por quimioterapia, arritmias en el contexto de anemia/trombopenia/anticoagulación, derrames pericárdicos malignos, amiloidosis cardiaca por cadenas ligeras, y saber leer un ECG de forma sistemática en cualquier guardia.</p>
<h3>Índice de contenidos</h3>
<ol>
<li>Lectura sistemática del ECG (ritmo, eje, intervalos, ondas, patrones)</li>
<li>Arritmias frecuentes: FA, TSV, bradiarritmias, arritmias ventriculares</li>
<li>Síndrome coronario agudo: reconocimiento y manejo inicial</li>
<li>Insuficiencia cardiaca: conceptos básicos</li>
<li>Cardiotoxicidad por quimioterapia y radioterapia</li>
<li>Amiloidosis cardiaca (relevancia directa en gammapatías/mieloma)</li>
<li>Derrame pericárdico y taponamiento cardiaco</li>
<li>Anticoagulación/antiagregación en el paciente onco-hematológico</li>
<li>Biomarcadores cardiacos: troponina y NT-proBNP</li>
<li>Hipertensión arterial: manejo básico</li>
<li>Soplos, valvulopatías y endocarditis</li>
</ol>
<p>Activa <span class="inline-code">✎ editar</span> arriba a la derecha para añadir tus propios apuntes o casos vistos en planta/guardia — se guarda automáticamente igual que en la sección de Nefrología.</p>
`;

const C1A = `
<p class="comment">// paso 1 de la lectura sistemática — ritmo y frecuencia</p>
<h3>Frecuencia cardiaca</h3>
<ul>
<li><strong>Regla de los 300:</strong> 300 / (nº de cuadros grandes entre dos R consecutivas).</li>
<li><strong>Regla de los 1500:</strong> 1500 / (nº de cuadros pequeños entre dos R).</li>
<li>Ritmo irregular: contar QRS en tira de ritmo de 6 segundos x10.</li>
</ul>
<h3>¿Es ritmo sinusal?</h3>
<p>Requiere los 4 criterios:</p>
<ol>
<li>Onda P presente antes de cada QRS.</li>
<li>Onda P positiva en II, III, aVF y negativa en aVR.</li>
<li>Cada P seguida de un QRS (conducción 1:1).</li>
<li>Intervalo PR constante (120-200 ms) y morfología de P constante.</li>
</ol>
<div class="table-wrap"><table class="itable" data-table-id="c1a-1">
<caption>Ritmo regular vs irregular: primeras pistas</caption>
<thead><tr><th>Patrón</th><th>Pensar en...</th></tr></thead>
<tbody>
<tr><td>Regular, P normal</td><td>Ritmo sinusal (normal, taquicardia o bradicardia sinusal)</td></tr>
<tr><td>Irregularmente irregular, sin P claras</td><td>Fibrilación auricular</td></tr>
<tr><td>Regularmente irregular</td><td>Bloqueo AV 2º grado Mobitz I, extrasístoles agrupadas</td></tr>
<tr><td>Regular, P ausente o retrógrada</td><td>Ritmo de la unión / taquicardia de la unión</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const C1B = `
<p class="comment">// paso 2 — eje eléctrico</p>
<div class="diagram-wrap">
<div class="diagram-caption">// sistema hexaxial de referencia</div>
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="160" fill="none" stroke="var(--border)" stroke-width="1.5"/>
  <circle cx="200" cy="200" r="106.6" fill="none" stroke="var(--border)" stroke-width="1" opacity="0.5"/>
  <circle cx="200" cy="200" r="53.3" fill="none" stroke="var(--border)" stroke-width="1" opacity="0.5"/>
  <!-- 6 diámetros cada 30° -->
  <line x1="40" y1="200" x2="360" y2="200" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="61.4" y1="120" x2="338.6" y2="280" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="120" y1="61.4" x2="280" y2="338.6" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="200" y1="40" x2="200" y2="360" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="280" y1="61.4" x2="120" y2="338.6" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="338.6" y1="120" x2="61.4" y2="280" stroke="var(--border)" stroke-width="1.5"/>
  <!-- flecha vector de ejemplo (eje normal ~+60°) -->
  <line x1="200" y1="200" x2="280" y2="338.6" stroke="var(--accent)" stroke-width="3" marker-end="url(#arrowhead)"/>
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <polygon points="0 0, 8 4, 0 8" fill="var(--accent)"/>
    </marker>
  </defs>
  <circle cx="200" cy="200" r="3" fill="var(--text-dim)"/>
  <!-- etiquetas leads con nombre (en negrita, color accent2) + grado (dim) -->
  <text x="42" y="105" fill="var(--accent2)" font-size="15" font-weight="700" text-anchor="middle" font-family="var(--mono)">aVR</text>
  <text x="42" y="121" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">-150°</text>
  <text x="200" y="14" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">-90°</text>
  <text x="291" y="38" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">-60°</text>
  <text x="322" y="105" fill="var(--accent2)" font-size="15" font-weight="700" text-anchor="middle" font-family="var(--mono)">aVL</text>
  <text x="322" y="121" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">-30°</text>
  <text x="392" y="196" fill="var(--yellow)" font-size="15" font-weight="700" text-anchor="start" font-family="var(--mono)">I</text>
  <text x="392" y="212" fill="var(--text-dim)" font-size="11" text-anchor="start" font-family="var(--mono)">0°</text>
  <text x="322" y="300" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">30°</text>
  <text x="295" y="358" fill="var(--yellow)" font-size="15" font-weight="700" text-anchor="middle" font-family="var(--mono)">II</text>
  <text x="295" y="374" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">60°</text>
  <text x="200" y="392" fill="var(--accent2)" font-size="15" font-weight="700" text-anchor="middle" font-family="var(--mono)">aVF</text>
  <text x="200" y="376" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">90°</text>
  <text x="105" y="358" fill="var(--yellow)" font-size="15" font-weight="700" text-anchor="middle" font-family="var(--mono)">III</text>
  <text x="105" y="374" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">120°</text>
  <text x="42" y="300" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">150°</text>
  <text x="8" y="196" fill="var(--text-dim)" font-size="11" text-anchor="start" font-family="var(--mono)">±180°</text>
  <text x="105" y="38" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">-120°</text>
</svg>
<p style="color:var(--text-dim);font-size:12px;margin-top:8px;">Flecha verde: ejemplo de eje normal (~+60°). Cada lead tiene un polo positivo (nombrado) y su opuesto a 180° (polo negativo, sin nombre propio).</p>
</div>
<h3>Método rápido (I y aVF)</h3>
<div class="table-wrap"><table class="itable" data-table-id="c1b-1">
<caption>Cuadrantes de eje según I y aVF</caption>
<thead><tr><th>I</th><th>aVF</th><th>Eje</th></tr></thead>
<tbody>
<tr><td>Positivo</td><td>Positivo</td><td>Normal (0° a +90°)</td></tr>
<tr><td>Positivo</td><td>Negativo</td><td>Desviación izquierda (comprobar con II: si negativo, confirma)</td></tr>
<tr><td>Negativo</td><td>Positivo</td><td>Desviación derecha</td></tr>
<tr><td>Negativo</td><td>Negativo</td><td>Eje indeterminado / extremo (\"noroeste\")</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Causas frecuentes</h3>
<ul>
<li><strong>Desviación izquierda:</strong> hemibloqueo anterior izquierdo, HVI, IAM inferior antiguo, obesidad.</li>
<li><strong>Desviación derecha:</strong> hemibloqueo posterior izquierdo, HVD, TEP agudo, EPOC, niños/personas jóvenes (variante normal).</li>
</ul>
`;

const C1C = `
<p class="comment">// paso 3 — intervalos</p>
<div class="table-wrap"><table class="itable" data-table-id="c1c-1">
<caption>Intervalos normales y alteraciones clave</caption>
<thead><tr><th>Intervalo</th><th>Normal</th><th>Alterado — pensar en...</th></tr></thead>
<tbody>
<tr><td>PR</td><td>120-200 ms</td><td>Corto: preexcitación (WPW), ritmo de la unión. Largo: bloqueo AV de 1er grado</td></tr>
<tr><td>QRS</td><td>&lt;120 ms</td><td>Ancho: bloqueo de rama, ritmo ventricular, hiperpotasemia, fármacos (antiarrítmicos IC)</td></tr>
<tr><td>QT (corregido, Bazett)</td><td>&lt;440 ms (H) / &lt;460 ms (M)</td><td>Largo: riesgo de torsade de pointes — ver fármacos abajo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p><strong>QTc = QT / √RR</strong> (RR en segundos). Regla rápida: si el QT es menor de la mitad del RR precedente, probablemente es normal.</p>
<div class="callout warn"><span class="tag">HEMATO</span> Fármacos hemato-oncológicos que prolongan el QT — vigilar ECG basal y seriado: <strong>trióxido de arsénico</strong> (LPA — el más relevante, requiere ECG y electrolitos antes de cada dosis), ondansetrón/antieméticos, azoles (voriconazol, posaconazol), quinolonas, metadona, algunos ITKs (nilotinib). Corregir siempre K⁺ y Mg²⁺ antes de iniciar estos fármacos.</div>
`;

const C1D = `
<p class="comment">// paso 4 — ondas P, complejo QRS, segmento ST y onda T</p>
<div class="diagram-wrap">
<div class="diagram-caption">// diagrama interactivo — haz click en cada onda, segmento o intervalo</div>
<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="ecgGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border)" stroke-width="0.5" opacity="0.4"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="620" height="240" fill="url(#ecgGrid)"/>
  <line x1="10" y1="150" x2="610" y2="150" stroke="var(--border)" stroke-width="1"/>

  <rect class="hit" data-title="Onda P" data-desc="Despolarización auricular. Duración normal &lt;120 ms. Alterada en crecimiento auricular (P mitrale / P pulmonale) o ausente en fibrilación auricular." x="50" y="30" width="55" height="170" fill="var(--yellow)" opacity="0.12" onclick="highlightPart(this)"/>
  <rect class="hit" data-title="Segmento PR" data-desc="Desde el final de la onda P hasta el inicio del QRS — representa el retraso fisiológico de la conducción en el nodo AV. Junto con la P forma el intervalo PR (120-200 ms). Prolongado en bloqueo AV de 1er grado." x="105" y="30" width="28" height="170" fill="var(--text-dim)" opacity="0.18" onclick="highlightPart(this)"/>
  <rect class="hit" data-title="Complejo QRS" data-desc="Despolarización ventricular. Duración normal &lt;120 ms. Ancho en bloqueos de rama, ritmo de origen ventricular o hiperpotasemia grave." x="126" y="20" width="58" height="190" fill="var(--accent)" opacity="0.14" onclick="highlightPart(this)"/>
  <rect class="hit" data-title="Segmento ST" data-desc="Desde el final del QRS hasta el inicio de la onda T — normalmente isoeléctrico (a la altura de la línea de base). Elevado en IAMCEST o pericarditis; descendido en isquemia subendocárdica." x="184" y="30" width="30" height="170" fill="var(--text-dim)" opacity="0.18" onclick="highlightPart(this)"/>
  <rect class="hit" data-title="Onda T" data-desc="Repolarización ventricular. Picuda y simétrica en hiperpotasemia; aplanada o invertida en isquemia o hipopotasemia." x="214" y="30" width="55" height="170" fill="var(--accent3)" opacity="0.14" onclick="highlightPart(this)"/>

  <path d="M10,150 L50,150 Q77,120 105,150 L126,150 L140,160 L155,40 L170,175 L184,150 L214,150 Q242,110 269,150 L610,150" fill="none" stroke="var(--text)" stroke-width="2"/>

  <text x="77" y="112" fill="var(--yellow)" font-size="12" text-anchor="middle" font-family="var(--mono)">P</text>
  <text x="155" y="30" fill="var(--accent)" font-size="12" text-anchor="middle" font-family="var(--mono)">QRS</text>
  <text x="242" y="102" fill="var(--accent3)" font-size="12" text-anchor="middle" font-family="var(--mono)">T</text>

  <g class="hit" data-title="Intervalo QT" data-desc="Desde el inicio del QRS hasta el final de la onda T — representa toda la despolarización + repolarización ventricular. Se corrige por frecuencia cardiaca (QTc, fórmula de Bazett: QT/√RR). Alargado = riesgo de torsade de pointes (ver Cardiología → Arritmias → Arritmias ventriculares)." onclick="highlightPart(this)">
    <rect x="126" y="188" width="143" height="34" fill="var(--accent2)" opacity="0.05"/>
    <line x1="126" y1="205" x2="269" y2="205" stroke="var(--accent2)" stroke-width="2"/>
    <line x1="126" y1="198" x2="126" y2="212" stroke="var(--accent2)" stroke-width="2"/>
    <line x1="269" y1="198" x2="269" y2="212" stroke="var(--accent2)" stroke-width="2"/>
    <text x="197" y="222" fill="var(--accent2)" font-size="11" text-anchor="middle" font-family="var(--mono)">QT</text>
  </g>
</svg>
<div class="diagram-info">Selecciona una onda, segmento o intervalo del trazado para ver su descripción aquí.</div>
</div>
<h3>Onda P — crecimiento auricular</h3>
<ul>
<li><strong>P mitrale</strong> (crecimiento AI): P ancha y bimodal en II, componente negativo profundo en V1.</li>
<li><strong>P pulmonale</strong> (crecimiento AD): P alta y picuda (&gt;2.5 mm) en II, III, aVF.</li>
</ul>
<h3>Complejo QRS</h3>
<ul>
<li><strong>Ondas Q patológicas:</strong> anchura ≥40 ms o profundidad ≥25% de la R siguiente → sugieren necrosis miocárdica previa.</li>
<li><strong>Hipertrofia ventricular izquierda</strong> (criterio de Sokolow-Lyon): S en V1 + R en V5 o V6 ≥ 35 mm.</li>
<li><strong>Progresión de onda R</strong> en precordiales: su pérdida sugiere IAM anterior antiguo.</li>
</ul>
<h3>Segmento ST y onda T</h3>
<div class="table-wrap"><table class="itable" data-table-id="c1d-1">
<caption>Patrones de ST-T y su significado</caption>
<thead><tr><th>Hallazgo</th><th>Pensar en...</th></tr></thead>
<tbody>
<tr><td>Elevación ST convexa (\"lomo de delfín\"), localizada por territorio</td><td>IAM con elevación del ST (SCACEST)</td></tr>
<tr><td>Elevación ST cóncava difusa + descenso del PR</td><td>Pericarditis aguda</td></tr>
<tr><td>Descenso del ST horizontal/descendente</td><td>Isquemia subendocárdica (SCASEST)</td></tr>
<tr><td>T picudas, simétricas y altas</td><td>Hiperpotasemia (ver <span class="inline-code">Nefrología → 4a</span>)</td></tr>
<tr><td>T aplanadas o invertidas</td><td>Isquemia, hipopotasemia, sobrecarga ventricular</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const C1E = `
<p class="comment">// paso 5 — patrones patológicos que hay que saber reconocer sí o sí</p>
<div class="table-wrap"><table class="itable" data-table-id="c1e-1">
<caption>Patrones clave y su territorio/significado</caption>
<thead><tr><th>Patrón</th><th>Derivaciones / claves</th><th>Significado</th></tr></thead>
<tbody>
<tr><td>IAM anterior</td><td>Elevación ST en V1-V4</td><td>Oclusión de descendente anterior</td></tr>
<tr><td>IAM inferior</td><td>Elevación ST en II, III, aVF</td><td>Oclusión de coronaria derecha (o circunfleja)</td></tr>
<tr><td>IAM lateral</td><td>Elevación ST en I, aVL, V5-V6</td><td>Oclusión de circunfleja o diagonal</td></tr>
<tr><td>BRIHH (bloqueo rama izq.)</td><td>QRS ancho, QS/rS en V1, R ancha mellada en V6 (\"orejas de conejo\")</td><td>Puede enmascarar IAM (criterios de Sgarbossa)</td></tr>
<tr><td>BRDHH (bloqueo rama der.)</td><td>QRS ancho, rSR' en V1, S ancha en V6</td><td>Frecuente y muchas veces benigno; buscar cardiopatía de base</td></tr>
<tr><td>TEP agudo</td><td>Taquicardia sinusal (lo más frecuente), patrón S1Q3T3, BRDHH nuevo</td><td>Sospecha de tromboembolismo pulmonar — alta relevancia en pacientes oncológicos</td></tr>
<tr><td>WPW (preexcitación)</td><td>PR corto + onda delta + QRS ancho</td><td>Riesgo de taquiarritmias, evitar frenadores del nodo AV si FA preexcitada</td></tr>
<tr><td>Pericarditis</td><td>Elevación ST cóncava difusa + descenso PR difuso</td><td>Descartar derrame asociado (ver apartado 7)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">MÉTODO</span> Orden mental recomendado en cada ECG: 1) ritmo y frecuencia → 2) eje → 3) intervalos (PR, QRS, QT) → 4) ondas P → 5) QRS (hipertrofias, Q patológicas, bloqueos) → 6) ST-T → 7) conclusión + comparar con ECG previo si existe.</div>
`;

const C2A = `
<p class="comment">// fibrilación auricular</p>
<h3>Diagnóstico</h3>
<p>Ritmo irregularmente irregular, sin ondas P discernibles (línea de base fibrilatoria). Puede ser paroxística, persistente o permanente.</p>
<h3>Manejo — las 3 preguntas clave</h3>
<ol>
<li><strong>¿Está inestable?</strong> (hipotensión, angina, insuficiencia cardiaca aguda, bajo nivel de consciencia) → cardioversión eléctrica urgente.</li>
<li><strong>Control de frecuencia vs control de ritmo:</strong> control de frecuencia (betabloqueantes, calcioantagonistas no dihidropiridínicos, digoxina si FEVI reducida) suele ser la estrategia inicial en la mayoría de pacientes agudos.</li>
<li><strong>¿Necesita anticoagulación?</strong> Calcular <strong>CHA2DS2-VASc</strong> (riesgo embólico) y <strong>HAS-BLED</strong> (riesgo hemorrágico) — ver también apartado 8 sobre particularidades en el paciente hemato-oncológico.</li>
</ol>
<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva de decisión — guía rápida, no sustituye el juicio clínico</div>
<div class="fa-step" data-step="1">
  <p><strong>¿Está hemodinámicamente inestable?</strong> (hipotensión, angina, insuficiencia cardiaca aguda, bajo nivel de consciencia)</p>
  <button class="flow-btn" onclick="faGoTo(this,'unstable')">Sí, inestable</button>
  <button class="flow-btn" onclick="faGoTo(this,'2')">No, estable</button>
</div>
<div class="fa-step" data-step="unstable" hidden>
  <div class="callout warn"><span class="tag">URGENTE</span> Cardioversión eléctrica sincronizada inmediata. No perder tiempo intentando control de frecuencia primero.</div>
  <button class="flow-btn" onclick="faGoTo(this,'1')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="2" hidden>
  <p><strong>Paciente estable.</strong> La estrategia inicial habitual es el <em>control de frecuencia</em> (betabloqueante o calcioantagonista no dihidropiridínico; digoxina si FEVI reducida), salvo indicación específica de control de ritmo (primer episodio reciente, FA muy sintomática pese a frecuencia controlada).</p>
  <button class="flow-btn" onclick="faGoTo(this,'3')">Siguiente: anticoagulación →</button>
  <button class="flow-btn" onclick="faGoTo(this,'1')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="3" hidden>
  <p><strong>¿Cuál es el CHA₂DS₂-VASc estimado?</strong> (ver tabla de puntuación abajo)</p>
  <button class="flow-btn" onclick="faGoTo(this,'low')">0 (hombre) / 1 (mujer)</button>
  <button class="flow-btn" onclick="faGoTo(this,'mid')">1 (hombre) / 2 (mujer)</button>
  <button class="flow-btn" onclick="faGoTo(this,'high')">≥2 (hombre) / ≥3 (mujer)</button>
</div>
<div class="fa-step" data-step="low" hidden>
  <div class="callout">Riesgo bajo: anticoagulación generalmente <strong>no indicada</strong>.</div>
  <button class="flow-btn" onclick="faGoTo(this,'1')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="mid" hidden>
  <div class="callout">Riesgo intermedio: considerar anticoagulación de forma <strong>individualizada</strong> según preferencias del paciente y riesgo hemorrágico (HAS-BLED).</div>
  <button class="flow-btn" onclick="faGoTo(this,'1')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="high" hidden>
  <div class="callout warn"><span class="tag">INDICADO</span> Anticoagulación recomendada (habitualmente ACOD), salvo contraindicación — repasa el apartado 8 para los matices en pacientes con trombopenia.</div>
  <button class="flow-btn" onclick="faGoTo(this,'1')">↺ reiniciar</button>
</div>
</div>
<div class="table-wrap"><table class="itable" data-table-id="c2a-1">
<caption>CHA2DS2-VASc (resumen)</caption>
<thead><tr><th>Factor</th><th>Puntos</th></tr></thead>
<tbody>
<tr><td>Insuficiencia cardiaca / disfunción VI</td><td>1</td></tr>
<tr><td>Hipertensión</td><td>1</td></tr>
<tr><td>Edad ≥75</td><td>2</td></tr>
<tr><td>Diabetes</td><td>1</td></tr>
<tr><td>Ictus/AIT/embolismo previo</td><td>2</td></tr>
<tr><td>Enfermedad vascular</td><td>1</td></tr>
<tr><td>Edad 65-74</td><td>1</td></tr>
<tr><td>Sexo femenino</td><td>1</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Anticoagular (habitualmente con ACOD) si ≥2 (hombres) / ≥3 (mujeres); considerar individualmente si 1/2 respectivamente. Cardioversión &gt;48h de evolución o desconocida: requiere anticoagulación previa ≥3 semanas o ecocardio transesofágico para descartar trombo en orejuela.</p>
<div class="callout warn"><span class="tag">HEMATO</span> Ibrutinib y otros inhibidores de BTK aumentan significativamente el riesgo de FA de novo — sospechar en pacientes con LLC/linfoma del manto en tratamiento que debutan con palpitaciones.</div>
`;

const C2B = `
<p class="comment">// taquicardias supraventriculares (TSV)</p>
<h3>Reconocimiento</h3>
<p>QRS estrecho, rítmico, de inicio y fin súbitos, FC habitualmente 150-220 lpm. La más frecuente es la taquicardia por reentrada intranodal (TRIN).</p>
<h3>Manejo agudo</h3>
<ol>
<li><strong>Inestable</strong> → cardioversión eléctrica sincronizada.</li>
<li><strong>Estable:</strong>
  <ul>
    <li>Maniobras vagales (Valsalva modificado, masaje del seno carotídeo si no hay soplo/riesgo).</li>
    <li><strong>Adenosina IV</strong> en bolo rápido (6 mg → 12 mg si no responde), avisar al paciente de sensación transitoria de \"muerte inminente\"/opresión — normal y de segundos de duración.</li>
    <li>Si recurre o falla: calcioantagonistas no dihidropiridínicos o betabloqueantes IV.</li>
  </ul>
</li>
</ol>
<div class="callout warn"><span class="tag">OJO</span> Si el QRS es ancho y hay dudas entre TV y TSV con conducción aberrante, tratar como <strong>taquicardia ventricular</strong> hasta demostrar lo contrario (más frecuente y potencialmente letal) — evitar verapamilo si hay duda.</div>
`;

const C2C = `
<p class="comment">// bradiarritmias y bloqueos AV</p>
<div class="table-wrap"><table class="itable" data-table-id="c2c-1">
<caption>Bloqueos AV</caption>
<thead><tr><th>Tipo</th><th>ECG</th><th>Manejo</th></tr></thead>
<tbody>
<tr><td>1er grado</td><td>PR &gt;200ms constante, todos los P conducen</td><td>Benigno, no requiere tratamiento habitualmente</td></tr>
<tr><td>2º grado Mobitz I (Wenckebach)</td><td>Alargamiento progresivo del PR hasta que un P no conduce</td><td>Habitualmente benigno (nivel nodal), observación</td></tr>
<tr><td>2º grado Mobitz II</td><td>PR constante con bloqueo súbito de un P sin alargamiento previo</td><td>Riesgo de progresión a bloqueo completo — valorar marcapasos</td></tr>
<tr><td>3er grado (completo)</td><td>Disociación AV completa, P y QRS sin relación</td><td>Marcapasos (temporal si inestable, definitivo después)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Manejo de la bradicardia sintomática aguda</h3>
<ol>
<li>Atropina IV (0.5 mg, repetir hasta 3 mg) — primera línea.</li>
<li>Si no responde: marcapasos transcutáneo, o perfusión de adrenalina/dopamina como puente.</li>
<li>Marcapasos transvenoso/definitivo según causa y persistencia.</li>
</ol>
<p><strong>Causas a revisar siempre:</strong> fármacos (betabloqueantes, digoxina, calcioantagonistas), hiperpotasemia, hipotiroidismo, isquemia inferior, hipertonía vagal.</p>
`;

const C2D = `
<p class="comment">// arritmias ventriculares</p>
<h3>Taquicardia ventricular (TV)</h3>
<ul>
<li>QRS ancho (&gt;120ms), regular, FC &gt;100 lpm, de origen ventricular.</li>
<li><strong>Inestable</strong> → cardioversión eléctrica sincronizada inmediata.</li>
<li><strong>Estable:</strong> antiarrítmicos IV (amiodarona de elección en la mayoría de contextos), tratar causa de base (isquemia, alteración electrolítica).</li>
</ul>
<h3>Fibrilación ventricular (FV) / TV sin pulso</h3>
<p>Parada cardiorrespiratoria — RCP inmediata + desfibrilación no sincronizada según algoritmo de soporte vital avanzado.</p>
<h3>Torsade de pointes</h3>
<ul>
<li>TV polimórfica con QRS que \"rota\" alrededor de la línea isoeléctrica, típicamente sobre <strong>QT largo</strong>.</li>
<li><strong>Tratamiento:</strong> <strong>sulfato de magnesio IV</strong> (aunque el Mg sea normal), corregir K⁺ (objetivo alto-normal), retirar fármacos que prolonguen QT, marcapasos/isoproterenol si bradicardia-dependiente.</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> Repasar apartado 1c: trióxido de arsénico, azoles y antieméticos son causas frecuentes de QT largo iatrogénico en plantas de hematología — monitorizar ECG y electrolitos de forma proactiva, no reactiva.</div>
`;

const C3 = `
<p class="comment">// síndrome coronario agudo (SCA)</p>
<h3>Clasificación inicial</h3>
<ul>
<li><strong>SCACEST:</strong> elevación persistente del ST (o BRIHH nuevo) + clínica compatible → reperfusión urgente (ICP primaria &lt;90-120 min, o fibrinólisis si no accesible a tiempo).</li>
<li><strong>SCASEST:</strong> descenso del ST, inversión de T, o ECG normal con troponina elevada → estratificación de riesgo y manejo invasivo según timing (urgente/precoz/diferido).</li>
<li><strong>Angina inestable:</strong> clínica compatible sin elevación de troponina.</li>
</ul>
<h3>Manejo inicial (recordatorio, no sustituye protocolo local)</h3>
<ul>
<li>Oxígeno solo si SatO2 &lt;90%, nitratos si dolor persistente y TA lo permite, analgesia.</li>
<li>Doble antiagregación (AAS + segundo antiagregante) y anticoagulación según protocolo — <strong>ver matices en trombopenia, apartado 8</strong>.</li>
<li>Betabloqueantes si no hay contraindicación (IC aguda descompensada, bradicardia, broncoespasmo activo).</li>
<li>Estatina de alta intensidad.</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> Decisiones de doble antiagregación/anticoagulación en SCA se complican mucho con trombopenia (quimioterapia, infiltración medular, PTI) o coagulopatía — siempre discusión conjunta cardiología-hematología, individualizar umbrales de plaquetas para cada fármaco/procedimiento.</div>
`;

const C4 = `
<p class="comment">// insuficiencia cardiaca — conceptos básicos</p>
<h3>Clasificación por FEVI</h3>
<div class="table-wrap"><table class="itable" data-table-id="c4-1">
<caption>Tipos de insuficiencia cardiaca</caption>
<thead><tr><th>Tipo</th><th>FEVI</th></tr></thead>
<tbody>
<tr><td>IC-FEr (reducida)</td><td>≤40%</td></tr>
<tr><td>IC-FElr (levemente reducida)</td><td>41-49%</td></tr>
<tr><td>IC-FEp (preservada)</td><td>≥50%</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Clínica y clasificación funcional (NYHA)</h3>
<p>Disnea de esfuerzo/reposo, ortopnea, disnea paroxística nocturna, edemas, crepitantes, ingurgitación yugular. NYHA I (asintomático) a IV (síntomas en reposo).</p>
<h3>Pilares del tratamiento en IC-FEr (\"the four pillars\")</h3>
<ol>
<li>IECA/ARA-II o <strong>ARNI</strong> (sacubitrilo-valsartán, de elección si tolerado).</li>
<li>Betabloqueante (bisoprolol, carvedilol, metoprolol succinato).</li>
<li>Antagonista del receptor mineralocorticoide (espironolactona, eplerenona).</li>
<li><strong>iSGLT2</strong> (dapagliflozina/empagliflozina) — beneficio independiente de diabetes, ya establecido también en IC-FEp.</li>
</ol>
<h3>Manejo de la descompensación aguda</h3>
<ul>
<li>Diuréticos de asa IV (furosemida) ajustados a respuesta, vigilar función renal y electrolitos.</li>
<li>Vasodilatadores si TA lo permite y congestión predominante.</li>
<li>Identificar y tratar el factor precipitante (arritmia, isquemia, infección, abandono de tratamiento, anemia/transfusión en contexto hemato).</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> La anemia grave y las transfusiones rápidas/masivas pueden precipitar o descompensar una IC de base — vigilar signos de sobrecarga durante transfusiones en pacientes con cardiopatía conocida (transfundir más lento, considerar diurético asociado).</div>
`;

const C5 = `
<p class="comment">// cardiotoxicidad por quimioterapia y radioterapia — clave para hematología</p>
<h3>Antraciclinas (doxorrubicina, daunorrubicina, idarrubicina)</h3>
<ul>
<li>Toxicidad <strong>dosis-acumulada dependiente</strong>, puede ser irreversible (daño mitocondrial/estrés oxidativo con muerte de cardiomiocitos).</li>
<li>Monitorización: ecocardiograma (FEVI, strain longitudinal global — más sensible y precoz que la FEVI) basal y periódico, troponina seriada en protocolos de alto riesgo.</li>
<li><strong>Dexrazoxano:</strong> cardioprotector quelante de hierro, considerado en dosis acumuladas altas o retratamiento.</li>
<li>Puede presentarse como IC aguda durante el tratamiento o, más frecuentemente, de forma tardía (meses-años después).</li>
</ul>
<h3>Otros agentes relevantes</h3>
<div class="table-wrap"><table class="itable" data-table-id="c5-1">
<caption>Toxicidad cardiovascular por fármaco</caption>
<thead><tr><th>Fármaco</th><th>Toxicidad principal</th></tr></thead>
<tbody>
<tr><td>Trastuzumab</td><td>Disfunción de VI, habitualmente reversible al suspender; no acumulativa como antraciclinas</td></tr>
<tr><td>Ciclofosfamida (altas dosis)</td><td>Miocarditis hemorrágica, IC aguda</td></tr>
<tr><td>Ibrutinib / ITKs de BTK</td><td>Fibrilación auricular, HTA</td></tr>
<tr><td>Trióxido de arsénico</td><td>Prolongación del QT, torsade de pointes</td></tr>
<tr><td>5-fluorouracilo</td><td>Vasoespasmo coronario / isquemia</td></tr>
<tr><td>Inhibidores de VEGF</td><td>Hipertensión arterial, eventos trombóticos</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Radioterapia mediastínica (linfomas)</h3>
<ul>
<li>Toxicidad <strong>tardía</strong> (años después): enfermedad coronaria acelerada, valvulopatías (sobre todo aórtica/mitral), <strong>pericarditis constrictiva</strong>, disfunción del sistema de conducción.</li>
<li>Cribado cardiológico a largo plazo en supervivientes de linfoma tratados con RT mediastínica.</li>
</ul>
<div class="callout"><span class="tag">PRÁCTICA</span> Antes de iniciar quimioterapia cardiotóxica: ecocardiograma basal, control de factores de riesgo cardiovascular, y valorar interconsulta a cardio-oncología en pacientes con cardiopatía previa o dosis acumuladas altas previstas.</div>
`;

const C6 = `
<p class="comment">// amiloidosis cardiaca — muy relevante en gammapatías monoclonales / mieloma</p>
<h3>Concepto</h3>
<p>Depósito de proteína amiloide en el intersticio miocárdico. Los dos tipos principales: <strong>AL</strong> (cadenas ligeras de inmunoglobulina — discrasia de células plasmáticas, la de mayor interés para hematología) y <strong>ATTR</strong> (transtiretina, wild-type o hereditaria).</p>
<h3>Sospecha clínica</h3>
<ul>
<li>Insuficiencia cardiaca con <strong>FEVI conservada</strong> y paredes ventriculares engrosadas (patrón restrictivo).</li>
<li>Síntomas de "banderas rojas": síndrome del túnel carpiano bilateral, hipotensión ortostática, macroglosia, equimosis periorbitaria, neuropatía periférica, proteinuria (en AL).</li>
<li>Discordancia entre grosor parietal en ecocardiograma y bajo voltaje en el ECG (muy característico).</li>
</ul>
<h3>Pruebas complementarias clave</h3>
<div class="table-wrap"><table class="itable" data-table-id="c6-1">
<caption>Hallazgos característicos</caption>
<thead><tr><th>Prueba</th><th>Hallazgo</th></tr></thead>
<tbody>
<tr><td>ECG</td><td>Bajo voltaje generalizado + patrón de pseudoinfarto (Q en precordiales sin cardiopatía isquémica)</td></tr>
<tr><td>Ecocardiograma</td><td>Hipertrofia ventricular simétrica, patrón \"granular esparcido\" (sparkling), strain longitudinal con patrón \"cherry on top\" (respeto apical)</td></tr>
<tr><td>Biomarcadores</td><td>NT-proBNP y troponina elevados — base de la estadificación pronóstica (Mayo)</td></tr>
<tr><td>Estudio hematológico</td><td>Cadenas ligeras libres en suero, inmunofijación en sangre/orina — imprescindible para diferenciar AL de ATTR</td></tr>
<tr><td>Gammagrafía con pirofosfato</td><td>Captación cardiaca intensa sugiere ATTR (siempre descartar antes AL, pues el tratamiento es radicalmente distinto)</td></tr>
<tr><td>Biopsia (grasa abdominal, médula ósea o endomiocárdica)</td><td>Confirmación histológica con tinción rojo Congo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> Ante toda gammapatía monoclonal con clínica de IC-FEp inexplicada, pensar activamente en amiloidosis AL — el diagnóstico precoz cambia radicalmente el pronóstico, ya que el tratamiento es hematológico (terapia dirigida a la clona de células plasmáticas: bortezomib, daratumumab, etc.), no cardiológico puro.</div>
`;

const C7 = `
<p class="comment">// derrame pericárdico y taponamiento cardiaco</p>
<h3>Causas relevantes en el paciente onco-hematológico</h3>
<ul>
<li>Infiltración pericárdica maligna: linfomas, leucemias, metástasis de tumores sólidos.</li>
<li>Pericarditis relacionada con radioterapia mediastínica (aguda o tardía/constrictiva).</li>
<li>Idiopática/viral, urémica (ver Nefrología), post-infarto (Dressler), autoinmune, yatrogénica (post-procedimiento).</li>
</ul>
<h3>Taponamiento cardiaco — reconocimiento</h3>
<ul>
<li><strong>Tríada de Beck:</strong> hipotensión, ingurgitación yugular, tonos cardiacos apagados (poco sensible en conjunto, no esperar a verla completa).</li>
<li><strong>Pulso paradójico:</strong> caída &gt;10 mmHg de la TA sistólica con la inspiración.</li>
<li>Taquicardia, disnea, signos de bajo gasto.</li>
<li>ECG: puede mostrar <strong>alternancia eléctrica</strong> (variación de amplitud del QRS latido a latido) en derrames grandes.</li>
</ul>
<h3>Ecocardiograma — hallazgos de taponamiento</h3>
<ul>
<li>Colapso diastólico de aurícula/ventrículo derecho.</li>
<li>Vena cava inferior dilatada sin colapso inspiratorio.</li>
<li>Variación respiratoria exagerada de los flujos mitral/tricuspídeo.</li>
</ul>
<h3>Manejo</h3>
<ul>
<li><strong>Pericardiocentesis urgente</strong> (guiada por ecocardiografía) si compromiso hemodinámico — diagnóstica (citología si sospecha maligna) y terapéutica.</li>
<li>Expansión de volumen como puente mientras se organiza el drenaje, evitar ventilación con presión positiva si es posible (empeora el retorno venoso).</li>
<li>Ventana pericárdica quirúrgica o pericardiocentesis con catéter si derrame recidivante (frecuente en etiología maligna).</li>
</ul>
`;

const C8 = `
<p class="comment">// anticoagulación y antiagregación en el paciente onco-hematológico</p>
<h3>Enfermedad tromboembólica venosa asociada a cáncer</h3>
<ul>
<li>Los pacientes oncológicos (especialmente neoplasias hematológicas activas y en tratamiento) tienen alto riesgo de ETV y también de sangrado.</li>
<li><strong>HBPM</strong> tradicionalmente de elección; <strong>ACOD</strong> (apixabán, rivaroxabán, edoxabán) hoy también recomendados en muchos casos salvo alto riesgo hemorrágico (tumores digestivos/urológicos no resecados, interacciones significativas).</li>
<li>Duración habitual mínima 3-6 meses, prolongar mientras el cáncer esté activo.</li>
</ul>
<h3>Anticoagulación con trombopenia — el gran dilema práctico</h3>
<div class="table-wrap"><table class="itable" data-table-id="c8-1">
<caption>Orientación general según cifra de plaquetas (individualizar siempre)</caption>
<thead><tr><th>Plaquetas</th><th>Actitud orientativa</th></tr></thead>
<tbody>
<tr><td>&gt;50.000/µL</td><td>Anticoagulación a dosis plena generalmente segura</td></tr>
<tr><td>25.000-50.000/µL</td><td>Individualizar: reducir dosis, o soporte transfusional de plaquetas para mantener anticoagulación plena en trombosis de alto riesgo (p. ej. TEP reciente)</td></tr>
<tr><td>&lt;25.000/µL</td><td>Alto riesgo hemorrágico — valorar suspensión temporal, filtro de vena cava si TEV muy reciente y proximal, decisión conjunta con hematología</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Trombocitopenia inducida por heparina (HIT)</h3>
<ul>
<li>Sospechar si descenso &gt;50% de plaquetas 5-10 días tras iniciar heparina (o antes si exposición previa), con o sin trombosis nueva (paradójicamente protrombótico).</li>
<li>Score 4T para probabilidad pre-test; confirmación con anticuerpos anti-PF4/heparina ± test funcional.</li>
<li><strong>Manejo:</strong> suspender toda heparina (incluidos lavados de catéter) y anticoagular con un no-heparínico (argatrobán, fondaparinux, o ACOD según contexto) — nunca solo antiagregar.</li>
</ul>
<h3>Fibrilación auricular + trombopenia</h3>
<p>Reevaluar CHA2DS2-VASc y HAS-BLED conjuntamente con el recuento de plaquetas y la causa de la trombopenia (transitoria por quimioterapia vs. crónica); decisión individualizada, a menudo con reducción de dosis de ACOD o anticoagulación transitoriamente suspendida durante nadires profundos con seguimiento estrecho.</p>
`;

const C9 = `
<p class="comment">// biomarcadores cardiacos</p>
<h3>Troponina (T o I de alta sensibilidad)</h3>
<ul>
<li>Marcador de daño miocárdico, no es sinónimo automático de SCA — hay que interpretar siempre en el contexto clínico y su cinética (ascenso/descenso seriado).</li>
<li><strong>Causas de elevación distintas al SCA</strong> (especialmente relevantes en hematología): cardiotoxicidad por quimioterapia, TEP, sepsis/shock, insuficiencia renal (aclaramiento reducido — ver Nefrología), miocarditis, taquiarritmias sostenidas, insuficiencia cardiaca descompensada.</li>
<li>La <strong>cinética</strong> (cambio significativo entre determinaciones seriadas) es lo que distingue el daño agudo de la elevación crónica basal.</li>
</ul>
<h3>NT-proBNP / BNP</h3>
<ul>
<li>Se libera por distensión de la pared ventricular — útil para apoyar/descartar insuficiencia cardiaca ante disnea de causa incierta.</li>
<li><strong>Elevado falsamente</strong> (sin IC) en: ERC/IRA (aclaramiento renal reducido), edad avanzada, fibrilación auricular, sepsis.</li>
<li><strong>Falsamente bajo</strong> en obesidad.</li>
<li>Forma parte de la estadificación pronóstica en amiloidosis cardiaca (ver apartado 6).</li>
</ul>
`;

const C10 = `
<p class="comment">// hipertensión arterial — manejo básico</p>
<h3>Clasificación</h3>
<div class="table-wrap"><table class="itable" data-table-id="c10-1">
<caption>Categorías de presión arterial</caption>
<thead><tr><th>Categoría</th><th>TAS/TAD (mmHg)</th></tr></thead>
<tbody>
<tr><td>Normal</td><td>&lt;120/80</td></tr>
<tr><td>Elevada</td><td>120-129 / &lt;80</td></tr>
<tr><td>HTA grado 1</td><td>130-139 / 80-89</td></tr>
<tr><td>HTA grado 2</td><td>≥140/90</td></tr>
<tr><td>Crisis hipertensiva</td><td>≥180/120</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Urgencia vs emergencia hipertensiva</h3>
<ul>
<li><strong>Urgencia:</strong> TA muy elevada <em>sin</em> daño de órgano diana agudo → reducción gradual en 24-48h con tratamiento oral.</li>
<li><strong>Emergencia:</strong> TA elevada <em>con</em> daño de órgano diana agudo (encefalopatía, edema agudo de pulmón, disección aórtica, SCA, IRA) → reducción controlada con fármacos IV en UCI/monitorización.</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> Los inhibidores de VEGF/tirosina-quinasa (bevacizumab, sunitinib, etc.) y el ácido tranexámico/corticoides a dosis altas pueden inducir o empeorar HTA — vigilar TA de forma proactiva durante estos tratamientos.</div>
`;

const C11 = `
<p class="comment">// soplos, valvulopatías y endocarditis — aproximación básica</p>
<h3>Aproximación a un soplo</h3>
<div class="table-wrap"><table class="itable" data-table-id="c11-1">
<caption>Soplos sistólicos vs diastólicos más frecuentes</caption>
<thead><tr><th>Tipo</th><th>Soplo</th><th>Foco / irradiación</th></tr></thead>
<tbody>
<tr><td>Sistólico</td><td>Estenosis aórtica</td><td>Foco aórtico, irradia a carótidas</td></tr>
<tr><td>Sistólico</td><td>Insuficiencia mitral</td><td>Foco mitral (ápex), irradia a axila</td></tr>
<tr><td>Diastólico</td><td>Insuficiencia aórtica</td><td>Foco aórtico/borde esternal izquierdo, decrescendo</td></tr>
<tr><td>Diastólico</td><td>Estenosis mitral</td><td>Ápex, retumbo, mejor en decúbito lateral izquierdo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Regla general: <strong>casi todos los soplos diastólicos son patológicos</strong> y requieren estudio; muchos soplos sistólicos leves son funcionales/fisiológicos (frecuentes en estados hiperdinámicos como anemia o fiebre — muy relevante en planta de hematología).</p>
<h3>Endocarditis infecciosa — cuándo sospechar</h3>
<ul>
<li>Fiebre persistente/recurrente + soplo nuevo o cambiante, sobre todo en paciente con catéter venoso central de larga duración, válvula protésica, o neutropenia febril prolongada.</li>
<li>Fenómenos embólicos/inmunológicos: petequias, nódulos de Osler, lesiones de Janeway, manchas de Roth, hematuria.</li>
<li><strong>Diagnóstico:</strong> hemocultivos seriados (idealmente antes de antibioterapia) + ecocardiograma (transtorácico inicial, transesofágico si alta sospecha y TTE no concluyente) — criterios de Duke modificados.</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> En neutropenia febril con catéter central, la endocarditis relacionada con catéter es un diagnóstico diferencial a mantener activo si persiste la fiebre/bacteriemia pese a antibioterapia adecuada y retirada del catéter — no asumir siempre que es \"solo\" bacteriemia relacionada con catéter sin complicaciones.</div>
`;

const C12 = `
<p class="comment">// anatomía coronaria — modelo 3D interactivo</p>
<div class="diagram-wrap heart3d-wrap">
<div class="diagram-caption">// corazón esquemático — arrastra para rotar, scroll para zoom, click en una arteria</div>
<div id="heart3dCanvas" class="heart3d-canvas"></div>
<div class="heart3d-legend">
<span><i style="background:#ffd166"></i> Tronco común izq. (TCI)</span>
<span><i style="background:#00ff9c"></i> Descendente anterior (DA)</span>
<span><i style="background:#7fffb0"></i> Diagonal (D1)</span>
<span><i style="background:#ff6b6b"></i> Circunfleja (Cx)</span>
<span><i style="background:#ff9e9e"></i> Marginal obtusa (OM1)</span>
<span><i style="background:#00c8ff"></i> Coronaria derecha (CD)</span>
</div>
<div class="diagram-info" id="heart3dInfo">Cargando motor 3D… (requiere conexión a internet la primera vez que abres este apartado)</div>
</div>
<h3>Territorios de irrigación (referencia rápida)</h3>
<div class="table-wrap"><table class="itable" data-table-id="c12-1">
<caption>Arteria → territorio miocárdico → derivaciones ECG típicas</caption>
<thead><tr><th>Arteria</th><th>Territorio</th><th>Derivaciones ECG</th></tr></thead>
<tbody>
<tr><td>Descendente anterior (DA / LAD)</td><td>Pared anterior y septo</td><td>V1-V4</td></tr>
<tr><td>Circunfleja (Cx)</td><td>Pared lateral</td><td>I, aVL, V5-V6</td></tr>
<tr><td>Coronaria derecha (CD / RCA)</td><td>Pared inferior (y ventrículo derecho en muchos pacientes)</td><td>II, III, aVF</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">NOTA</span> Este modelo es esquemático (no una reconstrucción anatómica exacta) — pensado para fijar el trayecto relativo de cada arteria y su territorio, útil para interpretar dónde se localiza un IAM según la derivación afectada (repasa <span class="inline-code">Cardiología → 1e. Patrones patológicos clave</span>).</div>
`;
