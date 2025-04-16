import React from "react";
import { Link } from "react-router-dom";
import uh from "../../../assets/images/dvt_2.png";
import { FiChevronDown } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAmbulance } from "react-icons/fa";
const Header = () => {
  return (
    <header className="w-full">
      {/* Thanh trên (Top bar) */}
      <div className="bg-green-700 text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Thông tin liên hệ bên trái */}
          <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2 text-sm text-white font-medium">
            <TfiHeadphoneAlt className="text-lg" />
            Hotline: <strong>0277 3630 000</strong>
          </span>
          <span className="flex items-center gap-2 text-sm text-white font-medium">
            <FaAmbulance className="text-lg" />
            Cấp cứu: <strong>0900 555 555</strong>
          </span>
        </div>

          {/* Đăng nhập/Đăng ký/Languages bên phải */}
          <div className="flex items-center gap-4 text-sm">
            <Link to="/dang-nhap" className="hover:underline">
              Đăng nhập
            </Link>
            <Link to="/dang-ky" className="hover:underline">
              Đăng ký
            </Link>
            <span>|</span>
            <Link to="/en" className="hover:underline">
              English
            </Link>
          </div>
        </div>
      </div>

      {/* Thanh dưới (Main header) */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center  px-10">
          {/* Logo */}
          <div className="flex items-center">
            <img src={uh} alt="Logo" className="w-25 h-25 object-contain" />
          </div>

          {/* Nav menu */}
          <nav className="flex gap-6 text-gray-700 text-sm">
            {/* Dropdown cho mục Giới thiệu */}
            <div className="relative group">
              {/* Mục menu chính với icon */}
              <Link
                to="/gioi-thieu"
                className="flex items-center gap-1 hover:text-green-700 transition-all duration-200 hover:scale-105 font-medium"
              >
                <span>Giới thiệu</span>
                <FiChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Subnav (dropdown) */}
              <div
                className="hidden group-hover:block absolute top-full left-0 min-w-[200px]
                  bg-white shadow-lg z-10 text-sm mt-2"
              >
                <Link
                  to="/gioi-thieu/ve-hong-ngoc"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 hover:font-semibold transition-all duration-200 hover:scale-105"
                >
                  Về Hồng Ngọc Hospital
                </Link>
                <Link
                  to="/gioi-thieu/huong-dan-khach-hang"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 hover:font-semibold transition-all duration-200 hover:scale-105"
                >
                  Hướng dẫn khách hàng
                </Link>
                <Link
                  to="/gioi-thieu/nghien-cuu-khoa-hoc"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 hover:font-semibold transition-all duration-200 hover:scale-105"
                >
                  Nghiên cứu khoa học
                </Link>
                <Link
                  to="/gioi-thieu/dao-tao"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-700 hover:font-semibold transition-all duration-200 hover:scale-105"
                >
                  Đào tạo
                </Link>
              </div>
            </div>

            {/* Các mục menu khác (không có dropdown) */}
            <Link
              to="/dich-vu"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Dịch vụ
            </Link>
            <Link
              to="/danh-sach-bac-si"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Danh sách bác sĩ
            </Link>
            <Link
              to="/chuyen-khoa"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Chuyên khoa
            </Link>
            <Link
              to="/tu-van-suc-khoe"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Tư vấn sức khỏe
            </Link>
            <Link
              to="/tin-tuc-su-kien"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Tin tức - Sự kiện
            </Link>
            <Link
              to="/tuyen-dung"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Tuyển dụng
            </Link>
            <Link
              to="/lien-he"
              className="hover:text-green-700 hover:scale-105 transition-all duration-200 font-medium"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Ô tìm kiếm với icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="border border-gray-300 rounded-full pl-3 pr-8 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute top-0 right-0 mr-2 mt-1 text-gray-500 hover:text-green-700">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 5.5a7.5 7.5 0 016.15 11.15z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
