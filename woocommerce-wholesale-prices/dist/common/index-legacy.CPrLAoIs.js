System.register(["../apps/settings/index-legacy.cNla2VFO.js","./KeyCode-legacy.CYgXvjDm.js","./index-legacy.5wD59gNN.js","./FormItemContext-legacy.Da1_eJX-.js"],(function(n,i){"use strict";var e,t,a,c,o,l,d,r,s,h,u,g,w,S,p,$,M,I,k,v,m,x,b,C,y,P;return{setters:[n=>{e=n.G,t=n.H,a=n.ai,c=n._,o=n.a1,l=n.aj,d=n.I,r=n.ak,s=n.d,h=n.af,u=n.J,g=n.al,w=n.r,S=n.y,p=n.L,$=n.v,M=n.x,I=n.b,k=n.D,v=n.E,m=n.am,x=n.Q,b=n.P},n=>{C=n.K},n=>{y=n.W},n=>{P=n.u}],execute:function(){const i=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[`&${i}-small`]:{minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:`${n.switchHeightSM}px`,[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM,[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSizeSM+2*n.switchPadding}px - ${2*n.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSizeSM+2*n.switchPadding}px + ${2*n.switchInnerMarginMaxSM}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:n.switchPinSizeSM,height:n.switchPinSizeSM},[`${i}-loading-icon`]:{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSizeSM+2*n.switchPadding}px + ${2*n.switchInnerMarginMaxSM}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSizeSM+2*n.switchPadding}px - ${2*n.switchInnerMarginMaxSM}px)`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${n.switchPinSizeSM+n.switchPadding}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2}}}}}}},f=n=>{const{componentCls:i}=n;return{[i]:{[`${i}-loading-icon${n.iconCls}`]:{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:n.switchColor}}}},z=n=>{const{componentCls:i}=n,e=`${i}-handle`;return{[i]:{[e]:{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${e}`]:{insetInlineStart:`calc(100% - ${n.switchPinSize+n.switchPadding}px)`},[`&:not(${i}-disabled):active`]:{[`${e}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${e}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},E=n=>{const{componentCls:i}=n,e=`${i}-inner`;return{[i]:{[e]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${e}-checked, ${e}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none"},[`${e}-checked`]:{marginInlineStart:`calc(-100% + ${n.switchPinSize+2*n.switchPadding}px - ${2*n.switchInnerMarginMax}px)`,marginInlineEnd:`calc(100% - ${n.switchPinSize+2*n.switchPadding}px + ${2*n.switchInnerMarginMax}px)`},[`${e}-unchecked`]:{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${e}`]:{paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax,[`${e}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${e}-unchecked`]:{marginInlineStart:`calc(100% - ${n.switchPinSize+2*n.switchPadding}px + ${2*n.switchInnerMarginMax}px)`,marginInlineEnd:`calc(-100% + ${n.switchPinSize+2*n.switchPadding}px - ${2*n.switchInnerMarginMax}px)`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${e}`]:{[`${e}-unchecked`]:{marginInlineStart:2*n.switchPadding,marginInlineEnd:2*-n.switchPadding}},[`&${i}-checked ${e}`]:{[`${e}-checked`]:{marginInlineStart:2*-n.switchPadding,marginInlineEnd:2*n.switchPadding}}}}}},H=n=>{const{componentCls:i}=n;return{[i]:c(c(c(c({},o(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:`${n.switchHeight}px`,verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:n.colorTextTertiary}}),l(n)),{[`&${i}-checked`]:{background:n.switchColor,[`&:hover:not(${i}-disabled)`]:{background:n.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},T=e("Switch",(n=>{const e=n.fontSize*n.lineHeight,c=n.controlHeight/2,o=e-4,l=c-4,d=t(n,{switchMinWidth:2*o+8,switchHeight:e,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:o/2,switchInnerMarginMax:o+2+4,switchPadding:2,switchPinSize:o,switchBg:n.colorBgContainer,switchMinWidthSM:2*l+4,switchHeightSM:c,switchInnerMarginMinSM:l/2,switchInnerMarginMaxSM:l+2+4,switchPinSizeSM:l,switchHandleShadow:`0 2px 4px 0 ${new a("#00230b").setAlpha(.2).toRgbString()}`,switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[H(d),E(d),z(d),f(d),i(d)]})),D=r("small","default"),F=s({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:{id:String,prefixCls:String,size:b.oneOf(D),disabled:{type:Boolean,default:void 0},checkedChildren:b.any,unCheckedChildren:b.any,tabindex:b.oneOfType([b.string,b.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:b.oneOfType([b.string,b.number,b.looseBool]),checkedValue:b.oneOfType([b.string,b.number,b.looseBool]).def(!0),unCheckedValue:b.oneOfType([b.string,b.number,b.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function},slots:Object,setup(n,i){let{attrs:e,slots:t,expose:a,emit:c}=i;const o=P(),l=h(),d=u((()=>{var i;return null!==(i=n.disabled)&&void 0!==i?i:l.value}));g((()=>{}));const r=w(void 0!==n.checked?n.checked:e.defaultChecked),s=u((()=>r.value===n.checkedValue));S((()=>n.checked),(()=>{r.value=n.checked}));const{prefixCls:b,direction:f,size:z}=p("switch",n),[E,H]=T(b),D=w(),F=()=>{var n;null===(n=D.value)||void 0===n||n.focus()};a({focus:F,blur:()=>{var n;null===(n=D.value)||void 0===n||n.blur()}}),$((()=>{M((()=>{n.autofocus&&!d.value&&D.value.focus()}))}));const A=(n,i)=>{d.value||(c("update:checked",n),c("change",n,i),o.onFieldChange())},B=n=>{c("blur",n)},L=i=>{F();const e=s.value?n.unCheckedValue:n.checkedValue;A(e,i),c("click",e,i)},O=i=>{i.keyCode===C.LEFT?A(n.unCheckedValue,i):i.keyCode===C.RIGHT&&A(n.checkedValue,i),c("keydown",i)},V=n=>{var i;null===(i=D.value)||void 0===i||i.blur(),c("mouseup",n)},W=u((()=>({[`${b.value}-small`]:"small"===z.value,[`${b.value}-loading`]:n.loading,[`${b.value}-checked`]:s.value,[`${b.value}-disabled`]:d.value,[b.value]:!0,[`${b.value}-rtl`]:"rtl"===f.value,[H.value]:!0})));return()=>{var i;return E(I(y,null,{default:()=>[I("button",k(k(k({},v(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),e),{},{id:null!==(i=n.id)&&void 0!==i?i:o.id.value,onKeydown:O,onClick:L,onBlur:B,onMouseup:V,type:"button",role:"switch","aria-checked":r.value,disabled:d.value||n.loading,class:[e.class,W.value],ref:D}),[I("div",{class:`${b.value}-handle`},[n.loading?I(m,{class:`${b.value}-loading-icon`},null):null]),I("span",{class:`${b.value}-inner`},[I("span",{class:`${b.value}-inner-checked`},[x(t,n,"checkedChildren")]),I("span",{class:`${b.value}-inner-unchecked`},[x(t,n,"unCheckedChildren")])])])]}))}}});n("A",d(F))}}}));
