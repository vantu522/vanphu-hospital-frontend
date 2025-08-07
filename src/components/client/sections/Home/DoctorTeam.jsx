import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { getAllDoctors, getFiveDoctorsBySpecialty } from "../../../../services/client/doctors";


const   DoctorTeam = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    const fetchDoctorTeam = async ()=>{
      try{
        const data = await getFiveDoctorsBySpecialty();
        console.log(data)
        setDoctors(data);
      } catch (error){
        console.error("Error >>", error)
        throw new error;
      }
    }
    fetchDoctorTeam()
  },[])
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Đội ngũ bác sĩ
      </h2>
      <div className="flex justify-center items-center gap-6 px-4 overflow-x-auto scrollbar-hide">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="w-[260px] bg-white rounded-2xl shadow-md p-4 text-center"
          >
            <img
              src={item.avatar}
              alt={item.full_name}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <p className="mt-3 text-sm text-gray-600">{item.degree}: {item.specialties.name}</p>
            <h4 className="mt-2 font-semibold text-green-700">{item.full_name}</h4>
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
