"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[446],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:200},d="Configuration",s={unversionedId:"config",id:"config",title:"Configuration",description:"tfcmt provides the good default configuration and the configuration file is optional,",source:"@site/docs/config.md",sourceDirName:".",slug:"/config",permalink:"/tfcmt/docs/config",editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/config.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/tfcmt/docs/getting-started"},next:{title:"Environment variable",permalink:"/tfcmt/docs/environment-variable"}},p={},u=[{value:"Configuration File Path",id:"configuration-file-path",level:2},{value:"Template Engine",id:"template-engine",level:2},{value:"Template variables",id:"template-variables",level:2},{value:"Template Functions",id:"template-functions",level:2},{value:"Default Configuration",id:"default-configuration",level:2},{value:"Custom Environment Variable Definition",id:"custom-environment-variable-definition",level:2},{value:"Embed metadata in comments",id:"embed-metadata-in-comments",level:2},{value:"Variables <code>ChangedResult</code>, <code>ChangeOutsideTerraform</code>, and <code>Warning</code>",id:"variables-changedresult-changeoutsideterraform-and-warning",level:2},{value:"Variable: ChangedResult",id:"variable-changedresult",level:3},{value:"Variable: ChangeOutsideTerraform",id:"variable-changeoutsideterraform",level:3},{value:"Variable: Warning",id:"variable-warning",level:3},{value:"Example configuration",id:"example-configuration",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"tfcmt provides the good default configuration and the configuration file is optional,\nbut you can customize the configuration with a configuration file."),(0,i.kt)("h2",{id:"configuration-file-path"},"Configuration File Path"),(0,i.kt)("p",null,"When running tfcmt, you can specify the configuration path via ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," option (if it's omitted, the configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"{.,}tfcmt.y{,a}ml")," is searched from the current directory to the root directory).\nConfiguration file is optional. If ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," option isn't used and the configuration file isn't found, tfcmt works with the default configuration."),(0,i.kt)("h2",{id:"template-engine"},"Template Engine"),(0,i.kt)("p",null,"The template is rendered with Go's ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/html/template/"},"template"),"."),(0,i.kt)("h2",{id:"template-variables"},"Template variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Result }}")),(0,i.kt)("td",{parentName:"tr",align:null},"Matched result by parsing like ",(0,i.kt)("inlineCode",{parentName:"td"},"Plan: 1 to add")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"No changes"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .ChangedResult }}")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .ChangeOutsideTerraform }}")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Warning }}")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Link }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The link of the build page on CI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Vars }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The variables which are passed by ",(0,i.kt)("inlineCode",{parentName:"td"},"-var")," option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Stdout }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The standard output of terraform command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .Stderr }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The standard error output of terraform command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .CombinedOutput }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The output of terraform command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .ExitCode }}")),(0,i.kt)("td",{parentName:"tr",align:null},"The exit code of terraform command")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .HasDestroy }}")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether there are destroyed resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .ErrorMessages }}")),(0,i.kt)("td",{parentName:"tr",align:null},"a list of error messages which occur in tfcmt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .CreatedResources }}")),(0,i.kt)("td",{parentName:"tr",align:null},"a list of created resource paths. This variable can be used at only plan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .UpdatedResources }}")),(0,i.kt)("td",{parentName:"tr",align:null},"a list of updated resource paths. This variable can be used at only plan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .DeletedResources }}")),(0,i.kt)("td",{parentName:"tr",align:null},"a list of deleted resource paths. This variable can be used at only plan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{{ .ReplacedResources }}")),(0,i.kt)("td",{parentName:"tr",align:null},"a list of deleted resource paths. This variable can be used at only plan")))),(0,i.kt)("h2",{id:"template-functions"},"Template Functions"),(0,i.kt)("p",null,"In the template, the ",(0,i.kt)("a",{parentName:"p",href:"http://masterminds.github.io/sprig/"},"sprig template functions")," can be used.\nAnd the following functions can be used."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"avoidHTMLEscape"),(0,i.kt)("li",{parentName:"ul"},"wrapCode")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"avoidHTMLEscape")," prevents the text from being HTML escaped."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wrapCode")," wraps a test with ",(0,i.kt)("code",null,"`","`","`")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"<pre><code>"),".\nIf the text includes ",(0,i.kt)("code",null,"`","`","`"),", the text wraps with ",(0,i.kt)("inlineCode",{parentName:"p"},"<pre><code>"),", otherwise the text wraps with ",(0,i.kt)("code",null,"`","`","`")," and the text isn't HTML escaped."),(0,i.kt)("h2",{id:"default-configuration"},"Default Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'embedded_var_names: []\nci:\n  pr: []\n  owner: []\n  repo: []\n  sha: []\n  link: []\n  vars: {}\ntemplates:\n  plan_title: "## {{if eq .ExitCode 1}}:x: {{end}}Plan Result{{if .Vars.target}} ({{.Vars.target}}){{end}}"\n  apply_title: "## :{{if eq .ExitCode 0}}white_check_mark{{else}}x{{end}}: Apply Result{{if .Vars.target}} ({{.Vars.target}}){{end}}"\n\n  result: "{{if .Result}}<pre><code>{{ .Result }}</code></pre>{{end}}"\n  updated_resources: |\n    {{if .CreatedResources}}\n    * Create\n    {{- range .CreatedResources}}\n      * {{.}}\n    {{- end}}{{end}}{{if .UpdatedResources}}\n    * Update\n    {{- range .UpdatedResources}}\n      * {{.}}\n    {{- end}}{{end}}{{if .DeletedResources}}\n    * Delete\n    {{- range .DeletedResources}}\n      * {{.}}\n    {{- end}}{{end}}{{if .ReplacedResources}}\n    * Replace\n    {{- range .ReplacedResources}}\n      * {{.}}\n    {{- end}}{{end}}\n  deletion_warning: |\n    {{if .HasDestroy}}\n    ### :warning: Resource Deletion will happen :warning:\n    This plan contains resource delete operation. Please check the plan result very carefully!\n    {{end}}\n  changed_result: |\n    {{if .ChangedResult}}\n    <details><summary>Change Result (Click me)</summary>\n    {{wrapCode .ChangedResult}}\n    </details>\n    {{end}}\n  change_outside_terraform: |\n    {{if .ChangeOutsideTerraform}}\n    <details><summary>:information_source: Objects have changed outside of Terraform</summary>\n\n    _This feature was introduced from [Terraform v0.15.4](https://github.com/hashicorp/terraform/releases/tag/v0.15.4)._\n    {{wrapCode .ChangeOutsideTerraform}}\n    </details>\n    {{end}}\n  warning: |\n    {{if .Warning}}\n    ## :warning: Warnings :warning:\n    {{wrapCode .Warning}}\n    {{end}}\n  error_messages: |\n    {{if .ErrorMessages}}\n    ## :warning: Errors\n    {{range .ErrorMessages}}\n    * {{. -}}\n    {{- end}}{{end}}\n  guide_apply_failure: ""\n  guide_apply_parse_error: ""\nterraform:\n  plan:\n    disable_label: false\n    template: |\n      {{template "plan_title" .}}\n\n      {{if .Link}}[CI link]({{.Link}}){{end}}\n\n      {{template "deletion_warning" .}}\n      {{template "result" .}}\n      {{template "updated_resources" .}}\n\n      {{template "changed_result" .}}\n      {{template "change_outside_terraform" .}}\n      {{template "warning" .}}\n      {{template "error_messages" .}}\n    when_add_or_update_only:\n      label: "{{if .Vars.target}}{{.Vars.target}}/{{end}}add-or-update"\n      label_color: 1d76db # blue\n    when_destroy:\n      label: "{{if .Vars.target}}{{.Vars.target}}/{{end}}destroy"\n      label_color: d93f0b # red\n    when_no_changes:\n      label: "{{if .Vars.target}}{{.Vars.target}}/{{end}}no-changes"\n      label_color: 0e8a16 # green\n    when_plan_error:\n      label:\n      label_color:\n    when_parse_error:\n      template: |\n        {{template "plan_title" .}}\n\n        {{if .Link}}[CI link]({{.Link}}){{end}}\n\n        It failed to parse the result.\n\n        <details><summary>Details (Click me)</summary>\n        {{wrapCode .CombinedOutput}}\n        </details>\n  apply:\n    template: |\n      {{template "apply_title" .}}\n\n      {{if .Link}}[CI link]({{.Link}}){{end}}\n\n      {{if ne .ExitCode 0}}{{template "guide_apply_failure" .}}{{end}}\n\n      {{template "result" .}}\n\n      <details><summary>Details (Click me)</summary>\n      {{wrapCode .CombinedOutput}}\n      </details>\n      {{template "error_messages" .}}`\n    when_parse_error:\n      template: |\n        {{template "apply_title" .}}\n\n        {{if .Link}}[CI link]({{.Link}}){{end}}\n\n        {{template "guide_apply_parse_error" .}}\n\n        It failed to parse the result.\n\n        <details><summary>Details (Click me)</summary>\n        {{wrapCode .CombinedOutput}}\n        </details>\n')),(0,i.kt)("p",null,"If you don't want to update labels, please set ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform.plan.disable_label: true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"terraform:\n  plan:\n    disable_label: true\n")),(0,i.kt)("h2",{id:"custom-environment-variable-definition"},"Custom Environment Variable Definition"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"environment-variable#custom-environment-variable-definition"},"Custom Environment Variable Definition"),"."),(0,i.kt)("h2",{id:"embed-metadata-in-comments"},"Embed metadata in comments"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"embedded-metadata"},"Embed metadata in comments"),"."),(0,i.kt)("h2",{id:"variables-changedresult-changeoutsideterraform-and-warning"},"Variables ",(0,i.kt)("inlineCode",{parentName:"h2"},"ChangedResult"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"ChangeOutsideTerraform"),", and ",(0,i.kt)("inlineCode",{parentName:"h2"},"Warning")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/103"},"#103")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/107"},"#107")),(0,i.kt)("p",null,"The following variables are added from tfcmt v1.1.0."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ChangedResult"),(0,i.kt)("li",{parentName:"ul"},"ChangeOutsideTerraform"),(0,i.kt)("li",{parentName:"ul"},"Warning")),(0,i.kt)("p",null,"Compared with ",(0,i.kt)("inlineCode",{parentName:"p"},"CombinedOutput"),", you can make the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform plan")," clear."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can exclude noisy ",(0,i.kt)("inlineCode",{parentName:"li"},"Refreshing state...")," logs"),(0,i.kt)("li",{parentName:"ul"},"Separate ",(0,i.kt)("inlineCode",{parentName:"li"},'changes made outside of Terraform since the last "terraform apply":')),(0,i.kt)("li",{parentName:"ul"},"Make the warning easy to see")),(0,i.kt)("h3",{id:"variable-changedresult"},"Variable: ChangedResult"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{{if .ChangedResult}}\n<details><summary>Change Result (Click me)</summary>\n{{wrapCode .ChangedResult}}\n</details>\n{{end}}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/126020688-dc3c64be-bf01-4ee9-9693-39f85bc67442.png",alt:"image"})),(0,i.kt)("h3",{id:"variable-changeoutsideterraform"},"Variable: ChangeOutsideTerraform"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{{if .ChangeOutsideTerraform}}\n<details><summary>:warning: Note: Objects have changed outside of Terraform</summary>\n{{wrapCode .ChangeOutsideTerraform}}\n</details>\n{{end}}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/126021350-be037a55-2d83-48a3-a76d-7f9da23fde29.png",alt:"image"})),(0,i.kt)("h3",{id:"variable-warning"},"Variable: Warning"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{{if .Warning}}\n## :warning: Warnings :warning:\n{{wrapCode .Warning}}\n{{end}}\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/126020762-68f99375-f860-4c66-964e-6dd0c9578cb1.png",alt:"image"})),(0,i.kt)("h3",{id:"example-configuration"},"Example configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ntemplates:\n  changed_result: |\n    {{if .ChangedResult}}\n    <details><summary>Change Result (Click me)</summary>\n    {{wrapCode .ChangedResult}}\n    </details>\n    {{end}}\n  change_outside_terraform: |\n    {{if .ChangeOutsideTerraform}}\n    <details><summary>:warning: Note: Objects have changed outside of Terraform</summary>\n    {{wrapCode .ChangeOutsideTerraform}}\n    </details>\n    {{end}}\n  warning: |\n    {{if .Warning}}\n    ## :warning: Warnings :warning:\n    {{wrapCode .Warning}}\n    {{end}}\n  error_message: |\n    {{if .ErrorMessages}}\n    ## :warning: Errors\n    {{range .ErrorMessages}}\n    * {{. -}}\n    {{- end}}{{end}}\n\nterraform:\n  plan:\n    template: |\n      {{template "plan_title" .}}\n\n      {{if .Link}}[CI link]({{.Link}}){{end}}\n\n      {{template "result" .}}\n      {{template "updated_resources" .}}\n\n      {{template "changed_result" .}}\n      {{template "change_outside_terraform" .}}\n      {{template "warning" .}}\n      {{template "error_message" .}}\n    when_destroy:\n      template: |\n        {{template "plan_title" .}}\n\n        {{if .Link}}[CI link]({{.Link}}){{end}}\n\n        {{template "deletion_warning" .}}\n\n        {{template "result" .}}\n        {{template "updated_resources" .}}\n\n        {{template "changed_result" .}}\n        {{template "change_outside_terraform" .}}\n        {{template "warning" .}}\n        {{template "error_message" .}}\n')))}c.isMDXComponent=!0}}]);