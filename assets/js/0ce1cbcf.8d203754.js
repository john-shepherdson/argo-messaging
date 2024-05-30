"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[554],{7481:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(4848),i=n(8453);const o={id:"api_projects",title:"Projects",sidebar_position:3},t=void 0,c={id:"api_advanced/api_projects",title:"Projects",description:"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources",source:"@site/docs/api_advanced/api_projects.md",sourceDirName:"api_advanced",slug:"/api_advanced/api_projects",permalink:"/argo-messaging/docs/api_advanced/api_projects",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"api_projects",title:"Projects",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User Management",permalink:"/argo-messaging/docs/api_advanced/api_users"},next:{title:"Topics",permalink:"/argo-messaging/docs/api_advanced/api_topics"}},a={},l=[{value:"[GET] Manage Projects - List all projects",id:"get-manage-projects---list-all-projects",level:2},{value:"Request",id:"request",level:3},{value:"Example request",id:"example-request",level:3},{value:"Responses",id:"responses",level:3},{value:"Errors",id:"errors",level:3},{value:"[GET] Manage Projects - List a specific project",id:"get-manage-projects---list-a-specific-project",level:2},{value:"Request",id:"request-1",level:3},{value:"Where",id:"where",level:3},{value:"Example request",id:"example-request-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"Errors",id:"errors-1",level:3},{value:"[POST] Manage Projects - Create new project",id:"post-manage-projects---create-new-project",level:2},{value:"Request",id:"request-2",level:3},{value:"Where",id:"where-1",level:3},{value:"Post body:",id:"post-body",level:3},{value:"Example request",id:"example-request-2",level:3},{value:"Responses",id:"responses-2",level:3},{value:"Errors",id:"errors-2",level:3},{value:"[PUT] Manage Projects - Update a project",id:"put-manage-projects---update-a-project",level:2},{value:"Request",id:"request-3",level:3},{value:"Where",id:"where-2",level:3},{value:"PUT body:",id:"put-body",level:3},{value:"Example request",id:"example-request-3",level:3},{value:"Responses",id:"responses-3",level:3},{value:"Errors",id:"errors-3",level:3},{value:"[DELETE] Manage Projects - Delete Project",id:"delete-manage-projects---delete-project",level:2},{value:"Request",id:"request-4",level:3},{value:"Where",id:"where-3",level:3},{value:"Example request",id:"example-request-4",level:3},{value:"Responses",id:"responses-4",level:3},{value:"Errors",id:"errors-4",level:3},{value:"[GET] List all users that are members of a specific project",id:"get-list-all-users-that-are-members-of-a-specific-project",level:3},{value:"Example request",id:"example-request-5",level:3},{value:"Responses",id:"responses-5",level:3},{value:"Unprivileged mode (non service_admin user)",id:"unprivileged-mode-non-service_admin-user",level:3},{value:"[GET] Show a specific member user of the specific project",id:"get-show-a-specific-member-user-of-the-specific-project",level:3},{value:"Example request",id:"example-request-6",level:3},{value:"Responses",id:"responses-6",level:3},{value:"Errors",id:"errors-5",level:3},{value:"[POST] Create a new member user under the specific project",id:"post-create-a-new-member-user-under-the-specific-project",level:3},{value:"Example request",id:"example-request-7",level:3},{value:"Post body:",id:"post-body-1",level:3},{value:"Responses",id:"responses-7",level:3},{value:"Errors",id:"errors-6",level:3},{value:"[PUT] Updates the roles for a member user under the specific project",id:"put-updates-the-roles-for-a-member-user-under-the-specific-project",level:3},{value:"Example request",id:"example-request-8",level:3},{value:"Post body:",id:"post-body-2",level:3},{value:"Responses",id:"responses-8",level:3},{value:"Errors",id:"errors-7",level:3},{value:"[POST] Add/Invite a user to a project",id:"post-addinvite-a-user-to-a-project",level:3},{value:"Example request",id:"example-request-9",level:3},{value:"Post body:",id:"post-body-3",level:3},{value:"Responses",id:"responses-9",level:3},{value:"Errors",id:"errors-8",level:3},{value:"[POST] Remove a user from the project",id:"post-remove-a-user-from-the-project",level:3},{value:"Example request",id:"example-request-10",level:3},{value:"Responses",id:"responses-10",level:3},{value:"Errors",id:"errors-9",level:3},{value:"[GET] Project Metrics",id:"get-project-metrics",level:2},{value:"Request",id:"request-5",level:3},{value:"Where",id:"where-4",level:3},{value:"Example request",id:"example-request-11",level:3},{value:"Responses",id:"responses-11",level:3},{value:"Errors",id:"errors-10",level:3}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources"}),"\n",(0,r.jsx)(s.h2,{id:"get-manage-projects---list-all-projects",children:"[GET] Manage Projects - List all projects"}),"\n",(0,r.jsx)(s.p,{children:"This request lists all available projects in the service"}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'GET "/v1/projects"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"example-request",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  "https://{URL}/v1/projects"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains a list of all available projects"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "projects": [\n    {\n      "name": "PROJECT_1",\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z",\n      "created_by": "userA",\n      "description": "simple project"\n    },\n    {\n      "name": "PROJECT_2",\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z",\n      "created_by": "userA",\n      "description": "simple project"\n    },\n    {\n      "name": "BRAND_NEW",\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z",\n      "created_by": "userA",\n      "description": "brand new project"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h2,{id:"get-manage-projects---list-a-specific-project",children:"[GET] Manage Projects - List a specific project"}),"\n",(0,r.jsx)(s.p,{children:"This request lists information about a specific project"}),"\n",(0,r.jsx)(s.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'GET "/v1/projects/{project_name}"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"where",children:"Where"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Project_name: Name of the project to get information on"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example-request-1",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  "https://{URL}/v1/projects/BRAND_NEW"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-1",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains information about the specific project"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "name": "BRAND_NEW",\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-10T23:00:00Z",\n  "created_by": "userA",\n  "description": "brand new project"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-1",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h2,{id:"post-manage-projects---create-new-project",children:"[POST] Manage Projects - Create new project"}),"\n",(0,r.jsx)(s.p,{children:"This request creates a new project with the given project_name with a POST request"}),"\n",(0,r.jsx)(s.h3,{id:"request-2",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'POST "/v1/projects/{project_name}"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"where-1",children:"Where"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Project_name: Name of the project to create"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"post-body",children:"Post body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "description": "a simple description"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"example-request-2",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n -d $POSTDATA "https://{URL}/v1/projects/PROJECT_NEW"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-2",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains the newly created project"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "name": "PROJET_NEW",\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-10T23:00:00Z",\n  "created_by": "userA",\n  "description": "brand new project"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-2",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h2,{id:"put-manage-projects---update-a-project",children:"[PUT] Manage Projects - Update a project"}),"\n",(0,r.jsx)(s.p,{children:"This request updates information (such as name,description) on an existing project (PUT)"}),"\n",(0,r.jsx)(s.h3,{id:"request-3",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'PUT "/v1/projects/{project_name}"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"where-2",children:"Where"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Project_name: Name of the project to create"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"put-body",children:"PUT body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "name": "new project name",\n  "description": "a simple description"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"example-request-3",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X PUT -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n -d $POSTDATA "https://{URL}/v1/projects/PROJECT_NEW"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-3",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains the newly updated"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "name": "PROJET_NEW_UPDATED",\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-13T23:00:00Z",\n  "created_by": "userA",\n  "description": "description project updated"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-3",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h2,{id:"delete-manage-projects---delete-project",children:"[DELETE] Manage Projects - Delete Project"}),"\n",(0,r.jsx)(s.p,{children:"This request deletes a specific project"}),"\n",(0,r.jsx)(s.h3,{id:"request-4",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'DELETE "/v1/projects/{project_name}"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"where-3",children:"Where"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Project_name: Name of the project to delete"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example-request-4",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X DELETE -H "Content-Type: application/json" -H "x-api-key: S3CR3T"  \n "https://{URL}/v1/projects/BRAND_NEW"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-4",children:"Responses"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\nCode: ",(0,r.jsx)(s.code,{children:"200 OK"}),", Empty response if successful."]}),"\n",(0,r.jsx)(s.h3,{id:"errors-4",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h3,{id:"get-list-all-users-that-are-members-of-a-specific-project",children:"[GET] List all users that are members of a specific project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-5",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  "https://{URL}/v1/projects/ARGO2/members"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-5",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains a list of all available users in the specific project"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "users": [\n    {\n      "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n      "projects": [\n        {\n          "project": "ARGO2",\n          "roles": [\n            "consumer",\n            "publisher"\n          ],\n          "topics": [],\n          "subscriptions": []\n        }\n      ],\n      "name": "Test",\n      "token": "S3CR3T",\n      "email": "Test@test.com",\n      "service_roles": [],\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z"\n    }\n  ],\n  "nextPageToken": "",\n  "totalSize": 1\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"unprivileged-mode-non-service_admin-user",children:"Unprivileged mode (non service_admin user)"}),"\n",(0,r.jsxs)(s.p,{children:["When a user is project_admin instead of service_admin and lists a project's users the results\nreturned remove user information such as ",(0,r.jsx)(s.code,{children:"token"}),", ",(0,r.jsx)(s.code,{children:"service_roles"})," and ",(0,r.jsx)(s.code,{children:"created_by"})," For example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "users": [\n    {\n      "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n      "projects": [\n        {\n          "project": "ARGO2",\n          "roles": [\n            "consumer",\n            "publisher"\n          ],\n          "topics": [],\n          "subscriptions": []\n        }\n      ],\n      "name": "Test",\n      "token": "",\n      "email": "Test@test.com",\n      "service_roles": [],\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z"\n    }\n  ],\n  "nextPageToken": "",\n  "totalSize": 1\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"get-show-a-specific-member-user-of-the-specific-project",children:"[GET] Show a specific member user of the specific project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-6",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  "https://{URL}/v1/projects/ARGO2/members/Test"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-6",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains information of the specific user Test"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "users": [\n    {\n      "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n      "projects": [\n        {\n          "project": "ARGO2",\n          "roles": [\n            "consumer",\n            "publisher"\n          ],\n          "topics": [],\n          "subscriptions": []\n        }\n      ],\n      "name": "Test",\n      "token": "S3CR3T",\n      "email": "Test@test.com",\n      "service_roles": [],\n      "created_on": "2009-11-10T23:00:00Z",\n      "modified_on": "2009-11-10T23:00:00Z"\n    }\n  ],\n  "nextPageToken": "",\n  "totalSize": 1\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-5",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h3,{id:"post-create-a-new-member-user-under-the-specific-project",children:"[POST] Create a new member user under the specific project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-7",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"post-body-1",children:"Post body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "projects": [\n    {\n      "project": "ARGO2",\n      "roles": [\n        "consumer"\n      ]\n    }\n  ],\n  "email": "email@test.com"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-7",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains information about the newly created user"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n  "projects": [\n    {\n      "project": "ARGO2",\n      "roles": [\n        "consumer"\n      ],\n      "topics": [],\n      "subscriptions": []\n    }\n  ],\n  "name": "NewUSer",\n  "token": "S3CR3T",\n  "email": "email@test.com",\n  "service_roles": [],\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-10T23:00:00Z"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-6",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h3,{id:"put-updates-the-roles-for-a-member-user-under-the-specific-project",children:"[PUT] Updates the roles for a member user under the specific project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-8",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X PUT -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"post-body-2",children:"Post body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "projects": [\n    {\n      "project": "ARGO2",\n      "roles": [\n        "consumer"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-8",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains information about the updated user"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n  "projects": [\n    {\n      "project": "ARGO2",\n      "roles": [\n        "consumer"\n      ],\n      "topics": [],\n      "subscriptions": []\n    }\n  ],\n  "name": "NewUSer",\n  "token": "S3CR3T",\n  "email": "email@test.com",\n  "service_roles": [],\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-10T23:00:00Z"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-7",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h3,{id:"post-addinvite-a-user-to-a-project",children:"[POST] Add/Invite a user to a project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-9",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'curl -X POST -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n  -d $POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser:add"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"post-body-3",children:"Post body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "roles": [\n    "consumer"\n  ],\n  "topics": [\n    "topic1"\n  ],\n  "subscriptions": [\n    "sub1"\n  ]\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-9",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful, the response contains information about the added user"}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n  "projects": [\n    {\n      "project": "ARGO2",\n      "roles": [\n        "consumer"\n      ],\n      "topics": [\n        "topic1"\n      ],\n      "subscriptions": [\n        "sub1"\n      ]\n    }\n  ],\n  "name": "NewUSer",\n  "token": "S3CR3T",\n  "email": "email@test.com",\n  "service_roles": [],\n  "created_on": "2009-11-10T23:00:00Z",\n  "modified_on": "2009-11-10T23:00:00Z"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-8",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h3,{id:"post-remove-a-user-from-the-project",children:"[POST] Remove a user from the project"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-10",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'curl -X POST -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n "https://{URL}/v1/projects/ARGO2/members/NewUser:remove"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-10",children:"Responses"}),"\n",(0,r.jsxs)(s.p,{children:["Empty response on success\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"errors-9",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]}),"\n",(0,r.jsx)(s.h2,{id:"get-project-metrics",children:"[GET] Project Metrics"}),"\n",(0,r.jsx)(s.p,{children:"The following request returns related metrics for the specific project: e.g.. the number of topics"}),"\n",(0,r.jsx)(s.h3,{id:"request-5",children:"Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'GET "/v1/projects/{project_name}:metrics"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"where-4",children:"Where"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Project_name: name of the project"}),"\n",(0,r.jsx)(s.li,{children:"topic_name: name of the topic"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"example-request-11",children:"Example request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'curl  -H "Content-Type: application/json" -H "x-api-key: S3CR3T"\n"https://{URL}/v1/projects/BRAND_NEW:metrics"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"responses-11",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:"If successful it returns projects related metrics (number of topics, number of subscriptions)."}),"\n",(0,r.jsxs)(s.p,{children:["Success Response\n",(0,r.jsx)(s.code,{children:"200 OK"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:'{\n   "metrics": [\n      {\n         "metric": "project.number_of_topics",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of topics belonging to the specific project"\n      },\n      {\n         "metric": "project.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 4\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions belonging to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserA",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserB",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserX",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 1\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserZ",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 2\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.number_of_daily_messages",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2018-10-02",\n               "value": 30\n            },\n            {\n               "timestamp": "2018-10-01",\n               "value": 110\n            }\n         ],\n         "description": "A collection of counters that represents the total number of messages published each day to all of the project\'s topics"\n      }\n   ]\n}\n\n'})}),"\n",(0,r.jsx)(s.h3,{id:"errors-10",children:"Errors"}),"\n",(0,r.jsxs)(s.p,{children:["Please refer to section ",(0,r.jsx)(s.a,{href:"/argo-messaging/docs/api_basic/api_errors",children:"Errors"})," to see all possible Errors"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(6540);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);