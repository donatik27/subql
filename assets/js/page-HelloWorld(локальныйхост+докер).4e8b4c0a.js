(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{699:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hello-world-локальныи-хост-докер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-локальныи-хост-докер"}},[s._v("#")]),s._v(" Hello World (локальный хост + докер)")]),s._v(" "),e("p",[s._v("Добро пожаловать в краткое руководство по SubQuery Hello World. Краткое руководство призвано показать вам, как запустить стартовый проект по умолчанию в Docker за несколько простых шагов.")]),s._v(" "),e("h2",{attrs:{id:"цели-обучения"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#цели-обучения"}},[s._v("#")]),s._v(" Цели обучения")]),s._v(" "),e("p",[s._v("В конце этого краткого руководства вам следует:")]),s._v(" "),e("ul",[e("li",[s._v("понимать необходимые предварительные условия")]),s._v(" "),e("li",[s._v("понимать основные стандартные команды")]),s._v(" "),e("li",[s._v("иметь возможность перейти на localhost: 3000 и просмотреть игровую площадку")]),s._v(" "),e("li",[s._v("запустить простой запрос, чтобы получить высоту блока основной сети Polkadot")])]),s._v(" "),e("h2",{attrs:{id:"целевая-аудитория"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#целевая-аудитория"}},[s._v("#")]),s._v(" Целевая аудитория")]),s._v(" "),e("p",[s._v("Это руководство предназначено для новых разработчиков, имеющих некоторый опыт разработки и заинтересованных в получении дополнительных сведений о SubQuery.")]),s._v(" "),e("h2",{attrs:{id:"видео-инструкция"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#видео-инструкция"}},[s._v("#")]),s._v(" Видео инструкция")]),s._v(" "),e("figure",{staticClass:"video_container"},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/j034cyUYb7k",frameborder:"0",allowfullscreen:"true"}})]),s._v(" "),e("h2",{attrs:{id:"pre-requisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[s._v("#")]),s._v(" Pre-requisites")]),s._v(" "),e("p",[s._v("You will need:")]),s._v(" "),e("ul",[e("li",[s._v("yarn or npm package manager")]),s._v(" "),e("li",[s._v("SubQuery CLI ("),e("code",[s._v("@subql/cli")]),s._v(")")]),s._v(" "),e("li",[s._v("Docker")])]),s._v(" "),e("p",[s._v("You can run the following commands in a terminal to see if you already have any of these pre-requisites.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" -v "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("or "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsubql -v\ndocker -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("For more advanced users, copy and paste the following:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My yarn version is:"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" -v"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('My subql version is:"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("subql -v"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('My docker version is:"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("docker -v"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This should return: (for npm users, replace yarn with npm)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("My "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" version is: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.22")]),s._v(".10\nMy subql version is: @subql/cli/0.9.3 darwin-x64 node-v16.3.0\nMy docker version is: Docker version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.10")]),s._v(".5, build 55c4c88\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("If you get the above, then you are good to go. If not, follow these links to install them:")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install/",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),e("OutboundLink")],1),s._v(" or "),e("a",{attrs:{href:"https://www.npmjs.com/get-npm",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ru/quickstart/quickstart.html#install-the-subquery-cli"}},[s._v("SubQuery CLI")])],1),s._v(" "),e("li",[e("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"_1-step-1-initialise-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-step-1-initialise-project"}},[s._v("#")]),s._v(" 1. Step 1: Initialise project")]),s._v(" "),e("p",[s._v("The first step when starting off with SubQuery is to run the "),e("code",[s._v("subql init")]),s._v(" command. Let's initialise a start project with the name "),e("code",[s._v("subqlHelloWorld")]),s._v(". Note that only author is mandatory. Everything else is left empty below.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" subql init --starter subqlHelloWorld\nGit repository:\nRPC endpoint "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wss://polkadot.api.onfinality.io/public-ws"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\nAuthors: sa\nDescription:\nVersion: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\nLicense: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Apache-2.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":\nInit the starter package"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". subqlHelloWorld is ready\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Don't forget to change into this new directory.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" subqlHelloWorld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-step-2-install-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-step-2-install-dependencies"}},[s._v("#")]),s._v(" 2. Step 2: Install dependencies")]),s._v(" "),e("p",[s._v("Now do a yarn or node install to install the various dependencies.")]),s._v(" "),e("CodeGroup",[s._v(" # Yarn yarn install # NPM npm install\n"),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v1.22.10\ninfo No lockfile found.\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 🔍  Resolving packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 🚚  Fetching packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 🔗  Linking dependencies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("/4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 🔨  Building fresh packages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nsuccess Saved lockfile.\n✨  Done "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(".84s.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_3-step-3-generate-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-step-3-generate-code"}},[s._v("#")]),s._v(" 3. Step 3: Generate code")]),s._v(" "),e("p",[s._v("Now run "),e("code",[s._v("yarn codegen")]),s._v(" to generate Typescript from the GraphQL schema.")]),s._v(" "),e("CodeGroup",[s._v(" # Yarn yarn codegen # NPM npm run-script codegen\n"),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" codegen\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run v1.22.10\n$ ./node_modules/.bin/subql codegen\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n---------Subql Codegen---------\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n* Schema StarterEntity generated "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n* Models index generated "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n* Types index generated "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n✨  Done "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".02s.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[e("strong",[s._v("Warning")]),s._v(" When changes are made to the schema file, please remember to re-run "),e("code",[s._v("yarn codegen")]),s._v(" to regenerate your types directory.")]),s._v(" "),e("h2",{attrs:{id:"_4-step-4-build-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-step-4-build-code"}},[s._v("#")]),s._v(" 4. Step 4: Build code")]),s._v(" "),e("p",[s._v("The next step is to build the code with "),e("code",[s._v("yarn build")]),s._v(".")]),s._v(" "),e("CodeGroup",[s._v(" # Yarn yarn build # NPM npm run-script build\n"),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run v1.22.10\n$ tsc -b\n✨  Done "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".68s.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_5-run-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-run-docker"}},[s._v("#")]),s._v(" 5. Run Docker")]),s._v(" "),e("p",[s._v("Using Docker allows you to run this example very quickly because all the required infrastructure can be provided within the Docker image. Run "),e("code",[s._v("docker-compose pull && docker-compose up")]),s._v(".")]),s._v(" "),e("p",[s._v("This will kick everything into life where eventually you will get blocks being fetched.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SNIPPET")]),s._v("\nsubquery-node_1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:31.450Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("subql-node"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO node started\nsubquery-node_1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:35.134Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fetch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO fetch block "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsubqlhelloworld_graphql-engine_1 exited with code "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nsubquery-node_1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:38.412Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fetch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO fetch block "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:39.353Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nestjs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO Starting Nest application"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:39.382Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nestjs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO AppModule dependencies initialized\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:39.382Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nestjs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO ConfigureModule dependencies initialized\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:39.383Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nestjs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO GraphqlModule dependencies initialized\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:39.809Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nestjs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO Nest application successfully started\nsubquery-node_1   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:41.122Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fetch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO fetch block "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ngraphql-engine_1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-05T22:20:43.244Z "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("express"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" INFO request completed\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"_6-browse-playground"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-browse-playground"}},[s._v("#")]),s._v(" 6. Browse playground")]),s._v(" "),e("p",[s._v("Navigate to http://localhost:3000/ and paste the query below into the left side of the screen and then hit the play button.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n query{\n   starterEntities(last:10, orderBy:FIELD1_ASC ){\n     nodes{\n       field1\n     }\n   }\n }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("SubQuery playground on localhost.")]),s._v(" "),e("p",[e("img",{attrs:{src:"/assets/img/subql_playground.png",alt:"playground localhost"}})]),s._v(" "),e("p",[s._v("The block count in the playground should match the block count (technically the block height) in the terminal as well.")]),s._v(" "),e("h2",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[s._v("#")]),s._v(" Summary")]),s._v(" "),e("p",[s._v("In this quick start, we demonstrated the basic steps to get a starter project up and running within a Docker environment and then navigated to localhost:3000 and ran a query to return the block number of the mainnet Polkadot network.")])])],1)],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);