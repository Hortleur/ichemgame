import{s as $,n as u,c as lt,u as ft,g as ut,d as ht}from"../chunks/scheduler.e108d1fd.js";import{S as j,i as P,g as J,h as Q,x as W,k as X,a as w,f as v,r as O,s as k,u as z,c as L,v as B,d as I,t as S,w as E}from"../chunks/index.a28bfc2a.js";const pt="/_app/immutable/assets/logo.99691f90.png";function dt(t){let e,n=`<div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"><li><a href="/">Acceuil</a></li> <li><a href="#formation">Formation</a></li> <li><a href="#modules">Modules</a></li> <li><a href="#tarifs">Tarifs</a></li> <li><a href="#temoignages">Témoignages</a></li></ul></div> <a class="w-10 md:w-16" href="/"><img src="${pt}" alt="Logo Ichem game" class="object-contain mask mask-circle"/></a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 font-bold text-md"><li><a href="/">Acceuil</a></li> <li><a href="#formation">Formation</a></li> <li><a href="#modules">Modules</a></li> <li><a href="#tarifs">Tarifs</a></li> <li><a href="#temoignages">Témoignages</a></li></ul></div> <div class="navbar-end"><a class="btn btn-accent text-white font-bold">Rendez-vous</a> <label class="swap swap-rotate mx-4"><input type="checkbox" data-toggle-theme="ichemDark,ichemLight" data-act-class="ACTIVECLASS"/> <svg class="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path></svg> <svg class="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg></label></div>`;return{c(){e=J("header"),e.innerHTML=n,this.h()},l(o){e=Q(o,"HEADER",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1ixxosy"&&(e.innerHTML=n),this.h()},h(){X(e,"class","navbar bg-base-300 sticky top-0 z-20")},m(o,r){w(o,e,r)},p:u,i:u,o:u,d(o){o&&v(e)}}}class gt extends j{constructor(e){super(),P(this,e,null,dt,$,{})}}const p=/^[a-z0-9]+(-[a-z0-9]+)*$/,mt=(t,e,n,o="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),c=r.pop(),l={provider:r.length>0?r[0]:o,prefix:c,name:a};return e&&!g(l)?null:l}const s=r[0],i=s.split("-");if(i.length>1){const a={provider:o,prefix:i.shift(),name:i.join("-")};return e&&!g(a)?null:a}if(n&&o===""){const a={provider:o,prefix:"",name:s};return e&&!g(a,n)?null:a}return null},g=(t,e)=>t?!!((t.provider===""||t.provider.match(p))&&(e&&t.prefix===""||t.prefix.match(p))&&t.name.match(p)):!1,Y=Object.freeze({left:0,top:0,width:16,height:16}),y=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),wt=Object.freeze({...Y,...y}),_=Object.freeze({...wt,body:"",hidden:!1});function vt(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}function F(t,e){const n=vt(t,e);for(const o in _)o in y?o in t&&!(o in n)&&(n[o]=y[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function yt(t,e){const n=t.icons,o=t.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const a=o[i]&&o[i].parent,c=a&&s(a);c&&(r[i]=[a].concat(c))}return r[i]}return(e||Object.keys(n).concat(Object.keys(o))).forEach(s),r}function bt(t,e,n){const o=t.icons,r=t.aliases||Object.create(null);let s={};function i(a){s=F(o[a]||r[a],s)}return i(e),n.forEach(i),F(t,s)}function tt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const o=yt(t);for(const r in o){const s=o[r];s&&(e(r,bt(t,r,s)),n.push(r))}return n}const xt={provider:"",aliases:{},not_found:{},...Y};function A(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function et(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!A(t,xt))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r.match(p)||typeof s.body!="string"||!A(s,_))return null}const o=e.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r.match(p)||typeof i!="string"||!n[i]&&!o[i]||!A(s,_))return null}return e}const Z=Object.create(null);function It(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function T(t,e){const n=Z[t]||(Z[t]=Object.create(null));return n[e]||(n[e]=It(t,e))}function nt(t,e){return et(e)?tt(e,(n,o)=>{o?t.icons[n]=o:t.missing.add(n)}):[]}function St(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let b=!1;function At(t){return typeof t=="boolean"&&(b=t),b}function _t(t,e){const n=mt(t,!0,b);if(!n)return!1;const o=T(n.provider,n.prefix);return St(o,n.name,e)}function Mt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),b&&!e&&!t.prefix){let r=!1;return et(t)&&(t.prefix="",tt(t,(s,i)=>{i&&_t(s,i)&&(r=!0)})),r}const n=t.prefix;if(!g({provider:e,prefix:n,name:"a"}))return!1;const o=T(e,n);return!!nt(o,t)}const $t=Object.freeze({width:null,height:null}),jt=Object.freeze({...$t,...y});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const Pt=Object.create(null);function Tt(t,e){Pt[t]=e}function ot(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const C=Object.create(null),h=["https://api.simplesvg.com","https://api.unisvg.com"],m=[];for(;h.length>0;)h.length===1||Math.random()>.5?m.push(h.shift()):m.push(h.pop());C[""]=ot({resources:["https://api.iconify.design"].concat(m)});function Ct(t,e){const n=ot(e);return n===null?!1:(C[t]=n,!0)}function rt(t){return C[t]}const Ot=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let H=Ot();function kt(t,e){const n=rt(t);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=e+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function zt(t){return t===404}const Lt=(t,e,n)=>{const o=[],r=kt(t,e),s="icons";let i={type:s,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=r&&l>0&&(o.push(i),i={type:s,provider:t,prefix:e,icons:[]},a=c.length),i.icons.push(c)}),o.push(i),o};function Bt(t){if(typeof t=="string"){const e=rt(t);if(e)return e.path}return"/"}const Et=(t,e,n)=>{if(!H){n("abort",424);return}let o=Bt(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});o+=s+".json?"+c.toString();break}case"custom":{const s=e.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;H(t+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(zt(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},Ft={prepare:Lt,send:Et},D="iconify2",x="iconify",st=x+"-count",R=x+"-version",Zt=36e5,Ht=168;function M(t,e){try{return t.getItem(e)}catch{}}function it(t,e,n){try{return t.setItem(e,n),!0}catch{}}function V(t,e){try{t.removeItem(e)}catch{}}function U(t,e){return it(t,st,e.toString())}function N(t){return parseInt(M(t,st))||0}const ct={local:!0,session:!0},Dt={local:new Set,session:new Set};let at=!1;function Rt(t){at=t}let d=typeof window>"u"?{}:window;function Vt(t){const e=t+"Storage";try{if(d&&d[e]&&typeof d[e].length=="number")return d[e]}catch{}ct[t]=!1}function Ut(t,e){const n=Vt(t);if(!n)return;const o=M(n,R);if(o!==D){if(o){const a=N(n);for(let c=0;c<a;c++)V(n,x+c.toString())}it(n,R,D),U(n,0);return}const r=Math.floor(Date.now()/Zt)-Ht,s=a=>{const c=x+a.toString(),l=M(n,c);if(typeof l=="string"){try{const f=JSON.parse(l);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>r&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&e(f,a))return!0}catch{}V(n,c)}};let i=N(n);for(let a=i-1;a>=0;a--)s(a)||(a===i-1?(i--,U(n,i)):Dt[t].add(a))}function Nt(){if(!at){Rt(!0);for(const t in ct)Ut(t,e=>{const n=e.data,o=e.provider,r=n.prefix,s=T(o,r);if(!nt(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}({...jt});const q={"background-color":"currentColor"},qt={"background-color":"transparent"},K={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},G={"-webkit-mask":q,mask:q,background:qt};for(const t in G){const e=G[t];for(const n in K)e[t+"-"+n]=K[n]}At(!0);Tt("",Ft);if(typeof document<"u"&&typeof window<"u"){Nt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Mt(o))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const o="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Ct(n,r)||console.error(o)}catch{console.error(o)}}}}function Kt(t){let e,n='<div class="items-center grid-flow-col"><p>Ichemgame © 2023 - Tous droits reservés</p></div> <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div>';return{c(){e=J("footer"),e.innerHTML=n,this.h()},l(o){e=Q(o,"FOOTER",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-54d82u"&&(e.innerHTML=n),this.h()},h(){X(e,"class","footer items-center p-4 bg-base-300 text-neutral-content")},m(o,r){w(o,e,r)},p:u,i:u,o:u,d(o){o&&v(e)}}}class Gt extends j{constructor(e){super(),P(this,e,null,Kt,$,{})}}function Jt(t){let e,n,o,r,s;e=new gt({});const i=t[2].default,a=lt(i,t,t[1],null);return r=new Gt({}),{c(){O(e.$$.fragment),n=k(),a&&a.c(),o=k(),O(r.$$.fragment)},l(c){z(e.$$.fragment,c),n=L(c),a&&a.l(c),o=L(c),z(r.$$.fragment,c)},m(c,l){B(e,c,l),w(c,n,l),a&&a.m(c,l),w(c,o,l),B(r,c,l),s=!0},p(c,[l]){a&&a.p&&(!s||l&2)&&ft(a,i,c,c[1],s?ht(i,c[1],l,null):ut(c[1]),null)},i(c){s||(I(e.$$.fragment,c),I(a,c),I(r.$$.fragment,c),s=!0)},o(c){S(e.$$.fragment,c),S(a,c),S(r.$$.fragment,c),s=!1},d(c){c&&(v(n),v(o)),E(e,c),a&&a.d(c),E(r,c)}}}function Qt(t,e,n){let{$$slots:o={},$$scope:r}=e;const s=!1;return t.$$set=i=>{"$$scope"in i&&n(1,r=i.$$scope)},[s,r,o]}class Yt extends j{constructor(e){super(),P(this,e,Qt,Jt,$,{ssr:0})}get ssr(){return this.$$.ctx[0]}}export{Yt as component};