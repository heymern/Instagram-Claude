const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
const html=fs.readFileSync('card.html','utf8');
for(const t of ['dark','light']){await p.setContent(html.replace('THEME',t));await p.waitForTimeout(200);await p.screenshot({path:`dr-lee-birthday-${t}.png`});}
await b.close();})();
