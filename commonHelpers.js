import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",d="41812412-8184544d67aaee5dc545e6a16",m=`${f}?key=${d}`;function h(t){return fetch(`${m}&q=${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}const y=document.querySelector(".search-form"),g=document.querySelector(".gallery");y.addEventListener("submit",p);function p(t){t.preventDefault();const n=t.currentTarget.elements.query.value;h(n).then($).catch(L)}function $(t){g.innerHTML=b(t.hits),S.refresh()}function L(t){searchValue||c.error({message:"Sorry, there are no images matching your search query. Please try again!"})}function b(t){return t.map(({largeImageURL:o,index:n,webformatURL:l,tags:e,likes:r,views:i,downloads:a,comments:s})=>`<li class="gallery-item">
        <a href="${o}">
        <img class="gallery-image" hits-index="${n}" src="${l}" alt="${e}">
            <ul class="gallery-item-description">
                <li>Likes: ${r}</li>
                <li>Views: ${i}</li>
                <li>Downloads: ${a}</li>
                <li>Comments: ${s}</li>
            </ul>
        </a>
    </li>`).join("")}let S=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
