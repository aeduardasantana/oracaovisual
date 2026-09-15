const trinity=[
 {id:'pai',label:'DEUS PAI',meaning:'Pai que ama e fonte de todo bem',pos:'52% 4%'},{id:'jesus',label:'JESUS CRISTO',meaning:'Filho amado, nosso irmão e mediador',pos:'50% 49%'},{id:'espirito',label:'ESPÍRITO SANTO',meaning:'Amor, Paráclito e Advogado',pos:'70% 27%'}
];
const adoration=[
 {id:'criador',icon:'🌍',label:'DEUS CRIADOR',meaning:'Tudo vem de ti'},{id:'santo',icon:'✨',label:'DEUS SANTO',meaning:'Santo é o teu nome'},{id:'amor',icon:'❤️',label:'DEUS É AMOR',meaning:'Tu me amas primeiro'},{id:'presente',icon:'🔥',label:'DEUS PRESENTE',meaning:'Tu estás comigo'},{id:'misericordioso',icon:'🌊',label:'DEUS MISERICORDIOSO',meaning:'Tua misericórdia não tem fim'},{id:'fiel',icon:'🪨',label:'DEUS FIEL',meaning:'Tu permaneces para sempre'}
];
const sins=[
 {id:'impaciencia',icon:'🌩️',label:'IMPACIÊNCIA',meaning:'Não soube esperar'},{id:'palavras',icon:'🗯️',label:'PALAVRAS QUE FEREM',meaning:'Feri alguém com palavras'},{id:'omissao',icon:'🙈',label:'OMISSÃO',meaning:'Não fiz o bem que podia'},{id:'egoismo',icon:'🪞',label:'EGOÍSMO',meaning:'Pensei somente em mim'},{id:'mentira',icon:'🎭',label:'MENTIRA',meaning:'Não disse a verdade'},{id:'falta-amor',icon:'💔',label:'FALTA DE AMOR',meaning:'Não amei como Jesus ensina'}
];
const thanks=[
 {id:'vida',icon:'☀️',label:'VIDA',meaning:'Pelo dom da vida'},{id:'familia',icon:'🏠',label:'FAMÍLIA',meaning:'Pelas pessoas que amo'},{id:'alimento',icon:'🍞',label:'ALIMENTO',meaning:'Pelo pão de cada dia'},{id:'trabalho',icon:'🧰',label:'TRABALHO',meaning:'Pelo trabalho e aprendizado'},{id:'saude',icon:'❤️‍🩹',label:'SAÚDE',meaning:'Pelo cuidado recebido'},{id:'misericordia',icon:'🌊',label:'MISERICÓRDIA',meaning:'Porque não desistes de mim'},{id:'alegria',icon:'🌻',label:'ALEGRIAS',meaning:'Pelos momentos felizes'},{id:'dificuldade',icon:'🪨',label:'DIFICULDADES',meaning:'Porque permaneces comigo'}
];
const virtues=[
 {id:'fe',icon:'🕯️',label:'FÉ',meaning:'Aumenta a minha fé'},{id:'esperanca',icon:'🌱',label:'ESPERANÇA',meaning:'Ajuda-me a confiar'},{id:'caridade',icon:'🤲',label:'CARIDADE',meaning:'Ensina-me a amar e servir'},{id:'paciencia',icon:'⌛',label:'PACIÊNCIA',meaning:'Ensina-me a esperar em paz'},{id:'coragem',icon:'🛡️',label:'CORAGEM',meaning:'Dá-me força para fazer o bem'},{id:'sabedoria',icon:'🧭',label:'SABEDORIA',meaning:'Mostra-me o caminho certo'},{id:'protecao',icon:'🕊️',label:'PROTEÇÃO',meaning:'Livra-me do mal'},{id:'sustento',icon:'🥖',label:'SUSTENTO',meaning:'Dá-me o necessário para hoje'}
];
const intercessions=[
 {id:'familia',icon:'👨‍👩‍👧',label:'MINHA FAMÍLIA',meaning:'Cuida da minha família'},{id:'amigos',icon:'🫂',label:'AMIGOS',meaning:'Abençoa os meus amigos'},{id:'doentes',icon:'🏥',label:'DOENTES',meaning:'Consola e fortalece os doentes'},{id:'igreja',icon:'⛪',label:'A IGREJA',meaning:'Guarda e santifica a tua Igreja'},{id:'necessitados',icon:'🤝',label:'NECESSITADOS',meaning:'Socorre quem mais precisa'},{id:'inimigos',icon:'🌿',label:'QUEM ME FERIU',meaning:'Abençoa quem me feriu'},{id:'falecidos',icon:'🕯️',label:'FALECIDOS',meaning:'Recebe os falecidos em tua paz'}
];
const devotions=[
 {id:'maria',icon:'🌹',label:'SANTA MARIA',meaning:'Hiperdulia: Mãe e intercessora que conduz a Jesus'},{id:'jose',icon:'⚜️',label:'SÃO JOSÉ',meaning:'Protodulia: pai no coração, protetor e intercessor'},{id:'outro',icon:'🕯️',label:'OUTRO SANTO',meaning:'Dulia: meu santo de devoção'}
];
const resolutions=[
 {id:'nao-reclamar',icon:'🤐',label:'NÃO RECLAMAR',meaning:'Hoje evitarei reclamações'},{id:'pedir-perdao',icon:'🤝',label:'PEDIR PERDÃO',meaning:'Hoje buscarei a reconciliação'},{id:'ajudar',icon:'👐',label:'AJUDAR ALGUÉM',meaning:'Hoje farei um gesto concreto de caridade'},{id:'falar-bem',icon:'💬',label:'FALAR COM BONDADE',meaning:'Hoje cuidarei das minhas palavras'},{id:'silencio',icon:'🤫',label:'FAZER SILÊNCIO',meaning:'Hoje reservarei tempo para Deus'},{id:'dever',icon:'✅',label:'CUMPRIR MEU DEVER',meaning:'Hoje farei bem o que me cabe'}
];
const steps=[
 {purpose:'PRESENÇA DE DEUS',title:'Na presença da Santíssima Trindade',subtitle:'Um só Deus em três Pessoas: Pai, Filho e Espírito Santo. Cada Pessoa tem seu papel e todas estão sempre presentes nesta oração.',items:trinity,type:'person',multi:false,fixed:true},
 {purpose:'BÊNÇÃO, ADORAÇÃO E LOUVOR',title:'Quem Deus é para você hoje?',subtitle:'Reconheça a grandeza de Deus antes de apresentar qualquer pedido.',items:adoration,multi:true},
 {purpose:'PETIÇÃO DE PERDÃO',title:'Por que você quer pedir perdão?',subtitle:'Faça um breve exame de consciência diante da misericórdia de Deus.',items:sins,multi:true},
 {purpose:'AÇÃO DE GRAÇAS',title:'Pelo que você quer agradecer?',subtitle:'Olhe para sua vida e reconheça os dons recebidos.',items:thanks,multi:true},
 {purpose:'PETIÇÃO',title:'O que você deseja pedir?',subtitle:'Apresente necessidades materiais, espirituais e as virtudes que deseja cultivar.',items:virtues,multi:true},
 {purpose:'INTERCESSÃO',title:'Por quem você quer rezar?',subtitle:'Apresente a Deus as necessidades de outras pessoas.',items:intercessions,multi:true},
 {purpose:'VENERAÇÃO E INTERCESSÃO DOS SANTOS',title:'A quem você pede intercessão?',subtitle:'Aos santos prestamos veneração, nunca adoração. Eles intercedem por nós junto a Deus.',items:devotions,multi:true,saintField:true},
 {purpose:'PROPÓSITO E PERSEVERANÇA',title:'Qual será seu gesto concreto?',subtitle:'Escolha uma resolução possível para hoje e peça a graça de perseverar.',items:resolutions,multi:false}
];
let current=0,saintName='',choices=steps.map(()=>[]);choices[0]=['pai','jesus','espirito'];
const $=selector=>document.querySelector(selector),startButton=$('#startButton'),prayer=$('#orar'),content=$('#stepContent'),next=$('#nextButton'),back=$('#backButton');
function render(){
 const step=steps[current];$('#progressBar').style.width=`${((current+1)/steps.length)*100}%`;
 content.innerHTML=`<div class="step-head"><span class="step-number">${step.purpose} · PASSO ${current+1} DE ${steps.length}</span><h2>${step.title}</h2><p>${step.subtitle}</p></div><div class="cards">${step.items.map(item=>`<button type="button" class="visual-card ${step.type||''} ${step.fixed?'fixed':''} ${choices[current].includes(item.id)?'selected':''}" data-id="${item.id}" style="--pos:${item.pos||'50% 50%'}" aria-pressed="${choices[current].includes(item.id)}"><span class="check">✓</span><span class="art" aria-hidden="true">${item.icon||'•'}</span><span class="label">${item.label}</span><span class="meaning">${item.meaning}</span></button>`).join('')}</div>${step.saintField?`<div class="saint-field"><label for="saintName">OUTRO SANTO DE DEVOÇÃO</label><input id="saintName" maxlength="60" value="${saintName}" placeholder="Exemplo: Santa Teresinha do Menino Jesus"><small>O nome será usado apenas nesta oração.</small></div>`:''}`;
 if(!step.fixed)content.querySelectorAll('.visual-card').forEach(card=>card.addEventListener('click',()=>select(card.dataset.id)));
 if(step.saintField){const field=$('#saintName');field.addEventListener('input',event=>{saintName=event.target.value.trim();if(saintName&&!choices[current].includes('outro'))choices[current]=[...choices[current],'outro'];next.disabled=choices[current].length===0})}
 back.style.visibility=current===0?'hidden':'visible';next.textContent=current===steps.length-1?'MONTAR MINHA ORAÇÃO →':'CONTINUAR →';next.disabled=choices[current].length===0;
}
function select(id){if(steps[current].multi)choices[current]=choices[current].includes(id)?choices[current].filter(value=>value!==id):[...choices[current],id];else choices[current]=[id];render()}
function texts(list,index){return choices[index].map(id=>list.find(item=>item.id===id)?.meaning).filter(Boolean)}
function sentence(items){return items.join('; ').replace(/^./,letter=>letter.toLowerCase())}
function buildPrayer(){
 const resolution=resolutions.find(item=>item.id===choices[7][0]);
 const selectedDevotions=choices[6].map(id=>id==='outro'?(saintName||'meu santo de devoção'):devotions.find(item=>item.id===id)?.label).filter(Boolean);
 const paragraphs=[
  'Em nome do Pai, do Filho e do Espírito Santo. Amém.',
  'Deus Pai, Pai que ama e fonte de todo bem; Jesus Cristo, Filho amado, nosso irmão e mediador; Espírito Santo, Amor, Paráclito e Advogado: eu me coloco diante da Santíssima Trindade.',
  `Pai, Filho e Espírito Santo, somente a vós eu adoro. Eu vos louvo: ${sentence(texts(adoration,1))}.`,
  `Senhor, reconheço que ${sentence(texts(sins,2))}. Tem misericórdia de mim e perdoa-me.`,
  `Eu te agradeço ${sentence(texts(thanks,3))}.`,`Senhor, eu te peço: ${sentence(texts(virtues,4))}.`,`Eu intercedo: ${sentence(texts(intercessions,5))}.`,
  selectedDevotions.length?`${selectedDevotions.join(', ')}, intercedei por mim junto a Jesus.`:'',
  `${resolution.meaning}. Espírito Santo, dá-me a graça da perseverança para cumprir este propósito.`
 ].filter(Boolean);
 $('#prayerSummary').innerHTML=paragraphs.map(text=>`<p>${text}</p>`).join('');prayer.hidden=true;$('#closing').hidden=false;window.scrollTo({top:$('#closing').offsetTop,behavior:'smooth'});
}
startButton.addEventListener('click',()=>{$('.hero').hidden=true;$('.how').hidden=true;$('.our-father').hidden=true;prayer.hidden=false;render();window.scrollTo({top:0,behavior:'smooth'})});
back.addEventListener('click',()=>{if(current>0){current--;render();window.scrollTo({top:0,behavior:'smooth'})}});
next.addEventListener('click',()=>{if(!choices[current].length)return;if(current<steps.length-1){current++;render();window.scrollTo({top:0,behavior:'smooth'})}else buildPrayer()});
$('#finishButton').addEventListener('click',()=>{localStorage.setItem('oracaoVisualLast',new Date().toISOString().slice(0,10));updateHabit();location.reload()});
function updateHabit(){const today=new Date().toISOString().slice(0,10);$('#habitCount').textContent=localStorage.getItem('oracaoVisualLast')===today?'✓':'○'}
$('#habitButton').addEventListener('click',()=>{const toast=document.createElement('div');toast.className='toast';toast.textContent=$('#habitCount').textContent==='✓'?'Sua oração de hoje foi concluída.':'Sua oração de hoje ainda espera por você.';document.body.append(toast);setTimeout(()=>toast.remove(),2800)});updateHabit();
