import{d as T,t as A,r as i,g as L,o as a,c as n,a as c,b as y,u as t,e as g,w as p,f as v,h as r,p as N,i as V,n as H,j as M}from"../../index.CKpLJebS.js";import"../../../../common/settings-store.D2w0DAU9.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_82767a7d_lang.C_DrdWrB.js";/* empty css                                                                                                 */import{_ as $}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.D93la39V.js";/* empty css                                                                                        */import{B as b}from"../../../../common/index.B1uKm7M6.js";import{A as j}from"../../../../common/index.DsHOaSDE.js";import"../../../../common/index.D-oY6N4s.js";import"../../../../common/motion.B4vIiQau.js";import"../../../../common/index.lCUlX3KO.js";import"../../../../common/useState.oMw7RQ-7.js";import"../../../../common/warning.CrM1WiW4.js";import"../../../../common/compact-item.DXb4BOpW.js";import"../../../../common/createContext.DrcFD0PM.js";import"../../../../common/useMergedState.CK_PQlcs.js";import"../../../../common/KeyCode.B_gOgbN6.js";import"../../../../common/ActionButton.s5OQ-7gf.js";const q={key:0,class:"wwp-row-handle"},R={class:"wwp-left-content"},z={class:"wwp-right-content"},D=["innerHTML"],E={key:1,class:"wwp-button-control"},I=["id","href","target"],O=["id","type"],rt=T({__name:"ButtonControl",props:{params:{type:Object,required:!0}},setup(w){const k=w,{params:h}=A(k),e=h.value,m=i(!!e.link),B=i(e.external?"_blank":"_self"),l=i(!0),s=i(!1);(e.action==="submit"||e.action==="button")&&(l.value=!1),m.value&&(l.value=!1);const x=L("confirmText",wp.i18n.__("Are you sure want to clear the cache?","woocommerce-wholesale-prices")),u=d=>{s.value=!0;try{M({action:d}),setTimeout(()=>{s.value=!1},1e3)}catch(o){console.error(o)}};return(d,o)=>{var f,_;return l.value?(a(),n("div",q,[c("div",R,[y(t($),{params:t(e)},null,8,["params"])]),c("div",z,[t(e).confirmation?(a(),g(t(j),{key:0,title:t(x),onConfirm:o[0]||(o[0]=C=>u(t(e).action))},{default:p(()=>[y(t(b),{class:"wpp-action-btn",type:"primary",loading:s.value},{default:p(()=>[v(r(t(e).button_label),1)]),_:1},8,["loading"])]),_:1},8,["title"])):(a(),g(t(b),{key:1,class:"wpp-action-btn",type:"primary",loading:s.value,onClick:o[1]||(o[1]=C=>u(t(e).action))},{default:p(()=>[v(r(t(e).button_label),1)]),_:1},8,["loading"])),t(e).description!=="undefined"?(a(),n("p",{key:2,innerHTML:t(N)((_=(f=t(e))==null?void 0:f.description)!=null?_:"")},null,8,D)):V("",!0)])])):(a(),n("div",E,[c("div",{class:H(t(e).classes)},[m.value?(a(),n("a",{key:0,id:t(e).id,href:t(e).link,target:B.value},r(t(e).button_label),9,I)):(a(),n("button",{key:1,id:t(e).id,type:t(e).action},r(t(e).button_label),9,O))],2)]))}}});export{rt as default};