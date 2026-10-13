"use strict";
/* Oração Visual — Santo Rosário tradicional (15 mistérios / 59 contas por terço). */
const ROSARY_GROUPS = {
  gozosos: {
    label: "Gozosos",
    meaning: "A vinda do Salvador ao mundo",
    mysteries: [
      ["A Anunciação do Anjo a Maria", "Lc 1,26-38", "O anjo Gabriel anuncia que Maria será a mãe de Jesus. Maria responde com fé: aceita a vontade de Deus.", "Confiança na vontade de Deus."],
      ["A Visitação de Maria a Santa Isabel", "Lc 1,39-56", "Maria visita Isabel. Isabel reconhece a presença do Senhor, e Maria louva a Deus.", "Amor que se transforma em serviço."],
      ["O Nascimento de Jesus em Belém", "Lc 2,1-20", "Jesus nasce em Belém e é colocado numa manjedoura. Os pastores recebem a notícia de grande alegria.", "Humildade e acolhimento de Jesus."],
      ["A Apresentação de Jesus no Templo", "Lc 2,22-38", "Maria e José apresentam Jesus no Templo. Simeão reconhece a salvação de Deus.", "Oferecer nossa vida a Deus."],
      ["O Encontro de Jesus no Templo", "Lc 2,41-52", "Depois de três dias de procura, Maria e José encontram Jesus entre os mestres no Templo.", "Buscar e escutar Jesus."]
    ]
  },
  dolorosos: {
    label: "Dolorosos",
    meaning: "A Paixão redentora de Jesus",
    mysteries: [
      ["A Agonia de Jesus no Horto", "Mt 26,36-46", "Jesus reza no Getsêmani em profunda tristeza e entrega sua vontade ao Pai.", "Fidelidade a Deus nas dificuldades."],
      ["A Flagelação de Jesus", "Mt 27,26", "Jesus é açoitado antes de ser entregue para a crucificação.", "Respeito, reparação e domínio de si."],
      ["A Coroação de Espinhos", "Mt 27,27-31", "Os soldados colocam em Jesus uma coroa de espinhos e zombam dele.", "Humildade diante das humilhações."],
      ["Jesus Carrega a Cruz", "Lc 23,26-32", "No caminho do Calvário, Simão de Cirene ajuda Jesus a carregar a cruz.", "Carregar a própria cruz com amor."],
      ["A Crucifixão e Morte de Jesus", "Lc 23,33-46", "Jesus é crucificado, perdoa seus perseguidores e entrega seu espírito ao Pai.", "Perdão e amor até o fim."]
    ]
  },
  gloriosos: {
    label: "Gloriosos",
    meaning: "A vitória de Cristo e a glória prometida",
    mysteries: [
      ["A Ressurreição de Jesus", "Lc 24,1-12", "As mulheres encontram o túmulo vazio e ouvem o anúncio de que Jesus ressuscitou.", "Esperança e fé na Ressurreição."],
      ["A Ascensão de Jesus ao Céu", "At 1,6-11", "Diante dos discípulos, Jesus eleva-se ao céu e lhes confia a missão de testemunhar.", "Desejar as coisas do alto."],
      ["A Descida do Espírito Santo", "At 2,1-4", "O Espírito Santo desce sobre os discípulos reunidos e os fortalece para anunciar Jesus.", "Abertura à ação do Espírito Santo."],
      ["A Assunção de Maria ao Céu", "Lc 1,48-49 · CIC 966", "Maria proclama que Deus fez nela grandes maravilhas. A Assunção é ensinada pela Igreja; a passagem bíblica é apoio de meditação, não relato direto da Assunção.", "Esperança na vida eterna."],
      ["A Coroação de Maria no Céu", "Ap 12,1 · CIC 966", "O Apocalipse apresenta a imagem de uma mulher revestida de sol e coroada de estrelas. É uma imagem bíblica de meditação; não narra diretamente a coroação de Maria.", "Perseverança e confiança na vitória de Cristo."]
    ]
  }
};
const ROSARY_TEXTS = {
  cruz: "Em nome do Pai, e do Filho e do Espírito Santo. Amém.",
  oferecimento: "Divino Jesus, nós Vos oferecemos este terço que vamos rezar, contemplando os mistérios da nossa Redenção. Concedei-nos, por intercessão da Virgem Maria, vossa Mãe e nossa Mãe, as virtudes necessárias para bem rezá-lo e a graça de ganhar as indulgências desta santa devoção. Amém.",
  credo: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.",
  pai: "Pai nosso, que estais nos céus, santificado seja o vosso Nome; venha a nós o vosso Reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.",
  ave: "Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
  gloria: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
  fatima: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia. Amém.",
  jaculatoria: "Ó Maria concebida sem pecado, rogai por nós que recorremos a vós.",
  agradecimento: "Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo de vosso poderoso amparo e, para mais vos obrigar, vos saudamos com uma Salve-Rainha.",
  salve: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.\n\nRogai por nós, Santa Mãe de Deus.\nPara que sejamos dignos das promessas de Cristo.",
  ladainha: [
    "Senhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós.\nCristo, ouvi-nos.\nCristo, atendei-nos.\nDeus Pai do Céu, tende piedade de nós.\nDeus Filho, Redentor do mundo, tende piedade de nós.\nDeus Espírito Santo, tende piedade de nós.\nSantíssima Trindade, que sois um só Deus, tende piedade de nós.",
    ["Santa Maria","Santa Mãe de Deus","Santa Virgem das Virgens","Mãe de Cristo","Mãe da Igreja","Mãe da divina graça","Mãe puríssima","Mãe castíssima","Mãe sempre virgem","Mãe imaculada","Mãe amável","Mãe admirável","Mãe do bom conselho","Mãe do Criador","Mãe do Salvador","Virgem prudentíssima","Virgem venerável","Virgem louvável","Virgem poderosa","Virgem clemente","Virgem fiel","Espelho de justiça","Sede da sabedoria","Causa da nossa alegria","Vaso espiritual","Vaso honorífico","Vaso insigne de devoção","Rosa mística","Torre de Davi","Torre de marfim","Casa de ouro","Arca da aliança","Porta do céu","Estrela da manhã","Saúde dos enfermos","Refúgio dos pecadores","Consoladora dos aflitos","Auxílio dos cristãos","Rainha dos Anjos","Rainha dos Patriarcas","Rainha dos Profetas","Rainha dos Apóstolos","Rainha dos Mártires","Rainha dos Confessores","Rainha das Virgens","Rainha de todos os Santos","Rainha concebida sem pecado original","Rainha assunta ao Céu","Rainha do sacratíssimo Rosário","Rainha da paz"].map(name=>name+", rogai por nós.").join("\n"),
    "Cordeiro de Deus, que tirais os pecados do mundo, perdoai-nos, Senhor.\nCordeiro de Deus, que tirais os pecados do mundo, ouvi-nos, Senhor.\nCordeiro de Deus, que tirais os pecados do mundo, tende piedade de nós.\n\nRogai por nós, Santa Mãe de Deus.\nPara que sejamos dignos das promessas de Cristo."
  ].join("\n\n"),
  oremos: "Oremos. Ó Deus, cujo Filho Unigênito, pela sua vida, morte e Ressurreição, nos alcançou as recompensas da salvação eterna, concedei-nos, nós Vos suplicamos, que, meditando os mistérios do Santíssimo Rosário da Bem-aventurada Virgem Maria, imitemos o que eles contêm e alcancemos o que prometem. Pelo mesmo Cristo, Senhor nosso. Amém."
};
const IMAGE_CAPTIONS = {
  ave: ["Ave Maria,","cheia de graça,","o Senhor é convosco.","Bendita sois vós entre as mulheres,","e bendito é o fruto do vosso ventre, Jesus.","Santa Maria, Mãe de Deus,","rogai por nós, pecadores,","agora","e na hora de nossa morte.","Amém."],
  pai: ["Pai nosso, que estais nos céus,","santificado seja o vosso Nome;","venha a nós o vosso Reino;","seja feita a vossa vontade,","assim na terra como no céu.","O pão nosso de cada dia nos dai hoje;","perdoai-nos as nossas ofensas,","assim como nós perdoamos a quem nos tem ofendido;","e não nos deixeis cair em tentação,","mas livrai-nos do Mal.","Amém."]
};

/* Representações simbólicas — desenhadas em SVG, sem dependências externas. */
const MOTION_VISUALS = {
  cruz: {
    label:"Cruz iluminada: início e encerramento da oração.",
    art:'<circle cx="150" cy="93" r="79" class="halo scene-halo"/><circle cx="150" cy="93" r="62" class="halo scene-halo"/><path class="sunray scene-ray" d="M150 6 v19 M150 162 v16 M57 92 H73 M228 92 H245 M82 26 l12 13 M207 148 l13 13 M82 159 l12-13 M205 40 l14-14"/><g class="scene-cross"><path d="M140 26 h20 v54 h43 v19 h-43 v72 h-20 V99 H97 V80 h43 z" class="cross-icon"/><path d="M150 43 V155" stroke="#c69545" stroke-width="2"/></g>'
  },
  credo: {
    label:"Cruz da profissão de fé; luz suave envolvendo o crucifixo.",
    art:'<circle cx="150" cy="93" r="78" class="halo scene-halo"/><circle cx="150" cy="93" r="59" class="halo scene-halo"/><path class="sunray scene-ray" d="M150 7 v18 M150 164 v15 M66 93 h20 M215 93 h20 M88 35 l14 15 M195 136 l14 15"/><g class="scene-cross"><path d="M140 27 h20 v54 h42 v20 h-42 v69 h-20 v-69 H98 V81 h42 z" class="cross-icon"/><path d="M145 33 h10" stroke="#dcb875" stroke-width="2"/></g>'
  },
  gloria: {
    label:"Três círculos luminosos e raios suaves simbolizam o louvor à Santíssima Trindade.",
    art:'<circle cx="150" cy="94" r="83" class="halo scene-halo"/><circle cx="150" cy="94" r="60" class="halo scene-halo"/><g class="scene-light"><circle cx="150" cy="66" r="25" fill="#eed498" opacity=".75"/><circle cx="113" cy="124" r="25" fill="#f1e4c2" opacity=".75"/><circle cx="187" cy="124" r="25" fill="#b7d1db" opacity=".65"/></g><path d="M150 66 L113 124 L187 124 Z" fill="none" stroke="#c39a53" stroke-width="3" opacity=".7"/><g class="scene-ray"><path class="sunray" d="M150 5 v19 M150 169 v13 M59 95 h19 M222 95 h20 M86 29 l14 16 M202 146 l12 14 M86 156 l14-16 M203 42 l13-13"/></g>'
  },
  pai: {
    label:"Família voltada para a luz celeste, em oração ao Pai.",
    art:'<g class="scene-light"><path d="M129 8 L102 98 H198 L171 8 Z" fill="#edd39a" opacity=".46"/><circle cx="150" cy="20" r="20" class="light"/></g><g class="scene-praying"><circle cx="92" cy="91" r="17" class="silhouette"/><path d="M62 160 Q64 115 92 114 Q122 115 127 160 Z" class="silhouette"/><path d="M108 116 L135 95" class="line-art"/><circle cx="207" cy="91" r="17" class="silhouette"/><path d="M175 160 Q177 115 207 114 Q235 115 239 160 Z" class="silhouette"/><path d="M188 116 L164 95" class="line-art"/><circle cx="151" cy="117" r="13" class="silhouette"/><path d="M132 166 Q133 134 150 133 Q168 134 169 166 Z" class="silhouette"/><path d="M143 137 L150 125 L157 137" class="line-art"/></g>'
  },
  ave: {
    label:"Silhueta de Nossa Senhora do Rosário, com manto e terço nas mãos.",
    art:'<circle cx="150" cy="71" r="54" class="halo scene-halo"/><g class="scene-mantle"><path d="M150 30 Q113 33 109 98 L78 165 Q147 183 223 165 L193 98 Q190 33 150 30 Z" fill="#517797"/><path d="M151 47 Q131 49 128 71 Q128 95 151 99 Q173 94 174 71 Q172 50 151 47 Z" fill="#efd4ad"/><path d="M115 106 Q149 128 185 106 L199 167 Q149 181 99 167 Z" fill="#f0e7d2"/><path d="M136 113 L150 130 L164 113" class="line-art" style="stroke-width:4"/><path class="rosary-chain" d="M154 128 C205 125 205 166 171 168 C151 167 161 149 181 145"/><circle cx="184" cy="139" r="3" class="rosary-bead-mini"/><circle cx="193" cy="148" r="3" class="rosary-bead-mini"/><circle cx="190" cy="157" r="3" class="rosary-bead-mini"/><circle cx="182" cy="165" r="3" class="rosary-bead-mini"/><path d="M173 165 v12 M167 171 h12" class="rosary-chain"/></g>'
  },
  fatima: {
    label:"Pessoa inclinando a cabeça e levando a mão ao peito em gesto de arrependimento.",
    art:'<circle cx="150" cy="91" r="72" class="halo scene-halo"/><g><g class="scene-head-bow"><circle cx="148" cy="51" r="20" class="silhouette"/></g><path d="M128 78 Q153 70 171 90 L185 150 L112 150 Z" class="silhouette"/><path class="scene-heart-hand" d="M178 100 Q157 115 151 122 L140 118" class="line-art"/><path d="M140 123 C135 118 129 125 140 135 C151 125 144 118 140 123 Z" class="heart"/><path d="M121 146 Q102 161 95 177 M174 145 Q195 160 199 177" class="line-art"/></g>'
  },
  misterio:{
    label:"Bíblia aberta, com luz sobre as páginas para a contemplação do mistério.",
    art:'<circle cx="150" cy="73" r="59" class="halo scene-halo"/><g class="scene-book-page"><path d="M150 65 Q109 48 62 65 V149 Q108 132 150 150 Z" fill="#faf2df" stroke="#a88b60" stroke-width="3"/><path d="M150 65 Q190 48 238 65 V149 Q193 132 150 150 Z" fill="#fff8e9" stroke="#a88b60" stroke-width="3"/><path d="M150 65 V150 M85 90 l46 2 M85 106 l46 2 M168 91 l47-3 M168 107 l47-3" stroke="#b7a98e" stroke-width="3"/></g><path d="M150 25 V42" class="sunray scene-ray"/>'
  },
  oferecimento:{
    label:"Mãos abertas em oferecimento, sob uma luz serena.",
    art:'<circle cx="150" cy="55" r="52" class="halo scene-halo"/><g class="scene-light"><circle cx="150" cy="52" r="25" fill="#e9cc8c"/></g><path d="M43 146 Q89 107 135 140 L150 150 L165 140 Q211 107 257 146" fill="none" stroke="#345978" stroke-width="17" stroke-linecap="round"/><path d="M70 132 Q111 89 148 133 M230 132 Q187 89 152 133" fill="none" stroke="#bc9463" stroke-width="10" stroke-linecap="round"/>'
  },
  salve:{
    label:"Nossa Senhora acolhedora, com o manto aberto em gesto de proteção.",
    art:'<circle cx="150" cy="61" r="49" class="halo scene-halo"/><g class="scene-mantle"><path d="M150 22 Q111 27 108 86 L54 166 Q149 190 246 166 L192 86 Q189 27 150 22 Z" fill="#456c8d"/><path d="M150 40 Q130 43 128 68 Q129 91 150 94 Q171 90 172 68 Q170 43 150 40 Z" fill="#e6c79f"/><path d="M122 104 Q150 127 178 104 L196 172 H104 Z" fill="#f1e6d0"/><path d="M111 110 L79 142 M188 110 L220 142" class="line-art" style="stroke-width:5"/></g>'
  },
  default: {
    label:"Luz serena e recolhimento durante a oração.",
    art:'<circle cx="150" cy="93" r="72" class="halo scene-halo"/><circle cx="150" cy="93" r="42" class="light scene-light"/><path d="M112 153 Q150 125 188 153" fill="none" stroke="#345978" stroke-width="10" stroke-linecap="round"/>'
  }
};

const $ = id => document.getElementById(id);
const status = $("progressText");
const svg = $("rosaryMap");
const ns = "http://www.w3.org/2000/svg";
const cacheKey = "oracao-visual-rosario-tradicional-v1";
const dayKey = new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
const todayCode = new Intl.DateTimeFormat("en-US",{timeZone:"America/Sao_Paulo",weekday:"short"}).format(new Date()).toLowerCase().slice(0,3);
const DAY_MAP = {mon:"gozosos",tue:"dolorosos",wed:"gloriosos",thu:"gozosos",fri:"dolorosos",sat:"gloriosos",sun:"gloriosos"};
const DAY_NAMES = {mon:"segunda-feira",tue:"terça-feira",wed:"quarta-feira",thu:"quinta-feira",fri:"sexta-feira",sat:"sábado",sun:"domingo"};
const todayGroup = DAY_MAP[todayCode] || "gozosos";
let selectedGroup = todayGroup;
let selectedMode = "dia";
let steps = [], index = 0, started = false, finished = false, currentFrame = 0, zoom = "mystery";
let points = [];
let restore = null;
try {
  const stored = JSON.parse(localStorage.getItem(cacheKey) || "null");
  if(stored && stored.date === dayKey && ["dia","escolhido","tradicional","terco"].includes(stored.mode)
    && Object.hasOwn(ROSARY_GROUPS,stored.group)) restore = stored;
} catch (_) { /* sem armazenamento disponível: continuar normalmente */ }


const motionKey = "oracao-visual-animacoes-v1";
let animationsEnabled = !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
try {
  const savedMotion = localStorage.getItem(motionKey);
  if(savedMotion!==null)animationsEnabled = savedMotion==="true";
} catch (_) {}
$("motionEnabled").checked=animationsEnabled;
function updateMotion(step) {
  const kind = Object.hasOwn(MOTION_VISUALS,step.type) ? step.type :
    step.type==="jaculatoria" || step.type==="ladainha" ? "ave" :
    step.type==="agradecimento" ? "oferecimento" :
    step.type==="oremos" ? "default" : "default";
  const motion=MOTION_VISUALS[kind];
  const stage=$("prayerMotion");
  stage.setAttribute("aria-label",motion.label);
  stage.className="prayer-motion scene-"+kind+(animationsEnabled?" is-animated":"");
  stage.innerHTML='<svg viewBox="0 0 300 185" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+motion.art+'</svg>';
  $("motionDescription").textContent=motion.label;
  document.body.classList.toggle("rosary-glory",animationsEnabled && step.type==="gloria");
}
$("motionEnabled").addEventListener("change",event=>{
  animationsEnabled=Boolean(event.target.checked);
  try{localStorage.setItem(motionKey,String(animationsEnabled))}catch(_){}
  if(started)updateMotion(steps[index]);
  else updateMotion({type:"cruz"});
});

function beadPoint(i) {
  if(i < 55) {
    const angle = -Math.PI / 2 + i * Math.PI * 2 / 55;
    return {x:350 + 232 * Math.cos(angle), y:316 + 225 * Math.sin(angle),big:i%11===0};
  }
  const tailY = [613,650,681,712];
  return {x:350,y:tailY[i-55],big:i===55};
}
points = Array.from({length:59},(_,i)=>beadPoint(i));

function svgItem(name,attrs={},parent=svg) {
  const e=document.createElementNS(ns,name);
  for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));
  parent.appendChild(e);
  return e;
}
function buildMap(){
  svg.textContent="";
  svgItem("title",{},svg).textContent="Mapa do terço tradicional, com 59 contas";
  svgItem("desc",{},svg).textContent="55 contas no círculo, sendo cinco maiores e 50 menores; quatro na haste e o crucifixo. A posição atual é destacada.";
  const path = points.slice(0,55).map((p,i)=>(i===0?"M":"L")+p.x.toFixed(1)+" "+p.y.toFixed(1)).join(" ")+" Z";
  svgItem("path",{d:path,class:"rosary-wire"});
  svgItem("path",{d:"M350 541 L350 738",class:"rosary-wire"});
  svgItem("ellipse",{cx:350,cy:569,rx:19,ry:22,class:"rosary-medal"});
  svgItem("text",{x:350,y:575,class:"rosary-mark","aria-hidden":"true"}).textContent="M";
  svgItem("path",{d:"M341 741 h18 v14 h11 v15 h-11 v35 h-18 v-35 h-11 v-15 h11 z",class:"rosary-cross",id:"rosaryCross",role:"button",tabindex:"0","aria-label":"Ir para o início do terço, sinal da Cruz"});
  points.forEach((p,i)=>{
    svgItem("circle",{cx:p.x,cy:p.y,r:p.big?12:8,class:"rosary-bead "+(p.big?"rosary-large":"rosary-small"),"data-bead":i,role:"button",tabindex:"0","aria-label":i<55?("Ir para a conta "+(i+1)+" do círculo"):("Ir para a conta "+(i-54)+" do início")});
  });
  svg.addEventListener("click",event=>{
    const el=event.target.closest("[data-bead],#rosaryCross");
    if(!el)return;
    const bead=el.id==="rosaryCross"?null:Number(el.getAttribute("data-bead"));
    gotoBead(bead);
  });
  svg.addEventListener("keydown",event=>{
    if(event.key!=="Enter" && event.key!==" ")return;
    const el=event.target.closest("[data-bead],#rosaryCross");if(!el)return;
    event.preventDefault();
    gotoBead(el.id==="rosaryCross"?null:Number(el.getAttribute("data-bead")));
  });
}
function appendStep(type,title,{bead=null,group=null,mystery=null,position=null,caption="",optional=false,ref="",meditation="",context=""}={}) {
  steps.push({type,title,bead,group,mystery,position,caption,optional,ref,meditation,context});
}
function buildSteps(){
  steps=[];
  appendStep("cruz","Sinal da Cruz",{context:"Comece a oração com o sinal da Cruz."});
  appendStep("oferecimento","Oferecimento do Terço",{context:"Apresente a Deus suas intenções, as do Santo Padre, da Santa Igreja, pela paz, pela conversão, reparação, salvação das almas e por quem mais necessita de oração."});
  appendStep("credo","Creio em Deus Pai",{context:"No crucifixo, faça a profissão de fé."});
  appendStep("pai","Pai-Nosso inicial",{bead:55,context:"Na primeira conta grande da haste."});
  ["fé","esperança","caridade"].forEach((virtue,i)=>appendStep("ave","Ave-Maria inicial — "+(i+1)+"ª",{bead:56+i,context:"Ofereça esta Ave-Maria pedindo a virtude da "+virtue+"."}));
  appendStep("gloria","Glória ao Pai",{bead:58,context:"Ao final das três Ave-Marias, louve a Santíssima Trindade."});
  const groups=selectedMode==="tradicional"?["gozosos","dolorosos","gloriosos"]:[selectedGroup];
  groups.forEach((group,g)=>{
    ROSARY_GROUPS[group].mysteries.forEach((m,n)=>{
      const beadBase=n*11;
      appendStep("misterio",(n+1)+"º Mistério "+ROSARY_GROUPS[group].label+": "+m[0],{bead:beadBase,group,mystery:n,position:g,ref:m[1],meditation:m[2],context:m[3]});
      appendStep("pai","Pai-Nosso — "+(n+1)+"º mistério",{bead:beadBase,group,mystery:n,position:g,ref:m[1]});
      for(let prayer=1;prayer<=10;prayer++){
        appendStep("ave","Ave-Maria "+prayer+" de 10",{bead:beadBase+prayer,group,mystery:n,position:g,ref:m[1]});
      }
      appendStep("gloria","Glória ao Pai — "+(n+1)+"º mistério",{bead:beadBase+10,group,mystery:n,position:g,ref:m[1]});
      appendStep("fatima","Jaculatória: Ó meu Jesus",{bead:beadBase+10,group,mystery:n,position:g,optional:true});
      appendStep("jaculatoria","Jaculatória: Ó Maria concebida sem pecado",{bead:beadBase+10,group,mystery:n,position:g,optional:true});
    });
  });
  appendStep("agradecimento","Agradecimento a Nossa Senhora");
  appendStep("salve","Salve-Rainha");
  appendStep("ladainha","Ladainha de Nossa Senhora",{optional:true,context:"Oração mariana tradicional de invocações. Você pode rezá-la aqui ou passar diretamente à oração final."});
  appendStep("oremos","Oração final do Rosário");
  appendStep("cruz","Sinal da Cruz — encerramento");
}
function gotoBead(bead){
  if(!started)return;
  const current=steps[index] || {};
  const position=typeof current.position==="number"?current.position:0;
  let stepIndex;
  if(bead===null)stepIndex=steps.findIndex(s=>s.type==="cruz");
  else stepIndex=steps.findIndex(s=>s.bead===bead && (bead>=55 || s.position===position) && (s.type==="pai"||s.type==="ave"));
  if(stepIndex<0)return;
  index=stepIndex;finished=false;currentFrame=0;render();save();
}
function currentPoint(){
  const s=steps[index] || {};
  if(s.bead!==null && s.bead!==undefined)return points[s.bead];
  return {x:350,y:764};
}
function updateZoom(){
  const p=currentPoint();
  let box=[0,0,700,820];
  if(zoom==="bead")box=[p.x-105,p.y-100,210,200];
  if(zoom==="mystery"){
    const s=steps[index]||{};
    if(typeof s.mystery==="number"){
      const segment=points.slice(s.mystery*11,s.mystery*11+11);
      const minX=Math.min(...segment.map(p=>p.x)),minY=Math.min(...segment.map(p=>p.y));
      const maxX=Math.max(...segment.map(p=>p.x)),maxY=Math.max(...segment.map(p=>p.y));
      const cx=(minX+maxX)/2,cy=(minY+maxY)/2;
      const width=Math.max(260,maxX-minX+90),height=Math.max(260,maxY-minY+90);
      const side=Math.max(width,height);
      box=[cx-side/2,cy-side/2,side,side];
    } else box=[155,460,390,350];
  }
  svg.setAttribute("viewBox",box.join(" "));
  document.querySelectorAll("[data-zoom]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.zoom===zoom)));
}
function updateMap(){
  const step=steps[index]||{};
  const activeBead=step.bead;
  const activePosition=typeof step.position==="number"?step.position:0;
  const visited=new Set();
  if(started) {
    for(let i=0;i<index;i++){
      const s=steps[i];if(typeof s.bead!=="number")continue;
      if(typeof s.position==="number" && s.position!==activePosition)continue;
      visited.add(s.bead);
    }
  }
  svg.querySelectorAll("[data-bead]").forEach(el=>{
    const bead=Number(el.dataset.bead);
    el.classList.toggle("is-current",started && bead===activeBead);
    el.classList.toggle("is-complete",visited.has(bead) && bead!==activeBead);
  });
  svg.querySelectorAll(".rosary-halo").forEach(e=>e.remove());
  if(started && typeof activeBead==="number"){
    const p=points[activeBead];
    const halo=svgItem("circle",{cx:p.x,cy:p.y,r:p.big?22:17,class:"rosary-halo"});
    svg.insertBefore(halo,svg.querySelector("[data-bead]"));
  }
  updateZoom();
}
function frameUpdate(){
  const step=steps[index]||{};
  const isImage=step.type==="pai"||step.type==="ave";
  $("prayerImage").hidden=!isImage;
  $("illustratedLink").hidden=!isImage;
  if(!isImage)return;
  const captions=IMAGE_CAPTIONS[step.type];
  currentFrame=Math.min(Math.max(0,currentFrame),captions.length-1);
  const folder=step.type==="pai"?"pai-nosso":"ave-maria";
  $("prayerImageSrc").src="assets/oracoes-ilustradas/"+folder+"/"+String(currentFrame+1).padStart(2,"0")+".webp";
  $("prayerImageSrc").alt="Ilustração "+(currentFrame+1)+" de "+captions.length+": "+captions[currentFrame];
  $("frameCaption").textContent=captions[currentFrame];
  $("frameCounter").textContent=(currentFrame+1)+" de "+captions.length;
  $("framePrev").disabled=currentFrame===0;
  $("frameNext").disabled=currentFrame===captions.length-1;
  $("illustratedLink").href=folder+".html";
  $("illustratedLink").textContent="ABRIR "+(step.type==="pai"?"PAI-NOSSO":"AVE-MARIA")+" ILUSTRADO ↗";
}
function currentMystery(step){
  if(step.group==null || step.mystery==null)return null;
  return ROSARY_GROUPS[step.group].mysteries[step.mystery];
}
function render(){
  if(!started){$("currentGroup").textContent="Mistérios "+ROSARY_GROUPS[selectedGroup].label;$("progressText").textContent="Escolha seu percurso para começar";return}
  const s=steps[index],m=currentMystery(s);
  const group=s.group?ROSARY_GROUPS[s.group].label:null;
  $("currentGroup").textContent=group?"Mistérios "+group:(selectedMode==="tradicional"?"Rosário completo":selectedMode==="dia"?"Terço do dia":"Terço escolhido");
  $("stepTitle").textContent=s.title;
  $("stepType").textContent=s.type==="misterio"?"MEDITAÇÃO DO MISTÉRIO":s.type==="oferecimento"?"INTENÇÕES E OFERECIMENTO":s.type==="salve"?"ORAÇÃO A NOSSA SENHORA":s.type==="cruz"?"SINAL DA CRUZ":s.type==="agradecimento"?"AGRADECIMENTO":s.type==="oremos"?"ORAÇÃO FINAL":s.type==="ladainha"?"LADAINHA DE NOSSA SENHORA":s.type==="credo"?"PROFISSÃO DE FÉ":s.type==="fatima"||s.type==="jaculatoria"?"JACULATÓRIA":s.type==="gloria"?"LOUVOR À SANTÍSSIMA TRINDADE":"ORAÇÃO DA CONTA ATUAL";
  $("mysteryContext").hidden=!(s.type==="misterio"||s.context);
  $("mysteryContext").textContent=s.type==="misterio"?"Para contemplar: "+s.context:s.context||"";
  $("stepWords").textContent=s.type==="misterio"?(s.meditation+"\n\nPausa para contemplar antes de começar esta dezena."):ROSARY_TEXTS[s.type]||"";
  $("stepReference").textContent=s.ref?"PASSAGEM BÍBLICA: "+s.ref+(m && (s.group==="gloriosos" && s.mystery>=3)?" · referência de meditação, não relato literal":""):"";
  $("skipOptional").hidden=!s.optional;
  $("previousBead").disabled=index===0;
  $("concludeBead").innerHTML=index===steps.length-1?'ENCERRAR <span aria-hidden="true">✓</span>':'CONCLUÍ <span aria-hidden="true">→</span>';
  const fraction=(index+1)/steps.length;
  $("rosaryProgressFill").style.width=(fraction*100).toFixed(1)+"%";
  $("rosaryProgress").setAttribute("aria-valuenow",String(Math.round(fraction*100)));
  const currentGroupIndex=typeof s.position==="number"?s.position+1:1;
  const groupsTotal=selectedMode==="tradicional"?3:1;
  const stepDesc=group && m?(s.mystery+1)+"º mistério de 5 · grupo "+currentGroupIndex+" de "+groupsTotal:"Orações de abertura ou encerramento";
  $("progressText").textContent="Etapa "+(index+1)+" de "+steps.length+" · "+stepDesc;
  $("rosaryFinished").hidden=!finished;
  $("prayerPanel").hidden=finished;
  updateMap();
  frameUpdate();
  updateMotion(s);
}
function save(){
  try{localStorage.setItem(cacheKey,JSON.stringify({date:dayKey,mode:selectedMode,group:selectedGroup,index,started,finished,zoom}));}catch(_){}
}
function start(){
  selectedMode=$("rosaryMode").value;
  selectedGroup=selectedMode==="tradicional"?"gozosos":(selectedMode==="dia"?todayGroup:selectedGroup);
  buildSteps();
  started=true;finished=false;index=0;currentFrame=0;
  render();save();
  $("rosaryExperience").scrollIntoView({behavior:"smooth",block:"start"});
}
function changeMode(){
  selectedMode=$("rosaryMode").value;
  $("mysteryPicker").hidden=selectedMode!=="escolhido";
  if(selectedMode==="dia")selectedGroup=todayGroup;
  document.querySelectorAll("[data-group]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.group===selectedGroup)));
  $("routeSummary").textContent=selectedMode==="tradicional"?"Rosário completo · 15 mistérios · 150 Ave-Marias nas dezenas":selectedMode==="dia"?"Terço do dia · 5 mistérios "+ROSARY_GROUPS[todayGroup].label:"Terço escolhido · 5 mistérios "+ROSARY_GROUPS[selectedGroup].label;
  $("startRosary").textContent=started?"RECOMEÇAR COM ESTE PERCURSO →":"COMEÇAR A REZAR →";
}
function selectGroup(group){
  if(!Object.hasOwn(ROSARY_GROUPS,group))return;
  selectedGroup=group;
  document.querySelectorAll("[data-group]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.group===group)));
  changeMode();
}
$("mysteryOfDay").textContent="HOJE, "+DAY_NAMES[todayCode].toUpperCase()+" · MISTÉRIOS "+ROSARY_GROUPS[todayGroup].label.toUpperCase()+" · SUGESTÃO TRADICIONAL DE SÃO LUÍS DE MONTFORT";
$("rosaryMode").addEventListener("change",changeMode);
document.querySelectorAll("[data-group]").forEach(b=>b.addEventListener("click",()=>selectGroup(b.dataset.group)));
document.querySelectorAll("[data-zoom]").forEach(b=>b.addEventListener("click",()=>{zoom=b.dataset.zoom;updateZoom();save();}));
$("startRosary").addEventListener("click",start);
$("previousBead").addEventListener("click",()=>{if(index===0)return;index--;finished=false;currentFrame=0;render();save();});
$("concludeBead").addEventListener("click",()=>{
  if(!started)return;
  if(index>=steps.length-1){finished=true;render();save();$("rosaryFinished").scrollIntoView({behavior:"smooth",block:"center"});return;}
  index++;currentFrame=0;render();save();
});
$("skipOptional").addEventListener("click",()=>{if(!steps[index]?.optional)return;index++;currentFrame=0;render();save()});
$("framePrev").addEventListener("click",()=>{currentFrame--;frameUpdate()});
$("frameNext").addEventListener("click",()=>{currentFrame++;frameUpdate()});
$("restartRosary").addEventListener("click",start);
buildMap();
updateMotion({type:"cruz"});
if(restore?.started){
  selectedMode=restore.mode==="terco"?"escolhido":restore.mode;selectedGroup=restore.group;$("rosaryMode").value=selectedMode;
  selectGroup(selectedGroup);changeMode();buildSteps();
  index=Math.min(Math.max(0,Number(restore.index)||0),steps.length-1);
  zoom=["all","mystery","bead"].includes(restore.zoom)?restore.zoom:"mystery";
  started=true;finished=Boolean(restore.finished);render();
  $("startRosary").textContent="RECOMEÇAR COM ESTE PERCURSO →";
} else {
  selectGroup(selectedGroup);
  updateMap();
}
