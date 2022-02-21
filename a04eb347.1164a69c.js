(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),s=a(6),o=(a(0),a(92)),r={id:"publisher",title:"Publisher Guide"},i={unversionedId:"publisher",id:"publisher",isDocsHomePage:!1,title:"Publisher Guide",description:"Publishers can send messages to named-channels called Topics.",source:"@site/docs/publisher.md",permalink:"/argo-messaging/docs/publisher",sidebar:"someSidebar",previous:{title:"User Registration",permalink:"/argo-messaging/docs/api_registrations"},next:{title:"Subscriber Guide",permalink:"/argo-messaging/docs/subscriber_guide"}},c=[{value:"Before you start",id:"before-you-start",children:[]},{value:"Start publishing",id:"start-publishing",children:[]},{value:"Schema Support",id:"schema-support",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Publishers can send messages to named-channels called Topics. "),Object(o.b)("h2",{id:"before-you-start"},"Before you start"),Object(o.b)("p",null,"In order to get an account on the ARGO Messaging Service, submit a request through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/forms/d/e/1FAIpQLScfMCYPkUqUa5lT046RK1yCR4yn6M96WbgD5DMlNJ-zRFHSRA/viewform"}),"ARGO Messaging Service account form")),Object(o.b)("p",null,"Upon account approval, you will receive information via e-mail about your new project along with an API token."),Object(o.b)("h2",{id:"start-publishing"},"Start publishing"),Object(o.b)("p",null,"When everything is set up you can start by following the general flow for a publisher:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Create a topic"),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_topics#put-manage-topics-create-new-topic"}),"Topics: Create a topic")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Create a subscription"),Object(o.b)("p",null,"A Topic without at least one Subscription act like black holes. Publishers can send messages to those topics, but the messages will not be retrievable. In order to be able to publish and consume messages, at least one Subscription must created to the Topic that you are publishing messages to. By default, a Subscription is created in pull mode, meaning that consumers can query the Messaging API and retrieve the messages that are published to the Topic that the Subscription is configured for. More information about how create a Subscription, visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_subscriptions#put-manage-subscriptions-create-subscriptions"}),"Subscriptions: Create a subscription")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Start publishing messages"),Object(o.b)("p",null,"The ARGO Messaging Service accepts JSON over HTTP. In order to publish messages you have to represent them using the following schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "properties": {\n    "messages": {\n      "type": "array",\n      "items": {\n        "type": "object",\n        "anyOf": [{\n          "properties": {\n            "data": {\n              "type": "string",\n              "contentEncoding": "base64",\n              "minLength": 1\n            },\n          },\n          "required": ["data"]\n        },{\n          "properties": {\n            "attributes": {\n              "type": "object",\n              "minProperties": 1,\n              "properties": {}\n            }\n          },\n          "required": ["attributes"]\n        }]\n      }\n    }\n  },\n  "required": [\n    "messages"\n  ]\n}\n')),Object(o.b)("p",null,"The JSON body send to the ARGO Messaging Service may contain one or more messages. Each message can have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"attributes: optional key value pair of metadata you desire"),Object(o.b)("li",{parentName:"ul"},"data: the data of the message.")),Object(o.b)("p",null,"The data must be base64-encoded, and can not exceed 10MB after encoding. Note that the message payload must not be empty; it must contain either a non-empty data field, or at least one attribute."),Object(o.b)("p",null,"Below you can find an example, in which a user publishes two messages in one call:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "messages": [\n  {\n    "attributes":\n    {\n      "station":"NW32ZC",\n      "status":"PROD"\n    },\n    "data":"U28geW91IHdlbnQgYWhlYWQgYW5kIGRlY29kZWQgdGhpcywgeW91IGNvdWxkbid0IHJlc2lzdCBlaCA/"\n  },\n  {\n    "attributes":\n    {\n      "station":"GHJ32",\n      "status":"TEST"\n    },\n    "data":"U28geW91IHdlbnQgYWhlYWQgYW5kIGRlY29kZWQgdGhpcywgeW91IGNvdWxkbid0IHJlc2lzdCBlaCA/"\n  }\n  ]\n}\n')),Object(o.b)("p",null,"You can publish and consume any kind of data through the ARGO Messaging Service (as long as the base64 encoded payload is not larger than the maximum acceptable size)."),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/argo-messaging/docs/api_topics#post-publish-messages-to-a-topic"}),"Topics: Publish message/s to a topic")),Object(o.b)("h2",{id:"schema-support"},"Schema Support"),Object(o.b)("p",null,"The AMS supports \u201cSchema Validation per topic\u201d. "),Object(o.b)("p",null,"When a user want to support a predefined format for messages exchanged then a topic should be created with a schema defined for it.\nA schema is a format that messages from a topic must follow. It is actually a contract between publisher and subscriber. The Messaging Service allows the user to define a schema for each topic and validate messages as they are published. It can protect topics from garbage, incomplete messages especially when a topic has multiple remote publishers to ensure data integrity on the client side."),Object(o.b)("p",null,"The Schema Support is on demand mechanism that enables a) the definition of the expected payload schema, b) the definition of the expected set of attributes and values and c) the validation for each message if the requirements are met and immediately notify client"),Object(o.b)("p",null,"The steps that you should follow for a schema support "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1:")," Create a new schema in your project"),Object(o.b)("p",null,"The Supported Schema Types are JSON and AVRO"),Object(o.b)("p",null,"For more details visit section  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoeu.github.io/argo-messaging/docs/api_schemas#post-manage-schemas---create-new-schema"}),"Create new schema")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2:")," Create a topic with this schema attached"),Object(o.b)("p",null,"If you need to link a schema with your topic you need to provide its name, to the api call during the creation of the topic.."),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoeu.github.io/argo-messaging/docs/api_topics#put-manage-topics---create-new-topic"}),"Create new topic")," "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3:")," Assign this schema to your topic "),Object(o.b)("p",null,"If you need to link a schema with your topic you need to provide its name, to the api call"),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoeu.github.io/argo-messaging/docs/api_topics#put-manage-topics---create-new-topic"}),"Update the topic")," "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4:")," Validate the message "),Object(o.b)("p",null,"This  is used whenever we want to test a message against a schema. The process to check that your schema and messages are working as expected is to create a new topic that needs to be associated with the schema, then create the message in bas64 encoding and publish it to the topic. Instead of creating all this pipeline in order to check your schema and messages we can explicitly do it on this API call."),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoeu.github.io/argo-messaging/docs/api_schemas#post-manage-schemas---validate-message"}),"Validate the message"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5:")," Publish messages to your topic "),Object(o.b)("p",null,"You may now start publishing messages to your topic."),Object(o.b)("p",null,"For more details visit section ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://argoeu.github.io/argo-messaging/docs/api_topics#post-publish-messages-to-a-topic"}),"publish-messages-to-a-topic")))}l.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=s.a.createContext({}),l=function(e){var t=s.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=l(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),h=n,m=b["".concat(r,".").concat(h)]||b[h]||u[h]||o;return a?s.a.createElement(m,i(i({ref:t},p),{},{components:a})):s.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);