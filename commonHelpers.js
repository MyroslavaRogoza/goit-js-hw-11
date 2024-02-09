import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class c{constructor(){}getImg(r){const i="https://pixabay.com/api/?",o=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(i+o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}}const l="/goit-js-hw-11/assets/iconError-cf0f8f06.svg",u=document.querySelector("form");document.querySelector(".user-input");document.querySelector("form button");const m=document.querySelector(".gallery");u.addEventListener("submit",f);function f(s){s.preventDefault();const r=s.target.elements.userInput.value;new c().getImg(r).then(o=>o.hits.length===0?a.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:l,iconColor:"#fff",maxWidth:"350px"}):o.hits).then(g)}function p({webformatURL:s,largeImageURL:r,tags:i,likes:o,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${i}"
      />
    </a>

    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${o}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${e}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${t}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${n}</p>
    </li> 

    </ul>
  </li>`}function g(s){const r=s.map(p).join("");m.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map
