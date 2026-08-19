// =============================================================
// COAGULACIÓN — árbol de secciones + contenido médico
// =============================================================
const COAG_TREE = {
  title:'COAGULACIÓN',
  intro:true,
  children: [
    {id:'coag-obj', title:'Objetivos de la rotación', leaf:true, content:()=>C_OBJ2},
    {id:'g1', title:'1. Cascada de coagulación (interactivo)', leaf:true, content:()=>G1},
    {id:'g2', title:'2. Dianas de los fármacos sobre la cascada', leaf:true, content:()=>G2},
    {id:'g3', title:'3. Pruebas de laboratorio', children:[
      {id:'g3a', title:'a. TP, TTPa, fibrinógeno, dímero D', leaf:true, content:()=>G3A},
      {id:'g3b', title:'b. Algoritmo del tiempo alargado', leaf:true, content:()=>G3B},
    ]},
    {id:'g4', title:'4. Anticoagulantes', leaf:true, content:()=>G4},
    {id:'g5', title:'5. Reversión y manejo periprocedimiento', leaf:true, content:()=>G5},
    {id:'g6', title:'6. Coagulopatías congénitas', leaf:true, content:()=>G6},
    {id:'g7', title:'7. Coagulación intravascular diseminada', leaf:true, content:()=>G7},
    {id:'g8', title:'8. Trombopenias: PTI, HIT, PTT', leaf:true, content:()=>G8},
    {id:'g9', title:'9. Trombofilias y estudio de trombosis', leaf:true, content:()=>G9},
    {id:'g10', title:'10. Trombosis asociada a cáncer', leaf:true, hem:true, content:()=>G10},
  ]
};

/* =========================================================
   CONTENIDO
   ========================================================= */

const C_OBJ2 = `
<p class="comment">// coagulación — el terreno propio de la hematología</p>
<div class="callout"><span class="tag">OBJETIVO</span> Dominar la cascada y sus pruebas, saber qué fármaco actúa dónde y cómo revertirlo, y manejar con criterio las situaciones que combinan trombosis y sangrado, que son el pan de cada día en hematología.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Cascada de coagulación interactiva</li>
<li>Dianas de los fármacos sobre la cascada</li>
<li>Pruebas de laboratorio y algoritmo del tiempo alargado</li>
<li>Anticoagulantes</li>
<li>Reversión y manejo periprocedimiento</li>
<li>Coagulopatías congénitas: hemofilias y von Willebrand</li>
<li>Coagulación intravascular diseminada</li>
<li>Trombopenias: PTI, HIT, PTT</li>
<li>Trombofilias y estudio de trombosis</li>
<li>Trombosis asociada a cáncer</li>
</ol>
`;

const G1 = `
<p class="comment">// cascada de coagulación — diagrama interactivo</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cualquier factor, vía o producto final para ver su papel, qué prueba lo mide y qué patología o fármaco lo afecta.</div>

<div class="diagram-wrap">
<div class="diagram-caption">// vía intrínseca · vía extrínseca · vía común</div>
<svg viewBox="0 0 700 560" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cflecha" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <polygon points="0 0, 9 4.5, 0 9" fill="var(--text-dim)"/>
    </marker>
  </defs>

  <!-- ===== títulos de vía ===== -->
  <rect class="hit" data-title="Vía intrínseca (de activación por contacto)" data-desc="Se inicia cuando la sangre contacta con una superficie cargada negativamente (colágeno subendotelial, vidrio del tubo). Secuencia XII → XI → IX, que junto al VIII activa el factor X. Es la vía que mide el TTPa. Su déficit da hemofilia (VIII o IX)."
    x="24" y="18" width="250" height="34" rx="4" fill="var(--accent2)" opacity="0.16" onclick="highlightPart(this)"/>
  <text x="149" y="40" fill="var(--accent2)" font-size="14" font-weight="bold" text-anchor="middle" font-family="var(--mono)">VÍA INTRÍNSECA</text>
  <text x="149" y="62" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">mide el TTPa</text>

  <rect class="hit" data-title="Vía extrínseca (del factor tisular)" data-desc="Se dispara cuando un traumatismo expone el factor tisular, que junto al factor VII activa directamente el factor X. Es la vía rápida y la que mide el TP/INR. El factor VII tiene la vida media más corta (~6 h), por eso el INR es lo primero que se altera al iniciar antivitamina K o en la insuficiencia hepática."
    x="400" y="18" width="250" height="34" rx="4" fill="var(--yellow)" opacity="0.16" onclick="highlightPart(this)"/>
  <text x="525" y="40" fill="var(--yellow)" font-size="14" font-weight="bold" text-anchor="middle" font-family="var(--mono)">VÍA EXTRÍNSECA</text>
  <text x="525" y="62" fill="var(--text-dim)" font-size="9.5" text-anchor="middle" font-family="var(--mono)">mide el TP / INR</text>

  <!-- ===== intrínseca ===== -->
  <g class="hit" data-title="Factor XII → XIIa" data-desc="Factor de contacto (Hageman). Su déficit alarga mucho el TTPa pero NO produce sangrado: es un hallazgo de laboratorio sin traducción clínica. Buen ejemplo de que un TTPa alargado no siempre significa riesgo hemorrágico." onclick="highlightPart(this)">
    <rect x="40" y="82" width="180" height="28" rx="3" fill="var(--accent2)" opacity="0.2"/>
  </g>
  <text x="130" y="101" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">XII ⟶ XIIa</text>

  <g class="hit" data-title="Factor XI → XIa" data-desc="Su déficit causa la hemofilia C (Rosenthal), más leve y con sangrado a menudo solo tras cirugía o traumatismo. Frecuente en judíos asquenazíes." onclick="highlightPart(this)">
    <rect x="55" y="126" width="180" height="28" rx="3" fill="var(--accent2)" opacity="0.2"/>
  </g>
  <text x="145" y="145" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">XI ⟶ XIa</text>

  <g class="hit" data-title="Factor IX → IXa" data-desc="Su déficit es la HEMOFILIA B (enfermedad de Christmas), ligada al cromosoma X. Es uno de los factores dependientes de vitamina K (regla 1972: X, IX, VII, II)." onclick="highlightPart(this)">
    <rect x="70" y="170" width="180" height="28" rx="3" fill="var(--accent2)" opacity="0.2"/>
  </g>
  <text x="160" y="189" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">IX ⟶ IXa</text>

  <g class="hit" data-title="Factor VIII → VIIIa" data-desc="Su déficit es la HEMOFILIA A, la más frecuente, ligada al X. Circula unido al factor de von Willebrand, que lo protege de la degradación: por eso en la enfermedad de von Willebrand grave también baja el factor VIII. NO es dependiente de vitamina K." onclick="highlightPart(this)">
    <rect x="85" y="214" width="180" height="28" rx="3" fill="var(--accent2)" opacity="0.2"/>
  </g>
  <text x="175" y="233" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">VIII ⟶ VIIIa</text>

  <text x="118" y="268" fill="var(--text-dim)" font-size="9" font-family="var(--mono)">Complejo tenasa: VIIIa + IXa</text>
  <text x="118" y="281" fill="var(--text-dim)" font-size="9" font-family="var(--mono)">+ Ca²⁺ + fosfolípidos</text>

  <!-- flechas verticales intrínseca -->
  <path d="M78,110 L88,126" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
  <path d="M93,154 L103,170" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
  <path d="M108,198 L118,214" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
  <path d="M175,242 C200,270 240,300 268,330" stroke="var(--text-dim)" stroke-width="1.5" fill="none" marker-end="url(#cflecha)"/>

  <!-- ===== extrínseca ===== -->
  <g class="hit" data-title="Traumatismo y factor tisular" data-desc="La lesión expone el factor tisular (tromboplastina) del subendotelio. Es el verdadero iniciador fisiológico de la coagulación in vivo. En la CID, la liberación masiva de factor tisular (sepsis, leucemia promielocítica, trauma) dispara la cascada de forma descontrolada." onclick="highlightPart(this)">
    <rect x="450" y="82" width="170" height="28" rx="3" fill="var(--yellow)" opacity="0.2"/>
    <rect x="450" y="126" width="170" height="28" rx="3" fill="var(--yellow)" opacity="0.2"/>
  </g>
  <text x="535" y="101" fill="var(--text)" font-size="11.5" text-anchor="middle" font-family="var(--mono)">TRAUMATISMO</text>
  <text x="535" y="145" fill="var(--text)" font-size="11.5" text-anchor="middle" font-family="var(--mono)">Factor tisular</text>

  <g class="hit" data-title="Factor VII → VIIa" data-desc="Vida media más corta de todos (~6 h) y dependiente de vitamina K. Por eso el TP/INR se altera antes que el TTPa en el inicio del acenocumarol, en la hepatopatía y en el déficit de vitamina K. El factor VIIa recombinante se usa como agente puente en hemofilia con inhibidor." onclick="highlightPart(this)">
    <rect x="450" y="170" width="170" height="28" rx="3" fill="var(--yellow)" opacity="0.2"/>
  </g>
  <text x="535" y="189" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">VIIa ⟵ VII</text>

  <path d="M535,110 L535,124" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
  <path d="M535,154 L535,168" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
  <path d="M500,198 C450,250 420,290 392,326" stroke="var(--text-dim)" stroke-width="2" fill="none" marker-end="url(#cflecha)"/>

  <!-- ===== vía común ===== -->
  <rect class="hit" data-title="Vía común" data-desc="Punto de convergencia: el factor X activado, junto al Va, calcio y fosfolípidos (complejo protrombinasa), transforma la protrombina en trombina. La trombina convierte el fibrinógeno en fibrina y el XIII la entrecruza. Un alargamiento SIMULTÁNEO de TP y TTPa apunta a un problema de la vía común, a hepatopatía, CID o déficit de vitamina K."
    x="24" y="330" width="200" height="34" rx="4" fill="var(--accent3)" opacity="0.16" onclick="highlightPart(this)"/>
  <text x="124" y="353" fill="var(--accent3)" font-size="14" font-weight="bold" text-anchor="middle" font-family="var(--mono)">VÍA COMÚN</text>

  <g class="hit" data-title="Factor X → Xa" data-desc="La gran encrucijada. Dependiente de vitamina K. Es la diana de las HBPM y el fondaparinux (vía antitrombina) y de los ACOD 'xabanes': rivaroxabán, apixabán y edoxabán, que lo inhiben directamente." onclick="highlightPart(this)">
    <rect x="270" y="326" width="150" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
  </g>
  <text x="345" y="346" fill="var(--text)" font-size="12.5" text-anchor="middle" font-family="var(--mono)">X ⟹ Xa</text>

  <g class="hit" data-title="Protrombina (II) → Trombina (IIa)" data-desc="La protrombina es dependiente de vitamina K. La trombina es la enzima central: convierte fibrinógeno en fibrina, activa los factores V, VIII, XI y XIII, activa plaquetas y, con la trombomodulina, activa la proteína C (freno natural). Es la diana de la heparina no fraccionada (vía antitrombina), del dabigatrán y de argatrobán/bivalirudina." onclick="highlightPart(this)">
    <rect x="200" y="390" width="180" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
    <rect x="430" y="390" width="150" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
  </g>
  <text x="290" y="410" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">Protrombina</text>
  <text x="505" y="410" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">TROMBINA</text>

  <g class="hit" data-title="Fibrinógeno → Fibrina" data-desc="El fibrinógeno es un reactante de fase aguda: sube con la inflamación y baja en la CID y en la hepatopatía avanzada. Un fibrinógeno bajo con dímero D alto es muy sugestivo de CID. Se repone con crioprecipitado o concentrado de fibrinógeno." onclick="highlightPart(this)">
    <rect x="200" y="450" width="180" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
    <rect x="430" y="450" width="150" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
  </g>
  <text x="290" y="470" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">Fibrinógeno</text>
  <text x="505" y="470" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">FIBRINA</text>

  <g class="hit" data-title="Factor XIII y polímeros de fibrina" data-desc="El XIII entrecruza los monómeros de fibrina y estabiliza el coágulo. Su déficit NO altera ni el TP ni el TTPa: cursa con sangrado tardío tras la hemostasia inicial y mala cicatrización, y se diagnostica con pruebas específicas (solubilidad del coágulo en urea)." onclick="highlightPart(this)">
    <rect x="360" y="510" width="230" height="30" rx="3" fill="var(--accent3)" opacity="0.24"/>
  </g>
  <text x="475" y="530" fill="var(--text)" font-size="12" text-anchor="middle" font-family="var(--mono)">Polímeros de fibrina</text>
  <text x="345" y="504" fill="var(--yellow)" font-size="11" text-anchor="middle" font-family="var(--mono)">XIII</text>

  <!-- flechas comunes -->
  <path d="M345,356 L345,386" stroke="var(--text)" stroke-width="2.5" marker-end="url(#cflecha)"/>
  <path d="M380,405 L426,405" stroke="var(--text)" stroke-width="2.5" marker-end="url(#cflecha)"/>
  <path d="M505,420 L505,446" stroke="var(--text)" stroke-width="2.5" marker-end="url(#cflecha)"/>
  <path d="M380,465 L426,465" stroke="var(--text)" stroke-width="2.5" marker-end="url(#cflecha)"/>
  <path d="M505,480 L505,506" stroke="var(--text)" stroke-width="2.5" marker-end="url(#cflecha)"/>
  <path d="M355,500 L400,516" stroke="var(--text-dim)" stroke-width="1.5" marker-end="url(#cflecha)"/>
</svg>
<div class="diagram-info">Selecciona un factor o una vía del esquema para ver su papel, qué prueba lo mide y qué lo altera.</div>
</div>

<h3>Reglas que resumen todo el esquema</h3>
<ul>
<li><strong>TTPa</strong> mide la vía <strong>intrínseca</strong> + común (XII, XI, IX, VIII, X, V, II, fibrinógeno).</li>
<li><strong>TP/INR</strong> mide la vía <strong>extrínseca</strong> + común (VII, X, V, II, fibrinógeno).</li>
<li><strong>Vitamina K</strong>: factores <strong>1972</strong> → X, IX, VII, II, más las proteínas C y S.</li>
<li>Si se alargan <strong>los dos</strong>, el problema está en la vía común, o es global: hepatopatía, CID, déficit de vitamina K, heparina a dosis altas.</li>
<li>El <strong>XIII</strong> no altera ninguna de las dos pruebas.</li>
</ul>
`;

const G2 = `
<p class="comment">// dónde actúa cada fármaco sobre la cascada</p>
<div class="table-wrap"><table class="itable" data-table-id="g2-1">
<caption>Diana, control analítico y antídoto</caption>
<thead><tr><th>Fármaco</th><th>Diana</th><th>Control</th><th>Antídoto</th></tr></thead>
<tbody>
<tr><td>Heparina no fraccionada</td><td>Antitrombina → inhibe IIa y Xa por igual</td><td>TTPa (ratio 1.5-2.5)</td><td>Protamina (revierte casi al 100 %)</td></tr>
<tr><td>HBPM (enoxaparina)</td><td>Antitrombina → sobre todo anti-Xa</td><td>Anti-Xa (solo en casos concretos)</td><td>Protamina (revierte ~60 %)</td></tr>
<tr><td>Fondaparinux</td><td>Anti-Xa puro</td><td>Anti-Xa específico</td><td>No hay antídoto directo</td></tr>
<tr><td>Acenocumarol / warfarina</td><td>Inhiben VKORC1 → ↓ II, VII, IX, X + proteínas C y S</td><td>INR</td><td>Vitamina K + complejo protrombínico</td></tr>
<tr><td>Rivaroxabán, apixabán, edoxabán</td><td>Inhibidor directo del Xa</td><td>Anti-Xa calibrado (no de rutina)</td><td>Andexanet alfa; si no, CCP</td></tr>
<tr><td>Dabigatrán</td><td>Inhibidor directo de la trombina (IIa)</td><td>Tiempo de trombina diluido</td><td>Idarucizumab</td></tr>
<tr><td>Argatrobán, bivalirudina</td><td>Inhibidor directo de la trombina</td><td>TTPa</td><td>No hay; vida media corta</td></tr>
<tr><td>Antiagregantes</td><td>Plaqueta (COX-1, P2Y12, GP IIb/IIIa)</td><td>No se monitoriza de rutina</td><td>No hay; transfusión de plaquetas si sangrado grave</td></tr>
<tr><td>Fibrinolíticos (alteplasa)</td><td>Activan el plasminógeno → lisan la fibrina</td><td>Fibrinógeno</td><td>Ácido tranexámico, crioprecipitado</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Los frenos naturales de la coagulación</h3>
<ul>
<li><strong>Antitrombina:</strong> inhibe trombina y Xa. Es el cofactor imprescindible de la heparina — si está muy baja, la heparina "no funciona".</li>
<li><strong>Proteína C y proteína S</strong> (dependientes de vitamina K): degradan los factores Va y VIIIa. La resistencia a la proteína C activada por mutación del factor V Leiden es la trombofilia hereditaria más frecuente.</li>
<li><strong>Sistema fibrinolítico:</strong> la plasmina degrada la fibrina y genera los productos de degradación, entre ellos el <strong>dímero D</strong>.</li>
</ul>

<div class="callout warn"><span class="tag">NECROSIS CUTÁNEA POR CUMARÍNICOS</span> Al iniciar acenocumarol caen antes la proteína C y el factor VII (vidas medias cortas) que la protrombina. Durante 2-3 días el paciente está transitoriamente <strong>protrombótico</strong>. Por eso se solapa con heparina al menos 5 días y hasta INR en rango dos días consecutivos.</div>
`;

const G3A = `
<p class="comment">// pruebas de laboratorio de la hemostasia</p>
<div class="table-wrap"><table class="itable" data-table-id="g3a-1">
<caption>Qué mide cada prueba</caption>
<thead><tr><th>Prueba</th><th>Explora</th><th>Se alarga en</th></tr></thead>
<tbody>
<tr><td>TP / INR</td><td>Vía extrínseca y común (VII, X, V, II, fibrinógeno)</td><td>Antivitamina K, hepatopatía, déficit de vitamina K, CID</td></tr>
<tr><td>TTPa</td><td>Vía intrínseca y común (XII, XI, IX, VIII, X, V, II)</td><td>Heparina, hemofilia, von Willebrand, anticoagulante lúpico, déficit de XII</td></tr>
<tr><td>Tiempo de trombina</td><td>Paso final fibrinógeno → fibrina</td><td>Heparina, dabigatrán, hipofibrinogenemia, disfibrinogenemia</td></tr>
<tr><td>Fibrinógeno</td><td>Cantidad funcional</td><td>Baja en CID, hepatopatía, fibrinólisis, dilución</td></tr>
<tr><td>Dímero D</td><td>Productos de degradación de la fibrina</td><td>Sube en trombosis, CID, cáncer, infección, embarazo, cirugía, edad</td></tr>
<tr><td>Recuento y morfología plaquetaria</td><td>Hemostasia primaria</td><td>—</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Errores de interpretación frecuentes</h3>
<ul>
<li><strong>Dímero D alto no es diagnóstico de nada.</strong> Su valor es el <em>negativo</em>: si es normal con probabilidad clínica baja, descarta trombosis. En el paciente oncológico está casi siempre alto y pierde utilidad.</li>
<li><strong>Anticoagulante lúpico:</strong> alarga el TTPa in vitro pero produce <em>trombosis</em>, no sangrado. Es la trampa clásica.</li>
<li><strong>Tubo mal llenado</strong> (poca sangre para el citrato) o extracción por vía heparinizada: alargan artefactualmente los tiempos. Ante un resultado raro, repite la extracción antes de actuar.</li>
<li><strong>Hematocrito muy alto</strong> (poliglobulia): exceso de citrato relativo → tiempos falsamente alargados.</li>
</ul>
`;

const G3B = `
<p class="comment">// algoritmo del tiempo de coagulación alargado</p>
<div class="callout"><span class="tag">CLAVE</span> La prueba que lo resuelve casi todo es el <strong>test de mezclas</strong>: se mezcla el plasma del paciente con plasma normal al 50 %. Si <em>corrige</em>, falta un factor. Si <em>no corrige</em>, hay un inhibidor.</div>

<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — ¿qué prueba está alargada?</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Qué encuentras alterado?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'ttpa')">Solo el TTPa</button>
  <button class="flow-btn" onclick="faGoTo(this,'tp')">Solo el TP / INR</button>
  <button class="flow-btn" onclick="faGoTo(this,'ambos')">Ambos alargados</button>
  <button class="flow-btn" onclick="faGoTo(this,'normal')">Ambos normales pero el paciente sangra</button>
</div>

<div class="fa-step" data-step="ttpa" hidden>
  <p><strong>TTPa alargado aislado.</strong> Haz test de mezclas:</p>
  <button class="flow-btn" onclick="faGoTo(this,'ttpa-corrige')">Corrige</button>
  <button class="flow-btn" onclick="faGoTo(this,'ttpa-nocorrige')">No corrige</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="ttpa-corrige" hidden>
  <div class="callout"><span class="tag">DÉFICIT DE FACTOR</span> Hemofilia A (VIII) o B (IX), enfermedad de von Willebrand (baja el VIII), déficit de XI o de XII. Si sangra: hemofilia o von Willebrand. Si no sangra nada: probablemente déficit de XII, sin trascendencia clínica.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="ttpa-nocorrige" hidden>
  <div class="callout warn"><span class="tag">INHIBIDOR</span> Dos posibilidades opuestas: <strong>anticoagulante lúpico</strong> (produce trombosis, no sangrado) o <strong>inhibidor específico del factor VIII</strong> (hemofilia adquirida: sangrado grave en un paciente sin antecedentes, a menudo mayor o con neoplasia). Distínguelos con pruebas de fase sólida y dosificación del VIII. También considera heparina en la muestra.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="tp" hidden>
  <div class="callout"><span class="tag">VÍA EXTRÍNSECA</span> Piensa en: inicio de antivitamina K, <strong>déficit de vitamina K</strong> (nutrición, antibióticos, colestasis), hepatopatía precoz o déficit aislado de factor VII. El VII es el de vida media más corta: es el primero que cae en cualquier situación global.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="ambos" hidden>
  <p><strong>TP y TTPa alargados.</strong> ¿Cómo están el fibrinógeno y las plaquetas?</p>
  <button class="flow-btn" onclick="faGoTo(this,'cid')">Fibrinógeno bajo, plaquetas bajas, dímero D alto</button>
  <button class="flow-btn" onclick="faGoTo(this,'hepato')">Fibrinógeno normal o algo bajo, plaquetas normales</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="cid" hidden>
  <div class="callout warn"><span class="tag">CID</span> Coagulación intravascular diseminada: consumo global. Busca la causa (sepsis, leucemia promielocítica, complicación obstétrica, trauma, tumor). Ver el apartado 7.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="hepato" hidden>
  <div class="callout"><span class="tag">GLOBAL</span> Hepatopatía avanzada, déficit importante de vitamina K, anticoagulación oral supraterapéutica, dilución por transfusión masiva, o déficit de un factor de la vía común (X, V, II, fibrinógeno). El <strong>factor V</strong> ayuda a distinguir: bajo en hepatopatía, normal en el déficit puro de vitamina K.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>

<div class="fa-step" data-step="normal" hidden>
  <div class="callout"><span class="tag">MIRA OTRO SITIO</span> Con TP y TTPa normales, el problema está en la <strong>hemostasia primaria</strong> o en la estabilización del coágulo: trombopenia, trombopatía (fármacos, uremia), enfermedad de von Willebrand leve, <strong>déficit de factor XIII</strong> (sangrado tardío y mala cicatrización) o alteración vascular. Pide función plaquetaria, von Willebrand y XIII.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>
`;

const G4 = `
<p class="comment">// anticoagulantes</p>
<div class="table-wrap"><table class="itable" data-table-id="g4-1">
<caption>Dosis y particularidades</caption>
<thead><tr><th>Fármaco</th><th>Dosis habitual</th><th>Puntos clave</th></tr></thead>
<tbody>
<tr><td>HNF</td><td>Bolo 80 U/kg + 18 U/kg/h; TTPa 1.5-2.5×</td><td>Vida media corta y reversible: de elección si insuficiencia renal grave, alto riesgo hemorrágico o cirugía inminente</td></tr>
<tr><td>Enoxaparina</td><td>Profilaxis 40 mg/24 h · Tratamiento 1 mg/kg/12 h</td><td>Si ClCr &lt;30: 1 mg/kg/24 h. Evitar si ClCr &lt;15 o diálisis</td></tr>
<tr><td>Fondaparinux</td><td>2.5 mg/24 h profilaxis · 7.5 mg/24 h tratamiento</td><td>Alternativa en HIT. Contraindicado si ClCr &lt;30</td></tr>
<tr><td>Acenocumarol</td><td>Ajuste por INR (objetivo 2-3)</td><td>Obligado en SAF triple positivo, válvula mecánica y estenosis mitral moderada-grave</td></tr>
<tr><td>Apixabán</td><td>10 mg/12 h × 7 días → 5 mg/12 h</td><td>El ACOD con menor tasa de sangrado digestivo</td></tr>
<tr><td>Rivaroxabán</td><td>15 mg/12 h × 21 días → 20 mg/24 h</td><td>Tomar con comida para asegurar absorción</td></tr>
<tr><td>Edoxabán</td><td>60 mg/24 h tras ≥5 días de heparina</td><td>30 mg si ClCr 15-50, ≤60 kg o inhibidor de P-gp</td></tr>
<tr><td>Dabigatrán</td><td>150 mg/12 h tras ≥5 días de heparina</td><td>Único con antídoto específico consolidado (idarucizumab)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Situaciones donde el ACOD NO vale</h3>
<ul>
<li>Síndrome antifosfolípido triple positivo.</li>
<li>Válvula mecánica y estenosis mitral moderada-grave.</li>
<li>Embarazo y lactancia (usar HBPM).</li>
<li>Insuficiencia renal grave según el fármaco.</li>
<li>Interacciones potentes con inductores o inhibidores de P-gp y CYP3A4.</li>
</ul>
`;

const G5 = `
<p class="comment">// reversión y manejo periprocedimiento</p>
<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — paciente anticoagulado que sangra</div>
<div class="fa-step" data-step="start">
  <p><strong>¿Con qué está anticoagulado?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'avk')">Antivitamina K</button>
  <button class="flow-btn" onclick="faGoTo(this,'hep')">Heparina (HNF o HBPM)</button>
  <button class="flow-btn" onclick="faGoTo(this,'xaban')">Inhibidor del Xa (xabanes)</button>
  <button class="flow-btn" onclick="faGoTo(this,'dabi')">Dabigatrán</button>
</div>
<div class="fa-step" data-step="avk" hidden>
  <p><strong>Antivitamina K.</strong> ¿Gravedad del sangrado?</p>
  <button class="flow-btn" onclick="faGoTo(this,'avk-grave')">Grave o con riesgo vital</button>
  <button class="flow-btn" onclick="faGoTo(this,'avk-leve')">Leve, o solo INR alto sin sangrado</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="avk-grave" hidden>
  <div class="callout warn"><span class="tag">URGENTE</span> <strong>Complejo protrombínico (CCP)</strong> según INR y peso + <strong>vitamina K 10 mg IV lenta</strong>. El CCP actúa en minutos pero dura poco; la vitamina K tarda 6-12 h pero mantiene el efecto: por eso se dan los dos. El plasma fresco es la alternativa si no hay CCP, pero requiere gran volumen y es más lento.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="avk-leve" hidden>
  <div class="callout">Suspender la dosis y reevaluar el INR. Vitamina K oral 1-2 mg si el INR es muy alto o hay riesgo elevado. Evita corregir de más: volver a anticoagular después puede ser difícil.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="hep" hidden>
  <div class="callout"><span class="tag">PROTAMINA</span> 1 mg de protamina por cada 100 U de HNF administradas en las últimas 2-3 h. En HBPM la reversión es solo parcial (~60 %). Vigila hipotensión y reacción anafilactoide durante la infusión.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="xaban" hidden>
  <div class="callout warn"><span class="tag">XABANES</span> <strong>Andexanet alfa</strong> si está disponible; si no, complejo protrombínico a dosis altas. Carbón activado si la última toma fue hace menos de 2-4 h. <strong>No dializables</strong> (alta unión a proteínas).</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="dabi" hidden>
  <div class="callout warn"><span class="tag">DABIGATRÁN</span> <strong>Idarucizumab</strong> 5 g IV: reversión completa en minutos. A diferencia de los xabanes, el dabigatrán <strong>sí es dializable</strong> si no dispones del antídoto.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Suspensión antes de un procedimiento</h3>
<div class="table-wrap"><table class="itable" data-table-id="g5-1">
<caption>Orientativo — depende del riesgo hemorrágico y de la función renal</caption>
<thead><tr><th>Fármaco</th><th>Riesgo bajo</th><th>Riesgo alto</th></tr></thead>
<tbody>
<tr><td>Acenocumarol</td><td>3 días (INR &lt;1.5 el día del procedimiento)</td><td>3-5 días ± terapia puente con HBPM</td></tr>
<tr><td>ACOD con función renal normal</td><td>24 h</td><td>48 h</td></tr>
<tr><td>ACOD con insuficiencia renal</td><td>48 h</td><td>72-96 h</td></tr>
<tr><td>HBPM a dosis terapéutica</td><td>24 h (última dosis)</td><td>24 h</td></tr>
<tr><td>Clopidogrel</td><td>5 días</td><td>5 días</td></tr>
<tr><td>AAS</td><td>Suele mantenerse</td><td>Individualizar</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>La <strong>terapia puente</strong> con HBPM se reserva hoy a riesgo trombótico muy alto (válvula mecánica, TEV reciente &lt;3 meses, ictus reciente): en el resto aumenta el sangrado sin reducir la trombosis.</p>
`;

const G6 = `
<p class="comment">// coagulopatías congénitas</p>
<h3>Hemofilias</h3>
<div class="table-wrap"><table class="itable" data-table-id="g6-1">
<caption>Hemofilia A y B</caption>
<thead><tr><th></th><th>Hemofilia A</th><th>Hemofilia B</th></tr></thead>
<tbody>
<tr><td>Factor deficitario</td><td>VIII</td><td>IX</td></tr>
<tr><td>Herencia</td><td>Recesiva ligada al X</td><td>Recesiva ligada al X</td></tr>
<tr><td>Frecuencia</td><td>~80-85 % de las hemofilias</td><td>~15-20 %</td></tr>
<tr><td>Laboratorio</td><td>TTPa alargado, TP normal</td><td>TTPa alargado, TP normal</td></tr>
<tr><td>Tratamiento</td><td>Factor VIII; emicizumab en profilaxis; desmopresina en formas leves</td><td>Factor IX</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<ul>
<li><strong>Gravedad según actividad:</strong> grave &lt;1 % (hemartros espontáneos), moderada 1-5 %, leve 5-40 % (sangrado solo tras traumatismo o cirugía).</li>
<li><strong>Clínica típica:</strong> hemartros de repetición (rodilla, tobillo, codo), hematomas musculares profundos, sangrado tardío tras cirugía.</li>
<li><strong>Inhibidores:</strong> aloanticuerpos contra el factor infundido; se sospechan cuando el paciente deja de responder. Manejo con agentes puente (VIIa recombinante, CCP activado) e inmunotolerancia.</li>
</ul>

<h3>Enfermedad de von Willebrand</h3>
<ul>
<li>Es la coagulopatía hereditaria <strong>más frecuente</strong>, de herencia autosómica y por tanto igual de común en mujeres.</li>
<li>El FvW hace dos cosas: media la adhesión plaquetaria y <strong>transporta y protege al factor VIII</strong>. Por eso en formas graves también baja el VIII y se alarga el TTPa.</li>
<li>Clínica de hemostasia primaria: epistaxis, gingivorragia, hematomas fáciles, <strong>menorragia</strong> (motivo frecuente de diagnóstico), sangrado tras extracción dental.</li>
<li>Tipos: 1 (déficit parcial, el más frecuente), 2 (defecto cualitativo, varios subtipos), 3 (ausencia completa, grave).</li>
<li>Tratamiento: <strong>desmopresina</strong> en tipo 1 (libera los depósitos endoteliales), concentrados de FvW en tipos 2 y 3, antifibrinolíticos como apoyo.</li>
</ul>

<div class="callout warn"><span class="tag">OJO</span> La desmopresina no sirve en el tipo 3 (no hay depósitos que liberar) y puede empeorar el tipo 2B (aumenta la agregación y la trombopenia). Y produce <strong>hiponatremia</strong> por retención de agua: restringir líquidos y vigilar el sodio.</div>
`;

const G7 = `
<p class="comment">// coagulación intravascular diseminada</p>
<h3>Concepto</h3>
<p>Activación sistémica y descontrolada de la coagulación que consume factores y plaquetas y activa secundariamente la fibrinólisis. El resultado es la paradoja de <strong>trombosis microvascular y sangrado a la vez</strong>.</p>

<h3>Causas en el paciente hematológico</h3>
<ul>
<li><strong>Leucemia promielocítica aguda (LPA)</strong> — la causa que no se puede pasar por alto.</li>
<li>Sepsis, sobre todo por Gram negativos.</li>
<li>Tumores sólidos diseminados, complicaciones obstétricas, traumatismo grave, grandes quemados.</li>
<li>Reacción hemolítica transfusional aguda.</li>
</ul>

<h3>Laboratorio</h3>
<div class="table-wrap"><table class="itable" data-table-id="g7-1">
<caption>Perfil característico</caption>
<thead><tr><th>Parámetro</th><th>Evolución</th></tr></thead>
<tbody>
<tr><td>Plaquetas</td><td>Descenso progresivo</td></tr>
<tr><td>TP y TTPa</td><td>Alargados</td></tr>
<tr><td>Fibrinógeno</td><td>Descendido (ojo: parte de un valor alto por ser reactante de fase aguda, así que un valor "normal" ya puede ser patológico)</td></tr>
<tr><td>Dímero D</td><td>Muy elevado</td></tr>
<tr><td>Frotis</td><td>Esquistocitos (menos que en la microangiopatía)</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Tratamiento</h3>
<ul>
<li><strong>Tratar la causa</strong> — es lo único que resuelve la CID.</li>
<li>Si predomina el <strong>sangrado</strong>: plasma fresco, fibrinógeno o crioprecipitado (objetivo &gt;150 mg/dL), plaquetas.</li>
<li>Si predomina la <strong>trombosis</strong>: heparina a dosis profiláctica o terapéutica según el caso.</li>
<li>No transfundir "por la analítica" en un paciente que no sangra ni va a ser intervenido.</li>
</ul>

<div class="callout warn"><span class="tag">LPA</span> En la leucemia promielocítica la coagulopatía mata más que la propia leucemia en los primeros días. Ante la sospecha, se inicia <strong>ATRA de forma inmediata</strong> sin esperar a la confirmación genética, y se mantiene un soporte transfusional agresivo (plaquetas &gt;30-50 × 10⁹/L y fibrinógeno &gt;150 mg/dL).</div>
`;

const G8 = `
<p class="comment">// trombopenias que hay que distinguir</p>
<div class="table-wrap"><table class="itable" data-table-id="g8-1">
<caption>Diagnóstico diferencial rápido</caption>
<thead><tr><th></th><th>PTI</th><th>HIT</th><th>PTT</th></tr></thead>
<tbody>
<tr><td>Mecanismo</td><td>Autoanticuerpos antiplaquetarios</td><td>Anticuerpos anti-PF4/heparina</td><td>Déficit de ADAMTS13</td></tr>
<tr><td>Clínica dominante</td><td>Sangrado mucocutáneo</td><td><strong>Trombosis</strong>, no sangrado</td><td>Isquemia microvascular: neurológica, renal</td></tr>
<tr><td>Plaquetas</td><td>Pueden ser muy bajas</td><td>Descenso &gt;50 % respecto al basal</td><td>Bajas con anemia hemolítica</td></tr>
<tr><td>Frotis</td><td>Normal, plaquetas grandes</td><td>Normal</td><td><strong>Esquistocitos</strong></td></tr>
<tr><td>Tratamiento</td><td>Corticoides, inmunoglobulinas, agonistas del receptor de TPO</td><td>Suspender toda heparina + argatrobán o fondaparinux</td><td><strong>Plasmaféresis urgente</strong> + corticoides ± caplacizumab</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Trombocitopenia inducida por heparina (HIT)</h3>
<ul>
<li>Descenso &gt;50 % de las plaquetas entre los días <strong>5 y 10</strong> de heparina (o antes si hubo exposición previa).</li>
<li><strong>Score 4T:</strong> Trombopenia, Tiempo de aparición, Trombosis nueva, ausencia de oTras causas.</li>
<li>Confirmación: anticuerpos anti-PF4 (muy sensibles, poco específicos) + test funcional de liberación de serotonina.</li>
<li><strong>Manejo:</strong> suspender toda heparina — incluidos los lavados de catéter y las heparinas de bajo peso — y anticoagular con un no heparínico. <strong>Nunca dejar solo antiagregado</strong> ni transfundir plaquetas de rutina.</li>
</ul>

<h3>Púrpura trombótica trombocitopénica (PTT)</h3>
<ul>
<li>Péntada clásica (rara vez completa): anemia hemolítica microangiopática, trombopenia, fiebre, afectación neurológica y renal.</li>
<li>Ante <strong>anemia hemolítica con esquistocitos + trombopenia sin otra causa</strong>, se trata como PTT hasta demostrar lo contrario.</li>
<li>La plasmaféresis es una <strong>urgencia vital</strong>: no esperar al resultado de ADAMTS13.</li>
<li><strong>No transfundir plaquetas</strong> salvo hemorragia con riesgo vital: alimenta la trombosis microvascular.</li>
</ul>

<div class="callout"><span class="tag">RELACIÓN</span> El papel de la aféresis y sus aspectos técnicos están desarrollados en <span class="inline-code">Nefrología → 7. Aféresis terapéutica</span>.</div>
`;

const G9 = `
<p class="comment">// trombofilias y estudio de la trombosis</p>
<h3>Trombofilias hereditarias</h3>
<div class="table-wrap"><table class="itable" data-table-id="g9-1">
<caption>De más frecuente a más trombogénica</caption>
<thead><tr><th>Trombofilia</th><th>Frecuencia</th><th>Riesgo relativo</th></tr></thead>
<tbody>
<tr><td>Factor V Leiden (resistencia a proteína C activada)</td><td>La más frecuente</td><td>Moderado (alto en homocigosis)</td></tr>
<tr><td>Mutación de la protrombina G20210A</td><td>Frecuente</td><td>Moderado</td></tr>
<tr><td>Déficit de proteína C</td><td>Raro</td><td>Alto</td></tr>
<tr><td>Déficit de proteína S</td><td>Raro</td><td>Alto</td></tr>
<tr><td>Déficit de antitrombina</td><td>El más raro</td><td><strong>El más alto</strong></td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Síndrome antifosfolípido</h3>
<ul>
<li>Trombosis (venosa o arterial) o morbilidad obstétrica + anticuerpos persistentes a las 12 semanas.</li>
<li>Tres anticuerpos: <strong>anticoagulante lúpico</strong>, anticardiolipina y anti-β2-glicoproteína I.</li>
<li>El <strong>triple positivo</strong> es el de mayor riesgo y obliga a antivitamina K: los ACOD han demostrado ser inferiores.</li>
</ul>

<h3>Cuándo (y cuándo no) pedir estudio de trombofilia</h3>
<div class="callout warn"><span class="tag">CUIDADO</span> Pedirlo de rutina tras un primer episodio provocado <strong>no aporta nada</strong> y genera ansiedad y anticoagulaciones innecesarias. Además, muchos parámetros se alteran en fase aguda o con el propio tratamiento.</div>
<ul>
<li><strong>Puede tener sentido:</strong> trombosis no provocada en menor de 50 años, historia familiar potente, localización atípica (senos venosos, esplácnica), trombosis recurrente sin causa, o sospecha de SAF.</li>
<li><strong>Cuándo extraer:</strong> nunca en el episodio agudo. Proteínas C y S y antitrombina se alteran con la trombosis aguda, la heparina y los cumarínicos; espera al menos 2-4 semanas tras suspender el anticoagulante.</li>
<li>El resultado rara vez cambia la duración de la anticoagulación: esa decisión se basa más en si el evento fue provocado o no y en el riesgo hemorrágico.</li>
</ul>
`;

const G10 = `
<p class="comment">// trombosis asociada a cáncer</p>
<div class="callout"><span class="tag">CONTEXTO</span> El cáncer es un estado protrombótico por sí mismo (factor tisular tumoral, inflamación, compresión vascular, catéteres, inmovilidad y quimioterapia). La enfermedad tromboembólica es la segunda causa de muerte en el paciente oncológico.</div>

<h3>Elección del anticoagulante</h3>
<ul>
<li><strong>HBPM:</strong> la opción clásica y aún preferida si hay riesgo alto de sangrado, mucositis o vómitos, o interacciones.</li>
<li><strong>ACOD</strong> (apixabán, edoxabán, rivaroxabán): igual o más eficaces, pero <strong>más sangrado digestivo</strong> en tumores gastrointestinales o genitourinarios no resecados.</li>
<li>Duración: mínimo 3-6 meses y mantener mientras el cáncer esté activo o siga el tratamiento.</li>
</ul>

<h3>El problema real: trombosis + trombopenia</h3>
<div class="table-wrap"><table class="itable" data-table-id="g10-1">
<caption>Orientación según plaquetas — individualizar siempre</caption>
<thead><tr><th>Plaquetas</th><th>Actitud</th></tr></thead>
<tbody>
<tr><td>&gt;50 × 10⁹/L</td><td>Dosis terapéutica completa</td></tr>
<tr><td>25-50 × 10⁹/L</td><td>Reducir a media dosis, o mantener dosis plena con soporte transfusional si la trombosis es reciente y de alto riesgo</td></tr>
<tr><td>&lt;25 × 10⁹/L</td><td>Suspender temporalmente. Si el evento es muy reciente y proximal, valorar filtro de vena cava retirable</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Trombosis asociada a catéter</h3>
<ul>
<li>Anticoagular al menos 3 meses.</li>
<li><strong>No es obligatorio retirar el catéter</strong> si funciona, sigue siendo necesario y no hay infección: se mantiene con anticoagulación.</li>
<li>Si se retira, mantener la anticoagulación un mínimo de 3 meses igualmente.</li>
</ul>

<div class="callout warn"><span class="tag">TROMBOPROFILAXIS</span> Los pacientes hospitalizados con neoplasia activa deben llevar profilaxis salvo contraindicación. En el mieloma con inmunomoduladores (talidomida, lenalidomida) más dexametasona el riesgo es especialmente alto y requiere profilaxis específica según el número de factores de riesgo.</div>
`;
