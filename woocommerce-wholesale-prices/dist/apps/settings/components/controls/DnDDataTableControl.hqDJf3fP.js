import{d as P,t as G,s as H,S as k,r as m,o as r,c as s,a as c,U as u,V as b,h as v,u as l,b as y,w as h,n as J,i as p,f as g,e as Q,$ as w}from"../../index.BHjzb07a.js";import{u as W}from"../../../../common/settings-store.B00qhdf9.js";import{d as X}from"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_82767a7d_lang.D4f9z5SI.js";import{E as Y}from"../../../../common/EditOutlined.BVeiRTlC.js";import{D as Z}from"../../../../common/DeleteOutlined.C142xyiS.js";import{c as ee}from"../../../../common/cloneDeep.BHH-KjlQ.js";import{A as te}from"../../../../common/index.CTKYy6Tc.js";import{_ as ae}from"../../../../common/_plugin-vue_export-helper.DlAUqK2U.js";import"../../../../common/motion.j5gF9e22.js";import"../../../../common/_assignValue.Dtj8Sxl1.js";import"../../../../common/_getPrototype.D6WJOUGI.js";import"../../../../common/index.uYSBbPM5.js";import"../../../../common/index.IYHH620j.js";import"../../../../common/index.DeueHjdC.js";import"../../../../common/useState.KQCwJvpk.js";import"../../../../common/warning.CrM1WiW4.js";import"../../../../common/compact-item.CvXLTzkk.js";import"../../../../common/createContext.C6TAVKA6.js";import"../../../../common/useMergedState.DSNGqenX.js";import"../../../../common/KeyCode.B_gOgbN6.js";import"../../../../common/ActionButton.BeZoRPay.js";const oe={class:"wwp-full-width-table"},re={class:"thead-dark"},se={key:0,class:"editable-row-operations"},ne={key:0,class:"editable-cell"},ie=["onClick"],le=P({__name:"DnDDataTableControl",props:{params:{type:Object,required:!0},data:{type:Object,required:!0},editFields:{type:Object,required:!1,default:()=>({})},editedFields:{type:Number,required:!1,default:0}},emits:["fieldUpdatedData","fieldDeletedData","updateDataSource"],setup(C,{emit:S}){const V=C,{params:A,data:E,editedFields:O}=G(V),T=W(),{inlineMappingEdit:q}=H(T),d=A.value,B=d.fields,i=k({data:window.lodash.sortBy(E.value,t=>typeof t.field_order<"u"&&t.field_order!==null?t.field_order:0)}),N=d.editable,F=d.can_delete,R=d.delete_action,U=d.sort_action,j=m(d.show_in_table),x=m(!1),_=k([]),$=O,f=S,D=m([]),I=t=>{_[t]=ee(i.data.filter(n=>t===n.key)[0]),D.value=_[t],q.value=!1,f("fieldUpdatedData",D.value)},L=async t=>{const n=i.data.filter(a=>t===a.key)[0],e=[{key:"action",value:R}];for(const[a,o]of Object.entries(n))e.push({key:a,value:o});try{await w(e)==="success"&&(f("fieldDeletedData",t),i.data=i.data.filter(o=>o.key!==t))}catch(a){console.error(a)}finally{x.value=!1}},z=t=>Array.isArray(t)?t.join(", "):t,K=async t=>{const n=[{key:"action",value:U}],e="list",a=i.data;n.push({key:e,value:a});try{const o=await w(n,!1,!0);typeof o<"u"&&o!==null&&f("updateDataSource",o)}catch(o){console.error(o)}finally{}};return(t,n)=>(r(),s("table",oe,[c("thead",re,[c("tr",null,[(r(!0),s(u,null,b(l(B),(e,a)=>(r(),s("th",{key:a,scope:"col"},v(e.title),1))),128))])]),y(l(X),{modelValue:i.data,"onUpdate:modelValue":n[0]||(n[0]=e=>i.data=e),tag:"tbody","item-key":"name",onEnd:K},{item:h(({element:e})=>[c("tr",{class:J({"not-draggable":!(e!=null&&e.draggable)})},[(r(!0),s(u,null,b(j.value,(a,o)=>(r(),s("td",{key:o,scope:"row"},[a==="operation"?(r(),s("div",se,[l($)===null?(r(),s("div",ne,[l(N)?(r(),s("a",{key:0,onClick:M=>I(e.key)},[y(l(Y))],8,ie)):p("",!0),g("   "),l(F)&&(e==null?void 0:e.deletetable)!=="no"?(r(),s(u,{key:1},[i.data.length?(r(),Q(l(te),{key:0,title:"Sure to delete?",onConfirm:M=>L(e.key)},{default:h(()=>[c("a",null,[y(l(Z))])]),_:2},1032,["onConfirm"])):p("",!0)],64)):p("",!0)])):p("",!0)])):(r(),s(u,{key:1},[g(v(z(e[a])),1)],64))]))),128))],2)]),_:1},8,["modelValue"])]))}}),Te=ae(le,[["__scopeId","data-v-82767a7d"]]);export{Te as default};
