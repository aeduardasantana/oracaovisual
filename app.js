const trinity=[
 {id:'pai',label:'DEUS PAI',meaning:'Pai que ama e cuida',pos:'52% 4%'},{id:'jesus',label:'JESUS',meaning:'Filho amado e nosso irmão',pos:'50% 49%'},{id:'espirito',label:'ESPÍRITO SANTO',meaning:'Amor de Deus, que ajuda e guia',pos:'70% 27%'}
];
const adoration=[
 {id:'criador',icon:'🌍',label:'DEUS CRIADOR',meaning:'Tudo vem de ti'},{id:'santo',icon:'✨',label:'DEUS SANTO',meaning:'Santo é o teu nome'},{id:'amor',icon:'❤️',label:'DEUS É AMOR',meaning:'Tu me amas primeiro'},{id:'presente',icon:'🔥',label:'DEUS PRESENTE',meaning:'Tu estás comigo'},{id:'misericordioso',icon:'🌊',label:'DEUS MISERICORDIOSO',meaning:'Tua misericórdia não tem fim'},{id:'fiel',icon:'🪨',label:'DEUS FIEL',meaning:'Tu permaneces para sempre'}
];
const sins=[
 {id:'impaciencia',icon:'🌩️',label:'IMPACIÊNCIA',meaning:'Não soube esperar'},{id:'palavras',icon:'🗯️',label:'PALAVRAS QUE FEREM',meaning:'Feri alguém com palavras'},{id:'omissao',icon:'🙈',label:'OMISSÃO',meaning:'Não fiz o bem que podia'},{id:'egoismo',icon:'🪞',label:'EGOÍSMO',meaning:'Pensei somente em mim'},{id:'mentira',icon:'🎭',label:'MENTIRA',meaning:'Não disse a verdade'},{id:'falta-amor',icon:'💔',label:'FALTA DE AMOR',meaning:'Não amei como Jesus ensina'}
];
const capitalSins=[
 {id:'soberba',icon:'👑',label:'SOBERBA',meaning:'Coloquei-me acima dos outros'},{id:'avareza',icon:'💰',label:'AVAREZA',meaning:'Apego desordenado ao dinheiro e às coisas'},{id:'inveja',icon:'👀',label:'INVEJA',meaning:'Entristeci-me com o bem do outro'},{id:'ira',icon:'🔥',label:'IRA',meaning:'Deixei a raiva me dominar'},{id:'luxuria',icon:'💔',label:'LUXÚRIA',meaning:'Usei a sexualidade sem amor e pureza'},{id:'gula',icon:'🍽️',label:'GULA',meaning:'Usei alimento ou bebida sem equilíbrio'},{id:'preguica',icon:'🛌',label:'PREGUIÇA',meaning:'Negligenciei o bem que deveria fazer'}
];
const commandments=[
 {id:'m1',icon:'🙏',label:'DEUS EM PRIMEIRO LUGAR',meaning:'Coloquei outras coisas acima de Deus'},{id:'m2',icon:'🗣️',label:'RESPEITAR O NOME DE DEUS',meaning:'Usei o nome de Deus sem respeito'},{id:'m3',icon:'⛪',label:'GUARDAR DOMINGOS',meaning:'Não guardei o domingo e as festas'},{id:'m4',icon:'👨‍👩‍👧',label:'HONRAR PAI E MÃE',meaning:'Não honrei pai e mãe'},{id:'m5',icon:'🫶',label:'RESPEITAR A VIDA',meaning:'Feri a vida ou a dignidade de alguém'},{id:'m6',icon:'🤍',label:'VIVER A CASTIDADE',meaning:'Não cuidei da pureza do corpo e do coração'},{id:'m7',icon:'🔒',label:'NÃO ROUBAR',meaning:'Peguei ou retive o que não era meu'},{id:'m8',icon:'💬',label:'DIZER A VERDADE',meaning:'Menti ou falei mal de alguém'},{id:'m9',icon:'💍',label:'RESPEITAR O CASAMENTO',meaning:'Alimentei desejos contra o casamento'},{id:'m10',icon:'🏠',label:'NÃO COBIÇAR',meaning:'Desejei de modo desordenado o que é do outro'}
];
const churchPrecepts=[
 {id:'p1',icon:'⛪',label:'MISSA AOS DOMINGOS',meaning:'Não participei da Missa quando devia'},{id:'p2',icon:'🕊️',label:'CONFISSÃO',meaning:'Tenho adiado a Confissão'},{id:'p3',icon:'🍞',label:'COMUNHÃO NA PÁSCOA',meaning:'Não cumpri o preceito pascal'},{id:'p4',icon:'🥣',label:'JEJUM E ABSTINÊNCIA',meaning:'Não guardei o jejum ou a abstinência'},{id:'p5',icon:'🤲',label:'AJUDAR A IGREJA',meaning:'Não ajudei a Igreja conforme minhas possibilidades'}
];
const thanks=[
 {id:'vida',icon:'☀️',label:'VIDA',meaning:'Pelo dom da vida'},{id:'familia',icon:'🏠',label:'FAMÍLIA',meaning:'Pelas pessoas que amo'},{id:'alimento',icon:'🍞',label:'ALIMENTO',meaning:'Pelo pão de cada dia'},{id:'trabalho',icon:'🧰',label:'TRABALHO',meaning:'Pelo trabalho e aprendizado'},{id:'saude',icon:'❤️‍🩹',label:'SAÚDE',meaning:'Pelo cuidado recebido'},{id:'misericordia',icon:'🌊',label:'MISERICÓRDIA',meaning:'Porque não desistes de mim'},{id:'alegria',icon:'🌻',label:'ALEGRIAS',meaning:'Pelos momentos felizes'},{id:'dificuldade',icon:'🪨',label:'DIFICULDADES',meaning:'Porque permaneces comigo'}
];
const virtues=[
 {id:'fe',icon:'🕯️',label:'FÉ',meaning:'Aumenta a minha fé'},{id:'esperanca',icon:'🌱',label:'ESPERANÇA',meaning:'Ajuda-me a confiar'},{id:'caridade',icon:'🤲',label:'CARIDADE',meaning:'Ensina-me a amar'},{id:'prudencia',icon:'🧭',label:'PRUDÊNCIA',meaning:'Ajuda-me a escolher o bem'},{id:'justica',icon:'⚖️',label:'JUSTIÇA',meaning:'Ensina-me a dar a cada um o que é devido'},{id:'fortaleza-v',icon:'🛡️',label:'FORTALEZA',meaning:'Dá-me firmeza para fazer o bem'},{id:'temperanca',icon:'⚗️',label:'TEMPERANÇA',meaning:'Ajuda-me a ter equilíbrio'}
];
const gifts=[
 {id:'sabedoria',icon:'✨',label:'SABEDORIA',meaning:'Ajuda-me a ver como Deus vê'},{id:'entendimento',icon:'💡',label:'ENTENDIMENTO',meaning:'Ajuda-me a compreender a fé'},{id:'conselho',icon:'🧭',label:'CONSELHO',meaning:'Mostra-me o que devo fazer'},{id:'fortaleza-d',icon:'🛡️',label:'FORTALEZA',meaning:'Dá-me coragem nas dificuldades'},{id:'ciencia',icon:'🌍',label:'CIÊNCIA',meaning:'Ajuda-me a ver a criação com Deus'},{id:'piedade',icon:'🙏',label:'PIEDADE',meaning:'Ensina-me a amar a Deus como filho'},{id:'temor',icon:'❤️',label:'RESPEITO A DEUS',meaning:'Afasta-me do pecado por amor'}
];
const fruits=[
 {id:'caridade-f',icon:'❤️',label:'AMOR',meaning:'Faz crescer o amor em mim'},{id:'alegria-f',icon:'😊',label:'ALEGRIA',meaning:'Dá-me alegria verdadeira'},{id:'paz',icon:'🕊️',label:'PAZ',meaning:'Coloca tua paz em mim'},{id:'paciencia-f',icon:'⌛',label:'PACIÊNCIA',meaning:'Ensina-me a esperar'},{id:'longanimidade',icon:'🌳',label:'PERSEVERANÇA',meaning:'Ajuda-me a continuar por muito tempo'},{id:'bondade',icon:'🤲',label:'BONDADE',meaning:'Faz-me praticar o bem'},{id:'benignidade',icon:'🌷',label:'GENTILEZA',meaning:'Dá-me doçura no trato'},{id:'mansidao',icon:'🐑',label:'MANSIDÃO',meaning:'Dá-me calma e domínio da força'},{id:'fidelidade',icon:'🤝',label:'FIDELIDADE',meaning:'Ajuda-me a permanecer fiel'},{id:'modestia',icon:'🌿',label:'MODÉSTIA',meaning:'Dá-me simplicidade'},{id:'continencia',icon:'🛑',label:'DOMÍNIO PRÓPRIO',meaning:'Ajuda-me a dominar meus desejos'},{id:'castidade',icon:'🤍',label:'CASTIDADE',meaning:'Purifica meu corpo e meu coração'}
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
const corporalWorks=[
 {id:'c1',icon:'🍞',label:'DAR COMIDA',meaning:'Darei alimento a quem tem fome'},{id:'c2',icon:'💧',label:'DAR BEBIDA',meaning:'Darei de beber a quem tem sede'},{id:'c3',icon:'👕',label:'DAR ROUPA',meaning:'Ajudarei quem precisa de roupa'},{id:'c4',icon:'🏠',label:'ACOLHER',meaning:'Acolherei quem precisa'},{id:'c5',icon:'🏥',label:'VISITAR DOENTES',meaning:'Visitarei ou cuidarei de um doente'},{id:'c6',icon:'🔓',label:'VISITAR PRESOS',meaning:'Lembrarei e ajudarei os presos'},{id:'c7',icon:'🕯️',label:'SEPULTAR OS MORTOS',meaning:'Tratarei os mortos com respeito e rezarei por eles'}
];
const spiritualWorks=[
 {id:'e1',icon:'📖',label:'ENSINAR',meaning:'Ensinarei quem precisa aprender'},{id:'e2',icon:'🧭',label:'DAR BOM CONSELHO',meaning:'Darei um conselho bom'},{id:'e3',icon:'↩️',label:'CORRIGIR COM AMOR',meaning:'Ajudarei alguém a voltar ao bem'},{id:'e4',icon:'🫂',label:'CONSOLAR',meaning:'Consolarei quem está triste'},{id:'e5',icon:'🤝',label:'PERDOAR',meaning:'Perdoarei quem me feriu'},{id:'e6',icon:'🌿',label:'TER PACIÊNCIA',meaning:'Terei paciência com as fraquezas do outro'},{id:'e7',icon:'🙏',label:'REZAR POR TODOS',meaning:'Rezarei pelos vivos e pelos mortos'}
];
const steps=[
 {purpose:'PRESENÇA DE DEUS',title:'Na presença da Santíssima Trindade',subtitle:'Um só Deus em três Pessoas: Pai, Filho e Espírito Santo. Cada Pessoa tem seu papel e todas estão sempre presentes nesta oração.',items:trinity,type:'person',multi:false,fixed:true},
 {purpose:'BÊNÇÃO, ADORAÇÃO E LOUVOR',title:'Quem Deus é para você hoje?',subtitle:'Reconheça a grandeza de Deus antes de apresentar qualquer pedido.',items:adoration,multi:true},
 {purpose:'PEDIR PERDÃO',title:'Por que você quer pedir perdão?',subtitle:'Abra uma categoria se desejar. Você também pode seguir sem marcar nada.',items:sins,multi:true,groups:[{label:'SITUAÇÕES DO DIA',items:sins},{label:'7 PECADOS CAPITAIS',items:capitalSins},{label:'10 MANDAMENTOS',items:commandments},{label:'PRECEITOS DA IGREJA',items:churchPrecepts}]},
 {purpose:'AÇÃO DE GRAÇAS',title:'Pelo que você quer agradecer?',subtitle:'Olhe para sua vida e reconheça os dons recebidos.',items:thanks,multi:true},
 {purpose:'PEDIR UMA GRAÇA',title:'O que você deseja pedir?',subtitle:'Escolha entre virtudes, dons e frutos do Espírito Santo. Tudo é opcional.',items:virtues,multi:true,groups:[{label:'VIRTUDES',items:virtues},{label:'7 DONS',items:gifts},{label:'12 FRUTOS',items:fruits}]},
 {purpose:'INTERCESSÃO',title:'Por quem você quer rezar?',subtitle:'Apresente a Deus as necessidades de outras pessoas.',items:intercessions,multi:true},
 {purpose:'VENERAÇÃO E INTERCESSÃO DOS SANTOS',title:'A quem você pede intercessão?',subtitle:'Aos santos prestamos veneração, nunca adoração. Eles intercedem por nós junto a Deus.',items:devotions,multi:true,saintField:true},
 {purpose:'GESTO CONCRETO',title:'Você quer escolher uma ação?',subtitle:'Escolha um propósito ou uma obra de misericórdia. Esta etapa também é opcional.',items:resolutions,multi:false,groups:[{label:'PROPÓSITOS',items:resolutions},{label:'OBRAS CORPORAIS',items:corporalWorks},{label:'OBRAS ESPIRITUAIS',items:spiritualWorks}]}
];
let current=0,saintName='',choices=steps.map(()=>[]),activeGroups=steps.map(()=>-1);choices[0]=['pai','jesus','espirito'];
const $=selector=>document.querySelector(selector),startButton=$('#startButton'),prayer=$('#orar'),content=$('#stepContent'),next=$('#nextButton'),back=$('#backButton');
function render(){
 const step=steps[current],groupOpen=activeGroups[current]>=0,visibleItems=step.groups&&groupOpen?step.groups[activeGroups[current]].items:step.groups?[]:step.items;$('#progressBar').style.width=`${((current+1)/steps.length)*100}%`;
 const groupTabs=step.groups?`<div class="group-tabs">${step.groups.map((group,index)=>{const count=group.items.filter(item=>choices[current].includes(item.id)).length;return `<button type="button" class="${activeGroups[current]===index?'active':''}" data-group="${index}"><span>${group.label}</span>${count?`<b>${count} escolhido${count>1?'s':''}</b>`:'<b>ABRIR</b>'}<i>${activeGroups[current]===index?'−':'+'}</i></button>`}).join('')}</div>`:'';
 const groupHint=step.groups&&!groupOpen?'<p class="group-hint">Escolha um dos botões acima para ver as opções.</p>':'';
 content.innerHTML=`<div class="step-head"><span class="step-number">${step.purpose} · PASSO ${current+1} DE ${steps.length}</span><h2>${step.title}</h2><p>${step.subtitle}</p></div>${groupTabs}${groupHint}<div class="cards">${visibleItems.map(item=>`<button type="button" class="visual-card ${step.type||''} ${step.fixed?'fixed':''} ${choices[current].includes(item.id)?'selected':''}" data-id="${item.id}" style="--pos:${item.pos||'50% 50%'}" aria-pressed="${choices[current].includes(item.id)}"><span class="check">✓</span><span class="art" role="img" aria-label="${item.label}">${item.icon||''}</span><span class="label">${item.label}</span><span class="meaning">${item.meaning}</span><span class="image-credit">${current===0?'Ilustração original':'Símbolo visual'}</span></button>`).join('')}</div>${step.saintField?`<div class="saint-field"><label for="saintName">OUTRO SANTO DE DEVOÇÃO</label><input id="saintName" maxlength="60" value="${saintName}" placeholder="Exemplo: Santa Teresinha do Menino Jesus"><small>Opcional. O nome será usado apenas nesta oração.</small></div>`:''}`;
 content.querySelectorAll('[data-group]').forEach(button=>button.addEventListener('click',()=>{const selected=Number(button.dataset.group);activeGroups[current]=activeGroups[current]===selected?-1:selected;render()}));
 if(!step.fixed)content.querySelectorAll('.visual-card').forEach(card=>card.addEventListener('click',()=>select(card.dataset.id)));
 if(step.saintField){const field=$('#saintName');field.addEventListener('input',event=>{saintName=event.target.value.trim();if(saintName&&!choices[current].includes('outro'))choices[current]=[...choices[current],'outro']})}
 back.style.visibility=current===0?'hidden':'visible';next.textContent=current===steps.length-1?'MONTAR MINHA ORAÇÃO →':choices[current].length?'CONTINUAR →':'PULAR →';next.disabled=false;
}
function select(id){if(steps[current].multi)choices[current]=choices[current].includes(id)?choices[current].filter(value=>value!==id):[...choices[current],id];else choices[current]=[id];render()}
function texts(list,index){return choices[index].map(id=>list.find(item=>item.id===id)?.meaning).filter(Boolean)}
function sentence(items){return items.join('; ').replace(/^./,letter=>letter.toLowerCase())}
function allStepItems(index){const step=steps[index];return step.groups?step.groups.flatMap(group=>group.items):step.items}
function stepTexts(index){return texts(allStepItems(index),index)}
function buildPrayer(){
 const resolution=allStepItems(7).find(item=>item.id===choices[7][0]);
 const selectedDevotions=choices[6].map(id=>id==='outro'?(saintName||'meu santo de devoção'):devotions.find(item=>item.id===id)?.label).filter(Boolean);
 const paragraphs=[
  {emoji:'✝️',text:'Em nome do Pai, do Filho e do Espírito Santo. Amém.'},
  {emoji:'🔺',text:'Deus Pai, Pai que ama e cuida; Jesus, Filho amado e nosso irmão; Espírito Santo, Amor de Deus, que ajuda e guia: eu me coloco diante da Santíssima Trindade.'},
  choices[1].length?{emoji:'🙌',text:`Pai, Filho e Espírito Santo, somente a vós eu adoro. Eu vos louvo: ${sentence(stepTexts(1))}.`}:null,
  choices[2].length?{emoji:'🙏',text:`Senhor, reconheço que ${sentence(stepTexts(2))}. Tem misericórdia de mim e perdoa-me.`}:null,
  choices[3].length?{emoji:'🌻',text:`Eu te agradeço ${sentence(stepTexts(3))}.`}:null,
  choices[4].length?{emoji:'🤲',text:`Senhor, eu te peço: ${sentence(stepTexts(4))}.`}:null,
  choices[5].length?{emoji:'🫂',text:`Eu intercedo: ${sentence(stepTexts(5))}.`}:null,
  selectedDevotions.length?{emoji:'🕯️',text:`${selectedDevotions.join(', ')}, intercedei por mim junto a Jesus.`}:null,
  resolution?{emoji:'👣',text:`${resolution.meaning}. Espírito Santo, ajuda-me a cumprir este propósito.`}:null
 ].filter(Boolean);
 $('#prayerSummary').innerHTML=paragraphs.map(item=>`<p><span class="summary-emoji" aria-hidden="true">${item.emoji}</span><span>${item.text}</span></p>`).join('');prayer.hidden=true;$('#closing').hidden=false;window.scrollTo({top:$('#closing').offsetTop,behavior:'smooth'});
}
startButton.addEventListener('click',()=>{$('.hero').hidden=true;$('.how').hidden=true;$('.our-father').hidden=true;prayer.hidden=false;render();window.scrollTo({top:0,behavior:'smooth'})});
back.addEventListener('click',()=>{if(current>0){current--;render();window.scrollTo({top:0,behavior:'smooth'})}});
next.addEventListener('click',()=>{if(current<steps.length-1){current++;render();window.scrollTo({top:0,behavior:'smooth'})}else buildPrayer()});
$('#finishButton').addEventListener('click',()=>{localStorage.setItem('oracaoVisualLast',new Date().toISOString().slice(0,10));updateHabit();location.reload()});
function updateHabit(){const today=new Date().toISOString().slice(0,10);$('#habitCount').textContent=localStorage.getItem('oracaoVisualLast')===today?'✓':'○'}
$('#habitButton').addEventListener('click',()=>{const toast=document.createElement('div');toast.className='toast';toast.textContent=$('#habitCount').textContent==='✓'?'Sua oração de hoje foi concluída.':'Sua oração de hoje ainda espera por você.';document.body.append(toast);setTimeout(()=>toast.remove(),2800)});updateHabit();
