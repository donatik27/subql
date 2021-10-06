(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{730:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hello-world-โฮสต์บน-subquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-โฮสต์บน-subquery"}},[t._v("#")]),t._v(" Hello World (โฮสต์บน SubQuery)")]),t._v(" "),s("p",[t._v("จุดมุ่งหมายของ quick start นี้คือการแสดงวิธีการเริ่มใช้งานโปรเจ็กต์เริ่มต้นสำหรับทำงานใน SubQuery Projects (บริการของเรา) ด้วยไม่กี่ขั้นตอนง่ายๆ")]),t._v(" "),s("p",[t._v("เราจะใช้ starter project ที่เรียบง่ายนี้ (รวมถึงทุกอย่างที่เราได้เรียนรู้มาจนถึงตอนนี้) แต่แทนที่จะเรียกใช้ Docker เราจะใช้ประโยชน์จากโครงสร้างพื้นฐานของโฮสติ้งที่มีการจัดการโดย SubQuery กล่าวอีกนัยหนึ่ง เราให้ SubQuery จัดการโครงสร้างพื้นฐานของงาน production การรัน และจัดการงานหนักๆทั้งหมด")]),t._v(" "),s("h2",{attrs:{id:"วัตถุประสงค์การเรียนรู้"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#วัตถุประสงค์การเรียนรู้"}},[t._v("#")]),t._v(" วัตถุประสงค์การเรียนรู้")]),t._v(" "),s("p",[t._v("เมื่อจบจาก quick start นี้ คุณจะ:")]),t._v(" "),s("ul",[s("li",[t._v("ทำความเข้าใจข้อกำหนดเบื้องต้นที่จำเป็น")]),t._v(" "),s("li",[t._v("สามารถโฮสต์โปรเจ็กต์ใน "),s("a",{attrs:{href:"https://project.subquery.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SubQuery Projects"),s("OutboundLink")],1),t._v(" ได้")]),t._v(" "),s("li",[t._v("รัน query อย่างง่ายเพื่อ get ค่า block height ของเครือข่าย Polkadot mainnet โดยใช้ Playground")]),t._v(" "),s("li",[t._v("รัน GET query อย่างง่ายเพื่อขอค่า block height ของเครือข่าย Polkadot mainnet โดยใช้ cURL")])]),t._v(" "),s("h2",{attrs:{id:"กลุ่มเป้าหมาย"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#กลุ่มเป้าหมาย"}},[t._v("#")]),t._v(" กลุ่มเป้าหมาย")]),t._v(" "),s("p",[t._v("คู่มือนี้จัดทำขึ้นสำหรับนักพัฒนาหน้าใหม่ที่มีประสบการณ์ด้านการพัฒนามาบ้างแล้วและสนใจที่จะเรียนรู้เพิ่มเติมเกี่ยวกับ SubQuery")]),t._v(" "),s("h2",{attrs:{id:"คู่มือวิดีโอ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#คู่มือวิดีโอ"}},[t._v("#")]),t._v(" คู่มือวิดีโอ")]),t._v(" "),s("figure",{staticClass:"video_container"},[s("iframe",{attrs:{src:"https://www.youtube.com/embed/b-ba8-zPOoo",frameborder:"0",allowfullscreen:"true"}})]),t._v(" "),s("h2",{attrs:{id:"ข้อกําหนดเบื้องต้น"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ข้อกําหนดเบื้องต้น"}},[t._v("#")]),t._v(" ข้อกำหนดเบื้องต้น")]),t._v(" "),s("p",[t._v("คุณจะต้องมี:")]),t._v(" "),s("ul",[s("li",[t._v("บัญชี GitHub")])]),t._v(" "),s("h2",{attrs:{id:"_1-สร้างโปรเจ็กต์ของคุณ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-สร้างโปรเจ็กต์ของคุณ"}},[t._v("#")]),t._v(" 1. สร้างโปรเจ็กต์ของคุณ")]),t._v(" "),s("p",[t._v("เริ่มสร้างโปรเจ็กต์ชื่อ subql_hellowworld และรันการติดตั้ง codegen และทำการ build ด้วยตัวจัดการแพ็คเกจที่คุณชื่นชอบ")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" subql init --starter subqlHelloWorld\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" codegen\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("อย่ารันโดยใช้คำสั่ง docker")]),t._v(" "),s("h2",{attrs:{id:"_2-สร้าง-github-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-สร้าง-github-repo"}},[t._v("#")]),t._v(" 2. สร้าง GitHub repo")]),t._v(" "),s("p",[t._v("In GitHub, create a new public repository. Provide a name and set your visibility to public. Here, everything is kept as the default for now.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/github_create_new_repo.png",alt:"create github repo"}})]),t._v(" "),s("p",[t._v("Take note of your GitHub URL, this must be public for SubQuery to access it.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/github_repo_url.png",alt:"create github repo"}})]),t._v(" "),s("h2",{attrs:{id:"_3-push-to-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-push-to-github"}},[t._v("#")]),t._v(" 3. Push to GitHub")]),t._v(" "),s("p",[t._v('Back in your project directory, initialise it as a git directory. Otherwise, you might get the error "fatal: not a git repository (or any of the parent directories): .git"')]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Then add a remote repository with the command:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin https://github.com/seandotau/subqlHelloWorld.git\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("This basically sets your remote repository to “https://github.com/seandotau/subqlHelloWorld.git” and gives it the name “origin” which is the standard nomenclature for a remote repository in GitHub.")]),t._v(" "),s("p",[t._v("Next we add the code to our repo with the following commands:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"First commit"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("master "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root-commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a999d88"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" First commit\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" files changed, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3512")]),t._v(" insertions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" .gitignore\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" README.md\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" docker-compose.yml\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" package.json\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" project.yaml\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" schema.graphql\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" src/index.ts\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" src/mappings/mappingHandlers.ts\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" tsconfig.json\ncreate mode "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100644")]),t._v(" yarn.lock\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\nEnumerating objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(", done.\nCounting objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("/14"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nDelta compression using up to "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" threads\nCompressing objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("/13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", done.\nWriting objects: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("/14"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59.35")]),t._v(" KiB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.48")]),t._v(" MiB/s, done.\nTotal "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", reused "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nTo https://github.com/seandotau/subqlHelloWorld.git\n * "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("new branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      master -"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v('The push command means "please push my code TO the origin repo FROM my master local repo". Refreshing GitHub should show all the code in GitHub.')]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/first_commit.png",alt:"First commit"}})]),t._v(" "),s("p",[t._v("Now that you have got your code into GitHub, let's look at how we can host it in SubQuery Projects.")]),t._v(" "),s("h2",{attrs:{id:"_4-create-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-your-project"}},[t._v("#")]),t._v(" 4. Create your project")]),t._v(" "),s("p",[t._v("Navigate to "),s("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://project.subquery.network"),s("OutboundLink")],1),t._v(" and log in with your GitHub account.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/welcome_to_subquery_projects.png",alt:"Welcome to SubQuery Projects"}})]),t._v(" "),s("p",[t._v("Then create a new project,")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/subquery_create_project.png",alt:"Welcome to SubQuery Projects"}})]),t._v(" "),s("p",[t._v("And fill in the various fields with the appropriate details.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("GitHub account:")]),t._v(" If you have more than one GitHub account, select what account this project will be created under. Projects created in an GitHub organisation account are shared between members in that organisation.")]),t._v(" "),s("li",[s("strong",[t._v("Project Name:")]),t._v(" Give your project a name here.")]),t._v(" "),s("li",[s("strong",[t._v("Subtitle:")]),t._v(" Provide a subtitle for your project.")]),t._v(" "),s("li",[s("strong",[t._v("Description:")]),t._v(" Explain what your SubQuery project does.")]),t._v(" "),s("li",[s("strong",[t._v("GitHub Repository URL:")]),t._v(" This must be a valid GitHub URL to a public repository that contains your SubQuery project. The schema.graphql file must be in the root of your directory.")]),t._v(" "),s("li",[s("strong",[t._v("Hide project:")]),t._v(" If selected, this will hide the project from the public SubQuery explorer. Keep this unselected if you want to share your SubQuery with the community!")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/create_subquery_project_parameters.png",alt:"Create SubQuery parameters"}})]),t._v(" "),s("p",[t._v("When you click create, you'll be taken to your dashboard.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/subquery_project_dashboard.png",alt:"SubQuery Project dashboard"}})]),t._v(" "),s("p",[t._v("The dashboard contains lots of useful information such as the network it is using, the GitHub repository URL of the source code it is running, when it was created and last updated, and in particular the deployment details.")]),t._v(" "),s("h2",{attrs:{id:"_5-deploy-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-deploy-your-project"}},[t._v("#")]),t._v(" 5. Deploy your project")]),t._v(" "),s("p",[t._v("Now that you have created your project within SubQuery Projects, setting up the display behaviour, the next step is to deploy your project making it operational. Deploying a version triggers a new SubQuery indexing operation to start, and sets up the required query service to start accepting GraphQL requests. You can also deploy new versions to existing projects here.")]),t._v(" "),s("p",[t._v('You can choose to deploy to various environments such as a production slot or a staging slot. Here we\'ll deploy to a production slot. Clicking on the "Deploy" button brings up a screen with the following fields:')]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/deploy_production_slot.png",alt:"Deploy to production slot"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Commit Hash of new Version:")]),t._v(" From GitHub select the correct commit of the SubQuery project codebase that you want deployed")]),t._v(" "),s("li",[s("strong",[t._v("Indexer Version:")]),t._v(" This is the version of SubQuery's node service that you want to run this SubQuery on. See "),s("a",{attrs:{href:"https://www.npmjs.com/package/@subql/node",target:"_blank",rel:"noopener noreferrer"}},[t._v("@subql/node"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("strong",[t._v("Query Version:")]),t._v(" This is the version of SubQuery's query service that you want to run this SubQuery on. See "),s("a",{attrs:{href:"https://www.npmjs.com/package/@subql/query",target:"_blank",rel:"noopener noreferrer"}},[t._v("@subql/query"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v('Because we only have one commit, there is only a single option in the drop down. We\'ll also work with the latest version of the indexer and query version so we will accept the defaults and then click "Deploy Update".')]),t._v(" "),s("p",[t._v("You’ll then see your deployment in “Processing” status. Here, your code is getting deployed onto the SubQuery's managed infrastructure. Basically a server is getting spun up on demand and being provisioned for you. This will take a few minutes so time to grab a coffee!")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/deployment_processing.png",alt:"Deployment processing"}})]),t._v(" "),s("p",[t._v("The deployment is now running.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/deployment_running.png",alt:"Deployment running"}})]),t._v(" "),s("h2",{attrs:{id:"_6-testing-your-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-testing-your-project"}},[t._v("#")]),t._v(" 6. Testing your project")]),t._v(" "),s("p",[t._v('To test your project, click on the 3 ellipsis and select "View on SubQuery Explorer".')]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/view_on_subquery.png",alt:"View Subquery project"}})]),t._v(" "),s("p",[t._v('This will take you to the ever familiar "Playground" where you can click the play button and see the results of the query.')]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/subquery_playground.png",alt:"Subquery playground"}})]),t._v(" "),s("h2",{attrs:{id:"_7-bonus-step"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-bonus-step"}},[t._v("#")]),t._v(" 7. Bonus step")]),t._v(" "),s("p",[t._v('For the astute amongst us, you will recall that in the learning objectives, the last point was to run a simple GET query. To do this, we will need to grab the "Query Endpoint" displayed in the deployment details.')]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/img/query_endpoint.png",alt:"Query endpoing"}})]),t._v(" "),s("p",[t._v("You can then send a GET request to this endpoint either using your favourite client such as "),s("a",{attrs:{href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://mockoon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mockoon"),s("OutboundLink")],1),t._v(" or via cURL in your terminal. For simplicity, cURL will be shown below.")]),t._v(" "),s("p",[t._v("The curl command to run is:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://api.subquery.network/sq/seandotau/subqueryhelloworld -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query=query { starterEntities (first: 5, orderBy: CREATED_AT_DESC) { totalCount nodes { id field1 field2 field3 } } }"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("giving the results of:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"starterEntities"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"totalCount"')]),t._v(":23098,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nodes"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x29dfe9c8e5a1d51178565c2c23f65d249b548fe75a9b6d74cebab777b961b1a6"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field1"')]),t._v(":23098,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field2"')]),t._v(":null,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v(":null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xab7d3e0316a01cdaf9eda420cf4021dd53bb604c29c5136fef17088c8d9233fb"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field1"')]),t._v(":23097,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field2"')]),t._v(":null,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v(":null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x534e89bbae0857f2f07b0dea8dc42a933f9eb2d95f7464bf361d766a644d17e3"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field1"')]),t._v(":23096,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field2"')]),t._v(":null,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v(":null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xd0af03ab2000a58b40abfb96a61d312a494069de3670b509454bd06157357db6"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field1"')]),t._v(":23095,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field2"')]),t._v(":null,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v(":null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xc9f5a92f4684eb039e11dffa4b8b22c428272b2aa09aff291169f71c1ba0b0f7"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field1"')]),t._v(":23094,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field2"')]),t._v(":null,"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field3"')]),t._v(":null"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("Readability is not a concern here as you will probably have some front end code to consume and parse this JSON response.")]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this SubQuery hosted quick start we showed how quick and easy it was to take a Subql project and deploy it to "),s("a",{attrs:{href:"https://project.subquery.network",target:"_blank",rel:"noopener noreferrer"}},[t._v("SubQuery Projects"),s("OutboundLink")],1),t._v(" where all the infrastructure is provided for your convenience. There is an inbuilt playground for running various queries as well as an API endpoint for your code to integrate with.")])])}),[],!1,null,null,null);e.default=r.exports}}]);