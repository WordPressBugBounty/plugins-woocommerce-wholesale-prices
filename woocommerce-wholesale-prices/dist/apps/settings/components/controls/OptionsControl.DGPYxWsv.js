import{d as B,t as H,r as d,g as w,o as i,c as p,a as k,b as v,u as t,U as L,V as N,i as h,n as E,h as M,p as $}from"../../index.d4AqeQbB.js";import"../../../../common/settings-store.Bau8zkG9.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_22edd6df_lang.DWIfdCs7.js";/* empty css                                                                                                 */import{_ as j}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.iWWcVs0A.js";/* empty css                                                                                        */import{I as y}from"../../../../common/index.DjZuVG8N.js";import{D as q}from"../../../../common/DeleteOutlined.eTHxAZAv.js";import{_ as z}from"../../../../common/_plugin-vue_export-helper.DlAUqK2U.js";import"../../../../common/index.Bzxotkow.js";import"../../../../common/motion.BEA1PKGq.js";import"../../../../common/FormItemContext.txzqapcQ.js";import"../../../../common/createContext.DMZNmA7p.js";import"../../../../common/statusUtils.BiJ08sw9.js";import"../../../../common/SearchOutlined.C09ldV6m.js";import"../../../../common/compact-item.BtLlGg8i.js";import"../../../../common/index.BEk85fqw.js";import"../../../../common/index.CX2dA5af.js";import"../../../../common/index.sXGotksi.js";import"../../../../common/useState.BbSECcve.js";import"../../../../common/warning.CrM1WiW4.js";import"../../../../common/isPlainObject.CB9U5Xpo.js";import"../../../../common/_getPrototype.K_j7Kql_.js";import"../../../../common/index.DiOR2saE.js";const A={class:"wwp-row-handle"},F={class:"wwp-left-content"},R={class:"wwp-right-content"},S=["onClick"],U=["innerHTML"],G=B({__name:"OptionsControl",props:{params:{type:Object,required:!0}},emits:["input","fieldData"],setup(g,{emit:x}){const O=g,{params:b}=H(O),a=b.value,f=x,s=d([]),e=d([]),_=d(a.default),c=d(1);_.value.length>1?(c.value=_.value.length,_.value.forEach((l,n)=>{e.value=e.value.concat({key:n,value:l.value,text:l.text})})):e.value=e.value.concat({key:1,value:"",text:""});const C=w("optionValuePlaceholder",wp.i18n.__("Option Value","woocommerce-wholesale-prices")),V=w("optionTextPlaceholder",wp.i18n.__("Option Text","woocommerce-wholesale-prices")),I=(l,n)=>{const r=e.value.map(o=>o.key===l?{...o,value:n}:o);e.value=r,s.value[a.id]=e.value,f("fieldData",s.value)},D=(l,n)=>{const r=e.value.map(o=>o.key===l?{...o,text:n}:o);e.value=r,s.value[a.id]=e.value,f("fieldData",s.value)},T=()=>{c.value++,e.value=e.value.concat({key:c.value,value:"",text:""})},P=l=>{c.value--;const n=e.value.filter(r=>r.key!==l);e.value=n,s.value[a.id]=e.value,f("fieldData",s.value)};return(l,n)=>{var r,o;return i(),p("div",A,[k("div",F,[v(t(j),{params:t(a)},null,8,["params"])]),k("div",R,[(i(!0),p(L,null,N(e.value,u=>(i(),p("div",{key:u.key,class:"wwp-options-control"},[v(t(y),{"default-value":u.value,placeholder:t(C),onInput:m=>I(u.key,m.target.value)},null,8,["default-value","placeholder","onInput"]),v(t(y),{"default-value":u.text,placeholder:t(V),onInput:m=>D(u.key,m.target.value)},null,8,["default-value","placeholder","onInput"]),c.value>1?(i(),p("a",{key:0,onClick:m=>P(u.key)},[v(t(q))],8,S)):h("",!0)]))),128)),t(a).btn_label!=="undefined"?(i(),p("button",{key:0,class:E(["wwp-options-btn",t(a).btn_classes]),type:"button",onClick:T},M(t(a).btn_label),3)):h("",!0),t(a).description!=="undefined"?(i(),p("p",{key:1,innerHTML:t($)((o=(r=t(a))==null?void 0:r.description)!=null?o:"")},null,8,U)):h("",!0)])])}}}),we=z(G,[["__scopeId","data-v-31d37917"]]);export{we as default};