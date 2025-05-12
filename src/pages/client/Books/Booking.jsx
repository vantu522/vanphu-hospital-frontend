import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";

const Booking = () => {
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
                <h3 className="text-green-700 font-medium">Đặt lịch</h3>
                <h3 className="text-green-700 font-medium">khám bác sĩ</h3>
              </div>
            </div>

            {/* Đặt lịch khám chuyên khoa */}
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
                <h3 className="text-green-700 font-medium">Đặt lịch khám</h3>
                <h3 className="text-green-700 font-medium">chuyên khoa</h3>
              </div>
            </div>

            {/* Đặt lịch xét nghiệm */}
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-center pb-6">
                <h3 className="text-green-700 font-medium">Đặt lịch</h3>
                <h3 className="text-green-700 font-medium">xét nghiệm</h3>
              </div>
            </div>

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
                <h3 className="text-green-700 font-medium">Đặt lịch</h3>
                <h3 className="text-green-700 font-medium">tiêm chủng</h3>
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
