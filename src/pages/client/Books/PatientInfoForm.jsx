import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';


const PatientInfoForm = ({ onComplete, onBack, selectedInfo, dateTimeInfo }) => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    insuranceId: '',
    symptoms: '',
    address: '',
    birthDate: ''
  });

  const handleSubmit = () => {
    if (patientInfo.name && patientInfo.phone && patientInfo.insuranceId) {
      onComplete(patientInfo);
    }
  };

  const getSessionText = (session) => {
    return session === 'morning' ? 'Buổi sáng' : 'Buổi chiều';
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Quay lại
        </button>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thông tin đặt lịch</h2>
        <div className="text-gray-600 space-y-1">
          <p>Chuyên khoa: <span className="font-medium text-blue-600">{selectedInfo?.specialty?.name}</span></p>
          <p>Bác sĩ: <span className="font-medium text-blue-600">{selectedInfo?.doctor?.name}</span></p>
          <p>Thời gian: <span className="font-medium text-blue-600">
            {dateTimeInfo?.date} - {getSessionText(dateTimeInfo?.session)} - {dateTimeInfo?.time}
          </span></p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-blue-800 mb-2">📋 Thông tin cần chuẩn bị:</h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Thẻ bảo hiểm y tế (BHYT)</li>
            <li>• Chứng minh nhân dân/Căn cước công dân</li>
            <li>• Kết quả xét nghiệm gần nhất (nếu có)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={patientInfo.name}
                onChange={(e) => setPatientInfo({...patientInfo, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập họ và tên"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ngày sinh
              </label>
              <input
                type="date"
                value={patientInfo.birthDate}
                onChange={(e) => setPatientInfo({...patientInfo, birthDate: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={patientInfo.phone}
                onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Số thẻ BHYT <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={patientInfo.insuranceId}
                onChange={(e) => setPatientInfo({...patientInfo, insuranceId: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập số thẻ bảo hiểm y tế"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
            <input
              type="text"
              value={patientInfo.address}
              onChange={(e) => setPatientInfo({...patientInfo, address: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Nhập địa chỉ hiện tại"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Triệu chứng/Lý do khám
            </label>
            <textarea
              value={patientInfo.symptoms}
              onChange={(e) => setPatientInfo({...patientInfo, symptoms: e.target.value})}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mô tả chi tiết triệu chứng hoặc lý do khám bệnh để bác sĩ tư vấn tốt hơn"
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-medium text-yellow-800 mb-2"> Lưu ý quan trọng:</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Vui lòng có mặt trước 15 phút so với giờ hẹn</li>
              <li>• Mang theo đầy đủ giấy tờ cần thiết</li>
              <li>• Liên hệ hotline nếu cần thay đổi lịch hẹn</li>
            </ul>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!patientInfo.name || !patientInfo.phone || !patientInfo.insuranceId}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-medium py-4 px-6 rounded-lg transition-colors text-lg"
          >
             Xác nhận đặt lịch khám
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientInfoForm;