"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8162],{3633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(4848),s=t(8453);const i={id:"api_auth",title:"Authentication",sidebar_position:1},r=void 0,o={id:"api_advanced/api_auth",title:"Authentication",description:"Each user is authenticated by adding the header parameter x-api-key in each API request",source:"@site/docs/api_advanced/api_auth.md",sourceDirName:"api_advanced",slug:"/api_advanced/api_auth",permalink:"/argo-messaging/docs/api_advanced/api_auth",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api_auth",title:"Authentication",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API Calls",permalink:"/argo-messaging/docs/category/api-calls"},next:{title:"User Management",permalink:"/argo-messaging/docs/api_advanced/api_users"}},c={},d=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Each user is authenticated by adding the header parameter ",(0,a.jsx)(n.code,{children:"x-api-key"})," in each API request"]}),"\n",(0,a.jsx)(n.p,{children:"If a user does not provide a valid token the following response is returned:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": 401,\n    "message": "Unauthenticated",\n    "status": "UNAUTHENTICATED"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The ARGO Messaging Service supports authorization. If a user is unauthorized the following response is returned:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "error": {\n    "code": 403,\n    "message": "Access to this resource is forbidden",\n    "status": "FORBIDDEN"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);