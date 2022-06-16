(()=>{"use strict";var i={d:(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}};i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),i.o=(i,t)=>Object.prototype.hasOwnProperty.call(i,t),(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../"})(),i.d({},{JQ:()=>D,Do:()=>H,Nx:()=>R});const t=i.p+"/images/7088a6725aac1c7498e56cfb7f50f8a8.png";function e(i){var t=new Image;return t.src=i,t}function o(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}var n=document.querySelector("canvas"),a=n.getContext("2d");n.width=window.innerWidth,n.height=window.innerHeight;var h=0,r=0,s=e(t),w=function(){function i(){!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.position={x:30,y:0},this.velocity={x:0,y:0},this.width=64,this.height=64,this.image=s,this.frameWidth=32,this.frameHeight=32,this.jump=!1}var t,e;return t=i,(e=[{key:"draw",value:function(){a.drawImage(this.image,r*this.frameWidth,0,this.frameWidth,this.frameHeight,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){++h>8&&(r++,h=0),r>10&&(r=0),this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=n.height&&(this.velocity.y+=.2)}}])&&o(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),c=new w,d={right:{pressed:!1},left:{pressed:!1},up:{pressed:!1}};function y(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}window.addEventListener("keydown",(function(i){switch(i.key){case"ArrowLeft":case"A":case"a":console.log("left"),d.left.pressed=!0;break;case"ArrowRight":case"D":case"d":console.log("right"),d.right.pressed=!0;break;case"ArrowUp":case"W":case"w":console.log("up"),!1===d.up.pressed&&!1===c.jump&&0===c.velocity.y&&(c.jump=!0,c.velocity.y-=10,console.log(c.jump))}})),window.addEventListener("keyup",(function(i){switch(i.key){case"ArrowLeft":case"A":case"a":console.log("left"),d.left.pressed=!1;break;case"ArrowRight":case"D":case"d":console.log("right"),d.right.pressed=!1;break;case"ArrowUp":case"W":case"w":console.log("up"),c.jump=!1}}));var p=e(i.p+"/images/587fd84dafb5c9bfc1f58dee319a69f0.png"),g=function(){function i(t){var e=t.x,o=t.y,n=t.image;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.position={x:e,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,e;return t=i,(e=[{key:"draw",value:function(){H.drawImage(this.image,this.position.x,this.position.y)}}])&&y(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),f=[new g({x:-1,y:510,image:p}),new g({x:p.width-120,y:510,image:p}),new g({x:2*p.width+100,y:510,image:p}),new g({x:3*p.width+300,y:510,image:p}),new g({x:6*p.width,y:510,image:p}),new g({x:11*p.width,y:510,image:p})];const l=i.p+"/images/db3d3bfd0ea74c6d79d6080c97855c35.png",x=i.p+"/images/e2ce6df778b71c57060ff47951071056.png";function u(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}var m=e(l),v=e(x),b=function(){function i(t){var e=t.x,o=t.y,n=t.image;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.position={x:e,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,e;return t=i,(e=[{key:"draw",value:function(){H.drawImage(this.image,this.position.x,this.position.y)}}])&&u(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),E=[new b({x:0,y:0,image:m}),new b({x:300,y:320,image:v})];function k(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}var j=e(i.p+"/images/c668fd2506128c4a48f13ab87cf6f516.png"),O=function(){function i(t){var e=t.x,o=t.y,n=t.image;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.position={x:e,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,e;return t=i,(e=[{key:"draw",value:function(){H.drawImage(this.image,this.position.x,this.position.y)}}])&&k(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),P=[new O({x:5*p.width,y:340,image:j}),new O({x:5*p.width+j.width,y:340,image:j}),new O({x:7*p.width+j.width,y:340,image:j}),new O({x:7*p.width+3*j.width,y:250,image:j}),new O({x:7*p.width+5*j.width,y:340,image:j}),new O({x:7*p.width+8*j.width,y:440,image:j}),new O({x:7*p.width+10*j.width,y:440,image:j})];function A(i,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}var T=e(i.p+"/images/2474c925f54d3e2c8b46009a15c1d4de.png"),C=function(){function i(t){var e=t.x,o=t.y,n=t.image;!function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.position={x:e,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,e;return t=i,(e=[{key:"draw",value:function(){H.drawImage(this.image,this.position.x,this.position.y)}}])&&A(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),i}(),S=[new C({x:26*p.width,y:200,image:T}),new C({x:26*p.width,y:400,image:T})];function I(){f=[new g({x:-1,y:510,image:p}),new g({x:p.width-1,y:510,image:p}),new g({x:2*p.width+100,y:510,image:p}),new g({x:3*p.width+300,y:510,image:p}),new g({x:6*p.width,y:510,image:p}),new g({x:11*p.width,y:510,image:p}),new g({x:18*p.width,y:510,image:p}),new g({x:19*p.width,y:460,image:p}),new g({x:20*p.width,y:420,image:p}),new g({x:22*p.width-50,y:420,image:p}),new g({x:26*p.width-50,y:420,image:p}),new g({x:30*p.width-300,y:420,image:p})],S=[new C({x:22*p.width+150+4*T.width,y:220,image:T}),new C({x:27*p.width-50,y:320,image:T}),new C({x:27*p.width-50+T.width,y:250,image:T}),new C({x:27*p.width-50+2*T.width,y:250,image:T}),new C({x:27*p.width-50+3*T.width,y:320,image:T}),new C({x:27*p.width-50+4*T.width,y:420,image:T})],P=[new O({x:5*p.width,y:340,image:j}),new O({x:5*p.width+j.width,y:340,image:j}),new O({x:7*p.width+j.width,y:340,image:j}),new O({x:7*p.width+3*j.width,y:250,image:j}),new O({x:7*p.width+5*j.width,y:340,image:j}),new O({x:7*p.width+8*j.width,y:440,image:j}),new O({x:7*p.width+10*j.width,y:440,image:j}),new O({x:9*p.width+11*j.width,y:440,image:j}),new O({x:9*p.width+14*j.width,y:440,image:j}),new O({x:9*p.width+17*j.width,y:440,image:j}),new O({x:10*p.width+17*j.width,y:460,image:j}),new O({x:11*p.width+17*j.width+40,y:360,image:j}),new O({x:10*p.width+18*j.width+20,y:180,image:j}),new O({x:10*p.width+19*j.width+40,y:100,image:j}),new O({x:10*p.width+20*j.width+40,y:100,image:j}),new O({x:10*p.width+21*j.width+40,y:100,image:j}),new O({x:10*p.width+22*j.width+40,y:100,image:j}),new O({x:21*p.width+170+4*T.width,y:320,image:j})],c=new w,L=0,E=[new b({x:0,y:0,image:m}),new b({x:300,y:320,image:v})]}var W=4.5,L=0;function q(){requestAnimationFrame(q),H.fillStyle="white",H.fillRect(0,0,D.width,D.height),E.forEach((function(i){i.draw()})),f.forEach((function(i){i.draw()})),S.forEach((function(i){i.draw()})),P.forEach((function(i){i.draw()})),c.update(),d.right.pressed&&c.position.x<400?c.velocity.x=W:d.left.pressed&&c.position.x>100?c.velocity.x=-4.5:(c.velocity.x=0,d.right.pressed?(L+=W,f.forEach((function(i){i.position.x-=W})),E.forEach((function(i){i.position.x-=2.97})),P.forEach((function(i){i.position.x-=W})),S.forEach((function(i){i.position.x-=W}))):d.left.pressed&&L>0&&(L-=W,f.forEach((function(i){i.position.x+=W})),E.forEach((function(i){i.position.x+=2.97})),P.forEach((function(i){i.position.x+=W})),S.forEach((function(i){i.position.x+=W})))),P.forEach((function(i){c.position.y+c.height<=i.position.y&&c.position.y+c.height+c.velocity.y>=i.position.y&&c.position.x+c.width-10>=i.position.x&&c.position.x<=i.position.x-20+i.width&&(c.velocity.y=0)})),f.forEach((function(i){c.position.y+c.height<=i.position.y&&c.position.y+c.height+c.velocity.y>=i.position.y&&c.position.x+c.width-10>=i.position.x&&c.position.x<=i.position.x-10+i.width?c.velocity.y=0:c.position.y+c.height>=i.position.y&&c.position.x+c.width>=i.position.x&&c.position.x+c.width<=i.position.x+i.width?c.velocity.x=-1:c.position.y+c.height>=i.position.y&&c.position.x+c.width>=i.position.x&&c.position.x<=i.position.x+i.width&&(c.velocity.x=1)})),S.forEach((function(i){c.position.y+c.height<=i.position.y&&c.position.y+c.height+c.velocity.y>=i.position.y&&c.position.x+c.width-10>=i.position.x&&c.position.x<=i.position.x-10+i.width?c.velocity.y=0:c.position.y+c.height>=i.position.y&&c.position.x+c.width>=i.position.x&&c.position.x+c.width<=i.position.x+i.width?c.velocity.x=-1:c.position.y+c.height>=i.position.y&&c.position.x+c.width>=i.position.x&&c.position.x<=i.position.x+i.width&&(c.velocity.x=1)})),L>13860&&console.log("its a win"),c.position.y>R&&(console.log("you lose"),I())}var D=document.querySelector("canvas"),H=D.getContext("2d");D.width=1024,D.height=576;var R=D.height;window.onload=function(){I(),q()},document.querySelector(".restartBtn").addEventListener("click",(function(){I()}))})();
//# sourceMappingURL=index.bundle.js.map