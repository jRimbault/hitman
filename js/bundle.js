!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(2),o=function(e){return new Audio("sounds/"+e).play()},u=function(e){return function(){return o(e.file)}};function a(e){return r.createNode("li",{children:[r.createNode("strong",{textContent:e.key}),r.createNode("span",{classList:"words-text",textContent:e.text})],listeners:{click:{callback:u(e)}}})}window.onload=function(){return e=(n=i.sounds,u=n.reduce((function(e,t){return e[t.key.toLowerCase()]=t.file,e}),{}),document.addEventListener("keydown",(function(e){var t=u[e.key.toLowerCase()];t&&o(t)})),n).map(a),t=r.createNode("ul",{classList:"words",children:e}),void document.body.appendChild(t);var e,t,n,u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createNode=function(e,t){var n=document.createElement(e);return void 0===t?n:(t.id&&(n.id=t.id),function(e,t){var n;t&&("string"==typeof t&&""!==t&&e.classList.add(t),t instanceof Array&&(n=e.classList).add.apply(n,t.filter(Boolean)))}(n,t.classList),function(e,t){t&&("string"==typeof t?e.textContent=t:t.html&&(e.innerHTML=t.html))}(n,t.textContent),function(e,t){if(t)for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n],o=i[0],u=i[1];e.setAttribute(o,u)}}(n,t.attributes),function(e,t){t&&t.length>0&&e.append.apply(e,t)}(n,t.children),function(e,t){if(t)for(var n=0,r=Object.entries(t);n<r.length;n++){var i=r[n],o=i[0],u=i[1];u&&e.addEventListener(o,u.callback,u.options)}}(n,t.listeners),n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i={A:{key:"A",text:"Où est-il à ce jour?",file:"a-ce-jour.mp3"},G:{key:"G",text:"Où est donc passé Blacky?",file:"african-americany.mp3"},J:{key:"J",text:"Je sais où tu te caches!",file:"je-sais.mp3"},F:{key:"F",text:"Mon frère... Je te vengerai!",file:"mon-frere.mp3"},M:{key:"M",text:"C'est toi qui va mourir connard!",file:"mourir-connard.mp3"},H:{key:"H",text:"Tu ne m'échapperas pas!",file:"payer.mp3"},C:{key:"C",text:"Je vais te tuer petit con!",file:"petit-con.mp3"},P:{key:"P",text:"Philippe!",file:"philippe.mp3"},Q:{key:"Q",text:"Qui a tué mon frère?",file:"qui-a-tue.mp3"},R:{key:"R",text:"Rien à foutre des japonais",file:"rien-a-foutre.mp3"},S:{key:"S",text:"Salaud!",file:"salaud.mp3"},E:{key:"E",text:"Viens ici sale enculé!",file:"sale-encule.mp3"},T:{key:"T",text:"Ta gueule!",file:"ta-gueule.mp3"},Y:{key:"Y",text:"Vas-y!",file:"vas-y.mp3"},D:{key:"D",text:"On t'attend pour la vengeance!",file:"vengeance.mp3"},B:{key:"B",text:"Je veux ce connard!",file:"veux-ce-connard.mp3"},V:{key:"V",text:"Viens ici que je te bute enculé!",file:"viens-ici.mp3"}};t.sounds=Object.values(i).filter(r.isSound)},function(e,t,n){"use strict";function r(e,t){return function(e,t){return"object"==typeof t&&e in t}(e,t)&&"string"==typeof t[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.isSound=function(e){if(null===e)return!1;if(!(e instanceof Object))return!1;var t=["key","text","file"];if(r(t[0],e)&&1!==e[t[0]].length)return!1;for(var n=0,i=t.slice(1);n<i.length;n++){if(!r(i[n],e))return!1}return!0}}]);
//# sourceMappingURL=bundle.js.map