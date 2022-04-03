"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[827],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={sidebar_position:600},u="Command Usage",c={unversionedId:"usage",id:"usage",title:"Command Usage",description:"-var option",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/tfcmt/docs/usage",editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/usage.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Compared with tfnotify v0.7.0",permalink:"/tfcmt/docs/compared-with-tfnotify"}},i={},m=[{value:"-var option",id:"-var-option",level:3},{value:"tfcmt plan",id:"tfcmt-plan",level:2},{value:"tfcmt apply",id:"tfcmt-apply",level:2}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-usage"},"Command Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt --version\ntfcmt version 0.7.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help\nNAME:\n   tfcmt - Notify the execution result of terraform command\n\nUSAGE:\n   tfcmt [global options] command [command options] [arguments...]\n\nVERSION:\n   0.7.0\n\nCOMMANDS:\n   plan     Run terraform plan and post a comment to GitHub commit or pull request\n   apply    Run terraform apply and post a comment to GitHub commit or pull request\n   version  Show version\n   help, h  Shows a list of commands or help for one command\n\nGLOBAL OPTIONS:\n   --ci value         name of CI to run tfcmt\n   --owner value      GitHub Repository owner name\n   --repo value       GitHub Repository name\n   --sha value        commit SHA (revision)\n   --build-url value  build url\n   --log-level value  log level\n   --pr value         pull request number (default: 0)\n   --config value     config path\n   --var value        template variables. The format of value is '<name>:<value>'\n   --help, -h         show help (default: false)\n   --version, -v      print the version (default: false)\n")),(0,o.kt)("h3",{id:"-var-option"},"-var option"),(0,o.kt)("p",null,"tfcmt supports to pass variables by ",(0,o.kt)("inlineCode",{parentName:"p"},"-var")," option.\nThe format of the value should be ",(0,o.kt)("inlineCode",{parentName:"p"},"<name>:<value>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -var name:foo plan -- terraform plan\n")),(0,o.kt)("p",null,"The variables can be referred in ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'terraform:\n  plan:\n    template: |\n      {{.Vars.name}}\n      ...\n    when_add_or_update_only:\n      label: "{{.Vars.name}}/add-or-update"\n')),(0,o.kt)("h2",{id:"tfcmt-plan"},"tfcmt plan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help plan\nNAME:\n   tfcmt plan - Run terraform plan and post a comment to GitHub commit or pull request\n\nUSAGE:\n   tfcmt plan [arguments...]\n")),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -- terraform plan\n")),(0,o.kt)("h2",{id:"tfcmt-apply"},"tfcmt apply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt help apply\nNAME:\n   tfcmt apply - Run terraform apply and post a comment to GitHub commit or pull request\n\nUSAGE:\n   tfcmt apply [arguments...]\n")),(0,o.kt)("p",null,"e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt apply -- terraform apply -auto-approve\n")))}f.isMDXComponent=!0}}]);