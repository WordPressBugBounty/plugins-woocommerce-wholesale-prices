System.register(["../apps/settings/index-legacy.cNla2VFO.js","./motion-legacy.BFTotnUX.js"],(function(t,e){"use strict";var o,r,n,a,i,l,s,p,f,c,u,d,m,g,v,y,b,h,w,O,$,C,x,k,_,A,S,P;return{setters:[t=>{o=t._,r=t.aJ,n=t.d,a=t.b,i=t.P,l=t.q,s=t.ao,p=t.Q,f=t.k,c=t.A,u=t.G,d=t.H,m=t.a1,g=t.F,v=t.L,y=t.J,b=t.r,h=t.y,w=t.a4,O=t.aq,$=t.b0,C=t.O,x=t.b1,k=t.I},t=>{_=t.f,A=t.T,S=t.w,P=t.a}],execute:function(){t({b:at,c:Q,f:tt,g:it});const e=t("P",["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]),B=t("r",((t,e,o,r,n)=>{const a=t/2,i=a,l=1*o/Math.sqrt(2),s=a-o*(1-1/Math.sqrt(2)),p=a-e*(1/Math.sqrt(2)),f=o*(Math.sqrt(2)-1)+e*(1/Math.sqrt(2)),c=2*a-p,u=f,d=2*a-l,m=s,g=2*a-0,v=i,y=a*Math.sqrt(2)+o*(Math.sqrt(2)-2),b=o*(Math.sqrt(2)-1);return{pointerEvents:"none",width:t,height:t,overflow:"hidden","&::after":{content:'""',position:"absolute",width:y,height:y,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${e}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:n,zIndex:0,background:"transparent"},"&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t,height:t/2,background:r,clipPath:{_multi_value_:!0,value:[`polygon(${b}px 100%, 50% ${b}px, ${2*a-b}px 100%, ${b}px 100%)`,`path('M 0 ${i} A ${o} ${o} 0 0 0 ${l} ${s} L ${p} ${f} A ${e} ${e} 0 0 1 ${c} ${u} L ${d} ${m} A ${o} ${o} 0 0 0 ${g} ${v} Z')`]},content:'""'}}}));function R(t,r){return e.reduce(((e,n)=>{const a=t[`${n}-1`],i=t[`${n}-3`],l=t[`${n}-6`],s=t[`${n}-7`];return o(o({},e),r(n,{lightColor:a,lightBorderColor:i,darkColor:l,textColor:s}))}),{})}const j=t("z",new r("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}})),T=new r("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),D=new r("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),I=new r("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),N=new r("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),L=new r("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),z={zoom:{inKeyframes:j,outKeyframes:T},"zoom-big":{inKeyframes:D,outKeyframes:I},"zoom-big-fast":{inKeyframes:D,outKeyframes:I},"zoom-left":{inKeyframes:new r("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new r("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new r("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new r("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:N,outKeyframes:L},"zoom-down":{inKeyframes:new r("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new r("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},V=t("i",((t,e)=>{const{antCls:o}=t,r=`${o}-${e}`,{inKeyframes:n,outKeyframes:a}=z[e];return[_(r,n,a,"zoom-big-fast"===e?t.motionDurationFast:t.motionDurationMid),{[`\n        ${r}-enter,\n        ${r}-appear\n      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]})),M={adjustX:1,adjustY:1},E=[0,0],K={left:{points:["cr","cl"],overflow:M,offset:[-4,0],targetOffset:E},right:{points:["cl","cr"],overflow:M,offset:[4,0],targetOffset:E},top:{points:["bc","tc"],overflow:M,offset:[0,-4],targetOffset:E},bottom:{points:["tc","bc"],overflow:M,offset:[0,4],targetOffset:E},topLeft:{points:["bl","tl"],overflow:M,offset:[0,-4],targetOffset:E},leftTop:{points:["tr","tl"],overflow:M,offset:[-4,0],targetOffset:E},topRight:{points:["br","tr"],overflow:M,offset:[0,-4],targetOffset:E},rightTop:{points:["tl","tr"],overflow:M,offset:[4,0],targetOffset:E},bottomRight:{points:["tr","br"],overflow:M,offset:[0,4],targetOffset:E},rightBottom:{points:["bl","br"],overflow:M,offset:[4,0],targetOffset:E},bottomLeft:{points:["tl","bl"],overflow:M,offset:[0,4],targetOffset:E},leftBottom:{points:["br","bl"],overflow:M,offset:[-4,0],targetOffset:E}},X={prefixCls:String,id:String,overlayInnerStyle:i.any},Z=n({compatConfig:{MODE:3},name:"TooltipContent",props:X,setup(t,e){let{slots:o}=e;return()=>{var e;return a("div",{class:`${t.prefixCls}-inner`,id:t.id,role:"tooltip",style:t.overlayInnerStyle},[null===(e=o.overlay)||void 0===e?void 0:e.call(o)])}}});var F=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o};function q(){}const H=n({compatConfig:{MODE:3},name:"Tooltip",inheritAttrs:!1,props:{trigger:i.any.def(["hover"]),defaultVisible:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:i.string.def("right"),transitionName:String,animation:i.any,afterVisibleChange:i.func.def((()=>{})),overlayStyle:{type:Object,default:void 0},overlayClassName:String,prefixCls:i.string.def("rc-tooltip"),mouseEnterDelay:i.number.def(.1),mouseLeaveDelay:i.number.def(.1),getPopupContainer:Function,destroyTooltipOnHide:{type:Boolean,default:!1},align:i.object.def((()=>({}))),arrowContent:i.any.def(null),tipId:String,builtinPlacements:i.object,overlayInnerStyle:{type:Object,default:void 0},popupVisible:{type:Boolean,default:void 0},onVisibleChange:Function,onPopupAlign:Function,arrow:{type:Boolean,default:!0}},setup(t,e){let{slots:r,attrs:n,expose:i}=e;const f=l(),c=()=>{const{prefixCls:e,tipId:o,overlayInnerStyle:n}=t;return[t.arrow?a("div",{class:`${e}-arrow`,key:"arrow"},[p(r,t,"arrowContent")]):null,a(Z,{key:"content",prefixCls:e,id:o,overlayInnerStyle:n},{overlay:r.overlay})]};i({getPopupDomNode:()=>f.value.getPopupDomNode(),triggerDOM:f,forcePopupAlign:()=>{var t;return null===(t=f.value)||void 0===t?void 0:t.forcePopupAlign()}});const u=l(!1),d=l(!1);return s((()=>{const{destroyTooltipOnHide:e}=t;if("boolean"==typeof e)u.value=e;else if(e&&"object"==typeof e){const{keepParent:t}=e;u.value=!0===t,d.value=!1===t}})),()=>{const{overlayClassName:e,trigger:i,mouseEnterDelay:l,mouseLeaveDelay:s,overlayStyle:p,prefixCls:m,afterVisibleChange:g,transitionName:v,animation:y,placement:b,align:h,destroyTooltipOnHide:w,defaultVisible:O}=t,$=F(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible"]),C=o({},$);void 0!==t.visible&&(C.popupVisible=t.visible);const x=o(o(o({popupClassName:e,prefixCls:m,action:i,builtinPlacements:K,popupPlacement:b,popupAlign:h,afterPopupVisibleChange:g,popupTransitionName:v,popupAnimation:y,defaultPopupVisible:O,destroyPopupOnHide:u.value,autoDestroy:d.value,mouseLeaveDelay:s,popupStyle:p,mouseEnterDelay:l},C),n),{onPopupVisibleChange:t.onVisibleChange||q,onPopupAlign:t.onPopupAlign||q,ref:f,arrow:!!t.arrow,popup:c()});return a(A,x,{default:r.default})}}}),Y=t("a",(()=>({trigger:[String,Array],open:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},placement:String,color:String,transitionName:String,overlayStyle:f(),overlayInnerStyle:f(),overlayClassName:String,openClassName:String,prefixCls:String,mouseEnterDelay:Number,mouseLeaveDelay:Number,getPopupContainer:Function,arrowPointAtCenter:{type:Boolean,default:void 0},arrow:{type:[Boolean,Object],default:!0},autoAdjustOverflow:{type:[Boolean,Object],default:void 0},destroyTooltipOnHide:{type:Boolean,default:void 0},align:f(),builtinPlacements:f(),children:Array,onVisibleChange:Function,"onUpdate:visible":Function,onOpenChange:Function,"onUpdate:open":Function}))),W={adjustX:1,adjustY:1},U={adjustX:0,adjustY:0},G=[0,0];function J(t){return"boolean"==typeof t?t?W:U:o(o({},U),t)}function Q(t){const{arrowWidth:e=4,horizontalArrowShift:r=16,verticalArrowShift:n=8,autoAdjustOverflow:a,arrowPointAtCenter:i}=t,l={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(r+e),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(n+e)]},topRight:{points:["br","tc"],offset:[r+e,-4]},rightTop:{points:["tl","cr"],offset:[4,-(n+e)]},bottomRight:{points:["tr","bc"],offset:[r+e,4]},rightBottom:{points:["bl","cr"],offset:[4,n+e]},bottomLeft:{points:["tl","bc"],offset:[-(r+e),4]},leftBottom:{points:["br","cl"],offset:[-4,n+e]}};return Object.keys(l).forEach((t=>{l[t]=i?o(o({},l[t]),{overflow:J(a),targetOffset:G}):o(o({},K[t]),{overflow:J(a)}),l[t].ignoreShake=!0})),l}function tt(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];for(let e=0,o=t.length;e<o;e++)if(void 0!==t[e])return t[e]}const et=e.map((t=>`${t}-inverse`));function ot(t,o){const r=function(t){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e.includes(t):[...et,...e].includes(t)}(o),n=c({[`${t}-${o}`]:o&&r}),a={},i={};return o&&!r&&(a.background=o,i["--antd-arrow-background-color"]=o),{className:n,overlayStyle:a,arrowStyle:i}}function rt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.map((t=>`${e}${t}`)).join(",")}const nt=8;function at(t){const e=nt,{sizePopupArrow:o,contentRadius:r,borderRadiusOuter:n,limitVerticalRadius:a}=t,i=o/2-Math.ceil(n*(Math.sqrt(2)-1)),l=(r>12?r+2:12)-i;return{dropdownArrowOffset:l,dropdownArrowOffsetVertical:a?e-i:l}}function it(t,e){const{componentCls:r,sizePopupArrow:n,marginXXS:a,borderRadiusXS:i,borderRadiusOuter:l,boxShadowPopoverArrow:s}=t,{colorBg:p,showArrowCls:f,contentRadius:c=t.borderRadiusLG,limitVerticalRadius:u}=e,{dropdownArrowOffsetVertical:d,dropdownArrowOffset:m}=at({sizePopupArrow:n,contentRadius:c,borderRadiusOuter:l,limitVerticalRadius:u}),g=n/2+a;return{[r]:{[`${r}-arrow`]:[o(o({position:"absolute",zIndex:1,display:"block"},B(n,i,l,p,s)),{"&:before":{background:p}})],[[`&-placement-top ${r}-arrow`,`&-placement-topLeft ${r}-arrow`,`&-placement-topRight ${r}-arrow`].join(",")]:{bottom:0,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${r}-arrow`]:{left:{_skip_check_:!0,value:m}},[`&-placement-topRight ${r}-arrow`]:{right:{_skip_check_:!0,value:m}},[[`&-placement-bottom ${r}-arrow`,`&-placement-bottomLeft ${r}-arrow`,`&-placement-bottomRight ${r}-arrow`].join(",")]:{top:0,transform:"translateY(-100%)"},[`&-placement-bottom ${r}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${r}-arrow`]:{left:{_skip_check_:!0,value:m}},[`&-placement-bottomRight ${r}-arrow`]:{right:{_skip_check_:!0,value:m}},[[`&-placement-left ${r}-arrow`,`&-placement-leftTop ${r}-arrow`,`&-placement-leftBottom ${r}-arrow`].join(",")]:{right:{_skip_check_:!0,value:0},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${r}-arrow`]:{top:d},[`&-placement-leftBottom ${r}-arrow`]:{bottom:d},[[`&-placement-right ${r}-arrow`,`&-placement-rightTop ${r}-arrow`,`&-placement-rightBottom ${r}-arrow`].join(",")]:{left:{_skip_check_:!0,value:0},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${r}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${r}-arrow`]:{top:d},[`&-placement-rightBottom ${r}-arrow`]:{bottom:d},[rt(["&-placement-topLeft","&-placement-top","&-placement-topRight"].map((t=>t+":not(&-arrow-hidden)")),f)]:{paddingBottom:g},[rt(["&-placement-bottomLeft","&-placement-bottom","&-placement-bottomRight"].map((t=>t+":not(&-arrow-hidden)")),f)]:{paddingTop:g},[rt(["&-placement-leftTop","&-placement-left","&-placement-leftBottom"].map((t=>t+":not(&-arrow-hidden)")),f)]:{paddingRight:{_skip_check_:!0,value:g}},[rt(["&-placement-rightTop","&-placement-right","&-placement-rightBottom"].map((t=>t+":not(&-arrow-hidden)")),f)]:{paddingLeft:{_skip_check_:!0,value:g}}}}}const lt=t=>{const{componentCls:e,tooltipMaxWidth:r,tooltipColor:n,tooltipBg:a,tooltipBorderRadius:i,zIndexPopup:l,controlHeight:s,boxShadowSecondary:p,paddingSM:f,paddingXS:c,tooltipRadiusOuter:u}=t;return[{[e]:o(o(o(o({},m(t)),{position:"absolute",zIndex:l,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:r,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":a,[`${e}-inner`]:{minWidth:s,minHeight:s,padding:`${f/2}px ${c}px`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:i,boxShadow:p},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(i,nt)}},[`${e}-content`]:{position:"relative"}}),R(t,((t,o)=>{let{darkColor:r}=o;return{[`&${e}-${t}`]:{[`${e}-inner`]:{backgroundColor:r},[`${e}-arrow`]:{"--antd-arrow-background-color":r}}}}))),{"&-rtl":{direction:"rtl"}})},it(d(t,{borderRadiusOuter:u}),{colorBg:"var(--antd-arrow-background-color)",showArrowCls:"",contentRadius:i,limitVerticalRadius:!0}),{[`${e}-pure`]:{position:"relative",maxWidth:"none"}}]},st=(t("t",(()=>({trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}))),n({compatConfig:{MODE:3},name:"ATooltip",inheritAttrs:!1,props:g(o(o({},Y()),{title:i.any}),{trigger:"hover",align:{},placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0}),slots:Object,setup(t,e){let{slots:r,emit:n,attrs:i,expose:l}=e;const{prefixCls:s,getPopupContainer:p,direction:f,rootPrefixCls:m}=v("tooltip",t),g=y((()=>{var e;return null!==(e=t.open)&&void 0!==e?e:t.visible})),k=b(tt([t.open,t.visible])),_=b();let A;h(g,(t=>{S.cancel(A),A=S((()=>{k.value=!!t}))}));const B=()=>{var e;const o=null!==(e=t.title)&&void 0!==e?e:r.title;return!o&&0!==o},R=t=>{const e=B();void 0===g.value&&(k.value=!e&&t),e||(n("update:visible",t),n("visibleChange",t),n("update:open",t),n("openChange",t))};l({getPopupDomNode:()=>_.value.getPopupDomNode(),open:k,forcePopupAlign:()=>{var t;return null===(t=_.value)||void 0===t?void 0:t.forcePopupAlign()}});const j=y((()=>{var e;const{builtinPlacements:o,autoAdjustOverflow:r,arrow:n,arrowPointAtCenter:a}=t;let i=a;return"object"==typeof n&&(i=null!==(e=n.pointAtCenter)&&void 0!==e?e:a),o||Q({arrowPointAtCenter:i,autoAdjustOverflow:r})})),T=t=>t||""===t,D=t=>{const e=t.type;if("object"==typeof e&&t.props&&((!0===e.__ANT_BUTTON||"button"===e)&&T(t.props.disabled)||!0===e.__ANT_SWITCH&&(T(t.props.disabled)||T(t.props.loading))||!0===e.__ANT_RADIO&&T(t.props.disabled))){const{picked:e,omitted:r}=((t,e)=>{const r={},n=o({},t);return e.forEach((e=>{t&&e in t&&(r[e]=t[e],delete n[e])})),{picked:r,omitted:n}})(x(t),["position","left","right","top","bottom","float","display","zIndex"]),n=o(o({display:"inline-block"},e),{cursor:"not-allowed",lineHeight:1,width:t.props&&t.props.block?"100%":void 0}),i=o(o({},r),{pointerEvents:"none"}),l=P(t,{style:i},!0);return a("span",{style:n,class:`${s.value}-disabled-compatible-wrapper`},[l])}return t},I=()=>{var e,o;return null!==(e=t.title)&&void 0!==e?e:null===(o=r.title)||void 0===o?void 0:o.call(r)},N=(t,e)=>{const o=j.value,r=Object.keys(o).find((t=>{var r,n;return o[t].points[0]===(null===(r=e.points)||void 0===r?void 0:r[0])&&o[t].points[1]===(null===(n=e.points)||void 0===n?void 0:n[1])}));if(r){const o=t.getBoundingClientRect(),n={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?n.top=o.height-e.offset[1]+"px":(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(n.top=-e.offset[1]+"px"),r.indexOf("left")>=0||r.indexOf("Right")>=0?n.left=o.width-e.offset[0]+"px":(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(n.left=-e.offset[0]+"px"),t.style.transformOrigin=`${n.left} ${n.top}`}},L=y((()=>ot(s.value,t.color))),z=y((()=>i["data-popover-inject"])),[M,E]=((t,e)=>u("Tooltip",(t=>{if(!1===(null==e?void 0:e.value))return[];const{borderRadius:o,colorTextLightSolid:r,colorBgDefault:n,borderRadiusOuter:a}=t,i=d(t,{tooltipMaxWidth:250,tooltipColor:r,tooltipBorderRadius:o,tooltipBg:n,tooltipRadiusOuter:a>4?4:a});return[lt(i),V(t,"zoom-big-fast")]}),(t=>{let{zIndexPopupBase:e,colorBgSpotlight:o}=t;return{zIndexPopup:e+70,colorBgDefault:o}}))(t))(s,y((()=>!z.value)));return()=>{var e,n;const{openClassName:l,overlayClassName:u,overlayStyle:d,overlayInnerStyle:v}=t;let y=null!==(n=w(null===(e=r.default)||void 0===e?void 0:e.call(r)))&&void 0!==n?n:null;y=1===y.length?y[0]:y;let b=k.value;if(void 0===g.value&&B()&&(b=!1),!y)return null;const h=D(O(y)&&!$(y)?y:a("span",null,[y])),x=c({[l||`${s.value}-open`]:!0,[h.props&&h.props.class]:h.props&&h.props.class}),A=c(u,{[`${s.value}-rtl`]:"rtl"===f.value},L.value.className,E.value),S=o(o({},L.value.overlayStyle),v),T=L.value.arrowStyle,z=o(o(o({},i),t),{prefixCls:s.value,arrow:!!t.arrow,getPopupContainer:null==p?void 0:p.value,builtinPlacements:j.value,visible:b,ref:_,overlayClassName:A,overlayStyle:o(o({},T),d),overlayInnerStyle:S,onVisibleChange:R,onPopupAlign:N,transitionName:C(m.value,"zoom-big-fast",t.transitionName)});return M(a(H,z,{default:()=>[k.value?P(h,{class:x}):h],arrowContent:()=>a("span",{class:`${s.value}-arrow-content`},null),overlay:I}))}}}));t("A",k(st))}}}));
