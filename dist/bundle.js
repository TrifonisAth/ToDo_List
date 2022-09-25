(()=>{var n={426:(n,e,r)=>{"use strict";r.d(e,{Z:()=>a});var t=r(81),o=r.n(t),i=r(645),c=r.n(i)()(o());c.push([n.id,"html {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background-color: #154c79;\r\n  color: whitesmoke;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 6vh;\r\n}\r\n\r\n#logo {\r\n  width: 3rem;\r\n  justify-items: center;\r\n  background-color: #ffccee;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n#menu {\r\n  width: 5rem;\r\n  height: 5rem;\r\n}\r\n\r\nh1 > span {\r\n  color: #ffcc00;\r\n}\r\n\r\n.home > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.projects > * {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.side-logo {\r\n  width: 2rem;\r\n  height: 2rem;\r\n  align-self: center;\r\n  background-color: lightgoldenrodyellow;\r\n  margin: 1rem 0.7rem 1rem 2rem;\r\n}\r\n\r\n.project-dot {\r\n  background-color: #711f30;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.container-small {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.side-panel {\r\n  padding-left: 1rem;\r\n  background-color: #711f30;\r\n  flex: 1 1 300px;\r\n  min-width: 300px;\r\n  max-width: 400px;\r\n}\r\n\r\n#add {\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.content {\r\n  min-width: 400px;\r\n  width: 70vw;\r\n  min-height: 94vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  flex: 1;\r\n  background-color: #033c59;\r\n  padding: 2rem;\r\n}\r\n\r\n.content > * {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n#content-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  padding: 1rem 1.7rem;\r\n}\r\n\r\n.title {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected {\r\n  background-color: #118f55;\r\n}\r\n\r\n.home > *:hover,\r\n.projects > *:hover {\r\n  background-color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton {\r\n  padding: 0.8rem;\r\n  color: white;\r\n  font-size: 1.1rem;\r\n  margin: 0.7rem;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\ninput {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.project-prompt {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.red-btn {\r\n  background-color: red;\r\n}\r\n\r\n.green-btn {\r\n  background-color: #118f55;\r\n}\r\n\r\n.selected-tab {\r\n  font-weight: 700;\r\n  font-size: 1.15rem;\r\n  background-color: #184f35;\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.project > p {\r\n  flex-grow: 1;\r\n}\r\n\r\n.settings {\r\n  width: 2rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.options-panel {\r\n  width: 6rem;\r\n  padding: 0.2rem 1rem;\r\n  background-color: #444444;\r\n  position: absolute;\r\n  right: 6rem;\r\n  top: -4rem;\r\n}\r\n\r\n.options-panel > *:hover {\r\n  background-color: black;\r\n  color: goldenrod;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n",""]);const a=c},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(t)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(c[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);t&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},c=[],a=0;a<n.length;a++){var l=n[a],s=t.base?l[0]+t.base:l[0],d=i[s]||0,u="".concat(s," ").concat(d);i[s]=d+1;var p=r(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,t);t.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=r(i[c]);e[a].references--}for(var l=t(n,o),s=0;s<i.length;s++){var d=r(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},513:()=>{const n=document.querySelector(".add-project"),e=document.querySelector(".projects"),r=document.getElementById("content-title"),t=document.querySelector(".side-panel"),o=document.getElementById("menu"),c=document.querySelectorAll(".home-tab"),a=document.querySelector(".all-tasks"),l=document.querySelector(".today-tasks"),s=document.querySelector(".next-week"),d=document.querySelector(".important");let u,p=a,m=null;function f(n){n.classList.add("selected-tab"),r.textContent=n.children[1].textContent}function h(r,t,o=!1){n.onclick=null;const i=document.createElement("input"),c=document.createElement("button"),a=document.createElement("button"),l=document.createElement("div"),s=document.createElement("div");l.classList.add("project-prompt"),c.classList.add("red-btn"),c.textContent="Cancel",a.classList.add("green-btn"),a.textContent=!0!==o?"Add":"Rename",i.setAttribute("type","text"),i.setAttribute("placeholder","Project Name"),i.setAttribute("name","project"),i.setAttribute("id","project"),i.setAttribute("maxlength","20"),i.setAttribute("autocomplete","off"),s.classList.add("buttons"),o?c.addEventListener("click",(()=>v(0,t,!0))):c.addEventListener("click",v),a.addEventListener("click",g),s.appendChild(a),s.appendChild(c),l.appendChild(i),l.appendChild(s),e.insertAdjacentElement("beforeend",l),u=i}function g(r,t=!1){n.onclick=h,t&&(console.log("hey"),e.removeChild(e.lastChild));const o=document.createElement("div");o.classList.add("project"),o.insertAdjacentHTML("afterbegin",'<img src="../src/dot.png" alt="dot" class="side-logo project-dot"/>');const c=document.createElement("p");c.textContent=u.value,c.classList.add("project-name"),o.appendChild(c),o.insertAdjacentHTML("beforeend",'<img src="../src/settings.png" alt="settings" class="settings" />'),o.lastElementChild.addEventListener("click",(n=>function(n,r){null!==m&&m!==n&&y(m),m=n,r.stopPropagation();const t=document.createElement("div");t.classList.add("options-panel");const o=document.createElement("p");o.textContent="Rename";const c=document.createElement("p");c.textContent="Delete",t.appendChild(o),t.appendChild(c),n.appendChild(t),document.addEventListener("click",(r=>function(n,r,t,o){console.log(m===o),n.target==r&&function(n){const r=n.children[1].textContent;n.classList.add("hidden"),h(0,n,!0),e.lastChild.children[0].value=r}(o),n.target==t&&function(n){for(i=1;i<e.children.length;i++)e.children[i].classList.contains("selected-tab")&&e.removeChild(e.children[i]);b(l)}(),y(o)}(r,o,c,n)))}(o,n))),o.onclick=()=>b(o),e.removeChild(e.lastChild),e.appendChild(o)}function v(r,t,o=!1){n.onclick=h,o?(t.classList.remove("hidden"),e.removeChild(e.lastChild)):(e.removeChild(e.lastChild),console.log("cancel creation"))}function b(n){n!==p&&(p.classList.remove("selected-tab"),p=n,f(p))}function y(n){n.lastElementChild.classList.contains("options-panel")&&n.removeChild(n.lastElementChild)}c[0].onclick=()=>b(a),c[1].onclick=()=>b(l),c[2].onclick=()=>b(s),c[3].onclick=()=>b(d),f(p),o.onclick=function(){t.classList.toggle("hidden")},n.onclick=()=>h()}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{"use strict";var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),c=r.n(i),a=r(565),l=r.n(a),s=r(216),d=r.n(s),u=r(589),p=r.n(u),m=r(426),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,r(513)})()})();