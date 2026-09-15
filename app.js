const people=[
 {id:'pai',label:'DEUS PAI',meaning:'Pai que ama',pos:'52% 4%'},
 {id:'jesus',label:'JESUS',meaning:'Filho amado, nosso irmão',pos:'50% 49%'},
 {id:'espirito',label:'ESPÍRITO SANTO',meaning:'O Amor, Paráclito e Advogado',pos:'70% 27%'},
 {id:'maria',label:'SANTA MARIA',meaning:'Intercede junto a Jesus',pos:'8% 42%'},
 {id:'jose',label:'SÃO JOSÉ',meaning:'Intercede junto a Jesus',pos:'94% 44%'}
];
const sins=[
 {id:'impaciencia',icon:'🌩️',label:'IMPACIÊNCIA',meaning:'Perdão por não saber esperar'},
 {id:'palavras',icon:'🗯️',label:'PALAVRAS QUE FEREM',meaning:'Perdão pelo que eu disse'},
 {id:'omissao',icon:'🙈',label:'OMISSÃO',meaning:'Perdão pelo bem que não fiz'},
 {id:'egoismo',icon:'🪞',label:'EGOÍSMO',meaning:'Perdão por pensar só em mim'},
 {id:'mentira',icon:'🎭',label:'MENTIRA',meaning:'Perdão por não dizer a verdade'},
 {id:'falta-amor',icon:'💔',label:'FALTA DE AMOR',meaning:'Perdão por não amar como Jesus'}
];
const virtues=[
 {id:'fe',icon:'🕯️',label:'FÉ',meaning:'Senhor, aumenta a minha fé'},
 {id:'esperanca',icon:'🌱',label:'ESPERANÇA',meaning:'Ajuda-me a confiar'},
 {id:'caridade',icon:'🤲',label:'CARIDADE',meaning:'Ensina-me a amar e servir'},
 {id:'paciencia',icon:'⌛',label:'PACIÊNCIA',meaning:'Ensina-me a esperar em paz'},
 {id:'coragem',icon:'🛡️',label:'CORAGEM',meaning:'Dá-me força para fazer o bem'},
 {id:'sabedoria',icon:'🧭',label:'SABEDORIA',meaning:'Mostra-me o caminho certo'}
];
const thanks=[
 {id:'vida',icon:'☀️',label:'VIDA',meaning:'Obrigado pelo dom da vida'},
 {id:'familia',icon:'🏠',label:'FAMÍLIA',meaning:'Obrigado pelas pessoas que amo'},
 {id:'alimento',icon:'🍞',label:'ALIMENTO',meaning:'Obrigado pelo pão de cada dia'},
 {id:'trabalho',icon:'🧰',label:'TRABALHO',meaning:'Obrigado pelo trabalho e aprendizado'},
 {id:'saude',icon:'❤️',label:'SAÚDE',meaning:'Obrigado pelo cuidado recebido'},
 {id:'misericordia',icon:'🌊',label:'MISERICÓRDIA',meaning:'Obrigado porque não desistes de mim'},
 {id:'alegria',icon:'🌻',label:'ALEGRIAS',meaning:'Obrigado pelos momentos felizes'},
 {id:'dificuldade',icon:'🪨',label:'DIFICULDADES',meaning:'Obrigado por permanecer comigo'}
];
const steps=[
 {title:'Com quem você quer começar?',subtitle:'Escolha uma imagem. Você poderá dirigir-se a Deus ou pedir a intercessão dos santos.',items:people,type:'person',multi:false},
 {title:'O que você quer pedir perdão?',subtitle:'Olhe as imagens com calma. Escolha tudo o que deseja apresentar ao Senhor.',items:sins,multi:true},
 {title:'Qual virtude você quer pedir?',subtitle:'Escolha o que deseja cultivar com a graça de Deus.',items:virtues,multi:true},
 {title:'Pelo que você quer agradecer?',subtitle:'Reconheça os sinais de cuidado e presença de Deus na sua vida.',items:thanks,multi:true}
];
let current=0;let choices=[[],[],[],[]];
const $=s=>document.querySelector(s);
const startButton=$('#startButton'), prayer=$('#orar'), how=$('.how'), hero=$('.hero'), content=$('#stepContent'), next=$('#nextButton'), back=$('#backButton');

function render(){
 const step=steps[current];
 $('#progressBar').style.width=`${(current+1)*25}%`;
 content.innerHTML=`<div class="step-head"><span class="step-number">PASSO ${current+1} DE 4</span><h2>${step.title}</h2><p>${step.subtitle}</p></div><div class="cards">${step.items.map(item=>`<button type="button" class="visual-card ${step.type||''} ${choices[current].includes(item.id)?'selected':''}" data-id="${item.id}" style="--pos:${item.pos||'50% 50%'}" aria-pressed="${choices[current].includes(item.id)}"><span class="check">✓</span><span class="art">${item.icon||'•'}</span><span class="label">${item.label}</span><span class="meaning">${item.meaning}</span></button>`).join('')}</div>`;
 content.querySelectorAll('.visual-card').forEach(card=>card.addEventListener('click',()=>select(card.dataset.id)));
 back.style.visibility=current===0?'hidden':'visible';
 next.textContent=current===3?'MONTAR MINHA ORAÇÃO →':'CONTINUAR →';
 next.disabled=choices[current].length===0;
}
function select(id){const multi=steps[current].multi;if(multi){choices[current]=choices[current].includes(id)?choices[current].filter(x=>x!==id):[...choices[current],id]}else{choices[current]=[id]}render()}
function chosenText(list,index){return choices[index].map(id=>list.find(x=>x.id===id)?.meaning).filter(Boolean)}
function buildPrayer(){
 const person=people.find(x=>x.id===choices[0][0]);
 const opening=person.id==='maria'||person.id==='jose'?`${person.label}, ${person.meaning.toLowerCase()} por mim.`:person.id==='espirito'?`Espírito Santo, Amor de Deus, vem em meu auxílio.`:`${person.label}, eu estou diante de ti.`;
 const paragraphs=[opening,`Senhor, ${chosenText(sins,1).join('; ').toLowerCase()}. Tem misericórdia de mim.`,`Senhor, ${chosenText(virtues,2).join('; ').toLowerCase()}.`,`Senhor, ${chosenText(thanks,3).join('; ').toLowerCase()}. Recebe a minha gratidão.`];
 $('#prayerSummary').innerHTML=paragraphs.map(p=>`<p>${p}</p>`).join('');
 prayer.hidden=true;$('#closing').hidden=false;window.scrollTo({top:$('#closing').offsetTop,behavior:'smooth'});
}
startButton.addEventListener('click',()=>{hero.hidden=true;how.hidden=true;prayer.hidden=false;render();window.scrollTo({top:0,behavior:'smooth'})});
back.addEventListener('click',()=>{if(current>0){current--;render();window.scrollTo({top:0,behavior:'smooth'})}});
next.addEventListener('click',()=>{if(!choices[current].length)return;if(current<3){current++;render();window.scrollTo({top:0,behavior:'smooth'})}else buildPrayer()});
$('#finishButton').addEventListener('click',()=>{const today=new Date().toISOString().slice(0,10);localStorage.setItem('oracaoVisualLast',today);updateHabit();location.reload()});
function updateHabit(){const today=new Date().toISOString().slice(0,10);$('#habitCount').textContent=localStorage.getItem('oracaoVisualLast')===today?'✓':'○'}
$('#habitButton').addEventListener('click',()=>{const t=document.createElement('div');t.className='toast';t.textContent=$('#habitCount').textContent==='✓'?'Sua oração de hoje foi concluída.':'Sua oração de hoje ainda espera por você.';document.body.append(t);setTimeout(()=>t.remove(),2800)});
updateHabit();
