System.register(["../../index-legacy.cNla2VFO.js","../../../../common/settings-store-legacy.Cy0Fixa8.js","../../../../common/GroupControl.vue_vue_type_style_index_0_scoped_ac0e52be_lang-legacy.CuFwxlZW.js","../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_82767a7d_lang-legacy.BgR15xrw.js","../../../../common/GroupConditionalControl.vue_vue_type_style_index_0_scoped_455e28a6_lang-legacy.CBwf6drq.js","../../../../common/LabelControl.vue_vue_type_script_setup_true_lang-legacy.D7sbUSKc.js","../../../../common/OptionsControl.vue_vue_type_style_index_0_scoped_a595eea6_lang-legacy.CWVsdHvE.js","../../../../common/index-legacy.DPjHaXXA.js","../../../../common/DeleteOutlined-legacy.CKQ0TpHl.js","../../../../common/_plugin-vue_export-helper-legacy.DgAO6S8O.js","../../../../common/index-legacy.BJRS7PvI.js","../../../../common/motion-legacy.BFTotnUX.js","../../../../common/FormItemContext-legacy.Da1_eJX-.js","../../../../common/createContext-legacy.DXlrMcMh.js","../../../../common/statusUtils-legacy.eWKDB_Gd.js","../../../../common/SearchOutlined-legacy.BkBbN6_q.js","../../../../common/compact-item-legacy.BY02yOlw.js","../../../../common/index-legacy.B2lGrscN.js","../../../../common/index-legacy.DzhrTh1e.js","../../../../common/index-legacy.5wD59gNN.js","../../../../common/useState-legacy.DO9dAzVn.js","../../../../common/warning-legacy.BV4CRm2j.js","../../../../common/isPlainObject-legacy.0nRAdiJO.js","../../../../common/_getPrototype-legacy.BIJBupv2.js","../../../../common/index-legacy.CzMmRTSw.js"],(function(e,l){"use strict";var n,a,o,t,u,c,s,i,m,v,p,r,d,_,y,g,j,x,w;return{setters:[e=>{n=e.d,a=e.t,o=e.r,t=e.g,u=e.o,c=e.c,s=e.a,i=e.b,m=e.u,v=e.U,p=e.V,r=e.i,d=e.n,_=e.h,y=e.p},null,null,null,null,e=>{g=e._},null,e=>{j=e.I},e=>{x=e.D},e=>{w=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"wwp-row-handle"},f={class:"wwp-left-content"},k={class:"wwp-right-content"},h=["onClick"],b=["innerHTML"];e("default",w(n({__name:"OptionsControl",props:{params:{type:Object,required:!0}},emits:["input","fieldData"],setup(e,{emit:n}){const w=e,{params:C}=a(w),D=C.value,O=n,I=o([]),T=o([]),L=o(D.default),P=o(1);L.value.length>1?(P.value=L.value.length,L.value.forEach(((e,l)=>{T.value=T.value.concat({key:l,value:e.value,text:e.text})}))):T.value=T.value.concat({key:1,value:"",text:""});const S=t("optionValuePlaceholder",wp.i18n.__("Option Value","woocommerce-wholesale-prices")),V=t("optionTextPlaceholder",wp.i18n.__("Option Text","woocommerce-wholesale-prices")),M=()=>{P.value++,T.value=T.value.concat({key:P.value,value:"",text:""})};return(e,n)=>{var a,o;return u(),c("div",l,[s("div",f,[i(m(g),{params:m(D)},null,8,["params"])]),s("div",k,[(u(!0),c(v,null,p(T.value,(e=>(u(),c("div",{key:e.key,class:"wwp-options-control"},[i(m(j),{"default-value":e.value,placeholder:m(S),onInput:l=>((e,l)=>{const n=T.value.map((n=>n.key===e?{...n,value:l}:n));T.value=n,I.value[D.id]=T.value,O("fieldData",I.value)})(e.key,l.target.value)},null,8,["default-value","placeholder","onInput"]),i(m(j),{"default-value":e.text,placeholder:m(V),onInput:l=>((e,l)=>{const n=T.value.map((n=>n.key===e?{...n,text:l}:n));T.value=n,I.value[D.id]=T.value,O("fieldData",I.value)})(e.key,l.target.value)},null,8,["default-value","placeholder","onInput"]),P.value>1?(u(),c("a",{key:0,onClick:l=>(e=>{P.value--;const l=T.value.filter((l=>l.key!==e));T.value=l,I.value[D.id]=T.value,O("fieldData",I.value)})(e.key)},[i(m(x))],8,h)):r("",!0)])))),128)),"undefined"!==m(D).btn_label?(u(),c("button",{key:0,class:d(["wwp-options-btn",m(D).btn_classes]),type:"button",onClick:M},_(m(D).btn_label),3)):r("",!0),"undefined"!==m(D).description?(u(),c("p",{key:1,innerHTML:m(y)(null!==(a=null===(o=m(D))||void 0===o?void 0:o.description)&&void 0!==a?a:"")},null,8,b)):r("",!0)])])}}}),[["__scopeId","data-v-a595eea6"]]))}}}));