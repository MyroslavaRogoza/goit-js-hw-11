import{i as c,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n=document.querySelector(".loader");class u{constructor(){this.url="https://pixabay.com/api/?"}getDataImg(r){const i=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(this.url+i).then(o=>{if(!o.ok)throw n.classList.add("loader-hide"),new Error(o.status);return n.classList.add("loader-hide"),o.json()})}}const d="/goit-js-hw-11/assets/iconError-cf0f8f06.svg",f=document.querySelector("form"),l=document.querySelector(".gallery"),g=document.querySelector(".loader");f.addEventListener("submit",h);function h(s){s.preventDefault();const r=s.target.elements.userInput.value.trim();g.classList.remove("loader-hide"),new u().getDataImg(r).then(o=>(o.hits.length===0&&(c.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:d,iconColor:"#fff",maxWidth:"350px"}),l.innerHTML=""),o.hits)).then(y),s.target.reset()}function p({webformatURL:s,largeImageURL:r,tags:i,likes:o,views:e,comments:t,downloads:a}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${r}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${i}"
      />
    </a>
</div>
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
    <p>${a}</p>
    </li> 

    </ul>
  </li>`}function y(s){const r=s.map(p).join("");l.innerHTML=r,new m(".gallery-link ",{captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
