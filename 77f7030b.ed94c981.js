(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return O}));var r=a(2),n=a(6),b=(a(0),a(93)),l={id:"api_errors",title:"API Errors"},c={unversionedId:"api_errors",id:"api_errors",isDocsHomePage:!1,title:"API Errors",description:"Errors",source:"@site/docs/api_errors.md",permalink:"/argo-messaging/docs/api_errors",sidebar:"someSidebar",previous:{title:"Service introduction and configuration",permalink:"/argo-messaging/docs/api_basic"},next:{title:"Authentication",permalink:"/argo-messaging/docs/api_auth"}},i=[{value:"Errors",id:"errors",children:[]},{value:"Error Codes",id:"error-codes",children:[]}],o={rightToc:i};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"errors"},"Errors"),Object(b.b)("p",null,"In case of Error during handling user\u2019s request the API responds using the following schema:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n   "error": {\n      "code": 500,\n      "message": "Something bad happened",\n      "status": "INTERNAL"\n   }\n}\n')),Object(b.b)("h2",{id:"error-codes"},"Error Codes"),Object(b.b)("p",null,"The following error codes are the possinble errors of all methods"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Error"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Code"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Status"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Related Requests"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ack Timeout"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"408"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TIMEOUT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Acknowledge Message (POST) - ",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/argo-messaging/docs/overview#message-acknowledgement-deadline"}),"more info"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Topic already exists"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"409"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ALREADY_EXISTS"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Create Topic (PUT)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subscription already exists"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"409"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ALREADY_EXISTS"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Create Subscription (PUT)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid Topics Name"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Create Subscription (PUT)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Topic Doesn't Exist"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NOT_FOUND"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Show specific Topic  (GET)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid Topic ACL arguments"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify Topic ACL (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subscription Doesn't Exist"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"404"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NOT_FOUND"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Show specific Subscription  (GET)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Message size to large"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"413"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Topic Publish (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid Subscription Arguments"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Create Subscription (POST), Modify Push Configuration (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid Subscription ACL arguments"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify Subscription ACL (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid ACK Parameter"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subscription Acknowledge (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid ACK id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subscription Acknowledge (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Invalid pull parameters"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"400"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INVALID_ARGUMENT"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Subscription Pull (POST)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Unauthorized"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"401"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"UNAUTHORIZED"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All requests ",Object(b.b)("em",{parentName:"td"},"(if a user is not authenticated)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Forbidden Access to Resource"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"403"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FORBIDDEN"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All requests ",Object(b.b)("em",{parentName:"td"},"(if a user is forbidden to access the resource)"))))))}O.isMDXComponent=!0},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),O=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=O(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=O(a),u=r,d=p["".concat(l,".").concat(u)]||p[u]||j[u]||b;return a?n.a.createElement(d,c(c({ref:t},o),{},{components:a})):n.a.createElement(d,c({ref:t},o))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);