// components/BHYTVerification.js
import React, { useState } from "react";

const BHYTVerification = ({
  healthCard,
  isCardValid,
  isVerifying,
  handleBHYTInput,
  verifyBHYT
}) => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-green-600 mb-6 sm:mb-8">
        Xác thực thông tin BHYT
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <div className="flex-1 bg-gray-50 rounded-lg p-4 sm:p-6 min-h-[400px] sm:min-h-[500px]">
          {/* Administrative Information Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Họ và tên</label>
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Nhập họ và tên"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Số CCCD/CMND</label>
            <input
              type="text"
              value={idNumber}
              onChange={handleIdNumberChange}
              placeholder="Nhập số CCCD/CMND (12 số)"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              maxLength="12"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Ngày sinh</label>
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Nhập số điện thoại"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Địa chỉ</label>
            <textarea
              value={address}
              onChange={handleAddressChange}
              placeholder="Nhập địa chỉ hiện tại"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              rows="3"
            />
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-4 sm:p-6 min-h-[400px] sm:min-h-[500px]">
          {/* BHYT Information Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Số thẻ BHYT</label>
            <input
              type="text"
              value={healthCard}
              onChange={handleBHYTInput}
              placeholder="Nhập mã thẻ BHYT (15 ký tự)"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
              maxLength="15"
            />
          </div>

          <button
            onClick={() => verifyBHYT(healthCard)}
            disabled={!healthCard || isVerifying}
            className={`w-full py-3 rounded-lg transition-colors font-semibold ${
              isVerifying
                ? 'bg-yellow-500 text-white cursor-wait'
                : healthCard
                ? isCardValid
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isVerifying ? 'Đang kiểm tra...' : isCardValid ? ' Đã xác thực' : 'Kiểm tra thẻ BHYT'}
          </button>

          {/* Display BHYT Details if valid */}
          {isCardValid && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
              <p className="font-semibold">✅ Xác thực thành công!</p>
              <div className="mt-3">
                <div className="text-left">
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Mã thẻ:</span>
                    <span className="font-semibold text-gray-800">{healthCard}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Họ tên:</span>
                    <span className="font-semibold text-gray-800">{fullName}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Nơi KCB:</span>
                    <span className="font-semibold text-gray-800">Bệnh viện Đa khoa</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Hạn sử dụng:</span>
                    <span className="font-semibold text-green-600">31/12/2024</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Tình trạng:</span>
                    <span className="font-semibold text-green-600"> Hợp lệ</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-gray-600">Quyền lợi:</span>
                    <span className="font-semibold text-blue-600">80% chi phí</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BHYTVerification;
