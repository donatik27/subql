(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{762:function(a,e,r){"use strict";r.r(e);var i=r(1),n=Object(i.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"hello-world-acıklandı"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-acıklandı"}},[a._v("#")]),a._v(" Hello World Açıklandı")]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/tr/quickstart/helloworld-localhost.html"}},[a._v("Hello World hızlı başlangıç kılavuzunda")]),a._v(", bazı basit komutları çalıştırdık ve çok hızlı bir şekilde bir örnek aldık. Bu, tüm önkoşulların yerinde olduğundan ve SubQuery'den ilk verilerinizi almak için basit bir sorgu yapmak için yerel bir oyun alanı kullanabileceğinizden emin olmanızı sağlar. Burada, tüm bu komutların ne anlama geldiğine daha yakından bakıyoruz.")],1),a._v(" "),r("h2",{attrs:{id:"subql-init"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subql-init"}},[a._v("#")]),a._v(" subql init")]),a._v(" "),r("p",[a._v("Çalıştırdığımız ilk komut "),r("code",[a._v("subql init --starter subqlHelloWorld")]),a._v(" idi.")]),a._v(" "),r("p",[a._v("Bu ağır kaldırma yapar ve sizin için bir sürü dosya oluşturur. "),r("RouterLink",{attrs:{to:"/tr/quickstart/quickstart.html#configure-and-build-the-starter-project"}},[a._v("official documentation")]),a._v(" belirtildiği gibi, esas olarak aşağıdaki dosyalar üzerinde çalışacaksınız:")],1),a._v(" "),r("ul",[r("li",[a._v("The Manifest in "),r("code",[a._v("project.yaml")])]),a._v(" "),r("li",[r("code",[a._v("schema.graphql")]),a._v("'daki GraphQL Şeması")]),a._v(" "),r("li",[r("code",[a._v("src/mappings/")]),a._v(" dizinindeki Eşleme işlevleri")])]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/main_subql_files.png",alt:"anahtar subql dosyaları"}})]),a._v(" "),r("p",[a._v("Bu dosyalar yaptığımız her şeyin özü. Bu nedenle, başka bir makalede bu dosyalara daha fazla zaman ayıracağız. Şimdilik, şemanın kullanıcıların SubQuery API'sinden isteyebileceği verilerin bir açıklamasını, \"yapılandırma\" türü parametrelerini içeren proje yaml dosyasını ve elbette verileri dönüştüren işlevleri içeren typescript içeren mappingHandlers'ı içerdiğini bilin.")]),a._v(" "),r("h2",{attrs:{id:"yarn-install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-install"}},[a._v("#")]),a._v(" yarn install")]),a._v(" "),r("p",[a._v("Bir sonraki yaptığımız şey "),r("code",[a._v("yarn install")]),a._v(". "),r("code",[a._v("npm yükleme")]),a._v(" da kullanılabilir.")]),a._v(" "),r("blockquote",[r("p",[a._v("Kısa bir tarih dersi. Node Package Manager veya npm ilk olarak 2010 yılında piyasaya sürüldü ve JavaScript geliştiricileri arasında son derece popüler bir paket yöneticisidir. Node.js sisteminize her yüklediğinizde otomatik olarak yüklenen varsayılan pakettir. İplik ilk olarak 2016 yılında Facebook tarafından npm (o zaman) ile çalışmanın bazı performans ve güvenlik eksikliklerini gidermek amacıyla piyasaya sürüldü.")])]),a._v(" "),r("p",[a._v("İpliğin yaptığı şey "),r("code",[a._v("package.json")]),a._v(" dosyasına bakmak ve diğer çeşitli bağımlılıkları indirmektir. "),r("code",[a._v("package.json")]),a._v(" dosyasına baktığınızda, çok fazla bağımlılık yok gibi görünüyor, ancak komutu çalıştırdığınızda 18,983 dosyanın eklendiğinde fark edeceksiniz. Bunun nedeni, her bağımlılığın kendi bağımlılıklarının da olmasıdır.")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/dependencies.png",alt:"anahtar subql dosyaları"}})]),a._v(" "),r("h2",{attrs:{id:"iplik-kodgeni"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#iplik-kodgeni"}},[a._v("#")]),a._v(" iplik kodgeni")]),a._v(" "),r("p",[a._v("Daha sonra "),r("code",[a._v("yarn codegen")]),a._v(" veya "),r("code",[a._v("npm run-script codegen")]),a._v(" çalıştırdık. Bunun yaptığı şey GraphQL şemasını ("),r("code",[a._v("schema.graphql")]),a._v(") getirmek ve ilişkili typescript model dosyalarını oluşturmaktır (bu nedenle çıktı dosyalarının bir .ts uzantısı olacaktır). Oluşturulan bu dosyaların hiçbirini asla değiştirmemelisiniz, yalnızca kaynak "),r("code",[a._v("schema.graphql")]),a._v(" dosyasını değiştirmelisiniz.")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/typescript.png",alt:"anahtar subql dosyaları"}})]),a._v(" "),r("h2",{attrs:{id:"yarn-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn-build"}},[a._v("#")]),a._v(" yarn build")]),a._v(" "),r("p",[r("code",[a._v("yarn yapı")]),a._v(" veya "),r("code",[a._v("npm run-script build")]),a._v(" yürütüldü. Bu deneyimli programcılar için tanıdık olmalıdır. Dağıtıma hazırlanan kod optimizasyonu gibi şeyleri gerçekleştiren bir dağıtım klasörü oluşturur.")]),a._v(" "),r("p",[r("img",{attrs:{src:"/assets/img/distribution_folder.png",alt:"anahtar subql dosyaları"}})]),a._v(" "),r("h2",{attrs:{id:"docker-compose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" docker-compose")]),a._v(" "),r("p",[a._v("Son adım, birleşik docker komutu "),r("code",[a._v("docker-compose pull && docker-compose up")]),a._v(" (ayrı olarak da çalıştırılabilir). "),r("code",[a._v("pull")]),a._v(" komutu Docker Hub'dan gerekli tüm görüntüleri alır ve "),r("code",[a._v("up")]),a._v(" komutu kapsayıcıyı başlatır.")]),a._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-compose pull\nPulling postgres        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\nPulling subquery-node   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\nPulling graphql-engine  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("p",[a._v("Kapsayıcı başlatıldığında, terminalin düğümün ve GraphQL motorunun durumunu gösteren çok sayıda metin tükürdüğünü görürsünüz. İşte o zaman:")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("subquery-node_1   | 2021-06-06T02:04:25.490Z <fetch> INFO fetch block [1, 100]\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("SubQuery düğümünün eşitlemeye başladığını bildiğinizi.")]),a._v(" "),r("h2",{attrs:{id:"ozet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ozet"}},[a._v("#")]),a._v(" Özet")]),a._v(" "),r("p",[a._v("Şimdi örtünün altında neler olduğuna dair bir fikir edindiğinize göre, soru buradan nereye? Kendinize güveniyorsanız, "),r("RouterLink",{attrs:{to:"/tr/create/introduction.html"}},[a._v("create a project")]),a._v(" nasıl oluşturabilirsiniz ve üç anahtar dosya hakkında daha fazla bilgi edinebilirsiniz. Bildirim dosyası, GraphQL şeması ve eşlemeler dosyası.")],1),a._v(" "),r("p",[a._v("Aksi takdirde, bu Hello World örneğini SubQuery'nin barındırılan altyapısında nasıl çalıştırabileceğimize baktığımız öğreticiler bölümümüze devam edin, başlangıç bloğunu değiştirmeye bakacağız ve hazır ve açık kaynaklı projeler çalıştırarak SubQuery projelerini çalıştırma konusunda daha derin bir dalış yapacağız.")])])}),[],!1,null,null,null);e.default=n.exports}}]);