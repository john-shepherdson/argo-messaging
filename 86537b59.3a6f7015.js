(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return f}));var r=t(2),a=t(6),o=(t(0),t(83)),i={id:"msg_backend",title:"Using Apache Kafka as a Backend Message system"},s={unversionedId:"msg_backend",id:"msg_backend",isDocsHomePage:!1,title:"Using Apache Kafka as a Backend Message system",description:"The ARGO Messaging API has been designed to rely on a generic Message Backend Interface and use specific implementation of that interface for supporting different systems. Right now the first implementation for the messaging backend relies on Apache Kafka as a distributed messaging system.",source:"@site/docs/msg_backend.md",permalink:"/argo-messaging/docs/msg_backend",sidebar:"someSidebar",previous:{title:"Overview & Introduction",permalink:"/argo-messaging/docs/"},next:{title:"Data flow in Argo Messaging",permalink:"/argo-messaging/docs/msg_flow"}},c=[],p={rightToc:c};function f(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ARGO Messaging API has been designed to rely on a generic Message Backend Interface and use specific implementation of that interface for supporting different systems. Right now the first implementation for the messaging backend relies on Apache Kafka as a distributed messaging system."),Object(o.b)("p",null,"A big advantage of the ARGO Messaging API is that provides a mechanism to easily support namespacing and different tenants on a Kafka Backend (Apache Kafka doesn\u2019t support natively namespacing yet). ARGO Messaging API uses the notion of \u2018projects\u2019 for each tenant and can support multiple projects each one containing multiple topics/subscriptions and users on the same Kafka backend."))}f.isMDXComponent=!0},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),f=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=f(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=f(t),l=r,d=u["".concat(i,".").concat(l)]||u[l]||g[l]||o;return t?a.a.createElement(d,s(s({ref:n},p),{},{components:t})):a.a.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);