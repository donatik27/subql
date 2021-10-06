(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{827:function(t,n,c){"use strict";c.r(n);var h=c(1),a=Object(h.a)({},(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"giai-thich-hello-world"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#giai-thich-hello-world"}},[t._v("#")]),t._v(" Giải thích Hello World")]),t._v(" "),c("p",[t._v("Trong "),c("RouterLink",{attrs:{to:"/vi/quickstart/helloworld-localhost.html"}},[t._v("hướng dẫn bắt đầu nhanh Hello World")]),t._v(", chúng tôi đã chạy qua một số lệnh đơn giản và rất nhanh chóng có một ví dụ về thiết lập và chạy. Điều này cho phép bạn đảm bảo rằng bạn đã có sẵn tất cả các điều kiện tiên quyết và có thể sử dụng một sân chơi cục bộ để thực hiện một truy vấn đơn giản để lấy dữ liệu đầu tiên từ SubQuery. Ở đây, chúng ta xem xét kỹ hơn ý nghĩa của tất cả các lệnh đó.")],1),t._v(" "),c("h2",{attrs:{id:"subql-init"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#subql-init"}},[t._v("#")]),t._v(" subql init")]),t._v(" "),c("p",[t._v("Lệnh đầu tiên chúng tôi chạy là "),c("code",[t._v("subql init --starter subqlHelloWorld")]),t._v(".")]),t._v(" "),c("p",[t._v("Điều này tạo ra công việc nặng nhọc và một loạt các tệp cho bạn. Như đã lưu ý trong "),c("RouterLink",{attrs:{to:"/vi/quickstart/quickstart.html#configure-and-build-the-starter-project"}},[t._v("tài liệu chính thức")]),t._v(", bạn chủ yếu sẽ làm việc trên các tệp sau:")],1),t._v(" "),c("ul",[c("li",[t._v("Tệp kê khai trong "),c("code",[t._v("project.yaml")])]),t._v(" "),c("li",[t._v("Lược đồ GraphQL trong "),c("code",[t._v("schema.graphql")])]),t._v(" "),c("li",[t._v("Các chức năng ánh xạ trong thư mục "),c("code",[t._v("src/mappings/")])])]),t._v(" "),c("p",[c("img",{attrs:{src:"/assets/img/main_subql_files.png",alt:"các tệp chính của subql"}})]),t._v(" "),c("p",[t._v('Những tệp này là cốt lõi của mọi thứ chúng tôi làm. Do đó, chúng tôi sẽ dành nhiều thời gian hơn cho các tệp này trong một bài viết khác. Mặc dù vậy, giờ bạn chỉ cần biết rằng lược đồ chứa mô tả dữ liệu mà người dùng có thể yêu cầu từ API SubQuery, tệp dự án yaml chứa các tham số kiểu "cấu hình" và tất nhiên là mappingHandlers chứa các typecript chứa các hàm biến đổi dữ liệu.')]),t._v(" "),c("h2",{attrs:{id:"yarn-install"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#yarn-install"}},[t._v("#")]),t._v(" yarn install")]),t._v(" "),c("p",[t._v("Điều tiếp theo chúng tôi làm là "),c("code",[t._v("yarn install")]),t._v(". "),c("code",[t._v("npm install")]),t._v(" cũng có thể được sử dụng.")]),t._v(" "),c("blockquote",[c("p",[t._v("Một bài học lịch sử ngắn. Node Package Manager hay npm lần đầu tiên được phát hành vào năm 2010 và là một trình quản lý gói cực kỳ phổ biến trong số các nhà phát triển JavaScript. Đây là gói mặc định được cài đặt tự động bất cứ khi nào bạn cài đặt Node.js trên hệ thống của mình. Yarn ban đầu được Facebook phát hành vào năm 2016 với mục đích giải quyết một số thiếu sót về hiệu suất và bảo mật khi làm việc với npm (tại thời điểm đó).")])]),t._v(" "),c("p",[t._v("Những gì yarn làm là xem tệp "),c("code",[t._v("package.json")]),t._v(" và tải xuống nhiều phần phụ thuộc khác. Khi nhìn vào tệp "),c("code",[t._v("package.json")]),t._v(", có vẻ như không có nhiều tệp phụ thuộc, nhưng khi bạn chạy lệnh sẽ thấy 18,983 tệp đã được thêm vào. Điều này là do mỗi phụ thuộc sẽ có các phụ thuộc riêng của nó.")]),t._v(" "),c("p",[c("img",{attrs:{src:"/assets/img/dependencies.png",alt:"các tệp chính của subql"}})]),t._v(" "),c("h2",{attrs:{id:"yarn-codegen"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#yarn-codegen"}},[t._v("#")]),t._v(" yarn codegen")]),t._v(" "),c("p",[t._v("Sau đó, chúng tôi chạy "),c("code",[t._v("mã tạo yarn")]),t._v(" hoặc "),c("code",[t._v("npm run-script codegen")]),t._v(". Điều này giúp tìm nạp giản đồ GraphQL (trong "),c("code",[t._v("schema.graphql")]),t._v(") và tạo các tệp mô hình typecript được liên kết (Do đó, các tệp đầu ra sẽ có phần mở rộng .ts). Bạn không bao giờ được thay đổi bất kỳ tệp nào trong số các tệp đã tạo này, chỉ thay đổi tệp "),c("code",[t._v("schema.graphql")]),t._v(" nguồn.")]),t._v(" "),c("p",[c("img",{attrs:{src:"/assets/img/typescript.png",alt:"các tệp chính của subql"}})]),t._v(" "),c("h2",{attrs:{id:"yarn-build"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#yarn-build"}},[t._v("#")]),t._v(" yarn build")]),t._v(" "),c("p",[t._v("Sau đó, "),c("code",[t._v("yarn build")]),t._v(" hoặc "),c("code",[t._v("npm run-script build")]),t._v(" đã được thực thi. Điều này sẽ quen thuộc đối với các lập trình viên dày dạn kinh nghiệm. Nó tạo ra một thư mục phân phối thực hiện những việc như tối ưu hóa mã chuẩn bị cho việc triển khai.")]),t._v(" "),c("p",[c("img",{attrs:{src:"/assets/img/distribution_folder.png",alt:"các tệp chính của subql"}})]),t._v(" "),c("h2",{attrs:{id:"docker-compose"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker-compose")]),t._v(" "),c("p",[t._v("Bước cuối cùng là lệnh docker kết hợp "),c("code",[t._v("docker-compose kéo && docker-compose lên")]),t._v(" (cũng có thể chạy riêng). Lệnh "),c("code",[t._v("pull")]),t._v(" lấy tất cả các hình ảnh cần thiết từ Docker Hub và lệnh "),c("code",[t._v("up")]),t._v(" khởi động vùng chứa.")]),t._v(" "),c("div",{staticClass:"language-shell line-numbers-mode"},[c("pre",{pre:!0,attrs:{class:"language-shell"}},[c("code",[c("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" docker-compose pull\nPulling postgres        "),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),c("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nPulling subquery-node   "),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),c("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nPulling graphql-engine  "),c("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". "),c("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])]),t._v(" "),c("div",{staticClass:"line-numbers-wrapper"},[c("span",{staticClass:"line-number"},[t._v("1")]),c("br"),c("span",{staticClass:"line-number"},[t._v("2")]),c("br"),c("span",{staticClass:"line-number"},[t._v("3")]),c("br"),c("span",{staticClass:"line-number"},[t._v("4")]),c("br")])]),c("p",[t._v("Khi vùng chứa được khởi động, bạn sẽ thấy thiết bị đầu cuối xuất ra rất nhiều văn bản hiển thị trạng thái của nút và công cụ GraphQL. Đó là khi bạn thấy:")]),t._v(" "),c("div",{staticClass:"language- line-numbers-mode"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[t._v("subquery-node_1   | 2021-06-06T02:04:25.490Z <fetch> INFO fetch block [1, 100]\n")])]),t._v(" "),c("div",{staticClass:"line-numbers-wrapper"},[c("span",{staticClass:"line-number"},[t._v("1")]),c("br")])]),c("p",[t._v("mà bạn biết rằng nút SubQuery đã bắt đầu đồng bộ hóa.")]),t._v(" "),c("h2",{attrs:{id:"tom-luoc"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#tom-luoc"}},[t._v("#")]),t._v(" Tóm lược")]),t._v(" "),c("p",[t._v("Bây giờ bạn đã có một cái nhìn sâu sắc về những gì đang xảy ra bên dưới, câu hỏi đặt ra là bắt đầu từ đâu? Nếu bạn cảm thấy tự tin, bạn có thể bắt đầu tìm hiểu về cách "),c("RouterLink",{attrs:{to:"/vi/create/introduction.html"}},[t._v("tạo một dự án")]),t._v(" và tìm hiểu thêm về ba tệp chính. Tệp kê khai, lược đồ GraphQL và tệp ánh xạ.")],1),t._v(" "),c("p",[t._v("Nếu không, hãy tiếp tục xem hướng dẫn, nơi chúng tôi xem xét cách có thể chạy ví dụ Hello World này trên cơ sở hạ tầng được lưu trữ của SubQuery, chúng tôi sẽ xem xét việc sửa đổi khối bắt đầu và sẽ đi sâu hơn về việc chạy các dự án SubQuery bằng cách chạy sẵn có và các dự án mã nguồn mở.")])])}),[],!1,null,null,null);n.default=a.exports}}]);