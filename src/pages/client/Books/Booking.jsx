import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { useState, useEffect } from "react";

const Booking = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Quản lý popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Quản lý hiệu ứng fade-in

  const [authType, setAuthType] = useState(""); // Loại xác thực
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false); // Popup xác thực
  const [userData, setUserData] = useState(null);

  // Khi chọn Khám BHYT
  const handleSelectBHYT = () => {
    setIsPopupOpen(false);
    setIsAuthPopupOpen(true);
    setAuthType(""); // Reset loại xác thực
  };

  // Khi chọn loại xác thực
  const handleAuthType = (type) => {
    setAuthType(type);
  };


  // Mở popup khi click vào Đón tiếp
  const openPopup = () => {
    setIsPopupOpen(true);
    setTimeout(() => setIsPopupVisible(true), 50); // Đảm bảo hiệu ứng fade-in
  };

  // Đóng popup với hiệu ứng fade-out
  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => setIsPopupOpen(false), 300); // Thời gian hiệu ứng fade-out
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    console.log(userData);
  }, []);

  // Khóa cuộn trang khi popup mở
  useEffect(() => {
    if (isPopupOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isPopupOpen]);

  return (
    <div>
      <PageBanner
        title="Đặt lịch"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Đặt lịch", active: true },
        ]}
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Các dịch vụ */}
        <div className="max-w-5xl mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            {userData?.role === "receptionist" && (
              <>
                {/* Check in */}
                <a href="/check-in">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center p-6">
                      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                        {/* Icon QR Code */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4h4v4H3V4zm0 12h4v4H3v-4zm14-12h4v4h-4V4zm0 8h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 4h4v-4h-2v2h-2v2zm-8-8h2v2H9v-2zm0 4h2v2H9v-2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center pb-6">
                      <h3 className="text-green-700 font-medium">Check In</h3>
                    </div>
                  </div>
                </a>

                {/* Đón tiếp*/}
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={openPopup}
                >
                  <div className="flex justify-center p-6">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center pb-6">
                    <h3 className="text-green-700 font-medium">Đón tiếp</h3>
                  </div>
                </div>

                {/* Popup Đón tiếp với hiệu ứng fade-in - Cải tiến responsive */}
                {isPopupOpen && (
                  <div
                    className={`fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 px-4 ${
                      isPopupVisible ? "opacity-100" : "opacity-0"
                    } backdrop-blur-sm`}
                    onClick={closePopup} // Đóng popup khi click vào overlay
                  >
                    <div
                      className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl transition-all duration-300 transform relative max-h-[90vh] overflow-y-auto"
                      onClick={(e) => e.stopPropagation()} // Ngăn đóng popup khi click vào nội dung
                    >
                      {/* Nút đóng cải tiến */}
                      <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 text-xl font-bold"
                      >
                        ×
                      </button>

                      {/* Tiêu đề */}
                      <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                          Chọn hình thức khám
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Vui lòng chọn loại dịch vụ khám bệnh phù hợp với nhu
                          cầu của bạn
                        </p>
                      </div>

                      {/* Các nút lựa chọn - Layout responsive */}
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-8">
                        {/* Nút Khám BHYT */}
                        <a href="/kham-bhyt" className="w-full sm:w-auto">
                          <div className="group bg-green-500 text-white px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                            <div className="flex items-center justify-center mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M18 12c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"
                                />
                              </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                              Khám BHYT
                            </h3>
                            <p className="text-sm sm:text-base text-green-100">
                              Sử dụng bảo hiểm y tế
                            </p>
                          </div>
                        </a>

                        {/* Nút Khám Dịch Vụ */}
                        <a href="/kham-dich-vu" className="w-full sm:w-auto">
                          <div className="group bg-blue-500 text-white px-6 py-4 sm:px-8 sm:py-6 lg:px-10 lg:py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                            <div className="flex items-center justify-center mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                              Khám Dịch Vụ
                            </h3>
                            <p className="text-sm sm:text-base text-blue-100">
                              Khám theo yêu cầu
                            </p>
                          </div>
                        </a>
                      </div>

                      {/* Nút đóng bổ sung ở dưới */}
                      <div className="text-center">
                        <button
                          onClick={closePopup}
                          className="text-gray-500 hover:text-gray-700 underline text-sm sm:text-base transition-colors duration-200"
                        >
                          Đóng cửa sổ
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            {userData?.role !== "receptionist" && (
              <>
                 {/* Đặt lịch khám bác sĩ */}
            <a href="/dat-lich-kham-bhyt">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center p-6">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center pb-6">
                  <h3 className="text-green-700 font-medium">
                    Đặt lịch khám BHYT
                  </h3>
                </div>
              </div>
            </a>

            <a href="/kham-dich-vu">
              {/* Đặt lịch dịch vụ */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center p-6">
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center pb-6">
                  <h3 className="text-green-700 font-medium">
                    Đặt lịch khám dịch vụ
                  </h3>
                </div>
              </div>
            </a>

              
              </>
              )}
            
          

            
          </div>
        </div>

        {/* Thông báo và liên hệ */}
        <div className="max-w-5xl mx-auto px-4 ">
          <div className="border border-green-500 border-dashed rounded-lg p-6">
            <p className="font-medium text-gray-800 mb-2">
              Ngoài ra để đặt lịch khám chữa bệnh theo yêu cầu quý khách vui
              lòng liên hệ tổng đài
            </p>
            <p className="text-red-600 font-bold text-xl mb-2">1900 888 866</p>
            <p className="text-green-700 mb-1">
              Thời gian làm việc của tổng đài:
            </p>
            <p className="text-green-700">
              T2 - T6 từ 7:30 đến 21:00 | T7 - CN từ 7:30 đến 16:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
