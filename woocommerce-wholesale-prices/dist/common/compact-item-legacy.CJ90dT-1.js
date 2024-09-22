System.register(["../apps/settings/index-legacy.DPQ6n18a.js","./createContext-legacy.Br6p6aG5.js","./motion-legacy.DJuHWLJs.js"],(function(t,e){"use strict";var i,n,l,r,o,a,c,s,u,m,d,p,v,f,$,g,I,b,y,x,S;return{setters:[t=>{i=t.G,n=t.J,l=t.A,r=t.d,o=t.L,a=t.aB,c=t.b,s=t.D,u=t.P,m=t.ak,d=t.ac,p=t._},t=>{v=t.c},t=>{f=t.h,$=t.j,g=t.k,I=t.l,b=t.m,y=t.n,x=t.o,S=t.p}],execute:function(){t("g",(function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0};const{componentCls:i}=t,n=`${i}-compact`;return{[n]:p(p({},E(t,n,e)),R(i,n,e))}}));const e=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},h=t=>{const{componentCls:e}=t;return{[e]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${e}-space-item`]:{"&:empty":{display:"none"}}}}},z=i("Space",(t=>[h(t),e(t)]));var C=Object.prototype.hasOwnProperty;function j(t){if(null==t)return!0;if(f(t)&&($(t)||"string"==typeof t||"function"==typeof t.splice||g(t)||I(t)||b(t)))return!t.length;var e=y(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(x(t))return!S(t).length;for(var i in t)if(C.call(t,i))return!1;return!0}const D=v(null),k=(t("u",((t,e)=>{const i=D.useInject(),r=n((()=>{if(!i||j(i))return"";const{compactDirection:n,isFirstItem:r,isLastItem:o}=i,a="vertical"===n?"-vertical-":"-";return l({[`${t.value}-compact${a}item`]:!0,[`${t.value}-compact${a}first-item`]:r,[`${t.value}-compact${a}last-item`]:o,[`${t.value}-compact${a}item-rtl`]:"rtl"===e.value})}));return{compactSize:n((()=>null==i?void 0:i.compactSize)),compactDirection:n((()=>null==i?void 0:i.compactDirection)),compactItemClassnames:r}})),t("N",r({name:"NoCompactStyle",setup(t,e){let{slots:i}=e;return D.useProvide(null),()=>{var t;return null===(t=i.default)||void 0===t?void 0:t.call(i)}}})),r({name:"CompactItem",props:{compactSize:String,compactDirection:u.oneOf(m("horizontal","vertical")).def("horizontal"),isFirstItem:d(),isLastItem:d()},setup(t,e){let{slots:i}=e;return D.useProvide(t),()=>{var t;return null===(t=i.default)||void 0===t?void 0:t.call(i)}}}));function E(t,e,i){const{focusElCls:n,focus:l,borderElCls:r}=i,o=r?"> *":"",a=["hover",l?"focus":null,"active"].filter(Boolean).map((t=>`&:${t} ${o}`)).join(",");return{[`&-item:not(${e}-last-item)`]:{marginInlineEnd:-t.lineWidth},"&-item":p(p({[a]:{zIndex:2}},n?{[`&${n}`]:{zIndex:2}}:{}),{[`&[disabled] ${o}`]:{zIndex:0}})}}function R(t,e,i){const{borderElCls:n}=i,l=n?`> ${n}`:"";return{[`&-item:not(${e}-first-item):not(${e}-last-item) ${l}`]:{borderRadius:0},[`&-item:not(${e}-last-item)${e}-first-item`]:{[`& ${l}, &${t}-sm ${l}, &${t}-lg ${l}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${e}-first-item)${e}-last-item`]:{[`& ${l}, &${t}-sm ${l}, &${t}-lg ${l}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}r({name:"ASpaceCompact",inheritAttrs:!1,props:{prefixCls:String,size:{type:String},direction:u.oneOf(m("horizontal","vertical")).def("horizontal"),align:u.oneOf(m("start","end","center","baseline")),block:{type:Boolean,default:void 0}},setup(t,e){let{attrs:i,slots:r}=e;const{prefixCls:u,direction:m}=o("space-compact",t),d=D.useInject(),[p,v]=z(u),f=n((()=>l(u.value,v.value,{[`${u.value}-rtl`]:"rtl"===m.value,[`${u.value}-block`]:t.block,[`${u.value}-vertical`]:"vertical"===t.direction})));return()=>{var e;const n=a((null===(e=r.default)||void 0===e?void 0:e.call(r))||[]);return 0===n.length?null:p(c("div",s(s({},i),{},{class:[f.value,i.class]}),[n.map(((e,i)=>{var l;const r=e&&e.key||`${u.value}-item-${i}`,o=!d||j(d);return c(k,{key:r,compactSize:null!==(l=t.size)&&void 0!==l?l:"middle",compactDirection:t.direction,isFirstItem:0===i&&(o||(null==d?void 0:d.isFirstItem)),isLastItem:i===n.length-1&&(o||(null==d?void 0:d.isLastItem))},{default:()=>[e]})}))]))}}})}}}));
