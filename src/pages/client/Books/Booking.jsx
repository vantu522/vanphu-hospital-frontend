import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { useState ,useEffect} from "react";

const Booking = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Quản lý popup
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Quản lý hiệu ứng fade-in

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

    // Khóa cuộn trang khi popup mở
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"; // Khóa cuộn
    } else {
      document.body.style.overflow = "auto"; // Mở cuộn khi popup đóng
    }
    return () => {
      document.body.style.overflow = "auto"; // Đảm bảo mở cuộn khi component unmount
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
            {/* Đặt lịch khám bác sĩ */}
            <a href="/kham-bhyt">
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
                  <h3 className="text-green-700 font-medium">Đặt lịch khám BHYT</h3>
                </div>
              </div>
            </a>

            
                 {/* Đón tiếp*/}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" onClick={openPopup}>
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

            
      {/* Popup Đón tiếp với hiệu ứng fade-in */}
        {isPopupOpen && (
          <div
            className={`fixed inset-0  bg-opacity-100 flex justify-center items-center z-50 transition-opacity duration-300 ${
              isPopupVisible ? "opacity-100" : "opacity-0"
            } backdrop-blur-sm`} // Thêm backdrop-blur để làm mờ nền
          >
            <div className="bg-white rounded-lg shadow-lg p-8 w-100 sm:w-96 transition-transform duration-300 relative">
                <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-semibold"
              >
                X
              </button>
              <h3 className="text-xl font-semibold mb-6 text-center text-green-700">Chọn hình thức khám</h3>
              <div className="flex justify-around">
                <a href="/kham-bhyt">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300">
                    Khám BHYT
                  </button>
                </a>
                <a href="/kham-dich-vu">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-300">
                    Khám Dịch Vụ
                  </button>
                </a>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={closePopup}
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
            

           
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
                <h3 className="text-green-700 font-medium">Đặt lịch khám dịch vụ</h3>
              </div>
            </div>

            </a>

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

            {/* Đặt lịch xét nghiệm */}
            {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center pb-6">
                <h3 className="text-green-700 font-medium">Đặt lịch xét nghiệm</h3>
              </div>
            </div> */}

            {/* Đặt lịch tiêm chủng */}
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center pb-6">
                <h3 className="text-green-700 font-medium">Sổ y bạ điện tử</h3>
              </div>
            </div>

            
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
