(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{746:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bildirim-dosyası"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bildirim-dosyası"}},[a._v("#")]),a._v(" Bildirim Dosyası")]),a._v(" "),s("p",[a._v("Manifest "),s("code",[a._v("project.yaml")]),a._v(" dosyası projenizin giriş noktası olarak görülebilir ve SubQuery'nin zincir verilerini nasıl dizine alacağı ve dönüştüreceğine ilişkin ayrıntıların çoğunu tanımlar.")]),a._v(" "),s("p",[a._v("Bildirim YAML veya JSON biçiminde olabilir. Bu belgede, tüm örneklerde YAML kullanacağız. Aşağıda temel "),s("code",[a._v("project.yaml")]),a._v(" standart bir örneği verilmiştir.")]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.1"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("açıklama")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://github.com/subquery/subql-starter"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("şema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./schema.graphql"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ağ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uç nokta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wss://polkadot.api.onfinality.io/public-ws"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# İsteğe bağlı olarak, işlemeyi hızlandırmak için tam zincir sözlüğün HTTP uç noktasını sağlayın")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sözlük")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(' "https'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v('//api.subquery.network/sq/subquery/dictionary-polkadot"  veri Kaynakları')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("adı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ana\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/Çalışma Zamanı\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eşleme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" handleBlock\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/BlockHandler\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" handleEvent\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/EventHandler\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Filter isteğe bağlıdır, ancak olay işlemeyi hızlandırması önerilir")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("modül")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dengeler\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("yöntem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Depozito\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" handleCall\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/CallHandler\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("ul",[s("li",[s("code",[a._v("network.endpoint")]),a._v(", dizine eklenecek blok zincirinin wss veya ws uç noktasını tanımlar - "),s("strong",[a._v("Bu tam bir arşiv düğümü olmalıdır")]),a._v(".")]),a._v(" "),s("li",[s("code",[a._v("network.dictionary")]),a._v(" isteğe bağlı olarak işlemeyi hızlandırmak için tam zincir sözlüğün HTTP uç noktasını sağlar - bkz"),s("RouterLink",{attrs:{to:"/tr/tutorials_examples/dictionary.html"}},[a._v(" Indexer çalıştırma")]),a._v(".")],1),a._v(" "),s("li",[s("code",[a._v("dataSources")]),a._v(" filtre uygulanacak ve ayıklanacak verileri ve uygulanacak veri dönüşümü için eşleme işlevi işleyicisinin konumunu tanımlar.\n"),s("ul",[s("li",[s("code",[a._v("kind")]),a._v(" şimdilik yalnızca "),s("code",[a._v("substrate/Runtime")]),a._v(" destekler.")]),a._v(" "),s("li",[s("code",[a._v("startBlock")]),a._v(" dizine eklenmeye başlanmasının blok yüksekliğini belirtir.")]),a._v(" "),s("li",[s("code",[a._v("filter")]),a._v(", ağ uç noktası belirtimi adına göre yürütülecek veri kaynağına filtre uygular, bkz <>1>network filtreleri")]),a._v(" "),s("li",[s("code",[a._v("mapping.handlers")]),a._v(" tüm "),s("RouterLink",{attrs:{to:"/tr/create/mapping.html"}},[a._v("mapping işlevlerini")]),a._v(" ve bunlara karşılık gelen işleyici türlerini ek "),s("a",{attrs:{href:"#mapping-filters"}},[a._v("mapping filtreleri")]),a._v(" ile listeler.")],1)])])]),a._v(" "),s("h2",{attrs:{id:"ag-filtreleri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ag-filtreleri"}},[a._v("#")]),a._v(" Ağ Filtreleri")]),a._v(" "),s("p",[a._v("Genellikle kullanıcı bir SubQuery oluşturur ve bunu hem testnet hem de mainnet ortamları (örneğin Polkadot ve Kusama) için yeniden kullanmayı bekler. Ağlar arasında, çeşitli seçeneklerin farklı olması muhtemeldir (örneğin, dizin başlangıç bloğu). Bu nedenle, kullanıcıların her veri kaynağı için farklı ayrıntılar tanımlamasına izin veririz, bu da bir SubQuery projesinin birden çok ağda hala kullanılabileceği anlamına gelir.")]),a._v(" "),s("p",[a._v("Kullanıcılar, her ağda hangi veri kaynağının çalıştıracağına karar vermek için "),s("code",[a._v("dataSources")]),a._v(" "),s("code",[a._v("filter")]),a._v(" ekleyebilir.")]),a._v(" "),s("p",[a._v("Aşağıda, hem Polkadot hem de Kusama ağları için farklı veri kaynaklarını gösteren bir örnek verilmiştir.")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ağ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uç nokta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wss://polkadot.api.onfinality.io/public-ws"')]),a._v("\n\nArtıklığı önlemek için şablon "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Create")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tanımlar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eşleme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" &\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" handleBlock\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("substrat/BlockHandlerveri Kaynakları")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("adı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" polkadotRuntime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/Çalışma Zamanı\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Optional")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" polkadot\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("haritalama")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("*mymapping")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#use şablonu burada")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("adı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kusamaRuntime\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/Çalışma Zamanı\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kusama\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12000")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eşleme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token important"}},[a._v("*mymapping")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# yeniden kullanabilir veya değiştirebilir")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br")])]),s("h2",{attrs:{id:"esleme-filtreleri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esleme-filtreleri"}},[a._v("#")]),a._v(" Eşleme Filtreleri")]),a._v(" "),s("p",[a._v("Eşleme filtreleri, hangi bloğun, olayın veya dış öğenin bir eşleme işleyicisini tetikleyeceğine karar vermek için son derece kullanışlı bir özelliktir.")]),a._v(" "),s("p",[a._v("Yalnızca filtre koşullarını karşılayan gelen veriler eşleme işlevleri tarafından işlenir. Eşleme filtreleri isteğe bağlıdır, ancak SubQuery projeniz tarafından işlenen veri miktarını önemli ölçüde azalttıkları ve dizin oluşturma performansını artıracakları için önerilir.")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[a._v("Çağrı Işleyicisi'nden "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Example filtresi")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("modül")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dengeler\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("yöntem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Depozito\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("başarı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("Aşağıdaki tabloda, farklı işleyiciler tarafından desteklenen filtreler açıklanmaktadır.")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Işleyicisi")]),a._v(" "),s("th",[a._v("Desteklenen filtre")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/tr/create/mapping.html#block-handler"}},[a._v("Blok işleyicisi")])],1),a._v(" "),s("td",[s("code",[a._v("spec Sürümü")])])]),a._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/tr/create/mapping.html#event-handler"}},[a._v("Olay İşleyicisi")])],1),a._v(" "),s("td",[s("code",[a._v("module")]),a._v(","),s("code",[a._v("method")])])]),a._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/tr/create/mapping.html#call-handler"}},[a._v("Çağrı Işleyicisi")])],1),a._v(" "),s("td",[s("code",[a._v("module")]),a._v(","),s("code",[a._v("method")]),a._v(" ,"),s("code",[a._v("sasası")])])])])]),a._v(" "),s("ul",[s("li",[a._v("Modül ve yöntem filtreleri herhangi bir substrat tabanlı zincirde desteklenir.")]),a._v(" "),s("li",[s("code",[a._v("success")]),a._v(" filtresi bir boole değeri alır ve dış çizgiyi başarı durumuna göre filtrelemek için kullanılabilir.")]),a._v(" "),s("li",[s("code",[a._v("specVersion")]),a._v(" filtresi, bir substrat bloğunun belirtim sürüm aralığını belirtir. Aşağıdaki örneklerde sürüm aralıklarının nasıl ayarlandırılacağı açıklanmaktadır.")])]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Index blok ile specVersion 23 ile 24 (dahil) arasında.")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Index bloğu specVersion büyük veya eşit 100.")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token null important"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Index bloğu specVersion küçük veya eşit 23.")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"ozel-zincirler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ozel-zincirler"}},[a._v("#")]),a._v(" Özel Zincirler")]),a._v(" "),s("p",[s("code",[a._v("project.yaml")]),a._v(" zincir türlerini de dahil larak özel zincirlerden veri dizine ekleyebilirsiniz. Bu blok zinciri tarafından desteklenen belirli türleri "),s("code",[a._v("network.types")]),a._v(" bildirin. Substrat çalışma zamanı modülleri tarafından kullanılan ek türleri destekliyoruz.")]),a._v(" "),s("p",[s("code",[a._v("typesAlias")]),a._v(", "),s("code",[a._v("typesBundle")]),a._v(", "),s("code",[a._v("typesChain")]),a._v(" ve "),s("code",[a._v("typesSpec")]),a._v(" da desteklenir.")]),a._v(" "),s("div",{staticClass:"language-yml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.0.1"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("açıklama")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bu subquery Kitty\'nin doğum bilgilerini dizine alır"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://github.com/onfinality-io/subql-examples"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("şema")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./schema.graphql"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ağ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uç nokta")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ws://host.kittychain.io/public-ws"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("türleri")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v('"KittyIndex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"u32"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v('"Kedicik"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"[u8; 16]"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# typesChain: { zincir: { Type5: 'example' } }")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# typesSpec: { spec:  { Type6: 'example' } }")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("veri Kaynakları")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("adı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" çalışma zamanı\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/Çalışma Zamanı\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("startBlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Optional")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("specName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kitty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("chain \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("eşleme")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("Işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("işleyici")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" handleKittyBred\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tür")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" substrat/CallHandler\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filtre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("modül")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" kedicikler\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("yöntem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" cins\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("başarı")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);