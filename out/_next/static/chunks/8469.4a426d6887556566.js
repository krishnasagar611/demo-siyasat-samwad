"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8469,3680],{12645:function(e,t,o){var a=o(85893);o(67294);var r=o(13771),i=o(26963);t.Z=e=>{let{SecondElement:t,ThirdElement:o,FourthElement:l}=e,n=[{title:(0,a.jsxs)("span",{children:[(0,a.jsx)(i.FaHome,{size:25,id:"bcb-home-logo",className:"me-1"}),"Home"]}),href:"/"}];return""!==t&&n.push({title:t,href:"category"==t?"/all-categories":null}),""!==o&&n.push({title:o}),""!==l&&n.push({title:l,href:""}),(0,a.jsx)(r.Z,{className:"container breadcrumbWrapper",separator:"|",items:n})}},58469:function(e,t,o){o.r(t);var a=o(85893),r=o(60839),i=o(41664),l=o.n(i),n=o(12645),s=o(9473),d=o(51527),c=o(73680),u=o(11163),g=o(81823),m=o(87633),p=o(58928),y=o(99131),b=o(81426),h=o(87001);o(11358);var w=o(67294),v=o(57981);t.default=()=>{var e,t;let[o,i]=(0,w.useState)(0),L=(0,u.useRouter)().query;L.category_slug;let f=L.slug;L.slug;let{id:P}=(0,g.G3)();(0,s.v9)(d.Aj);let N=(0,s.v9)(b.zd),S=N&&N.lat,T=N&&N.long,[k,M]=(0,w.useState)({loading:!1,loadMoreLoading:!1}),[R,x]=(0,w.useState)(!1),[C,D]=(0,w.useState)([]),[A,q]=(0,w.useState)(0),[j,E]=(0,w.useState)(""),U=async()=>{if(N||o||f){R?M({loadMoreLoading:!0}):M({loading:!0});try{let{data:e}=await h.z.getNews({offset:8*A,limit:8,language_id:P,category_slug:f,latitude:S,longitude:T});return e.data.sort((e,t)=>new Date(t.date)-new Date(e.date)),E(e.total),M({loading:!1}),M({loadMoreLoading:!1}),e}catch(e){console.log(e),D([]),M({loading:!1})}}},{data:O}=(0,m.a)({queryKey:["category-news",P,N,f,A],queryFn:()=>U()});(0,w.useEffect)(()=>{O&&O.data&&(R?D(e=>[...e,...O.data]):D(O.data))},[O]),(0,w.useEffect)(()=>{},[j,k]),O&&O.data&&O.data.slice(0,8);let F=O&&O.data&&(null===(t=O.data[0])||void 0===t?void 0:null===(e=t.category)||void 0===e?void 0:e.category_name);return O&&O.total,(0,a.jsx)(p.default,{children:(0,a.jsxs)("section",{className:"categoryview_Section",children:[(0,a.jsx)(n.Z,{SecondElement:"category",ThirdElement:F&&F,link:"/all-categories"}),(0,a.jsx)("div",{id:"cv-main",className:"bg-white py-3",children:(0,a.jsx)("div",{id:"cv-content",className:"my-5 container",children:k.loading?(0,a.jsx)("div",{className:"row",children:[void 0,void 0,void 0].map((e,t)=>(0,a.jsx)("div",{className:"col-md-4 col-12",children:(0,a.jsx)(y.Z,{isLoading:!0})},t))}):(0,a.jsxs)("div",{className:"row",children:[C&&(null==C?void 0:C.length)>0?C.map(e=>(0,a.jsx)("div",{className:"col-lg-3 col-md-4 col-12 ",children:(0,a.jsx)(l(),{id:"Link-all",href:{pathname:"/news/".concat(e.slug),query:{language_id:e.language_id}},as:"/news/".concat(e.slug),children:(0,a.jsxs)("div",{id:"cv-card",className:"card",children:[(0,a.jsx)("img",{id:"cv-card-image",src:e.image,className:"card-img",alt:e.title,onError:c.jM}),(0,a.jsxs)("div",{id:"cv-card-body",className:"card-body",children:[(0,a.jsx)("button",{id:"cv-btnCatagory",className:"btn btn-sm",type:"button",children:e.category.category_name}),(0,a.jsx)("p",{id:"cv-card-title",className:"card-title",children:e.title}),(0,a.jsxs)("p",{id:"cv-card-date",children:[(0,a.jsx)(r.vlc,{size:18,id:"cv-logoCalendar"}),(0,c.p6)(e.date)]})]})]})})},e.id)):(0,a.jsx)(a.Fragment,{children:(0,c.mo)()}),j>8&&j!==C.length?(0,a.jsx)(v.Z,{handleLoadMore:()=>{x(!0),q(A+1)},loadMoreLoading:k.loadMoreLoading}):null]})})})]})})}},57981:function(e,t,o){o.d(t,{Z:function(){return i}});var a=o(85893);o(67294);var r=()=>(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"loadMoreSpinnerWrapper",children:(0,a.jsx)("div",{className:"loadMoreSpinner"})})}),i=e=>{let{handleLoadMore:t,loadMoreLoading:o}=e;return(0,a.jsx)("div",{children:o?(0,a.jsx)(r,{}):(0,a.jsx)("button",{onClick:t,className:"loadMoreBtn commonBtn",children:"Load More"})})}},73680:function(e,t,o){o.d(t,{mo:function(){return h},Ue:function(){return w},VO:function(){return f},A3:function(){return v},p6:function(){return P},As:function(){return n},m7:function(){return l},HS:function(){return m},bg:function(){return u},jM:function(){return p},ln:function(){return b},wy:function(){return c},iM:function(){return s},ju:function(){return L},Iu:function(){return g},aF:function(){return y}});var a=o(85893),r=o(12198),i=JSON.parse('{"somethingMSg":"Something went wrong. Please try again after some time","bookmarkLbl":"Bookmarks","loginLbl":"Login","welTitle1":"Always Up-to-Date","welTitle2":"Bookmark & Share","welTitle3":"New Categories","welDes1":"Receive notifications for the most recent news updates and many more.","welDes2":"Save and easily share news with your friends using our intuitive news app feature.","welDes3":"Enjoy expertly tailored news, crafted exclusively for your interests.","nameLbl":"Name","emailLbl":"Email","passLbl":"Password","confpassLbl":"Confirm Password","priPolicy":"Privacy Policy","andLbl":" and ","termLbl":"Terms of Service","forgotPassLbl":"Forgot Password ?","internetmsg":"Internet Connection not available","loginMsg":"Login Successfully","loginNowLbl":"Login Now","logoutLbl":"Log Out","cancelBtn":"Cancel","noNews":"News Not Available","exitWR":"Double tap back button to exit","shareLbl":"Share","deactiveMsg":"You are deactivated by admin","bookmarkNotAvail":"Bookmarks Not Available","notiNotAvail":"Notifications Not Available","notificationLbl":"Notifications","logoutTxt":"Are you sure you want to Log Out?","yesLbl":"Yes","noLbl":"No","frgtPassHead":"Enter the email address associated with your account","forgotPassSub":"We will email you a link to reset your password","submitBtn":"Submit","verifyEmailMsg":"Please first verify your email address!!!","passReset":"Password reset link has been sent to your mail","profileUpdateMsg":"Profile Data Updated Successfully","bookmarkLogin":"Please Login to Access Your Bookmarks !!","preferenceSave":"Your preference saved!!","managePreferences":"Manage Preferences","loginReqMsg":"Login Required...","firstFillData":"Please First Fill Data...!","deleteTxt":"Delete","reportTxt":"Report","nameRequired":"Name is Required","nameLength":"Name should be atleast 2 character long","emailRequired":"email address is Required","emailValid":"Please enter a valid email Address!","pwdRequired":"Password is Required","confPassRequired":"Confirm Password is Required","confPassNotMatch":"Confirm Password not match","photoLibLbl":"Photo Library","cameraLbl":"Camera","verifSentMail":"Verification email sent to ","cancelLogin":"Login cancelled by the user.","loginTxt":"Log In","loginBtn":"Login","signupBtn":"Sign Up","otpVerifyLbl":"OTP\\nVerification","enterMblLbl":"Enter Your Mobile Number","receiveDigitLbl":"You\'ll Receive 6 digit code for phone number verification","reqOtpLbl":"Request OTP","otpSentLbl":"OTP has been sent to ","resendCodeLbl":"Resend Code in","mobileLbl":"Mobile","darkModeLbl":"Dark Mode","changeLang":"Change Language","rateUs":"Rate Us","shareApp":"Share App","weatherLbl":"Weather Forecast","categoryLbl":"Categories","allLbl":"All","comLbl":"Comment ","saveLbl":"Save","txtSizeLbl":"Text Size","speakLoudLbl":"Speak Loud","likeLbl":"likes","comsLbl":"Comments","shareThoghtLbl":"Share Your Thoughts.","replyLbl":"Replies","publicReply":"Add a public reply...","personalLbl":"Personal","newsLbl":"News","plzLbl":"Please","fastTrendNewsLbl":"Fastest Trending News ","enterOtpTxt":"Please Enter OTP","otpError":"Error validating OTP, try again","otpMsg":"OTP verified successfully","resendLbl":"Resend OTP","otpTimeoutLbl":"Otp Retrieval Timeout!!!","mblRequired":"Mobile number is Required","mblValid":"Please enter a valid mobile number!","codeSent":"Code Sent Successfully!!!","relatedNews":"You might also like","optSel":"Please Select One Option!!!","madeBy":"Made by","skip":"Skip","nxt":"Next","signInTab":"Sign In","agreeTermPolicyLbl":"By Logging In, you agree to our","agreeTCFirst":"Please Agree to our Privacy Policy first !!","addTCFirst":"Please Ask Admin to Add Privacy Policy & Terms and Conditions first !!","orLbl":"or Log In with","signupDescr":"Create\\nan Account","firstAccLbl":"First to access","allFunLbl":"all Functions","chooseLanLbl":"Select Language","videosLbl":"Videos","search":"Search","searchHomeNews":"Search News, Categories, etc.","viewMore":"View More","viewFullCoverage":"View full Coverage","updateName":"Update your Name","loginDescr":"Let\'s Sign \\nYou In","deleteAcc":"Delete Account","deleteAlertTitle":"Re-Login","deleteRelogin":"To Delete your Account, You need to Login again.\\nAfter that you will be able to Delete your Account.","deleteConfirm":"Are you sure?\\nDo You Really Want to Delete Your Account?","pwdLength":"Password should be more than 6 character long","userNotFound":"No user found for that email.","wrongPassword":"Wrong password provided for that user.","weakPassword":"The password provided is too weak.","emailAlreadyInUse":"The account already exists for that email.","invalidPhoneNumber":"The provided phone number is not valid.","invalidVerificationCode":"The sms verification code used to create the phone auth credential is invalid.","shareMsg":"You can find our app from below url","ago":"ago","minutes":"minutes","seconds":"seconds","hours":"hours","days":"days","justNow":"just now","about":"about","liveVideosLbl":"Live Videos","stdPostLbl":"Standard Post","videoYoutubeLbl":"Video (Youtube)","videoOtherUrlLbl":"Video (Other Url)","videoUploadLbl":"Video (Upload)","createNewsLbl":"Create News","step1Of2Lbl":"Step 1 of 2","catLbl":"Category","plzSelCatLbl":"Please select category","subcatLbl":"SubCategory","contentTypeLbl":"Content Type","uploadVideoLbl":"Upload Video","youtubeUrlLbl":"Youtube Url","otherUrlLbl":"Other Url","selContentTypeLbl":"Select Content Type","titleLbl":"Title","tagLbl":"Tag","showTilledDate":"Show Till Date","uploadMainImageLbl":"Upload Main Image","uploadOtherImageLbl":"Upload Other Image","plzUploadVideoLbl":"Please upload video!!!","plzAddMainImageLbl":"Please add main image!!!","selTagLbl":"Select Tag","selSubCatLbl":"Select Sub Category","selCatLbl":"Select Category","editNewsLbl":"Edit News","editLbl":"Edit","doYouReallyNewsLbl":"Do You Really Want to Delete this News?","delNewsLbl":"Delete News","newsTitleReqLbl":"News title is required!!!","plzAddValidTitleLbl":"Please add valid news title!!!","urlReqLbl":"Url is required!!!","plzValidUrlLbl":"Please add valid url!!!","manageNewsLbl":"Manage News","step2of2Lbl":"Step 2 of 2","descLbl":"Description","RetryLbl":"Retry","previewLbl":"Preview","sponsoredLbl":"Sponsored","searchForLbl":"Search Result for","readLessLbl":"Read less","readMoreLbl":"Read more","myProfile":"My Profile","noComments":"Be the First One to Comment !!!","minute":"minute","read":"read","selLocationLbl":"Select Location","metaKeywordLbl":"Meta Keyword","metaTitleLbl":"Meta Title","metaDescriptionLbl":"Meta Description","slugLbl":"Slug","metaTitleWarningLbl":"Meta Title length should not exceed 60 characters.","metaDescriptionWarningLbl":"Meta Description length should between 50 to 160 characters.","metaKeywordWarningLbl":"Meta Keywords are not more than 10 keyword phrases & should be comma separated.","slugWarningLbl":"Slug only accept lowercase letters, numbers, and hyphens. No spaces or special characters allowed.","metaTitleRequired":"Meta title is Required","metaDescriptionRequired":"Meta Description is Required","metaKeywordRequired":"Meta Keyword is Required","slugRequired":"Slug is Required","slugValid":"Please enter valid Slug!","slugUsedAlready":"This slug is already in use. Please add any other slug.","_comment":"APP STRINGS END HERE & WEB STRINGS START HERE","home":"Home","aboutus":"About Us","livenews":"Live News","breakingnews":"Breaking News","contactus":"Contact Us","bookmark":"Bookmark","logout":"Log out","login":"Log in","nodatafound":"No Data Found","addbookmark":"Add Bookmark","dontforgetbookmark":"Don\'t forget to Bookmark the News you like the most so that you can find those easily over here.","readmore":"Read More","fontsize":"Font Size","breaking":"Breaking","news":"News","viewall":"View All","categories":"Categories","leaveacomments":"Leave Comments","submitpost":"Submit Post","comment":"Comment","addreplyhere":"Add reply here","submitreply":"SUBMIT REPLY","reply":"Reply","facebook":"Facebook","instagram":"Instagram","linkedin":"LinkedIn","twitter":"Twitter","termsandcondition":"Terms & Conditions","copyright":"Copyright","allrights":"All right Reserved By","usefulllinks":"UseFull Links","followus":"Follow Us","enteremail":"Enter the email address associated with your account","createnewpassword":"Enter your email for create new password.","enter-email-password":"Enter your email address and password to access your account.","healthnews":"Health News","add-data-from-admin-panel":"No Data Found! Please Add Data From Admin Panel","likes":"Likes","by":"By","get-otp":"Get Otp","otp-sent":"OTP has been sent to","resend-otp":"Resend Otp","replay-comment":"Replay in your comment","enter-your-mobile-number":"Enter Your Mobile Number","six-didgit-code":"You can Receive 6 digit code for your number verification.","popularnews":"Popular News","Welcome":"Welcome","register-daily-news":"Enter the below details and Register for Daily News","username":"User Name","register":"Register","emailaddress":"Email Address","related-news":"Related News","welcomeback":"Welcome back!","sigin-with-facebook":"Sign in with Facebook","signin-with-google":"Sign in with Google","signin-with-phone":"Sign in with Phone","video-ews-explore":"Video News To Explore","More Pages":"More Pages","previous":"Previous","next":"Next","update-profile":"Update Profile","your-name":"Your Name","back":"Back","Profile update is not allowed in demo version.":"Profile update is not allowed in demo version.","flag":"Flag Successfully","breakingNewsLbl":"Breaking News","donthaveacc_lbl":"Don\'t Have an account ? ","signupLbl":"Sign Up","createAccLbl":"Create an account","comDelSucc":"Comment Delete Successfully...","comDisable":"Comments Disabled by Admin !!!","disabledCategory":"Category Disabled by Admin","More >>":"More >>","meta-title":"Meta Title","meta-description":"Meta Description","slug":"slug","meta-keywords":"Meta Keywords","titlerequired":"Title is required","metaTitlerequired":"Meta Title is required","metaDescriptionrequired":"Meta Description is required","metaKeywordsrequired":"Meta Keyword is required","slugrequired":"Slug is required","selectlanguage":"Please select language","selectcategory":"Please select category","contentTyperequired":"Please select content type","descriptionrequired":"Please select description","descriptionisrequire":"Description is required","resendCodeIn":"Resend Code In","newsDetails":"News Details","opt-verify":"OTP Verification","navigations":"Navigations","contactinfo":"Contact Info","downloadapp":"Download App","magicofapp":"Experienec the Magic of the News App"}');let l=function(e){let t=[],o=e.parentNode.firstChild;for(;o;)1===o.nodeType&&o!==e&&t.push(o),o=o.nextSibling;return t},n=function(e,t){for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(o){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),o(!1)},t)})},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return new Promise(function(){e.style.removeProperty("display");let o=window.getComputedStyle(e).display;"none"===o&&(o="block"),e.style.display=o;let a=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=a+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)})},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return"none"===window.getComputedStyle(e).display?d(e,t):s(e,t)},u=()=>{let e=r.h.getState().user;if(e)try{if(e.data.firebase_id)return!0}catch(e){}return!1},g=e=>{var t,o;return(null===(t=r.h.getState().languages)||void 0===t?void 0:t.currentLanguageLabels.data)&&(null===(o=r.h.getState().languages)||void 0===o?void 0:o.currentLanguageLabels.data[e])||i[e]},m=e=>{e.target.src="/assets/images/no_image.jpeg"},p=e=>{var t,o;e.preventDefault();let a=r.h.getState().settings;e.target.src=a&&(null==a?void 0:null===(o=a.data)||void 0===o?void 0:null===(t=o.web_setting)||void 0===t?void 0:t.web_placeholder_image),e.target.src="/assets/images/placeholder.png"},y=(e,t)=>(null==e?void 0:e.length)>t?e.substring(0,t)+"...":e,b=e=>{e.target.src="/assets/images/user.svg"},h=()=>(0,a.jsx)("div",{className:"no_data_found text-center my-5",children:g("nodatafound")}),w=e=>Math.ceil(e.trim().split(" ").length/200),v=e=>new DOMParser().parseFromString(e,"text/html").body.textContent||"",L=e=>{let t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},f=e=>{let t=RegExp('<script type="application\\/ld\\+json">(.*?)<\\/script>',"s"),o=e.match(t);if(o&&o.length>=2){let e=o[1];try{return JSON.parse(e)}catch(e){console.error("Error parsing JSON:",e)}}return null},P=e=>new Date(e).toLocaleDateString("en-IN",{day:"numeric",month:"numeric",year:"numeric"})}}]);