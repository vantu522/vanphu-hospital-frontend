import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from "date-fns/locale";

const KioskBHYT = () => {
  // ====== STATE FORM (controlled) ======
  const [selectedButton, setSelectedButton] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  const [fullName, setFullName] = useState("");
  const [cccd, setCccd] = useState("");
  const [gender, setGender] = useState("male");
  const [birthDate, setBirthDate] = useState(null);

  const [bhyt, setBhyt] = useState("");
  const [bhytReg, setBhytReg] = useState("");
  const [bhytExpiry, setBhytExpiry] = useState("");
  const [address, setAddress] = useState("");

  // dùng để gom ký tự quét cực nhanh
  const bufferRef = useRef("");
  const lastKeyTimeRef = useRef(0);

  // ====== CARD INFO (giữ nguyên) ======
  const cardInfo = {
    CCCD: {
      image: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/6/3/6-17489233625391235970012.jpg",
      title: "Hướng dẫn quét CCCD",
      instructions: ["1. Chuẩn bị thẻ CCCD gắn chip", "2. Đặt thẻ lên máy đọc", "3. Chờ hệ thống xử lý"],
    },
    VSSID: {
      image: "https://media.baosonla.org.vn/public/linhlv/2025-07-10/nhan-vien-y-te-benh-vien-da-khoa-khu-vuc-phu-yen-huong-dan-nhan-dan-dang-ky-kham,-chua-benh-bang-may-kiosk-medipay_.jpg",
      title: "Hướng dẫn quét VSSID",
      instructions: ["1. Chuẩn bị thẻ BHXH có mã VSSID", "2. Quét mã QR trên thẻ", "3. Chờ hệ thống xác thực"],
    },
    VNEID: {
      image: "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/cach-quet-ma-qr-cccd-tren-vneid-3.jpg",
      title: "Hướng dẫn quét VNEID",
      instructions: ["1. Mở ứng dụng VNeID", "2. Chọn chức năng chia sẻ thông tin", "3. Quét mã QR hiển thị trên màn hình"],
    },
    BHYT: {
      image: "https://tanhungha.com.vn/storage/images/news/Nam%20MKT/tra-cuu-bhyt-tanhungha.jpg",
      title: "Hướng dẫn quét BHYT",
      instructions: ["1. Chuẩn bị thẻ BHYT", "2. Quét mã QR trên thẻ BHYT", "3. Chờ hệ thống đọc thông tin"],
    },
  };

  // ====== LOCK SCROLL (giữ nguyên) ======
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showPopup]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    window.location.href = "/dat-lich";
  };

  const currentCardInfo = cardInfo[selectedButton] || cardInfo.CCCD;

  // ====== HELPERS: parse ngày ddMMyyyy -> Date ======
  const parseVNDate = (s) => {
    if (!/^\d{8}$/.test(s)) return null;
    const dd = parseInt(s.slice(0, 2), 10);
    const mm = parseInt(s.slice(2, 4), 10) - 1;
    const yyyy = parseInt(s.slice(4, 8), 10);
    const d = new Date(yyyy, mm, dd);
    // sanity check
    return d && d.getFullYear() >= 1900 && d.getFullYear() <= 2100 ? d : null;
  };

  // ====== PARSER CHUỖI QUÉT → ĐỔ FORM ======
  const fillFormFromScan = (raw) => {
    // chuẩn hóa: tách bởi |, bỏ rỗng do "||"
    const parts = raw.split("|").map((x) => x.trim()).filter(Boolean);

    // heuristics theo ảnh mẫu:
    // [0]=số (điện thoại/BHYT/CCCD), [1]=Họ tên, [2]=ddMMyyyy (sinh),
    // [3]=Giới tính, [4]=Địa chỉ, [5]=ddMMyyyy (ngày cấp/hạn)
    const maybeName = parts.find((p) => /[A-Za-zÀ-ỹ ]/.test(p) && !/\d{6,}/.test(p));
    const maybeAddress = parts.find((p) => p.includes(",") && p.length > 10);
    const dates = parts.filter((p) => /^\d{8}$/.test(p)).map(parseVNDate).filter(Boolean);
    const genderRaw = parts.find((p) => /^nam$|^nữ$|^nu$/i.test(p));
    const numbers = parts.filter((p) => /^\d{10,15}$/.test(p)); // 10-15 chữ số

    // map theo loại bạn chọn để ưu tiên field
    const firstNumber = numbers[0] || "";
    if (selectedButton === "CCCD" || selectedButton === "VNEID") {
      setCccd(firstNumber);
    }
    if (selectedButton === "BHYT") {
      setBhyt(firstNumber); // coi số đầu là mã thẻ BHYT
    }

    setFullName(maybeName || fullName);
    if (genderRaw) {
      const g = genderRaw.toLowerCase();
      setGender(g.includes("nam") ? "male" : "female");
    }
    if (dates.length) setBirthDate(dates[0]); // ngày sinh
    if (dates.length >= 2) setBhytExpiry(dates[1].toLocaleDateString("vi-VN")); // hạn hoặc ngày cấp
    if (maybeAddress) setAddress(maybeAddress);

    // nếu có thêm 1 mã nữa, coi là mã đăng ký
    if (numbers.length >= 2) setBhytReg(numbers[1]);
  };

  // ====== LẮNG NGHE QUÉT BẰNG BÀN PHÍM (HID) ======
  useEffect(() => {
    const onKeyDown = (e) => {
      const now = Date.now();
      const delta = now - lastKeyTimeRef.current;
      lastKeyTimeRef.current = now;

      // máy quét gõ rất nhanh: < 40ms/ ký tự
      const isScannerSpeed = delta < 40;

      if (e.key === "Enter") {
        const raw = bufferRef.current.trim();
        bufferRef.current = "";
        if (raw) fillFormFromScan(raw);
        return;
      }

      if (e.key.length === 1) {
        if (isScannerSpeed) bufferRef.current += e.key;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedButton]); // đổi loại thẻ → parse ưu tiên khác nhau

  return (
    <div className="relative">
      <div className="w-full">
        {/* POPUP CHỌN PHƯƠNG THỨC */}
        {showPopup && (
          <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-15 h-15 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-200 text-gray-600 text-xl font-bold transition-colors"
                aria-label="Đóng"
              >
                X
              </button>
              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
                Chọn loại thông tin
              </h2>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {["CCCD", "VSSID", "VNEID", "BHYT"].map((k) => (
                  <button
                    key={k}
                    onClick={() => handleButtonClick(k)}
                    className="p-6 bg-white text-black-600 rounded-lg shadow-md border-2 border-green-500 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  >
                    <div className="text-center">{k}</div>
                  </button>
                ))}
              </div>
              <div className="text-center text-gray-500 text-sm mt-6">
                Chọn loại giấy tờ tùy thân để tiếp tục
              </div>
            </div>
          </div>
        )}

        {/* NỘI DUNG CHÍNH */}
        {!showPopup && (
          <div className="w-full">
            <div className="text-center mb-6">
              <p className="text-lg text-green-600 font-semibold">
                Vui lòng quét mã thẻ {selectedButton} để xác thực
              </p>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* FORM 8/12 */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                {/* HÀNH CHÍNH */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin hành chính</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Họ tên:</label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">CCCD:</label>
                      <input
                        type="text"
                        value={cccd}
                        onChange={(e) => setCccd(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Giới tính:</label>
                      <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      >
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Ngày sinh:</label>
                      <DatePicker
                        selected={birthDate}
                        onChange={(date) => setBirthDate(date)}
                        dateFormat="dd/MM/yyyy"
                        locale={vi}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                        placeholderText="Chọn ngày sinh"
                      />
                    </div>
                  </div>
                </div>

                {/* BẢO HIỂM */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Thông tin bảo hiểm</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">BHYT:</label>
                      <input
                        type="text"
                        value={bhyt}
                        onChange={(e) => setBhyt(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Mã đăng ký BHYT:</label>
                      <input
                        type="text"
                        value={bhytReg}
                        onChange={(e) => setBhytReg(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Hạn BHYT:</label>
                      <input
                        type="text"
                        value={bhytExpiry}
                        onChange={(e) => setBhytExpiry(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                        placeholder="dd/mm/yyyy"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Địa chỉ:</label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* HƯỚNG DẪN 4/12 */}
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">{currentCardInfo.title}</h4>
                  <div className="flex-1 flex flex-col justify-center">
                    <img
                      src={currentCardInfo.image}
                      alt={`Hướng dẫn quét ${selectedButton}`}
                      className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Không+thể+tải+ảnh";
                      }}
                    />
                    <div className="text-sm text-gray-600 text-center bg-white p-3 rounded-lg">
                      <p className="font-medium mb-2">Cách thực hiện:</p>
                      {currentCardInfo.instructions.map((instruction, index) => (
                        <p key={index}>{instruction}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NÚT CHỜ QUÉT */}
            <div className="mt-8">
              <button className="w-full p-4 bg-gray-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="uppercase">MỜI BẠN QUÉT MÃ {selectedButton}</span>
                </div>
              </button>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-700 text-sm font-medium">Đang chờ quét thẻ...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KioskBHYT;
