import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",d="41812412-8184544d67aaee5dc545e6a16",m=`${f}?key=${d}`,h={image_type:"photo",orientation:"horizontal",safesearch:!0};function y(o){return fetch(`${m}&q=${o}`,h).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const g=document.querySelector(".search-form"),p=document.querySelector(".gallery"),a=document.querySelector(".loader");a.classList.remove("loader");g.addEventListener("submit",L);function L(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value;a.classList.add("loader"),y(n).then($).catch(S).finally(()=>{t.reset(),a.classList.remove("loader")})}function $(o){o.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),p.innerHTML=w(o.hits),b.refresh()}function S(o){l.error({message:"Sorry, something went wrong. Please try again later!"})}function w(o){return o.map(({largeImageURL:t,webformatURL:n,tags:s,likes:e,views:r,downloads:i,comments:c})=>`<li class="gallery-item">
        <a href="${t}">
        <img class="gallery-image" src="${n}" alt="${s}">
            <ul class="gallery-item-description">
                <li>Likes: ${e}</li>
                <li>Views: ${r}</li>
                <li>Downloads: ${i}</li>
                <li>Comments: ${c}</li>
            </ul>
        </a>
    </li>`).join("")}let b=new u(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
