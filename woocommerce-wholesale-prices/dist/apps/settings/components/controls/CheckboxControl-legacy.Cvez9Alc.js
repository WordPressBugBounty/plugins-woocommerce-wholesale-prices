System.register(["../../index-legacy.DPQ6n18a.js","../../../../common/settings-store-legacy.CdiTRmyl.js","../../../../common/GroupControl.vue_vue_type_style_index_0_scoped_acb2f5d3_lang-legacy.Ba5ylEZA.js","../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_22edd6df_lang-legacy.D8yDTwPT.js","../../../../common/GroupConditionalControl.vue_vue_type_style_index_0_scoped_4422deae_lang-legacy.CdgV9d7Q.js","../../../../common/LabelControl.vue_vue_type_script_setup_true_lang-legacy.D-8mogMC.js","../../../../common/OptionsControl.vue_vue_type_style_index_0_scoped_31d37917_lang-legacy.YMXiswNf.js","../../../../common/index-legacy.DNw5JjSd.js","../../../../common/index-legacy.DMk1JnJp.js","../../../../common/motion-legacy.DJuHWLJs.js","../../../../common/Checkbox-legacy.DQ_ZYWlZ.js","../../../../common/FormItemContext-legacy.DxVkbCII.js","../../../../common/createContext-legacy.Br6p6aG5.js"],(function(e,l){"use strict";var n,o,a,t,u,c,s,d,i,r,_,v,p,m,y;return{setters:[e=>{n=e.d,o=e.t,a=e.s,t=e.r,u=e.o,c=e.c,s=e.a,d=e.b,i=e.u,r=e.w,_=e.p,v=e.i},e=>{p=e.u},null,null,null,e=>{m=e._},null,e=>{y=e.C},null,null,null,null,null],execute:function(){const l={class:"wwp-row-handle"},g={class:"wwp-left-content"},j={class:"wwp-right-content"},f=["innerHTML"],x=["innerHTML"];e("default",n({__name:"CheckboxControl",props:{params:{type:Object,required:!0}},emits:["fieldData"],setup(e,{emit:n}){var C;const b=e,{params:w}=o(b),h=p(),{showPopup:k,componentUpgrade:D}=a(h),L=w.value;let M=!1;"yes"!==L.default&&"true"!==L.default||(M=!0);const T=t(M),H=t(null!==(C=L.disabled)&&void 0!==C&&C),G=n,I=t([]);T.value&&(I.value[L.id]="yes",G("fieldData",I.value));const O=()=>{void 0!==L.pro&&null!==L.pro?(void 0!==L.pro_on_active&&null!==L.pro_on_active?L.pro_on_active&&T.value&&(k.value=!0,T.value=!1):(k.value=!0,T.value=!T.value),D.value=L.pro):(I.value[L.id]=T.value?"yes":"no",G("fieldData",I.value))};return(e,n)=>{var o,a;return u(),c("div",l,[s("div",g,[d(i(m),{params:i(L)},null,8,["params"])]),s("div",j,[d(i(y),{class:"wwp-checkbox-control",checked:T.value,"onUpdate:checked":n[0]||(n[0]=e=>T.value=e),name:i(L).id,disabled:H.value,onChange:O},{default:r((()=>{var e,l;return[s("span",{innerHTML:i(_)(null!==(e=null===(l=i(L))||void 0===l?void 0:l.input_label)&&void 0!==e?e:"")},null,8,f)]})),_:1},8,["checked","name","disabled"]),"undefined"!==i(L).description?(u(),c("p",{key:0,innerHTML:i(_)(null!==(o=null===(a=i(L))||void 0===a?void 0:a.description)&&void 0!==o?o:"")},null,8,x)):v("",!0)])])}}}))}}}));
