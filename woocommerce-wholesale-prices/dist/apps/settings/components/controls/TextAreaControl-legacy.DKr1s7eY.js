System.register(["../../index-legacy.DPQ6n18a.js","../../../../common/settings-store-legacy.CdiTRmyl.js","../../../../common/GroupControl.vue_vue_type_style_index_0_scoped_acb2f5d3_lang-legacy.Ba5ylEZA.js","../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_22edd6df_lang-legacy.D8yDTwPT.js","../../../../common/GroupConditionalControl.vue_vue_type_style_index_0_scoped_4422deae_lang-legacy.CdgV9d7Q.js","../../../../common/LabelControl.vue_vue_type_script_setup_true_lang-legacy.D-8mogMC.js","../../../../common/OptionsControl.vue_vue_type_style_index_0_scoped_31d37917_lang-legacy.YMXiswNf.js","../../../../common/index-legacy.CUNdH6AN.js","../../../../common/index-legacy.DMk1JnJp.js","../../../../common/motion-legacy.DJuHWLJs.js","../../../../common/FormItemContext-legacy.DxVkbCII.js","../../../../common/createContext-legacy.Br6p6aG5.js","../../../../common/statusUtils-legacy.DZU55vim.js","../../../../common/SearchOutlined-legacy.C67dfslp.js","../../../../common/compact-item-legacy.CJ90dT-1.js","../../../../common/index-legacy.DtD_rFHa.js","../../../../common/index-legacy.D14KrnAq.js","../../../../common/index-legacy.DPUpTeOZ.js","../../../../common/useState-legacy.2KNpATnI.js","../../../../common/warning-legacy.BV4CRm2j.js","../../../../common/isPlainObject-legacy.7GPb9rbP.js","../../../../common/_getPrototype-legacy.D0LW3mPW.js","../../../../common/index-legacy.uHqJdCnV.js"],(function(e,l){"use strict";var n,o,t,a,i,c,s,u,d,m,r,p,g,_;return{setters:[e=>{n=e.d,o=e.t,t=e.r,a=e.aS,i=e.o,c=e.c,s=e.a,u=e.b,d=e.u,m=e.p,r=e.i,p=e.aT},null,null,null,null,e=>{g=e._},null,e=>{_=e.A},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"wwp-row-handle"},v={class:"wwp-left-content"},y={class:"wwp-right-content"},j=["innerHTML"];e("default",n({__name:"TextAreaControl",props:{params:{type:Object,required:!0}},emits:["input","fieldData"],setup(e,{emit:n}){var w,x;const f=e,{params:b}=o(f),h=b.value,C=t((null==h?void 0:h.default)||"");t(null!==(w=h.editor)&&void 0!==w&&w).value&&a(h.id,{tinymce:{plugins:"charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview",toolbar1:"formatselect bold italic | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more | spellchecker",wp_theme:!0,setup:e=>{e.on("init",(()=>{e.setContent(p(C.value))})),e.on("change",(()=>{S(e.getContent())}))}},mediaButtons:!0,quicktags:!0});const k=n,D=t(null!==(x=h.disabled)&&void 0!==x&&x),T=t([]);""!==C.value&&(T.value[h.id]=C.value,k("fieldData",T.value));const O=()=>{T.value[h.id]=C,k("fieldData",T.value)},S=e=>{T.value[h.id]=e,k("fieldData",T.value)};return(e,n)=>{var o,t;return i(),c("div",l,[s("div",v,[u(d(g),{params:d(h)},null,8,["params"])]),s("div",y,[u(d(_),{id:d(h).id,value:C.value,"onUpdate:value":n[0]||(n[0]=e=>C.value=e),name:d(h).id,placeholder:d(h).placeholder,rows:4,disabled:D.value,onInput:O},null,8,["id","value","name","placeholder","disabled"]),"undefined"!==d(h).description?(i(),c("p",{key:0,innerHTML:d(m)(null!==(o=null===(t=d(h))||void 0===t?void 0:t.description)&&void 0!==o?o:"")},null,8,j)):r("",!0)])])}}}))}}}));