System.register(["../../index-legacy.DPQ6n18a.js","../../../../common/settings-store-legacy.CdiTRmyl.js","../../../../common/GroupControl.vue_vue_type_style_index_0_scoped_acb2f5d3_lang-legacy.Ba5ylEZA.js","../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_22edd6df_lang-legacy.D8yDTwPT.js","../../../../common/GroupConditionalControl.vue_vue_type_style_index_0_scoped_4422deae_lang-legacy.CdgV9d7Q.js","../../../../common/LabelControl.vue_vue_type_script_setup_true_lang-legacy.D-8mogMC.js","../../../../common/OptionsControl.vue_vue_type_style_index_0_scoped_31d37917_lang-legacy.YMXiswNf.js","../../../../common/index-legacy.D14KrnAq.js","../../../../common/index-legacy.DVS7avyj.js","../../../../common/index-legacy.DMk1JnJp.js","../../../../common/motion-legacy.DJuHWLJs.js","../../../../common/index-legacy.DPUpTeOZ.js","../../../../common/useState-legacy.2KNpATnI.js","../../../../common/warning-legacy.BV4CRm2j.js","../../../../common/compact-item-legacy.CJ90dT-1.js","../../../../common/createContext-legacy.Br6p6aG5.js","../../../../common/useMergedState-legacy.BhAX_xCK.js","../../../../common/KeyCode-legacy.CYgXvjDm.js","../../../../common/ActionButton-legacy.DZZ_7eLr.js"],(function(e,n){"use strict";var l,o,t,a,c,s,u,i,r,m,_,d,y,p,g,v,j,b,f,w;return{setters:[e=>{l=e.d,o=e.t,t=e.r,a=e.g,c=e.o,s=e.c,u=e.a,i=e.b,r=e.u,m=e.e,_=e.w,d=e.f,y=e.h,p=e.p,g=e.i,v=e.n,j=e.j},null,null,null,null,e=>{b=e._},null,e=>{f=e.B},e=>{w=e.A},null,null,null,null,null,null,null,null,null,null],execute:function(){const n={key:0,class:"wwp-row-handle"},x={class:"wwp-left-content"},k={class:"wwp-right-content"},C=["innerHTML"],h={key:1,class:"wwp-button-control"},T=["id","href","target"],L=["id","type"];e("default",l({__name:"ButtonControl",props:{params:{type:Object,required:!0}},setup(e){const l=e,{params:M}=o(l),S=M.value,A=t(!!S.link),B=t(S.external?"_blank":"_self"),D=t(!0),O=t(!1);"submit"!==S.action&&"button"!==S.action||(D.value=!1),A.value&&(D.value=!1);const G=a("confirmText",wp.i18n.__("Are you sure want to clear the cache?","woocommerce-wholesale-prices")),H=e=>{O.value=!0;try{j({action:e}),setTimeout((()=>{O.value=!1}),1e3)}catch(n){console.error(n)}};return(e,l)=>{var o,t;return D.value?(c(),s("div",n,[u("div",x,[i(r(b),{params:r(S)},null,8,["params"])]),u("div",k,[r(S).confirmation?(c(),m(r(w),{key:0,title:r(G),onConfirm:l[0]||(l[0]=e=>H(r(S).action))},{default:_((()=>[i(r(f),{class:"wpp-action-btn",type:"primary",loading:O.value},{default:_((()=>[d(y(r(S).button_label),1)])),_:1},8,["loading"])])),_:1},8,["title"])):(c(),m(r(f),{key:1,class:"wpp-action-btn",type:"primary",loading:O.value,onClick:l[1]||(l[1]=e=>H(r(S).action))},{default:_((()=>[d(y(r(S).button_label),1)])),_:1},8,["loading"])),"undefined"!==r(S).description?(c(),s("p",{key:2,innerHTML:r(p)(null!==(o=null===(t=r(S))||void 0===t?void 0:t.description)&&void 0!==o?o:"")},null,8,C)):g("",!0)])])):(c(),s("div",h,[u("div",{class:v(r(S).classes)},[A.value?(c(),s("a",{key:0,id:r(S).id,href:r(S).link,target:B.value},y(r(S).button_label),9,T)):(c(),s("button",{key:1,id:r(S).id,type:r(S).action},y(r(S).button_label),9,L))],2)]))}}}))}}}));