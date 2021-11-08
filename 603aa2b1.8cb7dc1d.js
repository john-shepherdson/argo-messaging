(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(83)),i={id:"qa_ruby",title:"Q & A - Ruby specifics"},c={unversionedId:"qa_ruby",id:"qa_ruby",isDocsHomePage:!1,title:"Q & A - Ruby specifics",description:"Questions and answers based on problems encountered during implementation.",source:"@site/docs/qa_ruby.md",permalink:"/argo-messaging/docs/qa_ruby",sidebar:"someSidebar",previous:{title:"Q & A - General Questions",permalink:"/argo-messaging/docs/qa"}},s=[{value:"Base64 encoded string in Ruby",id:"base64-encoded-string-in-ruby",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Questions and answers based on problems encountered during implementation. "),Object(a.b)("h2",{id:"base64-encoded-string-in-ruby"},"Base64 encoded string in Ruby"),Object(a.b)("p",null,"The inbuilt Base64 library in Ruby is adding some '\\n's."),Object(a.b)("p",null,"We advice you to use ",Object(a.b)("strong",{parentName:"p"},"Base64.strict_encode64()"),", which does not add newlines. "),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://ruby-doc.org/stdlib/libdoc/base64/rdoc/classes/Base64.html"}),"The Ruby docs"),' are somewhat confusing, the b64encode method is supposed to add a newline for every 60th character, and the example for the encode64 method is actually using the b64encode method. It seems the pack("m") method for the Array class used by encode64 also adds the newlines. I would consider it a design bug that this is not optional.'),Object(a.b)("p",null,"You could either remove the newlines yourself, or if you're using rails, there's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://api.rubyonrails.org/classes/ActiveSupport/CoreExtensions/Base64/Encoding.html"}),"ActiveSupport::CoreExtensions::Base64::Encoding")," with the encode64s method."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://stackoverflow.com/questions/2620975/strange-n-in-base64-encoded-string-in-ruby"}),"Solution at Stackoverflow"))))}l.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);