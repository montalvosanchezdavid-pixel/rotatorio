(function(){
  var sphere = document.getElementById('sphere');
  var faceEl = document.getElementById('face');
  var browL = document.querySelector('.brow-l');
  var browR = document.querySelector('.brow-r');
  var eyeL = document.querySelector('.eye-l');
  var eyeR = document.querySelector('.eye-r');
  var pupilL = eyeL.querySelector('.pupil');
  var pupilR = eyeR.querySelector('.pupil');
  var mouthPath = document.getElementById('mouthPath');
  var mouthOpenEl = document.getElementById('mouthOpen');
  var root = document.documentElement;
  var body = document.body;
  var fx = document.getElementById('fx');

  var EYE_H = 15; // vmin, base eye height (matches CSS)

  // ---------- Estado interpolado ----------
  var cur = {
    eyeOpenL:1, eyeOpenR:1,
    pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
    browYL:0, browYR:0, browRotL:0, browRotR:0,
    mouthCurve:0.15, mouthOpen:0,
    r:140, g:210, b:255
  };
  var target = Object.assign({}, cur);
  var speed = 0.07;
  var mode = 'normal'; // normal | party | angry

  // ---------- Expresiones normales ----------
  var expressions = [
    { name:'neutral', speed:0.06, hold:2600,
      eyeOpenL:1, eyeOpenR:1, pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
      browYL:0, browYR:0, browRotL:0, browRotR:0, mouthCurve:0.15, mouthOpen:0,
      r:140,g:210,b:255 },
    { name:'feliz', speed:0.08, hold:2400,
      eyeOpenL:.55, eyeOpenR:.55, pupilXL:0, pupilYL:2, pupilXR:0, pupilYR:2,
      browYL:-2, browYR:-2, browRotL:-4, browRotR:4, mouthCurve:0.85, mouthOpen:0,
      r:255,g:210,b:120 },
    { name:'sorprendido', speed:0.16, hold:1800,
      eyeOpenL:1.35, eyeOpenR:1.35, pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
      browYL:-6, browYR:-6, browRotL:0, browRotR:0, mouthCurve:0, mouthOpen:1,
      r:255,g:255,b:255 },
    { name:'guiño', speed:0.14, hold:2100,
      eyeOpenL:.04, eyeOpenR:1, pupilXL:0, pupilYL:0, pupilXR:2, pupilYR:-1,
      browYL:1, browYR:-3, browRotL:2, browRotR:-6, mouthCurve:0.6, mouthOpen:0,
      r:170,g:255,b:170 },
    { name:'somnoliento', speed:0.035, hold:3200,
      eyeOpenL:.3, eyeOpenR:.3, pupilXL:0, pupilYL:3, pupilXR:0, pupilYR:3,
      browYL:2, browYR:2, browRotL:2, browRotR:-2, mouthCurve:-0.1, mouthOpen:0,
      r:150,g:140,b:255 },
    { name:'curioso', speed:0.09, hold:2200,
      eyeOpenL:1.1, eyeOpenR:.85, pupilXL:4, pupilYL:-2, pupilXR:4, pupilYR:-2,
      browYL:-7, browYR:0, browRotL:-10, browRotR:0, mouthCurve:0.35, mouthOpen:0,
      r:120,g:255,b:230 },
    { name:'triste', speed:0.05, hold:2800,
      eyeOpenL:.75, eyeOpenR:.75, pupilXL:-3, pupilYL:2, pupilXR:-3, pupilYR:2,
      browYL:-1, browYR:-1, browRotL:8, browRotR:-8, mouthCurve:-0.6, mouthOpen:0,
      r:120,g:140,b:220 },
    { name:'risa', speed:0.15, hold:2000,
      eyeOpenL:.12, eyeOpenR:.12, pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
      browYL:-3, browYR:-3, browRotL:-6, browRotR:6, mouthCurve:0.95, mouthOpen:.5,
      r:255,g:190,b:80 },
    { name:'pensativo', speed:0.05, hold:2600,
      eyeOpenL:.7, eyeOpenR:.7, pupilXL:-2, pupilYL:-4, pupilXR:2, pupilYR:-4,
      browYL:-3, browYR:1, browRotL:-6, browRotR:2, mouthCurve:-0.15, mouthOpen:0,
      r:170,g:180,b:255 },
    { name:'mareado', speed:0.13, hold:2200,
      eyeOpenL:1, eyeOpenR:1, pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
      browYL:-2, browYR:-2, browRotL:-8, browRotR:8, mouthCurve:-0.3, mouthOpen:.25,
      r:200,g:160,b:255 },
    { name:'amor', speed:0.09, hold:2400,
      eyeOpenL:1, eyeOpenR:1, pupilXL:0, pupilYL:0, pupilXR:0, pupilYR:0,
      browYL:-1, browYR:-1, browRotL:-3, browRotR:3, mouthCurve:0.7, mouthOpen:0,
      r:255,g:110,b:150 }
  ];

  var idx = 0;
  var timer = null;
  function scheduleNext(delay){
    clearTimeout(timer);
    timer = setTimeout(nextExpression, delay);
  }
  function applyExpression(e){
    faceEl.className = 'expr-' + e.name;
    target = Object.assign({}, e);
    speed = e.speed;
    if(window.CubeQSound){
      CubeQSound.playExpression(e.name);
      if(Math.random() < 0.4) CubeQSound.speak(e.name);
    }
  }
  function nextExpression(){
    if(mode === 'normal' && Math.random() < 0.24){
      triggerSpecial(Math.random() < 0.5 ? 'party' : 'angry');
      return;
    }
    idx = (idx + 1) % expressions.length;
    var e = expressions[idx];
    applyExpression(e);
    scheduleNext(e.hold + Math.random()*900);
  }
  applyExpression(expressions[0]);
  scheduleNext(expressions[0].hold);

  // ---------- Modos especiales: fiesta / enfado ----------
  var partyColorTimer = null;
  var confettiTimer = null;
  var steamTimer = null;
  var beatTimer = null;

  function triggerSpecial(kind){
    mode = kind;
    body.classList.add('mode-' + kind);
    clearTimeout(timer);

    if(kind === 'party'){
      faceEl.className = 'expr-fiesta';
      speed = 0.14;
      target = Object.assign({}, target, {
        eyeOpenL:.7, eyeOpenR:.7, pupilXL:0, pupilYL:1, pupilXR:0, pupilYR:1,
        browYL:-3, browYR:-3, browRotL:-6, browRotR:6,
        mouthCurve:0.95, mouthOpen:.35
      });
      var partyPalette = [[255,220,60],[255,110,190],[110,220,255],[255,255,255],[255,170,60]];
      var pIdx = 0;
      partyColorTimer = setInterval(function(){
        pIdx = (pIdx+1) % partyPalette.length;
        var c = partyPalette[pIdx];
        target.r = c[0]; target.g = c[1]; target.b = c[2];
      }, 420);
      confettiTimer = setInterval(spawnConfetti, 90);
      if(window.CubeQSound){
        CubeQSound.playParty();
        CubeQSound.speak('fiesta');
        beatTimer = setInterval(function(){ CubeQSound.playPartyBeat(); }, 260);
      }
      setTimeout(function(){ endSpecial(); }, 6500);
    }

    if(kind === 'angry'){
      faceEl.className = 'expr-enojado';
      speed = 0.13;
      target = Object.assign({}, target, {
        eyeOpenL:.42, eyeOpenR:.42, pupilXL:0, pupilYL:1, pupilXR:0, pupilYR:1,
        browYL:1, browYR:1, browRotL:20, browRotR:-20,
        mouthCurve:-0.55, mouthOpen:0,
        r:255, g:60, b:50
      });
      steamTimer = setInterval(spawnSteam, 380);
      if(window.CubeQSound){
        CubeQSound.playAngry();
        CubeQSound.speak('enojado');
        beatTimer = setInterval(function(){ CubeQSound.playAngryPulse(); }, 340);
      }
      setTimeout(function(){ endSpecial(); }, 5200);
    }
  }

  function endSpecial(){
    body.classList.remove('mode-' + mode);
    clearInterval(partyColorTimer);
    clearInterval(confettiTimer);
    clearInterval(steamTimer);
    clearInterval(beatTimer);
    mode = 'normal';
    scheduleNext(400);
  }

  // ---------- Partículas ----------
  var confettiColors = ['#ffdc3c','#ff6ec7','#6ee0ff','#ffffff','#ffa93c','#8dff9b'];
  function spawnConfetti(){
    var el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = (Math.random()*100) + 'vw';
    el.style.background = confettiColors[Math.floor(Math.random()*confettiColors.length)];
    var dur = 2 + Math.random()*1.6;
    el.style.animationDuration = dur + 's';
    el.style.transform = 'rotate(' + (Math.random()*360) + 'deg)';
    fx.appendChild(el);
    setTimeout(function(){ el.remove(); }, dur*1000 + 100);
  }

  function spawnSteam(){
    var el = document.createElement('div');
    el.className = 'steam';
    var side = Math.random() < 0.5 ? -1 : 1;
    el.style.left = (50 + side*(14 + Math.random()*6)) + 'vw';
    el.style.top = (50 - 20 + Math.random()*4) + 'vh';
    fx.appendChild(el);
    setTimeout(function(){ el.remove(); }, 1700);
  }

  // ---------- Parpadeo independiente ----------
  var blink = 1;
  function doBlink(){
    blink = 0;
    if(window.CubeQSound && Math.random() < 0.3) CubeQSound.blink();
    var doubleBlink = Math.random() < 0.25;
    setTimeout(function(){
      blink = 1;
      if(doubleBlink){
        setTimeout(function(){
          blink = 0;
          setTimeout(function(){ blink = 1; }, 110);
        }, 140);
      }
    }, 110);
    var nextIn = mode === 'party' ? (900 + Math.random()*900) : (2400 + Math.random()*3400);
    setTimeout(doBlink, nextIn);
  }
  setTimeout(doBlink, 1800);

  // ---------- Seguimiento del puntero (mirada + inclinación de la esfera) ----------
  var pointer = {x:0, y:0}; // -1..1
  var pointerCur = {x:0, y:0};
  window.addEventListener('pointermove', function(e){
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  });

  function lerp(a,b,t){ return a + (b-a)*t; }

  function render(){
    for(var k in target){
      if(typeof target[k] === 'number'){
        cur[k] = lerp(cur[k], target[k], speed);
      }
    }
    pointerCur.x = lerp(pointerCur.x, pointer.x, 0.04);
    pointerCur.y = lerp(pointerCur.y, pointer.y, 0.04);

    var eL = Math.max(0.03, cur.eyeOpenL) * blink;
    var eR = Math.max(0.03, cur.eyeOpenR) * blink;
    eyeL.style.height = (EYE_H * eL) + 'vmin';
    eyeR.style.height = (EYE_H * eR) + 'vmin';

    var gazeX = pointerCur.x * 7;
    var gazeY = pointerCur.y * 5;
    pupilL.style.transform = 'translate(' + (cur.pupilXL + gazeX) + 'px,' + ((cur.pupilYL + gazeY)*eL) + 'px)';
    pupilR.style.transform = 'translate(' + (cur.pupilXR + gazeX) + 'px,' + ((cur.pupilYR + gazeY)*eR) + 'px)';

    browL.style.transform = 'translateY(' + cur.browYL + 'vmin) rotate(' + cur.browRotL + 'deg)';
    browR.style.transform = 'translateY(' + cur.browYR + 'vmin) rotate(' + cur.browRotR + 'deg)';

    var midY = 35 - cur.mouthCurve * 22;
    mouthPath.setAttribute('d', 'M20,35 Q110,' + midY + ' 200,35');

    var talkPulse = (window.CubeQSound && CubeQSound.isTalking())
      ? (0.18 + Math.abs(Math.sin(performance.now()/85)) * 0.4)
      : 0;
    var openAmt = Math.min(1, Math.max(0, cur.mouthOpen) + talkPulse);
    mouthOpenEl.setAttribute('rx', 22 * openAmt);
    mouthOpenEl.setAttribute('ry', 16 * openAmt);

    var bounceY = mode === 'party' ? Math.sin(performance.now()/130) * 1.3 : 0;
    var driftX = pointerCur.x * 1.4;
    var driftY = pointerCur.y * 1.0 + bounceY;
    sphere.style.transform = 'translate(' + driftX + 'vmin,' + driftY + 'vmin)';

    root.style.setProperty('--glow-rgb',
      Math.round(cur.r) + ',' + Math.round(cur.g) + ',' + Math.round(cur.b));

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
