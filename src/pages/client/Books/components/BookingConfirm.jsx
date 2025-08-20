// filepath: c:\Users\LENOVO\Dev\Web\vanphu_hospital\frontend_hospital\src\pages\client\Books\components\BookingConfirm.jsx
import React from "react";

const BookingConfirmation = ({ qrCode, generateQRCode, bookingInfo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
        Xác nhận đặt lịch khám
      </h2>
      <div className="max-w-md mx-auto">
        {/* Hiển thị thông tin đặt lịch */}
        {bookingInfo && (
          <div className="mb-6 text-left">
            <p><b>Họ tên:</b> {bookingInfo.name}</p>
            <p><b>Khoa:</b> {bookingInfo.department}</p>
            <p><b>Thời gian:</b> {bookingInfo.time}</p>
            <p><b>Số điện thoại:</b> {bookingInfo.phone}</p>
            {/* Thêm các trường khác nếu cần */}
          </div>
        )}
        <button onClick={generateQRCode}>Xác nhận đặt lịch</button>
        {qrCode && <div>QR Code: {qrCode}</div>}
      </div>
    </div>
  );
};

export default BookingConfirmation;