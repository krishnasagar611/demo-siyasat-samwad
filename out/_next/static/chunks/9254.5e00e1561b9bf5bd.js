"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9254,3680],{33263:function(e,t,r){r.d(t,{Z:function(){return i}});var o=r(87462),a=r(67294),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},l=r(97902),i=a.forwardRef(function(e,t){return a.createElement(l.Z,(0,o.Z)({},e,{ref:t,icon:n}))})},13771:function(e,t,r){r.d(t,{Z:function(){return T}});var o=r(67294),a=r(93967),n=r.n(a),l=r(50344),i=r(64217),s=r(26901),c=r(93565),d=r(33263),u=r(31841);let m=e=>{let{children:t}=e,{getPrefixCls:r}=o.useContext(c.E_),a=r("breadcrumb");return o.createElement("li",{className:"".concat(a,"-separator"),"aria-hidden":"true"},""===t?t:t||"/")};m.__ANT_BREADCRUMB_SEPARATOR=!0;var g=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};function p(e,t,r,a){if(null==r)return null;let{className:l,onClick:s}=t,c=g(t,["className","onClick"]),d=Object.assign(Object.assign({},(0,i.Z)(c,{data:!0,aria:!0})),{onClick:s});return void 0!==a?o.createElement("a",Object.assign({},d,{className:n()("".concat(e,"-link"),l),href:a}),r):o.createElement("span",Object.assign({},d,{className:n()("".concat(e,"-link"),l)}),r)}var b=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};let y=e=>{let{prefixCls:t,separator:r="/",children:a,menu:n,overlay:l,dropdownProps:i,href:s}=e,c=(e=>{if(n||l){let r=Object.assign({},i);if(n){let e=n||{},{items:t}=e,a=b(e,["items"]);r.menu=Object.assign(Object.assign({},a),{items:null==t?void 0:t.map((e,t)=>{var{key:r,title:a,label:n,path:l}=e,i=b(e,["key","title","label","path"]);let c=null!=n?n:a;return l&&(c=o.createElement("a",{href:"".concat(s).concat(l)},c)),Object.assign(Object.assign({},i),{key:null!=r?r:t,label:c})})})}else l&&(r.overlay=l);return o.createElement(u.Z,Object.assign({placement:"bottom"},r),o.createElement("span",{className:"".concat(t,"-overlay-link")},e,o.createElement(d.Z,null)))}return e})(a);return null!=c?o.createElement(o.Fragment,null,o.createElement("li",null,c),r&&o.createElement(m,null,r)):null},h=e=>{let{prefixCls:t,children:r,href:a}=e,n=b(e,["prefixCls","children","href"]),{getPrefixCls:l}=o.useContext(c.E_),i=l("breadcrumb",t);return o.createElement(y,Object.assign({},n,{prefixCls:i}),p(i,n,r,a))};h.__ANT_BREADCRUMB_ITEM=!0;var f=r(57477),w=r(5710),v=r(76129),L=r(83262);let k=e=>{let{componentCls:t,iconCls:r,calc:o}=e;return{[t]:Object.assign(Object.assign({},(0,w.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:"color ".concat(e.motionDurationMid),padding:"0 ".concat((0,f.bf)(e.paddingXXS)),borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:o(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,w.Qy)(e)),"li:last-child":{color:e.lastItemColor},["".concat(t,"-separator")]:{marginInline:e.separatorMargin,color:e.separatorColor},["".concat(t,"-link")]:{["\n          > ".concat(r," + span,\n          > ").concat(r," + a\n        ")]:{marginInlineStart:e.marginXXS}},["".concat(t,"-overlay-link")]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:"0 ".concat((0,f.bf)(e.paddingXXS)),marginInline:o(e.marginXXS).mul(-1).equal(),["> ".concat(r)]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},["&".concat(e.componentCls,"-rtl")]:{direction:"rtl"}})}};var P=(0,v.I$)("Breadcrumb",e=>k((0,L.IX)(e,{})),e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS})),S=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};function N(e){let{breadcrumbName:t,children:r}=e,o=Object.assign({title:t},S(e,["breadcrumbName","children"]));return r&&(o.menu={items:r.map(e=>{var{breadcrumbName:t}=e;return Object.assign(Object.assign({},S(e,["breadcrumbName"])),{title:t})})}),o}var x=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)0>t.indexOf(o[a])&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(r[o[a]]=e[o[a]]);return r};let C=(e,t)=>{if(void 0===t)return t;let r=(t||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{r=r.replace(":".concat(t),e[t])}),r},O=e=>{let t;let{prefixCls:r,separator:a="/",style:d,className:u,rootClassName:g,routes:b,items:h,children:f,itemRender:w,params:v={}}=e,L=x(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:k,direction:S,breadcrumb:O}=o.useContext(c.E_),T=k("breadcrumb",r),[j,R,M]=P(T),D=(0,o.useMemo)(()=>h||(b?b.map(N):null),[h,b]),E=(e,t,r,o,a)=>{if(w)return w(e,t,r,o);let n=function(e,t){if(void 0===e.title||null===e.title)return null;let r=Object.keys(t).join("|");return"object"==typeof e.title?e.title:String(e.title).replace(RegExp(":(".concat(r,")"),"g"),(e,r)=>t[r]||e)}(e,t);return p(T,e,n,a)};if(D&&D.length>0){let e=[],r=h||b;t=D.map((t,n)=>{let{path:l,key:s,type:c,menu:d,overlay:u,onClick:g,className:p,separator:b,dropdownProps:h}=t,f=C(v,l);void 0!==f&&e.push(f);let w=null!=s?s:n;if("separator"===c)return o.createElement(m,{key:w},b);let L={},k=n===D.length-1;d?L.menu=d:u&&(L.overlay=u);let{href:P}=t;return e.length&&void 0!==f&&(P="#/".concat(e.join("/"))),o.createElement(y,Object.assign({key:w},L,(0,i.Z)(t,{data:!0,aria:!0}),{className:p,dropdownProps:h,href:P,separator:k?"":a,onClick:g,prefixCls:T}),E(t,v,r,e,P))})}else if(f){let e=(0,l.Z)(f).length;t=(0,l.Z)(f).map((t,r)=>{if(!t)return t;let o=r===e-1;return(0,s.Tm)(t,{separator:o?"":a,key:r})})}let A=n()(T,null==O?void 0:O.className,{["".concat(T,"-rtl")]:"rtl"===S},u,g,R,M),q=Object.assign(Object.assign({},null==O?void 0:O.style),d);return j(o.createElement("nav",Object.assign({className:A,style:q},L),o.createElement("ol",null,t)))};O.Item=h,O.Separator=m;var T=O},79254:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var o=r(85893),a={src:"/_next/static/media/bookmark.360e457c.png"},n=r(60839),l=r(12645),i=r(73680),s=r(39332),c=r(58326),d=r(81823);let u={getBookmark:e=>{let{language_id:t,offset:r,limit:o}=e;return c.Z.get(d.BY,{params:{language_id:t,offset:r,limit:o}})},setBookmark:e=>{let{news_id:t,status:r}=e;return c.Z.post(d.vq,{news_id:t,status:r})}};var m=r(87633),g=r(67294),p=r(58928),b=r(99131),y=r(95711),h=r(41664),f=r.n(h),w=()=>{let{id:e}=(0,d.G3)(),t=(0,d.B4)(),[r,c]=(0,g.useState)([]);(0,s.useRouter)();let h=async()=>{try{let{data:t}=await u.getBookmark({language_id:e,offset:0,limit:10});c(t.data)}catch(e){console.log(e)}},w=async(e,t)=>{try{let{data:o}=await u.setBookmark({news_id:e,status:t});c(r.filter(t=>t.news_id!==e))}catch(e){console.log(e)}},{isLoading:v}=(0,m.a)({queryKey:["getbookmark",t,e],queryFn:h}),{}=(0,m.a)({queryKey:["setbookmark"],queryFn:w});(0,g.useEffect)(()=>{},[r]);let L=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"numeric",year:"numeric"});return(0,o.jsxs)(p.default,{children:[(0,o.jsx)(l.Z,{SecondElement:(0,i.Iu)("bookmarkLbl")}),(0,o.jsx)("div",{id:"bs-main",className:"py-5 bookmark_page",children:(0,o.jsx)("div",{id:"bs-content",className:"container",children:(0,o.jsx)("div",{className:"row",children:v?(0,o.jsx)("div",{className:"row",children:[void 0,void 0,void 0].map((e,t)=>(0,o.jsx)("div",{className:"col-md-4 col-12",children:(0,o.jsx)(b.Z,{isLoading:!0})},t))}):r&&r.length>0?r.map(e=>(0,o.jsx)("div",{className:"col-md-6 col-lg-4 col-12",children:(0,o.jsxs)("div",{id:"bs-card",className:"card",children:[(0,o.jsxs)("div",{className:"bs_image_card",children:[(0,o.jsx)(f(),{href:{pathname:"/news/".concat(e.slug),query:{language_id:e.language_id}},as:"/news/".concat(e.slug),children:(0,o.jsx)("img",{id:"bs-card-image",src:e.image,className:"card-img",alt:"bookmark news",onError:i.jM})}),(0,o.jsx)("button",{id:"bs-btnBookmark",className:"btn",onClick:t=>w(e.news_id,"0"),children:(0,o.jsx)(y.flH,{id:"bs-bookmark-logo",size:18})})]}),(0,o.jsxs)("div",{id:"bs-card-body",className:"card-body",children:[(0,o.jsx)("button",{id:"bs-btnCatagory",className:"btn btn-sm",type:"button",children:e.category_name}),(0,o.jsxs)(f(),{href:{pathname:"/news/".concat(e.slug),query:{language_id:e.language_id}},as:"/news/".concat(e.slug),children:[(0,o.jsx)("h5",{id:"bs-card-title",className:"card-title",children:e.title}),(0,o.jsxs)("p",{id:"bs-card-date",children:[(0,o.jsx)(n.vlc,{size:18,id:"bs-logoCalendar"}),L(e.date.slice(0,10))]})]})]})]})},e.id)):(0,o.jsx)("div",{className:"col-12 no_data mt-5",children:(0,o.jsxs)("div",{id:"bs-no-main",children:[(0,o.jsx)("img",{id:"bs-no-image",src:a.src,alt:"bookmark no data found news"}),(0,o.jsx)("p",{id:"bs-no-title",children:(0,o.jsx)("b",{children:(0,i.Iu)("addbookmark")})}),(0,o.jsx)("p",{id:"bs-no-text",children:(0,i.Iu)("dontforgetbookmark")})]})})})})})]})}},12645:function(e,t,r){var o=r(85893);r(67294);var a=r(13771),n=r(26963);t.Z=e=>{let{SecondElement:t,ThirdElement:r,FourthElement:l}=e,i=[{title:(0,o.jsxs)("span",{children:[(0,o.jsx)(n.FaHome,{size:25,id:"bcb-home-logo",className:"me-1"}),"Home"]}),href:"/"}];return""!==t&&i.push({title:t,href:"category"==t?"/all-categories":null}),""!==r&&i.push({title:r}),""!==l&&i.push({title:l,href:""}),(0,o.jsx)(a.Z,{className:"container breadcrumbWrapper",separator:"|",items:i})}},73680:function(e,t,r){r.d(t,{mo:function(){return h},Ue:function(){return f},VO:function(){return L},A3:function(){return w},p6:function(){return k},As:function(){return i},m7:function(){return l},HS:function(){return g},bg:function(){return u},jM:function(){return p},ln:function(){return y},wy:function(){return d},iM:function(){return s},ju:function(){return v},Iu:function(){return m},aF:function(){return b}});var o=r(85893),a=r(12198),n=JSON.parse('{"somethingMSg":"Something went wrong. Please try again after some time","bookmarkLbl":"Bookmarks","loginLbl":"Login","welTitle1":"Always Up-to-Date","welTitle2":"Bookmark & Share","welTitle3":"New Categories","welDes1":"Receive notifications for the most recent news updates and many more.","welDes2":"Save and easily share news with your friends using our intuitive news app feature.","welDes3":"Enjoy expertly tailored news, crafted exclusively for your interests.","nameLbl":"Name","emailLbl":"Email","passLbl":"Password","confpassLbl":"Confirm Password","priPolicy":"Privacy Policy","andLbl":" and ","termLbl":"Terms of Service","forgotPassLbl":"Forgot Password ?","internetmsg":"Internet Connection not available","loginMsg":"Login Successfully","loginNowLbl":"Login Now","logoutLbl":"Log Out","cancelBtn":"Cancel","noNews":"News Not Available","exitWR":"Double tap back button to exit","shareLbl":"Share","deactiveMsg":"You are deactivated by admin","bookmarkNotAvail":"Bookmarks Not Available","notiNotAvail":"Notifications Not Available","notificationLbl":"Notifications","logoutTxt":"Are you sure you want to Log Out?","yesLbl":"Yes","noLbl":"No","frgtPassHead":"Enter the email address associated with your account","forgotPassSub":"We will email you a link to reset your password","submitBtn":"Submit","verifyEmailMsg":"Please first verify your email address!!!","passReset":"Password reset link has been sent to your mail","profileUpdateMsg":"Profile Data Updated Successfully","bookmarkLogin":"Please Login to Access Your Bookmarks !!","preferenceSave":"Your preference saved!!","managePreferences":"Manage Preferences","loginReqMsg":"Login Required...","firstFillData":"Please First Fill Data...!","deleteTxt":"Delete","reportTxt":"Report","nameRequired":"Name is Required","nameLength":"Name should be atleast 2 character long","emailRequired":"email address is Required","emailValid":"Please enter a valid email Address!","pwdRequired":"Password is Required","confPassRequired":"Confirm Password is Required","confPassNotMatch":"Confirm Password not match","photoLibLbl":"Photo Library","cameraLbl":"Camera","verifSentMail":"Verification email sent to ","cancelLogin":"Login cancelled by the user.","loginTxt":"Log In","loginBtn":"Login","signupBtn":"Sign Up","otpVerifyLbl":"OTP\\nVerification","enterMblLbl":"Enter Your Mobile Number","receiveDigitLbl":"You\'ll Receive 6 digit code for phone number verification","reqOtpLbl":"Request OTP","otpSentLbl":"OTP has been sent to ","resendCodeLbl":"Resend Code in","mobileLbl":"Mobile","darkModeLbl":"Dark Mode","changeLang":"Change Language","rateUs":"Rate Us","shareApp":"Share App","weatherLbl":"Weather Forecast","categoryLbl":"Categories","allLbl":"All","comLbl":"Comment ","saveLbl":"Save","txtSizeLbl":"Text Size","speakLoudLbl":"Speak Loud","likeLbl":"likes","comsLbl":"Comments","shareThoghtLbl":"Share Your Thoughts.","replyLbl":"Replies","publicReply":"Add a public reply...","personalLbl":"Personal","newsLbl":"News","plzLbl":"Please","fastTrendNewsLbl":"Fastest Trending News ","enterOtpTxt":"Please Enter OTP","otpError":"Error validating OTP, try again","otpMsg":"OTP verified successfully","resendLbl":"Resend OTP","otpTimeoutLbl":"Otp Retrieval Timeout!!!","mblRequired":"Mobile number is Required","mblValid":"Please enter a valid mobile number!","codeSent":"Code Sent Successfully!!!","relatedNews":"You might also like","optSel":"Please Select One Option!!!","madeBy":"Made by","skip":"Skip","nxt":"Next","signInTab":"Sign In","agreeTermPolicyLbl":"By Logging In, you agree to our","agreeTCFirst":"Please Agree to our Privacy Policy first !!","addTCFirst":"Please Ask Admin to Add Privacy Policy & Terms and Conditions first !!","orLbl":"or Log In with","signupDescr":"Create\\nan Account","firstAccLbl":"First to access","allFunLbl":"all Functions","chooseLanLbl":"Select Language","videosLbl":"Videos","search":"Search","searchHomeNews":"Search News, Categories, etc.","viewMore":"View More","viewFullCoverage":"View full Coverage","updateName":"Update your Name","loginDescr":"Let\'s Sign \\nYou In","deleteAcc":"Delete Account","deleteAlertTitle":"Re-Login","deleteRelogin":"To Delete your Account, You need to Login again.\\nAfter that you will be able to Delete your Account.","deleteConfirm":"Are you sure?\\nDo You Really Want to Delete Your Account?","pwdLength":"Password should be more than 6 character long","userNotFound":"No user found for that email.","wrongPassword":"Wrong password provided for that user.","weakPassword":"The password provided is too weak.","emailAlreadyInUse":"The account already exists for that email.","invalidPhoneNumber":"The provided phone number is not valid.","invalidVerificationCode":"The sms verification code used to create the phone auth credential is invalid.","shareMsg":"You can find our app from below url","ago":"ago","minutes":"minutes","seconds":"seconds","hours":"hours","days":"days","justNow":"just now","about":"about","liveVideosLbl":"Live Videos","stdPostLbl":"Standard Post","videoYoutubeLbl":"Video (Youtube)","videoOtherUrlLbl":"Video (Other Url)","videoUploadLbl":"Video (Upload)","createNewsLbl":"Create News","step1Of2Lbl":"Step 1 of 2","catLbl":"Category","plzSelCatLbl":"Please select category","subcatLbl":"SubCategory","contentTypeLbl":"Content Type","uploadVideoLbl":"Upload Video","youtubeUrlLbl":"Youtube Url","otherUrlLbl":"Other Url","selContentTypeLbl":"Select Content Type","titleLbl":"Title","tagLbl":"Tag","showTilledDate":"Show Till Date","uploadMainImageLbl":"Upload Main Image","uploadOtherImageLbl":"Upload Other Image","plzUploadVideoLbl":"Please upload video!!!","plzAddMainImageLbl":"Please add main image!!!","selTagLbl":"Select Tag","selSubCatLbl":"Select Sub Category","selCatLbl":"Select Category","editNewsLbl":"Edit News","editLbl":"Edit","doYouReallyNewsLbl":"Do You Really Want to Delete this News?","delNewsLbl":"Delete News","newsTitleReqLbl":"News title is required!!!","plzAddValidTitleLbl":"Please add valid news title!!!","urlReqLbl":"Url is required!!!","plzValidUrlLbl":"Please add valid url!!!","manageNewsLbl":"Manage News","step2of2Lbl":"Step 2 of 2","descLbl":"Description","RetryLbl":"Retry","previewLbl":"Preview","sponsoredLbl":"Sponsored","searchForLbl":"Search Result for","readLessLbl":"Read less","readMoreLbl":"Read more","myProfile":"My Profile","noComments":"Be the First One to Comment !!!","minute":"minute","read":"read","selLocationLbl":"Select Location","metaKeywordLbl":"Meta Keyword","metaTitleLbl":"Meta Title","metaDescriptionLbl":"Meta Description","slugLbl":"Slug","metaTitleWarningLbl":"Meta Title length should not exceed 60 characters.","metaDescriptionWarningLbl":"Meta Description length should between 50 to 160 characters.","metaKeywordWarningLbl":"Meta Keywords are not more than 10 keyword phrases & should be comma separated.","slugWarningLbl":"Slug only accept lowercase letters, numbers, and hyphens. No spaces or special characters allowed.","metaTitleRequired":"Meta title is Required","metaDescriptionRequired":"Meta Description is Required","metaKeywordRequired":"Meta Keyword is Required","slugRequired":"Slug is Required","slugValid":"Please enter valid Slug!","slugUsedAlready":"This slug is already in use. Please add any other slug.","_comment":"APP STRINGS END HERE & WEB STRINGS START HERE","home":"Home","aboutus":"About Us","livenews":"Live News","breakingnews":"Breaking News","contactus":"Contact Us","bookmark":"Bookmark","logout":"Log out","login":"Log in","nodatafound":"No Data Found","addbookmark":"Add Bookmark","dontforgetbookmark":"Don\'t forget to Bookmark the News you like the most so that you can find those easily over here.","readmore":"Read More","fontsize":"Font Size","breaking":"Breaking","news":"News","viewall":"View All","categories":"Categories","leaveacomments":"Leave Comments","submitpost":"Submit Post","comment":"Comment","addreplyhere":"Add reply here","submitreply":"SUBMIT REPLY","reply":"Reply","facebook":"Facebook","instagram":"Instagram","linkedin":"LinkedIn","twitter":"Twitter","termsandcondition":"Terms & Conditions","copyright":"Copyright","allrights":"All right Reserved By","usefulllinks":"UseFull Links","followus":"Follow Us","enteremail":"Enter the email address associated with your account","createnewpassword":"Enter your email for create new password.","enter-email-password":"Enter your email address and password to access your account.","healthnews":"Health News","add-data-from-admin-panel":"No Data Found! Please Add Data From Admin Panel","likes":"Likes","by":"By","get-otp":"Get Otp","otp-sent":"OTP has been sent to","resend-otp":"Resend Otp","replay-comment":"Replay in your comment","enter-your-mobile-number":"Enter Your Mobile Number","six-didgit-code":"You can Receive 6 digit code for your number verification.","popularnews":"Popular News","Welcome":"Welcome","register-daily-news":"Enter the below details and Register for Daily News","username":"User Name","register":"Register","emailaddress":"Email Address","related-news":"Related News","welcomeback":"Welcome back!","sigin-with-facebook":"Sign in with Facebook","signin-with-google":"Sign in with Google","signin-with-phone":"Sign in with Phone","video-ews-explore":"Video News To Explore","More Pages":"More Pages","previous":"Previous","next":"Next","update-profile":"Update Profile","your-name":"Your Name","back":"Back","Profile update is not allowed in demo version.":"Profile update is not allowed in demo version.","flag":"Flag Successfully","breakingNewsLbl":"Breaking News","donthaveacc_lbl":"Don\'t Have an account ? ","signupLbl":"Sign Up","createAccLbl":"Create an account","comDelSucc":"Comment Delete Successfully...","comDisable":"Comments Disabled by Admin !!!","disabledCategory":"Category Disabled by Admin","More >>":"More >>","meta-title":"Meta Title","meta-description":"Meta Description","slug":"slug","meta-keywords":"Meta Keywords","titlerequired":"Title is required","metaTitlerequired":"Meta Title is required","metaDescriptionrequired":"Meta Description is required","metaKeywordsrequired":"Meta Keyword is required","slugrequired":"Slug is required","selectlanguage":"Please select language","selectcategory":"Please select category","contentTyperequired":"Please select content type","descriptionrequired":"Please select description","descriptionisrequire":"Description is required","resendCodeIn":"Resend Code In","newsDetails":"News Details","opt-verify":"OTP Verification","navigations":"Navigations","contactinfo":"Contact Info","downloadapp":"Download App","magicofapp":"Experienec the Magic of the News App"}');let l=function(e){let t=[],r=e.parentNode.firstChild;for(;r;)1===r.nodeType&&r!==e&&t.push(r),r=r.nextSibling;return t},i=function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(r){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),r(!1)},t)})},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(){e.style.removeProperty("display");let r=window.getComputedStyle(e).display;"none"===r&&(r="block"),e.style.display=r;let o=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=o+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)})},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?c(e,t):s(e,t)},u=()=>{let e=a.h.getState().user;if(e)try{if(e.data.firebase_id)return!0}catch(e){}return!1},m=e=>{var t,r;return(null===(t=a.h.getState().languages)||void 0===t?void 0:t.currentLanguageLabels.data)&&(null===(r=a.h.getState().languages)||void 0===r?void 0:r.currentLanguageLabels.data[e])||n[e]},g=e=>{e.target.src="/assets/images/no_image.jpeg"},p=e=>{var t,r;e.preventDefault();let o=a.h.getState().settings;e.target.src=o&&(null==o?void 0:null===(r=o.data)||void 0===r?void 0:null===(t=r.web_setting)||void 0===t?void 0:t.web_placeholder_image),e.target.src="/assets/images/placeholder.png"},b=(e,t)=>(null==e?void 0:e.length)>t?e.substring(0,t)+"...":e,y=e=>{e.target.src="/assets/images/user.svg"},h=()=>(0,o.jsx)("div",{className:"no_data_found text-center my-5",children:m("nodatafound")}),f=e=>Math.ceil(e.trim().split(" ").length/200),w=e=>new DOMParser().parseFromString(e,"text/html").body.textContent||"",v=e=>{let t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},L=e=>{let t=RegExp('<script type="application\\/ld\\+json">(.*?)<\\/script>',"s"),r=e.match(t);if(r&&r.length>=2){let e=r[1];try{return JSON.parse(e)}catch(e){console.error("Error parsing JSON:",e)}}return null},k=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}}]);