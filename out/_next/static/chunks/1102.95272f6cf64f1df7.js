"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1102],{12645:function(e,a,s){var t=s(85893);s(67294);var r=s(66026),l=s(26963);a.Z=e=>{let{SecondElement:a,ThirdElement:s,FourthElement:n}=e,o=[{title:(0,t.jsxs)("span",{children:[(0,t.jsx)(l.FaHome,{size:25,id:"bcb-home-logo",className:"me-1"}),"Home"]}),href:"/"}];return""!==a&&o.push({title:a,href:"category"==a?"/all-categories":null}),""!==s&&o.push({title:s}),""!==n&&o.push({title:n,href:""}),(0,t.jsx)(r.Z,{className:"container breadcrumbWrapper",separator:"|",items:o})}},46150:function(e,a,s){var t=s(85893),r=s(67294),l=s(68888),n=s(20641),o=s(13570);s(74005);var i=s(87066),d=s(41664),c=s.n(d),u=s(64503);a.Z=()=>{let[e,a]=(0,r.useState)([]),[s,d]=(0,r.useState)(!0);return((0,r.useEffect)(()=>{i.Z.get("https://devserver.siyasatsamwad.com/api/get_ad_space_news_details").then(e=>{!e.data.error&&Array.isArray(e.data.data)?(a(e.data.data),console.log(e.data.data,"adNewsData")):console.error("Unexpected data structure:",e.data),d(!1)}).catch(e=>{console.error("Error fetching news data:",e),d(!1)})},[]),s)?(0,t.jsx)("div",{children:"Loading..."}):0===e.length?(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{})}):(0,t.jsx)("div",{style:{width:"100%",height:"auto",padding:"10px",position:"sticky",top:"0"},children:(0,t.jsx)(l.Z,{xs:1,md:1,className:"g-4",children:e.map((e,a)=>(0,t.jsx)(n.Z,{children:(0,t.jsx)(c(),{href:e.ad_url,target:"_blank",children:(0,t.jsxs)(o.Z,{className:"shadow-sm border-0",children:[(0,t.jsx)(o.Z.Img,{variant:"top",src:e.web_ad_image||"https://via.placeholder.com/150",alt:"Ad Image"}),(0,t.jsxs)(o.Z.Body,{children:[(0,t.jsx)(o.Z.Title,{children:e.ad_space}),(0,t.jsx)(o.Z.Text,{className:"text-muted",children:"0000-00-00"===e.date?"Date not available":e.date})]})]})})},e.id))})})}},14758:function(e,a,s){s.d(a,{Z:function(){return x}});var t=s(85893),r=s(67294),l=s(9473),n=s(83333),o=s(66640),i=s(52448),d=s(39332),c=s(26963),u=s(76529),h=()=>(0,t.jsxs)("div",{className:"text-center mt-3",children:[(0,t.jsx)("p",{children:"Download App from"}),(0,t.jsx)(u.Z,{variant:"link",href:"https://play.google.com/store",target:"_blank",className:"p-0 mb-3",children:(0,t.jsx)("img",{src:"/assets/images/playstore-a.58f8fbd8.svg",alt:"Google Play"})}),(0,t.jsx)(u.Z,{variant:"link",href:"https://www.apple.com/app-store/",target:"_blank",className:"p-0",children:(0,t.jsx)("img",{src:"/assets/images/playstore-ios.9242fa03.svg",alt:"App Store"})}),(0,t.jsxs)("div",{className:"mt-3",children:[(0,t.jsx)("p",{children:"Follow us on"}),(0,t.jsxs)("div",{className:"d-flex justify-content-start",children:[(0,t.jsx)("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"mx-2",children:(0,t.jsx)(c.FaFacebookF,{size:30,color:"#3b5998"})}),(0,t.jsx)("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"mx-2",children:(0,t.jsx)(c.FaTwitter,{size:32,color:"#1da1f2"})}),(0,t.jsx)("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"mx-2",children:(0,t.jsx)(c.FaInstagram,{size:32,color:"#e4405f"})}),(0,t.jsx)("a",{href:"https://www.youtube.com",target:"_blank",rel:"noopener noreferrer",className:"mx-2",children:(0,t.jsx)(c.FaYoutube,{size:32,color:"#ff0000"})})]})]})]}),m=s(3483),x=()=>{let e=(0,d.useRouter)(),a=(0,l.v9)(m.A3),[s,u]=(0,r.useState)(!0);(0,r.useEffect)(()=>{a.length>0&&u(!1)},[a]);let x=a=>{a.slug&&e.push("/categories-news/".concat(a.slug))},g=e=>c[e]||c.FaNewspaper;return(0,t.jsxs)("div",{style:{width:"100%",height:"auto",padding:"10px",position:"sticky",top:"80px"},children:[s?(0,t.jsx)(n.Z,{variant:"flush",children:[void 0,void 0,void 0,void 0,void 0].map((e,a)=>(0,t.jsxs)(o.Z,{className:"d-flex align-items-center menu-item",children:[(0,t.jsx)(i.Z,{animation:"border",size:"sm",className:"mr-2"}),(0,t.jsx)("span",{className:"placeholder col-8"})]},a))}):(0,t.jsx)(n.Z,{variant:"flush",children:a.map(e=>{let a=g(e.icon);return(0,t.jsxs)(o.Z,{className:"d-flex align-items-center menu-item",style:{cursor:"pointer",fontSize:"20px",fontWeight:"bold"},onClick:()=>x(e),children:[(0,t.jsx)(a,{style:{marginRight:"10px",color:e.iconColor||"#5e7fd8"}}),(0,t.jsx)("span",{children:e.category_name})]},e.id)})}),(0,t.jsx)(h,{})]})}},20490:function(e,a,s){s.d(a,{Z:function(){return p}});var t=s(85893),r=s(41664),l=s.n(r),n=s(51527),o=s(9473),i=s(73680),d=s(50549),c=s(58326),u=s(81823);let h={getTag:e=>{let{language_id:a,slug:s,limit:t,offset:r}=e;return c.Z.get(u.Vs,{params:{language_id:a,slug:s,limit:t,offset:r}})}};var m=s(87633),x=s(57981),g=s(67294),p=()=>{let e=(0,o.v9)(n.Aj),{id:a}=(0,u.G3)(),[s,r]=(0,g.useState)({loading:!1,loadMoreLoading:!1}),[c,p]=(0,g.useState)(!1),[j,f]=(0,g.useState)([]),[v,w]=(0,g.useState)(0),[b,N]=(0,g.useState)(""),y=async()=>{c?r({loadMoreLoading:!0}):r({loading:!0});try{let{data:e}=await h.getTag({offset:10*v,limit:10,language_id:a});return N(e.total),r({loading:!1}),r({loadMoreLoading:!1}),e.data}catch(e){console.log(e),f([]),r({loading:!1})}},{data:Z}=(0,m.a)({queryKey:["getTagSection",e,v],queryFn:y});return(0,g.useEffect)(()=>{Z&&Z&&f(e=>[...e,...Z])},[Z]),(0,g.useEffect)(()=>{},[b,s]),(0,t.jsx)("div",{children:s.loading?(0,t.jsx)("div",{children:(0,t.jsx)(d.Z,{height:200,count:3})}):j&&j.length>0?(0,t.jsxs)("div",{id:"rns-tags-main",className:"my-3",children:[(0,t.jsx)("div",{id:"tags-nav",className:"navbar",children:(0,t.jsx)("h4",{id:"rns-nav-logo",className:"mb-0",children:(0,t.jsx)("b",{children:(0,i.Iu)("tagLbl")})})}),(0,t.jsx)("div",{id:"tags-tag",children:j&&(null==j?void 0:j.map(e=>(0,t.jsx)(l(),{id:"btnTags",href:"/tag/".concat(e.slug),className:"btn btn-outline-dark",children:e.tag_name},e.id)))}),b>10&&b!==j.length?(0,t.jsx)(x.Z,{handleLoadMore:()=>{p(!0),w(v+1)},loadMoreLoading:s.loadMoreLoading}):null]}):null})}},98569:function(e,a,s){s.d(a,{Z:function(){return m}});var t=s(85893),r=s(67294),l=s(76529),n=s(98695),o=s(22004),i=s.n(o),d=s(15411),c=s(93041),u=r.memo(e=>{let a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=a.current,t=new c.ZP,r=e.url;return t.loadSource(r),t.attachMedia(s),t.on(c.ZP.Events.MANIFEST_PARSED,()=>{s.play()}),()=>{t.destroy()}},[]),(0,t.jsx)("video",{className:"videoCanvas",ref:a,autoPlay:!0})}),h=s(73680),m=e=>{let a;let[s,o]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{o(!0);let e=setTimeout(()=>{o(!1)},2e3);return()=>clearTimeout(e)},[e.show]),(0,t.jsx)(n.Z,{...e,className:"video_modal",size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:(0,t.jsx)(n.Z.Body,{id:"vps-modal-body",children:s?(0,t.jsx)("div",{className:"loader-container",children:(0,t.jsx)("div",{className:"loader"})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{id:"vps-modal-btnclose",onClick:e.onHide,children:(0,t.jsx)(d.oHP,{id:"btnClose-logo",size:20})}),(null==(a=e.url)?void 0:a.endsWith(".m3u8"))?(0,t.jsx)(u,{url:e.url}):"video_other"===e.type_url||"url_other"===e.type_url?(0,t.jsx)("iframe",{className:"video_other_url",allow:"autoplay",frameborder:"0",width:"100%",allowFullScreen:!0,src:e.url,onError:h.jM}):(0,t.jsx)(i(),{width:"100%",height:"500px",url:e.url&&e.url,controls:!0})]})})})}},51356:function(e,a,s){var t=s(85893);s(67294);var r=s(73680);a.Z=e=>{let{ad_url:a,ad_img:s,style_web:l}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"ad_spaces",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{target:"_blank",onClick:()=>{a.length>0&&void 0!==a&&""!==a&&null!==a&&window.open(a,"_blank")},children:s&&(0,t.jsx)("img",{className:"adimage",src:s,alt:"style ".concat(l," feature sponsored ads news image"),onError:r.jM})})})})})}},57981:function(e,a,s){s.d(a,{Z:function(){return l}});var t=s(85893);s(67294);var r=()=>(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"loadMoreSpinnerWrapper",children:(0,t.jsx)("div",{className:"loadMoreSpinner"})})}),l=e=>{let{handleLoadMore:a,loadMoreLoading:s}=e;return(0,t.jsx)("div",{children:s?(0,t.jsx)(r,{}):(0,t.jsx)("button",{onClick:a,className:"loadMoreBtn commonBtn",children:"Load More"})})}},37508:function(e,a,s){s.d(a,{L:function(){return l}});var t=s(58326),r=s(81823);let l={getAdsSpaceNewsDetails:e=>{let{language_id:a}=e;return t.Z.get(r.R$,{params:{language_id:a}})}}}}]);