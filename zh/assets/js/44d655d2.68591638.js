(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[530],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55232:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var a=t(22122),r=t(19756),p=(t(67294),t(3905)),o={title:"\u8c03\u8bd5\uff0c \u6d4b\u8bd5 \u4ee5\u53ca Dry-run"},i={unversionedId:"platform-engineers/debug-test-cue",id:"version-v1.0/platform-engineers/debug-test-cue",isDocsHomePage:!1,title:"\u8c03\u8bd5\uff0c \u6d4b\u8bd5 \u4ee5\u53ca Dry-run",description:"\u57fa\u4e8e\u5177\u6709\u5f3a\u5927\u7075\u6d3b\u62bd\u8c61\u80fd\u529b\u7684 CUE \u5b9a\u4e49\u7684\u6a21\u7248\u6765\u8bf4\uff0c\u8c03\u8bd5\u3001\u6d4b\u8bd5\u4ee5\u53ca dry-run \u975e\u5e38\u91cd\u8981\u3002\u672c\u6559\u7a0b\u5c06\u9010\u6b65\u4ecb\u7ecd\u5982\u4f55\u8fdb\u884c\u8c03\u8bd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/debug-test-cue.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/debug-test-cue",permalink:"/zh/docs/v1.0/platform-engineers/debug-test-cue",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/debug-test-cue.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"\u8c03\u8bd5\uff0c \u6d4b\u8bd5 \u4ee5\u53ca Dry-run"},sidebar:"version-v1.0/docs",previous:{title:"\u9ad8\u7ea7\u529f\u80fd",permalink:"/zh/docs/v1.0/platform-engineers/cue/advanced"},next:{title:"KEDA \u4f5c\u4e3a\u81ea\u52a8\u4f38\u7f29 Trait",permalink:"/zh/docs/v1.0/platform-engineers/keda"}},c=[{value:"\u524d\u63d0",id:"\u524d\u63d0",children:[]},{value:"\u5b9a\u4e49 Definition \u548c Template",id:"\u5b9a\u4e49-definition-\u548c-template",children:[]},{value:"\u8c03\u8bd5 CUE \u6a21\u7248",id:"\u8c03\u8bd5-cue-\u6a21\u7248",children:[{value:"\u4f7f\u7528 <code>cue vet</code> \u8fdb\u884c\u6821\u9a8c",id:"\u4f7f\u7528-cue-vet-\u8fdb\u884c\u6821\u9a8c",children:[]},{value:"\u6d4b\u8bd5\u4f7f\u7528 <code>Kube</code> \u5305\u7684 CUE \u6a21\u7248",id:"\u6d4b\u8bd5\u4f7f\u7528-kube-\u5305\u7684-cue-\u6a21\u7248",children:[]}]},{value:"Dry-Run <code>Application</code>",id:"dry-run-application",children:[]}],l={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u57fa\u4e8e\u5177\u6709\u5f3a\u5927\u7075\u6d3b\u62bd\u8c61\u80fd\u529b\u7684 CUE \u5b9a\u4e49\u7684\u6a21\u7248\u6765\u8bf4\uff0c\u8c03\u8bd5\u3001\u6d4b\u8bd5\u4ee5\u53ca dry-run \u975e\u5e38\u91cd\u8981\u3002\u672c\u6559\u7a0b\u5c06\u9010\u6b65\u4ecb\u7ecd\u5982\u4f55\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,p.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,p.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u73af\u5883\u5df2\u7ecf\u5b89\u88c5\u4ee5\u4e0b CLI \uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://cuelang.org/docs/install/"},(0,p.kt)("inlineCode",{parentName:"a"},"cue")," >=v0.2.2"))),(0,p.kt)("h2",{id:"\u5b9a\u4e49-definition-\u548c-template"},"\u5b9a\u4e49 Definition \u548c Template"),(0,p.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"Definition Object")," \u5b9a\u4e49\u62c6\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1aCRD \u90e8\u5206\u548c CUE \u6a21\u7248\u90e8\u5206\u3002\u524d\u9762\u7684\u62c6\u5206\u4f1a\u5e2e\u5fd9\u6211\u4eec\u5bf9 CUE \u6a21\u7248\u8fdb\u884c\u8c03\u8bd5\u3001\u6d4b\u8bd5\u4ee5\u53ca dry-run \u64cd\u4f5c\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u5c06 CRD \u90e8\u5206\u4fdd\u5b58\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"def.yaml")," \u6587\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: microservice\n  annotations:\n    definition.oam.dev/description: "Describes a microservice combo Deployment with Service."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n')),(0,p.kt)("p",null,"\u540c\u65f6\u5c06 CUE \u6a21\u7248\u90e8\u5206\u4fdd\u5b58\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"def.cue")," \u6587\u4ef6\uff0c\u968f\u540e\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CUE \u547d\u4ee4\u884c\uff08",(0,p.kt)("inlineCode",{parentName:"p"},"cue fmt")," / ",(0,p.kt)("inlineCode",{parentName:"p"},"cue vet"),"\uff09\u683c\u5f0f\u5316\u548c\u6821\u9a8c CUE \u6587\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'output: {\n    // Deployment\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    metadata: {\n        name:      context.name\n        namespace: "default"\n    }\n    spec: {\n        selector: matchLabels: {\n            "app": context.name\n        }\n        template: {\n            metadata: {\n                labels: {\n                    "app":     context.name\n                    "version": parameter.version\n                }\n            }\n            spec: {\n                serviceAccountName:            "default"\n                terminationGracePeriodSeconds: parameter.podShutdownGraceSeconds\n                containers: [{\n                    name:  context.name\n                    image: parameter.image\n                    ports: [{\n                        if parameter.containerPort != _|_ {\n                            containerPort: parameter.containerPort\n                        }\n                        if parameter.containerPort == _|_ {\n                            containerPort: parameter.servicePort\n                        }\n                    }]\n                    if parameter.env != _|_ {\n                        env: [\n                            for k, v in parameter.env {\n                                name:  k\n                                value: v\n                            },\n                        ]\n                    }\n                    resources: {\n                        requests: {\n                            if parameter.cpu != _|_ {\n                                cpu: parameter.cpu\n                            }\n                            if parameter.memory != _|_ {\n                                memory: parameter.memory\n                            }\n                        }\n                    }\n                }]\n            }\n        }\n    }\n}\n// Service\noutputs: service: {\n    apiVersion: "v1"\n    kind:       "Service"\n    metadata: {\n        name: context.name\n        labels: {\n            "app": context.name\n        }\n    }\n    spec: {\n        type: "ClusterIP"\n        selector: {\n            "app": context.name\n        }\n        ports: [{\n            port: parameter.servicePort\n            if parameter.containerPort != _|_ {\n                targetPort: parameter.containerPort\n            }\n            if parameter.containerPort == _|_ {\n                targetPort: parameter.servicePort\n            }\n        }]\n    }\n}\nparameter: {\n    version:        *"v1" | string\n    image:          string\n    servicePort:    int\n    containerPort?: int\n    // +usage=Optional duration in seconds the pod needs to terminate gracefully\n    podShutdownGraceSeconds: *30 | int\n    env: [string]: string\n    cpu?:    string\n    memory?: string\n}\n')),(0,p.kt)("p",null,"\u4ee5\u4e0a\u64cd\u4f5c\u5b8c\u6210\u4e4b\u540e\uff0c\u4f7f\u7528\u8be5\u811a\u672c ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/hack/vela-templates/mergedef.sh"},(0,p.kt)("inlineCode",{parentName:"a"},"hack/vela-templates/mergedef.sh"))," \u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"def.yaml")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"def.cue")," \u5408\u5e76\u5230\u5b8c\u6574\u7684 Definition \u5bf9\u8c61\u4e2d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./hack/vela-templates/mergedef.sh def.yaml def.cue > microservice-def.yaml\n")),(0,p.kt)("h2",{id:"\u8c03\u8bd5-cue-\u6a21\u7248"},"\u8c03\u8bd5 CUE \u6a21\u7248"),(0,p.kt)("h3",{id:"\u4f7f\u7528-cue-vet-\u8fdb\u884c\u6821\u9a8c"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h3"},"cue vet")," \u8fdb\u884c\u6821\u9a8c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ cue vet def.cue\noutput.metadata.name: reference "context" not found:\n    ./def.cue:6:14\noutput.spec.selector.matchLabels.app: reference "context" not found:\n    ./def.cue:11:11\noutput.spec.template.metadata.labels.app: reference "context" not found:\n    ./def.cue:16:17\noutput.spec.template.spec.containers.name: reference "context" not found:\n    ./def.cue:24:13\noutputs.service.metadata.name: reference "context" not found:\n    ./def.cue:62:9\noutputs.service.metadata.labels.app: reference "context" not found:\n    ./def.cue:64:11\noutputs.service.spec.selector.app: reference "context" not found:\n    ./def.cue:70:11\n')),(0,p.kt)("p",null,"\u5e38\u89c1\u9519\u8bef ",(0,p.kt)("inlineCode",{parentName:"p"},'reference "context" not found')," \u4e3b\u8981\u53d1\u751f\u5728 ",(0,p.kt)("a",{parentName:"p",href:"./cue/component#cue-context"},(0,p.kt)("inlineCode",{parentName:"a"},"context")),"\uff0c\u8be5\u90e8\u5206\u662f\u4ec5\u5728 KubeVela \u63a7\u5236\u5668\u4e2d\u5b58\u5728\u7684\u8fd0\u884c\u65f6\u4fe1\u606f\u3002\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"def.cue")," \u4e2d\u6a21\u62df ",(0,p.kt)("inlineCode",{parentName:"p"},"context")," \uff0c\u4ece\u800c\u5bf9 CUE \u6a21\u7248\u8fdb\u884c end-to-end \u7684\u6821\u9a8c\u64cd\u4f5c\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5b8c\u6210\u6821\u9a8c\u6d4b\u8bd5\u4e4b\u540e\u9700\u8981\u6e05\u9664\u6240\u6709\u6a21\u62df\u6570\u636e\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-CUE"},"... // existing template data\ncontext: {\n    name: string\n}\n")),(0,p.kt)("p",null,"\u968f\u540e\u6267\u884c\u547d\u4ee4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue vet def.cue\nsome instances are incomplete; use the -c flag to show errors or suppress this message\n")),(0,p.kt)("p",null,"\u8be5\u9519\u8bef ",(0,p.kt)("inlineCode",{parentName:"p"},'reference "context" not found')," \u5df2\u7ecf\u88ab\u89e3\u51b3\uff0c\u4f46\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"cue vet")," \u4ec5\u5bf9\u6570\u636e\u7c7b\u578b\u8fdb\u884c\u6821\u9a8c\uff0c\u8fd9\u8fd8\u4e0d\u80fd\u8bc1\u660e\u6a21\u7248\u903b\u8f91\u662f\u51c6\u786e\u5bf9\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue vet -c")," \u5b8c\u6210\u6700\u7ec8\u6821\u9a8c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue vet def.cue -c\ncontext.name: incomplete value string\noutput.metadata.name: incomplete value string\noutput.spec.selector.matchLabels.app: incomplete value string\noutput.spec.template.metadata.labels.app: incomplete value string\noutput.spec.template.spec.containers.0.image: incomplete value string\noutput.spec.template.spec.containers.0.name: incomplete value string\noutput.spec.template.spec.containers.0.ports.0.containerPort: incomplete value int\noutputs.service.metadata.labels.app: incomplete value string\noutputs.service.metadata.name: incomplete value string\noutputs.service.spec.ports.0.port: incomplete value int\noutputs.service.spec.ports.0.targetPort: incomplete value int\noutputs.service.spec.selector.app: incomplete value string\nparameter.image: incomplete value string\nparameter.servicePort: incomplete value int\n")),(0,p.kt)("p",null,"\u6b64\u65f6\uff0c\u547d\u4ee4\u884c\u629b\u51fa\u8fd0\u884c\u65f6\u6570\u636e\u4e0d\u5b8c\u6574\u7684\u5f02\u5e38\uff08\u4e3b\u8981\u56e0\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"context")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"parameter")," \u5b57\u6bb5\u5b57\u6bb5\u4e2d\u8fd8\u6709\u8bbe\u7f6e\u503c\uff09\uff0c\u73b0\u5728\u6211\u4eec\u586b\u5145\u66f4\u591a\u7684\u6a21\u62df\u6570\u636e\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"def.cue")," \u6587\u4ef6\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-CUE"},'context: {\n    name: "test-app"\n}\nparameter: {\n    version:       "v2"\n    image:         "image-address"\n    servicePort:   80\n    containerPort: 8000\n    env: {"PORT": "8000"}\n    cpu:    "500m"\n    memory: "128Mi"\n}\n')),(0,p.kt)("p",null,"\u6b64\u65f6\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u884c\u6ca1\u6709\u629b\u51fa\u5f02\u5e38\uff0c\u8bf4\u660e\u903b\u8f91\u6821\u9a8c\u901a\u8fc7\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"cue vet def.cue -c\n")),(0,p.kt)("h4",{id:"\u4f7f\u7528-cue-export-\u6821\u9a8c\u5df2\u6e32\u67d3\u7684\u8d44\u6e90"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h4"},"cue export")," \u6821\u9a8c\u5df2\u6e32\u67d3\u7684\u8d44\u6e90"),(0,p.kt)("p",null,"\u8be5\u547d\u4ee4\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"cue export")," \u5c06\u4f1a\u6e32\u67d3\u7ed3\u679c\u4ee5 YAML \u683c\u5f0f\u5bfc\u51fa\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export -e output def.cue --out yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: test-app\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: test-app\n  template:\n    metadata:\n      labels:\n        app: test-app\n        version: v2\n    spec:\n      serviceAccountName: default\n      terminationGracePeriodSeconds: 30\n      containers:\n        - name: test-app\n          image: image-address\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export -e outputs.service def.cue --out yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: test-app\n  labels:\n    app: test-app\nspec:\n  selector:\n    app: test-app\n  type: ClusterIP\n")),(0,p.kt)("h3",{id:"\u6d4b\u8bd5\u4f7f\u7528-kube-\u5305\u7684-cue-\u6a21\u7248"},"\u6d4b\u8bd5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h3"},"Kube")," \u5305\u7684 CUE \u6a21\u7248"),(0,p.kt)("p",null,"KubeVela \u5c06\u6240\u6709\u5185\u7f6e Kubernetes API \u8d44\u6e90\u4ee5\u53ca CRD \u81ea\u52a8\u751f\u6210\u4e3a\u5185\u90e8 CUE \u5305\u3002\n\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u5bfc\u5165CUE\u6a21\u677f\u4e2d\uff0c\u4ee5\u7b80\u5316\u6a21\u677f\u4ee5\u53ca\u5e2e\u52a9\u4f60\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,p.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u65b9\u5f0f\u6765\u5bfc\u5165\u5185\u90e8 ",(0,p.kt)("inlineCode",{parentName:"p"},"kube")," \u5305\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ee5\u56fa\u5b9a\u65b9\u5f0f\u5bfc\u5165\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"kube/<apiVersion>")," \uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Kind")," \u5bf9\u5e94\u7684\u7ed3\u6784\u4f53\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n apps "kube/apps/v1"\n corev1 "kube/v1"\n)\n// output is validated by Deployment.\noutput: apps.#Deployment\noutputs: service: corev1.#Service\n')),(0,p.kt)("p",{parentName:"li"},"\u8fd9\u662f\u6bd4\u8f83\u597d\u8bb0\u6613\u7528\u7684\u65b9\u5f0f\uff0c\u4e3b\u8981\u56e0\u4e3a\u5b83\u4e0e Kubernetes Object \u7684\u7528\u6cd5\u4e00\u81f4\uff0c\u53ea\u9700\u8981\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"apiVersion")," \u4e4b\u524d\u6dfb\u52a0\u524d\u7f00 ",(0,p.kt)("inlineCode",{parentName:"p"},"kube/"),"\u3002\n\u5f53\u7136\uff0c\u8fd9\u4e2a\u65b9\u5f0f\u4ec5\u5728 KubeVela \u4e2d\u88ab\u652f\u6301\uff0c\u6240\u4ee5\u4f60\u53ea\u80fd\u901a\u8fc7\u8be5\u65b9\u6cd5 ",(0,p.kt)("a",{parentName:"p",href:"#dry-run-the-application"},(0,p.kt)("inlineCode",{parentName:"a"},"vela system dry-run"))," \u8fdb\u884c\u8c03\u8bd5\u548c\u6d4b\u8bd5\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4ee5\u7b2c\u4e09\u65b9\u5305\u7684\u65b9\u5f0f\u5bfc\u5165\u3002\n\u4f60\u53ef\u4ee5\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"vela system cue-packages")," \u83b7\u53d6\u6240\u6709\u5185\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"kube")," \u5305\uff0c\u901a\u8fc7\u8fd9\u4e2a\u65b9\u5f0f\u53ef\u4ee5\u4e86\u89e3\u5f53\u524d\u652f\u6301\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"third-party packages"),"\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela system cue-packages\nDEFINITION-NAME                 IMPORT-PATH                              USAGE\n#Deployment                     k8s.io/apps/v1                          Kube Object for apps/v1.Deployment\n#Service                        k8s.io/core/v1                          Kube Object for v1.Service\n#Secret                         k8s.io/core/v1                          Kube Object for v1.Secret\n#Node                           k8s.io/core/v1                          Kube Object for v1.Node\n#PersistentVolume               k8s.io/core/v1                          Kube Object for v1.PersistentVolume\n#Endpoints                      k8s.io/core/v1                          Kube Object for v1.Endpoints\n#Pod                            k8s.io/core/v1                          Kube Object for v1.Pod\n")),(0,p.kt)("p",{parentName:"li"},"\u5176\u5b9e\uff0c\u8fd9\u4e9b\u90fd\u662f\u5185\u7f6e\u5305\uff0c\u53ea\u662f\u4f60\u53ef\u4ee5\u50cf ",(0,p.kt)("inlineCode",{parentName:"p"},"third-party packages")," \u4e00\u6837\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"import-path")," \u5bfc\u5165\u8fd9\u4e9b\u5305\u3002\n\u5f53\u524d\u65b9\u5f0f\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue")," \u547d\u4ee4\u884c\u8fdb\u884c\u8c03\u8bd5\u3002"))),(0,p.kt)("h4",{id:"\u4f7f\u7528-kube-\u5305\u7684-cue-\u6a21\u7248\u8c03\u8bd5\u6d41\u7a0b"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"h4"},"Kube")," \u5305\u7684 CUE \u6a21\u7248\u8c03\u8bd5\u6d41\u7a0b"),(0,p.kt)("p",null,"\u6b64\u90e8\u5206\u4e3b\u8981\u4ecb\u7ecd\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue")," \u547d\u4ee4\u884c\u5bf9  CUE \u6a21\u7248\u8c03\u8bd5\u548c\u6d4b\u8bd5\u7684\u6d41\u7a0b\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728 KubeVela\u4e2d\u4f7f\u7528 ",(0,p.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u76f8\u540c\u7684 CUE \u6a21\u7248"),"\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u521b\u5efa\u76ee\u5f55\uff0c\u521d\u59cb\u5316 CUE \u6a21\u5757")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir cue-debug && cd cue-debug/\ncue mod init oam.dev\ngo mod init oam.dev\ntouch def.cue\n")),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"li"},"cue")," \u547d\u4ee4\u884c\u4e0b\u8f7d ",(0,p.kt)("inlineCode",{parentName:"li"},"third-party packages"))),(0,p.kt)("p",null,"\u5176\u5b9e\u5728 KubeVela \u4e2d\u5e76\u4e0d\u9700\u8981\u4e0b\u8f7d\u8fd9\u4e9b\u5305\uff0c\u56e0\u4e3a\u5b83\u4eec\u5df2\u7ecf\u88ab\u4ece Kubernetes API \u81ea\u52a8\u751f\u6210\u3002\n\u4f46\u662f\u5728\u672c\u5730\u6d4b\u8bd5\u73af\u5883\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue get go"),"  \u6765\u83b7\u53d6 Go \u5305\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a CUE \u683c\u5f0f\u7684\u6587\u4ef6\u3002"),(0,p.kt)("p",null,"\u6240\u4ee5\uff0c\u4e3a\u4e86\u80fd\u591f\u4f7f\u7528 Kubernetes \u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"Serivice")," \u8d44\u6e90\uff0c\u6211\u4eec\u9700\u8981\u4e0b\u8f7d\u5e76\u8f6c\u6362\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"core")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"apps")," Kubernetes \u6a21\u5757\u7684 CUE \u5b9a\u4e49\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"cue get go k8s.io/api/core/v1\ncue get go k8s.io/api/apps/v1\n")),(0,p.kt)("p",null,"\u968f\u540e\uff0c\u8be5\u6a21\u5757\u76ee\u5f55\u4e0b\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u6784\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 cue.mod\n\u2502   \u251c\u2500\u2500 gen\n\u2502   \u2502   \u2514\u2500\u2500 k8s.io\n\u2502   \u2502       \u251c\u2500\u2500 api\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 apps\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 core\n\u2502   \u2502       \u2514\u2500\u2500 apimachinery\n\u2502   \u2502           \u2514\u2500\u2500 pkg\n\u2502   \u251c\u2500\u2500 module.cue\n\u2502   \u251c\u2500\u2500 pkg\n\u2502   \u2514\u2500\u2500 usr\n\u251c\u2500\u2500 def.cue\n\u251c\u2500\u2500 go.mod\n\u2514\u2500\u2500 go.sum\n")),(0,p.kt)("p",null,"\u8be5\u5305\u5728 CUE \u6a21\u7248\u4e2d\u88ab\u5bfc\u5165\u7684\u8def\u5f84\u5e94\u8be5\u662f\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "k8s.io/api/apps/v1"\n   corev1 "k8s.io/api/core/v1"\n)\n')),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"\u91cd\u6784\u76ee\u5f55\u7ed3\u6784")),(0,p.kt)("p",null,"\u6211\u4eec\u7684\u76ee\u6807\u662f\u672c\u5730\u6d4b\u8bd5\u6a21\u7248\u5e76\u5728 KubeVela \u4e2d\u4f7f\u7528\u76f8\u540c\u6a21\u7248\u3002\n\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5bf9\u6211\u4eec\u672c\u5730 CUE \u6a21\u5757\u76ee\u5f55\u8fdb\u884c\u4e00\u4e9b\u91cd\u6784\uff0c\u5e76\u5c06\u76ee\u5f55\u4e0e KubeVela \u63d0\u4f9b\u7684\u5bfc\u5165\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"apps")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"core")," \u76ee\u5f55\u4ece ",(0,p.kt)("inlineCode",{parentName:"p"},"cue.mod/gen/k8s.io/api")," \u590d\u5236\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue.mod/gen/k8s.io"),"\u3002\n\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5e94\u5c06\u6e90\u76ee\u5f55 ",(0,p.kt)("inlineCode",{parentName:"p"},"apps")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"core")," \u4fdd\u7559\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"gen/k8s.io/api")," \u4e2d\uff0c\u4ee5\u907f\u514d\u51fa\u73b0\u5305\u4f9d\u8d56\u6027\u95ee\u9898\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r cue.mod/gen/k8s.io/api/apps cue.mod/gen/k8s.io\ncp -r cue.mod/gen/k8s.io/api/core cue.mod/gen/k8s.io\n")),(0,p.kt)("p",null,"\u5408\u5e76\u8fc7\u4e4b\u540e\u5230\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 cue.mod\n\u2502   \u251c\u2500\u2500 gen\n\u2502   \u2502   \u2514\u2500\u2500 k8s.io\n\u2502   \u2502       \u251c\u2500\u2500 api\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 apps\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 core\n\u2502   \u2502       \u251c\u2500\u2500 apimachinery\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 pkg\n\u2502   \u2502       \u251c\u2500\u2500 apps\n\u2502   \u2502       \u2514\u2500\u2500 core\n\u2502   \u251c\u2500\u2500 module.cue\n\u2502   \u251c\u2500\u2500 pkg\n\u2502   \u2514\u2500\u2500 usr\n\u251c\u2500\u2500 def.cue\n\u251c\u2500\u2500 go.mod\n\u2514\u2500\u2500 go.sum\n")),(0,p.kt)("p",null,"\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e0e KubeVela \u5bf9\u9f50\u7684\u8def\u5f84\u5bfc\u5165\u5305\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "k8s.io/apps/v1"\n   corev1 "k8s.io/core/v1"\n)\n')),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u6d4b\u8bd5")),(0,p.kt)("p",null,"\u6700\u7ec8\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"Kube")," \u5305\u6d4b\u8bd5 CUE \u6a21\u7248\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "k8s.io/apps/v1"\n   corev1 "k8s.io/core/v1"\n)\n\n// output is validated by Deployment.\noutput: apps.#Deployment\noutput: {\n    metadata: {\n        name:      context.name\n        namespace: "default"\n    }\n    spec: {\n        selector: matchLabels: {\n            "app": context.name\n        }\n        template: {\n            metadata: {\n                labels: {\n                    "app":     context.name\n                    "version": parameter.version\n                }\n            }\n            spec: {\n                terminationGracePeriodSeconds: parameter.podShutdownGraceSeconds\n                containers: [{\n                    name:  context.name\n                    image: parameter.image\n                    ports: [{\n                        if parameter.containerPort != _|_ {\n                            containerPort: parameter.containerPort\n                        }\n                        if parameter.containerPort == _|_ {\n                            containerPort: parameter.servicePort\n                        }\n                    }]\n                    if parameter.env != _|_ {\n                        env: [\n                            for k, v in parameter.env {\n                                name:  k\n                                value: v\n                            },\n                        ]\n                    }\n                    resources: {\n                        requests: {\n                            if parameter.cpu != _|_ {\n                                cpu: parameter.cpu\n                            }\n                            if parameter.memory != _|_ {\n                                memory: parameter.memory\n                            }\n                        }\n                    }\n                }]\n            }\n        }\n    }\n}\n\noutputs:{\n  service: corev1.#Service\n}\n\n\n// Service\noutputs: service: {\n    metadata: {\n        name: context.name\n        labels: {\n            "app": context.name\n        }\n    }\n    spec: {\n        //type: "ClusterIP"\n        selector: {\n            "app": context.name\n        }\n        ports: [{\n            port: parameter.servicePort\n            if parameter.containerPort != _|_ {\n                targetPort: parameter.containerPort\n            }\n            if parameter.containerPort == _|_ {\n                targetPort: parameter.servicePort\n            }\n        }]\n    }\n}\nparameter: {\n    version:        *"v1" | string\n    image:          string\n    servicePort:    int\n    containerPort?: int\n    // +usage=Optional duration in seconds the pod needs to terminate gracefully\n    podShutdownGraceSeconds: *30 | int\n    env: [string]: string\n    cpu?:    string\n    memory?: string\n}\n\n// mock context data\ncontext: {\n    name: "test"\n}\n\n// mock parameter data\nparameter: {\n    image:          "test-image"\n    servicePort:    8000\n    env: {\n        "HELLO": "WORLD"\n    }\n}\n')),(0,p.kt)("p",null,"\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"cue export")," \u5bfc\u51fa\u6e32\u67d3\u7ed3\u679c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export def.cue --out yaml\noutput:\n  metadata:\n    name: test\n    namespace: default\n  spec:\n    selector:\n      matchLabels:\n        app: test\n    template:\n      metadata:\n        labels:\n          app: test\n          version: v1\n      spec:\n        terminationGracePeriodSeconds: 30\n        containers:\n        - name: test\n          image: test-image\n          ports:\n          - containerPort: 8000\n          env:\n          - name: HELLO\n            value: WORLD\n          resources:\n            requests: {}\noutputs:\n  service:\n    metadata:\n      name: test\n      labels:\n        app: test\n    spec:\n      selector:\n        app: test\n      ports:\n      - port: 8000\n        targetPort: 8000\nparameter:\n  version: v1\n  image: test-image\n  servicePort: 8000\n  podShutdownGraceSeconds: 30\n  env:\n    HELLO: WORLD\ncontext:\n  name: test\n")),(0,p.kt)("h2",{id:"dry-run-application"},"Dry-Run ",(0,p.kt)("inlineCode",{parentName:"h2"},"Application")),(0,p.kt)("p",null,"\u5f53 CUE \u6a21\u7248\u5c31\u7eea\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela system dry-run")," \u6267\u884c dry-run \u5e76\u68c0\u67e5\u5728\u771f\u5b9e Kubernetes \u96c6\u7fa4\u4e2d\u88ab\u6e32\u67d3\u7684\u8d44\u6e90\u3002\u8be5\u547d\u4ee4\u884c\u80cc\u540e\u7684\u6267\u884c\u903b\u8f91\u4e0e KubeVela \u4e2d ",(0,p.kt)("inlineCode",{parentName:"p"},"Application")," \u63a7\u5236\u5668\u7684\u903b\u8f91\u662f\u4e00\u81f4\u7684\u3002"),(0,p.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"mergedef.sh")," \u5408\u5e76 Definition \u548c CUE \u6587\u4ef6\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"$ mergedef.sh def.yaml def.cue > componentdef.yaml\n")),(0,p.kt)("p",null,"\u968f\u540e\uff0c\u6211\u4eec\u521b\u5efa ",(0,p.kt)("inlineCode",{parentName:"p"},"test-app.yaml")," Application\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: boutique\n  namespace: default\nspec:\n  components:\n    - name: frontend\n      type: microservice\n      properties:\n        image: registry.cn-hangzhou.aliyuncs.com/vela-samples/frontend:v0.2.2\n        servicePort: 80\n        containerPort: 8080\n        env:\n          PORT: "8080"\n        cpu: "100m"\n        memory: "64Mi"\n')),(0,p.kt)("p",null,"\u9488\u5bf9\u4e0a\u9762 Application \u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"vela system dry-run")," \u547d\u4ee4\u6267\u884c dry-run \u64cd\u4f5c\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},'$ vela system dry-run -f test-app.yaml -d componentdef.yaml\n---\n# Application(boutique) -- Comopnent(frontend)\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.oam.dev/component: frontend\n    app.oam.dev/name: boutique\n    workload.oam.dev/type: microservice\n  name: frontend\n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      app: frontend\n  template:\n    metadata:\n      labels:\n        app: frontend\n        version: v1\n    spec:\n      containers:\n      - env:\n        - name: PORT\n          value: "8080"\n        image: registry.cn-hangzhou.aliyuncs.com/vela-samples/frontend:v0.2.2\n        name: frontend\n        ports:\n        - containerPort: 8080\n        resources:\n          requests:\n            cpu: 100m\n            memory: 64Mi\n      serviceAccountName: default\n      terminationGracePeriodSeconds: 30\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: frontend\n    app.oam.dev/component: frontend\n    app.oam.dev/name: boutique\n    trait.oam.dev/resource: service\n    trait.oam.dev/type: AuxiliaryWorkload\n  name: frontend\nspec:\n  ports:\n  - port: 80\n    targetPort: 8080\n  selector:\n    app: frontend\n  type: ClusterIP\n\n---\n')))}s.isMDXComponent=!0}}]);