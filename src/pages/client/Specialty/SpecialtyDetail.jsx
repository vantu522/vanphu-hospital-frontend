import React from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import DoctorTeam from "../../../components/client/sections/Home/DoctorTeam";
import { href } from "react-router-dom";

const SpecitaltyDetail = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={dichvu}
        title="Khám sức khoẻ tổng quát"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Chuyên khoa", active: false, href:'/chuyen-khoa' },
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
              <p className="leading-relaxed">
                Khoa Ngoại Tổng hợp - Bệnh viện Hồng Ngọc sau hơn 20 năm xây
                dựng và phát triển đã khẳng định được uy tín và chất lượng, trở
                thành địa chỉ đáng tin cậy cho hàng triệu bệnh nhân điều trị
                bệnh lý ngoại khoa. Mỗi năm, bệnh viện thực hiện thành công hơn
                5000 ca phẫu thuật khác nhau, giúp cho bệnh nhân đẩy lùi những
                cơn đau và quay về với cuộc sống khỏe mạnh.
              </p>

              <p className="leading-relaxed">
                Với đội ngũ bác sĩ vững chuyên môn, giàu nhiệt huyết, làm chủ
                các kỹ thuật tiên tiến cùng hệ thống trang thiết bị hiện đại,
                khoa đang ngày càng tối ưu các dịch vụ để bệnh nhân được trải
                nghiệm quy trình chẩn đoán - điều trị - chăm sóc chuyên nghiệp
                nhất. Đặc biệt, Hồng Ngọc là bệnh viện tư nhân tại Việt Nam được
                nhận chứng chỉ toàn cầu về phẫu thuật Ngoại khoa của Hiệp hội
                Phẫu thuật Hoàng gia Anh (RCS), khẳng định chuyên môn cao của
                đội ngũ y bác sĩ và hệ thống trang thiết bị hiện đại phục vụ
                bệnh nhân.
              </p>
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

              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Chẩn đoán bệnh lý tim mạch
              </h3>

              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>
                    Chụp MSCT động mạch vành 256 dãy hiện đại tại Việt Nam
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>
                    Chụp MRI tim với máy chụp 3.0 Tesla hiện đại tại Việt Nam.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>
                    Siêu âm tim 4D qua thực quản tái tạo hình ảnh trực tiếp ứng
                    dụng trong chẩn đoán, can thiệp tim mạch.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>
                    Các kỹ thuật thăm dò chẩn đoán chuyên sâu: Siêu âm tim qua
                    thành ngực, siêu âm tim gắng sức, Holter 24h điện tim,
                    holter 24h huyết áp, điện tim, nghiệm pháp bàn nghiêng.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>
                    Chụp động mạch vành, với siêu âm trong lòng mạch IVUS và FFR
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="mt-1 mr-2 text-lg">•</span>
                  <span>Chụp SPECT/CT tim, PET/CT tim</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <DoctorTeam/>
    </div>
  );
};

export default SpecitaltyDetail;
