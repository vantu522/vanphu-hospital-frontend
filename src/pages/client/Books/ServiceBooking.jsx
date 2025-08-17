import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import CCScanner from "./CCScanner";
const ServiceBooking = () => {
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
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
    const [showQRScanner, setShowQRScanner] = useState(false);

  const handleCCCDScan = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

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

  const doctorsByDepartment = {
    "Khoa Nội tổng hợp": [
      { name: "BS. Nguyễn Văn An", room: "Phòng 101", price: "200,000 VNĐ" },
      { name: "BS. Trần Thị Bình", room: "Phòng 102", price: "250,000 VNĐ" },
      { name: "BS. Lê Minh Cường", room: "Phòng 103", price: "300,000 VNĐ" },
    ],
    "Khoa Ngoại tổng hợp": [
      { name: "BS. Phạm Văn Đức", room: "Phòng 201", price: "350,000 VNĐ" },
      { name: "BS. Hoàng Thị Em", room: "Phòng 202", price: "400,000 VNĐ" },
    ],
    "Khoa Sản phụ khoa": [
      { name: "BS. Nguyễn Thị Hoa", room: "Phòng 301", price: "300,000 VNĐ" },
      { name: "BS. Trần Văn Giang", room: "Phòng 302", price: "350,000 VNĐ" },
    ],
    "Khoa Nhi": [
      { name: "BS. Lê Thị Kim", room: "Phòng 401", price: "250,000 VNĐ" },
      { name: "BS. Vũ Văn Long", room: "Phòng 402", price: "280,000 VNĐ" },
    ],
    "Khoa Mắt": [
      { name: "BS. Đặng Thị Mai", room: "Phòng 501", price: "320,000 VNĐ" },
      { name: "BS. Bùi Văn Nam", room: "Phòng 502", price: "350,000 VNĐ" },
    ],
    "Khoa Tai mũi họng": [
      { name: "BS. Cao Thị Oanh", room: "Phòng 601", price: "280,000 VNĐ" },
      { name: "BS. Dương Văn Phong", room: "Phòng 602", price: "300,000 VNĐ" },
    ],
  };

  const timeSlots = {
    morning: [
      "07:00",
      "07:30",
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
    ],
    afternoon: ["13:30", "14:00", "14:30", "15:00", "15:30", "16:00"],
  };

// Hàm tạo danh sách ngày trong tuần (theo offset) - ĐÃ SỬA
function getAvailableDays(offset = 0) {
  const now = new Date();
  // Sử dụng múi giờ địa phương thay vì UTC
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i + offset * 7);

    // Tạo chuỗi ngày theo định dạng YYYY-MM-DD
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const fullDate = `${year}-${month}-${day}`;

    days.push({
      fullDate: fullDate,
      date: date.getDate(),
      month: date.getMonth() + 1,
      name: i === 0 && offset === 0 ? "Hôm nay" : i === 1 && offset === 0 ? "Ngày mai" : "",
      shortName: date.toLocaleDateString("vi-VN", { weekday: "short" }), // Th 2, Th 3...
      isPast: date < today, // So sánh với today (cũng dùng múi giờ địa phương)
    });
  }
  return days;
}

// Hàm điều hướng tuần
function navigateWeek(direction) {
  setCurrentWeekOffset((prev) =>
    direction === "next" ? prev + 1 : Math.max(prev - 1, 0)
  );
}

// Danh sách ngày hiển thị
const availableDays = getAvailableDays(currentWeekOffset);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Reset doctor when department changes
    if (name === "department") {
      setFormData((prev) => ({ ...prev, doctor: "" }));
    }
  };

  const handleDateSelect = (dateInfo) => {
    setFormData((prev) => ({
      ...prev,
      appointmentDate: dateInfo.fullDate,
      appointmentTime: "", // Reset time when date changes
    }));
    setShowTimeSlots(true);
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({
      ...prev,
      appointmentTime: time,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBookingId =
      "BHYT-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    setBookingId(newBookingId);

    const qrData = JSON.stringify({
      bookingId: newBookingId,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      department: formData.department,
      doctor: formData.doctor,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
    });

    setQrCodeData(qrData);
  };

  const selectedDateInfo = availableDays.find(
    (day) => day.fullDate === formData.appointmentDate
  );
  const availableDoctors = formData.department
    ? doctorsByDepartment[formData.department] || []
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-4 sm:py-8 px-2 sm:px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            
         
          {/* Header */}
          <div className="bg-green-50 px-4 sm:px-6 py-3 sm:py-4 border-b flex justify-between items-center">
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-700">
                Thông tin đặt lịch khám theo dịch vụ
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Vui lòng điền đầy đủ thông tin để đặt lịch khám
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowQRScanner(!showQRScanner)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              {showQRScanner ? "Đóng Camera" : "Quét CCCD QR"}
            </button>
          </div>

          {/* QR Scanner */}
          {showQRScanner && (
            <CCScanner
              onScanSuccess={handleCCCDScan}
              onClose={() => setShowQRScanner(false)}
            />
          )}

          {/* Form */}
          <div className="p-4 sm:p-6 lg:p-10 text-sm sm:text-base lg:text-lg">
            <div>
              {/* Thông tin bệnh nhân */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  1. Thông tin bệnh nhân
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
                </div>
              </div>

              {/* Thông tin khám */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  2. Thông tin khám bệnh
                </h3>

                {/* Hiển thị thông tin chuyên khoa đã chọn */}
                {formData.department && (
                  <div className="mb-6 p-4 bg-pink-100 rounded-lg border-l-4 border-pink-500">
                    <div className="flex items-start">
                      <div className="bg-pink-500 text-white p-2 rounded-md mr-3 mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {formData.department}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Phòng khám chuyên khoa
                        </p>
                        {formData.doctor && (
                          <div className="mt-1">
                            <span className="text-sm text-gray-700">
                              {formData.doctor.split(" - ")[0]} -{" "}
                              {formData.doctor.split(" - ")[1]}
                            </span>
                            <p className="text-pink-600 font-medium text-sm">
                              {formData.doctor.split(" - ")[2]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Chọn khoa khám */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">Khoa khám *</label>
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

                {/* Chọn bác sĩ */}
                {formData.department && availableDoctors.length > 0 && (
                  <div className="mb-6">
                    <label className="block font-medium mb-2">
                      Chọn bác sĩ *
                    </label>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Chọn bác sĩ</option>
                      {availableDoctors.map((doctor, index) => (
                        <option key={index} value={doctor.name}>
                          {doctor.name} - {doctor.room} - {doctor.price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Chọn ngày khám */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">
                    Chọn ngày khám *
                  </label>

                  {/* Week navigation */}
                  <div className="mb-4">
                    {/* Navigation buttons */}
                    <div className="flex items-center justify-between mb-3">
                      <button
                        type="button"
                        onClick={() => navigateWeek("prev")}
                        disabled={currentWeekOffset === 0}
                        className={`flex items-center px-3 py-2 rounded-md text-sm ${
                          currentWeekOffset === 0
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Tuần trước
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => navigateWeek("next")}
                        className="flex items-center px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                      >
                        Tuần sau
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Days grid - responsive */}
                    <div className="grid grid-cols-7 gap-1 sm:gap-2">
                      {availableDays.map((day, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => !day.isPast && handleDateSelect(day)}
                          disabled={day.isPast}
                          className={`p-2 sm:p-3 rounded-lg border text-center transition-colors ${
                            day.isPast
                              ? "text-gray-300 cursor-not-allowed bg-gray-50 border-gray-200"
                              : formData.appointmentDate === day.fullDate
                              ? "bg-pink-500 text-white border-pink-500"
                              : "bg-white hover:bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="font-medium text-xs sm:text-sm">
                            {day.name === "Hôm nay" || day.name === "Ngày mai"
                              ? day.name
                              : day.shortName}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {day.date}/{day.month}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chọn giờ khám */}
                {showTimeSlots && formData.appointmentDate && (
                  <div className="mb-6">
                    <label className="block font-medium mb-2">
                      Chọn giờ khám *
                    </label>

                    {/* Buổi sáng */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">
                        Buổi sáng
                      </h4>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.morning.map((time, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`p-2 border rounded text-sm transition-colors ${
                              formData.appointmentTime === time
                                ? "bg-pink-500 text-white border-pink-500"
                                : "hover:bg-gray-50 border-gray-200"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Buổi chiều */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">
                        Buổi chiều
                      </h4>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.afternoon.map((time, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`p-2 border rounded text-sm transition-colors ${
                              formData.appointmentTime === time
                                ? "bg-pink-500 text-white border-pink-500"
                                : "hover:bg-gray-50 border-gray-200"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Hiển thị thời gian đã chọn */}
                {formData.appointmentDate && formData.appointmentTime && (
                  <div className="mb-6 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">
                      <strong>Thời gian đã chọn:</strong>{" "}
                      {selectedDateInfo?.name} ({selectedDateInfo?.date}/
                      {selectedDateInfo?.month}) - {formData.appointmentTime}
                    </p>
                  </div>
                )}

                {/* Triệu chứng */}
                <div>
                  <label className="block font-medium mb-2">Triệu chứng</label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Mô tả triệu chứng của bạn..."
                  />
                </div>
              </div>

              {/* Nút đặt lịch */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg"
                >
                  Đặt lịch khám
                </button>
              </div>
            </div>

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

export default ServiceBooking;