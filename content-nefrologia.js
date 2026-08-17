// =============================================================
// NEFROLOGÍA — árbol de secciones + contenido médico
// =============================================================
const NEFRO_TREE = {
    title:'NEFROLOGÍA',
    intro:true,
    children: [
      {id:'obj', title:'Objetivos de la rotación', leaf:true, content: () => OBJETIVOS},
      {id:'t1', title:'1. Fracaso Renal Agudo (FRA)', children:[
        {id:'t1a', title:'a. IRA pre-renal', leaf:true, content:()=>T1A},
        {id:'t1b', title:'b. IRA renal (intrínseca)', leaf:true, content:()=>T1B},
        {id:'t1c', title:'c. IRA post-renal', leaf:true, content:()=>T1C},
      ]},
      {id:'t2', title:'2. Enfermedad Renal Crónica', leaf:true, content:()=>T2},
      {id:'t3', title:'3. Gasometría venosa', children:[
        {id:'t3a', title:'a. Acidosis metabólica', leaf:true, content:()=>T3A},
        {id:'t3b', title:'b. Alcalosis metabólica', leaf:true, content:()=>T3B},
        {id:'t3c', title:'c. Trastornos mixtos', leaf:true, content:()=>T3C},
      ]},
      {id:'t4', title:'4. Trastornos hidroelectrolíticos', children:[
        {id:'t4a', title:'a. Hiper/Hipopotasemia', leaf:true, content:()=>T4A},
        {id:'t4b', title:'b. Hiponatremia', leaf:true, content:()=>T4B},
        {id:'t4c', title:'c. Magnesio', leaf:true, content:()=>T4C},
        {id:'t4d', title:'d. Hipo/Hipercalcemia', leaf:true, content:()=>T4D},
      ]},
      {id:'t5', title:'5. Sueroterapia', leaf:true, content:()=>T5},
      {id:'t6', title:'6. Acceso vascular temporal', leaf:true, content:()=>T6},
      {id:'t7', title:'7. Aféresis terapéutica', leaf:true, content:()=>T7},
      {id:'t8', title:'8. Hemodiálisis aguda: indicaciones y complicaciones', leaf:true, content:()=>T8},
      {id:'t9', title:'9. Síndrome de lisis tumoral', leaf:true, content:()=>T9},
      {id:'t10', title:'10. Técnicas de depuración extrarrenal', children:[
        {id:'t10a', title:'a. Hemodiálisis', children:[
          {id:'t10ai', title:'i. Aguda', leaf:true, content:()=>T10Ai},
          {id:'t10aii', title:'ii. Crónica', leaf:true, content:()=>T10Aii},
        ]},
        {id:'t10b', title:'b. Diálisis peritoneal (CAPD)', leaf:true, content:()=>T10B},
      ]},
      {id:'t11', title:'11. Fármacos en insuficiencia renal', leaf:true, content:()=>T11},
      {id:'t12', title:'12. Trasplante renal', leaf:true, content:()=>T12},
      {id:'t13', title:'13. Radiología en Nefrología: biopsia renal', leaf:true, content:()=>T13},
      {id:'t14', title:'14. Regulación del metabolismo mineral', leaf:true, hem:true, content:()=>T14},
      {id:'t15', title:'15. Hipertensión arterial (nefrológica)', leaf:true, hem:true, content:()=>T15},
      {id:'t16', title:'16. Infecciones urinarias', leaf:true, hem:true, content:()=>T16},
      {id:'t17', title:'17. Farmacología de diuréticos y antihipertensivos', leaf:true, hem:true, content:()=>T17},
      {id:'t18', title:'18. Fármacos inmunosupresores', hem:true, children:[
        {id:'t18a', title:'a. Manejo de drogas inmunosupresoras', leaf:true, hem:true, content:()=>T18A},
        {id:'t18b', title:'b. Interacciones farmacológicas', leaf:true, hem:true, content:()=>T18B},
      ]},
      {id:'t19', title:'19. Anemia renal: EPO y hierro', leaf:true, content:()=>T19},
      {id:'t20', title:'20. Trastornos del pH (algoritmos interactivos)', leaf:true, content:()=>T20},
    ]
};

/* =========================================================
   CONTENIDO MÉDICO
   ========================================================= */

const OBJETIVOS = `
<p class="comment">// objetivos generales de la rotación de residentes (Hematología) por Nefrología</p>
<div class="callout"><span class="tag">OBJETIVO</span> Adquirir el manejo diagnóstico y terapéutico inicial de las principales urgencias y patologías nefrológicas que puede encontrar un residente de guardia, con especial foco en la interacción nefrología–hematología (mieloma, LLA/LMA con lisis tumoral, trasplante de progenitores, nefrotoxicidad de quimioterápicos, etc.).</p>
<h3>Índice de contenidos</h3>
<ol>
<li>Fracaso renal agudo: pre-renal, renal y post-renal</li>
<li>Enfermedad renal crónica: estadios, complicaciones, tratamiento</li>
<li>Gasometría venosa: acidosis, alcalosis, trastornos mixtos</li>
<li>Trastornos hidroelectrolíticos (K, Na, Mg, Ca)</li>
<li>Sueroterapia</li>
<li>Accesos vasculares para depuración extracorpórea</li>
<li>Aféresis terapéutica</li>
<li>Hemodiálisis aguda: indicaciones y complicaciones</li>
<li>Síndrome de lisis tumoral</li>
<li>Técnicas de depuración extrarrenal (HD aguda/crónica, DPCA)</li>
<li>Fármacos en insuficiencia renal y ajuste de dosis</li>
<li>Trasplante renal</li>
<li>Radiología en nefrología: biopsia renal percutánea</li>
</ol>
<p>Usa el árbol de la izquierda para navegar por cada apartado. Activa el modo <span class="inline-code">✎ editar</span> para completar con tus propios apuntes, casos clínicos vistos en planta/guardia, o dudas pendientes.</p>
`;

const T1A = `
<p class="comment">// IRA (injuria renal aguda) de causa pre-renal — hipoperfusión renal SIN daño estructural (potencialmente reversible)</p>
<h3>Definición y estadiaje (KDIGO) — aplica a todo el apartado 1</h3>
<div class="table-wrap"><table class="itable" data-table-id="t1a-0">
<caption>Criterios KDIGO de fracaso renal agudo</caption>
<thead><tr><th>Estadio</th><th>Creatinina sérica</th><th>Diuresis</th></tr></thead>
<tbody>
<tr><td>1</td><td>×1.5-1.9 el basal, o aumento ≥0.3 mg/dL en 48h</td><td>&lt;0.5 mL/kg/h durante 6-12h</td></tr>
<tr><td>2</td><td>×2.0-2.9 el basal</td><td>&lt;0.5 mL/kg/h durante ≥12h</td></tr>
<tr><td>3</td><td>×3 el basal, o Cr ≥4 mg/dL, o inicio de TRS</td><td>&lt;0.3 mL/kg/h durante ≥24h, o anuria ≥12h</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Fisiopatología</h3>
<p>Disminución del flujo sanguíneo renal efectivo → caída del FG sin lesión del parénquima. El riñón "sano" responde activando el eje RAA, ADH y SNS para preservar la perfusión → <strong>oliguria con orina concentrada</strong> y ávida retención de Na⁺.</p>
<h3>Causas principales</h3>
<ul>
<li><strong>Hipovolemia real:</strong> hemorragia, pérdidas digestivas (vómitos/diarrea), quemados, tercer espacio (pancreatitis, peritonitis), diuréticos excesivos.</li>
<li><strong>Hipovolemia "efectiva" (bajo gasto o vasodilatación):</strong> ICC, cirrosis con ascitis (síndrome hepatorrenal), sepsis, shock distributivo.</li>
<li><strong>Alteración de la autorregulación renal:</strong> AINEs (vasoconstricción de arteriola aferente), IECA/ARA-II (vasodilatación de arteriola eferente, especialmente peligroso en estenosis bilateral de la arteria renal), inhibidores de calcineurina.</li>
<li>Estenosis de arteria renal / síndrome compartimental abdominal.</li>
</ul>
<h3>Diagnóstico</h3>
<div class="table-wrap"><table class="itable" data-table-id="t1a-1">
<caption>Índices urinarios: pre-renal vs NTA (necrosis tubular aguda)</caption>
<thead><tr><th>Parámetro</th><th>Pre-renal</th><th>NTA / renal</th></tr></thead>
<tbody>
<tr><td>Na⁺ urinario</td><td>&lt; 20 mEq/L</td><td>&gt; 40 mEq/L</td></tr>
<tr><td>FeNa (fracción excreción Na)</td><td>&lt; 1%</td><td>&gt; 2%</td></tr>
<tr><td>FeUrea (si diuréticos)</td><td>&lt; 35%</td><td>&gt; 50%</td></tr>
<tr><td>Osmolaridad urinaria</td><td>&gt; 500 mOsm/kg</td><td>~300 (isostenuria)</td></tr>
<tr><td>Densidad urinaria</td><td>&gt; 1020</td><td>~1010</td></tr>
<tr><td>Urea/Creatinina plasmática</td><td>&gt; 40-100:1</td><td>&lt; 20:1 (~10-15:1)</td></tr>
<tr><td>Sedimento</td><td>Normal / cilindros hialinos</td><td>Cilindros granulosos "en barro", células epiteliales</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">OJO</span> El FeNa pierde valor si el paciente ha recibido diuréticos recientemente (usar FeUrea en ese caso) y en pre-renal sobreañadida a ERC o glomerulonefritis con natriuresis obligada.</div>
<h3>Manejo</h3>
<ul>
<li>Corregir la causa: fluidoterapia si hipovolemia real (cristaloides, valorar objetivos dinámicos de respuesta a volumen), tratar sepsis/ICC/cirrosis según corresponda.</li>
<li>Retirar/ajustar fármacos nefrotóxicos y que alteran autorregulación (AINEs, IECA/ARA-II, diuréticos si excesivos).</li>
<li>Si no se corrige la causa → evoluciona a NTA isquémica (pre-renal prolongada = causa más frecuente de IRA renal intrínseca).</li>
</ul>
`;

const T1B = `
<p class="comment">// IRA renal / intrínseca — lesión estructural del parénquima renal</p>
<h3>Clasificación por localización</h3>
<div class="table-wrap"><table class="itable" data-table-id="t1b-1">
<caption>Causas de IRA intrínseca por compartimento</caption>
<thead><tr><th>Compartimento</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>Tubular (más frecuente, ~85%)</td><td>Necrosis tubular aguda (NTA) isquémica o tóxica (contraste, aminoglucósidos, mioglobina, cisplatino, ácido úrico)</td></tr>
<tr><td>Intersticial</td><td>Nefritis intersticial aguda (NIA) por fármacos (betalactámicos, AINEs, IBP, alopurinol), infecciosa, autoinmune</td></tr>
<tr><td>Glomerular</td><td>Glomerulonefritis rápidamente progresiva, GN post-infecciosa, vasculitis ANCA, nefropatía IgA</td></tr>
<tr><td>Vascular</td><td>Ateroembolia, trombosis/embolia arteria o vena renal, microangiopatía trombótica (SHU/PTT), crisis renal esclerodérmica</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Necrosis tubular aguda (NTA)</h3>
<p>Causa más frecuente de IRA intrahospitalaria. Fases clásicas: <strong>inicio</strong> (evento lesivo) → <strong>mantenimiento</strong> (oligoanuria días-semanas, riesgo de sobrecarga/hiperK) → <strong>recuperación</strong> (poliuria por recuperación tubular incompleta, vigilar depleción de volumen y electrolitos).</p>
<h4>Nefritis intersticial aguda (NIA)</h4>
<ul>
<li>Sospechar ante IRA + fiebre + rash + eosinofilia tras nuevo fármaco (aunque la tríada clásica es poco sensible).</li>
<li>Sedimento: leucocituria, eosinofiluria (poco sensible/específica), cilindros leucocitarios.</li>
<li>Tratamiento: retirar fármaco causal; corticoides si no mejora en días o biopsia lo confirma.</li>
</ul>
<h3>Estudio diagnóstico general</h3>
<ul>
<li>Sedimento urinario + proteinuria (cociente prot/creat u orina 24h).</li>
<li>Ecografía renal (descartar obstrucción, valorar tamaño/ecogenicidad).</li>
<li>Serologías/inmunología si sospecha glomerular: ANA, ANCA, anti-MBG, complemento, crioglobulinas, serologías VHB/VHC/VIH según contexto.</li>
<li>Biopsia renal si diagnóstico incierto y cambia manejo (ver apartado 13).</li>
</ul>
<div class="callout"><span class="tag">NOTA</span> En pacientes hemato-oncológicos: pensar siempre en nefrotoxicidad por quimioterapia (cisplatino, ifosfamida, metotrexato a altas dosis), nefropatía por cadenas ligeras (mieloma - "cast nephropathy"), y microangiopatía trombótica asociada a fármacos (gemcitabina, inhibidores de VEGF, TPH).</div>
`;

const T1C = `
<p class="comment">// IRA post-renal — obstrucción del tracto urinario</p>
<h3>Claves</h3>
<ul>
<li>Requiere obstrucción bilateral (o unilateral sobre riñón único funcionante) para producir IRA.</li>
<li>Causas: hiperplasia/cáncer de próstata, litiasis bilateral, coágulos, fibrosis retroperitoneal, masas pélvicas/adenopatías (frecuente en hemato-oncología: linfoma retroperitoneal, carcinomatosis).</li>
<li>Clínica: anuria brusca alternando con poliuria (obstrucción intermitente), dolor lumbar, globo vesical.</li>
</ul>
<h3>Diagnóstico</h3>
<ul>
<li><strong>Ecografía renal</strong> de elección: dilatación pielocalicial (puede tardar en aparecer si obstrucción muy reciente o retroperitoneal englobando el uréter).</li>
<li>Sondaje vesical diagnóstico-terapéutico si sospecha de retención urinaria baja.</li>
<li>TC sin contraste si se sospecha litiasis o causa retroperitoneal.</li>
</ul>
<h3>Manejo</h3>
<ul>
<li>Desobstrucción: sondaje vesical, nefrostomía percutánea o catéter doble J según nivel de la obstrucción.</li>
<li>Vigilar <strong>diuresis post-obstructiva</strong>: puede generar poliuria masiva por natriuresis/diuresis osmótica y pérdida de capacidad de concentración → riesgo de depleción de volumen y trastornos electrolíticos (reponer con cuidado, no siempre "mL a mL").</li>
</ul>
`;

const T2 = `
<p class="comment">// ERC — definición: alteraciones de estructura o función renal presentes &gt; 3 meses, con implicaciones para la salud</p>
<h3>Definición y clasificación KDIGO</h3>
<p>Se clasifica por <strong>FG (categorías G)</strong> y <strong>albuminuria (categorías A)</strong> — el pronóstico depende de ambas ("heatmap" KDIGO).</p>
<div class="table-wrap"><table class="itable" data-table-id="t2-1">
<caption>Estadios de FG (categorías G)</caption>
<thead><tr><th>Estadio</th><th>FGe (mL/min/1.73m²)</th><th>Descripción</th></tr></thead>
<tbody>
<tr><td>G1</td><td>≥ 90</td><td>Normal o alto (con daño renal para ser ERC)</td></tr>
<tr><td>G2</td><td>60-89</td><td>Levemente disminuido</td></tr>
<tr><td>G3a</td><td>45-59</td><td>Leve-moderado</td></tr>
<tr><td>G3b</td><td>30-44</td><td>Moderado-grave</td></tr>
<tr><td>G4</td><td>15-29</td><td>Grave</td></tr>
<tr><td>G5</td><td>&lt; 15 (o diálisis)</td><td>Fallo renal</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="table-wrap"><table class="itable" data-table-id="t2-2">
<caption>Categorías de albuminuria</caption>
<thead><tr><th>Categoría</th><th>ACR (mg/g)</th><th>Descripción</th></tr></thead>
<tbody>
<tr><td>A1</td><td>&lt; 30</td><td>Normal a levemente aumentada</td></tr>
<tr><td>A2</td><td>30-300</td><td>Moderadamente aumentada (antes "microalbuminuria")</td></tr>
<tr><td>A3</td><td>&gt; 300</td><td>Muy aumentada / rango nefrótico si &gt;2200</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Complicaciones secundarias a ERC (a cribar activamente)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t2-3">
<caption>Complicaciones y manejo básico</caption>
<thead><tr><th>Complicación</th><th>Fisiopatología / hallazgo</th><th>Manejo inicial</th></tr></thead>
<tbody>
<tr><td>Anemia</td><td>Déficit de EPO ± ferropenia funcional</td><td>Hierro (objetivo ferritina &gt;100-200 y IST&gt;20%), AEE (eritropoyetina) si Hb&lt;10 tras corregir hierro</td></tr>
<tr><td>Enfermedad óseo-mineral (CKD-MBD)</td><td>↓Vit D activa, ↓Ca, ↑P, hiperparatiroidismo secundario</td><td>Restricción de fósforo, quelantes de P, calcitriol/análogos, calcimiméticos si HPT2º severo</td></tr>
<tr><td>Acidosis metabólica</td><td>↓excreción ácida y de amonio</td><td>Bicarbonato oral si HCO3⁻ &lt; 22 mEq/L (retrasa progresión)</td></tr>
<tr><td>Hiperpotasemia</td><td>↓excreción distal de K</td><td>Dieta, diuréticos, resinas/quelantes de K si preciso, ajustar IECA/ARA-II/ahorradores de K</td></tr>
<tr><td>HTA / sobrecarga de volumen</td><td>Retención de Na y agua, activación SRAA</td><td>Restricción de sal, diuréticos, IECA/ARA-II (nefroprotección)</td></tr>
<tr><td>Malnutrición</td><td>Anorexia urémica, acidosis, inflamación</td><td>Valoración nutricional, ajuste de proteínas según estadio</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Manejo nutricional</h3>
<div class="table-wrap"><table class="itable" data-table-id="t2-4">
<caption>Recomendaciones nutricionales orientativas por situación</caption>
<thead><tr><th>Nutriente</th><th>ERC sin diálisis (G3-G5)</th><th>En hemodiálisis</th><th>En diálisis peritoneal</th></tr></thead>
<tbody>
<tr><td>Proteínas</td><td>0.55-0.6 g/kg/día (0.6-0.8 si diabetes), evitando desnutrición</td><td>1.0-1.2 g/kg/día (pérdidas durante la sesión)</td><td>1.2-1.3 g/kg/día (pérdidas peritoneales de proteínas)</td></tr>
<tr><td>Energía</td><td>~30-35 kcal/kg/día</td><td>~30-35 kcal/kg/día</td><td>Contar las calorías absorbidas del propio líquido de diálisis (glucosa)</td></tr>
<tr><td>Sodio</td><td>&lt;2 g/día (~5 g de sal)</td><td>Restricción para control de peso interdiálisis</td><td>Algo más flexible según diuresis residual</td></tr>
<tr><td>Potasio / fósforo</td><td>Restringir si hiperK/hiperP</td><td>Restricción activa habitual + quelantes de fósforo</td><td>Restricción algo menos estricta (diálisis continua aclara mejor)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">OJO</span> La restricción proteica excesiva o mal supervisada es una causa evitable de malnutrición calórico-proteica en la ERC — debe ajustarse siempre con apoyo de nutrición/dietética y reevaluarse si hay pérdida de peso, hipoalbuminemia o sarcopenia.</div>
<h3>Enfoque terapéutico general (retrasar progresión)</h3>
<ul>
<li><strong>Control de TA:</strong> objetivo individualizado (~120-130/80 mmHg según KDIGO 2021), IECA/ARA-II como primera línea si albuminuria (no combinar ambos).</li>
<li><strong>iSGLT2</strong> (dapagliflozina/empagliflozina): nefroprotección independiente de diabetes, indicados si FGe ≥ 20-25 y albuminuria significativa.</li>
<li><strong>Antagonistas no esteroideos del receptor mineralocorticoide</strong> (finerenona) en ERC diabética con albuminuria.</li>
<li>Control glucémico y lipídico, evitar nefrotóxicos (AINEs, contraste sin premedicación/hidratación), ajustar fármacos a función renal.</li>
<li>Vacunación (VHB, neumococo, gripe) y planificación precoz de TRS (terapia renal sustitutiva) si progresión hacia G4-G5.</li>
</ul>
`;

const T3A = `
<p class="comment">// gasometría venosa — acidosis metabólica</p>
<h3>Aproximación sistemática</h3>
<ol>
<li>pH: &lt;7.35 → acidemia.</li>
<li>HCO3⁻: &lt;22 mEq/L confirma componente metabólico.</li>
<li>Calcular <strong>anion gap</strong>: AG = Na⁺ − (Cl⁻ + HCO3⁻). Normal ≈ 8-12 (corregir por albúmina: AG corregido = AG + 2.5 x (4 − albúmina g/dL)).</li>
<li>Comprobar compensación respiratoria esperada (fórmula de Winters): pCO2 esperada = 1.5 x HCO3⁻ + 8 ± 2.</li>
<li>Si AG elevado: calcular <strong>delta gap / delta ratio</strong> = (AG−12) / (24−HCO3⁻) para detectar trastorno mixto sobreañadido.</li>
</ol>
<div class="table-wrap"><table class="itable" data-table-id="t3a-1">
<caption>Causas de acidosis metabólica</caption>
<thead><tr><th>Con AG elevado ("MUDPILES")</th><th>Con AG normal (hiperclorémica)</th></tr></thead>
<tbody>
<tr><td>Metanol</td><td>Diarrea / pérdidas digestivas de HCO3⁻</td></tr>
<tr><td>Uremia (ERC avanzada)</td><td>Acidosis tubular renal (ATR tipo 1, 2, 4)</td></tr>
<tr><td>DKA (cetoacidosis diabética/alcohólica)</td><td>Ureterosigmoidostomía</td></tr>
<tr><td>Propilenglicol / Paraldehído</td><td>Fármacos: acetazolamida, IECA/espironolactona (tipo 4)</td></tr>
<tr><td>Isoniazida / hierro</td><td>Sueroterapia masiva con SSF (acidosis dilucional)</td></tr>
<tr><td>Láctico (shock, sepsis, isquemia, metformina)</td><td></td></tr>
<tr><td>Etilenglicol / Salicilatos</td><td></td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> Vigilar acidosis láctica tipo B en neoplasias hematológicas (linfomas de alta proliferación, leucemias) — efecto Warburg / infiltración hepática masiva; también acidosis por síndrome de lisis tumoral (ver apartado 9).</div>
<h3>Tratamiento</h3>
<ul>
<li>Tratar la causa subyacente siempre en primer lugar.</li>
<li>Bicarbonato IV: considerar si pH &lt; 7.1-7.2 o acidosis grave con inestabilidad hemodinámica (controvertido en láctica pura); en ATR y ERC crónica, suplementación oral crónica.</li>
<li>Si acidosis grave refractaria + sobrecarga de volumen / IRA → hemodiálisis urgente.</li>
</ul>
`;

const T3B = `
<p class="comment">// gasometría venosa — alcalosis metabólica</p>
<h3>Claves fisiopatológicas</h3>
<p>Requiere un evento generador (pérdida de H⁺ o ganancia de HCO3⁻) <strong>y</strong> un mecanismo de mantenimiento (habitualmente depleción de volumen/Cl⁻ o hiperaldosteronismo) que impide al riñón excretar el exceso de bicarbonato.</p>
<h3>Clasificación por Cl⁻ urinario</h3>
<div class="table-wrap"><table class="itable" data-table-id="t3b-1">
<caption>Alcalosis metabólica según Cl urinario</caption>
<thead><tr><th>Tipo</th><th>Cl⁻ urinario</th><th>Causas</th></tr></thead>
<tbody>
<tr><td>Cloro-sensible (responde a SSF)</td><td>&lt; 20 mEq/L</td><td>Vómitos, aspiración nasogástrica, diuréticos (fase previa), post-hipercapnia</td></tr>
<tr><td>Cloro-resistente (no responde a SSF)</td><td>&gt; 20 mEq/L</td><td>Hiperaldosteronismo 1º, Sd. de Cushing, Sd. de Bartter/Gitelman, estenosis de arteria renal, uso activo de diuréticos</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Tratamiento</h3>
<ul>
<li>Cloro-sensible: reposición de volumen con SSF + ClK si hipopotasemia asociada; tratar causa (antieméticos, IBP si vómitos).</li>
<li>Cloro-resistente: tratar causa endocrina; espironolactona/eplerenona si hiperaldosteronismo.</li>
<li>Casos graves con inestabilidad (pH &gt;7.6): acetazolamida (aumenta excreción de HCO3⁻) o, si IRC/sobrecarga, diálisis con baño bajo en bicarbonato.</li>
</ul>
`;

const T3C = `
<p class="comment">// gasometría venosa — trastornos mixtos</p>
<h3>Cómo sospechar un trastorno mixto</h3>
<ul>
<li>La compensación respiratoria/metabólica no cumple la fórmula esperada (Winters, etc.) → hay un segundo trastorno primario.</li>
<li><strong>Delta gap (AG−12) vs Delta HCO3 (24−HCO3):</strong>
  <ul>
    <li>Delta ratio &lt; 1: acidosis mixta AG elevado + AG normal (hiperclorémica).</li>
    <li>Delta ratio 1-2: acidosis metabólica pura con AG elevado.</li>
    <li>Delta ratio &gt; 2: acidosis AG elevado + alcalosis metabólica sobreañadida (o acidosis respiratoria crónica).</li>
  </ul>
</li>
<li>pH normal con HCO3⁻ y pCO2 claramente alterados en direcciones opuestas → sospechar trastorno mixto que se "compensa" mutuamente (p. ej. acidosis metabólica + alcalosis respiratoria).</li>
</ul>
<h3>Ejemplo práctico</h3>
<div class="callout">Paciente con vómitos de repetición (alcalosis metabólica hipoclorémica) + sepsis con acidosis láctica: pH puede aparecer "casi normal" pese a trastornos graves subyacentes — siempre calcular AG y delta gap, no fiarse solo del pH.</div>
<h3>Pasos resumen</h3>
<ol>
<li>pH primario (acidemia/alcalemia).</li>
<li>Componente metabólico (HCO3) vs respiratorio (pCO2): ¿van en la misma dirección que el pH?</li>
<li>Calcular AG (y corregir por albúmina).</li>
<li>Calcular compensación esperada y delta gap.</li>
<li>Concluir: trastorno simple vs mixto, y cuántos procesos coexisten.</li>
</ol>
`;

const T4A = `
<p class="comment">// trastornos del potasio</p>
<div class="diagram-wrap">
<div class="diagram-caption">// diagrama interactivo — manejo de agua/electrolitos por segmento de la nefrona (aplica a todo el apartado 4)</div>
<svg viewBox="0 0 700 440" xmlns="http://www.w3.org/2000/svg">

  <!-- glomérulo / cápsula de Bowman -->
  <g class="hit" data-title="Glomérulo y cápsula de Bowman" data-desc="Filtración del plasma a través de la membrana glomerular (barrera de tamaño y carga). Se filtran agua, electrolitos, glucosa, urea, creatinina... en condiciones normales no se filtran proteínas ni células." onclick="highlightPart(this)">
    <circle cx="55" cy="58" r="42" fill="none" stroke="#c9a876" stroke-width="4" opacity="0.9"/>
    <path d="M32,40 Q40,25 50,38 Q58,50 46,45 Q60,42 55,58 Q68,62 54,70 Q64,80 48,76 Q56,90 40,80 Q30,88 32,70 Q18,72 28,58 Q16,50 32,40 Z" fill="#d63384" opacity="0.75"/>
    <circle cx="55" cy="58" r="42" fill="var(--text)" opacity="0"/>
  </g>

  <!-- tubo base (visual, no interactivo) -->
  <path d="M97,58
           C120,15 145,15 165,58
           C185,101 210,101 230,58
           C250,15 275,15 295,58
           C310,85 320,95 330,100
           L330,125
           C330,190 336,250 336,300
           C336,322 366,322 366,300
           C366,250 372,190 372,125
           L372,100
           C382,95 392,85 407,58
           C427,15 452,15 472,58
           C492,101 517,101 537,58
           C552,25 562,15 572,15
           L572,40
           C582,60 592,70 600,90
           L600,380"
        fill="none" stroke="#c9a876" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- ramas del conducto colector (visual) -->
  <path d="M600,180 C625,170 645,155 668,140" fill="none" stroke="#c9a876" stroke-width="14" stroke-linecap="round"/>
  <path d="M600,260 C625,250 645,235 668,220" fill="none" stroke="#c9a876" stroke-width="14" stroke-linecap="round"/>
  <path d="M600,340 C625,330 645,315 668,300" fill="none" stroke="#c9a876" stroke-width="14" stroke-linecap="round"/>
  <circle cx="668" cy="140" r="6" fill="var(--yellow)"/>
  <circle cx="668" cy="220" r="6" fill="var(--yellow)"/>
  <circle cx="668" cy="300" r="6" fill="var(--yellow)"/>
  <circle cx="600" cy="392" r="6" fill="var(--yellow)"/>

  <!-- zonas clicables (mismo trazado, coloreadas, encima del tubo base) -->
  <path class="hit" data-title="Túbulo contorneado proximal (PCT)" data-desc="Reabsorbe ~65% del Na⁺ y agua filtrados (de forma isotónica), casi toda la glucosa y aminoácidos, bicarbonato (vía anhidrasa carbónica) y fosfato. Diana de la acetazolamida (inhibe la anhidrasa carbónica)."
    d="M97,58 C120,15 145,15 165,58 C185,101 210,101 230,58 C250,15 275,15 295,58 C310,85 320,95 330,100"
    fill="none" stroke="var(--accent2)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" opacity="0.06" onclick="highlightPart(this)"/>

  <path class="hit" data-title="Asa de Henle — rama descendente" data-desc="Permeable al agua, prácticamente impermeable a solutos: el agua sale hacia el intersticio medular hipertónico, concentrando el filtrado. Forma parte del mecanismo de contracorriente que genera el gradiente medular."
    d="M330,100 L330,125 C330,190 336,250 336,300"
    fill="none" stroke="var(--yellow)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" opacity="0.06" onclick="highlightPart(this)"/>

  <path class="hit" data-title="Asa de Henle — rama ascendente gruesa" data-desc="Impermeable al agua ('segmento diluyente'). El cotransportador Na-K-2Cl (NKCC2) reabsorbe ~25% del Na⁺ filtrado. Diana de los diuréticos de asa (furosemida). Genera el gradiente eléctrico que impulsa la reabsorción paracelular de Mg²⁺ y Ca²⁺."
    d="M336,300 C336,322 366,322 366,300 C372,250 372,190 372,125 L372,100"
    fill="none" stroke="var(--accent)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" opacity="0.08" onclick="highlightPart(this)"/>

  <path class="hit" data-title="Túbulo contorneado distal (DCT)" data-desc="El cotransportador Na-Cl (NCC) reabsorbe ~5% del Na⁺ filtrado. Sitio de reabsorción activa de Ca²⁺ regulada por PTH. Diana de las tiazidas — por eso pueden producir hipercalcemia leve e hiponatremia."
    d="M372,100 C382,95 392,85 407,58 C427,15 452,15 472,58 C492,101 517,101 537,58 C552,25 562,15 572,15"
    fill="none" stroke="var(--accent3)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" opacity="0.06" onclick="highlightPart(this)"/>

  <g class="hit" data-title="Túbulo / conducto colector" data-desc="Células principales: reabsorben Na⁺ (canal ENaC, regulado por aldosterona) y secretan K⁺; reabsorben agua vía acuaporinas (reguladas por ADH). Células intercaladas: regulan el equilibrio ácido-base secretando H⁺ o HCO3⁻. Diana de los diuréticos ahorradores de K⁺ (amilorida, espironolactona) y de la desmopresina/ADH." onclick="highlightPart(this)">
    <path d="M572,15 L572,40 C582,60 592,70 600,90 L600,380" fill="none" stroke="var(--text)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" opacity="0.05"/>
    <path d="M600,180 C625,170 645,155 668,140" fill="none" stroke="var(--text)" stroke-width="18" stroke-linecap="round" opacity="0.05"/>
    <path d="M600,260 C625,250 645,235 668,220" fill="none" stroke="var(--text)" stroke-width="18" stroke-linecap="round" opacity="0.05"/>
    <path d="M600,340 C625,330 645,315 668,300" fill="none" stroke="var(--text)" stroke-width="18" stroke-linecap="round" opacity="0.05"/>
  </g>

  <text x="195" y="130" fill="var(--accent2)" font-size="13" text-anchor="middle" font-family="var(--mono)">PCT</text>
  <text x="300" y="210" fill="var(--yellow)" font-size="11" text-anchor="middle" font-family="var(--mono)" transform="rotate(-90 300 210)">descendente</text>
  <text x="403" y="210" fill="var(--accent)" font-size="11" text-anchor="middle" font-family="var(--mono)" transform="rotate(-90 403 210)">ascendente gruesa</text>
  <text x="472" y="130" fill="var(--accent3)" font-size="13" text-anchor="middle" font-family="var(--mono)">DCT</text>
  <text x="530" y="250" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)" transform="rotate(-90 530 250)">colector</text>
  <text x="55" y="115" fill="var(--text-dim)" font-size="11" text-anchor="middle" font-family="var(--mono)">glomérulo</text>
  <text x="634" y="415" fill="var(--text-dim)" font-size="10" text-anchor="middle" font-family="var(--mono)">→ pelvis renal / orina</text>
</svg>
<div class="diagram-info">Selecciona un segmento de la nefrona para ver qué reabsorbe/secreta y qué fármacos actúan ahí.</div>
</div>
<h3>Hiperpotasemia</h3>
<div class="table-wrap"><table class="itable" data-table-id="t4a-1">
<caption>Causas de hiperpotasemia</caption>
<thead><tr><th>Mecanismo</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>↓ Excreción renal</td><td>ERC/IRA, hipoaldosteronismo, IECA/ARA-II/espironolactona, AINEs, tacrolimus/ciclosporina</td></tr>
<tr><td>Salida de células (redistribución)</td><td>Acidosis, déficit de insulina, lisis tumoral, rabdomiolisis, hemólisis, β-bloqueantes, digoxina</td></tr>
<tr><td>Aumento de aporte</td><td>Iatrogenia IV, transfusiones masivas, suplementos orales excesivos</td></tr>
<tr><td>Pseudohiperpotasemia</td><td>Hemólisis de la muestra, trombocitosis/leucocitosis extremas (frecuente en hemato)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h4>Manejo de la hiperpotasemia (K &gt; 6 o cambios en ECG)</h4>
<ol>
<li><strong>ECG siempre primero:</strong> T picudas → QRS ancho → onda sinusoidal → FV/asistolia.</li>
<li><strong>Estabilizar membrana:</strong> gluconato cálcico 10% IV (no baja el K, protege el miocardio; inicio 1-3 min, dura 30-60 min).</li>
<li><strong>Meter K a la célula:</strong> insulina rápida IV + glucosa (evitar hipoglucemia), salbutamol nebulizado, bicarbonato si acidosis asociada.</li>
<li><strong>Eliminar K del cuerpo:</strong> diuréticos de asa (si diuresis conservada), resinas de intercambio (patiromer, ciclosilicato de Na-Zr — más rápidos y mejor tolerados que resinas de calcio clásicas), <strong>hemodiálisis urgente</strong> si K &gt;6.5-7 refractario, IRA oligúrica o inestabilidad.</li>
<li>Retirar fármacos hiperpotasemiantes y tratar causa de base.</li>
</ol>
<h3>Hipopotasemia</h3>
<div class="table-wrap"><table class="itable" data-table-id="t4a-2">
<caption>Causas de hipopotasemia</caption>
<thead><tr><th>Mecanismo</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>Pérdidas digestivas</td><td>Vómitos, diarrea, laxantes</td></tr>
<tr><td>Pérdidas renales</td><td>Diuréticos, hiperaldosteronismo, ATR tipo 1/2, Sd. Bartter/Gitelman, anfotericina B</td></tr>
<tr><td>Redistribución</td><td>Alcalosis, insulina, β2-agonistas, parálisis periódica hipopotasémica</td></tr>
<tr><td>Aporte insuficiente</td><td>Malnutrición</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p><strong>Manejo:</strong> reposición oral si leve-moderada (&gt;2.5 y asintomática); IV si &lt;2.5, sintomática o arritmia (máx. habitual 10-20 mEq/h en vía central con monitorización). Reponer siempre Mg2+ asociado si está bajo (la hipopotasemia refractaria a reposición de K suele deberse a hipomagnesemia no corregida).</p>
`;

const T4B = `
<p class="comment">// hiponatremia</p>
<h3>Aproximación diagnóstica</h3>
<ol>
<li><strong>Confirmar hiponatremia real:</strong> descartar pseudohiponatremia (hiperlipidemia, hiperproteinemia — frecuente en mieloma múltiple por paraproteína) e hiponatremia hiperosmolar (hiperglucemia: corregir Na +1.6 mEq/L por cada 100mg/dL de glucosa &gt;100).</li>
<li><strong>Osmolaridad plasmática:</strong> si baja → hiponatremia hipotónica verdadera.</li>
<li><strong>Estado de volemia clínico</strong> (turgencia, PVY, edemas) + <strong>Na urinario</strong> + <strong>osmolaridad urinaria</strong>.</li>
</ol>
<div class="table-wrap"><table class="itable" data-table-id="t4b-1">
<caption>Clasificación de hiponatremia hipotónica</caption>
<thead><tr><th>Volemia</th><th>Na urinario</th><th>Causas</th></tr></thead>
<tbody>
<tr><td>Hipovolémica</td><td>&lt;20: pérdidas extrarrenales (vómitos, diarrea, 3er espacio)</td><td>Diarrea, vómitos, quemados, pancreatitis</td></tr>
<tr><td>Hipovolémica</td><td>&gt;20: pérdidas renales</td><td>Diuréticos tiazídicos, insuficiencia suprarrenal, nefropatía pierde-sal, sd. pierde-sal cerebral</td></tr>
<tr><td>Euvolémica</td><td>&gt;20 (habitualmente)</td><td>SIADH, hipotiroidismo, déficit de glucocorticoides, potomanía, "tea and toast"</td></tr>
<tr><td>Hipervolémica</td><td>&lt;20</td><td>ICC, cirrosis, sd. nefrótico</td></tr>
<tr><td>Hipervolémica</td><td>&gt;20</td><td>ERC / IRA avanzada</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> SIADH frecuente por: quimioterapia (vincristina, ciclofosfamida, cisplatino), infecciones pulmonares/SNC, dolor, náuseas, y ectópico (raro) por algunos tumores.</div>
<h3>Tratamiento — regla de oro: CORRECCIÓN LENTA</h3>
<ul>
<li><strong>Límite de corrección:</strong> máximo 8 (algunos recomiendan ≤6-8 en pacientes de alto riesgo) mEq/L en 24h y &lt;18 mEq/L en 48h — riesgo de <strong>síndrome de desmielinización osmótica</strong> si se corrige demasiado rápido.</li>
<li>Hiponatremia aguda sintomática grave (convulsiones, coma): salino hipertónico 3% en bolos de 100-150 mL, repetir según respuesta y clínica, monitorizar Na cada 2-4h.</li>
<li>Hipovolémica: SSF 0.9%.</li>
<li>SIADH: restricción hídrica (&lt;800-1000 mL/día), considerar tolvaptán/urea en casos seleccionados (vigilar sobrecorrección — es potente).</li>
<li>Hipervolémica: restricción de sal y agua, diuréticos, tratar causa de base.</li>
<li>Si sobrecorrección accidental: revertir con suero glucosado 5% ± desmopresina ("re-lower" o "relowering").</li>
</ul>
`;

const T4C = `
<p class="comment">// magnesio</p>
<h3>Hipomagnesemia</h3>
<ul>
<li><strong>Causas:</strong> alcoholismo, malnutrición, diarrea crónica, IBP prolongados, diuréticos, aminoglucósidos, anfotericina B, cisplatino, inhibidores de calcineurina, síndromes de Gitelman/Bartter.</li>
<li><strong>Clínica:</strong> temblor, tetania, convulsiones, arritmias (torsade de pointes), y <strong>causa clásica de hipopotasemia e hipocalcemia refractarias</strong> (inhibe la liberación de PTH y produce resistencia tubular a K).</li>
<li><strong>Tratamiento:</strong> sulfato de magnesio IV si sintomática o &lt;1.0-1.2 mg/dL; oral en casos leves. Vigilar función renal (riesgo de acumulación/toxicidad).</li>
</ul>
<h3>Hipermagnesemia</h3>
<ul>
<li>Rara; casi siempre en contexto de <strong>ERC/IRA</strong> + aporte exógeno (laxantes/antiácidos con Mg, sulfato de magnesio en preeclampsia).</li>
<li><strong>Clínica dosis-dependiente:</strong> hiporreflexia → debilidad/parálisis → bradiarritmias, hipotensión → parada respiratoria/cardiaca.</li>
<li><strong>Tratamiento:</strong> gluconato cálcico IV (antagoniza efectos cardiacos), suspender aporte, diuréticos de asa + SSF si función renal conservada, hemodiálisis si IRA/ERC grave o clínica severa.</li>
</ul>
`;

const T4D = `
<p class="comment">// calcio</p>
<h3>Regla general</h3>
<p>Corregir siempre el calcio total por albúmina: <span class="inline-code">Ca corregido = Ca medido + 0.8 x (4 − albúmina g/dL)</span>. Si hay dudas o disproteinemia (mieloma), medir <strong>calcio iónico</strong> directamente.</p>
<h3>Hipercalcemia</h3>
<div class="table-wrap"><table class="itable" data-table-id="t4d-1">
<caption>Causas de hipercalcemia</caption>
<thead><tr><th>Mecanismo</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>Aumento de reabsorción ósea</td><td><strong>Mieloma múltiple</strong> (lesiones líticas + RANKL), metástasis óseas, hiperparatiroidismo 1º</td></tr>
<tr><td>PTHrp (humoral)</td><td>Carcinoma epidermoide, hipernefroma, otros tumores sólidos</td></tr>
<tr><td>Producción de calcitriol</td><td>Linfomas, sarcoidosis y otras enfermedades granulomatosas</td></tr>
<tr><td>Otras</td><td>Inmovilización prolongada, intoxicación por vitamina D, tiazidas, hipertiroidismo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h4>Manejo de la hipercalcemia grave (&gt;14 mg/dL o sintomática)</h4>
<ol>
<li><strong>Hidratación IV agresiva con SSF</strong> (primera medida siempre, corrige la deshidratación inducida por la propia hipercalcemia).</li>
<li>Calcitonina SC/IM: acción rápida (horas) pero efecto corto por taquifilaxia — puente hasta que actúen los bifosfonatos.</li>
<li>Bifosfonatos IV (zoledronato, pamidronato): efecto en 2-4 días, de elección salvo IRA grave (ajustar dosis/evitar si FG muy bajo).</li>
<li>Denosumab: alternativa si contraindicación a bifosfonatos (p. ej. IRC grave) — muy útil en mieloma.</li>
<li>Corticoides: útiles si mecanismo mediado por calcitriol (linfoma, granulomatosis, intoxicación vit D).</li>
<li>Hemodiálisis con baño bajo en calcio si hipercalcemia muy grave, sintomática, refractaria o con IRA/ERC que impide hidratación agresiva.</li>
</ol>
<h3>Hipocalcemia</h3>
<ul>
<li><strong>Causas:</strong> hipoparatiroidismo (post-quirúrgico), déficit de vitamina D, ERC (↓calcitriol, ↑fósforo), hipomagnesemia, pancreatitis aguda, síndrome de lisis tumoral (por hiperfosfatemia), quelación tras transfusiones masivas (citrato).</li>
<li><strong>Clínica:</strong> parestesias periorales/acras, Chvostek, Trousseau, tetania, prolongación QT, convulsiones.</li>
<li><strong>Tratamiento:</strong> gluconato cálcico IV si sintomática/grave; calcio + vitamina D oral en casos leves-crónicos; corregir magnesio siempre.</li>
</ul>
`;

const T5 = `
<p class="comment">// sueroterapia — actualización</p>
<h3>Fisiología de la regulación del volumen (base de toda decisión de sueroterapia)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t5-0">
<caption>Los tres sistemas que regulan el volumen circulante</caption>
<thead><tr><th>Sistema</th><th>Estímulo</th><th>Efecto</th></tr></thead>
<tbody>
<tr><td>Eje renina-angiotensina-aldosterona (RAA)</td><td>↓Perfusión renal, ↓Na⁺ distal, ↑tono simpático</td><td>Vasoconstricción (angiotensina II) + retención de Na⁺ y agua (aldosterona) → expande volumen</td></tr>
<tr><td>ADH (vasopresina)</td><td>↑Osmolaridad plasmática (receptores hipotalámicos, sensibles a cambios &gt;1-2%); también estímulos no osmóticos: hipovolemia, náuseas, dolor, estrés</td><td>Reabsorción de agua libre en el túbulo colector (acuaporinas) → retiene agua, diluye el plasma</td></tr>
<tr><td>Péptidos natriuréticos (ANP/BNP)</td><td>Distensión de la pared auricular/ventricular por sobrecarga de volumen</td><td>Natriuresis, diuresis y vasodilatación — se oponen al eje RAA</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Toda decisión de sueroterapia es, en el fondo, una forma de interferir con estos tres sistemas: reponer volumen frena el eje RAA y la ADH; sobrecargar de volumen activa los péptidos natriuréticos.</p>
<h3>Cristaloides: ¿balanceados o salino 0.9%?</h3>
<div class="table-wrap"><table class="itable" data-table-id="t5-1">
<caption>Comparativa de cristaloides habituales</caption>
<thead><tr><th>Suero</th><th>Na (mEq/L)</th><th>Cl (mEq/L)</th><th>Otros</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>SSF 0.9%</td><td>154</td><td>154</td><td>-</td><td>No balanceado; grandes volúmenes → acidosis metabólica hiperclorémica</td></tr>
<tr><td>Ringer Lactato</td><td>130</td><td>109</td><td>Lactato 28, K 4, Ca 3</td><td>Balanceado; evitar/precaución si hiperK grave o insuficiencia hepática severa</td></tr>
<tr><td>Plasma-Lyte</td><td>140</td><td>98</td><td>Acetato, gluconato, K, Mg</td><td>Balanceado, sin calcio (compatible con hemoderivados)</td></tr>
<tr><td>Glucosado 5%</td><td>0</td><td>0</td><td>Glucosa 50g/L</td><td>Agua libre; para reponer déficit de agua (p.ej. hipernatremia)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">EVIDENCIA</span> Estudios como SMART/BaSICS sugieren que los cristaloides balanceados podrían reducir eventos renales adversos frente a SSF en grandes volúmenes, aunque el beneficio absoluto es modesto y depende del contexto clínico. En hiperK grave, seguir usando SSF (RL tiene algo de K).</div>
<h3>Conceptos clave</h3>
<ul>
<li><strong>Reanimación con volumen guiada por objetivos dinámicos</strong> (variación de presión de pulso, elevación pasiva de piernas) mejor que "a ciegas".</li>
<li>Evitar sobrecarga de volumen iatrogénica: es un factor de mal pronóstico independiente en IRA/sepsis.</li>
<li>Coloides (albúmina) reservados a situaciones específicas (cirrosis/PBE, grandes pérdidas); hidroxietilalmidones contraindicados en sepsis/IRA por nefrotoxicidad.</li>
<li>Sueroterapia de mantenimiento: calcular necesidades basales (regla 4-2-1 mL/kg/h) y ajustar por pérdidas concurrentes, no usar hipotónicos de rutina en pacientes con riesgo de hiponatremia (postoperatorio, SNC).</li>
</ul>
`;

const T6 = `
<p class="comment">// accesos vasculares temporales para TRS</p>
<h3>Tipos de catéter</h3>
<ul>
<li><strong>Catéter venoso central de doble luz no tunelizado</strong> (Shaldon/Mahurkar): uso agudo, &lt;1-3 semanas.</li>
<li><strong>Catéter tunelizado con manguito (Permcath):</strong> uso más prolongado (semanas-meses), menor riesgo de infección, se usa cuando se prevé necesidad de HD &gt;2-3 semanas sin FAV disponible.</li>
</ul>
<h3>Localización de elección</h3>
<div class="table-wrap"><table class="itable" data-table-id="t6-1">
<caption>Localizaciones para catéter de diálisis</caption>
<thead><tr><th>Vena</th><th>Preferencia</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>Yugular interna derecha</td><td>1ª elección</td><td>Trayecto más recto, menor riesgo de estenosis y malposición</td></tr>
<tr><td>Yugular interna izquierda</td><td>2ª elección</td><td>Trayecto más largo/curvo</td></tr>
<tr><td>Femoral</td><td>Uso agudo/cama, corta duración</td><td>Mayor riesgo infeccioso, evitar &gt;1 semana si es posible; útil en urgencia sin necesidad de ecografía</td></tr>
<tr><td>Subclavia</td><td>Evitar</td><td>Alto riesgo de estenosis venosa central → compromete futuros accesos (FAV) del mismo brazo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Técnica</h3>
<ul>
<li>Colocación guiada por <strong>ecografía</strong> siempre que sea posible (reduce complicaciones mecánicas).</li>
<li>Técnica de Seldinger; confirmar posición con radiografía de tórax si acceso yugular/subclavio (punta en aurícula derecha alta / cava superior).</li>
<li>Sellado de las luces con heparina o citrato al finalizar cada sesión.</li>
</ul>
<h3>Complicaciones</h3>
<ul>
<li><strong>Mecánicas:</strong> neumotórax/hemotórax (subclavia/yugular), punción arterial, arritmias, malposición.</li>
<li><strong>Infecciosas:</strong> bacteriemia relacionada con catéter — sospechar si fiebre en HD; hemocultivos periféricos + del catéter; valorar sellado antibiótico vs retirada según gravedad y germen.</li>
<li><strong>Trombosis / disfunción del catéter:</strong> bajo flujo, recirculación — valorar fibrinolíticos locales (alteplasa) antes de recambio.</li>
<li><strong>Estenosis venosa central</strong> a largo plazo (más frecuente en subclavia).</li>
</ul>
`;

const T7 = `
<p class="comment">// aféresis terapéutica en enfermedades renales</p>
<h3>Concepto</h3>
<p>Técnica de depuración extracorpórea que separa y elimina selectivamente un componente plasmático patógeno (plasmaféresis/recambio plasmático) o, en el caso de la aféresis de células, elementos formes (leucaféresis).</p>
<h3>Indicaciones nefrológicas principales</h3>
<div class="table-wrap"><table class="itable" data-table-id="t7-1">
<caption>Indicaciones de plasmaféresis en patología renal</caption>
<thead><tr><th>Patología</th><th>Objetivo</th></tr></thead>
<tbody>
<tr><td>Enfermedad anti-membrana basal glomerular (Goodpasture)</td><td>Eliminar anticuerpos anti-MBG circulantes</td></tr>
<tr><td>Vasculitis ANCA con IRA grave / hemorragia alveolar</td><td>Eliminar ANCA e inmunocomplejos, adyuvante a inmunosupresión</td></tr>
<tr><td>Síndrome hemolítico urémico atípico (SHUa) — uso decreciente desde eculizumab</td><td>Reponer factores del complemento / eliminar autoanticuerpos anti-factor H</td></tr>
<tr><td>Púrpura trombótica trombocitopénica (PTT)</td><td>Reponer ADAMTS13 y eliminar anticuerpos anti-ADAMTS13 — tratamiento de elección urgente</td></tr>
<tr><td>Mieloma múltiple con cast nephropathy / hiperviscosidad</td><td>Reducir carga de cadenas ligeras libres circulantes (uso controvertido, ver estudios recientes)</td></tr>
<tr><td>Rechazo humoral de trasplante renal</td><td>Eliminar anticuerpos donante-específicos (DSA)</td></tr>
<tr><td>Recidiva de GEFS primaria post-trasplante</td><td>Eliminar factor de permeabilidad circulante</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> En PTT la plasmaféresis es una urgencia vital — no retrasar por pruebas pendientes de ADAMTS13 ante sospecha clínica (anemia hemolítica microangiopática + trombopenia sin otra causa).</div>
<h3>Aspectos técnicos</h3>
<ul>
<li>Requiere acceso vascular de alto flujo (catéter tipo Shaldon habitualmente).</li>
<li>Reposición con plasma fresco congelado (imprescindible en PTT, aporta ADAMTS13) o albúmina (en la mayoría del resto de indicaciones).</li>
<li>Complicaciones: hipocalcemia por citrato, reacciones alérgicas al PFC, hipotensión, riesgo infeccioso/hemorrágico por el acceso.</li>
</ul>
`;

const T8 = `
<p class="comment">// indicaciones de hemodiálisis aguda ("AEIOU")</p>
<div class="table-wrap"><table class="itable" data-table-id="t8-1">
<caption>Mnemotecnia AEIOU</caption>
<thead><tr><th>Letra</th><th>Indicación</th><th>Detalle</th></tr></thead>
<tbody>
<tr><td>A</td><td>Acidosis</td><td>Metabólica grave (pH &lt;7.1-7.15) refractaria a tratamiento médico</td></tr>
<tr><td>E</td><td>Electrolitos</td><td>Hiperpotasemia grave o refractaria (&gt;6.5, o con cambios ECG que no responden a medidas médicas)</td></tr>
<tr><td>I</td><td>Intoxicaciones</td><td>Tóxicos dializables: litio, metanol, etilenglicol, salicilatos, ácido valproico, algunos alcoholes</td></tr>
<tr><td>O</td><td>Sobrecarga de volumen (Overload)</td><td>Edema agudo de pulmón refractario a diuréticos en IRA/ERC</td></tr>
<tr><td>U</td><td>Uremia</td><td>Síntomas urémicos: encefalopatía, pericarditis urémica, diátesis hemorrágica urémica</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Complicaciones de la hemodiálisis aguda</h3>
<div class="table-wrap"><table class="itable" data-table-id="t8-2">
<caption>Complicaciones intradiálisis</caption>
<thead><tr><th>Complicación</th><th>Manejo</th></tr></thead>
<tbody>
<tr><td>Hipotensión intradiálisis (la más frecuente)</td><td>Trendelenburg, SSF en bolo, reducir tasa de ultrafiltración</td></tr>
<tr><td>Calambres musculares</td><td>Reducir UF, SSF hipertónico si preciso</td></tr>
<tr><td>Síndrome de desequilibrio dialítico</td><td>Cefalea, náuseas, confusión, convulsiones por edema cerebral osmótico — prevenir con sesiones iniciales cortas/lentas en IRA/uremia grave</td></tr>
<tr><td>Arritmias</td><td>Frecuentes por cambios rápidos de K/Ca — monitorización, ajustar baño de diálisis</td></tr>
<tr><td>Reacciones al dializador (tipo A/B)</td><td>Anafilaxia (tipo A, óxido de etileno) vs dolor torácico/lumbar leve (tipo B) — parar/cambiar dializador según gravedad</td></tr>
<tr><td>Embolismo aéreo</td><td>Clampar líneas, Trendelenburg en decúbito lateral izquierdo, O2 100%</td></tr>
<tr><td>Sangrado por heparinización</td><td>Ajustar/anticoagulación regional con citrato si alto riesgo hemorrágico</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const T9 = `
<p class="comment">// síndrome de lisis tumoral (SLT) — clave en hematología</p>
<h3>Fisiopatología</h3>
<p>Liberación masiva y brusca de contenido intracelular tras lisis rápida de células tumorales (espontánea o, más frecuentemente, tras iniciar quimioterapia) → hiperK, hiperfosfatemia, hiperuricemia e hipocalcemia secundaria (por precipitación de fosfato cálcico) → puede desencadenar <strong>IRA</strong> por depósito de cristales de ácido úrico y fosfato cálcico en túbulos.</p>
<h3>Factores de riesgo</h3>
<ul>
<li>Neoplasias de alta carga tumoral y proliferación rápida: <strong>linfoma de Burkitt, LLA, LMA con leucocitosis alta</strong>, otros linfomas agresivos voluminosos.</li>
<li>ERC previa, deshidratación, ácido úrico/LDH elevados pre-tratamiento, esplenomegalia, afectación renal previa.</li>
</ul>
<h3>Criterios diagnósticos (Cairo-Bishop)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t9-1">
<caption>SLT de laboratorio (≥2 alteraciones en 24h pre/post tto, ±3 días)</caption>
<thead><tr><th>Analito</th><th>Criterio</th></tr></thead>
<tbody>
<tr><td>Ácido úrico</td><td>≥ 8 mg/dL o aumento ≥25% sobre basal</td></tr>
<tr><td>Potasio</td><td>≥ 6 mEq/L o aumento ≥25%</td></tr>
<tr><td>Fósforo</td><td>≥ 4.5 mg/dL (adultos) o aumento ≥25%</td></tr>
<tr><td>Calcio</td><td>≤ 7 mg/dL o descenso ≥25%</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p><strong>SLT clínico</strong> = SLT de laboratorio + al menos uno de: IRA, arritmia/muerte súbita, convulsiones.</p>
<h3>Prevención y tratamiento</h3>
<ol>
<li><strong>Estratificación de riesgo</strong> antes de iniciar quimioterapia (bajo/intermedio/alto según tipo tumoral, carga y función renal).</li>
<li><strong>Hidratación IV agresiva</strong> (SSF, sin potasio) iniciada 24-48h antes de la quimioterapia, mantener diuresis alta.</li>
<li><strong>Hipouricemiantes:</strong>
  <ul>
    <li>Alopurinol (riesgo bajo-intermedio): inhibe xantina oxidasa, previene nueva formación de ácido úrico (no reduce el ya formado).</li>
    <li><strong>Rasburicasa</strong> (riesgo alto): urato-oxidasa recombinante, degrada ácido úrico existente a alantoína — muy eficaz y rápida; <strong>contraindicada en déficit de G6PD</strong> (riesgo de hemólisis grave) — cribar antes si procede.</li>
  </ul>
</li>
<li>Evitar alcalinización urinaria de rutina (riesgo de precipitación de fosfato cálcico, ya no recomendada salvo protocolos específicos).</li>
<li>Monitorización estrecha de electrolitos (cada 4-6-8h en fase aguda de alto riesgo) y ECG continuo.</li>
<li><strong>Hemodiálisis</strong> si: hiperK grave refractaria, sobrecarga de volumen, IRA oligoanúrica, hiperfosfatemia sintomática grave, o ácido úrico muy elevado refractario — la HD (más que la diálisis peritoneal) es de elección por su eficacia para aclarar fósforo y ácido úrico.</li>
</ol>
`;

const T10Ai = `
<p class="comment">// hemodiálisis aguda — aspectos técnicos</p>
<h3>Principios físicos</h3>
<ul>
<li><strong>Difusión:</strong> movimiento de solutos a favor de gradiente de concentración a través de la membrana → elimina solutos pequeños (urea, creatinina, K, fosfato).</li>
<li><strong>Ultrafiltración (convección):</strong> movimiento de agua por gradiente de presión hidrostática → elimina volumen y, en menor medida, solutos de mayor peso molecular.</li>
</ul>
<h3>Prescripción típica de HD aguda</h3>
<ul>
<li>Sesiones cortas y de baja eficiencia al inicio si uremia grave (riesgo de sd. desequilibrio), aumentando progresivamente duración/eficiencia.</li>
<li>Anticoagulación: heparina no fraccionada estándar; <strong>citrato regional</strong> si alto riesgo hemorrágico (p. ej. paciente hemato-oncológico con trombopenia/coagulopatía) — requiere monitorización de calcio iónico.</li>
<li>Ajuste del baño de diálisis (K, Ca, bicarbonato) según electrolitos del paciente.</li>
</ul>
<h3>Modalidades continuas (UCI)</h3>
<p>En pacientes hemodinámicamente inestables se prefieren las <strong>técnicas continuas de reemplazo renal (TCRR/CRRT)</strong>: CVVH, CVVHD, CVVHDF — depuración lenta y continua, mejor tolerancia hemodinámica que la HD intermitente, permiten balance de fluidos más preciso.</p>
`;

const T10Aii = `
<p class="comment">// hemodiálisis crónica</p>
<h3>Accesos vasculares definitivos</h3>
<div class="table-wrap"><table class="itable" data-table-id="t10aii-1">
<caption>Comparativa de accesos para HD crónica</caption>
<thead><tr><th>Acceso</th><th>Maduración</th><th>Ventajas</th><th>Desventajas</th></tr></thead>
<tbody>
<tr><td>Fístula arteriovenosa (FAV) autóloga</td><td>6-8 semanas</td><td>Menor infección/trombosis, mejor supervivencia a largo plazo — de elección</td><td>Requiere planificación precoz, puede no madurar</td></tr>
<tr><td>Injerto arteriovenoso (prótesis, PTFE)</td><td>2-4 semanas</td><td>Utilizable antes que la FAV, útil si vasos malos</td><td>Mayor riesgo de trombosis/infección que FAV</td></tr>
<tr><td>Catéter tunelizado</td><td>Inmediato</td><td>Uso inmediato</td><td>Mayor riesgo infeccioso, peor supervivencia, evitar como acceso definitivo si es posible</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Complicaciones crónicas de la FAV</h3>
<ul>
<li>Trombosis, estenosis (vigilar con exploración física/eco-doppler periódico), aneurismas, síndrome de robo vascular (isquemia distal), infección (menos frecuente que en catéteres/injertos).</li>
</ul>
<h3>Pauta habitual y objetivos</h3>
<ul>
<li>3 sesiones/semana de 3.5-4h habitualmente, individualizar según función renal residual y peso seco.</li>
<li>Objetivo Kt/V ≥ 1.2 por sesión (adecuación de diálisis).</li>
<li>Control de peso seco, TA, anemia, metabolismo óseo-mineral y nutrición de forma periódica.</li>
</ul>
`;

const T10B = `
<p class="comment">// diálisis peritoneal continua ambulatoria (CAPD/DP)</p>
<h3>Fundamento</h3>
<p>Utiliza el peritoneo del propio paciente como membrana semipermeable. El líquido de diálisis (con glucosa u otros agentes osmóticos como icodextrina) se infunde en la cavidad peritoneal a través de un catéter permanente (Tenckhoff), permanece un tiempo de permanencia y se drena, repitiendo el ciclo (manual en CAPD o automatizado por máquina cicladora nocturna en DPA).</p>
<h3>Ventajas frente a HD</h3>
<ul>
<li>Mayor autonomía del paciente (domiciliaria), preserva mejor la función renal residual, no requiere acceso vascular ni anticoagulación, mejor tolerancia hemodinámica (técnica continua/lenta) — preferible en cardiópatas frágiles.</li>
<li>Suele preferirse como primera opción en pacientes jóvenes, con buena capacidad de autocuidado, o como "puente" antes de trasplante.</li>
</ul>
<h3>Contraindicaciones</h3>
<ul>
<li>Absolutas: pérdida de la función/superficie peritoneal (adherencias extensas), enfermedad inflamatoria intestinal activa, hernias no reparadas no corregibles, incapacidad del paciente/cuidador para la técnica sin soporte social.</li>
<li>Relativas: cirugía abdominal reciente, obesidad mórbida, colostomías/ostomías.</li>
</ul>
<h3>Complicación principal: peritonitis</h3>
<ul>
<li>Clínica: dolor abdominal, líquido turbio, fiebre. Diagnóstico: &gt;100 leucocitos/µL en líquido peritoneal con &gt;50% PMN.</li>
<li>Tratamiento empírico intraperitoneal cubriendo Gram+ y Gram- (p. ej. vancomicina/cefazolina + ceftazidima o aminoglucósido) hasta cultivo.</li>
<li>Retirar catéter si peritonitis fúngica, refractaria (&gt;5 días sin mejoría) o recurrente/recidivante.</li>
</ul>
`;

const T11 = `
<p class="comment">// fármacos en insuficiencia renal</p>
<h3>Principios generales de ajuste de dosis</h3>
<ul>
<li>Estimar el FG (CKD-EPI o Cockcroft-Gault según el fármaco/ficha técnica) antes de prescribir.</li>
<li>Fármacos de eliminación renal predominante requieren ajuste de dosis o intervalo; los de eliminación hepática habitualmente no (salvo metabolitos activos renales).</li>
<li>En diálisis: considerar si el fármaco es dializable (bajo peso molecular, baja unión a proteínas, bajo volumen de distribución) → puede requerir dosis suplementaria post-HD.</li>
<li>Usar siempre dosis de carga estándar (no reducir la primera dosis) y ajustar las de mantenimiento.</li>
</ul>
<h3>Patrones de nefrotoxicidad farmacológica (por mecanismo)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t11-0">
<caption>Clasificación mecanística de la nefrotoxicidad</caption>
<thead><tr><th>Patrón</th><th>Mecanismo</th><th>Ejemplos típicos</th></tr></thead>
<tbody>
<tr><td>Funcional / hemodinámico</td><td>Altera la autorregulación del FG sin lesión estructural inicial</td><td>AINEs (vasoconstricción aferente), IECA/ARA-II (vasodilatación eferente), inhibidores de calcineurina</td></tr>
<tr><td>Tóxico tubular directo (NTA)</td><td>Daño directo a las células del túbulo proximal</td><td>Aminoglucósidos, cisplatino, contraste yodado, anfotericina B, tenofovir</td></tr>
<tr><td>Nefritis intersticial inmunoalérgica</td><td>Reacción de hipersensibilidad en el intersticio</td><td>Betalactámicos, AINEs, IBP, alopurinol, quinolonas</td></tr>
<tr><td>Obstrucción intratubular por cristales</td><td>Precipitación de cristales/fármaco dentro del túbulo</td><td>Aciclovir IV rápido, metotrexato a altas dosis, sulfamidas, ácido úrico (lisis tumoral)</td></tr>
<tr><td>Microangiopatía trombótica</td><td>Daño endotelial con formación de microtrombos</td><td>Gemcitabina, inhibidores de VEGF, inhibidores de calcineurina</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Fármacos nefrotóxicos a vigilar especialmente</h3>
<div class="table-wrap"><table class="itable" data-table-id="t11-1">
<caption>Nefrotoxicidad por grupo farmacológico</caption>
<thead><tr><th>Fármaco</th><th>Mecanismo</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>AINEs</td><td>Vasoconstricción arteriola aferente</td><td>Evitar en ERC, IRA, deshidratación</td></tr>
<tr><td>IECA / ARA-II</td><td>Vasodilatación arteriola eferente</td><td>Elevación de creatinina &lt;30% esperable/aceptable al iniciar; suspender si mayor</td></tr>
<tr><td>Aminoglucósidos</td><td>Toxicidad tubular directa</td><td>Monitorizar niveles, dosis única diaria si posible</td></tr>
<tr><td>Contraste yodado</td><td>Vasoconstricción + toxicidad tubular directa</td><td>Hidratación periprocedimiento, minimizar volumen de contraste en riesgo</td></tr>
<tr><td>Cisplatino</td><td>Toxicidad tubular proximal directa</td><td>Hidratación agresiva pre/post, magnesio frecuentemente bajo</td></tr>
<tr><td>Inhibidores de calcineurina (tacrolimus/ciclosporina)</td><td>Vasoconstricción, toxicidad crónica</td><td>Monitorizar niveles</td></tr>
<tr><td>Vancomicina</td><td>Toxicidad tubular, sinergia con otros nefrotóxicos</td><td>Monitorizar niveles/AUC</td></tr>
<tr><td>Metotrexato altas dosis</td><td>Precipitación tubular en orina ácida</td><td>Hidratación + alcalinización urinaria + rescate con folínico, niveles seriados</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Ejemplos de ajuste (orientativo — comprobar siempre ficha técnica)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t11-2">
<caption>Ajuste orientativo por FGe (mL/min)</caption>
<thead><tr><th>Fármaco</th><th>FGe 30-60</th><th>FGe &lt;30</th><th>HD</th></tr></thead>
<tbody>
<tr><td>Enoxaparina</td><td>Sin ajuste habitual</td><td>Reducir dosis / preferir HNF</td><td>Evitar, usar HNF</td></tr>
<tr><td>Aciclovir</td><td>Ajustar intervalo</td><td>Ajustar dosis e intervalo</td><td>Dosis post-HD</td></tr>
<tr><td>Piperacilina-tazobactam</td><td>Ajustar dosis</td><td>Ajustar dosis</td><td>Dosis post-HD</td></tr>
<tr><td>Metformina</td><td>Precaución / reducir</td><td>Contraindicada</td><td>Contraindicada</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const T12 = `
<p class="comment">// trasplante renal</p>
<h3>Trasplante reciente (primeras semanas)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t12-1">
<caption>Complicaciones precoces post-trasplante</caption>
<thead><tr><th>Complicación</th><th>Claves</th></tr></thead>
<tbody>
<tr><td>Necrosis tubular aguda del injerto</td><td>Causa más frecuente de función retardada del injerto (DGF), sobre todo en donante en asistolia/criterios expandidos</td></tr>
<tr><td>Rechazo hiperagudo</td><td>Minutos-horas, mediado por anticuerpos preformados — hoy raro por cross-match previo</td></tr>
<tr><td>Rechazo agudo celular</td><td>Días-semanas, infiltrado linfocitario en biopsia — tratamiento con corticoides a altas dosis ± timoglobulina</td></tr>
<tr><td>Rechazo agudo humoral (mediado por Ac)</td><td>DSA positivos, C4d+ en biopsia — plasmaféresis + IGIV ± rituximab</td></tr>
<tr><td>Complicaciones quirúrgicas</td><td>Trombosis arterial/venosa del injerto, fuga o estenosis ureteral, linfocele, hematoma</td></tr>
<tr><td>Toxicidad por inhibidores de calcineurina</td><td>Vasoconstricción de arteriola aferente, puede simular rechazo — niveles y biopsia si duda</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Inmunosupresión de mantenimiento (esquema habitual)</h3>
<ul>
<li><strong>Inducción:</strong> basiliximab (bajo riesgo inmunológico) o timoglobulina (alto riesgo).</li>
<li><strong>Mantenimiento típico:</strong> inhibidor de calcineurina (tacrolimus) + antimetabolito (micofenolato) + corticoides, con reducción progresiva de estos últimos.</li>
</ul>
<h3>Trasplante de larga evolución — complicaciones frecuentes</h3>
<ul>
<li><strong>Nefropatía crónica del injerto:</strong> combinación de rechazo crónico, toxicidad crónica por ICN, y factores no inmunológicos (HTA, recurrencia de enfermedad de base).</li>
<li><strong>Infecciones oportunistas:</strong> CMV (profilaxis con valganciclovir en donante+/receptor-), poliomavirus BK (nefropatía por virus BK — reducir inmunosupresión si viremia alta), Pneumocystis jirovecii (profilaxis con cotrimoxazol).</li>
<li><strong>Neoplasias:</strong> mayor incidencia de tumores cutáneos, enfermedad linfoproliferativa post-trasplante (PTLD, asociada a VEB) — cribado activo.</li>
<li><strong>Riesgo cardiovascular aumentado</strong> (primera causa de muerte con injerto funcionante): HTA, dislipemia, diabetes post-trasplante (por corticoides/tacrolimus).</li>
<li><strong>Recurrencia de la enfermedad renal primaria</strong> (GEFS, nefropatía IgA, SHUa) en el injerto.</li>
</ul>
<div class="callout warn"><span class="tag">HEMATO</span> Pacientes con trasplante renal previo que desarrollan neoplasia hematológica (o viceversa, candidatos a TPH con injerto renal) requieren manejo multidisciplinar estrecho por interacción fármacos-inmunosupresión y ajuste renal de quimioterapia.</div>
`;

const T13 = `
<p class="comment">// radiología intervencionista en nefrología — biopsia renal percutánea</p>
<h3>Indicaciones</h3>
<ul>
<li>IRA de causa no aclarada (tras descartar pre-renal y post-renal) con sospecha de causa intrínseca que cambiaría el manejo.</li>
<li>Síndrome nefrótico del adulto (salvo diabetes de larga evolución con retinopatía concordante, donde puede evitarse).</li>
<li>Proteinuria/hematuria glomerular persistente de causa no filiada.</li>
<li>Deterioro inexplicado de función en trasplante renal (protocolo o indicación clínica), sospecha de rechazo.</li>
<li>Sospecha de glomerulonefritis rápidamente progresiva / vasculitis (urgente, condiciona tratamiento inmunosupresor intensivo).</li>
</ul>
<h3>Contraindicaciones</h3>
<div class="table-wrap"><table class="itable" data-table-id="t13-1">
<caption>Contraindicaciones de biopsia renal</caption>
<thead><tr><th>Absolutas</th><th>Relativas</th></tr></thead>
<tbody>
<tr><td>Diátesis hemorrágica no corregida</td><td>HTA mal controlada</td></tr>
<tr><td>Riñón único (salvo trasplante — es la norma)</td><td>ERC avanzada / riñones pequeños atróficos</td></tr>
<tr><td>Infección renal o perirrenal activa</td><td>Obesidad mórbida</td></tr>
<tr><td>Paciente no colaborador/inestable</td><td>Quiste renal grande en trayecto, malformaciones vasculares</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Preparación</h3>
<ul>
<li>Coagulación normal (o corregida): plaquetas &gt;100.000, INR/TTPA normales; suspender antiagregantes/anticoagulantes según protocolo (p.ej. clopidogrel 5-7 días, AAS habitualmente se puede mantener).</li>
<li>Control de TA (&lt;140/90 mmHg idealmente antes del procedimiento).</li>
<li>Ecografía previa para valorar anatomía y descartar contraindicaciones.</li>
</ul>
<h3>Técnica</h3>
<p>Guiada por ecografía (de elección) en tiempo real, aguja de biopsia automática (tipo "true-cut"), habitualmente polo inferior del riñón izquierdo o derecho, decúbito prono (o lateral en trasplante, abordaje anterior). Se obtienen 2-3 cilindros para microscopía óptica, inmunofluorescencia y microscopía electrónica.</p>
<h3>Complicaciones</h3>
<ul>
<li><strong>Hematoma perirrenal</strong> (la más frecuente, mayoría asintomáticos, autolimitados).</li>
<li>Hematuria macroscópica transitoria.</li>
<li>Fístula arteriovenosa intrarrenal (habitualmente asintomática, cierre espontáneo).</li>
<li>Sangrado significativo con necesidad de transfusión o embolización angiográfica (poco frecuente, &lt;1-2%).</li>
<li>Nefrectomía por sangrado incontrolable (excepcional).</li>
</ul>
<h3>Cuidados post-biopsia</h3>
<ul>
<li>Reposo en cama y monitorización de TA/diuresis/hematuria durante 6-24h según protocolo del centro.</li>
<li>Control de hemoglobina a las horas del procedimiento si hay sospecha de sangrado.</li>
</ul>
`;

/* =========================================================
   CONTENIDO — NEFROLOGÍA (objetivos añadidos, marcados HEM)
   ========================================================= */

const T14 = `
<p class="comment">// regulación del metabolismo mineral</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación de Hematología — complementa la ERC-MBD (apartado 2) y los trastornos del calcio (apartado 4d).</div>
<h3>Los tres reguladores clave</h3>
<div class="table-wrap"><table class="itable" data-table-id="t14-1">
<caption>Eje PTH — Calcitriol — FGF23</caption>
<thead><tr><th>Hormona</th><th>Estímulo principal</th><th>Efectos</th></tr></thead>
<tbody>
<tr><td>PTH (paratiroides)</td><td>↓Ca²⁺, ↑P, ↓calcitriol</td><td>↑Resorción ósea, ↑reabsorción renal de Ca²⁺, ↓reabsorción renal de P (fosfaturia), ↑síntesis de calcitriol (activa la 1α-hidroxilasa renal)</td></tr>
<tr><td>Calcitriol (vitamina D activa)</td><td>↑PTH, ↓P, ↓Ca²⁺</td><td>↑Absorción intestinal de Ca²⁺ y P, ↑resorción ósea, retroalimentación negativa sobre la PTH</td></tr>
<tr><td>FGF23 (hueso — osteocitos)</td><td>↑P, ↑calcitriol</td><td>↓Reabsorción renal de P (fosfaturia potente), ↓síntesis de calcitriol (inhibe la 1α-hidroxilasa) — necesita klotho como correceptor renal</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Correlación clínica</h3>
<div class="table-wrap"><table class="itable" data-table-id="t14-2">
<caption>Hiperparatiroidismo: 1º vs 2º vs 3º</caption>
<thead><tr><th>Tipo</th><th>PTH</th><th>Ca²⁺</th><th>Contexto</th></tr></thead>
<tbody>
<tr><td>1º (adenoma/hiperplasia paratiroidea)</td><td>↑↑</td><td>↑</td><td>Autónomo, sin estímulo fisiológico previo</td></tr>
<tr><td>2º</td><td>↑↑</td><td>↓/normal</td><td>Compensador — típico de ERC (↓calcitriol, ↑P retenido) o déficit de vitamina D</td></tr>
<tr><td>3º</td><td>↑↑↑</td><td>↑</td><td>Autonomización de unas paratiroides hiperestimuladas de forma crónica (ERC avanzada de larga evolución)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Para la traducción clínica de estos ejes en la ERC (déficit de calcitriol, hiperfosfatemia, HPT2º, tratamiento con quelantes/calcimiméticos), repasa <span class="inline-code">Nefrología → 2. Enfermedad Renal Crónica</span>. Para hipercalcemia por PTHrp o calcitriol ectópico en el paciente oncohematológico, repasa <span class="inline-code">Nefrología → 4d</span>.</p>
`;

const T15 = `
<p class="comment">// hipertensión arterial — enfoque nefrológico</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación. Para clasificación general, urgencia/emergencia hipertensiva y manejo agudo, ver <span class="inline-code">Cardiología → 10. Hipertensión arterial</span> — aquí nos centramos en el ángulo específicamente renal.</div>
<h3>HTA como causa y como consecuencia de enfermedad renal</h3>
<ul>
<li><strong>HTA que daña el riñón:</strong> nefroangiosclerosis — arterioloesclerosis hialina de las arteriolas renales por HTA crónica mal controlada, causa frecuente de ERC, especialmente en combinación con diabetes.</li>
<li><strong>Enfermedad renal que causa HTA:</strong> prácticamente toda nefropatía parenquimatosa (glomerulopatías, ERC de cualquier causa) cursa con HTA secundaria por retención de sodio/agua y activación del eje renina-angiotensina-aldosterona.</li>
</ul>
<h3>HTA renovascular (estenosis de arteria renal)</h3>
<ul>
<li><strong>Causas:</strong> aterosclerótica (más frecuente, varones mayores con factores de riesgo CV, afecta ostium/tercio proximal) vs displasia fibromuscular (mujeres jóvenes, típicamente en dos tercios distales, patrón "en collar de cuentas").</li>
<li><strong>Sospecha clínica:</strong> HTA de inicio antes de los 30 o después de los 55 años, HTA resistente, soplo abdominal, deterioro agudo de función renal tras iniciar IECA/ARA-II (sugiere estenosis bilateral o sobre riñón único), episodios recurrentes de edema agudo de pulmón "flash" sin causa cardiaca clara, asimetría renal en pruebas de imagen.</li>
<li><strong>Diagnóstico:</strong> eco-doppler renal (cribado), angio-TC o angio-RM, arteriografía si se plantea intervención.</li>
<li><strong>Tratamiento:</strong> médico (IECA/ARA-II con vigilancia estrecha de función renal si unilateral, evitar si bilateral/riñón único) — revascularización (angioplastia ± stent) reservada a casos seleccionados (fracaso del tratamiento médico, deterioro progresivo de función renal, edema agudo de pulmón recurrente).</li>
</ul>
<h3>HTA resistente</h3>
<p>TA no controlada pese a 3 fármacos a dosis plenas de clases distintas, incluyendo un diurético apropiado para la función renal del paciente (o control solo con ≥4 fármacos).</p>
<div class="table-wrap"><table class="itable" data-table-id="t15-1">
<caption>Causas a descartar en HTA resistente</caption>
<thead><tr><th>Categoría</th><th>Ejemplos</th></tr></thead>
<tbody>
<tr><td>Pseudorresistencia</td><td>Mal cumplimiento terapéutico, HTA de bata blanca, técnica de medida incorrecta</td></tr>
<tr><td>Causas secundarias</td><td>Estenosis de arteria renal, hiperaldosteronismo primario, apnea obstructiva del sueño, enfermedad renal parenquimatosa, feocromocitoma</td></tr>
<tr><td>Fármacos/tóxicos</td><td>AINEs, corticoides, anticonceptivos orales, regaliz, cocaína/simpaticomiméticos</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Nefroprotección</h3>
<p>Objetivo de TA individualizado (~120-130/80 mmHg según KDIGO 2021) — IECA/ARA-II como primera línea si hay albuminuria (efecto nefroprotector más allá del control tensional, por reducción de la presión intraglomerular). No combinar IECA + ARA-II (mayor riesgo de hiperK e IRA sin beneficio adicional demostrado).</p>
`;

const T16 = `
<p class="comment">// infecciones del tracto urinario (ITU)</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación.</div>
<h3>Clasificación</h3>
<ul>
<li><strong>Por localización:</strong> ITU baja (cistitis, uretritis) vs ITU alta (pielonefritis aguda).</li>
<li><strong>No complicada:</strong> mujer sana, no gestante, tracto urinario estructural y funcionalmente normal.</li>
<li><strong>Complicada:</strong> varón, embarazo, anomalías estructurales/funcionales del tracto urinario, sondaje vesical, litiasis, <strong>inmunosupresión o neutropenia</strong>, ERC — prácticamente todo paciente hemato-oncológico con ITU se considera complicada por definición.</li>
</ul>
<h3>Diagnóstico</h3>
<ul>
<li>Clínica: disuria, polaquiuria, urgencia (cistitis); fiebre, dolor en fosa renal, puñopercusión positiva, náuseas (pielonefritis).</li>
<li>Sedimento urinario: leucocituria, nitritos positivos (orienta a enterobacterias), hematuria ocasional.</li>
<li><strong>Urocultivo: obligatorio en toda ITU complicada</strong> (y por tanto, prácticamente siempre en el paciente hemato-oncológico) antes de iniciar antibioterapia empírica.</li>
</ul>
<h3>Tratamiento empírico orientativo</h3>
<div class="table-wrap"><table class="itable" data-table-id="t16-1">
<caption>Orientación empírica (ajustar siempre a antibiograma y protocolo local)</caption>
<thead><tr><th>Cuadro</th><th>Opciones habituales</th></tr></thead>
<tbody>
<tr><td>Cistitis no complicada</td><td>Fosfomicina trometamol dosis única, nitrofurantoína 5 días</td></tr>
<tr><td>Pielonefritis no complicada</td><td>Ciprofloxacino o cefalosporina de 3ª generación, 7-10 días</td></tr>
<tr><td>ITU complicada / paciente neutropénico</td><td>Cobertura empírica de amplio espectro con actividad antipseudomónica (p. ej. piperacilina-tazobactam o cefepime) hasta resultado de urocultivo, según protocolo de neutropenia febril del centro</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Bacteriuria asintomática</h3>
<p>Urocultivo positivo sin síntomas — <strong>no tratar</strong> en la mayoría de pacientes (incluida la mayoría de inmunosuprimidos y sondados crónicos). Excepciones que sí requieren tratamiento: gestación y antes de un procedimiento urológico invasivo con riesgo de sangrado de mucosa.</p>
<h3>Candiduria</h3>
<p>Casi siempre representa colonización, no infección. Manejo: retirar o cambiar la sonda vesical si la hay; tratar solo si sintomática, en neutropenia, en el paciente que va a someterse a manipulación urológica, o en el recién nacido de bajo peso.</p>
<div class="callout warn"><span class="tag">HEMATO</span> En neutropenia febril con sospecha de foco urinario: urocultivo (y hemocultivos) siempre antes de la primera dosis de antibiótico si es posible sin retrasar el tratamiento, y cobertura empírica de amplio espectro según protocolo de neutropenia febril del centro, no según las guías estándar de ITU comunitaria.</div>
`;

const T17 = `
<p class="comment">// farmacología de diuréticos y antihipertensivos</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación. El sitio de acción de cada diurético se corresponde con el diagrama interactivo de la nefrona del apartado 4a.</div>
<h3>Diuréticos por sitio de acción</h3>
<div class="table-wrap"><table class="itable" data-table-id="t17-1">
<caption>Clases de diuréticos</caption>
<thead><tr><th>Clase</th><th>Sitio / mecanismo</th><th>Ejemplos</th><th>Efectos adversos principales</th></tr></thead>
<tbody>
<tr><td>De asa</td><td>Rama ascendente gruesa — inhiben NKCC2</td><td>Furosemida, torasemida, bumetanida</td><td>Hipopotasemia, hipomagnesemia, <strong>hipocalcemia</strong> (a diferencia de las tiazidas), ototoxicidad a dosis altas/IV rápida, alcalosis metabólica</td></tr>
<tr><td>Tiazidas / tipo tiazida</td><td>Túbulo contorneado distal — inhiben NCC</td><td>Hidroclorotiazida, clortalidona, indapamida</td><td>Hipopotasemia, hiponatremia, <strong>hipercalcemia</strong> leve, hiperglucemia, hiperuricemia, dislipemia</td></tr>
<tr><td>Ahorradores de K — antagonistas de aldosterona</td><td>Túbulo/conducto colector — bloquean el receptor mineralocorticoide</td><td>Espironolactona, eplerenona</td><td>Hiperpotasemia, ginecomastia/mastodinia (espironolactona, menos con eplerenona)</td></tr>
<tr><td>Ahorradores de K — bloqueantes de ENaC</td><td>Túbulo/conducto colector — bloquean el canal ENaC</td><td>Amilorida, triamtereno</td><td>Hiperpotasemia</td></tr>
<tr><td>Inhibidores de la anhidrasa carbónica</td><td>Túbulo contorneado proximal</td><td>Acetazolamida</td><td>Acidosis metabólica hiperclorémica, orina alcalina (litiasis de fosfato cálcico)</td></tr>
<tr><td>Osmóticos</td><td>Actúan en todo el túbulo por gradiente osmótico</td><td>Manitol</td><td>Riesgo de IRA por NTA osmótica, expansión de volumen inicial (precaución en IC)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Antihipertensivos por clase</h3>
<div class="table-wrap"><table class="itable" data-table-id="t17-2">
<caption>Clases de antihipertensivos</caption>
<thead><tr><th>Clase</th><th>Ejemplos</th><th>Puntos clave</th></tr></thead>
<tbody>
<tr><td>IECA</td><td>Enalapril, ramipril, lisinopril</td><td>Nefroprotección si albuminuria, tos seca (bradicinina), angioedema, hiperK, contraindicado en embarazo y estenosis bilateral de arteria renal</td></tr>
<tr><td>ARA-II</td><td>Losartán, valsartán, irbesartán</td><td>Mismo perfil que IECA sin tos (no aumentan bradicinina); no combinar con IECA</td></tr>
<tr><td>Calcioantagonistas dihidropiridínicos</td><td>Amlodipino, nifedipino</td><td>Vasodilatación arterial, edemas maleolares, cefalea, sin efecto relevante en la conducción cardiaca</td></tr>
<tr><td>Calcioantagonistas no dihidropiridínicos</td><td>Verapamilo, diltiazem</td><td>Bradicardizantes, evitar combinar con betabloqueantes; útiles también en control de frecuencia en FA</td></tr>
<tr><td>Betabloqueantes</td><td>Bisoprolol, carvedilol, atenolol</td><td>Especialmente indicados si cardiopatía isquémica o insuficiencia cardiaca asociada; broncoespasmo, bradicardia, enmascaran hipoglucemia</td></tr>
<tr><td>Antagonistas de aldosterona</td><td>Espironolactona, eplerenona</td><td>Útiles en HTA resistente (sobre todo si hiperaldosteronismo); hiperK</td></tr>
<tr><td>Alfabloqueantes</td><td>Doxazosina</td><td>Hipotensión ortostática, útil si hiperplasia prostática benigna asociada</td></tr>
<tr><td>Vasodilatadores directos</td><td>Hidralazina</td><td>Taquicardia refleja, retención de líquidos, síndrome lupus-like con uso prolongado</td></tr>
<tr><td>Agentes de acción central</td><td>Alfametildopa, clonidina</td><td>Alfametildopa es de elección en HTA gestacional; clonidina con riesgo de HTA de rebote al retirarla bruscamente</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
`;

const T18A = `
<p class="comment">// manejo de drogas inmunosupresoras</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación. Complementa el manejo del trasplante renal (apartado 12).</div>
<div class="table-wrap"><table class="itable" data-table-id="t18a-1">
<caption>Principales familias de inmunosupresores</caption>
<thead><tr><th>Clase</th><th>Ejemplos</th><th>Mecanismo</th><th>Toxicidad principal</th></tr></thead>
<tbody>
<tr><td>Inhibidores de calcineurina</td><td>Tacrolimus, ciclosporina</td><td>Inhiben la calcineurina → ↓producción de IL-2 → ↓activación de linfocitos T</td><td>Nefrotoxicidad (vasoconstricción de la arteriola aferente), neurotoxicidad (temblor, cefalea, PRES), HTA, diabetes post-trasplante, hiperpotasemia, hipomagnesemia — requieren monitorización de niveles valle</td></tr>
<tr><td>Antimetabolitos</td><td>Micofenolato mofetilo/ácido micofenólico, azatioprina</td><td>Inhiben la proliferación de linfocitos (síntesis de purinas)</td><td><strong>Mielotoxicidad</strong> (relevancia directa en hematología), toxicidad gastrointestinal (micofenolato), teratogenicidad</td></tr>
<tr><td>Inhibidores de mTOR</td><td>Sirolimus, everolimus</td><td>Bloquean la vía mTOR → ↓proliferación celular</td><td>Proteinuria, retraso de la cicatrización de heridas, hiperlipidemia, neumonitis</td></tr>
<tr><td>Corticoides</td><td>Prednisona, metilprednisolona</td><td>Inmunosupresión amplia, antiinflamatorio</td><td>Diabetes, osteoporosis, HTA, infecciones, miopatía, cataratas</td></tr>
<tr><td>Terapias biológicas de inducción/rechazo</td><td>Basiliximab (anti-CD25), timoglobulina (anti-timocito), rituximab (anti-CD20)</td><td>Depleción o bloqueo selectivo de subpoblaciones linfocitarias</td><td>Reacciones infusionales, mayor riesgo infeccioso, citopenias (timoglobulina)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> Azatioprina, micofenolato, corticoides y rituximab son fármacos compartidos entre trasplante renal y práctica hematológica (autoinmunidad, LES, PTI, GN por depósito de complejos, etc.) — vigilar mielosupresión aditiva cuando coinciden con quimioterapia o con enfermedad hematológica de base.</div>
`;

const T18B = `
<p class="comment">// interacciones farmacológicas con inmunosupresores</p>
<div class="callout"><span class="hem-badge">HEM</span> Objetivo añadido desde el listado propio de la rotación.</div>
<h3>Inhibidores de calcineurina — sustratos de CYP3A4 y glicoproteína P</h3>
<div class="table-wrap"><table class="itable" data-table-id="t18b-1">
<caption>Interacciones con tacrolimus / ciclosporina</caption>
<thead><tr><th>Efecto</th><th>Fármacos implicados</th></tr></thead>
<tbody>
<tr><td>↑ Niveles (riesgo de toxicidad)</td><td>Azoles antifúngicos (fluconazol, voriconazol, posaconazol — <strong>muy frecuente en profilaxis antifúngica hemato-oncológica</strong>), macrólidos (claritromicina, eritromicina — no azitromicina), diltiazem/verapamilo, zumo de pomelo</td></tr>
<tr><td>↓ Niveles (riesgo de rechazo)</td><td>Rifampicina, fenitoína, carbamazepina, hierba de San Juan</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<h3>Otras interacciones relevantes</h3>
<div class="table-wrap"><table class="itable" data-table-id="t18b-2">
<caption>Combinaciones a vigilar</caption>
<thead><tr><th>Combinación</th><th>Riesgo</th></tr></thead>
<tbody>
<tr><td>Alopurinol + azatioprina</td><td>El alopurinol inhibe la xantina oxidasa → acumulación de metabolitos activos de azatioprina → <strong>mielosupresión grave</strong>. Si es imprescindible combinarlos, reducir la dosis de azatioprina ~75% y vigilar hemograma estrechamente; mejor evitar la combinación si hay alternativa</td></tr>
<tr><td>AINEs + inhibidores de calcineurina</td><td>Nefrotoxicidad aditiva</td></tr>
<tr><td>IECA/ARA-II + inhibidores de calcineurina o trimetoprim</td><td>Riesgo de hiperpotasemia aditiva</td></tr>
<tr><td>Trimetoprim-sulfametoxazol (profilaxis de Pneumocystis) + micofenolato/metotrexato</td><td>Mielotoxicidad aditiva</td></tr>
<tr><td>Trimetoprim-sulfametoxazol + inhibidores de calcineurina</td><td>El trimetoprim inhibe la secreción tubular de creatinina (elevación "pseudo" de creatinina, no siempre daño renal real) y puede aumentar el K⁺</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout warn"><span class="tag">HEMATO</span> Presta especial atención cuando un paciente recibe quimioterapia e inmunosupresores a la vez (p. ej. trasplante renal previo con neoplasia hematológica posterior) — revisa siempre la interacción con azoles antifúngicos, una de las combinaciones más frecuentes y peligrosas en la práctica real de planta.</div>
`;

const T19 = `
<p class="comment">// anemia renal — eritropoyetina (EPO) y hierro</p>
<h3>Fisiopatología</h3>
<p>La causa principal es el <strong>déficit relativo de eritropoyetina</strong> (el riñón enfermo no la produce en cantidad suficiente para el grado de anemia), agravado casi siempre por <strong>ferropenia</strong> — absoluta (depósitos vacíos) o funcional (depósitos normales pero hierro "secuestrado" y no disponible por la inflamación crónica, vía hepcidina) — y por las pérdidas hemáticas repetidas en hemodiálisis (circuito extracorpóreo, analíticas frecuentes).</p>
<div class="callout warn"><span class="tag">REGLA DE ORO</span> Nunca inicies EPO sin haber corregido/valorado antes el hierro. Dar EPO con depósitos de hierro vacíos no funciona (o funciona mal) y solo consigue "gastar" la poca reserva que queda.</div>

<h3>1. ¿Cuándo pedir estudio de hierro y cuándo tratar?</h3>
<div class="table-wrap"><table class="itable" data-table-id="t19-1">
<caption>Objetivos de hierro antes/durante tratamiento con EPO (KDIGO)</caption>
<thead><tr><th>Parámetro</th><th>Objetivo</th><th>Interpretación</th></tr></thead>
<tbody>
<tr><td>Ferritina</td><td>&gt;100 ng/mL (ERC no en diálisis) / &gt;200 ng/mL (hemodiálisis)</td><td>Refleja depósitos — pero es reactante de fase aguda, puede estar falsamente elevada con inflamación/infección</td></tr>
<tr><td>Índice de saturación de transferrina (IST)</td><td>&gt;20-30%</td><td>Refleja hierro disponible para la eritropoyesis "en tiempo real" — más útil que la ferritina sola</td></tr>
<tr><td>Ambos por debajo de objetivo</td><td>—</td><td>Iniciar/aumentar hierro antes o junto con la EPO</td></tr>
<tr><td>Ferritina alta + IST bajo</td><td>—</td><td>Sugiere ferropenia funcional (inflamación) — puede necesitar hierro IV pese a ferritina "normal-alta"</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>2. Hierro: oral vs. intravenoso, y qué tipo según la modalidad</h3>
<div class="table-wrap"><table class="itable" data-table-id="t19-2">
<caption>Elección de hierro según situación clínica</caption>
<thead><tr><th>Situación</th><th>Vía habitual</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>ERC no en diálisis (prediálisis)</td><td>Oral primero (sulfato/glucoheptonato ferroso, 1-3 meses de prueba); IV si no hay respuesta, intolerancia digestiva o ferropenia importante</td><td>Absorción intestinal todavía razonable; se prueba la vía más cómoda primero</td></tr>
<tr><td>Diálisis peritoneal (DP)</td><td>Oral o IV periódico en consulta (no hay acceso vascular constante)</td><td>Sin acceso venoso "gratis" disponible en cada sesión, a diferencia de la HD</td></tr>
<tr><td><strong>Hemodiálisis (HD)</strong></td><td><strong>IV, de elección</strong> (se administra directamente en las líneas del circuito de diálisis)</td><td>Absorción oral pobre (uremia, hepcidina elevada por inflamación crónica) + pérdidas hemáticas repetidas del propio circuito → el oral casi nunca es suficiente</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="table-wrap"><table class="itable" data-table-id="t19-3">
<caption>Preparados de hierro IV más usados</caption>
<thead><tr><th>Preparado</th><th>Dosis habitual</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>Hierro sacarosa</td><td>100 mg en cada sesión de HD (2-3 veces/semana) hasta completar la dosis total calculada</td><td>El más usado clásicamente en HD; buen perfil de seguridad, requiere dosis fraccionadas</td></tr>
<tr><td>Carboximaltosa férrica</td><td>500-1000 mg en dosis única o pocas dosis</td><td>Permite reponer un déficit grande en menos administraciones; útil en prediálisis/DP</td></tr>
<tr><td>Gluconato férrico sódico</td><td>125 mg por sesión de HD</td><td>Alternativa a la sacarosa, perfil similar</td></tr>
<tr><td>Derisomaltosa/dextrano de bajo peso molecular</td><td>Dosis altas en administración única (hasta 1000-1500 mg)</td><td>Reposición rápida de depósitos, menor riesgo de reacción que el dextrano de alto peso molecular (en desuso)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>3. ¿Cuándo iniciar EPO (agentes estimulantes de la eritropoyesis, AEE)?</h3>
<ul>
<li><strong>Hemoglobina &lt;10 g/dL</strong>, una vez descartadas y corregidas otras causas de anemia (déficit de hierro, B12/fólico, sangrado activo, hemólisis) y con depósitos de hierro adecuados.</li>
<li>Individualizar en 9-10 g/dL según síntomas, velocidad de descenso, comorbilidad cardiovascular y preferencias del paciente (KDIGO no da un único umbral rígido).</li>
<li><strong>No usar para normalizar la Hb:</strong> el objetivo terapéutico es <strong>10-11.5 g/dL</strong>, evitando superar ~13 g/dL — los ensayos (CHOIR, CREATE, TREAT) mostraron más eventos cardiovasculares e ictus al buscar Hb normal con dosis altas de AEE.</li>
</ul>

<h3>4. Tipos de EPO y cómo se ajusta la dosis</h3>
<div class="table-wrap"><table class="itable" data-table-id="t19-4">
<caption>Agentes estimulantes de la eritropoyesis</caption>
<thead><tr><th>Fármaco</th><th>Semivida / pauta</th><th>Dosis inicial orientativa</th><th>Vía preferente</th></tr></thead>
<tbody>
<tr><td>Epoetina alfa / beta</td><td>Corta — 2-3 veces/semana</td><td>50-100 UI/kg/semana repartidas en 2-3 dosis</td><td>SC en prediálisis/DP; IV habitual en HD (acceso ya disponible)</td></tr>
<tr><td>Darbepoetina alfa</td><td>Larga — semanal o quincenal</td><td>0.45 mcg/kg/semana (o 0.75 mcg/kg cada 2 semanas)</td><td>SC o IV</td></tr>
<tr><td>Metoxi-polietilenglicol-epoetina beta (CERA)</td><td>Muy larga — mensual</td><td>0.6 mcg/kg cada 2 semanas al inicio, luego mensual</td><td>SC o IV</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<div class="callout"><span class="tag">VÍA</span> Fuera de la sesión de HD (prediálisis, DP), la vía <strong>subcutánea</strong> es de elección: consigue el mismo efecto con dosis más bajas que la IV (mejor biodisponibilidad sostenida). En HD, la IV es simplemente más cómoda porque el acceso vascular ya está puesto — no es superior farmacológicamente.</div>

<h3>5. Ajuste de dosis: por peso al inicio, por Hb después</h3>
<ol>
<li><strong>Dosis de inicio:</strong> se calcula por <strong>peso corporal</strong> (ver tabla del punto 4 — UI/kg o mcg/kg).</li>
<li><strong>Reevaluar Hb cada 2-4 semanas</strong> al inicio o tras cualquier cambio de dosis (la respuesta a la EPO tarda en verse, no se debe ajustar más a menudo).</li>
<li><strong>Ajustar según la velocidad de cambio de la Hb</strong>, no solo el valor puntual:
  <ul>
    <li>Si la Hb <strong>sube &gt;1 g/dL en 2 semanas</strong> o se acerca al límite superior (11.5-12) → <strong>reducir la dosis ~25%</strong> (no suspender de golpe salvo Hb muy alta).</li>
    <li>Si la Hb <strong>no sube o sigue cayendo</strong> tras 2-4 semanas a dosis adecuada y con hierro corregido → <strong>aumentar la dosis ~25%</strong>.</li>
    <li>Evitar oscilaciones amplias ("montaña rusa" de Hb) — subidas rápidas se asocian a HTA, convulsiones y trombosis del acceso vascular.</li>
  </ul>
</li>
<li>Una vez en objetivo, mantener la dosis mínima eficaz y reevaluar periódicamente (mensual en HD, algo más espaciado en prediálisis/DP).</li>
</ol>

<h3>6. ¿Por qué un paciente no responde a la EPO? (hiporrespuesta)</h3>
<div class="table-wrap"><table class="itable" data-table-id="t19-5">
<caption>Causas de hiporrespuesta a los AEE</caption>
<thead><tr><th>Causa</th><th>Comentario</th></tr></thead>
<tbody>
<tr><td>Ferropenia (la más frecuente)</td><td>Revisar y corregir siempre en primer lugar</td></tr>
<tr><td>Inflamación / infección activa</td><td>La hepcidina bloquea la disponibilidad de hierro y la respuesta medular a la EPO</td></tr>
<tr><td>Hiperparatiroidismo severo</td><td>Fibrosis medular por HPT2º mal controlado</td></tr>
<tr><td>Pérdidas hemáticas ocultas</td><td>Sangrado digestivo, pérdidas repetidas del circuito de HD</td></tr>
<tr><td>Déficit de vitamina B12/fólico</td><td>Descartar siempre junto al hierro</td></tr>
<tr><td>Aplasia pura de células rojas (PRCA)</td><td>Rara — anticuerpos anti-EPO, sospechar si caída brusca de Hb con reticulocitos muy bajos pese a dosis altas</td></tr>
<tr><td>Neoplasia activa</td><td>Ver aviso HEMATO más abajo</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">HEMATO</span> Los AEE llevan una advertencia específica en el paciente oncológico: pueden estimular el crecimiento tumoral y aumentan el riesgo de eventos tromboembólicos. En pacientes con neoplasia activa (especialmente si el tratamiento tiene intención curativa), se recomienda usar la dosis mínima necesaria para evitar la transfusión, no para normalizar la Hb, e individualizar siempre con el equipo de hematología/oncología — en muchos casos se prefiere directamente la transfusión a iniciar EPO.</div>
<div class="callout warn"><span class="tag">CONTRAINDICACIONES</span> HTA no controlada (la EPO puede subir la TA), hipersensibilidad conocida, y precaución en antecedentes de eventos tromboembólicos o ictus reciente.</div>
`;

const T20 = `
<p class="comment">// trastornos del pH — algoritmos interactivos</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Cuatro herramientas guiadas: ve pulsando las respuestas según los datos de tu paciente hasta llegar al diagnóstico o tratamiento. Complementan (no sustituyen) el contenido ya visto en <span class="inline-code">3. Gasometría venosa</span>.</div>

<h3>1. Interpretación inicial del pH</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// paso 1 — ¿acidemia, normal o alcalemia?</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Cuál es el pH?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'acidemia')">pH &lt; 7.35 (acidemia)</button>
  <button class="flow-btn" onclick="faGoTo(this,'normal')">pH 7.35-7.45 (normal)</button>
  <button class="flow-btn" onclick="faGoTo(this,'alcalemia')">pH &gt; 7.45 (alcalemia)</button>
</div>
<div class="fa-step" data-step="acidemia" hidden>
  <p><strong>ACIDOSIS.</strong> ¿Qué predomina en la gasometría?</p>
  <button class="flow-btn" onclick="faGoTo(this,'ac-met')">↓ HCO3⁻</button>
  <button class="flow-btn" onclick="faGoTo(this,'ac-resp')">↑ pCO2</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="ac-met" hidden><div class="callout">Acidosis metabólica → sigue con la herramienta 2 para filiar la causa.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="ac-resp" hidden><div class="callout">Acidosis respiratoria (hipoventilación) — buscar causa pulmonar/neuromuscular/depresión del centro respiratorio.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="normal" hidden>
  <div class="callout">pH normal — puede ser <strong>normal real</strong> o un <strong>trastorno mixto</strong>. Sospecha mixto si: anión gap aumentado con HCO3⁻/pCO2 normales, o si pCO2 y HCO3⁻ cambian en la misma dirección (ambos ↓ o ambos ↑) — repasa <span class="inline-code">3c. Trastornos mixtos</span>.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="alcalemia" hidden>
  <p><strong>ALCALOSIS.</strong> ¿Qué predomina en la gasometría?</p>
  <button class="flow-btn" onclick="faGoTo(this,'al-met')">↑ HCO3⁻</button>
  <button class="flow-btn" onclick="faGoTo(this,'al-resp')">↓ pCO2</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="al-met" hidden><div class="callout">Alcalosis metabólica → sigue con la herramienta 3 para filiar la causa.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="al-resp" hidden><div class="callout">Alcalosis respiratoria (hiperventilación) — dolor, ansiedad, hipoxemia, sepsis precoz, embarazo, salicilatos.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
</div>

<h3>2. Diagnóstico de la acidosis metabólica (por anión gap)</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// AG = Na⁺ − (Cl⁻ + HCO3⁻) · valor normal ≈ 8-12 mEq/L</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Cuánto es el anión gap?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'ag-alto')">Aumentado (&gt;12 mEq/L)</button>
  <button class="flow-btn" onclick="faGoTo(this,'ag-normal')">Normal (8-12 mEq/L)</button>
</div>
<div class="fa-step" data-step="ag-alto" hidden>
  <p><strong>AG aumentado.</strong> ¿Cetonas?</p>
  <button class="flow-btn" onclick="faGoTo(this,'cet-alta')">Muy elevadas</button>
  <button class="flow-btn" onclick="faGoTo(this,'cet-baja')">Ausentes o algo elevadas</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="cet-alta" hidden>
  <p><strong>Cetonas muy elevadas.</strong> ¿Glucemia?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-dka')">Elevada</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-ndka')">No elevada</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-dka" hidden><div class="callout warn"><span class="tag">DX</span> Cetoacidosis diabética.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-ndka" hidden><div class="callout warn"><span class="tag">DX</span> Cetoacidosis no diabética (alcohólica / ayuno prolongado).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="cet-baja" hidden>
  <p><strong>Cetonas ausentes o mínimas.</strong> ¿Lactato sérico?</p>
  <button class="flow-btn" onclick="faGoTo(this,'lac-alto')">Elevado</button>
  <button class="flow-btn" onclick="faGoTo(this,'lac-normal')">Normal</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="lac-alto" hidden>
  <div class="callout warn"><span class="tag">DX</span> Acidosis láctica.
  <ul style="margin-top:6px;">
  <li><strong>Tipo A</strong> (hipoxia tisular): hipoperfusión, sepsis, shock</li>
  <li><strong>Tipo B</strong> (sin hipoxia franca): metformina, alcoholes, neoplasias, hepatopatía, humo de incendio (cianuro)</li>
  </ul></div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="lac-normal" hidden>
  <p><strong>Sin cetosis ni lactato elevado</strong> — buscar otras causas:</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-osmolal')">Gap osmolal &gt; 20 mOsm/kg</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-salicilato')">Salicilato &gt; 40 mg/dL</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-oxoprolina')">5-oxoprolina urinaria +</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-otras')">Ninguna de las anteriores</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-osmolal" hidden><div class="callout warn"><span class="tag">DX</span> Intoxicación por alcoholes: etanol, metanol, etilenglicol o propilenglicol — determinar el tóxico específico.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-salicilato" hidden><div class="callout warn"><span class="tag">DX</span> Intoxicación por salicilatos.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-oxoprolina" hidden><div class="callout warn"><span class="tag">DX</span> Acidosis por piroglutámico (intoxicación crónica por paracetamol/acetaminofeno).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-otras" hidden><div class="callout warn"><span class="tag">DX</span> Acidosis láctica tipo D, insuficiencia renal grave, u otras causas raras.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="ag-normal" hidden>
  <p><strong>AG normal (hiperclorémica).</strong> Carga neta urinaria = Cl⁻ orina vs (Na⁺+K⁺) orina:</p>
  <button class="flow-btn" onclick="faGoTo(this,'carga-pos')">Positiva: Cl⁻ &gt; (Na⁺+K⁺)</button>
  <button class="flow-btn" onclick="faGoTo(this,'carga-neg')">Negativa: Cl⁻ &lt; (Na⁺+K⁺)</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="carga-pos" hidden><div class="callout warn"><span class="tag">DX</span> Pérdidas extrarrenales de HCO3⁻: diarrea, íleo, fístulas intestinales, laxantes, colestiramina, cloruro cálcico, derivaciones uretero-intestinales.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="carga-neg" hidden><div class="callout warn"><span class="tag">DX</span> Pérdidas renales de HCO3⁻: acidosis tubular distal o proximal, hipoaldosteronismo, insuficiencia renal (el AG puede ser normal o elevado en este caso).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
</div>

<h3>3. Diagnóstico de la alcalosis metabólica</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// eje función renal → cloro urinario → HTA → renina/aldosterona</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Función renal?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'sin-ir')">Sin insuficiencia renal (FG &gt; 25 mL/min)</button>
  <button class="flow-btn" onclick="faGoTo(this,'con-ir')">Con insuficiencia renal (FG &lt; 25 mL/min)</button>
</div>
<div class="fa-step" data-step="con-ir" hidden><div class="callout warn"><span class="tag">DX</span> Administración de bicarbonato, síndrome de leche y alcalinos, o vómitos en el contexto de insuficiencia renal (el riñón no puede excretar el exceso).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="sin-ir" hidden>
  <p><strong>Sin insuficiencia renal.</strong> ¿Cloro urinario?</p>
  <button class="flow-btn" onclick="faGoTo(this,'cl-bajo')">Cl⁻ &lt; 10 mEq/L</button>
  <button class="flow-btn" onclick="faGoTo(this,'cl-alto')">Cl⁻ &gt; 15-20 mEq/L</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="cl-bajo" hidden>
  <div class="callout">Cloro-sensible (responde a SSF): vómitos, aspiración nasogástrica, uso remoto de diuréticos.</div>
  <p><strong>¿Hipertensión arterial asociada?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'sin-hta')">Sin HTA</button>
  <button class="flow-btn" onclick="faGoTo(this,'con-hta')">Con HTA</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="cl-alto" hidden>
  <div class="callout">Cloro-resistente: uso activo de diuréticos u otras causas — continúa por HTA.</div>
  <p><strong>¿Hipertensión arterial asociada?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'sin-hta')">Sin HTA</button>
  <button class="flow-btn" onclick="faGoTo(this,'con-hta')">Con HTA</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="sin-hta" hidden>
  <p><strong>Sin HTA.</strong> ¿Cloro urinario persistentemente bajo?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-bartter')">Sí</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-diureticos')">No</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-bartter" hidden><div class="callout warn"><span class="tag">DX</span> Síndrome de Bartter, síndrome de Gitelman, o depleción de magnesio.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-diureticos" hidden><div class="callout warn"><span class="tag">DX</span> Uso de diuréticos (activo).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="con-hta" hidden>
  <p><strong>Con HTA.</strong> ¿Renina y aldosterona?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-renovasc')">↑ renina, ↑ aldosterona</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-hiperaldo')">↓ renina, ↑ aldosterona</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-cushing')">↓ renina, ↓ aldosterona</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-renovasc" hidden><div class="callout warn"><span class="tag">DX</span> Estenosis de arteria renal, HTA maligna, o tumor productor de renina.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-hiperaldo" hidden><div class="callout warn"><span class="tag">DX</span> Hiperaldosteronismo primario.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="r-cushing" hidden><div class="callout warn"><span class="tag">DX</span> Síndrome de Cushing, síndrome de Liddle, o exceso de corticoides exógenos.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
</div>

<h3>4. Tratamiento de la acidosis metabólica</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// evaluar gravedad → tratar la causa → bicarbonato solo si está indicado</div>
<div class="callout warn"><span class="tag">ANTICÍPATE</span> Amenazas por la propia acidosis: arritmia grave, insuficiencia respiratoria, inestabilidad hemodinámica, toxinas (metanol/etilenglicol), déficit de vitamina B. Amenazas por el tratamiento: hipopotasemia, edema pulmonar, déficit de tiamina, edema cerebral en diabéticos.</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Anión gap?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'ag-alto')">Aumentado — tratar la causa, bicarbonato solo si acidosis extrema</button>
  <button class="flow-btn" onclick="faGoTo(this,'ag-normal')">Normal — tratar la causa si es tratable, bicarbonato si pH &lt; 7.20</button>
</div>
<div class="fa-step" data-step="ag-alto" hidden>
  <p><strong>¿Causa?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'t-dka')">Cetoacidosis diabética</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-lacA')">Acidosis láctica tipo A</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-lacB')">Acidosis láctica tipo B</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-alcohol')">Intoxicación por alcoholes</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-alcoholica')">Cetoacidosis alcohólica</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="t-dka" hidden><div class="callout">Insulina + corregir hipovolemia y déficit de agua (salino, seguido de hiposalino o glucosado) + bicarbonato solo si acidosis extrema.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-lacA" hidden><div class="callout">Aumentar el aporte tisular de oxígeno (tratar shock/hipoperfusión/sepsis de base).</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-lacB" hidden><div class="callout">Tratamiento de soporte. Si es por metformina: suspender el fármaco; bicarbonato y hemodiálisis en acidosis extremas.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-alcohol" hidden><div class="callout">Lavado gástrico + etanol o fomepizol (antídoto) + hemodiálisis.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-alcoholica" hidden><div class="callout">Glucosa solo si hipoglucemia + corregir hipovolemia + tiamina (antes que la glucosa, para evitar Wernicke) + vigilar y tratar hipopotasemia, hipomagnesemia e hipofosfatemia, que suelen aparecer.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="ag-normal" hidden>
  <p><strong>¿Causa?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'t-gi')">Pérdidas gastrointestinales</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-atprox')">Acidosis tubular proximal</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-atdist')">Acidosis tubular distal</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-ir')">Insuficiencia renal</button>
  <button class="flow-btn" onclick="faGoTo(this,'t-hipoaldo')">Hipoaldosteronismo</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="t-gi" hidden><div class="callout">Corregir la causa + bicarbonato sódico.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-atprox" hidden><div class="callout">Si es secundaria, corregir la causa + bicarbonato sódico.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-atdist" hidden><div class="callout">Bicarbonato sódico.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-ir" hidden><div class="callout">Quelantes de fósforo + bicarbonato sódico + diálisis si precisa.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
<div class="fa-step" data-step="t-hipoaldo" hidden><div class="callout">Mineralocorticoides.</div><button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button></div>
</div>

<div class="callout"><span class="tag">NOTA</span> Reconstruido a partir de algoritmos clásicos de trastornos ácido-base (no es una reproducción literal de ninguna fuente concreta) — la lógica clínica que refleja es conocimiento médico estándar. Úsalo como apoyo mental, no como sustituto del juicio clínico ni de los protocolos de tu centro.</div>
`;
