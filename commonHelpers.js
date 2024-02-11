import{S as l,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();class m{constructor(){this.url="https://pixabay.com/api/?"}getImg(o){const n=new URLSearchParams({key:"42280899-738d1c20fb5924f395bcd6368",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(this.url+n).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}}const f="/goit-js-hw-11/assets/iconError-cf0f8f06.svg",p=document.querySelector("form");document.querySelector(".user-input");document.querySelector("form button");const g=document.querySelector(".gallery");p.addEventListener("submit",h);let c=new l(".gallery-link ",{sourceAttr:"href",captions:!0,captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250});c.refresh();function h(s){s.preventDefault();const o=s.target.elements.userInput.value.trim();new m().getImg(o).then(i=>(i.hits.length===0&&u.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",messageColor:"#fafafb",backgroundColor:"#ef4040",position:"topRight",iconUrl:f,iconColor:"#fff",maxWidth:"350px"}),i.hits)).then(y),c.refresh(),e.target.reset()}function d({webformatURL:s,largeImageURL:o,tags:n,likes:i,views:t,comments:r,downloads:a}){return`<li class="gallery-item">
  <div class='img-container'>
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${n}"
      />
    </a>
</div>
    <ul class='img-data-container'>
    <li class='img-data-item'>
    <h3>Likes</h3>
    <p>${i}</p>
    </li>

    <li class='img-data-item'>
    <h3>Views</h3>
    <p>${t}</p>
    </li>

    <li class='img-data-item'>
    <h3>Comments</h3>
    <p>${r}</p>
    </li>

    <li class='img-data-item'>
    <h3>Downloads</h3>
    <p>${a}</p>
    </li> 

    </ul>
  </li>`}function y(s){const o=s.map(d).join("");g.innerHTML=o,new l(".gallery-link ",{captions:!0,captionPosition:"bottom",captionSelector:"img",captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
