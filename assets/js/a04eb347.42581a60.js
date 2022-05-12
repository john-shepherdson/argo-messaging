"use strict";(self.webpackChunkargo_messaging=self.webpackChunkargo_messaging||[]).push([[941],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=s,g=h["".concat(p,".").concat(m)]||h[m]||u[m]||r;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7409:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),o=["components"],i={id:"publisher",title:"Publisher Guide"},p=void 0,c={unversionedId:"publisher",id:"publisher",title:"Publisher Guide",description:"Publishers can send messages to named-channels called Topics.",source:"@site/docs/publisher.md",sourceDirName:".",slug:"/publisher",permalink:"/argo-messaging/docs/publisher",draft:!1,tags:[],version:"current",frontMatter:{id:"publisher",title:"Publisher Guide"},sidebar:"someSidebar",previous:{title:"User Registration",permalink:"/argo-messaging/docs/api_registrations"},next:{title:"Subscriber Guide",permalink:"/argo-messaging/docs/subscriber_guide"}},l={},u=[{value:"Before you start",id:"before-you-start",level:2},{value:"Start publishing",id:"start-publishing",level:2},{value:"Schema Support",id:"schema-support",level:2}],h={toc:u};function m(e){var t=e.components,a=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Publishers can send messages to named-channels called Topics. "),(0,r.kt)("h2",{id:"before-you-start"},"Before you start"),(0,r.kt)("p",null,"In order to get an account on the ARGO Messaging Service, submit a request through the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLScfMCYPkUqUa5lT046RK1yCR4yn6M96WbgD5DMlNJ-zRFHSRA/viewform"},"ARGO Messaging Service account form")),(0,r.kt)("p",null,"Upon account approval, you will receive information via e-mail about your new project along with an API token."),(0,r.kt)("h2",{id:"start-publishing"},"Start publishing"),(0,r.kt)("p",null,"When everything is set up you can start by following the general flow for a publisher:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Create a topic"),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_topics#put-manage-topics-create-new-topic"},"Topics: Create a topic")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create a subscription"),(0,r.kt)("p",null,"A Topic without at least one Subscription act like black holes. Publishers can send messages to those topics, but the messages will not be retrievable. In order to be able to publish and consume messages, at least one Subscription must created to the Topic that you are publishing messages to. By default, a Subscription is created in pull mode, meaning that consumers can query the Messaging API and retrieve the messages that are published to the Topic that the Subscription is configured for. More information about how create a Subscription, visit section ",(0,r.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_subscriptions#put-manage-subscriptions-create-subscriptions"},"Subscriptions: Create a subscription")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Start publishing messages"),(0,r.kt)("p",null,"The ARGO Messaging Service accepts JSON over HTTP. In order to publish messages you have to represent them using the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "properties": {\n    "messages": {\n      "type": "array",\n      "items": {\n        "type": "object",\n        "anyOf": [{\n          "properties": {\n            "data": {\n              "type": "string",\n              "contentEncoding": "base64",\n              "minLength": 1\n            },\n          },\n          "required": ["data"]\n        },{\n          "properties": {\n            "attributes": {\n              "type": "object",\n              "minProperties": 1,\n              "properties": {}\n            }\n          },\n          "required": ["attributes"]\n        }]\n      }\n    }\n  },\n  "required": [\n    "messages"\n  ]\n}\n')),(0,r.kt)("p",null,"The JSON body send to the ARGO Messaging Service may contain one or more messages. Each message can have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"attributes: optional key value pair of metadata you desire"),(0,r.kt)("li",{parentName:"ul"},"data: the data of the message.")),(0,r.kt)("p",null,"The data must be base64-encoded, and can not exceed 10MB after encoding. Note that the message payload must not be empty; it must contain either a non-empty data field, or at least one attribute."),(0,r.kt)("p",null,"Below you can find an example, in which a user publishes two messages in one call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n  {\n    "attributes":\n    {\n      "station":"NW32ZC",\n      "status":"PROD"\n    },\n    "data":"U28geW91IHdlbnQgYWhlYWQgYW5kIGRlY29kZWQgdGhpcywgeW91IGNvdWxkbid0IHJlc2lzdCBlaCA/"\n  },\n  {\n    "attributes":\n    {\n      "station":"GHJ32",\n      "status":"TEST"\n    },\n    "data":"U28geW91IHdlbnQgYWhlYWQgYW5kIGRlY29kZWQgdGhpcywgeW91IGNvdWxkbid0IHJlc2lzdCBlaCA/"\n  }\n  ]\n}\n')),(0,r.kt)("p",null,"You can publish and consume any kind of data through the ARGO Messaging Service (as long as the base64 encoded payload is not larger than the maximum acceptable size)."),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"/argo-messaging/docs/api_topics#post-publish-messages-to-a-topic"},"Topics: Publish message/s to a topic")),(0,r.kt)("h2",{id:"schema-support"},"Schema Support"),(0,r.kt)("p",null,"The AMS supports \u201cSchema Validation per topic\u201d. "),(0,r.kt)("p",null,"When a user want to support a predefined format for messages exchanged then a topic should be created with a schema defined for it.\nA schema is a format that messages from a topic must follow. It is actually a contract between publisher and subscriber. The Messaging Service allows the user to define a schema for each topic and validate messages as they are published. It can protect topics from garbage, incomplete messages especially when a topic has multiple remote publishers to ensure data integrity on the client side."),(0,r.kt)("p",null,"The Schema Support is on demand mechanism that enables a) the definition of the expected payload schema, b) the definition of the expected set of attributes and values and c) the validation for each message if the requirements are met and immediately notify client"),(0,r.kt)("p",null,"The steps that you should follow for a schema support "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Create a new schema in your project"),(0,r.kt)("p",null,"The Supported Schema Types are JSON and AVRO"),(0,r.kt)("p",null,"For more details visit section  ",(0,r.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-messaging/docs/api_schemas#post-manage-schemas---create-new-schema"},"Create new schema")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create a topic with this schema attached"),(0,r.kt)("p",null,"If you need to link a schema with your topic you need to provide its name, to the api call during the creation of the topic.."),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-messaging/docs/api_topics#put-manage-topics---create-new-topic"},"Create new topic")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Assign this schema to your topic "),(0,r.kt)("p",null,"If you need to link a schema with your topic you need to provide its name, to the api call"),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-messaging/docs/api_topics#put-manage-topics---create-new-topic"},"Update the topic")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Validate the message "),(0,r.kt)("p",null,"This  is used whenever we want to test a message against a schema. The process to check that your schema and messages are working as expected is to create a new topic that needs to be associated with the schema, then create the message in bas64 encoding and publish it to the topic. Instead of creating all this pipeline in order to check your schema and messages we can explicitly do it on this API call."),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-messaging/docs/api_schemas#post-manage-schemas---validate-message"},"Validate the message"),"  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Publish messages to your topic "),(0,r.kt)("p",null,"You may now start publishing messages to your topic."),(0,r.kt)("p",null,"For more details visit section ",(0,r.kt)("a",{parentName:"p",href:"https://argoeu.github.io/argo-messaging/docs/api_topics#post-publish-messages-to-a-topic"},"publish-messages-to-a-topic")))}m.isMDXComponent=!0}}]);