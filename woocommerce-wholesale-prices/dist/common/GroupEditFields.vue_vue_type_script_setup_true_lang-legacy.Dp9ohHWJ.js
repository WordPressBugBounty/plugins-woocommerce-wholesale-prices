System.register(["../apps/settings/index-legacy.cNla2VFO.js","./index-legacy.DPjHaXXA.js","./index-legacy.CPrLAoIs.js","./index-legacy.B3_xkgpK.js","./index-legacy.Bmz-8RxH.js"],(function(e,a){"use strict";var l,u,t,n,d,v,i,c,r,o,p,s,h,y,k,f,U,g,m,x,b;return{setters:[e=>{l=e.d,u=e.t,t=e.r,n=e.aa,d=e.S,v=e.o,i=e.c,c=e.u,r=e.e,o=e.i,p=e.w,s=e.U,h=e.V,y=e.a,k=e.p},e=>{f=e.I,U=e.A},e=>{g=e.A},e=>{m=e.A},e=>{x=e.S,b=e.A}],execute:function(){const a=["innerHTML"],D=["innerHTML"];e("_",l({__name:"GroupEditFields",props:{editableData:{type:Object,required:!0},fieldValue:{type:[String,Number,Array,Object,Boolean],required:!0},fieldData:{type:Object,required:!0}},emits:["fieldUpdatedData"],setup(e,{emit:l}){var _;const w=e,{editableData:j,fieldValue:A,fieldData:C}=u(w),I=l,H=C.value,L=t(null!==(_=H.type)&&void 0!==_?_:"").value,M=n(L,A.value),S=t(M),T=t("select"===L?H.options:[]),q=t([]),O=d({check:"yes"===S.value}),V=t("switch"===L?H.options.yes:""),B=t("switch"===L?H.options.no:"");"select"===L&&H.multiple&&(S.value=null==j?void 0:j.value[H.id]);const E=()=>{q.value[H.id]=S.value,I("fieldUpdatedData",q.value)},F=()=>{q.value[H.id]=S.value,I("fieldUpdatedData",q.value)},G=()=>{q.value[H.id]=S.value+"%",I("fieldUpdatedData",q.value)},N=e=>{S.value=e;let a=T.value[e];Array.isArray(e)&&(a=e.map((e=>T.value[e]))),q.value[H.id]=S.value,void 0!==H.label_id&&null!==H.label_id&&(q.value[H.label_id]=a),I("fieldUpdatedData",q.value)};return(e,l)=>(v(),i(s,null,["text"===c(L)||"email"===c(L)?(v(),r(c(f),{key:0,value:S.value,"onUpdate:value":l[0]||(l[0]=e=>S.value=e),onInput:E},null,8,["value"])):o("",!0),"checkbox"===c(L)?(v(),r(c(f),{key:1,value:S.value,"onUpdate:value":l[1]||(l[1]=e=>S.value=e),onInput:l[2]||(l[2]=e=>{return a=e,q.value[H.id]=a.target.value,void I("fieldUpdatedData",q.value);var a})},null,8,["value"])):o("",!0),"number"===c(L)?(v(),r(c(m),{key:2,value:S.value,"onUpdate:value":l[3]||(l[3]=e=>S.value=e),onInput:F,onChange:F},null,8,["value"])):o("",!0),"percent"===c(L)?(v(),r(c(m),{key:3,value:S.value,"onUpdate:value":l[4]||(l[4]=e=>S.value=e),onInput:G,onChange:G},null,8,["value"])):o("",!0),"textarea"===c(L)?(v(),r(c(U),{key:4,value:S.value,"onUpdate:value":l[5]||(l[5]=e=>S.value=e),rows:4},null,8,["value"])):o("",!0),"select"===c(L)&&c(H).multiple?(v(),r(c(b),{key:5,ref:"select",value:S.value,"onUpdate:value":l[6]||(l[6]=e=>S.value=e),mode:"multiple",style:{"max-width":"320px",width:"100%"},onChange:N},{default:p((()=>[(v(!0),i(s,null,h(T.value,((e,l)=>(v(),r(c(x),{key:l,value:l},{default:p((()=>[y("span",{innerHTML:c(k)(e)},null,8,a)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])):"select"===c(L)?(v(),r(c(b),{key:6,ref:"select",value:S.value,"onUpdate:value":l[7]||(l[7]=e=>S.value=e),style:{"max-width":"320px",width:"100%"},onChange:N},{default:p((()=>[(v(!0),i(s,null,h(T.value,((e,a)=>(v(),r(c(x),{key:a,value:a},{default:p((()=>[y("span",{innerHTML:c(k)(e)},null,8,D)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])):o("",!0),"switch"===c(L)?(v(),r(c(g),{key:7,checked:O.check,"onUpdate:checked":l[8]||(l[8]=e=>O.check=e),"checked-children":V.value,"un-checked-children":B.value,onChange:l[9]||(l[9]=e=>{return a=e,S.value=a?"yes":"no",q.value[H.id]=S.value,O.check=a,void I("fieldUpdatedData",q.value);var a})},null,8,["checked","checked-children","un-checked-children"])):o("",!0)],64))}}))}}}));