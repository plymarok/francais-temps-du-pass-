// Smooth nav
document.querySelectorAll('nav button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const sel = btn.getAttribute('data-go');
    document.querySelector(sel).scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Small legend for QCM cards
const legendHTML = () => `
  <div class="q-legend">🌸 <span class="imparfait">Imparfait</span> · 💚 <span class="passe-simple">Passé simple</span> · 🟧 <span class="plus-que-parfait">Plus-que-parfait</span></div>
`;

// Global score state
let answered = [];
let QUESTIONS = [];

// Render QCM list
function renderQCM(list) {
  const cont = document.getElementById('qcmContainer');
  cont.innerHTML = '';
  answered = Array(list.length).fill(null);

  list.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'qcm-question';
    card.innerHTML = `
      <div class="q-title">Q${idx+1}. ${item.question_html}</div>
      ${legendHTML()}
      <div class="q-options">
        ${item.options.map((opt,i)=>`
          <button class="q-option" data-index="${idx}" data-choice="${i}">
            ${String.fromCharCode(97+i)}) ${opt}
          </button>`).join('')}
      </div>
      <div class="feedback" id="fb-${idx}" style="display:none"></div>
    `;
    cont.appendChild(card);
  });

  cont.querySelectorAll('.q-option').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const qi = Number(btn.getAttribute('data-index'));
      const choice = Number(btn.getAttribute('data-choice'));
      const qBlock = btn.closest('.qcm-question');
      const all = qBlock.querySelectorAll('.q-option');
      all.forEach(b=>b.classList.remove('correct','incorrect'));
      const fb = document.getElementById(`fb-${qi}`);
      fb.style.display='block';

      if(choice === list[qi].correct_index){
        btn.classList.add('correct');
        answered[qi] = true;
        fb.innerHTML = `✅ ${list[qi].feedback}`;
      } else {
        btn.classList.add('incorrect');
        all[list[qi].correct_index].classList.add('correct');
        answered[qi] = false;
        fb.innerHTML = `❌ Mauvais choix.<br>${list[qi].feedback}`;
      }
      updateScore(list.length);
    });
  });

  updateScore(list.length);
}

function updateScore(total){
  const good = answered.filter(v=>v===true).length;
  document.getElementById('scoreTxt').textContent = `Score : ${good} / ${total}`;
  document.getElementById('barFill').style.width = `${(good/total)*100}%`;
}

// Load JSONs and build sections
async function loadData(){
  // QCM
  const qcm = await fetch('data/qcm.json').then(r=>r.json());
  // ensure alternation option
  QUESTIONS = qcm.questions;
  buildQCMControls();

  // Écriture
  const ecr = await fetch('data/ecriture.json').then(r=>r.json());
  const eCont = document.getElementById('ecritureContainer');
  ecr.exercices.forEach((ex,i)=>{
    const div = document.createElement('div');
    div.className = 'ex-item';
    div.innerHTML = `
      <h3>${i+1}) ${ex.title}</h3>
      <p>${ex.consigne}</p>
      <div class="ex-actions">
        <button class="btn" data-ex="${i}">Voir un exemple</button>
        <button class="btn secondary" data-copy="${i}">Copier l’exemple</button>
      </div>
      <div class="example" id="ex-${i}">${ex.example_html}</div>
    `;
    eCont.appendChild(div);
  });
  eCont.querySelectorAll('button[data-ex]').forEach(b=>{
    b.addEventListener('click',()=>{
      const id = 'ex-'+b.getAttribute('data-ex');
      const el = document.getElementById(id);
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
  eCont.querySelectorAll('button[data-copy]').forEach(b=>{
    b.addEventListener('click',()=>{
      const id = 'ex-'+b.getAttribute('data-copy');
      const el = document.getElementById(id);
      const txt = el.innerText.replace(/\s+\n/g,'\n').trim();
      navigator.clipboard.writeText(txt);
    });
  });

  // Transformations
  const tr = await fetch('data/transfo.json').then(r=>r.json());
  const tCont = document.getElementById('transfoContainer');
  tr.items.forEach((it,i)=>{
    const div = document.createElement('div');
    div.className = 'trans-item';
    div.innerHTML = `
      <h3>Exercice ${i+1}</h3>
      <blockquote>${it.present}</blockquote>
      <div class="ex-actions" style="margin-top:10px">
        <button class="btn" data-sol="${i}">Voir la correction</button>
      </div>
      <div class="example" id="sol-${i}">${it.correction_html}</div>
    `;
    tCont.appendChild(div);
  });
  tCont.querySelectorAll('button[data-sol]').forEach(b=>{
    b.addEventListener('click',()=>{
      const id = 'sol-'+b.getAttribute('data-sol');
      const el = document.getElementById(id);
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
}

function buildQCMControls(){
  // initial order: alternated (data already alternated), but we can recompose
  const filterSel = document.getElementById('filter');
  const orderSel = document.getElementById('order');
  const resetBtn = document.getElementById('reset');

  function computeList(){
    const f = filterSel.value;
    let list = QUESTIONS.slice();

    if(orderSel.value === 'alternated'){
      // rebuild strict alternation cycle [imparfait, passe-simple, plus-que-parfait]
      const groups = {
        'imparfait': list.filter(q=>q.tense==='imparfait'),
        'passe-simple': list.filter(q=>q.tense==='passe-simple'),
        'plus-que-parfait': list.filter(q=>q.tense==='plus-que-parfait')
      };
      const out = [];
      let i=0;
      while(groups['imparfait'][i] || groups['passe-simple'][i] || groups['plus-que-parfait'][i]){
        if(groups['imparfait'][i]) out.push(groups['imparfait'][i]);
        if(groups['passe-simple'][i]) out.push(groups['passe-simple'][i]);
        if(groups['plus-que-parfait'][i]) out.push(groups['plus-que-parfait'][i]);
        i++;
      }
      list = out;
    } else if(orderSel.value === 'random'){
      for(let i=list.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [list[i],list[j]] = [list[j],list[i]];
      }
    }

    if(f !== 'all'){
      list = list.filter(q=>q.tense===f);
    }
    return list;
  }

  renderQCM(computeList());

  filterSel.addEventListener('change', ()=> renderQCM(computeList()));
  orderSel.addEventListener('change', ()=> renderQCM(computeList()));
  resetBtn.addEventListener('click', ()=> renderQCM(computeList()));
}

// kick off
loadData();

