(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[36],{103:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(113);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},113:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(114);function c(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},1130:function(t,e,r){"use strict";r.r(e);var n=r(12),c=r.n(n),a=r(13),o=r(29),i=r(103),s=r(0),u=r(43),l=r(40),f=r(22),b=r(2);e.default=function(t){var e=t.history,r=Object(s.useState)(""),n=Object(i.a)(r,2),d=n[0],m=n[1],p=Object(f.c)((function(t){return Object(o.a)({},t)})).user;Object(s.useEffect)((function(){p&&p.token&&e.push("/")}),[p,e]);var h=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r={url:"http://localhost:3000/register/complete",handleCodeInApp:!0},t.next=4,u.a.sendSignInLinkToEmail(d,r);case 4:l.b.success("Email is sent to ".concat(d,". Click the link to complete your registration.")),window.localStorage.setItem("emailForRegistration",d),m("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"container p-5",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(b.jsx)("h4",{children:"Register"}),Object(b.jsxs)("form",{onSubmit:h,children:[Object(b.jsx)("input",{type:"email",className:"form-control",value:d,onChange:function(t){return m(t.target.value)},placeholder:"Your email",autoFocus:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-raised",children:"Register"})]})]})})})}},114:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=36.c750183e.chunk.js.map