(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[34],{1153:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),c=n(13),o=n(29),i=n(103),s=n(0),l=n(43),u=n(40),d=n(269),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},m=n(39),b=function(e,t){return s.createElement(m.a,Object.assign({},e,{ref:t,icon:f}))};b.displayName="MailOutlined";var p=s.forwardRef(b),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"},h=function(e,t){return s.createElement(m.a,Object.assign({},e,{ref:t,icon:v}))};h.displayName="GoogleOutlined";var g=s.forwardRef(h),j=n(22),O=n(28),y=n(45),x=n(2);t.default=function(e){var t=e.history,n=Object(s.useState)("utsavnagaria@gmail.com"),a=Object(i.a)(n,2),f=a[0],m=a[1],b=Object(s.useState)("12345678"),v=Object(i.a)(b,2),h=v[0],E=v[1],k=Object(s.useState)(!1),N=Object(i.a)(k,2),w=N[0],C=N[1],S=Object(j.c)((function(e){return Object(o.a)({},e)})).user;Object(s.useEffect)((function(){t.location.state||S&&S.token&&t.push("/")}),[S,t]);var T=Object(j.b)(),P=function(e){var n=t.location.state;n?t.push(n.from):"admin"===e.data.role?t.push("/admin/dashboard"):t.push("/user/history")},I=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),C(!0),e.prev=2,e.next=5,l.a.signInWithEmailAndPassword(f,h);case 5:return n=e.sent,a=n.user,e.next=9,a.getIdTokenResult();case 9:c=e.sent,Object(y.a)(c.token).then((function(e){T({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:c.token,role:e.data.role,_id:e.data._id}}),P(e)})).catch((function(e){return console.log(e)})),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),u.b.error(e.t0.message),C(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.signInWithPopup(l.b).then(function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,e.next=3,n.getIdTokenResult();case 3:a=e.sent,Object(y.a)(a.token).then((function(e){T({type:"LOGGED_IN_USER",payload:{name:e.data.name,email:e.data.email,token:a.token,role:e.data.role,_id:e.data._id}}),P(e)})).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),u.b.error(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"container p-5",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-md-6 offset-md-3",children:[w?Object(x.jsx)("h4",{className:"text-danger",children:"Loading..."}):Object(x.jsx)("h4",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:I,children:[Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"email",className:"form-control",value:f,onChange:function(e){return m(e.target.value)},placeholder:"Your email",autoFocus:!0})}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"password",className:"form-control",value:h,onChange:function(e){return E(e.target.value)},placeholder:"Your password"})}),Object(x.jsx)("br",{}),Object(x.jsx)(d.a,{onClick:I,type:"primary",className:"mb-3",block:!0,shape:"round",icon:Object(x.jsx)(p,{}),size:"large",disabled:!f||h.length<6,children:"Login with Email/Password"})]}),Object(x.jsx)(d.a,{onClick:L,type:"danger",className:"mb-3",block:!0,shape:"round",icon:Object(x.jsx)(g,{}),size:"large",children:"Login with Google"}),Object(x.jsx)(O.b,{to:"/forgot/password",className:"float-right text-danger",children:"Forgot Password"})]})})})}},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(0),r=a.isValidElement;function c(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}(e,e,t)}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=a.createContext(void 0),c=function(e){var t=e.children,n=e.size;return a.createElement(r.Consumer,null,(function(e){return a.createElement(r.Provider,{value:n||e},t)}))};t.b=r},226:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var a=n(3),r=n(16),c=n(21),o=n(30),i=n(0),s=n.n(i),l=n(38),u=n.n(l),d=n(124),f=n(266),m=n(104),b=function e(t){return Object(m.a)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){return i.createElement(f.a,null,(function(t){var n,c=t.getPrefixCls,o=t.direction,s=e.prefixCls,l=e.size,d=e.className,f=p(e,["prefixCls","size","className"]),m=c("btn-group",s),v="";switch(l){case"large":v="lg";break;case"small":v="sm";break;case"middle":case void 0:break;default:console.warn(new b(l))}var h=u()(m,(n={},Object(r.a)(n,"".concat(m,"-").concat(v),v),Object(r.a)(n,"".concat(m,"-rtl"),"rtl"===o),n),d);return i.createElement("div",Object(a.a)({},f,{className:h}))}))},h=n(106),g=n(133),j=n(107),O=n(108),y=n(48),x=n(132),E=n(118),k=0,N={};function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=k++,a=t;function r(){(a-=1)<=0?(e(),delete N[n]):N[n]=Object(E.a)(r)}return N[n]=Object(E.a)(r),n}w.cancel=function(e){void 0!==e&&(E.a.cancel(N[e]),delete N[e])},w.ids=N;var C,S=n(117);function T(e){return!e||null===e.offsetParent||e.hidden}function P(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var I=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.apply(this,arguments)).containerRef=i.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var a,r;if(!(!t||T(t)||t.className.indexOf("-leave")>=0)){var c=e.props.insertExtraNode;e.extraNode=document.createElement("div");var o=Object(g.a)(e).extraNode,i=e.context.getPrefixCls;o.className="".concat(i(""),"-click-animating-node");var s=e.getAttributeName();if(t.setAttribute(s,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&P(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){o.style.borderColor=n;var l=(null===(a=t.getRootNode)||void 0===a?void 0:a.call(t))||t.ownerDocument,u=l instanceof Document?l.body:null!==(r=l.firstChild)&&void 0!==r?r:l;C=Object(y.a)("\n      [".concat(i(""),"-click-animating-without-extra-node='true']::after, .").concat(i(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:u})}c&&t.appendChild(o),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!T(n.target)){e.resetEffect(t);var a=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,a)}),0),w.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=w((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,a=e.props.children;if(e.csp=n,!i.isValidElement(a))return a;var r=e.containerRef;return Object(x.c)(a)&&(r=Object(x.a)(a.ref,e.containerRef)),Object(S.a)(a,{ref:r})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),C&&(C.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return i.createElement(f.a,null,this.renderWave)}}]),n}(i.Component);I.contextType=f.b;var L=n(139),R=n(140),A=n(144),z=n(151),_=n(95),W=function(){return{width:0,opacity:0,transform:"scale(0)"}},V=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},B=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?s.a.createElement("span",{className:"".concat(t,"-loading-icon")},s.a.createElement(_.a,null)):s.a.createElement(z.b,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:W,onAppearActive:V,onEnterStart:W,onEnterActive:V,onLeaveStart:V,onLeaveActive:W},(function(e,n){var a=e.className,r=e.style;return s.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:r,ref:n},s.a.createElement(_.a,{className:a}))}))},D=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},G=/^[\u4e00-\u9fa5]{2}$/,M=G.test.bind(G);function U(e){return"text"===e||"link"===e}function H(e,t){var n=!1,a=[];return i.Children.forEach(e,(function(e){var t=Object(o.a)(e),r="string"===t||"number"===t;if(n&&r){var c=a.length-1,i=a[c];a[c]="".concat(i).concat(e)}else a.push(e);n=r})),i.Children.map(a,(function(e){return function(e,t){if(null!=e){var n=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&M(e.props.children)?Object(S.a)(e,{children:e.props.children.split("").join(n)}):"string"===typeof e?(M(e)&&(e=e.split("").join(n)),i.createElement("span",null,e)):e}}(e,t)}))}Object(L.a)("default","primary","ghost","dashed","link","text"),Object(L.a)("circle","round"),Object(L.a)("submit","button","reset");function J(e){return"danger"===e?{danger:!0}:{type:e}}var F=function(e,t){var n,s,l=e.loading,m=void 0!==l&&l,b=e.prefixCls,p=e.type,v=e.danger,h=e.shape,g=e.size,j=e.className,O=e.children,y=e.icon,x=e.ghost,E=void 0!==x&&x,k=e.block,N=void 0!==k&&k,w=e.htmlType,C=void 0===w?"button":w,S=D(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),T=i.useContext(A.b),P=i.useState(!!m),L=Object(c.a)(P,2),z=L[0],_=L[1],W=i.useState(!1),V=Object(c.a)(W,2),G=V[0],J=V[1],F=i.useContext(f.b),Y=F.getPrefixCls,$=F.autoInsertSpaceInButton,q=F.direction,K=t||i.createRef(),Q=i.useRef(),X=function(){return 1===i.Children.count(O)&&!y&&!U(p)};s="object"===Object(o.a)(m)&&m.delay?m.delay||!0:!!m,i.useEffect((function(){clearTimeout(Q.current),"number"===typeof s?Q.current=window.setTimeout((function(){_(s)}),s):_(s)}),[s]),i.useEffect((function(){if(K&&K.current&&!1!==$){var e=K.current.textContent;X()&&M(e)?G||J(!0):G&&J(!1)}}),[K]);var Z=function(t){var n,a=e.onClick,r=e.disabled;z||r?t.preventDefault():null===(n=a)||void 0===n||n(t)};Object(R.a)(!("string"===typeof y&&y.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(y,"` at https://ant.design/components/icon")),Object(R.a)(!(E&&U(p)),"Button","`link` or `text` button can't be a `ghost` button.");var ee=Y("btn",b),te=!1!==$,ne="";switch(g||T){case"large":ne="lg";break;case"small":ne="sm"}var ae=z?"loading":y,re=u()(ee,(n={},Object(r.a)(n,"".concat(ee,"-").concat(p),p),Object(r.a)(n,"".concat(ee,"-").concat(h),h),Object(r.a)(n,"".concat(ee,"-").concat(ne),ne),Object(r.a)(n,"".concat(ee,"-icon-only"),!O&&0!==O&&!!ae),Object(r.a)(n,"".concat(ee,"-background-ghost"),E&&!U(p)),Object(r.a)(n,"".concat(ee,"-loading"),z),Object(r.a)(n,"".concat(ee,"-two-chinese-chars"),G&&te),Object(r.a)(n,"".concat(ee,"-block"),N),Object(r.a)(n,"".concat(ee,"-dangerous"),!!v),Object(r.a)(n,"".concat(ee,"-rtl"),"rtl"===q),n),j),ce=y&&!z?y:i.createElement(B,{existIcon:!!y,prefixCls:ee,loading:!!z}),oe=O||0===O?H(O,X()&&te):null,ie=Object(d.a)(S,["navigate"]);if(void 0!==ie.href)return i.createElement("a",Object(a.a)({},ie,{className:re,onClick:Z,ref:K}),ce,oe);var se=i.createElement("button",Object(a.a)({},S,{type:C,className:re,onClick:Z,ref:K}),ce,oe);return U(p)?se:i.createElement(I,null,se)},Y=i.forwardRef(F);Y.displayName="Button",Y.Group=v,Y.__ANT_BUTTON=!0;t.b=Y},269:function(e,t,n){"use strict";var a=n(226);t.a=a.b}}]);
//# sourceMappingURL=34.d15ac9be.chunk.js.map