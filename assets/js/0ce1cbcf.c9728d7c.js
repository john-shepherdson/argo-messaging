"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3637],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),i=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=i(e.components);return s.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?s.createElement(k,a(a({ref:r},c),{},{components:t})):s.createElement(k,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var i=2;i<o;i++)a[i]=t[i];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3075:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const o={id:"api_projects",title:"Projects"},a=void 0,p={unversionedId:"api_advanced/api_projects",id:"api_advanced/api_projects",title:"Projects",description:"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources",source:"@site/docs/api_advanced/api_projects.md",sourceDirName:"api_advanced",slug:"/api_advanced/api_projects",permalink:"/argo-messaging/docs/api_advanced/api_projects",draft:!1,tags:[],version:"current",frontMatter:{id:"api_projects",title:"Projects"},sidebar:"tutorialSidebar",previous:{title:"API Operational Metrics",permalink:"/argo-messaging/docs/api_advanced/api_metrics"},next:{title:"User Registration",permalink:"/argo-messaging/docs/api_advanced/api_registrations"}},l={},i=[{value:"GET Manage Projects - List all projects",id:"get-manage-projects---list-all-projects",level:2},{value:"Request",id:"request",level:3},{value:"Example request",id:"example-request",level:3},{value:"Responses",id:"responses",level:3},{value:"Errors",id:"errors",level:3},{value:"GET Manage Projects - List a specific project",id:"get-manage-projects---list-a-specific-project",level:2},{value:"Request",id:"request-1",level:3},{value:"Where",id:"where",level:3},{value:"Example request",id:"example-request-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"Errors",id:"errors-1",level:3},{value:"POST Manage Projects - Create new project",id:"post-manage-projects---create-new-project",level:2},{value:"Request",id:"request-2",level:3},{value:"Where",id:"where-1",level:3},{value:"Post body:",id:"post-body",level:3},{value:"Example request",id:"example-request-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"Errors",id:"errors-2",level:3},{value:"PUT Manage Projects - Update a project",id:"put-manage-projects---update-a-project",level:2},{value:"Request",id:"request-3",level:3},{value:"Where",id:"where-2",level:3},{value:"PUT body:",id:"put-body",level:3},{value:"Example request",id:"example-request-3",level:3},{value:"Responses",id:"responses-3",level:3},{value:"Errors",id:"errors-3",level:3},{value:"DELETE Manage Projects - Delete Project",id:"delete-manage-projects---delete-project",level:2},{value:"Request",id:"request-4",level:3},{value:"Where",id:"where-3",level:3},{value:"Example request",id:"example-request-4",level:3},{value:"Responses",id:"responses-4",level:3},{value:"Errors",id:"errors-4",level:3},{value:"GET List all users that are members of a specific project",id:"get-list-all-users-that-are-members-of-a-specific-project",level:3},{value:"Example request",id:"example-request-5",level:3},{value:"Responses",id:"responses-5",level:3},{value:"Unprivileged mode (non service_admin user)",id:"unprivileged-mode-non-service_admin-user",level:3},{value:"GET Show a specific member user of the specific project",id:"get-show-a-specific-member-user-of-the-specific-project",level:3},{value:"Example request",id:"example-request-6",level:3},{value:"Responses",id:"responses-6",level:3},{value:"Errors",id:"errors-5",level:3},{value:"POST Create a new member user under the specific project",id:"post-create-a-new-member-user-under-the-specific-project",level:3},{value:"Example request",id:"example-request-7",level:3},{value:"Post body:",id:"post-body-1",level:3},{value:"Responses",id:"responses-7",level:3},{value:"Errors",id:"errors-6",level:3},{value:"PUT Updates the roles for a member user under the specific project",id:"put-updates-the-roles-for-a-member-user-under-the-specific-project",level:3},{value:"Example request",id:"example-request-8",level:3},{value:"Post body:",id:"post-body-2",level:3},{value:"Responses",id:"responses-8",level:3},{value:"Errors",id:"errors-7",level:3},{value:"POST Add/Invite a user to a project",id:"post-addinvite-a-user-to-a-project",level:3},{value:"Example request",id:"example-request-9",level:3},{value:"Post body:",id:"post-body-3",level:3},{value:"Responses",id:"responses-9",level:3},{value:"Errors",id:"errors-8",level:3},{value:"POST Remove a user from the project",id:"post-remove-a-user-from-the-project",level:3},{value:"Example request",id:"example-request-10",level:3},{value:"Responses",id:"responses-10",level:3},{value:"Errors",id:"errors-9",level:3},{value:"GET Project Metrics",id:"get-project-metrics",level:2},{value:"Request",id:"request-5",level:3},{value:"Where",id:"where-4",level:3},{value:"Example request",id:"example-request-11",level:3},{value:"Responses",id:"responses-11",level:3},{value:"Errors",id:"errors-10",level:3}],c={toc:i};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources"),(0,n.kt)("h2",{id:"get-manage-projects---list-all-projects"},"[GET]"," Manage Projects - List all projects"),(0,n.kt)("p",null,"This request lists all available projects in the service"),(0,n.kt)("h3",{id:"request"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'GET "/v1/projects"\n')),(0,n.kt)("h3",{id:"example-request"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains a list of all available projects"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "projects": [\n    {\n       "name": "PROJECT_1",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "simple project"\n    },\n    {\n       "name": "PROJECT_2",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "simple project"\n    },\n    {\n       "name": "BRAND_NEW",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "brand new project"\n    }\n ]\n}\n')),(0,n.kt)("h3",{id:"errors"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h2",{id:"get-manage-projects---list-a-specific-project"},"[GET]"," Manage Projects - List a specific project"),(0,n.kt)("p",null,"This request lists information about a specific project"),(0,n.kt)("h3",{id:"request-1"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'GET "/v1/projects/{project_name}"\n')),(0,n.kt)("h3",{id:"where"},"Where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project_name: Name of the project to get information on")),(0,n.kt)("h3",{id:"example-request-1"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/BRAND_NEW?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-1"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains information about the specific project"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "BRAND_NEW",\n   "created_on": "2009-11-10T23:00:00Z",\n   "modified_on": "2009-11-10T23:00:00Z",\n   "created_by": "userA",\n   "description": "brand new project"\n}\n')),(0,n.kt)("h3",{id:"errors-1"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h2",{id:"post-manage-projects---create-new-project"},"[POST]"," Manage Projects - Create new project"),(0,n.kt)("p",null,"This request creates a new project with the given project_name with a POST request"),(0,n.kt)("h3",{id:"request-2"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'POST "/v1/projects/{project_name}"\n')),(0,n.kt)("h3",{id:"where-1"},"Where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project_name: Name of the project to create")),(0,n.kt)("h3",{id:"post-body"},"Post body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "description" : "a simple description"\n}\n')),(0,n.kt)("h3",{id:"example-request-2"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -H "Content-Type: application/json"\n -d $POSTDATA "https://{URL}/v1/projects/PROJECT_NEW?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-2"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains the newly created project"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "PROJET_NEW",\n "created_on": "2009-11-10T23:00:00Z",\n "modified_on": "2009-11-10T23:00:00Z",\n "created_by": "userA",\n "description": "brand new project"\n}\n')),(0,n.kt)("h3",{id:"errors-2"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h2",{id:"put-manage-projects---update-a-project"},"[PUT]"," Manage Projects - Update a project"),(0,n.kt)("p",null,"This request updates information (such as name,description) on an existing project (PUT)"),(0,n.kt)("h3",{id:"request-3"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'PUT "/v1/projects/{project_name}"\n')),(0,n.kt)("h3",{id:"where-2"},"Where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project_name: Name of the project to create")),(0,n.kt)("h3",{id:"put-body"},"PUT body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name":"new project name",\n  "description" : "a simple description"\n}\n')),(0,n.kt)("h3",{id:"example-request-3"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT -H "Content-Type: application/json"\n -d $POSTDATA "https://{URL}/v1/projects/PROJECT_NEW?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-3"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains the newly updated"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "name": "PROJET_NEW_UPDATED",\n "created_on": "2009-11-10T23:00:00Z",\n "modified_on": "2009-11-13T23:00:00Z",\n "created_by": "userA",\n "description": "description project updated"\n}\n')),(0,n.kt)("h3",{id:"errors-3"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h2",{id:"delete-manage-projects---delete-project"},"[DELETE]"," Manage Projects - Delete Project"),(0,n.kt)("p",null,"This request deletes a specific project"),(0,n.kt)("h3",{id:"request-4"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'DELETE "/v1/projects/{project_name}"\n')),(0,n.kt)("h3",{id:"where-3"},"Where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project_name: Name of the project to delete")),(0,n.kt)("h3",{id:"example-request-4"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X DELETE -H "Content-Type: application/json"  \n "https://{URL}/v1/projects/BRAND_NEW?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-4"},"Responses"),(0,n.kt)("p",null,"Success Response\nCode: ",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK"),", Empty response if successful."),(0,n.kt)("h3",{id:"errors-4"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h3",{id:"get-list-all-users-that-are-members-of-a-specific-project"},"[GET]"," List all users that are members of a specific project"),(0,n.kt)("h3",{id:"example-request-5"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/ARGO2/members?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-5"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains a list of all available users in the specific project"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "S3CR3T",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),(0,n.kt)("h3",{id:"unprivileged-mode-non-service_admin-user"},"Unprivileged mode (non service_admin user)"),(0,n.kt)("p",null,"When a user is project_admin instead of service_admin and lists a project's users the results\nreturned remove user information such as ",(0,n.kt)("inlineCode",{parentName:"p"},"token"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"service_roles")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_by")," For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),(0,n.kt)("h3",{id:"get-show-a-specific-member-user-of-the-specific-project"},"[GET]"," Show a specific member user of the specific project"),(0,n.kt)("h3",{id:"example-request-6"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/ARGO2/members/Test?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-6"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains information of the specific user Test"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "S3CR3T",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),(0,n.kt)("h3",{id:"errors-5"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h3",{id:"post-create-a-new-member-user-under-the-specific-project"},"[POST]"," Create a new member user under the specific project"),(0,n.kt)("h3",{id:"example-request-7"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"post-body-1"},"Post body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "projects": [\n            {\n                "project": "ARGO2",\n                "roles": ["consumer"]\n            }\n        ],\n    "email": "email@test.com"\n}\n')),(0,n.kt)("h3",{id:"responses-7"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains information about the newly created user"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),(0,n.kt)("h3",{id:"errors-6"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h3",{id:"put-updates-the-roles-for-a-member-user-under-the-specific-project"},"[PUT]"," Updates the roles for a member user under the specific project"),(0,n.kt)("h3",{id:"example-request-8"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X PUT -H "Content-Type: application/json"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"post-body-2"},"Post body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "projects": [\n            {\n                "project": "ARGO2",\n                "roles": ["consumer"]\n            }\n        ]\n}\n')),(0,n.kt)("h3",{id:"responses-8"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains information about the updated user"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),(0,n.kt)("h3",{id:"errors-7"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h3",{id:"post-addinvite-a-user-to-a-project"},"[POST]"," Add/Invite a user to a project"),(0,n.kt)("h3",{id:"example-request-9"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser:add?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"post-body-3"},"Post body:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "roles": ["consumer"],\n   "topics": ["topic1"],\n   "subscriptions": ["sub1"]\n}\n')),(0,n.kt)("h3",{id:"responses-9"},"Responses"),(0,n.kt)("p",null,"If successful, the response contains information about the added user"),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [\n                "topic1"\n             ],\n             "subscriptions": [\n                "sub1"\n             ]\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),(0,n.kt)("h3",{id:"errors-8"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h3",{id:"post-remove-a-user-from-the-project"},"[POST]"," Remove a user from the project"),(0,n.kt)("h3",{id:"example-request-10"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json"\n "https://{URL}/v1/projects/ARGO2/members/NewUser:remove?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-10"},"Responses"),(0,n.kt)("p",null,"Empty response on success\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,n.kt)("h3",{id:"errors-9"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"),(0,n.kt)("h2",{id:"get-project-metrics"},"[GET]"," Project Metrics"),(0,n.kt)("p",null,"The following request returns related metrics for the specific project: e.g.. the number of topics"),(0,n.kt)("h3",{id:"request-5"},"Request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'GET "/v1/projects/{project_name}:metrics"\n')),(0,n.kt)("h3",{id:"where-4"},"Where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Project_name: name of the project"),(0,n.kt)("li",{parentName:"ul"},"topic_name: name of the topic")),(0,n.kt)("h3",{id:"example-request-11"},"Example request"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl  -H "Content-Type: application/json"\n"https://{URL}/v1/projects/BRAND_NEW:metrics?key=S3CR3T"\n')),(0,n.kt)("h3",{id:"responses-11"},"Responses"),(0,n.kt)("p",null,"If successful it returns projects related metrics (number of topics, number of subscriptions)."),(0,n.kt)("p",null,"Success Response\n",(0,n.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n   "metrics": [\n      {\n         "metric": "project.number_of_topics",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of topics belonging to the specific project"\n      },\n      {\n         "metric": "project.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 4\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions belonging to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserA",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserB",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserX",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 1\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserZ",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 2\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.number_of_daily_messages",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2018-10-02",\n               "value": 30\n            },\n            {\n               "timestamp": "2018-10-01",\n               "value": 110\n            }\n         ],\n         "description": "A collection of counters that represents the total number of messages published each day to all of the project\'s topics"\n      }\n   ]\n}\n\n')),(0,n.kt)("h3",{id:"errors-10"},"Errors"),(0,n.kt)("p",null,"Please refer to section ",(0,n.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_basic/api_errors"},"Errors")," to see all possible Errors"))}u.isMDXComponent=!0}}]);