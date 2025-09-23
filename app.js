// ====== Fallback data (used if fetch of data/*.txt fails) ======
const FALLBACK = {
  qcm: {
  "questions": [
    {
      "tense": "imparfait",
      "question_html": "La rue <span class='imparfait'>était</span> silencieuse. 🌸",
      "options": [
        "description/décor",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 0,
      "feedback": "Imparfait = décor/état d’arrière-plan."
    },
    {
      "tense": "passe-simple",
      "question_html": "La porte <span class='passe-simple'>claqua</span> soudain. 💚",
      "options": [
        "habitude",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 1,
      "feedback": "Passé simple = action brève et saillante."
    },
    {
      "tense": "plus-que-parfait",
      "question_html": "Elle <span class='plus-que-parfait'>avait déjà rangé</span> ses affaires. 🟧",
      "options": [
        "habitude",
        "antériorité (déjà avant)",
        "description"
      ],
      "correct_index": 1,
      "feedback": "Plus-que-parfait = auxiliaire à l’imparfait + participe : action achevée avant l’autre passé."
    },
    {
      "tense": "passe-anterieur",
      "question_html": "Lorsque nous <span class='passe-anterieur'>eûmes terminé</span>, nous <span class='passe-simple'>partîmes</span>. 🔷",
      "options": [
        "antériorité immédiate (juste avant)",
        "habitude",
        "description"
      ],
      "correct_index": 0,
      "feedback": "Passé antérieur = auxiliaire au passé simple + participe, subordonnée d’antériorité immédiate liée au passé simple."
    },
    {
      "tense": "imparfait",
      "question_html": "Ils <span class='imparfait'>jouaient</span> souvent dans la cour. 🌸",
      "options": [
        "habitude",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 0,
      "feedback": "Imparfait = habitude (indice « souvent »)."
    },
    {
      "tense": "passe-simple",
      "question_html": "Je <span class='passe-simple'>vis</span> un éclair. 💚",
      "options": [
        "description",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 1,
      "feedback": "Passé simple = perception ponctuelle."
    },
    {
      "tense": "plus-que-parfait",
      "question_html": "Vous <span class='plus-que-parfait'>aviez préparé</span> la salle. 🟧",
      "options": [
        "description",
        "antériorité (déjà avant)",
        "action ponctuelle"
      ],
      "correct_index": 1,
      "feedback": "Résultat déjà acquis avant la scène principale."
    },
    {
      "tense": "passe-anterieur",
      "question_html": "Après qu’il <span class='passe-anterieur'>eut signé</span>, la foule <span class='passe-simple'>acclama</span>. 🔷",
      "options": [
        "antériorité immédiate",
        "habitude",
        "description"
      ],
      "correct_index": 0,
      "feedback": "« Après que » + auxiliaire au passé simple → antériorité tout juste antérieure au passé simple."
    },
    {
      "tense": "imparfait",
      "question_html": "Je <span class='imparfait'>marchais</span> quand l’orage éclata. 🌸",
      "options": [
        "action de fond/en cours",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 0,
      "feedback": "Imparfait = action de fond sur laquelle se greffe un événement."
    },
    {
      "tense": "passe-simple",
      "question_html": "Vous <span class='passe-simple'>prîtes</span> place au premier rang. 💚",
      "options": [
        "habitude",
        "action ponctuelle",
        "antériorité"
      ],
      "correct_index": 1,
      "feedback": "Passé simple (vous -îtes) = acte unique, borné."
    }
  ]
},
  transfo: {
  "items": [
    {
      "present": "Aujourd’hui, il fait froid et la rue est déserte. Je vois Léa et nous parlons un instant.",
      "correction_html": "Ce jour-là, il <span class='imparfait'>faisait</span> froid et la rue <span class='imparfait'>était</span> déserte. Je <span class='passe-simple'>vis</span> Léa et nous <span class='passe-simple'>parlâmes</span> un instant.",
      "justification": "Imparfait pour le décor durable ; passé simple pour les événements brefs qui font avancer le récit."
    },
    {
      "present": "Quand il arrive, il s’assoit : il a déjà rangé ses papiers.",
      "correction_html": "Quand il <span class='passe-simple'>arriva</span>, il <span class='passe-simple'>s’assit</span> : il <span class='plus-que-parfait'>avait déjà rangé</span> ses papiers.",
      "justification": "Antériorité simple exprimée par le plus-que-parfait (« avait déjà rangé ») ; arrivées/s’assit = événements ponctuels au passé simple."
    },
    {
      "present": "Lorsqu’elle termine, elle sort immédiatement.",
      "correction_html": "Lorsqu’elle <span class='passe-anterieur'>eut terminé</span>, elle <span class='passe-simple'>sortit</span> immédiatement.",
      "justification": "Passé antérieur après « lorsqu’ » pour une antériorité immédiate liée au passé simple (« sortit »)."
    },
    {
      "present": "Je marche dans le parc, j’entends un cri et je cours.",
      "correction_html": "Je <span class='imparfait'>marchais</span> dans le parc, j’<span class='passe-simple'>entendis</span> un cri et je <span class='passe-simple'>courus</span>.",
      "justification": "Action de fond à l’imparfait ; événements déclencheurs au passé simple."
    },
    {
      "present": "Nous avons déjà visité le musée avant d’aller au parc.",
      "correction_html": "Nous <span class='plus-que-parfait'>avions déjà visité</span> le musée avant d’<span class='passe-simple'>aller</span> au parc.",
      "justification": "Antériorité simple (« avions déjà visité ») avant l’action suivante au passé simple."
    },
    {
      "present": "Dès qu’ils finissent, ils quittent la salle.",
      "correction_html": "Dès qu’ils <span class='passe-anterieur'>eurent fini</span>, ils <span class='passe-simple'>quittèrent</span> la salle.",
      "justification": "Marqueur « dès que » + auxiliaire au passé simple → passé antérieur (antériorité immédiate) suivi d’un passé simple."
    },
    {
      "present": "Vous attendez calmement et vous souriez quand le train part.",
      "correction_html": "Vous <span class='imparfait'>attendiez</span> calmement et vous <span class='imparfait'>souriez</span> quand le train <span class='passe-simple'>partit</span>.",
      "justification": "Attente/sourire = fond simultané (imparfait) ; départ = événement ponctuel (passé simple)."
    },
    {
      "present": "Elle a déjà fermé la porte lorsque je reviens.",
      "correction_html": "Elle <span class='plus-que-parfait'>avait déjà fermé</span> la porte lorsque je <span class='passe-simple'>revins</span>.",
      "justification": "Plus-que-parfait pour l’action antérieure « déjà fermé » ; « revins » = événement ponctuel."
    },
    {
      "present": "Après qu’il signe, tout le monde applaudit.",
      "correction_html": "Après qu’il <span class='passe-anterieur'>eut signé</span>, tout le monde <span class='passe-simple'>applaudit</span>.",
      "justification": "Subordonnant « après que » + passé antérieur → antériorité immédiate avant le passé simple."
    },
    {
      "present": "Ils discutent depuis un moment ; soudain, la porte s’ouvre.",
      "correction_html": "Ils <span class='imparfait'>discutaient</span> depuis un moment ; soudain, la porte <span class='passe-simple'>s’ouvrit</span>.",
      "justification": "Imparfait pour la durée de fond ; passé simple pour l’irruption soudaine."
    }
  ]
},
  ecriture: {
  "exercices": [
    {
      "title": "Souvenir de vacances",
      "consigne": "2 imparfaits (décor/habitude) + 2 passés simples (événements).",
      "example_html": "Il <span class='imparfait'>faisait</span> doux et la mer <span class='imparfait'>miroitait</span> ; nous <span class='passe-simple'>marchâmes</span> longtemps puis un goéland <span class='passe-simple'>plongea</span>."
    },
    {
      "title": "Scène de classe",
      "consigne": "Fond à l’imparfait, action décisive au passé simple.",
      "example_html": "La salle <span class='imparfait'>était</span> silencieuse, chacun <span class='imparfait'>écrivait</span> quand le professeur <span class='passe-simple'>demanda</span> mon cahier."
    },
    {
      "title": "Récit historique (passé antérieur)",
      "consigne": "Utilise 🔷 en subordonnée puis 💚 en principale.",
      "example_html": "Lorsqu’ils <span class='passe-anterieur'>eurent franchi</span> le pont, les troupes <span class='passe-simple'>avancèrent</span> vers la ville."
    },
    {
      "title": "Journal de bord",
      "consigne": "Décor à l’imparfait + 2 actions au passé simple.",
      "example_html": "Le quai <span class='imparfait'>était</span> désert ; le train <span class='passe-simple'>entra</span> et je <span class='passe-simple'>montai</span> d’un pas décidé."
    },
    {
      "title": "Fait divers (pqp cause)",
      "consigne": "Place 🟧 pour une cause antérieure.",
      "example_html": "L’alarme <span class='passe-simple'>retentit</span> : le gardien <span class='plus-que-parfait'>avait oublié</span> de verrouiller la porte."
    },
    {
      "title": "Scène fantastique",
      "consigne": "Mêle 🌸 pour l’ambiance et 💚 pour l’irruption.",
      "example_html": "Il <span class='imparfait'>faisait</span> nuit ; une lueur <span class='passe-simple'>apparut</span> derrière la colline."
    },
    {
      "title": "Portrait en mouvement",
      "consigne": "Décris au fond (🌸), déclenche un geste (💚).",
      "example_html": "Elle <span class='imparfait'>portait</span> une écharpe rouge ; à l’angle, elle <span class='passe-simple'>accéléra</span>."
    },
    {
      "title": "Retour de voyage (pqp)",
      "consigne": "Caser 🟧 pour « déjà avant ».",
      "example_html": "Nous <span class='plus-que-parfait'>avions réservé</span> une chambre ; le réceptionniste <span class='passe-simple'>nous accueillit</span> aussitôt."
    },
    {
      "title": "Chronique sportive (passé antérieur)",
      "consigne": "🔷 en proposition temporelle + 💚 pour l’action décrite.",
      "example_html": "Dès qu’il <span class='passe-anterieur'>eut servi</span>, le public <span class='passe-simple'>se leva</span> d’un bond."
    },
    {
      "title": "Mémoire personnelle",
      "consigne": "Alternance réaliste 🌸 + 💚 ; ponctue par une cause 🟧 si pertinent.",
      "example_html": "Je <span class='imparfait'>regardais</span> la route ; un bruit <span class='passe-simple'>éclata</span> : j’<span class='plus-que-parfait'>avais oublié</span> de fermer le capot."
    }
  ]
},
  fiche: {
  "valeurs": [
    {
      "class": "passe-simple",
      "title": "💚 Passé simple — premier plan",
      "desc": "Actions brèves, achevées, qui font avancer le récit.",
      "example_html": "Il <span class='passe-simple'>entra</span>, <span class='passe-simple'>salua</span> puis <span class='passe-simple'>sortit</span>."
    },
    {
      "class": "imparfait",
      "title": "🌸 Imparfait — arrière-plan",
      "desc": "Décor/description, habitude, action de fond/en cours.",
      "example_html": "La ville <span class='imparfait'>brillait</span> et les passants <span class='imparfait'>parlaient</span>."
    },
    {
      "class": "plus-que-parfait",
      "title": "🟧 Plus-que-parfait — antériorité simple",
      "desc": "Action déjà achevée avant une autre action du passé (auxiliaire à l’imparfait + participe).",
      "example_html": "Elle <span class='plus-que-parfait'>avait terminé</span> avant qu’il <span class='passe-simple'>arriva</span>."
    },
    {
      "class": "passe-anterieur",
      "title": "🔷 Passé antérieur — antériorité immédiate",
      "desc": "Action accomplie juste avant une action au passé simple ; souvent après quand, lorsque, dès que, après que (auxiliaire au passé simple + participe).",
      "example_html": "Lorsqu’il <span class='passe-anterieur'>eut fini</span>, il <span class='passe-simple'>partit</span>."
    }
  ]
}
};

async function loadJSON(path){
  try{
    const r = await fetch(path, {cache:'no-store'});
    if(!r.ok) throw new Error('HTTP '+r.status);
    return await r.json();
  }catch(e){
    console.warn('Fetch failed for', path, '→ fallback used.', e);
    switch(path){
      case 'data/qcm.txt': return {questions: FALLBACK.qcm.questions};
      case 'data/transfo.txt': return {items: FALLBACK.transfo.items};
      case 'data/ecriture.txt': return {exercices: FALLBACK.ecriture.exercices};
      case 'data/fiche-memo.txt': return FALLBACK.fiche;
      default: throw e;
    }
  }
}

// ====== UI helpers ======
function legend(){return `<div class="legend">🌸 <span class="imparfait">Imparfait</span> · 💚 <span class="passe-simple">Passé simple</span> · 🟧 <span class="plus-que-parfait">Plus-que-parfait</span> · 🔷 <span class="passe-anterieur">Passé antérieur</span></div>`;}

// ====== QCM rendering ======
function renderQCM(data){
  const all = data.questions;
  const qBox = document.getElementById('qcm');
  const filterSel = document.getElementById('filter');
  const shuffleBtn = document.getElementById('shuffle');
  const scoreTxt = document.getElementById('scoreTxt');
  const barFill = document.getElementById('barFill');

  function draw(list){
    qBox.innerHTML = '';
    let answers = Array(list.length).fill(null);
    scoreTxt.textContent = `Score : 0 / ${list.length}`;
    barFill.style.width = '0%';
    list.forEach((q,i)=>{
      const div = document.createElement('div'); div.className='q';
      div.innerHTML = `
        <div class="title">Q${i+1}. ${q.question_html}</div>
        ${legend()}
        <div class="opts">
          ${q.options.map((o,idx)=>`<button class="opt" data-i="${i}" data-c="${idx}">${String.fromCharCode(97+idx)}) ${o}</button>`).join('')}
        </div>
        <div class="feedback" id="fb-${i}" style="display:none"></div>`;
      qBox.appendChild(div);
    });
    qBox.querySelectorAll('.opt').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const i = Number(btn.getAttribute('data-i'));
        const c = Number(btn.getAttribute('data-c'));
        const card = btn.closest('.q');
        const buttons = card.querySelectorAll('.opt');
        buttons.forEach(b=>b.classList.remove('correct','incorrect'));
        const fb = card.querySelector('.feedback'); fb.style.display='block';
        if(c===list[i].correct_index){ btn.classList.add('correct'); fb.innerHTML = `✅ ${list[i].feedback}`; answers[i]=true; }
        else { btn.classList.add('incorrect'); buttons[list[i].correct_index]?.classList.add('correct'); fb.innerHTML = `❌ Mauvais choix.<br>${list[i].feedback}`; answers[i]=false; }
        const good = answers.filter(x=>x===true).length;
        scoreTxt.textContent = `Score : ${good} / ${list.length}`;
        barFill.style.width = `${(good/list.length)*100}%`;
      });
    });
  }

  function compute(){
    let list = all.slice();
    const f = filterSel.value;
    if(f!=='all'){ list = list.filter(q=>q.tense===f); }
    return list;
  }

  filterSel.addEventListener('change', ()=> draw(compute()));
  shuffleBtn.addEventListener('click', ()=>{
    const list = compute();
    for(let i=list.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [list[i],list[j]]=[list[j],list[i]]; }
    draw(list);
  });

  draw(all);
}

// ====== Transformations ======
function renderTransfo(data){
  const box = document.getElementById('transfo'); box.innerHTML='';
  data.items.forEach((t,i)=>{
    const d = document.createElement('div'); d.className='ex';
    d.innerHTML = `<h3>Ex ${i+1}</h3>
      <blockquote>${t.present}</blockquote>
      <p><button class="btn" data-i="${i}">Voir la correction</button></p>
      <div class="feedback" id="sol-${i}" style="display:none">${t.correction_html}<div style="margin-top:6px">${t.justification}</div></div>`;
    box.appendChild(d);
  });
  box.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const el = document.getElementById('sol-'+b.getAttribute('data-i'));
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
}

// ====== Écriture ======
function renderEcriture(data){
  const box = document.getElementById('ecriture'); box.innerHTML='';
  data.exercices.forEach((e,i)=>{
    const d = document.createElement('div'); d.className='ex';
    d.innerHTML = `<h3>${i+1}) ${e.title}</h3><p>${e.consigne}</p>
      <p><button class="btn" data-i="${i}">Exemple</button></p>
      <div class="feedback" id="ex-${i}" style="display:none">${e.example_html}</div>`;
    box.appendChild(d);
  });
  box.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const el = document.getElementById('ex-'+b.getAttribute('data-i'));
      el.style.display = (el.style.display==='block')?'none':'block';
    });
  });
}

// ====== Mémo ======
function renderMemo(data){
  const box = document.getElementById('memo'); box.innerHTML='';
  data.valeurs.forEach(m=>{
    const d = document.createElement('div'); d.className='q';
    d.innerHTML = `<h3 class="${m.class}">${m.title}</h3><p>${m.desc}</p><p><i>Exemple :</i> ${m.example_html}</p>`;
    box.appendChild(d);
  });
}

// ====== Init ======
(async function init(){
  const fiche = await loadJSON('data/fiche-memo.txt'); renderMemo(fiche);
  const qcm = await loadJSON('data/qcm.txt'); renderQCM(qcm);
  const transfo = await loadJSON('data/transfo.txt'); renderTransfo(transfo);
  const ecr = await loadJSON('data/ecriture.txt'); renderEcriture(ecr);
})();
