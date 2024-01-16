import"./assets/vendor-491d46cf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const c="https://pixabay.com/api/",u="41812412-8184544d67aaee5dc545e6a16",f=`${c}?key=${u}`;function d(o){return fetch(`${f}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const m=document.querySelector(".search-form"),h=document.querySelector(".gallery");m.addEventListener("submit",y);function y(o){o.preventDefault();const t=o.currentTarget.elements.query.value;d(t).then(g).catch(p)}function g({largeImageURL:o,index:t,webformatURL:l,tags:i,likes:e,views:r,downloads:n,comments:s}){const a=`<li class="gallery-item">
        <a href="${o}" target="_blank">
        <img class="gallery-image" hits-index="${t}" src="${l}" alt="${i}">
            <ul class="gallery-item-description">
                <li>Likes: ${e}</li>
                <li>Views: ${r}</li>
                <li>Downloads: ${n}</li>
                <li>Comments: ${s}</li>
            </ul>
        </a>
    </li>`;h.insertAdjacentHTML("afterbegin",a)}function p(o){alert("Sorry, there are no images matching your search query. Please try again!"),console.error(o)}
//# sourceMappingURL=commonHelpers.js.map
