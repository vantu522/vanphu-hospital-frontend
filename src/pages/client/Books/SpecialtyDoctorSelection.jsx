import React, { useState } from 'react';
import { Calendar, Clock, User, ShieldCheck, ChevronLeft, ChevronRight, Heart, Hospital, Scissors, Baby, Ear, Eye } from 'lucide-react';

// Component 1: Chọn khoa và bác sĩ
const SpecialtyDoctorSelection = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0); // 0: chọn khoa, 1: chọn bác sĩ
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

  const handleSpecialtySelect = (specialty) => {
    setSelectedSpecialty(specialty);
    setCurrentStep(1);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    onComplete({ specialty: selectedSpecialty, doctor });
  };

  if (currentStep === 0) {
    return (
      <div>
        <div className="text-center mb-6">
          <ShieldCheck className="w-16 h-16 mx-auto text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Đặt lịch khám theo BHYT</h2>
          <p className="text-gray-600">Vui lòng chọn chuyên khoa bạn muốn khám</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={specialty.id}
                onClick={() => handleSpecialtySelect(specialty)}
                className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="mb-3">
                  <IconComponent className="w-12 h-12 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                  {specialty.name}
                </h3>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentStep(0)}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Quay lại
        </button>
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Chọn bác sĩ</h2>
        <p className="text-gray-600">Chuyên khoa: <span className="font-medium text-blue-600">{selectedSpecialty?.name}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(doctors[selectedSpecialty?.id] || []).map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => handleDoctorSelect(doctor)}
            className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-blue-600 text-sm">{doctor.title}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-yellow-500">★ {doctor.rating}</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{doctor.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyDoctorSelection;