(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[471],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74527:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=n(22122),o=n(19756),l=(n(67294),n(3905)),r={title:"Advanced Rollout Plan"},i={unversionedId:"end-user/scopes/advanced-rollout",id:"version-v1.1/end-user/scopes/advanced-rollout",isDocsHomePage:!1,title:"Advanced Rollout Plan",description:"The rollout plan feature in KubeVela is essentially provided by AppRollout API.",source:"@site/versioned_docs/version-v1.1/end-user/scopes/advanced-rollout.md",sourceDirName:"end-user/scopes",slug:"/end-user/scopes/advanced-rollout",permalink:"/zh/docs/end-user/scopes/advanced-rollout",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/scopes/advanced-rollout.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"2021/6/21",frontMatter:{title:"Advanced Rollout Plan"}},p=[{value:"AppRollout Specification",id:"approllout-specification",children:[]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"Advanced Usage",id:"advanced-usage",children:[{value:"Revert",id:"revert",children:[]},{value:"Skip Revision Rollout",id:"skip-revision-rollout",children:[]},{value:"Scale the application",id:"scale-the-application",children:[]}]},{value:"More Details About <code>AppRollout</code>",id:"more-details-about-approllout",children:[{value:"Design Principles and Goals",id:"design-principles-and-goals",children:[]},{value:"State Transition",id:"state-transition",children:[]},{value:"Roadmap",id:"roadmap",children:[]}]}],s={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The rollout plan feature in KubeVela is essentially provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"AppRollout")," API."),(0,l.kt)("h2",{id:"approllout-specification"},"AppRollout Specification"),(0,l.kt)("p",null,"The following describes all the available fields of a AppRollout:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # SourceAppRevisionName contains the name of the appRevisionName that we need to upgrade from.\n  # it can be empty only when you want to scale an  application. +optional\n  sourceAppRevisionName: test-rolling-v1\n  \n  # TargetAppRevisionName contains the name of the appRevisionName that we need to upgrade to.\n  targetAppRevisionName: test-rolling-v2\n  \n  # The list of component to upgrade in the application.\n  # We only support single component application so far. +optional\n  componentList:\n    - metrics-provider\n  # RolloutPlan is the details on how to rollout the resources\n  rolloutPlan:\n    \n    # RolloutStrategy defines strategies for the rollout plan\n    # the value can be IncreaseFirst or DecreaseFirst\n    # Defaults to IncreaseFirst. +optional\n    rolloutStrategy: \"IncreaseFirst\"\n    \n    # The exact distribution among batches.\n    # its size has to be exactly the same as the NumBatches (if set)\n    # The total number cannot exceed the targetSize or the size of the source resource\n    # We will IGNORE the last batch's replica field if it's a percentage since round errors can lead to inaccurate sum\n    # We highly recommend to leave the last batch's replica field empty\n    rolloutBatches:\n        \n      # Replicas is the number of pods to upgrade in this batch\n      # it can be an absolute number (ex: 5) or a percentage of total pods\n      # we will ignore the percentage of the last batch to just fill the gap\n      # Below is an example the first batch contains only 1 pod while the rest of the batches split the rest.\n      - replicas: 1\n      - replicas: 50%\n      - replicas: 50%\n        \n    # All pods in the batches up to the batchPartition (included) will have\n    # the target resource specification while the rest still have the source resource\n    # This is designed for the operators to manually rollout\n    # Default is the the number of batches which will rollout all the batches. +optional\n    batchPartition: 1\n\n    # Paused the rollout\n    # defaults to false. +optional\n    paused: false\n\n    # The size of the target resource. In rollout operation it's the same as the size of the source resource.\n    # when use rollout to scale an application targetSize is the target source you want scale to.  +optional\n    targetSize: 4\n")),(0,l.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Deploy application"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: worker\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:4.0.6\n        port: 8080\n        replicas: 5\n')),(0,l.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v1")," have generated"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v1\nNAME              AGE\ntest-rolling-v1   9s\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Attach the following rollout plan to upgrade the application to v1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  targetAppRevisionName: test-rolling-v1\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 10%\n      - replicas: 40%\n      - replicas: 50%\n    targetSize: 5\n')),(0,l.kt)("p",{parentName:"li"},"User can check the status of the ApplicationRollout and wait for the rollout to complete.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"User can continue to modify the application image tag and apply.This will generate new AppRevision ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v2")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: test-rolling\n  annotations:\n    "app.oam.dev/rolling-components": "metrics-provider"\n    "app.oam.dev/rollout-template": "true"\nspec:\n  components:\n    - name: metrics-provider\n      type: worker\n      properties:\n        cmd:\n          - ./podinfo\n          - stress-cpu=1\n        image: stefanprodan/podinfo:5.0.2\n        port: 8080\n        replicas: 5\n')),(0,l.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v2")," have generated"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v2\nNAME              AGE\ntest-rolling-v2   7s\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Apply the application rollout that upgrade the application from v1 to v2"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # application (revision) reference\n  sourceAppRevisionName: test-rolling-v1\n  targetAppRevisionName: test-rolling-v2\n  componentList:\n    - metrics-provider\n  rolloutPlan:\n    rolloutStrategy: "IncreaseFirst"\n    rolloutBatches:\n      - replicas: 1\n      - replicas: 2\n      - replicas: 2\n')),(0,l.kt)("p",{parentName:"li"},'User can check the status of the ApplicationRollout and see the rollout completes, and the\nApplicationRollout\'s "Rolling State" becomes ',(0,l.kt)("inlineCode",{parentName:"p"},"rolloutSucceed")))),(0,l.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"AppRollout")," separately can enable some advanced use case."),(0,l.kt)("h3",{id:"revert"},"Revert"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Apply the application rollout that revert the application from v2 to v1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\n  kind: AppRollout\n  metadata:\n    name: rolling-example\n  spec:\n    # application (revision) reference\n    sourceAppRevisionName: test-rolling-v2\n    targetAppRevisionName: test-rolling-v1\n    componentList:\n      - metrics-provider\n    rolloutPlan:\n      rolloutStrategy: "IncreaseFirst"\n      rolloutBatches:\n        - replicas: 1\n        - replicas: 2\n        - replicas: 2\n')))),(0,l.kt)("h3",{id:"skip-revision-rollout"},"Skip Revision Rollout"),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"User can apply this yaml continue to modify the application image tag.This will generate new AppRevision ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v3")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: core.oam.dev/v1beta1\n  kind: Application\n  metadata:\n    name: test-rolling\n    annotations:\n      "app.oam.dev/rolling-components": "metrics-provider"\n      "app.oam.dev/rollout-template": "true"\n  spec:\n    components:\n      - name: metrics-provider\n        type: worker\n        properties:\n          cmd:\n            - ./podinfo\n            - stress-cpu=1\n          image: stefanprodan/podinfo:5.2.0\n          port: 8080\n          replicas: 5\n')),(0,l.kt)("p",{parentName:"li"},"Verify AppRevision ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v3")," have generated"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get apprev test-rolling-v3\nNAME              AGE\ntest-rolling-v3   7s\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Apply the application rollout that rollout the application from v1 to v3"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\n  kind: AppRollout\n  metadata:\n    name: rolling-example\n  spec:\n    # application (revision) reference\n    sourceAppRevisionName: test-rolling-v1\n    targetAppRevisionName: test-rolling-v3\n    componentList:\n      - metrics-provider\n    rolloutPlan:\n      rolloutStrategy: "IncreaseFirst"\n      rolloutBatches:\n        - replicas: 1\n        - replicas: 2\n        - replicas: 2\n')))),(0,l.kt)("h3",{id:"scale-the-application"},"Scale the application"),(0,l.kt)("p",null,"Before using AppRollout to scale an application, we must be aware of the real status of workload now. Check the workload status. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deploy metrics-provider-v3\n NAME                  READY   UP-TO-DATE   AVAILABLE   AGE\n metrics-provider-v3   5/5     5            5           10m\n")),(0,l.kt)("p",null,"Last target appRevision is ",(0,l.kt)("inlineCode",{parentName:"p"},"test-rolling-v3")," and the workload have 5 replicas currently."),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Apply the appRollout increase the replicas nums of workload to 7.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: AppRollout\nmetadata:\n  name: rolling-example\nspec:\n  # sourceAppRevisionName is empty means this is a scale operation\n  targetAppRevisionName: test-rolling-v3\n  componentList:\n  - metrics-provider\n  rolloutPlan:\n     rolloutStrategy: "IncreaseFirst"\n     rolloutBatches:\n     # split two batches to scale. First batch increase 1 pod and second increase 1.\n       - replicas: 1\n       - replicas: 1\n     # targetSize means that final total size of workload is 7\n     targetSize: 7\n')))),(0,l.kt)("h2",{id:"more-details-about-approllout"},"More Details About ",(0,l.kt)("inlineCode",{parentName:"h2"},"AppRollout")),(0,l.kt)("h3",{id:"design-principles-and-goals"},"Design Principles and Goals"),(0,l.kt)("p",null,"There are several attempts at solving rollout problem in the cloud native community. However, none\nof them provide a true rolling style upgrade. For example, flagger supports Blue/Green, Canary\nand A/B testing. Therefore, we decide to add support for batch based rolling upgrade as\nour first style to support in KubeVela."),(0,l.kt)("p",null,"We design KubeVela rollout solutions with the following principles in mind"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First, we want all flavors of rollout controllers share the same core rollout\nrelated logic. The trait and application related logic can be easily encapsulated into its own\npackage."),(0,l.kt)("li",{parentName:"ul"},"Second, the core rollout related logic is easily extensible to support different type of\nworkloads, i.e. Deployment, CloneSet, Statefulset, DaemonSet or even customized workloads."),(0,l.kt)("li",{parentName:"ul"},"Thirdly, the core rollout related logic has a well documented state machine that\ndoes state transition explicitly."),(0,l.kt)("li",{parentName:"ul"},"Finally, the controllers can support all the rollout/upgrade needs of an application running\nin a production environment including Blue/Green, Canary and A/B testing.")),(0,l.kt)("h3",{id:"state-transition"},"State Transition"),(0,l.kt)("p",null,"Here is the high level state transition graph"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8366).Z})),(0,l.kt)("h3",{id:"roadmap"},"Roadmap"),(0,l.kt)("p",null,"Our recent roadmap for rollout plan is ",(0,l.kt)("a",{parentName:"p",href:"./roadmap"},"here"),"."))}c.isMDXComponent=!0},8366:function(e,t,n){"use strict";t.Z=n.p+"assets/images/approllout-status-transition-78db00cbc539d19e6c5d3feeead31b16.jpg"}}]);