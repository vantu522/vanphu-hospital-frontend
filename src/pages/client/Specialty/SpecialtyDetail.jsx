import React, { useEffect, useState } from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import DoctorTeam from "../../../components/client/sections/Home/DoctorTeam";
import { href, useParams } from "react-router-dom";
import { getSpecialtyBySlug } from "../../../services/client/specialties";

const SpecitaltyDetail = () => {
  const { slug } = useParams();
  const [specialtyDetail, setSpecialtyDetail] = useState(null);

  useEffect(() => {
    const fetchSpecialtySetail = async () => {
      try {
        const response = await getSpecialtyBySlug(slug);
        setSpecialtyDetail(response);
      } catch (error) {
        console.error("Error >>", error);
        throw error;
      }
    };
    fetchSpecialtySetail();
  }, [slug]);

  return (
    <div>
      <PageBanner
        backgroundImage={dichvu}
        title="Khám sức khoẻ tổng quát"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Chuyên khoa", active: false, href: "/chuyen-khoa" },
          { label: "Khám sức khoẻ tổng quát", active: true },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 py-20">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Khoa Ngoại Tổng Hợp
            </h1>

            <div className="text-gray-700 space-y-6">
                <p className="leading-relaxed">{specialtyDetail?.description}</p>
         
            </div>

            {/* Statistics Section */}
            <div className="flex flex-wrap justify-between mt-12">
              <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
                <h2 className="text-5xl font-bold text-green-700 mb-2">8</h2>
                <p className="text-gray-700 uppercase font-medium text-sm tracking-wide">
                  PHÒNG MỔ TIÊU CHUẨN ANH
                  <br />
                  QUỐC HBN
                </p>
              </div>

              <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
                <h2 className="text-5xl font-bold text-green-700 mb-2">400+</h2>
                <p className="text-gray-700 uppercase font-medium text-sm tracking-wide">
                  DANH MỤC PHẪU THUẬT
                  <br />
                  CHUYÊN SÂU
                </p>
              </div>

              <div className="w-full md:w-1/3 text-center">
                <h2 className="text-5xl font-bold text-green-700 mb-2">
                  5000+
                </h2>
                <p className="text-gray-700 uppercase font-medium text-sm tracking-wide">
                  CA PHẪU THUẬT THÀNH CÔNG
                  <br />
                  MỖI NĂM
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img
                src="https://hongngochospital.vn/_default_upload_bucket/m%C3%B4%20t%E1%BA%A3.jpg"
                alt="Đội ngũ y bác sĩ trong phòng phẫu thuật hiện đại"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Right Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden h-full">
                <img
                  src="https://www.vinmec.com/static/uploads/medium_VMTC_202413414_copy_f93cb02d65.jpg"
                  alt="Bác sĩ tim mạch tư vấn cho bệnh nhân với hình ảnh chẩn đoán"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Left Content Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Chẩn đoán & Điều trị
              </h2>

              {/* Red underline */}
              <div className="w-36 h-1 bg-green-600 mb-8"></div>

              {specialtyDetail?.functions?.map((item, index) => (
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {item}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DoctorTeam />
    </div>
  );
};

export default SpecitaltyDetail;
