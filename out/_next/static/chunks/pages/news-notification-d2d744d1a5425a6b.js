(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9307,3680],{23840:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news-notification",function(){return o(54219)}])},28864:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{default:function(){return l},noSSR:function(){return i}});let a=o(38754);o(85893),o(67294);let r=a._(o(56016));function n(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let o=r.default,a={loading:e=>{let{error:t,isLoading:o,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let l=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?o({...a,loader:()=>null!=l?l().then(n):Promise.resolve(n(()=>null))}):(delete a.webpack,delete a.modules,i(o,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},60572:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=o(38754)._(o(67294)).default.createContext(null)},56016:function(e,t,o){"use strict";/**
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
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let a=o(38754)._(o(67294)),r=o(60572),n=[],i=[],l=!1;function s(e){let t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then(e=>(o.loading=!1,o.loaded=e,e)).catch(e=>{throw o.loading=!1,o.error=e,e}),o}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function s(){if(!n){let t=new d(e,o);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!l){let e=o.webpack?o.webpack():o.modules;e&&i.push(t=>{for(let o of e)if(t.includes(o))return s()})}function u(e,t){!function(){s();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach(t=>{e(t)})}();let i=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return i.loading||i.error?a.default.createElement(o.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?a.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return u.preload=()=>s(),u.displayName="LoadableComponent",a.default.forwardRef(u)}(s,e)}function c(e,t){let o=[];for(;e.length;){let a=e.pop();o.push(a(t))}return Promise.all(o).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(n).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let o=()=>(l=!0,t());c(i,e).then(o,o)})),window.__NEXT_PRELOADREADY=u.preloadReady;let m=u},58622:function(e,t,o){"use strict";var a=o(85893),r=o(9008),n=o.n(r);t.Z=e=>{let{title:t,description:o,keywords:r,ogImage:i,pathName:l,schema:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{name:"name",content:"https://devserver.siyasatsamwad.com"}),(0,a.jsx)("meta",{name:"description",content:o||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{name:"keywords",content:r||"Breaking news,Top stories,Headlines,Current events,Latest news,World news,National news,Local news,Politics,Business,Technology,Entertainment,Sports,Health,Science,Environment,Education,Crime,Immigration,Weather."}),(0,a.jsx)("meta",{name:"image",content:i||null}),(0,a.jsx)("meta",{property:"og:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{property:"og:description",content:o||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{property:"og:image",content:i||null}),(0,a.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,a.jsx)("meta",{property:"og:image:height",content:"608"}),(0,a.jsx)("meta",{property:"og:url",content:l||"https://devserver.siyasatsamwad.com"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,a.jsx)("meta",{property:"og:site_name",content:"https://devserver.siyasatsamwad.com"}),(0,a.jsx)("meta",{name:"twitter:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{name:"twitter:description",content:o||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{name:"twitter:image",content:i||null}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("link",{rel:"canonical",href:"".concat("https://devserver.siyasatsamwad.com")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s||null)}},"structured-data")]}),(0,a.jsx)("h1",{className:"d-none",children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"})]})}},54219:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return d}});var a=o(85893),r=o(5152),n=o.n(r),i=o(58622),l=o(73680);o(81823);let s=n()(()=>Promise.all([o.e(1154),o.e(4980),o.e(1778),o.e(5445),o.e(3874),o.e(4617),o.e(6132),o.e(2013),o.e(9332),o.e(417),o.e(401),o.e(4650),o.e(7633),o.e(3458),o.e(197),o.e(3166),o.e(7464)]).then(o.bind(o,77464)),{loadableGenerated:{webpack:()=>[77464]},ssr:!1});var d=!0;t.default=e=>{let{seoData:t,currentURL:o}=e,r=null;if(t&&t.data&&t.data.length>0&&t.data[0].schema_markup){let e=t.data[0].schema_markup;r=(0,l.VO)(e)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{title:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_title,description:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_description,keywords:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_keyword,ogImage:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].image,pathName:o,schema:r}),(0,a.jsx)(s,{})]})}},73680:function(e,t,o){"use strict";o.d(t,{mo:function(){return h},Ue:function(){return f},VO:function(){return v},A3:function(){return w},p6:function(){return L},As:function(){return l},m7:function(){return i},HS:function(){return p},bg:function(){return c},jM:function(){return g},ln:function(){return b},wy:function(){return u},iM:function(){return s},Iu:function(){return m},aF:function(){return y}});var a=o(85893),r=o(28345),n=JSON.parse('{"somethingMSg":"Something went wrong. Please try again after some time","bookmarkLbl":"Bookmarks","loginLbl":"Login","welTitle1":"Always Up-to-Date","welTitle2":"Bookmark & Share","welTitle3":"New Categories","welDes1":"Receive notifications for the most recent news updates and many more.","welDes2":"Save and easily share news with your friends using our intuitive news app feature.","welDes3":"Enjoy expertly tailored news, crafted exclusively for your interests.","nameLbl":"Name","emailLbl":"Email","passLbl":"Password","confpassLbl":"Confirm Password","priPolicy":"Privacy Policy","andLbl":" and ","termLbl":"Terms of Service","forgotPassLbl":"Forgot Password ?","internetmsg":"Internet Connection not available","loginMsg":"Login Successfully","loginNowLbl":"Login Now","logoutLbl":"Log Out","cancelBtn":"Cancel","noNews":"News Not Available","exitWR":"Double tap back button to exit","shareLbl":"Share","deactiveMsg":"You are deactivated by admin","bookmarkNotAvail":"Bookmarks Not Available","notiNotAvail":"Notifications Not Available","notificationLbl":"Notifications","logoutTxt":"Are you sure you want to Log Out?","yesLbl":"Yes","noLbl":"No","frgtPassHead":"Enter the email address associated with your account","forgotPassSub":"We will email you a link to reset your password","submitBtn":"Submit","verifyEmailMsg":"Please first verify your email address!!!","passReset":"Password reset link has been sent to your mail","profileUpdateMsg":"Profile Data Updated Successfully","bookmarkLogin":"Please Login to Access Your Bookmarks !!","preferenceSave":"Your preference saved!!","managePreferences":"Manage Preferences","loginReqMsg":"Login Required...","firstFillData":"Please First Fill Data...!","deleteTxt":"Delete","reportTxt":"Report","nameRequired":"Name is Required","nameLength":"Name should be atleast 2 character long","emailRequired":"email address is Required","emailValid":"Please enter a valid email Address!","pwdRequired":"Password is Required","confPassRequired":"Confirm Password is Required","confPassNotMatch":"Confirm Password not match","photoLibLbl":"Photo Library","cameraLbl":"Camera","verifSentMail":"Verification email sent to ","cancelLogin":"Login cancelled by the user.","loginTxt":"Log In","loginBtn":"Login","signupBtn":"Sign Up","otpVerifyLbl":"OTP\\nVerification","enterMblLbl":"Enter Your Mobile Number","receiveDigitLbl":"You\'ll Receive 6 digit code for phone number verification","reqOtpLbl":"Request OTP","otpSentLbl":"OTP has been sent to ","resendCodeLbl":"Resend Code in","mobileLbl":"Mobile","darkModeLbl":"Dark Mode","changeLang":"Change Language","rateUs":"Rate Us","shareApp":"Share App","weatherLbl":"Weather Forecast","categoryLbl":"Categories","allLbl":"All","comLbl":"Comment ","saveLbl":"Save","txtSizeLbl":"Text Size","speakLoudLbl":"Speak Loud","likeLbl":"likes","comsLbl":"Comments","shareThoghtLbl":"Share Your Thoughts.","replyLbl":"Replies","publicReply":"Add a public reply...","personalLbl":"Personal","newsLbl":"News","plzLbl":"Please","fastTrendNewsLbl":"Fastest Trending News ","enterOtpTxt":"Please Enter OTP","otpError":"Error validating OTP, try again","otpMsg":"OTP verified successfully","resendLbl":"Resend OTP","otpTimeoutLbl":"Otp Retrieval Timeout!!!","mblRequired":"Mobile number is Required","mblValid":"Please enter a valid mobile number!","codeSent":"Code Sent Successfully!!!","relatedNews":"You might also like","optSel":"Please Select One Option!!!","madeBy":"Made by","skip":"Skip","nxt":"Next","signInTab":"Sign In","agreeTermPolicyLbl":"By Logging In, you agree to our","agreeTCFirst":"Please Agree to our Privacy Policy first !!","addTCFirst":"Please Ask Admin to Add Privacy Policy & Terms and Conditions first !!","orLbl":"or Log In with","signupDescr":"Create\\nan Account","firstAccLbl":"First to access","allFunLbl":"all Functions","chooseLanLbl":"Select Language","videosLbl":"Videos","search":"Search","searchHomeNews":"Search News, Categories, etc.","viewMore":"View More","viewFullCoverage":"View full Coverage","updateName":"Update your Name","loginDescr":"Let\'s Sign \\nYou In","deleteAcc":"Delete Account","deleteAlertTitle":"Re-Login","deleteRelogin":"To Delete your Account, You need to Login again.\\nAfter that you will be able to Delete your Account.","deleteConfirm":"Are you sure?\\nDo You Really Want to Delete Your Account?","pwdLength":"Password should be more than 6 character long","userNotFound":"No user found for that email.","wrongPassword":"Wrong password provided for that user.","weakPassword":"The password provided is too weak.","emailAlreadyInUse":"The account already exists for that email.","invalidPhoneNumber":"The provided phone number is not valid.","invalidVerificationCode":"The sms verification code used to create the phone auth credential is invalid.","shareMsg":"You can find our app from below url","ago":"ago","minutes":"minutes","seconds":"seconds","hours":"hours","days":"days","justNow":"just now","about":"about","liveVideosLbl":"Live Videos","stdPostLbl":"Standard Post","videoYoutubeLbl":"Video (Youtube)","videoOtherUrlLbl":"Video (Other Url)","videoUploadLbl":"Video (Upload)","createNewsLbl":"Create News","step1Of2Lbl":"Step 1 of 2","catLbl":"Category","plzSelCatLbl":"Please select category","subcatLbl":"SubCategory","contentTypeLbl":"Content Type","uploadVideoLbl":"Upload Video","youtubeUrlLbl":"Youtube Url","otherUrlLbl":"Other Url","selContentTypeLbl":"Select Content Type","titleLbl":"Title","tagLbl":"Tag","showTilledDate":"Show Till Date","uploadMainImageLbl":"Upload Main Image","uploadOtherImageLbl":"Upload Other Image","plzUploadVideoLbl":"Please upload video!!!","plzAddMainImageLbl":"Please add main image!!!","selTagLbl":"Select Tag","selSubCatLbl":"Select Sub Category","selCatLbl":"Select Category","editNewsLbl":"Edit News","editLbl":"Edit","doYouReallyNewsLbl":"Do You Really Want to Delete this News?","delNewsLbl":"Delete News","newsTitleReqLbl":"News title is required!!!","plzAddValidTitleLbl":"Please add valid news title!!!","urlReqLbl":"Url is required!!!","plzValidUrlLbl":"Please add valid url!!!","manageNewsLbl":"Manage News","step2of2Lbl":"Step 2 of 2","descLbl":"Description","RetryLbl":"Retry","previewLbl":"Preview","sponsoredLbl":"Sponsored","searchForLbl":"Search Result for","readLessLbl":"Read less","readMoreLbl":"Read more","myProfile":"My Profile","noComments":"Be the First One to Comment !!!","minute":"minute","read":"read","selLocationLbl":"Select Location","metaKeywordLbl":"Meta Keyword","metaTitleLbl":"Meta Title","metaDescriptionLbl":"Meta Description","slugLbl":"Slug","metaTitleWarningLbl":"Meta Title length should not exceed 60 characters.","metaDescriptionWarningLbl":"Meta Description length should between 50 to 160 characters.","metaKeywordWarningLbl":"Meta Keywords are not more than 10 keyword phrases & should be comma separated.","slugWarningLbl":"Slug only accept lowercase letters, numbers, and hyphens. No spaces or special characters allowed.","metaTitleRequired":"Meta title is Required","metaDescriptionRequired":"Meta Description is Required","metaKeywordRequired":"Meta Keyword is Required","slugRequired":"Slug is Required","slugValid":"Please enter valid Slug!","slugUsedAlready":"This slug is already in use. Please add any other slug.","_comment":"APP STRINGS END HERE & WEB STRINGS START HERE","home":"Home","aboutus":"About Us","livenews":"Live News","breakingnews":"Breaking News","contactus":"Contact Us","bookmark":"Bookmark","logout":"Log out","login":"Log in","nodatafound":"No Data Found","addbookmark":"Add Bookmark","dontforgetbookmark":"Don\'t forget to Bookmark the News you like the most so that you can find those easily over here.","readmore":"Read More","fontsize":"Font Size","breaking":"Breaking","news":"News","viewall":"View All","categories":"Categories","leaveacomments":"Leave Comments","submitpost":"Submit Post","comment":"Comment","addreplyhere":"Add reply here","submitreply":"SUBMIT REPLY","reply":"Reply","facebook":"Facebook","instagram":"Instagram","linkedin":"LinkedIn","twitter":"Twitter","termsandcondition":"Terms & Conditions","copyright":"Copyright","allrights":"All right Reserved By","usefulllinks":"UseFull Links","followus":"Follow Us","enteremail":"Enter the email address associated with your account","createnewpassword":"Enter your email for create new password.","enter-email-password":"Enter your email address and password to access your account.","healthnews":"Health News","add-data-from-admin-panel":"No Data Found! Please Add Data From Admin Panel","likes":"Likes","by":"By","get-otp":"Get Otp","otp-sent":"OTP has been sent to","resend-otp":"Resend Otp","replay-comment":"Replay in your comment","enter-your-mobile-number":"Enter Your Mobile Number","six-didgit-code":"You can Receive 6 digit code for your number verification.","popularnews":"Popular News","Welcome":"Welcome","register-daily-news":"Enter the below details and Register for Daily News","username":"User Name","register":"Register","emailaddress":"Email Address","related-news":"Related News","welcomeback":"Welcome back!","sigin-with-facebook":"Sign in with Facebook","signin-with-google":"Sign in with Google","signin-with-phone":"Sign in with Phone","video-ews-explore":"Video News To Explore","More Pages":"More Pages","previous":"Previous","next":"Next","update-profile":"Update Profile","your-name":"Your Name","back":"Back","Profile update is not allowed in demo version.":"Profile update is not allowed in demo version.","flag":"Flag Successfully","breakingNewsLbl":"Breaking News","donthaveacc_lbl":"Don\'t Have an account ? ","signupLbl":"Sign Up","createAccLbl":"Create an account","comDelSucc":"Comment Delete Successfully...","comDisable":"Comments Disabled by Admin !!!","disabledCategory":"Category Disabled by Admin","More >>":"More >>","meta-title":"Meta Title","meta-description":"Meta Description","slug":"slug","meta-keywords":"Meta Keywords","titlerequired":"Title is required","metaTitlerequired":"Meta Title is required","metaDescriptionrequired":"Meta Description is required","metaKeywordsrequired":"Meta Keyword is required","slugrequired":"Slug is required","selectlanguage":"Please select language","selectcategory":"Please select category","contentTyperequired":"Please select content type","descriptionrequired":"Please select description","descriptionisrequire":"Description is required","resendCodeIn":"Resend Code In","newsDetails":"News Details","opt-verify":"OTP Verification","navigations":"Navigations","contactinfo":"Contact Info","downloadapp":"Download App","magicofapp":"Experienec the Magic of the News App"}');let i=function(e){let t=[],o=e.parentNode.firstChild;for(;o;)1===o.nodeType&&o!==e&&t.push(o),o=o.nextSibling;return t},l=function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(o){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),o(!1)},t)})},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(){e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o;let a=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=a+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)})},u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?d(e,t):s(e,t)},c=()=>{let e=r.h.getState().user;if(e)try{if(e.data.firebase_id)return!0}catch(e){}return!1},m=e=>{var t,o;return(null===(t=r.h.getState().languages)||void 0===t?void 0:t.currentLanguageLabels.data)&&(null===(o=r.h.getState().languages)||void 0===o?void 0:o.currentLanguageLabels.data[e])||n[e]},p=e=>{e.target.src="/assets/images/no_image.jpeg"},g=e=>{var t,o;e.preventDefault();let a=r.h.getState().settings;e.target.src=a&&(null==a?void 0:null===(o=a.data)||void 0===o?void 0:null===(t=o.web_setting)||void 0===t?void 0:t.web_placeholder_image),e.target.src="/assets/images/placeholder.png"},y=(e,t)=>(null==e?void 0:e.length)>t?e.substring(0,t)+"...":e,b=e=>{e.target.src="/assets/images/user.svg"},h=()=>(0,a.jsx)("div",{className:"no_data_found text-center my-5",children:m("nodatafound")}),f=e=>Math.ceil(e.trim().split(" ").length/200),w=e=>new DOMParser().parseFromString(e,"text/html").body.textContent||"",v=e=>{let t=RegExp('<script type="application\\/ld\\+json">(.*?)<\\/script>',"s"),o=e.match(t);if(o&&o.length>=2){let e=o[1];try{return JSON.parse(e)}catch(e){console.error("Error parsing JSON:",e)}}return null},L=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})},5152:function(e,t,o){e.exports=o(28864)},9008:function(e,t,o){e.exports=o(7828)}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=23840)}),_N_E=e.O()}]);