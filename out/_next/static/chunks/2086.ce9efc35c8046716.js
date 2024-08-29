"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2086],{33263:function(e,t,r){r.d(t,{Z:function(){return i}});var l=r(87462),n=r(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},o=r(97902),i=n.forwardRef(function(e,t){return n.createElement(o.Z,(0,l.Z)({},e,{ref:t,icon:a}))})},13771:function(e,t,r){r.d(t,{Z:function(){return _}});var l=r(67294),n=r(93967),a=r.n(n),o=r(50344),i=r(64217),c=r(26901),s=r(93565),d=r(33263),u=r(31841);let m=e=>{let{children:t}=e,{getPrefixCls:r}=l.useContext(s.E_),n=r("breadcrumb");return l.createElement("li",{className:"".concat(n,"-separator"),"aria-hidden":"true"},""===t?t:t||"/")};m.__ANT_BREADCRUMB_SEPARATOR=!0;var p=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};function f(e,t,r,n){if(null==r)return null;let{className:o,onClick:c}=t,s=p(t,["className","onClick"]),d=Object.assign(Object.assign({},(0,i.Z)(s,{data:!0,aria:!0})),{onClick:c});return void 0!==n?l.createElement("a",Object.assign({},d,{className:a()("".concat(e,"-link"),o),href:n}),r):l.createElement("span",Object.assign({},d,{className:a()("".concat(e,"-link"),o)}),r)}var g=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};let b=e=>{let{prefixCls:t,separator:r="/",children:n,menu:a,overlay:o,dropdownProps:i,href:c}=e,s=(e=>{if(a||o){let r=Object.assign({},i);if(a){let e=a||{},{items:t}=e,n=g(e,["items"]);r.menu=Object.assign(Object.assign({},n),{items:null==t?void 0:t.map((e,t)=>{var{key:r,title:n,label:a,path:o}=e,i=g(e,["key","title","label","path"]);let s=null!=a?a:n;return o&&(s=l.createElement("a",{href:"".concat(c).concat(o)},s)),Object.assign(Object.assign({},i),{key:null!=r?r:t,label:s})})})}else o&&(r.overlay=o);return l.createElement(u.Z,Object.assign({placement:"bottom"},r),l.createElement("span",{className:"".concat(t,"-overlay-link")},e,l.createElement(d.Z,null)))}return e})(n);return null!=s?l.createElement(l.Fragment,null,l.createElement("li",null,s),r&&l.createElement(m,null,r)):null},v=e=>{let{prefixCls:t,children:r,href:n}=e,a=g(e,["prefixCls","children","href"]),{getPrefixCls:o}=l.useContext(s.E_),i=o("breadcrumb",t);return l.createElement(b,Object.assign({},a,{prefixCls:i}),f(i,a,r,n))};v.__ANT_BREADCRUMB_ITEM=!0;var h=r(57477),j=r(5710),y=r(76129),x=r(83262);let O=e=>{let{componentCls:t,iconCls:r,calc:l}=e;return{[t]:Object.assign(Object.assign({},(0,j.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat((0,h.bf)(e.paddingXXS)),borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:l(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,j.Qy)(e)),"li:last-child":{color:e.lastItemColor},["".concat(t,"-separator")]:{marginInline:e.separatorMargin,color:e.separatorColor},["".concat(t,"-link")]:{["\n          > ".concat(r," + span,\n          > ").concat(r," + a\n        ")]:{marginInlineStart:e.marginXXS}},["".concat(t,"-overlay-link")]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:"0 ".concat((0,h.bf)(e.paddingXXS)),marginInline:l(e.marginXXS).mul(-1).equal(),["> ".concat(r)]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},["&".concat(e.componentCls,"-rtl")]:{direction:"rtl"}})}};var S=(0,y.I$)("Breadcrumb",e=>O((0,x.IX)(e,{})),e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS})),N=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};function E(e){let{breadcrumbName:t,children:r}=e,l=Object.assign({title:t},N(e,["breadcrumbName","children"]));return r&&(l.menu={items:r.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},N(e,["breadcrumbName"])),{title:t})})}),l}var C=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]]);return r};let w=(e,t)=>{if(void 0===t)return t;let r=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{r=r.replace(":".concat(t),e[t])}),r},k=e=>{let t;let{prefixCls:r,separator:n="/",style:d,className:u,rootClassName:p,routes:g,items:v,children:h,itemRender:j,params:y={}}=e,x=C(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:O,direction:N,breadcrumb:k}=l.useContext(s.E_),_=O("breadcrumb",r),[M,Z,P]=S(_),I=(0,l.useMemo)(()=>v||(g?g.map(E):null),[v,g]),L=(e,t,r,l,n)=>{if(j)return j(e,t,r,l);let a=function(e,t){if(void 0===e.title||null===e.title)return null;let r=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(":(".concat(r,")"),"g"),(e,r)=>t[r]||e)}(e,t);return f(_,e,a,n)};if(I&&I.length>0){let e=[],r=v||g;t=I.map((t,a)=>{let{path:o,key:c,type:s,menu:d,overlay:u,onClick:p,className:f,separator:g,dropdownProps:v}=t,h=w(y,o);void 0!==h&&e.push(h);let j=null!=c?c:a;if("separator"===s)return l.createElement(m,{key:j},g);let x={},O=a===I.length-1;d?x.menu=d:u&&(x.overlay=u);let{href:S}=t;return e.length&&void 0!==h&&(S="#/".concat(e.join("/"))),l.createElement(b,Object.assign({key:j},x,(0,i.Z)(t,{data:!0,aria:!0}),{className:f,dropdownProps:v,href:S,separator:O?"":n,onClick:p,prefixCls:_}),L(t,y,r,e,S))})}else if(h){let e=(0,o.Z)(h).length;t=(0,o.Z)(h).map((t,r)=>{if(!t)return t;let l=r===e-1;return(0,c.Tm)(t,{separator:l?"":n,key:r})})}let R=a()(_,null==k?void 0:k.className,{["".concat(_,"-rtl")]:"rtl"===N},u,p,Z,P),T=Object.assign(Object.assign({},null==k?void 0:k.style),d);return M(l.createElement("nav",Object.assign({className:R,style:T},x),l.createElement("ol",null,t)))};k.Item=v,k.Separator=m;var _=k},12645:function(e,t,r){var l=r(85893);r(67294);var n=r(13771),a=r(26963);t.Z=e=>{let{SecondElement:t,ThirdElement:r,FourthElement:o}=e,i=[{title:(0,l.jsxs)("span",{children:[(0,l.jsx)(a.xng,{size:25,id:"bcb-home-logo",className:"me-1"}),"Home"]}),href:"/"}];return""!==t&&i.push({title:t,href:"category"==t?"/all-categories":null}),""!==r&&i.push({title:r}),""!==o&&i.push({title:o,href:""}),(0,l.jsx)(n.Z,{className:"container breadcrumbWrapper",separator:"|",items:i})}},22086:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var l=r(85893),n=r(67294),a=r(95711),o=r(98569),i=r(12645),c=r(9473),s=r(51527),d=r(73680),u={src:"/_next/static/media/placeholder.fbd0d25e.png"},m=r(87633),p=r(33517),f=r(81823),g=r(58928),b=r(99131),v=r(57981),h=r(81426),j=()=>{let[e,t]=(0,n.useState)(),[r,j]=(0,n.useState)(!1),[y,x]=(0,n.useState)(null),{id:O}=(0,f.G3)(),S=(0,c.v9)(s.Aj);(0,c.v9)(h.vV);let[N,E]=(0,n.useState)({loading:!1,loadMoreLoading:!1}),[C,w]=(0,n.useState)(!1),[k,_]=(0,n.useState)([]),[M,Z]=(0,n.useState)(0),[P,I]=(0,n.useState)(""),L=async()=>{C?E({loadMoreLoading:!0}):E({loading:!0});try{let{data:e}=await p.E.getLiveStreaming({language_id:O,offset:6*M,limit:6});return I(e.total),E({loading:!1}),E({loadMoreLoading:!1}),e.data}catch(e){console.log(e),_([]),E({loading:!1})}},{data:R}=(0,m.a)({queryKey:["getliveStreaming",S,M],queryFn:L});(0,n.useEffect)(()=>{R&&R&&_(e=>[...e,...R])},[R]),(0,n.useEffect)(()=>{},[P,N]);let T=e=>{j(!0),t(e)},z=e=>{x(e)};return(0,l.jsxs)(g.default,{children:[(0,l.jsx)(i.Z,{SecondElement:(0,d.Iu)("livenews")}),(0,l.jsx)("div",{id:"LN-main",className:"py-5 bg-white",children:(0,l.jsx)("div",{id:"LN-content",className:"container",children:N.loading?(0,l.jsx)("div",{className:"row",children:[void 0,void 0,void 0].map((e,t)=>(0,l.jsx)("div",{className:"col-md-4 col-12",children:(0,l.jsx)(b.Z,{isLoading:!0})},t))}):(0,l.jsxs)("div",{className:"row live-news",children:[k&&k.length>0?k.map(t=>(0,l.jsxs)("div",{className:"col-md-4 col-12",children:[(0,l.jsxs)("div",{id:"LN-card",className:"card",onClick:()=>{T(t.url),z(t.type)},children:[(0,l.jsx)("img",{id:"LN-card-image",src:t.image?t.image:u.src,className:"card-img",alt:null==t?void 0:t.title,onError:d.jM}),(0,l.jsx)("div",{className:"card-image-overlay",children:(0,l.jsx)(a.mz0,{className:"line-news-circle pulse",fill:"white",size:50})}),(0,l.jsx)("div",{id:"LN-card-body",className:"card-body",children:(0,l.jsx)("h5",{id:"LN-card-title",className:"card-title",children:t.title})})]}),(0,l.jsx)(o.Z,{show:r,onHide:()=>j(!1),keyboard:!1,url:e,type_url:y})]},t.id)):(0,l.jsx)(l.Fragment,{children:(0,d.mo)()}),P>6&&P!==k.length?(0,l.jsx)(v.Z,{handleLoadMore:()=>{w(!0),Z(M+1)},loadMoreLoading:N.loadMoreLoading}):null]})})})]})}},98569:function(e,t,r){r.d(t,{Z:function(){return p}});var l=r(85893),n=r(67294),a=r(76529),o=r(98695),i=r(22004),c=r.n(i),s=r(15411),d=r(93041),u=n.memo(e=>{let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let r=t.current,l=new d.ZP,n=e.url;return l.loadSource(n),l.attachMedia(r),l.on(d.ZP.Events.MANIFEST_PARSED,()=>{r.play()}),()=>{l.destroy()}},[]),(0,l.jsx)("video",{className:"videoCanvas",ref:t,autoPlay:!0})}),m=r(73680),p=e=>{let t;let[r,i]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{i(!0);let e=setTimeout(()=>{i(!1)},2e3);return()=>clearTimeout(e)},[e.show]),(0,l.jsx)(o.Z,{...e,className:"video_modal",size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:(0,l.jsx)(o.Z.Body,{id:"vps-modal-body",children:r?(0,l.jsx)("div",{className:"loader-container",children:(0,l.jsx)("div",{className:"loader"})}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{id:"vps-modal-btnclose",onClick:e.onHide,children:(0,l.jsx)(s.oHP,{id:"btnClose-logo",size:20})}),(null==(t=e.url)?void 0:t.endsWith(".m3u8"))?(0,l.jsx)(u,{url:e.url}):"video_other"===e.type_url||"url_other"===e.type_url?(0,l.jsx)("iframe",{className:"video_other_url",allow:"autoplay",frameborder:"0",width:"100%",allowFullScreen:!0,src:e.url,onError:m.jM}):(0,l.jsx)(c(),{width:"100%",height:"500px",url:e.url&&e.url,controls:!0})]})})})}},57981:function(e,t,r){r.d(t,{Z:function(){return a}});var l=r(85893);r(67294);var n=()=>(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"loadMoreSpinnerWrapper",children:(0,l.jsx)("div",{className:"loadMoreSpinner"})})}),a=e=>{let{handleLoadMore:t,loadMoreLoading:r}=e;return(0,l.jsx)("div",{children:r?(0,l.jsx)(n,{}):(0,l.jsx)("button",{onClick:t,className:"loadMoreBtn commonBtn",children:"Load More"})})}}}]);