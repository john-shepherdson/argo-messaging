(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),s=t(6),c=(t(0),t(92)),o={id:"api_projects",title:"Projects"},a={unversionedId:"api_projects",id:"api_projects",isDocsHomePage:!1,title:"Projects",description:"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources",source:"@site/docs/api_projects.md",permalink:"/argo-messaging/docs/api_projects",sidebar:"someSidebar",previous:{title:"User Management",permalink:"/argo-messaging/docs/api_users"},next:{title:"Topics",permalink:"/argo-messaging/docs/api_topics"}},p=[{value:"GET Manage Projects - List all projects",id:"get-manage-projects---list-all-projects",children:[{value:"Request",id:"request",children:[]},{value:"Example request",id:"example-request",children:[]},{value:"Responses",id:"responses",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"GET Manage Projects - List a specific project",id:"get-manage-projects---list-a-specific-project",children:[{value:"Request",id:"request-1",children:[]},{value:"Where",id:"where",children:[]},{value:"Example request",id:"example-request-1",children:[]},{value:"Responses",id:"responses-1",children:[]},{value:"Errors",id:"errors-1",children:[]}]},{value:"POST Manage Projects - Create new project",id:"post-manage-projects---create-new-project",children:[{value:"Request",id:"request-2",children:[]},{value:"Where",id:"where-1",children:[]},{value:"Post body:",id:"post-body",children:[]},{value:"Example request",id:"example-request-2",children:[]},{value:"Responses",id:"responses-2",children:[]},{value:"Errors",id:"errors-2",children:[]}]},{value:"PUT Manage Projects - Update a project",id:"put-manage-projects---update-a-project",children:[{value:"Request",id:"request-3",children:[]},{value:"Where",id:"where-2",children:[]},{value:"PUT body:",id:"put-body",children:[]},{value:"Example request",id:"example-request-3",children:[]},{value:"Responses",id:"responses-3",children:[]},{value:"Errors",id:"errors-3",children:[]}]},{value:"DELETE Manage Projects - Delete Project",id:"delete-manage-projects---delete-project",children:[{value:"Request",id:"request-4",children:[]},{value:"Where",id:"where-3",children:[]},{value:"Example request",id:"example-request-4",children:[]},{value:"Responses",id:"responses-4",children:[]},{value:"Errors",id:"errors-4",children:[]},{value:"GET List all users that are members of a specific project",id:"get-list-all-users-that-are-members-of-a-specific-project",children:[]},{value:"Example request",id:"example-request-5",children:[]},{value:"Responses",id:"responses-5",children:[]},{value:"Unpriviledge mode (non service_admin user)",id:"unpriviledge-mode-non-service_admin-user",children:[]},{value:"GET Show a specific member user of the specific project",id:"get-show-a-specific-member-user-of-the-specific-project",children:[]},{value:"Example request",id:"example-request-6",children:[]},{value:"Responses",id:"responses-6",children:[]},{value:"Errors",id:"errors-5",children:[]},{value:"POST Create a new member user under the specific project",id:"post-create-a-new-member-user-under-the-specific-project",children:[]},{value:"Example request",id:"example-request-7",children:[]},{value:"Post body:",id:"post-body-1",children:[]},{value:"Responses",id:"responses-7",children:[]},{value:"Errors",id:"errors-6",children:[]},{value:"PUT Updates the roles for a member user under the specific project",id:"put-updates-the-roles-for-a-member-user-under-the-specific-project",children:[]},{value:"Example request",id:"example-request-8",children:[]},{value:"Post body:",id:"post-body-2",children:[]},{value:"Responses",id:"responses-8",children:[]},{value:"Errors",id:"errors-7",children:[]},{value:"POST Add/Invite a user to a project",id:"post-addinvite-a-user-to-a-project",children:[]},{value:"Example request",id:"example-request-9",children:[]},{value:"Post body:",id:"post-body-3",children:[]},{value:"Responses",id:"responses-9",children:[]},{value:"Errors",id:"errors-8",children:[]},{value:"POST Remove a user from the project",id:"post-remove-a-user-from-the-project",children:[]},{value:"Example request",id:"example-request-10",children:[]},{value:"Responses",id:"responses-10",children:[]},{value:"Errors",id:"errors-9",children:[]}]},{value:"GET Project Metrics",id:"get-project-metrics",children:[{value:"Request",id:"request-5",children:[]},{value:"Where",id:"where-4",children:[]},{value:"Example request",id:"example-request-11",children:[]},{value:"Responses",id:"responses-11",children:[]},{value:"Errors",id:"errors-10",children:[]}]}],i={rightToc:p};function l(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ARGO Messaging Service supports project entities as a basis of organizing and isolating groups of users & resources"),Object(c.b)("h2",{id:"get-manage-projects---list-all-projects"},"[GET]"," Manage Projects - List all projects"),Object(c.b)("p",null,"This request lists all available projects in the service"),Object(c.b)("h3",{id:"request"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'GET "/v1/projects"\n')),Object(c.b)("h3",{id:"example-request"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses"},"Responses"),Object(c.b)("p",null,"If successful, the response contains a list of all available projects"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'\n{\n "projects": [\n    {\n       "name": "PROJECT_1",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "simple project"\n    },\n    {\n       "name": "PROJECT_2",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "simple project"\n    },\n    {\n       "name": "BRAND_NEW",\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z",\n       "created_by": "userA",\n       "description": "brand new project"\n    }\n ]\n}\n')),Object(c.b)("h3",{id:"errors"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h2",{id:"get-manage-projects---list-a-specific-project"},"[GET]"," Manage Projects - List a specific project"),Object(c.b)("p",null,"This request lists information about a specific project"),Object(c.b)("h3",{id:"request-1"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'GET "/v1/projects/{project_name}"\n')),Object(c.b)("h3",{id:"where"},"Where"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Project_name: Name of the project to get information on")),Object(c.b)("h3",{id:"example-request-1"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/BRAND_NEW?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-1"},"Responses"),Object(c.b)("p",null,"If successful, the response contains information about the specific project"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "name": "BRAND_NEW",\n   "created_on": "2009-11-10T23:00:00Z",\n   "modified_on": "2009-11-10T23:00:00Z",\n   "created_by": "userA",\n   "description": "brand new project"\n}\n')),Object(c.b)("h3",{id:"errors-1"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h2",{id:"post-manage-projects---create-new-project"},"[POST]"," Manage Projects - Create new project"),Object(c.b)("p",null,"This request creates a new project with the given project_name with a POST request"),Object(c.b)("h3",{id:"request-2"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'POST "/v1/projects/{project_name}"\n')),Object(c.b)("h3",{id:"where-1"},"Where"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Project_name: Name of the project to create")),Object(c.b)("h3",{id:"post-body"},"Post body:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "description" : "a simple description"\n}\n')),Object(c.b)("h3",{id:"example-request-2"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X POST -H "Content-Type: application/json"\n -d POSTDATA "https://{URL}/v1/projects/PROJECT_NEW?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-2"},"Responses"),Object(c.b)("p",null,"If successful, the response contains the newly created project"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "name": "PROJET_NEW"\n "created_on": "2009-11-10T23:00:00Z",\n "modified_on": "2009-11-10T23:00:00Z",\n "created_by": "userA",\n "description": "brand new project"\n}\n')),Object(c.b)("h3",{id:"errors-2"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h2",{id:"put-manage-projects---update-a-project"},"[PUT]"," Manage Projects - Update a project"),Object(c.b)("p",null,"This request updates information (such as name,description) on an existing project (PUT)"),Object(c.b)("h3",{id:"request-3"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'PUT "/v1/projects/{project_name}"\n')),Object(c.b)("h3",{id:"where-2"},"Where"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Project_name: Name of the project to create")),Object(c.b)("h3",{id:"put-body"},"PUT body:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name":"new project name",\n  "description" : "a simple description"\n}\n')),Object(c.b)("h3",{id:"example-request-3"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X PUT -H "Content-Type: application/json"\n -d POSTDATA "https://{URL}/v1/projects/PROJECT_NEW?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-3"},"Responses"),Object(c.b)("p",null,"If successful, the response contains the newly updated"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "name": "PROJET_NEW_UPDATED",\n "created_on": "2009-11-10T23:00:00Z",\n "modified_on": "2009-11-13T23:00:00Z",\n "created_by": "userA",\n "description": "description project updated"\n}\n')),Object(c.b)("h3",{id:"errors-3"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h2",{id:"delete-manage-projects---delete-project"},"[DELETE]"," Manage Projects - Delete Project"),Object(c.b)("p",null,"This request deletes a specific project"),Object(c.b)("h3",{id:"request-4"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'DELETE "/v1/projects/{project_name}"\n')),Object(c.b)("h3",{id:"where-3"},"Where"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Project_name: Name of the project to delete")),Object(c.b)("h3",{id:"example-request-4"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'curl -X DELETE -H "Content-Type: application/json"  \n "https://{URL}/v1/projects/BRAND_NEW?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-4"},"Responses"),Object(c.b)("p",null,"Success Response\nCode: ",Object(c.b)("inlineCode",{parentName:"p"},"200 OK"),", Empty response if successful."),Object(c.b)("h3",{id:"errors-4"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h3",{id:"get-list-all-users-that-are-members-of-a-specific-project"},"[GET]"," List all users that are members of a specific project"),Object(c.b)("h3",{id:"example-request-5"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/ARGO2/members?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-5"},"Responses"),Object(c.b)("p",null,"If successful, the response contains a list of all available users in the specific project"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "S3CR3T",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),Object(c.b)("h3",{id:"unpriviledge-mode-non-service_admin-user"},"Unpriviledge mode (non service_admin user)"),Object(c.b)("p",null,"When a user is project_admin instead of service_admin and lists a project's users the results\nreturned remove user information such as ",Object(c.b)("inlineCode",{parentName:"p"},"token"),", ",Object(c.b)("inlineCode",{parentName:"p"},"service_roles")," and ",Object(c.b)("inlineCode",{parentName:"p"},"created_by")," For example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),Object(c.b)("h3",{id:"get-show-a-specific-member-user-of-the-specific-project"},"[GET]"," Show a specific member user of the specific project"),Object(c.b)("h3",{id:"example-request-6"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X GET -H "Content-Type: application/json"\n  "https://{URL}/v1/projects/ARGO2/members/Test?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-6"},"Responses"),Object(c.b)("p",null,"If successful, the response contains information of the specific user Test"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n "users": [\n    {\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer",\n                "publisher"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "Test",\n       "token": "S3CR3T",\n       "email": "Test@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n    }\n ],\n "nextPageToken": "",\n "totalSize": 1\n}\n')),Object(c.b)("h3",{id:"errors-5"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h3",{id:"post-create-a-new-member-user-under-the-specific-project"},"[POST]"," Create a new member user under the specific project"),Object(c.b)("h3",{id:"example-request-7"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X POST -H "Content-Type: application/json"\n  -d POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser?key=S3CR3T"\n')),Object(c.b)("h3",{id:"post-body-1"},"Post body:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "projects": [\n            {\n                "project": "ARGO2",\n                "roles": ["consumer"]\n            }\n        ],\n    "email": "email@test.com"\n}\n')),Object(c.b)("h3",{id:"responses-7"},"Responses"),Object(c.b)("p",null,"If successful, the response contains information about the newly created user"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),Object(c.b)("h3",{id:"errors-6"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h3",{id:"put-updates-the-roles-for-a-member-user-under-the-specific-project"},"[PUT]"," Updates the roles for a member user under the specific project"),Object(c.b)("h3",{id:"example-request-8"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X PUT -H "Content-Type: application/json"\n  -d POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser?key=S3CR3T"\n')),Object(c.b)("h3",{id:"post-body-2"},"Post body:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "projects": [\n            {\n                "project": "ARGO2",\n                "roles": ["consumer"]\n            }\n        ]\n}\n')),Object(c.b)("h3",{id:"responses-8"},"Responses"),Object(c.b)("p",null,"If successful, the response contains information about the updated user"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [],\n             "subscriptions": []\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),Object(c.b)("h3",{id:"errors-7"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h3",{id:"post-addinvite-a-user-to-a-project"},"[POST]"," Add/Invite a user to a project"),Object(c.b)("h3",{id:"example-request-9"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X POST -H "Content-Type: application/json"\n  -d POSTDATA "https://{URL}/v1/projects/ARGO2/members/NewUser:add?key=S3CR3T"\n')),Object(c.b)("h3",{id:"post-body-3"},"Post body:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "roles": ["consumer"],\n   "topics": ["topic1"],\n   "subscriptions": ["sub1"]\n}\n')),Object(c.b)("h3",{id:"responses-9"},"Responses"),Object(c.b)("p",null,"If successful, the response contains information about the added user"),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n\n       "uuid": "99bfd746-4ebe-11e8-9c2d-fa7ae01bbebw",\n       "projects": [\n          {\n             "project": "ARGO2",\n             "roles": [\n                "consumer"\n             ],\n             "topics": [\n                "topic1"\n             ],\n             "subscriptions": [\n                "sub1"\n             ]\n          }\n       ],\n       "name": "NewUSer",\n       "token": "S3CR3T",\n       "email": "email@test.com",\n       "service_roles": [],\n       "created_on": "2009-11-10T23:00:00Z",\n       "modified_on": "2009-11-10T23:00:00Z"\n}\n')),Object(c.b)("h3",{id:"errors-8"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h3",{id:"post-remove-a-user-from-the-project"},"[POST]"," Remove a user from the project"),Object(c.b)("h3",{id:"example-request-10"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'curl -X POST -H "Content-Type: application/json"\n "https://{URL}/v1/projects/ARGO2/members/NewUser:remove?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-10"},"Responses"),Object(c.b)("p",null,"Empty response on success\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"{}\n")),Object(c.b)("h3",{id:"errors-9"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"),Object(c.b)("h2",{id:"get-project-metrics"},"[GET]"," Project Metrics"),Object(c.b)("p",null,"The following request returns related metrics for the specific project: eg. the number of topics"),Object(c.b)("h3",{id:"request-5"},"Request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'GET "/v1/projects/{project_name}:metrics"\n')),Object(c.b)("h3",{id:"where-4"},"Where"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Project_name: name of the project"),Object(c.b)("li",{parentName:"ul"},"topic_name: name of the topic")),Object(c.b)("h3",{id:"example-request-11"},"Example request"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'curl  -H "Content-Type: application/json"\n"https://{URL}/v1/projects/BRAND_NEW:metrics?key=S3CR3T"\n')),Object(c.b)("h3",{id:"responses-11"},"Responses"),Object(c.b)("p",null,"If successful it returns projects related metrics (number of topics, number of subscriptions)."),Object(c.b)("p",null,"Success Response\n",Object(c.b)("inlineCode",{parentName:"p"},"200 OK")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n   "metrics": [\n      {\n         "metric": "project.number_of_topics",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of topics belonging to the specific project"\n      },\n      {\n         "metric": "project.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 4\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions belonging to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserA",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserB",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 3\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserX",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 1\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.user.number_of_subscriptions",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project.user",\n         "resource_name": "ARGO.UserZ",\n         "timeseries": [\n            {\n               "timestamp": "2017-06-30T13:53:13Z",\n               "value": 2\n            }\n         ],\n         "description": "Counter that displays the number of subscriptions that a user has access to the specific project"\n      },\n      {\n         "metric": "project.number_of_daily_messages",\n         "metric_type": "counter",\n         "value_type": "int64",\n         "resource_type": "project",\n         "resource_name": "ARGO",\n         "timeseries": [\n            {\n               "timestamp": "2018-10-02",\n               "value": 30\n            },\n            {\n               "timestamp": "2018-10-01",\n               "value": 110\n            }\n         ],\n         "description": "A collection of counters that represents the total number of messages published each day to all of the project\'s topics"\n      }\n   ]\n}\n\n')),Object(c.b)("h3",{id:"errors-10"},"Errors"),Object(c.b)("p",null,"Please refer to section ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_errors"}),"Errors")," to see all possible Errors"))}l.isMDXComponent=!0},92:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),s=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),l=function(e){var r=s.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},b=function(e){var r=l(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},j=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(t),j=n,d=b["".concat(o,".").concat(j)]||b[j]||u[j]||c;return t?s.a.createElement(d,a(a({ref:r},i),{},{components:t})):s.a.createElement(d,a({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=j;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var i=2;i<c;i++)o[i]=t[i];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"}}]);