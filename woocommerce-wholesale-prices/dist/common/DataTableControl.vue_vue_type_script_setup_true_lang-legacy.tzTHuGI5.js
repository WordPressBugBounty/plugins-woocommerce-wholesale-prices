System.register(["../apps/settings/index-legacy.cNla2VFO.js","./GroupEditFields.vue_vue_type_script_setup_true_lang-legacy.Dp9ohHWJ.js","./index-legacy.Dye8RCDg.js","./EditOutlined-legacy.DWUKF5rw.js","./DeleteOutlined-legacy.CKQ0TpHl.js","./index-legacy.DbCZHo0_.js","./cloneDeep-legacy.DEo9mMAj.js"],(function(e,t){"use strict";var a,l,n,i,r,o,c,d,s,u,y,f,v,p,k,b,g,j,m,O,h,_,D,x,C,w;return{setters:[e=>{a=e.b,l=e.a0,n=e.d,i=e.t,r=e.r,o=e.S,c=e.o,d=e.e,s=e.w,u=e.c,y=e.a,f=e.U,v=e.u,p=e.f,k=e.R,b=e.i,g=e.h,j=e.p,m=e.n,O=e.$},e=>{h=e._},e=>{_=e.A},e=>{D=e.E},e=>{x=e.D},e=>{C=e.A},e=>{w=e.c}],execute:function(){var t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"}}]},name:"save",theme:"outlined"};function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},l=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),l.forEach((function(t){H(e,t,a[t])}))}return e}function H(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var M=function(e,n){var i=S({},e,n.attrs);return a(l,S({},i,{icon:t}),null)};M.displayName="SaveOutlined",M.inheritAttrs=!1;const P={key:0,class:"editable-row-operations"},U={class:"editable-cell"},V=["loading","onClick"],z=["onClick"],A={key:0},L=["innerHTML"],T={key:1},E=["innerHTML"];e("_",n({__name:"DataTableControl",props:{params:{type:Object,required:!0},data:{type:Object,required:!0},editFields:{type:Object,required:!1,default:()=>({})}},emits:["fieldData","fieldUpdatedData","fieldUpdatedPopupData","fieldDeletedData"],setup(e,{emit:t}){var l,n;const S=e,{params:H,data:F,editFields:q}=i(S),N=H.value,B=r(null!==(l=N.paginated)&&void 0!==l&&l),G=N.fields,I=r(N.classes),J=r(F),R=N.editable,$=N.can_delete,K=N.edit_action,Q=N.delete_action,W=r(null===(n=N.inline_edit)||void 0===n||n),X=r(!1),Y=o([]),Z=t,ee=r([]),te=e=>{for(const[t,a]of Object.entries(e))ee.value[t]=a},ae=e=>{const t=[];for(const[a,l]of Object.entries(q.value))t[l.id]=l;return void 0!==t[e]?t[e]:{}},le=e=>Array.isArray(e)?e.join(", "):e;return(e,t)=>(c(),d(v(C),{class:m(I.value),"data-source":J.value,columns:v(G),pagination:B.value,bordered:""},{bodyCell:s((({column:e,text:t,record:l})=>["operation"===e.key?(c(),u("div",P,[y("div",U,[Y[l.key]&&W.value?(c(),u(f,{key:0},[y("a",{loading:X.value,onClick:e=>(async e=>{const t=[{key:"action",value:K}],a={};a.key=e;for(const[n,i]of Object.entries(ee.value)){let e=i;"object"==typeof i&&null!==i&&(e=JSON.stringify(i)),t.push({key:n,value:e}),a[n]=i}try{"success"===await O(t)&&Z("fieldUpdatedData",a)}catch(l){console.error(l)}finally{X.value=!1}delete Y[e]})(l.key)},[a(v(M))],8,V),p("   "),a(v(_),{title:"Sure to cancel?",onConfirm:e=>{return t=l.key,void delete Y[t];var t}},{default:s((()=>[y("a",null,[a(v(k))])])),_:2},1032,["onConfirm"])],64)):(c(),u(f,{key:1},[v(R)?(c(),u("a",{key:0,onClick:e=>{return t=l.key,Y[t]=w(J.value.filter((e=>t===e.key))[0]),ee.value=Y[t],void(!1===W.value?Z("fieldUpdatedPopupData",Y[t]):Z("fieldUpdatedData",Y[t]));var t}},[a(v(D))],8,z)):b("",!0),p("   "),v($)?(c(),u(f,{key:1},[J.value.length?(c(),d(v(_),{key:0,title:"Sure to delete?",onConfirm:e=>(async e=>{const t=J.value.filter((t=>e===t.key))[0],a=[{key:"action",value:Q}];for(const[n,i]of Object.entries(t))a.push({key:n,value:i});try{"success"===await O(a)&&Z("fieldDeletedData",e)}catch(l){console.error(l)}finally{X.value=!1}})(l.key)},{default:s((()=>[y("a",null,[a(v(x))])])),_:2},1032,["onConfirm"])):b("",!0)],64)):b("",!0)],64))])])):(c(),u(f,{key:1},[W.value?(c(),u("div",A,[Y[l.key]?(c(),d(h,{key:0,"editable-data":Y[l.key],"field-value":Y[l.key][e.dataIndex],"field-data":ae(e.field),onFieldUpdatedData:te},null,8,["editable-data","field-value","field-data"])):(c(),u(f,{key:1},[p(g(e.prefix)+" ",1),y("span",{innerHTML:v(j)(le(t))},null,8,L),p(" "+g(e.suffix),1)],64))])):(c(),u("div",T,[p(g(e.prefix)+" ",1),y("span",{innerHTML:v(j)(le(t))},null,8,E),p(" "+g(e.suffix),1)]))],64))])),_:1},8,["class","data-source","columns","pagination"]))}}))}}}));
