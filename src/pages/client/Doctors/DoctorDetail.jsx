// Doctor Detail Page Component
import React from 'react';
import { IoMdMail, IoLogoWhatsapp } from 'react-icons/io';
import { FaCalendarAlt, FaPhone, FaUserMd, FaCertificate, FaHospital, FaStethoscope } from 'react-icons/fa';
import DoctorTeam from '../../../components/client/sections/Home/DoctorTeam';

const DoctorDetail = () => {
  const doctor = {
    id: 1,
    name: 'Bác sĩ Nguyễn Văn Anh',
    specialty: 'Bác sĩ chuyên khoa Nội Tổng hợp',
    avatar: 'https://hongngochospital.vn/_default_upload_bucket/tach%20nen.jpg',
    experience: '15 năm kinh nghiệm',
    education: 'Đại học Y Hà Nội',
    languages: ['Tiếng Việt', 'Tiếng Anh'],
    introduction: 'Bác sĩ Nguyễn Văn Anh tốt nghiệp Đại học Y Hà Nội năm 2008, và đã hoàn thành chương trình chuyên khoa I Nội Tổng hợp tại Đại học Y Hà Nội năm 2014. Bác sĩ có 15 năm kinh nghiệm làm việc trong lĩnh vực Nội Tổng hợp.',
    workExperience: [
      'Bác sĩ Nội Tổng hợp tại Bệnh viện Hồng Ngọc (2018 - Nay)',
      'Bác sĩ Nội Tổng hợp tại Bệnh viện Bạch Mai (2010 - 2018)',
      'Bác sĩ Nội thực tập tại Bệnh viện Việt Đức (2008 - 2010)'
    ],
    certifications: [
      'Chứng chỉ hành nghề khám bệnh, chữa bệnh - Bộ Y tế',
      'Chứng nhận thực hành tốt y khoa - Bộ Y tế',
      'Chứng chỉ siêu âm tổng quát - Bệnh viện Bạch Mai'
    ],
    specializations: [
      'Khám và điều trị các bệnh lý Nội khoa',
      'Tư vấn, điều trị các bệnh lý mãn tính như tăng huyết áp, đái tháo đường',
      'Siêu âm tổng quát',
      'Khám sức khỏe định kỳ, tư vấn dinh dưỡng'
    ],
    schedule: {
      monday: '8:00 - 12:00',
      tuesday: '13:30 - 17:00',
      wednesday: '8:00 - 12:00',
      thursday: '13:30 - 17:00',
      friday: '8:00 - 12:00',
      saturday: '8:00 - 11:30',
      sunday: 'Nghỉ'
    }
  };

  return (
    <div className="bg-white">
      {/* Hero section with doctor's banner */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-64 h-80 overflow-hidden  shadow-lg">
                <img 
                  src={doctor.avatar} 
                  alt="Bác sĩ Nguyễn Văn Anh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-black">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl mb-4">{doctor.specialty}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-green-400 hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-full text-xl transition-all duration-500 ease-in-out">
                    {doctor.experience}
                </span>
                <span className="bg-green-400 hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-full text-xl transition-all duration-500 ease-in-out">
                    Chuyên khoa Nội
                </span>
                <span className="bg-green-400 hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-full text-xl transition-all duration-500 ease-in-out">
                    {doctor.education}
                </span>
            </div>

              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition duration-300 flex items-center">
                <FaCalendarAlt className="mr-2" /> Đặt lịch khám
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-35 py-12">
        <div className="flex flex-col md:flex-row">
          {/* Left column - Doctor information */}
          <div className="w-full md:w-2/3 pr-0 md:pr-8">
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Giới thiệu</h2>
              <p className="text-gray-800 mb-4">{doctor.introduction}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">Kinh nghiệm làm việc</h2>
              <ul className="list-disc pl-5 text-gray-800">
                {doctor.workExperience.map((exp, index) => (
                  <li key={index} className="mb-2">{exp}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">Chứng chỉ chuyên môn</h2>
              <ul className="list-disc pl-5 text-gray-800">
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="mb-2">{cert}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">Lĩnh vực chuyên môn</h2>
              <ul className="list-disc pl-5 text-gray-800">
                {doctor.specializations.map((spec, index) => (
                  <li key={index} className="mb-2">{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column - Contact & Schedule */}
          <div className="w-full md:w-1/3">
            

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">Lịch khám</h3>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 2:</span>
                <span>{doctor.schedule.monday}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 3:</span>
                <span>{doctor.schedule.tuesday}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 4:</span>
                <span>{doctor.schedule.wednesday}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 5:</span>
                <span>{doctor.schedule.thursday}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 6:</span>
                <span>{doctor.schedule.friday}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">Thứ 7:</span>
                <span>{doctor.schedule.saturday}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Chủ nhật:</span>
                <span>{doctor.schedule.sunday}</span>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-green-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-700 transition duration-300 w-full flex items-center justify-center">
                <FaCalendarAlt className="mr-2" /> Đặt lịch khám với bác sĩ
              </button>
            </div>
          </div>
        </div>
      </div>

     <DoctorTeam/>

   
    </div>
  );
};

export default DoctorDetail;