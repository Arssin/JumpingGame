(()=>{"use strict";var e={d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})}};function t(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.d({},{J:()=>g,D:()=>u});var i=document.querySelector("canvas"),o=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;var n=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:30,y:0},this.velocity={x:0,y:0},this.width=30,this.height=30}var n,r;return n=e,(r=[{key:"draw",value:function(){o.fillStyle="red",o.fillRect(this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(){this.draw(),this.position.y+=this.velocity.y,this.position.x+=this.velocity.x,this.position.y+this.height+this.velocity.y<=i.height?this.velocity.y+=.2:this.velocity.y=0}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}()),r={right:{pressed:!1},left:{pressed:!1},up:{pressed:!1},jumping:{pressed:!0}};window.addEventListener("keydown",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),r.left.pressed=!0;break;case"ArrowRight":case"D":case"d":console.log("right"),r.right.pressed=!0;break;case"ArrowUp":case"W":case"w":console.log("up"),event.repeat||(n.velocity.y-=20,setTimeout(undefined,1e3))}})),window.addEventListener("keyup",(function(e){switch(e.key){case"ArrowLeft":case"A":case"a":console.log("left"),r.left.pressed=!1;break;case"ArrowRight":case"D":case"d":console.log("right"),r.right.pressed=!1;break;case"ArrowUp":case"W":case"w":console.log("up"),n.velocity.y=0}}));const s=e.p+"/images/85f43c80c38dee3079f42ddeced37558.png";function c(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=new Image;a.src=s;var h=function(){function e(t){var i=t.x,o=t.y,n=t.image;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.position={x:i,y:o},this.image=n,this.width=n.width,this.height=n.height}var t,i;return t=e,(i=[{key:"draw",value:function(){u.drawImage(this.image,this.position.x,this.position.y)}}])&&c(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l=[new h({x:400,y:500,image:a}),new h({x:650,y:400,image:a})],p=0;function d(){requestAnimationFrame(d),u.clearRect(0,0,g.width,g.height),l.forEach((function(e){e.draw()})),n.update(),r.right.pressed&&n.position.x<1200?n.velocity.x=5:r.left.pressed&&n.position.x>250?n.velocity.x=-5:(n.velocity.x*=.9,r.right.pressed?(p+=5,l.forEach((function(e){e.position.x-=5}))):r.left.pressed&&(p-=5,l.forEach((function(e){e.position.x+=5})))),console.log(p),l.forEach((function(e){n.position.y+n.height<=e.position.y&&n.position.y+n.height+n.velocity.y>=e.position.y&&n.position.x+n.width>=e.position.x&&n.position.x<=e.position.x+e.width&&(n.velocity.y=0)})),p>3e3&&console.log("its a win")}var g=document.querySelector("canvas"),u=g.getContext("2d");g.width=window.innerWidth,g.height=window.innerHeight,console.log(n),console.log(n.update.toString()),console.log(d.toString()),console.log(n.draw.toString()),window.onload=function(){n.update(),d()}})();
//# sourceMappingURL=index.bundle.js.map