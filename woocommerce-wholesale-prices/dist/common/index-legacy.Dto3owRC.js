System.register(["../apps/settings/index-legacy.Do5wtnh0.js","./motion-legacy._oOtLB3w.js","./useState-legacy.DugenP6A.js"],(function(e,t){"use strict";var o,a,n,r,s,l,i,u,c,d,p,v,f,m,b,g,y,x,h;return{setters:[e=>{o=e.G,a=e.b2,n=e.b,r=e.d,s=e.k,l=e.q,i=e.v,u=e.ab,c=e.T,d=e.aA,p=e.L,v=e.J,f=e.A,m=e.y,b=e.x,g=e.as},e=>{y=e.w,x=e.i},e=>{h=e.u}],execute:function(){const t=e=>{const{componentCls:t,colorPrimary:o}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${o})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},w=o("Wave",(e=>[t(e)]));function C(e){return e&&"#fff"!==e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&"rgba(255, 255, 255, 1)"!==e&&function(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3]&&t[1]===t[2]&&t[2]===t[3])}(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e}function T(e){return Number.isNaN(e)?0:e}const E=r({props:{target:s(),className:String},setup(e){const t=l(null),[o,r]=h(null),[s,d]=h([]),[p,v]=h(0),[f,m]=h(0),[b,g]=h(0),[x,w]=h(0),[E,N]=h(!1);function R(){const{target:t}=e,o=getComputedStyle(t);r(function(e){const{borderTopColor:t,borderColor:o,backgroundColor:a}=getComputedStyle(e);return C(t)?t:C(o)?o:C(a)?a:null}(t));const a="static"===o.position,{borderLeftWidth:n,borderTopWidth:s}=o;v(a?t.offsetLeft:T(-parseFloat(n))),m(a?t.offsetTop:T(-parseFloat(s))),g(t.offsetWidth),w(t.offsetHeight);const{borderTopLeftRadius:l,borderTopRightRadius:i,borderBottomLeftRadius:u,borderBottomRightRadius:c}=o;d([l,i,c,u].map((e=>T(parseFloat(e)))))}let L,S,$;const k=()=>{clearTimeout($),y.cancel(S),null==L||L.disconnect()},W=()=>{var e;const o=null===(e=t.value)||void 0===e?void 0:e.parentElement;o&&(a(null,o),o.parentElement&&o.parentElement.removeChild(o))};i((()=>{k(),$=setTimeout((()=>{W()}),5e3);const{target:t}=e;t&&(S=y((()=>{R(),N(!0)})),"undefined"!=typeof ResizeObserver&&(L=new ResizeObserver(R),L.observe(t)))})),u((()=>{k()}));const j=e=>{"opacity"===e.propertyName&&W()};return()=>{if(!E.value)return null;const a={left:`${p.value}px`,top:`${f.value}px`,width:`${b.value}px`,height:`${x.value}px`,borderRadius:s.value.map((e=>`${e}px`)).join(" ")};return o&&(a["--wave-color"]=o.value),n(c,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[n("div",{ref:t,class:e.className,style:a,onTransitionend:j},null)]})}}});function N(e,t,o){return function(){var r;const s=d(e);!(null===(r=null==o?void 0:o.value)||void 0===r?void 0:r.disabled)&&s&&function(e,t){const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",null==e||e.insertBefore(o,null==e?void 0:e.firstChild),a(n(E,{target:e,className:t},null),o)}(s,t.value)}}e("W",r({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(e,t){let{slots:o}=t;const a=g(),{prefixCls:n,wave:r}=p("wave",e),[,s]=w(n),l=N(a,v((()=>f(n.value,s.value))),r);let c;const y=()=>{d(a).removeEventListener("click",c,!0)};return i((()=>{m((()=>e.disabled),(()=>{y(),b((()=>{const t=d(a);null==t||t.removeEventListener("click",c,!0),t&&1===t.nodeType&&!e.disabled&&(c=e=>{"INPUT"===e.target.tagName||!x(e.target)||!t.getAttribute||t.getAttribute("disabled")||t.disabled||t.className.includes("disabled")||t.className.includes("-leave")||l()},t.addEventListener("click",c,!0))}))}),{immediate:!0,flush:"post"})})),u((()=>{y()})),()=>{var e;return null===(e=o.default)||void 0===e?void 0:e.call(o)[0]}}}))}}}));