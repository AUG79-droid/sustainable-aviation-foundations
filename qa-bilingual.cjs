const fs=require("fs"),vm=require("vm"),assert=require("assert");
const files=["data.js","master-data.js",..."123456".split("").map(n=>"translations-es-m"+n+".js"),"translations-es-global.js"];
const ctx={window:{}};vm.createContext(ctx);
for(const file of files) vm.runInContext(fs.readFileSync(file,"utf8"),ctx,{filename:file});
const data=ctx.window.FOUNDATIONS_DATA,patches=ctx.window.FOUNDATIONS_ES_PATCHES,globalPatch=ctx.window.FOUNDATIONS_ES_GLOBAL;
assert.equal(data.modules.length,6);
assert.deepEqual(Object.keys(patches).sort(),["m1","m2","m3","m4","m5","m6"]);
const excluded=new Set(["id","number","colour","image","supportImage","secondaryImage","duration","filename","url","code","correct","sources"]);
function get(obj,path){return path.reduce((v,k)=>v==null?undefined:v[k],obj)}
function walk(value,path,missing){
  if(path.includes("sources")) return;
  if(typeof value==="string"){
    const key=path[path.length-1];
    if(!value.trim() || excluded.has(String(key))) return;
    const translated=get(patches[path[0]],path.slice(1));
    if(typeof translated!=="string"||!translated.trim()) missing.push(path.join("."));
    return;
  }
  if(Array.isArray(value)){value.forEach((v,i)=>walk(v,[...path,i],missing));return;}
  if(value&&typeof value==="object")Object.entries(value).forEach(([k,v])=>walk(v,[...path,k],missing));
}
for(const module of data.modules){
  const missing=[];walk(module,[module.id],missing);
  assert.equal(missing.length,0,module.id+" missing Spanish fields: "+missing.slice(0,20).join(", "));
}
assert.equal(globalPatch.finalAssessment.questions.length,data.finalAssessment.questions.length);
assert.equal(globalPatch.glossary.length,data.glossary.length);
assert.equal(globalPatch.capstone.stages.length,data.capstone.stages.length);
assert.equal(globalPatch.learningGuide.paragraphs.length,data.learningGuide.paragraphs.length);
assert.equal(Object.keys(globalPatch.sources).length,Object.keys(data.sources).length);
const html=fs.readFileSync("index.html","utf8");
assert.match(html,/translations-es-m1\.js/);assert.match(html,/translations-es-m6\.js/);assert.match(html,/i18n\.js/);
assert.match(html,/data-lang="es"/);assert.match(html,/data-lang="en"/);
const app=fs.readFileSync("app.js","utf8");
assert.match(app,/FOUNDATIONS_ACTIVE_DATA/);
const i18n=fs.readFileSync("i18n.js","utf8");
assert.match(i18n,/hubLang/);assert.match(i18n,/FOUNDATIONS_SET_LANG/);
[
  "7–9 hours",
  "A generated learning visual showing an A400M and Eurofighter",
  "Draft a non-confidential response…",
  "Open applied lab",
  "Final applied assessment",
  "Capstone",
  "Not found"
].forEach(label=>assert.ok(i18n.includes(`\"${label}`),`missing Spanish UI translation for ${label}`));
assert.match(i18n,/decorative arrow/);
assert.match(i18n,/complete ·/);
assert.match(i18n,/\[alt\]/);
console.log("Bilingual QA passed: 6 translated modules, final assessment, glossary, sources, capstone and learning guide.");
