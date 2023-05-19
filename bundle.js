(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),c=t(645),r=t.n(c),s=t(667),i=t.n(s),d=new URL(t(870),t.b),l=r()(a()),p=i()(d);l.push([e.id,"/* font-family: 'Righteous', cursive; 36px 48px\nfont-family: 'Vina Sans', cursive;\nfont-family: 'Luckiest Guy', cursive;\n\n */\n\nbody{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    background-color: #581c87;\n}\nnav{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   \n    background-color: #581c87;\n}\n.nav-header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Creepster', cursive;\n    color:#db2777;\n    font-size: 36px;\n    margin: 20px 0;\n   \n}\n.nav-header span{\n    font-size: 68px;\n    \n    color:  #0ea5e9;\n}\n.ulList{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n}\n.list{\n    margin-right: 20px;\n    font-size: 36px;\n    font-family: 'Vina Sans', cursive;\n\n    color: white;\n    cursor: pointer;\n}\n.list:hover{\n    text-decoration: underline;\n}\n.background{\n    margin: 0;\n   background-color: #fbcfe8;\n    height: 79%;\n    width: 100vw;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  \n    \n\n}\n.background::before{\n    content: '';\n    background-image: url("+p+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0.7;\n}\n\nmain h1{\n    font-size: 80px;\n    color: #881337;\n    font-family: 'Luckiest Guy', cursive;\n    position: absolute;\n    bottom: 350;\n    right: 750;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn{\n    position: absolute;\n    background-color: #db2777;\n    border: none;\n    font-size: 36px;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n    position: absolute;\n    bottom: 300;\n    right: 850;\n\n}\n.btn:hover{\n    background-color: #0ea5e9;\n    cursor: pointer;\n}\n.btnn{\n    background-color: #db2777;\n    border: none;\n    font-size: 36px;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n}\n.btnn:hover{\n    background-color: #0ea5e9;\n    cursor: pointer;\n}\n.current{\n    color: #0ea5e9;\n    text-decoration: underline;\n}\n\n.container{\n    background-color: #fecdd3;\n    padding: 20px;\n}\n.section{\n    background-color: #fbcfe8;\n    display: grid;\n    row-gap: 25px;\n    column-gap: 18px;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n   border-radius: 8px;\n}\n.header{\n    font-size: 50px;\n    text-align: center;\n    font-family: 'Luckiest Guy', cursive;\n\n}\n.items{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.items h2{\n    font-size: 36px;\n    color: #db2777;\n   font-family: 'Righteous', cursive;\n}\n.items p{\n    font-size: 20px;\n}\n.sections{\n    background-color: #fbcfe8;\n    border-radius: 10px;\n    \n}\n.form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nlabel{\n    font-size: 24px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-family: 'Vina Sans', cursive;\n}\ninput,textarea{\n    padding: 10px;\n    background-color: #fbcfe8;\n    border: 3px solid #881337;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n.button{\n    background-color: #0ea5e9;\n    border: none;\n    font-size: 36px;\n    color: black;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n}\n.button:hover{\n    background-color: #db2777;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var c={},r=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],l=c[d]||0,p="".concat(d," ").concat(l);c[d]=l+1;var u=t(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var s=t(c[r]);n[s].references--}for(var i=o(e,a),d=0;d<c.length;d++){var l=t(c[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},870:(e,n,t)=>{e.exports=t.p+"5ee6ecd412701a658a39.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var c=n[o]={id:o,exports:{}};return e[o](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),c=t(569),r=t.n(c),s=t(565),i=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=i(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,t(870);const b=t.p+"3c433584f67364b34117.svg";function g(){const e=document.querySelector("body"),n=document.createElement("main"),t=document.createElement("div");t.classList.add("background"),n.append(t);const o=document.createElement("h1"),a=document.createElement("span");a.classList.add("span"),a.textContent="Delivering";const c=document.createElement("span");c.classList.add("span"),c.textContent="Happiness",o.append(a),o.append(c),n.append(o);const r=document.createElement("button");r.classList.add("btn"),r.textContent="Order Now",n.append(r),e.append(n)}const v=t.p+"495a54caf8c5be22e110.png",x=t.p+"ebca6a0a6514d3b46b3d.png",h=t.p+"2a6753f290849ac5eabd.png",y=t.p+"2a07f50c61c9aa7fe71f.png",E=t.p+"be8b933f17d483480b9c.png",L=t.p+"a5fcad5230373ff007cf.png",C=t.p+"60c1167961de58087096.png",k=t.p+"d5e4b4bfc319a88eaf91.png";function w(){const e=document.querySelector("body"),n=document.createElement("main"),t=document.createElement("div");t.classList.add("container");const o=document.createElement("h2");o.classList.add("header"),o.textContent="Our Premium Products",t.append(o);const a=document.createElement("div");a.classList.add("section");const c=document.createElement("div");c.classList.add("items");const r=document.createElement("img");r.src=v,c.append(r);const s=document.createElement("h2");s.textContent="Saffron CheeseCake",c.append(s);const i=document.createElement("p");i.textContent="A Unique blend of Cheesecake Gelato infused with Real Saffron",c.append(i);const d=document.createElement("button");d.classList.add("btnn"),d.textContent="Order Now",c.append(d);const l=document.createElement("div");l.classList.add("items");const p=document.createElement("img");p.src=x,l.append(p);const u=document.createElement("h2");u.textContent="Vanilla Almond Dipped",l.append(u);const m=document.createElement("p");m.textContent="Premium Vanilla Gelato, Dipped in Chocolate & Crushed Almonds",l.append(m);const f=document.createElement("button");f.classList.add("btnn"),f.textContent="Order Now",l.append(f);const b=document.createElement("div");b.classList.add("items");const g=document.createElement("img");g.src=h,b.append(g);const w=document.createElement("h2");w.textContent="Premium Mango Gelato",b.append(w);const S=document.createElement("p");S.textContent="A Refreshing Real Mango Gelato for a Hot Summers day",b.append(S);const A=document.createElement("button");A.classList.add("btnn"),A.textContent="Order Now",b.append(A);const O=document.createElement("div");O.classList.add("items");const G=document.createElement("img");G.src=y,O.append(G);const M=document.createElement("h2");M.textContent="Toasted Pistachio Gelato",O.append(M);const T=document.createElement("p");T.textContent="A Strong Pistachio Ice Cream With Pistachio Crunch",O.append(T);const N=document.createElement("button");N.classList.add("btnn"),N.textContent="Order Now",O.append(N);const P=document.createElement("div");P.classList.add("items");const z=document.createElement("img");z.src=E,P.append(z);const j=document.createElement("h2");j.textContent='Lotus Oreo "Gloreotus"',P.append(j);const V=document.createElement("p");V.textContent="A Lotus ice cream with Oreo Cookies Collision on a Stick. Utterly GLOREOTUS!!!",P.append(V);const R=document.createElement("button");R.classList.add("btnn"),R.textContent="Order Now",P.append(R);const q=document.createElement("div");q.classList.add("items");const I=document.createElement("img");I.src=L,q.append(I);const U=document.createElement("h2");U.textContent="Strawberry Vanilla Gelato",q.append(U);const D=document.createElement("p");D.textContent="Vanilla Gelato Dipped in Strawberry Sorbet. A Winning Combination.",q.append(D);const H=document.createElement("button");H.classList.add("btnn"),H.textContent="Order Now",q.append(H);const Z=document.createElement("div");Z.classList.add("items");const F=document.createElement("img");F.src=C,Z.append(F);const $=document.createElement("h2");$.textContent="Premium Chocolate Gelato",Z.append($);const _=document.createElement("p");_.textContent="A Rich ,Creamy, Belgian Milk chocolate Gelato.",Z.append(_);const B=document.createElement("button");B.classList.add("btnn"),B.textContent="Order Now",Z.append(B);const W=document.createElement("div");W.classList.add("items");const J=document.createElement("img");J.src=k,W.append(J);const Q=document.createElement("h2");Q.textContent="Premium Vanilla Gelato",W.append(Q);const K=document.createElement("p");K.textContent="Premium Vanilla Gelato Stick. A Desert Chill Top Seller!",W.append(K);const X=document.createElement("button");X.classList.add("btnn"),X.textContent="Order Now",W.append(X),a.append(c),a.append(l),a.append(b),a.append(O),a.append(P),a.append(q),a.append(Z),a.append(W),t.append(a),n.append(t),e.append(n)}const S=document.querySelector("body"),A=document.createElement("nav"),O=document.createElement("div");O.classList.add("nav-header");const G=document.createElement("img");G.src=b,G.style.width="200px",G.style.height="150px",O.appendChild(G);const M=document.createElement("div"),T=document.createElement("ul");T.classList.add("ulList");const N=document.createElement("li");N.classList.add("list");const P=document.createElement("a");P.classList.add("link","current"),P.setAttribute("id","home"),P.textContent="Home",N.append(P),T.append(N);const z=document.createElement("li");z.classList.add("list");const j=document.createElement("a");j.classList.add("link"),j.setAttribute("id","menu"),j.textContent="Menu",z.append(j),T.append(z);const V=document.createElement("li");V.classList.add("list");const R=document.createElement("a");function q(){const e=document.querySelector("body"),n=document.querySelector("main");e.removeChild(n)}R.classList.add("link"),R.setAttribute("id","contact"),R.textContent="Contacts",V.append(R),T.append(V),M.append(T),A.append(O),A.append(M),S.append(A),g(),P.addEventListener("click",(()=>{q(),j.classList.remove("current"),R.classList.remove("current"),P.classList.add("current"),g()})),document.querySelector(".btn").addEventListener("click",(()=>{q(),j.classList.add("current"),w(),P.classList.remove("current"),R.classList.remove("current")})),j.addEventListener("click",(()=>{q(),j.classList.add("current"),w(),P.classList.remove("current"),R.classList.remove("current")})),R.addEventListener("click",(()=>{q(),P.classList.remove("current"),j.classList.remove("current"),R.classList.add("current"),function(){const e=document.querySelector("body"),n=document.createElement("main"),t=document.createElement("div");t.classList.add("container");const o=document.createElement("h2");o.classList.add("header"),o.textContent="Contact Us",t.append(o);const a=document.createElement("div");a.classList.add("sections");const c=document.createElement("form");c.classList.add("form"),c.innerHTML='\n    <label for="name">Full Name</label>\n    <input type="text" name="name" id="name">\n    <label for="address">Address</label>\n    <input type="text" name="address" id="address">\n    <label for="message">Message</label>\n    <textarea name="message" id="" cols="20" rows="5"></textarea>\n    <button class="button">Send Message</button>\n    ',a.append(c),t.append(a),n.append(t),e.append(n)}()}))})()})();