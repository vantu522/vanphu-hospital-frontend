import React, { useState, useEffect, useRef } from "react";
import uh from "../../../assets/images/dvt_2.png";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setUserData(null);
    window.location.href ='/';
  };

  const toggleLanguageMenu = () => {
    setLanguageOpen(!languageOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Close search popup when clicking outside
  const searchPopupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchPopupRef.current &&
        !searchPopupRef.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <header className="w-full font-sans">
      {/* {
        userData && userData.role !== "receptionist" && (
          <> */}
           {/* Top bar - Ẩn trên mobile */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white topbar hidden md:block">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3 px-4 gap-3 sm:gap-0">
          <div className="flex gap-5 sm:gap-8 items-center text-xs sm:text-sm">
            <button className="flex cursor-pointer items-center gap-2 font-medium hover:scale-105 transition-transform duration-300 bg-green-600 text-white py-2 px-4 rounded-md">
              <span className="text-base sm:text-lg text-green-100">📞</span> 
              Hotline: <strong className="tracking-wide">0277 3630 000</strong>
            </button>
            <button className="flex cursor-pointer items-center gap-2 font-medium hover:scale-105 transition-transform duration-300 bg-green-600 text-white py-2 px-4 rounded-md">
              <span className="text-base sm:text-lg text-green-100">🚑</span> 
              Cấp cứu: <strong className="tracking-wide">0900 555 555</strong>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm">
            {userData ? (
              <div className="flex items-center gap-3">
                <img
                  src="https://img.lovepik.com/png/20231028/Social-media-male-college-student-user-avatar-japan-chemical_394430_wh860.png"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span>{userData.role}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md font-medium transition-colors duration-300"
                >
                  <FaSignOutAlt className="mr-2" />
                  Đăng xuất
                </button>
              </div>
            ) : (
              <>
                <a href="/dang-nhap">
                  <button className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                    Đăng nhập
                  </button>
                </a>
                <a href="/dang-ky">
                  <button className="bg-green-800 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                    Đăng ký
                  </button>
                </a>
              </>
            )}
            <span className="text-green-300">|</span>
            <div className="relative cursor-pointer" onClick={toggleLanguageMenu}>
              <button className="flex items-center gap-1 hover:text-white-200 hover:font-bold transition-colors duration-300">
                Tiếng Việt
                <span className="ml-1">▼</span>
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-md shadow-lg w-32 z-50">
                  <a href="/vi" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    Tiếng Việt
                  </a>
                  <a href="/en" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    English
                  </a>
                  <a href="/jp" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    日本語
                  </a>
                  <a href="/kr" className="block px-4 py-2 hover:bg-gray-100 transition-all">
                    한국어
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
            
      {/* Main header */}
      <div
        className={`bg-white w-full border-b border-gray-100 ${
          isScrolled
            ? "fixed top-0 left-0 z-50 transition-all duration-500 shadow-lg backdrop-blur-lg bg-white/95"
            : "shadow-sm"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-10 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="transition-all duration-300 hover:opacity-90"
            >
              <img
                src={uh}
                alt="Logo"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "w-12 h-12" : "h-16 w-16 sm:h-20 sm:w-20"
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
              <div className="hidden group-hover:block absolute top-full left-0 min-w-[240px] bg-white shadow-xl rounded-lg text-sm mt-1 overflow-hidden border-t-2 border-green-600 transition-all duration-300 z-50">
                <a
                  href="/gioi-thieu/ve-hong-ngoc"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200"
                >
                  Về Văn Phú Hospital
                </a>
                <a
                  href="/gioi-thieu/huong-dan-khach-hang"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200"
                >
                  Hướng dẫn khách hàng
                </a>
                <a
                  href="/gioi-thieu/nghien-cuu-khoa-hoc"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200"
                >
                  Nghiên cứu khoa học
                </a>
                <a
                  href="/gioi-thieu/dao-tao"
                  className="block px-5 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:pl-6 transition-all duration-200"
                >
                  Đào tạo
                </a>
              </div>
            </div>

            {/* Main nav items */}
            {[
              { to: "/dich-vu", label: "Dịch vụ" },
              { to: "/danh-sach-bac-si", label: "Danh sách bác sĩ" },
              { to: "/chuyen-khoa", label: "Chuyên khoa" },
              { to: "/tu-van-suc-khoe", label: "Tư vấn sức khỏe" },
              { to: "/tin-tuc", label: "Tin tức " },
              { to: "/tuyen-dung", label: "Tuyển dụng" },
              { to: "/lien-he", label: "Liên hệ" },
              { to: "dat-lich", label: "Đặt lịch" },
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

          {/* Tìm kiếm và Mobile menu */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 rounded-full bg-green-50 hover:bg-green-100 text-green-700 transition-colors duration-300 shadow-sm hover:shadow-md"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 z-50 relative"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search Popup */}
        {searchOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-start justify-center pt-20 px-4">
            <div
              ref={searchPopupRef}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all duration-300 scale-100 opacity-100"
            >
              <div className="p-4 flex items-center">
                <form className="flex-grow flex items-center border-b-2 border-green-600 pb-2">
                  <FiSearch className="text-gray-400 mr-3 text-xl" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-full outline-none text-lg text-gray-700"
                    autoFocus
                  />
                </form>
                <button
                  onClick={toggleSearch}
                  className="ml-4 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors duration-200"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 pt-0 text-sm text-gray-500">
                <p>Gợi ý: bác sĩ nhi, khám tổng quát, tiêm vaccine...</p>
              </div>
            </div>
          </div>
        )}
      </div>
          {/* </>
        )
      } */}
     


      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}

      {/* Mobile Menu Slide từ phải sang trái */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header của mobile menu */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img
              src={uh}
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-semibold text-gray-800">Menu</span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors duration-200"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* User info section trên mobile menu */}
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          {userData ? (
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://img.lovepik.com/png/20231028/Social-media-male-college-student-user-avatar-japan-chemical_394430_wh860.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-800">{userData.role}</div>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 hover:text-red-700 transition-colors duration-200"
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <a href="/dang-nhap">
                <button className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                  Đăng nhập
                </button>
              </a>
              <a href="/dang-ky">
                <button className="w-full bg-gray-600 text-white hover:bg-gray-700 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                  Đăng ký
                </button>
              </a>
            </div>
          )}
          
          {/* Language selector */}
          <div className="mt-3">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-gray-800"
            >
              <span>🌐 Tiếng Việt</span>
              <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`} />
            </button>
            {languageOpen && (
              <div className="mt-2 ml-6 space-y-1">
                <a href="/vi" className="block text-sm text-gray-600 hover:text-green-600 py-1">
                  Tiếng Việt
                </a>
                <a href="/en" className="block text-sm text-gray-600 hover:text-green-600 py-1">
                  English
                </a>
                <a href="/jp" className="block text-sm text-gray-600 hover:text-green-600 py-1">
                  日本語
                </a>
                <a href="/kr" className="block text-sm text-gray-600 hover:text-green-600 py-1">
                  한국어
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Menu content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {/* Giới thiệu dropdown */}
          <div className="mb-2">
            <button
              className="flex items-center justify-between w-full py-3 px-2 text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
              onClick={() =>
                document
                  .getElementById("mobileGioiThieu")
                  .classList.toggle("hidden")
              }
            >
              <span>Giới thiệu</span>
              <FiChevronDown className="text-gray-500 w-5 h-5" />
            </button>
            <div
              id="mobileGioiThieu"
              className="hidden ml-4 mt-1 border-l-2 border-green-600 pl-4 space-y-1"
            >
              <a
                href="/gioi-thieu/ve-hong-ngoc"
                className="block py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                Về Văn Phú Hospital
              </a>
              <a
                href="/gioi-thieu/huong-dan-khach-hang"
                className="block py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                Hướng dẫn khách hàng
              </a>
              <a
                href="/gioi-thieu/nghien-cuu-khoa-hoc"
                className="block py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                Nghiên cứu khoa học
              </a>
              <a
                href="/gioi-thieu/dao-tao"
                className="block py-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
              >
                Đào tạo
              </a>
            </div>
          </div>

          {/* Main nav items for mobile */}
          {[
            { to: "/dich-vu", label: "Dịch vụ" },
            { to: "/danh-sach-bac-si", label: "Danh sách bác sĩ" },
            { to: "/chuyen-khoa", label: "Chuyên khoa" },
            { to: "/tu-van-suc-khoe", label: "Tư vấn sức khỏe" },
            { to: "/tin-tuc", label: "Tin tức " },
            { to: "/tuyen-dung", label: "Tuyển dụng" },
            { to: "/lien-he", label: "Liên hệ" },
            { to: "/dat-lich", label: "Đặt lịch" },
          ].map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="block py-3 px-2 text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact info ở cuối mobile menu */}
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          <div className="text-sm space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              <span>📞</span>
              <span>Hotline: <strong>0277 3630 000</strong></span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span>🚑</span>
              <span>Cấp cứu: <strong>0900 555 555</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      {isScrolled && (
        <div
          style={{
            height: document.querySelector(".bg-white")?.offsetHeight || 0,
          }}
        ></div>
      )}
    </header>
  );
};

export default Header;