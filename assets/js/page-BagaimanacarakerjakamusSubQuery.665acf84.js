(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{574:function(a,n,i){"use strict";i.r(n);var e=i(1),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,i=a._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"bagaimana-cara-kerja-kamus-subquery"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-cara-kerja-kamus-subquery"}},[a._v("#")]),a._v(" Bagaimana cara kerja kamus SubQuery?")]),a._v(" "),i("p",[a._v("Seluruh ide dari proyek kamus generik adalah untuk mengindeks semua data dari blockchain dan merekam peristiwa, ekstrinsik, dan jenisnya (modul dan metode) dalam database dalam urutan tinggi blok. Proyek lain kemudian dapat menanyakan titik akhir "),i("code",[a._v("network.dictionary")]),a._v(" ini alih-alih "),i("code",[a._v("network.dictionary")]),a._v(" default yang ditentukan dalam file manifes.")]),a._v(" "),i("p",[a._v("Titik akhir "),i("code",[a._v("network.dictionary")]),a._v(" adalah parameter opsional yang jika ada, SDK akan secara otomatis mendeteksi dan menggunakannya. "),i("code",[a._v("network.endpoint")]),a._v(" adalah wajib dan tidak akan dikompilasi jika tidak ada.")]),a._v(" "),i("p",[a._v("Mengambil proyek kamus SubQuery sebagai contoh, file skema mendefinisikan 3 entitas; ekstrinsik, peristiwa, specVersion. 3 entitas ini masing-masing berisi 6, 4, dan 2 bidang. Ketika proyek ini dijalankan, bidang ini tercermin dalam tabel database.")]),a._v(" "),i("p",[i("img",{attrs:{src:"/assets/img/extrinsics_table.png",alt:"tabel ekstrinsik"}}),a._v(" "),i("img",{attrs:{src:"/assets/img/events_table.png",alt:"tabel peristiwa"}}),a._v(" "),i("img",{attrs:{src:"/assets/img/specversion_table.png",alt:"tabel spekversi"}})]),a._v(" "),i("p",[a._v("Data dari blockchain kemudian disimpan dalam tabel ini dan diindeks untuk kinerja. Proyek kemudian di-host di Proyek SubQuery dan titik akhir API tersedia untuk ditambahkan ke file manifes.")]),a._v(" "),i("h2",{attrs:{id:"bagaimana-cara-memasukkan-kamus-ke-dalam-proyek-anda"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-cara-memasukkan-kamus-ke-dalam-proyek-anda"}},[a._v("#")]),a._v(" Bagaimana cara memasukkan kamus ke dalam proyek Anda?")]),a._v(" "),i("p",[a._v("Tambah "),i("code",[a._v("kamus: https://api.subquery.network/sq/subquery/dictionary-polkadot")]),a._v(" ke bagian jaringan manifes. Misalnya:")]),a._v(" "),i("div",{staticClass:"language-shell line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-shell"}},[i("code",[a._v("jaringan:\n  titik akhir: wss://polkadot.api.onfinality.io/public-ws\n  kamus: https://api.subquery.network/sq/subquery/dictionary-polkadot\n")])]),a._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[a._v("1")]),i("br"),i("span",{staticClass:"line-number"},[a._v("2")]),i("br"),i("span",{staticClass:"line-number"},[a._v("3")]),i("br")])]),i("h2",{attrs:{id:"apa-yang-terjadi-jika-kamus-tidak-digunakan"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#apa-yang-terjadi-jika-kamus-tidak-digunakan"}},[a._v("#")]),a._v(" Apa yang terjadi jika kamus TIDAK digunakan?")]),a._v(" "),i("p",[a._v("Ketika kamus TIDAK digunakan, pengindeks akan mengambil setiap blok data melalui api polkadot sesuai dengan ukuran batch bendera yang 100 secara default, dan menempatkan ini dalam buffer untuk diproses. Kemudian, pengindeks mengambil semua blok ini dari buffer dan saat memproses data blok, memeriksa apakah peristiwa dan ekstrinsik dalam blok ini cocok dengan filter yang ditentukan pengguna.")]),a._v(" "),i("h2",{attrs:{id:"apa-yang-terjadi-ketika-kamus-is-digunakan"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#apa-yang-terjadi-ketika-kamus-is-digunakan"}},[a._v("#")]),a._v(" Apa yang terjadi ketika kamus IS digunakan?")]),a._v(" "),i("p",[a._v("Ketika kamus IS digunakan, pengindeks pertama-tama akan mengambil panggilan dan filter peristiwa sebagai parameter dan menggabungkannya ke dalam kueri GraphQL. Kemudian menggunakan API kamus untuk mendapatkan daftar ketinggian blok yang relevan saja yang berisi peristiwa dan ekstrinsik tertentu. Seringkali ini secara substansial kurang dari 100 jika default digunakan.")]),a._v(" "),i("p",[a._v("Misalnya, bayangkan situasi di mana Anda mengindeks peristiwa transfer. Tidak semua blok memiliki event ini (pada gambar di bawah tidak ada event transfer di blok 3 dan 4).")]),a._v(" "),i("p",[i("img",{attrs:{src:"/assets/img/dictionary_blocks.png",alt:"blok kamus"}})]),a._v(" "),i("p",[a._v("Kamus memungkinkan proyek Anda untuk melewati ini jadi daripada mencari di setiap blok untuk acara transfer, itu melompat ke hanya blok 1, 2, dan 5. Ini karena kamus adalah referensi pra-komputasi untuk semua panggilan dan acara di masing-masing memblokir.")]),a._v(" "),i("p",[a._v('Ini berarti bahwa menggunakan kamus dapat mengurangi jumlah data yang diperoleh pengindeks dari rantai dan mengurangi jumlah blok "yang tidak diinginkan" yang disimpan di buffer lokal. Tetapi dibandingkan dengan metode tradisional, ini menambahkan langkah tambahan untuk mendapatkan data dari API kamus.')]),a._v(" "),i("h2",{attrs:{id:"kapan-kamus-tidak-berguna"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kapan-kamus-tidak-berguna"}},[a._v("#")]),a._v(" Kapan kamus TIDAK berguna?")]),a._v(" "),i("p",[a._v("Ketika penangan blok digunakan untuk mengambil data dari rantai, setiap blok perlu diproses. Oleh karena itu, menggunakan kamus dalam hal ini tidak memberikan keuntungan apa pun dan pengindeks akan secara otomatis beralih ke pendekatan non-kamus default.")]),a._v(" "),i("p",[a._v("Juga, ketika berhadapan dengan peristiwa atau ekstrinsik yang terjadi atau ada di setiap blok seperti "),i("code",[a._v("timestamp.set")]),a._v(", menggunakan kamus tidak akan menawarkan keuntungan tambahan.")])])}),[],!1,null,null,null);n.default=t.exports}}]);