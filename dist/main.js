!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=new XMLHttpRequest;e.open("GET","http://api.tvmaze.com/shows",!0),e.onload=function(){var t=JSON.parse(this.responseText);if(e.status>=200&&e.status<400){t.forEach(function(e){var t=document.createElement("div");t.setAttribute("class","card");var n=document.createElement("figure"),r=document.createElement("img");r.src=e.image.medium,n.appendChild(r);var a=document.createElement("h1");a.textContent=e.name;var o=document.createElement("p");e.summary=e.summary.substring(0,280).replace(/<\/?[^>]+>/gi,""),o.textContent=e.summary+"...";var d=document.createElement("a");d.href=e.url,d.setAttribute("class","more"),d.setAttribute("target","_blank"),d.textContent="More";for(var c=document.createElement("ul"),i=0;i<e.genres.length;i++){var u=e.genres[i],l=document.createElement("li");l.appendChild(document.createTextNode(u+",")),c.appendChild(l)}var s=document.createElement("p");s.setAttribute("class","meta");var p=document.createElement("span");s.textContent="Premiered",p.textContent=e.premiered,s.appendChild(p);var m=document.createElement("p");m.setAttribute("class","meta");var f=document.createElement("span");m.textContent="Rating",f.textContent=e.rating.average,m.appendChild(f);var v=document.createElement("div");v.setAttribute("class","info-show"),document.querySelector(".container").appendChild(t),t.appendChild(n),t.appendChild(v),v.appendChild(a),v.appendChild(o),v.appendChild(c),v.appendChild(s),v.appendChild(m),o.appendChild(d)}),document.querySelector(".loader").classList.add("hide")}else{var n=document.createElement("div");n.setAttribute("class","error"),n.textContent="Nope, it's not working",container.appendChild(n)}},e.send()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("root"),t=document.createElement("img");t.src="img/tvm_api.png";var n=document.createElement("p");n.setAttribute("class","intro"),n.textContent="Simple web app that connects the TVMaze API, retrieves the data with JavaScript, and displays it on the front end.",document.createElement("div").setAttribute("class","logo-wrap");var r=document.createElement("header");r.setAttribute("class","header");var a=document.createElement("div");a.setAttribute("class","container"),r.appendChild(t),r.appendChild(n),e.appendChild(r),e.appendChild(a)}},,function(e,t,n){},function(e,t,n){e.exports=n.p+"img/tvm_api.png"},function(e,t,n){"use strict";o(n(4)),o(n(3));var r=o(n(1)),a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,a.default)()}]);