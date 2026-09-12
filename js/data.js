/**
 * DỮ LIỆU WEBSITE DU LỊCH TUYÊN QUANG
 * Cập nhật chuẩn xác địa giới hành chính hiện hành.
 * 100% Ảnh thật kiểm chứng từ Wikimedia Commons & Tư liệu chính thức.
 * Các địa điểm chưa có ảnh kiểm chứng bản quyền giữ nguyên thẻ "Đang cập nhật hình ảnh".
 */

const TUYEN_QUANG_DATA = {
  destinations: [
    {
      id: "tan-trao",
      name: "Khu di tích Quốc gia đặc biệt Tân Trào",
      category: "history",
      categoryName: "Di tích Lịch sử",
      tag: "Lịch sử - Về nguồn",
      location: "Xã Tân Trào, Huyện Sơn Dương, Tỉnh Tuyên Quang",
      geo: [21.7583, 105.2917],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Khu+di+t%C3%ADch+qu%E1%BB%91c+gia+%C4%91%E1%BA%B7c+bi%E1%BB%87t+T%C3%A2n+Tr%C3%A0o",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/%C4%90%C3%ACnh_T%C3%A2n_Tr%C3%A0o.jpg",
      isPendingImage: false,
      fallbackColor: "#2d4a22",
      badge: "Di tích Quốc gia đặc biệt",
      shortDesc: "Thủ đô Khu giải phóng, Thủ đô Kháng chiến – nơi Chủ tịch Hồ Chí Minh cùng Trung ương Đảng sống, làm việc và lãnh đạo toàn thể dân tộc thực hiện thắng lợi cuộc Cách mạng Tháng Tám năm 1945.",
      highlights: [
        "Đình Tân Trào: Nơi diễn ra Quốc dân Đại hội ngày 16–17/8/1945, thông qua Lệnh Tổng khởi nghĩa, bầu Ủy ban Dân tộc Giải phóng và quy định Quốc kỳ, Quốc ca.",
        "Lán Nà Nưa: Căn lán nứa đơn sơ bên triền núi Nà Nưa nơi Bác Hồ ở, làm việc và phát đi chỉ thị lịch sử trong những ngày chuẩn bị Tổng khởi nghĩa.",
        "Cây đa Tân Trào: Nơi Đại tướng Võ Nguyên Giáp đọc Bản Quân lệnh số 1 và chỉ huy Việt Nam Giải phóng quân làm lễ xuất quân tiến về giải phóng Thủ đô Hà Nội."
      ],
      tips: "Nên mặc trang phục trang nghiêm, lịch sự khi dâng hương viếng thăm. Thời gian tham quan trọn vẹn khoảng 2–3 tiếng.",
      imageCredit: "Đình Tân Trào - Ảnh: Bùi Thụy Đào Nguyên (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "na-hang-lam-binh",
      name: "Hồ sinh thái Na Hang – Lâm Bình",
      category: "nature",
      categoryName: "Sinh thái - Đại ngàn",
      tag: "Vịnh giữa đại ngàn",
      location: "Huyện Na Hang và Huyện Lâm Bình, Tỉnh Tuyên Quang",
      geo: [22.3556, 105.3853],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=H%E1%BB%93+Na+Hang+L%C3%A2m+B%C3%ACnh",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cot_buoc_trau.jpg",
      isPendingImage: false,
      fallbackColor: "#0f4d45",
      badge: "Kỳ quan hồ nước ngọt",
      shortDesc: "Vùng lòng hồ sinh thái rộng hơn 8.000 ha với 99 ngọn núi đá vôi nhấp nhô soi bóng mặt nước ngọc bích phẳng lặng, tạo nên bức tranh sơn thủy hữu tình tráng lệ bậc nhất vùng núi phía Bắc.",
      highlights: [
        "Núi Cọc Vài Phạ (Cọc buộc trâu trời): Cột đá vôi kỳ vĩ huyền thoại sừng sững giữa làn nước xanh biếc.",
        "Du ngoạn lòng hồ bằng thuyền máy hoặc chèo thuyền kayak khám phá thác Khuổi Nhi mát lành.",
        "Trải nghiệm massage chân tự nhiên thú vị từ đàn cá suối nhỏ sống dưới chân thác nước trong veo."
      ],
      tips: "Mùa nước hồ xanh trong nhất từ tháng 9 đến tháng 4 hàng năm. Nên đặt trước thuyền tham quan để có lịch trình trọn vẹn.",
      imageCredit: "Cọc Vài Phạ Hồ Na Hang - Ảnh: Kongaytho (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "khu-bao-ton-na-hang",
      name: "Khu bảo tồn thiên nhiên Na Hang – Lâm Bình",
      category: "nature",
      categoryName: "Sinh thái - Đại ngàn",
      tag: "Đa dạng sinh học",
      location: "Huyện Na Hang và Huyện Lâm Bình, Tỉnh Tuyên Quang",
      geo: [22.4200, 105.4100],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Khu+b%E1%BA%A3o+t%E1%BB%93n+thi%C3%AAn+nhi%C3%AAn+Na+Hang",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Around_Na_Hang%2C_near_Ba_Be_lake_%286223574117%29.jpg",
      isPendingImage: false,
      fallbackColor: "#1d4427",
      badge: "Khu dự trữ sinh quyển",
      shortDesc: "Quần thể rừng nguyên sinh bạt ngàn trên núi đá vôi với hệ sinh thái động thực vật phong phú, là sinh cảnh sống quý giá của loài Voọc mũi hếch đặc hữu cùng nhiều cây cổ thụ quý hiếm.",
      highlights: [
        "Nơi bảo tồn loài Voọc mũi hếch (Rhinopithecus avunculus) đặc hữu cực kỳ quý hiếm ghi danh trong Sách đỏ thế giới.",
        "Hàng ngàn héc-ta rừng nghiến cổ thụ nghìn năm tuổi bám rễ vươn mình trên vách đá tai mèo hiểm trở.",
        "Các tuyến đường trekking băng rừng khám phá thảm thực vật đa dạng và hệ thống hang động hoang sơ."
      ],
      tips: "Nên đi cùng cán bộ kiểm lâm hoặc người dẫn đường bản địa để đảm bảo an toàn tuyệt đối và bảo tồn thiên nhiên.",
      imageCredit: "Núi rừng đại ngàn Na Hang - Ảnh: Arian Zwegers (Wikimedia Commons / Giấy phép: CC BY 2.0)"
    },
    {
      id: "thac-ban-ba",
      name: "Thác Bản Ba",
      category: "nature",
      categoryName: "Sinh thái - Đại ngàn",
      tag: "Thác nước hoang sơ",
      location: "Thôn Bản Ba, Xã Trung Hà, Huyện Chiêm Hóa, Tỉnh Tuyên Quang",
      geo: [22.2514, 105.1583],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Th%C3%A1c+B%E1%BA%A3n+Ba+Chi%C3%AAm+H%C3%B3a",
      image: null,
      isPendingImage: true,
      fallbackColor: "#1c5147",
      badge: "Danh thắng Quốc gia",
      shortDesc: "Danh thắng cấp Quốc gia với dòng thác 3 tầng tuyệt mỹ trải dài hơn 3km trên triền núi đá dốc đứng giữa cánh rừng già Phiêng Khàng, tựa như dải lụa trắng vắt ngang ngút ngàn cây lá.",
      highlights: [
        "Tầng thác thứ nhất (Tát Củm) với chân thác là vực nước trong vắt phẳng lặng như gương soi.",
        "Tầng thác thứ hai (Tát Cao) dòng nước xẻ đôi cuồn cuộn đổ bọt trắng xóa qua các triền đá ghềnh hiểm trở.",
        "Tầng thác thứ ba (Tát Gió) mang theo hơi nước mát lạnh lan tỏa hòa quyện cùng tiếng chim hót rừng sâu."
      ],
      tips: "Nên mang giày thể thao có độ bám dính tốt chống trơn trượt trên đá ướt. Chuẩn bị nước uống và túi chống nước cho đồ điện tử.",
      imageCredit: "Đang cập nhật hình ảnh (Chờ đối chiếu ảnh thực địa chính thức từ Ban Quản lý Du lịch Chiêm Hóa)"
    },
    {
      id: "suoi-khoang-my-lam",
      name: "Suối khoáng Mỹ Lâm",
      category: "wellness",
      categoryName: "Nghỉ dưỡng & Sức khỏe",
      tag: "Nghỉ dưỡng phục hồi",
      location: "Phường Mỹ Lâm, Thành phố Tuyên Quang, Tỉnh Tuyên Quang",
      geo: [21.8025, 105.1611],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Su%E1%BB%91i+kho%C3%A1ng+M%E1%BB%B9+L%C3%A2m+Tuy%C3%AAn+Quang",
      image: null,
      isPendingImage: true,
      fallbackColor: "#325754",
      badge: "Nguồn khoáng quý giá",
      shortDesc: "Mạch nước khoáng nóng sunfua thiên nhiên ngầm ở nhiệt độ 67°C phun lên từ độ sâu hơn 150m trong lòng đất, có hàm lượng khoáng chất quý cao hàng đầu Đông Dương giúp bồi bổ và hồi phục sức khỏe.",
      highlights: [
        "Nguồn nước khoáng sunfua chứa hydro sulfua tự nhiên rất tốt cho việc phục hồi cơ khớp và tuần hoàn khí huyết.",
        "Đa dạng dịch vụ tắm khoáng, ngâm bồn khoáng ấm, tắm bùn khoáng thiên nhiên và xông hơi lá thuốc người Dao.",
        "Khu nghỉ dưỡng sinh thái rợp bóng cây xanh kết hợp thưởng thức ẩm thực bản địa gà đồi, thịt lợn đen."
      ],
      tips: "Rất thích hợp cho người lớn tuổi và các gia đình nghỉ ngơi phục hồi thể lực sau những cung đường khám phá.",
      imageCredit: "Đang cập nhật hình ảnh (Chờ đối chiếu ảnh thực địa chính thức từ Khu Du lịch Suối khoáng Mỹ Lâm)"
    },
    {
      id: "le-hoi-thanh-tuyen",
      name: "Lễ hội Thành Tuyên",
      category: "culture",
      categoryName: "Văn hóa & Lễ hội",
      tag: "Kỷ lục Guinness VN",
      location: "Quảng trường Nguyễn Tất Thành & các tuyến phố, TP. Tuyên Quang",
      geo: [21.8239, 105.2155],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Qu%E1%BA%A3ng+tr%C6%B0%E1%BB%9Dng+Nguy%E1%BB%85n+T%E1%BA%A5t+Th%C3%A0nh+Tuy%C3%AAn+Quang",
      image: null,
      isPendingImage: true,
      fallbackColor: "#692b1b",
      badge: "Đêm hội đèn lồng khổng lồ",
      shortDesc: "Lễ hội Trung Thu lớn nhất và rực rỡ nhất Việt Nam, nơi hàng trăm mô hình đèn lồng khổng lồ tự chế mô phỏng các tích truyện lịch sử, cổ tích và linh vật diễu hành náo nức trên đường phố.",
      highlights: [
        "Hàng trăm mô hình đèn lồng khổng lồ dài hàng chục mét do chính người dân các tổ dân phố tự tay sáng tạo.",
        "Bầu không khí lễ hội tưng bừng khắp các ngả đường, rộn rã tiếng trống hội và các giai điệu âm nhạc truyền thống.",
        "Cảm nhận lòng hiếu khách, nụ cười rạng rỡ và sự gắn kết cộng đồng ấm áp của người dân xứ Tuyên."
      ],
      tips: "Diễn ra náo nhiệt nhất vào dịp rằm tháng 8 Âm lịch. Du khách nên chủ động đặt phòng khách sạn trước từ 1–2 tháng.",
      imageCredit: "Đang cập nhật hình ảnh (Chờ đối chiếu ảnh thực địa chính thức từ Ban Tổ chức Lễ hội Thành Tuyên)"
    },
    {
      id: "cao-nguyen-da-dong-van",
      name: "Công viên địa chất UNESCO Cao nguyên đá Đồng Văn",
      category: "highland",
      categoryName: "Kỳ quan Vùng cao",
      tag: "Di sản toàn cầu UNESCO",
      location: "Các huyện Quản Bạ, Yên Minh, Đồng Văn, Mèo Vạc",
      geo: [23.2783, 105.3622],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Cao+nguy%C3%AAn+%C4%91%C3%A1+%C4%90%E1%BB%93ng+V%C4%83n",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/B%C3%A3i_%C4%91%C3%A1_m%E1%BA%B7t_tr%C4%83ng_%C4%90%E1%BB%93ng_V%C4%83n_-_NKS.jpg",
      isPendingImage: false,
      fallbackColor: "#3a3c39",
      badge: "UNESCO Global Geopark",
      shortDesc: "Vùng cảnh quan karst đá vôi kỳ vĩ kiến tạo qua hàng trăm triệu năm với những dãy núi xám tai mèo vươn tận mây xanh và nền văn hóa đậm đà của các dân tộc bản địa sinh sống.",
      highlights: [
        "Địa tầng địa chất chứa đựng hóa thạch biển cổ sinh từ 400 đến 600 triệu năm trong lịch sử hình thành vỏ Trái Đất.",
        "Những nếp nhà trình tường lợp ngói âm dương nép mình kiên cường bên các bờ rào đá xếp tay khéo léo.",
        "Phố cổ vùng cao với những phiên chợ rực rỡ sắc màu thổ cẩm và hương thơm thắng cố nồng nàn."
      ],
      tips: "Mùa hoa tam giác mạch từ tháng 10 đến tháng 12 là thời điểm cao nguyên đá đẹp và rực rỡ nhất.",
      imageCredit: "Bãi đá mặt trăng Đồng Văn - Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "cot-co-lung-cu",
      name: "Cột cờ Quốc gia Lũng Cú",
      category: "highland",
      categoryName: "Kỳ quan Vùng cao",
      tag: "Biểu tượng thiêng liêng",
      location: "Đỉnh núi Rồng (Long Sơn), Xã Lũng Cú, Huyện Đồng Văn",
      geo: [23.3619, 105.3183],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=C%E1%BB%99t+c%E1%BB%9D+L%C5%A9ng+C%C3%BA",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG",
      isPendingImage: false,
      fallbackColor: "#741d1a",
      badge: "Cực Bắc Tổ quốc",
      shortDesc: "Cột mốc thiêng liêng nơi chóp nón cực Bắc Tổ quốc với lá cờ đỏ sao vàng rộng 54m² tượng trưng cho 54 dân tộc anh em kiêu hãnh tung bay lộng gió giữa đại ngàn biên cương.",
      highlights: [
        "Chinh phục 839 bậc thang đá uốn lượn dẫn lên đỉnh kỳ đài ngắm trọn vẹn non sông bờ cõi hùng tráng.",
        "Chiêm ngưỡng hai hồ nước ngọt Mắt Rồng linh thiêng dưới chân núi quanh năm không bao giờ cạn nước.",
        "Lưu lại khoảnh khắc trang nghiêm đầy xúc động trước biểu tượng chủ quyền thiêng liêng của nước nhà."
      ],
      tips: "Nên mang theo áo gió giữ ấm vì gió trên đỉnh tháp cờ thổi rất mạnh vào mọi thời điểm trong ngày.",
      imageCredit: "Cột cờ Lũng Cú trên đỉnh núi Rồng - Ảnh: Bùi Thụy Đào Nguyên (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "deo-ma-pi-leng",
      name: "Đèo Mã Pì Lèng",
      category: "highland",
      categoryName: "Kỳ quan Vùng cao",
      tag: "Đệ nhất hùng quan",
      location: "Xã Pải Lủng và Xã Pả Vi (Đường Hạnh Phúc), Huyện Mèo Vạc",
      geo: [23.2389, 105.4139],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=%C4%90%C3%A8o+M%C3%A3+P%C3%AC+L%C3%A8ng",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg",
      isPendingImage: false,
      fallbackColor: "#2b3b33",
      badge: "Vua của các cung đèo",
      shortDesc: "Một trong tứ đại đỉnh đèo hiểm trở bậc nhất Việt Nam dài khoảng 20km, uốn lượn ngoạn mục qua vách đá dựng đứng với vực thẳm sâu hun hút nhìn xuống dòng sông Nho Quế.",
      highlights: [
        "Di tích lịch sử đường Hạnh Phúc được xây dựng bằng bàn tay, mồ hôi và ý chí kiên cường của thanh niên xung phong.",
        "Đài ngắm cảnh Mã Pì Lèng chiêm ngưỡng toàn cảnh hẻm Tu Sản và biển mây cuồn cuộn giữa sườn non.",
        "Ngắm hoàng hôn rực rỡ buông xuống triền núi đá tai mèo tím thẫm trong không gian tịch mịch hùng vĩ."
      ],
      tips: "Nếu tự lái xe máy, hãy kiểm tra hệ thống phanh kỹ càng, bật đèn chiếu sáng khi gặp sương mù và giữ tốc độ an toàn.",
      imageCredit: "Đèo Mã Pí Lèng - Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "song-nho-que",
      name: "Sông Nho Quế & Hẻm Tu Sản",
      category: "highland",
      categoryName: "Kỳ quan Vùng cao",
      tag: "Hẻm vực sâu nhất ĐNA",
      location: "Dưới chân đèo Mã Pì Lèng, Huyện Mèo Vạc",
      geo: [23.2189, 105.4225],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=H%E1%BA%Bbm+Tu+S%E1%BA%A3n+S%C3%B4ng+Nho+Qu%E1%BA%BF",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/S%C3%B4ng_Nho_Qu%E1%BA%BF_2022_-_NKS.jpg",
      isPendingImage: false,
      fallbackColor: "#10534b",
      badge: "Kỳ quan thiên nhiên",
      shortDesc: "Dòng sông êm đềm như dải lụa xanh màu ngọc bích len lỏi qua Hẻm Tu Sản có hai bên vách đá thẳng đứng cao tới 700–800m, tạo nên tuyệt tác thiên nhiên hiếm có.",
      highlights: [
        "Ngồi thuyền lướt nhẹ trên dòng nước xanh trong vắt len lỏi giữa hai bờ vách đá karst cao vút chọc trời.",
        "Chèo thuyền kayak tự do tận hưởng sự tĩnh lặng tuyệt đối giữa lòng đại vực sâu thẳm bậc nhất Đông Nam Á.",
        "Chụp lại những bức hình check-in ngắm màu nước ngọc lam đặc trưng quyến rũ không nơi nào có."
      ],
      tips: "Đường từ quốc lộ xuống bến thuyền Tà Làng dốc đứng ngoằn ngoèo, nên thuê xe ôm của người bản địa đưa đón.",
      imageCredit: "Sông Nho Quế & Hẻm Tu Sản - Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "hoang-su-phi",
      name: "Ruộng bậc thang Hoàng Su Phì",
      category: "highland",
      categoryName: "Kỳ quan Vùng cao",
      tag: "Danh thắng Quốc gia",
      location: "Các xã Bản Phùng, Nậm Ty, Bản Luốc, Sán Sả Hồ, Huyện Hoàng Su Phì",
      geo: [22.7000, 104.6833],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=Ru%E1%BB%99ng+b%E1%BA%ADc+thang+Ho%C3%A0ng+Su+Ph%C3%AC",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Ru%E1%BB%99ng_b%E1%BA%ADc_thang_B%E1%BA%A3n_Ph%C3%B9ng_1_-_NKS.jpg",
      isPendingImage: false,
      fallbackColor: "#7a621c",
      badge: "Bản hòa ca của đất và người",
      shortDesc: "Kiệt tác canh tác ruộng bậc thang kỳ vĩ trên các triền non hiểm trở được tạo tác qua hàng thế kỷ bởi bàn tay cần cù của đồng bào La Chí, Dao, Nùng, vẽ nên bức tranh sóng lúa vàng rực rỡ.",
      highlights: [
        "Mùa lúa chín vàng ươm thơm ngát từ giữa tháng 9 đến cuối tháng 10 ngút ngàn tầm mắt trên triền núi.",
        "Mùa nước đổ long lanh như những tấm gương khổng lồ phản chiếu mây trời vào khoảng tháng 5 đến tháng 6.",
        "Khám phá văn hóa nhà sàn bằng gỗ của người La Chí và tham quan làng nghề làm chè bản địa thơm lừng."
      ],
      tips: "Cung đường di chuyển khá quanh co, nên chọn những ngày nắng ráo để tận hưởng trọn vẹn cảnh sắc hùng vĩ.",
      imageCredit: "Ruộng bậc thang Bản Phùng Hoàng Su Phì - Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      id: "lo-lo-chai",
      name: "Làng văn hóa du lịch Lô Lô Chải",
      category: "culture",
      categoryName: "Văn hóa & Lễ hội",
      tag: "Bản làng cổ tích",
      location: "Thôn Lô Lô Chải, Xã Lũng Cú, Huyện Đồng Văn (dưới chân núi Rồng)",
      geo: [23.3550, 105.3140],
      gmapsUrl: "https://www.google.com/maps/search/?api=1&query=L%C3%A0ng+v%C4%83n+h%C3%B3a+du+l%E1%BB%8Bch+L%C3%B4+L%C3%B4+Ch%E1%BA%A3i",
      image: null,
      isPendingImage: true,
      fallbackColor: "#563821",
      badge: "Làng du lịch cộng đồng",
      shortDesc: "Ngôi làng cổ tích thanh bình của người Lô Lô Đen nép mình dưới bóng Cột cờ Lũng Cú với những nếp nhà trình tường đất ấm áp, mái ngói âm dương phủ rêu phong và con đường đá quanh co mộc mạc.",
      highlights: [
        "Trải nghiệm nghỉ đêm trong các homestay nhà trình tường truyền thống mộc mạc, ấm cúng và giàu lòng mến khách.",
        "Chiêm ngưỡng hoa văn thêu dệt thổ cẩm hình học tinh xảo của các bà, các mẹ Lô Lô Đen tài hoa.",
        "Nhâm nhi tách cà phê Cực Bắc nồng ấm giữa không gian sương mù bảng lảng khi chiều buông trên bản làng."
      ],
      tips: "Hãy chào hỏi thân thiện và xin phép trước khi chụp ảnh người dân bản địa trong hoạt động sinh hoạt thường nhật.",
      imageCredit: "Đang cập nhật hình ảnh (Chờ đối chiếu ảnh thực địa chính thức từ Ban Quản lý Làng Du lịch Lô Lô Chải)"
    }
  ],

  experiences: [
    {
      id: "ve-nguon",
      icon: "fa-landmark",
      title: "Về nguồn",
      subtitle: "Dấu ấn lịch sử cách mạng",
      description: "Trở về thủ đô kháng chiến Tân Trào, nghiêng mình trước Lán Nà Nưa, Đình Tân Trào, Đình Hồng Thái, lắng nghe những trang sử vàng hào hùng của dân tộc giữa đại ngàn bạt ngàn.",
      destinations: "Tân Trào, Nà Nưa, Đình Hồng Thái, Cây đa Tân Trào"
    },
    {
      id: "thien-nhien",
      icon: "fa-tree",
      title: "Chạm vào thiên nhiên",
      subtitle: "Đại ngàn xanh & hồ sinh thái",
      description: "Thả trôi thuyền trên làn nước biếc hồ Na Hang, lắng nghe tiếng thác Bản Ba róc rách, chèo kayak xuyên hẻm đá và hít căng lồng ngực bầu không khí rừng nguyên sinh trong lành.",
      destinations: "Hồ Na Hang – Lâm Bình, Thác Bản Ba, Khuổi Nhi, Rừng nguyên sinh"
    },
    {
      id: "vung-cao",
      icon: "fa-mountain",
      title: "Khám phá vùng cao",
      subtitle: "Kỳ quan đá & đường đèo mây phủ",
      description: "Chinh phục đỉnh đèo Mã Pì Lèng hiểm trở, lướt thuyền ngắm hẻm vực Tu Sản sâu hun hút, đứng dưới bóng cờ Lũng Cú và chiêm ngưỡng sóng lúa Hoàng Su Phì rực rỡ.",
      destinations: "Mã Pì Lèng, Sông Nho Quế, Cao nguyên đá, Lũng Cú, Hoàng Su Phì"
    },
    {
      id: "ban-sac",
      icon: "fa-people-roof",
      title: "Sống cùng bản sắc",
      subtitle: "Làng bản, chợ phiên & nếp sống mộc",
      description: "Nghỉ lại nhà sàn người Tày, nhà trình tường Lô Lô Chải, thưởng thức chén rượu ngô men lá nồng ấm bên bếp lửa hồng và nghe tiếng đàn Tính, điệu Then thiết tha.",
      destinations: "Làng Lô Lô Chải, Bản Tày Thượng Lâm, Lễ Cấp Sắc Dao, Chợ phiên vùng cao"
    },
    {
      id: "thu-gian",
      icon: "fa-spa",
      title: "Thư giãn & Tái tạo",
      subtitle: "Khoáng nóng tự nhiên & thảo dược",
      description: "Ngâm mình trong dòng khoáng nóng sunfua thiên nhiên Mỹ Lâm ấm áp, xông hơi lá thuốc dân tộc Dao đỏ, giúp xua tan mọi mệt mỏi và phục hồi trọn vẹn năng lượng sống.",
      destinations: "Suối khoáng nóng Mỹ Lâm, Tắm thảo dược bản địa, Nghỉ dưỡng sinh thái"
    }
  ],

  cultures: [
    {
      name: "Dân tộc Tày",
      tagline: "Tiếng đàn Tính ngân vang, điệu Then bắc nhịp tâm hồn",
      desc: "Người Tày là cộng đồng cư dân lâu đời tại Tuyên Quang với nếp nhà sàn gỗ hướng ra cánh đồng lúa xanh. Nghệ thuật Hát Then – Đàn Tính của người Tày đã vinh dự được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại.",
      features: [
        "Hát Then – Đàn Tính (Di sản UNESCO)",
        "Kiến trúc nhà sàn gỗ lợp lá cọ truyền thống",
        "Lễ hội Lồng Tông (lễ hội xuống đồng) cầu mùa bội thu",
        "Ẩm thực nếp nương xôi ngũ sắc và cá bỗng nướng giòn"
      ]
    },
    {
      name: "Dân tộc Dao",
      tagline: "Sắc chàm thêu hoa văn chỉ đỏ và nghi lễ Cấp Sắc thiêng liêng",
      desc: "Gồm các ngành Dao Đỏ, Dao Tiền, Dao Quần Chẹt với trang phục thêu tay cầu kỳ và trang sức bạc tinh xảo. Lễ Cấp Sắc công nhận sự trưởng thành của nam giới là nét sinh hoạt tín ngưỡng ngàn đời được bảo tồn nguyên vẹn.",
      features: [
        "Đại lễ Cấp Sắc truyền thống trang nghiêm",
        "Nghệ thuật thêu thùa và in sáp ong tinh xảo",
        "Kho tàng bài thuốc tắm lá thảo mộc gia truyền",
        "Điệu múa Chuông và Tết Nhảy rộn ràng đầu xuân"
      ]
    },
    {
      name: "Dân tộc Mông",
      tagline: "Tiếng khèn gọi bạn tình vút bay trên vách đá tai mèo",
      desc: "Cộng đồng người Mông sinh sống kiên cường trên các triền núi đá cao. Họ gìn giữ bản sắc qua những nếp nhà trình tường đất dày ấm áp mùa đông, mát mẻ mùa hè, kỹ thuật xếp rào đá kỳ công cùng điệu múa khèn tài hoa.",
      features: [
        "Nghệ thuật múa Khèn Mông điệu nghệ và phóng khoáng",
        "Kiến trúc nhà trình tường đất lợp ngói âm dương",
        "Kỹ thuật xếp hàng rào đá khô không dùng vữa",
        "Hương vị thắng cố nóng hổi bên chén rượu ngô nương"
      ]
    },
    {
      name: "Dân tộc Sán Chay (Cao Lan)",
      tagline: "Giai điệu Sình Ca mộc mạc đón mùa màng tốt tươi",
      desc: "Người Sán Chay (Cao Lan) gắn bó với những thung lũng trù phú của xứ Tuyên. Nổi bật là kho tàng làn điệu Sình Ca đối đáp mộc mạc, ngọt ngào, cùng điệu múa chim gâu, múa xúc tép sinh động thể hiện lòng yêu lao động.",
      features: [
        "Dân ca Sình Ca đối đáp giao duyên truyền cảm",
        "Điệu múa chim gâu, xúc tép, dệt vải truyền thống",
        "Lễ hội cầu mùa nông nghiệp đậm tính nhân văn",
        "Trang phục áo chàm thanh nhã kết hợp thắt lưng rực rỡ"
      ]
    },
    {
      name: "Dân tộc Lô Lô",
      tagline: "Bức tranh thổ cẩm cổ tích nơi chân Cột cờ Lũng Cú",
      desc: "Cộng đồng người Lô Lô Đen lưu giữ không gian văn hóa độc đáo với trang phục ghép vải hoa văn hình học cầu kỳ bậc nhất. Nếp sống đoàn kết, bình dị và hiếu khách tạo nên vẻ đẹp quyến rũ cho bản làng cổ Lô Lô Chải.",
      features: [
        "Trang phục thêu ghép vải hình học rực rỡ và công phu",
        "Kiến trúc nhà đất cổ kính nép bên rặng sa mộc",
        "Điệu múa trong tiếng trống đồng linh thiêng",
        "Nếp sống hiền hòa, đậm tính cộng đồng tương trợ"
      ]
    }
  ],

  cuisines: [
    {
      name: "Thịt lợn đen Tuyên Quang",
      desc: "Lợn đen bản địa nuôi thả tự nhiên nơi sườn đồi, thịt chắc thơm ngọt, lớp bì dày giòn sần sật xào lăn cùng hạt dổi, mắc khén thơm lừng.",
      badge: "Đặc sản nức tiếng",
      icon: "fa-utensils"
    },
    {
      name: "Vịt suối Minh Hương",
      desc: "Giống vịt suối trứ danh tại xã Minh Hương (Hàm Yên) bơi lội suối trong, thịt săn chắc, thơm ngọt tự nhiên không chút mỡ thừa.",
      badge: "Sản vật tiến vua",
      icon: "fa-bowl-food"
    },
    {
      name: "Cam sành Hàm Yên",
      desc: "Trái cam vàng mọng nước, vỏ sần thơm dịu, tép cam giòn ngọt đậm đà – thương hiệu trái cây chỉ dẫn địa lý hàng đầu cả nước.",
      badge: "Chỉ dẫn địa lý",
      icon: "fa-lemon"
    },
    {
      name: "Rượu ngô men lá Na Hang",
      desc: "Nấu từ hạt ngô nương ủ men thảo mộc từ hơn 20 loại cây rừng quý giá, nước rượu trong vắt, uống êm say dịu ngọt mà không đau đầu.",
      badge: "Hương rượu đại ngàn",
      icon: "fa-wine-bottle"
    },
    {
      name: "Chè Shan tuyết Na Hang & Hồng Thái",
      desc: "Búp chè ngậm sương mù trên đỉnh núi cao trên 1.000m phủ lớp lông tơ tuyết trắng, khi pha cho nước vàng óng như mật ong và vị ngọt hậu sâu.",
      badge: "Trà di sản cổ thụ",
      icon: "fa-mug-hot"
    },
    {
      name: "Bánh gai Chiêm Hóa",
      desc: "Lớp vỏ nếp đen óng dẻo mịn từ lá gai thiên nhiên ôm trọn nhân đậu xanh bùi bùi, dừa nạo giòn ngọt và mứt bí thanh tao.",
      badge: "Quà quê truyền thống",
      icon: "fa-cookie"
    },
    {
      name: "Cơm lam & Xôi ngũ sắc",
      desc: "Gạo nếp nương đồ trong ống tre non thơm ngát mùi khói bếp, xôi nhuộm màu tự nhiên từ lá cẩm tím, củ nghệ vàng và quả gấc đỏ.",
      badge: "Ẩm thực nếp nương",
      icon: "fa-bread-slice"
    },
    {
      name: "Cá bỗng nướng & canh chua sông Lô",
      desc: "Cá bỗng tiến vua thịt chắc trắng ngần, nướng than hoa thơm phức hoặc nấu canh lá chua thanh mát đặc trưng miền sông nước xứ Tuyên.",
      badge: "Thủy sản sông Lô",
      icon: "fa-fish"
    }
  ],

  itineraries: [
    {
      id: "tour-1-day",
      title: "1 ngày – Chạm vào lịch sử",
      tag: "Về nguồn",
      subtitle: "Hành trình di tích Thủ đô Kháng chiến",
      duration: "1 Ngày (Sáng – Chiều)",
      suitableFor: "Gia đình, đoàn công tác, du khách yêu lịch sử cách mạng",
      timeline: [
        {
          time: "07:30 – 08:30",
          title: "Di chuyển đến Khu di tích Quốc gia đặc biệt Tân Trào",
          detail: "Khởi hành từ trung tâm TP. Tuyên Quang (khoảng 40km), ngắm khung cảnh đồi chè và cánh đồng xanh mướt mát."
        },
        {
          time: "08:30 – 11:30",
          title: "Thăm Đình Tân Trào, Lán Nà Nưa & Cây đa Tân Trào",
          detail: "Dâng hương tưởng niệm Bác Hồ, nghe thuyết minh về Quốc dân Đại hội và những ngày tháng chuẩn bị Tổng khởi nghĩa Tháng Tám."
        },
        {
          time: "11:30 – 13:30",
          title: "Thưởng thức ẩm thực cơm lam bản địa",
          detail: "Ăn trưa tại homestay làng du lịch văn hóa Tân Lập với các món gà đồi nướng, cá suối chiên giòn, rau rừng."
        },
        {
          time: "14:00 – 16:30",
          title: "Thăm Đình Hồng Thái, Quảng trường & Bảo tàng tỉnh",
          detail: "Quay về trung tâm TP. Tuyên Quang, check-in tượng đài Bác Hồ tại Quảng trường Nguyễn Tất Thành và dạo bờ sông Lô êm đềm."
        }
      ]
    },
    {
      id: "tour-2-days",
      title: "2 ngày – Giữa đại ngàn xanh",
      tag: "Sinh thái",
      subtitle: "Khám phá lòng hồ Na Hang & Thác Bản Ba kỳ vĩ",
      duration: "2 Ngày 1 Đêm",
      suitableFor: "Nhóm bạn trẻ, cặp đôi, gia đình yêu thiên nhiên hoang sơ",
      timeline: [
        {
          time: "Ngày 1 – Sáng",
          title: "Khởi hành TP. Tuyên Quang → Na Hang → Du ngoạn lòng hồ",
          detail: "Lên thuyền du ngoạn lòng hồ ngắm 99 ngọn núi đá vôi, check-in mỏm đá Cọc Vài Phạ huyền thoại sừng sững giữa nước biếc."
        },
        {
          time: "Ngày 1 – Chiều",
          title: "Khám phá Thác Khuổi Nhi & Massage cá suối",
          detail: "Chinh phục các tầng thác Khuổi Nhi râm mát giữa rừng già, thả chân vào làn suối mát để đàn cá suối tự nhiên massage thư thái."
        },
        {
          time: "Ngày 1 – Tối",
          title: "Nghỉ đêm homestay bản Tày Thượng Lâm & Giao lưu Hát Then",
          detail: "Thưởng thức bữa cơm ấm cúng nhà sàn, nhâm nhi rượu ngô men lá và thưởng thức giai điệu đàn Tính sâu lắng."
        },
        {
          time: "Ngày 2 – Sáng",
          title: "Chinh phục Thác Bản Ba (Chiêm Hóa)",
          detail: "Di chuyển qua Chiêm Hóa, leo bộ ngắm 3 tầng thác Bản Ba bọt tung trắng xóa đổ giữa cánh rừng nguyên sinh Phiêng Khàng."
        },
        {
          time: "Ngày 2 – Chiều",
          title: "Thư giãn Suối khoáng nóng Mỹ Lâm & Mua quà đặc sản",
          detail: "Ghé ngâm khoáng nóng hồi phục sức sống tại Mỹ Lâm, mua Bánh gai Chiêm Hóa và chè Shan tuyết làm quà trước khi trở về."
        }
      ]
    },
    {
      id: "tour-4-days",
      title: "3–4 ngày – Chinh phục miền đá",
      tag: "Kỳ quan Vùng cao",
      subtitle: "Hành trình đại ngàn qua những cung đèo ngoạn mục",
      duration: "3 – 4 Ngày",
      suitableFor: "Phượt thủ, người đam mê nhiếp ảnh, thích trải nghiệm cung đường núi",
      timeline: [
        {
          time: "Ngày 1",
          title: "Tuyên Quang → Na Hang → Hoàng Su Phì",
          detail: "Ngắm cảnh đẹp lòng hồ Na Hang rồi tiếp tục di chuyển đến Hoàng Su Phì chiêm ngưỡng các bậc thang lúa vàng rực rỡ tại Bản Phùng."
        },
        {
          time: "Ngày 2",
          title: "Hoàng Su Phì → Cao nguyên đá Đồng Văn",
          detail: "Vượt cung đường đèo ngắm những dãy núi đá tai mèo xám ngắt, thăm Dinh Thự Vua Mèo và tản bộ ngắm phố cổ Đồng Văn về đêm."
        },
        {
          time: "Ngày 3",
          title: "Cột cờ Lũng Cú → Lô Lô Chải → Đèo Mã Pì Lèng",
          detail: "Chạm tay vào cột mốc cực Bắc thiêng liêng, check-in làng cổ tích Lô Lô Chải và vượt đỉnh đèo Mã Pì Lèng hùng vĩ ngắm hoàng hôn."
        },
        {
          time: "Ngày 4",
          title: "Chèo thuyền Sông Nho Quế & Hẻm Tu Sản → Kết thúc",
          detail: "Lướt êm trên dòng sông ngọc bích len qua hẻm Tu Sản sâu nhất Đông Nam Á, lưu giữ những thước phim để đời trước khi hồi hương."
        }
      ]
    }
  ],

  gallery: [
    {
      title: "Hồ Na Hang – Cọc Vài Phạ",
      category: "Thiên nhiên",
      caption: "Cọc Vài Phạ sừng sững giữa làn nước ngọc bích và núi đá vôi hồ sinh thái Na Hang.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cot_buoc_trau.jpg",
      credit: "Ảnh: Kongaytho (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Đình Tân Trào lịch sử",
      category: "Lịch sử",
      caption: "Nơi diễn ra Quốc dân Đại hội Tháng Tám năm 1945 tại Sơn Dương, Tuyên Quang.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/%C4%90%C3%ACnh_T%C3%A2n_Tr%C3%A0o.jpg",
      credit: "Ảnh: Bùi Thụy Đào Nguyên (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Cây đa lịch sử Tân Trào",
      category: "Lịch sử",
      caption: "Cây đa Tân Trào nơi Đại tướng Võ Nguyên Giáp đọc Quân lệnh số 1 xuất quân.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/11/C%C3%A2y_%C4%90a_l%E1%BB%8Bch_s%E1%BB%AD_T%C3%A2n_Tr%C3%A0o.JPG",
      credit: "Ảnh: Liftold (Wikimedia Commons / Giấy phép: CC BY-SA 3.0)"
    },
    {
      title: "Đèo Mã Pì Lèng hùng vĩ",
      category: "Vùng cao",
      caption: "Cung đèo hiểm trở vắt ngang sườn núi đá dốc đứng ngút ngàn mây trời.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%C4%90%C3%A8o_M%C3%A3_P%C3%AD_L%C3%A8ng_2022.jpg",
      credit: "Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Sông Nho Quế & Hẻm Tu Sản",
      category: "Thiên nhiên",
      caption: "Dòng nước xanh biếc lững lờ trôi giữa hai vách đá karst cao vút.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/S%C3%B4ng_Nho_Qu%E1%BA%BF_2022_-_NKS.jpg",
      credit: "Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Ruộng bậc thang Hoàng Su Phì",
      category: "Vùng cao",
      caption: "Những nấc thang vàng óng ả uốn lượn kỳ vĩ trên sườn non Bản Phùng.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/Ru%E1%BB%99ng_b%E1%BA%ADc_thang_B%E1%BA%A3n_Ph%C3%B9ng_1_-_NKS.jpg",
      credit: "Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Bãi đá mặt trăng Đồng Văn",
      category: "Địa chất",
      caption: "Cảnh quan karst đá tai mèo độc đáo thuộc Công viên địa chất UNESCO.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/B%C3%A3i_%C4%91%C3%A1_m%E1%BA%B7t_tr%C4%83ng_%C4%90%E1%BB%93ng_V%C4%83n_-_NKS.jpg",
      credit: "Ảnh: NKSTTSSHNVN (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    },
    {
      title: "Cột cờ Quốc gia Lũng Cú",
      category: "Biểu tượng",
      caption: "Kỳ đài thiêng liêng nơi đỉnh núi Rồng cực Bắc Tổ quốc.",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA.JPG",
      credit: "Ảnh: Bùi Thụy Đào Nguyên (Wikimedia Commons / Giấy phép: CC BY-SA 4.0)"
    }
  ]
};
