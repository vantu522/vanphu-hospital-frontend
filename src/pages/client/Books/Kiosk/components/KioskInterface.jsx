import React, { useState, useEffect } from "react";

const KioskInterface = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [showPopup, setShowPopup] = useState(true);

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
    // navigate("/dat-lich"); // Uncomment when using react-router-dom
  };
  

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl font-bold transition-colors"
                aria-label="Đóng"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">Chọn loại thông tin</h2>
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
          <div className="bg-white rounded-xl p-6">
            {/* Header text */}
            <div className="text-center mb-6">
              <p className="text-lg text-green-600 font-semibold">
                Xin mời quét mã vạch!
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
                      <input
                        type="select"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        Ngày sinh:
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
                      
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
                    Hướng dẫn quét mã
                  </h4>
                  <div className="flex-1 flex flex-col justify-center">
                    <img
                      src="https://tanhungha.com.vn/storage/images/news/ma-vach-qr-code-tren-the-cccd-vinpos.jpg"
                      alt="Hướng dẫn quét mã QR trên thẻ CCCD"
                      className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                    />
                    <div className="text-sm text-gray-600 text-center bg-white p-3 rounded-lg">
                      <p className="font-medium mb-2">Cách thực hiện:</p>
                      <p>1. Chuẩn bị thẻ CCCD gắn chip</p>
                      <p>2. Đặt thẻ lên máy đọc</p>
                      <p>3. Chờ hệ thống xử lý</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan Button */}
            <div className="mt-8">
              <button className="w-full p-4 bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span>MỜI BẠN QUÉT MÃ CĂN CƯỚC CÔNG DÂN</span>
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

export default KioskInterface;