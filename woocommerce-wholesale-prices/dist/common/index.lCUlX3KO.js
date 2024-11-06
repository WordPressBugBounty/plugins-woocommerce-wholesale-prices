import{G as V,b2 as R,b as g,d as S,k as _,q as G,v as L,ab as $,T as U,aA as y,L as q,J,A as K,y as Q,x as X,as as Y}from"../apps/settings/index.CKpLJebS.js";import{w as E,i as Z}from"./motion.B4vIiQau.js";import{u as l}from"./useState.oMw7RQ-7.js";const ee=e=>{const{componentCls:t,colorPrimary:o}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:"var(--wave-color, ".concat(o,")"),boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:["box-shadow 0.4s ".concat(e.motionEaseOutCirc),"opacity 2s ".concat(e.motionEaseOutCirc)].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0}}}}},te=V("Wave",e=>[ee(e)]);function oe(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function b(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&oe(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function ae(e){const{borderTopColor:t,borderColor:o,backgroundColor:s}=getComputedStyle(e);return b(t)?t:b(o)?o:b(s)?s:null}function h(e){return Number.isNaN(e)?0:e}const ne=S({props:{target:_(),className:String},setup(e){const t=G(null),[o,s]=l(null),[i,d]=l([]),[p,m]=l(0),[c,v]=l(0),[a,u]=l(0),[k,O]=l(0),[B,I]=l(!1);function C(){const{target:n}=e,r=getComputedStyle(n);s(ae(n));const N=r.position==="static",{borderLeftWidth:j,borderTopWidth:z}=r;m(N?n.offsetLeft:h(-parseFloat(j))),v(N?n.offsetTop:h(-parseFloat(z))),u(n.offsetWidth),O(n.offsetHeight);const{borderTopLeftRadius:F,borderTopRightRadius:D,borderBottomLeftRadius:H,borderBottomRightRadius:M}=r;d([F,D,M,H].map(P=>h(parseFloat(P))))}let f,w,T;const x=()=>{clearTimeout(T),E.cancel(w),f==null||f.disconnect()},W=()=>{var n;const r=(n=t.value)===null||n===void 0?void 0:n.parentElement;r&&(R(null,r),r.parentElement&&r.parentElement.removeChild(r))};L(()=>{x(),T=setTimeout(()=>{W()},5e3);const{target:n}=e;n&&(w=E(()=>{C(),I(!0)}),typeof ResizeObserver<"u"&&(f=new ResizeObserver(C),f.observe(n)))}),$(()=>{x()});const A=n=>{n.propertyName==="opacity"&&W()};return()=>{if(!B.value)return null;const n={left:"".concat(p.value,"px"),top:"".concat(c.value,"px"),width:"".concat(a.value,"px"),height:"".concat(k.value,"px"),borderRadius:i.value.map(r=>"".concat(r,"px")).join(" ")};return o&&(n["--wave-color"]=o.value),g(U,{appear:!0,name:"wave-motion",appearFromClass:"wave-motion-appear",appearActiveClass:"wave-motion-appear",appearToClass:"wave-motion-appear wave-motion-appear-active"},{default:()=>[g("div",{ref:t,class:e.className,style:n,onTransitionend:A},null)]})}}});function re(e,t){const o=document.createElement("div");o.style.position="absolute",o.style.left="0px",o.style.top="0px",e==null||e.insertBefore(o,e==null?void 0:e.firstChild),R(g(ne,{target:e,className:t},null),o)}function se(e,t,o){function s(){var i;const d=y(e);!((i=o==null?void 0:o.value)===null||i===void 0)&&i.disabled||!d||re(d,t.value)}return s}const ce=S({compatConfig:{MODE:3},name:"Wave",props:{disabled:Boolean},setup(e,t){let{slots:o}=t;const s=Y(),{prefixCls:i,wave:d}=q("wave",e),[,p]=te(i),m=se(s,J(()=>K(i.value,p.value)),d);let c;const v=()=>{y(s).removeEventListener("click",c,!0)};return L(()=>{Q(()=>e.disabled,()=>{v(),X(()=>{const a=y(s);a==null||a.removeEventListener("click",c,!0),!(!a||a.nodeType!==1||e.disabled)&&(c=u=>{u.target.tagName==="INPUT"||!Z(u.target)||!a.getAttribute||a.getAttribute("disabled")||a.disabled||a.className.includes("disabled")||a.className.includes("-leave")||m()},a.addEventListener("click",c,!0))})},{immediate:!0,flush:"post"})}),$(()=>{v()}),()=>{var a;return(a=o.default)===null||a===void 0?void 0:a.call(o)[0]}}});export{ce as W};
