import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from "date-fns/locale";

const KioskBHYT = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [birthDate, setBirthDate] = useState(null);

  // Định nghĩa thông tin cho từng loại thẻ
  const cardInfo = {
    CCCD: {
      image: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/6/3/6-17489233625391235970012.jpg",
      title: "Hướng dẫn quét CCCD",
      instructions: [
        "1. Chuẩn bị thẻ CCCD gắn chip",
        "2. Đặt thẻ lên máy đọc",
        "3. Chờ hệ thống xử lý"
      ]
    },
    VSSID: {
      image: "https://media.baosonla.org.vn/public/linhlv/2025-07-10/nhan-vien-y-te-benh-vien-da-khoa-khu-vuc-phu-yen-huong-dan-nhan-dan-dang-ky-kham,-chua-benh-bang-may-kiosk-medipay_.jpg",
      title: "Hướng dẫn quét VSSID",
      instructions: [
        "1. Chuẩn bị thẻ BHXH có mã VSSID",
        "2. Quét mã QR trên thẻ",
        "3. Chờ hệ thống xác thực"
      ]
    },
    VNEID: {
      image: "https://image.dienthoaivui.com.vn/x,webp,q90/https://dashboard.dienthoaivui.com.vn/uploads/dashboard/editor_upload/cach-quet-ma-qr-cccd-tren-vneid-3.jpg",
      title: "Hướng dẫn quét VNEID",
      instructions: [
        "1. Mở ứng dụng VNeID",
        "2. Chọn chức năng chia sẻ thông tin",
        "3. Quét mã QR hiển thị trên màn hình"
      ]
    },
    BHYT: {
      image: "https://tanhungha.com.vn/storage/images/news/Nam%20MKT/tra-cuu-bhyt-tanhungha.jpg",
      title: "Hướng dẫn quét BHYT",
      instructions: [
        "1. Chuẩn bị thẻ BHYT",
        "2. Quét mã QR trên thẻ BHYT",
        "3. Chờ hệ thống đọc thông tin"
      ]
    }
  };

  // Khóa cuộn khi popup mở
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    window.location.href = "/dat-lich";
  };

  // Lấy thông tin của thẻ được chọn
  const currentCardInfo = cardInfo[selectedButton] || cardInfo.CCCD;

  return (
    <div className="relative">
      <div className="w-full">
        {/* Popup Modal */}
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
                <button
                  onClick={() => handleButtonClick("CCCD")}
                  className="p-6 bg-white text-black-600 rounded-lg shadow-md border-2 border-green-500 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <div className="text-center">CCCD</div>
                </button>
                <button
                  onClick={() => handleButtonClick("VSSID")}
                  className="p-6 bg-white text-black-600 rounded-lg shadow-md border-2 border-green-500 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <div className="text-center">VSSID</div>
                </button>
                <button
                  onClick={() => handleButtonClick("VNEID")}
                  className="p-6 bg-white text-black-600 rounded-lg shadow-md border-2 border-green-500 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <div className="text-center">VNEID</div>
                </button>
                <button
                  onClick={() => handleButtonClick("BHYT")}
                  className="p-6 bg-white text-black-600 rounded-lg shadow-md border-2 border-green-500 font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <div className="text-center">BHYT</div>
                </button>
              </div>
              <div className="text-center text-gray-500 text-sm mt-6">
                Chọn loại giấy tờ tùy thân để tiếp tục
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        {!showPopup && (
          <div className="w-full">
            {/* Header text */}
            <div className="text-center mb-6">
              <p className="text-lg text-green-600 font-semibold">
                Vui lòng quét mã thẻ {selectedButton} để xác thực
              </p>
            </div>

            {/* Two column layout 8:4 */}
            <div className="grid grid-cols-12 gap-8">
              {/* Left Column - Form Information (8/12) */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                {/* Administrative Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Thông tin hành chính
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Họ tên:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        CCCD:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Giới tính:
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-md bg-gray-50">
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Ngày sinh:
                      </label>
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

                {/* Insurance Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Thông tin bảo hiểm
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        BHYT:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Mã đăng ký BHYT:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Hạn BHYT:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Địa chỉ:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Card Image (4/12) */}
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    {currentCardInfo.title}
                  </h4>
                  <div className="flex-1 flex flex-col justify-center">
                    <img
                      src={currentCardInfo.image}
                      alt={`Hướng dẫn quét ${selectedButton}`}
                      className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x300?text=Không+thể+tải+ảnh";
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

            {/* Scan Button */}
            <div className="mt-8">
              <button className="w-full p-4 bg-gray-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="uppercase">MỜI BẠN QUÉT MÃ {selectedButton}</span>
                </div>
              </button>
            </div>

            {/* Card Scanner Indicator */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-700 text-sm font-medium">
                  Đang chờ quét thẻ...
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KioskBHYT;