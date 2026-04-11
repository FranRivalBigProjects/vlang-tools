const res=document.getElementById('res');
function run(){
let txt=(document.getElementById('input').value||'').toLowerCase();
let val=document.getElementById('value').value;
let out='Analysis:\n';

if(txt.includes('memory')) out+='- Memory safety context\n';
if(txt.includes('compile')) out+='- Compile speed consideration\n';
if(txt.includes('concurrency')||txt.includes('thread')) out+='- Concurrency model\n';
if(txt.includes('binary')) out+='- Binary size factors\n';

if(val){
  out+='- Metric: '+val+'\n';
}

out+='- Analyze performance, safety, and build efficiency\n';

res.innerText=out;
}