"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6637],{4993:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=i(4848),r=i(8453);const s={id:"api_intro",title:"Service introduction and configuration",sidebar_position:1},o=void 0,a={id:"api_basic/api_intro",title:"Service introduction and configuration",description:"Introduction",source:"@site/docs/api_basic/api_intro.md",sourceDirName:"api_basic",slug:"/api_basic/api_intro",permalink:"/argo-messaging/docs/api_basic/api_intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"api_intro",title:"Service introduction and configuration",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Argo Messaging API",permalink:"/argo-messaging/docs/category/argo-messaging-api"},next:{title:"API Errors",permalink:"/argo-messaging/docs/api_basic/api_errors"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration file: config.json",id:"configuration-file-configjson",level:2},{value:"Explanation of config parameters:",id:"explanation-of-config-parameters",level:3},{value:"Command line parameters",id:"command-line-parameters",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"The ARGO Messaging Service API implements the Google PubSub specification and thus supports HTTP RPC-style methods in the form of:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"https://messaging.argo.grnet.gr/api/projects/METHOD"})}),"\n",(0,n.jsxs)(t.p,{children:["All methods must be called using HTTPS. Arguments can be passed as GET or POST params, or a mix. The response contains a ",(0,n.jsx)(t.code,{children:"200 OK"})," for a successful request and a JSON object in case of an error. For failure results, the error property will contain a short machine-readable error code. In the case of problematic calls,  during handling user\u2019s request the API responds using a predefined schema (described in chapter Errors), that contains a short machine-readable warning code, an error code and an error description  (or list of them, in the case of multiple errors)."]}),"\n",(0,n.jsxs)(t.p,{children:["Each user is authenticated by adding the header parameter ",(0,n.jsx)(t.code,{children:"x-api-key"})," in each API request"]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-file-configjson",children:"Configuration file: config.json"}),"\n",(0,n.jsx)(t.p,{children:"The first step for using the messaging API is to edit the main configuration file."}),"\n",(0,n.jsx)(t.p,{children:"The ARGO Messaging Service main configuration file is config.json. An example configuration is listed below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "bind_ip":"",\n  "port":8080,\n  "zookeeper_hosts":["localhost"],\n  "kafka_znode":"",\n  "store_host":"localhost",\n  "store_db":"argo_msg",\n  "certificate":"/etc/pki/tls/certs/localhost.crt",\n  "certificate_key":"/etc/pki/tls/private/localhost.key",\n  "per_resource_auth":true,\n  "service_token":"S0M3T0K3N",\n  "log_level":"INFO",\n  "log_facilities": ["syslog", "console"]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"explanation-of-config-parameters",children:"Explanation of config parameters:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bind_ip"}),(0,n.jsx)(t.td,{children:"the ip address to listen to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"port"}),(0,n.jsx)(t.td,{children:"The port where the API will listen to"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"zookeeper_hosts"}),(0,n.jsx)(t.td,{children:"List of zookeeper instances that are used to sync kafka"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"kafka_znode"}),(0,n.jsx)(t.td,{children:'The znode under which Kafka writes its data on Zookeeper. Default is "" meaning the root node'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"store_host"}),(0,n.jsxs)(t.td,{children:["Address",":port"," of the datastore server"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"store_db"}),(0,n.jsx)(t.td,{children:"Database name used on the datastore server"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"certificate"}),(0,n.jsx)(t.td,{children:"path to the node's TLS certificate file"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"certificate_key"}),(0,n.jsx)(t.td,{children:"path to the certificate's private key"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"per_resource_auth"}),(0,n.jsx)(t.td,{children:"enable authorization per resource (topic/subscription)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"service_token"}),(0,n.jsx)(t.td,{children:"(optional) If set, enables full service-wide access to the api to initialize projects,users and resources"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_level"}),(0,n.jsx)(t.td,{children:'set the desired log level (defaults to "INFO")'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_facilities"}),(0,n.jsx)(t.td,{children:"logging output, if left empty, it defaults to console)"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Location of config.json"}),": API will look first for config.json locally in the folder where the executable runs and then in the ",(0,n.jsx)(t.code,{children:" /etc/argo-messaging/"}),"  location."]}),"\n",(0,n.jsx)(t.h2,{id:"command-line-parameters",children:"Command line parameters"}),"\n",(0,n.jsx)(t.p,{children:"Apart from configuration file, argo-messaging service accepts configuration parameters in the command line. The list of the available command line parameters is displayed\nif the user issues"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"./argo-messaging-service --help\n"})}),"\n",(0,n.jsx)(t.p,{children:"The available command line parameters are listed as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'--bind-ip string           ip address to listen to (default "localhost")\n--certificate string       certificate file *.crt (default "/etc/pki/tls/certs/localhost.crt")\n--certificate-key string   certificate key file *.key (default "/etc/pki/tls/private/localhost.key")\n--config-dir string        directory path to an alternative json config file\n--kafka-znode string       kafka zookeeper node name\n--log-level string         set the desired log level\n--per-resource-auth        enable per resource authentication (default true)\n--port int                 port number to listen to (default 8080)\n--service-key string       service token definition for immediate full api access\n--store-db string          datastore (mongodb) database name (default "argo_msg")\n--store-host string        datastore (mongodb) host (default "localhost")\n--zookeeper-hosts value    list of zookeeper hosts to connect to (default [localhost])\n'})}),"\n",(0,n.jsxs)(t.p,{children:["User can optionally specify an alternative configuration file directory with the use of the ",(0,n.jsx)(t.code,{children:"--config-dir"})," parameter\nFor example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"./argo-messaging-service --config-dir=/root/alternative/config/\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"/root/alternative/config/config.json"})," must exist"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(6540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);