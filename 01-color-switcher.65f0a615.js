!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.65f0a615.js.map