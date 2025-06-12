import React, { useState } from 'react';
import { User, ShieldCheck, Heart, Hospital, Scissors, Baby, Ear, Eye, ChevronLeft } from 'lucide-react';


const SpecialtyDoctorSelection = ({ onComplete, onBack }) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const specialties = [
    { id: 1, name: 'Tim mạch', icon: Heart, description: 'Khám và điều trị các bệnh về tim mạch' },
    { id: 2, name: 'Nội khoa', icon: Hospital, description: 'Khám tổng quát và điều trị nội khoa' },
    { id: 3, name: 'Ngoại khoa', icon: Scissors, description: 'Phẫu thuật và điều trị ngoại khoa' },
    { id: 4, name: 'Sản phụ khoa', icon: Baby, description: 'Chăm sóc sức khỏe phụ nữ và trẻ em' },
    { id: 5, name: 'Tai mũi họng', icon: Ear, description: 'Khám và điều trị tai mũi họng' },
    { id: 6, name: 'Mắt', icon: Eye, description: 'Khám và điều trị các bệnh về mắt' }
  ];

  const doctors = {
    1: [
      { id: 1, name: 'BS. Nguyễn Văn A', title: 'Chuyên khoa I', experience: '15 năm kinh nghiệm', rating: 4.8 },
      { id: 2, name: 'BS. Trần Thị B', title: 'Chuyên khoa II', experience: '12 năm kinh nghiệm', rating: 4.7 }
    ],
    2: [
      { id: 3, name: 'BS. Lê Văn C', title: 'Tiến sĩ', experience: '20 năm kinh nghiệm', rating: 4.9 },
      { id: 4, name: 'BS. Phạm Thị D', title: 'Chuyên khoa I', experience: '10 năm kinh nghiệm', rating: 4.6 }
    ],
    3: [
      { id: 5, name: 'BS. Hoàng Văn E', title: 'Phó Giáo sư', experience: '25 năm kinh nghiệm', rating: 4.9 },
      { id: 6, name: 'BS. Đinh Thị F', title: 'Chuyên khoa II', experience: '18 năm kinh nghiệm', rating: 4.8 }
    ],
    4: [
      { id: 7, name: 'BS. Võ Thị G', title: 'Chuyên khoa I', experience: '14 năm kinh nghiệm', rating: 4.7 }
    ],
    5: [
      { id: 8, name: 'BS. Đặng Văn H', title: 'Chuyên khoa II', experience: '16 năm kinh nghiệm', rating: 4.8 }
    ],
    6: [
      { id: 9, name: 'BS. Lưu Thị I', title: 'Tiến sĩ', experience: '22 năm kinh nghiệm', rating: 4.9 }
    ]
  };

  const handleSpecialtyChange = (e) => {
    const specialtyId = parseInt(e.target.value);
    const specialty = specialties.find(s => s.id === specialtyId);
    setSelectedSpecialty(specialty);
    setSelectedDoctor(null); 
  };

  const handleDoctorChange = (e) => {
    const doctorId = parseInt(e.target.value);
    if (selectedSpecialty) {
      const doctor = doctors[selectedSpecialty.id]?.find(d => d.id === doctorId);
      setSelectedDoctor(doctor);
    }
  };

  const handleSubmit = () => {
    if (selectedSpecialty && selectedDoctor) {
      onComplete({ specialty: selectedSpecialty, doctor: selectedDoctor });
    }
  };

  const isFormValid = selectedSpecialty && selectedDoctor;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">

           <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-green-600 hover:text-green-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Quay lại
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Đặt lịch khám theo bác sĩ</h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Vui lòng chọn chuyên khoa để hệ thống gợi ý các bác sĩ chuyên môn phù hợp nhất với nhu cầu khám của bạn,<br />
          sau đó chọn thời gian và đặt hẹn.
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Specialty Selection */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Chuyên khoa:
          </label>
          <div className="relative">
            <select
              value={selectedSpecialty?.id || ''}
              onChange={handleSpecialtyChange}
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none bg-white"
            >
              <option value="">- Chọn chuyên khoa -</option>
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Bác sĩ:
          </label>
          <div className="relative">
            <select
              value={selectedDoctor?.id || ''}
              onChange={handleDoctorChange}
              disabled={!selectedSpecialty}
              className={`w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none ${
                !selectedSpecialty ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
              }`}
            >
              <option value="">Chọn bác sĩ</option>
              {selectedSpecialty && doctors[selectedSpecialty.id]?.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.title}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {selectedDoctor && (
        <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Thông tin bác sĩ đã chọn:</h3>
          <div className="flex items-start">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-800">{selectedDoctor.name}</h4>
              <p className="text-blue-600 font-medium">{selectedDoctor.title}</p>
              <p className="text-gray-600 mt-1">{selectedDoctor.experience}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-gray-700 font-medium">{selectedDoctor.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`px-8 py-3 rounded-full font-medium text-lg transition-all ${
            isFormValid
              ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default SpecialtyDoctorSelection;