function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("1GAPJ");const u=document.querySelector("button"),l=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),s=document.querySelector('input[name="amount"]');function d(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}u.addEventListener("click",(t=>{t.preventDefault();const n=parseInt(l.value),o=parseInt(a.value),r=parseInt(s.value),u=[];for(let e=0;e<r;e++){const t=e+1,r=o*e+n;u.push(d(t,r))}u.forEach((t=>{t.then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}))}));
//# sourceMappingURL=03-promises.54fa0870.js.map
