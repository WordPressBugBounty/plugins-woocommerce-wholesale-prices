import{d as K,t as j,s as q,r as f,ah as E,o as u,c as y,a as h,b as I,u as i,e as w,w as b,U as S,V as k,p as g,i as P}from"../../index.CKpLJebS.js";import{u as $}from"../../../../common/settings-store.D2w0DAU9.js";/* empty css                                                                                      */import"../../../../common/DnDDataTableControl.vue_vue_type_style_index_0_scoped_82767a7d_lang.C_DrdWrB.js";/* empty css                                                                                                 */import{_ as z}from"../../../../common/LabelControl.vue_vue_type_script_setup_true_lang.D93la39V.js";/* empty css                                                                                        */import{S as M,A as D}from"../../../../common/index.DAbSRysp.js";import"../../../../common/index.D-oY6N4s.js";import"../../../../common/motion.B4vIiQau.js";import"../../../../common/KeyCode.B_gOgbN6.js";import"../../../../common/SearchOutlined.BkQFM3AT.js";import"../../../../common/pickAttrs.BAPkhqQ0.js";import"../../../../common/slide.Ckj138X7.js";import"../../../../common/index.rtQl11BW.js";import"../../../../common/isMobile.BbN7I0i_.js";import"../../../../common/useMergedState.CK_PQlcs.js";import"../../../../common/useState.oMw7RQ-7.js";import"../../../../common/DownOutlined.nVxd90xO.js";import"../../../../common/FormItemContext.BXddKDyF.js";import"../../../../common/createContext.DrcFD0PM.js";import"../../../../common/statusUtils.8rbnFV31.js";import"../../../../common/compact-item.DXb4BOpW.js";const G={class:"wwp-row-handle"},J={class:"wwp-left-content"},Q={class:"wwp-right-content"},W=["innerHTML"],X=["innerHTML"],Y=["innerHTML"],Ce=K({__name:"SelectControl",props:{params:{type:Object,required:!0}},emits:["fieldData","selectedCondition","selectedDependent"],setup(B,{emit:U}){var H;const N=B,{params:O}=j(N),R=$(),{showPopup:C,componentUpgrade:F,selectedConditionKey:s,selectedConditionValue:r,editedRowKey:x,dynamicOptions:o}=q(R),e=O.value,l=f({}),v=f(e.default),n=f("");if(typeof v.value<"u"&&v.value!==null&&(n.value=v.value),typeof e.multiple<"u"&&e.multiple!==null&&e.multiple&&n.value.length===0&&(n.value=[]),typeof e.dependent_option<"u"&&e.dependent_option!==null?typeof o.value[e.dependent_option]<"u"&&o.value[e.dependent_option]!==null&&(l.value=e.options[o.value[e.dependent_option]],n.value=v.value):(typeof e.dependent<"u"&&e.dependent,l.value=e.options),typeof e.with_condition<"u"&&e.with_condition!==null)if(x.value===null)s.value!==""&&r.value!==""&&s.value===e.id&&(n.value=r.value);else if(s.value!==""&&r.value!=="")s.value===e.id&&(n.value=r.value);else{const t=n.value;n.value=t}const V=f((H=e.disabled)!=null?H:!1),c=U,d=f([]),T=f([]);if(n.value!==""){d.value[e.id]=n.value;let t=l.value[n.value];Array.isArray(n.value)&&(t=n.value.map(a=>l.value[a])),typeof e.label_id<"u"&&e.label_id!==null&&(d.value[e.label_id]=t),c("fieldData",d.value)}const A=t=>{if(typeof e.pro<"u"&&e.pro!==null)typeof e.pro_on_active<"u"&&e.pro_on_active!==null?e.pro_on_active&&n.value!==""&&(C.value=!0,n.value=""):(C.value=!0,n.value=v.value),F.value=e.pro;else{let a=l.value[t];Array.isArray(t)&&(a=t.map(_=>l.value[_])),d.value[e.id]=t,typeof e.label_id<"u"&&e.label_id!==null&&(d.value[e.label_id]=a),typeof e.column_dependent<"u"&&e.column_dependent!==null&&(d.value[e.column_dependent]=t,typeof e.column_dependent_text<"u"&&e.column_dependent_text!==null&&(d.value[e.column_dependent_text]=a)),c("fieldData",d.value),typeof e.with_condition<"u"&&e.with_condition!==null&&e.with_condition&&(s.value=e.id,r.value=t,T.value[e.id]=t,c("selectedCondition",T.value)),typeof e.dependent<"u"&&e.dependent!==null&&e.dependent&&(s.value=e.id,r.value=t,o.value[e.id]=t,c("selectedDependent",o)),n.value=t}};return typeof e.edit_options<"u"&&e.edit_options!==null&&(x.value===null?l.value=E(l.value,e.edit_options):typeof e.dependent_option<"u"&&e.dependent_option!==null?typeof o.value[e.dependent_option]<"u"&&o.value[e.dependent_option]!==null&&(l.value=e.options[o.value[e.dependent_option]]):(typeof e.dependent<"u"&&e.dependent,l.value=e.options)),(t,a)=>{var _,L;return u(),y("div",G,[h("div",J,[I(i(z),{params:i(e)},null,8,["params"])]),h("div",Q,[i(e).multiple?(u(),w(i(D),{key:0,ref:"select",value:n.value,"onUpdate:value":a[0]||(a[0]=p=>n.value=p),name:i(e).id,mode:"multiple",style:{"max-width":"320px",width:"100%"},disabled:V.value,onChange:A},{default:b(()=>[(u(!0),y(S,null,k(l.value,(p,m)=>(u(),w(i(M),{key:m,value:m},{default:b(()=>[h("span",{innerHTML:i(g)(p)},null,8,W)]),_:2},1032,["value"]))),128))]),_:1},8,["value","name","disabled"])):(u(),w(i(D),{key:1,ref:"select",value:n.value,"onUpdate:value":a[1]||(a[1]=p=>n.value=p),name:i(e).id,style:{"max-width":"320px",width:"100%"},disabled:V.value,onChange:A},{default:b(()=>[(u(!0),y(S,null,k(l.value,(p,m)=>(u(),w(i(M),{key:m,value:m},{default:b(()=>[h("span",{innerHTML:i(g)(p)},null,8,X)]),_:2},1032,["value"]))),128))]),_:1},8,["value","name","disabled"])),i(e).description!=="undefined"?(u(),y("p",{key:2,innerHTML:i(g)((L=(_=i(e))==null?void 0:_.description)!=null?L:"")},null,8,Y)):P("",!0)])])}}});export{Ce as default};
