import{G as P,J as c,A as x,d as y,L as k,aB as D,b,D as C,P as g,ak as I,ac as h,_ as l}from"../apps/settings/index.CKpLJebS.js";import{c as _}from"./createContext.DrcFD0PM.js";import{h as A,j as R,k as B,l as L,m as N,n as O,o as T,p as w}from"./motion.B4vIiQau.js";const F=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},G=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},["".concat(e,"-space-item")]:{"&:empty":{display:"none"}}}}},H=P("Space",t=>[G(t),F(t)]);var J="[object Map]",K="[object Set]",M=Object.prototype,V=M.hasOwnProperty;function z(t){if(t==null)return!0;if(A(t)&&(R(t)||typeof t=="string"||typeof t.splice=="function"||B(t)||L(t)||N(t)))return!t.length;var e=O(t);if(e==J||e==K)return!t.size;if(T(t))return!w(t).length;for(var o in t)if(V.call(t,o))return!1;return!0}const W=()=>({compactSize:String,compactDirection:g.oneOf(I("horizontal","vertical")).def("horizontal"),isFirstItem:h(),isLastItem:h()}),m=_(null),et=(t,e)=>{const o=m.useInject(),n=c(()=>{if(!o||z(o))return"";const{compactDirection:a,isFirstItem:s,isLastItem:i}=o,r=a==="vertical"?"-vertical-":"-";return x({["".concat(t.value,"-compact").concat(r,"item")]:!0,["".concat(t.value,"-compact").concat(r,"first-item")]:s,["".concat(t.value,"-compact").concat(r,"last-item")]:i,["".concat(t.value,"-compact").concat(r,"item-rtl")]:e.value==="rtl"})});return{compactSize:c(()=>o==null?void 0:o.compactSize),compactDirection:c(()=>o==null?void 0:o.compactDirection),compactItemClassnames:n}},ot=y({name:"NoCompactStyle",setup(t,e){let{slots:o}=e;return m.useProvide(null),()=>{var n;return(n=o.default)===null||n===void 0?void 0:n.call(o)}}}),q=()=>({prefixCls:String,size:{type:String},direction:g.oneOf(I("horizontal","vertical")).def("horizontal"),align:g.oneOf(I("start","end","center","baseline")),block:{type:Boolean,default:void 0}}),Q=y({name:"CompactItem",props:W(),setup(t,e){let{slots:o}=e;return m.useProvide(t),()=>{var n;return(n=o.default)===null||n===void 0?void 0:n.call(o)}}});y({name:"ASpaceCompact",inheritAttrs:!1,props:q(),setup(t,e){let{attrs:o,slots:n}=e;const{prefixCls:a,direction:s}=k("space-compact",t),i=m.useInject(),[r,d]=H(a),j=c(()=>x(a.value,d.value,{["".concat(a.value,"-rtl")]:s.value==="rtl",["".concat(a.value,"-block")]:t.block,["".concat(a.value,"-vertical")]:t.direction==="vertical"}));return()=>{var u;const p=D(((u=n.default)===null||u===void 0?void 0:u.call(n))||[]);return p.length===0?null:r(b("div",C(C({},o),{},{class:[j.value,o.class]}),[p.map((f,$)=>{var v;const E=f&&f.key||"".concat(a.value,"-item-").concat($),S=!i||z(i);return b(Q,{key:E,compactSize:(v=t.size)!==null&&v!==void 0?v:"middle",compactDirection:t.direction,isFirstItem:$===0&&(S||(i==null?void 0:i.isFirstItem)),isLastItem:$===p.length-1&&(S||(i==null?void 0:i.isLastItem))},{default:()=>[f]})})]))}}});function U(t,e,o){const{focusElCls:n,focus:a,borderElCls:s}=o,i=s?"> *":"",r=["hover",a?"focus":null,"active"].filter(Boolean).map(d=>"&:".concat(d," ").concat(i)).join(",");return{["&-item:not(".concat(e,"-last-item)")]:{marginInlineEnd:-t.lineWidth},"&-item":l(l({[r]:{zIndex:2}},n?{["&".concat(n)]:{zIndex:2}}:{}),{["&[disabled] ".concat(i)]:{zIndex:0}})}}function X(t,e,o){const{borderElCls:n}=o,a=n?"> ".concat(n):"";return{["&-item:not(".concat(e,"-first-item):not(").concat(e,"-last-item) ").concat(a)]:{borderRadius:0},["&-item:not(".concat(e,"-last-item)").concat(e,"-first-item")]:{["& ".concat(a,", &").concat(t,"-sm ").concat(a,", &").concat(t,"-lg ").concat(a)]:{borderStartEndRadius:0,borderEndEndRadius:0}},["&-item:not(".concat(e,"-first-item)").concat(e,"-last-item")]:{["& ".concat(a,", &").concat(t,"-sm ").concat(a,", &").concat(t,"-lg ").concat(a)]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function nt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:o}=t,n="".concat(o,"-compact");return{[n]:l(l({},U(t,n,e)),X(o,n,e))}}export{ot as N,nt as g,et as u};
