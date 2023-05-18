(()=>{"use strict";var n,e,t,o,r,a,i,c,s,l,d,u,p,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(870),t.b),d=i()(r()),u=s()(l);d.push([n.id,"/* font-family: 'Righteous', cursive; 36px 48px\nfont-family: 'Vina Sans', cursive;\nfont-family: 'Luckiest Guy', cursive;\n\n */\n\nbody{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    background-color: #581c87;\n}\nnav{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   \n    background-color: #581c87;\n}\n.nav-header{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Creepster', cursive;\n    color:#db2777;\n    font-size: 36px;\n    margin: 20px 0;\n   \n}\n.nav-header span{\n    font-size: 68px;\n    \n    color:  #0ea5e9;\n}\n.ulList{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    list-style: none;\n}\n.list{\n    margin-right: 20px;\n    font-size: 36px;\n    font-family: 'Vina Sans', cursive;\n\n    color: white;\n    cursor: pointer;\n}\n.list:hover{\n    text-decoration: underline;\n}\n.background{\n    margin: 0;\n   background-color: #fbcfe8;\n    height: 79%;\n    width: 100vw;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  \n    \n\n}\n.background::before{\n    content: '';\n    background-image: url("+u+");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0.7;\n}\n\nmain h1{\n    font-size: 80px;\n    color: #881337;\n    font-family: 'Luckiest Guy', cursive;\n    position: absolute;\n    bottom: 350;\n    right: 750;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n}\n\n.btn{\n    position: absolute;\n    background-color: #db2777;\n    border: none;\n    font-size: 36px;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n    position: absolute;\n    bottom: 300;\n    right: 850;\n\n}\n.btn:hover{\n    background-color: #0ea5e9;\n    cursor: pointer;\n}\n.btnn{\n    background-color: #db2777;\n    border: none;\n    font-size: 36px;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n}\n.btnn:hover{\n    background-color: #0ea5e9;\n    cursor: pointer;\n}\n.current{\n    color: #0ea5e9;\n    text-decoration: underline;\n}\n\n.container{\n    background-color: #fecdd3;\n    padding: 20px;\n}\n.section{\n    background-color: #fbcfe8;\n    display: grid;\n    row-gap: 25px;\n    column-gap: 18px;\n    grid-template-columns: 1fr 1fr 1fr;\n    align-items: center;\n    justify-content: center;\n    padding: 20px;\n   border-radius: 8px;\n}\n.header{\n    font-size: 50px;\n    text-align: center;\n    font-family: 'Luckiest Guy', cursive;\n\n}\n.items{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.items h2{\n    font-size: 36px;\n    color: #db2777;\n   font-family: 'Righteous', cursive;\n}\n.items p{\n    font-size: 20px;\n}\n.sections{\n    background-color: #fbcfe8;\n    border-radius: 10px;\n    \n}\n.form{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\nlabel{\n    font-size: 24px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-family: 'Vina Sans', cursive;\n}\ninput,textarea{\n    padding: 10px;\n    background-color: #fbcfe8;\n    border: 3px solid #881337;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n.button{\n    background-color: #0ea5e9;\n    border: none;\n    font-size: 36px;\n    color: black;\n    padding: 10px;\n    font-family: 'Vina Sans', cursive;\n    color: #e2e8f0;\n    cursor: pointer;\n}\n.button:hover{\n    background-color: #db2777;\n}",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},870:(n,e,t)=>{n.exports=t.p+"5ee6ecd412701a658a39.jpg"}},b={};function g(n){var e=b[n];if(void 0!==e)return e.exports;var t=b[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.m=m,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),o=g.n(t),r=g(569),a=g.n(r),i=g(565),c=g.n(i),s=g(216),l=g.n(s),d=g(589),u=g.n(d),p=g(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,g(870),function(){const n=document.querySelector("#content"),e=document.createElement("nav"),t=document.createElement("div");t.classList.add("nav-header");const o=document.createElement("img");o.src="../src/dssss.svg",o.style.width="200px",o.style.height="150px",t.appendChild(o);const r=document.createElement("div"),a=document.createElement("ul");a.classList.add("ulList");const i=document.createElement("li");i.classList.add("list");const c=document.createElement("a");c.classList.add("link"),c.setAttribute("id","home"),c.textContent="Home",i.append(c),a.append(i);const s=document.createElement("li");s.classList.add("list");const l=document.createElement("a");l.classList.add("link"),l.setAttribute("id","menu"),l.textContent="Menu",s.append(l),a.append(s);const d=document.createElement("li");d.classList.add("list");const u=document.createElement("a");u.classList.add("link","current"),u.setAttribute("id","contact"),u.textContent="Contact",d.append(u),a.append(d),r.append(a),e.append(t),e.append(r);const p=document.createElement("main"),f=document.createElement("div");f.classList.add("container");const m=document.createElement("h2");m.classList.add("header"),m.textContent="Contact Us",f.append(m);const b=document.createElement("div");b.classList.add("sections");const g=document.createElement("form");g.classList.add("form"),g.innerHTML='\n    <label for="name">Full Name</label>\n    <input type="text" name="name" id="name">\n    <label for="address">Address</label>\n    <input type="text" name="address" id="address">\n    <label for="message">Message</label>\n    <textarea name="message" id="" cols="20" rows="5"></textarea>\n    <button class="button">Send Message</button>\n    ',b.append(g),f.append(b),p.append(f),n.append(e),n.append(p)}()})();