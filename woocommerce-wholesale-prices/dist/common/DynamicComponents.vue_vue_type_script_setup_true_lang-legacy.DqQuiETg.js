System.register(["../apps/settings/index-legacy.DPQ6n18a.js","./LeadCaptureRecommended.vue_vue_type_style_index_0_lang-legacy.I0Os_7aj.js"],(function(e,l){"use strict";var t,a,i,n,u,o,d,v,r,s,c,f,p,y,_,g,h,m,D;return{setters:[e=>{t=e.d,a=e.t,i=e.aZ,n=e.r,u=e.S,o=e.o,d=e.c,v=e.V,r=e.e,s=e.w,c=e.b,f=e.W,p=e.X,y=e.u,_=e.Y,g=e.Z,h=e.i,m=e.U},e=>{D=e._}],execute:function(){e("_",t({__name:"DynamicComponents",props:{sectionParent:{type:String,required:!0},sectionChild:{type:String,required:!0},sectionKey:{type:String,required:!0}},emits:["fieldData"],setup(e,{emit:l}){const t=e,{sectionParent:k,sectionChild:C,sectionKey:S}=a(t),b=i.settings;let j=null;void 0!==b.controls[k.value][C.value]&&null!==b.controls[k.value][C.value]&&(j=b.controls[k.value][C.value][S.value]);const x=n(j),q=u({controls:x.value}),w=n([]),F=l,I=n([]);void 0!==x.value&&null!==x.value&&(q.controls=x.value.filter((e=>void 0!==e.hide?!e.hide&&(void 0!==w.value[e.id]&&(e.default=w.value[e.id]),!0):(void 0!==w.value[e.id]&&(e.default=w.value[e.id]),!0))));const K=e=>{Object.entries(e).forEach((([e,l])=>{w.value[e]=l})),F("fieldData",w.value)},O=e=>{let l="",t="";for(const[a,i]of Object.entries(e))l=a,t=i;q.controls=x.value.filter((e=>{if(void 0!==e.condition){const a=e.condition.find((e=>e.key===l));return("yes"===a.value&&"yes"===t||"no"===a.value&&"no"===t)&&(void 0!==w.value[e.id]&&(e.default=w.value[e.id]),!0)}return void 0!==w.value[e.id]&&(e.default=w.value[e.id]),!0})),I.value[l]=t,w.value[l]=t,F("fieldData",w.value)},P=e=>{q.controls=x.value.filter((e=>void 0!==e.hide&&null!==e.hide?!e.hide&&(void 0!==w.value[e.id]&&null!==w.value[e.id]&&(e.default=w.value[e.id]),!0):(void 0!==w.value[e.id]&&null!==w.value[e.id]&&(e.default=w.value[e.id]),!0)))};return(e,l)=>(o(!0),d(m,null,v(q.controls,((e,l)=>(o(),d("div",{key:l},[(o(),r(g,null,{fallback:s((()=>[c(f)])),default:s((()=>[(o(),r(p(y(_)(e.type)),{params:e,"conditional-values":I.value,onInput:l=>((e,l)=>{const t=e;"checkbox"===l.type&&(t.target.value=t.target.checked),w.value[l.id]=t.target.value,F("fieldData",w.value)})(l,e),onFieldData:K,onConditionalData:O,onSelectedCondition:O,onFieldUpdatedData:P},null,40,["params","conditional-values","onInput"]))])),_:2},1024)),null!=e.show_lead_upgrade&&e.show_lead_upgrade?(o(),r(D,{key:0})):h("",!0)])))),128))}}))}}}));
