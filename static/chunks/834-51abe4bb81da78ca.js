(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{5565:(e,t,n)=>{"use strict";n.d(t,{default:()=>i.a});var s=n(4146),i=n.n(s)},7396:(e,t,n)=>{"use strict";n.d(t,{default:()=>i.a});var s=n(4839),i=n.n(s)},7970:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});let s=n(306),i=n(9955),r=n(5155),o=i._(n(2115)),a=s._(n(7650)),u=s._(n(6107)),l=n(666),c=n(1159),d=n(3621);n(2363);let p=n(3576),f=s._(n(5514)),h=n(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,s,i,r,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==s?void 0:s.current)&&s.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:s,sizes:i,height:a,width:u,decoding:l,className:c,style:d,fetchPriority:p,placeholder:f,loading:g,unoptimized:b,fill:v,onLoadRef:C,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:P,sizesInput:_,onLoad:k,onError:O,...x}=e,j=(0,o.useCallback)(e=>{e&&(O&&(e.src=e.src),e.complete&&m(e,f,C,w,S,b,_))},[n,f,C,w,S,O,b,_]),E=(0,h.useMergedRef)(t,j);return(0,r.jsx)("img",{...x,...y(p),loading:g,width:u,height:a,decoding:l,"data-nimg":v?"fill":"1",className:c,style:d,sizes:i,srcSet:s,src:n,ref:E,onLoad:e=>{m(e.currentTarget,f,C,w,S,b,_)},onError:e=>{P(!0),"empty"!==f&&S(!0),O&&O(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,s={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...y(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,s),null):(0,r.jsx)(u.default,{children:(0,r.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...s},"__nimg-"+n.src+n.srcSet+n.sizes)})}let C=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(p.RouterContext),s=(0,o.useContext)(d.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=g||s||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[s]),{onLoad:a,onLoadingComplete:u}=e,h=(0,o.useRef)(a);(0,o.useEffect)(()=>{h.current=a},[a]);let m=(0,o.useRef)(u);(0,o.useEffect)(()=>{m.current=u},[u]);let[y,C]=(0,o.useState)(!1),[w,S]=(0,o.useState)(!1),{props:P,meta:_}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:y,showAltText:w});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{...P,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:C,setShowAltText:S,sizesInput:e.sizes,ref:t}),_.priority?(0,r.jsx)(v,{isAppRouter:!n,imgAttributes:P}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return s}});let s=n(306)._(n(2115)).default.createContext({})},675:(e,t)=>{"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:s=!1}=void 0===e?{}:e;return t||n&&s}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(2363);let s=n(5859),i=n(1159);function r(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,l,{src:c,sizes:d,unoptimized:p=!1,priority:f=!1,loading:h,className:g,quality:m,width:y,height:b,fill:v=!1,style:C,overrideSrc:w,onLoad:S,onLoadingComplete:P,placeholder:_="empty",blurDataURL:k,fetchPriority:O,decoding:x="async",layout:j,objectFit:E,objectPosition:T,lazyBoundary:I,lazyRoot:M,...A}=e,{imgConf:z,showAltText:B,blurComplete:L,defaultLoader:D}=t,N=z||i.imageConfigDefault;if("allSizes"in N)a=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);a={...N,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let R=A.loader||D;delete A.loader,delete A.srcSet;let F="__next_img_default"in R;if(F){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:n,...s}=t;return e(s)}}if(j){"fill"===j&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!d&&(d=t)}let q="",H=o(y),U=o(b);if((n=c)&&"object"==typeof n&&(r(n)||void 0!==n.src)){let e=r(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,l=e.blurHeight,k=k||e.blurDataURL,q=e.src,!v){if(H||U){if(H&&!U){let t=H/e.width;U=Math.round(e.height*t)}else if(!H&&U){let t=U/e.height;H=Math.round(e.width*t)}}else H=e.width,U=e.height}}let G=!f&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,G=!1),a.unoptimized&&(p=!0),F&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0);let W=o(m),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:T}:{},B?{}:{color:"transparent"},C),Y=L||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:H,heightInt:U,blurWidth:u,blurHeight:l,blurDataURL:k||"",objectFit:V.objectFit})+'")':'url("'+_+'")',$=Y?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function(e){let{config:t,src:n,unoptimized:s,width:i,quality:r,sizes:o,loader:a}=e;if(s)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(e,t,n){let{deviceSizes:s,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(n);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),c=u.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:u.map((e,s)=>a({config:t,src:n,quality:r,width:e})+" "+("w"===l?e:s+1)+l).join(", "),src:a({config:t,src:n,quality:r,width:u[c]})}}({config:a,src:c,unoptimized:p,width:H,quality:W,sizes:d,loader:R});return{props:{...A,loading:G?"lazy":h,fetchPriority:O,width:H,height:U,decoding:x,className:g,style:{...V,...$},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:p,priority:f,placeholder:_,fill:v}}}},6107:(e,t,n)=>{"use strict";var s=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return p}});let i=n(306),r=n(9955),o=n(5155),a=r._(n(2115)),u=i._(n(1172)),l=n(3003),c=n(1147),d=n(675);function p(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2363);let h=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(p(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,s={};return i=>{let r=!0,o=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){o=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?r=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?r=!1:n.add(t);else{let e=i.props[t],n=s[t]||new Set;("name"!==t||!o)&&n.has(e)?r=!1:(n.add(e),s[t]=n)}}}}return r}}()).reverse().map((e,t)=>{let i=e.key||t;if(s.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),s=(0,a.useContext)(c.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:g,headManager:s,inAmpMode:(0,d.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:s,blurHeight:i,blurDataURL:r,objectFit:o}=e,a=s?40*s:t,u=i?40*i:n,l=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+l+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(l?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3621:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let s=n(306)._(n(2115)),i=n(1159),r=s.default.createContext(i.imageConfigDefault)},1159:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},4146:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return u},getImageProps:function(){return a}});let s=n(306),i=n(666),r=n(7970),o=s._(n(5514));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let u=r.Image},5514:(e,t)=>{"use strict";function n(e){let{config:t,src:n,width:s,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+s+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),n.__next_img_default=!0;let s=n},1172:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let s=n(2115),i="undefined"==typeof window,r=i?()=>{}:s.useLayoutEffect,o=i?()=>{}:s.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let i=s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return r(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),r(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},489:()=>{},8825:(e,t,n)=>{"use strict";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}n.d(t,{A:()=>a});var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(e){},onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},r=new(function(){function e(){}var t=e.prototype;return t.load=function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=s({},i,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(e){return e.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim())}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},t.getCurrentElContent=function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent},t.appendCursorAnimationCss=function(e){var t="data-typed-js-cursor-css";if(e.showCursor&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},t.appendFadeOutAnimationCss=function(e){var t="data-typed-fadeout-js-css";if(e.fadeOut&&!document.querySelector("["+t+"]")){var n=document.createElement("style");n.setAttribute(t,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},e}()),o=new(function(){function e(){}var t=e.prototype;return t.typeHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s,i=e.substring(t).charAt(0);if("<"===i||"&"===i){for(s="<"===i?">":";";e.substring(t+1).charAt(0)!==s&&!(1+ ++t>e.length););t++}return t},t.backSpaceHtmlChars=function(e,t,n){if("html"!==n.contentType)return t;var s,i=e.substring(t).charAt(0);if(">"===i||";"===i){for(s=">"===i?"<":"&";e.substring(t-1).charAt(0)!==s&&!(--t<0););t--}return t},e}()),a=function(){function e(e,t){r.load(this,t,e),this.begin()}var t=e.prototype;return t.toggle=function(){this.pause.status?this.start():this.stop()},t.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},t.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},t.destroy=function(){this.reset(!1),this.options.onDestroy(this)},t.reset=function(e){void 0===e&&(e=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())},t.begin=function(){var e=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===e.strPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos):e.backspace(e.strings[e.sequence[e.arrayPos]],e.strPos)},this.startDelay)},t.typewrite=function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout(function(){t=o.typeHtmlChars(e,t,n);var s,r=0,a=e.substring(t);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(s=1+(a=/\d+/.exec(a)[0]).length,r=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+s),n.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==e.substring(t+i).charAt(0)&&(i++,!(t+i>e.length)););var u=e.substring(0,t),l=e.substring(u.length+1,t+i);e=u+l+e.substring(t+i+1),i--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},r)},s):this.setPauseStatus(e,t,!0)},t.keepTyping=function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=e.substring(0,t+=n);this.replaceText(s),this.typewrite(e,t)},t.doneTyping=function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(e,t)},this.backDelay))},t.backspace=function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){t=o.backSpaceHtmlChars(e,t,n);var s=e.substring(0,t);if(n.replaceText(s),n.smartBackspace){var i=n.strings[n.arrayPos+1];n.stopNum=i&&s===i.substring(0,t)?t:0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))},s)}else this.setPauseStatus(e,t,!1)},t.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},t.setPauseStatus=function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t},t.toggleBlinking=function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},t.humanizer=function(e){return Math.round(Math.random()*e/2)+e},t.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},t.initFadeOut=function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)},this.fadeOutDelay)},t.replaceText=function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e},t.bindFocusEvents=function(){var e=this;this.isInput&&(this.el.addEventListener("focus",function(t){e.stop()}),this.el.addEventListener("blur",function(t){e.el.value&&0!==e.el.value.length||e.start()}))},t.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},e}()}}]);