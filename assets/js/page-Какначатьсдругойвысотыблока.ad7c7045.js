(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{705:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"как-начать-с-другои-высоты-блока"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#как-начать-с-другои-высоты-блока"}},[a._v("#")]),a._v(" Как начать с другой высоты блока?")]),a._v(" "),t("h2",{attrs:{id:"видеоинструкция"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#видеоинструкция"}},[a._v("#")]),a._v(" Видеоинструкция")]),a._v(" "),t("figure",{staticClass:"video_container"},[t("iframe",{attrs:{src:"https://www.youtube.com/embed/WSN5BaCzsbo",frameborder:"0",allowfullscreen:"true"}})]),a._v(" "),t("h2",{attrs:{id:"вступление"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#вступление"}},[a._v("#")]),a._v(" Вступление")]),a._v(" "),t("p",[a._v("По умолчанию все запускаемые проекты начинают синхронизироваться с блокчейном с генезис блока. Другими словами - с первого блока. Для больших блокчейнов это, как правило, может занять несколько дней или даже недель для полной синхронизации.")]),a._v(" "),t("p",[a._v("Чтобы запустить синхронизацию ноды SubQuery с ненулевой высоты, все, что вам нужно сделать, это изменить файл project.yaml и изменить ключ startBlock.")]),a._v(" "),t("p",[a._v("Ниже представлен файл project.yaml, в котором начальный блок установлен на 1000000")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("specVersion: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.0")]),a._v(".1\ndescription: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\nrepository: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("\nschema: ./schema.graphql\nnetwork:\n  endpoint: wss://polkadot.api.onfinality.io/public-ws\n  dictionary: https://api.subquery.network/sq/subquery/dictionary-polkadot\ndataSources:\n  - name: main\n    kind: substrate/Runtime\n    startBlock: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v("\n    mapping:\n      handlers:\n        - handler: handleBlock\n          kind: substrate/BlockHandler\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("h2",{attrs:{id:"почему-бы-не-начать-с-нуля"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#почему-бы-не-начать-с-нуля"}},[a._v("#")]),a._v(" Почему бы не начать с нуля?")]),a._v(" "),t("p",[a._v("Основная причина в том, что это может сократить время синхронизации блокчейна. Это означает, что если вас интересуют транзакции только за последние 3 месяца, вы можете синхронизировать только последние 3 месяца, что означает меньшее время ожидания, а значит вы можете быстрее начать разработку.")]),a._v(" "),t("h2",{attrs:{id:"в-чем-недостаток-старта-с-ненулевого-блока"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#в-чем-недостаток-старта-с-ненулевого-блока"}},[a._v("#")]),a._v(" В чем недостаток старта с ненулевого блока?")]),a._v(" "),t("p",[a._v("Наиболее очевидным недостатком будет то, что вы не сможете запрашивать данные из блокчейна для блоков, которых у вас нет.")]),a._v(" "),t("h2",{attrs:{id:"как-узнать-текущую-высоту-блокчеина"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#как-узнать-текущую-высоту-блокчеина"}},[a._v("#")]),a._v(" Как узнать текущую высоту блокчейна?")]),a._v(" "),t("p",[a._v("Если вы используете сеть Polkadot, вы можете посетить "),t("a",{attrs:{href:"https://polkascan.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://polkascan.io/"),t("OutboundLink")],1),a._v(', выбрать сеть, а затем просмотреть номер "Finalised Block".')]),a._v(" "),t("h2",{attrs:{id:"do-i-have-to-do-a-rebuild-or-a-codegen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-i-have-to-do-a-rebuild-or-a-codegen"}},[a._v("#")]),a._v(" Do I have to do a rebuild or a codegen?")]),a._v(" "),t("p",[a._v("No. Поскольку вы изменяете файл project.yaml, который по сути является файлом конфигурации, вам не нужно будет перестраивать или регенерировать код машинописного текста.")])])}),[],!1,null,null,null);s.default=r.exports}}]);