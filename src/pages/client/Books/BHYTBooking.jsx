import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const BHYTBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    idNumber: "",
    birthDate: "",
    gender: "",
    address: "",
    bhytNumber: "",
    department: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
    hasBeenHereBefore: false,
  });

  const [qrCodeData, setQrCodeData] = useState("");
  const [bookingId, setBookingId] = useState("");

  const departments = [
    "Khoa Nội tổng hợp",
    "Khoa Ngoại tổng hợp",
    "Khoa Sản phụ khoa",
    "Khoa Nhi",
    "Khoa Mắt",
    "Khoa Tai mũi họng",
    "Khoa Da liễu",
    "Khoa Thần kinh",
    "Khoa Tim mạch",
    "Khoa Tiêu hóa",
    "Khoa Hô hấp",
    "Khoa Cơ xương khớp",
    "Khoa Tâm thần",
    "Khoa Nha khoa",
  ];

  const timeSlots = [
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    // Giả lập bookingId (UUID rút gọn)
    const newBookingId = "BHYT-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    setBookingId(newBookingId);

    // Sinh dữ liệu QR code (có thể chứa toàn bộ thông tin hoặc chỉ bookingId)
    const qrData = JSON.stringify({
      bookingId: newBookingId,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      department: formData.department,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
    });

    setQrCodeData(qrData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-4 sm:py-8 px-2 sm:px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-green-50 px-4 sm:px-6 py-3 sm:py-4 border-b">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-700">
              Thông tin đặt lịch khám Bảo hiểm y tế
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Vui lòng điền đầy đủ thông tin để đặt lịch khám
            </p>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-6 lg:p-10 text-sm sm:text-base lg:text-lg">
            <form onSubmit={handleSubmit}>
              {/* Thông tin bệnh nhân */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  1. Thông tin bệnh nhân
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Họ tên */}
                  <div>
                    <label className="block font-medium">Họ và tên *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* Số điện thoại */}
                  <div>
                    <label className="block font-medium">Số điện thoại *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  {/* CMND */}
                  <div>
                    <label className="block font-medium">CMND/CCCD *</label>
                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* Ngày sinh */}
                  <div>
                    <label className="block font-medium">Ngày sinh *</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* Giới tính */}
                  <div>
                    <label className="block font-medium">Giới tính *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Chọn giới tính</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                    </select>
                  </div>
                  {/* Địa chỉ */}
                  <div className="md:col-span-2">
                    <label className="block font-medium">Địa chỉ *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* Số BHYT */}
                  <div>
                    <label className="block font-medium">Số thẻ BHYT *</label>
                    <input
                      type="text"
                      name="bhytNumber"
                      value={formData.bhytNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Thông tin khám */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  2. Thông tin khám bệnh
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="block font-medium">Khoa khám *</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Chọn khoa khám</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
            
                  <div>
                    <label className="block font-medium">Ngày khám *</label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Giờ khám *</label>
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Chọn giờ khám</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-medium">Triệu chứng</label>
                    <textarea
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Nút đặt lịch */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg"
                >
                  Đặt lịch khám
                </button>
              </div>
            </form>

            {/* Hiển thị QR Code sau khi đặt lịch */}
            {qrCodeData && (
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Quét mã QR để Check-in
                </h3>
                <QRCodeCanvas
                  value={qrCodeData}
                  size={200}
                  includeMargin={true}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Mã đặt lịch: {bookingId}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BHYTBooking;
