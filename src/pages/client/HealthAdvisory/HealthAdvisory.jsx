import React, { useState, useEffect } from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import a2 from "../../../assets/images/a2.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { getAllHealthConsultations } from "../../../services/client/health_consultation";

const HealthAdvisory = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const serviceList = [...Array(20)];
  const visibleServices = showAllServices
    ? serviceList
    : serviceList.slice(0, 9);

  // Add state for health consultations
  const [healthConsultations, setHealthConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch health consultations on component mount
  useEffect(() => {
    const fetchHealthConsultations = async () => {
      try {
        setLoading(true);
        const data = await getAllHealthConsultations();
        setHealthConsultations(data || []);
      } catch (error) {
        console.error("Error loading health consultations:", error);
        setError("Không thể tải dữ liệu tư vấn sức khỏe");
      } finally {
        setLoading(false);
      }
    };

    fetchHealthConsultations();
  }, []);

  const healths = [
    {
      title: "5 loại thực phẩm tốt cho sức khoẻ mỗi ngày",
      description: "",
    },
  ];

  const faqCategories = [
    { name: "Thai sản", count: 8 },
    { name: "Khám bệnh", count: 1 },
    { name: "Tầm soát ung thư", count: 3 },
    { name: "Phụ khoa", count: 9 },
  ];

  const faqData = {
    "Thai sản": [
      {
        question:
          "Tuổi thai được tính từ ngày trứng gặp tinh trùng hay ngày đầu tiên của chu kỳ cuối?",
        answer:
          "Tuổi thai và tính ngày dự kiến sinh theo quy ước quốc tế được tính theo ngày đầu kỳ kinh cuối...",
      },
      {
        question: "Ngạt mũi khi mang thai có nguy hiểm không?",
        answer:
          "Ngạt mũi khi mang thai là triệu chứng phổ biến, thường do thay đổi nội tiết...",
      },
    ],
    "Khám bệnh": [
      {
        question: "Khi nào nên đi khám tổng quát?",
        answer: "Nên khám định kỳ mỗi 6 tháng...",
      },
    ],
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  // Helper function to get image source
  const getImageSource = (consultation) => {
    // If consultation has an image, use it, otherwise use default
    return consultation.image || consultation.thumbnail || a2;
  };

  return (
    <div>
      <PageBanner
        backgroundImage={dichvu}
        title="Tư vấn sức khoẻ"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tư vấn sức khoẻ", active: true },
        ]}
      />

      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-2">
          {/* Main content area - left side */}
          <div className="md:w-2/3">
            <img src={a2} alt="" className="w-240" />
          </div>

          {/* Three sections on the right */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {loading ? (
              // Loading state for sidebar
              [...Array(3)].map((_, index) => (
                <div key={index} className="p-4 animate-pulse">
                  <div className="flex gap-4">
                    <div className="md:w-1/3">
                      <div className="bg-gray-300 h-16 w-full rounded"></div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
                      <div className="bg-gray-300 h-3 w-20 rounded"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div className="p-4 text-red-600">
                <p>{error}</p>
              </div>
            ) : (
              // Display first 3 health consultations in sidebar
              healthConsultations.slice(0, 3).map((consultation, index) => (
                <div key={consultation.id || index} className="p-4">
                  <div className="flex gap-4">
                    <div className="md:w-1/3">
                      <img 
                        src={getImageSource(consultation)} 
                        alt={consultation.title || "Health consultation"} 
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="font-medium text-sm">
                        {consultation.title || "Thông tin sức khoẻ bệnh nhân đang ngày càng phổ biến"}
                      </h3>
                      <div className="text-right mt-2">
                        <a href="#" className="text-xs text-gray-600">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Adding the row of cards with API data */}
        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Bài viết mới nhất</h2>
          
          {loading ? (
            // Loading state for cards
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="bg-gray-300 h-48 w-full"></div>
                  <div className="p-4">
                    <div className="bg-gray-300 h-4 w-32 mb-2 rounded"></div>
                    <div className="bg-gray-300 h-5 w-full mb-2 rounded"></div>
                    <div className="bg-gray-300 h-4 w-full mb-4 rounded"></div>
                    <div className="bg-gray-300 h-3 w-20 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {healthConsultations.length > 0 ? (
                healthConsultations.map((consultation, index) => (
                  <div key={consultation.id || index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <a href={`/chi-tiet-bai-tu-van/${consultation.id || consultation.slug}`}>
                      <div className="overflow-hidden">
                        <img
                          src={getImageSource(consultation)}
                          alt={consultation.title || "Health Article"}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center text-s text-gray-500 mb-2">
                          <AiOutlineCalendar className="mr-2 text-gray-500" />
                          <span>{formatDate(consultation.created_at || consultation.date)}</span>
                          <span className="mx-2">•</span>
                          <span className="font-bold text-rose-600">
                            {consultation.category || consultation.department || "Tư vấn sức khỏe"}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                          {consultation.title || "Bài viết tư vấn sức khỏe"}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {consultation.excerpt || consultation.description || consultation.summary || 
                           "Thông tin tư vấn sức khỏe hữu ích cho bạn và gia đình..."}
                        </p>
                        <a
                          href="#"
                          className="text-emerald-600 text-sm font-medium hover:underline"
                        >
                          Đọc thêm
                        </a>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                // Fallback cards when no data
                [...Array(6)].map((_, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="overflow-hidden">
                      <img
                        src={a2}
                        alt="Health Article"
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <span>05/04/2025</span>
                        <span className="mx-2">•</span>
                        <span>Tư vấn sức khỏe</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        Bài viết tư vấn sức khỏe
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Thông tin tư vấn sức khỏe hữu ích cho bạn và gia đình...
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        Đọc thêm
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* FAQ section remains unchanged */}
      <div className="py-20 bg-[#f8f8f8]">
        <div className="px-4 md:px-20 max-w-screen-xl mx-auto">
          <h1 className="text-2xl md:text-4xl mb-10 font-bold">
            Câu hỏi thường gặp
          </h1>
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Sidebar FAQ */}
            <div className="w-full md:w-60 shrink-0 mb-6 md:mb-0">
              <form className="p-2 space-y-4">
                <div className="flex flex-col gap-4">
                  {faqCategories.map((item, i) => {
                    const isActive = selectedCategory === item.name;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedCategory(item.name)}
                        className={`flex justify-between items-center px-3 py-2 border border-gray-300 rounded text-sm transition ${
                          isActive
                            ? "bg-emerald-700 text-white"
                            : "hover:bg-gray-100 text-gray-800"
                        }`}
                      >
                        <span className="font-medium">{item.name}</span>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            isActive ? "bg-white text-black" : "bg-gray-200"
                          }`}
                        >
                          {item.count}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </form>
            </div>

            {/* Accordion FAQ */}
            <div className="flex-1 md:pl-10">
              {(faqData[selectedCategory] || []).map((item, i) => (
                <div key={i} className="mb-4 border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="flex justify-between w-full text-left font-medium text-lg text-gray-800 hover:text-emerald-700 transition"
                  >
                    <span>
                      {i + 1}. {item.question}
                    </span>
                    <span>{activeIndex === i ? "−" : "+"}</span>
                  </button>
                  {activeIndex === i && (
                    <div className="mt-3 text-sm text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}

              {/* Pagination giả lập */}
              <div className="mt-10 flex gap-2">
                <button className="w-8 h-8 border rounded hover:bg-gray-200">
                  1
                </button>
                <button className="w-8 h-8 border rounded hover:bg-gray-200">
                  2
                </button>
                <button className="w-8 h-8 border rounded hover:bg-gray-200">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthAdvisory;