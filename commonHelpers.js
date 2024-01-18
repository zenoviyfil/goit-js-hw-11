import{S as c}from"./assets/vendor-b41a7778.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",f="41812412-8184544d67aaee5dc545e6a16",d=`${u}?key=${f}`;function m(t){return fetch(`${d}&q=${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}const h=document.querySelector(".search-form"),y=document.querySelector(".gallery");h.addEventListener("submit",g);function g(t){t.preventDefault();const n=t.currentTarget.elements.query.value;m(n).then(p).catch($)}function p(t){y.innerHTML=L(t.hits)}function $(t){alert("Sorry, there are no images matching your search query. Please try again!"),console.error(t)}function L(t){return t.map(({largeImageURL:o,index:n,webformatURL:l,tags:e,likes:r,views:i,downloads:a,comments:s})=>`<li class="gallery-item">
        <a href="${o}">
        <img class="gallery-image" hits-index="${n}" src="${l}" alt="${e}">
            <ul class="gallery-item-description">
                <li>Likes: ${r}</li>
                <li>Views: ${i}</li>
                <li>Downloads: ${a}</li>
                <li>Comments: ${s}</li>
            </ul>
        </a>
    </li>`).join("")}new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
