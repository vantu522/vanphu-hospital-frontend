import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] text-gray-700 font-sans">
      <div className="container mx-auto px-4 py-5">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          {/* Company info */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-[#2a4365]">CÔNG TY TNHH BỆNH VIỆN HỒNG NGỌC</h1>
            
            <div className="flex items-start space-x-3">
              <IoLocationOutline className="mt-1 text-[#2a4365]" />
              <p className="text-sm">
                Số 55 Phố Yên Ninh, Phường Trúc Bạch, Quận Ba Đình, TP Hà Nội
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#2a4365]" />
              <p className="text-sm font-medium">024 3927 5568</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <HiOutlineMail className="text-[#2a4365]" />
              <p className="text-sm">info@hongngochospital.vn</p>
            </div>
            
            <div className="pt-4">
              <h3 className="font-bold text-[#2a4365] mb-3">KẾT NỐI VỚI CHÚNG TÔI</h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-white p-2 rounded-full text-[#3b5998] hover:bg-[#3b5998] hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#ff0000] hover:bg-[#ff0000] hover:text-white transition-colors">
                  <FaYoutube />
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-[#e1306c] hover:bg-[#e1306c] hover:text-white transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* About section */}
          <div>
            <h3 className="text-lg font-bold text-[#2a4365] mb-4 pb-2 border-b border-[#2a4365] inline-block">
              VỀ HỒNG NGỌC HOSPITAL
            </h3>
            <ul className="space-y-3">
              {['Giới thiệu về chứng tối', 'Chuyên khoa', 'Tin tức', 'Tuyển dụng', 'Hướng dẫn khách hàng', 'Báo cáo thực hành Yên Ninh', 'Báo cáo thực hành Phúc Trường Minh'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#2a4365] hover:font-medium transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#2a4365] rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer care */}
          <div>
            <h3 className="text-lg font-bold text-[#2a4365] mb-4 pb-2 border-b border-[#2a4365] inline-block">
              CHĂM SÓC KHÁCH HÀNG
            </h3>
            <ul className="space-y-3">
              {['Chính sách bảo mật', 'Hướng dẫn thanh toán', 'Trung tâm trợ giúp', 'Câu hỏi thường gặp', 'Giờ làm việc', 'Phòng nội trú'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-[#2a4365] hover:font-medium transition-colors flex items-center">
                    <span className="w-2 h-2 bg-[#2a4365] rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Payment */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#2a4365] mb-4 pb-2 border-b border-[#2a4365] inline-block">
                TỔNG ĐÀI HỖ TRỢ
              </h3>
              <div className="flex items-center space-x-3 bg-[#2a4365] text-white p-3 rounded-lg w-fit">
                <FaPhoneAlt />
                <p className="text-lg font-bold">024 3927 5568</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2a4365] mb-4 pb-2 border-b border-[#2a4365] inline-block">
                PHƯƠNG THỨC THANH TOÁN
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['VISA', '03-1', 'HỒNG', 'PHÍSKA', 'ĐÃ BẰNG KỸ', 'ĐỖ CÔNG THƯƠNG'].map((method) => (
                  <div key={method} className="bg-white p-2 rounded-md shadow-sm text-center text-xs font-medium">
                    {method}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#2a4365] mb-4 pb-2 border-b border-[#2a4365] inline-block">
                TẢI ỨNG DỤNG
              </h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-black text-white p-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  App Store
                </a>
                <a href="#" className="bg-black text-white p-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 pb-4">
          <div className="text-xs text-gray-500 space-y-2">
            <p>MST/ĐKK/D/GDTL: 0106696074 - Sở kế hoạch và đầu tư thành phố Hà Nội cấp ngày 05/08/2003</p>
            <p>Giấy phép hoạt động cơ sở khám chữa bệnh số 002960/HNO - CCHN. Ngày cấp: 27/11/2012</p>
            <p>Người chịu trách nhiệm nội dung: Dương Thành Nhân</p>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Bệnh viện Hồng Ngọc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;