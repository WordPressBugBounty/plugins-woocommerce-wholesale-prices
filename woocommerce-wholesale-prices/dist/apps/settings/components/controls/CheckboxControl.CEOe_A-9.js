import{d as T,t as L,s as M,r as n,o as _,c as v,a as i,b as h,u as t,w as B,p as w,i as D}from"../../index.CKpLJebS.js";import{u as N}from"../../../../common/settings-store.D2w0DAU9.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_82767a7d_lang.C_DrdWrB.js";/* empty css                                                                                                 */import{_ as S}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.D93la39V.js";/* empty css                                                                                        */import{C as R}from"../../../../common/index.BsIqu5Q6.js";import"../../../../common/index.D-oY6N4s.js";import"../../../../common/motion.B4vIiQau.js";import"../../../../common/Checkbox.B8ih9oYN.js";import"../../../../common/FormItemContext.BXddKDyF.js";import"../../../../common/createContext.DrcFD0PM.js";const U={class:"wwp-row-handle"},j={class:"wwp-left-content"},q={class:"wwp-right-content"},E=["innerHTML"],O=["innerHTML"],ee=T({__name:"CheckboxControl",props:{params:{type:Object,required:!0}},emits:["fieldData"],setup(b,{emit:k}){var u;const C=b,{params:y}=L(C),g=N(),{showPopup:r,componentUpgrade:x}=M(g),e=y.value;let l=!1;(e.default==="yes"||e.default==="true")&&(l=!0);const a=n(l),V=n((u=e.disabled)!=null?u:!1),p=k,o=n([]);a.value&&(o.value[e.id]="yes",p("fieldData",o.value));const H=()=>{typeof e.pro<"u"&&e.pro!==null?(typeof e.pro_on_active<"u"&&e.pro_on_active!==null?e.pro_on_active&&a.value&&(r.value=!0,a.value=!1):(r.value=!0,a.value=!a.value),x.value=e.pro):(o.value[e.id]=a.value?"yes":"no",p("fieldData",o.value))};return(P,c)=>{var d,m;return _(),v("div",U,[i("div",j,[h(t(S),{params:t(e)},null,8,["params"])]),i("div",q,[h(t(R),{class:"wwp-checkbox-control",checked:a.value,"onUpdate:checked":c[0]||(c[0]=s=>a.value=s),name:t(e).id,disabled:V.value,onChange:H},{default:B(()=>{var s,f;return[i("span",{innerHTML:t(w)((f=(s=t(e))==null?void 0:s.input_label)!=null?f:"")},null,8,E)]}),_:1},8,["checked","name","disabled"]),t(e).description!=="undefined"?(_(),v("p",{key:0,innerHTML:t(w)((m=(d=t(e))==null?void 0:d.description)!=null?m:"")},null,8,O)):D("",!0)])])}}});export{ee as default};