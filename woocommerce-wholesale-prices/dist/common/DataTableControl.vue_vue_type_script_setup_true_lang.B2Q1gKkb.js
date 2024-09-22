import{b as k,a0 as Z,d as K,t as ee,r as m,S as te,o as i,e as A,w as V,c as u,a as _,U as h,u as l,f as b,R as ae,i as w,h as D,p as M,n as ne,$ as U}from"../apps/settings/index.d4AqeQbB.js";import{_ as se}from"./GroupEditFields.vue_vue_type_script_setup_true_lang.CgqLrN0P.js";import{A as $}from"./index.DLGwxs-d.js";import{E as oe}from"./EditOutlined.BpSkNHdQ.js";import{D as ie}from"./DeleteOutlined.eTHxAZAv.js";import{A as le}from"./index.Drb1SEnV.js";import{c as re}from"./cloneDeep.BFW77L6K.js";var ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};function z(c){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?Object(arguments[o]):{},p=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(p=p.concat(Object.getOwnPropertySymbols(r).filter(function(v){return Object.getOwnPropertyDescriptor(r,v).enumerable}))),p.forEach(function(v){de(c,v,r[v])})}return c}function de(c,o,r){return o in c?Object.defineProperty(c,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[o]=r,c}var H=function(o,r){var p=z({},o,r.attrs);return k(Z,z({},p,{icon:ce}),null)};H.displayName="SaveOutlined";H.inheritAttrs=!1;const ue={key:0,class:"editable-row-operations"},fe={class:"editable-cell"},pe=["loading","onClick"],ve=["onClick"],ye={key:0},me=["innerHTML"],_e={key:1},be=["innerHTML"],je=K({__name:"DataTableControl",props:{params:{type:Object,required:!0},data:{type:Object,required:!0},editFields:{type:Object,required:!1,default:()=>({})}},emits:["fieldData","fieldUpdatedData","fieldUpdatedPopupData","fieldDeletedData"],setup(c,{emit:o}){var T,x;const r=c,{params:p,data:v,editFields:L}=ee(r),f=p.value,N=m((T=f.paginated)!=null?T:!1),B=f.fields,E=m(f.classes),O=m(v),q=f.editable,F=f.can_delete,I=f.edit_action,R=f.delete_action,C=m((x=f.inline_edit)!=null?x:!0),S=m(!1),d=te([]),g=o,j=m([]),J=e=>{for(const[s,a]of Object.entries(e))j.value[s]=a},G=e=>{d[e]=re(O.value.filter(s=>e===s.key)[0]),j.value=d[e],C.value===!1?g("fieldUpdatedPopupData",d[e]):g("fieldUpdatedData",d[e])},Q=async e=>{const s=[{key:"action",value:I}],a={};a.key=e;for(const[t,n]of Object.entries(j.value)){let y=n;typeof n=="object"&&n!==null&&(y=JSON.stringify(n)),s.push({key:t,value:y}),a[t]=n}try{await U(s)==="success"&&g("fieldUpdatedData",a)}catch(t){console.error(t)}finally{S.value=!1}delete d[e]},W=async e=>{const s=O.value.filter(t=>e===t.key)[0],a=[{key:"action",value:R}];for(const[t,n]of Object.entries(s))a.push({key:t,value:n});try{await U(a)==="success"&&g("fieldDeletedData",e)}catch(t){console.error(t)}finally{S.value=!1}},X=e=>{delete d[e]},Y=e=>{const s=[];for(const[a,t]of Object.entries(L.value))s[t.id]=t;return typeof s[e]<"u"?s[e]:{}},P=e=>Array.isArray(e)?e.join(", "):e;return(e,s)=>(i(),A(l(le),{class:ne(E.value),"data-source":O.value,columns:l(B),pagination:N.value,bordered:""},{bodyCell:V(({column:a,text:t,record:n})=>[a.key==="operation"?(i(),u("div",ue,[_("div",fe,[d[n.key]&&C.value?(i(),u(h,{key:0},[_("a",{loading:S.value,onClick:y=>Q(n.key)},[k(l(H))],8,pe),b("   "),k(l($),{title:"Sure to cancel?",onConfirm:y=>X(n.key)},{default:V(()=>[_("a",null,[k(l(ae))])]),_:2},1032,["onConfirm"])],64)):(i(),u(h,{key:1},[l(q)?(i(),u("a",{key:0,onClick:y=>G(n.key)},[k(l(oe))],8,ve)):w("",!0),b("   "),l(F)?(i(),u(h,{key:1},[O.value.length?(i(),A(l($),{key:0,title:"Sure to delete?",onConfirm:y=>W(n.key)},{default:V(()=>[_("a",null,[k(l(ie))])]),_:2},1032,["onConfirm"])):w("",!0)],64)):w("",!0)],64))])])):(i(),u(h,{key:1},[C.value?(i(),u("div",ye,[d[n.key]?(i(),A(se,{key:0,"editable-data":d[n.key],"field-value":d[n.key][a.dataIndex],"field-data":Y(a.field),onFieldUpdatedData:J},null,8,["editable-data","field-value","field-data"])):(i(),u(h,{key:1},[b(D(a.prefix)+" ",1),_("span",{innerHTML:l(M)(P(t))},null,8,me),b(" "+D(a.suffix),1)],64))])):(i(),u("div",_e,[b(D(a.prefix)+" ",1),_("span",{innerHTML:l(M)(P(t))},null,8,be),b(" "+D(a.suffix),1)]))],64))]),_:1},8,["class","data-source","columns","pagination"]))}});export{je as _};
