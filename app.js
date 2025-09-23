// Smooth nav
document.querySelectorAll('nav button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const sel = btn.getAttribute('data-go');
    document.querySelector(sel).scrollIntoView({behavior:'smooth', block:'start'});
  });
});

const legendHTML = () => `<div class="q-legend">🌸 <span class="imparfait">Imparfait</span> · 💚 <span class="passe-simple">Passé simple</span> · 🟧 <span class="plus-que-parfait">Plus-que-parfait</span> · 🔷 <span class="passe-anterieur">Passé antérieur</span></div>`;

function detectTense(str){
  const s = (str||'').toLowerCase();
  const pa_aux = /(eus|eut|eûmes|eûtes|eurent|fus|fut|fûmes|fûtes|furent)\s+\w+(é|i|u|is|it|us|u)/;
  const pqp_aux = /(avais|avait|avions|aviez|avaient|étais|était|étions|étiez|étaient)\s+\w+(é|i|u|is|it|us|u)/;
  const imp_end = /(ais|ait|ions|iez|aient)\b/;
  const ps_end = /(ai|as|a|âmes|âtes|èrent|is|it|îmes|îtes|irent|us|ut|ûmes|ûtes|urent)\b/;

  if(/\b(dès que|lorsqu|quand|après que|aussitôt que)/.test(s) && pa_aux.test(s)) {
    return {tense:'passe-anterieur', reason:'Subordonnant + auxiliaire au passé simple + participe : antériorité immédiate (style soutenu).'};
  }
  if(pqp_aux.test(s)){
    return {tense:'plus-que-parfait', reason:'Auxiliaire à l’imparfait (avais/étais…) + participe : action déjà achevée avant une autre.'};
  }
  if(/\b(soudain|tout à coup|aussitôt|alors|puis)\b/.test(s) && ps_end.test(s)){
    return {tense:'passe-simple', reason:'Marqueurs d’événement + terminaisons du passé simple : action ponctuelle du premier plan.'};
  }
  if(imp_end.test(s)){
    return {tense:'imparfait', reason:'Terminaisons -ais/-ait/-ions/-iez/-aient : décor, habitude ou action de fond.'};
  }
  if(pa_aux.test(s)) return {tense:'passe-anterieur', reason:'Auxiliaire au passé simple + participe (souvent après lorsque/quand).'};
  if(ps_end.test(s)) return {tense:'passe-simple', reason:'Terminaisons du passé simple repérées.'};
  return {tense:'indéterminé', reason:'Je n’ai pas détecté assez d’indices. Essaie une autre phrase.'};
}

document.getElementById('coachBtn').addEventListener('click', ()=>{
  const src = document.getElementById('coachInput').value.trim();
  const out = document.getElementById('coachOut');
  const {tense, reason} = detectTense(src);
  const colorClass = tense==='imparfait'?'imparfait': tense==='passe-simple'?'passe-simple': tense==='plus-que-parfait'?'plus-que-parfait': tense==='passe-anterieur'?'passe-anterieur':'';
  out.style.display='block';
  out.innerHTML = `<b>Diagnostic :</b> <span class="${colorClass}">${tense.replace('-',' ')}</span><br>${reason}`;
});

async function loadJSON(path){ const r = await fetch(path); return await r.json(); }

let QCM = [];
let answered = [];

function renderCours(data){
  const box = document.getElementById('coursContainer');
  box.innerHTML = '';
  data.valeurs.forEach(v=>{
    const div = document.createElement('div');
    div.className='qcm-question';
    div.innerHTML = `<h3 class="${v.class}">${v.title}</h3><p>${v.desc}</p><p><i>Exemple :</i> ${v.example_html}</p>`;
    box.appendChild(div);
  });
}

function renderMemo(data){
  const box = document.getElementById('memoContainer');
  box.innerHTML = '';
  const t = document.createElement('div'); t.className='qcm-question';
  t.innerHTML = `<h3>Terminaisons — Passé simple</h3>
  <ul>
    <li><b>1er groupe</b> : -ai, -as, -a, -âmes, -âtes, -èrent</li>
    <li><b>2e groupe</b> : -is, -is, -it, -îmes, -îtes, -irent</li>
    <li><b>3e groupe</b> : -us, -us, -ut, -ûmes, -ûtes, -urent · familles irrégulières (venir/tenir : nous <b>vînmes</b>, vous <b>vîntes</b>…)</li>
  </ul>`;
  box.appendChild(t);
  const tip = document.createElement('div'); tip.className='qcm-question';
  tip.innerHTML = `<h3>Formations composées</h3>
  <ul>
    <li><span class="plus-que-parfait">🟧 Plus-que-parfait</span> : auxiliaire <i>avoir/être</i> à l’imparfait + participe.</li>
    <li><span class="passe-anterieur">🔷 Passé antérieur</span> : auxiliaire <i>avoir/être</i> au passé simple + participe. Souvent après <i>quand, lorsque, dès que, après que</i>.</li>
  </ul>`;
  box.appendChild(tip);
}

function buildQCMControls(){
  const filterSel = document.getElementById('filter');
  const resetBtn = document.getElementById('reset');
  const shuffleBtn = document.getElementById('shuffle');

  function compute(){
    let list = QCM.slice();
    const f = filterSel.value;
    if(f !== 'all') list = list.filter(q=>q.tense===f);
    return list;
  }

  shuffleBtn.addEventListener('click', ()=>{
    for(let i=QCM.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [QCM[i],QCM[j]] = [QCM[j],QCM[i]];
    }
    renderQCM(compute());
  });

  resetBtn.addEventListener('click', ()=>{
    answered = Array(QCM.length).fill(null);
    filterSel.value='all';
    renderQCM(QCM);
  });

  filterSel.addEventListener('change', ()=> renderQCM(compute()));
}

function renderQCM(list){
  const cont = document.getElementById('qcmContainer');
  cont.innerHTML='';
  answered = Array(list.length).fill(null);
  list.forEach((item, idx)=>{
    const card = document.createElement('div');
    card.className='qcm-question';
    card.innerHTML = `
      <div class="q-title">Q${idx+1}. ${item.question_html}</div>
      ${legendHTML()}
      <div class="q-options">
        ${item.options.map((opt,i)=>`<button class="q-option" data-index="${idx}" data-choice="${i}">${String.fromCharCode(97+i)}) ${opt}</button>`).join('')}
      </div>
      <div class="feedback" id="fb-${idx}" style="display:none"></div>`;
    cont.appendChild(card);
  });
  cont.querySelectorAll('.q-option').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const qi = Number(btn.getAttribute('data-index'));
      const choice = Number(btn.getAttribute('data-choice'));
      const card = btn.closest('.qcm-question');
      const buttons = card.querySelectorAll('.q-option');
      buttons.forEach(b=>b.classList.remove('correct','incorrect'));
      const fb = card.querySelector('.feedback'); fb.style.display='block';
      if(choice === list[qi].correct_index){
        btn.classList.add('correct'); fb.innerHTML = `✅ ${list[qi].feedback}`; answered[qi]=true;
      } else {
        btn.classList.add('incorrect'); buttons[list[qi].correct_index]?.classList.add('correct');
        fb.innerHTML = `❌ Mauvais choix.<br>${list[qi].feedback}`; answered[qi]=false;
      }
      const good = answered.filter(x=>x===true).length;
      document.getElementById('scoreTxt').textContent = `Score : ${good} / ${list.length}`;
      document.getElementById('barFill').style.width = `${(good/list.length)*100}%`;
    });
  });
}

function renderTransfo(items){
  const t = document.getElementById('transfoContainer'); t.innerHTML='';
  items.forEach((it,i)=>{
    const div = document.createElement('div'); div.className='trans-item';
    div.innerHTML = `<h3>Exercice ${i+1}</h3>
      <blockquote>${it.present}</blockquote>
      <div class="ex-actions"><button class="btn" data-sol="${i}">Voir la correction</button></div>
      <div class="example" id="sol-${i}">
        ${it.correction_html}
        <div class="feedback" style="margin-top:8px">${it.justification}</div>
      </div>`;
    t.appendChild(div);
  });
  t.querySelectorAll('button[data-sol]').forEach(b=>{
    b.addEventListener('click',()=>{
      const el = document.getElementById('sol-'+b.getAttribute('data-sol'));
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
}

function renderEcriture(items){
  const e = document.getElementById('ecritureContainer'); e.innerHTML='';
  items.forEach((ex,i)=>{
    const div = document.createElement('div'); div.className='ex-item';
    div.innerHTML = `<h3>${i+1}) ${ex.title}</h3>
      <p>${ex.consigne}</p>
      <div class="ex-actions">
        <button class="btn" data-ex="${i}">Voir un exemple</button>
        <button class="btn secondary" data-copy="${i}">Copier l’exemple</button>
      </div>
      <div class="example" id="ex-${i}">${ex.example_html}</div>`;
    e.appendChild(div);
  });
  e.querySelectorAll('button[data-ex]').forEach(b=>{
    b.addEventListener('click',()=>{
      const el = document.getElementById('ex-'+b.getAttribute('data-ex'));
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
  e.querySelectorAll('button[data-copy]').forEach(b=>{
    b.addEventListener('click',()=>{
      const el = document.getElementById('ex-'+b.getAttribute('data-copy'));
      navigator.clipboard.writeText(el.innerText.trim());
    });
  });
}

(async function init(){
  const fiche = await loadJSON('data/fiche-memo.txt'); renderCours(fiche); renderMemo(fiche);
  QCM = (await loadJSON('data/qcm.txt')).questions; renderQCM(QCM); buildQCMControls();
  const transfo = (await loadJSON('data/transfo.txt')).items; renderTransfo(transfo);
  const ecr = (await loadJSON('data/ecriture.txt')).exercices; renderEcriture(ecr);
})();
