var Ol=Object.defineProperty;var Bl=(n,e,t)=>e in n?Ol(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Le=(n,e,t)=>Bl(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const te={RECT:0,TEXT:1,TILE:2,HERO:3,GOBLIN:4,SLIME:5,BIRD:6,SHADOW:7,STONE:8,ROCKET:9,ITEM:10,HEART:11,FX_SLASH:12,FX_FIRE:13,FX_ICE:14,FX_PUFF:15,GRAND_SHOT:16,FX_BEAM:17,FX_EXPLOSION:18,FX_BOLT:19,OUTLINE:20,ICE_BLOCK:21,BUFF_ICON:22,BOSS:23,BOSS_SHOT:24,HAND:25,FX_SPIN:26,FX_DEFEAT:27,COVER:28,STORY_BG:29,FIELD_BEGIN:30,FIELD_END:31,CAMERA:32,FX_SHOT:33},Ge={UP:1,DOWN:2,LEFT:4,RIGHT:8,ATTACK:16,SPECIAL:32,ITEM:64,START:128,PAUSE:256,TURN_L:512,TURN_R:1024},kl={idle_side:[0,0,75,113,37,113],idle_front:[77,0,69,115,34,115],idle_back:[148,0,68,115,34,115],walk_side1:[218,0,94,111,44,111],walk_side2:[314,0,91,111,46,111],walk_side3:[407,0,94,111,44,111],walk_back:[503,0,70,114,34,114],atk_side1:[575,0,71,80,28,80],atk_side2:[648,0,71,80,28,80],atk_side3:[721,0,79,75,27,75],atk_up1:[802,0,61,80,27,80],atk_up2:[865,0,64,104,32,104],atk_up3:[931,0,67,104,28,104],atk_down1:[0,117,73,75,36,75],atk_down2:[75,117,73,75,36,75],atk_down3:[150,117,87,89,43,89],sp_side1:[239,117,74,83,30,83],sp_side2:[315,117,79,83,30,83],sp_side3:[396,117,269,97,30,97],sp_up1:[667,117,95,98,68,98],sp_up2:[764,117,152,104,96,104],sp_down1:[918,117,74,83,36,83],sp_down2:[0,223,74,83,36,83],hurt1:[76,223,61,92,28,92],hurt2:[139,223,60,92,28,92],hurt3:[201,223,55,92,27,92],hurt4:[258,223,66,79,22,79],down:[326,223,88,37,44,37],fx_beam:[416,223,146,47,73,23.5],fx_shatter:[564,223,144,97,72,48.5],fx_crystal:[710,223,99,94,49,94]};function Oi(n,e,t,i=115){const r=new Image;return r.src=`./sprites/${n}`,{sheet:r,frames:e,groupScale:t,body:1.05/i}}const Qt=n=>n.sheet.complete&&n.sheet.naturalWidth>0;function Dt(n,e,t,i,r,s,a=!1){const[o,l,h,c,f,u]=e.frames[t];n.save(),n.translate(i,r),a&&n.scale(-1,1),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(e.sheet,o,l,h,c,-f*s,-u*s,h*s,c*s),n.restore()}const Yi=(n,e)=>n[Math.min(n.length-1,Math.max(0,Math.floor(e*n.length)))];function Bi(n,e,t,i,r,s,a,o,l){var g;if(!Qt(e))return!1;const h=s===2,c=s===2||s===3;let f,u=h;if(o&256)f=l<.2?"hurt4":"down",l>.75&&(n.globalAlpha*=1-(l-.75)/.25);else if(o&128)f=Yi(["hurt1","hurt2","hurt3"],l);else if(o&64)c?f=l<.15?"sp_side1":l<.3?"sp_side2":"sp_side3":s===0?f=l<.25?"sp_up1":"sp_up2":f=l<.25?"sp_down1":"sp_down2";else if(o&16)c?f=Yi(["atk_side1","atk_side2","atk_side3"],l):s===0?f=Yi(["atk_up1","atk_up2","atk_up3"],l):f=Yi(["atk_down2","atk_down3","atk_down3"],l);else if(a>0){const M=Math.floor(a*9);c?f=["walk_side1","walk_side2","walk_side3","walk_side2"][M%4]:s===0?f=M%2?"walk_back":"idle_back":(f="idle_front",u=M%2===1),i-=Math.abs(Math.sin(a*14))*r*.04}else f=c?"idle_side":s===0?"idle_back":"idle_front";const m=((g=e.groupScale.find(([M])=>f.startsWith(M)))==null?void 0:g[1])??1;return Dt(n,e,f,t,i,r*e.body*m,u),!0}const hi=Oi("cold.png",kl,[["atk_",1.4],["sp_",1.35],["hurt",1.2],["down",1.2]]);function Na(n,e,t,i,r,s,a,o){return Bi(n,hi,e,t,i,r,s,a,o)}function zl(n,e,t,i,r,s){if(!Qt(hi))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),Dt(n,hi,"fx_beam",-i*.2+s*i*.4,0,i*1.05/144),n.restore(),!0}function Hl(n,e,t,i,r){if(!Qt(hi))return!1;const s=.3+.7*Math.min(1,r*4),a=e+i/2,o=t+i*.95;return n.save(),n.globalAlpha=r<.7?1:1-(r-.7)/.3,n.translate(a,o),n.scale(1,s),Dt(n,hi,"fx_crystal",0,0,i*1.05/104),n.restore(),r>.6&&(n.save(),n.globalAlpha=1-(r-.6)/.4,Dt(n,hi,"fx_shatter",a,t+i*.5,i*.9/142*(.8+(r-.6))),n.restore()),!0}const Gl={idle_side:[0,0,79,120,36,120],idle_front:[81,0,74,117,36,117],idle_back:[157,0,65,114,32,114],walk_side1:[224,0,77,105,39,105],walk_side2:[303,0,73,109,35,109],walk_side3:[378,0,69,110,36,110],walk_back:[449,0,66,110,32,110],atk_side1:[517,0,81,96,34,96],atk_side2:[600,0,139,102,34,102],atk_side3:[741,0,110,91,24,91],atk_up1:[853,0,54,113,26,113],atk_up2:[909,0,47,120,23,120],atk_up3:[958,0,47,110,23,110],atk_down1:[0,122,67,105,33,105],atk_down2:[69,122,62,105,30,105],atk_down3:[133,122,58,116,29,103],sp_side1:[193,122,68,87,28,87],sp_side2:[263,122,66,84,28,84],sp_side3:[331,122,191,87,28,87],sp_up1:[524,122,59,68,29,68],sp_up2:[585,122,55,108,26,108],sp_down1:[642,122,59,77,28,77],sp_down2:[703,122,132,86,65,86],hurt1:[837,122,86,109,42,109],hurt2:[925,122,62,97,28,97],hurt3:[0,240,64,102,33,102],hurt4:[66,240,90,100,43,100],down:[158,240,92,40,45,40],fx_spark:[252,240,48,44,24,22],fx_fireball:[302,240,103,53,51.5,26.5],fx_pillar:[407,240,51,120,24,120],fx_swirl:[460,240,87,77,43.5,38.5],fx_explode:[549,240,97,110,48,110]},fi=Oi("fire.png",Gl,[["atk_",1.15],["sp_",1.35],["hurt",1.18],["down",1.18]]);function Fa(n,e,t,i,r,s,a,o){return Bi(n,fi,e,t,i,r,s,a,o)}function Vl(n,e,t,i,r,s){if(!Qt(fi))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),Dt(n,fi,"fx_fireball",-i*.3+s*i*.6,0,i*1.1/103),n.restore(),!0}function Wl(n,e,t,i,r){if(!Qt(fi))return!1;const s=r<.6?1:1-(r-.6)/.4,a=.55+.45*Math.min(1,r*4),o=e+i/2,l=t+i*.92;return n.save(),n.globalAlpha=s,Dt(n,fi,"fx_explode",o,l,i*1.2/110*a),r<.5&&(n.globalAlpha*=1-r*2,Dt(n,fi,"fx_spark",o,l-i*.35,i*.9/48)),n.restore(),!0}const Go={};for(const[n,e,t]of[[3,"rocket","#ff7043"],[4,"cold","#4fc3f7"],[5,"wing","#66bb6a"],[6,"thunder","#ffd54f"],[7,"grand","#a1887f"]]){const i=new Image;i.src=`./items/${e}.png`,Go[n]=[i,t]}function Xl(n,e,t,i,r){const s=Go[r];if(!s||!s[0].complete||s[0].naturalWidth===0)return!1;const[a,o]=s,l=i*.48;return n.save(),n.beginPath(),n.arc(e,t,l,0,Math.PI*2),n.save(),n.clip(),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(a,e-l,t-l,l*2,l*2),n.restore(),n.lineWidth=Math.max(1.5,i*.06),n.strokeStyle=o,n.stroke(),n.restore(),!0}const ql={idle_side:[0,0,82,118,43,118],idle_front:[84,0,79,117,39,117],idle_back:[165,0,65,115,32,115],walk_side1:[232,0,101,107,54,107],walk_side2:[335,0,99,109,48,109],walk_side3:[436,0,83,111,40,111],walk_back:[521,0,64,110,32,110],atk_side1:[587,0,106,89,32,89],atk_side2:[695,0,146,93,36,93],atk_side3:[843,0,131,93,38,93],atk_up1:[0,120,89,121,28,121],atk_up2:[91,120,82,115,24,115],atk_up3:[175,120,48,99,24,99],atk_down1:[225,120,99,99,48,99],atk_down2:[326,120,80,100,41,100],atk_down3:[408,120,61,101,32,101],sp_side1:[471,120,170,82,136,82],sp_side2:[643,120,111,88,36,88],sp_side3:[756,120,110,88,34,88],sp_up1:[868,120,71,70,35,70],sp_up2:[941,120,78,112,27,112],sp_down1:[0,243,88,77,44,77],sp_down2:[90,243,128,97,64,97],hurt1:[220,243,90,102,39,102],hurt2:[312,243,58,98,29,98],hurt3:[372,243,71,100,34,100],hurt4:[445,243,80,92,40,92],down:[527,243,100,34,50,34],fx_shot:[629,243,119,80,59.5,40],fx_wave:[750,243,119,93,59.5,46.5],fx_pillar:[871,243,78,131,42,131],fx_burst:[0,376,84,62,41,62]},Ui=Oi("grand.png",ql,[["atk_",1.13],["sp_",1.15],["hurt",1.08],["down",1.08]]),Vo=[-Math.PI/2,Math.PI/2,Math.PI,0];function Oa(n,e,t,i,r,s,a,o){return Bi(n,Ui,e,t,i,r,s,a,o)}function Yl(n,e,t,i,r,s){return Qt(Ui)?(n.save(),n.globalAlpha=s<.6?1:1-(s-.6)/.4,n.translate(e+i/2,t+i/2),n.rotate(Vo[r]??0),Dt(n,Ui,"fx_wave",-i*.25+s*i*.5,0,i*.95/93),n.restore(),!0):!1}function Kl(n,e,t,i,r,s){return Qt(Ui)?(n.save(),n.translate(e,t+Math.sin(s*30)*i*.03),r!==2&&n.rotate(Vo[r]??0),Dt(n,Ui,"fx_shot",0,0,i*1.7/119,r!==2),n.restore(),!0):!1}const $l={idle_side:[0,0,54,84,26,84],idle_front:[56,0,51,82,26,82],idle_back:[109,0,46,80,24,80],walk_side1:[157,0,54,72,27,72],walk_side2:[213,0,51,76,24,76],walk_side3:[266,0,48,76,24,76],walk_back:[316,0,46,76,23,76],atk_side1:[364,0,59,68,24,68],atk_side2:[425,0,95,69,24,69],atk_side3:[522,0,78,67,19,67],atk_up1:[602,0,39,80,18,80],atk_up2:[643,0,36,84,16,84],atk_up3:[681,0,35,79,16,79],atk_down1:[718,0,46,74,23,74],atk_down2:[766,0,44,73,22,73],atk_down3:[812,0,42,78,21,78],sp_side1:[856,0,47,62,21,62],sp_side2:[905,0,46,61,20,61],sp_side3:[0,86,130,62,21,62],sp_up1:[132,86,51,49,24,49],sp_up2:[185,86,61,76,31,76],sp_down1:[248,86,57,56,24,56],sp_down2:[307,86,92,61,44,61],hurt1:[401,86,65,75,30,75],hurt2:[468,86,44,68,20,68],hurt3:[514,86,45,72,24,72],hurt4:[561,86,63,70,33,70],down:[626,86,69,30,33,30],fx_spark:[697,86,45,43,22.5,21.5],fx_ball:[744,86,74,40,37,20],fx_pillar:[820,86,45,85,22,85]},ui=Oi("thunder.png",$l,[["atk_",1.15],["sp_",1.35],["hurt",1.18],["down",1.18]],80);function Ba(n,e,t,i,r,s,a,o){return Bi(n,ui,e,t,i,r,s,a,o)}function Zl(n,e,t,i,r,s){if(!Qt(ui))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),Dt(n,ui,"fx_ball",-i*.3+s*i*.6,0,i*1.1/72),n.restore(),!0}function jl(n,e,t,i,r){return Qt(ui)?(n.save(),n.globalAlpha=r<.5?1:1-(r-.5)/.5,n.translate(e,t-4),n.scale(1,.4+.6*Math.min(1,r*5)),Dt(n,ui,"fx_pillar",0,0,i*1.8/85),n.restore(),r<.6&&(n.save(),n.globalAlpha=1-r/.6,Dt(n,ui,"fx_spark",e,t-14,i*1/43*(.7+r)),n.restore()),!0):!1}const Jl={idle_side:[0,0,88,119,40,119],idle_front:[90,0,88,122,44,122],idle_back:[180,0,88,122,43,122],walk_side1:[270,0,71,107,36,107],walk_side2:[343,0,75,108,37,108],walk_side3:[420,0,74,107,38,107],walk_back:[496,0,76,108,37,108],atk_side1:[574,0,64,69,25,69],atk_side2:[640,0,66,70,25,70],atk_side3:[708,0,60,60,20,60],atk_up1:[770,0,59,74,26,74],atk_up2:[831,0,64,98,40,98],atk_up3:[897,0,66,93,26,93],atk_down1:[965,0,55,74,29,74],atk_down2:[0,124,54,72,26,72],atk_down3:[56,124,54,72,26,72],sp_side1:[112,124,67,84,28,84],sp_side2:[181,124,97,102,50,102],sp_side3:[280,124,100,85,73,85],sp_up1:[382,124,68,86,12,86],sp_up2:[452,124,79,113,44,113],sp_down1:[533,124,70,82,28,82],sp_down2:[605,124,106,92,70,92],hurt1:[713,124,63,95,32,95],hurt2:[778,124,55,91,30,91],hurt3:[835,124,54,80,28,80],hurt4:[891,124,67,73,31,73],down:[0,239,73,46,36,46],fx_blade:[75,239,84,86,42,43]},bs=Oi("wing.png",Jl,[["atk_",1.4],["sp_",1.35],["hurt",1.25],["down",1.25]]);function ka(n,e,t,i,r,s,a,o){return Bi(n,bs,e,t,i,r,s,a,o)}function Ql(n,e,t,i,r,s){if(!Qt(bs))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.6?1:1-(s-.6)/.4,n.translate(e+i/2,t+i/2),n.rotate(a),Dt(n,bs,"fx_blade",-i*.2+s*i*.4,0,i*.95/86),n.restore(),!0}const ec={chainsaw:{idle_front:[0,0,63,82,21.2,82],idle_back:[65,0,63,82,21.1,82],idle_side:[130,0,63,81,21.9,81],walk1:[195,0,45,78,24.2,78],walk2:[242,0,47,77,24.6,77],walk3:[291,0,42,76,21.2,76],cast:[335,0,49,62,19.4,62],spin:[386,0,115,66,53.9,66]},lady:{idle_front:[0,0,43,73,21.4,73],idle_back:[45,0,49,73,22.6,73],idle_side:[96,0,40,72,20.2,72],walk1:[138,0,40,72,20.2,72],walk2:[180,0,40,73,18.6,73],walk3:[222,0,38,72,18.1,72],cast:[262,0,63,61,24.3,61]},tacos:{idle_front:[0,0,55,76,26.9,76],idle_back:[57,0,54,73,26.5,73],idle_side:[113,0,48,74,25,74],walk1:[163,0,48,74,25,74],walk2:[213,0,45,74,21,74],walk3:[260,0,46,74,23.4,74],cast:[308,0,117,61,20.5,61]},trump:{idle_front:[0,0,43,70,19.5,70],idle_back:[45,0,48,71,23,71],idle_side:[95,0,43,75,21.2,75],walk1:[140,0,43,75,21.2,75],walk2:[185,0,41,75,20.3,75],walk3:[228,0,41,74,19.7,74],cast:[271,0,80,62,25.3,62]},zombie:{idle_front:[0,0,48,71,24.1,71],idle_back:[50,0,50,60,23.9,60],idle_side:[102,0,42,72,21.1,72],walk1:[146,0,42,72,21.1,72],walk2:[190,0,44,73,21.6,73],walk3:[236,0,43,75,16.8,75],cast:[281,0,65,64,25.6,64]}},Wo=["chainsaw","lady","tacos","trump","zombie"],Xo={};for(const n of Wo){const e=new Image;e.src=`./sprites/boss_${n}.png`,Xo[n]=e}const tc=1.15;function nc(n,e,t,i,r,s,a,o,l){const h=Wo[r];if(!h)return!1;const c=Xo[h];if(!c.complete||c.naturalWidth===0)return!1;const f=ec[h],u=s===2||s===3;let m;o&8&&f.spin?m="spin":o&4?m="cast":a>0&&u?m=["walk1","walk2","walk3","walk2"][Math.floor(a*7)%4]:m=u?"idle_side":s===0?"idle_back":"idle_front";const g=f[m]??f.idle_front;a>0&&!u&&(t-=Math.abs(Math.sin(a*9))*i*.05);const M=i*tc/f.idle_front[3],[d,p,b,T,y,P]=g;return n.save(),n.translate(e,t),s===2&&n.scale(-1,1),n.imageSmoothingEnabled=!1,n.drawImage(c,d,p,b,T,-y*M,-P*M,b*M,T*M),n.restore(),!0}const rt=Math.PI*2;function ic(n,e,t,i,r,s,a,o,l,h){n.globalAlpha*=h,o&1&&(n.filter="brightness(2.2)"),o&16&&(n.save(),n.fillStyle="#4e342e",n.beginPath(),n.ellipse(e,t,i*.42,i*.12,0,0,rt),n.fill(),n.restore(),n.beginPath(),n.rect(e-i,t-i*2,i*2,i*2),n.clip(),t+=i*1.1*l);const c=a>0?Math.abs(Math.sin(a*8))*i*.03:0;if(nc(n,e,t-c,i,r,s,a,o))return;const f=i/72,u=t-c,m=s===2?-1:s===3?1:0;switch(r){case 0:rc(n,e,u,f,s,m,a,o,l);break;case 1:sc(n,e,u,f,s,m,a,o,l);break;case 2:ac(n,e,u,f,s,m,a,o,l);break;case 3:oc(n,e,u,f,s,m,a,o);break;default:lc(n,e,u,f,s,m,a);break}}function Dr(n,e,t,i,r,s){const a=r>0?Math.sin(r*10)*4*i:0;n.fillStyle=s,n.fillRect(e-10*i,t-18*i+Math.max(0,a),8*i,18*i-Math.max(0,a)),n.fillRect(e+2*i,t-18*i+Math.max(0,-a),8*i,18*i-Math.max(0,-a))}function ki(n,e,t,i,r,s,a=!1){a&&(n.shadowColor=s,n.shadowBlur=8),n.fillStyle=s,n.beginPath(),n.arc(e-5*i+r*3*i,t,2.6*i,0,rt),n.arc(e+5*i+r*3*i,t,2.6*i,0,rt),n.fill(),n.shadowBlur=0}function rc(n,e,t,i,r,s,a,o,l){const h=(o&8)!==0,c=(o&4)!==0;let f=r===0?-Math.PI/2:r===1?Math.PI/2:r===2?Math.PI:0;h?f+=l*rt:c&&(f+=Math.PI*.8*Math.min(1,l*1.5));const u=()=>{n.save(),n.translate(e,t-34*i),n.rotate(f),n.fillStyle="#3e2723",n.fillRect(4*i,-6*i,14*i,12*i),n.fillStyle="#9e9e9e",n.fillRect(16*i,-5*i,30*i,10*i),n.fillStyle="#c62828";const g=a*60%6;for(let M=0;M<6;M++)n.fillRect(16*i+(M*5+g)%30*i,-7*i,3*i,2.5*i),n.fillRect(16*i+(M*5+2.5+g)%30*i,4.5*i,3*i,2.5*i);n.restore()};r===0&&!h&&u(),Dr(n,e,t,i,a,"#212121"),n.fillStyle="#37474f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-15*i,t-16*i),n.lineTo(e-13*i,t-48*i),n.lineTo(e+13*i,t-48*i),n.lineTo(e+15*i,t-16*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#b71c1c",n.fillRect(e-13*i,t-30*i,26*i,3*i);const m=t-57*i;if(n.fillStyle="#cfd8dc",n.beginPath(),n.arc(e,m,11*i,0,rt),n.fill(),n.stroke(),r!==0){n.fillStyle="#212121",n.beginPath(),n.arc(e-4*i+s*3*i,m-1*i,3.2*i,0,rt),n.arc(e+4*i+s*3*i,m-1*i,3.2*i,0,rt),n.fill(),ki(n,e,m-1*i,i*.5,s*2,"#ff1744",!0),n.fillStyle="#212121";for(let g=-2;g<=2;g++)n.fillRect(e+g*2.5*i+s*3*i-1*i,m+5*i,1.5*i,3*i)}(r!==0||h)&&u()}function sc(n,e,t,i,r,s,a,o,l){const h=(o&4)!==0;if(h){const f=n.createRadialGradient(e,t-30*i,4*i,e,t-30*i,50*i);f.addColorStop(0,`rgba(149,117,205,${.6*l})`),f.addColorStop(1,"rgba(149,117,205,0)"),n.fillStyle=f,n.beginPath(),n.arc(e,t-30*i,50*i,0,rt),n.fill()}const c=Math.sin(a*4)*2*i;if(n.fillStyle="#1a1a24",n.strokeStyle="#4a3f6b",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-20*i+c,t),n.quadraticCurveTo(e-16*i,t-40*i,e-12*i,t-52*i),n.quadraticCurveTo(e,t-74*i,e+12*i,t-52*i),n.quadraticCurveTo(e+16*i,t-40*i,e+20*i+c,t),n.closePath(),n.fill(),n.stroke(),r!==0&&(n.fillStyle="#000",n.beginPath(),n.ellipse(e+s*3*i,t-52*i,8*i,9*i,0,0,rt),n.fill(),ki(n,e+s*1*i,t-53*i,i*.6,s,"#ffffff",!0)),h&&r!==0){n.fillStyle="#cfd8dc";const f=e+(s||.6)*20*i;n.beginPath(),n.arc(f,t-36*i,3.5*i,0,rt),n.fill(),n.fillStyle=`rgba(206,147,216,${l})`,n.beginPath(),n.arc(f+(s||.6)*6*i,t-36*i,6*i*l,0,rt),n.fill()}}function ac(n,e,t,i,r,s,a,o,l){const h=(o&4)!==0;Dr(n,e,t,i,a,"#3e2723"),n.fillStyle="#5d4037",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.roundRect(e-14*i,t-46*i,28*i,30*i,6*i),n.fill(),n.stroke();const c=t-56*i;n.strokeStyle="#8d6e63",n.lineWidth=3.5*i,n.lineCap="round";for(let f=0;f<6;f++){const u=(f-2.5)*4.5*i,m=h?l*14*i:0;n.beginPath(),n.moveTo(e+u,c+4*i),n.quadraticCurveTo(e+u*1.8+Math.sin(a*5+f)*4*i,c+14*i-m,e+u*2.2,c+24*i-m*2),n.stroke()}n.fillStyle="#a1887f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.ellipse(e,c-4*i,14*i,13*i,0,0,rt),n.fill(),n.stroke(),r!==0&&(ki(n,e,c-3*i,i,s,"#c6ff00",!0),n.fillStyle="#3e2723",n.beginPath(),n.ellipse(e+s*3*i,c+5*i,5*i,3*i,0,0,rt),n.fill())}function oc(n,e,t,i,r,s,a,o,l){const h=(o&4)!==0;n.fillStyle="#b71c1c",n.beginPath(),n.moveTo(e-14*i,t-46*i),n.lineTo(e-22*i-Math.sin(a*6)*2*i,t-4*i),n.lineTo(e+22*i+Math.sin(a*6)*2*i,t-4*i),n.lineTo(e+14*i,t-46*i),n.closePath(),n.fill(),Dr(n,e,t,i,a,"#111"),n.fillStyle="#1c1c1c",n.strokeStyle="rgba(255,255,255,0.15)",n.lineWidth=2*i,n.beginPath(),n.roundRect(e-13*i,t-48*i,26*i,32*i,4*i),n.fill(),n.stroke(),n.fillStyle="#fafafa",n.beginPath(),n.moveTo(e-4*i,t-48*i),n.lineTo(e,t-38*i),n.lineTo(e+4*i,t-48*i),n.fill();const c=t-57*i;if(n.fillStyle="#eceff1",n.beginPath(),n.arc(e,c,10*i,0,rt),n.fill(),r!==0&&(ki(n,e,c-1*i,i*.8,s,"#ff1744",!0),n.strokeStyle="#b71c1c",n.lineWidth=1.5*i,n.beginPath(),n.arc(e+s*3*i,c+3*i,4*i,.2,Math.PI-.2),n.stroke()),n.fillStyle="#111",n.fillRect(e-16*i,c-9*i,32*i,3.5*i),n.fillRect(e-10*i,c-26*i,20*i,18*i),n.fillStyle="#b71c1c",n.fillRect(e-10*i,c-13*i,20*i,3*i),h&&r!==0){const f=e+(s||.7)*18*i;for(let u=-1;u<=1;u++)n.save(),n.translate(f,t-34*i),n.rotate(u*.35+(s<0?Math.PI:0)*0),n.fillStyle="#fff",n.fillRect(-3.5*i,-11*i,7*i,10*i),n.fillStyle=u===0?"#111":"#d50000",n.fillRect(-1*i,-8*i,2*i,2*i),n.restore()}}function lc(n,e,t,i,r,s,a,o){Dr(n,e,t,i,a,"#33691e");const l=4*i;if(n.fillStyle="#558b2f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-14*i,t-16*i),n.lineTo(e-12*i+l,t-46*i),n.lineTo(e+12*i+l,t-46*i),n.lineTo(e+14*i,t-16*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#5d4037",n.beginPath(),n.moveTo(e-13*i,t-30*i),n.lineTo(e+13*i,t-30*i),n.lineTo(e+10*i,t-18*i),n.lineTo(e+4*i,t-24*i),n.lineTo(e-2*i,t-16*i),n.lineTo(e-8*i,t-22*i),n.lineTo(e-13*i,t-16*i),n.closePath(),n.fill(),r!==0){n.strokeStyle="#7cb342",n.lineWidth=5*i,n.lineCap="round";const c=(s||.4)*22*i,f=Math.sin(a*6)*3*i;n.beginPath(),n.moveTo(e+l,t-40*i),n.lineTo(e+l+c,t-38*i+f),n.stroke()}const h=t-54*i;n.fillStyle="#7cb342",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.arc(e+l,h,10*i,0,rt),n.fill(),n.stroke(),r!==0&&ki(n,e+l,h-1*i,i*.7,s,"#ffeb3b",!0)}function cc(n,e,t,i,r,s,a,o,l){if(r===0){const f=(e+o)/2+Math.sin(a*20)*10,u=(t+l)/2+Math.cos(a*20)*10;n.lineCap="round",n.strokeStyle="#4e342e",n.lineWidth=10,n.beginPath(),n.moveTo(o,l),n.quadraticCurveTo(f,u,e,t),n.stroke(),n.strokeStyle="#8d6e63",n.lineWidth=6,n.stroke(),n.fillStyle="#f8bbd0";for(let m=1;m<=4;m++){const g=m/5,M=(1-g)*(1-g)*o+2*(1-g)*g*f+g*g*e,d=(1-g)*(1-g)*l+2*(1-g)*g*u+g*g*t;n.beginPath(),n.arc(M,d,2,0,rt),n.fill()}return}n.translate(e,t),n.rotate(s+a*14);const h=i*.5,c=i*.7;n.shadowColor="#ff1744",n.shadowBlur=8,n.fillStyle="#fafafa",n.beginPath(),n.roundRect(-h/2,-c/2,h,c,3),n.fill(),n.shadowBlur=0,n.strokeStyle="#b71c1c",n.lineWidth=1.5,n.stroke(),n.fillStyle="#d50000",n.beginPath(),n.moveTo(0,-c*.22),n.lineTo(h*.22,0),n.lineTo(0,c*.22),n.lineTo(-h*.22,0),n.closePath(),n.fill()}function hc(n,e,t,i,r,s){const a=t-i*.15;if(r===0){const h=.5+.5*Math.sin(s*30);n.fillStyle=`rgba(118,255,3,${.15+.35*s*h})`,n.beginPath(),n.ellipse(e,a,i*.42*(.5+.5*s),i*.16*(.5+.5*s),0,0,rt),n.fill(),n.strokeStyle=`rgba(30,20,10,${.4+.5*s})`,n.lineWidth=2,n.beginPath();for(let c=0;c<4;c++){const f=c/4*rt+.3;n.moveTo(e,a),n.lineTo(e+Math.cos(f)*i*.35*s,a+Math.sin(f)*i*.12*s)}n.stroke();return}const o=Math.sin(Math.min(1,s)*Math.PI),l=i*.75*o;n.fillStyle="#3e2723",n.beginPath(),n.ellipse(e,a,i*.38,i*.13,0,0,rt),n.fill(),n.save(),n.beginPath(),n.rect(e-i,a-i*2,i*2,i*2),n.clip(),n.fillStyle="#7cb342",n.strokeStyle="#33691e",n.lineWidth=2,n.beginPath(),n.roundRect(e-i*.09,a-l,i*.18,l+4,4),n.fill(),n.stroke();for(let h=-2;h<=2;h++)n.beginPath(),n.roundRect(e+h*i*.055-i*.025,a-l-i*.14+Math.abs(h)*3,i*.05,i*.16,2),n.fill();if(n.restore(),s<.4){n.fillStyle=`rgba(121,85,72,${1-s/.4})`;for(let h=0;h<6;h++){const c=h/6*Math.PI+Math.PI;n.beginPath(),n.arc(e+Math.cos(c)*i*.4*(s*2.5),a+Math.sin(c)*i*.3*(s*2.5),3,0,rt),n.fill()}}}function fc(n,e,t,i,r,s){if(r===0){n.fillStyle=`rgba(229,57,53,${.12+.18*s})`,n.beginPath(),n.ellipse(e,t,i,i*.75,0,0,rt),n.fill(),n.setLineDash([8,6]),n.strokeStyle=`rgba(255,82,82,${.5+.5*Math.abs(Math.sin(s*20))})`,n.lineWidth=3,n.stroke(),n.setLineDash([]);return}const a=s*rt;n.globalAlpha=1-s*.5,n.strokeStyle="rgba(255,23,68,0.85)",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.ellipse(e,t,i*.9,i*.68,0,a-1.6,a),n.stroke(),n.strokeStyle="#fff",n.lineWidth=3,n.stroke(),n.fillStyle="#ffab00";for(let o=0;o<5;o++){const l=a-o*.25;n.beginPath(),n.arc(e+Math.cos(l)*i*.9,t+Math.sin(l)*i*.68,3-o*.4,0,rt),n.fill()}}function uc(n,e,t,i,r){const s=i/48;n.strokeStyle="#6d4c41",n.lineWidth=5*s,n.lineCap="round";for(let a=0;a<3;a++){const o=t-(10+a*11)*s,l=Math.sin(r*8+a)*2*s;n.beginPath(),n.ellipse(e,o+l,15*s,5*s,.15*(a-1),0,rt),n.stroke()}n.strokeStyle="#a1887f",n.lineWidth=2*s;for(let a=0;a<3;a++){const o=t-(10+a*11)*s;n.beginPath(),n.ellipse(e,o,15*s,5*s,.15*(a-1),Math.PI*.1,Math.PI*.9),n.stroke()}}const dc='"Hiragino Kaku Gothic ProN", "Meiryo", "Yu Gothic", sans-serif',ve=Math.PI*2,Di=n=>"#"+(n|0).toString(16).padStart(6,"0"),Ar=[["#e53935","#ffb300"],["#29b6f6","#e1f5fe"],["#66bb6a","#ffffff"],["#fdd835","#7b1fa2"],["#8d6e63","#4e342e"]],fa=["#43a047","#e53935","#1e88e5","#fbc02d"],ua=["#1b5e20","#8e1b1b","#0d47a1","#a07800"];function Ni(n,e,t,i,r){{const s=e[t],a=e[t+1],o=e[t+2],l=e[t+3],h=e[t+4],c=e[t+5],f=e[t+6],u=e[t+7],m=e[t+8],g=e[t+9];switch(n.save(),s){case te.RECT:n.globalAlpha=Math.max(0,Math.min(1,f)),n.fillStyle=Di(c),n.fillRect(a,o,l,h);break;case te.OUTLINE:n.strokeStyle=Di(c),n.lineWidth=f,n.strokeRect(a+f/2,o+f/2,l-f,h-f);break;case te.TEXT:{const M=r.decode(i.subarray(u,u+m));n.globalAlpha=Math.max(0,Math.min(1,g)),n.font=`bold ${l}px ${dc}`,n.fillStyle=Di(c),n.textAlign=f===1?"center":f===2?"right":"left",n.fillText(M,a,o);break}case te.TILE:ys(n,a,o,l,c,f,u,m,g);break;case te.HERO:Ec(n,a,o,l,c,f,u,m,g,h),m&512&&(n.restore(),n.save(),uc(n,a,o-g,l,performance.now()/1e3));break;case te.BOSS:ic(n,a,o,l,c,f,u,m,h,g);break;case te.BOSS_SHOT:cc(n,a,o,l,c,f,u,m,g);break;case te.HAND:hc(n,a,o,l,c,f);break;case te.FX_SPIN:fc(n,a,o,l,c,f);break;case te.STORY_BG:pc(n,a,o,l,h,c,f,u,m);break;case te.COVER:mc(n,a,o,l,h,c,f);break;case te.FX_DEFEAT:_c(n,a,o,l,c,u);break;case te.GOBLIN:Tc(n,a,o,l,c,f,u,m);break;case te.SLIME:bc(n,a,o,l,c,f,u,m);break;case te.BIRD:yc(n,a,o,l,c,f,u,m);break;case te.SHADOW:n.globalAlpha=c,n.fillStyle="#000",n.beginPath(),n.ellipse(a,o,Math.max(1,l),Math.max(1,l*.38),0,0,ve),n.fill();break;case te.STONE:Ac(n,a,o,l,c,f);break;case te.ROCKET:jo(n,a,o,l,c,f);break;case te.ITEM:Ha(n,a,o,l,c,f);break;case te.BUFF_ICON:n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.arc(a,o,l*.6,0,ve),n.fill(),Ha(n,a,o,l,c,0);break;case te.HEART:Jo(n,a,o,l,c>=1?"#ff3b5c":"#3a3f55",c>=1?"#ffd1dc":null);break;case te.FX_SLASH:{const[M,d]=g>0?[m,g]:[0,1];if(M>0||d<1){const p=M*l,b=d*l;n.beginPath(),f===3?n.rect(a+p,o,b-p,l):f===2?n.rect(a+l-b,o,b-p,l):f===1?n.rect(a,o+p,l,b-p):n.rect(a,o+l-b,l,b-p),n.clip()}Rc(n,a,o,l,c,f,u);break}case te.FX_FIRE:xc(n,a,o,l,u);break;case te.FX_ICE:Cc(n,a,o,l,u);break;case te.FX_PUFF:Pc(n,a,o,l,c,u);break;case te.GRAND_SHOT:Lc(n,a,o,l,c,f);break;case te.FX_BEAM:Ic(n,a,o,l,h,u);break;case te.FX_EXPLOSION:Dc(n,a,o,l,u);break;case te.FX_BOLT:Uc(n,a,o,l,u);break;case te.ICE_BLOCK:n.globalAlpha=.25+.35*c,n.fillStyle="#b3e5fc",vc(n,a-l/2,o-l*.95,l,l*.95,6),n.fill(),n.globalAlpha=.9*c,n.strokeStyle="#e1f5fe",n.lineWidth=2,n.stroke(),n.beginPath(),n.moveTo(a-l*.3,o-l*.8),n.lineTo(a-l*.1,o-l*.6),n.stroke();break}n.restore()}}const qo=[];for(let n=1;n<=5;n++){const e=new Image;e.src=`./story/${n}.jpg`,qo[n]=e}function pc(n,e,t,i,r,s,a,o,l){const h=qo[s];if(!h||!h.complete||h.naturalWidth===0)return;const c=h.naturalWidth,f=h.naturalHeight,u=Math.max(i/c,r/f)*o,m=i/u,g=r/u,M=(c-m)/2,d=Math.max(0,Math.min(f-g,f*l-g/2));n.globalAlpha=Math.max(0,Math.min(1,a)),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(h,M,d,m,g,e,t,i,r)}const Yo=[];for(let n=1;n<=6;n++){const e=new Image;e.src=`./covers/world${n}.jpg`,Yo[n]=e}function mc(n,e,t,i,r,s,a){const o=Yo[s];!o||!o.complete||o.naturalWidth===0||(n.globalAlpha=Math.max(0,Math.min(1,a)),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(o,e,t,i,r))}function _c(n,e,t,i,r,s){const a=Di(r);if(s<.25){const o=s/.25;n.globalAlpha=1-o;const l=n.createRadialGradient(e,t,0,e,t,i*.45);l.addColorStop(0,"#ffffff"),l.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=l,n.beginPath(),n.arc(e,t,i*.45,0,ve),n.fill()}n.globalAlpha=Math.max(0,1-s),n.strokeStyle=a,n.lineWidth=4*(1-s)+1,n.beginPath(),n.arc(e,t,i*.15+i*.4*Math.sqrt(s),0,ve),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.beginPath(),n.arc(e,t,i*.1+i*.3*Math.sqrt(s),0,ve),n.stroke();for(let o=0;o<10;o++){const l=o/10*ve+.3,h=i*(.12+.45*s)*(o%2?1:.75),c=e+Math.cos(l)*h,f=t+Math.sin(l)*h+i*.25*s*s,u=(1-s)*(o%2?3.5:2.5);n.fillStyle=o%3===0?"#ffffff":a,n.beginPath(),n.arc(c,f,Math.max(.5,u),0,ve),n.fill()}n.fillStyle="#fff59d";for(let o=0;o<4;o++){const l=o/4*ve+s*3,h=i*.32*Math.sqrt(s);gc(n,e+Math.cos(l)*h,t+Math.sin(l)*h-i*.1*s,i*.09*(1-s*.6),s*4)}}function gc(n,e,t,i,r){n.beginPath();for(let s=0;s<10;s++){const a=r+s/10*ve-Math.PI/2,o=s%2?i*.45:i;s===0?n.moveTo(e+Math.cos(a)*o,t+Math.sin(a)*o):n.lineTo(e+Math.cos(a)*o,t+Math.sin(a)*o)}n.closePath(),n.fill()}function vc(n,e,t,i,r,s){n.beginPath(),n.roundRect(e,t,i,r,s)}function Wt(n){return n=n^61^n>>>16,n=n+(n<<3),n=n^n>>>4,n=Math.imul(n,668265261),n=n^n>>>15,(n>>>0)/4294967296}const Sc=["#5da34c","#58a048","#62a851","#5a9e4a"],Ko={base:Sc,tuft:"rgba(30,80,20,0.45)",flower:"#fff59d"},Mc={1:{base:["#b0563f","#a9503a","#b75e46","#a44c37"],tuft:"rgba(90,20,10,0.5)",flower:"#ffcc80"},2:{base:["#e9eef3","#e2e9ef","#eef3f7","#dee6ed"],tuft:"rgba(120,150,180,0.45)",flower:"#b3e5fc"},3:{base:["#6fb4e6","#69aee1","#76baea","#64a9dd"],tuft:"rgba(255,255,255,0.75)",flower:"#ffffff",clouds:!0},4:{base:["#d7c056","#d0b94f","#dcc65d","#cab44b"],tuft:"rgba(110,90,20,0.45)",flower:"#fffde7"},5:Ko,6:{base:["#2b2b34","#27272f","#30303a","#24242c"],tuft:"rgba(140,140,170,0.3)",flower:"#7e57c2"}};function Gr(n,e,t,i,r,s=0){const a=Mc[s]??Ko;if(n.fillStyle=a.base[r&3],n.fillRect(e,t,i+.5,i+.5),a.clouds){n.fillStyle=a.tuft;const o=e+8+Wt(r*7)*(i-20),l=t+10+Wt(r*13)*(i-22);n.beginPath(),n.ellipse(o,l,7,3.5,0,0,ve),n.ellipse(o+6,l-2,5,3.5,0,0,ve),n.ellipse(o+11,l,6,3,0,0,ve),n.fill();return}n.strokeStyle=a.tuft,n.lineWidth=1.5;for(let o=0;o<3;o++){const l=e+Wt(r*7+o)*(i-10)+5,h=t+Wt(r*13+o*3)*(i-10)+8;n.beginPath(),n.moveTo(l-3,h),n.lineTo(l-1,h-5),n.moveTo(l,h),n.lineTo(l+1,h-6),n.moveTo(l+3,h),n.lineTo(l+4,h-4),n.stroke()}(r&31)===5&&(n.fillStyle=a.flower,n.beginPath(),n.arc(e+i*.7,t+i*.3,3,0,ve),n.fill())}function ys(n,e,t,i,r,s,a,o,l=0){switch(r){case 0:Gr(n,e,t,i,s,l);break;case 1:{Gr(n,e,t,i,s,l),n.fillStyle="rgba(0,0,0,0.25)",n.beginPath(),n.ellipse(e+i/2,t+i*.82,i*.42,i*.14,0,0,ve),n.fill(),n.fillStyle="#8a8d99",n.beginPath(),n.moveTo(e+i*.1,t+i*.8),n.lineTo(e+i*.16,t+i*.35),n.lineTo(e+i*.42,t+i*.12),n.lineTo(e+i*.75,t+i*.18),n.lineTo(e+i*.92,t+i*.5),n.lineTo(e+i*.88,t+i*.82),n.closePath(),n.fill(),n.fillStyle="#b4b7c2",n.beginPath(),n.moveTo(e+i*.2,t+i*.4),n.lineTo(e+i*.43,t+i*.2),n.lineTo(e+i*.68,t+i*.25),n.lineTo(e+i*.5,t+i*.45),n.closePath(),n.fill(),n.strokeStyle="#5c5f6b",n.lineWidth=2,n.beginPath(),n.moveTo(e+i*.55,t+i*.55),n.lineTo(e+i*.7,t+i*.7),n.stroke();break}case 2:{n.fillStyle="#bfe6f5",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#a3d6ec",n.fillRect(e,t+i*.55,i+.5,i*.45+.5),n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=2,n.beginPath();const h=Wt(s)*i*.3;n.moveTo(e+i*.15+h,t+i*.3),n.lineTo(e+i*.4+h,t+i*.15),n.moveTo(e+i*.3+h,t+i*.5),n.lineTo(e+i*.65+h,t+i*.28),n.stroke(),n.strokeStyle="rgba(90,160,200,0.5)",n.lineWidth=1,n.strokeRect(e+.5,t+.5,i-1,i-1);const c=(Math.sin(a*3+s)+1)/2;n.fillStyle=`rgba(255,255,255,${.3+.6*c})`,n.beginPath(),n.arc(e+i*(.2+Wt(s*5)*.6),t+i*(.2+Wt(s*9)*.6),1.5+c,0,ve),n.fill();break}case 3:{n.fillStyle="#7a5a3a",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#5f4329";for(let h=0;h<4;h++)n.beginPath(),n.ellipse(e+Wt(s+h*11)*i,t+Wt(s*3+h)*i,5,3,0,0,ve),n.fill();n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.ellipse(e+i*.4,t+i*.4,6,2,0,0,ve),n.fill();break}case 4:{n.fillStyle="#2c3045",n.fillRect(e,t,i+.5,i+.5),n.beginPath(),n.rect(e,t,i+.5,i+.5),n.clip(),n.strokeStyle="#1c1f2e",n.lineWidth=2;const h=(s&1)*i*.25;for(let c=0;c<3;c++){const f=t+c*i/3;n.strokeRect(e+(c&1?h:0)-i/2,f,i/2,i/3),n.strokeRect(e+(c&1?h:0),f,i/2,i/3),n.strokeRect(e+(c&1?h:0)+i/2,f,i/2,i/3)}n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(e,t,i,3);break}case 5:{n.fillStyle="#5a1a0e",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#b8360f",n.beginPath();for(let h=0;h<=6;h++){const c=e+h/6*i,f=t+i*(.35+.12*Math.sin(a*1.5+s+h));h===0?n.moveTo(c,f):n.lineTo(c,f)}n.lineTo(e+i,t+i),n.lineTo(e,t+i),n.closePath(),n.fill(),n.fillStyle="#ff7a1a";for(let h=0;h<3;h++){const c=(a*.8+Wt(s+h*7))%1;n.globalAlpha=1-c,n.beginPath(),n.arc(e+i*(.2+Wt(s*3+h)*.6),t+i*(.75-c*.3),2+c*3,0,ve),n.fill()}if(n.globalAlpha=1,o>0){const h=n.createRadialGradient(e+i/2,t+i/2,2,e+i/2,t+i/2,i*.75);h.addColorStop(0,`rgba(255,245,160,${.95*o})`),h.addColorStop(.6,`rgba(255,150,30,${.75*o})`),h.addColorStop(1,`rgba(255,80,0,${.35*o})`),n.fillStyle=h,n.fillRect(e,t,i+.5,i+.5)}break}case 6:{Gr(n,e,t,i,s,l);const h=n.createRadialGradient(e+i/2,t+i*.55,2,e+i/2,t+i*.55,i*.42);h.addColorStop(0,"#000000"),h.addColorStop(.7,"#1a120c"),h.addColorStop(1,"#4e3523"),n.fillStyle=h,n.beginPath(),n.ellipse(e+i/2,t+i*.55,i*.42,i*.34,0,0,ve),n.fill(),n.strokeStyle="#6d4c32",n.lineWidth=3,n.stroke();break}}}function Ec(n,e,t,i,r,s,a,o,l,h){if(o&256){r===0?Fa(n,e,t,i,s,0,o,h):r===1?Na(n,e,t,i,s,0,o,h):r===2?ka(n,e,t,i,s,0,o,h):r===3?Ba(n,e,t,i,s,0,o,h):r===4&&Oa(n,e,t,i,s,0,o,h);return}const c=i/48,[f,u]=Ar[r]??Ar[0];o&32&&(n.beginPath(),n.rect(e-i,t-i*2,i*2,i*2-8*c),n.clip(),t+=20*c);const m=t-l,g=a>0?Math.sin(a*14)*3*c:0,M=a,d=[];if(o&1&&d.push("64,170,255"),o&2&&d.push("80,230,100"),o&4&&d.push("255,225,40"),d.length>0){const P=$o(M),R=d[Math.floor(P*2)%d.length],A=.5+.5*Math.sin(P*8),x=m-24*c,C=n.createRadialGradient(e,x,4*c,e,x,34*c);C.addColorStop(0,`rgba(${R},${.55+.3*A})`),C.addColorStop(1,`rgba(${R},0)`),n.fillStyle=C,n.beginPath(),n.arc(e,x,34*c,0,ve),n.fill(),n.shadowColor=`rgb(${R})`,n.shadowBlur=12+10*A}if(r===0&&Fa(n,e,m,i,s,a,o,h)||r===1&&Na(n,e,m,i,s,a,o,h)||r===2&&ka(n,e,m,i,s,a,o,h)||r===3&&Ba(n,e,m,i,s,a,o,h)||r===4&&Oa(n,e,m,i,s,a,o,h))return;r===2&&Zo(n,e,m-26*c,c,"#ffffff","#c8e6c9",M);const p=s===2?-1:s===3?1:0,b=(o&16)!==0,T=()=>{n.fillStyle="#546e7a",n.strokeStyle="#263238",n.lineWidth=1.5*c;const P=e,R=m-20*c;let A=0,x=0,C=0,_=0;const S=(b?20:16)*c;s===0?[A,x,C,_]=[P+6*c,R-S,7*c,S]:s===1?[A,x,C,_]=[P+6*c,R,7*c,S]:s===2?[A,x,C,_]=[P-S-2*c,R-3*c,S,7*c]:[A,x,C,_]=[P+2*c,R-3*c,S,7*c],n.beginPath(),n.roundRect(A,x,C,_,2*c),n.fill(),n.stroke(),n.fillStyle=f;const N=5*c;if(s===0?n.fillRect(A,x,C,N):s===1?n.fillRect(A,x+_-N,C,N):s===2?n.fillRect(A,x,N,_):n.fillRect(A+C-N,x,N,_),b){const F=s===2?A:s===3?A+C:A+C/2,X=s===0?x:s===1?x+_:x+_/2;n.fillStyle=u,n.globalAlpha=.85,n.beginPath(),n.arc(F,X,6*c,0,ve),n.fill(),n.globalAlpha=1}};s===0&&T(),n.fillStyle="#263238",n.fillRect(e-8*c,m-10*c+Math.max(0,g),6*c,10*c-Math.max(0,g)),n.fillRect(e+2*c,m-10*c+Math.max(0,-g),6*c,10*c-Math.max(0,-g)),n.fillStyle=f,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*c,n.beginPath(),n.roundRect(e-11*c,m-30*c,22*c,21*c,5*c),n.fill(),n.stroke(),n.fillStyle=u,n.fillRect(e-11*c,m-15*c,22*c,3*c),s!==0&&(n.fillStyle=u,n.beginPath(),n.arc(e+p*3*c,m-23*c,3.5*c,0,ve),n.fill()),r===4&&(n.fillStyle="#6d4c41",n.fillRect(e-15*c,m-31*c,9*c,8*c),n.fillRect(e+6*c,m-31*c,9*c,8*c),n.strokeStyle="#3e2723",n.strokeRect(e-15*c,m-31*c,9*c,8*c),n.strokeRect(e+6*c,m-31*c,9*c,8*c));const y=m-38*c;switch(n.fillStyle=f,n.strokeStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(e,y,11*c,0,ve),n.fill(),n.stroke(),n.fillStyle="#102030",s===1?(n.beginPath(),n.roundRect(e-8*c,y-3*c,16*c,7*c,3*c),n.fill(),n.fillStyle="#80deea",n.fillRect(e-6*c,y-1*c,4*c,2*c),n.fillRect(e+2*c,y-1*c,4*c,2*c)):p!==0&&(n.beginPath(),n.roundRect(e+(p>0?0:-11*c),y-3*c,11*c,7*c,3*c),n.fill(),n.fillStyle="#80deea",n.fillRect(e+p*6*c-2*c,y-1*c,4*c,2*c)),n.fillStyle=u,r){case 0:n.fillStyle="#ffb300",n.beginPath(),n.moveTo(e-6*c,y-8*c),n.quadraticCurveTo(e-2*c,y-22*c+Math.sin(M*20)*2*c,e+1*c,y-12*c),n.quadraticCurveTo(e+5*c,y-20*c,e+7*c,y-8*c),n.closePath(),n.fill();break;case 1:n.fillStyle="#e1f5fe";for(const P of[-7,0,7])n.beginPath(),n.moveTo(e+(P-3)*c,y-8*c),n.lineTo(e+P*c,y-(P===0?19:15)*c),n.lineTo(e+(P+3)*c,y-8*c),n.fill();break;case 2:n.fillStyle="#fff",n.beginPath(),n.ellipse(e-10*c,y-6*c,3*c,7*c,-.6,0,ve),n.ellipse(e+10*c,y-6*c,3*c,7*c,.6,0,ve),n.fill();break;case 3:n.fillStyle="#7b1fa2",n.beginPath(),n.moveTo(e-1*c,y-9*c),n.lineTo(e+5*c,y-20*c),n.lineTo(e+2*c,y-14*c),n.lineTo(e+7*c,y-15*c),n.lineTo(e+2*c,y-8*c),n.closePath(),n.fill();break;case 4:n.fillStyle="#4e342e",n.beginPath(),n.moveTo(e-8*c,y-7*c),n.lineTo(e-4*c,y-15*c),n.lineTo(e+4*c,y-15*c),n.lineTo(e+8*c,y-7*c),n.closePath(),n.fill();break}s!==0&&T()}function $o(n){return n+performance.now()/1e3}function Zo(n,e,t,i,r,s,a){const o=Math.sin($o(a)*8)*.25;for(const l of[-1,1])n.save(),n.translate(e+l*6*i,t),n.rotate(l*(.35+o)),n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=1,n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(l*26*i,-18*i,l*30*i,4*i),n.quadraticCurveTo(l*18*i,2*i,l*22*i,12*i),n.quadraticCurveTo(l*10*i,8*i,0,10*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle=s,n.beginPath(),n.moveTo(0,2*i),n.quadraticCurveTo(l*16*i,-8*i,l*20*i,4*i),n.quadraticCurveTo(l*10*i,4*i,0,8*i),n.fill(),n.restore()}function Tc(n,e,t,i,r,s,a,o){const l=i/44,h=o&1?"#ffffff":fa[r],c=o&1?"#dddddd":ua[r],f=(o&2)!==0,u=f?0:Math.abs(Math.sin(a*10))*2*l,m=t-u,g=f?0:Math.sin(a*10)*2.5*l,M=s===2?-1:s===3?1:0;n.fillStyle=c,n.fillRect(e-8*l,m-8*l+Math.max(0,g),6*l,8*l),n.fillRect(e+2*l,m-8*l+Math.max(0,-g),6*l,8*l),s!==0&&(n.save(),n.translate(e+(M===0?12:M*12)*l,m-18*l),n.rotate((M||1)*(.5+Math.sin(a*6)*.2)),n.fillStyle="#6d4c41",n.beginPath(),n.roundRect(-2*l,-14*l,5*l,16*l,2*l),n.fill(),n.fillStyle="#8d6e63",n.beginPath(),n.arc(.5*l,-14*l,4.5*l,0,ve),n.fill(),n.restore()),n.fillStyle=h,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*l,n.beginPath(),n.ellipse(e,m-15*l,11*l,10*l,0,0,ve),n.fill(),n.stroke(),n.fillStyle="#795548",n.fillRect(e-11*l,m-13*l,22*l,5*l);const d=m-30*l;if(n.fillStyle=h,n.beginPath(),n.moveTo(e-9*l,d-2*l),n.lineTo(e-19*l,d-9*l),n.lineTo(e-8*l,d+4*l),n.moveTo(e+9*l,d-2*l),n.lineTo(e+19*l,d-9*l),n.lineTo(e+8*l,d+4*l),n.fill(),n.beginPath(),n.arc(e,d,10*l,0,ve),n.fill(),n.stroke(),s!==0){const p=M*3*l;n.fillStyle="#fff",n.beginPath(),n.arc(e-4*l+p,d-1*l,3*l,0,ve),n.arc(e+4*l+p,d-1*l,3*l,0,ve),n.fill(),n.fillStyle="#b71c1c",n.beginPath(),n.arc(e-4*l+p*1.4,d-1*l+(s===1?1:0)*l,1.5*l,0,ve),n.arc(e+4*l+p*1.4,d-1*l+(s===1?1:0)*l,1.5*l,0,ve),n.fill(),n.strokeStyle="#000",n.lineWidth=1.2*l,n.beginPath(),n.moveTo(e-4*l+p,d+5*l),n.lineTo(e+4*l+p,d+5*l),n.stroke(),n.fillStyle="#fff",n.fillRect(e-3*l+p,d+5*l,2*l,2*l),n.fillRect(e+1*l+p,d+5*l,2*l,2*l)}r===3&&!(o&1)&&(n.fillStyle="#ffeb3b",n.beginPath(),n.moveTo(e-6*l,d-8*l),n.lineTo(e-6*l,d-15*l),n.lineTo(e-3*l,d-11*l),n.lineTo(e,d-16*l),n.lineTo(e+3*l,d-11*l),n.lineTo(e+6*l,d-15*l),n.lineTo(e+6*l,d-8*l),n.closePath(),n.fill())}function bc(n,e,t,i,r,s,a,o){const l=i/40,c=(o&2)!==0?0:Math.sin(a*9)*.12,f=16*l*(1+c),u=18*l*(1-c)*(.3+.7*s);n.globalAlpha=s;const m=o&1?"#ffffff":fa[r],g=n.createRadialGradient(e-5*l,t-u*.8,2*l,e,t-u*.5,f*1.2);g.addColorStop(0,"#ffffff"),g.addColorStop(.25,m),g.addColorStop(1,o&1?"#dddddd":ua[r]),n.fillStyle=g,n.beginPath(),n.moveTo(e-f,t),n.bezierCurveTo(e-f,t-u*1.1,e-f*.4,t-u*1.5,e,t-u*1.45),n.bezierCurveTo(e+f*.4,t-u*1.5,e+f,t-u*1.1,e+f,t),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=1.5*l,n.stroke(),s>.6&&(n.fillStyle="#111",n.beginPath(),n.ellipse(e-5*l,t-u*.75,2.2*l,3.2*l,0,0,ve),n.ellipse(e+5*l,t-u*.75,2.2*l,3.2*l,0,0,ve),n.fill(),n.fillStyle="#fff",n.fillRect(e-5.5*l,t-u*.85,1.4*l,1.4*l),n.fillRect(e+4.5*l,t-u*.85,1.4*l,1.4*l))}function yc(n,e,t,i,r,s,a,o){const l=i/44,h=Math.sin(s*14),c=o&1?"#ffffff":fa[r],f=o&1?"#dddddd":ua[r];n.save(),n.translate(e,t),n.scale(a<0?-1:1,1),n.fillStyle=f,n.beginPath(),n.moveTo(-2*l,-2*l),n.quadraticCurveTo(-8*l,-22*l*h-4*l,-20*l,-18*l*h),n.quadraticCurveTo(-10*l,-2*l,-2*l,4*l),n.fill(),n.fillStyle=c,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*l,n.beginPath(),n.ellipse(0,0,14*l,9*l,0,0,ve),n.fill(),n.stroke(),n.fillStyle=f,n.beginPath(),n.moveTo(-12*l,-2*l),n.lineTo(-22*l,-6*l),n.lineTo(-20*l,4*l),n.closePath(),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(11*l,-6*l,7*l,0,ve),n.fill(),n.stroke(),n.fillStyle="#ff9800",n.beginPath(),n.moveTo(17*l,-7*l),n.lineTo(25*l,-4*l),n.lineTo(17*l,-2*l),n.closePath(),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(13*l,-8*l,2.6*l,0,ve),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(14*l,-8*l,1.3*l,0,ve),n.fill(),n.fillStyle=c,n.beginPath(),n.moveTo(-4*l,-2*l),n.quadraticCurveTo(2*l,-26*l*h-2*l,-14*l,-24*l*h),n.quadraticCurveTo(-8*l,-4*l,-4*l,4*l),n.fill(),n.stroke(),n.fillStyle="#8a8d99",n.beginPath(),n.arc(2*l,11*l,4*l,0,ve),n.fill(),n.restore()}function Ac(n,e,t,i,r,s){n.globalAlpha=Math.max(0,Math.min(1,s));const a=i/2;n.fillStyle=r>0?"#6d6f7a":"#8a8d99",n.strokeStyle="#3d3f48",n.lineWidth=1.5,n.beginPath(),n.moveTo(e-a,t),n.lineTo(e-a*.6,t-a*.8),n.lineTo(e+a*.4,t-a),n.lineTo(e+a,t-a*.2),n.lineTo(e+a*.7,t+a*.7),n.lineTo(e-a*.5,t+a*.8),n.closePath(),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.35)",n.beginPath(),n.arc(e-a*.3,t-a*.4,a*.25,0,ve),n.fill()}function jo(n,e,t,i,r,s){const a=i/26;n.translate(e,t),n.rotate(r);const o=6+Math.sin(s*60)*3;n.fillStyle="#ffca28",n.beginPath(),n.moveTo(-9*a,-3*a),n.lineTo((-9-o)*a,0),n.lineTo(-9*a,3*a),n.fill(),n.fillStyle="#e53935",n.beginPath(),n.roundRect(-10*a,-4*a,16*a,8*a,2*a),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(6*a,-4*a),n.lineTo(13*a,0),n.lineTo(6*a,4*a),n.fill(),n.fillStyle="#b71c1c",n.beginPath(),n.moveTo(-10*a,-4*a),n.lineTo(-13*a,-8*a),n.lineTo(-5*a,-4*a),n.moveTo(-10*a,4*a),n.lineTo(-13*a,8*a),n.lineTo(-5*a,4*a),n.fill()}function Jo(n,e,t,i,r,s){const a=i/2;n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=1.5,n.beginPath(),n.moveTo(e,t+a*.85),n.bezierCurveTo(e-a*1.3,t-a*.1,e-a*.6,t-a*1.1,e,t-a*.4),n.bezierCurveTo(e+a*.6,t-a*1.1,e+a*1.3,t-a*.1,e,t+a*.85),n.closePath(),n.fill(),n.stroke(),s&&(n.fillStyle=s,n.beginPath(),n.ellipse(e-a*.45,t-a*.35,a*.18,a*.12,-.6,0,ve),n.fill())}function za(n,e,t,i,r){const s=i/30;n.fillStyle="#cfd8dc",n.fillRect(e-3*s,t-13*s,6*s,6*s),n.fillStyle="#8d6e63",n.fillRect(e-4*s,t-15*s,8*s,3*s),n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5,n.beginPath(),n.arc(e,t+3*s,10*s,0,ve),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.6)",n.beginPath(),n.arc(e-4*s,t,2.5*s,0,ve),n.fill()}function wc(n,e,t,i){n.beginPath(),n.moveTo(e+3*i,t-13*i),n.lineTo(e-7*i,t+2*i),n.lineTo(e-1*i,t+2*i),n.lineTo(e-4*i,t+13*i),n.lineTo(e+7*i,t-3*i),n.lineTo(e+1*i,t-3*i),n.closePath()}function Ha(n,e,t,i,r,s){const a=i/30;if(s>0&&(n.save(),n.globalAlpha=.25+.15*Math.sin(s*6),n.fillStyle="#fff",n.beginPath(),n.arc(e,t,17*a,0,ve),n.fill(),n.restore()),!Xl(n,e,t,i,r))switch(r){case 0:Jo(n,e,t,i*.8,"#ff3b5c","#ffd1dc");break;case 1:za(n,e,t,i,"#e53935");break;case 2:za(n,e,t,i,"#1e88e5");break;case 3:jo(n,e,t,i,-Math.PI/4,s);break;case 4:{n.strokeStyle="#4dd0e1",n.lineWidth=3*a,n.lineCap="round";for(let o=0;o<3;o++){const l=o*Math.PI/3,h=Math.cos(l)*12*a,c=Math.sin(l)*12*a;n.beginPath(),n.moveTo(e-h,t-c),n.lineTo(e+h,t+c),n.stroke()}n.fillStyle="#e0f7fa",n.beginPath(),n.arc(e,t,3.5*a,0,ve),n.fill();break}case 5:Zo(n,e,t+2*a,a*.55,"#ff7043","#ffca28",s),n.fillStyle="#ff5722",n.beginPath(),n.arc(e,t+4*a,4*a,0,ve),n.fill();break;case 6:n.fillStyle="#ffee58",n.strokeStyle="#f57f17",n.lineWidth=1.5,wc(n,e,t,a),n.fill(),n.stroke();break;case 7:{n.fillStyle="#8d6e63",n.strokeStyle="#3e2723",n.lineWidth=1.5,n.beginPath();for(let o=0;o<6;o++){const l=o*ve/6-Math.PI/2,h=e+Math.cos(l)*12*a,c=t+Math.sin(l)*12*a;o===0?n.moveTo(h,c):n.lineTo(h,c)}n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ffcc80",n.beginPath(),n.moveTo(e,t-7*a),n.lineTo(e+5*a,t),n.lineTo(e,t+7*a),n.lineTo(e-5*a,t),n.closePath(),n.fill();break}}}function Rc(n,e,t,i,r,s,a){const[o,l]=Ar[r]??Ar[0],h=e+i/2,c=t+i/2;if(n.globalAlpha=1-a,n.fillStyle=o,n.globalAlpha=(1-a)*.35,n.fillRect(e+2,t+2,i-4,i-4),r===0&&Vl(n,e,t,i,s,a)||r===1&&zl(n,e,t,i,s,a)||r===2&&Ql(n,e,t,i,s,a)||r===3&&Zl(n,e,t,i,s,a)||r===4&&Yl(n,e,t,i,s,a))return;n.globalAlpha=1-a;const f=[-Math.PI/2,Math.PI/2,Math.PI,0][s]??0;switch(n.translate(h,c),n.rotate(f),r){case 0:n.fillStyle=l,n.beginPath(),n.arc(-i*.3+a*i*.6,0,i*.22,0,ve),n.fill(),n.fillStyle="#fff59d",n.beginPath(),n.arc(-i*.3+a*i*.6,0,i*.1,0,ve),n.fill();break;case 1:n.fillStyle="#e1f5fe",n.beginPath(),n.moveTo(-i*.4,-i*.08),n.lineTo(i*.45,0),n.lineTo(-i*.4,i*.08),n.closePath(),n.fill();break;case 2:n.strokeStyle="#ffffff",n.lineWidth=4,n.beginPath(),n.arc(-i*.2,0,i*.4,-1,1),n.stroke();break;case 3:n.strokeStyle="#fff176",n.lineWidth=3,n.beginPath(),n.moveTo(-i/2,0);for(let u=1;u<=5;u++)n.lineTo(-i/2+u*i/5,(u%2?-1:1)*i*.15);n.stroke();break;case 4:n.fillStyle="#6d4c41";for(let u=-1;u<=1;u++)n.beginPath(),n.moveTo(u*i*.25-i*.1,i*.3),n.lineTo(u*i*.25,i*.3-i*.5*(1-a)),n.lineTo(u*i*.25+i*.1,i*.3),n.fill();break}}function xc(n,e,t,i,r){if(Wl(n,e,t,i,r))return;const s=r<.7?1:1-(r-.7)/.3;n.globalAlpha=s;const a=n.createRadialGradient(e+i/2,t+i*.7,2,e+i/2,t+i*.6,i*.7);a.addColorStop(0,"rgba(255,245,157,0.95)"),a.addColorStop(.5,"rgba(255,112,67,0.8)"),a.addColorStop(1,"rgba(183,28,28,0)"),n.fillStyle=a,n.fillRect(e-i*.1,t-i*.3,i*1.2,i*1.3);for(let o=0;o<4;o++){const l=e+i*(.2+o*.2),h=i*(.5+.4*Math.sin(r*20+o*1.7))*(.5+r);n.fillStyle=o%2?"#ff7043":"#ffca28",n.beginPath(),n.moveTo(l-i*.1,t+i*.9),n.quadraticCurveTo(l-i*.12,t+i*.9-h*.6,l,t+i*.9-h),n.quadraticCurveTo(l+i*.12,t+i*.9-h*.6,l+i*.1,t+i*.9),n.fill()}}function Cc(n,e,t,i,r){if(Hl(n,e,t,i,r))return;const s=Math.min(1,r*3);n.globalAlpha=r<.7?1:1-(r-.7)/.3,n.fillStyle="rgba(179,229,252,0.35)",n.fillRect(e+2,t+2,i-4,i-4);const a=[[.25,.8,.5],[.5,.85,.8],[.75,.8,.55],[.38,.6,.35],[.62,.6,.4]];for(const[o,l,h]of a){const c=i*h*s;n.fillStyle="#e1f5fe",n.strokeStyle="#4fc3f7",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*o-i*.08,t+i*l),n.lineTo(e+i*o,t+i*l-c),n.lineTo(e+i*o+i*.08,t+i*l),n.closePath(),n.fill(),n.stroke()}}function Pc(n,e,t,i,r,s){n.globalAlpha=(1-s)*.85,n.fillStyle=Di(r);for(let a=0;a<6;a++){const o=a*ve/6+.4,l=i*.15+i*.35*s;n.beginPath(),n.arc(e+Math.cos(o)*l,t+Math.sin(o)*l*.7,i*.14*(1-s*.5),0,ve),n.fill()}}function Lc(n,e,t,i,r,s){if(Kl(n,e,t,i,r,s))return;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;n.translate(e,t),n.rotate(a);for(let o=1;o<=4;o++)n.globalAlpha=.5-o*.1,n.fillStyle="#a1887f",n.beginPath(),n.arc(-o*i*.25,Math.sin(s*30+o)*3,i*.3-o*3,0,ve),n.fill();n.globalAlpha=1,n.rotate(s*12),n.fillStyle="#6d4c41",n.strokeStyle="#3e2723",n.lineWidth=2,n.beginPath();for(let o=0;o<7;o++){const l=o*ve/7,h=i*(.38+o%2*.08);o===0?n.moveTo(Math.cos(l)*h,Math.sin(l)*h):n.lineTo(Math.cos(l)*h,Math.sin(l)*h)}n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ffb74d",n.beginPath(),n.arc(0,0,i*.12,0,ve),n.fill()}function Ic(n,e,t,i,r,s){n.globalAlpha=1-s,n.lineCap="round",n.strokeStyle="rgba(255,241,118,0.5)",n.lineWidth=18*(1-s*.5),n.beginPath(),n.moveTo(e,t-20),n.lineTo(i,r-20),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=5,n.stroke()}function Dc(n,e,t,i,r){n.globalAlpha=1-r,n.fillStyle="#ff7043",n.beginPath(),n.arc(e,t,i*.5*(.4+r),0,ve),n.fill(),n.fillStyle="#fff59d",n.beginPath(),n.arc(e,t,i*.3*(.4+r)*(1-r),0,ve),n.fill()}function Uc(n,e,t,i,r){if(jl(n,e,t,i,r))return;n.globalAlpha=r<.5?1:1-(r-.5)/.5,n.strokeStyle="#fff176",n.lineWidth=4,n.lineJoin="round",n.beginPath();let s=e,a=t-i*4;n.moveTo(s,a);let o=0;for(;a<t-10;)a+=i*.5,s=e+(o%2?1:-1)*i*.25*(1-a/(t+1)+.5),n.lineTo(s,Math.min(a,t-10)),o++;n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,200,0.6)",n.beginPath(),n.arc(e,t-14,i*.4*(1-r),0,ve),n.fill()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="169",Nc=0,Ga=1,Fc=2,Qo=1,el=2,on=3,yn=0,Rt=1,$t=2,Tn=0,di=1,Va=2,Wa=3,Xa=4,Oc=5,On=100,Bc=101,kc=102,zc=103,Hc=104,Gc=200,Vc=201,Wc=202,Xc=203,As=204,ws=205,qc=206,Yc=207,Kc=208,$c=209,Zc=210,jc=211,Jc=212,Qc=213,eh=214,Rs=0,xs=1,Cs=2,_i=3,Ps=4,Ls=5,Is=6,Ds=7,tl=0,th=1,nh=2,bn=0,ih=1,rh=2,sh=3,ah=4,oh=5,lh=6,ch=7,nl=300,gi=301,vi=302,Us=303,Ns=304,Ur=306,wr=1e3,kn=1001,Fs=1002,Ot=1003,hh=1004,Ki=1005,Xt=1006,Vr=1007,zn=1008,fn=1009,il=1010,rl=1011,Fi=1012,pa=1013,Gn=1014,cn=1015,zi=1016,ma=1017,_a=1018,Si=1020,sl=35902,al=1021,ol=1022,Yt=1023,ll=1024,cl=1025,pi=1026,Mi=1027,hl=1028,ga=1029,fl=1030,va=1031,Sa=1033,gr=33776,vr=33777,Sr=33778,Mr=33779,Os=35840,Bs=35841,ks=35842,zs=35843,Hs=36196,Gs=37492,Vs=37496,Ws=37808,Xs=37809,qs=37810,Ys=37811,Ks=37812,$s=37813,Zs=37814,js=37815,Js=37816,Qs=37817,ea=37818,ta=37819,na=37820,ia=37821,Er=36492,ra=36494,sa=36495,ul=36283,aa=36284,oa=36285,la=36286,fh=3200,uh=3201,dl=0,dh=1,En="",St="srgb",wn="srgb-linear",Ma="display-p3",Nr="display-p3-linear",Rr="linear",it="srgb",xr="rec709",Cr="p3",qn=7680,qa=519,ph=512,mh=513,_h=514,pl=515,gh=516,vh=517,Sh=518,Mh=519,Ya=35044,Ka="300 es",hn=2e3,Pr=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,ca=180/Math.PI;function Hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Eh(n,e){return(n%e+e)%e}function Xr(n,e,t){return(1-t)*n+t*e}function yi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,i,r,s,a,o,l,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,h)}set(e,t,i,r,s,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],f=i[7],u=i[2],m=i[5],g=i[8],M=r[0],d=r[3],p=r[6],b=r[1],T=r[4],y=r[7],P=r[2],R=r[5],A=r[8];return s[0]=a*M+o*b+l*P,s[3]=a*d+o*T+l*R,s[6]=a*p+o*y+l*A,s[1]=h*M+c*b+f*P,s[4]=h*d+c*T+f*R,s[7]=h*p+c*y+f*A,s[2]=u*M+m*b+g*P,s[5]=u*d+m*T+g*R,s[8]=u*p+m*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+r*s*h-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],f=c*a-o*h,u=o*l-c*s,m=h*s-a*l,g=t*f+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=f*M,e[1]=(r*h-c*i)*M,e[2]=(o*i-r*a)*M,e[3]=u*M,e[4]=(c*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=m*M,e[7]=(i*l-h*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-r*h,r*l,-r*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qr.makeScale(e,t)),this}rotate(e){return this.premultiply(qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new De;function ml(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Th(){const n=Lr("canvas");return n.style.display="block",n}const $a={};function Tr(n){n in $a||($a[n]=!0,console.warn(n))}function bh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function yh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ah(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Za=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ja=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[wn]:{transfer:Rr,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[St]:{transfer:it,primaries:xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Nr]:{transfer:Rr,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ja),fromReference:n=>n.applyMatrix3(Za)},[Ma]:{transfer:it,primaries:Cr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ja),fromReference:n=>n.applyMatrix3(Za).convertLinearToSRGB()}},wh=new Set([wn,Nr]),$e={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!wh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ai[e].toReference,r=Ai[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ai[n].primaries},getTransfer:function(n){return n===En?Rr:Ai[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ai[e].luminanceCoefficients)}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yn;class Rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Lr("canvas")),Yn.width=e.width,Yn.height=e.height;const i=Yn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mi(t[i]/255)*255):t[i]=mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xh=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kr(r[a].image)):s.push(Kr(r[a]))}else s=Kr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ch=0;class Tt extends Ti{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=kn,r=kn,s=Xt,a=zn,o=Yt,l=fn,h=Tt.DEFAULT_ANISOTROPY,c=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Hi(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=nl;Tt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,h=l[0],c=l[4],f=l[8],u=l[1],m=l[5],g=l[9],M=l[2],d=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+d)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,y=(m+1)/2,P=(p+1)/2,R=(c+u)/4,A=(f+M)/4,x=(g+d)/4;return T>y&&T>P?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=A/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=x/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=x/s),this.set(i,r,s,t),this}let b=Math.sqrt((d-g)*(d-g)+(f-M)*(f-M)+(u-c)*(u-c));return Math.abs(b)<.001&&(b=1),this.x=(d-g)/b,this.y=(f-M)/b,this.z=(u-c)/b,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ph extends Ti{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Tt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Ph{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gl extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends Tt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],h=i[r+1],c=i[r+2],f=i[r+3];const u=s[a+0],m=s[a+1],g=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=M;return}if(f!==M||l!==u||h!==m||c!==g){let d=1-o;const p=l*u+h*m+c*g+f*M,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const P=Math.sqrt(T),R=Math.atan2(P,p*b);d=Math.sin(d*R)/P,o=Math.sin(o*R)/P}const y=o*b;if(l=l*d+u*y,h=h*d+m*y,c=c*d+g*y,f=f*d+M*y,d===1-o){const P=1/Math.sqrt(l*l+h*h+c*c+f*f);l*=P,h*=P,c*=P,f*=P}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],h=i[r+2],c=i[r+3],f=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+c*f+l*m-h*u,e[t+1]=l*g+c*u+h*f-o*m,e[t+2]=h*g+c*m+o*u-l*f,e[t+3]=c*g-o*f-l*u-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(r/2),f=o(s/2),u=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"YXZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"ZXY":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"ZYX":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"YZX":this._x=u*c*f+h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f-u*m*g;break;case"XZY":this._x=u*c*f-h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],f=t[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-h)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+h)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-h)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+h)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+r*h-s*l,this._y=r*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-r*o,this._w=a*c-i*o-r*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),f=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*h+a*f-o*c,this.y=i+l*c+o*h-s*f,this.z=r+l*f+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $r.copy(this).projectOnVector(e),this.sub($r)}reflect(e){return this.sub($r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $r=new B,Ja=new Gi;class Vi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(s,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$i.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$i.copy(i.boundingBox)),$i.applyMatrix4(e.matrixWorld),this.union($i)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),Zi.subVectors(this.max,wi),Kn.subVectors(e.a,wi),$n.subVectors(e.b,wi),Zn.subVectors(e.c,wi),dn.subVectors($n,Kn),pn.subVectors(Zn,$n),Cn.subVectors(Kn,Zn);let t=[0,-dn.z,dn.y,0,-pn.z,pn.y,0,-Cn.z,Cn.y,dn.z,0,-dn.x,pn.z,0,-pn.x,Cn.z,0,-Cn.x,-dn.y,dn.x,0,-pn.y,pn.x,0,-Cn.y,Cn.x,0];return!Zr(t,Kn,$n,Zn,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,Kn,$n,Zn,Zi))?!1:(ji.crossVectors(dn,pn),t=[ji.x,ji.y,ji.z],Zr(t,Kn,$n,Zn,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new B,new B,new B,new B,new B,new B,new B,new B],kt=new B,$i=new Vi,Kn=new B,$n=new B,Zn=new B,dn=new B,pn=new B,Cn=new B,wi=new B,Zi=new B,ji=new B,Pn=new B;function Zr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Pn.fromArray(n,s);const o=r.x*Math.abs(Pn.x)+r.y*Math.abs(Pn.y)+r.z*Math.abs(Pn.z),l=e.dot(Pn),h=t.dot(Pn),c=i.dot(Pn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Ih=new Vi,Ri=new B,jr=new B;class Ea{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ih.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ri,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(jr)),this.expandByPoint(Ri.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new B,Jr=new B,Ji=new B,mn=new B,Qr=new B,Qi=new B,es=new B;class Dh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jr.copy(e).add(t).multiplyScalar(.5),Ji.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(Jr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ji),o=mn.dot(this.direction),l=-mn.dot(Ji),h=mn.lengthSq(),c=Math.abs(1-a*a);let f,u,m,g;if(c>0)if(f=a*l-o,u=a*o-l,g=s*c,f>=0)if(u>=-g)if(u<=g){const M=1/c;f*=M,u*=M,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+h}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+h):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+h):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+u*(u+2*l)+h);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Jr).addScaledVector(Ji,u),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const i=nn.dot(this.direction),r=nn.dot(nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,r=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,r=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,i,r,s){Qr.subVectors(t,e),Qi.subVectors(i,e),es.crossVectors(Qr,Qi);let a=this.direction.dot(es),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,e);const l=o*this.direction.dot(Qi.crossVectors(mn,Qi));if(l<0)return null;const h=o*this.direction.dot(Qr.cross(mn));if(h<0||l+h>a)return null;const c=-o*mn.dot(es);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,o,l,h,c,f,u,m,g,M,d){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,h,c,f,u,m,g,M,d)}set(e,t,i,r,s,a,o,l,h,c,f,u,m,g,M,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=f,p[14]=u,p[3]=m,p[7]=g,p[11]=M,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),h=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*c,m=a*f,g=o*c,M=o*f;t[0]=l*c,t[4]=-l*f,t[8]=h,t[1]=m+g*h,t[5]=u-M*h,t[9]=-o*l,t[2]=M-u*h,t[6]=g+m*h,t[10]=a*l}else if(e.order==="YXZ"){const u=l*c,m=l*f,g=h*c,M=h*f;t[0]=u+M*o,t[4]=g*o-m,t[8]=a*h,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=m*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*c,m=l*f,g=h*c,M=h*f;t[0]=u-M*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*c,t[9]=M-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*c,m=a*f,g=o*c,M=o*f;t[0]=l*c,t[4]=g*h-m,t[8]=u*h+M,t[1]=l*f,t[5]=M*h+u,t[9]=m*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*h,g=o*l,M=o*h;t[0]=l*c,t[4]=M-u*f,t[8]=g*f+m,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=m*f+g,t[10]=u-M*f}else if(e.order==="XZY"){const u=a*l,m=a*h,g=o*l,M=o*h;t[0]=l*c,t[4]=-f,t[8]=h*c,t[1]=u*f+M,t[5]=a*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*c,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Nh)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),_n.crossVectors(i,Lt),_n.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),_n.crossVectors(i,Lt)),_n.normalize(),er.crossVectors(Lt,_n),r[0]=_n.x,r[4]=er.x,r[8]=Lt.x,r[1]=_n.y,r[5]=er.y,r[9]=Lt.y,r[2]=_n.z,r[6]=er.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],f=i[5],u=i[9],m=i[13],g=i[2],M=i[6],d=i[10],p=i[14],b=i[3],T=i[7],y=i[11],P=i[15],R=r[0],A=r[4],x=r[8],C=r[12],_=r[1],S=r[5],N=r[9],F=r[13],X=r[2],q=r[6],H=r[10],V=r[14],G=r[3],re=r[7],se=r[11],me=r[15];return s[0]=a*R+o*_+l*X+h*G,s[4]=a*A+o*S+l*q+h*re,s[8]=a*x+o*N+l*H+h*se,s[12]=a*C+o*F+l*V+h*me,s[1]=c*R+f*_+u*X+m*G,s[5]=c*A+f*S+u*q+m*re,s[9]=c*x+f*N+u*H+m*se,s[13]=c*C+f*F+u*V+m*me,s[2]=g*R+M*_+d*X+p*G,s[6]=g*A+M*S+d*q+p*re,s[10]=g*x+M*N+d*H+p*se,s[14]=g*C+M*F+d*V+p*me,s[3]=b*R+T*_+y*X+P*G,s[7]=b*A+T*S+y*q+P*re,s[11]=b*x+T*N+y*H+P*se,s[15]=b*C+T*F+y*V+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],f=e[6],u=e[10],m=e[14],g=e[3],M=e[7],d=e[11],p=e[15];return g*(+s*l*f-r*h*f-s*o*u+i*h*u+r*o*m-i*l*m)+M*(+t*l*m-t*h*u+s*a*u-r*a*m+r*h*c-s*l*c)+d*(+t*h*f-t*o*m-s*a*f+i*a*m+s*o*c-i*h*c)+p*(-r*o*c-t*l*f+t*o*u+r*a*f-i*a*u+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],f=e[9],u=e[10],m=e[11],g=e[12],M=e[13],d=e[14],p=e[15],b=f*d*h-M*u*h+M*l*m-o*d*m-f*l*p+o*u*p,T=g*u*h-c*d*h-g*l*m+a*d*m+c*l*p-a*u*p,y=c*M*h-g*f*h+g*o*m-a*M*m-c*o*p+a*f*p,P=g*f*l-c*M*l-g*o*u+a*M*u+c*o*d-a*f*d,R=t*b+i*T+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(M*u*s-f*d*s-M*r*m+i*d*m+f*r*p-i*u*p)*A,e[2]=(o*d*s-M*l*s+M*r*h-i*d*h-o*r*p+i*l*p)*A,e[3]=(f*l*s-o*u*s-f*r*h+i*u*h+o*r*m-i*l*m)*A,e[4]=T*A,e[5]=(c*d*s-g*u*s+g*r*m-t*d*m-c*r*p+t*u*p)*A,e[6]=(g*l*s-a*d*s-g*r*h+t*d*h+a*r*p-t*l*p)*A,e[7]=(a*u*s-c*l*s+c*r*h-t*u*h-a*r*m+t*l*m)*A,e[8]=y*A,e[9]=(g*f*s-c*M*s-g*i*m+t*M*m+c*i*p-t*f*p)*A,e[10]=(a*M*s-g*o*s+g*i*h-t*M*h-a*i*p+t*o*p)*A,e[11]=(c*o*s-a*f*s-c*i*h+t*f*h+a*i*m-t*o*m)*A,e[12]=P*A,e[13]=(c*M*r-g*f*r+g*i*u-t*M*u-c*i*d+t*f*d)*A,e[14]=(g*o*r-a*M*r-g*i*l+t*M*l+a*i*d-t*o*d)*A,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-r*l,h*l+r*o,0,h*o+r*l,c*o+i,c*l-r*a,0,h*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,f=o+o,u=s*h,m=s*c,g=s*f,M=a*c,d=a*f,p=o*f,b=l*h,T=l*c,y=l*f,P=i.x,R=i.y,A=i.z;return r[0]=(1-(M+p))*P,r[1]=(m+y)*P,r[2]=(g-T)*P,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(u+p))*R,r[6]=(d+b)*R,r[7]=0,r[8]=(g+T)*A,r[9]=(d-b)*A,r[10]=(1-(u+M))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),o=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const h=1/s,c=1/a,f=1/o;return zt.elements[0]*=h,zt.elements[1]*=h,zt.elements[2]*=h,zt.elements[4]*=c,zt.elements[5]*=c,zt.elements[6]*=c,zt.elements[8]*=f,zt.elements[9]*=f,zt.elements[10]*=f,t.setFromRotationMatrix(zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=hn){const l=this.elements,h=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r);let m,g;if(o===hn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Pr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=hn){const l=this.elements,h=1/(t-e),c=1/(i-r),f=1/(a-s),u=(t+e)*h,m=(i+r)*c;let g,M;if(o===hn)g=(a+s)*f,M=-2*f;else if(o===Pr)g=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const jn=new B,zt=new ot,Uh=new B(0,0,0),Nh=new B(1,1,1),_n=new B,er=new B,Lt=new B,Qa=new ot,eo=new Gi;class Jt{constructor(e=0,t=0,i=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],c=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eo.setFromEuler(this),this.setFromQuaternion(eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fh=0;const to=new B,Jn=new Gi,rn=new ot,tr=new B,xi=new B,Oh=new B,Bh=new Gi,no=new B(1,0,0),io=new B(0,1,0),ro=new B(0,0,1),so={type:"added"},kh={type:"removed"},Qn={type:"childadded",child:null},ts={type:"childremoved",child:null};class mt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new B,t=new Jt,i=new Gi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new De}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(no,e)}rotateY(e){return this.rotateOnAxis(io,e)}rotateZ(e){return this.rotateOnAxis(ro,e)}translateOnAxis(e,t){return to.copy(e).applyQuaternion(this.quaternion),this.position.add(to.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(no,e)}translateY(e){return this.translateOnAxis(io,e)}translateZ(e){return this.translateOnAxis(ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tr.copy(e):tr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(xi,tr,this.up):rn.lookAt(tr,xi,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(rn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(so),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),ts.child=e,this.dispatchEvent(ts),ts.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(so),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const f=l[h];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new B(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new B,sn=new B,ns=new B,an=new B,ei=new B,ti=new B,ao=new B,is=new B,rs=new B,ss=new B,as=new at,os=new at,ls=new at;class qt{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ht.subVectors(r,t),sn.subVectors(i,t),ns.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(sn),l=Ht.dot(ns),h=sn.dot(sn),c=sn.dot(ns),f=a*h-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(h*l-o*c)*u,g=(a*c-o*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,an.x),l.addScaledVector(a,an.y),l.addScaledVector(o,an.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return as.setScalar(0),os.setScalar(0),ls.setScalar(0),as.fromBufferAttribute(e,t),os.fromBufferAttribute(e,i),ls.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(as,s.x),a.addScaledVector(os,s.y),a.addScaledVector(ls,s.z),a}static isFrontFacing(e,t,i,r){return Ht.subVectors(i,t),sn.subVectors(e,t),Ht.cross(sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ht.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ei.subVectors(r,i),ti.subVectors(s,i),is.subVectors(e,i);const l=ei.dot(is),h=ti.dot(is);if(l<=0&&h<=0)return t.copy(i);rs.subVectors(e,r);const c=ei.dot(rs),f=ti.dot(rs);if(c>=0&&f<=c)return t.copy(r);const u=l*f-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ei,a);ss.subVectors(e,s);const m=ei.dot(ss),g=ti.dot(ss);if(g>=0&&m<=g)return t.copy(s);const M=m*h-l*g;if(M<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(i).addScaledVector(ti,o);const d=c*g-m*f;if(d<=0&&f-c>=0&&m-g>=0)return ao.subVectors(s,r),o=(f-c)/(f-c+(m-g)),t.copy(r).addScaledVector(ao,o);const p=1/(d+M+u);return a=M*p,o=u*p,t.copy(i).addScaledVector(ei,a).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Eh(e,1),t=wt(t,0,1),i=wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=cs(a,s,e+1/3),this.g=cs(a,s,e),this.b=cs(a,s,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=Sl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return $e.fromWorkingColorSpace(vt.copy(this),e),Math.round(wt(vt.r*255,0,255))*65536+Math.round(wt(vt.g*255,0,255))*256+Math.round(wt(vt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(vt.copy(this),t);const i=vt.r,r=vt.g,s=vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const f=a-o;switch(h=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=St){$e.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,i=vt.g,r=vt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(nr);const i=Xr(gn.h,nr.h,t),r=Xr(gn.s,nr.s,t),s=Xr(gn.l,nr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Oe;Oe.NAMES=Sl;let zh=0;class Wi extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=di,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=As,this.blendDst=ws,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(i.blending=this.blending),this.side!==yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==As&&(i.blendSrc=this.blendSrc),this.blendDst!==ws&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ir extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new B,ir=new Ve;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ya,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ir.fromBufferAttribute(this,t),ir.applyMatrix3(e),this.setXY(t,ir.x,ir.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}}class Ml extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class El extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class jt extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Hh=0;const Nt=new ot,hs=new mt,ni=new B,It=new Vi,Ci=new Vi,pt=new B;class Rn extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?El:Ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return hs.lookAt(e),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];It.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,Ci.min),It.expandByPoint(pt),pt.addVectors(It.max,Ci.max),It.expandByPoint(pt)):(It.expandByPoint(Ci.min),It.expandByPoint(Ci.max))}It.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)pt.fromBufferAttribute(o,h),l&&(ni.fromBufferAttribute(e,h),pt.add(ni)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new B,l[x]=new B;const h=new B,c=new B,f=new B,u=new Ve,m=new Ve,g=new Ve,M=new B,d=new B;function p(x,C,_){h.fromBufferAttribute(i,x),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,_),u.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),g.fromBufferAttribute(s,_),c.sub(h),f.sub(h),m.sub(u),g.sub(u);const S=1/(m.x*g.y-g.x*m.y);isFinite(S)&&(M.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(S),d.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(S),o[x].add(M),o[C].add(M),o[_].add(M),l[x].add(d),l[C].add(d),l[_].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,C=b.length;x<C;++x){const _=b[x],S=_.start,N=_.count;for(let F=S,X=S+N;F<X;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new B,y=new B,P=new B,R=new B;function A(x){P.fromBufferAttribute(r,x),R.copy(P);const C=o[x];T.copy(C),T.sub(P.multiplyScalar(P.dot(C))).normalize(),y.crossVectors(R,C);const S=y.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,S)}for(let x=0,C=b.length;x<C;++x){const _=b[x],S=_.start,N=_.count;for(let F=S,X=S+N;F<X;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,h=new B,c=new B,f=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),M=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,d),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),h.fromBufferAttribute(i,d),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,f=o.normalized,u=new h.constructor(l.length*c);let m=0,g=0;for(let M=0,d=l.length;M<d;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*c;for(let p=0;p<c;p++)u[g++]=h[m++]}return new Zt(u,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],h=e(l,i);t.setAttribute(o,h)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,f=h.length;c<f;c++){const u=h[c],m=e(u,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let f=0,u=h.length;f<u;f++){const m=h[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const c=r[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],f=s[h];for(let u=0,m=f.length;u<m;u++)c.push(f[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new ot,Ln=new Dh,rr=new Ea,lo=new B,sr=new B,ar=new B,or=new B,fs=new B,lr=new B,co=new B,cr=new B;class Mt extends mt{constructor(e=new Rn,t=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lr.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=o[l],f=s[l];c!==0&&(fs.fromBufferAttribute(f,e),a?lr.addScaledVector(fs,c):lr.addScaledVector(fs.sub(t),c))}t.add(lr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(s),Ln.copy(e.ray).recast(e.near),!(rr.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(rr,lo)===null||Ln.origin.distanceToSquared(lo)>(e.far-e.near)**2))&&(oo.copy(s).invert(),Ln.copy(e.ray).applyMatrix4(oo),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const d=u[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let y=b,P=T;y<P;y+=3){const R=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);r=hr(this,p,e,i,h,c,f,R,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let d=g,p=M;d<p;d+=3){const b=o.getX(d),T=o.getX(d+1),y=o.getX(d+2);r=hr(this,a,e,i,h,c,f,b,T,y),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const d=u[g],p=a[d.materialIndex],b=Math.max(d.start,m.start),T=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let y=b,P=T;y<P;y+=3){const R=y,A=y+1,x=y+2;r=hr(this,p,e,i,h,c,f,R,A,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let d=g,p=M;d<p;d+=3){const b=d,T=d+1,y=d+2;r=hr(this,a,e,i,h,c,f,b,T,y),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Gh(n,e,t,i,r,s,a,o){let l;if(e.side===Rt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===yn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(cr);return h<t.near||h>t.far?null:{distance:h,point:cr.clone(),object:n}}function hr(n,e,t,i,r,s,a,o,l,h){n.getVertexPosition(o,sr),n.getVertexPosition(l,ar),n.getVertexPosition(h,or);const c=Gh(n,e,t,i,sr,ar,or,co);if(c){const f=new B;qt.getBarycoord(co,sr,ar,or,f),r&&(c.uv=qt.getInterpolatedAttribute(r,o,l,h,f,new Ve)),s&&(c.uv1=qt.getInterpolatedAttribute(s,o,l,h,f,new Ve)),a&&(c.normal=qt.getInterpolatedAttribute(a,o,l,h,f,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:h,normal:new B,materialIndex:0};qt.getNormal(sr,ar,or,u.normal),c.face=u,c.barycoord=f}return c}class Wn extends Rn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],c=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(f,2));function g(M,d,p,b,T,y,P,R,A,x,C){const _=y/A,S=P/x,N=y/2,F=P/2,X=R/2,q=A+1,H=x+1;let V=0,G=0;const re=new B;for(let se=0;se<H;se++){const me=se*S-F;for(let Be=0;Be<q;Be++){const Ze=Be*_-N;re[M]=Ze*b,re[d]=me*T,re[p]=X,h.push(re.x,re.y,re.z),re[M]=0,re[d]=0,re[p]=R>0?1:-1,c.push(re.x,re.y,re.z),f.push(Be/A),f.push(1-se/x),V+=1}}for(let se=0;se<x;se++)for(let me=0;me<A;me++){const Be=u+me+q*se,Ze=u+me+q*(se+1),Y=u+(me+1)+q*(se+1),J=u+(me+1)+q*se;l.push(Be,Ze,J),l.push(Ze,Y,J),G+=6}o.addGroup(m,G,C),m+=G,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Ei(n[t]);for(const r in i)e[r]=i[r]}return e}function Vh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tl(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Wh={clone:Ei,merge:Et};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new B,ho=new Ve,fo=new Ve;class Ft extends bl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vn.x,vn.y).multiplyScalar(-e/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vn.x,vn.y).multiplyScalar(-e/vn.z)}getViewSize(e,t){return this.getViewBounds(e,ho,fo),t.subVectors(fo,ho)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/h,r*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,ri=1;class Yh extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ft(ii,ri,e,t);r.layers=this.layers,this.add(r);const s=new Ft(ii,ri,e,t);s.layers=this.layers,this.add(s);const a=new Ft(ii,ri,e,t);a.layers=this.layers,this.add(a);const o=new Ft(ii,ri,e,t);o.layers=this.layers,this.add(o);const l=new Ft(ii,ri,e,t);l.layers=this.layers,this.add(l);const h=new Ft(ii,ri,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const h of t)this.remove(h);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,h,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class yl extends Tt{constructor(e,t,i,r,s,a,o,l,h,c){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,i,r,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wn(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Ei(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Tn});s.uniforms.tEquirect.value=t;const a=new Mt(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Xt),new Yh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const us=new B,$h=new B,Zh=new De;class Nn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=us.subVectors(i,t).cross($h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(us),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zh.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ea,fr=new B;class Ta{constructor(e=new Nn,t=new Nn,i=new Nn,r=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],f=r[6],u=r[7],m=r[8],g=r[9],M=r[10],d=r[11],p=r[12],b=r[13],T=r[14],y=r[15];if(i[0].setComponents(l-s,u-h,d-m,y-p).normalize(),i[1].setComponents(l+s,u+h,d+m,y+p).normalize(),i[2].setComponents(l+a,u+c,d+g,y+b).normalize(),i[3].setComponents(l-a,u-c,d-g,y-b).normalize(),i[4].setComponents(l-o,u-f,d-M,y-T).normalize(),t===hn)i[5].setComponents(l+o,u+f,d+M,y+T).normalize();else if(t===Pr)i[5].setComponents(o,f,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fr.x=r.normal.x>0?e.max.x:e.min.x,fr.y=r.normal.y>0?e.max.y:e.min.y,fr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jh(n){const e=new WeakMap;function t(o,l){const h=o.array,c=o.usage,f=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),o.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,h){const c=l.array,f=l.updateRanges;if(n.bindBuffer(h,o),f.length===0)n.bufferSubData(h,0,c);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],M=f[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const M=f[m];n.bufferSubData(h,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,o,l),h.version=o.version}}return{get:r,remove:s,update:a}}class Hn extends Rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),h=o+1,c=l+1,f=e/o,u=t/l,m=[],g=[],M=[],d=[];for(let p=0;p<c;p++){const b=p*u-a;for(let T=0;T<h;T++){const y=T*f-s;g.push(y,-b,0),M.push(0,0,1),d.push(T/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const T=b+h*p,y=b+h*(p+1),P=b+1+h*(p+1),R=b+1+h*p;m.push(T,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(M,3)),this.setAttribute("uv",new jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,du=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Md=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:ef,alphamap_pars_fragment:tf,alphatest_fragment:nf,alphatest_pars_fragment:rf,aomap_fragment:sf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:hf,bsdfs:ff,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:gf,color_fragment:vf,color_pars_fragment:Sf,color_pars_vertex:Mf,color_vertex:Ef,common:Tf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Af,displacementmap_vertex:wf,emissivemap_fragment:Rf,emissivemap_pars_fragment:xf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Lf,envmap_common_pars_fragment:If,envmap_pars_fragment:Df,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:Ff,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:kf,gradientmap_pars_fragment:zf,lightmap_pars_fragment:Hf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Kf,lights_phong_pars_fragment:$f,lights_physical_fragment:Zf,lights_physical_pars_fragment:jf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:eu,logdepthbuf_fragment:tu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:hu,morphinstance_vertex:fu,morphcolor_vertex:uu,morphnormal_vertex:du,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:_u,normal_fragment_maps:gu,normal_pars_fragment:vu,normal_pars_vertex:Su,normal_vertex:Mu,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:Tu,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:yu,iridescence_pars_fragment:Au,opaque_fragment:wu,packing:Ru,premultiplied_alpha_fragment:xu,project_vertex:Cu,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Iu,roughnessmap_pars_fragment:Du,shadowmap_pars_fragment:Uu,shadowmap_pars_vertex:Nu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Ou,skinbase_vertex:Bu,skinning_pars_vertex:ku,skinning_vertex:zu,skinnormal_vertex:Hu,specularmap_fragment:Gu,specularmap_pars_fragment:Vu,tonemapping_fragment:Wu,tonemapping_pars_fragment:Xu,transmission_fragment:qu,transmission_pars_fragment:Yu,uv_pars_fragment:Ku,uv_pars_vertex:$u,uv_vertex:Zu,worldpos_vertex:ju,background_vert:Ju,background_frag:Qu,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:nd,cube_frag:id,depth_vert:rd,depth_frag:sd,distanceRGBA_vert:ad,distanceRGBA_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:ud,meshbasic_frag:dd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:_d,meshmatcap_frag:gd,meshnormal_vert:vd,meshnormal_frag:Sd,meshphong_vert:Md,meshphong_frag:Ed,meshphysical_vert:Td,meshphysical_frag:bd,meshtoon_vert:yd,meshtoon_frag:Ad,points_vert:wd,points_frag:Rd,shadow_vert:xd,shadow_frag:Cd,sprite_vert:Pd,sprite_frag:Ld},ne={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Kt={basic:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Et([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Et([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Et([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Et([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Et([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Et([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Et([ne.common,ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Et([ne.lights,ne.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Kt.physical={uniforms:Et([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const ur={r:0,b:0,g:0},Dn=new Jt,Id=new ot;function Dd(n,e,t,i,r,s,a){const o=new Oe(0);let l=s===!0?0:1,h,c,f=null,u=0,m=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?t:e).get(T)),T}function M(b){let T=!1;const y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),T=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(b,T){const y=g(T);y&&(y.isCubeTexture||y.mapping===Ur)?(c===void 0&&(c=new Mt(new Wn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ei(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Dn.copy(T.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(Dn)),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==it,(f!==y||u!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Mt(new Hn(2,2),new An({name:"BackgroundMaterial",uniforms:Ei(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=$e.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function p(b,T){b.getRGB(ur,Tl(n)),i.buffers.color.setClear(ur.r,ur.g,ur.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:M,addToRenderList:d}}function Ud(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(_,S,N,F,X){let q=!1;const H=f(F,N,S);s!==H&&(s=H,h(s.object)),q=m(_,F,N,X),q&&g(_,F,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(_,S,N,F),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function h(_){return n.bindVertexArray(_)}function c(_){return n.deleteVertexArray(_)}function f(_,S,N){const F=N.wireframe===!0;let X=i[_.id];X===void 0&&(X={},i[_.id]=X);let q=X[S.id];q===void 0&&(q={},X[S.id]=q);let H=q[F];return H===void 0&&(H=u(l()),q[F]=H),H}function u(_){const S=[],N=[],F=[];for(let X=0;X<t;X++)S[X]=0,N[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function m(_,S,N,F){const X=s.attributes,q=S.attributes;let H=0;const V=N.getAttributes();for(const G in V)if(V[G].location>=0){const se=X[G];let me=q[G];if(me===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),se===void 0||se.attribute!==me||me&&se.data!==me.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(_,S,N,F){const X={},q=S.attributes;let H=0;const V=N.getAttributes();for(const G in V)if(V[G].location>=0){let se=q[G];se===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(se=_.instanceColor));const me={};me.attribute=se,se&&se.data&&(me.data=se.data),X[G]=me,H++}s.attributes=X,s.attributesNum=H,s.index=F}function M(){const _=s.newAttributes;for(let S=0,N=_.length;S<N;S++)_[S]=0}function d(_){p(_,0)}function p(_,S){const N=s.newAttributes,F=s.enabledAttributes,X=s.attributeDivisors;N[_]=1,F[_]===0&&(n.enableVertexAttribArray(_),F[_]=1),X[_]!==S&&(n.vertexAttribDivisor(_,S),X[_]=S)}function b(){const _=s.newAttributes,S=s.enabledAttributes;for(let N=0,F=S.length;N<F;N++)S[N]!==_[N]&&(n.disableVertexAttribArray(N),S[N]=0)}function T(_,S,N,F,X,q,H){H===!0?n.vertexAttribIPointer(_,S,N,X,q):n.vertexAttribPointer(_,S,N,F,X,q)}function y(_,S,N,F){M();const X=F.attributes,q=N.getAttributes(),H=S.defaultAttributeValues;for(const V in q){const G=q[V];if(G.location>=0){let re=X[V];if(re===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const se=re.normalized,me=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const Ze=Be.buffer,Y=Be.type,J=Be.bytesPerElement,_e=Y===n.INT||Y===n.UNSIGNED_INT||re.gpuType===pa;if(re.isInterleavedBufferAttribute){const he=re.data,Ce=he.stride,be=re.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,he.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<G.locationSize;ke++)d(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ke=0;ke<G.locationSize;ke++)T(G.location+ke,me/G.locationSize,Y,se,Ce*J,(be+me/G.locationSize*ke)*J,_e)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)p(G.location+he,re.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<G.locationSize;he++)d(G.location+he);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let he=0;he<G.locationSize;he++)T(G.location+he,me/G.locationSize,Y,se,me*J,me/G.locationSize*he*J,_e)}}else if(H!==void 0){const se=H[V];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(G.location,se);break;case 3:n.vertexAttrib3fv(G.location,se);break;case 4:n.vertexAttrib4fv(G.location,se);break;default:n.vertexAttrib1fv(G.location,se)}}}}b()}function P(){x();for(const _ in i){const S=i[_];for(const N in S){const F=S[N];for(const X in F)c(F[X].object),delete F[X];delete S[N]}delete i[_]}}function R(_){if(i[_.id]===void 0)return;const S=i[_.id];for(const N in S){const F=S[N];for(const X in F)c(F[X].object),delete F[X];delete S[N]}delete i[_.id]}function A(_){for(const S in i){const N=i[S];if(N[_.id]===void 0)continue;const F=N[_.id];for(const X in F)c(F[X].object),delete F[X];delete N[_.id]}}function x(){C(),a=!0,s!==r&&(s=r,h(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:d,disableUnusedAttributes:b}}function Nd(n,e,t){let i;function r(h){i=h}function s(h,c){n.drawArrays(i,h,c),t.update(c,i,1)}function a(h,c,f){f!==0&&(n.drawArraysInstanced(i,h,c,f),t.update(c,i,f))}function o(h,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];t.update(m,i,1)}function l(h,c,f,u){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],c[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,f);let g=0;for(let M=0;M<f;M++)g+=c[M];for(let M=0;M<u.length;M++)t.update(g,i,u[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Yt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==cn&&!x)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:P,maxSamples:R}}function Od(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Nn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=c(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,M=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?c(null):h();else{const b=s?0:i,T=b*4;let y=p.clippingState||null;l.value=y,y=c(g,u,T,m);for(let P=0;P!==T;++P)y[P]=t[P];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,u,m,g){const M=f!==null?f.length:0;let d=null;if(M!==0){if(d=l.value,g!==!0||d===null){const p=m+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<p)&&(d=new Float32Array(p));for(let T=0,y=m;T!==M;++T,y+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(d,y),d[y+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,d}}function Bd(n){let e=new WeakMap;function t(a,o){return o===Us?a.mapping=gi:o===Ns&&(a.mapping=vi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Us||o===Ns)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const h=new Kh(l.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wl extends bl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,uo=[.125,.215,.35,.446,.526,.582],Bn=20,ds=new wl,po=new Oe;let ps=null,ms=0,_s=0,gs=!1;const Fn=(1+Math.sqrt(5))/2,si=1/Fn,mo=[new B(-Fn,si,0),new B(Fn,si,0),new B(-si,0,Fn),new B(si,0,Fn),new B(0,Fn,-si),new B(0,Fn,si),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class _o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ps,ms,_s),this._renderer.xr.enabled=gs,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ps=this._renderer.getRenderTarget(),ms=this._renderer.getActiveCubeFace(),_s=this._renderer.getActiveMipmapLevel(),gs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:zi,format:Yt,colorSpace:wn,depthBuffer:!1},r=go(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=go(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kd(s)),this._blurMaterial=zd(s,e,t)}return r}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,i,r){const o=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,u=c.toneMapping;c.getClearColor(po),c.toneMapping=bn,c.autoClear=!1;const m=new Ir({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Mt(new Wn,m);let M=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,M=!0):(m.color.copy(po),M=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));const T=this._cubeSize;dr(r,b*T,p>2?T:0,T,T),c.setRenderTarget(r),M&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gi||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;dr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=mo[(r-s-1)%mo.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Mt(this._lodPlanes[r],h),u=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),M=s/g,d=isFinite(s)?1+Math.floor(c*M):Bn;d>Bn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Bn}`);const p=[];let b=0;for(let A=0;A<Bn;++A){const x=A/M,C=Math.exp(-x*x/2);p.push(C),A===0?b+=C:A<d&&(b+=2*C)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;const y=this._sizeLods[r],P=3*y*(r>T-ci?r-T+ci:0),R=4*(this._cubeSize-y);dr(t,P,R,3*y,2*y),l.setRenderTarget(t),l.render(f,ds)}}function kd(n){const e=[],t=[],i=[];let r=n;const s=n-ci+1+uo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ci?l=uo[a-n+ci-1]:a===0&&(l=0),i.push(l);const h=1/(o-2),c=-h,f=1+h,u=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,M=3,d=2,p=1,b=new Float32Array(M*g*m),T=new Float32Array(d*g*m),y=new Float32Array(p*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,x=R>2?0:-1,C=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];b.set(C,M*g*R),T.set(u,d*g*R);const _=[R,R,R,R,R,R];y.set(_,p*g*R)}const P=new Rn;P.setAttribute("position",new Zt(b,M)),P.setAttribute("uv",new Zt(T,d)),P.setAttribute("faceIndex",new Zt(y,p)),e.push(P),r>ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function go(n,e,t){const i=new Vn(n,e,t);return i.texture.mapping=Ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zd(n,e,t){const i=new Float32Array(Bn),r=new B(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function vo(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function So(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hd(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,h=l===Us||l===Ns,c=l===gi||l===vi;if(h||c){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new _o(n)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return h&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new _o(n)),f=h?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function s(o){const l=o.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Gd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vd(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const M=u.morphAttributes[g];for(let d=0,p=M.length;d<p;d++)e.remove(M[d])}u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const M=m[g];for(let d=0,p=M.length;d<p;d++)e.update(M[d],n.ARRAY_BUFFER)}}function h(f){const u=[],m=f.index,g=f.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let T=0,y=b.length;T<y;T+=3){const P=b[T+0],R=b[T+1],A=b[T+2];u.push(P,R,R,A,A,P)}}else if(g!==void 0){const b=g.array;M=g.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const P=T+0,R=T+1,A=T+2;u.push(P,R,R,A,A,P)}}else return;const d=new(ml(u)?El:Ml)(u,1);d.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function c(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&h(f)}else h(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function Wd(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,m){n.drawElements(i,m,s,u*a),t.update(m,i,1)}function h(u,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,u*a,g),t.update(m,i,g))}function c(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];t.update(d,i,1)}function f(u,m,g,M){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)h(u[p]/a,m[p],M[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,M,0,g);let p=0;for(let b=0;b<g;b++)p+=m[b];for(let b=0;b<M.length;b++)t.update(p,i,M[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function Xd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function qd(n,e,t){const i=new WeakMap,r=new at;function s(a,o,l){const h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let _=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var m=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),d===!0&&(y=3);let P=o.attributes.position.count*y,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*f),x=new gl(A,P,R,f);x.type=cn,x.needsUpdate=!0;const C=y*4;for(let S=0;S<f;S++){const N=p[S],F=b[S],X=T[S],q=P*R*4*S;for(let H=0;H<N.count;H++){const V=H*C;g===!0&&(r.fromBufferAttribute(N,H),A[q+V+0]=r.x,A[q+V+1]=r.y,A[q+V+2]=r.z,A[q+V+3]=0),M===!0&&(r.fromBufferAttribute(F,H),A[q+V+4]=r.x,A[q+V+5]=r.y,A[q+V+6]=r.z,A[q+V+7]=0),d===!0&&(r.fromBufferAttribute(X,H),A[q+V+8]=r.x,A[q+V+9]=r.y,A[q+V+10]=r.z,A[q+V+11]=X.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new Ve(P,R)},i.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<h.length;d++)g+=h[d];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Yd(n,e,t,i){let r=new WeakMap;function s(l){const h=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function o(l){const h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Rl extends Tt{constructor(e,t,i,r,s,a,o,l,h,c=pi){if(c!==pi&&c!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===pi&&(i=Gn),i===void 0&&c===Mi&&(i=Si),super(null,r,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const xl=new Tt,Mo=new Rl(1,1),Cl=new gl,Pl=new Lh,Ll=new yl,Eo=[],To=[],bo=new Float32Array(16),yo=new Float32Array(9),Ao=new Float32Array(4);function bi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eo[r];if(s===void 0&&(s=new Float32Array(r),Eo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fr(n,e){let t=To[e];t===void 0&&(t=new Int32Array(e),To[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kd(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $d(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),dt(t,e)}}function Zd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),dt(t,e)}}function jd(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),dt(t,e)}}function Jd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;Ao.set(i),n.uniformMatrix2fv(this.addr,!1,Ao),dt(t,i)}}function Qd(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;yo.set(i),n.uniformMatrix3fv(this.addr,!1,yo),dt(t,i)}}function ep(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,i))return;bo.set(i),n.uniformMatrix4fv(this.addr,!1,bo),dt(t,i)}}function tp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),dt(t,e)}}function ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),dt(t,e)}}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),dt(t,e)}}function sp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),dt(t,e)}}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),dt(t,e)}}function lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),dt(t,e)}}function cp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mo.compareFunction=pl,s=Mo):s=xl,t.setTexture2D(e||s,r)}function hp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pl,r)}function fp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ll,r)}function up(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Cl,r)}function dp(n){switch(n){case 5126:return Kd;case 35664:return $d;case 35665:return Zd;case 35666:return jd;case 35674:return Jd;case 35675:return Qd;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return up}}function pp(n,e){n.uniform1fv(this.addr,e)}function mp(n,e){const t=bi(e,this.size,2);n.uniform2fv(this.addr,t)}function _p(n,e){const t=bi(e,this.size,3);n.uniform3fv(this.addr,t)}function gp(n,e){const t=bi(e,this.size,4);n.uniform4fv(this.addr,t)}function vp(n,e){const t=bi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sp(n,e){const t=bi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mp(n,e){const t=bi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ep(n,e){n.uniform1iv(this.addr,e)}function Tp(n,e){n.uniform2iv(this.addr,e)}function bp(n,e){n.uniform3iv(this.addr,e)}function yp(n,e){n.uniform4iv(this.addr,e)}function Ap(n,e){n.uniform1uiv(this.addr,e)}function wp(n,e){n.uniform2uiv(this.addr,e)}function Rp(n,e){n.uniform3uiv(this.addr,e)}function xp(n,e){n.uniform4uiv(this.addr,e)}function Cp(n,e,t){const i=this.cache,r=e.length,s=Fr(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||xl,s[a])}function Pp(n,e,t){const i=this.cache,r=e.length,s=Fr(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pl,s[a])}function Lp(n,e,t){const i=this.cache,r=e.length,s=Fr(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ll,s[a])}function Ip(n,e,t){const i=this.cache,r=e.length,s=Fr(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),dt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cl,s[a])}function Dp(n){switch(n){case 5126:return pp;case 35664:return mp;case 35665:return _p;case 35666:return gp;case 35674:return vp;case 35675:return Sp;case 35676:return Mp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return yp;case 5125:return Ap;case 36294:return wp;case 36295:return Rp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Up{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dp(t.type)}}class Np{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Fp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const vs=/(\w+)(\])?(\[|\.)?/g;function wo(n,e){n.seq.push(e),n.map[e.id]=e}function Op(n,e,t){const i=n.name,r=i.length;for(vs.lastIndex=0;;){const s=vs.exec(i),a=vs.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===r){wo(t,h===void 0?new Up(o,n,e):new Np(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Fp(o),wo(t,f)),t=f}}}class br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Op(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ro(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bp=37297;let kp=0;function zp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Hp(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===Cr&&t===xr?i="LinearDisplayP3ToLinearSRGB":e===xr&&t===Cr&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case Nr:return[i,"LinearTransferOETF"];case St:case Ma:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xo(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zp(n.getShaderSource(e),a)}else return r}function Gp(n,e){const t=Hp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vp(n,e){let t;switch(e){case ih:t="Linear";break;case rh:t="Reinhard";break;case sh:t="Cineon";break;case ah:t="ACESFilmic";break;case lh:t="AgX";break;case ch:t="Neutral";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new B;function Wp(){$e.getLuminanceCoefficients(pr);const n=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function qp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yp(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Li(n){return n!==""}function Co(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(n){return n.replace(Kp,Zp)}const $p=new Map;function Zp(n,e){let t=Ie[e];if(t===void 0){const i=$p.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lo(n){return n.replace(jp,Jp)}function Jp(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Io(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qp(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===el?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===on&&(e="SHADOWMAP_TYPE_VSM"),e}function em(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gi:case vi:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function nm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function im(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function rm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qp(t),h=em(t),c=tm(t),f=nm(t),u=im(t),m=Xp(t),g=qp(s),M=r.createProgram();let d,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Li).join(`
`),p.length>0&&(p+=`
`)):(d=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),p=[Io(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==bn?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Wp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=ha(a),a=Co(a,t),a=Po(a,t),o=ha(o),o=Co(o,t),o=Po(o,t),a=Lo(a),o=Lo(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+d+a,y=b+p+o,P=Ro(r,r.VERTEX_SHADER,T),R=Ro(r,r.FRAGMENT_SHADER,y);r.attachShader(M,P),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function A(S){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(M).trim(),F=r.getShaderInfoLog(P).trim(),X=r.getShaderInfoLog(R).trim();let q=!0,H=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,P,R);else{const V=xo(r,P,"vertex"),G=xo(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+V+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||X==="")&&(H=!1);H&&(S.diagnostics={runnable:q,programLog:N,vertexShader:{log:F,prefix:d},fragmentShader:{log:X,prefix:p}})}r.deleteShader(P),r.deleteShader(R),x=new br(r,M),C=Yp(r,M)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,Bp)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=R,this}let sm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new om(e),t.set(e,i)),i}}class om{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}}function lm(n,e,t,i,r,s,a){const o=new vl,l=new am,h=new Set,c=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,S,N,F,X){const q=F.fog,H=X.geometry,V=_.isMeshStandardMaterial?F.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),re=G&&G.mapping===Ur?G.image.height:null,se=M[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Be=me!==void 0?me.length:0;let Ze=0;H.morphAttributes.position!==void 0&&(Ze=1),H.morphAttributes.normal!==void 0&&(Ze=2),H.morphAttributes.color!==void 0&&(Ze=3);let Y,J,_e,he;if(se){const yt=Kt[se];Y=yt.vertexShader,J=yt.fragmentShader}else Y=_.vertexShader,J=_.fragmentShader,l.update(_),_e=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);const Ce=n.getRenderTarget(),be=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,Je=!!_.map,ze=!!_.matcap,L=!!G,xt=!!_.aoMap,Ne=!!_.lightMap,We=!!_.bumpMap,Ae=!!_.normalMap,tt=!!_.displacementMap,xe=!!_.emissiveMap,w=!!_.metalnessMap,v=!!_.roughnessMap,O=_.anisotropy>0,$=_.clearcoat>0,j=_.dispersion>0,K=_.iridescence>0,Se=_.sheen>0,ie=_.transmission>0,fe=O&&!!_.anisotropyMap,Xe=$&&!!_.clearcoatMap,Q=$&&!!_.clearcoatNormalMap,ue=$&&!!_.clearcoatRoughnessMap,we=K&&!!_.iridescenceMap,Re=K&&!!_.iridescenceThicknessMap,de=Se&&!!_.sheenColorMap,Fe=Se&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,et=!!_.specularColorMap,I=!!_.specularIntensityMap,le=ie&&!!_.transmissionMap,W=ie&&!!_.thicknessMap,Z=!!_.gradientMap,ae=!!_.alphaMap,ce=_.alphaTest>0,He=!!_.alphaHash,ct=!!_.extensions;let bt=bn;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(bt=n.toneMapping);const qe={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:J,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:wn,alphaToCoverage:!!_.alphaToCoverage,map:Je,matcap:ze,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:re,aoMap:xt,lightMap:Ne,bumpMap:We,normalMap:Ae,displacementMap:m&&tt,emissiveMap:xe,normalMapObjectSpace:Ae&&_.normalMapType===dh,normalMapTangentSpace:Ae&&_.normalMapType===dl,metalnessMap:w,roughnessMap:v,anisotropy:O,anisotropyMap:fe,clearcoat:$,clearcoatMap:Xe,clearcoatNormalMap:Q,clearcoatRoughnessMap:ue,dispersion:j,iridescence:K,iridescenceMap:we,iridescenceThicknessMap:Re,sheen:Se,sheenColorMap:de,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:et,specularIntensityMap:I,transmission:ie,transmissionMap:le,thicknessMap:W,gradientMap:Z,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ce,alphaHash:He,combine:_.combine,mapUv:Je&&d(_.map.channel),aoMapUv:xt&&d(_.aoMap.channel),lightMapUv:Ne&&d(_.lightMap.channel),bumpMapUv:We&&d(_.bumpMap.channel),normalMapUv:Ae&&d(_.normalMap.channel),displacementMapUv:tt&&d(_.displacementMap.channel),emissiveMapUv:xe&&d(_.emissiveMap.channel),metalnessMapUv:w&&d(_.metalnessMap.channel),roughnessMapUv:v&&d(_.roughnessMap.channel),anisotropyMapUv:fe&&d(_.anisotropyMap.channel),clearcoatMapUv:Xe&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&d(_.sheenRoughnessMap.channel),specularMapUv:Pe&&d(_.specularMap.channel),specularColorMapUv:et&&d(_.specularColorMap.channel),specularIntensityMapUv:I&&d(_.specularIntensityMap.channel),transmissionMapUv:le&&d(_.transmissionMap.channel),thicknessMapUv:W&&d(_.thicknessMap.channel),alphaMapUv:ae&&d(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ae||O),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!H.attributes.uv&&(Je||ae),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Je&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$t,flipSided:_.side===Rt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function b(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(T(S,_),y(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function T(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),_.push(o.mask)}function P(_){const S=M[_.type];let N;if(S){const F=Kt[S];N=Wh.clone(F.uniforms)}else N=_.uniforms;return N}function R(_,S){let N;for(let F=0,X=c.length;F<X;F++){const q=c[F];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new rm(n,S,_,s),c.push(N)),N}function A(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),_.destroy()}}function x(_){l.remove(_)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:P,acquireProgram:R,releaseProgram:A,releaseShaderCache:x,programs:c,dispose:C}}function cm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Do(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uo(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,u,m,g,M,d){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:M,group:d},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=M,p.group=d),e++,p}function o(f,u,m,g,M,d){const p=a(f,u,m,g,M,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(f,u,m,g,M,d){const p=a(f,u,m,g,M,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function h(f,u){t.length>1&&t.sort(f||hm),i.length>1&&i.sort(u||Do),r.length>1&&r.sort(u||Do)}function c(){for(let f=e,u=n.length;f<u;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:h}}function fm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Uo,n.set(i,[a])):r>=s.length?(a=new Uo,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function um(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Oe};break;case"SpotLight":t={position:new B,direction:new B,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function dm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pm=0;function mm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _m(n){const e=new um,t=dm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new B);const r=new B,s=new ot,a=new ot;function o(h){let c=0,f=0,u=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,g=0,M=0,d=0,p=0,b=0,T=0,y=0,P=0,R=0,A=0;h.sort(mm);for(let C=0,_=h.length;C<_;C++){const S=h[C],N=S.color,F=S.intensity,X=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=N.r*F,f+=N.g*F,u+=N.b*F;else if(S.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(S.sh.coefficients[H],F);A++}else if(S.isDirectionalLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const V=S.shadow,G=t.get(S);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=S.shadow.matrix,b++}i.directional[m]=H,m++}else if(S.isSpotLight){const H=e.get(S);H.position.setFromMatrixPosition(S.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=X,H.coneCos=Math.cos(S.angle),H.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),H.decay=S.decay,i.spot[M]=H;const V=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,V.updateMatrices(S),S.castShadow&&R++),i.spotLightMatrix[M]=V.matrix,S.castShadow){const G=t.get(S);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=q,y++}M++}else if(S.isRectAreaLight){const H=e.get(S);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(S.width*.5,0,0),H.halfHeight.set(0,S.height*.5,0),i.rectArea[d]=H,d++}else if(S.isPointLight){const H=e.get(S);if(H.color.copy(S.color).multiplyScalar(S.intensity),H.distance=S.distance,H.decay=S.decay,S.castShadow){const V=S.shadow,G=t.get(S);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=S.shadow.matrix,T++}i.point[g]=H,g++}else if(S.isHemisphereLight){const H=e.get(S);H.skyColor.copy(S.color).multiplyScalar(F),H.groundColor.copy(S.groundColor).multiplyScalar(F),i.hemi[p]=H,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==M||x.rectAreaLength!==d||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==T||x.numSpotShadows!==y||x.numSpotMaps!==P||x.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,x.directionalLength=m,x.pointLength=g,x.spotLength=M,x.rectAreaLength=d,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=T,x.numSpotShadows=y,x.numSpotMaps=P,x.numLightProbes=A,i.version=pm++)}function l(h,c){let f=0,u=0,m=0,g=0,M=0;const d=c.matrixWorldInverse;for(let p=0,b=h.length;p<b;p++){const T=h[p];if(T.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),f++}else if(T.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(d),m++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(d),a.identity(),s.copy(T.matrixWorld),s.premultiply(d),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(d),u++}else if(T.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(d),M++}}}return{setup:o,setupView:l,state:i}}function No(n){const e=new _m(n),t=[],i=[];function r(c){h.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new No(n),e.set(r,[o])):s>=a.length?(o=new No(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class vm extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sm extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tm(n,e,t){let i=new Ta;const r=new Ve,s=new Ve,a=new at,o=new vm({depthPacking:uh}),l=new Sm,h={},c=t.maxTextureSize,f={[yn]:Rt,[Rt]:yn,[$t]:$t},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Mm,fragmentShader:Em}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Mt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let p=this.type;this.render=function(R,A,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Tn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==on&&this.type===on,X=p===on&&this.type!==on;for(let q=0,H=R.length;q<H;q++){const V=R[q],G=V.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||F===!0||X===!0){const me=this.type!==on?{minFilter:Ot,magFilter:Ot}:{};G.map!==null&&G.map.dispose(),G.map=new Vn(r.x,r.y,me),G.map.texture.name=V.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const se=G.getViewportCount();for(let me=0;me<se;me++){const Be=G.getViewport(me);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),N.viewport(a),G.updateMatrices(V,me),i=G.getFrustum(),y(A,x,G.camera,V,this.type)}G.isPointLightShadow!==!0&&this.type===on&&b(G,x),G.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(C,_,S)};function b(R,A){const x=e.update(M);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Vn(r.x,r.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,x,m,M,null)}function T(R,A,x,C){let _=null;const S=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)_=S;else if(_=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=_.uuid,F=A.uuid;let X=h[N];X===void 0&&(X={},h[N]=X);let q=X[F];q===void 0&&(q=_.clone(),X[F]=q,A.addEventListener("dispose",P)),_=q}if(_.visible=A.visible,_.wireframe=A.wireframe,C===on?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,x.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=n.properties.get(_);N.light=x}return _}function y(R,A,x,C,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===on)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);const F=e.update(R),X=R.material;if(Array.isArray(X)){const q=F.groups;for(let H=0,V=q.length;H<V;H++){const G=q[H],re=X[G.materialIndex];if(re&&re.visible){const se=T(R,re,C,_);R.onBeforeShadow(n,R,A,x,F,se,G),n.renderBufferDirect(x,null,F,se,R,G),R.onAfterShadow(n,R,A,x,F,se,G)}}}else if(X.visible){const q=T(R,X,C,_);R.onBeforeShadow(n,R,A,x,F,q,null),n.renderBufferDirect(x,null,F,q,R,null),R.onAfterShadow(n,R,A,x,F,q,null)}}const N=R.children;for(let F=0,X=N.length;F<X;F++)y(N[F],A,x,C,_)}function P(R){R.target.removeEventListener("dispose",P);for(const x in h){const C=h[x],_=R.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const bm={[Rs]:xs,[Cs]:Is,[Ps]:Ds,[_i]:Ls,[xs]:Rs,[Is]:Cs,[Ds]:Ps,[Ls]:_i};function ym(n){function e(){let I=!1;const le=new at;let W=null;const Z=new at(0,0,0,0);return{setMask:function(ae){W!==ae&&!I&&(n.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){I=ae},setClear:function(ae,ce,He,ct,bt){bt===!0&&(ae*=ct,ce*=ct,He*=ct),le.set(ae,ce,He,ct),Z.equals(le)===!1&&(n.clearColor(ae,ce,He,ct),Z.copy(le))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function t(){let I=!1,le=!1,W=null,Z=null,ae=null;return{setReversed:function(ce){le=ce},setTest:function(ce){ce?_e(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ce){W!==ce&&!I&&(n.depthMask(ce),W=ce)},setFunc:function(ce){if(le&&(ce=bm[ce]),Z!==ce){switch(ce){case Rs:n.depthFunc(n.NEVER);break;case xs:n.depthFunc(n.ALWAYS);break;case Cs:n.depthFunc(n.LESS);break;case _i:n.depthFunc(n.LEQUAL);break;case Ps:n.depthFunc(n.EQUAL);break;case Ls:n.depthFunc(n.GEQUAL);break;case Is:n.depthFunc(n.GREATER);break;case Ds:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ce}},setLocked:function(ce){I=ce},setClear:function(ce){ae!==ce&&(n.clearDepth(ce),ae=ce)},reset:function(){I=!1,W=null,Z=null,ae=null}}}function i(){let I=!1,le=null,W=null,Z=null,ae=null,ce=null,He=null,ct=null,bt=null;return{setTest:function(qe){I||(qe?_e(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(qe){le!==qe&&!I&&(n.stencilMask(qe),le=qe)},setFunc:function(qe,yt,en){(W!==qe||Z!==yt||ae!==en)&&(n.stencilFunc(qe,yt,en),W=qe,Z=yt,ae=en)},setOp:function(qe,yt,en){(ce!==qe||He!==yt||ct!==en)&&(n.stencilOp(qe,yt,en),ce=qe,He=yt,ct=en)},setLocked:function(qe){I=qe},setClear:function(qe){bt!==qe&&(n.clearStencil(qe),bt=qe)},reset:function(){I=!1,le=null,W=null,Z=null,ae=null,ce=null,He=null,ct=null,bt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let h={},c={},f=new WeakMap,u=[],m=null,g=!1,M=null,d=null,p=null,b=null,T=null,y=null,P=null,R=new Oe(0,0,0),A=0,x=!1,C=null,_=null,S=null,N=null,F=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=H>=2);let G=null,re={};const se=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Be=new at().fromArray(se),Ze=new at().fromArray(me);function Y(I,le,W,Z){const ae=new Uint8Array(4),ce=n.createTexture();n.bindTexture(I,ce),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<W;He++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(le+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ce}const J={};J[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),s.setFunc(_i),Ne(!1),We(Ga),_e(n.CULL_FACE),L(Tn);function _e(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function he(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ce(I,le){return c[I]!==le?(n.bindFramebuffer(I,le),c[I]=le,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=le),!0):!1}function be(I,le){let W=u,Z=!1;if(I){W=f.get(le),W===void 0&&(W=[],f.set(le,W));const ae=I.textures;if(W.length!==ae.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,He=ae.length;ce<He;ce++)W[ce]=n.COLOR_ATTACHMENT0+ce;W.length=ae.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function ke(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const Je={[On]:n.FUNC_ADD,[Bc]:n.FUNC_SUBTRACT,[kc]:n.FUNC_REVERSE_SUBTRACT};Je[zc]=n.MIN,Je[Hc]=n.MAX;const ze={[Gc]:n.ZERO,[Vc]:n.ONE,[Wc]:n.SRC_COLOR,[As]:n.SRC_ALPHA,[Zc]:n.SRC_ALPHA_SATURATE,[Kc]:n.DST_COLOR,[qc]:n.DST_ALPHA,[Xc]:n.ONE_MINUS_SRC_COLOR,[ws]:n.ONE_MINUS_SRC_ALPHA,[$c]:n.ONE_MINUS_DST_COLOR,[Yc]:n.ONE_MINUS_DST_ALPHA,[jc]:n.CONSTANT_COLOR,[Jc]:n.ONE_MINUS_CONSTANT_COLOR,[Qc]:n.CONSTANT_ALPHA,[eh]:n.ONE_MINUS_CONSTANT_ALPHA};function L(I,le,W,Z,ae,ce,He,ct,bt,qe){if(I===Tn){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&(_e(n.BLEND),g=!0),I!==Oc){if(I!==M||qe!==x){if((d!==On||T!==On)&&(n.blendEquation(n.FUNC_ADD),d=On,T=On),qe)switch(I){case di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.ONE,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xa:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xa:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,b=null,y=null,P=null,R.set(0,0,0),A=0,M=I,x=qe}return}ae=ae||le,ce=ce||W,He=He||Z,(le!==d||ae!==T)&&(n.blendEquationSeparate(Je[le],Je[ae]),d=le,T=ae),(W!==p||Z!==b||ce!==y||He!==P)&&(n.blendFuncSeparate(ze[W],ze[Z],ze[ce],ze[He]),p=W,b=Z,y=ce,P=He),(ct.equals(R)===!1||bt!==A)&&(n.blendColor(ct.r,ct.g,ct.b,bt),R.copy(ct),A=bt),M=I,x=!1}function xt(I,le){I.side===$t?he(n.CULL_FACE):_e(n.CULL_FACE);let W=I.side===Rt;le&&(W=!W),Ne(W),I.blending===di&&I.transparent===!1?L(Tn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){C!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),C=I)}function We(I){I!==Nc?(_e(n.CULL_FACE),I!==_&&(I===Ga?n.cullFace(n.BACK):I===Fc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),_=I}function Ae(I){I!==S&&(q&&n.lineWidth(I),S=I)}function tt(I,le,W){I?(_e(n.POLYGON_OFFSET_FILL),(N!==le||F!==W)&&(n.polygonOffset(le,W),N=le,F=W)):he(n.POLYGON_OFFSET_FILL)}function xe(I){I?_e(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+X-1),G!==I&&(n.activeTexture(I),G=I)}function v(I,le,W){W===void 0&&(G===null?W=n.TEXTURE0+X-1:W=G);let Z=re[W];Z===void 0&&(Z={type:void 0,texture:void 0},re[W]=Z),(Z.type!==I||Z.texture!==le)&&(G!==W&&(n.activeTexture(W),G=W),n.bindTexture(I,le||J[I]),Z.type=I,Z.texture=le)}function O(){const I=re[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Be.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Be.copy(I))}function de(I){Ze.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ze.copy(I))}function Fe(I,le){let W=l.get(le);W===void 0&&(W=new WeakMap,l.set(le,W));let Z=W.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(le,I.name),W.set(I,Z))}function Pe(I,le){const Z=l.get(le).get(I);o.get(le)!==Z&&(n.uniformBlockBinding(le,Z,I.__bindingPointIndex),o.set(le,Z))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},G=null,re={},c={},f=new WeakMap,u=[],m=null,g=!1,M=null,d=null,p=null,b=null,T=null,y=null,P=null,R=new Oe(0,0,0),A=0,x=!1,C=null,_=null,S=null,N=null,F=null,Be.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:_e,disable:he,bindFramebuffer:Ce,drawBuffers:be,useProgram:ke,setBlending:L,setMaterial:xt,setFlipSided:Ne,setCullFace:We,setLineWidth:Ae,setPolygonOffset:tt,setScissorTest:xe,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:ue,texImage3D:we,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:Q,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ie,compressedTexSubImage3D:fe,scissor:Re,viewport:de,reset:et}}function Fo(n,e,t,i){const r=Am(i);switch(t){case al:return n*e;case ll:return n*e;case cl:return n*e*2;case hl:return n*e/r.components*r.byteLength;case ga:return n*e/r.components*r.byteLength;case fl:return n*e*2/r.components*r.byteLength;case va:return n*e*2/r.components*r.byteLength;case ol:return n*e*3/r.components*r.byteLength;case Yt:return n*e*4/r.components*r.byteLength;case Sa:return n*e*4/r.components*r.byteLength;case gr:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sr:case Mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bs:case zs:return Math.max(n,16)*Math.max(e,8)/4;case Os:case ks:return Math.max(n,8)*Math.max(e,8)/2;case Hs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $s:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case js:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Js:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Er:case ra:case sa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ul:case aa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oa:case la:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Am(n){switch(n){case fn:case il:return{byteLength:1,components:1};case Fi:case rl:case zi:return{byteLength:2,components:1};case ma:case _a:return{byteLength:2,components:4};case Gn:case pa:case cn:return{byteLength:4,components:1};case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wm(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ve,c=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):Lr("canvas")}function M(w,v,O){let $=1;const j=xe(w);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor($*j.width),Se=Math.floor($*j.height);f===void 0&&(f=g(K,Se));const ie=v?g(K,Se):f;return ie.width=K,ie.height=Se,ie.getContext("2d").drawImage(w,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+Se+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==Ot&&w.minFilter!==Xt}function p(w){n.generateMipmap(w)}function b(w,v,O,$,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),v===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const Se=j?Rr:$e.getTransfer($);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=Se===it?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(w,v){let O;return w?v===null||v===Gn||v===Si?O=n.DEPTH24_STENCIL8:v===cn?O=n.DEPTH32F_STENCIL8:v===Fi&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gn||v===Si?O=n.DEPTH_COMPONENT24:v===cn?O=n.DEPTH_COMPONENT32F:v===Fi&&(O=n.DEPTH_COMPONENT16),O}function y(w,v){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function P(w){const v=w.target;v.removeEventListener("dispose",P),A(v),v.isVideoTexture&&c.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),C(v)}function A(w){const v=i.get(w);if(v.__webglInit===void 0)return;const O=w.source,$=u.get(O);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(w),Object.keys($).length===0&&u.delete(O)}i.remove(w)}function x(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const O=w.source,$=u.get(O);delete $[v.__cacheKey],a.memory.textures--}function C(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[$][j]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let $=0,j=O.length;$<j;$++){const K=i.get(O[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(O[$])}i.remove(w)}let _=0;function S(){_=0}function N(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function F(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){const O=i.get(w);if(w.isVideoTexture&&Ae(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(O,w,v);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function q(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ze(O,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function H(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Ze(O,w,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function V(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){Y(O,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const G={[wr]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Fs]:n.MIRRORED_REPEAT},re={[Ot]:n.NEAREST,[hh]:n.NEAREST_MIPMAP_NEAREST,[Ki]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[Vr]:n.LINEAR_MIPMAP_NEAREST,[zn]:n.LINEAR_MIPMAP_LINEAR},se={[ph]:n.NEVER,[Mh]:n.ALWAYS,[mh]:n.LESS,[pl]:n.LEQUAL,[_h]:n.EQUAL,[Sh]:n.GEQUAL,[gh]:n.GREATER,[vh]:n.NOTEQUAL};function me(w,v){if(v.type===cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xt||v.magFilter===Vr||v.magFilter===Ki||v.magFilter===zn||v.minFilter===Xt||v.minFilter===Vr||v.minFilter===Ki||v.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,G[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,G[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,G[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,re[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==Ki&&v.minFilter!==zn||v.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Be(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",P));const $=v.source;let j=u.get($);j===void 0&&(j={},u.set($,j));const K=F(v);if(K!==w.__cacheKey){j[K]===void 0&&(j[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[K].usedTimes++;const Se=j[w.__cacheKey];Se!==void 0&&(j[w.__cacheKey].usedTimes--,Se.usedTimes===0&&x(v)),w.__cacheKey=K,w.__webglTexture=j[K].texture}return O}function Ze(w,v,O){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const j=Be(w,v),K=v.source;t.bindTexture($,w.__webglTexture,n.TEXTURE0+O);const Se=i.get(K);if(K.version!==Se.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const ie=$e.getPrimaries($e.workingColorSpace),fe=v.colorSpace===En?null:$e.getPrimaries(v.colorSpace),Xe=v.colorSpace===En||ie===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Q=M(v.image,!1,r.maxTextureSize);Q=tt(v,Q);const ue=s.convert(v.format,v.colorSpace),we=s.convert(v.type);let Re=b(v.internalFormat,ue,we,v.colorSpace,v.isVideoTexture);me($,v);let de;const Fe=v.mipmaps,Pe=v.isVideoTexture!==!0,et=Se.__version===void 0||j===!0,I=K.dataReady,le=y(v,Q);if(v.isDepthTexture)Re=T(v.format===Mi,v.type),et&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,ue,we,null));else if(v.isDataTexture)if(Fe.length>0){Pe&&et&&t.texStorage2D(n.TEXTURE_2D,le,Re,Fe[0].width,Fe[0].height);for(let W=0,Z=Fe.length;W<Z;W++)de=Fe[W],Pe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ue,we,de.data):t.texImage2D(n.TEXTURE_2D,W,Re,de.width,de.height,0,ue,we,de.data);v.generateMipmaps=!1}else Pe?(et&&t.texStorage2D(n.TEXTURE_2D,le,Re,Q.width,Q.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,ue,we,Q.data)):t.texImage2D(n.TEXTURE_2D,0,Re,Q.width,Q.height,0,ue,we,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Re,Fe[0].width,Fe[0].height,Q.depth);for(let W=0,Z=Fe.length;W<Z;W++)if(de=Fe[W],v.format!==Yt)if(ue!==null)if(Pe){if(I)if(v.layerUpdates.size>0){const ae=Fo(de.width,de.height,v.format,v.type);for(const ce of v.layerUpdates){const He=de.data.subarray(ce*ae/de.data.BYTES_PER_ELEMENT,(ce+1)*ae/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ce,de.width,de.height,1,ue,He,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,ue,de.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Re,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,Q.depth,ue,we,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Re,de.width,de.height,Q.depth,0,ue,we,de.data)}else{Pe&&et&&t.texStorage2D(n.TEXTURE_2D,le,Re,Fe[0].width,Fe[0].height);for(let W=0,Z=Fe.length;W<Z;W++)de=Fe[W],v.format!==Yt?ue!==null?Pe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Re,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,de.width,de.height,ue,we,de.data):t.texImage2D(n.TEXTURE_2D,W,Re,de.width,de.height,0,ue,we,de.data)}else if(v.isDataArrayTexture)if(Pe){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Re,Q.width,Q.height,Q.depth),I)if(v.layerUpdates.size>0){const W=Fo(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ae=Q.data.subarray(Z*W/Q.data.BYTES_PER_ELEMENT,(Z+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ue,we,ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,we,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,ue,we,Q.data);else if(v.isData3DTexture)Pe?(et&&t.texStorage3D(n.TEXTURE_3D,le,Re,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,we,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,ue,we,Q.data);else if(v.isFramebufferTexture){if(et)if(Pe)t.texStorage2D(n.TEXTURE_2D,le,Re,Q.width,Q.height);else{let W=Q.width,Z=Q.height;for(let ae=0;ae<le;ae++)t.texImage2D(n.TEXTURE_2D,ae,Re,W,Z,0,ue,we,null),W>>=1,Z>>=1}}else if(Fe.length>0){if(Pe&&et){const W=xe(Fe[0]);t.texStorage2D(n.TEXTURE_2D,le,Re,W.width,W.height)}for(let W=0,Z=Fe.length;W<Z;W++)de=Fe[W],Pe?I&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ue,we,de):t.texImage2D(n.TEXTURE_2D,W,Re,ue,we,de);v.generateMipmaps=!1}else if(Pe){if(et){const W=xe(Q);t.texStorage2D(n.TEXTURE_2D,le,Re,W.width,W.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,we,Q)}else t.texImage2D(n.TEXTURE_2D,0,Re,ue,we,Q);d(v)&&p($),Se.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Y(w,v,O){if(v.image.length!==6)return;const $=Be(w,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const K=i.get(j);if(j.version!==K.__version||$===!0){t.activeTexture(n.TEXTURE0+O);const Se=$e.getPrimaries($e.workingColorSpace),ie=v.colorSpace===En?null:$e.getPrimaries(v.colorSpace),fe=v.colorSpace===En||Se===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Xe=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!Xe&&!Q?ue[Z]=M(v.image[Z],!0,r.maxCubemapSize):ue[Z]=Q?v.image[Z].image:v.image[Z],ue[Z]=tt(v,ue[Z]);const we=ue[0],Re=s.convert(v.format,v.colorSpace),de=s.convert(v.type),Fe=b(v.internalFormat,Re,de,v.colorSpace),Pe=v.isVideoTexture!==!0,et=K.__version===void 0||$===!0,I=j.dataReady;let le=y(v,we);me(n.TEXTURE_CUBE_MAP,v);let W;if(Xe){Pe&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,we.width,we.height);for(let Z=0;Z<6;Z++){W=ue[Z].mipmaps;for(let ae=0;ae<W.length;ae++){const ce=W[ae];v.format!==Yt?Re!==null?Pe?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,ce.width,ce.height,Re,de,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,ce.width,ce.height,0,Re,de,ce.data)}}}else{if(W=v.mipmaps,Pe&&et){W.length>0&&le++;const Z=xe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Pe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Re,de,ue[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,ue[Z].width,ue[Z].height,0,Re,de,ue[Z].data);for(let ae=0;ae<W.length;ae++){const He=W[ae].image[Z].image;Pe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,He.width,He.height,Re,de,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,He.width,He.height,0,Re,de,He.data)}}else{Pe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,de,ue[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,Re,de,ue[Z]);for(let ae=0;ae<W.length;ae++){const ce=W[ae];Pe?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Re,de,ce.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,Re,de,ce.image[Z])}}}d(v)&&p(n.TEXTURE_CUBE_MAP),K.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,O,$,j,K){const Se=s.convert(O.format,O.colorSpace),ie=s.convert(O.type),fe=b(O.internalFormat,Se,ie,O.colorSpace);if(!i.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>K),ue=Math.max(1,v.height>>K);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,K,fe,Q,ue,v.depth,0,Se,ie,null):t.texImage2D(j,K,fe,Q,ue,0,Se,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),We(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,i.get(O).__webglTexture,0,Ne(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,i.get(O).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,K=T(v.stencilBuffer,j),Se=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=Ne(v);We(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,K,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,w)}else{const $=v.textures;for(let j=0;j<$.length;j++){const K=$[j],Se=s.convert(K.format,K.colorSpace),ie=s.convert(K.type),fe=b(K.internalFormat,Se,ie,K.colorSpace),Xe=Ne(v);O&&We(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,fe,v.width,v.height):We(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const $=i.get(v.depthTexture).__webglTexture,j=Ne(v);if(v.depthTexture.format===pi)We(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===Mi)We(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ce(w){const v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");he(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),_e(v.__webglDepthbuffer[$],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_e(v.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(w,v,O){const $=i.get(w);v!==void 0&&J($.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ce(w)}function ke(w){const v=w.texture,O=i.get(w),$=i.get(v);w.addEventListener("dispose",R);const j=w.textures,K=w.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let fe=0;fe<v.mipmaps.length;fe++)O.__webglFramebuffer[ie][fe]=n.createFramebuffer()}else O.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[ie]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ie=0,fe=j.length;ie<fe;ie++){const Xe=i.get(j[ie]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&We(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const fe=j[ie];O.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const Xe=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),ue=b(fe.internalFormat,Xe,Q,fe.colorSpace,w.isXRRenderTarget===!0),we=Ne(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ue,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),me(n.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)J(O.__webglFramebuffer[ie][fe],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,fe);else J(O.__webglFramebuffer[ie],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,fe=j.length;ie<fe;ie++){const Xe=j[ie],Q=i.get(Xe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),me(n.TEXTURE_2D,Xe),J(O.__webglFramebuffer,w,Xe,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,0),d(Xe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),me(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)J(O.__webglFramebuffer[fe],w,v,n.COLOR_ATTACHMENT0,ie,fe);else J(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ie,0);d(v)&&p(ie),t.unbindTexture()}w.depthBuffer&&Ce(w)}function Je(w){const v=w.textures;for(let O=0,$=v.length;O<$;O++){const j=v[O];if(d(j)){const K=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(j).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const ze=[],L=[];function xt(w){if(w.samples>0){if(We(w)===!1){const v=w.textures,O=w.width,$=w.height;let j=n.COLOR_BUFFER_BIT;const K=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(w),ie=v.length>1;if(ie)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Xe=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,O,$,0,0,O,$,j,n.NEAREST),l===!0&&(ze.length=0,L.length=0,ze.push(n.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ze.push(K),L.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);const Xe=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ne(w){return Math.min(r.maxSamples,w.samples)}function We(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(w){const v=a.render.frame;c.get(w)!==v&&(c.set(w,v),w.update())}function tt(w,v){const O=w.colorSpace,$=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==wn&&O!==En&&($e.getTransfer(O)===it?($!==Yt||j!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function xe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=V,this.rebindTextures=be,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=J,this.useMultisampledRTT=We}function Rm(n,e){function t(i,r=En){let s;const a=$e.getTransfer(r);if(i===fn)return n.UNSIGNED_BYTE;if(i===ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===il)return n.BYTE;if(i===rl)return n.SHORT;if(i===Fi)return n.UNSIGNED_SHORT;if(i===pa)return n.INT;if(i===Gn)return n.UNSIGNED_INT;if(i===cn)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===al)return n.ALPHA;if(i===ol)return n.RGB;if(i===Yt)return n.RGBA;if(i===ll)return n.LUMINANCE;if(i===cl)return n.LUMINANCE_ALPHA;if(i===pi)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===hl)return n.RED;if(i===ga)return n.RED_INTEGER;if(i===fl)return n.RG;if(i===va)return n.RG_INTEGER;if(i===Sa)return n.RGBA_INTEGER;if(i===gr||i===vr||i===Sr||i===Mr)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Os||i===Bs||i===ks||i===zs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ks)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hs||i===Gs||i===Vs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hs||i===Gs)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ws||i===Xs||i===qs||i===Ys||i===Ks||i===$s||i===Zs||i===js||i===Js||i===Qs||i===ea||i===ta||i===na||i===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ws)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ys)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ks)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$s)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===js)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Js)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Er||i===ra||i===sa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Er)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ul||i===aa||i===oa||i===la)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Er)return s.COMPRESSED_RED_RGTC1_EXT;if(i===aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===la)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Si?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class xm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cm={type:"move"};class Ss{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const d=t.getJointPose(M,i),p=this._getHandJoint(h,M);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&u>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Tt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Hn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dm extends Ti{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,h=null,c=null,f=null,u=null,m=null,g=null;const M=new Im,d=t.getContextAttributes();let p=null,b=null;const T=[],y=[],P=new Ve;let R=null;const A=new Ft;A.layers.enable(1),A.viewport=new at;const x=new Ft;x.layers.enable(2),x.viewport=new at;const C=[A,x],_=new xm;_.layers.enable(1),_.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=T[Y];return J===void 0&&(J=new Ss,T[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=T[Y];return J===void 0&&(J=new Ss,T[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=T[Y];return J===void 0&&(J=new Ss,T[Y]=J),J.getHandSpace()};function F(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const _e=T[J];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,h||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<T.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,T[Y].disconnect(J))}S=null,N=null,M.reset(),e.setRenderTarget(p),m=null,u=null,f=null,r=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",X),r.addEventListener("inputsourceschange",q),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const J={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Vn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let J=null,_e=null,he=null;d.depth&&(he=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=d.stencil?Mi:pi,_e=d.stencil?Si:Gn);const Ce={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(Ce),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Vn(u.textureWidth,u.textureHeight,{format:Yt,type:fn,depthTexture:new Rl(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(Y){for(let J=0;J<Y.removed.length;J++){const _e=Y.removed[J],he=y.indexOf(_e);he>=0&&(y[he]=null,T[he].disconnect(_e))}for(let J=0;J<Y.added.length;J++){const _e=Y.added[J];let he=y.indexOf(_e);if(he===-1){for(let be=0;be<T.length;be++)if(be>=y.length){y.push(_e),he=be;break}else if(y[be]===null){y[be]=_e,he=be;break}if(he===-1)break}const Ce=T[he];Ce&&Ce.connect(_e)}}const H=new B,V=new B;function G(Y,J,_e){H.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(_e.matrixWorld);const he=H.distanceTo(V),Ce=J.projectionMatrix.elements,be=_e.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),Je=Ce[14]/(Ce[10]+1),ze=(Ce[9]+1)/Ce[5],L=(Ce[9]-1)/Ce[5],xt=(Ce[8]-1)/Ce[0],Ne=(be[8]+1)/be[0],We=ke*xt,Ae=ke*Ne,tt=he/(-xt+Ne),xe=tt*-xt;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xe),Y.translateZ(tt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ce[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=ke+tt,v=Je+tt,O=We-xe,$=Ae+(he-xe),j=ze*Je/v*w,K=L*Je/v*w;Y.projectionMatrix.makePerspective(O,$,j,K,w,v),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,_e=Y.far;M.texture!==null&&(M.depthNear>0&&(J=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),_.near=x.near=A.near=J,_.far=x.far=A.far=_e,(S!==_.near||N!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,N=_.far);const he=Y.parent,Ce=_.cameras;re(_,he);for(let be=0;be<Ce.length;be++)re(Ce[be],he);Ce.length===2?G(_,A,x):_.projectionMatrix.copy(A.projectionMatrix),se(Y,_,he)};function se(Y,J,_e){_e===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let me=null;function Be(Y,J){if(c=J.getViewerPose(h||a),g=J,c!==null){const _e=c.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let he=!1;_e.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let be=0;be<_e.length;be++){const ke=_e[be];let Je=null;if(m!==null)Je=m.getViewport(ke);else{const L=f.getViewSubImage(u,ke);Je=L.viewport,be===0&&(e.setRenderTargetTextures(b,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(b))}let ze=C[be];ze===void 0&&(ze=new Ft,ze.layers.enable(be),ze.viewport=new at,C[be]=ze),ze.matrix.fromArray(ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(_.matrix.copy(ze.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(ze)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=f.getDepthInformation(_e[0]);be&&be.isValid&&be.texture&&M.init(e,be,r.renderState)}}for(let _e=0;_e<T.length;_e++){const he=y[_e],Ce=T[_e];he!==null&&Ce!==void 0&&Ce.update(he,J,h||a)}me&&me(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ze=new Al;Ze.setAnimationLoop(Be),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Un=new Jt,Um=new ot;function Nm(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Tl(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,b,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),c(d,p)):p.isMeshStandardMaterial?(s(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,y)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),M(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,b,T):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Rt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Rt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,y=b.envMapRotation;T&&(d.envMap.value=T,Un.copy(y),Un.x*=-1,Un.y*=-1,Un.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),d.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Un)),d.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,b,T){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*b,d.scale.value=T*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,b){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function M(d,p){const b=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fm(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const y=T.program;i.uniformBlockBinding(b,y)}function h(b,T){let y=r[b.id];y===void 0&&(g(b),y=c(b),r[b.id]=y,b.addEventListener("dispose",d));const P=T.program;i.updateUBOMapping(b,P);const R=e.render.frame;s[b.id]!==R&&(u(b),s[b.id]=R)}function c(b){const T=f();b.__bindingPointIndex=T;const y=n.createBuffer(),P=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,y),y}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const T=r[b.id],y=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,A=y.length;R<A;R++){const x=Array.isArray(y[R])?y[R]:[y[R]];for(let C=0,_=x.length;C<_;C++){const S=x[C];if(m(S,R,C,P)===!0){const N=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let X=0;for(let q=0;q<F.length;q++){const H=F[q],V=M(H);typeof H=="number"||typeof H=="boolean"?(S.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+X,S.__data)):H.isMatrix3?(S.__data[0]=H.elements[0],S.__data[1]=H.elements[1],S.__data[2]=H.elements[2],S.__data[3]=0,S.__data[4]=H.elements[3],S.__data[5]=H.elements[4],S.__data[6]=H.elements[5],S.__data[7]=0,S.__data[8]=H.elements[6],S.__data[9]=H.elements[7],S.__data[10]=H.elements[8],S.__data[11]=0):(H.toArray(S.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,y,P){const R=b.value,A=T+"_"+y;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const x=P[A];if(typeof R=="number"||typeof R=="boolean"){if(x!==R)return P[A]=R,!0}else if(x.equals(R)===!1)return x.copy(R),!0}return!1}function g(b){const T=b.uniforms;let y=0;const P=16;for(let A=0,x=T.length;A<x;A++){const C=Array.isArray(T[A])?T[A]:[T[A]];for(let _=0,S=C.length;_<S;_++){const N=C[_],F=Array.isArray(N.value)?N.value:[N.value];for(let X=0,q=F.length;X<q;X++){const H=F[X],V=M(H),G=y%P,re=G%V.boundary,se=G+re;y+=re,se!==0&&P-se<V.storage&&(y+=P-se),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=V.storage}}}const R=y%P;return R>0&&(y+=P-R),b.__size=y,b.__cache={},this}function M(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function d(b){const T=b.target;T.removeEventListener("dispose",d);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:h,dispose:p}}class Om{constructor(e={}){const{canvas:t=Th(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let M=null,d=null;const p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=bn,this.toneMappingExposure=1;const T=this;let y=!1,P=0,R=0,A=null,x=-1,C=null;const _=new at,S=new at;let N=null;const F=new Oe(0);let X=0,q=t.width,H=t.height,V=1,G=null,re=null;const se=new at(0,0,q,H),me=new at(0,0,q,H);let Be=!1;const Ze=new Ta;let Y=!1,J=!1;const _e=new ot,he=new ot,Ce=new B,be=new at,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ze(){return A===null?V:1}let L=i;function xt(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){const D="webgl2";if(L=xt(D,E),L===null)throw xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ne,We,Ae,tt,xe,w,v,O,$,j,K,Se,ie,fe,Xe,Q,ue,we,Re,de,Fe,Pe,et,I;function le(){Ne=new Gd(L),Ne.init(),Pe=new Rm(L,Ne),We=new Fd(L,Ne,e,Pe),Ae=new ym(L),We.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),tt=new Xd(L),xe=new cm,w=new wm(L,Ne,Ae,xe,We,Pe,tt),v=new Bd(T),O=new Hd(T),$=new jh(L),et=new Ud(L,$),j=new Vd(L,$,tt,et),K=new Yd(L,j,$,tt),Re=new qd(L,We,w),Q=new Od(xe),Se=new lm(T,v,O,Ne,We,et,Q),ie=new Nm(T,xe),fe=new fm,Xe=new gm(Ne),we=new Dd(T,v,O,Ae,K,u,l),ue=new Tm(T,K,We),I=new Fm(L,tt,We,Ae),de=new Nd(L,Ne,tt),Fe=new Wd(L,Ne,tt),tt.programs=Se.programs,T.capabilities=We,T.extensions=Ne,T.properties=xe,T.renderLists=fe,T.shadowMap=ue,T.state=Ae,T.info=tt}le();const W=new Dm(T,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,H,!1))},this.getSize=function(E){return E.set(q,H)},this.setSize=function(E,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,H=D,t.width=Math.floor(E*V),t.height=Math.floor(D*V),k===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(q*V,H*V).floor()},this.setDrawingBufferSize=function(E,D,k){q=E,H=D,V=k,t.width=Math.floor(E*k),t.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,D,k,z){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,D,k,z),Ae.viewport(_.copy(se).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(me)},this.setScissor=function(E,D,k,z){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,D,k,z),Ae.scissor(S.copy(me).multiplyScalar(V).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){Ae.setScissorTest(Be=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(E=!0,D=!0,k=!0){let z=0;if(E){let U=!1;if(A!==null){const ee=A.texture.format;U=ee===Sa||ee===va||ee===ga}if(U){const ee=A.texture.type,oe=ee===fn||ee===Gn||ee===Fi||ee===Si||ee===ma||ee===_a,pe=we.getClearColor(),ge=we.getClearAlpha(),Te=pe.r,ye=pe.g,Me=pe.b;oe?(m[0]=Te,m[1]=ye,m[2]=Me,m[3]=ge,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=Te,g[1]=ye,g[2]=Me,g[3]=ge,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),Xe.dispose(),xe.dispose(),v.dispose(),O.dispose(),K.dispose(),et.dispose(),I.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ra),W.removeEventListener("sessionend",xa),xn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=tt.autoReset,D=ue.enabled,k=ue.autoUpdate,z=ue.needsUpdate,U=ue.type;le(),tt.autoReset=E,ue.enabled=D,ue.autoUpdate=k,ue.needsUpdate=z,ue.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const D=E.target;D.removeEventListener("dispose",He),ct(D)}function ct(E){bt(E),xe.remove(E)}function bt(E){const D=xe.get(E).programs;D!==void 0&&(D.forEach(function(k){Se.releaseProgram(k)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,z,U,ee){D===null&&(D=ke);const oe=U.isMesh&&U.matrixWorld.determinant()<0,pe=Dl(E,D,k,z,U);Ae.setMaterial(z,oe);let ge=k.index,Te=1;if(z.wireframe===!0){if(ge=j.getWireframeAttribute(k),ge===void 0)return;Te=2}const ye=k.drawRange,Me=k.attributes.position;let je=ye.start*Te,nt=(ye.start+ye.count)*Te;ee!==null&&(je=Math.max(je,ee.start*Te),nt=Math.min(nt,(ee.start+ee.count)*Te)),ge!==null?(je=Math.max(je,0),nt=Math.min(nt,ge.count)):Me!=null&&(je=Math.max(je,0),nt=Math.min(nt,Me.count));const st=nt-je;if(st<0||st===1/0)return;et.setup(U,z,pe,k,ge);let Ct,Ye=de;if(ge!==null&&(Ct=$.get(ge),Ye=Fe,Ye.setIndex(Ct)),U.isMesh)z.wireframe===!0?(Ae.setLineWidth(z.wireframeLinewidth*ze()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(U.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),Ae.setLineWidth(Ee*ze()),U.isLineSegments?Ye.setMode(L.LINES):U.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else U.isPoints?Ye.setMode(L.POINTS):U.isSprite&&Ye.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,_t=U._multiDrawCounts,Ke=U._multiDrawCount,Bt=ge?$.get(ge).bytesPerElement:1,Xn=xe.get(z).currentProgram.getUniforms();for(let Pt=0;Pt<Ke;Pt++)Xn.setValue(L,"_gl_DrawID",Pt),Ye.render(Ee[Pt]/Bt,_t[Pt])}else if(U.isInstancedMesh)Ye.renderInstances(je,st,U.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_t=Math.min(k.instanceCount,Ee);Ye.renderInstances(je,st,_t)}else Ye.render(je,st)};function qe(E,D,k){E.transparent===!0&&E.side===$t&&E.forceSinglePass===!1?(E.side=Rt,E.needsUpdate=!0,qi(E,D,k),E.side=yn,E.needsUpdate=!0,qi(E,D,k),E.side=$t):qi(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),d=Xe.get(k),d.init(D),b.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const z=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ee=U.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const pe=ee[oe];qe(pe,k,U),z.add(pe)}else qe(ee,k,U),z.add(ee)}),b.pop(),d=null,z},this.compileAsync=function(E,D,k=null){const z=this.compile(E,D,k);return new Promise(U=>{function ee(){if(z.forEach(function(oe){xe.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){U(E);return}setTimeout(ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let yt=null;function en(E){yt&&yt(E)}function Ra(){xn.stop()}function xa(){xn.start()}const xn=new Al;xn.setAnimationLoop(en),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(E){yt=E,W.setAnimationLoop(E),E===null?xn.stop():xn.start()},W.addEventListener("sessionstart",Ra),W.addEventListener("sessionend",xa),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,D,A),d=Xe.get(E,b.length),d.init(D),b.push(d),he.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ze.setFromProjectionMatrix(he),J=this.localClippingEnabled,Y=Q.init(this.clippingPlanes,J),M=fe.get(E,p.length),M.init(),p.push(M),W.enabled===!0&&W.isPresenting===!0){const ee=T.xr.getDepthSensingMesh();ee!==null&&Br(ee,D,-1/0,T.sortObjects)}Br(E,D,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(G,re),Je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Je&&we.addToRenderList(M,E),this.info.render.frame++,Y===!0&&Q.beginShadows();const k=d.state.shadowsArray;ue.render(k,E,D),Y===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=M.opaque,U=M.transmissive;if(d.setupLights(),D.isArrayCamera){const ee=D.cameras;if(U.length>0)for(let oe=0,pe=ee.length;oe<pe;oe++){const ge=ee[oe];Pa(z,U,E,ge)}Je&&we.render(E);for(let oe=0,pe=ee.length;oe<pe;oe++){const ge=ee[oe];Ca(M,E,ge,ge.viewport)}}else U.length>0&&Pa(z,U,E,D),Je&&we.render(E),Ca(M,E,D);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(T,E,D),et.resetDefaultState(),x=-1,C=null,b.pop(),b.length>0?(d=b[b.length-1],Y===!0&&Q.setGlobalState(T.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function Br(E,D,k,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ze.intersectsSprite(E)){z&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(he);const oe=K.update(E),pe=E.material;pe.visible&&M.push(E,oe,pe,k,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ze.intersectsObject(E))){const oe=K.update(E),pe=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),be.copy(oe.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(he)),Array.isArray(pe)){const ge=oe.groups;for(let Te=0,ye=ge.length;Te<ye;Te++){const Me=ge[Te],je=pe[Me.materialIndex];je&&je.visible&&M.push(E,oe,je,k,be.z,Me)}}else pe.visible&&M.push(E,oe,pe,k,be.z,null)}}const ee=E.children;for(let oe=0,pe=ee.length;oe<pe;oe++)Br(ee[oe],D,k,z)}function Ca(E,D,k,z){const U=E.opaque,ee=E.transmissive,oe=E.transparent;d.setupLightsView(k),Y===!0&&Q.setGlobalState(T.clippingPlanes,k),z&&Ae.viewport(_.copy(z)),U.length>0&&Xi(U,D,k),ee.length>0&&Xi(ee,D,k),oe.length>0&&Xi(oe,D,k),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Pa(E,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Vn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?zi:fn,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ee=d.state.transmissionRenderTarget[z.id],oe=z.viewport||_;ee.setSize(oe.z,oe.w);const pe=T.getRenderTarget();T.setRenderTarget(ee),T.getClearColor(F),X=T.getClearAlpha(),X<1&&T.setClearColor(16777215,.5),T.clear(),Je&&we.render(k);const ge=T.toneMapping;T.toneMapping=bn;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),Y===!0&&Q.setGlobalState(T.clippingPlanes,z),Xi(E,k,z),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Me=0,je=D.length;Me<je;Me++){const nt=D[Me],st=nt.object,Ct=nt.geometry,Ye=nt.material,Ee=nt.group;if(Ye.side===$t&&st.layers.test(z.layers)){const _t=Ye.side;Ye.side=Rt,Ye.needsUpdate=!0,La(st,k,z,Ct,Ye,Ee),Ye.side=_t,Ye.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}T.setRenderTarget(pe),T.setClearColor(F,X),Te!==void 0&&(z.viewport=Te),T.toneMapping=ge}function Xi(E,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ee=E.length;U<ee;U++){const oe=E[U],pe=oe.object,ge=oe.geometry,Te=z===null?oe.material:z,ye=oe.group;pe.layers.test(k.layers)&&La(pe,D,k,ge,Te,ye)}}function La(E,D,k,z,U,ee){E.onBeforeRender(T,D,k,z,U,ee),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(T,D,k,z,E,ee),U.transparent===!0&&U.side===$t&&U.forceSinglePass===!1?(U.side=Rt,U.needsUpdate=!0,T.renderBufferDirect(k,D,z,U,E,ee),U.side=yn,U.needsUpdate=!0,T.renderBufferDirect(k,D,z,U,E,ee),U.side=$t):T.renderBufferDirect(k,D,z,U,E,ee),E.onAfterRender(T,D,k,z,U,ee)}function qi(E,D,k){D.isScene!==!0&&(D=ke);const z=xe.get(E),U=d.state.lights,ee=d.state.shadowsArray,oe=U.state.version,pe=Se.getParameters(E,U.state,ee,D,k),ge=Se.getProgramCacheKey(pe);let Te=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?O:v).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",He),Te=new Map,z.programs=Te);let ye=Te.get(ge);if(ye!==void 0){if(z.currentProgram===ye&&z.lightsStateVersion===oe)return Da(E,pe),ye}else pe.uniforms=Se.getUniforms(E),E.onBeforeCompile(pe,T),ye=Se.acquireProgram(pe,ge),Te.set(ge,ye),z.uniforms=pe.uniforms;const Me=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=Q.uniform),Da(E,pe),z.needsLights=Nl(E),z.lightsStateVersion=oe,z.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=ye,z.uniformsList=null,ye}function Ia(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=br.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Da(E,D){const k=xe.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Dl(E,D,k,z,U){D.isScene!==!0&&(D=ke),w.resetTextureUnits();const ee=D.fog,oe=z.isMeshStandardMaterial?D.environment:null,pe=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wn,ge=(z.isMeshStandardMaterial?O:v).get(z.envMap||oe),Te=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ye=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!k.morphAttributes.position,je=!!k.morphAttributes.normal,nt=!!k.morphAttributes.color;let st=bn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=T.toneMapping);const Ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ye=Ct!==void 0?Ct.length:0,Ee=xe.get(z),_t=d.state.lights;if(Y===!0&&(J===!0||E!==C)){const Ut=E===C&&z.id===x;Q.setState(z,E,Ut)}let Ke=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==_t.state.version||Ee.outputColorSpace!==pe||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ge||z.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Te||Ee.vertexTangents!==ye||Ee.morphTargets!==Me||Ee.morphNormals!==je||Ee.morphColors!==nt||Ee.toneMapping!==st||Ee.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,Ee.__version=z.version);let Bt=Ee.currentProgram;Ke===!0&&(Bt=qi(z,D,U));let Xn=!1,Pt=!1,kr=!1;const lt=Bt.getUniforms(),un=Ee.uniforms;if(Ae.useProgram(Bt.program)&&(Xn=!0,Pt=!0,kr=!0),z.id!==x&&(x=z.id,Pt=!0),Xn||C!==E){We.reverseDepthBuffer?(_e.copy(E.projectionMatrix),yh(_e),Ah(_e),lt.setValue(L,"projectionMatrix",_e)):lt.setValue(L,"projectionMatrix",E.projectionMatrix),lt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ut=lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(L,Ce.setFromMatrixPosition(E.matrixWorld)),We.logarithmicDepthBuffer&&lt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,Pt=!0,kr=!0)}if(U.isSkinnedMesh){lt.setOptional(L,U,"bindMatrix"),lt.setOptional(L,U,"bindMatrixInverse");const Ut=U.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),lt.setValue(L,"boneTexture",Ut.boneTexture,w))}U.isBatchedMesh&&(lt.setOptional(L,U,"batchingTexture"),lt.setValue(L,"batchingTexture",U._matricesTexture,w),lt.setOptional(L,U,"batchingIdTexture"),lt.setValue(L,"batchingIdTexture",U._indirectTexture,w),lt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(L,"batchingColorTexture",U._colorsTexture,w));const zr=k.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Re.update(U,k,Bt),(Pt||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,lt.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=ge,un.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(un.envMapIntensity.value=D.environmentIntensity),Pt&&(lt.setValue(L,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&Ul(un,kr),ee&&z.fog===!0&&ie.refreshFogUniforms(un,ee),ie.refreshMaterialUniforms(un,z,V,H,d.state.transmissionRenderTarget[E.id]),br.upload(L,Ia(Ee),un,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(br.upload(L,Ia(Ee),un,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(L,"center",U.center),lt.setValue(L,"modelViewMatrix",U.modelViewMatrix),lt.setValue(L,"normalMatrix",U.normalMatrix),lt.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Hr=0,Fl=Ut.length;Hr<Fl;Hr++){const Ua=Ut[Hr];I.update(Ua,Bt),I.bind(Ua,Bt)}}return Bt}function Ul(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Nl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,D,k){xe.get(E.texture).__webglTexture=D,xe.get(E.depthTexture).__webglTexture=k;const z=xe.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=xe.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){A=E,P=D,R=k;let z=!0,U=null,ee=!1,oe=!1;if(E){const ge=xe.get(E);if(ge.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(ge.__hasExternalTextures)w.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(ge.__boundDepthTexture!==Me){if(Me!==null&&xe.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(oe=!0);const ye=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ye[D])?U=ye[D][k]:U=ye[D],ee=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?U=xe.get(E).__webglMultisampledFramebuffer:Array.isArray(ye)?U=ye[k]:U=ye,_.copy(E.viewport),S.copy(E.scissor),N=E.scissorTest}else _.copy(se).multiplyScalar(V).floor(),S.copy(me).multiplyScalar(V).floor(),N=Be;if(Ae.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Ae.drawBuffers(E,U),Ae.viewport(_),Ae.scissor(S),Ae.setScissorTest(N),ee){const ge=xe.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,k)}else if(oe){const ge=xe.get(E.texture),Te=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ge.__webglTexture,k||0,Te)}x=-1},this.readRenderTargetPixels=function(E,D,k,z,U,ee,oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){Ae.bindFramebuffer(L.FRAMEBUFFER,pe);try{const ge=E.texture,Te=ge.format,ye=ge.type;if(!We.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&k>=0&&k<=E.height-U&&L.readPixels(D,k,z,U,Pe.convert(Te),Pe.convert(ye),ee)}finally{const ge=A!==null?xe.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,z,U,ee,oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const ge=E.texture,Te=ge.format,ye=ge.type;if(!We.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-z&&k>=0&&k<=E.height-U){Ae.bindFramebuffer(L.FRAMEBUFFER,pe);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(D,k,z,U,Pe.convert(Te),Pe.convert(ye),0);const je=A!==null?xe.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(L.FRAMEBUFFER,je);const nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bh(L,nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(Me),L.deleteSync(nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(E.image.width*z),ee=Math.floor(E.image.height*z),oe=D!==null?D.x:0,pe=D!==null?D.y:0;w.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,oe,pe,U,ee),Ae.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,z=null,U=0){E.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let ee,oe,pe,ge,Te,ye;k!==null?(ee=k.max.x-k.min.x,oe=k.max.y-k.min.y,pe=k.min.x,ge=k.min.y):(ee=E.image.width,oe=E.image.height,pe=0,ge=0),z!==null?(Te=z.x,ye=z.y):(Te=0,ye=0);const Me=Pe.convert(D.format),je=Pe.convert(D.type);w.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ct=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Ee=L.getParameter(L.UNPACK_SKIP_IMAGES),_t=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,ge),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Te,ye,ee,oe,Me,je,_t.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Te,ye,_t.width,_t.height,Me,_t.data):L.texSubImage2D(L.TEXTURE_2D,U,Te,ye,ee,oe,Me,je,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,z=null,U=0){E.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let ee,oe,pe,ge,Te,ye,Me,je,nt;const st=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(ee=k.max.x-k.min.x,oe=k.max.y-k.min.y,pe=k.max.z-k.min.z,ge=k.min.x,Te=k.min.y,ye=k.min.z):(ee=st.width,oe=st.height,pe=st.depth,ge=0,Te=0,ye=0),z!==null?(Me=z.x,je=z.y,nt=z.z):(Me=0,je=0,nt=0);const Ct=Pe.convert(D.format),Ye=Pe.convert(D.type);let Ee;if(D.isData3DTexture)w.setTexture3D(D,0),Ee=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),Ee=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const _t=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Bt=L.getParameter(L.UNPACK_SKIP_PIXELS),Xn=L.getParameter(L.UNPACK_SKIP_ROWS),Pt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ye),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ee,U,Me,je,nt,ee,oe,pe,Ct,Ye,st.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Ee,U,Me,je,nt,ee,oe,pe,Ct,st.data):L.texSubImage3D(Ee,U,Me,je,nt,ee,oe,pe,Ct,Ye,st),L.pixelStorei(L.UNPACK_ROW_LENGTH,_t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt),U===0&&D.generateMipmaps&&L.generateMipmap(Ee),Ae.unbindTexture()},this.initRenderTarget=function(E){xe.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,Ae.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ma?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Nr?"display-p3":"srgb"}}class ya{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new ya(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bm extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Pi extends Tt{constructor(e,t,i,r,s,a,o,l,h){super(e,t,i,r,s,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Aa extends Rn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),h(i),c(),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(s.slice(),3)),this.setAttribute("uv",new jt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const T=new B,y=new B,P=new B;for(let R=0;R<t.length;R+=3)m(t[R+0],T),m(t[R+1],y),m(t[R+2],P),l(T,y,P,b)}function l(b,T,y,P){const R=P+1,A=[];for(let x=0;x<=R;x++){A[x]=[];const C=b.clone().lerp(y,x/R),_=T.clone().lerp(y,x/R),S=R-x;for(let N=0;N<=S;N++)N===0&&x===R?A[x][N]=C:A[x][N]=C.clone().lerp(_,N/S)}for(let x=0;x<R;x++)for(let C=0;C<2*(R-x)-1;C++){const _=Math.floor(C/2);C%2===0?(u(A[x][_+1]),u(A[x+1][_]),u(A[x][_])):(u(A[x][_+1]),u(A[x+1][_+1]),u(A[x+1][_]))}}function h(b){const T=new B;for(let y=0;y<s.length;y+=3)T.x=s[y+0],T.y=s[y+1],T.z=s[y+2],T.normalize().multiplyScalar(b),s[y+0]=T.x,s[y+1]=T.y,s[y+2]=T.z}function c(){const b=new B;for(let T=0;T<s.length;T+=3){b.x=s[T+0],b.y=s[T+1],b.z=s[T+2];const y=d(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;a.push(y,1-P)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){const T=a[b+0],y=a[b+2],P=a[b+4],R=Math.max(T,y,P),A=Math.min(T,y,P);R>.9&&A<.1&&(T<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function u(b){s.push(b.x,b.y,b.z)}function m(b,T){const y=b*3;T.x=e[y+0],T.y=e[y+1],T.z=e[y+2]}function g(){const b=new B,T=new B,y=new B,P=new B,R=new Ve,A=new Ve,x=new Ve;for(let C=0,_=0;C<s.length;C+=9,_+=6){b.set(s[C+0],s[C+1],s[C+2]),T.set(s[C+3],s[C+4],s[C+5]),y.set(s[C+6],s[C+7],s[C+8]),R.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),x.set(a[_+4],a[_+5]),P.copy(b).add(T).add(y).divideScalar(3);const S=d(P);M(R,_+0,b,S),M(A,_+2,T,S),M(x,_+4,y,S)}}function M(b,T,y,P){P<0&&b.x===1&&(a[T]=b.x-1),y.x===0&&y.z===0&&(a[T]=P/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.vertices,e.indices,e.radius,e.details)}}class wa extends Aa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class mr extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class km extends Il{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ms=new ot,Oo=new B,Bo=new B;class zm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),Bo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bo),t.updateMatrixWorld(),Ms.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ms),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ms)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hm extends zm{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Il{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Hm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);const Qe=48,ai=64,Gt=17,Vt=11,Sn=.2,Vm=.62,Wm=2.1,Xm=matchMedia("(pointer: coarse)").matches,oi=Xm?1:2,li=Math.min(2,window.devicePixelRatio||1)*(matchMedia("(pointer: coarse)").matches?.8:1),_r={0:724766,1:1837832,2:1054758,3:2047324,4:1841160,5:724766,6:328968};function qm(n,e,t,i,r,s){const a=(o,l,h,c,f,u=!1,m=0)=>({x0:o,y0:l,x1:h,y1:c,ground:f,lift:m,soft:u});switch(n){case te.HERO:return a(e-2.4*i,t-2.3*i-s,e+2.4*i,t+.4*i,t);case te.GOBLIN:case te.SLIME:return a(e-i,t-1.3*i,e+i,t+.3*i,t);case te.ICE_BLOCK:return a(e-.6*i,t-1.05*i,e+.6*i,t+.1*i,t+1,!0);case te.BOSS:return a(e-1.3*i,t-1.8*i,e+1.3*i,t+.3*i,t);case te.BIRD:return a(e-i,t-s-i,e+i,t-s+.7*i,t,!1,s);case te.STONE:return a(e-1.2*i,t-s-i,e+1.2*i,t-s+i,t,!0,s);case te.ITEM:return a(e-i,t-i,e+i,t+i,t+18);case te.ROCKET:return a(e-i,t-i,e+i,t+i,t+22,!0);case te.GRAND_SHOT:return a(e-1.6*i,t-i,e+1.6*i,t+i,t+22,!0);case te.BOSS_SHOT:return r===1?a(e-i,t-i,e+i,t+i,t+20,!0):null;case te.FX_SLASH:return a(e,t,e+i,t+i,t+i*.8,!0);case te.FX_FIRE:case te.FX_ICE:return a(e-.15*i,t-.5*i,e+1.15*i,t+i,t+.92*i,!0);case te.FX_PUFF:return a(e-i,t-i,e+i,t+i,t+.5*i,!0);case te.FX_EXPLOSION:return a(e-i,t-i,e+i,t+i,t+.4*i,!0);case te.FX_BOLT:return a(e-i,t-4.3*i,e+i,t+.6*i,t,!0);case te.FX_DEFEAT:return a(e-i,t-i,e+i,t+i,t+.5*i,!0);case te.HAND:return r===1?a(e-.7*i,t-1.2*i,e+.7*i,t+.3*i,t):null;case te.TEXT:return a(e-170,t-i*1.2,e+170,t+i*.4,t+48,!0)}return null}function Ym(n,e){return n===te.SHADOW||n===te.FX_BEAM||n===te.FX_SPIN||n===te.BOSS_SHOT&&e===0||n===te.HAND&&e===0}class Km{constructor(e){Le(this,"renderer");Le(this,"scene",new Bm);Le(this,"camera",new Ft(72,Gt/Vt,.05,200));Le(this,"playerPx",{x:0,y:0,yaw:0,flags:0,hero:0,action:0,jump:0,found:!1});Le(this,"terrain",new Ii);Le(this,"terrainKey","");Le(this,"lastGroundKey","");Le(this,"groundCanvas",document.createElement("canvas"));Le(this,"groundCtx");Le(this,"groundTex");Le(this,"groundMat");Le(this,"groundFrame",0);Le(this,"wallTex",null);Le(this,"wallWorld",-1);Le(this,"decalCanvas",document.createElement("canvas"));Le(this,"decalCtx");Le(this,"decalTex");Le(this,"boards",[]);Le(this,"boardGeo",new Hn(1,1));Le(this,"width",1);Le(this,"height",1);this.renderer=new Om({canvas:e,antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=el,this.renderer.outputColorSpace=St,this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.scene.add(new km(14543103,3811866,1.1));const t=new Gm(16777215,1.8);t.position.set(Gt/2-7,16,Vt/2+6),t.target.position.set(Gt/2,0,Vt/2),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);const i=t.shadow.camera;i.left=-14,i.right=14,i.top=14,i.bottom=-14,i.near=1,i.far=50,t.shadow.bias=-8e-4,this.scene.add(t,t.target),this.scene.add(this.terrain),this.groundCanvas.width=Math.round(Gt*Qe*oi),this.groundCanvas.height=Math.round(Vt*Qe*oi),this.groundCtx=this.groundCanvas.getContext("2d"),this.groundTex=new Pi(this.groundCanvas),this.groundTex.colorSpace=St,this.groundTex.anisotropy=4,this.groundMat=new mr({map:this.groundTex,emissiveMap:this.groundTex,emissive:16777215,emissiveIntensity:.12,roughness:.95});const r=new Mt(new Hn(Gt,Vt),this.groundMat);r.rotation.x=-Math.PI/2,r.position.set(Gt/2,Sn,Vt/2),r.receiveShadow=!0,this.scene.add(r);const s=new Mt(new Wn(Gt,Sn,Vt),new mr({color:2760728,roughness:1}));s.position.set(Gt/2,Sn/2-.001,Vt/2),this.scene.add(s),this.decalCanvas.width=Gt*Qe,this.decalCanvas.height=Vt*Qe,this.decalCtx=this.decalCanvas.getContext("2d"),this.decalTex=new Pi(this.decalCanvas),this.decalTex.colorSpace=St;const a=new Mt(new Hn(Gt,Vt),new Ir({map:this.decalTex,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));a.rotation.x=-Math.PI/2,a.position.set(Gt/2,Sn+.012,Vt/2),a.renderOrder=1,this.scene.add(a)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t,!1)}render(e,t,i,r,s,a){let o="",l=0,h=0,c=0,f=0,u=!0;const m=[];for(let x=i;x<r;x++){const C=x*t;if(e[C]!==te.TILE)continue;const _=e[C+1],S=e[C+2],N=Math.round(_/Qe),F=Math.round((S-ai)/Qe);u&&(c=(_-N*Qe)/Qe,f=(S-ai-F*Qe)/Qe,u=!1);const X=e[C+5];l=e[C+9],h=Math.max(h,e[C+8]),m.push([N,F,X,e[C+6]]),o+=X}o+=`w${l}`,o!==this.terrainKey&&(this.terrainKey=o,this.buildTerrain(m,l)),(this.groundFrame++%2===0||o!==this.lastGroundKey)&&(this.lastGroundKey=o,this.drawGround(e,t,i,r,c,f)),this.groundMat.emissiveIntensity=.12+h*.18,this.scene.background=new Oe(_r[l]??_r[0]);const g=this.playerPx;g.found=!1;for(let x=i;x<r;x++){const C=x*t;e[C]===te.CAMERA&&(g.x=e[C+1],g.y=e[C+2],g.yaw=e[C+5],g.jump=e[C+6],g.flags=e[C+7],g.hero=e[C+8],g.action=e[C+9],g.found=!0)}const M=_r[l]??_r[0];this.scene.fog=new ya(M,7,24);const d=g.x/Qe+c*.08,p=(g.y-ai)/Qe+f*.08;let b=Sn+Vm+g.jump/Qe,T=0;g.flags&32&&(b-=.42),g.flags&256&&(b=Sn+.18,T=-.35),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.camera.position.set(d,b,p),this.camera.lookAt(d+Math.cos(g.yaw),b+Math.tan(T),p+Math.sin(g.yaw));const y=this.decalCtx;y.setTransform(1,0,0,1,0,0),y.clearRect(0,0,this.decalCanvas.width,this.decalCanvas.height),y.setTransform(1,0,0,1,-c*Qe,-ai-f*Qe);let P=0;const R=new Float32Array(t),A=[];for(let x=i;x<r;x++){const C=x*t,_=e[C];if(_===te.TILE||_===te.RECT)continue;const S=e[C+5];if(Ym(_,S)){Ni(y,e,C,s,a);continue}const N=e[C+1]-c*Qe,F=e[C+2]-f*Qe,X=e[C+3],q=e[C+9];if(_===te.HERO||_===te.CAMERA)continue;if(_===te.FX_SHOT){A.push([N,F,X,S,e[C+7],e[C+8],e[C+9]]);continue}if(_===te.FX_SLASH)continue;if(_===te.GRAND_SHOT||_===te.ROCKET){const V=_===te.GRAND_SHOT?24:13,G=_===te.GRAND_SHOT?22:26,re=_===te.GRAND_SHOT?4:0,se=_===te.GRAND_SHOT?.2:.5,me={x0:N-V*1.6,y0:F-G-V*1.6,x1:N+V*1.6,y1:F-G+V*1.6,ground:F,lift:0,soft:!0};this.placeBoard(P++,null,me,null,null,Be=>ko(Be,N,F-G,V,re,se));continue}if(_===te.TEXT&&Math.abs(e[C+1]-g.x)<40&&Math.abs(e[C+2]-(g.y-.7*Qe))<50)continue;const H=qm(_,N,F,X,S,q);if(H){for(let V=0;V<t;V++)R[V]=e[C+V];R[1]=N,R[2]=F-H.lift,_===te.FX_BEAM&&(R[3]-=c*Qe,R[4]-=f*Qe),this.placeBoard(P++,R,H,s,a)}}for(const x of A)P=this.placeShot(P,x);for(let x=P;x<this.boards.length;x++)this.boards[x].holder.visible=!1;this.decalTex.needsUpdate=!0,this.renderer.render(this.scene,this.camera)}clear(){this.renderer.setClearColor(329228),this.renderer.clear()}placeShot(e,t){const[i,r,s,a,o,l,h]=t,c=Math.min(Math.max(.75,l),h),f=(c+(h-c)*o)*Qe,u=i+Math.cos(s)*f,m=r+Math.sin(s)*f,g=26,M=16,d={x0:u-M*1.6,y0:m-g-M*1.6,x1:u+M*1.6,y1:m-g+M*1.6,ground:m,lift:0,soft:!0};return this.placeBoard(e,null,d,null,null,p=>ko(p,u,m-g,M,a,o)),e+1}placeBoard(e,t,i,r,s,a){const o=this.board(e),l=i.x1-i.x0,h=i.y1-i.y0,c=Math.ceil(l*li),f=Math.ceil(h*li);(o.canvas.width<c||o.canvas.height<f)&&(o.canvas.width=Math.max(o.canvas.width,Math.ceil(c/64)*64),o.canvas.height=Math.max(o.canvas.height,Math.ceil(f/64)*64),o.tex.dispose(),o.tex=new Pi(o.canvas),o.tex.colorSpace=St,o.mat.map=o.tex,o.ctx=o.canvas.getContext("2d"));const u=o.ctx;u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,o.canvas.width,o.canvas.height),u.setTransform(li,0,0,li,-i.x0*li,-i.y0*li),a?a(u):t&&r&&s&&Ni(u,t,0,r,s);const m=c/o.canvas.width,g=f/o.canvas.height;o.tex.repeat.set(m,g),o.tex.offset.set(0,1-g),o.tex.needsUpdate=!0,o.mat.transparent=!0,o.mat.alphaTest=i.soft?.01:.35,o.mat.depthWrite=!i.soft,o.mesh.renderOrder=i.soft?3:2,o.mat.needsUpdate=!0;const M=(i.x0+i.x1)/2,d=(i.y0+i.y1)/2;o.holder.visible=!0;const p=M/Qe,b=(i.ground-ai)/Qe;o.holder.position.set(p,Sn,b),o.holder.rotation.set(0,Math.atan2(this.camera.position.x-p,this.camera.position.z-b),0),o.mesh.position.set(0,(i.ground-d)/Qe,0),o.mesh.scale.set(l/Qe,h/Qe,1)}board(e){for(;this.boards.length<=e;){const t=document.createElement("canvas");t.width=128,t.height=128;const i=new Pi(t);i.colorSpace=St;const r=new Ir({map:i,transparent:!0,toneMapped:!1,side:$t}),s=new Mt(this.boardGeo,r),a=new mt;a.add(s),this.scene.add(a),this.boards.push({holder:a,mesh:s,canvas:t,ctx:t.getContext("2d"),tex:i,mat:r})}return this.boards[e]}drawGround(e,t,i,r,s,a){const o=this.groundCtx;o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,this.groundCanvas.width,this.groundCanvas.height),o.setTransform(oi,0,0,oi,-s*Qe*oi,-(ai+a*Qe)*oi);for(let l=i;l<r;l++){const h=l*t;if(e[h]!==te.TILE)continue;let c=e[h+5];c!==4&&(c===1&&(c=0),o.save(),ys(o,e[h+1],e[h+2],e[h+3],c,e[h+6],e[h+7],e[h+8],e[h+9]),o.restore())}this.groundTex.needsUpdate=!0}wallTexture(e){var i;if(this.wallTex&&this.wallWorld===e)return this.wallTex;const t=document.createElement("canvas");return t.width=t.height=128,ys(t.getContext("2d"),0,0,128,4,1,0,0,e),(i=this.wallTex)==null||i.dispose(),this.wallTex=new Pi(t),this.wallTex.colorSpace=St,this.wallTex.wrapS=this.wallTex.wrapT=wr,this.wallTex.repeat.set(1,2),this.wallWorld=e,this.wallTex}buildTerrain(e,t){for(const a of[...this.terrain.children])this.terrain.remove(a),a instanceof Mt&&a.geometry.dispose();const i=new mr({map:this.wallTexture(t),color:12107478,roughness:.95}),r=new mr({color:9080217,roughness:.9,flatShading:!0}),s=(a,o)=>{let l=a*2654435761+o*40503>>>0;return l^=l>>>15,(l*2246822519>>>0)/4294967296};for(const[a,o,l,h]of e){const c=a+.5,f=o+.5;if(l===4){const u=Wm+s(h,1)*.3,m=new Mt(new Wn(1,u,1),i);m.position.set(c,u/2,f),m.castShadow=!0,m.receiveShadow=!0,this.terrain.add(m)}else if(l===1){const u=new Mt(new wa(.44,0),r);u.position.set(c,Sn+.26,f),u.scale.set(1,.78+s(h,4)*.2,.95),u.rotation.set(s(h,5)*3,s(h,6)*6,s(h,7)*3),u.castShadow=!0,u.receiveShadow=!0,this.terrain.add(u)}}}}function ko(n,e,t,i,r,s){const a=Math.PI*2,o=i*(1-.25*s);switch(n.globalAlpha=s<.75?1:1-(s-.75)/.25,r){case 0:{const l=n.createRadialGradient(e,t,0,e,t,o*1.3);l.addColorStop(0,"#ffffff"),l.addColorStop(.25,"#fff59d"),l.addColorStop(.55,"#ff9800"),l.addColorStop(.85,"rgba(229,57,53,0.7)"),l.addColorStop(1,"rgba(183,28,28,0)"),n.fillStyle=l,n.beginPath();for(let h=0;h<=12;h++){const c=h/12*a,f=o*1.3*(.82+.18*Math.sin(c*3+s*30));h===0?n.moveTo(e+Math.cos(c)*f,t+Math.sin(c)*f):n.lineTo(e+Math.cos(c)*f,t+Math.sin(c)*f)}n.fill();break}case 1:{n.fillStyle="rgba(179,229,252,0.5)",n.beginPath(),n.arc(e,t,o,0,a),n.fill(),n.fillStyle="#e1f5fe",n.strokeStyle="#4fc3f7",n.lineWidth=2,n.beginPath();for(let l=0;l<6;l++){const h=l/6*a+s*4,c=l%2?o*.45:o*.95;l===0?n.moveTo(e+Math.cos(h)*c,t+Math.sin(h)*c):n.lineTo(e+Math.cos(h)*c,t+Math.sin(h)*c)}n.closePath(),n.fill(),n.stroke();break}case 2:{n.strokeStyle="rgba(255,255,255,0.9)",n.lineWidth=4,n.beginPath(),n.arc(e,t,o,s*8,s*8+a*.8),n.stroke(),n.strokeStyle="rgba(129,199,132,0.9)",n.lineWidth=3,n.beginPath(),n.arc(e,t,o*.6,-s*10,-s*10+a*.7),n.stroke();break}case 3:{const l=n.createRadialGradient(e,t,0,e,t,o);l.addColorStop(0,"#ffffff"),l.addColorStop(.4,"#fff176"),l.addColorStop(1,"rgba(255,235,59,0)"),n.fillStyle=l,n.beginPath(),n.arc(e,t,o,0,a),n.fill(),n.strokeStyle="#fff59d",n.lineWidth=2;for(let h=0;h<4;h++){const c=h/4*a+s*12;n.beginPath(),n.moveTo(e+Math.cos(c)*o*.4,t+Math.sin(c)*o*.4),n.lineTo(e+Math.cos(c+.4)*o*.8,t+Math.sin(c+.4)*o*.8),n.lineTo(e+Math.cos(c)*o*1.2,t+Math.sin(c)*o*1.2),n.stroke()}break}default:{n.fillStyle="#6d4c41",n.strokeStyle="#3e2723",n.lineWidth=2,n.beginPath();for(let l=0;l<7;l++){const h=l/7*a+s*6,c=o*(l%2?.75:.95);l===0?n.moveTo(e+Math.cos(h)*c,t+Math.sin(h)*c):n.lineTo(e+Math.cos(h)*c,t+Math.sin(h)*c)}n.closePath(),n.fill(),n.stroke(),n.fillStyle="rgba(161,136,127,0.5)",n.beginPath(),n.arc(e,t+o*.9,o*.7,0,a),n.fill()}}}const Ue={MENU_MOVE:1,MENU_OK:2,PAUSE:3,ATTACK:10,SPECIAL:20,ENEMY_HIT:30,ENEMY_DIE:31,BOSS_DIE:32,HERO_HURT:33,HERO_DIE:34,ITEM:40,POWERUP:41,ONE_UP:42,ROCKET:43,EXPLOSION:44,STONE:45,PIT:46,ROCK_BREAK:47,STAGE_CLEAR:50,GAME_OVER:51,ALL_CLEAR:52,WORLD_TITLE:53,BOSS_CAST:60,CHAINSAW:61,SUMMON:62,TENTACLE:63,BIND:64,CARD:65,BURROW:66,HAND:67},$m={1:"audio/the_final_checkpoint.mp3",2:"audio/boss.mp3",3:"audio/title.mp3",4:"audio/select.mp3"},Zm=.4,jm=.35;class Jm{constructor(){Le(this,"ctx",null);Le(this,"sfxGain",null);Le(this,"noiseBuf",null);Le(this,"bgm",null);Le(this,"track",0);Le(this,"paused",!1);Le(this,"muted",!1)}unlock(){if(!this.ctx){this.ctx=new AudioContext,this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.muted?0:jm,this.sfxGain.connect(this.ctx.destination);const e=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)t[i]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume(),this.syncBgm()}update(e,t,i){if(e!==this.track||t!==this.paused){const r=e!==this.track;this.track=e,this.paused=t,this.syncBgm(r)}if(!(!this.ctx||this.muted))for(const r of new Set(i))this.play(r)}syncBgm(e=!1){var r,s;const t=$m[this.track];if(!t){(r=this.bgm)==null||r.pause();return}const i=`./${t}`;!this.bgm||!this.bgm.src.endsWith(t)?((s=this.bgm)==null||s.pause(),this.bgm=new Audio(i),this.bgm.loop=!0,this.bgm.volume=Zm,this.bgm.muted=this.muted):e&&(this.bgm.currentTime=0),this.paused||!this.ctx?this.bgm.pause():this.bgm.play().catch(()=>{})}tone({type:e="square",f0:t,f1:i,dur:r,vol:s=.5,delay:a=0}){const o=this.ctx,l=o.currentTime+a,h=o.createOscillator(),c=o.createGain();h.type=e,h.frequency.setValueAtTime(t,l),i!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(1,i),l+r),c.gain.setValueAtTime(s,l),c.gain.exponentialRampToValueAtTime(.001,l+r),h.connect(c).connect(this.sfxGain),h.start(l),h.stop(l+r+.02)}noise({dur:e,vol:t=.5,delay:i=0,filter:r="lowpass",freq:s=2e3,freqTo:a}){const o=this.ctx,l=o.currentTime+i,h=o.createBufferSource();h.buffer=this.noiseBuf;const c=o.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(s,l),a!==void 0&&c.frequency.exponentialRampToValueAtTime(a,l+e);const f=o.createGain();f.gain.setValueAtTime(t,l),f.gain.exponentialRampToValueAtTime(.001,l+e),h.connect(c).connect(f).connect(this.sfxGain),h.start(l,Math.random()*.5),h.stop(l+e+.02)}notes(e,t,i="square",r=.35,s=t){e.forEach((a,o)=>this.tone({type:i,f0:a,dur:o===e.length-1?s:t*.95,vol:r,delay:o*t}))}play(e){switch(e){case Ue.MENU_MOVE:return this.tone({f0:660,dur:.05,vol:.25});case Ue.MENU_OK:return this.notes([660,990],.06,"square",.3);case Ue.PAUSE:return this.notes([440,330],.07,"triangle",.4);case Ue.ATTACK+0:return this.noise({dur:.12,vol:.35,filter:"lowpass",freq:1800,freqTo:400}),this.tone({type:"sawtooth",f0:320,f1:120,dur:.12,vol:.2});case Ue.ATTACK+1:return this.tone({type:"triangle",f0:1400,f1:2100,dur:.07,vol:.3});case Ue.ATTACK+2:return this.noise({dur:.14,vol:.4,filter:"bandpass",freq:1500,freqTo:5e3});case Ue.ATTACK+3:return this.tone({type:"square",f0:1800,f1:300,dur:.1,vol:.2}),this.noise({dur:.08,vol:.25,filter:"highpass",freq:3e3});case Ue.ATTACK+4:return this.tone({type:"sine",f0:140,f1:55,dur:.2,vol:.6}),this.noise({dur:.15,vol:.35,filter:"lowpass",freq:500});case Ue.SPECIAL+0:return this.noise({dur:.6,vol:.6,filter:"lowpass",freq:1200,freqTo:200}),this.tone({type:"sawtooth",f0:220,f1:50,dur:.5,vol:.25});case Ue.SPECIAL+1:return this.notes([1319,1760,2093,2637],.05,"triangle",.3,.3);case Ue.SPECIAL+2:return this.tone({type:"square",f0:300,f1:1e3,dur:.22,vol:.25});case Ue.SPECIAL+3:return this.noise({dur:.7,vol:.6,filter:"lowpass",freq:4e3,freqTo:300}),this.tone({type:"square",f0:2400,f1:80,dur:.35,vol:.2});case Ue.SPECIAL+4:return this.tone({type:"sine",f0:100,f1:35,dur:.6,vol:.7}),this.noise({dur:.5,vol:.4,filter:"lowpass",freq:400});case Ue.ENEMY_HIT:return this.tone({f0:240,f1:110,dur:.07,vol:.25});case Ue.ENEMY_DIE:return this.noise({dur:.18,vol:.45,filter:"bandpass",freq:1800,freqTo:400}),this.tone({type:"square",f0:180,f1:60,dur:.12,vol:.3}),this.tone({type:"square",f0:988,dur:.06,vol:.22,delay:.05}),this.tone({type:"square",f0:1319,dur:.12,vol:.22,delay:.11});case Ue.BOSS_DIE:return this.noise({dur:1.2,vol:.7,filter:"lowpass",freq:2e3,freqTo:80}),this.tone({type:"sawtooth",f0:300,f1:30,dur:1.1,vol:.3}),this.noise({dur:.6,vol:.5,filter:"lowpass",freq:900,delay:.35});case Ue.HERO_HURT:return this.tone({f0:320,f1:140,dur:.16,vol:.3}),this.tone({type:"sawtooth",f0:200,f1:90,dur:.16,vol:.15});case Ue.HERO_DIE:return this.notes([523,392,330,262,196],.11,"triangle",.45,.4);case Ue.ITEM:return this.notes([880,1320],.06,"square",.25);case Ue.POWERUP:return this.notes([523,659,784,1047],.06,"square",.25,.2);case Ue.ONE_UP:return this.notes([784,1047,1319,1568,2093],.07,"square",.25,.25);case Ue.ROCKET:return this.noise({dur:.3,vol:.3,filter:"bandpass",freq:800,freqTo:3e3}),this.tone({type:"sawtooth",f0:180,f1:600,dur:.25,vol:.12});case Ue.EXPLOSION:return this.noise({dur:.4,vol:.6,filter:"lowpass",freq:1200,freqTo:120});case Ue.STONE:return this.tone({type:"sine",f0:160,f1:60,dur:.14,vol:.5}),this.noise({dur:.1,vol:.3,filter:"lowpass",freq:600});case Ue.PIT:return this.tone({type:"triangle",f0:600,f1:90,dur:.45,vol:.4});case Ue.ROCK_BREAK:return this.noise({dur:.3,vol:.5,filter:"lowpass",freq:1500,freqTo:200}),this.tone({f0:130,f1:60,dur:.15,vol:.2});case Ue.STAGE_CLEAR:return this.notes([523,659,784,1047,784,1047],.12,"square",.3,.6);case Ue.GAME_OVER:return this.notes([392,330,262,196],.28,"triangle",.45,.9);case Ue.WORLD_TITLE:return this.tone({type:"sine",f0:70,f1:45,dur:1.4,vol:.6}),this.noise({dur:1,vol:.25,filter:"lowpass",freq:600,freqTo:80}),this.notes([784,1175,1568],.09,"triangle",.2,.8);case Ue.ALL_CLEAR:return this.notes([523,659,784,1047,1319,1568,2093],.13,"square",.3,1);case Ue.BOSS_CAST:return this.tone({type:"sawtooth",f0:140,f1:320,dur:.4,vol:.18});case Ue.CHAINSAW:this.noise({dur:.55,vol:.45,filter:"bandpass",freq:500});for(let t=0;t<6;t++)this.tone({type:"sawtooth",f0:95,f1:80,dur:.07,vol:.25,delay:t*.08});return;case Ue.SUMMON:return this.tone({type:"triangle",f0:300,f1:900,dur:.45,vol:.3}),this.tone({type:"triangle",f0:450,f1:1350,dur:.45,vol:.2,delay:.08});case Ue.TENTACLE:return this.noise({dur:.25,vol:.35,filter:"lowpass",freq:700,freqTo:200}),this.tone({type:"sine",f0:220,f1:90,dur:.25,vol:.3});case Ue.BIND:for(let t=0;t<4;t++)this.tone({f0:180-t*15,dur:.07,vol:.2,delay:t*.07});return;case Ue.CARD:return this.noise({dur:.07,vol:.35,filter:"highpass",freq:4e3});case Ue.BURROW:return this.noise({dur:.55,vol:.45,filter:"lowpass",freq:350}),this.tone({type:"sine",f0:110,f1:45,dur:.5,vol:.4});case Ue.HAND:return this.noise({dur:.15,vol:.35,filter:"lowpass",freq:800}),this.tone({type:"sine",f0:200,f1:90,dur:.12,vol:.3})}}}const Qm=`
.tc, .tc * { touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent; outline: none; }
.tc { position: fixed; }
.tc-pad { border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.10), rgba(255,255,255,0.04));
  border: 2px solid rgba(255,255,255,0.25); }
.tc-pad i { position: absolute; width: 0; height: 0; transform: translate(-50%, -50%); pointer-events: none;
  border: 0.55em solid transparent; font-size: 20px; }
.tc-pad i.up { border-bottom: 0.9em solid rgba(255,255,255,0.55); border-top-width: 0; }
.tc-pad i.down { border-top: 0.9em solid rgba(255,255,255,0.55); border-bottom-width: 0; }
.tc-pad i.left { border-right: 0.9em solid rgba(255,255,255,0.55); border-left-width: 0; }
.tc-pad i.right { border-left: 0.9em solid rgba(255,255,255,0.55); border-right-width: 0; }
.tc-pad i.on { border-color: transparent; }
.tc-pad i.up.on { border-bottom-color: #ffeb3b; }
.tc-pad i.down.on { border-top-color: #ffeb3b; }
.tc-pad i.left.on { border-right-color: #ffeb3b; }
.tc-pad i.right.on { border-left-color: #ffeb3b; }
.tc-btn { border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;
  color: #fff; font: bold 22px sans-serif; border: 2px solid rgba(255,255,255,0.45); box-shadow: 0 3px 0 rgba(0,0,0,0.4); }
.tc-btn small { font-size: 0.45em; font-weight: bold; opacity: 0.85; margin-top: 1px; }
.tc-btn.on { filter: brightness(1.5); transform: translateY(2px); box-shadow: none; }
`;class e0{constructor(){Le(this,"pad");Le(this,"arrows",[]);Le(this,"buttons",[]);Le(this,"touchOwner",new Map);Le(this,"touchBits",0);Le(this,"mouseBits",0);Le(this,"mouseOwner",-1);Le(this,"lookDx",0);Le(this,"lastX",new Map);Le(this,"visible",!1);Le(this,"ja",!1);Le(this,"pulse",0);const e=document.createElement("style");e.textContent=Qm,document.head.appendChild(e),this.pad=this.make("tc tc-pad");for(const[r,s,a]of[["up",50,17],["down",50,83],["left",17,50],["right",83,50]]){const o=document.createElement("i");o.className=r,o.style.left=`${s}%`,o.style.top=`${a}%`,this.pad.appendChild(o),this.arrows.push(o)}for(const[r,s,a]of[[Ge.ATTACK,"#e53935",["ATTACK","攻撃"]],[Ge.SPECIAL,"#1e88e5",["SPECIAL","必殺技"]],[Ge.ITEM,"#43a047",["ITEM","アイテム"]],[Ge.PAUSE,"#546e7a",["PAUSE","ポーズ"]]]){const o=this.make("tc tc-btn");o.style.background=s;const l={el:o,bit:r,label:[a[0],a[1]]};this.buttons.push(l)}const t=r=>{if(!this.visible)return;const s=new Set;let a=!1;for(const l of Array.from(r.touches))s.add(l.identifier),this.touchOwner.has(l.identifier)||this.touchOwner.set(l.identifier,this.hitTest(l.clientX,l.clientY)),(this.touchOwner.get(l.identifier)??-1)>=0&&(a=!0);for(const l of[...this.touchOwner.keys()])s.has(l)||this.touchOwner.delete(l);for(const l of Array.from(r.touches)){if((this.touchOwner.get(l.identifier)??-1)>=0)continue;const h=this.lastX.get(l.identifier);h!==void 0&&(this.lookDx+=(l.clientX-h)*2.2),this.lastX.set(l.identifier,l.clientX)}for(const l of[...this.lastX.keys()])s.has(l)||this.lastX.delete(l);let o=0;for(const l of Array.from(r.touches))o|=this.ownerBits(this.touchOwner.get(l.identifier)??-1,l.clientX,l.clientY);this.pulse|=o&~this.touchBits,this.touchBits=o,this.refresh(),(a||r.target instanceof Element&&r.target.closest(".tc"))&&r.preventDefault()};for(const r of["touchstart","touchmove","touchend","touchcancel"])window.addEventListener(r,t,{passive:!1});for(const r of[this.pad,...this.buttons.map(s=>s.el)])r.addEventListener("selectstart",s=>s.preventDefault());window.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||!this.visible||(this.mouseOwner=this.hitTest(r.clientX,r.clientY),this.mouseBits=this.ownerBits(this.mouseOwner,r.clientX,r.clientY),this.pulse|=this.mouseBits,this.refresh())}),window.addEventListener("pointermove",r=>{r.pointerType!=="mouse"||this.mouseOwner<0||(this.mouseBits=this.ownerBits(this.mouseOwner,r.clientX,r.clientY),this.refresh())});const i=()=>{this.mouseOwner=-1,this.mouseBits=0,this.refresh()};window.addEventListener("pointerup",i),window.addEventListener("blur",()=>{this.touchOwner.clear(),this.touchBits=0,i()}),this.setLanguage(!1),this.setVisible(!1)}takeLook(){const e=this.visible?this.lookDx:0;return this.lookDx=0,e}get bits(){if(!this.visible)return 0;const e=this.pulse|this.touchBits|this.mouseBits;return this.pulse=0,e}setVisible(e){this.visible=e;for(const t of[this.pad,...this.buttons.map(i=>i.el)])t.style.display=e?"":"none";e||(this.touchOwner.clear(),this.touchBits=0,this.mouseBits=0,this.mouseOwner=-1)}setLanguage(e){if(e===this.ja&&this.buttons[0].el.childElementCount>0)return;this.ja=e;const t=["A","B","C","II"];this.buttons.forEach((i,r)=>{i.el.innerHTML="",i.el.append(t[r]);const s=document.createElement("small");s.textContent=i.label[e?1:0],i.el.appendChild(s)})}layout(e,t,i){this.place(this.pad,e.x,e.y,e.size);const r=t.size,s=r*.42,a=r*.34;this.place(this.buttons[0].el,t.x+r*.24,t.y+r*.14,s),this.place(this.buttons[1].el,t.x-r*.06,t.y-r*.22,a),this.place(this.buttons[2].el,t.x-r*.3,t.y+r*.2,a),this.place(this.buttons[3].el,i.x,i.y,Math.max(40,r*.2))}place(e,t,i,r){e.style.width=e.style.height=`${r}px`,e.style.fontSize=`${Math.round(r*.3)}px`,e.style.left=`${t-r/2}px`,e.style.top=`${i-r/2}px`}make(e){const t=document.createElement("div");return t.className=e,t.addEventListener("contextmenu",i=>i.preventDefault()),document.body.appendChild(t),t}hitTest(e,t){const i=(r,s)=>{const a=r.getBoundingClientRect();return Math.hypot(e-(a.left+a.width/2),t-(a.top+a.height/2))<=a.width/2*s};if(i(this.pad,1.1))return 0;for(let r=0;r<this.buttons.length;r++)if(i(this.buttons[r].el,1.15))return r+1;return-1}ownerBits(e,t,i){return e===0?this.padDir(t,i):e>0?this.buttons[e-1].bit:0}padDir(e,t){const i=this.pad.getBoundingClientRect(),r=e-(i.left+i.width/2),s=t-(i.top+i.height/2);return Math.hypot(r,s)<i.width*.12?0:Math.abs(r)>Math.abs(s)?r>0?Ge.RIGHT:Ge.LEFT:s>0?Ge.DOWN:Ge.UP}refresh(){const e=this.touchBits|this.mouseBits,t=[Ge.UP,Ge.DOWN,Ge.LEFT,Ge.RIGHT];this.arrows.forEach((i,r)=>i.classList.toggle("on",(e&t[r])!==0));for(const i of this.buttons)i.el.classList.toggle("on",(e&i.bit)!==0)}}const ln=48,Es=64,yr=17*ln,Mn=11*ln,zo=Math.PI*2,Ts=[["#e53935","#ffb300"],["#29b6f6","#e1f5fe"],["#66bb6a","#ffffff"],["#fdd835","#7b1fa2"],["#8d6e63","#4e342e"]],Or=document.createElement("canvas");Or.width=yr;Or.height=Mn;const ft=Or.getContext("2d");function t0(n,e,t,i,r,s,a,o,l,h){var y;if(!t.found)return;const c=Es,f=e/2,u=c+Mn/2,[m,g]=Ts[t.hero]??Ts[0],M=(P,R)=>{const A=n.createRadialGradient(f,u,Mn*.35,f,u,yr*.62);A.addColorStop(0,`rgba(${P},0)`),A.addColorStop(1,`rgba(${P},${R})`),n.fillStyle=A,n.fillRect(0,c,e,Mn)};if(t.flags&128&&M("255,30,30",.55),t.flags&1&&M("80,170,255",.35+.15*Math.sin(h*8)),t.flags&32&&M("40,25,10",.75),t.flags&512){M("120,40,140",.5),n.save(),n.strokeStyle="rgba(109,76,65,0.9)",n.lineWidth=16,n.lineCap="round";for(let P=0;P<3;P++){n.beginPath();const R=c+Mn-40-P*46;n.moveTo(-20,R+Math.sin(h*5+P)*6),n.bezierCurveTo(e*.3,R-40,e*.7,R+40,e+20,R+Math.cos(h*5+P)*6),n.stroke()}n.restore()}if(!(t.flags&256)){const P=t.flags&16?Math.sin(Math.min(1,t.action)*Math.PI):0,R=t.flags&64?1-t.action:0,A=Math.sin(h*6)*3,x=e*.72,C=c+Mn+10+A+P*26;n.save(),n.translate(x,C),n.rotate(-.35),n.fillStyle=m,n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=3,n.beginPath(),n.roundRect(-38,-130,76,150,18),n.fill(),n.stroke(),n.fillStyle=g,n.fillRect(-38,-60,76,10),n.fillStyle="#455a64",n.beginPath(),n.roundRect(-24,-205,48,90,10),n.fill(),n.stroke(),n.fillStyle=m,n.fillRect(-24,-205,48,16);const _=Math.max(P,R);if(_>0){const S=n.createRadialGradient(0,-210,2,0,-210,40+R*40);S.addColorStop(0,"rgba(255,255,255,0.95)"),S.addColorStop(.4,g),S.addColorStop(1,"rgba(0,0,0,0)"),n.globalAlpha=_,n.fillStyle=S,n.beginPath(),n.arc(0,-210,40+R*40,0,zo),n.fill()}n.restore(),n.save(),n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=2,n.beginPath(),n.arc(f,u,9,0,zo),n.moveTo(f-16,u),n.lineTo(f-5,u),n.moveTo(f+5,u),n.lineTo(f+16,u),n.moveTo(f,u-16),n.lineTo(f,u-5),n.moveTo(f,u+5),n.lineTo(f,u+16),n.stroke(),n.restore()}for(let P=s;P<a;P++){const R=P*r;if(i[R]===te.TEXT&&Math.abs(i[R+1]-t.x)<40&&Math.abs(i[R+2]-(t.y-.7*ln))<50){const A=Float32Array.from(i.subarray(R,R+r));A[1]=f+(i[R+1]-t.x)*3,A[2]=c+110+(i[R+2]-(t.y-.7*ln))*2,A[3]=i[R+3]*1.6,Ni(n,A,0,o,l)}}ft.setTransform(1,0,0,1,0,-Es),ft.clearRect(0,Es,yr,Mn);for(let P=s;P<a;P++){const R=i[P*r];if(!(R===te.TEXT||R===te.CAMERA||R===te.RECT)){if(R===te.FX_SHOT){const A=P*r,[x,C,_,S,N]=[i[A+1],i[A+2],i[A+3],i[A+8],i[A+9]];ft.strokeStyle=((y=Ts[i[A+5]])==null?void 0:y[0])??"#fff",ft.lineWidth=8,ft.lineCap="round",ft.beginPath(),ft.moveTo(x+Math.cos(_)*S*ln,C+Math.sin(_)*S*ln),ft.lineTo(x+Math.cos(_)*N*ln,C+Math.sin(_)*N*ln),ft.stroke();continue}ft.save(),Ni(ft,i,P*r,o,l),ft.restore()}}ft.save(),ft.fillStyle="rgba(255,255,255,0.28)",ft.beginPath(),ft.moveTo(t.x,t.y),ft.arc(t.x,t.y,ln*3.2,t.yaw-.6,t.yaw+.6),ft.closePath(),ft.fill(),ft.restore();const d=220,p=d*Mn/yr,b=e-d-10,T=c+34;n.save(),n.globalAlpha=.88,n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(b-3,T-3,d+6,p+6),n.drawImage(Or,b,T,d,p),n.strokeStyle="rgba(255,255,255,0.6)",n.lineWidth=1.5,n.strokeRect(b-3,T-3,d+6,p+6),n.restore()}const Ho={ArrowUp:Ge.UP,ArrowDown:Ge.DOWN,ArrowLeft:Ge.LEFT,ArrowRight:Ge.RIGHT,KeyW:Ge.UP,KeyS:Ge.DOWN,KeyA:Ge.LEFT,KeyD:Ge.RIGHT,KeyQ:Ge.TURN_L,KeyE:Ge.TURN_R,Space:Ge.ATTACK,KeyR:Ge.SPECIAL,KeyF:Ge.ITEM,Enter:Ge.START,KeyP:Ge.PAUSE,Escape:Ge.PAUSE};async function n0(){const{instance:n}=await WebAssembly.instantiateStreaming(fetch("./game_core.wasm"),{}),e=n.exports;e.init(Math.random()*4294967295>>>0);const t="cdc-settings";let i=0;try{const C=localStorage.getItem(t);C!==null&&(i=Number(C)>>>0)}catch{}e.set_settings(i),(i&16)===0&&e.set_mobile(i0()?1:0);let r=e.settings();const s=document.getElementById("screen"),a=s.getContext("2d"),o=document.getElementById("gl");let l=null;try{l=new Km(o)}catch(C){console.warn("3D を使えないので 2D で表示します",C)}const h=e.screen_width(),c=e.screen_height(),f=e.cmd_stride(),u=new TextDecoder,m=new e0;let g=e.mobile()!==0;const M=()=>{const C=window.innerWidth,_=window.innerHeight;let S,N,F;if(!g)S=Math.min(C/h,_/c),N=(C-h*S)/2,F=(_-c*S)/2;else if(_>=C*.9){const H=Math.max(190,Math.min(_*.42,C*.65));S=Math.min(C/h,(_-H)/c),N=(C-h*S)/2,F=0;const V=c*S,G=_-V,re=Math.min(G*.8,C*.44),se=V+G*.55;m.layout({x:12+re/2,y:se,size:re},{x:C-12-re/2,y:se,size:re},{x:C/2,y:V+34})}else{const H=Math.max(130,Math.min(C*.21,240));S=Math.min((C-H*2)/h,_/c),N=(C-h*S)/2,F=(_-c*S)/2;const V=Math.min(H-16,_*.48);m.layout({x:H/2,y:_*.62,size:V},{x:C-H/2,y:_*.62,size:V},{x:C-H/2,y:Math.max(34,_*.16)})}const X=window.devicePixelRatio||1;s.style.left=`${Math.floor(N)}px`,s.style.top=`${Math.floor(F)}px`,s.style.width=`${Math.floor(h*S)}px`,s.style.height=`${Math.floor(c*S)}px`;const q=64;o.style.left=s.style.left,o.style.top=`${Math.floor(F+q*S)}px`,o.style.width=s.style.width,o.style.height=`${Math.floor((c-q)*S)}px`,l==null||l.setSize(Math.floor(h*S),Math.floor((c-q)*S)),s.width=Math.floor(h*S*X),s.height=Math.floor(c*S*X),a.setTransform(s.width/h,0,0,s.height/c,0,0)};window.addEventListener("resize",M),m.setVisible(g),m.setLanguage((r&4)!==0),M();let d=0,p=0,b=!1,T=!1;s.addEventListener("click",()=>{var C;g||!b||document.pointerLockElement===s||(C=s.requestPointerLock)==null||C.call(s)}),document.addEventListener("pointerlockchange",()=>{const C=document.pointerLockElement===s;T&&!C&&b&&(R|=Ge.PAUSE),T=C}),window.addEventListener("mousemove",C=>{document.pointerLockElement===s&&(d+=C.movementX)}),window.addEventListener("mousedown",C=>{if(g)return;const _=C.button===0?Ge.ATTACK:C.button===2?Ge.SPECIAL:0;p|=_,R|=_}),window.addEventListener("mouseup",C=>{p&=~(C.button===0?Ge.ATTACK:C.button===2?Ge.SPECIAL:0)}),window.addEventListener("contextmenu",C=>C.preventDefault()),s.addEventListener("pointerdown",C=>{const _=s.getBoundingClientRect();e.tap((C.clientX-_.left)/_.width*h,(C.clientY-_.top)/_.height*c)});const y=new Jm;window.addEventListener("pointerdown",()=>y.unlock());let P=0,R=0;window.addEventListener("keydown",C=>{y.unlock();const _=Ho[C.code];_&&(P|=_,R|=_,C.preventDefault())}),window.addEventListener("keyup",C=>{const _=Ho[C.code];_&&(P&=~_)}),window.addEventListener("blur",()=>P=0);let A=performance.now();const x=C=>{const _=(C-A)/1e3;A=C,e.set_input(P|R|m.bits|p),e.look(d+m.takeLook()),d=0,R=0,e.update(_);const S=e.memory.buffer,N=new Float32Array(S,e.cmd_ptr(),e.cmd_count()*f),F=new Uint8Array(S,e.text_ptr(),e.text_len()),X=N.length/f;let q=-1,H=-1;for(let V=0;V<X;V++){const G=N[V*f];G===te.FIELD_BEGIN?q=V+1:G===te.FIELD_END&&(H=V)}l||(q=H=-1),a.clearRect(0,0,h,c),o.style.visibility=q>=0?"visible":"hidden",b=q>=0,!b&&document.pointerLockElement===s&&document.exitPointerLock(),q>=0&&l&&(l.render(N,f,q,H,F,u),a.save(),a.beginPath(),a.rect(0,64,h,c-64),a.clip(),t0(a,h,l.playerPx,N,f,q,H,F,u,C/1e3),a.restore());for(let V=0;V<X;V++){const G=N[V*f];q>=0&&V>=q&&V<H&&G!==te.RECT||Ni(a,N,V*f,F,u)}if(y.update(e.bgm_track(),e.bgm_paused()!==0,new Uint8Array(S,e.sfx_ptr(),e.sfx_count())),e.settings()!==r){r=e.settings(),m.setLanguage((r&4)!==0),e.mobile()!==0!==g&&(g=e.mobile()!==0,m.setVisible(g),M());try{localStorage.setItem(t,String(r))}catch{}}requestAnimationFrame(x)};requestAnimationFrame(x)}function i0(){var i;const n=navigator.userAgent,e=((i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)").matches)??!1,t=/Macintosh/.test(n)&&navigator.maxTouchPoints>1;return e||t||/Android|iPhone|iPad|iPod|Mobile/i.test(n)}n0().catch(n=>{document.body.textContent=`Failed to start: ${n}`,document.body.style.color="#fff"});
