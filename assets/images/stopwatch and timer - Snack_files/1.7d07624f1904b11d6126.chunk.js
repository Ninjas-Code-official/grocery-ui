(self.webpackJsonp=self.webpackJsonp||[]).push([[1],{502:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));n(10);var a=n(0);const o={C:67,D:68,F:70,S:83,U:85,V:86,F2:113,Delete:8,Enter:13,Escape:27,Shift:16,Ctrl:17,Alt:18,Cmd:91,Tilde:192,Backslash:220,Meta:"navigator"in e&&/Mac/i.test(navigator.platform)?91:17},i=(e,t)=>t.every(t=>{switch(t){case o.Ctrl:return e.ctrlKey;case o.Meta:return e.metaKey;case o.Alt:return e.altKey;default:return e.keyCode===t}});class c extends a.PureComponent{constructor(...e){var t,n,a;super(...e),a=e=>{const{bindings:t,onTrigger:n}=this.props;for(const a in t)if(t.hasOwnProperty(a)){const o=t[a];if(i(e,o.combo)){e.preventDefault(),n(a,o);break}}},(n="_handleKeydown")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}componentDidMount(){document.addEventListener("keydown",this._handleKeydown)}componentWillUnmount(){document.removeEventListener("keydown",this._handleKeydown)}render(){return null}}}).call(this,n(18))},513:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));var a=n(1),o=n(28),i=n.n(o),c=n(596),s=n.n(c),r=n(0),l=n(2),d=n(502);const p="navigator"in e&&/Mac/i.test(navigator.platform),u={Cmd:"⌘",Delete:"⌫",Enter:"↩",Shift:"⇧",Ctrl:p?"⌃":"Ctrl",Alt:p?"⌥":"Alt",Backslash:"\\",Tilde:"`"};function m({combo:e,className:t,boxed:n=!1}){return r.createElement("kbd",{className:i()(Object(a.css)(h.shortcutLabel),n&&Object(a.css)(h.boxedShortcut),t)},e.map(e=>{const t=s()(d.a,t=>t===e);return t&&u[t]?u[t]:t}).join(p?"":"+"))}const h=a.StyleSheet.create({shortcutLabel:{color:"inherit",fontFamily:"var(--font-monospace)",fontSize:"90%",opacity:.5,boxShadow:"none",display:"inline-block",lineHeight:"initial"},boxedShortcut:{padding:"0.2rem 0.4rem",border:"1px solid ".concat(Object(l.a)("border")),borderBottomWidth:2,borderRadius:3,opacity:.66}})}).call(this,n(18))},514:function(e,t,n){"use strict";var a=n(1),o=n(0),i=n(2);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function({title:e,label:t,responsive:n,children:i,small:r,...l}){return o.createElement("button",c({},l,{className:Object(a.css)(s.button,r&&s.small,l.disabled&&s.disabled)}),i,t?o.createElement("span",{className:Object(a.css)(s.label,!i&&s.labelNoIcon,n&&s.responsive)},t):null,o.createElement("span",{className:Object(a.css)(s.phantom)},o.createElement("span",{className:Object(a.css)(s.tooltip)},e)))};const s=a.StyleSheet.create({button:{position:"relative",height:40,minWidth:40,margin:"0 8px",display:"flex",alignItems:"center",justifyContent:"center",appearance:"none",backgroundColor:"transparent",color:"inherit",padding:0,outline:0,border:0,borderRadius:2,whiteSpace:"nowrap",textDecoration:"none",fill:Object(i.a)("text"),stroke:Object(i.a)("text"),":active":{opacity:.8},":hover":{cursor:"pointer",backgroundColor:Object(i.a)("hover")}},small:{height:32,minWidth:32,margin:0,padding:"0 8px 0 0",":hover":{backgroundColor:"transparent"}},disabled:{cursor:"not-allowed",pointerEvents:"none",opacity:.3},phantom:{position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,zIndex:1,":hover":{opacity:1,pointerEvents:"auto"}},tooltip:{position:"absolute",top:"calc(100% + 4px)",left:"50%",transform:"translateX(-50%)",marginLeft:-2.5,borderRadius:2,fontSize:12,padding:"4px 8px",whiteSpace:"nowrap",pointerEvents:"none",boxShadow:Object(i.c)("popover"),backgroundColor:Object(i.a)("content","dark"),color:Object(i.a)("text","dark")},label:{margin:"0 12px",color:Object(i.a)("text")},labelNoIcon:{margin:"0 12px 0 0"},responsive:{"@media (max-width: 960px)":{display:"none"}}})},515:function(e,t,n){e.exports=n.p+"assets/6b544ca2f9529bc2b22aa6978ebd5862.svg"},552:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(10);var a=n(1),o=n(0),i=n(502),c=n(513);const s={save:{description:"Save changes",combo:[i.a.Meta,i.a.S]},update:{type:"update",description:"Update code on device",combo:[i.a.Meta,i.a.U]},tree:{description:"Toggle sidebar",combo:[i.a.Meta,i.a.Backslash]},panels:{description:"Toggle error and log panels",combo:[i.a.Ctrl,i.a.Tilde]},format:{description:"Format code with prettier",combo:[i.a.Ctrl,i.a.Alt,i.a.F]},shortcuts:{description:"Show keyboard shortcuts",combo:[i.a.Meta,i.a.Alt,i.a.Shift]}};class r extends o.PureComponent{render(){return o.createElement("table",{className:Object(a.css)(l.shortcutList)},o.createElement("tbody",null,Object.entries(s).map(([e,t])=>o.createElement("tr",{key:e},o.createElement("td",{className:Object(a.css)(l.shortcutCell,l.shortcutLabelCell)},o.createElement(c.a,{boxed:!0,combo:t.combo})),o.createElement("td",{className:Object(a.css)(l.shortcutCell,l.shortcutDescriptionCell)},t.description)))))}}t.b=r;const l=a.StyleSheet.create({shortcutList:{fontSize:"1.2em",tableLayout:"fixed"},shortcutCell:{padding:"6px 8px"},shortcutLabelCell:{textAlign:"right",marginRight:8},shortcutDescriptionCell:{textAlign:"left"}})},597:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(10);var a=n(1),o=n(0),i=n(2),c=n(598);function s({icon:e,label:t,content:n}){const[i,s]=o.useState(!1),l=o.useRef(null);return o.useEffect(()=>{const e=e=>{var t;e.target===l.current||null!==(t=l.current)&&void 0!==t&&t.contains(e.target)||s(!1)};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)},[]),o.createElement("div",{ref:l,className:Object(a.css)(r.panelContainer)},o.createElement(c.a,{icon:e,active:i,onClick:()=>s(e=>!e)},t),i?o.createElement("div",{className:Object(a.css)(r.pane)},n):null)}const r=a.StyleSheet.create({panelContainer:{position:"relative",display:"flex",alignItems:"center"},pane:{display:"flex",alignItems:"stretch",justifyContent:"flex-end",flexDirection:"column",position:"absolute",right:0,bottom:32,minWidth:160,padding:"8px 0",borderWidth:1,borderRadius:3,borderStyle:"solid",backgroundColor:Object(i.a)("content"),borderColor:Object(i.a)("border"),boxShadow:Object(i.c)("popover"),color:Object(i.a)("text"),zIndex:-1}})},598:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),o=n(0),i=n(2);function c({active:e,icon:t,children:n,onClick:i}){return o.createElement("button",{onClick:i,style:t?{backgroundImage:"url(".concat(t,")")}:void 0,className:Object(a.css)(s.button,n?s.buttonLabel:void 0,e&&s.active)},n)}const s=a.StyleSheet.create({button:{position:"relative",border:0,outline:0,margin:0,height:30,padding:"0 16px",appearance:"none",backgroundColor:"transparent",backgroundSize:16,backgroundRepeat:"no-repeat",backgroundPosition:"center right 8px",":active":{backgroundColor:Object(i.a)("hover"),color:Object(i.a)("soft")},":hover":{backgroundColor:Object(i.a)("hover"),color:Object(i.a)("soft")}},buttonLabel:{"@media (min-width: 720px)":{padding:"5px 32px 5px 8px"}},active:{backgroundColor:Object(i.a)("hover"),color:Object(i.a)("soft")}})},599:function(e,t,n){e.exports=n.p+"assets/f95e873b5154c5128ccb7bf69715156d.svg"},600:function(e,t,n){e.exports=n.p+"assets/48505df7e1a1eb25606c4789c3a3e235.png"},872:function(e,t,n){"use strict";n.r(t);n(10);var a=n(1),o=n(28),i=n.n(o),c=n(0),s=n(70),r=n(162),l=n(540),d=n(489),p=n(164),u=n(20),m=n(180),h=n.n(m);var b=n(2),v=n(60),g=n(178);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f extends c.PureComponent{constructor(...e){super(...e),C(this,"state",{appetizeStatus:{type:"unknown"},appetizeURL:f.getAppetizeURL(this.props,!1),autoplay:!1,payerCodeFormStatus:{type:"closed"},platform:this.props.platform,sdkVersion:this.props.sdkVersion,theme:this.props.theme,viewer:this.props.viewer}),C(this,"handleLaunchRequest",()=>{u.a.getInstance().logEvent("RAN_EMULATOR")}),C(this,"handlePayerCodeLink",()=>{this.setState({payerCodeFormStatus:{type:"open",value:""}}),u.a.getInstance().logEvent("REQUESTED_APPETIZE_CODE",{},"previewQueue")}),C(this,"handlePostMessage",({origin:e,data:t})=>{var n,a;if(e===s.a.appetize.url){let e;switch(this.waitingForMessage&&(clearInterval(this.waitingForMessage),this.waitingForMessage=null),t){case"sessionRequested":e={type:"requested"};break;case"sessionConnecting":e={type:"connecting"};break;case"appLaunch":e={type:"launch"},null===(n=(a=this.props).onAppLaunch)||void 0===n||n.call(a),"queued"===this.state.appetizeStatus.type&&u.a.getInstance().logEvent("APP_LAUNCHED",{},"previewQueue"),u.a.getInstance().clearTimer("previewQueue");break;case"timeoutWarning":e={type:"timeout"};break;case"sessionEnded":e={type:"unknown"},u.a.getInstance().clearTimer("previewQueue");break;case"accountQueued":e={type:"queued",position:void 0};break;default:t&&"accountQueuedPosition"===t.type&&(e={type:"queued",position:t.position},"queued"===this.state.appetizeStatus.type&&this.state.appetizeStatus.position||(u.a.getInstance().logEvent("QUEUED_FOR_PREVIEW",{queuePosition:e.position}),u.a.getInstance().startTimer("previewQueue")))}e&&this.setState({appetizeStatus:e})}}),C(this,"handlePayerCodeChange",e=>this.setState({payerCodeFormStatus:{type:"open",value:e.target.value}})),C(this,"handlePayerCodeSubmit",e=>{e.preventDefault(),this.props.viewer&&this.savePayerCode(),u.a.getInstance().logEvent("ENTERED_APPETIZE_CODE",{},"previewQueue")}),C(this,"savePayerCode",()=>{const{payerCodeFormStatus:e}=this.state;"open"===e.type&&e.value&&(this.props.setMetadata({appetizeCode:e.value}),this.setState({payerCodeFormStatus:{type:"submitted"}}))}),C(this,"iframe",c.createRef()),C(this,"waitingForMessage",void 0),C(this,"handleTapToPlay",()=>{this.waitingForMessage||(this.requestSession(),this.waitingForMessage=setInterval(this.requestSession,1e3))}),C(this,"requestSession",()=>{var e,t;null===(e=this.iframe.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage("requestSession","*")}),C(this,"endSession",()=>{var e,t;null===(e=this.iframe.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage("endSession","*")})}static getAppetizeURL(e,t){var n,a;const{experienceURL:o,platform:i,isEmbedded:c,payerCode:r,viewer:l,theme:d}=e;return function({experienceURL:e,platform:t,screenOnly:n=!1,scale:a,autoplay:o,payerCode:i,previewQueue:c,deviceColor:r="black"}){const l={screenOnly:n,scale:a,autoplay:!!o,embed:!0,device:"ios"===t?"iphone5":"nexus5",launchUrl:"android"===t?e:void 0,xdocMsg:!0,deviceColor:r,xDocMsg:!0,orientation:"portrait",debug:!0,pc:i},d=s.a.appetize.public_keys[c][t],p={EXKernelLaunchUrlDefaultsKey:e,EXKernelDisableNuxDefaultsKey:!0};return"".concat(s.a.appetize.url,"/embed/").concat(d,"?").concat(h.a.stringify(l),"&params=").concat(encodeURIComponent(JSON.stringify(p)))}({experienceURL:o,autoplay:t,platform:i,previewQueue:c?"secondary":"main",screenOnly:c,deviceColor:"dark"===d?"white":"black",scale:c?"android"===i?80:76:void 0,payerCode:null!==(n=null==l||null===(a=l.user_metadata)||void 0===a?void 0:a.appetize_code)&&void 0!==n?n:r})}static getDerivedStateFromProps(e,t){if(e.platform!==t.platform||e.sdkVersion!==t.sdkVersion||e.theme!==t.theme||e.viewer!==t.viewer&&e.viewer&&e.viewer.user_metadata&&e.viewer.user_metadata.appetize_code){const n="submitted"===t.payerCodeFormStatus.type;return{appetizeStatus:{type:"unknown"},appetizeURL:f.getAppetizeURL(e,n),autoplay:n,payerCodeFormStatus:{type:"closed"},platform:e.platform,sdkVersion:e.sdkVersion,theme:e.theme,viewer:e.viewer}}return null}componentDidMount(){window.addEventListener("message",this.handlePostMessage),window.addEventListener("unload",this.endSession),this.props.onPopupUrl(this.state.appetizeURL)}componentDidUpdate(e,t){t.appetizeStatus!==this.state.appetizeStatus&&"requested"===this.state.appetizeStatus.type?this.handleLaunchRequest():this.state.appetizeURL!==t.appetizeURL&&this.props.onPopupUrl(this.state.appetizeURL)}componentWillUnmount(){this.endSession(),window.removeEventListener("message",this.handlePostMessage),window.removeEventListener("unload",this.endSession)}render(){var e;const{appetizeStatus:t,payerCodeFormStatus:n,viewer:o,appetizeURL:i}=this.state,{width:r,isEmbedded:l,onClickRunOnPhone:p,isPopupOpen:u}=this.props;return c.createElement(c.Fragment,null,c.createElement("div",{className:Object(a.css)(l?x.containerEmbedded:x.container),style:{width:l?r:r-10}},c.createElement("iframe",{ref:this.iframe,key:i,src:i,className:Object(a.css)(x.frame)}),"unknown"===t.type?c.createElement("div",{className:Object(a.css)(l?x.buttonContainerEmbedded:x.buttonContainer)},c.createElement("a",{className:Object(a.css)(x.largeButton),style:{top:160},onClick:this.handleTapToPlay},c.createElement("div",{className:Object(a.css)(x.buttonFrame)},c.createElement("span",{className:Object(a.css)(x.buttonText)},"Tap to play"))),u?null:c.createElement("a",{className:Object(a.css)(x.largeButton),style:{top:250},onClick:p},c.createElement("div",{className:Object(a.css)(x.buttonFrame)},c.createElement("span",{className:Object(a.css)(x.buttonText)},"Run on your device")))):null),"queued"===t.type?c.createElement("div",{className:Object(a.css)(x.queueModal,x.centered)},c.createElement("div",{className:Object(a.css)(x.queueModalContent)},l?c.createElement("button",{className:Object(a.css)(x.dismissButton),onClick:()=>{this.setState({appetizeStatus:{type:"unknown"}})}},"X"):null,c.createElement("h4",null,"Device preview is at capacity"),c.createElement("p",null,"Queue position: ",null!==(e=t.position)&&void 0!==e?e:1),c.createElement("h3",null,"Don't want to wait?"),l?null:c.createElement("div",null,c.createElement("p",null,"Use your own Appetize.io account"),c.createElement("div",{className:Object(a.css)(x.payerCodeForm)},"open"===n.type?c.createElement("form",{onSubmit:this.handlePayerCodeSubmit},c.createElement("input",{type:"text",placeholder:"Payer Code",value:n.value,onChange:this.handlePayerCodeChange,className:Object(a.css)(x.payerCodeInput)}),c.createElement(v.a,{type:"submit",variant:"primary",className:Object(a.css)(x.activateButton)},"Activate")):"submitted"===n.type?c.createElement("p",{className:Object(a.css)(x.payerCodeSubmitted)},"Payer code saved to profile!"):o?c.createElement(g.a,{variant:"primary",href:"".concat(s.a.appetize.url,"/payer-code"),onClick:this.handlePayerCodeLink,target:"_blank",className:Object(a.css)(x.blockButton)},"Use Appetize.io"):c.createElement(g.a,{variant:"primary",href:Object(d.a)(),className:Object(a.css)(x.blockButton)},"Log in to Expo")),c.createElement("p",null,"or")),c.createElement(g.a,{variant:"primary",onClick:p,className:Object(a.css)(x.blockButton)},"Run it on your phone"))):null)}}var y=Object(r.a)(Object(p.a)(f));const x=a.StyleSheet.create({loading:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:1},centered:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"auto"},container:{position:"relative",height:653,overflow:"hidden",margin:"auto",marginLeft:10,zIndex:2},containerEmbedded:{position:"relative",height:508,overflow:"hidden",margin:"auto",zIndex:2},frame:{width:9999,height:9999,border:0,overflow:"hidden"},queueModal:{color:"white",backgroundColor:"rgba(36, 43, 56, 0.8)",position:"absolute",zIndex:2,top:0,left:0,right:0,bottom:0,padding:28},queueModalContent:{textAlign:"center"},blockButton:{display:"block",flex:1,cursor:"pointer"},activateButton:{":only-of-type":{marginLeft:0,marginRight:0,borderBottomLeftRadius:0,borderTopLeftRadius:0}},payerCodeForm:{height:50,display:"flex",flexDirection:"row"},payerCodeInput:{fontFamily:"var(--font-monospace)",padding:7,marginRight:-1,borderTopLeftRadius:3,borderBottomLeftRadius:3,width:133,border:"1px solid ".concat(Object(b.a)("selected")),color:Object(b.a)("text")},payerCodeSubmitted:{margin:"0 auto",padding:14,textAlign:"center",color:Object(b.a)("success")},buttonContainer:{position:"absolute",top:0,left:0,right:12,bottom:0},buttonContainerEmbedded:{position:"absolute",top:-70,left:0,right:0,bottom:0},largeButton:{position:"absolute",left:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},buttonFrame:{height:70,width:225,backgroundColor:Object(b.a)("content","light"),borderRadius:30,alignItems:"center",justifyContent:"center",display:"flex",paddingLeft:20,paddingRight:20,boxShadow:Object(b.c)("popover")},buttonText:{color:Object(b.a)("text","light"),fontSize:20,fontWeight:400},dismissButton:{position:"absolute",fontSize:20,fontWeight:400,right:0,top:0,zIndex:2,height:48,width:48,padding:16,border:0,backgroundSize:16,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"transparent"}});var E=n(548),w=n.n(E),O=n(458),j=n(585);class L extends c.Component{render(){const{large:e,visible:t,onDismiss:n,setDeviceId:o,deviceId:i}=this.props;return c.createElement(O.a,{className:Object(a.css)(e&&k.large),autoSize:!e,visible:t,title:"Set Device ID",onDismiss:n},c.createElement("div",{className:Object(a.css)(k.container)},c.createElement("div",{className:Object(a.css)(k.wrapper)},c.createElement(j.a,{deviceId:i,setDeviceId:o}))))}}const k=a.StyleSheet.create({container:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",maxWidth:600},large:{minWidth:0,minHeight:0,maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"},wrapper:{width:"100%",overflowX:"hidden",marginTop:16}});var S=n(552),D=n(177),N=n(166),I=n(514),R=n(597),P=n(513),M=n(500),z=Object(r.a)((function(e){const{theme:t,name:o,experienceURL:i}=e;return c.createElement("div",{className:Object(a.css)(U.container)},c.createElement("div",{className:Object(a.css)(U.imageContainer)},c.createElement("img",{className:Object(a.css)(U.image),src:n("dark"===t?515:599)})),c.createElement("div",{className:Object(a.css)(U.content)},c.createElement("h4",{className:Object(a.css)(U.title)},o),c.createElement("p",{className:Object(a.css)(U.subtitle)},i)))}));const U=a.StyleSheet.create({container:{height:56,display:"flex",flexDirection:"row",alignItems:"center",padding:"0 2px 0 8px",boxShadow:Object(b.c)("small"),borderRadius:4,color:Object(b.a)("text"),border:"1px solid ".concat(Object(b.a)("border")),textDecoration:"none",backgroundColor:Object(b.a)("content"),margin:"0 10px 10px 10px"},imageContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:Object(b.a)("content"),marginRight:8,borderWidth:1,borderColor:Object(b.a)("border"),borderRadius:3,borderStyle:"solid",height:40,width:40},image:{display:"block",width:30,height:30},content:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden"},title:{fontSize:14,fontWeight:"bold",marginTop:0,marginBottom:0,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},subtitle:{fontSize:12,fontWeiht:"bold",margin:0,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",opacity:.5}});function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class B extends c.PureComponent{constructor(...e){super(...e),T(this,"state",{connectedDevices:[],visibleModal:"none",copiedToClipboard:!1}),T(this,"handleDismissModal",()=>{this.setState({visibleModal:"none"})}),T(this,"handleSetDeviceId",async e=>{const{setDeviceId:t}=this.props;await t(e),this.setState({visibleModal:"none"})}),T(this,"_handleCopyToClipboard",()=>{this.setState({copiedToClipboard:!0}),setTimeout(()=>this.setState(()=>({copiedToClipboard:!1})),1e3)}),T(this,"onClickDeviceId",()=>{this.setState({visibleModal:"deviceid"})}),T(this,"renderConnectedDevice",e=>{const{id:t,name:n,status:o}=e;return c.createElement("div",{key:t,className:Object(a.css)(A.deviceContainer)},this.renderDevicePlatformIcon(e),c.createElement("div",{className:Object(a.css)(A.deviceContent)},c.createElement("h4",{className:Object(a.css)(A.deviceTitle)},n),c.createElement("p",{className:Object(a.css)(A.deviceSubtitle)},"connected"===o?"Connected":"Disconnected")))})}static getDerivedStateFromProps(e){const{connectedDevices:t}=e;return{connectedDevices:t}}render(){const{experienceURL:e,deviceId:t,isEmbedded:o,width:i}=this.props,{connectedDevices:s,visibleModal:r,copiedToClipboard:l}=this.state,d=s.length>=1;return c.createElement("div",{className:Object(a.css)(A.container),style:{width:i}},c.createElement(N.a,{visible:l},"Copied to clipboard!"),c.createElement("div",{className:Object(a.css)(A.frame)},c.createElement("h3",{className:Object(a.css)(A.title)},"Download"," ",c.createElement("a",{className:Object(a.css)(A.link),href:"".concat("https://expo.io","/client"),target:"blank"},"Expo Go")," ","and scan",c.createElement("br",null),"the QR code to get started."),c.createElement("div",{className:Object(a.css)(A.qrcode),style:{width:i-20,height:i-20}},c.createElement(D.a,{size:i-40,experienceURL:e})),!o&&c.createElement(w.a,{text:e,onCopy:this._handleCopyToClipboard},c.createElement("div",{className:Object(a.css)(A.experienceLink)},e)),c.createElement("div",{className:Object(a.css)(A.flex)}),c.createElement("div",{className:Object(a.css)(A.connectedDevices)},c.createElement("div",{className:Object(a.css)(A.connectedDevicesHeader,o?A.connectedDevicesEmbedded:void 0)},c.createElement("div",{className:Object(a.css)(A.connectedDevicesTitle)},c.createElement("h3",null,"Connected devices"),c.createElement("span",{className:Object(a.css)(A.connectedDevicesCount)},s.length)),c.createElement("div",{className:Object(a.css)(A.popupButton)},c.createElement(R.a,{icon:n(600),content:this.renderPopupMenu()}))),!d&&this.renderNoConnectedDevices(),s.map(this.renderConnectedDevice)),c.createElement(L,{visible:"deviceid"===r,deviceId:t,setDeviceId:this.handleSetDeviceId,onDismiss:this.handleDismissModal})))}renderPopupMenu(){const{sendCodeOnChangeEnabled:e,onToggleSendCode:t,onSendCode:n,onReloadSnack:o}=this.props,{connectedDevices:i}=this.state,s=i.length>1?"apps":"app",r=i.length>1?"devices":"device",l=i.length>0;return c.createElement("div",{className:Object(a.css)(A.popupContainer)},c.createElement("div",{className:Object(a.css)(A.popupRow)},c.createElement(I.a,{small:!0,title:"Set ID of your device",label:"Set Device ID",onClick:this.onClickDeviceId})),l&&c.createElement(M.a,{checked:e,onChange:t,label:"Update as you type"}),l&&c.createElement("div",{className:Object(a.css)(A.popupRow)},c.createElement(I.a,{small:!0,title:"Update changes on connected ".concat(r),label:"Update now",onClick:n},c.createElement("svg",{width:"14px",height:"17px",viewBox:"0 0 14 17"},c.createElement("path",{transform:"translate(-5.000000, -3.000000)",d:"M9,16 L15,16 L15,10 L19,10 L12,3 L5,10 L9,10 L9,16 Z M5,18 L19,18 L19,20 L5,20 L5,18 Z"}))),c.createElement(P.a,{combo:S.a.update.combo})),l&&c.createElement("div",{className:Object(a.css)(A.popupRow)},c.createElement(I.a,{small:!0,title:"Reload ".concat(s," on connected ").concat(r),label:"Reload ".concat(s),onClick:o},c.createElement("svg",{width:"16px",height:"20px",viewBox:"0 0 16 20"},c.createElement("path",{d:"M8,3.5 L8,0 L3,5 L8,10 L8,5.5 C11.314,5.5 14,8.186 14,11.5 C14,14.814 11.314,17.5 8,17.5 C4.686,17.5 2,14.814 2,11.5 L0,11.5 C0,15.918 3.582,19.5 8,19.5 C12.418,19.5 16,15.918 16,11.5 C16,7.082 12.418,3.5 8,3.5"})))))}renderNoConnectedDevices(){const{viewer:e,deviceId:t,experienceURL:n,experienceName:o,isEmbedded:i}=this.props;return e||t?c.createElement(c.Fragment,null,e?c.createElement("p",{className:Object(a.css)(A.notConnectedText)},'This Snack is visible on the "Projects" tab of your signed in Expo Go app',t?", and on device ":". Or set a ",c.createElement("button",{onClick:this.onClickDeviceId,className:Object(a.css)(A.link)},t?c.createElement("span",{className:Object(a.css)(A.deviceIDText)},t):"Device ID"),"."):c.createElement("p",{className:Object(a.css)(A.notConnectedText)},'This Snack is visible on the "Projects" tab of Expo Go with device ID',c.createElement("span",null," "),c.createElement("button",{onClick:this.onClickDeviceId,className:Object(a.css)(A.link)},c.createElement("span",{className:Object(a.css)(A.deviceIDText)},t)),"."),c.createElement(z,{name:o,experienceURL:n})):c.createElement("p",{className:Object(a.css)(A.notConnectedText)},c.createElement("a",{href:i?"".concat("https://expo.io","/login"):Object(d.a)(),target:i?"_blank":void 0,className:Object(a.css)(A.link)},"Log in"),c.createElement("span",null," "),"or set a",c.createElement("span",null," "),c.createElement("button",{onClick:this.onClickDeviceId,className:Object(a.css)(A.link)},"Device ID"),c.createElement("span",null," "),"to open this Snack from Expo Go on your device or simulator.")}renderDevicePlatformIcon(e){const{platform:t}=e;return"android"===t?c.createElement("svg",{className:Object(a.css)(A.deviceIcon),width:"16px",height:"20px",viewBox:"0 0 16 20"},c.createElement("path",{transform:"translate(-16.000000, -146.000000)",d:"M19.2,160.325197 C19.2,160.762881 19.56,161.120986 20,161.120986 L20.8,161.120986 L20.8,163.906247 C20.8,164.566752 21.336,165.099931 22,165.099931 C22.664,165.099931 23.2,164.566752 23.2,163.906247 L23.2,161.120986 L24.8,161.120986 L24.8,163.906247 C24.8,164.566752 25.336,165.099931 26,165.099931 C26.664,165.099931 27.2,164.566752 27.2,163.906247 L27.2,161.120986 L28,161.120986 C28.44,161.120986 28.8,160.762881 28.8,160.325197 L28.8,152.367307 L19.2,152.367307 L19.2,160.325197 L19.2,160.325197 Z M17.2,152.367307 C16.536,152.367307 16,152.900485 16,153.56099 L16,159.131513 C16,159.792018 16.536,160.325197 17.2,160.325197 C17.864,160.325197 18.4,159.792018 18.4,159.131513 L18.4,153.56099 C18.4,152.900485 17.864,152.367307 17.2,152.367307 L17.2,152.367307 Z M30.8,152.367307 C30.136,152.367307 29.6,152.900485 29.6,153.56099 L29.6,159.131513 C29.6,159.792018 30.136,160.325197 30.8,160.325197 C31.464,160.325197 32,159.792018 32,159.131513 L32,153.56099 C32,152.900485 31.464,152.367307 30.8,152.367307 L30.8,152.367307 Z M26.824,147.719899 L27.868,146.681394 C28.024,146.526215 28.024,146.275542 27.868,146.120363 C27.712,145.965184 27.46,145.965184 27.304,146.120363 L26.12,147.294152 C25.48,146.979815 24.764,146.796784 24,146.796784 C23.232,146.796784 22.512,146.979815 21.868,147.298131 L20.68,146.116384 C20.524,145.961205 20.272,145.961205 20.116,146.116384 C19.96,146.271563 19.96,146.522237 20.116,146.677415 L21.164,147.719899 C19.976,148.591288 19.2,149.991877 19.2,151.571518 L28.8,151.571518 C28.8,149.987898 28.02,148.587309 26.824,147.719899 L26.824,147.719899 Z M26,149.978945 C26.2209139,149.978945 26.4,149.800802 26.4,149.581051 C26.4,149.361299 26.2209139,149.183156 26,149.183156 C25.7790861,149.183156 25.6,149.361299 25.6,149.581051 C25.6,149.800802 25.7790861,149.978945 26,149.978945 Z M22,149.978945 C22.2209139,149.978945 22.4,149.800802 22.4,149.581051 C22.4,149.361299 22.2209139,149.183156 22,149.183156 C21.7790861,149.183156 21.6,149.361299 21.6,149.581051 C21.6,149.800802 21.7790861,149.978945 22,149.978945 Z"})):"ios"===t?c.createElement("svg",{className:Object(a.css)(A.deviceIcon),width:"16px",height:"16px",viewBox:"0 0 16 16"},c.createElement("path",{d:"M5,0 L11,0 C13.7614237,-5.07265313e-16 16,2.23857625 16,5 L16,11 C16,13.7614237 13.7614237,16 11,16 L5,16 C2.23857625,16 3.38176876e-16,13.7614237 0,11 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z M2.79296875,11 L3.5,11 L3.5,6.890625 L2.79296875,6.890625 L2.79296875,11 Z M2.64453125,5.625 C2.64453125,5.90625 2.859375,6.11328125 3.140625,6.11328125 C3.4375,6.11328125 3.65234375,5.90625 3.65234375,5.625 C3.65234375,5.33984375 3.4375,5.1328125 3.140625,5.1328125 C2.859375,5.1328125 2.64453125,5.33984375 2.64453125,5.625 Z M9.20385423,8.71875 L9.20385423,7.94921875 C9.20385423,6.4375 8.36401048,5.55859375 7.05541673,5.55859375 C5.74682298,5.55859375 4.90697923,6.43359375 4.90697923,7.94921875 L4.90697923,8.71875 C4.90697923,10.2304688 5.74682298,11.109375 7.05541673,11.109375 C8.36401048,11.109375 9.20385423,10.2304688 9.20385423,8.71875 Z M10.1616147,9.64453125 C10.2358335,10.5039062 10.962396,11.109375 12.0913022,11.109375 C13.321771,11.109375 14.0913022,10.4726562 14.0913022,9.50390625 C14.0913022,8.7265625 13.634271,8.2890625 12.7006772,8.046875 L11.790521,7.80859375 C11.3022397,7.6875 11.040521,7.4296875 11.040521,7.0546875 C11.040521,6.53515625 11.4897397,6.1796875 12.1616147,6.1796875 C12.7827085,6.1796875 13.2045835,6.4765625 13.3022397,6.9453125 L14.024896,6.9453125 C13.9428647,6.1328125 13.228021,5.54296875 12.1733335,5.54296875 C11.087396,5.54296875 10.3100522,6.18359375 10.3100522,7.08984375 C10.3100522,7.8046875 10.7709897,8.29296875 11.571771,8.5 L12.4975522,8.73828125 C13.0952085,8.890625 13.3647397,9.13671875 13.3647397,9.5625 C13.3647397,10.1171875 12.9077085,10.4726562 12.165521,10.4726562 C11.4702085,10.4726562 10.9897397,10.1484375 10.8881772,9.64453125 L10.1616147,9.64453125 Z M8.48119798,7.94921875 L8.48119798,8.72265625 C8.48119798,9.89453125 7.86401048,10.4648438 7.05541673,10.4648438 C6.24291673,10.4648438 5.62963548,9.89453125 5.62963548,8.72265625 L5.62963548,7.94921875 C5.62963548,6.7734375 6.24291673,6.203125 7.05541673,6.203125 C7.86401048,6.203125 8.48119798,6.7734375 8.48119798,7.94921875 Z"})):"web"===t?c.createElement("svg",{width:"18px",height:"18px",viewBox:"0 0 18 18",className:Object(a.css)(A.deviceIcon)},c.createElement("g",{strokeWidth:"1",fill:"none"},c.createElement("circle",{cx:"9",cy:"9",r:"8"}),c.createElement("rect",{x:"2",y:"11",width:"14",height:"0.5"}),c.createElement("rect",{x:"2",y:"6",width:"14",height:"0.5"}),c.createElement("ellipse",{cx:"9",cy:"9",rx:"3",ry:"8"}))):c.createElement("svg",{className:Object(a.css)(A.deviceIcon),width:"16px",height:"16px",viewBox:"0 0 16 16"},c.createElement("path",{d:"M5,0 L11,0 C13.7614237,-5.07265313e-16 16,2.23857625 16,5 L16,11 C16,13.7614237 13.7614237,16 11,16 L5,16 C2.23857625,16 3.38176876e-16,13.7614237 0,11 L0,5 C-3.38176876e-16,2.23857625 2.23857625,5.07265313e-16 5,0 Z M2.79296875,11 L3.5,11 L3.5,6.890625 L2.79296875,6.890625 L2.79296875,11 Z M2.64453125,5.625 C2.64453125,5.90625 2.859375,6.11328125 3.140625,6.11328125 C3.4375,6.11328125 3.65234375,5.90625 3.65234375,5.625 C3.65234375,5.33984375 3.4375,5.1328125 3.140625,5.1328125 C2.859375,5.1328125 2.64453125,5.33984375 2.64453125,5.625 Z M9.20385423,8.71875 L9.20385423,7.94921875 C9.20385423,6.4375 8.36401048,5.55859375 7.05541673,5.55859375 C5.74682298,5.55859375 4.90697923,6.43359375 4.90697923,7.94921875 L4.90697923,8.71875 C4.90697923,10.2304688 5.74682298,11.109375 7.05541673,11.109375 C8.36401048,11.109375 9.20385423,10.2304688 9.20385423,8.71875 Z M10.1616147,9.64453125 C10.2358335,10.5039062 10.962396,11.109375 12.0913022,11.109375 C13.321771,11.109375 14.0913022,10.4726562 14.0913022,9.50390625 C14.0913022,8.7265625 13.634271,8.2890625 12.7006772,8.046875 L11.790521,7.80859375 C11.3022397,7.6875 11.040521,7.4296875 11.040521,7.0546875 C11.040521,6.53515625 11.4897397,6.1796875 12.1616147,6.1796875 C12.7827085,6.1796875 13.2045835,6.4765625 13.3022397,6.9453125 L14.024896,6.9453125 C13.9428647,6.1328125 13.228021,5.54296875 12.1733335,5.54296875 C11.087396,5.54296875 10.3100522,6.18359375 10.3100522,7.08984375 C10.3100522,7.8046875 10.7709897,8.29296875 11.571771,8.5 L12.4975522,8.73828125 C13.0952085,8.890625 13.3647397,9.13671875 13.3647397,9.5625 C13.3647397,10.1171875 12.9077085,10.4726562 12.165521,10.4726562 C11.4702085,10.4726562 10.9897397,10.1484375 10.8881772,9.64453125 L10.1616147,9.64453125 Z M8.48119798,7.94921875 L8.48119798,8.72265625 C8.48119798,9.89453125 7.86401048,10.4648438 7.05541673,10.4648438 C6.24291673,10.4648438 5.62963548,9.89453125 5.62963548,8.72265625 L5.62963548,7.94921875 C5.62963548,6.7734375 6.24291673,6.203125 7.05541673,6.203125 C7.86401048,6.203125 8.48119798,6.7734375 8.48119798,7.94921875 Z"}))}}var F=Object(r.a)(Object(p.a)(B));const A=a.StyleSheet.create({container:{display:"flex",flex:1,flexDirection:"column"},frame:{display:"flex",flex:1,width:"100%",flexDirection:"column"},title:{textAlign:"center"},qrcode:{backgroundColor:Object(b.a)("content","light"),boxShadow:Object(b.c)("small"),borderRadius:4,padding:10,marginLeft:10},experienceLink:{cursor:"pointer",marginTop:"0.5em",fontSize:13,opacity:0,padding:"0 12px",textAlign:"center",":hover":{opacity:.75,transition:".5s"}},flex:{flex:1},connectedDevices:{display:"flex",alignSelf:"stretch",flexDirection:"column"},connectedDevicesHeader:{display:"flex",flexDirection:"row",flexShrink:0,justifyContent:"space-between",alignItems:"center",padding:"0 12px",borderTop:"1px solid ".concat(Object(b.a)("border"))},connectedDevicesEmbedded:{border:"none"},connectedDevicesTitle:{display:"flex",flexDirection:"row",alignItems:"center"},connectedDevicesCount:{marginLeft:10,height:20,minWidth:20,borderRadius:"50%",backgroundColor:Object(b.a)("text"),color:Object(b.a)("background"),opacity:.5,textAlign:"center"},popupButton:{zIndex:1},popupContainer:{},popupRow:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",margin:"0 12px"},notConnectedText:{opacity:.7,marginLeft:12,marginRight:12,marginTop:0},deviceIDText:{fontSize:11,fontFamily:"var(--font-monospace)"},deviceContainer:{height:60,display:"flex",padding:"0 12px",cursor:"pointer",color:"inherit",textDecoration:"none",flexDirection:"row",alignItems:"center",":hover":{backgroundColor:Object(b.a)("hover")}},deviceIcon:{height:36,width:36,marginRight:16,fill:Object(b.a)("selected")},deviceContent:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center"},deviceTitle:{fontSize:16,fontWeight:"bold",marginTop:0,marginBottom:0,whiteSpace:"nowrap",textOverflow:"ellipsis"},deviceSubtitle:{fontSize:12,margin:0,whiteSpace:"nowrap",textOverflow:"ellipsis",opacity:.5},link:{color:Object(b.a)("text"),appearance:"none",background:"none",border:0,margin:0,padding:0,textDecoration:"underline",cursor:"pointer"}});function q({previewRef:e,previewURL:t,onPopupUrl:n}){return c.useEffect(()=>n(t),[t]),c.createElement("div",{className:Object(a.css)(W.container)},c.createElement("iframe",{ref:t=>{var n;return e.current=null!==(n=null==t?void 0:t.contentWindow)&&void 0!==n?n:null},src:t,allow:"geolocation; camera; microphone",className:Object(a.css)(W.frame)}))}const W=a.StyleSheet.create({container:{position:"relative",display:"flex",flex:1,width:"100%",height:"100%"},frame:{position:"relative",width:"100%",height:"100%",border:0,zIndex:1,backgroundColor:Object(b.a)("content","light")}});function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const _="(min-width: ".concat(s.a.preview.minWidth,"px)");class Q extends c.PureComponent{constructor(...e){super(...e),Z(this,"state",{isRendered:!1,isPopupOpen:!1}),Z(this,"handleMediaQuery",e=>this.setState({isRendered:e.matches})),Z(this,"handlePopup",()=>{var e;this.popup=window.open(this.state.popupUrl,"snack-device","width=327,height=668"),null!==(e=this.popup)&&void 0!==e&&e.closed||(this.setState({isPopupOpen:!0},()=>{this.props.previewRef.current=this.popup}),clearInterval(this.popupInterval),this.popupInterval=setInterval(()=>{this.popup&&!this.popup.closed||(clearInterval(this.popupInterval),this.popup=null,this.setState({isPopupOpen:!1}))},500))}),Z(this,"handlePopupUrl",e=>this.setState({popupUrl:e})),Z(this,"popupInterval",void 0),Z(this,"popup",null),Z(this,"mql",null)}componentDidMount(){this.mql=window.matchMedia(_),this.mql.addListener(this.handleMediaQuery),this.handleMediaQuery(this.mql)}componentDidUpdate(e,t){this.state.isPopupOpen&&t.popupUrl!==this.state.popupUrl&&this.handlePopup()}componentWillUnmount(){var e,t;clearInterval(this.popupInterval),null===(e=this.mql)||void 0===e||e.removeListener(this.handleMediaQuery),null===(t=this.popup)||void 0===t||t.close()}render(){const{isPopupOpen:e,isRendered:t}=this.state;if(!t||e)return null;const{className:n,width:o,connectedDevices:s,deviceId:r,experienceURL:d,experienceName:p,name:u,onAppLaunch:m,onChangePlatform:h,onClickRunOnPhone:b,onReloadSnack:v,onSendCode:g,onToggleSendCode:C,payerCode:f,platform:x,platformOptions:E,previewRef:w,previewURL:O,isEmbedded:j,sdkVersion:L,sendCodeOnChangeEnabled:k,setDeviceId:S,theme:D}=this.props;return c.createElement("div",{className:i()(Object(a.css)(V.container),n),style:{width:o}},j?null:c.createElement("div",{className:Object(a.css)(V.header)},c.createElement(l.a,{options:E,value:x,onValueChange:h,className:Object(a.css)(V.toggleButtons)}),c.createElement("button",{className:Object(a.css)(V.popupButton,"dark"===D?V.popupButtonDark:V.popupButtonLight,"mydevice"===x&&V.popupButtonHidden),disabled:"mydevice"===x,onClick:this.handlePopup})),"web"===x&&c.createElement(q,{previewRef:w,previewURL:O,onPopupUrl:this.handlePopupUrl}),"mydevice"===x&&c.createElement(F,{width:o,connectedDevices:s,deviceId:r,experienceURL:d,experienceName:p,name:u,onReloadSnack:v,onSendCode:g,onToggleSendCode:C,isEmbedded:j,sdkVersion:L,setDeviceId:S,sendCodeOnChangeEnabled:k}),("ios"===x||"android"===x)&&c.createElement(y,{width:o,sdkVersion:L,experienceURL:d,platform:x,isEmbedded:j,payerCode:f,isPopupOpen:e,onPopupUrl:this.handlePopupUrl,onClickRunOnPhone:b,onAppLaunch:m}))}}t.default=Object(r.a)(Q);const V=a.StyleSheet.create({container:{position:"relative",maxWidth:"50%",overflowX:"hidden",overflowY:"auto",display:"none",flexDirection:"column",["@media ".concat(_)]:{display:"flex"}},header:{display:"flex",alignItems:"center",justifyContent:"center",margin:"8px 0"},toggleButtons:{zIndex:3},popupButton:{position:"absolute",right:0,zIndex:2,appearance:"none",height:48,width:48,padding:16,margin:0,border:0,outline:0,opacity:.8,backgroundSize:16,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"transparent",transition:".2s",":hover":{opacity:1}},popupButtonDark:{backgroundImage:"url(".concat(n(543),")")},popupButtonLight:{backgroundImage:"url(".concat(n(542),")")},popupButtonHidden:{opacity:0,":hover":{opacity:0}}})}}]);