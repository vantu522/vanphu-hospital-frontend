import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import doctor1 from "../../assets/images/doctors/doctor-1.jpg";
import doctor2 from "../../assets/images/doctors/doctor-2.jpg";
import doctor3 from "../../assets/images/doctors/doctor-3.jpg";
import doctor4 from "../../assets/images/doctors/doctor-4.jpg";

const doctors = [
  {
    name: "PGS.TS.TTND - Lê Văn Thạch",
    title: "Khoa Cấp Cứu - Hồi Sức Tích Cực ICU",
    image: doctor1,
  },
  {
    name: "PGS.TS.BS - Hà Kim Trung",
    title: "Khoa Ngoại Tổng Hợp - Trưởng Khoa",
    image: doctor2,
  },
  {
    name: "TTƯT.ThS.BSCKI - Bùi Xuân Quyền",
    title: "Khoa Sản - Phụ Khoa - Trưởng Khoa Sản Phụ Khoa",
    image: doctor3,
  },
  {
    name: "PGS.TS.TTND - Nguyễn Xuân Hùng",
    title: "Khoa Ngoại Tổng Hợp - Giám Đốc Trung Tâm Tiêu Hóa",
    image: doctor4,
  },
];

const DoctorTeam = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Đội ngũ bác sĩ
      </h2>
      <div className="flex justify-center items-center gap-6 px-4 overflow-x-auto scrollbar-hide">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="w-[260px] bg-white rounded-2xl shadow-md p-4 text-center"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <p className="mt-3 text-sm text-gray-600">{doctor.title}</p>
            <h4 className="mt-2 font-semibold text-green-700">{doctor.name}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaArrowLeft />
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DoctorTeam;
