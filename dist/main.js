!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new XMLHttpRequest;e.open("GET","https://api.tvmaze.com/shows",!0),e.onload=function(){var t=JSON.parse(this.responseText);if(e.status>=200&&e.status<400){t.forEach(function(e){var t=document.createElement("div");t.setAttribute("class","card");var n=document.createElement("figure"),r=document.createElement("img");r.src=e.image.medium,n.appendChild(r);var a=document.createElement("h1");a.textContent=e.name;var o=document.createElement("p");e.summary=e.summary.substring(0,180).replace(/<\/?[^>]+>/gi,""),o.textContent=e.summary+"...";var i=document.createElement("a");i.href=e.url,i.setAttribute("class","more"),i.setAttribute("target","_blank"),i.textContent="More";var c=document.createElement("p");c.setAttribute("class","meta");var d=document.createElement("span");c.textContent="Premiered",d.textContent=e.premiered,c.appendChild(d);var u=document.createElement("p");u.setAttribute("class","meta");var s=document.createElement("span");u.textContent="Average rating",s.textContent=e.rating.average,u.appendChild(s);var l=document.createElement("div");l.setAttribute("class","info-show"),document.querySelector(".container").appendChild(t),t.appendChild(n),t.appendChild(l),l.appendChild(a),l.appendChild(o),l.appendChild(c),l.appendChild(u),o.appendChild(i)}),document.querySelector(".loader").classList.add("hide")}else{var n=document.createElement("div");n.setAttribute("class","error"),n.textContent="Nope, it's not working",container.appendChild(n)}},e.send()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("root"),t=document.createElement("img");t.src="img/tvm_api.png";var n=document.createElement("p");n.setAttribute("class","intro"),n.textContent="Simple web app that connects the TVMaze API, retrieves the data with JavaScript, and displays it on the front end.",document.createElement("div").setAttribute("class","logo-wrap");var r=document.createElement("header");r.setAttribute("class","header");var a=document.createElement("div");a.setAttribute("class","container"),r.appendChild(t),r.appendChild(n),e.appendChild(r),e.appendChild(a)}},,function(e,t,n){},function(e,t,n){e.exports=n.p+"img/tvm_api.png"},function(e,t,n){"use strict";o(n(4)),o(n(3));var r=o(n(1)),a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,a.default)()}]);