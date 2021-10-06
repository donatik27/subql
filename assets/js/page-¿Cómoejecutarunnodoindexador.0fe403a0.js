(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{546:function(e,a,s){"use strict";s.r(a);var r=s(1),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"¿como-ejecutar-un-nodo-indexador"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#¿como-ejecutar-un-nodo-indexador"}},[e._v("#")]),e._v(" ¿Cómo ejecutar un nodo indexador?")]),e._v(" "),s("h2",{attrs:{id:"guia-en-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guia-en-video"}},[e._v("#")]),e._v(" Guía en vídeo")]),e._v(" "),s("figure",{staticClass:"video_container"},[s("iframe",{attrs:{src:"https://www.youtube.com/embed/QfNsR12ItnA",frameborder:"0",allowfullscreen:"true"}})]),e._v(" "),s("h2",{attrs:{id:"introduccion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),s("p",[e._v("Ejecutar un nodo indexador es otra opción fuera de usar Docker o tener un proyecto alojado para usted en "),s("a",{attrs:{href:"https://project.subquery.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SubQuery Projects"),s("OutboundLink")],1),e._v(". Requiere más tiempo y esfuerzo, pero mejorará su comprensión de cómo trabaja SubQuery bajo las cubiertas.")]),e._v(" "),s("h2",{attrs:{id:"postgres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#postgres"}},[e._v("#")]),e._v(" Postgres")]),e._v(" "),s("p",[e._v("Ejecutar un nodo indexador en su infraestructura requerirá la configuración de una base de datos de Postgres. Puede instalar Postgres desde "),s("a",{attrs:{href:"https://www.postgresql.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("aquí"),s("OutboundLink")],1),e._v(" y asegurarse de que la versión es 12 o mayor.")]),e._v(" "),s("h2",{attrs:{id:"instalar-subql-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalar-subql-node"}},[e._v("#")]),e._v(" Instalar subql/node")]),e._v(" "),s("p",[e._v("Luego para ejecutar un nodo SubQuery, ejecute el siguiente comando:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @subql/node\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("El parámetro -g significa instalarlo globalmente, lo que significa que en OSX, la ubicación será /usr/local/lib/node_modules.")]),e._v(" "),s("p",[e._v("Una vez instalado, puede comprobar la versión ejecutando:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" subql-node --version\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.19")]),e._v(".1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"configurando-la-base-de-datos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurando-la-base-de-datos"}},[e._v("#")]),e._v(" Configurando la Base de Datos")]),e._v(" "),s("p",[e._v("A continuación, necesita configurar las siguientes variables de entorno:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DB_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("postgres\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DB_PASS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("postgres\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DB_DATABASE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("postgres\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5432")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Por supuesto, si tiene diferentes valores para las claves de arriba, por favor ajuste en consecuencia. Tenga en cuenta que el comando "),s("code",[e._v("env")]),e._v(" mostrará las variables de entorno actuales y que este proceso sólo establece estos valores temporalmente. Es decir, sólo son válidos durante la sesión de la terminal. Para establecerlos permanentemente, guárdelos en tu ~/bash_profile en su lugar.")]),e._v(" "),s("h2",{attrs:{id:"indexar-un-proyecto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexar-un-proyecto"}},[e._v("#")]),e._v(" Indexar un proyecto")]),e._v(" "),s("p",[e._v("Para comenzar a indexar un proyecto, navega en la carpeta de tu proyecto y ejecuta el siguiente comando:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("subql-node -f "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Si no tienes un proyecto práctico, "),s("code",[e._v("git clone https://github.com/subquery/subql-helloworld")]),e._v(". Deberías ver el nodo indexador patear a la vida y comenzar a indexar bloques.")]),e._v(" "),s("h2",{attrs:{id:"inspeccion-de-postgres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inspeccion-de-postgres"}},[e._v("#")]),e._v(" Inspección de Postgres")]),e._v(" "),s("p",[e._v("Si navega a Postgres, verá dos tablas creadas. "),s("code",[e._v("public.subqueries")]),e._v(" y "),s("code",[e._v("subquery_1.starter_entities")]),e._v(".")]),e._v(" "),s("p",[s("code",[e._v("public.subqueries")]),e._v(' sólo contiene 1 fila de la que el indexador comprueba al inicio para "entender el estado actual" para que sepa desde dónde continuar. La tabla '),s("code",[e._v("starter_entities")]),e._v(" contiene los índices. Para ver los datos, ejecute "),s("code",[e._v("select (*) desde subquery_1.starter_entities")]),e._v(".")])])}),[],!1,null,null,null);a.default=t.exports}}]);