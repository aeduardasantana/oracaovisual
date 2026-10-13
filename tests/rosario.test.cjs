"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const read=path=>fs.readFileSync(path,"utf8");
const source=read("rosario.js");
new vm.Script(source,{filename:"rosario.js"});
const data=source.slice(0,source.indexOf("const $ ="));
const builders=source.slice(source.indexOf("function appendStep("),source.indexOf("function gotoBead("));
const pointsBuilder=source.slice(source.indexOf("function beadPoint(i) {"),source.indexOf("points = Array.from"));
assert.ok(data && builders && pointsBuilder);
const definitions=vm.runInNewContext(data+"\n;({ROSARY_GROUPS,ROSARY_TEXTS,IMAGE_CAPTIONS})");
const groups=definitions.ROSARY_GROUPS;
assert.equal(Object.keys(groups).length,3,"Somente três grupos tradicionais");
assert.equal(Object.hasOwn(groups,"luminosos"),false,"Sem luminosos");
for(const group of Object.values(groups)){
  assert.equal(group.mysteries.length,5);
  for(const mystery of group.mysteries) assert.ok(mystery[1] && mystery[2] && mystery[3],"Passagem e meditação obrigatórias");
}
assert.equal(definitions.IMAGE_CAPTIONS.ave.length,10);
assert.equal(definitions.IMAGE_CAPTIONS.pai.length,11);
for(const prayer of ["cruz","oferecimento","credo","pai","ave","gloria","fatima","jaculatoria","agradecimento","salve","ladainha","oremos"]){
  assert.ok(definitions.ROSARY_TEXTS[prayer],"Oração ausente: "+prayer);
}
const points=vm.runInNewContext(pointsBuilder+"\nArray.from({length:59},(_,i)=>beadPoint(i))");
assert.equal(points.length,59);
assert.equal(points.filter((p,i)=>i<55 && p.big).length,5,"Cinco contas grandes no círculo");
assert.equal(points.filter((p,i)=>i>=55 && p.big).length,1,"Uma conta grande na haste");
assert.ok(points.every(p=>Number.isFinite(p.x)&&Number.isFinite(p.y)));
assert.ok(points[55].y>points[56].y && points[56].y>points[57].y && points[57].y>points[58].y,
  "A haste progride de baixo para cima, da cruz em direção à medalha");
assert.ok(points[55].y<741 && points[58].y>569,
  "Contas entre a cruz e a medalha central");
assert.ok(points[0].x>350 && points[54].x<350 && points[0].y>515 && points[54].y>515,
  "O aro começa no lado direito da medalha e termina no lado esquerdo");
assert.ok(points[11].y<points[0].y && points[44].y<points[54].y,
  "O aro sobe pelo lado direito e desce pelo lado esquerdo");
assert.ok(points[11].x>350 && points[44].x<350,
  "A primeira dezena percorre a direita; a última percorre a esquerda");
assert.ok(source.includes('marker:"medal"') && source.includes('id:"rosaryMedal"'),
  "O Glória chega à medalha central");
assert.ok(source.includes('M350 569 L') && !source.includes('join(" ")+" Z"'),
  "O aro liga os dois extremos à medalha em vez de fechar uma volta artificial");
function generate(mode,group){
  const ctx=vm.createContext({});
  const body=data+"\nlet selectedMode="+JSON.stringify(mode)+";\nlet selectedGroup="+JSON.stringify(group)+";\nlet steps=[];\n"+builders+"\nbuildSteps();";
  vm.runInContext(body,ctx);
  return vm.runInContext("steps",ctx);
}
const daily=generate("dia","dolorosos");
assert.equal(daily.filter(s=>s.type==="misterio").length,5);
assert.equal(daily.filter(s=>s.type==="ave").length,53,"50 dezenas mais 3 Ave-Marias iniciais");
assert.equal(daily.filter(s=>s.type==="pai").length,6,"5 dezenas mais 1 Pai-Nosso inicial");
assert.equal(new Set(daily.filter(s=>typeof s.bead==="number").map(s=>s.bead)).size,59);
assert.equal(daily[0].type,"cruz");assert.equal(daily[1].type,"oferecimento");assert.equal(daily[2].type,"credo");
assert.ok(daily.findIndex(s=>s.type==="salve")>daily.findIndex(s=>s.type==="misterio"));
const chosen=generate("escolhido","gloriosos");
assert.equal(chosen.filter(s=>s.type==="misterio").length,5);
assert.equal(chosen.filter(s=>s.group==="gloriosos" && s.type==="misterio").length,5);
assert.ok(source.includes('selectedMode = "dia"'));
assert.ok(source.includes('MOTION_VISUALS'));
for(const scene of ["cruz","credo","gloria","pai","ave","fatima","misterio","salve"]){
  assert.ok(source.includes('  '+scene+': {')||source.includes('  '+scene+':{'),"Animação ausente: "+scene);
}
const complete=generate("tradicional","gozosos");
assert.equal(complete.filter(s=>s.type==="misterio").length,15);
assert.equal(complete.filter(s=>s.type==="ave").length,153,"150 das dezenas mais 3 introdutórias");
assert.equal(complete.filter(s=>s.type==="pai").length,16);
assert.equal(complete.filter(s=>s.type==="ladainha").length,1);
const rose=read("rosario.html");
assert.ok(rose.includes("id=\"mysteryOfDay\""));
assert.ok(rose.includes('value="dia"'));
assert.ok(rose.includes('value="escolhido"'));
assert.ok(rose.includes('value="tradicional"'));
assert.ok(rose.includes('id="rosaryScreenEffect"'));
assert.ok(rose.includes('id="miniBeads"'));
assert.ok(rose.includes('id="rosaryMapDialog"'));
assert.ok(rose.includes('id="openRosaryMap"'));
assert.ok(rose.includes('id="rosaryNav"'));
assert.ok(rose.includes('id="illustratedDetails"'));
assert.ok(!rose.includes('id="prayerMotion"'));
assert.ok(rose.includes('id="rosaryExperience"') && rose.includes('aria-label="Acompanhamento do Rosário" hidden'));
assert.ok(source.includes('refreshMobileNavigation'));
assert.ok(source.includes('renderMiniBeads'));
assert.ok(source.includes('effectTimeout'));

assert.ok(rose.includes('id="motionEnabled"'));
assert.ok(rose.includes("rosario.js?v="));
assert.ok(!rose.toLowerCase().includes("luminosos"),"Nenhum luminoso na página");
assert.ok(read("index.html").includes('href="rosario.html"'));
assert.ok(read("oracoes-ilustradas.html").includes('href="rosario.html"'));
assert.ok(!read("ave-maria.html").includes('class="printable-offer"'),"Venda da Ave-Maria removida");
assert.ok(read("pai-nosso.html").includes('class="printable-offer"'),"Pai-Nosso preservado");
console.log("OK: 59 contas, 15 mistérios bíblicos, 150 Ave-Marias das dezenas, orações completas, imagens e links.");
