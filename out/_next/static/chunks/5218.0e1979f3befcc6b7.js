"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5218],{71375:function(e,a){a.Z={src:"/_next/static/media/no_image.da08d2f6.jpeg",height:600,width:537,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAoYP/xAAaEAACAgMAAAAAAAAAAAAAAAACEQAhAxQj/9oACAEBAAE/AMghqBzR1an/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:7,blurHeight:8}},12645:function(e,a,i){var l=i(85893);i(67294);var d=i(13771),n=i(26963);a.Z=e=>{let{SecondElement:a,ThirdElement:i,FourthElement:s}=e,A=[{title:(0,l.jsxs)("span",{children:[(0,l.jsx)(n.xng,{size:25,id:"bcb-home-logo",className:"me-1"}),"Home"]}),href:"/"}];return""!==a&&A.push({title:a,href:"category"==a?"/all-categories":null}),""!==i&&A.push({title:i}),""!==s&&A.push({title:s,href:""}),(0,l.jsx)(d.Z,{className:"container breadcrumbWrapper",separator:"|",items:A})}},95218:function(e,a,i){i.r(a);var l=i(85893),d=i(67294),n=i(41664),s=i.n(n),A=i(12645),t=i(9473),r=i(51527),o=i(73680),c=i(71375);i(11358);var g=i(11163),u=i(87633),m=i(81823),h=i(58928),v=i(99131),x=i(81426),j=i(29722),N=i(57981);a.default=()=>{var e,a,i;let[n,w]=(0,d.useState)(0),E=(0,g.useRouter)().query.slug,B=(0,t.v9)(x.zd),f=B&&B.lat,p=B&&B.long;(0,m.B4)();let{id:C}=(0,m.G3)(),M=(0,t.v9)(r.Aj),[Q,b]=(0,d.useState)({loading:!1,loadMoreLoading:!1}),[y,L]=(0,d.useState)(!1),[S,_]=(0,d.useState)([]),[Z,k]=(0,d.useState)(0),[F,V]=(0,d.useState)(""),I=()=>{L(!0),w(n+1),k(Z+1)},D=async()=>{y?b({loadMoreLoading:!0}):b({loading:!0});try{var e,a;let{data:i}=await j.Q.getFeatureSection({language_id:C,offset:6*Z,limit:6,slug:E,latitude:f,longitude:p});return V((null===(e=i.data[0])||void 0===e?void 0:e.news)?i.data[0].news_total:null===(a=i.data[0])||void 0===a?void 0:a.breaking_news_total),console.log(i.data[0].news_total,"totlaNewsss"),b({loading:!1}),b({loadMoreLoading:!1}),i.data}catch(e){console.log(e),_([]),b({loading:!1})}},{data:U}=(0,u.a)({queryKey:["viewallFeaturebyslug",E,M,B,Z],queryFn:()=>D()});return(0,d.useEffect)(()=>{U&&U&&(U[0].news?_(e=>{var a;return[...e,...null===(a=U[0])||void 0===a?void 0:a.news]}):_(e=>{var a;return[...e,...null===(a=U[0])||void 0===a?void 0:a.breaking_news]}))},[U]),(0,d.useEffect)(()=>{},[F,Q,n]),(0,d.useEffect)(()=>{},[S]),U&&(null===(e=U[0])||void 0===e||e.news_total),(0,l.jsxs)(h.default,{children:[S&&S?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z,{SecondElement:U&&(null===(a=U[0])||void 0===a?void 0:a.title)}),(0,l.jsx)("div",{id:"BNV-main",children:(0,l.jsxs)("div",{id:"BNV-content",className:"container",children:[Q.loading?(0,l.jsx)("div",{className:"row",children:[void 0,void 0,void 0].map((e,a)=>(0,l.jsx)("div",{className:"col-md-4 col-12",children:(0,l.jsx)(v.Z,{isLoading:!0})},a))}):(0,l.jsx)("div",{className:"row",children:S&&S?S&&S.map(e=>(0,l.jsx)("div",{className:"col-md-4 col-12",children:(0,l.jsx)(s(),{id:"Link-all",href:{pathname:"/news/".concat(e.slug),query:{language_id:e.language_id}},as:"/news/".concat(e.slug),children:(0,l.jsxs)("div",{id:"BNV-card",className:"card",children:[(0,l.jsx)("img",{id:"BNV-card-image",src:e.image?e.image:c.Z,className:"card-img",alt:e.title,onError:o.jM}),(0,l.jsx)("div",{id:"BNV-card-body",className:"card-body",children:(0,l.jsx)("h5",{id:"BNV-card-title",className:"card-title",children:e.title})})]})})},e.id)):(0,l.jsx)(l.Fragment,{children:(0,o.mo)()})}),F>6&&F!==(null==S?void 0:S.length)?(0,l.jsx)(N.Z,{handleLoadMore:I,loadMoreLoading:Q.loadMoreLoading}):null]})})]}):null,S&&(null===(i=S[0])||void 0===i?void 0:i.breaking_news)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(A.Z,{SecondElement:U[0].title}),(0,l.jsx)("div",{id:"BNV-main",children:(0,l.jsxs)("div",{id:"BNV-content",className:"container",children:[Q.loading?(0,l.jsx)("div",{className:"row",children:[void 0,void 0,void 0].map((e,a)=>(0,l.jsx)("div",{className:"col-md-4 col-12",children:(0,l.jsx)(v.Z,{isLoading:!0})},a))}):(0,l.jsx)("div",{className:"row",children:S?S.map(e=>(0,l.jsx)("div",{className:"col-md-4 col-12",children:(0,l.jsx)(s(),{id:"Link-all",href:{pathname:"/breaking-news/".concat(e.slug),query:{language_id:e.language_id}},as:"/breaking-news/".concat(e.slug),children:(0,l.jsxs)("div",{id:"BNV-card",className:"card",children:[(0,l.jsx)("img",{id:"BNV-card-image",src:e.image?e.image:c.Z,className:"card-img",alt:e.title}),(0,l.jsx)("div",{id:"BNV-card-body",className:"card-body",children:(0,l.jsx)("h5",{id:"BNV-card-title",className:"card-title",children:e.title})})]})})},e.id)):(0,l.jsx)(l.Fragment,{children:(0,o.mo)()})}),F>6&&F!==(null==S?void 0:S.length)?(0,l.jsx)(N.Z,{handleLoadMore:I,loadMoreLoading:Q.loadMoreLoading}):null]})})]}):null]})}},57981:function(e,a,i){i.d(a,{Z:function(){return n}});var l=i(85893);i(67294);var d=()=>(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"loadMoreSpinnerWrapper",children:(0,l.jsx)("div",{className:"loadMoreSpinner"})})}),n=e=>{let{handleLoadMore:a,loadMoreLoading:i}=e;return(0,l.jsx)("div",{children:i?(0,l.jsx)(d,{}):(0,l.jsx)("button",{onClick:a,className:"loadMoreBtn commonBtn",children:"Load More"})})}},29722:function(e,a,i){i.d(a,{Q:function(){return n}});var l=i(58326),d=i(81823);let n={getFeatureSectionById:e=>{let{language_id:a,offset:i,limit:n,slug:s,latitude:A,longitude:t,section_id:r}=e;return l.Z.get(d.Ay,{params:{language_id:a,offset:i,limit:n,slug:s,latitude:A,longitude:t,section_id:r}})},getFeatureSection:e=>{let{language_id:a,offset:i,limit:n,slug:s,latitude:A,longitude:t,section_id:r}=e;return l.Z.get(d.RB,{params:{language_id:a,offset:i,limit:n,slug:s,latitude:A,longitude:t,section_id:r}})}}}}]);