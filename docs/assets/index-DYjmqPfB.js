var Pl=Object.defineProperty;var Ll=(n,e,t)=>e in n?Pl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var De=(n,e,t)=>Ll(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const de={RECT:0,TEXT:1,TILE:2,HERO:3,GOBLIN:4,SLIME:5,BIRD:6,SHADOW:7,STONE:8,ROCKET:9,ITEM:10,HEART:11,FX_SLASH:12,FX_FIRE:13,FX_ICE:14,FX_PUFF:15,GRAND_SHOT:16,FX_BEAM:17,FX_EXPLOSION:18,FX_BOLT:19,OUTLINE:20,ICE_BLOCK:21,BUFF_ICON:22,BOSS:23,BOSS_SHOT:24,HAND:25,FX_SPIN:26,FX_DEFEAT:27,COVER:28,STORY_BG:29,FIELD_BEGIN:30,FIELD_END:31},Je={UP:1,DOWN:2,LEFT:4,RIGHT:8,ATTACK:16,SPECIAL:32,ITEM:64,START:128,PAUSE:256},Il={idle_side:[0,0,75,113,37,113],idle_front:[77,0,69,115,34,115],idle_back:[148,0,68,115,34,115],walk_side1:[218,0,94,111,44,111],walk_side2:[314,0,91,111,46,111],walk_side3:[407,0,94,111,44,111],walk_back:[503,0,70,114,34,114],atk_side1:[575,0,71,80,28,80],atk_side2:[648,0,71,80,28,80],atk_side3:[721,0,79,75,27,75],atk_up1:[802,0,61,80,27,80],atk_up2:[865,0,64,104,32,104],atk_up3:[931,0,67,104,28,104],atk_down1:[0,117,73,75,36,75],atk_down2:[75,117,73,75,36,75],atk_down3:[150,117,87,89,43,89],sp_side1:[239,117,74,83,30,83],sp_side2:[315,117,79,83,30,83],sp_side3:[396,117,269,97,30,97],sp_up1:[667,117,95,98,68,98],sp_up2:[764,117,152,104,96,104],sp_down1:[918,117,74,83,36,83],sp_down2:[0,223,74,83,36,83],hurt1:[76,223,61,92,28,92],hurt2:[139,223,60,92,28,92],hurt3:[201,223,55,92,27,92],hurt4:[258,223,66,79,22,79],down:[326,223,88,37,44,37],fx_beam:[416,223,146,47,73,23.5],fx_shatter:[564,223,144,97,72,48.5],fx_crystal:[710,223,99,94,49,94]};function Oi(n,e,t,i=115){const r=new Image;return r.src=`./sprites/${n}`,{sheet:r,frames:e,groupScale:t,body:1.05/i}}const Jt=n=>n.sheet.complete&&n.sheet.naturalWidth>0;function It(n,e,t,i,r,s,a=!1){const[l,o,h,c,f,u]=e.frames[t];n.save(),n.translate(i,r),a&&n.scale(-1,1),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(e.sheet,l,o,h,c,-f*s,-u*s,h*s,c*s),n.restore()}const qi=(n,e)=>n[Math.min(n.length-1,Math.max(0,Math.floor(e*n.length)))];function Bi(n,e,t,i,r,s,a,l,o){var g;if(!Jt(e))return!1;const h=s===2,c=s===2||s===3;let f,u=h;if(l&256)f=o<.2?"hurt4":"down",o>.75&&(n.globalAlpha*=1-(o-.75)/.25);else if(l&128)f=qi(["hurt1","hurt2","hurt3"],o);else if(l&64)c?f=o<.15?"sp_side1":o<.3?"sp_side2":"sp_side3":s===0?f=o<.25?"sp_up1":"sp_up2":f=o<.25?"sp_down1":"sp_down2";else if(l&16)c?f=qi(["atk_side1","atk_side2","atk_side3"],o):s===0?f=qi(["atk_up1","atk_up2","atk_up3"],o):f=qi(["atk_down2","atk_down3","atk_down3"],o);else if(a>0){const E=Math.floor(a*9);c?f=["walk_side1","walk_side2","walk_side3","walk_side2"][E%4]:s===0?f=E%2?"walk_back":"idle_back":(f="idle_front",u=E%2===1),i-=Math.abs(Math.sin(a*14))*r*.04}else f=c?"idle_side":s===0?"idle_back":"idle_front";const m=((g=e.groupScale.find(([E])=>f.startsWith(E)))==null?void 0:g[1])??1;return It(n,e,f,t,i,r*e.body*m,u),!0}const oi=Oi("cold.png",Il,[["atk_",1.4],["sp_",1.35],["hurt",1.2],["down",1.2]]);function Ra(n,e,t,i,r,s,a,l){return Bi(n,oi,e,t,i,r,s,a,l)}function Dl(n,e,t,i,r,s){if(!Jt(oi))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),It(n,oi,"fx_beam",-i*.2+s*i*.4,0,i*1.05/144),n.restore(),!0}function Ul(n,e,t,i,r){if(!Jt(oi))return!1;const s=.3+.7*Math.min(1,r*4),a=e+i/2,l=t+i*.95;return n.save(),n.globalAlpha=r<.7?1:1-(r-.7)/.3,n.translate(a,l),n.scale(1,s),It(n,oi,"fx_crystal",0,0,i*1.05/104),n.restore(),r>.6&&(n.save(),n.globalAlpha=1-(r-.6)/.4,It(n,oi,"fx_shatter",a,t+i*.5,i*.9/142*(.8+(r-.6))),n.restore()),!0}const Nl={idle_side:[0,0,79,120,36,120],idle_front:[81,0,74,117,36,117],idle_back:[157,0,65,114,32,114],walk_side1:[224,0,77,105,39,105],walk_side2:[303,0,73,109,35,109],walk_side3:[378,0,69,110,36,110],walk_back:[449,0,66,110,32,110],atk_side1:[517,0,81,96,34,96],atk_side2:[600,0,139,102,34,102],atk_side3:[741,0,110,91,24,91],atk_up1:[853,0,54,113,26,113],atk_up2:[909,0,47,120,23,120],atk_up3:[958,0,47,110,23,110],atk_down1:[0,122,67,105,33,105],atk_down2:[69,122,62,105,30,105],atk_down3:[133,122,58,116,29,103],sp_side1:[193,122,68,87,28,87],sp_side2:[263,122,66,84,28,84],sp_side3:[331,122,191,87,28,87],sp_up1:[524,122,59,68,29,68],sp_up2:[585,122,55,108,26,108],sp_down1:[642,122,59,77,28,77],sp_down2:[703,122,132,86,65,86],hurt1:[837,122,86,109,42,109],hurt2:[925,122,62,97,28,97],hurt3:[0,240,64,102,33,102],hurt4:[66,240,90,100,43,100],down:[158,240,92,40,45,40],fx_spark:[252,240,48,44,24,22],fx_fireball:[302,240,103,53,51.5,26.5],fx_pillar:[407,240,51,120,24,120],fx_swirl:[460,240,87,77,43.5,38.5],fx_explode:[549,240,97,110,48,110]},li=Oi("fire.png",Nl,[["atk_",1.15],["sp_",1.35],["hurt",1.18],["down",1.18]]);function Ca(n,e,t,i,r,s,a,l){return Bi(n,li,e,t,i,r,s,a,l)}function Fl(n,e,t,i,r,s){if(!Jt(li))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),It(n,li,"fx_fireball",-i*.3+s*i*.6,0,i*1.1/103),n.restore(),!0}function Ol(n,e,t,i,r){if(!Jt(li))return!1;const s=r<.6?1:1-(r-.6)/.4,a=.55+.45*Math.min(1,r*4),l=e+i/2,o=t+i*.92;return n.save(),n.globalAlpha=s,It(n,li,"fx_explode",l,o,i*1.2/110*a),r<.5&&(n.globalAlpha*=1-r*2,It(n,li,"fx_spark",l,o-i*.35,i*.9/48)),n.restore(),!0}const No={};for(const[n,e,t]of[[3,"rocket","#ff7043"],[4,"cold","#4fc3f7"],[5,"wing","#66bb6a"],[6,"thunder","#ffd54f"],[7,"grand","#a1887f"]]){const i=new Image;i.src=`./items/${e}.png`,No[n]=[i,t]}function Bl(n,e,t,i,r){const s=No[r];if(!s||!s[0].complete||s[0].naturalWidth===0)return!1;const[a,l]=s,o=i*.48;return n.save(),n.beginPath(),n.arc(e,t,o,0,Math.PI*2),n.save(),n.clip(),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(a,e-o,t-o,o*2,o*2),n.restore(),n.lineWidth=Math.max(1.5,i*.06),n.strokeStyle=l,n.stroke(),n.restore(),!0}const kl={idle_side:[0,0,82,118,43,118],idle_front:[84,0,79,117,39,117],idle_back:[165,0,65,115,32,115],walk_side1:[232,0,101,107,54,107],walk_side2:[335,0,99,109,48,109],walk_side3:[436,0,83,111,40,111],walk_back:[521,0,64,110,32,110],atk_side1:[587,0,106,89,32,89],atk_side2:[695,0,146,93,36,93],atk_side3:[843,0,131,93,38,93],atk_up1:[0,120,89,121,28,121],atk_up2:[91,120,82,115,24,115],atk_up3:[175,120,48,99,24,99],atk_down1:[225,120,99,99,48,99],atk_down2:[326,120,80,100,41,100],atk_down3:[408,120,61,101,32,101],sp_side1:[471,120,170,82,136,82],sp_side2:[643,120,111,88,36,88],sp_side3:[756,120,110,88,34,88],sp_up1:[868,120,71,70,35,70],sp_up2:[941,120,78,112,27,112],sp_down1:[0,243,88,77,44,77],sp_down2:[90,243,128,97,64,97],hurt1:[220,243,90,102,39,102],hurt2:[312,243,58,98,29,98],hurt3:[372,243,71,100,34,100],hurt4:[445,243,80,92,40,92],down:[527,243,100,34,50,34],fx_shot:[629,243,119,80,59.5,40],fx_wave:[750,243,119,93,59.5,46.5],fx_pillar:[871,243,78,131,42,131],fx_burst:[0,376,84,62,41,62]},Ui=Oi("grand.png",kl,[["atk_",1.13],["sp_",1.15],["hurt",1.08],["down",1.08]]),Fo=[-Math.PI/2,Math.PI/2,Math.PI,0];function Pa(n,e,t,i,r,s,a,l){return Bi(n,Ui,e,t,i,r,s,a,l)}function zl(n,e,t,i,r,s){return Jt(Ui)?(n.save(),n.globalAlpha=s<.6?1:1-(s-.6)/.4,n.translate(e+i/2,t+i/2),n.rotate(Fo[r]??0),It(n,Ui,"fx_wave",-i*.25+s*i*.5,0,i*.95/93),n.restore(),!0):!1}function Hl(n,e,t,i,r,s){return Jt(Ui)?(n.save(),n.translate(e,t+Math.sin(s*30)*i*.03),r!==2&&n.rotate(Fo[r]??0),It(n,Ui,"fx_shot",0,0,i*1.7/119,r!==2),n.restore(),!0):!1}const Gl={idle_side:[0,0,54,84,26,84],idle_front:[56,0,51,82,26,82],idle_back:[109,0,46,80,24,80],walk_side1:[157,0,54,72,27,72],walk_side2:[213,0,51,76,24,76],walk_side3:[266,0,48,76,24,76],walk_back:[316,0,46,76,23,76],atk_side1:[364,0,59,68,24,68],atk_side2:[425,0,95,69,24,69],atk_side3:[522,0,78,67,19,67],atk_up1:[602,0,39,80,18,80],atk_up2:[643,0,36,84,16,84],atk_up3:[681,0,35,79,16,79],atk_down1:[718,0,46,74,23,74],atk_down2:[766,0,44,73,22,73],atk_down3:[812,0,42,78,21,78],sp_side1:[856,0,47,62,21,62],sp_side2:[905,0,46,61,20,61],sp_side3:[0,86,130,62,21,62],sp_up1:[132,86,51,49,24,49],sp_up2:[185,86,61,76,31,76],sp_down1:[248,86,57,56,24,56],sp_down2:[307,86,92,61,44,61],hurt1:[401,86,65,75,30,75],hurt2:[468,86,44,68,20,68],hurt3:[514,86,45,72,24,72],hurt4:[561,86,63,70,33,70],down:[626,86,69,30,33,30],fx_spark:[697,86,45,43,22.5,21.5],fx_ball:[744,86,74,40,37,20],fx_pillar:[820,86,45,85,22,85]},ci=Oi("thunder.png",Gl,[["atk_",1.15],["sp_",1.35],["hurt",1.18],["down",1.18]],80);function La(n,e,t,i,r,s,a,l){return Bi(n,ci,e,t,i,r,s,a,l)}function Vl(n,e,t,i,r,s){if(!Jt(ci))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.7?1:1-(s-.7)/.3,n.translate(e+i/2,t+i/2),n.rotate(a),It(n,ci,"fx_ball",-i*.3+s*i*.6,0,i*1.1/72),n.restore(),!0}function Wl(n,e,t,i,r){return Jt(ci)?(n.save(),n.globalAlpha=r<.5?1:1-(r-.5)/.5,n.translate(e,t-4),n.scale(1,.4+.6*Math.min(1,r*5)),It(n,ci,"fx_pillar",0,0,i*1.8/85),n.restore(),r<.6&&(n.save(),n.globalAlpha=1-r/.6,It(n,ci,"fx_spark",e,t-14,i*1/43*(.7+r)),n.restore()),!0):!1}const Xl={idle_side:[0,0,88,119,40,119],idle_front:[90,0,88,122,44,122],idle_back:[180,0,88,122,43,122],walk_side1:[270,0,71,107,36,107],walk_side2:[343,0,75,108,37,108],walk_side3:[420,0,74,107,38,107],walk_back:[496,0,76,108,37,108],atk_side1:[574,0,64,69,25,69],atk_side2:[640,0,66,70,25,70],atk_side3:[708,0,60,60,20,60],atk_up1:[770,0,59,74,26,74],atk_up2:[831,0,64,98,40,98],atk_up3:[897,0,66,93,26,93],atk_down1:[965,0,55,74,29,74],atk_down2:[0,124,54,72,26,72],atk_down3:[56,124,54,72,26,72],sp_side1:[112,124,67,84,28,84],sp_side2:[181,124,97,102,50,102],sp_side3:[280,124,100,85,73,85],sp_up1:[382,124,68,86,12,86],sp_up2:[452,124,79,113,44,113],sp_down1:[533,124,70,82,28,82],sp_down2:[605,124,106,92,70,92],hurt1:[713,124,63,95,32,95],hurt2:[778,124,55,91,30,91],hurt3:[835,124,54,80,28,80],hurt4:[891,124,67,73,31,73],down:[0,239,73,46,36,46],fx_blade:[75,239,84,86,42,43]},ms=Oi("wing.png",Xl,[["atk_",1.4],["sp_",1.35],["hurt",1.25],["down",1.25]]);function Ia(n,e,t,i,r,s,a,l){return Bi(n,ms,e,t,i,r,s,a,l)}function ql(n,e,t,i,r,s){if(!Jt(ms))return!1;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;return n.save(),n.globalAlpha=s<.6?1:1-(s-.6)/.4,n.translate(e+i/2,t+i/2),n.rotate(a),It(n,ms,"fx_blade",-i*.2+s*i*.4,0,i*.95/86),n.restore(),!0}const Yl={chainsaw:{idle_front:[0,0,63,82,21.2,82],idle_back:[65,0,63,82,21.1,82],idle_side:[130,0,63,81,21.9,81],walk1:[195,0,45,78,24.2,78],walk2:[242,0,47,77,24.6,77],walk3:[291,0,42,76,21.2,76],cast:[335,0,49,62,19.4,62],spin:[386,0,115,66,53.9,66]},lady:{idle_front:[0,0,43,73,21.4,73],idle_back:[45,0,49,73,22.6,73],idle_side:[96,0,40,72,20.2,72],walk1:[138,0,40,72,20.2,72],walk2:[180,0,40,73,18.6,73],walk3:[222,0,38,72,18.1,72],cast:[262,0,63,61,24.3,61]},tacos:{idle_front:[0,0,55,76,26.9,76],idle_back:[57,0,54,73,26.5,73],idle_side:[113,0,48,74,25,74],walk1:[163,0,48,74,25,74],walk2:[213,0,45,74,21,74],walk3:[260,0,46,74,23.4,74],cast:[308,0,117,61,20.5,61]},trump:{idle_front:[0,0,43,70,19.5,70],idle_back:[45,0,48,71,23,71],idle_side:[95,0,43,75,21.2,75],walk1:[140,0,43,75,21.2,75],walk2:[185,0,41,75,20.3,75],walk3:[228,0,41,74,19.7,74],cast:[271,0,80,62,25.3,62]},zombie:{idle_front:[0,0,48,71,24.1,71],idle_back:[50,0,50,60,23.9,60],idle_side:[102,0,42,72,21.1,72],walk1:[146,0,42,72,21.1,72],walk2:[190,0,44,73,21.6,73],walk3:[236,0,43,75,16.8,75],cast:[281,0,65,64,25.6,64]}},Oo=["chainsaw","lady","tacos","trump","zombie"],Bo={};for(const n of Oo){const e=new Image;e.src=`./sprites/boss_${n}.png`,Bo[n]=e}const Kl=1.15;function $l(n,e,t,i,r,s,a,l,o){const h=Oo[r];if(!h)return!1;const c=Bo[h];if(!c.complete||c.naturalWidth===0)return!1;const f=Yl[h],u=s===2||s===3;let m;l&8&&f.spin?m="spin":l&4?m="cast":a>0&&u?m=["walk1","walk2","walk3","walk2"][Math.floor(a*7)%4]:m=u?"idle_side":s===0?"idle_back":"idle_front";const g=f[m]??f.idle_front;a>0&&!u&&(t-=Math.abs(Math.sin(a*9))*i*.05);const E=i*Kl/f.idle_front[3],[d,p,y,T,b,R]=g;return n.save(),n.translate(e,t),s===2&&n.scale(-1,1),n.imageSmoothingEnabled=!1,n.drawImage(c,d,p,y,T,-b*E,-R*E,y*E,T*E),n.restore(),!0}const it=Math.PI*2;function Zl(n,e,t,i,r,s,a,l,o,h){n.globalAlpha*=h,l&1&&(n.filter="brightness(2.2)"),l&16&&(n.save(),n.fillStyle="#4e342e",n.beginPath(),n.ellipse(e,t,i*.42,i*.12,0,0,it),n.fill(),n.restore(),n.beginPath(),n.rect(e-i,t-i*2,i*2,i*2),n.clip(),t+=i*1.1*o);const c=a>0?Math.abs(Math.sin(a*8))*i*.03:0;if($l(n,e,t-c,i,r,s,a,l))return;const f=i/72,u=t-c,m=s===2?-1:s===3?1:0;switch(r){case 0:jl(n,e,u,f,s,m,a,l,o);break;case 1:Jl(n,e,u,f,s,m,a,l,o);break;case 2:Ql(n,e,u,f,s,m,a,l,o);break;case 3:ec(n,e,u,f,s,m,a,l);break;default:tc(n,e,u,f,s,m,a);break}}function Cr(n,e,t,i,r,s){const a=r>0?Math.sin(r*10)*4*i:0;n.fillStyle=s,n.fillRect(e-10*i,t-18*i+Math.max(0,a),8*i,18*i-Math.max(0,a)),n.fillRect(e+2*i,t-18*i+Math.max(0,-a),8*i,18*i-Math.max(0,-a))}function ki(n,e,t,i,r,s,a=!1){a&&(n.shadowColor=s,n.shadowBlur=8),n.fillStyle=s,n.beginPath(),n.arc(e-5*i+r*3*i,t,2.6*i,0,it),n.arc(e+5*i+r*3*i,t,2.6*i,0,it),n.fill(),n.shadowBlur=0}function jl(n,e,t,i,r,s,a,l,o){const h=(l&8)!==0,c=(l&4)!==0;let f=r===0?-Math.PI/2:r===1?Math.PI/2:r===2?Math.PI:0;h?f+=o*it:c&&(f+=Math.PI*.8*Math.min(1,o*1.5));const u=()=>{n.save(),n.translate(e,t-34*i),n.rotate(f),n.fillStyle="#3e2723",n.fillRect(4*i,-6*i,14*i,12*i),n.fillStyle="#9e9e9e",n.fillRect(16*i,-5*i,30*i,10*i),n.fillStyle="#c62828";const g=a*60%6;for(let E=0;E<6;E++)n.fillRect(16*i+(E*5+g)%30*i,-7*i,3*i,2.5*i),n.fillRect(16*i+(E*5+2.5+g)%30*i,4.5*i,3*i,2.5*i);n.restore()};r===0&&!h&&u(),Cr(n,e,t,i,a,"#212121"),n.fillStyle="#37474f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-15*i,t-16*i),n.lineTo(e-13*i,t-48*i),n.lineTo(e+13*i,t-48*i),n.lineTo(e+15*i,t-16*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#b71c1c",n.fillRect(e-13*i,t-30*i,26*i,3*i);const m=t-57*i;if(n.fillStyle="#cfd8dc",n.beginPath(),n.arc(e,m,11*i,0,it),n.fill(),n.stroke(),r!==0){n.fillStyle="#212121",n.beginPath(),n.arc(e-4*i+s*3*i,m-1*i,3.2*i,0,it),n.arc(e+4*i+s*3*i,m-1*i,3.2*i,0,it),n.fill(),ki(n,e,m-1*i,i*.5,s*2,"#ff1744",!0),n.fillStyle="#212121";for(let g=-2;g<=2;g++)n.fillRect(e+g*2.5*i+s*3*i-1*i,m+5*i,1.5*i,3*i)}(r!==0||h)&&u()}function Jl(n,e,t,i,r,s,a,l,o){const h=(l&4)!==0;if(h){const f=n.createRadialGradient(e,t-30*i,4*i,e,t-30*i,50*i);f.addColorStop(0,`rgba(149,117,205,${.6*o})`),f.addColorStop(1,"rgba(149,117,205,0)"),n.fillStyle=f,n.beginPath(),n.arc(e,t-30*i,50*i,0,it),n.fill()}const c=Math.sin(a*4)*2*i;if(n.fillStyle="#1a1a24",n.strokeStyle="#4a3f6b",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-20*i+c,t),n.quadraticCurveTo(e-16*i,t-40*i,e-12*i,t-52*i),n.quadraticCurveTo(e,t-74*i,e+12*i,t-52*i),n.quadraticCurveTo(e+16*i,t-40*i,e+20*i+c,t),n.closePath(),n.fill(),n.stroke(),r!==0&&(n.fillStyle="#000",n.beginPath(),n.ellipse(e+s*3*i,t-52*i,8*i,9*i,0,0,it),n.fill(),ki(n,e+s*1*i,t-53*i,i*.6,s,"#ffffff",!0)),h&&r!==0){n.fillStyle="#cfd8dc";const f=e+(s||.6)*20*i;n.beginPath(),n.arc(f,t-36*i,3.5*i,0,it),n.fill(),n.fillStyle=`rgba(206,147,216,${o})`,n.beginPath(),n.arc(f+(s||.6)*6*i,t-36*i,6*i*o,0,it),n.fill()}}function Ql(n,e,t,i,r,s,a,l,o){const h=(l&4)!==0;Cr(n,e,t,i,a,"#3e2723"),n.fillStyle="#5d4037",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.roundRect(e-14*i,t-46*i,28*i,30*i,6*i),n.fill(),n.stroke();const c=t-56*i;n.strokeStyle="#8d6e63",n.lineWidth=3.5*i,n.lineCap="round";for(let f=0;f<6;f++){const u=(f-2.5)*4.5*i,m=h?o*14*i:0;n.beginPath(),n.moveTo(e+u,c+4*i),n.quadraticCurveTo(e+u*1.8+Math.sin(a*5+f)*4*i,c+14*i-m,e+u*2.2,c+24*i-m*2),n.stroke()}n.fillStyle="#a1887f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.ellipse(e,c-4*i,14*i,13*i,0,0,it),n.fill(),n.stroke(),r!==0&&(ki(n,e,c-3*i,i,s,"#c6ff00",!0),n.fillStyle="#3e2723",n.beginPath(),n.ellipse(e+s*3*i,c+5*i,5*i,3*i,0,0,it),n.fill())}function ec(n,e,t,i,r,s,a,l,o){const h=(l&4)!==0;n.fillStyle="#b71c1c",n.beginPath(),n.moveTo(e-14*i,t-46*i),n.lineTo(e-22*i-Math.sin(a*6)*2*i,t-4*i),n.lineTo(e+22*i+Math.sin(a*6)*2*i,t-4*i),n.lineTo(e+14*i,t-46*i),n.closePath(),n.fill(),Cr(n,e,t,i,a,"#111"),n.fillStyle="#1c1c1c",n.strokeStyle="rgba(255,255,255,0.15)",n.lineWidth=2*i,n.beginPath(),n.roundRect(e-13*i,t-48*i,26*i,32*i,4*i),n.fill(),n.stroke(),n.fillStyle="#fafafa",n.beginPath(),n.moveTo(e-4*i,t-48*i),n.lineTo(e,t-38*i),n.lineTo(e+4*i,t-48*i),n.fill();const c=t-57*i;if(n.fillStyle="#eceff1",n.beginPath(),n.arc(e,c,10*i,0,it),n.fill(),r!==0&&(ki(n,e,c-1*i,i*.8,s,"#ff1744",!0),n.strokeStyle="#b71c1c",n.lineWidth=1.5*i,n.beginPath(),n.arc(e+s*3*i,c+3*i,4*i,.2,Math.PI-.2),n.stroke()),n.fillStyle="#111",n.fillRect(e-16*i,c-9*i,32*i,3.5*i),n.fillRect(e-10*i,c-26*i,20*i,18*i),n.fillStyle="#b71c1c",n.fillRect(e-10*i,c-13*i,20*i,3*i),h&&r!==0){const f=e+(s||.7)*18*i;for(let u=-1;u<=1;u++)n.save(),n.translate(f,t-34*i),n.rotate(u*.35+(s<0?Math.PI:0)*0),n.fillStyle="#fff",n.fillRect(-3.5*i,-11*i,7*i,10*i),n.fillStyle=u===0?"#111":"#d50000",n.fillRect(-1*i,-8*i,2*i,2*i),n.restore()}}function tc(n,e,t,i,r,s,a,l){Cr(n,e,t,i,a,"#33691e");const o=4*i;if(n.fillStyle="#558b2f",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.moveTo(e-14*i,t-16*i),n.lineTo(e-12*i+o,t-46*i),n.lineTo(e+12*i+o,t-46*i),n.lineTo(e+14*i,t-16*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#5d4037",n.beginPath(),n.moveTo(e-13*i,t-30*i),n.lineTo(e+13*i,t-30*i),n.lineTo(e+10*i,t-18*i),n.lineTo(e+4*i,t-24*i),n.lineTo(e-2*i,t-16*i),n.lineTo(e-8*i,t-22*i),n.lineTo(e-13*i,t-16*i),n.closePath(),n.fill(),r!==0){n.strokeStyle="#7cb342",n.lineWidth=5*i,n.lineCap="round";const c=(s||.4)*22*i,f=Math.sin(a*6)*3*i;n.beginPath(),n.moveTo(e+o,t-40*i),n.lineTo(e+o+c,t-38*i+f),n.stroke()}const h=t-54*i;n.fillStyle="#7cb342",n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=2*i,n.beginPath(),n.arc(e+o,h,10*i,0,it),n.fill(),n.stroke(),r!==0&&ki(n,e+o,h-1*i,i*.7,s,"#ffeb3b",!0)}function nc(n,e,t,i,r,s,a,l,o){if(r===0){const f=(e+l)/2+Math.sin(a*20)*10,u=(t+o)/2+Math.cos(a*20)*10;n.lineCap="round",n.strokeStyle="#4e342e",n.lineWidth=10,n.beginPath(),n.moveTo(l,o),n.quadraticCurveTo(f,u,e,t),n.stroke(),n.strokeStyle="#8d6e63",n.lineWidth=6,n.stroke(),n.fillStyle="#f8bbd0";for(let m=1;m<=4;m++){const g=m/5,E=(1-g)*(1-g)*l+2*(1-g)*g*f+g*g*e,d=(1-g)*(1-g)*o+2*(1-g)*g*u+g*g*t;n.beginPath(),n.arc(E,d,2,0,it),n.fill()}return}n.translate(e,t),n.rotate(s+a*14);const h=i*.5,c=i*.7;n.shadowColor="#ff1744",n.shadowBlur=8,n.fillStyle="#fafafa",n.beginPath(),n.roundRect(-h/2,-c/2,h,c,3),n.fill(),n.shadowBlur=0,n.strokeStyle="#b71c1c",n.lineWidth=1.5,n.stroke(),n.fillStyle="#d50000",n.beginPath(),n.moveTo(0,-c*.22),n.lineTo(h*.22,0),n.lineTo(0,c*.22),n.lineTo(-h*.22,0),n.closePath(),n.fill()}function ic(n,e,t,i,r,s){const a=t-i*.15;if(r===0){const h=.5+.5*Math.sin(s*30);n.fillStyle=`rgba(118,255,3,${.15+.35*s*h})`,n.beginPath(),n.ellipse(e,a,i*.42*(.5+.5*s),i*.16*(.5+.5*s),0,0,it),n.fill(),n.strokeStyle=`rgba(30,20,10,${.4+.5*s})`,n.lineWidth=2,n.beginPath();for(let c=0;c<4;c++){const f=c/4*it+.3;n.moveTo(e,a),n.lineTo(e+Math.cos(f)*i*.35*s,a+Math.sin(f)*i*.12*s)}n.stroke();return}const l=Math.sin(Math.min(1,s)*Math.PI),o=i*.75*l;n.fillStyle="#3e2723",n.beginPath(),n.ellipse(e,a,i*.38,i*.13,0,0,it),n.fill(),n.save(),n.beginPath(),n.rect(e-i,a-i*2,i*2,i*2),n.clip(),n.fillStyle="#7cb342",n.strokeStyle="#33691e",n.lineWidth=2,n.beginPath(),n.roundRect(e-i*.09,a-o,i*.18,o+4,4),n.fill(),n.stroke();for(let h=-2;h<=2;h++)n.beginPath(),n.roundRect(e+h*i*.055-i*.025,a-o-i*.14+Math.abs(h)*3,i*.05,i*.16,2),n.fill();if(n.restore(),s<.4){n.fillStyle=`rgba(121,85,72,${1-s/.4})`;for(let h=0;h<6;h++){const c=h/6*Math.PI+Math.PI;n.beginPath(),n.arc(e+Math.cos(c)*i*.4*(s*2.5),a+Math.sin(c)*i*.3*(s*2.5),3,0,it),n.fill()}}}function rc(n,e,t,i,r,s){if(r===0){n.fillStyle=`rgba(229,57,53,${.12+.18*s})`,n.beginPath(),n.ellipse(e,t,i,i*.75,0,0,it),n.fill(),n.setLineDash([8,6]),n.strokeStyle=`rgba(255,82,82,${.5+.5*Math.abs(Math.sin(s*20))})`,n.lineWidth=3,n.stroke(),n.setLineDash([]);return}const a=s*it;n.globalAlpha=1-s*.5,n.strokeStyle="rgba(255,23,68,0.85)",n.lineWidth=10,n.lineCap="round",n.beginPath(),n.ellipse(e,t,i*.9,i*.68,0,a-1.6,a),n.stroke(),n.strokeStyle="#fff",n.lineWidth=3,n.stroke(),n.fillStyle="#ffab00";for(let l=0;l<5;l++){const o=a-l*.25;n.beginPath(),n.arc(e+Math.cos(o)*i*.9,t+Math.sin(o)*i*.68,3-l*.4,0,it),n.fill()}}function sc(n,e,t,i,r){const s=i/48;n.strokeStyle="#6d4c41",n.lineWidth=5*s,n.lineCap="round";for(let a=0;a<3;a++){const l=t-(10+a*11)*s,o=Math.sin(r*8+a)*2*s;n.beginPath(),n.ellipse(e,l+o,15*s,5*s,.15*(a-1),0,it),n.stroke()}n.strokeStyle="#a1887f",n.lineWidth=2*s;for(let a=0;a<3;a++){const l=t-(10+a*11)*s;n.beginPath(),n.ellipse(e,l,15*s,5*s,.15*(a-1),Math.PI*.1,Math.PI*.9),n.stroke()}}const ac='"Hiragino Kaku Gothic ProN", "Meiryo", "Yu Gothic", sans-serif',ve=Math.PI*2,Li=n=>"#"+(n|0).toString(16).padStart(6,"0"),Tr=[["#e53935","#ffb300"],["#29b6f6","#e1f5fe"],["#66bb6a","#ffffff"],["#fdd835","#7b1fa2"],["#8d6e63","#4e342e"]],ra=["#43a047","#e53935","#1e88e5","#fbc02d"],sa=["#1b5e20","#8e1b1b","#0d47a1","#a07800"];function _s(n,e,t,i,r){{const s=e[t],a=e[t+1],l=e[t+2],o=e[t+3],h=e[t+4],c=e[t+5],f=e[t+6],u=e[t+7],m=e[t+8],g=e[t+9];switch(n.save(),s){case de.RECT:n.globalAlpha=Math.max(0,Math.min(1,f)),n.fillStyle=Li(c),n.fillRect(a,l,o,h);break;case de.OUTLINE:n.strokeStyle=Li(c),n.lineWidth=f,n.strokeRect(a+f/2,l+f/2,o-f,h-f);break;case de.TEXT:{const E=r.decode(i.subarray(u,u+m));n.globalAlpha=Math.max(0,Math.min(1,g)),n.font=`bold ${o}px ${ac}`,n.fillStyle=Li(c),n.textAlign=f===1?"center":f===2?"right":"left",n.fillText(E,a,l);break}case de.TILE:gs(n,a,l,o,c,f,u,m,g);break;case de.HERO:pc(n,a,l,o,c,f,u,m,g,h),m&512&&(n.restore(),n.save(),sc(n,a,l-g,o,performance.now()/1e3));break;case de.BOSS:Zl(n,a,l,o,c,f,u,m,h,g);break;case de.BOSS_SHOT:nc(n,a,l,o,c,f,u,m,g);break;case de.HAND:ic(n,a,l,o,c,f);break;case de.FX_SPIN:rc(n,a,l,o,c,f);break;case de.STORY_BG:oc(n,a,l,o,h,c,f,u,m);break;case de.COVER:lc(n,a,l,o,h,c,f);break;case de.FX_DEFEAT:cc(n,a,l,o,c,u);break;case de.GOBLIN:mc(n,a,l,o,c,f,u,m);break;case de.SLIME:_c(n,a,l,o,c,f,u,m);break;case de.BIRD:gc(n,a,l,o,c,f,u,m);break;case de.SHADOW:n.globalAlpha=c,n.fillStyle="#000",n.beginPath(),n.ellipse(a,l,Math.max(1,o),Math.max(1,o*.38),0,0,ve),n.fill();break;case de.STONE:vc(n,a,l,o,c,f);break;case de.ROCKET:Wo(n,a,l,o,c,f);break;case de.ITEM:Ua(n,a,l,o,c,f);break;case de.BUFF_ICON:n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.arc(a,l,o*.6,0,ve),n.fill(),Ua(n,a,l,o,c,0);break;case de.HEART:Xo(n,a,l,o,c>=1?"#ff3b5c":"#3a3f55",c>=1?"#ffd1dc":null);break;case de.FX_SLASH:{const[E,d]=g>0?[m,g]:[0,1];if(E>0||d<1){const p=E*o,y=d*o;n.beginPath(),f===3?n.rect(a+p,l,y-p,o):f===2?n.rect(a+o-y,l,y-p,o):f===1?n.rect(a,l+p,o,y-p):n.rect(a,l+o-y,o,y-p),n.clip()}Sc(n,a,l,o,c,f,u);break}case de.FX_FIRE:Ec(n,a,l,o,u);break;case de.FX_ICE:Tc(n,a,l,o,u);break;case de.FX_PUFF:bc(n,a,l,o,c,u);break;case de.GRAND_SHOT:yc(n,a,l,o,c,f);break;case de.FX_BEAM:Ac(n,a,l,o,h,u);break;case de.FX_EXPLOSION:wc(n,a,l,o,u);break;case de.FX_BOLT:xc(n,a,l,o,u);break;case de.ICE_BLOCK:n.globalAlpha=.25+.35*c,n.fillStyle="#b3e5fc",fc(n,a-o/2,l-o*.95,o,o*.95,6),n.fill(),n.globalAlpha=.9*c,n.strokeStyle="#e1f5fe",n.lineWidth=2,n.stroke(),n.beginPath(),n.moveTo(a-o*.3,l-o*.8),n.lineTo(a-o*.1,l-o*.6),n.stroke();break}n.restore()}}const ko=[];for(let n=1;n<=5;n++){const e=new Image;e.src=`./story/${n}.jpg`,ko[n]=e}function oc(n,e,t,i,r,s,a,l,o){const h=ko[s];if(!h||!h.complete||h.naturalWidth===0)return;const c=h.naturalWidth,f=h.naturalHeight,u=Math.max(i/c,r/f)*l,m=i/u,g=r/u,E=(c-m)/2,d=Math.max(0,Math.min(f-g,f*o-g/2));n.globalAlpha=Math.max(0,Math.min(1,a)),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(h,E,d,m,g,e,t,i,r)}const zo=[];for(let n=1;n<=6;n++){const e=new Image;e.src=`./covers/world${n}.jpg`,zo[n]=e}function lc(n,e,t,i,r,s,a){const l=zo[s];!l||!l.complete||l.naturalWidth===0||(n.globalAlpha=Math.max(0,Math.min(1,a)),n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(l,e,t,i,r))}function cc(n,e,t,i,r,s){const a=Li(r);if(s<.25){const l=s/.25;n.globalAlpha=1-l;const o=n.createRadialGradient(e,t,0,e,t,i*.45);o.addColorStop(0,"#ffffff"),o.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=o,n.beginPath(),n.arc(e,t,i*.45,0,ve),n.fill()}n.globalAlpha=Math.max(0,1-s),n.strokeStyle=a,n.lineWidth=4*(1-s)+1,n.beginPath(),n.arc(e,t,i*.15+i*.4*Math.sqrt(s),0,ve),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.beginPath(),n.arc(e,t,i*.1+i*.3*Math.sqrt(s),0,ve),n.stroke();for(let l=0;l<10;l++){const o=l/10*ve+.3,h=i*(.12+.45*s)*(l%2?1:.75),c=e+Math.cos(o)*h,f=t+Math.sin(o)*h+i*.25*s*s,u=(1-s)*(l%2?3.5:2.5);n.fillStyle=l%3===0?"#ffffff":a,n.beginPath(),n.arc(c,f,Math.max(.5,u),0,ve),n.fill()}n.fillStyle="#fff59d";for(let l=0;l<4;l++){const o=l/4*ve+s*3,h=i*.32*Math.sqrt(s);hc(n,e+Math.cos(o)*h,t+Math.sin(o)*h-i*.1*s,i*.09*(1-s*.6),s*4)}}function hc(n,e,t,i,r){n.beginPath();for(let s=0;s<10;s++){const a=r+s/10*ve-Math.PI/2,l=s%2?i*.45:i;s===0?n.moveTo(e+Math.cos(a)*l,t+Math.sin(a)*l):n.lineTo(e+Math.cos(a)*l,t+Math.sin(a)*l)}n.closePath(),n.fill()}function fc(n,e,t,i,r,s){n.beginPath(),n.roundRect(e,t,i,r,s)}function Vt(n){return n=n^61^n>>>16,n=n+(n<<3),n=n^n>>>4,n=Math.imul(n,668265261),n=n^n>>>15,(n>>>0)/4294967296}const uc=["#5da34c","#58a048","#62a851","#5a9e4a"],Ho={base:uc,tuft:"rgba(30,80,20,0.45)",flower:"#fff59d"},dc={1:{base:["#b0563f","#a9503a","#b75e46","#a44c37"],tuft:"rgba(90,20,10,0.5)",flower:"#ffcc80"},2:{base:["#e9eef3","#e2e9ef","#eef3f7","#dee6ed"],tuft:"rgba(120,150,180,0.45)",flower:"#b3e5fc"},3:{base:["#6fb4e6","#69aee1","#76baea","#64a9dd"],tuft:"rgba(255,255,255,0.75)",flower:"#ffffff",clouds:!0},4:{base:["#d7c056","#d0b94f","#dcc65d","#cab44b"],tuft:"rgba(110,90,20,0.45)",flower:"#fffde7"},5:Ho,6:{base:["#2b2b34","#27272f","#30303a","#24242c"],tuft:"rgba(140,140,170,0.3)",flower:"#7e57c2"}};function Or(n,e,t,i,r,s=0){const a=dc[s]??Ho;if(n.fillStyle=a.base[r&3],n.fillRect(e,t,i+.5,i+.5),a.clouds){n.fillStyle=a.tuft;const l=e+8+Vt(r*7)*(i-20),o=t+10+Vt(r*13)*(i-22);n.beginPath(),n.ellipse(l,o,7,3.5,0,0,ve),n.ellipse(l+6,o-2,5,3.5,0,0,ve),n.ellipse(l+11,o,6,3,0,0,ve),n.fill();return}n.strokeStyle=a.tuft,n.lineWidth=1.5;for(let l=0;l<3;l++){const o=e+Vt(r*7+l)*(i-10)+5,h=t+Vt(r*13+l*3)*(i-10)+8;n.beginPath(),n.moveTo(o-3,h),n.lineTo(o-1,h-5),n.moveTo(o,h),n.lineTo(o+1,h-6),n.moveTo(o+3,h),n.lineTo(o+4,h-4),n.stroke()}(r&31)===5&&(n.fillStyle=a.flower,n.beginPath(),n.arc(e+i*.7,t+i*.3,3,0,ve),n.fill())}function gs(n,e,t,i,r,s,a,l,o=0){switch(r){case 0:Or(n,e,t,i,s,o);break;case 1:{Or(n,e,t,i,s,o),n.fillStyle="rgba(0,0,0,0.25)",n.beginPath(),n.ellipse(e+i/2,t+i*.82,i*.42,i*.14,0,0,ve),n.fill(),n.fillStyle="#8a8d99",n.beginPath(),n.moveTo(e+i*.1,t+i*.8),n.lineTo(e+i*.16,t+i*.35),n.lineTo(e+i*.42,t+i*.12),n.lineTo(e+i*.75,t+i*.18),n.lineTo(e+i*.92,t+i*.5),n.lineTo(e+i*.88,t+i*.82),n.closePath(),n.fill(),n.fillStyle="#b4b7c2",n.beginPath(),n.moveTo(e+i*.2,t+i*.4),n.lineTo(e+i*.43,t+i*.2),n.lineTo(e+i*.68,t+i*.25),n.lineTo(e+i*.5,t+i*.45),n.closePath(),n.fill(),n.strokeStyle="#5c5f6b",n.lineWidth=2,n.beginPath(),n.moveTo(e+i*.55,t+i*.55),n.lineTo(e+i*.7,t+i*.7),n.stroke();break}case 2:{n.fillStyle="#bfe6f5",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#a3d6ec",n.fillRect(e,t+i*.55,i+.5,i*.45+.5),n.strokeStyle="rgba(255,255,255,0.85)",n.lineWidth=2,n.beginPath();const h=Vt(s)*i*.3;n.moveTo(e+i*.15+h,t+i*.3),n.lineTo(e+i*.4+h,t+i*.15),n.moveTo(e+i*.3+h,t+i*.5),n.lineTo(e+i*.65+h,t+i*.28),n.stroke(),n.strokeStyle="rgba(90,160,200,0.5)",n.lineWidth=1,n.strokeRect(e+.5,t+.5,i-1,i-1);const c=(Math.sin(a*3+s)+1)/2;n.fillStyle=`rgba(255,255,255,${.3+.6*c})`,n.beginPath(),n.arc(e+i*(.2+Vt(s*5)*.6),t+i*(.2+Vt(s*9)*.6),1.5+c,0,ve),n.fill();break}case 3:{n.fillStyle="#7a5a3a",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#5f4329";for(let h=0;h<4;h++)n.beginPath(),n.ellipse(e+Vt(s+h*11)*i,t+Vt(s*3+h)*i,5,3,0,0,ve),n.fill();n.fillStyle="rgba(255,255,255,0.12)",n.beginPath(),n.ellipse(e+i*.4,t+i*.4,6,2,0,0,ve),n.fill();break}case 4:{n.fillStyle="#2c3045",n.fillRect(e,t,i+.5,i+.5),n.beginPath(),n.rect(e,t,i+.5,i+.5),n.clip(),n.strokeStyle="#1c1f2e",n.lineWidth=2;const h=(s&1)*i*.25;for(let c=0;c<3;c++){const f=t+c*i/3;n.strokeRect(e+(c&1?h:0)-i/2,f,i/2,i/3),n.strokeRect(e+(c&1?h:0),f,i/2,i/3),n.strokeRect(e+(c&1?h:0)+i/2,f,i/2,i/3)}n.fillStyle="rgba(255,255,255,0.05)",n.fillRect(e,t,i,3);break}case 5:{n.fillStyle="#5a1a0e",n.fillRect(e,t,i+.5,i+.5),n.fillStyle="#b8360f",n.beginPath();for(let h=0;h<=6;h++){const c=e+h/6*i,f=t+i*(.35+.12*Math.sin(a*1.5+s+h));h===0?n.moveTo(c,f):n.lineTo(c,f)}n.lineTo(e+i,t+i),n.lineTo(e,t+i),n.closePath(),n.fill(),n.fillStyle="#ff7a1a";for(let h=0;h<3;h++){const c=(a*.8+Vt(s+h*7))%1;n.globalAlpha=1-c,n.beginPath(),n.arc(e+i*(.2+Vt(s*3+h)*.6),t+i*(.75-c*.3),2+c*3,0,ve),n.fill()}if(n.globalAlpha=1,l>0){const h=n.createRadialGradient(e+i/2,t+i/2,2,e+i/2,t+i/2,i*.75);h.addColorStop(0,`rgba(255,245,160,${.95*l})`),h.addColorStop(.6,`rgba(255,150,30,${.75*l})`),h.addColorStop(1,`rgba(255,80,0,${.35*l})`),n.fillStyle=h,n.fillRect(e,t,i+.5,i+.5)}break}case 6:{Or(n,e,t,i,s,o);const h=n.createRadialGradient(e+i/2,t+i*.55,2,e+i/2,t+i*.55,i*.42);h.addColorStop(0,"#000000"),h.addColorStop(.7,"#1a120c"),h.addColorStop(1,"#4e3523"),n.fillStyle=h,n.beginPath(),n.ellipse(e+i/2,t+i*.55,i*.42,i*.34,0,0,ve),n.fill(),n.strokeStyle="#6d4c32",n.lineWidth=3,n.stroke();break}}}function pc(n,e,t,i,r,s,a,l,o,h){if(l&256){r===0?Ca(n,e,t,i,s,0,l,h):r===1?Ra(n,e,t,i,s,0,l,h):r===2?Ia(n,e,t,i,s,0,l,h):r===3?La(n,e,t,i,s,0,l,h):r===4&&Pa(n,e,t,i,s,0,l,h);return}const c=i/48,[f,u]=Tr[r]??Tr[0];l&32&&(n.beginPath(),n.rect(e-i,t-i*2,i*2,i*2-8*c),n.clip(),t+=20*c);const m=t-o,g=a>0?Math.sin(a*14)*3*c:0,E=a,d=[];if(l&1&&d.push("64,170,255"),l&2&&d.push("80,230,100"),l&4&&d.push("255,225,40"),d.length>0){const R=Go(E),x=d[Math.floor(R*2)%d.length],A=.5+.5*Math.sin(R*8),C=m-24*c,z=n.createRadialGradient(e,C,4*c,e,C,34*c);z.addColorStop(0,`rgba(${x},${.55+.3*A})`),z.addColorStop(1,`rgba(${x},0)`),n.fillStyle=z,n.beginPath(),n.arc(e,C,34*c,0,ve),n.fill(),n.shadowColor=`rgb(${x})`,n.shadowBlur=12+10*A}if(r===0&&Ca(n,e,m,i,s,a,l,h)||r===1&&Ra(n,e,m,i,s,a,l,h)||r===2&&Ia(n,e,m,i,s,a,l,h)||r===3&&La(n,e,m,i,s,a,l,h)||r===4&&Pa(n,e,m,i,s,a,l,h))return;r===2&&Vo(n,e,m-26*c,c,"#ffffff","#c8e6c9",E);const p=s===2?-1:s===3?1:0,y=(l&16)!==0,T=()=>{n.fillStyle="#546e7a",n.strokeStyle="#263238",n.lineWidth=1.5*c;const R=e,x=m-20*c;let A=0,C=0,z=0,_=0;const M=(y?20:16)*c;s===0?[A,C,z,_]=[R+6*c,x-M,7*c,M]:s===1?[A,C,z,_]=[R+6*c,x,7*c,M]:s===2?[A,C,z,_]=[R-M-2*c,x-3*c,M,7*c]:[A,C,z,_]=[R+2*c,x-3*c,M,7*c],n.beginPath(),n.roundRect(A,C,z,_,2*c),n.fill(),n.stroke(),n.fillStyle=f;const F=5*c;if(s===0?n.fillRect(A,C,z,F):s===1?n.fillRect(A,C+_-F,z,F):s===2?n.fillRect(A,C,F,_):n.fillRect(A+z-F,C,F,_),y){const U=s===2?A:s===3?A+z:A+z/2,W=s===0?C:s===1?C+_:C+_/2;n.fillStyle=u,n.globalAlpha=.85,n.beginPath(),n.arc(U,W,6*c,0,ve),n.fill(),n.globalAlpha=1}};s===0&&T(),n.fillStyle="#263238",n.fillRect(e-8*c,m-10*c+Math.max(0,g),6*c,10*c-Math.max(0,g)),n.fillRect(e+2*c,m-10*c+Math.max(0,-g),6*c,10*c-Math.max(0,-g)),n.fillStyle=f,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*c,n.beginPath(),n.roundRect(e-11*c,m-30*c,22*c,21*c,5*c),n.fill(),n.stroke(),n.fillStyle=u,n.fillRect(e-11*c,m-15*c,22*c,3*c),s!==0&&(n.fillStyle=u,n.beginPath(),n.arc(e+p*3*c,m-23*c,3.5*c,0,ve),n.fill()),r===4&&(n.fillStyle="#6d4c41",n.fillRect(e-15*c,m-31*c,9*c,8*c),n.fillRect(e+6*c,m-31*c,9*c,8*c),n.strokeStyle="#3e2723",n.strokeRect(e-15*c,m-31*c,9*c,8*c),n.strokeRect(e+6*c,m-31*c,9*c,8*c));const b=m-38*c;switch(n.fillStyle=f,n.strokeStyle="rgba(0,0,0,0.5)",n.beginPath(),n.arc(e,b,11*c,0,ve),n.fill(),n.stroke(),n.fillStyle="#102030",s===1?(n.beginPath(),n.roundRect(e-8*c,b-3*c,16*c,7*c,3*c),n.fill(),n.fillStyle="#80deea",n.fillRect(e-6*c,b-1*c,4*c,2*c),n.fillRect(e+2*c,b-1*c,4*c,2*c)):p!==0&&(n.beginPath(),n.roundRect(e+(p>0?0:-11*c),b-3*c,11*c,7*c,3*c),n.fill(),n.fillStyle="#80deea",n.fillRect(e+p*6*c-2*c,b-1*c,4*c,2*c)),n.fillStyle=u,r){case 0:n.fillStyle="#ffb300",n.beginPath(),n.moveTo(e-6*c,b-8*c),n.quadraticCurveTo(e-2*c,b-22*c+Math.sin(E*20)*2*c,e+1*c,b-12*c),n.quadraticCurveTo(e+5*c,b-20*c,e+7*c,b-8*c),n.closePath(),n.fill();break;case 1:n.fillStyle="#e1f5fe";for(const R of[-7,0,7])n.beginPath(),n.moveTo(e+(R-3)*c,b-8*c),n.lineTo(e+R*c,b-(R===0?19:15)*c),n.lineTo(e+(R+3)*c,b-8*c),n.fill();break;case 2:n.fillStyle="#fff",n.beginPath(),n.ellipse(e-10*c,b-6*c,3*c,7*c,-.6,0,ve),n.ellipse(e+10*c,b-6*c,3*c,7*c,.6,0,ve),n.fill();break;case 3:n.fillStyle="#7b1fa2",n.beginPath(),n.moveTo(e-1*c,b-9*c),n.lineTo(e+5*c,b-20*c),n.lineTo(e+2*c,b-14*c),n.lineTo(e+7*c,b-15*c),n.lineTo(e+2*c,b-8*c),n.closePath(),n.fill();break;case 4:n.fillStyle="#4e342e",n.beginPath(),n.moveTo(e-8*c,b-7*c),n.lineTo(e-4*c,b-15*c),n.lineTo(e+4*c,b-15*c),n.lineTo(e+8*c,b-7*c),n.closePath(),n.fill();break}s!==0&&T()}function Go(n){return n+performance.now()/1e3}function Vo(n,e,t,i,r,s,a){const l=Math.sin(Go(a)*8)*.25;for(const o of[-1,1])n.save(),n.translate(e+o*6*i,t),n.rotate(o*(.35+l)),n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=1,n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(o*26*i,-18*i,o*30*i,4*i),n.quadraticCurveTo(o*18*i,2*i,o*22*i,12*i),n.quadraticCurveTo(o*10*i,8*i,0,10*i),n.closePath(),n.fill(),n.stroke(),n.fillStyle=s,n.beginPath(),n.moveTo(0,2*i),n.quadraticCurveTo(o*16*i,-8*i,o*20*i,4*i),n.quadraticCurveTo(o*10*i,4*i,0,8*i),n.fill(),n.restore()}function mc(n,e,t,i,r,s,a,l){const o=i/44,h=l&1?"#ffffff":ra[r],c=l&1?"#dddddd":sa[r],f=(l&2)!==0,u=f?0:Math.abs(Math.sin(a*10))*2*o,m=t-u,g=f?0:Math.sin(a*10)*2.5*o,E=s===2?-1:s===3?1:0;n.fillStyle=c,n.fillRect(e-8*o,m-8*o+Math.max(0,g),6*o,8*o),n.fillRect(e+2*o,m-8*o+Math.max(0,-g),6*o,8*o),s!==0&&(n.save(),n.translate(e+(E===0?12:E*12)*o,m-18*o),n.rotate((E||1)*(.5+Math.sin(a*6)*.2)),n.fillStyle="#6d4c41",n.beginPath(),n.roundRect(-2*o,-14*o,5*o,16*o,2*o),n.fill(),n.fillStyle="#8d6e63",n.beginPath(),n.arc(.5*o,-14*o,4.5*o,0,ve),n.fill(),n.restore()),n.fillStyle=h,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*o,n.beginPath(),n.ellipse(e,m-15*o,11*o,10*o,0,0,ve),n.fill(),n.stroke(),n.fillStyle="#795548",n.fillRect(e-11*o,m-13*o,22*o,5*o);const d=m-30*o;if(n.fillStyle=h,n.beginPath(),n.moveTo(e-9*o,d-2*o),n.lineTo(e-19*o,d-9*o),n.lineTo(e-8*o,d+4*o),n.moveTo(e+9*o,d-2*o),n.lineTo(e+19*o,d-9*o),n.lineTo(e+8*o,d+4*o),n.fill(),n.beginPath(),n.arc(e,d,10*o,0,ve),n.fill(),n.stroke(),s!==0){const p=E*3*o;n.fillStyle="#fff",n.beginPath(),n.arc(e-4*o+p,d-1*o,3*o,0,ve),n.arc(e+4*o+p,d-1*o,3*o,0,ve),n.fill(),n.fillStyle="#b71c1c",n.beginPath(),n.arc(e-4*o+p*1.4,d-1*o+(s===1?1:0)*o,1.5*o,0,ve),n.arc(e+4*o+p*1.4,d-1*o+(s===1?1:0)*o,1.5*o,0,ve),n.fill(),n.strokeStyle="#000",n.lineWidth=1.2*o,n.beginPath(),n.moveTo(e-4*o+p,d+5*o),n.lineTo(e+4*o+p,d+5*o),n.stroke(),n.fillStyle="#fff",n.fillRect(e-3*o+p,d+5*o,2*o,2*o),n.fillRect(e+1*o+p,d+5*o,2*o,2*o)}r===3&&!(l&1)&&(n.fillStyle="#ffeb3b",n.beginPath(),n.moveTo(e-6*o,d-8*o),n.lineTo(e-6*o,d-15*o),n.lineTo(e-3*o,d-11*o),n.lineTo(e,d-16*o),n.lineTo(e+3*o,d-11*o),n.lineTo(e+6*o,d-15*o),n.lineTo(e+6*o,d-8*o),n.closePath(),n.fill())}function _c(n,e,t,i,r,s,a,l){const o=i/40,c=(l&2)!==0?0:Math.sin(a*9)*.12,f=16*o*(1+c),u=18*o*(1-c)*(.3+.7*s);n.globalAlpha=s;const m=l&1?"#ffffff":ra[r],g=n.createRadialGradient(e-5*o,t-u*.8,2*o,e,t-u*.5,f*1.2);g.addColorStop(0,"#ffffff"),g.addColorStop(.25,m),g.addColorStop(1,l&1?"#dddddd":sa[r]),n.fillStyle=g,n.beginPath(),n.moveTo(e-f,t),n.bezierCurveTo(e-f,t-u*1.1,e-f*.4,t-u*1.5,e,t-u*1.45),n.bezierCurveTo(e+f*.4,t-u*1.5,e+f,t-u*1.1,e+f,t),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.4)",n.lineWidth=1.5*o,n.stroke(),s>.6&&(n.fillStyle="#111",n.beginPath(),n.ellipse(e-5*o,t-u*.75,2.2*o,3.2*o,0,0,ve),n.ellipse(e+5*o,t-u*.75,2.2*o,3.2*o,0,0,ve),n.fill(),n.fillStyle="#fff",n.fillRect(e-5.5*o,t-u*.85,1.4*o,1.4*o),n.fillRect(e+4.5*o,t-u*.85,1.4*o,1.4*o))}function gc(n,e,t,i,r,s,a,l){const o=i/44,h=Math.sin(s*14),c=l&1?"#ffffff":ra[r],f=l&1?"#dddddd":sa[r];n.save(),n.translate(e,t),n.scale(a<0?-1:1,1),n.fillStyle=f,n.beginPath(),n.moveTo(-2*o,-2*o),n.quadraticCurveTo(-8*o,-22*o*h-4*o,-20*o,-18*o*h),n.quadraticCurveTo(-10*o,-2*o,-2*o,4*o),n.fill(),n.fillStyle=c,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5*o,n.beginPath(),n.ellipse(0,0,14*o,9*o,0,0,ve),n.fill(),n.stroke(),n.fillStyle=f,n.beginPath(),n.moveTo(-12*o,-2*o),n.lineTo(-22*o,-6*o),n.lineTo(-20*o,4*o),n.closePath(),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(11*o,-6*o,7*o,0,ve),n.fill(),n.stroke(),n.fillStyle="#ff9800",n.beginPath(),n.moveTo(17*o,-7*o),n.lineTo(25*o,-4*o),n.lineTo(17*o,-2*o),n.closePath(),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(13*o,-8*o,2.6*o,0,ve),n.fill(),n.fillStyle="#000",n.beginPath(),n.arc(14*o,-8*o,1.3*o,0,ve),n.fill(),n.fillStyle=c,n.beginPath(),n.moveTo(-4*o,-2*o),n.quadraticCurveTo(2*o,-26*o*h-2*o,-14*o,-24*o*h),n.quadraticCurveTo(-8*o,-4*o,-4*o,4*o),n.fill(),n.stroke(),n.fillStyle="#8a8d99",n.beginPath(),n.arc(2*o,11*o,4*o,0,ve),n.fill(),n.restore()}function vc(n,e,t,i,r,s){n.globalAlpha=Math.max(0,Math.min(1,s));const a=i/2;n.fillStyle=r>0?"#6d6f7a":"#8a8d99",n.strokeStyle="#3d3f48",n.lineWidth=1.5,n.beginPath(),n.moveTo(e-a,t),n.lineTo(e-a*.6,t-a*.8),n.lineTo(e+a*.4,t-a),n.lineTo(e+a,t-a*.2),n.lineTo(e+a*.7,t+a*.7),n.lineTo(e-a*.5,t+a*.8),n.closePath(),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.35)",n.beginPath(),n.arc(e-a*.3,t-a*.4,a*.25,0,ve),n.fill()}function Wo(n,e,t,i,r,s){const a=i/26;n.translate(e,t),n.rotate(r);const l=6+Math.sin(s*60)*3;n.fillStyle="#ffca28",n.beginPath(),n.moveTo(-9*a,-3*a),n.lineTo((-9-l)*a,0),n.lineTo(-9*a,3*a),n.fill(),n.fillStyle="#e53935",n.beginPath(),n.roundRect(-10*a,-4*a,16*a,8*a,2*a),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(6*a,-4*a),n.lineTo(13*a,0),n.lineTo(6*a,4*a),n.fill(),n.fillStyle="#b71c1c",n.beginPath(),n.moveTo(-10*a,-4*a),n.lineTo(-13*a,-8*a),n.lineTo(-5*a,-4*a),n.moveTo(-10*a,4*a),n.lineTo(-13*a,8*a),n.lineTo(-5*a,4*a),n.fill()}function Xo(n,e,t,i,r,s){const a=i/2;n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.6)",n.lineWidth=1.5,n.beginPath(),n.moveTo(e,t+a*.85),n.bezierCurveTo(e-a*1.3,t-a*.1,e-a*.6,t-a*1.1,e,t-a*.4),n.bezierCurveTo(e+a*.6,t-a*1.1,e+a*1.3,t-a*.1,e,t+a*.85),n.closePath(),n.fill(),n.stroke(),s&&(n.fillStyle=s,n.beginPath(),n.ellipse(e-a*.45,t-a*.35,a*.18,a*.12,-.6,0,ve),n.fill())}function Da(n,e,t,i,r){const s=i/30;n.fillStyle="#cfd8dc",n.fillRect(e-3*s,t-13*s,6*s,6*s),n.fillStyle="#8d6e63",n.fillRect(e-4*s,t-15*s,8*s,3*s),n.fillStyle=r,n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=1.5,n.beginPath(),n.arc(e,t+3*s,10*s,0,ve),n.fill(),n.stroke(),n.fillStyle="rgba(255,255,255,0.6)",n.beginPath(),n.arc(e-4*s,t,2.5*s,0,ve),n.fill()}function Mc(n,e,t,i){n.beginPath(),n.moveTo(e+3*i,t-13*i),n.lineTo(e-7*i,t+2*i),n.lineTo(e-1*i,t+2*i),n.lineTo(e-4*i,t+13*i),n.lineTo(e+7*i,t-3*i),n.lineTo(e+1*i,t-3*i),n.closePath()}function Ua(n,e,t,i,r,s){const a=i/30;if(s>0&&(n.save(),n.globalAlpha=.25+.15*Math.sin(s*6),n.fillStyle="#fff",n.beginPath(),n.arc(e,t,17*a,0,ve),n.fill(),n.restore()),!Bl(n,e,t,i,r))switch(r){case 0:Xo(n,e,t,i*.8,"#ff3b5c","#ffd1dc");break;case 1:Da(n,e,t,i,"#e53935");break;case 2:Da(n,e,t,i,"#1e88e5");break;case 3:Wo(n,e,t,i,-Math.PI/4,s);break;case 4:{n.strokeStyle="#4dd0e1",n.lineWidth=3*a,n.lineCap="round";for(let l=0;l<3;l++){const o=l*Math.PI/3,h=Math.cos(o)*12*a,c=Math.sin(o)*12*a;n.beginPath(),n.moveTo(e-h,t-c),n.lineTo(e+h,t+c),n.stroke()}n.fillStyle="#e0f7fa",n.beginPath(),n.arc(e,t,3.5*a,0,ve),n.fill();break}case 5:Vo(n,e,t+2*a,a*.55,"#ff7043","#ffca28",s),n.fillStyle="#ff5722",n.beginPath(),n.arc(e,t+4*a,4*a,0,ve),n.fill();break;case 6:n.fillStyle="#ffee58",n.strokeStyle="#f57f17",n.lineWidth=1.5,Mc(n,e,t,a),n.fill(),n.stroke();break;case 7:{n.fillStyle="#8d6e63",n.strokeStyle="#3e2723",n.lineWidth=1.5,n.beginPath();for(let l=0;l<6;l++){const o=l*ve/6-Math.PI/2,h=e+Math.cos(o)*12*a,c=t+Math.sin(o)*12*a;l===0?n.moveTo(h,c):n.lineTo(h,c)}n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ffcc80",n.beginPath(),n.moveTo(e,t-7*a),n.lineTo(e+5*a,t),n.lineTo(e,t+7*a),n.lineTo(e-5*a,t),n.closePath(),n.fill();break}}}function Sc(n,e,t,i,r,s,a){const[l,o]=Tr[r]??Tr[0],h=e+i/2,c=t+i/2;if(n.globalAlpha=1-a,n.fillStyle=l,n.globalAlpha=(1-a)*.35,n.fillRect(e+2,t+2,i-4,i-4),r===0&&Fl(n,e,t,i,s,a)||r===1&&Dl(n,e,t,i,s,a)||r===2&&ql(n,e,t,i,s,a)||r===3&&Vl(n,e,t,i,s,a)||r===4&&zl(n,e,t,i,s,a))return;n.globalAlpha=1-a;const f=[-Math.PI/2,Math.PI/2,Math.PI,0][s]??0;switch(n.translate(h,c),n.rotate(f),r){case 0:n.fillStyle=o,n.beginPath(),n.arc(-i*.3+a*i*.6,0,i*.22,0,ve),n.fill(),n.fillStyle="#fff59d",n.beginPath(),n.arc(-i*.3+a*i*.6,0,i*.1,0,ve),n.fill();break;case 1:n.fillStyle="#e1f5fe",n.beginPath(),n.moveTo(-i*.4,-i*.08),n.lineTo(i*.45,0),n.lineTo(-i*.4,i*.08),n.closePath(),n.fill();break;case 2:n.strokeStyle="#ffffff",n.lineWidth=4,n.beginPath(),n.arc(-i*.2,0,i*.4,-1,1),n.stroke();break;case 3:n.strokeStyle="#fff176",n.lineWidth=3,n.beginPath(),n.moveTo(-i/2,0);for(let u=1;u<=5;u++)n.lineTo(-i/2+u*i/5,(u%2?-1:1)*i*.15);n.stroke();break;case 4:n.fillStyle="#6d4c41";for(let u=-1;u<=1;u++)n.beginPath(),n.moveTo(u*i*.25-i*.1,i*.3),n.lineTo(u*i*.25,i*.3-i*.5*(1-a)),n.lineTo(u*i*.25+i*.1,i*.3),n.fill();break}}function Ec(n,e,t,i,r){if(Ol(n,e,t,i,r))return;const s=r<.7?1:1-(r-.7)/.3;n.globalAlpha=s;const a=n.createRadialGradient(e+i/2,t+i*.7,2,e+i/2,t+i*.6,i*.7);a.addColorStop(0,"rgba(255,245,157,0.95)"),a.addColorStop(.5,"rgba(255,112,67,0.8)"),a.addColorStop(1,"rgba(183,28,28,0)"),n.fillStyle=a,n.fillRect(e-i*.1,t-i*.3,i*1.2,i*1.3);for(let l=0;l<4;l++){const o=e+i*(.2+l*.2),h=i*(.5+.4*Math.sin(r*20+l*1.7))*(.5+r);n.fillStyle=l%2?"#ff7043":"#ffca28",n.beginPath(),n.moveTo(o-i*.1,t+i*.9),n.quadraticCurveTo(o-i*.12,t+i*.9-h*.6,o,t+i*.9-h),n.quadraticCurveTo(o+i*.12,t+i*.9-h*.6,o+i*.1,t+i*.9),n.fill()}}function Tc(n,e,t,i,r){if(Ul(n,e,t,i,r))return;const s=Math.min(1,r*3);n.globalAlpha=r<.7?1:1-(r-.7)/.3,n.fillStyle="rgba(179,229,252,0.35)",n.fillRect(e+2,t+2,i-4,i-4);const a=[[.25,.8,.5],[.5,.85,.8],[.75,.8,.55],[.38,.6,.35],[.62,.6,.4]];for(const[l,o,h]of a){const c=i*h*s;n.fillStyle="#e1f5fe",n.strokeStyle="#4fc3f7",n.lineWidth=1.5,n.beginPath(),n.moveTo(e+i*l-i*.08,t+i*o),n.lineTo(e+i*l,t+i*o-c),n.lineTo(e+i*l+i*.08,t+i*o),n.closePath(),n.fill(),n.stroke()}}function bc(n,e,t,i,r,s){n.globalAlpha=(1-s)*.85,n.fillStyle=Li(r);for(let a=0;a<6;a++){const l=a*ve/6+.4,o=i*.15+i*.35*s;n.beginPath(),n.arc(e+Math.cos(l)*o,t+Math.sin(l)*o*.7,i*.14*(1-s*.5),0,ve),n.fill()}}function yc(n,e,t,i,r,s){if(Hl(n,e,t,i,r,s))return;const a=[-Math.PI/2,Math.PI/2,Math.PI,0][r]??0;n.translate(e,t),n.rotate(a);for(let l=1;l<=4;l++)n.globalAlpha=.5-l*.1,n.fillStyle="#a1887f",n.beginPath(),n.arc(-l*i*.25,Math.sin(s*30+l)*3,i*.3-l*3,0,ve),n.fill();n.globalAlpha=1,n.rotate(s*12),n.fillStyle="#6d4c41",n.strokeStyle="#3e2723",n.lineWidth=2,n.beginPath();for(let l=0;l<7;l++){const o=l*ve/7,h=i*(.38+l%2*.08);l===0?n.moveTo(Math.cos(o)*h,Math.sin(o)*h):n.lineTo(Math.cos(o)*h,Math.sin(o)*h)}n.closePath(),n.fill(),n.stroke(),n.fillStyle="#ffb74d",n.beginPath(),n.arc(0,0,i*.12,0,ve),n.fill()}function Ac(n,e,t,i,r,s){n.globalAlpha=1-s,n.lineCap="round",n.strokeStyle="rgba(255,241,118,0.5)",n.lineWidth=18*(1-s*.5),n.beginPath(),n.moveTo(e,t-20),n.lineTo(i,r-20),n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=5,n.stroke()}function wc(n,e,t,i,r){n.globalAlpha=1-r,n.fillStyle="#ff7043",n.beginPath(),n.arc(e,t,i*.5*(.4+r),0,ve),n.fill(),n.fillStyle="#fff59d",n.beginPath(),n.arc(e,t,i*.3*(.4+r)*(1-r),0,ve),n.fill()}function xc(n,e,t,i,r){if(Wl(n,e,t,i,r))return;n.globalAlpha=r<.5?1:1-(r-.5)/.5,n.strokeStyle="#fff176",n.lineWidth=4,n.lineJoin="round",n.beginPath();let s=e,a=t-i*4;n.moveTo(s,a);let l=0;for(;a<t-10;)a+=i*.5,s=e+(l%2?1:-1)*i*.25*(1-a/(t+1)+.5),n.lineTo(s,Math.min(a,t-10)),l++;n.stroke(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.fillStyle="rgba(255,255,200,0.6)",n.beginPath(),n.arc(e,t-14,i*.4*(1-r),0,ve),n.fill()}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="169",Rc=0,Na=1,Cc=2,qo=1,Yo=2,an=3,Sn=0,wt=1,Kt=2,vn=0,hi=1,Fa=2,Oa=3,Ba=4,Pc=5,Dn=100,Lc=101,Ic=102,Dc=103,Uc=104,Nc=200,Fc=201,Oc=202,Bc=203,vs=204,Ms=205,kc=206,zc=207,Hc=208,Gc=209,Vc=210,Wc=211,Xc=212,qc=213,Yc=214,Ss=0,Es=1,Ts=2,di=3,bs=4,ys=5,As=6,ws=7,Ko=0,Kc=1,$c=2,Mn=0,Zc=1,jc=2,Jc=3,Qc=4,eh=5,th=6,nh=7,$o=300,pi=301,mi=302,xs=303,Rs=304,Pr=306,Cs=1e3,Nn=1001,Ps=1002,Bt=1003,ih=1004,Yi=1005,Wt=1006,Br=1007,Fn=1008,cn=1009,Zo=1010,jo=1011,Ni=1012,oa=1013,Bn=1014,on=1015,zi=1016,la=1017,ca=1018,_i=1020,Jo=35902,Qo=1021,el=1022,qt=1023,tl=1024,nl=1025,fi=1026,gi=1027,il=1028,ha=1029,rl=1030,fa=1031,ua=1033,mr=33776,_r=33777,gr=33778,vr=33779,Ls=35840,Is=35841,Ds=35842,Us=35843,Ns=36196,Fs=37492,Os=37496,Bs=37808,ks=37809,zs=37810,Hs=37811,Gs=37812,Vs=37813,Ws=37814,Xs=37815,qs=37816,Ys=37817,Ks=37818,$s=37819,Zs=37820,js=37821,Mr=36492,Js=36494,Qs=36495,sl=36283,ea=36284,ta=36285,na=36286,rh=3200,sh=3201,al=0,ah=1,gn="",vt="srgb",Tn="srgb-linear",da="display-p3",Lr="display-p3-linear",br="linear",nt="srgb",yr="rec709",Ar="p3",Gn=7680,ka=519,oh=512,lh=513,ch=514,ol=515,hh=516,fh=517,uh=518,dh=519,za=35044,Ha="300 es",ln=2e3,wr=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ga=1234567;const Ii=Math.PI/180,Fi=180/Math.PI;function Si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function pa(n,e){return(n%e+e)%e}function ph(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function mh(n,e,t){return n!==e?(t-n)/(e-n):0}function Di(n,e,t){return(1-t)*n+t*e}function _h(n,e,t,i){return Di(n,e,1-Math.exp(-t*i))}function gh(n,e=1){return e-Math.abs(pa(n,e*2)-e)}function vh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Eh(n,e){return n+Math.random()*(e-n)}function Th(n){return n*(.5-Math.random())}function bh(n){n!==void 0&&(Ga=n);let e=Ga+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yh(n){return n*Ii}function Ah(n){return n*Fi}function wh(n){return(n&n-1)===0&&n!==0}function xh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Rh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ch(n,e,t,i,r){const s=Math.cos,a=Math.sin,l=s(t/2),o=a(t/2),h=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(l*c,o*f,o*u,l*h);break;case"YZY":n.set(o*u,l*c,o*f,l*h);break;case"ZXZ":n.set(o*f,o*u,l*c,l*h);break;case"XZX":n.set(l*c,o*g,o*m,l*h);break;case"YXY":n.set(o*m,l*c,o*g,l*h);break;case"ZYZ":n.set(o*g,o*m,l*c,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function St(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ph={DEG2RAD:Ii,RAD2DEG:Fi,generateUUID:Si,clamp:Tt,euclideanModulo:pa,mapLinear:ph,inverseLerp:mh,lerp:Di,damp:_h,pingpong:gh,smoothstep:vh,smootherstep:Mh,randInt:Sh,randFloat:Eh,randFloatSpread:Th,seededRandom:bh,degToRad:yh,radToDeg:Ah,isPowerOfTwo:wh,ceilPowerOfTwo:xh,floorPowerOfTwo:Rh,setQuaternionFromProperEuler:Ch,normalize:St,denormalize:si};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,r,s,a,l,o,h){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,o,h)}set(e,t,i,r,s,a,l,o,h){const c=this.elements;return c[0]=e,c[1]=r,c[2]=l,c[3]=t,c[4]=s,c[5]=o,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[3],o=i[6],h=i[1],c=i[4],f=i[7],u=i[2],m=i[5],g=i[8],E=r[0],d=r[3],p=r[6],y=r[1],T=r[4],b=r[7],R=r[2],x=r[5],A=r[8];return s[0]=a*E+l*y+o*R,s[3]=a*d+l*T+o*x,s[6]=a*p+l*b+o*A,s[1]=h*E+c*y+f*R,s[4]=h*d+c*T+f*x,s[7]=h*p+c*b+f*A,s[2]=u*E+m*y+g*R,s[5]=u*d+m*T+g*x,s[8]=u*p+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8];return t*a*c-t*l*h-i*s*c+i*l*o+r*s*h-r*a*o}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=c*a-l*h,u=l*o-c*s,m=h*s-a*o,g=t*f+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=f*E,e[1]=(r*h-c*i)*E,e[2]=(l*i-r*a)*E,e[3]=u*E,e[4]=(c*t-r*o)*E,e[5]=(r*s-l*t)*E,e[6]=m*E,e[7]=(i*o-h*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,l){const o=Math.cos(s),h=Math.sin(s);return this.set(i*o,i*h,-i*(o*a+h*l)+a+e,-r*h,r*o,-r*(-h*a+o*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Ie;function ll(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lh(){const n=xr("canvas");return n.style.display="block",n}const Va={};function Sr(n){n in Va||(Va[n]=!0,console.warn(n))}function Ih(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Dh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Uh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wa=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xa=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ti={[Tn]:{transfer:br,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[vt]:{transfer:nt,primaries:yr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Lr]:{transfer:br,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Xa),fromReference:n=>n.applyMatrix3(Wa)},[da]:{transfer:nt,primaries:Ar,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Xa),fromReference:n=>n.applyMatrix3(Wa).convertLinearToSRGB()}},Nh=new Set([Tn,Lr]),Ke={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Nh.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ti[e].toReference,r=Ti[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ti[n].primaries},getTransfer:function(n){return n===gn?br:Ti[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ti[e].luminanceCoefficients)}};function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vn;class Fh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=xr("canvas")),Vn.width=e.width,Vn.height=e.height;const i=Vn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class cl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Hr(r[a].image)):s.push(Hr(r[a]))}else s=Hr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;class bt extends Mi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,i=Nn,r=Nn,s=Wt,a=Fn,l=qt,o=cn,h=bt.DEFAULT_ANISOTROPY,c=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Si(),this.name="",this.source=new cl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$o)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=$o;bt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const o=e.elements,h=o[0],c=o[4],f=o[8],u=o[1],m=o[5],g=o[9],E=o[2],d=o[6],p=o[10];if(Math.abs(c-u)<.01&&Math.abs(f-E)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+u)<.1&&Math.abs(f+E)<.1&&Math.abs(g+d)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,b=(m+1)/2,R=(p+1)/2,x=(c+u)/4,A=(f+E)/4,C=(g+d)/4;return T>b&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=x/i,s=A/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=x/r,s=C/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=C/s),this.set(i,r,s,t),this}let y=Math.sqrt((d-g)*(d-g)+(f-E)*(f-E)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(f-E)/y,this.z=(u-c)/y,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kh extends Mi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new bt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends kh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hl extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,l){let o=i[r+0],h=i[r+1],c=i[r+2],f=i[r+3];const u=s[a+0],m=s[a+1],g=s[a+2],E=s[a+3];if(l===0){e[t+0]=o,e[t+1]=h,e[t+2]=c,e[t+3]=f;return}if(l===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=E;return}if(f!==E||o!==u||h!==m||c!==g){let d=1-l;const p=o*u+h*m+c*g+f*E,y=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const R=Math.sqrt(T),x=Math.atan2(R,p*y);d=Math.sin(d*x)/R,l=Math.sin(l*x)/R}const b=l*y;if(o=o*d+u*b,h=h*d+m*b,c=c*d+g*b,f=f*d+E*b,d===1-l){const R=1/Math.sqrt(o*o+h*h+c*c+f*f);o*=R,h*=R,c*=R,f*=R}}e[t]=o,e[t+1]=h,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const l=i[r],o=i[r+1],h=i[r+2],c=i[r+3],f=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=l*g+c*f+o*m-h*u,e[t+1]=o*g+c*u+h*f-l*m,e[t+2]=h*g+c*m+l*u-o*f,e[t+3]=c*g-l*f-o*u-h*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,o=Math.sin,h=l(i/2),c=l(r/2),f=l(s/2),u=o(i/2),m=o(r/2),g=o(s/2);switch(a){case"XYZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"YXZ":this._x=u*c*f+h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"ZXY":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f-u*m*g;break;case"ZYX":this._x=u*c*f-h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f+u*m*g;break;case"YZX":this._x=u*c*f+h*m*g,this._y=h*m*f+u*c*g,this._z=h*c*g-u*m*f,this._w=h*c*f-u*m*g;break;case"XZY":this._x=u*c*f-h*m*g,this._y=h*m*f-u*c*g,this._z=h*c*g+u*m*f,this._w=h*c*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],l=t[5],o=t[9],h=t[2],c=t[6],f=t[10],u=i+l+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-o)*m,this._y=(s-h)*m,this._z=(a-r)*m}else if(i>l&&i>f){const m=2*Math.sqrt(1+i-l-f);this._w=(c-o)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+h)/m}else if(l>f){const m=2*Math.sqrt(1+l-i-f);this._w=(s-h)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(o+c)/m}else{const m=2*Math.sqrt(1+f-i-l);this._w=(a-r)/m,this._x=(s+h)/m,this._y=(o+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,l=t._x,o=t._y,h=t._z,c=t._w;return this._x=i*c+a*l+r*h-s*o,this._y=r*c+a*o+s*l-i*h,this._z=s*c+a*h+i*o-r*l,this._w=a*c-i*l-r*o-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+i*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const o=1-l*l;if(o<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const h=Math.sqrt(o),c=Math.atan2(h,l),f=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,o=e.w,h=2*(a*r-l*i),c=2*(l*t-s*r),f=2*(s*i-a*t);return this.x=t+o*h+a*f-l*c,this.y=i+o*c+l*h-s*f,this.z=r+o*f+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,l=t.y,o=t.z;return this.x=r*o-s*l,this.y=s*a-i*o,this.z=i*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new O,qa=new Hi;class Gi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,zt):zt.fromBufferAttribute(s,a),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ki.copy(i.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),$i.subVectors(this.max,bi),Wn.subVectors(e.a,bi),Xn.subVectors(e.b,bi),qn.subVectors(e.c,bi),fn.subVectors(Xn,Wn),un.subVectors(qn,Xn),An.subVectors(Wn,qn);let t=[0,-fn.z,fn.y,0,-un.z,un.y,0,-An.z,An.y,fn.z,0,-fn.x,un.z,0,-un.x,An.z,0,-An.x,-fn.y,fn.x,0,-un.y,un.x,0,-An.y,An.x,0];return!Vr(t,Wn,Xn,qn,$i)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,Wn,Xn,qn,$i))?!1:(Zi.crossVectors(fn,un),t=[Zi.x,Zi.y,Zi.z],Vr(t,Wn,Xn,qn,$i))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const en=[new O,new O,new O,new O,new O,new O,new O,new O],zt=new O,Ki=new Gi,Wn=new O,Xn=new O,qn=new O,fn=new O,un=new O,An=new O,bi=new O,$i=new O,Zi=new O,wn=new O;function Vr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wn.fromArray(n,s);const l=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),o=e.dot(wn),h=t.dot(wn),c=i.dot(wn);if(Math.max(-Math.max(o,h,c),Math.min(o,h,c))>l)return!1}return!0}const Hh=new Gi,yi=new O,Wr=new O;class ma{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hh.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Wr)),this.expandByPoint(yi.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new O,Xr=new O,ji=new O,dn=new O,qr=new O,Ji=new O,Yr=new O;class Gh{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.origin).addScaledVector(this.direction,t),tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xr.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Xr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ji),l=dn.dot(this.direction),o=-dn.dot(ji),h=dn.lengthSq(),c=Math.abs(1-a*a);let f,u,m,g;if(c>0)if(f=a*o-l,u=a*l-o,g=s*c,f>=0)if(u>=-g)if(u<=g){const E=1/c;f*=E,u*=E,m=f*(f+a*u+2*l)+u*(a*f+u+2*o)+h}else u=s,f=Math.max(0,-(a*u+l)),m=-f*f+u*(u+2*o)+h;else u=-s,f=Math.max(0,-(a*u+l)),m=-f*f+u*(u+2*o)+h;else u<=-g?(f=Math.max(0,-(-a*s+l)),u=f>0?-s:Math.min(Math.max(-s,-o),s),m=-f*f+u*(u+2*o)+h):u<=g?(f=0,u=Math.min(Math.max(-s,-o),s),m=u*(u+2*o)+h):(f=Math.max(0,-(a*s+l)),u=f>0?s:Math.min(Math.max(-s,-o),s),m=-f*f+u*(u+2*o)+h);else u=a>0?-s:s,f=Math.max(0,-(a*u+l)),m=-f*f+u*(u+2*o)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xr).addScaledVector(ji,u),m}intersectSphere(e,t){tn.subVectors(e.center,this.origin);const i=tn.dot(this.direction),r=tn.dot(tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,l,o;const h=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,r=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,r=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-u.z)*f,o=(e.max.z-u.z)*f):(l=(e.max.z-u.z)*f,o=(e.min.z-u.z)*f),i>o||l>r)||((l>i||i!==i)&&(i=l),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,i,r,s){qr.subVectors(t,e),Ji.subVectors(i,e),Yr.crossVectors(qr,Ji);let a=this.direction.dot(Yr),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;dn.subVectors(this.origin,e);const o=l*this.direction.dot(Ji.crossVectors(dn,Ji));if(o<0)return null;const h=l*this.direction.dot(qr.cross(dn));if(h<0||o+h>a)return null;const c=-l*dn.dot(Yr);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,i,r,s,a,l,o,h,c,f,u,m,g,E,d){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,l,o,h,c,f,u,m,g,E,d)}set(e,t,i,r,s,a,l,o,h,c,f,u,m,g,E,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=l,p[13]=o,p[2]=h,p[6]=c,p[10]=f,p[14]=u,p[3]=m,p[7]=g,p[11]=E,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yn.setFromMatrixColumn(e,0).length(),s=1/Yn.setFromMatrixColumn(e,1).length(),a=1/Yn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(r),h=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*c,m=a*f,g=l*c,E=l*f;t[0]=o*c,t[4]=-o*f,t[8]=h,t[1]=m+g*h,t[5]=u-E*h,t[9]=-l*o,t[2]=E-u*h,t[6]=g+m*h,t[10]=a*o}else if(e.order==="YXZ"){const u=o*c,m=o*f,g=h*c,E=h*f;t[0]=u+E*l,t[4]=g*l-m,t[8]=a*h,t[1]=a*f,t[5]=a*c,t[9]=-l,t[2]=m*l-g,t[6]=E+u*l,t[10]=a*o}else if(e.order==="ZXY"){const u=o*c,m=o*f,g=h*c,E=h*f;t[0]=u-E*l,t[4]=-a*f,t[8]=g+m*l,t[1]=m+g*l,t[5]=a*c,t[9]=E-u*l,t[2]=-a*h,t[6]=l,t[10]=a*o}else if(e.order==="ZYX"){const u=a*c,m=a*f,g=l*c,E=l*f;t[0]=o*c,t[4]=g*h-m,t[8]=u*h+E,t[1]=o*f,t[5]=E*h+u,t[9]=m*h-g,t[2]=-h,t[6]=l*o,t[10]=a*o}else if(e.order==="YZX"){const u=a*o,m=a*h,g=l*o,E=l*h;t[0]=o*c,t[4]=E-u*f,t[8]=g*f+m,t[1]=f,t[5]=a*c,t[9]=-l*c,t[2]=-h*c,t[6]=m*f+g,t[10]=u-E*f}else if(e.order==="XZY"){const u=a*o,m=a*h,g=l*o,E=l*h;t[0]=o*c,t[4]=-f,t[8]=h*c,t[1]=u*f+E,t[5]=a*c,t[9]=m*f-g,t[2]=g*f-m,t[6]=l*c,t[10]=E*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vh,e,Wh)}lookAt(e,t,i){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),pn.crossVectors(i,Pt),pn.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),pn.crossVectors(i,Pt)),pn.normalize(),Qi.crossVectors(Pt,pn),r[0]=pn.x,r[4]=Qi.x,r[8]=Pt.x,r[1]=pn.y,r[5]=Qi.y,r[9]=Pt.y,r[2]=pn.z,r[6]=Qi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],l=i[4],o=i[8],h=i[12],c=i[1],f=i[5],u=i[9],m=i[13],g=i[2],E=i[6],d=i[10],p=i[14],y=i[3],T=i[7],b=i[11],R=i[15],x=r[0],A=r[4],C=r[8],z=r[12],_=r[1],M=r[5],F=r[9],U=r[13],W=r[2],$=r[6],G=r[10],Z=r[14],V=r[3],oe=r[7],le=r[11],ge=r[15];return s[0]=a*x+l*_+o*W+h*V,s[4]=a*A+l*M+o*$+h*oe,s[8]=a*C+l*F+o*G+h*le,s[12]=a*z+l*U+o*Z+h*ge,s[1]=c*x+f*_+u*W+m*V,s[5]=c*A+f*M+u*$+m*oe,s[9]=c*C+f*F+u*G+m*le,s[13]=c*z+f*U+u*Z+m*ge,s[2]=g*x+E*_+d*W+p*V,s[6]=g*A+E*M+d*$+p*oe,s[10]=g*C+E*F+d*G+p*le,s[14]=g*z+E*U+d*Z+p*ge,s[3]=y*x+T*_+b*W+R*V,s[7]=y*A+T*M+b*$+R*oe,s[11]=y*C+T*F+b*G+R*le,s[15]=y*z+T*U+b*Z+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],o=e[9],h=e[13],c=e[2],f=e[6],u=e[10],m=e[14],g=e[3],E=e[7],d=e[11],p=e[15];return g*(+s*o*f-r*h*f-s*l*u+i*h*u+r*l*m-i*o*m)+E*(+t*o*m-t*h*u+s*a*u-r*a*m+r*h*c-s*o*c)+d*(+t*h*f-t*l*m-s*a*f+i*a*m+s*l*c-i*h*c)+p*(-r*l*c-t*o*f+t*l*u+r*a*f-i*a*u+i*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],f=e[9],u=e[10],m=e[11],g=e[12],E=e[13],d=e[14],p=e[15],y=f*d*h-E*u*h+E*o*m-l*d*m-f*o*p+l*u*p,T=g*u*h-c*d*h-g*o*m+a*d*m+c*o*p-a*u*p,b=c*E*h-g*f*h+g*l*m-a*E*m-c*l*p+a*f*p,R=g*f*o-c*E*o-g*l*u+a*E*u+c*l*d-a*f*d,x=t*y+i*T+r*b+s*R;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/x;return e[0]=y*A,e[1]=(E*u*s-f*d*s-E*r*m+i*d*m+f*r*p-i*u*p)*A,e[2]=(l*d*s-E*o*s+E*r*h-i*d*h-l*r*p+i*o*p)*A,e[3]=(f*o*s-l*u*s-f*r*h+i*u*h+l*r*m-i*o*m)*A,e[4]=T*A,e[5]=(c*d*s-g*u*s+g*r*m-t*d*m-c*r*p+t*u*p)*A,e[6]=(g*o*s-a*d*s-g*r*h+t*d*h+a*r*p-t*o*p)*A,e[7]=(a*u*s-c*o*s+c*r*h-t*u*h-a*r*m+t*o*m)*A,e[8]=b*A,e[9]=(g*f*s-c*E*s-g*i*m+t*E*m+c*i*p-t*f*p)*A,e[10]=(a*E*s-g*l*s+g*i*h-t*E*h-a*i*p+t*l*p)*A,e[11]=(c*l*s-a*f*s-c*i*h+t*f*h+a*i*m-t*l*m)*A,e[12]=R*A,e[13]=(c*E*r-g*f*r+g*i*u-t*E*u-c*i*d+t*f*d)*A,e[14]=(g*l*r-a*E*r-g*i*o+t*E*o+a*i*d-t*l*d)*A,e[15]=(a*f*r-c*l*r+c*i*o-t*f*o-a*i*u+t*l*u)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,l=e.y,o=e.z,h=s*a,c=s*l;return this.set(h*a+i,h*l-r*o,h*o+r*l,0,h*l+r*o,c*l+i,c*o-r*a,0,h*o-r*l,c*o+r*a,s*o*o+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,l=t._z,o=t._w,h=s+s,c=a+a,f=l+l,u=s*h,m=s*c,g=s*f,E=a*c,d=a*f,p=l*f,y=o*h,T=o*c,b=o*f,R=i.x,x=i.y,A=i.z;return r[0]=(1-(E+p))*R,r[1]=(m+b)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(m-b)*x,r[5]=(1-(u+p))*x,r[6]=(d+y)*x,r[7]=0,r[8]=(g+T)*A,r[9]=(d-y)*A,r[10]=(1-(u+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yn.set(r[0],r[1],r[2]).length();const a=Yn.set(r[4],r[5],r[6]).length(),l=Yn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const h=1/s,c=1/a,f=1/l;return Ht.elements[0]*=h,Ht.elements[1]*=h,Ht.elements[2]*=h,Ht.elements[4]*=c,Ht.elements[5]*=c,Ht.elements[6]*=c,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),i.x=s,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,a,l=ln){const o=this.elements,h=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r);let m,g;if(l===ln)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(l===wr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a,l=ln){const o=this.elements,h=1/(t-e),c=1/(i-r),f=1/(a-s),u=(t+e)*h,m=(i+r)*c;let g,E;if(l===ln)g=(a+s)*f,E=-2*f;else if(l===wr)g=s*f,E=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-m,o[2]=0,o[6]=0,o[10]=E,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yn=new O,Ht=new ot,Vh=new O(0,0,0),Wh=new O(1,1,1),pn=new O,Qi=new O,Pt=new O,Ya=new ot,Ka=new Hi;class jt{constructor(e=0,t=0,i=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],o=r[1],h=r[5],c=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ya,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xh=0;const $a=new O,Kn=new Hi,nn=new ot,er=new O,Ai=new O,qh=new O,Yh=new Hi,Za=new O(1,0,0),ja=new O(0,1,0),Ja=new O(0,0,1),Qa={type:"added"},Kh={type:"removed"},$n={type:"childadded",child:null},Kr={type:"childremoved",child:null};class pt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new O,t=new jt,i=new Hi,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ie}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(ja,e)}rotateZ(e){return this.rotateOnAxis(Ja,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(ja,e)}translateZ(e){return this.translateOnAxis(Ja,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?er.copy(e):er.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ai,er,this.up):nn.lookAt(er,Ai,this.up),this.quaternion.setFromRotationMatrix(nn),r&&(nn.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(nn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qa),$n.child=e,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kh),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qa),$n.child=e,this.dispatchEvent($n),$n.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,e,qh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let h=0,c=o.length;h<c;h++){const f=o[h];s(e.shapes,f)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(s(e.materials,this.material[o]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];r.animations.push(s(e.animations,o))}}if(t){const l=a(e.geometries),o=a(e.materials),h=a(e.textures),c=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const o=[];for(const h in l){const c=l[h];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pt.DEFAULT_UP=new O(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new O,rn=new O,$r=new O,sn=new O,Zn=new O,jn=new O,eo=new O,Zr=new O,jr=new O,Jr=new O,Qr=new at,es=new at,ts=new at;class Xt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),rn.subVectors(i,t),$r.subVectors(e,t);const a=Gt.dot(Gt),l=Gt.dot(rn),o=Gt.dot($r),h=rn.dot(rn),c=rn.dot($r),f=a*h-l*l;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(h*o-l*c)*u,g=(a*c-l*o)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,i,r,s,a,l,o){return this.getBarycoord(e,t,i,r,sn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,sn.x),o.addScaledVector(a,sn.y),o.addScaledVector(l,sn.z),o)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qr.setScalar(0),es.setScalar(0),ts.setScalar(0),Qr.fromBufferAttribute(e,t),es.fromBufferAttribute(e,i),ts.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qr,s.x),a.addScaledVector(es,s.y),a.addScaledVector(ts,s.z),a}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),rn.subVectors(e,t),Gt.cross(rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Gt.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,l;Zn.subVectors(r,i),jn.subVectors(s,i),Zr.subVectors(e,i);const o=Zn.dot(Zr),h=jn.dot(Zr);if(o<=0&&h<=0)return t.copy(i);jr.subVectors(e,r);const c=Zn.dot(jr),f=jn.dot(jr);if(c>=0&&f<=c)return t.copy(r);const u=o*f-c*h;if(u<=0&&o>=0&&c<=0)return a=o/(o-c),t.copy(i).addScaledVector(Zn,a);Jr.subVectors(e,s);const m=Zn.dot(Jr),g=jn.dot(Jr);if(g>=0&&m<=g)return t.copy(s);const E=m*h-o*g;if(E<=0&&h>=0&&g<=0)return l=h/(h-g),t.copy(i).addScaledVector(jn,l);const d=c*g-m*f;if(d<=0&&f-c>=0&&m-g>=0)return eo.subVectors(s,r),l=(f-c)/(f-c+(m-g)),t.copy(r).addScaledVector(eo,l);const p=1/(d+E+u);return a=E*p,l=u*p,t.copy(i).addScaledVector(Zn,a).addScaledVector(jn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function ns(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=pa(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ns(a,s,e+1/3),this.g=ns(a,s,e),this.b=ns(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const i=ul[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ke.fromWorkingColorSpace(gt.copy(this),e),Math.round(Tt(gt.r*255,0,255))*65536+Math.round(Tt(gt.g*255,0,255))*256+Math.round(Tt(gt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(gt.copy(this),t);const i=gt.r,r=gt.g,s=gt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let o,h;const c=(l+a)/2;if(l===a)o=0,h=0;else{const f=a-l;switch(h=c<=.5?f/(a+l):f/(2-a-l),a){case i:o=(r-s)/f+(r<s?6:0);break;case r:o=(s-i)/f+2;break;case s:o=(i-r)/f+4;break}o/=6}return e.h=o,e.s=h,e.l=c,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=vt){Ke.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,i=gt.g,r=gt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(tr);const i=Di(mn.h,tr.h,t),r=Di(mn.s,tr.s,t),s=Di(mn.l,tr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new ze;ze.NAMES=ul;let $h=0;class Vi extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=hi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vs,this.blendDst=Ms,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gn,this.stencilZFail=Gn,this.stencilZPass=Gn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ms&&(i.blendDst=this.blendDst),this.blendEquation!==Dn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const o=s[l];delete o.metadata,a.push(o)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rr extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new O,nr=new He;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=za,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),r=St(r,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class dl extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pl extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zh=0;const Ut=new ot,is=new pt,Jn=new O,Lt=new Gi,wi=new Gi,dt=new O;class bn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ll(e)?pl:dl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];wi.setFromBufferAttribute(l),this.morphTargetsRelative?(dt.addVectors(Lt.min,wi.min),Lt.expandByPoint(dt),dt.addVectors(Lt.max,wi.max),Lt.expandByPoint(dt)):(Lt.expandByPoint(wi.min),Lt.expandByPoint(wi.max))}Lt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],o=this.morphTargetsRelative;for(let h=0,c=l.count;h<c;h++)dt.fromBufferAttribute(l,h),o&&(Jn.fromBufferAttribute(e,h),dt.add(Jn)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],o=[];for(let C=0;C<i.count;C++)l[C]=new O,o[C]=new O;const h=new O,c=new O,f=new O,u=new He,m=new He,g=new He,E=new O,d=new O;function p(C,z,_){h.fromBufferAttribute(i,C),c.fromBufferAttribute(i,z),f.fromBufferAttribute(i,_),u.fromBufferAttribute(s,C),m.fromBufferAttribute(s,z),g.fromBufferAttribute(s,_),c.sub(h),f.sub(h),m.sub(u),g.sub(u);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(E.copy(c).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(M),d.copy(f).multiplyScalar(m.x).addScaledVector(c,-g.x).multiplyScalar(M),l[C].add(E),l[z].add(E),l[_].add(E),o[C].add(d),o[z].add(d),o[_].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,z=y.length;C<z;++C){const _=y[C],M=_.start,F=_.count;for(let U=M,W=M+F;U<W;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const T=new O,b=new O,R=new O,x=new O;function A(C){R.fromBufferAttribute(r,C),x.copy(R);const z=l[C];T.copy(z),T.sub(R.multiplyScalar(R.dot(z))).normalize(),b.crossVectors(x,z);const M=b.dot(o[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,M)}for(let C=0,z=y.length;C<z;++C){const _=y[C],M=_.start,F=_.count;for(let U=M,W=M+F;U<W;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new O,s=new O,a=new O,l=new O,o=new O,h=new O,c=new O,f=new O;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),E=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,d),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),l.fromBufferAttribute(i,g),o.fromBufferAttribute(i,E),h.fromBufferAttribute(i,d),l.add(c),o.add(c),h.add(c),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(d,h.x,h.y,h.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(l,o){const h=l.array,c=l.itemSize,f=l.normalized,u=new h.constructor(o.length*c);let m=0,g=0;for(let E=0,d=o.length;E<d;E++){l.isInterleavedBufferAttribute?m=o[E]*l.data.stride+l.offset:m=o[E]*c;for(let p=0;p<c;p++)u[g++]=h[m++]}return new $t(u,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const l in r){const o=r[l],h=e(o,i);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const o=[],h=s[l];for(let c=0,f=h.length;c<f;c++){const u=h[c],m=e(u,i);o.push(m)}t.morphAttributes[l]=o}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const h in o)o[h]!==void 0&&(e[h]=o[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const o in i){const h=i[o];e.data.attributes[o]=h.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const h=this.morphAttributes[o],c=[];for(let f=0,u=h.length;f<u;f++){const m=h[f];c.push(m.toJSON(e.data))}c.length>0&&(r[o]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const h in r){const c=r[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],f=s[h];for(let u=0,m=f.length;u<m;u++)c.push(f[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new ot,xn=new Gh,ir=new ma,no=new O,rr=new O,sr=new O,ar=new O,rs=new O,or=new O,io=new O,lr=new O;class Mt extends pt{constructor(e=new bn,t=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){or.set(0,0,0);for(let o=0,h=s.length;o<h;o++){const c=l[o],f=s[o];c!==0&&(rs.fromBufferAttribute(f,e),a?or.addScaledVector(rs,c):or.addScaledVector(rs.sub(t),c))}t.add(or)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(ir.containsPoint(xn.origin)===!1&&(xn.intersectSphere(ir,no)===null||xn.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(s).invert(),xn.copy(e.ray).applyMatrix4(to),!(i.boundingBox!==null&&xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,l=s.index,o=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const d=u[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=y,R=T;b<R;b+=3){const x=l.getX(b),A=l.getX(b+1),C=l.getX(b+2);r=cr(this,p,e,i,h,c,f,x,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let d=g,p=E;d<p;d+=3){const y=l.getX(d),T=l.getX(d+1),b=l.getX(d+2);r=cr(this,a,e,i,h,c,f,y,T,b),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,E=u.length;g<E;g++){const d=u[g],p=a[d.materialIndex],y=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let b=y,R=T;b<R;b+=3){const x=b,A=b+1,C=b+2;r=cr(this,p,e,i,h,c,f,x,A,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let d=g,p=E;d<p;d+=3){const y=d,T=d+1,b=d+2;r=cr(this,a,e,i,h,c,f,y,T,b),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function jh(n,e,t,i,r,s,a,l){let o;if(e.side===wt?o=i.intersectTriangle(a,s,r,!0,l):o=i.intersectTriangle(r,s,a,e.side===Sn,l),o===null)return null;lr.copy(l),lr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(lr);return h<t.near||h>t.far?null:{distance:h,point:lr.clone(),object:n}}function cr(n,e,t,i,r,s,a,l,o,h){n.getVertexPosition(l,rr),n.getVertexPosition(o,sr),n.getVertexPosition(h,ar);const c=jh(n,e,t,i,rr,sr,ar,io);if(c){const f=new O;Xt.getBarycoord(io,rr,sr,ar,f),r&&(c.uv=Xt.getInterpolatedAttribute(r,l,o,h,f,new He)),s&&(c.uv1=Xt.getInterpolatedAttribute(s,l,o,h,f,new He)),a&&(c.normal=Xt.getInterpolatedAttribute(a,l,o,h,f,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:l,b:o,c:h,normal:new O,materialIndex:0};Xt.getNormal(rr,sr,ar,u.normal),c.face=u,c.barycoord=f}return c}class zn extends bn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const o=[],h=[],c=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(o),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(f,2));function g(E,d,p,y,T,b,R,x,A,C,z){const _=b/A,M=R/C,F=b/2,U=R/2,W=x/2,$=A+1,G=C+1;let Z=0,V=0;const oe=new O;for(let le=0;le<G;le++){const ge=le*M-U;for(let We=0;We<$;We++){const $e=We*_-F;oe[E]=$e*y,oe[d]=ge*T,oe[p]=W,h.push(oe.x,oe.y,oe.z),oe[E]=0,oe[d]=0,oe[p]=x>0?1:-1,c.push(oe.x,oe.y,oe.z),f.push(We/A),f.push(1-le/C),Z+=1}}for(let le=0;le<C;le++)for(let ge=0;ge<A;ge++){const We=u+ge+$*le,$e=u+ge+$*(le+1),X=u+(ge+1)+$*(le+1),J=u+(ge+1)+$*le;o.push(We,$e,J),o.push($e,X,J),V+=6}l.addGroup(m,V,z),m+=V,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=vi(n[t]);for(const r in i)e[r]=i[r]}return e}function Jh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ml(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Qh={clone:vi,merge:Et};var ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _l extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ln}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new O,ro=new He,so=new He;class Ot extends _l{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,ro,so),t.subVectors(so,ro)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ii*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/o,t-=a.offsetY*i/h,r*=a.width/o,i*=a.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qn=-90,ei=1;class nf extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(Qn,ei,e,t);r.layers=this.layers,this.add(r);const s=new Ot(Qn,ei,e,t);s.layers=this.layers,this.add(s);const a=new Ot(Qn,ei,e,t);a.layers=this.layers,this.add(a);const l=new Ot(Qn,ei,e,t);l.layers=this.layers,this.add(l);const o=new Ot(Qn,ei,e,t);o.layers=this.layers,this.add(o);const h=new Ot(Qn,ei,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,l,o]=t;for(const h of t)this.remove(h);if(e===ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,o,h,c]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,l),e.setRenderTarget(i,3,r),e.render(t,o),e.setRenderTarget(i,4,r),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gl extends bt{constructor(e,t,i,r,s,a,l,o,h,c){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,i,r,s,a,l,o,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zn(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wt,blending:vn});s.uniforms.tEquirect.value=t;const a=new Mt(r,s),l=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Wt),new nf(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ss=new O,sf=new O,af=new Ie;class Ln{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ss.subVectors(i,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ss),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||af.getNormalMatrix(e),r=this.coplanarPoint(ss).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new ma,hr=new O;class _a{constructor(e=new Ln,t=new Ln,i=new Ln,r=new Ln,s=new Ln,a=new Ln){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ln){const i=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],o=r[3],h=r[4],c=r[5],f=r[6],u=r[7],m=r[8],g=r[9],E=r[10],d=r[11],p=r[12],y=r[13],T=r[14],b=r[15];if(i[0].setComponents(o-s,u-h,d-m,b-p).normalize(),i[1].setComponents(o+s,u+h,d+m,b+p).normalize(),i[2].setComponents(o+a,u+c,d+g,b+y).normalize(),i[3].setComponents(o-a,u-c,d-g,b-y).normalize(),i[4].setComponents(o-l,u-f,d-E,b-T).normalize(),t===ln)i[5].setComponents(o+l,u+f,d+E,b+T).normalize();else if(t===wr)i[5].setComponents(l,f,E,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(e){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(hr.x=r.normal.x>0?e.max.x:e.min.x,hr.y=r.normal.y>0?e.max.y:e.min.y,hr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function of(n){const e=new WeakMap;function t(l,o){const h=l.array,c=l.usage,f=h.byteLength,u=n.createBuffer();n.bindBuffer(o,u),n.bufferData(o,h,c),l.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,o,h){const c=o.array,f=o.updateRanges;if(n.bindBuffer(h,l),f.length===0)n.bufferSubData(h,0,c);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],E=f[m];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++u,f[u]=E)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const E=f[m];n.bufferSubData(h,E.start*c.BYTES_PER_ELEMENT,c,E.start,E.count)}o.clearUpdateRanges()}o.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(n.deleteBuffer(o.buffer),e.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const c=e.get(l);(!c||c.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,o),h.version=l.version}}return{get:r,remove:s,update:a}}class On extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(i),o=Math.floor(r),h=l+1,c=o+1,f=e/l,u=t/o,m=[],g=[],E=[],d=[];for(let p=0;p<c;p++){const y=p*u-a;for(let T=0;T<h;T++){const b=T*f-s;g.push(b,-y,0),E.push(0,0,1),d.push(T/l),d.push(1-p/o)}}for(let p=0;p<o;p++)for(let y=0;y<l;y++){const T=y+h*p,b=y+h*(p+1),R=y+1+h*(p+1),x=y+1+h*p;m.push(T,b,x),m.push(b,R,x)}this.setIndex(m),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`
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
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
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
#endif`,au=`struct PhysicalMaterial {
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
}`,ou=`
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
#endif`,lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gu=`#if defined( USE_POINTS_UV )
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
#endif`,vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bu=`#ifdef USE_MORPHTARGETS
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
#endif`,yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pu=`#ifdef USE_NORMALMAP
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
#endif`,Lu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qu=`float getShadowMask() {
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
}`,Yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,td=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`#include <common>
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
}`,pd=`#if DEPTH_PACKING == 3200
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
}`,md=`#define DISTANCE
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
}`,_d=`#define DISTANCE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`uniform float scale;
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
}`,Sd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,Td=`uniform vec3 diffuse;
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
}`,bd=`#define LAMBERT
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
}`,yd=`#define LAMBERT
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
}`,Ad=`#define MATCAP
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
}`,wd=`#define MATCAP
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
}`,xd=`#define NORMAL
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
}`,Rd=`#define NORMAL
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
}`,Cd=`#define PHONG
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
}`,Pd=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Id=`#define STANDARD
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
}`,Dd=`#define TOON
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
}`,Ud=`#define TOON
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
}`,Nd=`uniform float size;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,Bd=`uniform vec3 color;
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
}`,kd=`uniform float rotation;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:ff,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:_f,batching_vertex:gf,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:bf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:xf,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:Pf,common:Lf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Df,displacementmap_pars_vertex:Uf,displacementmap_vertex:Nf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:kf,envmap_fragment:zf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Gf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:eu,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:Kf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Zf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tu,lights_toon_pars_fragment:nu,lights_phong_fragment:iu,lights_phong_pars_fragment:ru,lights_physical_fragment:su,lights_physical_pars_fragment:au,lights_fragment_begin:ou,lights_fragment_maps:lu,lights_fragment_end:cu,logdepthbuf_fragment:hu,logdepthbuf_pars_fragment:fu,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:du,map_fragment:pu,map_pars_fragment:mu,map_particle_fragment:_u,map_particle_pars_fragment:gu,metalnessmap_fragment:vu,metalnessmap_pars_fragment:Mu,morphinstance_vertex:Su,morphcolor_vertex:Eu,morphnormal_vertex:Tu,morphtarget_pars_vertex:bu,morphtarget_vertex:yu,normal_fragment_begin:Au,normal_fragment_maps:wu,normal_pars_fragment:xu,normal_pars_vertex:Ru,normal_vertex:Cu,normalmap_pars_fragment:Pu,clearcoat_normal_fragment_begin:Lu,clearcoat_normal_fragment_maps:Iu,clearcoat_pars_fragment:Du,iridescence_pars_fragment:Uu,opaque_fragment:Nu,packing:Fu,premultiplied_alpha_fragment:Ou,project_vertex:Bu,dithering_fragment:ku,dithering_pars_fragment:zu,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Xu,shadowmask_pars_fragment:qu,skinbase_vertex:Yu,skinning_pars_vertex:Ku,skinning_vertex:$u,skinnormal_vertex:Zu,specularmap_fragment:ju,specularmap_pars_fragment:Ju,tonemapping_fragment:Qu,tonemapping_pars_fragment:ed,transmission_fragment:td,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:rd,uv_vertex:sd,worldpos_vertex:ad,background_vert:od,background_frag:ld,backgroundCube_vert:cd,backgroundCube_frag:hd,cube_vert:fd,cube_frag:ud,depth_vert:dd,depth_frag:pd,distanceRGBA_vert:md,distanceRGBA_frag:_d,equirect_vert:gd,equirect_frag:vd,linedashed_vert:Md,linedashed_frag:Sd,meshbasic_vert:Ed,meshbasic_frag:Td,meshlambert_vert:bd,meshlambert_frag:yd,meshmatcap_vert:Ad,meshmatcap_frag:wd,meshnormal_vert:xd,meshnormal_frag:Rd,meshphong_vert:Cd,meshphong_frag:Pd,meshphysical_vert:Ld,meshphysical_frag:Id,meshtoon_vert:Dd,meshtoon_frag:Ud,points_vert:Nd,points_frag:Fd,shadow_vert:Od,shadow_frag:Bd,sprite_vert:kd,sprite_frag:zd},te={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Yt={basic:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Et([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Et([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ze(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Et([te.points,te.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Et([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Et([te.common,te.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Et([te.sprite,te.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Et([te.common,te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Et([te.lights,te.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Yt.physical={uniforms:Et([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const fr={r:0,b:0,g:0},Cn=new jt,Hd=new ot;function Gd(n,e,t,i,r,s,a){const l=new ze(0);let o=s===!0?0:1,h,c,f=null,u=0,m=null;function g(y){let T=y.isScene===!0?y.background:null;return T&&T.isTexture&&(T=(y.backgroundBlurriness>0?t:e).get(T)),T}function E(y){let T=!1;const b=g(y);b===null?p(l,o):b&&b.isColor&&(p(b,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(y,T){const b=g(T);b&&(b.isCubeTexture||b.mapping===Pr)?(c===void 0&&(c=new Mt(new zn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:vi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,x,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Cn.copy(T.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(Cn)),c.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,(f!==b||u!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new Mt(new On(2,2),new En({name:"BackgroundMaterial",uniforms:vi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(b.colorSpace)!==nt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,m=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function p(y,T){y.getRGB(fr,ml(n)),i.buffers.color.setClear(fr.r,fr.g,fr.b,T,a)}return{getClearColor:function(){return l},setClearColor:function(y,T=1){l.set(y),o=T,p(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(l,o)},render:E,addToRenderList:d}}function Vd(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function l(_,M,F,U,W){let $=!1;const G=f(U,F,M);s!==G&&(s=G,h(s.object)),$=m(_,U,F,W),$&&g(_,U,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(_,M,F,U),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function o(){return n.createVertexArray()}function h(_){return n.bindVertexArray(_)}function c(_){return n.deleteVertexArray(_)}function f(_,M,F){const U=F.wireframe===!0;let W=i[_.id];W===void 0&&(W={},i[_.id]=W);let $=W[M.id];$===void 0&&($={},W[M.id]=$);let G=$[U];return G===void 0&&(G=u(o()),$[U]=G),G}function u(_){const M=[],F=[],U=[];for(let W=0;W<t;W++)M[W]=0,F[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:F,attributeDivisors:U,object:_,attributes:{},index:null}}function m(_,M,F,U){const W=s.attributes,$=M.attributes;let G=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){const le=W[V];let ge=$[V];if(ge===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;G++}return s.attributesNum!==G||s.index!==U}function g(_,M,F,U){const W={},$=M.attributes;let G=0;const Z=F.getAttributes();for(const V in Z)if(Z[V].location>=0){let le=$[V];le===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),W[V]=ge,G++}s.attributes=W,s.attributesNum=G,s.index=U}function E(){const _=s.newAttributes;for(let M=0,F=_.length;M<F;M++)_[M]=0}function d(_){p(_,0)}function p(_,M){const F=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;F[_]=1,U[_]===0&&(n.enableVertexAttribArray(_),U[_]=1),W[_]!==M&&(n.vertexAttribDivisor(_,M),W[_]=M)}function y(){const _=s.newAttributes,M=s.enabledAttributes;for(let F=0,U=M.length;F<U;F++)M[F]!==_[F]&&(n.disableVertexAttribArray(F),M[F]=0)}function T(_,M,F,U,W,$,G){G===!0?n.vertexAttribIPointer(_,M,F,W,$):n.vertexAttribPointer(_,M,F,U,W,$)}function b(_,M,F,U){E();const W=U.attributes,$=F.getAttributes(),G=M.defaultAttributeValues;for(const Z in $){const V=$[Z];if(V.location>=0){let oe=W[Z];if(oe===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),oe!==void 0){const le=oe.normalized,ge=oe.itemSize,We=e.get(oe);if(We===void 0)continue;const $e=We.buffer,X=We.type,J=We.bytesPerElement,me=X===n.INT||X===n.UNSIGNED_INT||oe.gpuType===oa;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Ce=ce.stride,be=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)p(V.location+Oe,ce.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)d(V.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Oe=0;Oe<V.locationSize;Oe++)T(V.location+Oe,ge/V.locationSize,X,le,Ce*J,(be+ge/V.locationSize*Oe)*J,me)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<V.locationSize;ce++)p(V.location+ce,oe.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<V.locationSize;ce++)d(V.location+ce);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ce=0;ce<V.locationSize;ce++)T(V.location+ce,ge/V.locationSize,X,le,ge*J,ge/V.locationSize*ce*J,me)}}else if(G!==void 0){const le=G[Z];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(V.location,le);break;case 3:n.vertexAttrib3fv(V.location,le);break;case 4:n.vertexAttrib4fv(V.location,le);break;default:n.vertexAttrib1fv(V.location,le)}}}}y()}function R(){C();for(const _ in i){const M=i[_];for(const F in M){const U=M[F];for(const W in U)c(U[W].object),delete U[W];delete M[F]}delete i[_]}}function x(_){if(i[_.id]===void 0)return;const M=i[_.id];for(const F in M){const U=M[F];for(const W in U)c(U[W].object),delete U[W];delete M[F]}delete i[_.id]}function A(_){for(const M in i){const F=i[M];if(F[_.id]===void 0)continue;const U=F[_.id];for(const W in U)c(U[W].object),delete U[W];delete F[_.id]}}function C(){z(),a=!0,s!==r&&(s=r,h(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:C,resetDefaultState:z,dispose:R,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:d,disableUnusedAttributes:y}}function Wd(n,e,t){let i;function r(h){i=h}function s(h,c){n.drawArrays(i,h,c),t.update(c,i,1)}function a(h,c,f){f!==0&&(n.drawArraysInstanced(i,h,c,f),t.update(c,i,f))}function l(h,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,f);let m=0;for(let g=0;g<f;g++)m+=c[g];t.update(m,i,1)}function o(h,c,f,u){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],c[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,f);let g=0;for(let E=0;E<f;E++)g+=c[E];for(let E=0;E<u.length;E++)t.update(g,i,u[E])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=o}function Xd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==qt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const C=A===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==cn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==on&&!C)}function o(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=o(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,vertexTextures:R,maxSamples:x}}function qd(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ln,l=new Ie,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=c(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,E=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?c(null):h();else{const y=s?0:i,T=y*4;let b=p.clippingState||null;o.value=b,b=c(g,u,T,m);for(let R=0;R!==T;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=y}};function h(){o.value!==t&&(o.value=t,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,u,m,g){const E=f!==null?f.length:0;let d=null;if(E!==0){if(d=o.value,g!==!0||d===null){const p=m+E*4,y=u.matrixWorldInverse;l.getNormalMatrix(y),(d===null||d.length<p)&&(d=new Float32Array(p));for(let T=0,b=m;T!==E;++T,b+=4)a.copy(f[T]).applyMatrix4(y,l),a.normal.toArray(d,b),d[b+3]=a.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,d}}function Yd(n){let e=new WeakMap;function t(a,l){return l===xs?a.mapping=pi:l===Rs&&(a.mapping=mi),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===xs||l===Rs)if(e.has(a)){const o=e.get(a).texture;return t(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const h=new rf(o.height);return h.fromEquirectangularTexture(n,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const o=e.get(l);o!==void 0&&(e.delete(l),o.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ml extends _l{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=c*this.view.offsetY,o=l-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,ao=[.125,.215,.35,.446,.526,.582],Un=20,as=new Ml,oo=new ze;let os=null,ls=0,cs=0,hs=!1;const In=(1+Math.sqrt(5))/2,ti=1/In,lo=[new O(-In,ti,0),new O(In,ti,0),new O(-ti,0,In),new O(ti,0,In),new O(0,In,-ti),new O(0,In,ti),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){os=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(os,ls,cs),this._renderer.xr.enabled=hs,e.scissorTest=!1,ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),os=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:zi,format:qt,colorSpace:Tn,depthBuffer:!1},r=ho(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(s)),this._blurMaterial=$d(s,e,t)}return r}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,as)}_sceneToCubeUV(e,t,i,r){const l=new Ot(90,1,t,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,u=c.toneMapping;c.getClearColor(oo),c.toneMapping=Mn,c.autoClear=!1;const m=new Rr({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new Mt(new zn,m);let E=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,E=!0):(m.color.copy(oo),E=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(l.up.set(0,o[p],0),l.lookAt(h[p],0,0)):y===1?(l.up.set(0,0,o[p]),l.lookAt(0,h[p],0)):(l.up.set(0,o[p],0),l.lookAt(0,0,h[p]));const T=this._cubeSize;ur(r,y*T,p>2?T:0,T,T),c.setRenderTarget(r),E&&c.render(g,l),c.render(e,l)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pi||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const o=this._cubeSize;ur(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,as)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=lo[(r-s-1)%lo.length];this._blur(e,s-1,s,a,l)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,l){const o=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Mt(this._lodPlanes[r],h),u=h.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Un-1),E=s/g,d=isFinite(s)?1+Math.floor(c*E):Un;d>Un&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Un}`);const p=[];let y=0;for(let A=0;A<Un;++A){const C=A/E,z=Math.exp(-C*C/2);p.push(z),A===0?y+=z:A<d&&(y+=2*z)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-i;const b=this._sizeLods[r],R=3*b*(r>T-ai?r-T+ai:0),x=4*(this._cubeSize-b);ur(t,R,x,3*b,2*b),o.setRenderTarget(t),o.render(f,as)}}function Kd(n){const e=[],t=[],i=[];let r=n;const s=n-ai+1+ao.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let o=1/l;a>n-ai?o=ao[a-n+ai-1]:a===0&&(o=0),i.push(o);const h=1/(l-2),c=-h,f=1+h,u=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,g=6,E=3,d=2,p=1,y=new Float32Array(E*g*m),T=new Float32Array(d*g*m),b=new Float32Array(p*g*m);for(let x=0;x<m;x++){const A=x%3*2/3-1,C=x>2?0:-1,z=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(z,E*g*x),T.set(u,d*g*x);const _=[x,x,x,x,x,x];b.set(_,p*g*x)}const R=new bn;R.setAttribute("position",new $t(y,E)),R.setAttribute("uv",new $t(T,d)),R.setAttribute("faceIndex",new $t(b,p)),e.push(R),r>ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ho(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Pr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $d(n,e,t){const i=new Float32Array(Un),r=new O(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ga(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function fo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function uo(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function Zd(n){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const o=l.mapping,h=o===xs||o===Rs,c=o===pi||o===mi;if(h||c){let f=e.get(l);const u=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return t===null&&(t=new co(n)),f=h?t.fromEquirectangular(l,f):t.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),f.texture;if(f!==void 0)return f.texture;{const m=l.image;return h&&m&&m.height>0||c&&m&&r(m)?(t===null&&(t=new co(n)),f=h?t.fromEquirectangular(l):t.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,e.set(l,f),l.addEventListener("dispose",s),f.texture):null}}}return l}function r(l){let o=0;const h=6;for(let c=0;c<h;c++)l[c]!==void 0&&o++;return o===h}function s(l){const o=l.target;o.removeEventListener("dispose",s);const h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function jd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Jd(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const E=u.morphAttributes[g];for(let d=0,p=E.length;d<p;d++)e.remove(E[d])}u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function o(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const E=m[g];for(let d=0,p=E.length;d<p;d++)e.update(E[d],n.ARRAY_BUFFER)}}function h(f){const u=[],m=f.index,g=f.attributes.position;let E=0;if(m!==null){const y=m.array;E=m.version;for(let T=0,b=y.length;T<b;T+=3){const R=y[T+0],x=y[T+1],A=y[T+2];u.push(R,x,x,A,A,R)}}else if(g!==void 0){const y=g.array;E=g.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const R=T+0,x=T+1,A=T+2;u.push(R,x,x,A,A,R)}}else return;const d=new(ll(u)?pl:dl)(u,1);d.version=E;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function c(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&h(f)}else h(f);return s.get(f)}return{get:l,update:o,getWireframeAttribute:c}}function Qd(n,e,t){let i;function r(u){i=u}let s,a;function l(u){s=u.type,a=u.bytesPerElement}function o(u,m){n.drawElements(i,m,s,u*a),t.update(m,i,1)}function h(u,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,u*a,g),t.update(m,i,g))}function c(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];t.update(d,i,1)}function f(u,m,g,E){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<u.length;p++)h(u[p]/a,m[p],E[p]);else{d.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,E,0,g);let p=0;for(let y=0;y<g;y++)p+=m[y];for(let y=0;y<E.length;y++)t.update(p,i,E[y])}}this.setMode=r,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function ep(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(s/3);break;case n.LINES:t.lines+=l*(s/2);break;case n.LINE_STRIP:t.lines+=l*(s-1);break;case n.LINE_LOOP:t.lines+=l*s;break;case n.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tp(n,e,t){const i=new WeakMap,r=new at;function s(a,l,o){const h=a.morphTargetInfluences,c=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=c!==void 0?c.length:0;let u=i.get(l);if(u===void 0||u.count!==f){let _=function(){C.dispose(),i.delete(l),l.removeEventListener("dispose",_)};var m=_;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,d=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let b=0;g===!0&&(b=1),E===!0&&(b=2),d===!0&&(b=3);let R=l.attributes.position.count*b,x=1;R>e.maxTextureSize&&(x=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*x*4*f),C=new hl(A,R,x,f);C.type=on,C.needsUpdate=!0;const z=b*4;for(let M=0;M<f;M++){const F=p[M],U=y[M],W=T[M],$=R*x*4*M;for(let G=0;G<F.count;G++){const Z=G*z;g===!0&&(r.fromBufferAttribute(F,G),A[$+Z+0]=r.x,A[$+Z+1]=r.y,A[$+Z+2]=r.z,A[$+Z+3]=0),E===!0&&(r.fromBufferAttribute(U,G),A[$+Z+4]=r.x,A[$+Z+5]=r.y,A[$+Z+6]=r.z,A[$+Z+7]=0),d===!0&&(r.fromBufferAttribute(W,G),A[$+Z+8]=r.x,A[$+Z+9]=r.y,A[$+Z+10]=r.z,A[$+Z+11]=W.itemSize===4?r.w:1)}}u={count:f,texture:C,size:new He(R,x)},i.set(l,u),l.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<h.length;d++)g+=h[d];const E=l.morphTargetsRelative?1:1-g;o.getUniforms().setValue(n,"morphTargetBaseInfluence",E),o.getUniforms().setValue(n,"morphTargetInfluences",h)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function np(n,e,t,i){let r=new WeakMap;function s(o){const h=i.render.frame,c=o.geometry,f=e.get(o,c);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),r.get(o)!==h&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){const u=o.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(o){const h=o.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}class Sl extends bt{constructor(e,t,i,r,s,a,l,o,h,c=fi){if(c!==fi&&c!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===fi&&(i=Bn),i===void 0&&c===gi&&(i=_i),super(null,r,s,a,l,o,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Bt,this.minFilter=o!==void 0?o:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const El=new bt,po=new Sl(1,1),Tl=new hl,bl=new zh,yl=new gl,mo=[],_o=[],go=new Float32Array(16),vo=new Float32Array(9),Mo=new Float32Array(4);function Ei(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=mo[r];if(s===void 0&&(s=new Float32Array(r),mo[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(s,l)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=_o[e];t===void 0&&(t=new Int32Array(e),_o[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ip(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),ut(t,e)}}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),ut(t,e)}}function ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),ut(t,e)}}function op(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ft(t,i))return;Mo.set(i),n.uniformMatrix2fv(this.addr,!1,Mo),ut(t,i)}}function lp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ft(t,i))return;vo.set(i),n.uniformMatrix3fv(this.addr,!1,vo),ut(t,i)}}function cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ft(t,i))return;go.set(i),n.uniformMatrix4fv(this.addr,!1,go),ut(t,i)}}function hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2iv(this.addr,e),ut(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3iv(this.addr,e),ut(t,e)}}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4iv(this.addr,e),ut(t,e)}}function pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2uiv(this.addr,e),ut(t,e)}}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;n.uniform3uiv(this.addr,e),ut(t,e)}}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4uiv(this.addr,e),ut(t,e)}}function vp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(po.compareFunction=ol,s=po):s=El,t.setTexture2D(e||s,r)}function Mp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bl,r)}function Sp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yl,r)}function Ep(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tl,r)}function Tp(n){switch(n){case 5126:return ip;case 35664:return rp;case 35665:return sp;case 35666:return ap;case 35674:return op;case 35675:return lp;case 35676:return cp;case 5124:case 35670:return hp;case 35667:case 35671:return fp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return pp;case 36294:return mp;case 36295:return _p;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(n,e){n.uniform1fv(this.addr,e)}function yp(n,e){const t=Ei(e,this.size,2);n.uniform2fv(this.addr,t)}function Ap(n,e){const t=Ei(e,this.size,3);n.uniform3fv(this.addr,t)}function wp(n,e){const t=Ei(e,this.size,4);n.uniform4fv(this.addr,t)}function xp(n,e){const t=Ei(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rp(n,e){const t=Ei(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cp(n,e){const t=Ei(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pp(n,e){n.uniform1iv(this.addr,e)}function Lp(n,e){n.uniform2iv(this.addr,e)}function Ip(n,e){n.uniform3iv(this.addr,e)}function Dp(n,e){n.uniform4iv(this.addr,e)}function Up(n,e){n.uniform1uiv(this.addr,e)}function Np(n,e){n.uniform2uiv(this.addr,e)}function Fp(n,e){n.uniform3uiv(this.addr,e)}function Op(n,e){n.uniform4uiv(this.addr,e)}function Bp(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||El,s[a])}function kp(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bl,s[a])}function zp(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yl,s[a])}function Hp(n,e,t){const i=this.cache,r=e.length,s=Ir(t,r);ft(i,s)||(n.uniform1iv(this.addr,s),ut(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Tl,s[a])}function Gp(n){switch(n){case 5126:return bp;case 35664:return yp;case 35665:return Ap;case 35666:return wp;case 35674:return xp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Dp;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Vp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tp(t.type)}}class Wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gp(t.type)}}class Xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],i)}}}const fs=/(\w+)(\])?(\[|\.)?/g;function So(n,e){n.seq.push(e),n.map[e.id]=e}function qp(n,e,t){const i=n.name,r=i.length;for(fs.lastIndex=0;;){const s=fs.exec(i),a=fs.lastIndex;let l=s[1];const o=s[2]==="]",h=s[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===r){So(t,h===void 0?new Vp(l,n,e):new Wp(l,n,e));break}else{let f=t.map[l];f===void 0&&(f=new Xp(l),So(t,f)),t=f}}}class Er{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);qp(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Eo(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yp=37297;let Kp=0;function $p(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}function Zp(n){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(n);let i;switch(e===t?i="":e===Ar&&t===yr?i="LinearDisplayP3ToLinearSRGB":e===yr&&t===Ar&&(i="LinearSRGBToLinearDisplayP3"),n){case Tn:case Lr:return[i,"LinearTransferOETF"];case vt:case da:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function To(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$p(n.getShaderSource(e),a)}else return r}function jp(n,e){const t=Zp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jp(n,e){let t;switch(e){case Zc:t="Linear";break;case jc:t="Reinhard";break;case Jc:t="Cineon";break;case Qc:t="ACESFilmic";break;case th:t="AgX";break;case nh:t="Neutral";break;case eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new O;function Qp(){Ke.getLuminanceCoefficients(dr);const n=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ci).join(`
`)}function tm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let l=1;s.type===n.FLOAT_MAT2&&(l=2),s.type===n.FLOAT_MAT3&&(l=3),s.type===n.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function Ci(n){return n!==""}function bo(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yo(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(im,sm)}const rm=new Map;function sm(n,e){let t=Le[e];if(t===void 0){const i=rm.get(e);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ia(t)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(n){return n.replace(am,om)}function om(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wo(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function lm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qo?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function cm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function fm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ko:e="ENVMAP_BLENDING_MULTIPLY";break;case Kc:e="ENVMAP_BLENDING_MIX";break;case $c:e="ENVMAP_BLENDING_ADD";break}return e}function um(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const o=lm(t),h=cm(t),c=hm(t),f=fm(t),u=um(t),m=em(t),g=tm(s),E=r.createProgram();let d,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ci).join(`
`),p.length>0&&(p+=`
`)):(d=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),p=[wo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Le.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,jp("linearToOutputTexel",t.outputColorSpace),Qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),a=ia(a),a=bo(a,t),a=yo(a,t),l=ia(l),l=bo(l,t),l=yo(l,t),a=Ao(a),l=Ao(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=y+d+a,b=y+p+l,R=Eo(r,r.VERTEX_SHADER,T),x=Eo(r,r.FRAGMENT_SHADER,b);r.attachShader(E,R),r.attachShader(E,x),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(M){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(E).trim(),U=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(x).trim();let $=!0,G=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,R,x);else{const Z=To(r,R,"vertex"),V=To(r,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+F+`
`+Z+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||W==="")&&(G=!1);G&&(M.diagnostics={runnable:$,programLog:F,vertexShader:{log:U,prefix:d},fragmentShader:{log:W,prefix:p}})}r.deleteShader(R),r.deleteShader(x),C=new Er(r,E),z=nm(r,E)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let z;this.getAttributes=function(){return z===void 0&&A(this),z};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(E,Yp)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=x,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _m(e),t.set(e,i)),i}}class _m{constructor(e){this.id=pm++,this.code=e,this.usedTimes=0}}function gm(n,e,t,i,r,s,a){const l=new fl,o=new mm,h=new Set,c=[],f=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,M,F,U,W){const $=U.fog,G=W.geometry,Z=_.isMeshStandardMaterial?U.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||Z),oe=V&&V.mapping===Pr?V.image.height:null,le=E[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ge=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,We=ge!==void 0?ge.length:0;let $e=0;G.morphAttributes.position!==void 0&&($e=1),G.morphAttributes.normal!==void 0&&($e=2),G.morphAttributes.color!==void 0&&($e=3);let X,J,me,ce;if(le){const At=Yt[le];X=At.vertexShader,J=At.fragmentShader}else X=_.vertexShader,J=_.fragmentShader,o.update(_),me=o.getVertexShaderID(_),ce=o.getFragmentShaderID(_);const Ce=n.getRenderTarget(),be=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,je=!!_.map,Be=!!_.matcap,P=!!V,xt=!!_.aoMap,Ne=!!_.lightMap,Ge=!!_.bumpMap,Ae=!!_.normalMap,et=!!_.displacementMap,Re=!!_.emissiveMap,w=!!_.metalnessMap,v=!!_.roughnessMap,N=_.anisotropy>0,Y=_.clearcoat>0,j=_.dispersion>0,q=_.iridescence>0,Me=_.sheen>0,ne=_.transmission>0,he=N&&!!_.anisotropyMap,Ve=Y&&!!_.clearcoatMap,Q=Y&&!!_.clearcoatNormalMap,fe=Y&&!!_.clearcoatRoughnessMap,we=q&&!!_.iridescenceMap,xe=q&&!!_.iridescenceThicknessMap,ue=Me&&!!_.sheenColorMap,Fe=Me&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,Qe=!!_.specularColorMap,L=!!_.specularIntensityMap,se=ne&&!!_.transmissionMap,H=ne&&!!_.thicknessMap,K=!!_.gradientMap,ie=!!_.alphaMap,ae=_.alphaTest>0,ke=!!_.alphaHash,ct=!!_.extensions;let yt=Mn;_.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Xe={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:J,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:Oe,batchingColor:Oe&&W._colorsTexture!==null,instancing:be,instancingColor:be&&W.instanceColor!==null,instancingMorph:be&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Tn,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:Be,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:oe,aoMap:xt,lightMap:Ne,bumpMap:Ge,normalMap:Ae,displacementMap:m&&et,emissiveMap:Re,normalMapObjectSpace:Ae&&_.normalMapType===ah,normalMapTangentSpace:Ae&&_.normalMapType===al,metalnessMap:w,roughnessMap:v,anisotropy:N,anisotropyMap:he,clearcoat:Y,clearcoatMap:Ve,clearcoatNormalMap:Q,clearcoatRoughnessMap:fe,dispersion:j,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:xe,sheen:Me,sheenColorMap:ue,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:Qe,specularIntensityMap:L,transmission:ne,transmissionMap:se,thicknessMap:H,gradientMap:K,opaque:_.transparent===!1&&_.blending===hi&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:ke,combine:_.combine,mapUv:je&&d(_.map.channel),aoMapUv:xt&&d(_.aoMap.channel),lightMapUv:Ne&&d(_.lightMap.channel),bumpMapUv:Ge&&d(_.bumpMap.channel),normalMapUv:Ae&&d(_.normalMap.channel),displacementMapUv:et&&d(_.displacementMap.channel),emissiveMapUv:Re&&d(_.emissiveMap.channel),metalnessMapUv:w&&d(_.metalnessMap.channel),roughnessMapUv:v&&d(_.roughnessMap.channel),anisotropyMapUv:he&&d(_.anisotropyMap.channel),clearcoatMapUv:Ve&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&d(_.sheenRoughnessMap.channel),specularMapUv:Pe&&d(_.specularMap.channel),specularColorMapUv:Qe&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:se&&d(_.transmissionMap.channel),thicknessMapUv:H&&d(_.thicknessMap.channel),alphaMapUv:ie&&d(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ae||N),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(je||ie),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:$e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===nt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Kt,flipSided:_.side===wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=h.has(1),Xe.vertexUv2s=h.has(2),Xe.vertexUv3s=h.has(3),h.clear(),Xe}function y(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)M.push(F),M.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(T(M,_),b(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function T(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),_.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.alphaToCoverage&&l.enable(20),_.push(l.mask)}function R(_){const M=E[_.type];let F;if(M){const U=Yt[M];F=Qh.clone(U.uniforms)}else F=_.uniforms;return F}function x(_,M){let F;for(let U=0,W=c.length;U<W;U++){const $=c[U];if($.cacheKey===M){F=$,++F.usedTimes;break}}return F===void 0&&(F=new dm(n,M,_,s),c.push(F)),F}function A(_){if(--_.usedTimes===0){const M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),_.destroy()}}function C(_){o.remove(_)}function z(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:R,acquireProgram:x,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:z}}function vm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function r(a,l,o){n.get(a)[l]=o}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Mm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xo(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ro(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,u,m,g,E,d){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:E,group:d},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=E,p.group=d),e++,p}function l(f,u,m,g,E,d){const p=a(f,u,m,g,E,d);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):t.push(p)}function o(f,u,m,g,E,d){const p=a(f,u,m,g,E,d);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function h(f,u){t.length>1&&t.sort(f||Mm),i.length>1&&i.sort(u||xo),r.length>1&&r.sort(u||xo)}function c(){for(let f=e,u=n.length;f<u;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:o,finish:c,sort:h}}function Sm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ro,n.set(i,[a])):r>=s.length?(a=new Ro,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Em(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Tm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bm=0;function ym(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Am(n){const e=new Em,t=Tm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const r=new O,s=new ot,a=new ot;function l(h){let c=0,f=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,g=0,E=0,d=0,p=0,y=0,T=0,b=0,R=0,x=0,A=0;h.sort(ym);for(let z=0,_=h.length;z<_;z++){const M=h[z],F=M.color,U=M.intensity,W=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=F.r*U,f+=F.g*U,u+=F.b*U;else if(M.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(M.sh.coefficients[G],U);A++}else if(M.isDirectionalLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const Z=M.shadow,V=t.get(M);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=$,i.directionalShadowMatrix[m]=M.shadow.matrix,y++}i.directional[m]=G,m++}else if(M.isSpotLight){const G=e.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(F).multiplyScalar(U),G.distance=W,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,i.spot[E]=G;const Z=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,Z.updateMatrices(M),M.castShadow&&x++),i.spotLightMatrix[E]=Z.matrix,M.castShadow){const V=t.get(M);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=$,b++}E++}else if(M.isRectAreaLight){const G=e.get(M);G.color.copy(F).multiplyScalar(U),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),i.rectArea[d]=G,d++}else if(M.isPointLight){const G=e.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const Z=M.shadow,V=t.get(M);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=M.shadow.matrix,T++}i.point[g]=G,g++}else if(M.isHemisphereLight){const G=e.get(M);G.skyColor.copy(M.color).multiplyScalar(U),G.groundColor.copy(M.groundColor).multiplyScalar(U),i.hemi[p]=G,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==E||C.rectAreaLength!==d||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==T||C.numSpotShadows!==b||C.numSpotMaps!==R||C.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+R-x,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=A,C.directionalLength=m,C.pointLength=g,C.spotLength=E,C.rectAreaLength=d,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=T,C.numSpotShadows=b,C.numSpotMaps=R,C.numLightProbes=A,i.version=bm++)}function o(h,c){let f=0,u=0,m=0,g=0,E=0;const d=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const T=h[p];if(T.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),f++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),m++}else if(T.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),a.identity(),s.copy(T.matrixWorld),s.premultiply(d),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),u++}else if(T.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),E++}}}return{setup:l,setupView:o,state:i}}function Co(n){const e=new Am(n),t=[],i=[];function r(c){h.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function l(){e.setup(t)}function o(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:o,pushLight:s,pushShadow:a}}function wm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Co(n),e.set(r,[l])):s>=a.length?(l=new Co(n),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:t,dispose:i}}class xm extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rm extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
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
}`;function Lm(n,e,t){let i=new _a;const r=new He,s=new He,a=new at,l=new xm({depthPacking:sh}),o=new Rm,h={},c=t.maxTextureSize,f={[Sn]:wt,[wt]:Sn,[Kt]:Kt},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Mt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qo;let p=this.type;this.render=function(x,A,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||x.length===0)return;const z=n.getRenderTarget(),_=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),F=n.state;F.setBlending(vn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==an&&this.type===an,W=p===an&&this.type!==an;for(let $=0,G=x.length;$<G;$++){const Z=x[$],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const oe=V.getFrameExtents();if(r.multiply(oe),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/oe.x),r.x=s.x*oe.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/oe.y),r.y=s.y*oe.y,V.mapSize.y=s.y)),V.map===null||U===!0||W===!0){const ge=this.type!==an?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new kn(r.x,r.y,ge),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const le=V.getViewportCount();for(let ge=0;ge<le;ge++){const We=V.getViewport(ge);a.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),F.viewport(a),V.updateMatrices(Z,ge),i=V.getFrustum(),b(A,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===an&&y(V,C),V.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(z,_,M)};function y(x,A){const C=e.update(E);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new kn(r.x,r.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(A,null,C,u,E,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(A,null,C,m,E,null)}function T(x,A,C,z){let _=null;const M=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(M!==void 0)_=M;else if(_=C.isPointLight===!0?o:l,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=_.uuid,U=A.uuid;let W=h[F];W===void 0&&(W={},h[F]=W);let $=W[U];$===void 0&&($=_.clone(),W[U]=$,A.addEventListener("dispose",R)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,z===an?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:f[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=n.properties.get(_);F.light=C}return _}function b(x,A,C,z,_){if(x.visible===!1)return;if(x.layers.test(A.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&_===an)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const U=e.update(x),W=x.material;if(Array.isArray(W)){const $=U.groups;for(let G=0,Z=$.length;G<Z;G++){const V=$[G],oe=W[V.materialIndex];if(oe&&oe.visible){const le=T(x,oe,z,_);x.onBeforeShadow(n,x,A,C,U,le,V),n.renderBufferDirect(C,null,U,le,x,V),x.onAfterShadow(n,x,A,C,U,le,V)}}}else if(W.visible){const $=T(x,W,z,_);x.onBeforeShadow(n,x,A,C,U,$,null),n.renderBufferDirect(C,null,U,$,x,null),x.onAfterShadow(n,x,A,C,U,$,null)}}const F=x.children;for(let U=0,W=F.length;U<W;U++)b(F[U],A,C,z,_)}function R(x){x.target.removeEventListener("dispose",R);for(const C in h){const z=h[C],_=x.target.uuid;_ in z&&(z[_].dispose(),delete z[_])}}}const Im={[Ss]:Es,[Ts]:As,[bs]:ws,[di]:ys,[Es]:Ss,[As]:Ts,[ws]:bs,[ys]:di};function Dm(n){function e(){let L=!1;const se=new at;let H=null;const K=new at(0,0,0,0);return{setMask:function(ie){H!==ie&&!L&&(n.colorMask(ie,ie,ie,ie),H=ie)},setLocked:function(ie){L=ie},setClear:function(ie,ae,ke,ct,yt){yt===!0&&(ie*=ct,ae*=ct,ke*=ct),se.set(ie,ae,ke,ct),K.equals(se)===!1&&(n.clearColor(ie,ae,ke,ct),K.copy(se))},reset:function(){L=!1,H=null,K.set(-1,0,0,0)}}}function t(){let L=!1,se=!1,H=null,K=null,ie=null;return{setReversed:function(ae){se=ae},setTest:function(ae){ae?me(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(ae){H!==ae&&!L&&(n.depthMask(ae),H=ae)},setFunc:function(ae){if(se&&(ae=Im[ae]),K!==ae){switch(ae){case Ss:n.depthFunc(n.NEVER);break;case Es:n.depthFunc(n.ALWAYS);break;case Ts:n.depthFunc(n.LESS);break;case di:n.depthFunc(n.LEQUAL);break;case bs:n.depthFunc(n.EQUAL);break;case ys:n.depthFunc(n.GEQUAL);break;case As:n.depthFunc(n.GREATER);break;case ws:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ae}},setLocked:function(ae){L=ae},setClear:function(ae){ie!==ae&&(n.clearDepth(ae),ie=ae)},reset:function(){L=!1,H=null,K=null,ie=null}}}function i(){let L=!1,se=null,H=null,K=null,ie=null,ae=null,ke=null,ct=null,yt=null;return{setTest:function(Xe){L||(Xe?me(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Xe){se!==Xe&&!L&&(n.stencilMask(Xe),se=Xe)},setFunc:function(Xe,At,Qt){(H!==Xe||K!==At||ie!==Qt)&&(n.stencilFunc(Xe,At,Qt),H=Xe,K=At,ie=Qt)},setOp:function(Xe,At,Qt){(ae!==Xe||ke!==At||ct!==Qt)&&(n.stencilOp(Xe,At,Qt),ae=Xe,ke=At,ct=Qt)},setLocked:function(Xe){L=Xe},setClear:function(Xe){yt!==Xe&&(n.clearStencil(Xe),yt=Xe)},reset:function(){L=!1,se=null,H=null,K=null,ie=null,ae=null,ke=null,ct=null,yt=null}}}const r=new e,s=new t,a=new i,l=new WeakMap,o=new WeakMap;let h={},c={},f=new WeakMap,u=[],m=null,g=!1,E=null,d=null,p=null,y=null,T=null,b=null,R=null,x=new ze(0,0,0),A=0,C=!1,z=null,_=null,M=null,F=null,U=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=G>=2);let V=null,oe={};const le=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),We=new at().fromArray(le),$e=new at().fromArray(ge);function X(L,se,H,K){const ie=new Uint8Array(4),ae=n.createTexture();n.bindTexture(L,ae),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<H;ke++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(se+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return ae}const J={};J[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(n.DEPTH_TEST),s.setFunc(di),Ne(!1),Ge(Na),me(n.CULL_FACE),P(vn);function me(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function ce(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ce(L,se){return c[L]!==se?(n.bindFramebuffer(L,se),c[L]=se,L===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=se),!0):!1}function be(L,se){let H=u,K=!1;if(L){H=f.get(se),H===void 0&&(H=[],f.set(se,H));const ie=L.textures;if(H.length!==ie.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,ke=ie.length;ae<ke;ae++)H[ae]=n.COLOR_ATTACHMENT0+ae;H.length=ie.length,K=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,K=!0);K&&n.drawBuffers(H)}function Oe(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const je={[Dn]:n.FUNC_ADD,[Lc]:n.FUNC_SUBTRACT,[Ic]:n.FUNC_REVERSE_SUBTRACT};je[Dc]=n.MIN,je[Uc]=n.MAX;const Be={[Nc]:n.ZERO,[Fc]:n.ONE,[Oc]:n.SRC_COLOR,[vs]:n.SRC_ALPHA,[Vc]:n.SRC_ALPHA_SATURATE,[Hc]:n.DST_COLOR,[kc]:n.DST_ALPHA,[Bc]:n.ONE_MINUS_SRC_COLOR,[Ms]:n.ONE_MINUS_SRC_ALPHA,[Gc]:n.ONE_MINUS_DST_COLOR,[zc]:n.ONE_MINUS_DST_ALPHA,[Wc]:n.CONSTANT_COLOR,[Xc]:n.ONE_MINUS_CONSTANT_COLOR,[qc]:n.CONSTANT_ALPHA,[Yc]:n.ONE_MINUS_CONSTANT_ALPHA};function P(L,se,H,K,ie,ae,ke,ct,yt,Xe){if(L===vn){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),L!==Pc){if(L!==E||Xe!==C){if((d!==Dn||T!==Dn)&&(n.blendEquation(n.FUNC_ADD),d=Dn,T=Dn),Xe)switch(L){case hi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.ONE,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ba:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ba:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,y=null,b=null,R=null,x.set(0,0,0),A=0,E=L,C=Xe}return}ie=ie||se,ae=ae||H,ke=ke||K,(se!==d||ie!==T)&&(n.blendEquationSeparate(je[se],je[ie]),d=se,T=ie),(H!==p||K!==y||ae!==b||ke!==R)&&(n.blendFuncSeparate(Be[H],Be[K],Be[ae],Be[ke]),p=H,y=K,b=ae,R=ke),(ct.equals(x)===!1||yt!==A)&&(n.blendColor(ct.r,ct.g,ct.b,yt),x.copy(ct),A=yt),E=L,C=!1}function xt(L,se){L.side===Kt?ce(n.CULL_FACE):me(n.CULL_FACE);let H=L.side===wt;se&&(H=!H),Ne(H),L.blending===hi&&L.transparent===!1?P(vn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),et(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){z!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),z=L)}function Ge(L){L!==Rc?(me(n.CULL_FACE),L!==_&&(L===Na?n.cullFace(n.BACK):L===Cc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),_=L}function Ae(L){L!==M&&($&&n.lineWidth(L),M=L)}function et(L,se,H){L?(me(n.POLYGON_OFFSET_FILL),(F!==se||U!==H)&&(n.polygonOffset(se,H),F=se,U=H)):ce(n.POLYGON_OFFSET_FILL)}function Re(L){L?me(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function w(L){L===void 0&&(L=n.TEXTURE0+W-1),V!==L&&(n.activeTexture(L),V=L)}function v(L,se,H){H===void 0&&(V===null?H=n.TEXTURE0+W-1:H=V);let K=oe[H];K===void 0&&(K={type:void 0,texture:void 0},oe[H]=K),(K.type!==L||K.texture!==se)&&(V!==H&&(n.activeTexture(H),V=H),n.bindTexture(L,se||J[L]),K.type=L,K.texture=se)}function N(){const L=oe[V];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(L){We.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function ue(L){$e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),$e.copy(L))}function Fe(L,se){let H=o.get(se);H===void 0&&(H=new WeakMap,o.set(se,H));let K=H.get(L);K===void 0&&(K=n.getUniformBlockIndex(se,L.name),H.set(L,K))}function Pe(L,se){const K=o.get(se).get(L);l.get(se)!==K&&(n.uniformBlockBinding(se,K,L.__bindingPointIndex),l.set(se,K))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},V=null,oe={},c={},f=new WeakMap,u=[],m=null,g=!1,E=null,d=null,p=null,y=null,T=null,b=null,R=null,x=new ze(0,0,0),A=0,C=!1,z=null,_=null,M=null,F=null,U=null,We.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:me,disable:ce,bindFramebuffer:Ce,drawBuffers:be,useProgram:Oe,setBlending:P,setMaterial:xt,setFlipSided:Ne,setCullFace:Ge,setLineWidth:Ae,setPolygonOffset:et,setScissorTest:Re,activeTexture:w,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:fe,texImage3D:we,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:xe,viewport:ue,reset:Qe}}function Po(n,e,t,i){const r=Um(i);switch(t){case Qo:return n*e;case tl:return n*e;case nl:return n*e*2;case il:return n*e/r.components*r.byteLength;case ha:return n*e/r.components*r.byteLength;case rl:return n*e*2/r.components*r.byteLength;case fa:return n*e*2/r.components*r.byteLength;case el:return n*e*3/r.components*r.byteLength;case qt:return n*e*4/r.components*r.byteLength;case ua:return n*e*4/r.components*r.byteLength;case mr:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gr:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Is:case Us:return Math.max(n,16)*Math.max(e,8)/4;case Ls:case Ds:return Math.max(n,8)*Math.max(e,8)/2;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Os:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ks:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case zs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Vs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ks:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $s:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case js:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mr:case Js:case Qs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sl:case ea:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ta:case na:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Um(n){switch(n){case cn:case Zo:return{byteLength:1,components:1};case Ni:case jo:case zi:return{byteLength:2,components:1};case la:case ca:return{byteLength:2,components:4};case Bn:case oa:case on:return{byteLength:4,components:1};case Jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Nm(n,e,t,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new He,c=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return m?new OffscreenCanvas(w,v):xr("canvas")}function E(w,v,N){let Y=1;const j=Re(w);if((j.width>N||j.height>N)&&(Y=N/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Y*j.width),Me=Math.floor(Y*j.height);f===void 0&&(f=g(q,Me));const ne=v?g(q,Me):f;return ne.width=q,ne.height=Me,ne.getContext("2d").drawImage(w,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Me+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function d(w){return w.generateMipmaps&&w.minFilter!==Bt&&w.minFilter!==Wt}function p(w){n.generateMipmap(w)}function y(w,v,N,Y,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===n.RED&&(N===n.FLOAT&&(q=n.R32F),N===n.HALF_FLOAT&&(q=n.R16F),N===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.R8UI),N===n.UNSIGNED_SHORT&&(q=n.R16UI),N===n.UNSIGNED_INT&&(q=n.R32UI),N===n.BYTE&&(q=n.R8I),N===n.SHORT&&(q=n.R16I),N===n.INT&&(q=n.R32I)),v===n.RG&&(N===n.FLOAT&&(q=n.RG32F),N===n.HALF_FLOAT&&(q=n.RG16F),N===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RG8UI),N===n.UNSIGNED_SHORT&&(q=n.RG16UI),N===n.UNSIGNED_INT&&(q=n.RG32UI),N===n.BYTE&&(q=n.RG8I),N===n.SHORT&&(q=n.RG16I),N===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGB8UI),N===n.UNSIGNED_SHORT&&(q=n.RGB16UI),N===n.UNSIGNED_INT&&(q=n.RGB32UI),N===n.BYTE&&(q=n.RGB8I),N===n.SHORT&&(q=n.RGB16I),N===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),N===n.UNSIGNED_INT&&(q=n.RGBA32UI),N===n.BYTE&&(q=n.RGBA8I),N===n.SHORT&&(q=n.RGBA16I),N===n.INT&&(q=n.RGBA32I)),v===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),v===n.RGBA){const Me=j?br:Ke.getTransfer(Y);N===n.FLOAT&&(q=n.RGBA32F),N===n.HALF_FLOAT&&(q=n.RGBA16F),N===n.UNSIGNED_BYTE&&(q=Me===nt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(w,v){let N;return w?v===null||v===Bn||v===_i?N=n.DEPTH24_STENCIL8:v===on?N=n.DEPTH32F_STENCIL8:v===Ni&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bn||v===_i?N=n.DEPTH_COMPONENT24:v===on?N=n.DEPTH_COMPONENT32F:v===Ni&&(N=n.DEPTH_COMPONENT16),N}function b(w,v){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){const v=w.target;v.removeEventListener("dispose",R),A(v),v.isVideoTexture&&c.delete(v)}function x(w){const v=w.target;v.removeEventListener("dispose",x),z(v)}function A(w){const v=i.get(w);if(v.__webglInit===void 0)return;const N=w.source,Y=u.get(N);if(Y){const j=Y[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(w),Object.keys(Y).length===0&&u.delete(N)}i.remove(w)}function C(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const N=w.source,Y=u.get(N);delete Y[v.__cacheKey],a.memory.textures--}function z(w){const v=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let j=0;j<v.__webglFramebuffer[Y].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[Y][j]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,j=N.length;Y<j;Y++){const q=i.get(N[Y]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(N[Y])}i.remove(w)}let _=0;function M(){_=0}function F(){const w=_;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),_+=1,w}function U(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function W(w,v){const N=i.get(w);if(w.isVideoTexture&&Ae(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(N,w,v);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function $(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){$e(N,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function G(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){$e(N,w,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function Z(w,v){const N=i.get(w);if(w.version>0&&N.__version!==w.version){X(N,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const V={[Cs]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[Ps]:n.MIRRORED_REPEAT},oe={[Bt]:n.NEAREST,[ih]:n.NEAREST_MIPMAP_NEAREST,[Yi]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[Br]:n.LINEAR_MIPMAP_NEAREST,[Fn]:n.LINEAR_MIPMAP_LINEAR},le={[oh]:n.NEVER,[dh]:n.ALWAYS,[lh]:n.LESS,[ol]:n.LEQUAL,[ch]:n.EQUAL,[uh]:n.GEQUAL,[hh]:n.GREATER,[fh]:n.NOTEQUAL};function ge(w,v){if(v.type===on&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===Br||v.magFilter===Yi||v.magFilter===Fn||v.minFilter===Wt||v.minFilter===Br||v.minFilter===Yi||v.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,V[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,V[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,V[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,oe[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Bt||v.minFilter!==Yi&&v.minFilter!==Fn||v.type===on&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function We(w,v){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));const Y=v.source;let j=u.get(Y);j===void 0&&(j={},u.set(Y,j));const q=U(v);if(q!==w.__cacheKey){j[q]===void 0&&(j[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[q].usedTimes++;const Me=j[w.__cacheKey];Me!==void 0&&(j[w.__cacheKey].usedTimes--,Me.usedTimes===0&&C(v)),w.__cacheKey=q,w.__webglTexture=j[q].texture}return N}function $e(w,v,N){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const j=We(w,v),q=v.source;t.bindTexture(Y,w.__webglTexture,n.TEXTURE0+N);const Me=i.get(q);if(q.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const ne=Ke.getPrimaries(Ke.workingColorSpace),he=v.colorSpace===gn?null:Ke.getPrimaries(v.colorSpace),Ve=v.colorSpace===gn||ne===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=E(v.image,!1,r.maxTextureSize);Q=et(v,Q);const fe=s.convert(v.format,v.colorSpace),we=s.convert(v.type);let xe=y(v.internalFormat,fe,we,v.colorSpace,v.isVideoTexture);ge(Y,v);let ue;const Fe=v.mipmaps,Pe=v.isVideoTexture!==!0,Qe=Me.__version===void 0||j===!0,L=q.dataReady,se=b(v,Q);if(v.isDepthTexture)xe=T(v.format===gi,v.type),Qe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,fe,we,null));else if(v.isDataTexture)if(Fe.length>0){Pe&&Qe&&t.texStorage2D(n.TEXTURE_2D,se,xe,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)ue=Fe[H],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ue.width,ue.height,fe,we,ue.data):t.texImage2D(n.TEXTURE_2D,H,xe,ue.width,ue.height,0,fe,we,ue.data);v.generateMipmaps=!1}else Pe?(Qe&&t.texStorage2D(n.TEXTURE_2D,se,xe,Q.width,Q.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,fe,we,Q.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,fe,we,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,xe,Fe[0].width,Fe[0].height,Q.depth);for(let H=0,K=Fe.length;H<K;H++)if(ue=Fe[H],v.format!==qt)if(fe!==null)if(Pe){if(L)if(v.layerUpdates.size>0){const ie=Po(ue.width,ue.height,v.format,v.type);for(const ae of v.layerUpdates){const ke=ue.data.subarray(ae*ie/ue.data.BYTES_PER_ELEMENT,(ae+1)*ie/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ae,ue.width,ue.height,1,fe,ke,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Q.depth,fe,ue.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,xe,ue.width,ue.height,Q.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,ue.width,ue.height,Q.depth,fe,we,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,xe,ue.width,ue.height,Q.depth,0,fe,we,ue.data)}else{Pe&&Qe&&t.texStorage2D(n.TEXTURE_2D,se,xe,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)ue=Fe[H],v.format!==qt?fe!==null?Pe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,H,xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ue.width,ue.height,fe,we,ue.data):t.texImage2D(n.TEXTURE_2D,H,xe,ue.width,ue.height,0,fe,we,ue.data)}else if(v.isDataArrayTexture)if(Pe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,xe,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const H=Po(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ie=Q.data.subarray(K*H/Q.data.BYTES_PER_ELEMENT,(K+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,fe,we,ie)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,we,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,fe,we,Q.data);else if(v.isData3DTexture)Pe?(Qe&&t.texStorage3D(n.TEXTURE_3D,se,xe,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,we,Q.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,fe,we,Q.data);else if(v.isFramebufferTexture){if(Qe)if(Pe)t.texStorage2D(n.TEXTURE_2D,se,xe,Q.width,Q.height);else{let H=Q.width,K=Q.height;for(let ie=0;ie<se;ie++)t.texImage2D(n.TEXTURE_2D,ie,xe,H,K,0,fe,we,null),H>>=1,K>>=1}}else if(Fe.length>0){if(Pe&&Qe){const H=Re(Fe[0]);t.texStorage2D(n.TEXTURE_2D,se,xe,H.width,H.height)}for(let H=0,K=Fe.length;H<K;H++)ue=Fe[H],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,fe,we,ue):t.texImage2D(n.TEXTURE_2D,H,xe,fe,we,ue);v.generateMipmaps=!1}else if(Pe){if(Qe){const H=Re(Q);t.texStorage2D(n.TEXTURE_2D,se,xe,H.width,H.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,we,Q)}else t.texImage2D(n.TEXTURE_2D,0,xe,fe,we,Q);d(v)&&p(Y),Me.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function X(w,v,N){if(v.image.length!==6)return;const Y=We(w,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);const q=i.get(j);if(j.version!==q.__version||Y===!0){t.activeTexture(n.TEXTURE0+N);const Me=Ke.getPrimaries(Ke.workingColorSpace),ne=v.colorSpace===gn?null:Ke.getPrimaries(v.colorSpace),he=v.colorSpace===gn||Me===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!Ve&&!Q?fe[K]=E(v.image[K],!0,r.maxCubemapSize):fe[K]=Q?v.image[K].image:v.image[K],fe[K]=et(v,fe[K]);const we=fe[0],xe=s.convert(v.format,v.colorSpace),ue=s.convert(v.type),Fe=y(v.internalFormat,xe,ue,v.colorSpace),Pe=v.isVideoTexture!==!0,Qe=q.__version===void 0||Y===!0,L=j.dataReady;let se=b(v,we);ge(n.TEXTURE_CUBE_MAP,v);let H;if(Ve){Pe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Fe,we.width,we.height);for(let K=0;K<6;K++){H=fe[K].mipmaps;for(let ie=0;ie<H.length;ie++){const ae=H[ie];v.format!==qt?xe!==null?Pe?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,xe,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Fe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,0,0,ae.width,ae.height,xe,ue,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie,Fe,ae.width,ae.height,0,xe,ue,ae.data)}}}else{if(H=v.mipmaps,Pe&&Qe){H.length>0&&se++;const K=Re(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,se,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,xe,ue,fe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,fe[K].width,fe[K].height,0,xe,ue,fe[K].data);for(let ie=0;ie<H.length;ie++){const ke=H[ie].image[K].image;Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,ke.width,ke.height,xe,ue,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Fe,ke.width,ke.height,0,xe,ue,ke.data)}}else{Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe,ue,fe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,xe,ue,fe[K]);for(let ie=0;ie<H.length;ie++){const ae=H[ie];Pe?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,0,0,xe,ue,ae.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie+1,Fe,xe,ue,ae.image[K])}}}d(v)&&p(n.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function J(w,v,N,Y,j,q){const Me=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),he=y(N.internalFormat,Me,ne,N.colorSpace);if(!i.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>q),fe=Math.max(1,v.height>>q);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,q,he,Q,fe,v.depth,0,Me,ne,null):t.texImage2D(j,q,he,Q,fe,0,Me,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,j,i.get(N).__webglTexture,0,Ne(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,j,i.get(N).__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(w,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const Y=v.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=T(v.stencilBuffer,j),Me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=Ne(v);Ge(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,q,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{const Y=v.textures;for(let j=0;j<Y.length;j++){const q=Y[j],Me=s.convert(q.format,q.colorSpace),ne=s.convert(q.type),he=y(q.internalFormat,Me,ne,q.colorSpace),Ve=Ne(v);N&&Ge(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,he,v.width,v.height):Ge(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ve,he,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,he,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Y=i.get(v.depthTexture).__webglTexture,j=Ne(v);if(v.depthTexture.format===fi)Ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(v.depthTexture.format===gi)Ge(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ce(w){const v=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=Y}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ce(v.__webglFramebuffer,w)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),me(v.__webglDepthbuffer[Y],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),me(v.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(w,v,N){const Y=i.get(w);v!==void 0&&J(Y.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ce(w)}function Oe(w){const v=w.texture,N=i.get(w),Y=i.get(v);w.addEventListener("dispose",x);const j=w.textures,q=w.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,a.memory.textures++),q){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let he=0;he<v.mipmaps.length;he++)N.__webglFramebuffer[ne][he]=n.createFramebuffer()}else N.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)N.__webglFramebuffer[ne]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ne=0,he=j.length;ne<he;ne++){const Ve=i.get(j[ne]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&Ge(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<j.length;ne++){const he=j[ne];N.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Ve=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),fe=y(he.internalFormat,Ve,Q,he.colorSpace,w.isXRRenderTarget===!0),we=Ne(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),me(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ge(n.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)J(N.__webglFramebuffer[ne][he],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else J(N.__webglFramebuffer[ne],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,he=j.length;ne<he;ne++){const Ve=j[ne],Q=i.get(Ve);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ge(n.TEXTURE_2D,Ve),J(N.__webglFramebuffer,w,Ve,n.COLOR_ATTACHMENT0+ne,n.TEXTURE_2D,0),d(Ve)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Y.__webglTexture),ge(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let he=0;he<v.mipmaps.length;he++)J(N.__webglFramebuffer[he],w,v,n.COLOR_ATTACHMENT0,ne,he);else J(N.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ne,0);d(v)&&p(ne),t.unbindTexture()}w.depthBuffer&&Ce(w)}function je(w){const v=w.textures;for(let N=0,Y=v.length;N<Y;N++){const j=v[N];if(d(j)){const q=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(j).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const Be=[],P=[];function xt(w){if(w.samples>0){if(Ge(w)===!1){const v=w.textures,N=w.width,Y=w.height;let j=n.COLOR_BUFFER_BIT;const q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ne=v.length>1;if(ne)for(let he=0;he<v.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let he=0;he<v.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const Ve=i.get(v[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ve,0)}n.blitFramebuffer(0,0,N,Y,0,0,N,Y,j,n.NEAREST),o===!0&&(Be.length=0,P.length=0,Be.push(n.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Be.push(q),P.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<v.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Me.__webglColorRenderbuffer[he]);const Ve=i.get(v[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&o){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Ne(w){return Math.min(r.maxSamples,w.samples)}function Ge(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(w){const v=a.render.frame;c.get(w)!==v&&(c.set(w,v),w.update())}function et(w,v){const N=w.colorSpace,Y=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Tn&&N!==gn&&(Ke.getTransfer(N)===nt?(Y!==qt||j!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=be,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ge}function Fm(n,e){function t(i,r=gn){let s;const a=Ke.getTransfer(r);if(i===cn)return n.UNSIGNED_BYTE;if(i===la)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ca)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jo)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zo)return n.BYTE;if(i===jo)return n.SHORT;if(i===Ni)return n.UNSIGNED_SHORT;if(i===oa)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===Qo)return n.ALPHA;if(i===el)return n.RGB;if(i===qt)return n.RGBA;if(i===tl)return n.LUMINANCE;if(i===nl)return n.LUMINANCE_ALPHA;if(i===fi)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===ha)return n.RED_INTEGER;if(i===rl)return n.RG;if(i===fa)return n.RG_INTEGER;if(i===ua)return n.RGBA_INTEGER;if(i===mr||i===_r||i===gr||i===vr)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ls||i===Is||i===Ds||i===Us)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ls)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Is)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ds)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Us)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ns||i===Fs||i===Os)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ns||i===Fs)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Os)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bs||i===ks||i===zs||i===Hs||i===Gs||i===Vs||i===Ws||i===Xs||i===qs||i===Ys||i===Ks||i===$s||i===Zs||i===js)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ks)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ws)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ys)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ks)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$s)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zs)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===js)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mr||i===Js||i===Qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mr)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sl||i===ea||i===ta||i===na)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ta)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Om extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const l=this._targetRay,o=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const E of e.hand.values()){const d=t.getJointPose(E,i),p=this._getHandJoint(h,E);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const c=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],u=c.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&u>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return l!==null&&(l.visible=r!==null),o!==null&&(o.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:km,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends Mi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,l="local-floor",o=1,h=null,c=null,f=null,u=null,m=null,g=null;const E=new Hm,d=t.getContextAttributes();let p=null,y=null;const T=[],b=[],R=new He;let x=null;const A=new Ot;A.layers.enable(1),A.viewport=new at;const C=new Ot;C.layers.enable(2),C.viewport=new at;const z=[A,C],_=new Om;_.layers.enable(1),_.layers.enable(2);let M=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=T[X];return J===void 0&&(J=new us,T[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=T[X];return J===void 0&&(J=new us,T[X]=J),J.getGripSpace()},this.getHand=function(X){let J=T[X];return J===void 0&&(J=new us,T[X]=J),J.getHandSpace()};function U(X){const J=b.indexOf(X.inputSource);if(J===-1)return;const me=T[J];me!==void 0&&(me.update(X.inputSource,X.frame,h||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<T.length;X++){const J=b[X];J!==null&&(b[X]=null,T[X].disconnect(J))}M=null,F=null,E.reset(),e.setRenderTarget(p),m=null,u=null,f=null,r=null,y=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const J={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new kn(m.framebufferWidth,m.framebufferHeight,{format:qt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let J=null,me=null,ce=null;d.depth&&(ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=d.stencil?gi:fi,me=d.stencil?_i:Bn);const Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(Ce),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new kn(u.textureWidth,u.textureHeight,{format:qt,type:cn,depthTexture:new Sl(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await r.requestReferenceSpace(l),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function $(X){for(let J=0;J<X.removed.length;J++){const me=X.removed[J],ce=b.indexOf(me);ce>=0&&(b[ce]=null,T[ce].disconnect(me))}for(let J=0;J<X.added.length;J++){const me=X.added[J];let ce=b.indexOf(me);if(ce===-1){for(let be=0;be<T.length;be++)if(be>=b.length){b.push(me),ce=be;break}else if(b[be]===null){b[be]=me,ce=be;break}if(ce===-1)break}const Ce=T[ce];Ce&&Ce.connect(me)}}const G=new O,Z=new O;function V(X,J,me){G.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const ce=G.distanceTo(Z),Ce=J.projectionMatrix.elements,be=me.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),je=Ce[14]/(Ce[10]+1),Be=(Ce[9]+1)/Ce[5],P=(Ce[9]-1)/Ce[5],xt=(Ce[8]-1)/Ce[0],Ne=(be[8]+1)/be[0],Ge=Oe*xt,Ae=Oe*Ne,et=ce/(-xt+Ne),Re=et*-xt;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Re),X.translateZ(et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=Oe+et,v=je+et,N=Ge-Re,Y=Ae+(ce-Re),j=Be*je/v*w,q=P*je/v*w;X.projectionMatrix.makePerspective(N,Y,j,q,w,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function oe(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,me=X.far;E.texture!==null&&(E.depthNear>0&&(J=E.depthNear),E.depthFar>0&&(me=E.depthFar)),_.near=C.near=A.near=J,_.far=C.far=A.far=me,(M!==_.near||F!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,F=_.far);const ce=X.parent,Ce=_.cameras;oe(_,ce);for(let be=0;be<Ce.length;be++)oe(Ce[be],ce);Ce.length===2?V(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),le(X,_,ce)};function le(X,J,me){me===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return o},this.setFoveation=function(X){o=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(_)};let ge=null;function We(X,J){if(c=J.getViewerPose(h||a),g=J,c!==null){const me=c.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let ce=!1;me.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let be=0;be<me.length;be++){const Oe=me[be];let je=null;if(m!==null)je=m.getViewport(Oe);else{const P=f.getViewSubImage(u,Oe);je=P.viewport,be===0&&(e.setRenderTargetTextures(y,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(y))}let Be=z[be];Be===void 0&&(Be=new Ot,Be.layers.enable(be),Be.viewport=new at,z[be]=Be),Be.matrix.fromArray(Oe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Oe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(je.x,je.y,je.width,je.height),be===0&&(_.matrix.copy(Be.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Be)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=f.getDepthInformation(me[0]);be&&be.isValid&&be.texture&&E.init(e,be,r.renderState)}}for(let me=0;me<T.length;me++){const ce=b[me],Ce=T[me];ce!==null&&Ce!==void 0&&Ce.update(ce,J,h||a)}ge&&ge(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const $e=new vl;$e.setAnimationLoop(We),this.setAnimationLoop=function(X){ge=X},this.dispose=function(){}}}const Pn=new jt,Vm=new ot;function Wm(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,ml(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,y,T,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),c(d,p)):p.isMeshStandardMaterial?(s(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,b)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),E(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&l(d,p)):p.isPointsMaterial?o(d,p,y,T):p.isSpriteMaterial?h(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===wt&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===wt&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const y=e.get(p),T=y.envMap,b=y.envMapRotation;T&&(d.envMap.value=T,Pn.copy(b),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),d.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(Pn)),d.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function l(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,y,T){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*y,d.scale.value=T*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,y){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wt&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function E(d,p){const y=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xm(n,e,t,i){let r={},s={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function h(y,T){let b=r[y.id];b===void 0&&(g(y),b=c(y),r[y.id]=b,y.addEventListener("dispose",d));const R=T.program;i.updateUBOMapping(y,R);const x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function c(y){const T=f();y.__bindingPointIndex=T;const b=n.createBuffer(),R=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function f(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=r[y.id],b=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,A=b.length;x<A;x++){const C=Array.isArray(b[x])?b[x]:[b[x]];for(let z=0,_=C.length;z<_;z++){const M=C[z];if(m(M,x,z,R)===!0){const F=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let $=0;$<U.length;$++){const G=U[$],Z=E(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,F+W,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):(G.toArray(M.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,T,b,R){const x=y.value,A=T+"_"+b;if(R[A]===void 0)return typeof x=="number"||typeof x=="boolean"?R[A]=x:R[A]=x.clone(),!0;{const C=R[A];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[A]=x,!0}else if(C.equals(x)===!1)return C.copy(x),!0}return!1}function g(y){const T=y.uniforms;let b=0;const R=16;for(let A=0,C=T.length;A<C;A++){const z=Array.isArray(T[A])?T[A]:[T[A]];for(let _=0,M=z.length;_<M;_++){const F=z[_],U=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=U.length;W<$;W++){const G=U[W],Z=E(G),V=b%R,oe=V%Z.boundary,le=V+oe;b+=oe,le!==0&&R-le<Z.storage&&(b+=R-le),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=Z.storage}}}const x=b%R;return x>0&&(b+=R-x),y.__size=b,y.__cache={},this}function E(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function d(y){const T=y.target;T.removeEventListener("dispose",d);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:o,update:h,dispose:p}}class qm{constructor(e={}){const{canvas:t=Lh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let E=null,d=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Mn,this.toneMappingExposure=1;const T=this;let b=!1,R=0,x=0,A=null,C=-1,z=null;const _=new at,M=new at;let F=null;const U=new ze(0);let W=0,$=t.width,G=t.height,Z=1,V=null,oe=null;const le=new at(0,0,$,G),ge=new at(0,0,$,G);let We=!1;const $e=new _a;let X=!1,J=!1;const me=new ot,ce=new ot,Ce=new O,be=new at,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Be(){return A===null?Z:1}let P=i;function xt(S,I){return t.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ae,!1),P===null){const I="webgl2";if(P=xt(I,S),P===null)throw xt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ne,Ge,Ae,et,Re,w,v,N,Y,j,q,Me,ne,he,Ve,Q,fe,we,xe,ue,Fe,Pe,Qe,L;function se(){Ne=new jd(P),Ne.init(),Pe=new Fm(P,Ne),Ge=new Xd(P,Ne,e,Pe),Ae=new Dm(P),Ge.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),et=new ep(P),Re=new vm,w=new Nm(P,Ne,Ae,Re,Ge,Pe,et),v=new Yd(T),N=new Zd(T),Y=new of(P),Qe=new Vd(P,Y),j=new Jd(P,Y,et,Qe),q=new np(P,j,Y,et),xe=new tp(P,Ge,w),Q=new qd(Re),Me=new gm(T,v,N,Ne,Ge,Qe,Q),ne=new Wm(T,Re),he=new Sm,Ve=new wm(Ne),we=new Gd(T,v,N,Ae,q,u,o),fe=new Lm(T,q,Ge),L=new Xm(P,et,Ge,Ae),ue=new Wd(P,Ne,et),Fe=new Qd(P,Ne,et),et.programs=Me.programs,T.capabilities=Ge,T.extensions=Ne,T.properties=Re,T.renderLists=he,T.shadowMap=fe,T.state=Ae,T.info=et}se();const H=new Gm(T,P);this.xr=H,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize($,G,!1))},this.getSize=function(S){return S.set($,G)},this.setSize=function(S,I,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,G=I,t.width=Math.floor(S*Z),t.height=Math.floor(I*Z),B===!0&&(t.style.width=S+"px",t.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set($*Z,G*Z).floor()},this.setDrawingBufferSize=function(S,I,B){$=S,G=I,Z=B,t.width=Math.floor(S*B),t.height=Math.floor(I*B),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,I,B,k){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,I,B,k),Ae.viewport(_.copy(le).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(ge)},this.setScissor=function(S,I,B,k){S.isVector4?ge.set(S.x,S.y,S.z,S.w):ge.set(S,I,B,k),Ae.scissor(M.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){Ae.setScissorTest(We=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(S=!0,I=!0,B=!0){let k=0;if(S){let D=!1;if(A!==null){const ee=A.texture.format;D=ee===ua||ee===fa||ee===ha}if(D){const ee=A.texture.type,re=ee===cn||ee===Bn||ee===Ni||ee===_i||ee===la||ee===ca,pe=we.getClearColor(),_e=we.getClearAlpha(),Te=pe.r,ye=pe.g,Se=pe.b;re?(m[0]=Te,m[1]=ye,m[2]=Se,m[3]=_e,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Te,g[1]=ye,g[2]=Se,g[3]=_e,P.clearBufferiv(P.COLOR,0,g))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ve.dispose(),Re.dispose(),v.dispose(),N.dispose(),q.dispose(),Qe.dispose(),L.dispose(),Me.dispose(),H.dispose(),H.removeEventListener("sessionstart",Sa),H.removeEventListener("sessionend",Ea),yn.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=et.autoReset,I=fe.enabled,B=fe.autoUpdate,k=fe.needsUpdate,D=fe.type;se(),et.autoReset=S,fe.enabled=I,fe.autoUpdate=B,fe.needsUpdate=k,fe.type=D}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ke(S){const I=S.target;I.removeEventListener("dispose",ke),ct(I)}function ct(S){yt(S),Re.remove(S)}function yt(S){const I=Re.get(S).programs;I!==void 0&&(I.forEach(function(B){Me.releaseProgram(B)}),S.isShaderMaterial&&Me.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,B,k,D,ee){I===null&&(I=Oe);const re=D.isMesh&&D.matrixWorld.determinant()<0,pe=wl(S,I,B,k,D);Ae.setMaterial(k,re);let _e=B.index,Te=1;if(k.wireframe===!0){if(_e=j.getWireframeAttribute(B),_e===void 0)return;Te=2}const ye=B.drawRange,Se=B.attributes.position;let Ze=ye.start*Te,tt=(ye.start+ye.count)*Te;ee!==null&&(Ze=Math.max(Ze,ee.start*Te),tt=Math.min(tt,(ee.start+ee.count)*Te)),_e!==null?(Ze=Math.max(Ze,0),tt=Math.min(tt,_e.count)):Se!=null&&(Ze=Math.max(Ze,0),tt=Math.min(tt,Se.count));const st=tt-Ze;if(st<0||st===1/0)return;Qe.setup(D,k,pe,B,_e);let Rt,qe=ue;if(_e!==null&&(Rt=Y.get(_e),qe=Fe,qe.setIndex(Rt)),D.isMesh)k.wireframe===!0?(Ae.setLineWidth(k.wireframeLinewidth*Be()),qe.setMode(P.LINES)):qe.setMode(P.TRIANGLES);else if(D.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),Ae.setLineWidth(Ee*Be()),D.isLineSegments?qe.setMode(P.LINES):D.isLineLoop?qe.setMode(P.LINE_LOOP):qe.setMode(P.LINE_STRIP)}else D.isPoints?qe.setMode(P.POINTS):D.isSprite&&qe.setMode(P.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)qe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))qe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ee=D._multiDrawStarts,mt=D._multiDrawCounts,Ye=D._multiDrawCount,kt=_e?Y.get(_e).bytesPerElement:1,Hn=Re.get(k).currentProgram.getUniforms();for(let Ct=0;Ct<Ye;Ct++)Hn.setValue(P,"_gl_DrawID",Ct),qe.render(Ee[Ct]/kt,mt[Ct])}else if(D.isInstancedMesh)qe.renderInstances(Ze,st,D.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mt=Math.min(B.instanceCount,Ee);qe.renderInstances(Ze,st,mt)}else qe.render(Ze,st)};function Xe(S,I,B){S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=wt,S.needsUpdate=!0,Xi(S,I,B),S.side=Sn,S.needsUpdate=!0,Xi(S,I,B),S.side=Kt):Xi(S,I,B)}this.compile=function(S,I,B=null){B===null&&(B=S),d=Ve.get(B),d.init(I),y.push(d),B.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),S!==B&&S.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights();const k=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const pe=ee[re];Xe(pe,B,D),k.add(pe)}else Xe(ee,B,D),k.add(ee)}),y.pop(),d=null,k},this.compileAsync=function(S,I,B=null){const k=this.compile(S,I,B);return new Promise(D=>{function ee(){if(k.forEach(function(re){Re.get(re).currentProgram.isReady()&&k.delete(re)}),k.size===0){D(S);return}setTimeout(ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let At=null;function Qt(S){At&&At(S)}function Sa(){yn.stop()}function Ea(){yn.start()}const yn=new vl;yn.setAnimationLoop(Qt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(S){At=S,H.setAnimationLoop(S),S===null?yn.stop():yn.start()},H.addEventListener("sessionstart",Sa),H.addEventListener("sessionend",Ea),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,I,A),d=Ve.get(S,y.length),d.init(I),y.push(d),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$e.setFromProjectionMatrix(ce),J=this.localClippingEnabled,X=Q.init(this.clippingPlanes,J),E=he.get(S,p.length),E.init(),p.push(E),H.enabled===!0&&H.isPresenting===!0){const ee=T.xr.getDepthSensingMesh();ee!==null&&Dr(ee,I,-1/0,T.sortObjects)}Dr(S,I,0,T.sortObjects),E.finish(),T.sortObjects===!0&&E.sort(V,oe),je=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,je&&we.addToRenderList(E,S),this.info.render.frame++,X===!0&&Q.beginShadows();const B=d.state.shadowsArray;fe.render(B,S,I),X===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=E.opaque,D=E.transmissive;if(d.setupLights(),I.isArrayCamera){const ee=I.cameras;if(D.length>0)for(let re=0,pe=ee.length;re<pe;re++){const _e=ee[re];ba(k,D,S,_e)}je&&we.render(S);for(let re=0,pe=ee.length;re<pe;re++){const _e=ee[re];Ta(E,S,_e,_e.viewport)}}else D.length>0&&ba(k,D,S,I),je&&we.render(S),Ta(E,S,I);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(T,S,I),Qe.resetDefaultState(),C=-1,z=null,y.pop(),y.length>0?(d=y[y.length-1],X===!0&&Q.setGlobalState(T.clippingPlanes,d.state.camera)):d=null,p.pop(),p.length>0?E=p[p.length-1]:E=null};function Dr(S,I,B,k){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$e.intersectsSprite(S)){k&&be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ce);const re=q.update(S),pe=S.material;pe.visible&&E.push(S,re,pe,B,be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$e.intersectsObject(S))){const re=q.update(S),pe=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),be.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),be.copy(re.boundingSphere.center)),be.applyMatrix4(S.matrixWorld).applyMatrix4(ce)),Array.isArray(pe)){const _e=re.groups;for(let Te=0,ye=_e.length;Te<ye;Te++){const Se=_e[Te],Ze=pe[Se.materialIndex];Ze&&Ze.visible&&E.push(S,re,Ze,B,be.z,Se)}}else pe.visible&&E.push(S,re,pe,B,be.z,null)}}const ee=S.children;for(let re=0,pe=ee.length;re<pe;re++)Dr(ee[re],I,B,k)}function Ta(S,I,B,k){const D=S.opaque,ee=S.transmissive,re=S.transparent;d.setupLightsView(B),X===!0&&Q.setGlobalState(T.clippingPlanes,B),k&&Ae.viewport(_.copy(k)),D.length>0&&Wi(D,I,B),ee.length>0&&Wi(ee,I,B),re.length>0&&Wi(re,I,B),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ba(S,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new kn(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?zi:cn,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ee=d.state.transmissionRenderTarget[k.id],re=k.viewport||_;ee.setSize(re.z,re.w);const pe=T.getRenderTarget();T.setRenderTarget(ee),T.getClearColor(U),W=T.getClearAlpha(),W<1&&T.setClearColor(16777215,.5),T.clear(),je&&we.render(B);const _e=T.toneMapping;T.toneMapping=Mn;const Te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),X===!0&&Q.setGlobalState(T.clippingPlanes,k),Wi(S,B,k),w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Se=0,Ze=I.length;Se<Ze;Se++){const tt=I[Se],st=tt.object,Rt=tt.geometry,qe=tt.material,Ee=tt.group;if(qe.side===Kt&&st.layers.test(k.layers)){const mt=qe.side;qe.side=wt,qe.needsUpdate=!0,ya(st,B,k,Rt,qe,Ee),qe.side=mt,qe.needsUpdate=!0,ye=!0}}ye===!0&&(w.updateMultisampleRenderTarget(ee),w.updateRenderTargetMipmap(ee))}T.setRenderTarget(pe),T.setClearColor(U,W),Te!==void 0&&(k.viewport=Te),T.toneMapping=_e}function Wi(S,I,B){const k=I.isScene===!0?I.overrideMaterial:null;for(let D=0,ee=S.length;D<ee;D++){const re=S[D],pe=re.object,_e=re.geometry,Te=k===null?re.material:k,ye=re.group;pe.layers.test(B.layers)&&ya(pe,I,B,_e,Te,ye)}}function ya(S,I,B,k,D,ee){S.onBeforeRender(T,I,B,k,D,ee),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(T,I,B,k,S,ee),D.transparent===!0&&D.side===Kt&&D.forceSinglePass===!1?(D.side=wt,D.needsUpdate=!0,T.renderBufferDirect(B,I,k,D,S,ee),D.side=Sn,D.needsUpdate=!0,T.renderBufferDirect(B,I,k,D,S,ee),D.side=Kt):T.renderBufferDirect(B,I,k,D,S,ee),S.onAfterRender(T,I,B,k,D,ee)}function Xi(S,I,B){I.isScene!==!0&&(I=Oe);const k=Re.get(S),D=d.state.lights,ee=d.state.shadowsArray,re=D.state.version,pe=Me.getParameters(S,D.state,ee,I,B),_e=Me.getProgramCacheKey(pe);let Te=k.programs;k.environment=S.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(S.isMeshStandardMaterial?N:v).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Te===void 0&&(S.addEventListener("dispose",ke),Te=new Map,k.programs=Te);let ye=Te.get(_e);if(ye!==void 0){if(k.currentProgram===ye&&k.lightsStateVersion===re)return wa(S,pe),ye}else pe.uniforms=Me.getUniforms(S),S.onBeforeCompile(pe,T),ye=Me.acquireProgram(pe,_e),Te.set(_e,ye),k.uniforms=pe.uniforms;const Se=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=Q.uniform),wa(S,pe),k.needsLights=Rl(S),k.lightsStateVersion=re,k.needsLights&&(Se.ambientLightColor.value=D.state.ambient,Se.lightProbe.value=D.state.probe,Se.directionalLights.value=D.state.directional,Se.directionalLightShadows.value=D.state.directionalShadow,Se.spotLights.value=D.state.spot,Se.spotLightShadows.value=D.state.spotShadow,Se.rectAreaLights.value=D.state.rectArea,Se.ltc_1.value=D.state.rectAreaLTC1,Se.ltc_2.value=D.state.rectAreaLTC2,Se.pointLights.value=D.state.point,Se.pointLightShadows.value=D.state.pointShadow,Se.hemisphereLights.value=D.state.hemi,Se.directionalShadowMap.value=D.state.directionalShadowMap,Se.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Se.spotShadowMap.value=D.state.spotShadowMap,Se.spotLightMatrix.value=D.state.spotLightMatrix,Se.spotLightMap.value=D.state.spotLightMap,Se.pointShadowMap.value=D.state.pointShadowMap,Se.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=ye,k.uniformsList=null,ye}function Aa(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=Er.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function wa(S,I){const B=Re.get(S);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function wl(S,I,B,k,D){I.isScene!==!0&&(I=Oe),w.resetTextureUnits();const ee=I.fog,re=k.isMeshStandardMaterial?I.environment:null,pe=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,_e=(k.isMeshStandardMaterial?N:v).get(k.envMap||re),Te=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ye=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,tt=!!B.morphAttributes.color;let st=Mn;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(st=T.toneMapping);const Rt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=Rt!==void 0?Rt.length:0,Ee=Re.get(k),mt=d.state.lights;if(X===!0&&(J===!0||S!==z)){const Dt=S===z&&k.id===C;Q.setState(k,S,Dt)}let Ye=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==mt.state.version||Ee.outputColorSpace!==pe||D.isBatchedMesh&&Ee.batching===!1||!D.isBatchedMesh&&Ee.batching===!0||D.isBatchedMesh&&Ee.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ee.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ee.instancing===!1||!D.isInstancedMesh&&Ee.instancing===!0||D.isSkinnedMesh&&Ee.skinning===!1||!D.isSkinnedMesh&&Ee.skinning===!0||D.isInstancedMesh&&Ee.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ee.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ee.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ee.instancingMorph===!1&&D.morphTexture!==null||Ee.envMap!==_e||k.fog===!0&&Ee.fog!==ee||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Q.numPlanes||Ee.numIntersection!==Q.numIntersection)||Ee.vertexAlphas!==Te||Ee.vertexTangents!==ye||Ee.morphTargets!==Se||Ee.morphNormals!==Ze||Ee.morphColors!==tt||Ee.toneMapping!==st||Ee.morphTargetsCount!==qe)&&(Ye=!0):(Ye=!0,Ee.__version=k.version);let kt=Ee.currentProgram;Ye===!0&&(kt=Xi(k,I,D));let Hn=!1,Ct=!1,Ur=!1;const lt=kt.getUniforms(),hn=Ee.uniforms;if(Ae.useProgram(kt.program)&&(Hn=!0,Ct=!0,Ur=!0),k.id!==C&&(C=k.id,Ct=!0),Hn||z!==S){Ge.reverseDepthBuffer?(me.copy(S.projectionMatrix),Dh(me),Uh(me),lt.setValue(P,"projectionMatrix",me)):lt.setValue(P,"projectionMatrix",S.projectionMatrix),lt.setValue(P,"viewMatrix",S.matrixWorldInverse);const Dt=lt.map.cameraPosition;Dt!==void 0&&Dt.setValue(P,Ce.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),z!==S&&(z=S,Ct=!0,Ur=!0)}if(D.isSkinnedMesh){lt.setOptional(P,D,"bindMatrix"),lt.setOptional(P,D,"bindMatrixInverse");const Dt=D.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),lt.setValue(P,"boneTexture",Dt.boneTexture,w))}D.isBatchedMesh&&(lt.setOptional(P,D,"batchingTexture"),lt.setValue(P,"batchingTexture",D._matricesTexture,w),lt.setOptional(P,D,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",D._indirectTexture,w),lt.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",D._colorsTexture,w));const Nr=B.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&xe.update(D,B,kt),(Ct||Ee.receiveShadow!==D.receiveShadow)&&(Ee.receiveShadow=D.receiveShadow,lt.setValue(P,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(hn.envMap.value=_e,hn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(hn.envMapIntensity.value=I.environmentIntensity),Ct&&(lt.setValue(P,"toneMappingExposure",T.toneMappingExposure),Ee.needsLights&&xl(hn,Ur),ee&&k.fog===!0&&ne.refreshFogUniforms(hn,ee),ne.refreshMaterialUniforms(hn,k,Z,G,d.state.transmissionRenderTarget[S.id]),Er.upload(P,Aa(Ee),hn,w)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Er.upload(P,Aa(Ee),hn,w),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(P,"center",D.center),lt.setValue(P,"modelViewMatrix",D.modelViewMatrix),lt.setValue(P,"normalMatrix",D.normalMatrix),lt.setValue(P,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Dt=k.uniformsGroups;for(let Fr=0,Cl=Dt.length;Fr<Cl;Fr++){const xa=Dt[Fr];L.update(xa,kt),L.bind(xa,kt)}}return kt}function xl(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Rl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,I,B){Re.get(S.texture).__webglTexture=I,Re.get(S.depthTexture).__webglTexture=B;const k=Re.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const B=Re.get(S);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,B=0){A=S,R=I,x=B;let k=!0,D=null,ee=!1,re=!1;if(S){const _e=Re.get(S);if(_e.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(_e.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(_e.__hasExternalTextures)w.rebindTextures(S,Re.get(S.texture).__webglTexture,Re.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(_e.__boundDepthTexture!==Se){if(Se!==null&&Re.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Te=S.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(re=!0);const ye=Re.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?D=ye[I][B]:D=ye[I],ee=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?D=Re.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?D=ye[B]:D=ye,_.copy(S.viewport),M.copy(S.scissor),F=S.scissorTest}else _.copy(le).multiplyScalar(Z).floor(),M.copy(ge).multiplyScalar(Z).floor(),F=We;if(Ae.bindFramebuffer(P.FRAMEBUFFER,D)&&k&&Ae.drawBuffers(S,D),Ae.viewport(_),Ae.scissor(M),Ae.setScissorTest(F),ee){const _e=Re.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,B)}else if(re){const _e=Re.get(S.texture),Te=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Te)}C=-1},this.readRenderTargetPixels=function(S,I,B,k,D,ee,re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(pe=pe[re]),pe){Ae.bindFramebuffer(P.FRAMEBUFFER,pe);try{const _e=S.texture,Te=_e.format,ye=_e.type;if(!Ge.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-k&&B>=0&&B<=S.height-D&&P.readPixels(I,B,k,D,Pe.convert(Te),Pe.convert(ye),ee)}finally{const _e=A!==null?Re.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(S,I,B,k,D,ee,re){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Re.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(pe=pe[re]),pe){const _e=S.texture,Te=_e.format,ye=_e.type;if(!Ge.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-k&&B>=0&&B<=S.height-D){Ae.bindFramebuffer(P.FRAMEBUFFER,pe);const Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),P.readPixels(I,B,k,D,Pe.convert(Te),Pe.convert(ye),0);const Ze=A!==null?Re.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(P.FRAMEBUFFER,Ze);const tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ih(P,tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(Se),P.deleteSync(tt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,B=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-B),D=Math.floor(S.image.width*k),ee=Math.floor(S.image.height*k),re=I!==null?I.x:0,pe=I!==null?I.y:0;w.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,re,pe,D,ee),Ae.unbindTexture()},this.copyTextureToTexture=function(S,I,B=null,k=null,D=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],I=arguments[2],D=arguments[3]||0,B=null);let ee,re,pe,_e,Te,ye;B!==null?(ee=B.max.x-B.min.x,re=B.max.y-B.min.y,pe=B.min.x,_e=B.min.y):(ee=S.image.width,re=S.image.height,pe=0,_e=0),k!==null?(Te=k.x,ye=k.y):(Te=0,ye=0);const Se=Pe.convert(I.format),Ze=Pe.convert(I.type);w.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const tt=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Rt=P.getParameter(P.UNPACK_SKIP_PIXELS),qe=P.getParameter(P.UNPACK_SKIP_ROWS),Ee=P.getParameter(P.UNPACK_SKIP_IMAGES),mt=S.isCompressedTexture?S.mipmaps[D]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,D,Te,ye,ee,re,Se,Ze,mt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,D,Te,ye,mt.width,mt.height,Se,mt.data):P.texSubImage2D(P.TEXTURE_2D,D,Te,ye,ee,re,Se,Ze,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee),D===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(S,I,B=null,k=null,D=0){S.isTexture!==!0&&(Sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,S=arguments[2],I=arguments[3],D=arguments[4]||0);let ee,re,pe,_e,Te,ye,Se,Ze,tt;const st=S.isCompressedTexture?S.mipmaps[D]:S.image;B!==null?(ee=B.max.x-B.min.x,re=B.max.y-B.min.y,pe=B.max.z-B.min.z,_e=B.min.x,Te=B.min.y,ye=B.min.z):(ee=st.width,re=st.height,pe=st.depth,_e=0,Te=0,ye=0),k!==null?(Se=k.x,Ze=k.y,tt=k.z):(Se=0,Ze=0,tt=0);const Rt=Pe.convert(I.format),qe=Pe.convert(I.type);let Ee;if(I.isData3DTexture)w.setTexture3D(I,0),Ee=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)w.setTexture2DArray(I,0),Ee=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const mt=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),kt=P.getParameter(P.UNPACK_SKIP_PIXELS),Hn=P.getParameter(P.UNPACK_SKIP_ROWS),Ct=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,st.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ye),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Ee,D,Se,Ze,tt,ee,re,pe,Rt,qe,st.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,D,Se,Ze,tt,ee,re,pe,Rt,st.data):P.texSubImage3D(Ee,D,Se,Ze,tt,ee,re,pe,Rt,qe,st),P.pixelStorei(P.UNPACK_ROW_LENGTH,mt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,kt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ct),D===0&&I.generateMipmaps&&P.generateMipmap(Ee),Ae.unbindTexture()},this.initRenderTarget=function(S){Re.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Ae.unbindTexture()},this.resetState=function(){R=0,x=0,A=null,Ae.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===da?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Lr?"display-p3":"srgb"}}class Ym extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xi extends bt{constructor(e,t,i,r,s,a,l,o,h){super(e,t,i,r,s,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class va extends bn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];l(r),h(i),c(),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(s.slice(),3)),this.setAttribute("uv",new Zt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(y){const T=new O,b=new O,R=new O;for(let x=0;x<t.length;x+=3)m(t[x+0],T),m(t[x+1],b),m(t[x+2],R),o(T,b,R,y)}function o(y,T,b,R){const x=R+1,A=[];for(let C=0;C<=x;C++){A[C]=[];const z=y.clone().lerp(b,C/x),_=T.clone().lerp(b,C/x),M=x-C;for(let F=0;F<=M;F++)F===0&&C===x?A[C][F]=z:A[C][F]=z.clone().lerp(_,F/M)}for(let C=0;C<x;C++)for(let z=0;z<2*(x-C)-1;z++){const _=Math.floor(z/2);z%2===0?(u(A[C][_+1]),u(A[C+1][_]),u(A[C][_])):(u(A[C][_+1]),u(A[C+1][_+1]),u(A[C+1][_]))}}function h(y){const T=new O;for(let b=0;b<s.length;b+=3)T.x=s[b+0],T.y=s[b+1],T.z=s[b+2],T.normalize().multiplyScalar(y),s[b+0]=T.x,s[b+1]=T.y,s[b+2]=T.z}function c(){const y=new O;for(let T=0;T<s.length;T+=3){y.x=s[T+0],y.y=s[T+1],y.z=s[T+2];const b=d(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(b,1-R)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){const T=a[y+0],b=a[y+2],R=a[y+4],x=Math.max(T,b,R),A=Math.min(T,b,R);x>.9&&A<.1&&(T<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function m(y,T){const b=y*3;T.x=e[b+0],T.y=e[b+1],T.z=e[b+2]}function g(){const y=new O,T=new O,b=new O,R=new O,x=new He,A=new He,C=new He;for(let z=0,_=0;z<s.length;z+=9,_+=6){y.set(s[z+0],s[z+1],s[z+2]),T.set(s[z+3],s[z+4],s[z+5]),b.set(s[z+6],s[z+7],s[z+8]),x.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),C.set(a[_+4],a[_+5]),R.copy(y).add(T).add(b).divideScalar(3);const M=d(R);E(x,_+0,y,M),E(A,_+2,T,M),E(C,_+4,b,M)}}function E(y,T,b,R){R<0&&y.x===1&&(a[T]=y.x-1),b.x===0&&b.z===0&&(a[T]=R/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.vertices,e.indices,e.radius,e.details)}}class Ma extends va{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ma(e.radius,e.detail)}}class pr extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=al,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Al extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Km extends Al{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ds=new ot,Lo=new O,Io=new O;class $m{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lo),Io.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Io),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zm extends $m{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends Al{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);const rt=48,Ri=64,Nt=17,Ft=11,ni=.2,ps=Ph.degToRad(56),Jm=matchMedia("(pointer: coarse)").matches,ii=Jm?1:1.5,ri=Math.min(2,window.devicePixelRatio||1)*(matchMedia("(pointer: coarse)").matches?.8:1),Do={0:724766,1:1837832,2:1054758,3:2047324,4:1841160,5:724766,6:328968};function Qm(n,e,t,i,r,s){const a=(l,o,h,c,f,u=!1,m=0)=>({x0:l,y0:o,x1:h,y1:c,ground:f,lift:m,soft:u});switch(n){case de.HERO:return a(e-2.4*i,t-2.3*i-s,e+2.4*i,t+.4*i,t);case de.GOBLIN:case de.SLIME:return a(e-i,t-1.3*i,e+i,t+.3*i,t);case de.ICE_BLOCK:return a(e-.6*i,t-1.05*i,e+.6*i,t+.1*i,t+1,!0);case de.BOSS:return a(e-1.3*i,t-1.8*i,e+1.3*i,t+.3*i,t);case de.BIRD:return a(e-i,t-s-i,e+i,t-s+.7*i,t,!1,s);case de.STONE:return a(e-1.2*i,t-s-i,e+1.2*i,t-s+i,t,!0,s);case de.ITEM:return a(e-i,t-i,e+i,t+i,t+18);case de.ROCKET:return a(e-i,t-i,e+i,t+i,t+22,!0);case de.GRAND_SHOT:return a(e-1.6*i,t-i,e+1.6*i,t+i,t+22,!0);case de.BOSS_SHOT:return r===1?a(e-i,t-i,e+i,t+i,t+20,!0):null;case de.FX_FIRE:case de.FX_ICE:return a(e-.15*i,t-.5*i,e+1.15*i,t+i,t+.92*i,!0);case de.FX_PUFF:return a(e-i,t-i,e+i,t+i,t+.5*i,!0);case de.FX_EXPLOSION:return a(e-i,t-i,e+i,t+i,t+.4*i,!0);case de.FX_BOLT:return a(e-i,t-4.3*i,e+i,t+.6*i,t,!0);case de.FX_DEFEAT:return a(e-i,t-i,e+i,t+i,t+.5*i,!0);case de.HAND:return r===1?a(e-.7*i,t-1.2*i,e+.7*i,t+.3*i,t):null;case de.TEXT:return a(e-170,t-i*1.2,e+170,t+i*.4,t+48,!0)}return null}function e0(n,e){return n===de.SHADOW||n===de.FX_SLASH||n===de.FX_BEAM||n===de.FX_SPIN||n===de.BOSS_SHOT&&e===0||n===de.HAND&&e===0}class t0{constructor(e){De(this,"renderer");De(this,"scene",new Ym);De(this,"camera",new Ot(30,Nt/(Ft+0),.1,200));De(this,"terrain",new Pi);De(this,"terrainKey","");De(this,"lastGroundKey","");De(this,"groundCanvas",document.createElement("canvas"));De(this,"groundCtx");De(this,"groundTex");De(this,"groundMat");De(this,"groundFrame",0);De(this,"wallTex",null);De(this,"wallWorld",-1);De(this,"decalCanvas",document.createElement("canvas"));De(this,"decalCtx");De(this,"decalTex");De(this,"boards",[]);De(this,"boardGeo",new On(1,1));De(this,"width",1);De(this,"height",1);this.renderer=new qm({canvas:e,antialias:!0,alpha:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Yo,this.renderer.outputColorSpace=vt,this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.scene.add(new Km(14543103,3811866,1.1));const t=new jm(16777215,1.8);t.position.set(Nt/2-7,16,Ft/2+6),t.target.position.set(Nt/2,0,Ft/2),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);const i=t.shadow.camera;i.left=-14,i.right=14,i.top=14,i.bottom=-14,i.near=1,i.far=50,t.shadow.bias=-8e-4,this.scene.add(t,t.target),this.scene.add(this.terrain),this.groundCanvas.width=Math.round(Nt*rt*ii),this.groundCanvas.height=Math.round(Ft*rt*ii),this.groundCtx=this.groundCanvas.getContext("2d"),this.groundTex=new xi(this.groundCanvas),this.groundTex.colorSpace=vt,this.groundTex.anisotropy=4,this.groundMat=new pr({map:this.groundTex,emissiveMap:this.groundTex,emissive:16777215,emissiveIntensity:.12,roughness:.95});const r=new Mt(new On(Nt,Ft),this.groundMat);r.rotation.x=-Math.PI/2,r.position.set(Nt/2,ni,Ft/2),r.receiveShadow=!0,this.scene.add(r);const s=new Mt(new zn(Nt,ni,Ft),new pr({color:2760728,roughness:1}));s.position.set(Nt/2,ni/2-.001,Ft/2),this.scene.add(s),this.decalCanvas.width=Nt*rt,this.decalCanvas.height=Ft*rt,this.decalCtx=this.decalCanvas.getContext("2d"),this.decalTex=new xi(this.decalCanvas),this.decalTex.colorSpace=vt;const a=new Mt(new On(Nt,Ft),new Rr({map:this.decalTex,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2}));a.rotation.x=-Math.PI/2,a.position.set(Nt/2,ni+.012,Ft/2),a.renderOrder=1,this.scene.add(a)}setSize(e,t){this.width=e,this.height=t,this.renderer.setSize(e,t,!1)}render(e,t,i,r,s,a){let l="",o=0,h=0,c=0,f=0,u=!0;const m=[];for(let b=i;b<r;b++){const R=b*t;if(e[R]!==de.TILE)continue;const x=e[R+1],A=e[R+2],C=Math.round(x/rt),z=Math.round((A-Ri)/rt);u&&(c=(x-C*rt)/rt,f=(A-Ri-z*rt)/rt,u=!1);const _=e[R+5];o=e[R+9],h=Math.max(h,e[R+8]),m.push([C,z,_,e[R+6]]),l+=_}l+=`w${o}`,l!==this.terrainKey&&(this.terrainKey=l,this.buildTerrain(m,o)),(this.groundFrame++%2===0||l!==this.lastGroundKey)&&(this.lastGroundKey=l,this.drawGround(e,t,i,r,c,f)),this.groundMat.emissiveIntensity=.12+h*.18,this.scene.background=new ze(Do[o]??Do[0]);const g=Nt/2-c*.6,E=Ft/2+.25-f*.6,d=19.8;this.camera.aspect=this.width/this.height,this.camera.fov=34,this.camera.position.set(g,Math.sin(ps)*d,E+Math.cos(ps)*d),this.camera.lookAt(g,0,E),this.camera.updateProjectionMatrix();const p=this.decalCtx;p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,this.decalCanvas.width,this.decalCanvas.height),p.setTransform(1,0,0,1,-c*rt,-Ri-f*rt);let y=0;const T=new Float32Array(t);for(let b=i;b<r;b++){const R=b*t,x=e[R];if(x===de.TILE||x===de.RECT)continue;const A=e[R+5];if(e0(x,A)){_s(p,e,R,s,a);continue}const C=e[R+1]-c*rt,z=e[R+2]-f*rt,_=e[R+3],M=e[R+9],F=Qm(x,C,z,_,A,M);if(F){for(let U=0;U<t;U++)T[U]=e[R+U];T[1]=C,T[2]=z-F.lift,x===de.FX_BEAM&&(T[3]-=c*rt,T[4]-=f*rt),this.placeBoard(y++,T,F,s,a)}}for(let b=y;b<this.boards.length;b++)this.boards[b].holder.visible=!1;this.decalTex.needsUpdate=!0,this.renderer.render(this.scene,this.camera)}clear(){this.renderer.setClearColor(329228),this.renderer.clear()}placeBoard(e,t,i,r,s){const a=this.board(e),l=i.x1-i.x0,o=i.y1-i.y0,h=Math.ceil(l*ri),c=Math.ceil(o*ri);(a.canvas.width<h||a.canvas.height<c)&&(a.canvas.width=Math.max(a.canvas.width,Math.ceil(h/64)*64),a.canvas.height=Math.max(a.canvas.height,Math.ceil(c/64)*64),a.tex.dispose(),a.tex=new xi(a.canvas),a.tex.colorSpace=vt,a.mat.map=a.tex,a.ctx=a.canvas.getContext("2d"));const f=a.ctx;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,a.canvas.width,a.canvas.height),f.setTransform(ri,0,0,ri,-i.x0*ri,-i.y0*ri),_s(f,t,0,r,s);const u=h/a.canvas.width,m=c/a.canvas.height;a.tex.repeat.set(u,m),a.tex.offset.set(0,1-m),a.tex.needsUpdate=!0,a.mat.transparent=!0,a.mat.alphaTest=i.soft?.01:.35,a.mat.depthWrite=!i.soft,a.mesh.renderOrder=i.soft?3:2,a.mat.needsUpdate=!0;const g=(i.x0+i.x1)/2,E=(i.y0+i.y1)/2;a.holder.visible=!0,a.holder.position.set(g/rt,ni,(i.ground-Ri)/rt),a.holder.rotation.set(-(Math.PI/2-ps),0,0),a.mesh.position.set(0,(i.ground-E)/rt,0),a.mesh.scale.set(l/rt,o/rt,1)}board(e){for(;this.boards.length<=e;){const t=document.createElement("canvas");t.width=128,t.height=128;const i=new xi(t);i.colorSpace=vt;const r=new Rr({map:i,transparent:!0,toneMapped:!1,side:Kt}),s=new Mt(this.boardGeo,r),a=new pt;a.add(s),this.scene.add(a),this.boards.push({holder:a,mesh:s,canvas:t,ctx:t.getContext("2d"),tex:i,mat:r})}return this.boards[e]}drawGround(e,t,i,r,s,a){const l=this.groundCtx;l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,this.groundCanvas.width,this.groundCanvas.height),l.setTransform(ii,0,0,ii,-s*rt*ii,-(Ri+a*rt)*ii);for(let o=i;o<r;o++){const h=o*t;if(e[h]!==de.TILE)continue;let c=e[h+5];c!==4&&(c===1&&(c=0),l.save(),gs(l,e[h+1],e[h+2],e[h+3],c,e[h+6],e[h+7],e[h+8],e[h+9]),l.restore())}this.groundTex.needsUpdate=!0}wallTexture(e){var i;if(this.wallTex&&this.wallWorld===e)return this.wallTex;const t=document.createElement("canvas");return t.width=t.height=128,gs(t.getContext("2d"),0,0,128,4,1,0,0,e),(i=this.wallTex)==null||i.dispose(),this.wallTex=new xi(t),this.wallTex.colorSpace=vt,this.wallWorld=e,this.wallTex}buildTerrain(e,t){for(const a of[...this.terrain.children])this.terrain.remove(a),a instanceof Mt&&a.geometry.dispose();const i=new pr({map:this.wallTexture(t),color:12107478,roughness:.95}),r=new pr({color:9080217,roughness:.9,flatShading:!0}),s=(a,l)=>{let o=a*2654435761+l*40503>>>0;return o^=o>>>15,(o*2246822519>>>0)/4294967296};for(const[a,l,o,h]of e){const c=a+.5,f=l+.5;if(o===4){const u=.9+s(h,1)*.3,m=new Mt(new zn(1,u,1),i);m.position.set(c,u/2,f),m.castShadow=!0,m.receiveShadow=!0,this.terrain.add(m)}else if(o===1){const u=new Mt(new Ma(.44,0),r);u.position.set(c,ni+.26,f),u.scale.set(1,.78+s(h,4)*.2,.95),u.rotation.set(s(h,5)*3,s(h,6)*6,s(h,7)*3),u.castShadow=!0,u.receiveShadow=!0,this.terrain.add(u)}}}}const Ue={MENU_MOVE:1,MENU_OK:2,PAUSE:3,ATTACK:10,SPECIAL:20,ENEMY_HIT:30,ENEMY_DIE:31,BOSS_DIE:32,HERO_HURT:33,HERO_DIE:34,ITEM:40,POWERUP:41,ONE_UP:42,ROCKET:43,EXPLOSION:44,STONE:45,PIT:46,ROCK_BREAK:47,STAGE_CLEAR:50,GAME_OVER:51,ALL_CLEAR:52,WORLD_TITLE:53,BOSS_CAST:60,CHAINSAW:61,SUMMON:62,TENTACLE:63,BIND:64,CARD:65,BURROW:66,HAND:67},n0={1:"audio/the_final_checkpoint.mp3",2:"audio/boss.mp3",3:"audio/title.mp3",4:"audio/select.mp3"},i0=.4,r0=.35;class s0{constructor(){De(this,"ctx",null);De(this,"sfxGain",null);De(this,"noiseBuf",null);De(this,"bgm",null);De(this,"track",0);De(this,"paused",!1);De(this,"muted",!1)}unlock(){if(!this.ctx){this.ctx=new AudioContext,this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.muted?0:r0,this.sfxGain.connect(this.ctx.destination);const e=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this.noiseBuf.getChannelData(0);for(let i=0;i<e;i++)t[i]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume(),this.syncBgm()}update(e,t,i){if(e!==this.track||t!==this.paused){const r=e!==this.track;this.track=e,this.paused=t,this.syncBgm(r)}if(!(!this.ctx||this.muted))for(const r of new Set(i))this.play(r)}syncBgm(e=!1){var r,s;const t=n0[this.track];if(!t){(r=this.bgm)==null||r.pause();return}const i=`./${t}`;!this.bgm||!this.bgm.src.endsWith(t)?((s=this.bgm)==null||s.pause(),this.bgm=new Audio(i),this.bgm.loop=!0,this.bgm.volume=i0,this.bgm.muted=this.muted):e&&(this.bgm.currentTime=0),this.paused||!this.ctx?this.bgm.pause():this.bgm.play().catch(()=>{})}tone({type:e="square",f0:t,f1:i,dur:r,vol:s=.5,delay:a=0}){const l=this.ctx,o=l.currentTime+a,h=l.createOscillator(),c=l.createGain();h.type=e,h.frequency.setValueAtTime(t,o),i!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(1,i),o+r),c.gain.setValueAtTime(s,o),c.gain.exponentialRampToValueAtTime(.001,o+r),h.connect(c).connect(this.sfxGain),h.start(o),h.stop(o+r+.02)}noise({dur:e,vol:t=.5,delay:i=0,filter:r="lowpass",freq:s=2e3,freqTo:a}){const l=this.ctx,o=l.currentTime+i,h=l.createBufferSource();h.buffer=this.noiseBuf;const c=l.createBiquadFilter();c.type=r,c.frequency.setValueAtTime(s,o),a!==void 0&&c.frequency.exponentialRampToValueAtTime(a,o+e);const f=l.createGain();f.gain.setValueAtTime(t,o),f.gain.exponentialRampToValueAtTime(.001,o+e),h.connect(c).connect(f).connect(this.sfxGain),h.start(o,Math.random()*.5),h.stop(o+e+.02)}notes(e,t,i="square",r=.35,s=t){e.forEach((a,l)=>this.tone({type:i,f0:a,dur:l===e.length-1?s:t*.95,vol:r,delay:l*t}))}play(e){switch(e){case Ue.MENU_MOVE:return this.tone({f0:660,dur:.05,vol:.25});case Ue.MENU_OK:return this.notes([660,990],.06,"square",.3);case Ue.PAUSE:return this.notes([440,330],.07,"triangle",.4);case Ue.ATTACK+0:return this.noise({dur:.12,vol:.35,filter:"lowpass",freq:1800,freqTo:400}),this.tone({type:"sawtooth",f0:320,f1:120,dur:.12,vol:.2});case Ue.ATTACK+1:return this.tone({type:"triangle",f0:1400,f1:2100,dur:.07,vol:.3});case Ue.ATTACK+2:return this.noise({dur:.14,vol:.4,filter:"bandpass",freq:1500,freqTo:5e3});case Ue.ATTACK+3:return this.tone({type:"square",f0:1800,f1:300,dur:.1,vol:.2}),this.noise({dur:.08,vol:.25,filter:"highpass",freq:3e3});case Ue.ATTACK+4:return this.tone({type:"sine",f0:140,f1:55,dur:.2,vol:.6}),this.noise({dur:.15,vol:.35,filter:"lowpass",freq:500});case Ue.SPECIAL+0:return this.noise({dur:.6,vol:.6,filter:"lowpass",freq:1200,freqTo:200}),this.tone({type:"sawtooth",f0:220,f1:50,dur:.5,vol:.25});case Ue.SPECIAL+1:return this.notes([1319,1760,2093,2637],.05,"triangle",.3,.3);case Ue.SPECIAL+2:return this.tone({type:"square",f0:300,f1:1e3,dur:.22,vol:.25});case Ue.SPECIAL+3:return this.noise({dur:.7,vol:.6,filter:"lowpass",freq:4e3,freqTo:300}),this.tone({type:"square",f0:2400,f1:80,dur:.35,vol:.2});case Ue.SPECIAL+4:return this.tone({type:"sine",f0:100,f1:35,dur:.6,vol:.7}),this.noise({dur:.5,vol:.4,filter:"lowpass",freq:400});case Ue.ENEMY_HIT:return this.tone({f0:240,f1:110,dur:.07,vol:.25});case Ue.ENEMY_DIE:return this.noise({dur:.18,vol:.45,filter:"bandpass",freq:1800,freqTo:400}),this.tone({type:"square",f0:180,f1:60,dur:.12,vol:.3}),this.tone({type:"square",f0:988,dur:.06,vol:.22,delay:.05}),this.tone({type:"square",f0:1319,dur:.12,vol:.22,delay:.11});case Ue.BOSS_DIE:return this.noise({dur:1.2,vol:.7,filter:"lowpass",freq:2e3,freqTo:80}),this.tone({type:"sawtooth",f0:300,f1:30,dur:1.1,vol:.3}),this.noise({dur:.6,vol:.5,filter:"lowpass",freq:900,delay:.35});case Ue.HERO_HURT:return this.tone({f0:320,f1:140,dur:.16,vol:.3}),this.tone({type:"sawtooth",f0:200,f1:90,dur:.16,vol:.15});case Ue.HERO_DIE:return this.notes([523,392,330,262,196],.11,"triangle",.45,.4);case Ue.ITEM:return this.notes([880,1320],.06,"square",.25);case Ue.POWERUP:return this.notes([523,659,784,1047],.06,"square",.25,.2);case Ue.ONE_UP:return this.notes([784,1047,1319,1568,2093],.07,"square",.25,.25);case Ue.ROCKET:return this.noise({dur:.3,vol:.3,filter:"bandpass",freq:800,freqTo:3e3}),this.tone({type:"sawtooth",f0:180,f1:600,dur:.25,vol:.12});case Ue.EXPLOSION:return this.noise({dur:.4,vol:.6,filter:"lowpass",freq:1200,freqTo:120});case Ue.STONE:return this.tone({type:"sine",f0:160,f1:60,dur:.14,vol:.5}),this.noise({dur:.1,vol:.3,filter:"lowpass",freq:600});case Ue.PIT:return this.tone({type:"triangle",f0:600,f1:90,dur:.45,vol:.4});case Ue.ROCK_BREAK:return this.noise({dur:.3,vol:.5,filter:"lowpass",freq:1500,freqTo:200}),this.tone({f0:130,f1:60,dur:.15,vol:.2});case Ue.STAGE_CLEAR:return this.notes([523,659,784,1047,784,1047],.12,"square",.3,.6);case Ue.GAME_OVER:return this.notes([392,330,262,196],.28,"triangle",.45,.9);case Ue.WORLD_TITLE:return this.tone({type:"sine",f0:70,f1:45,dur:1.4,vol:.6}),this.noise({dur:1,vol:.25,filter:"lowpass",freq:600,freqTo:80}),this.notes([784,1175,1568],.09,"triangle",.2,.8);case Ue.ALL_CLEAR:return this.notes([523,659,784,1047,1319,1568,2093],.13,"square",.3,1);case Ue.BOSS_CAST:return this.tone({type:"sawtooth",f0:140,f1:320,dur:.4,vol:.18});case Ue.CHAINSAW:this.noise({dur:.55,vol:.45,filter:"bandpass",freq:500});for(let t=0;t<6;t++)this.tone({type:"sawtooth",f0:95,f1:80,dur:.07,vol:.25,delay:t*.08});return;case Ue.SUMMON:return this.tone({type:"triangle",f0:300,f1:900,dur:.45,vol:.3}),this.tone({type:"triangle",f0:450,f1:1350,dur:.45,vol:.2,delay:.08});case Ue.TENTACLE:return this.noise({dur:.25,vol:.35,filter:"lowpass",freq:700,freqTo:200}),this.tone({type:"sine",f0:220,f1:90,dur:.25,vol:.3});case Ue.BIND:for(let t=0;t<4;t++)this.tone({f0:180-t*15,dur:.07,vol:.2,delay:t*.07});return;case Ue.CARD:return this.noise({dur:.07,vol:.35,filter:"highpass",freq:4e3});case Ue.BURROW:return this.noise({dur:.55,vol:.45,filter:"lowpass",freq:350}),this.tone({type:"sine",f0:110,f1:45,dur:.5,vol:.4});case Ue.HAND:return this.noise({dur:.15,vol:.35,filter:"lowpass",freq:800}),this.tone({type:"sine",f0:200,f1:90,dur:.12,vol:.3})}}}const a0=`
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
`;class o0{constructor(){De(this,"pad");De(this,"arrows",[]);De(this,"buttons",[]);De(this,"touchOwner",new Map);De(this,"touchBits",0);De(this,"mouseBits",0);De(this,"mouseOwner",-1);De(this,"visible",!1);De(this,"ja",!1);De(this,"pulse",0);const e=document.createElement("style");e.textContent=a0,document.head.appendChild(e),this.pad=this.make("tc tc-pad");for(const[r,s,a]of[["up",50,17],["down",50,83],["left",17,50],["right",83,50]]){const l=document.createElement("i");l.className=r,l.style.left=`${s}%`,l.style.top=`${a}%`,this.pad.appendChild(l),this.arrows.push(l)}for(const[r,s,a]of[[Je.ATTACK,"#e53935",["ATTACK","攻撃"]],[Je.SPECIAL,"#1e88e5",["SPECIAL","必殺技"]],[Je.ITEM,"#43a047",["ITEM","アイテム"]],[Je.PAUSE,"#546e7a",["PAUSE","ポーズ"]]]){const l=this.make("tc tc-btn");l.style.background=s;const o={el:l,bit:r,label:[a[0],a[1]]};this.buttons.push(o)}const t=r=>{if(!this.visible)return;const s=new Set;let a=!1;for(const o of Array.from(r.touches))s.add(o.identifier),this.touchOwner.has(o.identifier)||this.touchOwner.set(o.identifier,this.hitTest(o.clientX,o.clientY)),(this.touchOwner.get(o.identifier)??-1)>=0&&(a=!0);for(const o of[...this.touchOwner.keys()])s.has(o)||this.touchOwner.delete(o);let l=0;for(const o of Array.from(r.touches))l|=this.ownerBits(this.touchOwner.get(o.identifier)??-1,o.clientX,o.clientY);this.pulse|=l&~this.touchBits,this.touchBits=l,this.refresh(),(a||r.target instanceof Element&&r.target.closest(".tc"))&&r.preventDefault()};for(const r of["touchstart","touchmove","touchend","touchcancel"])window.addEventListener(r,t,{passive:!1});for(const r of[this.pad,...this.buttons.map(s=>s.el)])r.addEventListener("selectstart",s=>s.preventDefault());window.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||!this.visible||(this.mouseOwner=this.hitTest(r.clientX,r.clientY),this.mouseBits=this.ownerBits(this.mouseOwner,r.clientX,r.clientY),this.pulse|=this.mouseBits,this.refresh())}),window.addEventListener("pointermove",r=>{r.pointerType!=="mouse"||this.mouseOwner<0||(this.mouseBits=this.ownerBits(this.mouseOwner,r.clientX,r.clientY),this.refresh())});const i=()=>{this.mouseOwner=-1,this.mouseBits=0,this.refresh()};window.addEventListener("pointerup",i),window.addEventListener("blur",()=>{this.touchOwner.clear(),this.touchBits=0,i()}),this.setLanguage(!1),this.setVisible(!1)}get bits(){if(!this.visible)return 0;const e=this.pulse|this.touchBits|this.mouseBits;return this.pulse=0,e}setVisible(e){this.visible=e;for(const t of[this.pad,...this.buttons.map(i=>i.el)])t.style.display=e?"":"none";e||(this.touchOwner.clear(),this.touchBits=0,this.mouseBits=0,this.mouseOwner=-1)}setLanguage(e){if(e===this.ja&&this.buttons[0].el.childElementCount>0)return;this.ja=e;const t=["A","B","C","II"];this.buttons.forEach((i,r)=>{i.el.innerHTML="",i.el.append(t[r]);const s=document.createElement("small");s.textContent=i.label[e?1:0],i.el.appendChild(s)})}layout(e,t,i){this.place(this.pad,e.x,e.y,e.size);const r=t.size,s=r*.42,a=r*.34;this.place(this.buttons[0].el,t.x+r*.24,t.y+r*.14,s),this.place(this.buttons[1].el,t.x-r*.06,t.y-r*.22,a),this.place(this.buttons[2].el,t.x-r*.3,t.y+r*.2,a),this.place(this.buttons[3].el,i.x,i.y,Math.max(40,r*.2))}place(e,t,i,r){e.style.width=e.style.height=`${r}px`,e.style.fontSize=`${Math.round(r*.3)}px`,e.style.left=`${t-r/2}px`,e.style.top=`${i-r/2}px`}make(e){const t=document.createElement("div");return t.className=e,t.addEventListener("contextmenu",i=>i.preventDefault()),document.body.appendChild(t),t}hitTest(e,t){const i=(r,s)=>{const a=r.getBoundingClientRect();return Math.hypot(e-(a.left+a.width/2),t-(a.top+a.height/2))<=a.width/2*s};if(i(this.pad,1.1))return 0;for(let r=0;r<this.buttons.length;r++)if(i(this.buttons[r].el,1.15))return r+1;return-1}ownerBits(e,t,i){return e===0?this.padDir(t,i):e>0?this.buttons[e-1].bit:0}padDir(e,t){const i=this.pad.getBoundingClientRect(),r=e-(i.left+i.width/2),s=t-(i.top+i.height/2);return Math.hypot(r,s)<i.width*.12?0:Math.abs(r)>Math.abs(s)?r>0?Je.RIGHT:Je.LEFT:s>0?Je.DOWN:Je.UP}refresh(){const e=this.touchBits|this.mouseBits,t=[Je.UP,Je.DOWN,Je.LEFT,Je.RIGHT];this.arrows.forEach((i,r)=>i.classList.toggle("on",(e&t[r])!==0));for(const i of this.buttons)i.el.classList.toggle("on",(e&i.bit)!==0)}}const Uo={ArrowUp:Je.UP,ArrowDown:Je.DOWN,ArrowLeft:Je.LEFT,ArrowRight:Je.RIGHT,KeyI:Je.UP,KeyJ:Je.LEFT,KeyL:Je.RIGHT,KeyM:Je.DOWN,KeyS:Je.ATTACK,Space:Je.ATTACK,KeyD:Je.SPECIAL,KeyF:Je.ITEM,Enter:Je.START,KeyP:Je.PAUSE,Escape:Je.PAUSE};async function l0(){const{instance:n}=await WebAssembly.instantiateStreaming(fetch("./game_core.wasm"),{}),e=n.exports;e.init(Math.random()*4294967295>>>0);const t="cdc-settings";let i=0;try{const R=localStorage.getItem(t);R!==null&&(i=Number(R)>>>0)}catch{}e.set_settings(i),(i&16)===0&&e.set_mobile(c0()?1:0);let r=e.settings();const s=document.getElementById("screen"),a=s.getContext("2d"),l=document.getElementById("gl");let o=null;try{o=new t0(l)}catch(R){console.warn("3D を使えないので 2D で表示します",R)}const h=e.screen_width(),c=e.screen_height(),f=e.cmd_stride(),u=new TextDecoder,m=new o0;let g=e.mobile()!==0;const E=()=>{const R=window.innerWidth,x=window.innerHeight;let A,C,z;if(!g)A=Math.min(R/h,x/c),C=(R-h*A)/2,z=(x-c*A)/2;else if(x>=R*.9){const F=Math.max(190,Math.min(x*.42,R*.65));A=Math.min(R/h,(x-F)/c),C=(R-h*A)/2,z=0;const U=c*A,W=x-U,$=Math.min(W*.8,R*.44),G=U+W*.55;m.layout({x:12+$/2,y:G,size:$},{x:R-12-$/2,y:G,size:$},{x:R/2,y:U+34})}else{const F=Math.max(130,Math.min(R*.21,240));A=Math.min((R-F*2)/h,x/c),C=(R-h*A)/2,z=(x-c*A)/2;const U=Math.min(F-16,x*.48);m.layout({x:F/2,y:x*.62,size:U},{x:R-F/2,y:x*.62,size:U},{x:R-F/2,y:Math.max(34,x*.16)})}const _=window.devicePixelRatio||1;s.style.left=`${Math.floor(C)}px`,s.style.top=`${Math.floor(z)}px`,s.style.width=`${Math.floor(h*A)}px`,s.style.height=`${Math.floor(c*A)}px`;const M=64;l.style.left=s.style.left,l.style.top=`${Math.floor(z+M*A)}px`,l.style.width=s.style.width,l.style.height=`${Math.floor((c-M)*A)}px`,o==null||o.setSize(Math.floor(h*A),Math.floor((c-M)*A)),s.width=Math.floor(h*A*_),s.height=Math.floor(c*A*_),a.setTransform(s.width/h,0,0,s.height/c,0,0)};window.addEventListener("resize",E),m.setVisible(g),m.setLanguage((r&4)!==0),E(),s.addEventListener("pointerdown",R=>{const x=s.getBoundingClientRect();e.tap((R.clientX-x.left)/x.width*h,(R.clientY-x.top)/x.height*c)});const d=new s0;window.addEventListener("pointerdown",()=>d.unlock());let p=0,y=0;window.addEventListener("keydown",R=>{d.unlock();const x=Uo[R.code];x&&(p|=x,y|=x,R.preventDefault())}),window.addEventListener("keyup",R=>{const x=Uo[R.code];x&&(p&=~x)}),window.addEventListener("blur",()=>p=0);let T=performance.now();const b=R=>{const x=(R-T)/1e3;T=R,e.set_input(p|y|m.bits),y=0,e.update(x);const A=e.memory.buffer,C=new Float32Array(A,e.cmd_ptr(),e.cmd_count()*f),z=new Uint8Array(A,e.text_ptr(),e.text_len()),_=C.length/f;let M=-1,F=-1;for(let U=0;U<_;U++){const W=C[U*f];W===de.FIELD_BEGIN?M=U+1:W===de.FIELD_END&&(F=U)}o||(M=F=-1),a.clearRect(0,0,h,c);for(let U=0;U<_;U++){const W=C[U*f];M>=0&&U>=M&&U<F&&W!==de.RECT||_s(a,C,U*f,z,u)}if(l.style.visibility=M>=0?"visible":"hidden",M>=0&&(o==null||o.render(C,f,M,F,z,u)),d.update(e.bgm_track(),e.bgm_paused()!==0,new Uint8Array(A,e.sfx_ptr(),e.sfx_count())),e.settings()!==r){r=e.settings(),m.setLanguage((r&4)!==0),e.mobile()!==0!==g&&(g=e.mobile()!==0,m.setVisible(g),E());try{localStorage.setItem(t,String(r))}catch{}}requestAnimationFrame(b)};requestAnimationFrame(b)}function c0(){var i;const n=navigator.userAgent,e=((i=window.matchMedia)==null?void 0:i.call(window,"(pointer: coarse)").matches)??!1,t=/Macintosh/.test(n)&&navigator.maxTouchPoints>1;return e||t||/Android|iPhone|iPad|iPod|Mobile/i.test(n)}l0().catch(n=>{document.body.textContent=`Failed to start: ${n}`,document.body.style.color="#fff"});
