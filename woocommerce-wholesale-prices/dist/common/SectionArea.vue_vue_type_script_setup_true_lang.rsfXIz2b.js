import{d as k,t as T,r as v,o as t,c as a,V,a as l,h as S,i as d,u as n,p as q,b as B,U as F}from"../apps/settings/index.d4AqeQbB.js";import{_ as H}from"./DynamicComponents.vue_vue_type_script_setup_true_lang.B8TZAoYT.js";const L={class:"wwp-row-handle"},N={key:0,class:"wwp-left-content"},j=["innerHTML"],E=k({__name:"SectionArea",props:{sectionData:{type:Object,required:!0},parentTab:{type:String,required:!0},childTab:{type:String,required:!0}},emits:["fieldData"],setup(p,{emit:u}){const h=p,{sectionData:m,parentTab:_,childTab:f}=T(h),b=m,w=_,y=f,s=v([]),D=u,g=r=>{Object.entries(r).forEach(([c,e])=>{s.value[c]=e}),D("fieldData",s.value)};return(r,c)=>(t(!0),a(F,null,V(n(b),(e,o)=>{var i;return t(),a("section",{key:o,class:"wwp-section-handle"},[l("div",L,[e.label?(t(),a("div",N,[l("h4",null,S(e.label),1)])):d("",!0),e.desc!=""?(t(),a("div",{key:1,class:"wwp-right-content",innerHTML:n(q)((i=e.desc)!=null&&i.length?e.desc:"")},null,8,j)):d("",!0)]),B(H,{"section-parent":n(w),"section-child":n(y),"section-key":o,onFieldData:g},null,8,["section-parent","section-child","section-key"])])}),128))}});export{E as _};
