import{d as p,S as w,v as C,ar as x,z as M,y as H,aA as W,_ as l,as as _}from"../apps/settings/index.BHjzb07a.js";import{N as y}from"./motion.j5gF9e22.js";const E=p({compatConfig:{MODE:3},name:"ResizeObserver",props:{disabled:Boolean,onResize:Function},emits:["resize"],setup(i,v){let{slots:c}=v;const n=w({width:0,height:0,offsetHeight:0,offsetWidth:0});let h=null,s=null;const r=()=>{s&&(s.disconnect(),s=null)},b=e=>{const{onResize:t}=i,o=e[0].target,{width:O,height:R}=o.getBoundingClientRect(),{offsetWidth:d,offsetHeight:f}=o,g=Math.floor(O),u=Math.floor(R);if(n.width!==g||n.height!==u||n.offsetWidth!==d||n.offsetHeight!==f){const m={width:g,height:u,offsetWidth:d,offsetHeight:f};l(n,m),t&&Promise.resolve().then(()=>{t(l(l({},m),{offsetWidth:d,offsetHeight:f}),o)})}},z=_(),a=()=>{const{disabled:e}=i;if(e){r();return}const t=W(z);t!==h&&(r(),h=t),!s&&t&&(s=new y(b),s.observe(t))};return C(()=>{a()}),x(()=>{a()}),M(()=>{r()}),H(()=>i.disabled,()=>{a()},{flush:"post"}),()=>{var e;return(e=c.default)===null||e===void 0?void 0:e.call(c)[0]}}});export{E as R};