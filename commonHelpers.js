import"./assets/vendor-491d46cf.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a="https://pixabay.com/api/",u="41812412-8184544d67aaee5dc545e6a16",f=`${a}?key=${u}`;function d(t){return fetch(`${f}&q=${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}const m=document.querySelector(".search-form"),h=document.querySelector(".gallery");m.addEventListener("submit",y);function y(t){t.preventDefault();const n=t.currentTarget.elements.query.value;d(n).then(g).catch(p)}function g(t){h.innerHTML=$(t.hits)}function p(t){alert("Sorry, there are no images matching your search query. Please try again!"),console.error(t)}function $(t){return t.map(({largeImageURL:o,index:n,webformatURL:l,tags:e,likes:r,views:i,downloads:s,comments:c})=>`<li class="gallery-item">
        <a href="${o}" target="_blank">
        <img class="gallery-image" hits-index="${n}" src="${l}" alt="${e}">
            <ul class="gallery-item-description">
                <li>Likes: ${r}</li>
                <li>Views: ${i}</li>
                <li>Downloads: ${s}</li>
                <li>Comments: ${c}</li>
            </ul>
        </a>
    </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
