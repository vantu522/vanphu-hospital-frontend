import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const KioskInterface = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setShowPopup(false); // Close popup after selecting a button
  };

  const closePopup = () => {
    setShowPopup(false); // Close popup when the close button (X) is clicked
    navigate("/dat-lich");
  };

  return (
    <div className="bg-gray-50 w-full mx-auto mt-5 p-6 max-w-3xl rounded-lg shadow-lg relative">
      {/* Popup (Initially visible) */}
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-[600px] relative flex flex-col items-center">
            {/* Nút đóng popup */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xl font-bold"
              aria-label="Đóng"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-center mb-6">Chọn loại thông tin</h2>
            <div className="grid grid-cols-4 gap-4 text-center w-full mb-5">
              <button
                onClick={() => handleButtonClick("CCCD")}
                className="p-4 bg-white text-blue-600 rounded-md shadow-md border border-blue-500 font-semibold hover:bg-blue-600 hover:text-white transition-colors focus:ring-2 focus:ring-blue-500"
              >
                CCCD
              </button>
              <button
                onClick={() => handleButtonClick("VSSID")}
                className="p-4 bg-white text-blue-600 rounded-md shadow-md border border-blue-500 font-semibold hover:bg-blue-600 hover:text-white transition-colors focus:ring-2 focus:ring-blue-500"
              >
                VSSID
              </button>
              <button
                onClick={() => handleButtonClick("VNID")}
                className="p-4 bg-white text-blue-600 rounded-md shadow-md border border-blue-500 font-semibold hover:bg-blue-600 hover:text-white transition-colors focus:ring-2 focus:ring-blue-500"
              >
                VNID
              </button>
              <button
                onClick={() => handleButtonClick("BHYT")}
                className="p-4 bg-white text-blue-600 rounded-md shadow-md border border-blue-500 font-semibold hover:bg-blue-600 hover:text-white transition-colors focus:ring-2 focus:ring-blue-500"
              >
                BHYT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display information after closing the popup */}
      {!showPopup && (
        <div className="text-center mb-6">
          <p className="text-xl text-blue-600 font-semibold">
            {selectedButton
              ? `Thông tin ${selectedButton}`
              : "Chọn một loại thông tin để xác thực"}
          </p>
        </div>
      )}

      {/* Information Form with 7:3 layout (form left, image right) */}
      {!showPopup && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {selectedButton
              ? `Thông tin ${selectedButton}`
              : "Chọn một loại thông tin để xác thực"}
          </h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Section (Form) - 7/10 width */}
            <div className="col-span-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Họ tên:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  CCCD:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Ngày sinh:
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mã thẻ BHYT:
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Hạn BHYT:
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Right Section (Image) - 3/10 width */}
            <div className="col-span-4">
              <img
                src="https://tanhungha.com.vn/storage/images/news/ma-vach-qr-code-tren-the-cccd-vinpos.jpg"
                alt="Image"
                className="w-full h-auto rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Disabled Button (after closing popup) */}
      {!showPopup && (
        <div className="mt-6">
          <button
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
            disabled
          >
            MỜI BẠN QUÉT MÃ CĂN CƯỚC CÔNG DÂN
          </button>
        </div>
      )}
    </div>
  );
};

export default KioskInterface;
