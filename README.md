# 🌲 HƯỚNG DẪN DÀNH CHO NGƯỜI QUẢN TRỊ (README)
### Website Giới thiệu & Quảng bá Du lịch Tuyên Quang - "Miền di sản giữa đại ngàn"

Chào bạn! Đây là website quảng bá du lịch Tuyên Quang được xây dựng với kiến trúc tĩnh hiện đại (**HTML5, CSS3, JavaScript thuần**). 

**Ưu điểm vượt trội:**
- ✅ **Không cần cài đặt phức tạp, không cần cơ sở dữ liệu hay máy chủ backend.**
- ✅ **Chạy được ngay trên máy tính của bạn chỉ bằng một cú nhấp đúp chuột.**
- ✅ **Tương thích hoàn hảo trên Điện thoại (Mobile), Máy tính bảng (Tablet) và Máy tính bàn (Desktop).**
- ✅ **Dễ dàng đưa lên Internet hoàn toàn MIỄN PHÍ 100% vĩnh viễn.**

---

## 📁 CẤU TRÚC THƯ MỤC CỦA WEBSITE

```text
du-lich-tuyen-quang/
│
├── index.html        # Trang giao diện chính của website
├── favicon.svg       # Biểu tượng non nước thu nhỏ trên thanh trình duyệt
├── robots.txt        # File cấu hình tìm kiếm Google (SEO)
├── sitemap.xml       # Sơ đồ trang web giúp Google lập chỉ mục nhanh
├── SOURCES.md        # Nguồn gốc thông tin và bản quyền tư liệu
├── README.md         # Bản hướng dẫn chi tiết này
│
├── css/
│   └── style.css     # Toàn bộ màu sắc, giao diện và hiệu ứng đẹp mắt
│
├── js/
│   ├── data.js       # ⭐ NƠI CHỨA NỘI DUNG (Chữ, thông tin địa điểm, ảnh)
│   └── main.js       # Bộ máy điều khiển bản đồ, bộ lọc, mở popup, xem ảnh
│
└── images/           # Thư mục để bạn bỏ ảnh chụp thực địa của mình vào
```

---

## 1. CÁCH CHẠY THỬ WEBSITE TRÊN MÁY TÍNH

Bạn có 2 cách rất đơn giản để mở website:

### Cách 1: Mở trực tiếp bằng trình duyệt (Nhanh nhất - 3 giây)
1. Mở thư mục `du-lich-tuyen-quang` trong máy tính của bạn.
2. Nhấp đúp chuột vào file **`index.html`** (hoặc nhấp chuột phải chọn **Open with** -> **Google Chrome** / **Microsoft Edge** / **Cốc Cốc**).
3. Website sẽ hiện ra ngay lập tức!

### Cách 2: Chạy qua máy chủ local (Khuyên dùng để bản đồ mượt mà nhất)
Nếu máy bạn có Python hoặc Node.js:
- Mở cửa sổ dòng lệnh (Terminal / PowerShell) tại thư mục này.
- Gõ lệnh:
  ```bash
  # Nếu dùng Python:
  python -m http.server 8080
  
  # Hoặc nếu dùng Node.js:
  npx serve .
  ```
- Sau đó mở trình duyệt truy cập địa chỉ: `http://localhost:8080`

---

## 2. CÁCH SỬA TIÊU ĐỀ VÀ THÔNG ĐIỆP CHÍNH

Bạn muốn đổi tiêu đề đầu trang hoặc đoạn văn giới thiệu?
1. Mở file **`index.html`** bằng phần mềm soạn thảo (Notepad, VS Code, hoặc Notepad++).
2. Dùng tổ hợp phím `Ctrl + F` để tìm kiếm các cụm từ:
   - Muốn đổi câu khẩu hiệu: Tìm `"Miền di sản giữa đại ngàn"`.
   - Muốn đổi đoạn giới thiệu hero: Tìm `"Nơi lịch sử, thiên nhiên và những sắc màu văn hóa..."`.
   - Muốn sửa bài viết "Chạm vào Tuyên Quang": Tìm dòng `<section class="intro-section" id="gioi-thieu">`.
3. Sửa chữ theo ý bạn và nhấn `Ctrl + S` để lưu lại. Tải lại trang web (F5) là thấy chữ mới ngay!

---

## 3. CÁCH THAY ĐỔI VÀ BỔ SUNG ẢNH THẬT

Mọi đường link hình ảnh đều được gom gọn gàng trong file **`js/data.js`**.

### Các bước thay ảnh chụp thực địa:
1. Đặt bức ảnh đẹp của bạn vào thư mục **`images/`** (ví dụ đặt tên là `na-hang-dep.jpg`).
2. Mở file **`js/data.js`**.
3. Tìm đến địa điểm tương ứng (ví dụ: `Hồ sinh thái Na Hang – Lâm Bình`).
4. Sửa dòng `image`:
   ```javascript
   // Trước khi sửa:
   image: "https://images.unsplash.com/...",

   // Sau khi sửa thành ảnh của bạn:
   image: "images/na-hang-dep.jpg",
   ```
5. Lưu file `data.js` và nhấn F5 trên trình duyệt để chiêm ngưỡng ảnh mới.

---

## 4. CÁCH SỬA NỘI DUNG ĐỊA ĐIỂM CÓ SẴN

Trong file **`js/data.js`**, mỗi địa điểm đều có cấu trúc rõ ràng như sau:
```javascript
{
  id: "tan-trao",
  name: "Khu di tích Quốc gia đặc biệt Tân Trào",
  category: "history",                   // Phân loại: history, nature, highland, wellness, culture
  categoryName: "Di tích Lịch sử",       // Tên nhóm hiển thị
  tag: "Lịch sử - Về nguồn",            // Huy hiệu nhỏ
  location: "Huyện Sơn Dương, Tuyên Quang",
  geo: [21.7583, 105.2917],              // Tọa độ định vị bản đồ (Vĩ độ, Kinh độ)
  gmapsUrl: "https://maps.google.com/...",
  image: "...",                          // Link ảnh
  shortDesc: "Mô tả ngắn gọn 2-3 câu...",
  highlights: [                          // Các điểm nổi bật
    "Lán Nà Nưa...",
    "Đình Tân Trào...",
    "Cây đa Tân Trào..."
  ],
  tips: "Gợi ý khi tham quan...",
  imageCredit: "Nguồn ảnh..."
}
```
Bạn chỉ cần sửa trực tiếp các đoạn chữ tiếng Việt bên trong dấu ngoặc kép `""`.

---

## 5. CÁCH THÊM MỘT ĐỊA ĐIỂM MỚI

Bạn muốn thêm một thác nước, một bản làng mới vào danh sách?
1. Mở file **`js/data.js`**.
2. Cuộn đến mảng `destinations: [ ... ]`.
3. Thêm một khối địa điểm mới vào cuối danh sách trước dấu ngoặc vuông đóng `]`:
   ```javascript
   {
     id: "diem-moi",
     name: "Tên Điểm Đến Mới Của Bạn",
     category: "nature",
     categoryName: "Sinh thái - Đại ngàn",
     tag: "Thắng cảnh mới",
     location: "Tuyên Quang",
     geo: [22.1234, 105.1234], // Bạn có thể lấy tọa độ trên Google Maps
     gmapsUrl: "https://maps.google.com/?q=22.1234,105.1234",
     image: "images/diem-moi.jpg",
     fallbackColor: "#123d29",
     badge: "Điểm tham quan mới",
     shortDesc: "Giới thiệu ngắn gọn về cảnh đẹp nơi đây...",
     highlights: [
       "Nét độc đáo thứ nhất",
       "Nét độc đáo thứ hai"
     ],
     tips: "Lưu ý thời gian tham quan thích hợp nhất.",
     imageCredit: "Ảnh chụp thực tế"
   },
   ```
4. Lưu file và tải lại trang, website sẽ tự động tạo card mới, ghim cờ trên bản đồ và cập nhật bộ lọc!

---

## 6. HƯỚNG DẪN ĐƯA WEBSITE LÊN MẠNG (INTERNET) MIỄN PHÍ 100%

Dưới đây là 3 cách dễ nhất trên thế giới để bạn đưa website này lên mạng cho mọi người cùng xem:

### CÁCH 1: Dùng NETLIFY DROP (Dễ nhất - Không cần biết gõ lệnh - 60 giây)
1. Truy cập trang web: **[https://app.netlify.com/drop](https://app.netlify.com/drop)** (Đăng ký tài khoản miễn phí bằng Email hoặc Google).
2. Kéo cả thư mục `du-lich-tuyen-quang` và **thả chuột** vào khung có chữ *"Drag and drop your site output folder here"*.
3. Đợi khoảng 10 giây tải lên. Netlify sẽ cấp ngay cho bạn một đường link website chính thức (ví dụ: `https://tuyen-quang-travel.netlify.app`).
4. Bạn có thể gửi link này cho bạn bè hoặc du khách trên toàn thế giới xem ngay!

### CÁCH 2: Dùng GITHUB PAGES (Miễn phí vĩnh viễn, cực kỳ ổn định)
1. Đăng ký tài khoản miễn phí tại **[https://github.com](https://github.com)**.
2. Bấm nút **New Repository** (Tạo kho mới), đặt tên ví dụ `du-lich-tuyen-quang`, chọn chế độ **Public**.
3. Tải toàn bộ các file trong thư mục này lên kho lưu trữ vừa tạo.
4. Vào mục **Settings** của kho -> Chọn mục **Pages** ở cột bên trái -> Tại phần **Branch**, chọn `main` (hoặc `master`) và thư mục `/(root)` -> Nhấn **Save**.
5. Sau 1-2 phút, website của bạn sẽ hoạt động tại địa chỉ: `https://tên-tài-khoản.github.io/du-lich-tuyen-quang/`.

### CÁCH 3: Dùng VERCEL (Tốc độ tải cực nhanh tại Việt Nam)
1. Truy cập **[https://vercel.com](https://vercel.com)** và đăng nhập bằng GitHub hoặc Email.
2. Bấm **Add New...** -> **Project** -> Chọn kho mã nguồn chứa website.
3. Nhấn nút **Deploy**. Trong 30 giây bạn sẽ nhận được tên miền miễn phí `.vercel.app` với chứng chỉ bảo mật HTTPS xanh chuẩn quốc tế.

---
*Chúc bạn quảng bá thành công hình ảnh tươi đẹp, lịch sử hào hùng và bản sắc văn hóa đặc sắc của Tuyên Quang đến bạn bè trong nước và quốc tế!*
