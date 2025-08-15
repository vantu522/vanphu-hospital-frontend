import { useState } from 'react';

const BHYTBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    idNumber: '',
    birthDate: '',
    gender: '',
    address: '',
    bhytNumber: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    symptoms: '',
    hasBeenHereBefore: false
  });

  const departments = [
    'Khoa Nội tổng hợp',
    'Khoa Ngoại tổng hợp',
    'Khoa Sản phụ khoa',
    'Khoa Nhi',
    'Khoa Mắt',
    'Khoa Tai mũi họng',
    'Khoa Da liễu',
    'Khoa Thần kinh',
    'Khoa Tim mạch',
    'Khoa Tiêu hóa',
    'Khoa Hô hấp',
    'Khoa Cơ xương khớp',
    'Khoa Tâm thần',
    'Khoa Nha khoa'
  ];

  const timeSlots = [
    '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00',
    '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-4 sm:py-8 px-2 sm:px-4 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-green-50 px-4 sm:px-6 py-3 sm:py-4 border-b">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-700">
              Thông tin đặt lịch khám
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Vui lòng điền đầy đủ thông tin để đặt lịch khám
            </p>
          </div>

          {/* Form */}
          <div className="p-4 sm:p-6 lg:p-10 text-sm sm:text-base lg:text-lg">
            {/* Thông tin bệnh nhân */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
                1. Thông tin bệnh nhân
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập email"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    CMND/CCCD <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập số CMND/CCCD"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Ngày sinh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Giới tính <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Địa chỉ <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập địa chỉ đầy đủ"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Số thẻ BHYT <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bhytNumber"
                    value={formData.bhytNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập số thẻ BHYT"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="hasBeenHereBefore"
                    id="hasBeenHereBefore"
                    checked={formData.hasBeenHereBefore}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="hasBeenHereBefore" className="ml-2 block text-sm lg:text-base text-gray-700">
                    Đã từng khám tại bệnh viện
                  </label>
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
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Khoa khám <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Chọn khoa khám</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Bác sĩ (tùy chọn)
                  </label>
                  <input
                    type="text"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Nhập tên bác sĩ"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Ngày khám <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Giờ khám <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Chọn giờ khám</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1">
                    Triệu chứng/Lý do khám
                  </label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 lg:py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Mô tả triệu chứng"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 lg:py-5 px-8 lg:px-12 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-base lg:text-xl"
              >
                <svg className="w-5 h-5 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Đặt lịch khám</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BHYTBooking;
