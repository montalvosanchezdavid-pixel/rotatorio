// =============================================================
// CUBEQ SOUND — bips (Web Audio API) + voz (SpeechSynthesis)
// Expone window.CubeQSound. No depende de nada más.
// =============================================================
window.CubeQSound = (function(){
  var ctx = null;
  var enabled = false;
  var muted = false;
  var talking = false;
  var voices = [];
  var spanishVoice = null;

  function ensureCtx(){
    if(!ctx){
      var AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) return;
      ctx = new AC();
    }
    if(ctx.state === 'suspended') ctx.resume();
  }

  function loadVoices(){
    if(!window.speechSynthesis) return;
    voices = window.speechSynthesis.getVoices();
    var esVoices = voices.filter(function(v){ return /^es/i.test(v.lang); });
    // Prioriza voces "en la nube" (Edge expone voces neuronales tipo
    // "Microsoft Ximena Online (Natural)" que suenan mucho más humanas
    // que las clásicas de Windows locales tipo Helena/Pablo/Laura).
    spanishVoice =
      esVoices.find(function(v){ return /online|natural|neural/i.test(v.name); }) ||
      esVoices.find(function(v){ return !v.localService; }) ||
      esVoices[0] ||
      null;
  }
  if(window.speechSynthesis){
    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();
  }

  function unlock(){
    if(enabled) return;
    enabled = true;
    ensureCtx();
    loadVoices();
    document.dispatchEvent(new CustomEvent('cubeq-sound-unlocked'));
  }
  // Los navegadores exigen un gesto del usuario antes de reproducir audio.
  ['pointerdown','keydown','touchstart'].forEach(function(ev){
    window.addEventListener(ev, unlock, {once:true});
  });

  // ---------- Tonos sintéticos ----------
  function tone(freq, dur, opts){
    if(!enabled || muted || !ctx) return;
    opts = opts || {};
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = opts.type || 'sine';
    osc.frequency.value = freq;
    var peak = opts.gain != null ? opts.gain : 0.12;
    var now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(peak, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    if(opts.slideTo){
      osc.frequency.exponentialRampToValueAtTime(opts.slideTo, now + dur);
    }
    osc.start(now);
    osc.stop(now + dur + 0.03);
  }

  function sequence(notes){ // [[freq, dur, delayBeforeMs, opts]]
    var t = 0;
    notes.forEach(function(n){
      t += n[2] || 0;
      (function(freq,dur,opts,delay){
        setTimeout(function(){ tone(freq,dur,opts); }, delay);
      })(n[0], n[1], n[3], t);
    });
  }

  function blink(){ tone(1800, 0.05, {type:'sine', gain:0.025}); }

  var chimes = {
    neutral: function(){ tone(420,0.18,{type:'sine',gain:0.06}); },
    feliz: function(){ sequence([[520,.12,0],[660,.16,90]],{type:'sine',gain:0.08}); },
    sorprendido: function(){ tone(900,0.12,{type:'triangle',gain:0.09,slideTo:1300}); },
    'guiño': function(){ tone(700,0.08,{type:'square',gain:0.045}); },
    somnoliento: function(){ tone(260,0.4,{type:'sine',gain:0.045,slideTo:170}); },
    curioso: function(){ sequence([[500,.1,0,{type:'sine',gain:0.07}],[640,.1,80,{type:'sine',gain:0.07}],[760,.14,80,{type:'sine',gain:0.07}]]); },
    triste: function(){ tone(300,0.35,{type:'sine',gain:0.045,slideTo:210}); },
    risa: function(){ sequence([[500,.08,0,{type:'square',gain:0.05}],[560,.08,60,{type:'square',gain:0.05}],[620,.08,60,{type:'square',gain:0.05}],[700,.12,60,{type:'square',gain:0.05}]]); },
    pensativo: function(){ tone(380,0.25,{type:'sine',gain:0.05}); },
    mareado: function(){ sequence([[500,.08,0,{type:'sine',gain:0.06}],[420,.08,60,{type:'sine',gain:0.06}],[500,.08,60,{type:'sine',gain:0.06}],[420,.08,60,{type:'sine',gain:0.06}]]); },
    amor: function(){ sequence([[600,.12,0,{type:'sine',gain:0.08}],[760,.18,110,{type:'sine',gain:0.08}]]); }
  };

  function playExpression(name){
    if(chimes[name]) chimes[name]();
  }

  function playParty(){
    sequence([[520,.09,0,{type:'square',gain:0.08}],[620,.09,80,{type:'square',gain:0.08}],[740,.09,80,{type:'square',gain:0.08}],[880,.14,80,{type:'square',gain:0.08}]]);
  }
  function playPartyBeat(){
    tone(650 + Math.random()*450, 0.06, {type:'square', gain:0.05});
  }
  function playAngry(){
    tone(150, 0.5, {type:'sawtooth', gain:0.11, slideTo:90});
  }
  function playAngryPulse(){
    tone(110, 0.14, {type:'sawtooth', gain:0.07});
  }

  // ---------- Voz ----------
  var phrases = {
    neutral:['Aquí estoy.','Todo en orden.','Listo.'],
    feliz:['¡Qué buen día!','Me siento genial.','Todo va bien.'],
    sorprendido:['¡Oh!','¡Vaya sorpresa!','¿En serio?'],
    'guiño':['Sé algo que tú no sabes.','Guiño, guiño.'],
    somnoliento:['Tengo sueño...','Necesito una siesta.'],
    curioso:['Interesante...','¿Qué es eso?'],
    triste:['Ha sido un día raro.','Necesito un abrazo.'],
    risa:['Jaja, buenísimo.','No puedo parar de reír.'],
    pensativo:['Déjame pensarlo...','Mmm, buena pregunta.'],
    mareado:['Uy, todo da vueltas.','Creo que necesito sentarme.'],
    amor:['Te quiero.','Eres genial.'],
    fiesta:['¡Vamos a bailar!','¡Fiesta activada!','¡Woohoo!'],
    enojado:['¡Ahora no!','Estoy que exploto.','Necesito calmarme.']
  };

  function speak(name){
    if(!enabled || muted || !window.speechSynthesis) return;
    var list = phrases[name];
    if(!list) return;
    var text = list[Math.floor(Math.random()*list.length)];
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    if(spanishVoice) u.voice = spanishVoice;
    if(name === 'fiesta'){ u.pitch = 1.15; u.rate = 1.08; }
    else if(name === 'enojado'){ u.pitch = 0.85; u.rate = 0.98; }
    else { u.pitch = 1.0; u.rate = 0.95; }
    u.onstart = function(){ talking = true; };
    u.onend = function(){ talking = false; };
    u.onerror = function(){ talking = false; };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }

  function setMuted(v){
    muted = v;
    if(v && window.speechSynthesis) window.speechSynthesis.cancel();
  }

  return {
    unlock: unlock,
    isEnabled: function(){ return enabled; },
    isMuted: function(){ return muted; },
    setMuted: setMuted,
    isTalking: function(){ return talking; },
    blink: blink,
    playExpression: playExpression,
    playParty: playParty,
    playPartyBeat: playPartyBeat,
    playAngry: playAngry,
    playAngryPulse: playAngryPulse,
    speak: speak
  };
})();
