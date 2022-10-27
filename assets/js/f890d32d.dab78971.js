"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),g=n,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={id:"guide_metrics",title:"Metrics Guide",sidebar_position:6},s=void 0,o={unversionedId:"guides/guide_metrics",id:"guides/guide_metrics",title:"Metrics Guide",description:"Project metrics:  If you want to see the specific project metrics please visit this page Project Metrics",source:"@site/docs/guides/guide_metrics.md",sourceDirName:"guides",slug:"/guides/guide_metrics",permalink:"/argo-messaging/docs/guides/guide_metrics",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"guide_metrics",title:"Metrics Guide",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Replaying Messages",permalink:"/argo-messaging/docs/guides/replaying_guide"},next:{title:"Mattermost Integration",permalink:"/argo-messaging/docs/guides/mattermost-integration_guide"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Project metrics:"),"  If you want to see the specific project metrics please visit this page ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_advanced/api_projects#get-project-metrics"},"Project Metrics")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"number of topics"),(0,n.kt)("li",{parentName:"ul"},"number of subscriptions"),(0,n.kt)("li",{parentName:"ul"},"per project user number of subscriptions"),(0,n.kt)("li",{parentName:"ul"},"number of daily messages*")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Subscriptions metrics:")," ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_advanced/api_subscriptions#get-subscription-metrics"},"Subscription Metrics")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"number of messages"),(0,n.kt)("li",{parentName:"ul"},"total bytes consumed "),(0,n.kt)("li",{parentName:"ul"},"consumption rate(A rate that displays how many messages were consumed per second between the last two consume events)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Topic metrics:")," ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_advanced/api_topics#get-topic-metrics"},"Topics Metrics")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"number of messages"),(0,n.kt)("li",{parentName:"ul"},"number of subscriptions"),(0,n.kt)("li",{parentName:"ul"},"number of messages"),(0,n.kt)("li",{parentName:"ul"},"total bytes published"),(0,n.kt)("li",{parentName:"ul"},"number of daily messages"),(0,n.kt)("li",{parentName:"ul"},"publishing rate(A rate that displays how many messages were published per second between the last two publish events)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Operational metrics:")," ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_advanced/api_metrics"},"Operational Metrics")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"per ams node cpu usage"),(0,n.kt)("li",{parentName:"ul"},"per ams node memory usage")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Generic Metrics of usage:")," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"per project total users,topics,subscriptions,messages and average daily messages"),(0,n.kt)("li",{parentName:"ul"},"total users "),(0,n.kt)("li",{parentName:"ul"},"total topics "),(0,n.kt)("li",{parentName:"ul"},"total subscriptions "),(0,n.kt)("li",{parentName:"ul"},"total messages "),(0,n.kt)("li",{parentName:"ul"},"average daily messages")))}u.isMDXComponent=!0}}]);