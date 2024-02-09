import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class a{constructor(){}getImg(r){const s="https://pixabay.com/api/?",i=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(s+i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}}const l="/goit-js-hw-11/assets/iconError-cf0f8f06.svg";document.querySelector("form");document.querySelector(".input-img");document.querySelector("form button");const u=document.querySelector(".gallery");function m({webformatURL:o,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:n}){return`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${o}"
        alt="${s}"
      />
    </a>

    <ul class='img-data-container'>

    <li class='img-data-item'>
    <h3>Likes<h3>
    <p>${i}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views<h3>
    <p>${e}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments<h3>
    <p>${t}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads<h3>
    <p>${n}</p>
    </li> 

    </ul>
  </li>`}function f(o){const r=o.map(m).join("");u.innerHTML=r}const h=new a;h.getImg("dfjjuhynhuhuh").then(o=>o.hits.length===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",color:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:l,iconColor:"#fff"}):o.hits).then(f);
//# sourceMappingURL=commonHelpers.js.map
