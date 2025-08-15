// Doctor Detail Page Component
import React, { useState, useEffect } from "react";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import dichvu from '../../../assets/images/dichvu.png'

import {
  FaCalendarAlt,
  FaPhone,
  FaUserMd,
  FaCertificate,
  FaHospital,
  FaStethoscope,
} from "react-icons/fa";
import DoctorTeam from "../../../components/client/sections/Home/DoctorTeam";
import { useParams } from "react-router-dom";
import { getDoctorBySlug } from "../../../services/client/doctors";
import PageBanner from "../../../components/client/PageBanner";

const DoctorDetail = () => {
  const { slug } = useParams();
  const [doctorDetail, setDoctorDetail] = useState({});

  useEffect(() => {
    const fetchDoctorDetail = async () => {
      try {
        const response = await getDoctorBySlug(slug);
        setDoctorDetail(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };
    fetchDoctorDetail();
  }, [slug]);

  return (
    <div className="bg-white">
           <PageBanner
      backgroundImage={dichvu}
      title="Chi tiết bác sĩ"
      breadcrumbs={[
        {label:"Trang chủ", href:"/"},
        {label:"Danh sách bác sĩ", },
        {label:"Chi tiết bác sĩ", active:true}

      ]}
      />
      {/* Hero section with doctor's banner */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-64 h-80 overflow-hidden shadow-lg">
                {doctorDetail?.avatar && (
                  <img
                    src={doctorDetail.avatar}
                    alt={doctorDetail.full_name || "Bác sĩ"}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <div className="w-full md:w-2/3 text-black">
              {doctorDetail.full_name && (
                <h1 className="text-3xl font-bold mb-2">
                  {doctorDetail.full_name}
                </h1>
              )}
              <div className="flex flex-wrap gap-4 mb-6">
                {doctorDetail.specialties  && (
                  <span className="bg-green-400 hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-full text-xl transition-all duration-500 ease-in-out">
                    {doctorDetail.specialties?.name}
                  </span>
                )}
                {doctorDetail.hospital && doctorDetail.hospital.trim() !== '' && (
                  <span className="bg-green-400 hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-full text-xl transition-all duration-500 ease-in-out">
                    {doctorDetail.hospital}
                  </span>
                )}
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
           

            {/* Quá trình đào tạo - chỉ hiển thị khi có dữ liệu */}
            {doctorDetail?.training_process && 
             doctorDetail.training_process.length > 0 && 
             doctorDetail.training_process.some(item => item && item.trim() !== '') && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">
                  Quá trình đào tạo
                </h2>
                <ul className="list-disc pl-5 text-gray-800">
                  {doctorDetail.training_process
                    .filter(item => item && item.trim() !== '')
                    .map((exp, index) => (
                      <li key={index} className="mb-2">
                        {exp}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Kinh nghiệm làm việc - chỉ hiển thị khi có dữ liệu */}
            {doctorDetail?.experience && 
             doctorDetail.experience.length > 0 && 
             doctorDetail.experience.some(item => item && item.trim() !== '') && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">
                  Kinh nghiệm làm việc
                </h2>
                <ul className="list-disc pl-5 text-gray-800">
                  {doctorDetail.experience
                    .filter(item => item && item.trim() !== '')
                    .map((exp, index) => (
                      <li key={index} className="mb-2">
                        {exp}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Chứng chỉ chuyên môn - chỉ hiển thị khi có dữ liệu */}
            {doctorDetail?.certifications && 
             doctorDetail.certifications.length > 0 && 
             doctorDetail.certifications.some(cert => cert && cert.trim() !== '') && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">
                  Chứng chỉ chuyên môn
                </h2>
                <ul className="list-disc pl-5 text-gray-800">
                  {doctorDetail.certifications
                    .filter(cert => cert && cert.trim() !== '')
                    .map((cert, index) => (
                      <li key={index} className="mb-2">
                        {cert}
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {/* Lĩnh vực chuyên môn - chỉ hiển thị khi có dữ liệu */}
            {doctorDetail?.expertise_fields && 
             doctorDetail.expertise_fields.length > 0 && 
             doctorDetail.expertise_fields.some(field => field && field.trim() !== '') && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4 pb-2 border-b border-green-200">
                  Lĩnh vực chuyên môn
                </h2>
                <ul className="list-disc pl-5 text-gray-800">
                  {doctorDetail.expertise_fields
                    .filter(field => field && field.trim() !== '')
                    .map((spec, index) => (
                      <li key={index} className="mb-2">
                        {spec}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right column - Contact & Schedule */}
          <div className="w-full md:w-1/3">
            <div className="text-left">
               {/* Giới thiệu - chỉ hiển thị khi có description */}
            {doctorDetail?.description && (
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  Giới thiệu
                </h2>
                <div
                  className="text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: doctorDetail.description }}
                />
              </div>
            )}
            
            </div>
          </div>
        </div>
      </div>

      <DoctorTeam />
    </div>
  );
};

export default DoctorDetail;