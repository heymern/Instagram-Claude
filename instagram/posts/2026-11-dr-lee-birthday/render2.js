const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});
const img='data:image/webp;base64,'+fs.readFileSync('dr-lee-photo.webp').toString('base64');
// source 1536x1024 scaled to height 1350 => width 2025; scale 1.318
const html=fs.readFileSync('photo.html','utf8').replace('IMG',img);
for(const [name,x] of [['mirror',-640],['close',-880]]){await p.setContent(html.replace('POSX',x+'px'));await p.waitForTimeout(300);await p.screenshot({path:`dr-lee-birthday-photo-${name}.png`});}
await b.close();})();
