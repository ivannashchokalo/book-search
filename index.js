import{a as l,S as c,i as u}from"./assets/vendor-B3IAfeER.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="https://openlibrary.org/search.json";function f(s){return l.get(d,{params:{q:s}}).then(t=>t.data).then(t=>t.docs)}const p=new c(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function m(s){const t=s.map(({title:n,author_name:o,cover_i:e,first_publish_year:r})=>`<li>
            <a href="https://covers.openlibrary.org/b/id/${e}-L.jpg">
              <img src="https://covers.openlibrary.org/b/id/${e}-M.jpg" alt="${n}" />
              <ul>
                <li><h2>${n}</h2></li>
                <li><h3>${o}</h3></li>
                <li><p>${r}</p></li>
              </ul>
            </a>
          </li>`).join("");i.list.innerHTML=t,p.refresh()}function h(){i.list.innerHTML=""}function y(){i.loader.classList.remove("hidden")}function g(){i.loader.classList.add("hidden")}const i={form:document.querySelector(".js-form"),list:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};i.form.addEventListener("submit",s=>{s.preventDefault();const n=new FormData(i.form).get("search-text");y(),h(),f(n).then(o=>{if(o.length===0)return u.error({message:"За вашим запитом нічого не знайдено",position:"topRight"});m(o)}).catch(o=>console.error(o)).finally(()=>g()),i.form.reset()});
//# sourceMappingURL=index.js.map
