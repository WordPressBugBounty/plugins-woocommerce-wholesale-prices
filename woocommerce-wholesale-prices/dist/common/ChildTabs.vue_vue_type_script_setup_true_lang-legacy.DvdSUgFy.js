System.register(["../apps/settings/index-legacy.cNla2VFO.js","./settings-store-legacy.Cy0Fixa8.js","./SectionArea.vue_vue_type_script_setup_true_lang-legacy.T-xmygRB.js","./GeneralUnlock.vue_vue_type_style_index_0_lang-legacy.BtQKnvpZ.js","./FreeGuide.vue_vue_type_style_index_0_lang-legacy.CKOnyhwi.js","./motion-legacy.BFTotnUX.js","./KeyCode-legacy.CYgXvjDm.js","./index-legacy.DTA-_X5V.js","./useState-legacy.DO9dAzVn.js","./index-legacy.CzMmRTSw.js","./_assignValue-legacy.BhA3-WvC.js","./isMobile-legacy.u4Sbg_0V.js","./useMergedState-legacy.7eIpWvAx.js","./index-legacy.DzhrTh1e.js","./slide-legacy.CqZ89z-R.js"],(function(e,t){"use strict";var a,n,o,i,l,r,s,u,c,d,v,p,b,f,h,g,$,m,y,k,x,_,C,w,S,T,P,B,E,R,L,D,A,I,O,M,j,G,H,N,z,K,W,X,F,q,Y,V,U,J,Q,Z,ee,te,ae,ne,oe,ie,le,re,se,ue,ce,de,ve,pe,be,fe,he,ge,$e,me,ye,ke,xe,_e,Ce,we,Se,Te,Pe,Be,Ee,Re;return{setters:[e=>{a=e.q,n=e.ab,o=e.d,i=e.r,l=e.J,r=e.b,s=e.A,u=e.ao,c=e._,d=e.v,v=e.y,p=e.P,b=e.m,f=e.M,h=e.K,g=e.aY,$=e.aG,m=e.D,y=e.k,k=e.a0,x=e.G,_=e.H,C=e.aL,w=e.a1,S=e.aj,T=e.F,P=e.aB,B=e.E,E=e.a8,R=e.ad,L=e.ac,D=e.aq,A=e.at,I=e.l,O=e.L,M=e.R,j=e.t,G=e.s,H=e.bw,N=e.o,z=e.e,K=e.w,W=e.c,X=e.U,F=e.V,q=e.u,Y=e.n,V=e.a,U=e.h,J=e.g,Q=e.f,Z=e.i,ee=e.bz,te=e.by},e=>{ae=e.u},e=>{ne=e._},e=>{oe=e._},e=>{ie=e._},e=>{le=e.S,re=e.j,se=e.W,ue=e.m,ce=e.y,de=e.X,ve=e.Y,pe=e.q,be=e.w,fe=e.a},e=>{he=e.K},e=>{ge=e.i,$e=e.u,me=e.E,ye=e.M,ke=e.e,xe=e.D},e=>{_e=e.u},e=>{Ce=e.R},e=>{we=e.d,Se=e.a},e=>{Te=e.i},e=>{Pe=e.u},e=>{Be=e.d,Ee=e.B},e=>{Re=e.i}],execute:function(){function t(e,t){for(var a=-1,n=null==e?0:e.length,o=Array(n);++a<n;)o[a]=t(e[a],a,e);return o}e({a:qe,b:at,c:t,d:Ze,f:lt,h:st,i:Oe,o:We,t:tt});var Le=1/0,De=le?le.prototype:void 0,Ae=De?De.toString:void 0;function Ie(e){if("string"==typeof e)return e;if(re(e))return t(e,Ie)+"";if(ge(e))return Ae?Ae.call(e):"";var a=e+"";return"0"==a&&1/e==-Le?"-0":a}function Oe(e){return e}var Me,je,Ge,He=Date.now,Ne=we?function(e,t){return we(e,"toString",{configurable:!0,enumerable:!1,value:(a=t,function(){return a}),writable:!0});var a}:Oe,ze=e("s",(Me=Ne,je=0,Ge=0,function(){var e=He(),t=16-(e-Ge);if(Ge=e,t>0){if(++je>=800)return arguments[0]}else je=0;return Me.apply(void 0,arguments)})),Ke=Math.max;function We(e,t,a){return t=Ke(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=Ke(n.length-t,0),l=Array(i);++o<i;)l[o]=n[t+o];o=-1;for(var r=Array(t+1);++o<t;)r[o]=n[o];return r[t]=a(l),function(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}(e,this,r)}}var Xe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fe=/^\w*$/;function qe(e,t){if(re(e))return!1;var a=typeof e;return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!ge(e))||Fe.test(e)||!Xe.test(e)||null!=t&&e in Object(t)}var Ye="Expected a function";function Ve(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(Ye);var a=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=a.cache;if(i.has(o))return i.get(o);var l=e.apply(this,n);return a.cache=i.set(o,l)||i,l};return a.cache=new(Ve.Cache||se),a}Ve.Cache=se;var Ue=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Je=/\\(\\)?/g,Qe=function(e){var t=Ve(e,(function(e){return 500===a.size&&a.clear(),e})),a=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ue,(function(e,a,n,o){t.push(n?o.replace(Je,"$1"):a||e)})),t}));function Ze(e,t){return re(e)?e:qe(e,t)?[e]:Qe(function(e){return null==e?"":Ie(e)}(e))}var et=1/0;function tt(e){if("string"==typeof e||ge(e))return e;var t=e+"";return"0"==t&&1/e==-et?"-0":t}function at(e,t){for(var a=0,n=(t=Ze(t,e)).length;null!=e&&a<n;)e=e[tt(t[a++])];return a&&a==n?e:void 0}var nt=le?le.isConcatSpreadable:void 0;function ot(e){return re(e)||ue(e)||!!(nt&&e&&e[nt])}function it(e){return null!=e&&e.length?function(e,t,a,n,o){var i=-1,l=e.length;for(a||(a=ot),o||(o=[]);++i<l;){var r=e[i];a(r)?ce(o,r):o[o.length]=r}return o}(e):[]}function lt(e){return ze(We(e,void 0,it),e+"")}function rt(e,t){return null!=e&&t in Object(e)}function st(e,t){return null!=e&&function(e,t,a){for(var n=-1,o=(t=Ze(t,e)).length,i=!1;++n<o;){var l=tt(t[n]);if(!(i=null!=e&&a(e,l)))break;e=e[l]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&de(o)&&ve(l,o)&&(re(e)||ue(e))}(e,t,rt)}function ut(e,t,a,n){if(!pe(e))return e;for(var o=-1,i=(t=Ze(t,e)).length,l=i-1,r=e;null!=r&&++o<i;){var s=tt(t[o]),u=a;if("__proto__"===s||"constructor"===s||"prototype"===s)return e;if(o!=l){var c=r[s];void 0===(u=void 0)&&(u=pe(c)?c:ve(t[o+1])?[]:{})}Se(r,s,u),r=r[s]}return e}function ct(e,t){return function(e,t,a){for(var n=-1,o=t.length,i={};++n<o;){var l=t[n],r=at(e,l);a(r,l)&&ut(i,Ze(l,e),r)}return i}(e,t,(function(t,a){return st(e,a)}))}var dt=lt((function(e,t){return null==e?{}:ct(e,t)}));function vt(e){const t=a([]),o=a("function"==typeof e?e():e),i=function(e){const t=a(),o=a(!1);return n((()=>{o.value=!0,be.cancel(t.value)})),function(){for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];o.value||(be.cancel(t.value),t.value=be((()=>{e(...n)})))}}((()=>{let e=o.value;t.value.forEach((t=>{e=t(e)})),t.value=[],o.value=e}));return[o,function(e){t.value.push(e),i()}]}const pt=o({compatConfig:{MODE:3},name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup(e,t){let{expose:a,attrs:n}=t;const o=i();function u(t){var a;(null===(a=e.tab)||void 0===a?void 0:a.disabled)||e.onClick(t)}a({domRef:o});const c=l((()=>{var t;return e.editable&&!1!==e.closable&&!(null===(t=e.tab)||void 0===t?void 0:t.disabled)}));return()=>{var t;const{prefixCls:a,id:i,active:l,tab:{key:d,tab:v,disabled:p,closeIcon:b},renderWrapper:f,removeAriaLabel:h,editable:g,onFocus:$}=e,m=`${a}-tab`,y=r("div",{key:d,ref:o,class:s(m,{[`${m}-with-remove`]:c.value,[`${m}-active`]:l,[`${m}-disabled`]:p}),style:n.style,onClick:u},[r("div",{role:"tab","aria-selected":l,id:i&&`${i}-tab-${d}`,class:`${m}-btn`,"aria-controls":i&&`${i}-panel-${d}`,"aria-disabled":p,tabindex:p?null:0,onClick:e=>{e.stopPropagation(),u(e)},onKeydown:e=>{[he.SPACE,he.ENTER].includes(e.which)&&(e.preventDefault(),u(e))},onFocus:$},["function"==typeof v?v():v]),c.value&&r("button",{type:"button","aria-label":h||"remove",tabindex:0,class:`${m}-remove`,onClick:t=>{t.stopPropagation(),function(t){var a;t.preventDefault(),t.stopPropagation(),e.editable.onEdit("remove",{key:null===(a=e.tab)||void 0===a?void 0:a.key,event:t})}(t)}},[(null==b?void 0:b())||(null===(t=g.removeIcon)||void 0===t?void 0:t.call(g))||"×"])]);return f?f(y):y}}}),bt={width:0,height:0,left:0,top:0},ft=o({compatConfig:{MODE:3},name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup(e,t){let{expose:a,attrs:n}=t;const o=i();return a({domRef:o}),()=>{const{prefixCls:t,editable:a,locale:i}=e;return a&&!1!==a.showAdd?r("button",{ref:o,type:"button",class:`${t}-nav-add`,style:n.style,"aria-label":(null==i?void 0:i.addAriaLabel)||"Add tab",onClick:e=>{a.onEdit("add",{event:e})}},[a.addIcon?a.addIcon():"+"]):null}}}),ht={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:p.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function},popupClassName:String,getPopupContainer:b()},gt=o({compatConfig:{MODE:3},name:"OperationNode",inheritAttrs:!1,props:ht,emits:["tabClick"],slots:Object,setup(e,t){let{attrs:a,slots:n}=t;const[o,i]=_e(!1),[u,c]=_e(null),p=t=>{const a=e.tabs.filter((e=>!e.disabled));let n=a.findIndex((e=>e.key===u.value))||0;const o=a.length;for(let e=0;e<o;e+=1){n=(n+t+o)%o;const e=a[n];if(!e.disabled)return void c(e.key)}},b=t=>{const{which:a}=t;if(o.value)switch(a){case he.UP:p(-1),t.preventDefault();break;case he.DOWN:p(1),t.preventDefault();break;case he.ESC:i(!1);break;case he.SPACE:case he.ENTER:null!==u.value&&e.onTabClick(u.value,t)}else[he.DOWN,he.SPACE,he.ENTER].includes(a)&&(i(!0),t.preventDefault())},f=l((()=>`${e.id}-more-popup`)),h=l((()=>null!==u.value?`${f.value}-${u.value}`:null));return d((()=>{v(u,(()=>{const e=document.getElementById(h.value);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),{flush:"post",immediate:!0})})),v(o,(()=>{o.value||c(null)})),$e({}),()=>{var t;const{prefixCls:l,id:c,tabs:d,locale:v,mobile:p,moreIcon:g=(null===(t=n.moreIcon)||void 0===t?void 0:t.call(n))||r(me,null,null),moreTransitionName:$,editable:m,tabBarGutter:y,rtl:k,onTabClick:x,popupClassName:_}=e;if(!d.length)return null;const C=`${l}-dropdown`,w=null==v?void 0:v.dropdownAriaLabel,S={[k?"marginRight":"marginLeft"]:y};d.length||(S.visibility="hidden",S.order=1);const T=s({[`${C}-rtl`]:k,[`${_}`]:!0}),P=p?null:r(xe,{prefixCls:C,trigger:["hover"],visible:o.value,transitionName:$,onVisibleChange:i,overlayClassName:T,mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:e.getPopupContainer},{overlay:()=>r(ye,{onClick:e=>{let{key:t,domEvent:a}=e;x(t,a),i(!1)},id:f.value,tabindex:-1,role:"listbox","aria-activedescendant":h.value,selectedKeys:[u.value],"aria-label":void 0!==w?w:"expanded dropdown"},{default:()=>[d.map((t=>{var a,n;const o=m&&!1!==t.closable&&!t.disabled;return r(ke,{key:t.key,id:`${f.value}-${t.key}`,role:"option","aria-controls":c&&`${c}-panel-${t.key}`,disabled:t.disabled},{default:()=>[r("span",null,["function"==typeof t.tab?t.tab():t.tab]),o&&r("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:`${C}-menu-item-remove`,onClick:a=>{var n,o;a.stopPropagation(),n=a,o=t.key,n.preventDefault(),n.stopPropagation(),e.editable.onEdit("remove",{key:o,event:n})}},[(null===(a=t.closeIcon)||void 0===a?void 0:a.call(t))||(null===(n=m.removeIcon)||void 0===n?void 0:n.call(m))||"×"])]})}))]}),default:()=>r("button",{type:"button",class:`${l}-nav-more`,style:S,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":f.value,id:`${c}-more`,"aria-expanded":o.value,onKeydown:b},[g])});return r("div",{class:s(`${l}-nav-operations`,a.class),style:a.style},[P,r(ft,{prefixCls:l,locale:v,editable:m},null)])}}}),$t=Symbol("tabsContextKey"),mt=()=>h($t,{tabs:i([]),prefixCls:i()}),yt=Math.pow(.995,20);function kt(e,t){const a=i(e);return[a,function(e){const n="function"==typeof e?e(a.value):e;n!==a.value&&t(n,a.value),a.value=n}]}const xt={width:0,height:0,left:0,top:0,right:0},_t=o({compatConfig:{MODE:3},name:"TabNavList",inheritAttrs:!1,props:{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:y(),editable:y(),moreIcon:p.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:y(),popupClassName:String,getPopupContainer:b(),onTabClick:{type:Function},onTabScroll:{type:Function}},slots:Object,emits:["tabClick","tabScroll"],setup(e,t){let{attrs:o,slots:p}=t;const{tabs:b,prefixCls:f}=mt(),h=a(),y=a(),k=a(),x=a(),[_,C]=(()=>{const e=i(new Map);return g((()=>{e.value=new Map})),[t=>a=>{e.value.set(t,a)},e]})(),w=l((()=>"top"===e.tabPosition||"bottom"===e.tabPosition)),[S,T]=kt(0,((t,a)=>{w.value&&e.onTabScroll&&e.onTabScroll({direction:t>a?"left":"right"})})),[P,B]=kt(0,((t,a)=>{!w.value&&e.onTabScroll&&e.onTabScroll({direction:t>a?"top":"bottom"})})),[E,R]=_e(0),[L,D]=_e(0),[A,I]=_e(null),[O,M]=_e(null),[j,G]=_e(0),[H,N]=_e(0),[z,K]=vt(new Map),W=function(e,t){const a=i(new Map);return u((()=>{var n,o;const i=new Map,l=e.value,r=t.value.get(null===(n=l[0])||void 0===n?void 0:n.key)||bt,s=r.left+r.width;for(let e=0;e<l.length;e+=1){const{key:a}=l[e];let n=t.value.get(a);n||(n=t.value.get(null===(o=l[e-1])||void 0===o?void 0:o.key)||bt);const r=i.get(a)||c({},n);r.right=s-r.left-r.width,i.set(a,r)}a.value=new Map(i)})),a}(b,z),X=l((()=>`${f.value}-nav-operations-hidden`)),F=a(0),q=a(0);u((()=>{w.value?e.rtl?(F.value=0,q.value=Math.max(0,E.value-A.value)):(F.value=Math.min(0,A.value-E.value),q.value=0):(F.value=Math.min(0,O.value-L.value),q.value=0)}));const Y=e=>e<F.value?F.value:e>q.value?q.value:e,V=a(),[U,J]=_e(),Q=()=>{J(Date.now())},Z=()=>{clearTimeout(V.value)},ee=(e,t)=>{e((e=>Y(e+t)))};!function(e,t){const[a,o]=_e(),[l,r]=_e(0),[s,u]=_e(0),[c,v]=_e(),p=i(),b=i(),f=i({onTouchStart:function(e){const{screenX:t,screenY:a}=e.touches[0];o({x:t,y:a}),clearInterval(p.value)},onTouchMove:function(e){if(!a.value)return;e.preventDefault();const{screenX:n,screenY:i}=e.touches[0],s=n-a.value.x,c=i-a.value.y;t(s,c),o({x:n,y:i});const d=Date.now();u(d-l.value),r(d),v({x:s,y:c})},onTouchEnd:function(){if(!a.value)return;const e=c.value;if(o(null),v(null),e){const a=e.x/s.value,n=e.y/s.value,o=Math.abs(a),i=Math.abs(n);if(Math.max(o,i)<.1)return;let l=a,r=n;p.value=setInterval((()=>{Math.abs(l)<.01&&Math.abs(r)<.01?clearInterval(p.value):(l*=yt,r*=yt,t(20*l,20*r))}),20)}},onWheel:function(e){const{deltaX:a,deltaY:n}=e;let o=0;const i=Math.abs(a),l=Math.abs(n);i===l?o="x"===b.value?a:n:i>l?(o=a,b.value="x"):(o=n,b.value="y"),t(-o,-o)&&e.preventDefault()}});function h(e){f.value.onTouchStart(e)}function g(e){f.value.onTouchMove(e)}function $(e){f.value.onTouchEnd(e)}function m(e){f.value.onWheel(e)}d((()=>{var t,a;document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",$,{passive:!1}),null===(t=e.value)||void 0===t||t.addEventListener("touchstart",h,{passive:!1}),null===(a=e.value)||void 0===a||a.addEventListener("wheel",m,{passive:!1})})),n((()=>{document.removeEventListener("touchmove",g),document.removeEventListener("touchend",$)}))}(h,((e,t)=>{if(w.value){if(A.value>=E.value)return!1;ee(T,e)}else{if(O.value>=L.value)return!1;ee(B,t)}return Z(),Q(),!0})),v(U,(()=>{Z(),U.value&&(V.value=setTimeout((()=>{J(0)}),100))}));const te=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activeKey;const a=W.value.get(t)||{width:0,height:0,left:0,right:0,top:0};if(w.value){let t=S.value;e.rtl?a.right<S.value?t=a.right:a.right+a.width>S.value+A.value&&(t=a.right+a.width-A.value):a.left<-S.value?t=-a.left:a.left+a.width>-S.value+A.value&&(t=-(a.left+a.width-A.value)),B(0),T(Y(t))}else{let e=P.value;a.top<-P.value?e=-a.top:a.top+a.height>-P.value+O.value&&(e=-(a.top+a.height-O.value)),T(0),B(Y(e))}},ae=a(0),ne=a(0);u((()=>{let t,a,n,o,i,l;const r=W.value;["top","bottom"].includes(e.tabPosition)?(t="width",o=A.value,i=E.value,l=j.value,a=e.rtl?"right":"left",n=Math.abs(S.value)):(t="height",o=O.value,i=E.value,l=H.value,a="top",n=-P.value);let s=o;i+l>o&&i<o&&(s=o-l);const u=b.value;if(!u.length)return[ae.value,ne.value]=[0,0];const c=u.length;let d=c;for(let e=0;e<c;e+=1){const o=r.get(u[e].key)||xt;if(o[a]+o[t]>n+s){d=e-1;break}}let v=0;for(let e=c-1;e>=0;e-=1)if((r.get(u[e].key)||xt)[a]<n){v=e+1;break}return[ae.value,ne.value]=[v,d]}));const oe=()=>{K((()=>{var e;const t=new Map,a=null===(e=y.value)||void 0===e?void 0:e.getBoundingClientRect();return b.value.forEach((e=>{let{key:n}=e;const o=C.value.get(n),i=(null==o?void 0:o.$el)||o;if(i){const[e,o,l,r]=((e,t)=>{const{offsetWidth:a,offsetHeight:n,offsetTop:o,offsetLeft:i}=e,{width:l,height:r,x:s,y:u}=e.getBoundingClientRect();return Math.abs(l-a)<1?[l,r,s-t.x,u-t.y]:[a,n,i,o]})(i,a);t.set(n,{width:e,height:o,left:l,top:r})}})),t}))};v((()=>b.value.map((e=>e.key)).join("%%")),(()=>{oe()}),{flush:"post"});const ie=()=>{var e,t,a,n,o;const i=(null===(e=h.value)||void 0===e?void 0:e.offsetWidth)||0,l=(null===(t=h.value)||void 0===t?void 0:t.offsetHeight)||0,r=(null===(a=x.value)||void 0===a?void 0:a.$el)||{},s=r.offsetWidth||0,u=r.offsetHeight||0;I(i),M(l),G(s),N(u);const c=((null===(n=y.value)||void 0===n?void 0:n.offsetWidth)||0)-s,d=((null===(o=y.value)||void 0===o?void 0:o.offsetHeight)||0)-u;R(c),D(d),oe()},le=l((()=>[...b.value.slice(0,ae.value),...b.value.slice(ne.value+1)])),[re,se]=_e(),ue=l((()=>W.value.get(e.activeKey))),ce=a(),de=()=>{be.cancel(ce.value)};v([ue,w,()=>e.rtl],(()=>{const t={};ue.value&&(w.value?(e.rtl?t.right=$(ue.value.right):t.left=$(ue.value.left),t.width=$(ue.value.width)):(t.top=$(ue.value.top),t.height=$(ue.value.height))),de(),ce.value=be((()=>{se(t)}))})),v([()=>e.activeKey,ue,W,w],(()=>{te()}),{flush:"post"}),v([()=>e.rtl,()=>e.tabBarGutter,()=>e.activeKey,()=>b.value],(()=>{ie()}),{flush:"post"});const ve=e=>{let{position:t,prefixCls:a,extra:n}=e;if(!n)return null;const o=null==n?void 0:n({position:t});return o?r("div",{class:`${a}-extra-content`},[o]):null};return n((()=>{Z(),de()})),()=>{const{id:t,animated:a,activeKey:n,rtl:i,editable:l,locale:u,tabPosition:d,tabBarGutter:v,onTabClick:g}=e,{class:$,style:C}=o,T=f.value,B=!!le.value.length,R=`${T}-nav-wrap`;let D,I,M,j;w.value?i?(I=S.value>0,D=S.value+A.value<E.value):(D=S.value<0,I=-S.value+A.value<E.value):(M=P.value<0,j=-P.value+O.value<L.value);const G={};"top"===d||"bottom"===d?G[i?"marginRight":"marginLeft"]="number"==typeof v?`${v}px`:v:G.marginTop="number"==typeof v?`${v}px`:v;const H=b.value.map(((e,a)=>{const{key:o}=e;return r(pt,{id:t,prefixCls:T,key:o,tab:e,style:0===a?void 0:G,closable:e.closable,editable:l,active:o===n,removeAriaLabel:null==u?void 0:u.removeAriaLabel,ref:_(o),onClick:e=>{g(o,e)},onFocus:()=>{te(o),Q(),h.value&&(i||(h.value.scrollLeft=0),h.value.scrollTop=0)}},p)}));return r("div",{role:"tablist",class:s(`${T}-nav`,$),style:C,onKeydown:()=>{Q()}},[r(ve,{position:"left",prefixCls:T,extra:p.leftExtra},null),r(Ce,{onResize:ie},{default:()=>[r("div",{class:s(R,{[`${R}-ping-left`]:D,[`${R}-ping-right`]:I,[`${R}-ping-top`]:M,[`${R}-ping-bottom`]:j}),ref:h},[r(Ce,{onResize:ie},{default:()=>[r("div",{ref:y,class:`${T}-nav-list`,style:{transform:`translate(${S.value}px, ${P.value}px)`,transition:U.value?"none":void 0}},[H,r(ft,{ref:x,prefixCls:T,locale:u,editable:l,style:c(c({},0===H.length?void 0:G),{visibility:B?"hidden":null})},null),r("div",{class:s(`${T}-ink-bar`,{[`${T}-ink-bar-animated`]:a.inkBar}),style:re.value},null)])]})])]}),r(gt,m(m({},e),{},{removeAriaLabel:null==u?void 0:u.removeAriaLabel,ref:k,prefixCls:T,tabs:le.value,class:!B&&X.value}),dt(p,["moreIcon"])),r(ve,{position:"right",prefixCls:T,extra:p.rightExtra},null),r(ve,{position:"right",prefixCls:T,extra:p.tabBarExtraContent},null)])}}}),Ct=o({compatConfig:{MODE:3},name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup(e){const{tabs:t,prefixCls:a}=mt();return()=>{const{id:n,activeKey:o,animated:i,tabPosition:l,rtl:s,destroyInactiveTabPane:u}=e,c=i.tabPane,d=a.value,v=t.value.findIndex((e=>e.key===o));return r("div",{class:`${d}-content-holder`},[r("div",{class:[`${d}-content`,`${d}-content-${l}`,{[`${d}-content-animated`]:c}],style:v&&c?{[s?"marginRight":"marginLeft"]:`-${v}00%`}:null},[t.value.map((e=>fe(e.node,{key:e.key,prefixCls:d,tabKey:e.key,id:n,animated:c,active:e.key===o,destroyInactiveTabPane:u})))])])}}});var wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function St(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Tt(e,t,a[t])}))}return e}function Tt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Pt=function(e,t){var a=St({},e,t.attrs);return r(k,St({},a,{icon:wt}),null)};Pt.displayName="PlusOutlined",Pt.inheritAttrs=!1;const Bt=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[Re(e,"slide-up"),Re(e,"slide-down")]]},Et=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:n,tabsCardGutter:o,colorSplit:i}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:n,border:`${e.lineWidth}px ${e.lineType} ${i}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${o}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${o}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Rt=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:n}=e;return{[`${t}-dropdown`]:c(c({},w(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${n}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":c(c({},C),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Lt=e=>{const{componentCls:t,margin:a,colorSplit:n}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${n}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,\n        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:1.25*e.controlHeight,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Dt=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${1.5*e.paddingXXS}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${1.5*e.paddingXXS}px`}}}}}},At=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:n,iconCls:o,tabsHorizontalGutter:i}=e,l=`${t}-tab`;return{[l]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":c({"&:focus:not(:focus-visible), &:active":{color:a}},S(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:n},[`&${l}-active ${l}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${l}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${l}-remove ${o}`]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${l} + ${l}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${i}px`}}}},It=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:n,tabsCardGutter:o}=e,i=`${t}-rtl`;return{[i]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[n]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[n]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${o}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ot=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:n,tabsCardGutter:o,tabsHoverColor:i,tabsActiveColor:l,colorSplit:r}=e;return{[t]:c(c(c(c({},w(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:c({minWidth:`${n}px`,marginLeft:{_skip_check_:!0,value:`${o}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${r}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:i},"&:active, &:focus:not(:focus-visible)":{color:l}},S(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),At(e)),{[`${t}-content`]:{position:"relative",display:"flex",width:"100%","&-animated":{transition:"margin 0.3s"}},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none",flex:"none",width:"100%"}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},Mt=x("Tabs",(e=>{const t=e.controlHeightLG,a=_(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[Dt(a),It(a),Lt(a),Rt(a),Et(a),Ot(a),Bt(a)]}),(e=>({zIndexPopup:e.zIndexPopupBase+50})));let jt=0;const Gt=()=>({prefixCls:{type:String},id:{type:String},popupClassName:String,getPopupContainer:b(),activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:E(),animated:R([Boolean,Object]),renderTabBar:b(),tabBarGutter:{type:Number},tabBarStyle:y(),tabPosition:E(),destroyInactiveTabPane:L(),hideAdd:Boolean,type:E(),size:E(),centered:Boolean,onEdit:b(),onChange:b(),onTabClick:b(),onTabScroll:b(),"onUpdate:activeKey":b(),locale:y(),onPrevClick:b(),onNextClick:b(),tabBarExtraContent:p.any}),Ht=o({compatConfig:{MODE:3},name:"InternalTabs",inheritAttrs:!1,props:c(c({},T(Gt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:I()}),slots:Object,setup(e,t){let{attrs:a,slots:n}=t;Be(!(void 0!==e.onPrevClick||void 0!==e.onNextClick),"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Be(!(void 0!==e.tabBarExtraContent),"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Be(!(void 0!==n.tabBarExtraContent),"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");const{prefixCls:o,direction:i,size:v,rootPrefixCls:p,getPopupContainer:b}=O("tabs",e),[h,g]=Mt(o),$=l((()=>"rtl"===i.value)),y=l((()=>{const{animated:t,tabPosition:a}=e;return!1===t||["left","right"].includes(a)?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!0}:c({inkBar:!0,tabPane:!1},"object"==typeof t?t:{})})),[k,x]=_e(!1);d((()=>{x(Te())}));const[_,C]=Pe((()=>{var t;return null===(t=e.tabs[0])||void 0===t?void 0:t.key}),{value:l((()=>e.activeKey)),defaultValue:e.defaultActiveKey}),[w,S]=_e((()=>e.tabs.findIndex((e=>e.key===_.value))));u((()=>{var t;let a=e.tabs.findIndex((e=>e.key===_.value));-1===a&&(a=Math.max(0,Math.min(w.value,e.tabs.length-1)),C(null===(t=e.tabs[a])||void 0===t?void 0:t.key)),S(a)}));const[T,P]=Pe(null,{value:l((()=>e.id))}),B=l((()=>k.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition));d((()=>{e.id||(P(`rc-tabs-${jt}`),jt+=1)}));const E=(t,a)=>{var n,o;null===(n=e.onTabClick)||void 0===n||n.call(e,t,a);const i=t!==_.value;C(t),i&&(null===(o=e.onChange)||void 0===o||o.call(e,t))};return(e=>{f($t,e)})({tabs:l((()=>e.tabs)),prefixCls:o}),()=>{const{id:t,type:i,tabBarGutter:l,tabBarStyle:u,locale:d,destroyInactiveTabPane:f,renderTabBar:x=n.renderTabBar,onTabScroll:C,hideAdd:w,centered:S}=e,P={id:T.value,activeKey:_.value,animated:y.value,tabPosition:B.value,rtl:$.value,mobile:k.value};let R,L;"editable-card"===i&&(R={onEdit:(t,a)=>{let{key:n,event:o}=a;var i;null===(i=e.onEdit)||void 0===i||i.call(e,"add"===t?o:n,t)},removeIcon:()=>r(M,null,null),addIcon:n.addIcon?n.addIcon:()=>r(Pt,null,null),showAdd:!0!==w});const D=c(c({},P),{moreTransitionName:`${p.value}-slide-up`,editable:R,locale:d,tabBarGutter:l,onTabClick:E,onTabScroll:C,style:u,getPopupContainer:b.value,popupClassName:s(e.popupClassName,g.value)});L=x?x(c(c({},D),{DefaultTabBar:_t})):r(_t,D,dt(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));const A=o.value;return h(r("div",m(m({},a),{},{id:t,class:s(A,`${A}-${B.value}`,{[g.value]:!0,[`${A}-${v.value}`]:v.value,[`${A}-card`]:["card","editable-card"].includes(i),[`${A}-editable-card`]:"editable-card"===i,[`${A}-centered`]:S,[`${A}-mobile`]:k.value,[`${A}-editable`]:"editable-card"===i,[`${A}-rtl`]:$.value},a.class)}),[L,r(Ct,m(m({destroyInactiveTabPane:f},P),{},{animated:y.value}),null)]))}}}),Nt=e("T",o({compatConfig:{MODE:3},name:"ATabs",inheritAttrs:!1,props:T(Gt(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:Object,setup(e,t){let{attrs:a,slots:n,emit:o}=t;const i=e=>{o("update:activeKey",e),o("change",e)};return()=>{var t;const o=P(null===(t=n.default)||void 0===t?void 0:t.call(n)).map((e=>{if(D(e)){const t=c({},e.props||{});for(const[e,c]of Object.entries(t))delete t[e],t[A(e)]=c;const a=e.children||{},n=void 0!==e.key?e.key:void 0,{tab:o=a.tab,disabled:i,forceRender:l,closable:r,animated:s,active:u,destroyInactiveTabPane:d}=t;return c(c({key:n},t),{node:e,closeIcon:a.closeIcon,tab:o,disabled:""===i||i,forceRender:""===l||l,closable:""===r||r,animated:""===s||s,active:""===u||u,destroyInactiveTabPane:""===d||d})}return null})).filter((e=>e));return r(Ht,m(m(m({},B(e,["onUpdate:activeKey"])),a),{},{onChange:i,tabs:o}),n)}}})),zt=e("A",o({compatConfig:{MODE:3},name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:{tab:p.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}},slots:Object,setup(e,t){let{attrs:a,slots:n}=t;const o=i(e.forceRender);v([()=>e.active,()=>e.destroyInactiveTabPane],(()=>{e.active?o.value=!0:e.destroyInactiveTabPane&&(o.value=!1)}),{immediate:!0});const s=l((()=>e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}));return()=>{var t;const{prefixCls:i,forceRender:l,id:u,active:c,tabKey:d}=e;return r("div",{id:u&&`${u}-panel-${d}`,role:"tabpanel",tabindex:c?0:-1,"aria-labelledby":u&&`${u}-tab-${d}`,"aria-hidden":!c,style:[s.value,a.style],class:[`${i}-tabpane`,c&&`${i}-tabpane-active`,a.class]},[(c||o.value||l)&&(null===(t=n.default)||void 0===t?void 0:t.call(n))])}}}));Nt.TabPane=zt,Nt.install=function(e){return e.component(Nt.name,Nt),e.component(zt.name,zt),e};const Kt={key:0},Wt={key:1},Xt=V("hr",null,null,-1),Ft=V("br",null,null,-1);e("_",o({__name:"ChildTabs",props:{parentData:{type:Object,required:!0},parentTab:{type:String,required:!0}},emits:["fieldData"],setup(e,{emit:t}){var a,n,o;const l=e,{parentData:s,parentTab:u}=j(l),c=ae(),{isLoading:d,externalLinks:v}=G(c),p=s,b=i(window.lodash.sortBy(p.value,(e=>e.sort))),f=u,h=H("tab-child"),g=i(null!==(a=null===(n=Object.values(b.value))||void 0===n?void 0:n[0])&&void 0!==a?a:""),$=i(null!==(o=null!=h?h:g.value.key)&&void 0!==o?o:""),m=i([]),y=t,k=e=>{Object.entries(e).forEach((([e,t])=>{m.value[e]=t})),y("fieldData",m.value)},x=(e,t)=>{const a=i(void 0!==t.link),n=i(!!t.external).value?"_blank":"_self",o=i(null!=t&&t.with_background?"tab-with-bg":"");return a.value?(e in v.value||(v.value[e]=t.link),ee("a",{class:"tab-child-item",href:t.link,target:n},t.label)):ee("span",{class:"tab-child-item "+o.value},t.label)};return(e,t)=>(N(),z(q(Nt),{activeKey:$.value,"onUpdate:activeKey":t[0]||(t[0]=e=>$.value=e),"tab-position":"left","destroy-inactive-tab-pane":!0,onChange:t[1]||(t[1]=e=>{var t;(t=$.value)in v.value||(te("tab-child",t),$.value=t)})},{default:K((()=>[(N(!0),W(X,null,F(b.value,(e=>(N(),z(q(zt),{key:e.key,"force-render":!0,class:Y("wwp-child-tab"),tab:x(e.key,e)},{default:K((()=>[null!=(null==e?void 0:e.link)?(N(),W("div",Kt,[V("h3",null,U(q(J)("redirectLoading",q(wp.i18n.__)("You are redirecting to a page. Please wait...","woocommerce-wholesale-prices"))),1)])):(N(),W("div",Wt,[V("h3",null,U(e.label),1),Xt,r(ne,{"parent-tab":q(f),"child-tab":e.key,"section-data":e.sections,onFieldData:k},null,8,["parent-tab","child-tab","section-data"]),Ft,!0!==e.no_save?(N(),z(q(Ee),{key:0,type:"primary","html-type":"submit",class:"wwp-settings-save-btn",loading:q(d)},{default:K((()=>[Q(U(q(J)("submitText",q(wp.i18n.__)("Save Changes","woocommerce-wholesale-prices"))),1)])),_:1},8,["loading"])):Z("",!0),null!=(null==e?void 0:e.show_unlock_upgrade)?(N(),z(oe,{key:1})):Z("",!0),null!=(null==e?void 0:e.show_free_guide)?(N(),z(ie,{key:2})):Z("",!0)]))])),_:2},1032,["tab"])))),128))])),_:1},8,["activeKey"]))}}))}}}));
