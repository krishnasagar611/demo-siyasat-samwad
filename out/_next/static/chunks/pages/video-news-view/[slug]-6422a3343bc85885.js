(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7196],{46273:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video-news-view/[slug]",function(){return n(44467)}])},28864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},noSSR:function(){return s}});let o=n(38754);n(85893),n(67294);let a=o._(n(56016));function r(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let n=a.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o={...o,...e});let l=(o={...o,...t}).loader;return(o.loadableGenerated&&(o={...o,...o.loadableGenerated},delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?n({...o,loader:()=>null!=l?l().then(r):Promise.resolve(r(()=>null))}):(delete o.webpack,delete o.modules,s(n,o))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},60572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let o=n(38754)._(n(67294)).default.createContext(null)},56016:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let o=n(38754)._(n(67294)),a=n(60572),r=[],s=[],l=!1;function i(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function i(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!l){let e=n.webpack?n.webpack():n.modules;e&&s.push(t=>{for(let n of e)if(t.includes(n))return i()})}function u(e,t){!function(){i();let e=o.default.useContext(a.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let s=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>{var t;return s.loading||s.error?o.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?o.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return u.preload=()=>i(),u.displayName="LoadableComponent",o.default.forwardRef(u)}(i,e)}function c(e,t){let n=[];for(;e.length;){let o=e.pop();n.push(o(t))}return Promise.all(n).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(r).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(l=!0,t());c(s,e).then(n,n)})),window.__NEXT_PRELOADREADY=u.preloadReady;let m=u},58622:function(e,t,n){"use strict";var o=n(85893),a=n(9008),r=n.n(a);t.Z=e=>{let{title:t,description:n,keywords:a,ogImage:s,pathName:l,schema:i}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r(),{children:[(0,o.jsx)("title",{children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{name:"name",content:"https://devserver.siyasatsamwad.com"}),(0,o.jsx)("meta",{name:"description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{name:"keywords",content:a||"Breaking news,Top stories,Headlines,Current events,Latest news,World news,National news,Local news,Politics,Business,Technology,Entertainment,Sports,Health,Science,Environment,Education,Crime,Immigration,Weather."}),(0,o.jsx)("meta",{name:"image",content:s||null}),(0,o.jsx)("meta",{property:"og:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{property:"og:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{property:"og:image",content:s||null}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,o.jsx)("meta",{property:"og:image:height",content:"608"}),(0,o.jsx)("meta",{property:"og:url",content:l||"https://devserver.siyasatsamwad.com"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:site_name",content:"https://devserver.siyasatsamwad.com"}),(0,o.jsx)("meta",{name:"twitter:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{name:"twitter:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{name:"twitter:image",content:s||null}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("link",{rel:"canonical",href:"".concat("https://devserver.siyasatsamwad.com")}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"}),(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(i||null)}},"structured-data")]}),(0,o.jsx)("h1",{className:"d-none",children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"})]})}},44467:function(e,t,n){"use strict";n.r(t);var o=n(85893),a=n(5152),r=n.n(a),s=n(58622);let l=r()(()=>Promise.all([n.e(1154),n.e(4980),n.e(1778),n.e(5445),n.e(3874),n.e(4617),n.e(6132),n.e(2013),n.e(9412),n.e(9332),n.e(4826),n.e(401),n.e(7633),n.e(2004),n.e(8928),n.e(9238)]).then(n.bind(n,49238)),{loadableGenerated:{webpack:()=>[49238]},ssr:!1});t.default=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{title:"video news",description:"",keywords:"",ogImage:"",pathName:"",schema:""}),(0,o.jsx)(l,{})]})},5152:function(e,t,n){e.exports=n(28864)},9008:function(e,t,n){e.exports=n(7828)}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=46273)}),_N_E=e.O()}]);