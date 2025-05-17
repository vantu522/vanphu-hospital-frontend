import React, { useState, useEffect, useRef } from "react";
import uh from "../../../assets/images/dvt_2.png";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAmbulance } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setLanguageOpen(!languageOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    // Focus the input when search popup opens
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

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector(".topbar")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > topBarHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full font-sans">
      {/* Topbar */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white topbar">
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
            <a href="/dang-nhap">
              <button className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                Đăng nhập
              </button>
            </a>
            <a href="dang-ky">
              <button className="bg-green-800 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium transition-colors duration-300">
                Đăng ký
              </button>
            </a>

            <span className="text-green-300">|</span>

            <div
              className="relative cursor-pointer"
              onClick={toggleLanguageMenu}
            >
              <button className="flex items-center gap-1 hover:text-white-200 hover:font-bold transition-colors duration-300">
                Tiếng Việt
                <span className="ml-1">▼</span>
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 bg-white text-gray-700 rounded-md shadow-lg w-32 z-50">
                  <a
                    href="/vi"
                    className="block px-4 py-2 hover:bg-gray-100 transition-all"
                  >
                    Tiếng Việt
                  </a>
                  <a
                    href="/en"
                    className="block px-4 py-2 hover:bg-gray-100 transition-all"
                  >
                    English
                  </a>
                  <a
                    href="/jp"
                    className="block px-4 py-2 hover:bg-gray-100 transition-all"
                  >
                    日本語
                  </a>
                  <a
                    href="/kr"
                    className="block px-4 py-2 hover:bg-gray-100 transition-all"
                  >
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
                  Về Hồng Ngọc Hospital
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

          {/* Tìm kiếm (chỉ nút) */}
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
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen bg-white border-t border-gray-100 shadow-lg"
              : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2">
            <div className="py-2">
              <div className="relative mb-3">
                <div
                  className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-green-50 transition-colors duration-200"
                  onClick={() =>
                    document
                      .getElementById("mobileGioiThieu")
                      .classList.toggle("hidden")
                  }
                >
                  <span className="text-gray-700 font-medium">Giới thiệu</span>
                  <FiChevronDown className="text-gray-500 w-5 h-5" />
                </div>
                <div
                  id="mobileGioiThieu"
                  className="hidden pl-4 mt-1 border-l-2 border-green-600"
                >
                  <a
                    href="/gioi-thieu/ve-hong-ngoc"
                    className="block py-2 px-4 text-gray-700 hover:text-green-700 transition-colors duration-200"
                  >
                    Về Hồng Ngọc Hospital
                  </a>
                  <a
                    href="/gioi-thieu/huong-dan-khach-hang"
                    className="block py-2 px-4 text-gray-700 hover:text-green-700 transition-colors duration-200"
                  >
                    Hướng dẫn khách hàng
                  </a>
                  <a
                    href="/gioi-thieu/nghien-cuu-khoa-hoc"
                    className="block py-2 px-4 text-gray-700 hover:text-green-700 transition-colors duration-200"
                  >
                    Nghiên cứu khoa học
                  </a>
                  <a
                    href="/gioi-thieu/dao-tao"
                    className="block py-2 px-4 text-gray-700 hover:text-green-700 transition-colors duration-200"
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
                  className="block py-2 px-4 text-gray-700 font-medium hover:bg-green-50 hover:text-green-700 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
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
