import{_ as i}from"../apps/settings/index.BHjzb07a.js";const l="accept acceptcharset accesskey action allowfullscreen allowtransparency\nalt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge\ncharset checked classid classname colspan cols content contenteditable contextmenu\ncontrols coords crossorigin data datetime default defer dir disabled download draggable\nenctype form formaction formenctype formmethod formnovalidate formtarget frameborder\nheaders height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity\nis keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media\nmediagroup method min minlength multiple muted name novalidate nonce open\noptimum pattern placeholder poster preload radiogroup readonly rel required\nreversed role rowspan rows sandbox scope scoped scrolling seamless selected\nshape size sizes span spellcheck src srcdoc srclang srcset start step style\nsummary tabindex target title type usemap value width wmode wrap",c="onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown\n    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick\n    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown\n    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel\n    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough\n    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata\n    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError",r="".concat(l," ").concat(c).split(/[\s\n]+/),d="aria-",u="data-";function s(a,n){return a.indexOf(n)===0}function m(a){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o;n===!1?o={aria:!0,data:!0,attr:!0}:n===!0?o={aria:!0}:o=i({},n);const t={};return Object.keys(a).forEach(e=>{(o.aria&&(e==="role"||s(e,d))||o.data&&s(e,u)||o.attr&&(r.includes(e)||r.includes(e.toLowerCase())))&&(t[e]=a[e])}),t}export{m as p};
