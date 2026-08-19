// =============================================================
// INFECCIOSAS — árbol de secciones + contenido médico
// =============================================================
const INFECCIOSAS_TREE = {
  title:'INFECCIOSAS',
  intro:true,
  children: [
    {id:'infec-obj', title:'Objetivos de la rotación', leaf:true, content:()=>I_OBJ},
    {id:'i1', title:'1. Espectro antibiótico (interactivo)', leaf:true, content:()=>I1},
    {id:'i2', title:'2. Dianas y familias de antibióticos', leaf:true, content:()=>I2},
    {id:'i3', title:'3. Principios de antibioterapia', leaf:true, content:()=>I3},
    {id:'i4', title:'4. Neutropenia febril', leaf:true, hem:true, content:()=>I4},
    {id:'i5', title:'5. Profilaxis en el paciente hematológico', leaf:true, hem:true, content:()=>I5},
    {id:'i6', title:'6. Infección fúngica invasora', leaf:true, hem:true, content:()=>I6},
    {id:'i7', title:'7. Reactivaciones virales y antivirales', leaf:true, hem:true, content:()=>I7},
    {id:'i8', title:'8. Bacteriemia asociada a catéter', leaf:true, hem:true, content:()=>I8},
    {id:'i9', title:'9. Sepsis y shock séptico', leaf:true, content:()=>I9},
  ]
};

/* =========================================================
   DATOS DEL WIDGET — matriz de espectro antibiótico
   ========================================================= */
registerWidgetData('ABX_SPECTRUM', {
  caption:'Antibiótico / microorganismo',
  hint:'Pulsa un antibiótico (izquierda) o un microorganismo (arriba) para verlo destacado.',
  colTitle:'Ver con qué se trata ',
  legend:{2:'Cubre', 1:'Variable o solo con sinergia', 0:'No cubre'},
  cols:[
    {k:'efaecalis', label:'E. faecalis',   group:'Gram +'},
    {k:'efaecium',  label:'E. faecium',    group:'Gram +'},
    {k:'sams',      label:'SAMS',          group:'Gram +', note:'S. aureus sensible a meticilina.'},
    {k:'samr',      label:'SAMR',          group:'Gram +', note:'S. aureus resistente a meticilina: ningún betalactámico clásico sirve, salvo ceftarolina.'},
    {k:'spneumo',   label:'S. pneumoniae', group:'Gram +'},
    {k:'strep',     label:'Strep. spp.',   group:'Gram +'},
    {k:'listeria',  label:'Listeria',      group:'Gram +', note:'Cefalosporinas NO cubren Listeria: por eso se añade ampicilina en la meningitis del inmunodeprimido y del mayor de 50 años.'},
    {k:'ecoli',     label:'E. coli',       group:'Gram −'},
    {k:'klebsi',    label:'Klebsiella',    group:'Gram −'},
    {k:'proteus',   label:'Proteus',       group:'Gram −'},
    {k:'escapm',    label:'ESCAPM',        group:'Gram −', note:'Enterobacter, Serratia, Citrobacter, Providencia, Morganella: betalactamasa AmpC inducible — evita cefalosporinas de 3ª aunque el antibiograma sea sensible.'},
    {k:'pseudo',    label:'P. aeruginosa', group:'Gram −'},
    {k:'bfragilis', label:'B. fragilis',   group:'Anaerobios'},
    {k:'cdiff',     label:'C. difficile',  group:'Anaerobios'},
    {k:'atipicos',  label:'Atípicos',      group:'Otros', note:'Legionella, Mycoplasma, Chlamydia: sin pared celular, los betalactámicos no sirven.'}
  ],
  rows:[
    {k:'penig', label:'Penicilina G', family:'Penicilinas',
     note:'De elección en sífilis y en estreptococo del grupo A. La penicilinasa estafilocócica la inactiva.',
     cov:{efaecalis:1, spneumo:1, strep:2, listeria:1}},
    {k:'amoxi', label:'Amoxicilina / Ampicilina', family:'Aminopenicilinas',
     note:'Cubren enterococo y Listeria, que las cefalosporinas no. Muchas E. coli comunitarias ya son resistentes.',
     cov:{efaecalis:2, spneumo:2, strep:2, listeria:2, ecoli:1, proteus:1}},
    {k:'amoxiclav', label:'Amoxicilina / clavulánico', family:'+ inhibidor de betalactamasa',
     note:'El clavulánico recupera SAMS, anaerobios y buena parte de las enterobacterias. Sin actividad frente a Pseudomonas.',
     cov:{efaecalis:2, sams:2, spneumo:2, strep:2, listeria:2, ecoli:2, klebsi:2, proteus:2, bfragilis:2}},
    {k:'cloxa', label:'Cloxacilina', family:'Penicilina antiestafilocócica',
     note:'De elección en bacteriemia y endocarditis por SAMS: mejor que la vancomicina en cepas sensibles.',
     cov:{sams:2, strep:1}},
    {k:'pipetazo', label:'Piperacilina / tazobactam', family:'Penicilina antipseudomónica',
     note:'Caballo de batalla en la neutropenia febril: cubre Pseudomonas, enterobacterias, anaerobios y Gram+ salvo SAMR.',
     cov:{efaecalis:2, sams:2, spneumo:2, strep:2, listeria:1, ecoli:2, klebsi:2, proteus:2, escapm:1, pseudo:2, bfragilis:2}},
    {k:'cefazo', label:'Cefazolina', family:'Cefalosporina 1ª G',
     note:'Profilaxis quirúrgica y alternativa en SAMS. No cubre enterococo ni anaerobios.',
     cov:{sams:2, spneumo:2, strep:2, ecoli:1, klebsi:1, proteus:1}},
    {k:'ceftriax', label:'Ceftriaxona / cefotaxima', family:'Cefalosporina 3ª G',
     note:'Pilar de la neumonía comunitaria y la meningitis. Ojo: NO cubre enterococo, Listeria ni Pseudomonas.',
     cov:{sams:1, spneumo:2, strep:2, ecoli:2, klebsi:2, proteus:2, escapm:1}},
    {k:'ceftazi', label:'Ceftazidima', family:'Cefalosporina 3ª G antipseudomónica',
     note:'Gana Pseudomonas pero pierde casi toda la cobertura Gram+. Rara vez se usa sola.',
     cov:{spneumo:1, strep:1, ecoli:2, klebsi:2, proteus:2, escapm:1, pseudo:2}},
    {k:'cefepime', label:'Cefepime', family:'Cefalosporina 4ª G',
     note:'Recupera Gram+ manteniendo Pseudomonas y es estable frente a AmpC. Alternativa a piperacilina-tazobactam en neutropenia febril.',
     cov:{sams:1, spneumo:2, strep:2, ecoli:2, klebsi:2, proteus:2, escapm:2, pseudo:2}},
    {k:'ceftaro', label:'Ceftarolina', family:'Cefalosporina 5ª G',
     note:'El único betalactámico con actividad frente a SAMR.',
     cov:{efaecalis:1, sams:2, samr:2, spneumo:2, strep:2, ecoli:1, klebsi:1}},
    {k:'merope', label:'Meropenem / imipenem', family:'Carbapenémicos',
     note:'Espectro más amplio disponible. Reservar para BLEE, sepsis grave o fracaso previo: su uso indiscriminado selecciona resistencias.',
     cov:{efaecalis:1, sams:2, spneumo:2, strep:2, listeria:2, ecoli:2, klebsi:2, proteus:2, escapm:2, pseudo:2, bfragilis:2}},
    {k:'ertape', label:'Ertapenem', family:'Carbapenémico',
     note:'Carbapenémico SIN cobertura de Pseudomonas ni Acinetobacter. Cómodo (una dosis al día) para BLEE sin sospecha de Pseudomonas.',
     cov:{sams:2, spneumo:2, strep:2, ecoli:2, klebsi:2, proteus:2, escapm:2, bfragilis:2}},
    {k:'aztreo', label:'Aztreonam', family:'Monobactámico',
     note:'Solo Gram− aerobios. Su valor: no hay reactividad cruzada con la penicilina, así que sirve en alergia grave a betalactámicos.',
     cov:{ecoli:2, klebsi:2, proteus:2, escapm:1, pseudo:2}},
    {k:'azitro', label:'Azitromicina / claritromicina', family:'Macrólidos',
     note:'Cobertura de atípicos. En la neumonía grave se asocian a la cefalosporina. Prolongan el QT.',
     cov:{spneumo:1, strep:1, atipicos:2}},
    {k:'cipro', label:'Ciprofloxacino', family:'Quinolona',
     note:'La quinolona más antipseudomónica, pero con poca cobertura de neumococo: mala elección en neumonía comunitaria.',
     cov:{sams:1, spneumo:1, strep:1, ecoli:2, klebsi:2, proteus:2, escapm:2, pseudo:2, atipicos:2}},
    {k:'levo', label:'Levofloxacino', family:'Quinolona respiratoria',
     note:'Cubre neumococo y atípicos con una sola pastilla: útil en neumonía comunitaria y en alergia a betalactámicos.',
     cov:{sams:1, spneumo:2, strep:2, ecoli:2, klebsi:2, proteus:2, escapm:2, pseudo:1, atipicos:2}},
    {k:'moxi', label:'Moxifloxacino', family:'Quinolona respiratoria',
     note:'Añade anaerobios pero pierde Pseudomonas y no se elimina por orina: no sirve para ITU.',
     cov:{sams:1, spneumo:2, strep:2, ecoli:1, klebsi:1, bfragilis:1, atipicos:2}},
    {k:'genta', label:'Gentamicina / tobramicina / amikacina', family:'Aminoglucósidos',
     note:'Nefro y ototóxicos, inactivos en medio ácido (abscesos) y en pulmón. En Gram+ solo valen como sinergia.',
     cov:{efaecalis:1, ecoli:2, klebsi:2, proteus:2, escapm:2, pseudo:2}},
    {k:'doxi', label:'Doxiciclina', family:'Tetraciclina',
     note:'Atípicos, Rickettsia, Borrelia, Brucella y Coxiella. Alternativa oral en infección de piel por SAMR comunitario.',
     cov:{sams:1, samr:1, spneumo:1, strep:1, atipicos:2}},
    {k:'tigeci', label:'Tigeciclina', family:'Glicilciclina',
     note:'Espectro muy amplio incluido SAMR y BLEE, pero NO cubre Pseudomonas ni Proteus y alcanza concentraciones séricas bajas: evitar en bacteriemia.',
     cov:{efaecalis:2, efaecium:2, sams:2, samr:2, spneumo:2, strep:2, ecoli:2, klebsi:2, escapm:2, bfragilis:2, atipicos:1}},
    {k:'vanco', label:'Vancomicina', family:'Glucopéptido',
     note:'Referencia frente a SAMR. Por vía oral NO se absorbe: por eso sirve para C. difficile, y solo para eso.',
     cov:{efaecalis:2, efaecium:1, sams:2, samr:2, spneumo:2, strep:2, listeria:1, cdiff:2}},
    {k:'linez', label:'Linezolid', family:'Oxazolidinona',
     note:'Excelente penetración pulmonar y en SNC, y biodisponibilidad oral completa. Mielotoxicidad si se prolonga más de 2 semanas: ojo en hematología.',
     cov:{efaecalis:2, efaecium:2, sams:2, samr:2, spneumo:2, strep:2, listeria:1}},
    {k:'dapto', label:'Daptomicina', family:'Lipopéptido',
     note:'Potente en bacteriemia y endocarditis derecha por SAMR. NUNCA en neumonía: el surfactante pulmonar lo inactiva. Vigilar CPK.',
     cov:{efaecalis:2, efaecium:2, sams:2, samr:2, spneumo:2, strep:2}},
    {k:'clinda', label:'Clindamicina', family:'Lincosamida',
     note:'Inhibe la producción de toxinas: útil en fascitis necrosante y shock tóxico. Es el antibiótico que más se asocia a colitis por C. difficile.',
     cov:{sams:2, samr:1, spneumo:1, strep:2, bfragilis:1}},
    {k:'metro', label:'Metronidazol', family:'Nitroimidazol',
     note:'Anaerobios estrictos y protozoos. Efecto antabús con el alcohol.',
     cov:{bfragilis:2, cdiff:2}},
    {k:'cotri', label:'Cotrimoxazol', family:'Antimetabolito',
     note:'Además del espectro bacteriano: Pneumocystis, Nocardia y Stenotrophomonas. Es el pilar de la profilaxis en el inmunodeprimido.',
     cov:{sams:2, samr:2, spneumo:1, ecoli:2, klebsi:1, proteus:1, escapm:1}},
    {k:'fosfo', label:'Fosfomicina', family:'Fosfónico',
     note:'Dosis única oral en la cistitis no complicada. Por vía IV se usa en combinación para infecciones graves.',
     cov:{efaecalis:1, sams:1, ecoli:2, klebsi:1}},
    {k:'fidaxo', label:'Fidaxomicina', family:'Macrocíclico',
     note:'Solo C. difficile. Menos recurrencias que la vancomicina oral porque respeta más la microbiota.',
     cov:{cdiff:2}},
    {k:'colis', label:'Colistina', family:'Polimixina',
     note:'Rescate en Gram− multirresistentes. Nefrotóxica. Proteus y Serratia son resistentes de forma intrínseca.',
     cov:{ecoli:2, klebsi:2, escapm:1, pseudo:2}},
    {k:'rifam', label:'Rifampicina', family:'Varios',
     note:'Penetra en biopelículas: clave en infección de prótesis y material. NUNCA en monoterapia — genera resistencia rapidísimo.',
     cov:{sams:2, samr:2, spneumo:1}}
  ]
});

/* =========================================================
   DATOS DEL WIDGET — antifúngicos
   ========================================================= */
registerWidgetData('ANTIFUNGICOS', {
  items:[
    {k:'fluco', label:'Fluconazol', tag:'Azol', html:
      '<h4>Fluconazol</h4>' +
      '<div class="pk-key"><span><b>Cubre:</b> Candida albicans y no-albicans sensibles, Cryptococcus</span>' +
      '<span><b>NO cubre:</b> Aspergillus, mucorales, C. krusei</span></div>' +
      '<ul>' +
      '<li>Excelente biodisponibilidad oral y paso a orina y SNC.</li>' +
      '<li><b>C. krusei</b> resistente intrínseca; <b>C. glabrata</b> con sensibilidad dosis-dependiente.</li>' +
      '<li>Usos: candidiasis mucosa, candidemia por cepa sensible ya estabilizada, profilaxis en algunos protocolos.</li>' +
      '</ul>'},
    {k:'vori', label:'Voriconazol', tag:'Azol', html:
      '<h4>Voriconazol</h4>' +
      '<div class="pk-key"><span><b>Cubre:</b> Aspergillus, Candida, Scedosporium, Fusarium</span>' +
      '<span><b>NO cubre:</b> Mucorales</span></div>' +
      '<ul>' +
      '<li><b>De elección en la aspergilosis invasora.</b></li>' +
      '<li>Efectos típicos: alteraciones visuales (fotopsias) al inicio, hepatotoxicidad, fototoxicidad cutánea, alucinaciones.</li>' +
      '<li>Metabolismo por CYP: <b>dispara los niveles de tacrolimus y ciclosporina</b> y prolonga el QT. Requiere monitorizar niveles.</li>' +
      '</ul>'},
    {k:'posa', label:'Posaconazol / isavuconazol', tag:'Azol', html:
      '<h4>Posaconazol · Isavuconazol</h4>' +
      '<div class="pk-key"><span><b>Cubre:</b> Aspergillus, Candida y <b>mucorales</b></span></div>' +
      '<ul>' +
      '<li><b>Posaconazol:</b> profilaxis de elección en LMA con neutropenia prolongada y en EICH con inmunosupresión intensa.</li>' +
      '<li><b>Isavuconazol:</b> alternativa en aspergilosis y mucormicosis; menos interacciones y <b>acorta</b> el QT en lugar de alargarlo.</li>' +
      '<li>La absorción del posaconazol en suspensión mejora con comida grasa; la formulación en comprimidos es más fiable.</li>' +
      '</ul>'},
    {k:'caspo', label:'Equinocandinas', tag:'Caspofungina · anidulafungina', html:
      '<h4>Equinocandinas</h4>' +
      '<div class="pk-key"><span><b>Cubre:</b> todas las Candida (incluida krusei y glabrata)</span>' +
      '<span><b>NO cubre:</b> Cryptococcus, mucorales</span></div>' +
      '<ul>' +
      '<li><b>Tratamiento empírico de elección en la candidemia</b> del paciente inestable o con exposición previa a azoles.</li>' +
      '<li>Muy bien toleradas y con pocas interacciones: ventaja enorme frente a los azoles en hematología.</li>' +
      '<li>Penetran mal en orina, ojo y SNC: no valen para candiduria ni endoftalmitis ni meningitis.</li>' +
      '</ul>'},
    {k:'anfo', label:'Anfotericina B liposomal', tag:'Polieno', html:
      '<h4>Anfotericina B liposomal</h4>' +
      '<div class="pk-key"><span><b>Cubre:</b> el espectro más amplio, incluidos <b>mucorales</b></span></div>' +
      '<ul>' +
      '<li>De elección en <b>mucormicosis</b> (junto al desbridamiento quirúrgico) y en criptococosis grave.</li>' +
      '<li>Toxicidad: nefrotoxicidad, hipopotasemia e hipomagnesemia, reacciones infusionales con escalofríos.</li>' +
      '<li>La formulación liposomal es bastante menos nefrotóxica que la clásica, pero sigue exigiendo vigilar función renal e iones.</li>' +
      '</ul>'}
  ]
});

/* =========================================================
   CONTENIDO
   ========================================================= */

const I_OBJ = `
<p class="comment">// enfermedades infecciosas — enfoque para el residente de hematología</p>
<div class="callout"><span class="tag">OBJETIVO</span> Saber elegir un antibiótico empírico razonado, reconocer la neutropenia febril como urgencia, manejar la profilaxis del inmunodeprimido y sospechar a tiempo la infección fúngica invasora y las reactivaciones virales.</div>
<h3>Índice de contenidos</h3>
<ol>
<li>Espectro antibiótico: matriz interactiva fármaco ↔ microorganismo</li>
<li>Dianas y familias de antibióticos</li>
<li>Principios de antibioterapia: empírica, dirigida, desescalada</li>
<li>Neutropenia febril</li>
<li>Profilaxis en el paciente hematológico</li>
<li>Infección fúngica invasora</li>
<li>Reactivaciones virales y antivirales</li>
<li>Bacteriemia asociada a catéter</li>
<li>Sepsis y shock séptico</li>
</ol>
<div class="callout warn"><span class="tag">IDEA CLAVE</span> En hematología casi ningún antibiótico se elige por el germen que ya conoces, sino por el que te puede matar al paciente en las próximas horas. Primero cubres, luego afinas.</div>
`;

const I1 = `
<p class="comment">// espectro antibiótico — matriz interactiva</p>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa un <strong>antibiótico</strong> en la columna izquierda para ver todo lo que cubre, o un <strong>microorganismo</strong> en la cabecera para ver con qué se trata. El buscador filtra por fármaco o por familia.</div>

<div data-widget="matrix" data-src="ABX_SPECTRUM"></div>

<h3>Los agujeros que hay que memorizar</h3>
<div class="table-wrap"><table class="itable" data-table-id="i1-1">
<caption>Fallos de cobertura que más se preguntan y más se olvidan</caption>
<thead><tr><th>Antibiótico</th><th>El agujero</th><th>Consecuencia práctica</th></tr></thead>
<tbody>
<tr><td>Cefalosporinas (todas)</td><td>Enterococo y Listeria</td><td>En meningitis del inmunodeprimido o &gt;50 años hay que añadir ampicilina</td></tr>
<tr><td>Ceftriaxona</td><td>Pseudomonas</td><td>No sirve como empírico en neutropenia febril</td></tr>
<tr><td>Ertapenem</td><td>Pseudomonas y Acinetobacter</td><td>Es el carbapenémico que NO vale en el neutropénico</td></tr>
<tr><td>Daptomicina</td><td>Pulmón (surfactante la inactiva)</td><td>Jamás en neumonía, aunque el germen sea sensible</td></tr>
<tr><td>Ciprofloxacino</td><td>Neumococo</td><td>Mala elección en neumonía comunitaria</td></tr>
<tr><td>Moxifloxacino</td><td>Pseudomonas y vía urinaria</td><td>No vale para ITU ni para el neutropénico</td></tr>
<tr><td>Tigeciclina</td><td>Pseudomonas, Proteus y concentración sérica</td><td>Evitar en bacteriemia</td></tr>
<tr><td>Aminoglucósidos</td><td>Pulmón, abscesos y medio ácido</td><td>Nunca en monoterapia en infección grave</td></tr>
<tr><td>Vancomicina oral</td><td>Todo salvo la luz intestinal (no se absorbe)</td><td>Solo sirve para C. difficile</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">HEMATO</span> El linezolid es tentador por su cobertura y su vía oral, pero es <strong>mielotóxico</strong>: en un paciente que ya está citopénico por quimioterapia puede enmascarar o agravar la recuperación medular. Si prevés más de 10-14 días, replantéalo.</div>
`;

const I2 = `
<p class="comment">// dianas de los antibióticos sobre la bacteria</p>
<div class="diagram-wrap">
<div class="diagram-caption">// diagrama interactivo — pulsa una diana para ver qué familias actúan ahí</div>
<svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg">
  <!-- cuerpo bacteriano -->
  <ellipse cx="310" cy="170" rx="215" ry="125" fill="none" stroke="var(--border)" stroke-width="2"/>
  <ellipse cx="310" cy="170" rx="200" ry="112" fill="none" stroke="var(--border)" stroke-width="1.4" opacity=".65"/>

  <!-- pared celular -->
  <ellipse class="hit" data-title="Pared celular (peptidoglicano)" data-desc="Betalactámicos (penicilinas, cefalosporinas, carbapenémicos, aztreonam), glucopéptidos (vancomicina, teicoplanina) y fosfomicina. Bloquean la síntesis del peptidoglicano y la bacteria se lisa. Por eso NO sirven frente a los atípicos, que carecen de pared."
    cx="310" cy="170" rx="215" ry="125" fill="var(--accent)" opacity="0.07" onclick="highlightPart(this)"/>
  <text x="310" y="24" fill="var(--accent)" font-size="12" text-anchor="middle" font-family="var(--mono)">PARED CELULAR</text>

  <!-- membrana -->
  <ellipse class="hit" data-title="Membrana externa" data-desc="Polimixinas (colistina) y lipopéptidos (daptomicina). Desestructuran la membrana y provocan la muerte celular. La daptomicina queda inactivada por el surfactante pulmonar: nunca en neumonía."
    cx="310" cy="170" rx="200" ry="112" fill="var(--accent3)" opacity="0.07" onclick="highlightPart(this)"/>
  <text x="310" y="316" fill="var(--accent3)" font-size="12" text-anchor="middle" font-family="var(--mono)">MEMBRANA EXTERNA</text>

  <!-- ribosoma 50S -->
  <g class="hit" data-title="Ribosoma · subunidad 50S" data-desc="Macrólidos (azitromicina, claritromicina), lincosamidas (clindamicina), oxazolidinonas (linezolid) y cloranfenicol. Inhiben la síntesis proteica actuando sobre el ARN 23S." onclick="highlightPart(this)">
    <ellipse cx="205" cy="140" rx="52" ry="30" fill="var(--accent2)" opacity="0.16"/>
    <ellipse cx="205" cy="140" rx="52" ry="30" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
  </g>
  <text x="205" y="145" fill="var(--accent2)" font-size="12" text-anchor="middle" font-family="var(--mono)">50S</text>

  <!-- ribosoma 30S -->
  <g class="hit" data-title="Ribosoma · subunidad 30S" data-desc="Aminoglucósidos (gentamicina, amikacina, tobramicina) y tetraciclinas (doxiciclina, tigeciclina). Actúan sobre el ARN 16S. Los aminoglucósidos son bactericidas; las tetraciclinas, bacteriostáticas." onclick="highlightPart(this)">
    <ellipse cx="205" cy="205" rx="52" ry="28" fill="var(--yellow)" opacity="0.16"/>
    <ellipse cx="205" cy="205" rx="52" ry="28" fill="none" stroke="var(--yellow)" stroke-width="1.5"/>
  </g>
  <text x="205" y="210" fill="var(--yellow)" font-size="12" text-anchor="middle" font-family="var(--mono)">30S</text>

  <!-- ADN -->
  <g class="hit" data-title="ADN · girasa y topoisomerasa IV" data-desc="Quinolonas (ciprofloxacino, levofloxacino, moxifloxacino) impiden el superenrollamiento del ADN. El metronidazol daña directamente el ADN en anaerobios. La rifampicina bloquea la ARN-polimerasa: nunca en monoterapia." onclick="highlightPart(this)">
    <path d="M370,120 C400,140 400,160 370,180 C340,200 340,220 370,240" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".8"/>
    <path d="M410,120 C380,140 380,160 410,180 C440,200 440,220 410,240" fill="none" stroke="var(--accent)" stroke-width="2.5" opacity=".8"/>
    <rect x="352" y="112" width="76" height="136" fill="var(--accent)" opacity="0.08"/>
  </g>
  <text x="390" y="268" fill="var(--accent)" font-size="12" text-anchor="middle" font-family="var(--mono)">ADN</text>

  <!-- folato -->
  <g class="hit" data-title="Vía del folato" data-desc="Cotrimoxazol (trimetoprim + sulfametoxazol) bloquea dos pasos consecutivos de la síntesis de folato. Además de bacterias cubre Pneumocystis, Nocardia y Stenotrophomonas: por eso es el pilar de la profilaxis del inmunodeprimido." onclick="highlightPart(this)">
    <circle cx="478" cy="180" r="30" fill="var(--accent3)" opacity="0.14"/>
    <circle cx="478" cy="180" r="30" fill="none" stroke="var(--accent3)" stroke-width="1.5"/>
  </g>
  <text x="478" y="184" fill="var(--accent3)" font-size="10.5" text-anchor="middle" font-family="var(--mono)">FOLATO</text>
</svg>
<div class="diagram-info">Selecciona una diana del dibujo para ver qué familias de antibióticos actúan sobre ella.</div>
</div>

<h3>Bactericida o bacteriostático</h3>
<div class="table-wrap"><table class="itable" data-table-id="i2-1">
<caption>Clasificación práctica</caption>
<thead><tr><th>Bactericidas</th><th>Bacteriostáticos</th></tr></thead>
<tbody>
<tr><td>Betalactámicos</td><td>Macrólidos</td></tr>
<tr><td>Glucopéptidos</td><td>Tetraciclinas</td></tr>
<tr><td>Aminoglucósidos</td><td>Clindamicina</td></tr>
<tr><td>Quinolonas</td><td>Linezolid</td></tr>
<tr><td>Metronidazol · daptomicina</td><td>Cotrimoxazol</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>
<p>Importa de verdad en tres situaciones: <strong>endocarditis, meningitis y neutropenia profunda</strong>, donde el paciente no aporta defensas propias y necesitas matar la bacteria, no solo frenarla.</p>
`;

const I3 = `
<p class="comment">// principios de antibioterapia</p>
<h3>Las cinco preguntas antes de prescribir</h3>
<ol>
<li><strong>¿Hay infección de verdad?</strong> Fiebre no es sinónimo de infección: fármacos, transfusión, progresión tumoral y trombosis también dan fiebre.</li>
<li><strong>¿Qué foco?</strong> Determina el espectro y la duración más que ninguna otra cosa.</li>
<li><strong>¿Qué gérmenes son probables?</strong> Según foco, comunitario u hospitalario, colonizaciones y antibióticos previos.</li>
<li><strong>¿Qué riesgo tiene este paciente?</strong> Neutropenia, catéter, prótesis, mucositis, inmunosupresión.</li>
<li><strong>¿Puedo tomar cultivos antes?</strong> Sí, salvo que retrase el tratamiento en un paciente inestable.</li>
</ol>

<h3>PK/PD: cómo se dosifica cada familia</h3>
<div class="table-wrap"><table class="itable" data-table-id="i3-1">
<caption>Parámetro que predice la eficacia</caption>
<thead><tr><th>Familia</th><th>Depende de</th><th>Cómo se optimiza</th></tr></thead>
<tbody>
<tr><td>Betalactámicos</td><td>Tiempo sobre la CMI</td><td>Dosis más frecuentes o <strong>perfusión extendida/continua</strong> (piperacilina-tazobactam, meropenem en sepsis)</td></tr>
<tr><td>Aminoglucósidos</td><td>Pico / CMI</td><td>Dosis única diaria alta: más eficacia y menos nefrotoxicidad</td></tr>
<tr><td>Quinolonas</td><td>AUC / CMI</td><td>Dosis alta bien espaciada</td></tr>
<tr><td>Vancomicina</td><td>AUC / CMI (objetivo 400-600)</td><td>Monitorizar niveles; valle 15-20 en infección grave</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Desescalada</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// herramienta interactiva — ¿qué hago a las 48-72 horas?</div>
<div class="fa-step" data-step="start">
  <p><strong>Han pasado 48-72 h desde el inicio del antibiótico empírico. ¿Tienes microbiología?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'cultivo-pos')">Sí, cultivo positivo</button>
  <button class="flow-btn" onclick="faGoTo(this,'cultivo-neg')">Cultivos negativos</button>
</div>
<div class="fa-step" data-step="cultivo-pos" hidden>
  <p><strong>Cultivo positivo.</strong> ¿El paciente está mejorando?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-dirigido')">Sí, mejora</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-nomejora')">No mejora</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-dirigido" hidden>
  <div class="callout"><span class="tag">DESESCALA</span> Pasa al antibiótico de espectro más estrecho que cubra el germen aislado. Ajusta la duración al foco. Si hay opción oral con buena biodisponibilidad y el paciente tolera, cambia de vía.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-nomejora" hidden>
  <div class="callout warn"><span class="tag">REVISA</span> Cuatro causas: foco no drenado (absceso, catéter, empiema), dosis insuficiente o mala penetración, germen no cubierto (hongo, virus, resistencia) o la fiebre no es infecciosa. Considera imagen y retirada de material.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="cultivo-neg" hidden>
  <p><strong>Cultivos negativos.</strong> ¿Cómo está el paciente?</p>
  <button class="flow-btn" onclick="faGoTo(this,'r-estable')">Estable y afebril</button>
  <button class="flow-btn" onclick="faGoTo(this,'r-inestable')">Persiste febril o inestable</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-estable" hidden>
  <div class="callout"><span class="tag">SIMPLIFICA</span> Reduce espectro (retira la cobertura de SAMR y la doble cobertura antipseudomónica si no hay nada que las justifique) y fija fecha de fin. En el neutropénico, la decisión de suspender depende además de la recuperación de neutrófilos.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="r-inestable" hidden>
  <div class="callout warn"><span class="tag">AMPLÍA Y BUSCA</span> Repite cultivos, valora TC de tórax y senos, galactomanano, y plantea antifúngico empírico si la neutropenia es prolongada. Revisa catéteres y focos ocultos (perianal, senos, piel).</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Alergia a betalactámicos</h3>
<ul>
<li>La mayoría de las "alergias" registradas no lo son: interroga qué pasó exactamente y cuándo.</li>
<li><strong>Reacción no grave y antigua</strong> → cefalosporina de cadena lateral distinta suele ser segura.</li>
<li><strong>Anafilaxia o reacción grave</strong> → evita todos los betalactámicos; alternativas: aztreonam (sin reactividad cruzada), quinolona, aminoglucósido, vancomicina/linezolid según espectro necesario.</li>
<li>Etiquetar mal a un paciente como alérgico empeora su pronóstico: recibirá antibióticos peores durante años.</li>
</ul>
`;

const I4 = `
<p class="comment">// neutropenia febril — la urgencia infecciosa de hematología</p>
<div class="callout warn"><span class="tag">RELOJ</span> Antibiótico de amplio espectro en la <strong>primera hora</strong> tras la extracción de hemocultivos. Cada hora de retraso en el neutropénico séptico aumenta la mortalidad.</div>

<h3>Definición</h3>
<ul>
<li><strong>Neutropenia:</strong> neutrófilos &lt;500/µL, o &lt;1000/µL con descenso previsto a &lt;500 en 48 h.</li>
<li><strong>Fiebre:</strong> una toma ≥38.3 ºC o ≥38 ºC mantenida durante ≥1 hora.</li>
<li>Ojo: el neutropénico puede estar séptico <em>sin</em> fiebre (corticoides, ancianos). Hipotensión o mal estado general obligan a actuar igual.</li>
</ul>

<h3>Herramienta de decisión</h3>
<div class="diagram-wrap">
<div class="diagram-caption">// guía rápida — no sustituye el protocolo de tu centro</div>
<div class="fa-step" data-step="start">
  <p><strong>Paciente neutropénico con fiebre. ¿Situación hemodinámica?</strong></p>
  <button class="flow-btn" onclick="faGoTo(this,'inestable')">Inestable / sepsis</button>
  <button class="flow-btn" onclick="faGoTo(this,'estable')">Estable</button>
</div>
<div class="fa-step" data-step="inestable" hidden>
  <div class="callout warn"><span class="tag">ALTO RIESGO</span> Meropenem (o piperacilina-tazobactam) + amikacina + vancomicina si sospecha de catéter o mucositis grave. Sueroterapia, lactato, UCI si procede. Valorar antifúngico precoz.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="estable" hidden>
  <p><strong>Estable.</strong> ¿Riesgo según MASCC y duración prevista de la neutropenia?</p>
  <button class="flow-btn" onclick="faGoTo(this,'alto')">Alto riesgo (MASCC &lt;21 o neutropenia &gt;7 días)</button>
  <button class="flow-btn" onclick="faGoTo(this,'bajo')">Bajo riesgo (MASCC ≥21, neutropenia corta)</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="alto" hidden>
  <p><strong>Alto riesgo → ingreso y monoterapia antipseudomónica IV.</strong> ¿Hay algún criterio para añadir cobertura de Gram+?</p>
  <button class="flow-btn" onclick="faGoTo(this,'gram-si')">Sí (catéter, mucositis grave, piel/partes blandas, SARM conocido, inestabilidad)</button>
  <button class="flow-btn" onclick="faGoTo(this,'gram-no')">No</button>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="gram-no" hidden>
  <div class="callout"><span class="tag">PAUTA</span> Piperacilina-tazobactam 4/0.5 g IV c/6-8 h, o cefepime 2 g IV c/8 h. Sin vancomicina: añadirla de rutina no mejora la supervivencia y selecciona resistencias.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="gram-si" hidden>
  <div class="callout"><span class="tag">PAUTA</span> Añade vancomicina (o daptomicina/linezolid según foco) al betalactámico antipseudomónico. <strong>Reevalúa a las 48-72 h y retírala si los cultivos no la justifican.</strong></div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
<div class="fa-step" data-step="bajo" hidden>
  <div class="callout"><span class="tag">AMBULATORIO</span> Ciprofloxacino + amoxicilina-clavulánico vía oral, con observación inicial y control estrecho en 24 h. No vale si llevaba profilaxis con quinolonas, si hay mucositis que impida la vía oral o si no hay soporte social.</div>
  <button class="flow-btn" onclick="faGoTo(this,'start')">↺ reiniciar</button>
</div>
</div>

<h3>Escala MASCC (riesgo bajo si ≥21)</h3>
<div class="table-wrap"><table class="itable" data-table-id="i4-1">
<caption>Puntuación MASCC</caption>
<thead><tr><th>Variable</th><th>Puntos</th></tr></thead>
<tbody>
<tr><td>Síntomas leves o ausentes</td><td>5</td></tr>
<tr><td>Síntomas moderados</td><td>3</td></tr>
<tr><td>Sin hipotensión (TAS ≥90)</td><td>5</td></tr>
<tr><td>Sin EPOC</td><td>4</td></tr>
<tr><td>Tumor sólido o hemopatía sin infección fúngica previa</td><td>4</td></tr>
<tr><td>Sin deshidratación que requiera fluidos IV</td><td>3</td></tr>
<tr><td>Paciente ambulatorio al inicio de la fiebre</td><td>3</td></tr>
<tr><td>Edad &lt;60 años</td><td>2</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<h3>Qué buscar en la exploración</h3>
<ul>
<li><strong>Piel y catéter:</strong> punto de entrada, tunelitis, celulitis. Ectima gangrenoso sugiere Pseudomonas.</li>
<li><strong>Boca:</strong> mucositis, candidiasis, herpes.</li>
<li><strong>Región perianal:</strong> inspeccionar sí, pero <strong>sin tacto rectal</strong> (riesgo de bacteriemia y sangrado).</li>
<li><strong>Pulmón, senos, abdomen y SNC.</strong></li>
<li>Recuerda: sin neutrófilos <strong>no hay pus ni infiltrado</strong>. Una radiografía normal no descarta neumonía; si hay clínica, pide TC.</li>
</ul>

<h3>Cuándo suspender</h3>
<ul>
<li>Foco documentado: completar el tratamiento que corresponda a ese foco.</li>
<li>Sin foco, paciente afebril ≥48 h y neutrófilos en recuperación (&gt;500): se puede suspender.</li>
<li>Sin foco pero neutropenia persistente: hay dos escuelas — mantener hasta la recuperación medular, o suspender si lleva ≥72 h afebril y estable. Sigue el protocolo de tu servicio.</li>
</ul>
`;

const I5 = `
<p class="comment">// profilaxis en el paciente hematológico</p>
<div class="table-wrap"><table class="itable" data-table-id="i5-1">
<caption>Profilaxis según el riesgo</caption>
<thead><tr><th>Diana</th><th>Fármaco</th><th>A quién</th></tr></thead>
<tbody>
<tr><td>Bacteriana</td><td>Levofloxacino</td><td>Neutropenia profunda y prolongada prevista (&gt;7 días): LMA, TPH. Controvertida por selección de resistencias</td></tr>
<tr><td>Pneumocystis jirovecii</td><td>Cotrimoxazol (alternativas: pentamidina inhalada, atovacuona, dapsona)</td><td>Corticoides prolongados, análogos de purinas, alemtuzumab, TPH, LLA</td></tr>
<tr><td>Fúngica (levaduras y hongos filamentosos)</td><td>Posaconazol</td><td>LMA/SMD en inducción, EICH con inmunosupresión intensa</td></tr>
<tr><td>Fúngica (levaduras)</td><td>Fluconazol</td><td>TPH sin riesgo alto de aspergilosis</td></tr>
<tr><td>Virus herpes (VHS/VVZ)</td><td>Aciclovir / valaciclovir</td><td>TPH, inducción de leucemia aguda, bortezomib, anti-CD38</td></tr>
<tr><td>Citomegalovirus</td><td>Letermovir</td><td>TPH alogénico con receptor CMV-positivo</td></tr>
<tr><td>Virus hepatitis B</td><td>Entecavir / tenofovir</td><td>Todo AgHBs+ y todo anti-HBc+ que reciba rituximab u otro anti-CD20</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">NO OLVIDAR</span> El cribado de <strong>VHB antes del rituximab</strong> es de los errores más graves y más frecuentes: una reactivación en un anti-HBc positivo no profilactado puede provocar una hepatitis fulminante. Pide AgHBs, anti-HBc y anti-HBs siempre.</div>

<h3>Interacciones que hay que anticipar</h3>
<ul>
<li><strong>Azoles + inhibidores de calcineurina:</strong> voriconazol y posaconazol disparan los niveles de tacrolimus y ciclosporina. Al iniciar el azol se reduce la dosis del inmunosupresor y se monitorizan niveles.</li>
<li><strong>Azoles + alcaloides de la vinca:</strong> aumentan la neurotoxicidad de la vincristina.</li>
<li><strong>Cotrimoxazol + metotrexato:</strong> mielotoxicidad aditiva.</li>
<li><strong>Fármacos que alargan el QT:</strong> azoles, quinolonas, macrólidos, ondansetrón y trióxido de arsénico se acumulan con facilidad en el mismo paciente.</li>
</ul>
`;

const I6 = `
<p class="comment">// infección fúngica invasora</p>
<h3>Cuándo sospecharla</h3>
<ul>
<li>Neutropenia prolongada (&gt;10 días) con <strong>fiebre persistente pese a antibiótico de amplio espectro</strong>.</li>
<li>Nódulos pulmonares en TC, sobre todo con <strong>signo del halo</strong> (aspergilosis precoz) o de la <strong>media luna</strong> (fase de recuperación).</li>
<li>Sinusitis con dolor facial, escara necrótica en paladar o cornete: sospecha mucormicosis, sobre todo en diabético o con sobrecarga férrica.</li>
<li>Candidemia: catéter, nutrición parenteral, cirugía abdominal, antibioterapia prolongada.</li>
</ul>

<h3>Antifúngicos</h3>
<div class="callout"><span class="tag">CÓMO USAR</span> Pulsa cada familia para ver qué cubre, qué no cubre y sus problemas prácticos.</div>
<div data-widget="picker" data-src="ANTIFUNGICOS"></div>

<h3>Pruebas diagnósticas</h3>
<div class="table-wrap"><table class="itable" data-table-id="i6-1">
<caption>Marcadores y su interpretación</caption>
<thead><tr><th>Prueba</th><th>Detecta</th><th>Falsos positivos</th></tr></thead>
<tbody>
<tr><td>Galactomanano (suero y lavado broncoalveolar)</td><td>Aspergillus</td><td>Piperacilina-tazobactam (menos con los lotes actuales), otros hongos, mucositis</td></tr>
<tr><td>Beta-D-glucano</td><td>Candida, Aspergillus, Pneumocystis (no mucorales ni Cryptococcus)</td><td>Hemodiálisis con ciertas membranas, inmunoglobulinas, gasas quirúrgicas</td></tr>
<tr><td>TC de tórax de alta resolución</td><td>Nódulos, halo, cavitación</td><td>—</td></tr>
<tr><td>Hemocultivo</td><td>Candida (buena rentabilidad), Aspergillus (casi nunca crece)</td><td>—</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">MUCORMICOSIS</span> Es una urgencia quirúrgica, no solo médica. Anfotericina B liposomal + <strong>desbridamiento precoz</strong> + corregir el factor de base (cetoacidosis, sobrecarga de hierro, retirar deferoxamina). El voriconazol NO la cubre: si un paciente en profilaxis con voriconazol desarrolla una fúngica, piensa en mucorales.</div>
`;

const I7 = `
<p class="comment">// reactivaciones virales y antivirales</p>
<div class="table-wrap"><table class="itable" data-table-id="i7-1">
<caption>Virus, clínica y tratamiento</caption>
<thead><tr><th>Virus</th><th>Cuándo y cómo se manifiesta</th><th>Tratamiento</th></tr></thead>
<tbody>
<tr><td>VHS</td><td>Mucositis herpética, a menudo confundida con la mucositis por quimioterapia</td><td>Aciclovir</td></tr>
<tr><td>VVZ</td><td>Herpes zóster, a veces diseminado o visceral</td><td>Aciclovir IV si diseminado; valaciclovir si localizado</td></tr>
<tr><td>CMV</td><td>Fiebre, citopenias, neumonitis, colitis, retinitis. Sobre todo en TPH alogénico y tras alemtuzumab</td><td>Valganciclovir/ganciclovir (mielotóxicos); foscarnet si citopenia grave o resistencia</td></tr>
<tr><td>VEB</td><td>Síndrome linfoproliferativo post-trasplante (PTLD)</td><td>Reducir inmunosupresión + rituximab</td></tr>
<tr><td>VHB</td><td>Reactivación tras rituximab o corticoides: puede ser fulminante</td><td>Prevención con entecavir/tenofovir. Cribar SIEMPRE antes</td></tr>
<tr><td>Virus respiratorios (gripe, VRS, SARS-CoV-2)</td><td>Progresión a vía baja mucho más frecuente que en inmunocompetentes</td><td>Antiviral específico precoz; aislamiento</td></tr>
<tr><td>Poliomavirus BK</td><td>Cistitis hemorrágica tras TPH</td><td>Soporte, hiperhidratación, reducir inmunosupresión</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout"><span class="tag">CMV</span> Estrategia habitual en TPH alogénico: <strong>vigilancia con PCR semanal y tratamiento anticipado</strong> (preemptive) al superar un umbral, en lugar de esperar a la enfermedad establecida. El letermovir como profilaxis ha reducido mucho las reactivaciones precoces.</div>
`;

const I8 = `
<p class="comment">// bacteriemia asociada a catéter</p>
<h3>Cuándo sospecharla</h3>
<ul>
<li>Fiebre sin otro foco en un portador de catéter venoso central, sobre todo si aparece al infundir por la vía.</li>
<li>Signos locales: eritema, supuración en el punto de entrada, tunelitis.</li>
<li><strong>Tiempo diferencial de positivización</strong>: el hemocultivo del catéter se positiviza ≥2 h antes que el periférico → apoya el origen en la vía.</li>
</ul>

<h3>¿Retirar el catéter o intentar salvarlo?</h3>
<div class="table-wrap"><table class="itable" data-table-id="i8-1">
<caption>Decisión según el germen y la situación</caption>
<thead><tr><th>Situación</th><th>Actitud</th></tr></thead>
<tbody>
<tr><td>S. aureus, Candida, Pseudomonas, micobacterias</td><td><strong>Retirada obligada</strong>. Nunca intentar sellado</td></tr>
<tr><td>Sepsis, inestabilidad, tunelitis o infección del bolsillo</td><td>Retirada obligada</td></tr>
<tr><td>Bacteriemia persistente &gt;72 h con tratamiento adecuado</td><td>Retirada</td></tr>
<tr><td>Endocarditis, tromboflebitis séptica o metástasis sépticas</td><td>Retirada + tratamiento prolongado</td></tr>
<tr><td>Estafilococo coagulasa negativo, paciente estable, catéter difícil de reponer</td><td>Se puede intentar mantener con sellado antibiótico + tratamiento sistémico</td></tr>
</tbody>
</table>
<div class="table-controls"><button onclick="addRow(this)">+ fila</button><button onclick="addCol(this)">+ columna</button><button onclick="delRow(this)">− fila</button><button onclick="delCol(this)">− columna</button></div>
</div>

<div class="callout warn"><span class="tag">S. AUREUS</span> Toda bacteriemia por S. aureus obliga a: retirar el catéter, hemocultivos de control a las 48-72 h, <strong>ecocardiograma</strong> (transesofágico si alta sospecha) y tratamiento mínimo de 14 días desde el primer hemocultivo negativo — más si hay complicaciones. Nunca la trates como una bacteriemia banal.</div>
`;

const I9 = `
<p class="comment">// sepsis y shock séptico</p>
<h3>Definiciones</h3>
<ul>
<li><strong>Sepsis:</strong> disfunción orgánica que amenaza la vida causada por una respuesta desregulada a la infección (aumento ≥2 puntos en el SOFA).</li>
<li><strong>Shock séptico:</strong> sepsis con necesidad de vasopresores para mantener TAM ≥65 mmHg <em>y</em> lactato &gt;2 mmol/L pese a la reposición de volumen adecuada.</li>
<li><strong>qSOFA</strong> (cribado rápido, 1 punto cada uno): TAS ≤100, frecuencia respiratoria ≥22, alteración del nivel de consciencia.</li>
</ul>

<h3>Primera hora</h3>
<ol>
<li>Lactato (y repetir si &gt;2).</li>
<li>Hemocultivos antes del antibiótico, si no lo retrasa.</li>
<li>Antibiótico de amplio espectro.</li>
<li>Cristaloides 30 mL/kg si hipotensión o lactato ≥4.</li>
<li>Vasopresores (noradrenalina de elección) si no responde, para TAM ≥65.</li>
</ol>

<h3>Control del foco</h3>
<p>El antibiótico no sustituye al drenaje. Absceso, empiema, colangitis, pielonefritis obstructiva, catéter infectado y tejido necrótico requieren intervención en las primeras horas.</p>

<div class="callout warn"><span class="tag">HEMATO</span> En el neutropénico la sepsis puede presentarse sin los signos clásicos: sin leucocitosis, sin infiltrado, sin pus. Fíjate en la taquipnea, la hipotensión leve y el lactato; y no esperes a la fiebre para actuar si el paciente está mal.</div>
`;
