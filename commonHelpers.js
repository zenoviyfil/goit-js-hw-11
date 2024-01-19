import{i as a,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="41812412-8184544d67aaee5dc545e6a16",h=`${d}?key=${m}`;function y(o){return fetch(`${h}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const g=document.querySelector(".search-form"),p=document.querySelector(".gallery"),s=document.querySelector(".loader");g.addEventListener("submit",L);function L(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value;s.classList.add("loader"),y(n).then($).catch(S).finally(()=>{t.reset(),s.classList.remove("loader")})}function $(o){o.hits.length===0&&a.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML=w(o.hits),b.refresh()}function S(o){a.error({message:"Sorry, something went wrong. Please try again later!"})}function w(o){return o.map(({largeImageURL:t,index:n,webformatURL:l,tags:e,likes:r,views:i,downloads:c,comments:u})=>`<li class="gallery-item">
        <a href="${t}">
        <img class="gallery-image" hits-index="${n}" src="${l}" alt="${e}">
            <ul class="gallery-item-description">
                <li>Likes: ${r}</li>
                <li>Views: ${i}</li>
                <li>Downloads: ${c}</li>
                <li>Comments: ${u}</li>
            </ul>
        </a>
    </li>`).join("")}let b=new f(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
