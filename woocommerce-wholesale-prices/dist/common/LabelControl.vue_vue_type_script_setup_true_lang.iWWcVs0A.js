import{b as s,a0 as p,d as f,t as m,r as d,o,c as i,a as b,h as g,u as c,w as h,i as v,U as _}from"../apps/settings/index.d4AqeQbB.js";import{A as C}from"./index.Bzxotkow.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 00-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"}}]},name:"question-circle",theme:"filled"};function u(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.forEach(function(n){y(r,n,t[n])})}return r}function y(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var l=function(e,t){var a=u({},e,t.attrs);return s(p,u({},a,{icon:O}),null)};l.displayName="QuestionCircleFilled";l.inheritAttrs=!1;const w={key:0,class:"wwp-tooltip"},V=f({__name:"LabelControl",props:{params:{type:Object,required:!0}},setup(r){const e=r,{params:t}=m(e),a=t.value,n=d(a.desc_tip?a.desc_tip:"");return(j,F)=>(o(),i(_,null,[b("h5",null,g(c(a).label),1),n.value!==""?(o(),i("div",w,[s(c(C),{placement:"topRight",title:n.value},{default:h(()=>[s(c(l))]),_:1},8,["title"])])):v("",!0)],64))}});export{V as _};
