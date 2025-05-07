import React, { useState, useEffect } from "react";
import uh from "../../../assets/images/dvt_2.png";
import { FiChevronDown } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAmbulance } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector('.topbar')?.offsetHeight || 0;
      setIsScrolled(window.scrollY > topBarHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full font-sans">
      {/* Topbar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white topbar">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-4 gap-3 sm:gap-0">
          <div className="flex gap-5 sm:gap-8 items-center text-xs sm:text-sm">
            <button className="flex cursor-pointer items-center gap-2 font-medium hover:scale-105 transition-transform duration-300 bg-green-600 text-white py-2 px-4 rounded-md">
              <TfiHeadphoneAlt className="text-base sm:text-lg text-green-100" />
              Hotline: <strong className="tracking-wide">0277 3630 000</strong>
            </button>
            <button className="flex cursor-pointer items-center gap-2 font-medium hover:scale-105 transition-transform duration-300 bg-green-600 text-white py-2 px-4 rounded-md">
              <FaAmbulance className="text-base sm:text-lg text-green-100" />
              Cấp cứu: <strong className="tracking-wide">0900 555 555</strong>
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a href="/dang-nhap" className="hover:text-green-200 transition-colors duration-300">Đăng nhập</a>
            <a href="/dang-ky" className="hover:text-green-200 transition-colors duration-300">Đăng ký</a>
            <span className="text-green-300">|</span>
            <a href="/en" className="hover:text-green-200 transition-colors duration-300">English</a>
          </div>
        </div>
      </div>


      {/* Main header */}
      <div className={`bg-white w-full border-b border-gray-100 ${
        isScrolled 
          ? 'fixed top-0 left-0 z-50 transition-all duration-500 shadow-lg backdrop-blur-lg bg-white/95' 
          : 'shadow-sm'
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-10 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="transition-all duration-300 hover:opacity-90">
              <img 
                src={uh} 
                alt="Logo" 
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-12 h-12' : 'h-16 w-16 sm:h-20 sm:w-20'
                }`} 
              />
            </a>
          </div>

          {/* Nav (ẩn ở mobile) */}
          <nav className="hidden md:flex gap-5 lg:gap-7 text-gray-700 text-lg flex-wrap">
            <div className="relative group">
              <a
                href="/"
                className="flex items-center gap-1 hover:text-green-700 transition-all duration-200 group-hover:text-green-700 font-medium"
              >
                <span>Giới thiệu</span>
                <FiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </a>
              <div className="hidden group-hover:block absolute top-full left-0 min-w-[240px] bg-white shadow-xl rounded-lg text-sm mt-1 overflow-hidden border-t-2 border-green-600 transition-all duration-300 z-100">
                <a href="/gioi-thieu/ve-hong-ngoc" className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200">Về Hồng Ngọc Hospital</a>
                <a href="/gioi-thieu/huong-dan-khach-hang" className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200">Hướng dẫn khách hàng</a>
                <a href="/gioi-thieu/nghien-cuu-khoa-hoc" className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200">Nghiên cứu khoa học</a>
                <a href="/gioi-thieu/dao-tao" className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200">Đào tạo</a>
              </div>
            </div>
            
            {/* Main nav items */}
            {[
              { to: "/dich-vu", label: "Dịch vụ" },
              { to: "/danh-sach-bac-si", label: "Danh sách bác sĩ" },
              { to: "/chuyen-khoa", label: "Chuyên khoa" },
              { to: "/tu-van-suc-khoe", label: "Tư vấn sức khỏe" },
              { to: "tin-tuc", label: "Tin tức " },
              { to: "tuyen-dung", label: "Tuyển dụng" },
              { to: "/lien-he", label: "Liên hệ" },
              { to: "#", label: "Đặt lịch" }

            ].map((item) => (
              <a 
                key={item.to} 
                href={item.to} 
                className="relative hover:text-green-700 transition-all duration-200 font-medium after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Tìm kiếm */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border border-gray-200 rounded-full pl-4 pr-10 py-2 text-sm w-[130px] sm:w-[200px] md:w-[240px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all duration-300 focus:shadow-md"
            />
            <button className="absolute top-0 right-0 mr-3 mt-2 text-gray-400 hover:text-green-700 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 5.5a7.5 7.5 0 016.15 11.15z" />
              </svg>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      {isScrolled && (
        <div style={{ height: document.querySelector('.bg-white')?.offsetHeight || 0 }}></div>
      )}
    </header>
  );
};

export default Header;