
(function(namespace,resourcesUrl){"use strict";
(function(Context, resourcesUrl){!function(e){const t=e.createElement("a"),n=e.createElement("div");function o(e,t,n){for(let o=0;o<t.length;++o){const r=t[o];r.hasOwnProperty(e)&&n(r[e])}}const r={};return function(s,i){i=i||{};const c=(t.href=s,t.href);let l=r[c];if(l){const e=l.svgSprite;e?i.onInjected&&i.onInjected(e):l.optionsArr.push(i)}else{let t=!1;r[c]=l={spriteHandler:{remove:function(){if(!t){let e=l.svgSprite;if(e){const t=e.parentNode;t&&t.removeChild(e),l.svgSprite=null}delete r[c],t=!0}}},svgSprite:null,optionsArr:[i]},function(r,s,i){if(r){const s=new XMLHttpRequest;s.onreadystatechange=function(){4==s.readyState&&200==s.status&&function(r){let s=function(e,t){n.innerHTML=e;const o=n.removeChild(n.firstChild);return o["data-inject-url"]=t,o}(r,c);t||(l.svgSprite=s,e.documentElement.appendChild(s),o("afterInject",l.optionsArr,function(e){e(s)}))}(s.responseText)},s.onerror=function(e){o("onLoadFail",l.optionsArr,function(t){t(e)})},s.open("GET",r,!0),s.send()}}(s)}return l.spriteHandler}}(document)("https://cdn.jsdelivr.net/gh/guiwuff/slotgames-web-component@master/dist/collection/assets/svgs/slot-sprites.svg",{});
})(x,r);
})("slotgames");