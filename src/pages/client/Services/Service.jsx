import React, { useState, useEffect } from "react";
import dichvu from "../../../assets/images/dichvu.png";
import { HiSearch } from "react-icons/hi";
import Button from "../../../components/client/ui/button";
import PageBanner from "../../../components/client/PageBanner";
import { getAllServices, getServicesBySpecialty } from "../../../services/client/services";
import { getAllSpecialties } from "../../../services/client/specialties";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const serviceList = [...Array(20)];
  const visibleServices = showAllServices
    ? serviceList
    : serviceList.slice(0, 9);
  const [services, setServices] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [servicesData, specialtiesData] = await Promise.all([
          getAllServices(),
          getAllSpecialties()
        ]);
        setServices(servicesData);
        setFilteredServices(servicesData);
        setSpecialties(specialtiesData);
        console.log("Services fetched successfully:", servicesData);
        console.log("Specialties fetched successfully:", specialtiesData);
      } catch (error) {
        console.error("Lỗi khi tải data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Tạo categories từ API specialties với _id làm key
  const categories = specialties.length > 0 ? [
    { id: "all", name: "Tất cả" },
    ...specialties.map(specialty => ({ id: specialty._id, name: specialty.name }))
  ] : [];

  // Function để lọc dịch vụ theo chuyên khoa
  const handleCategoryChange = async (categoryId) => {
    console.log('Clicking category with ID:', categoryId);
    setSelectedCategory(categoryId);
    setLoading(true);
    
    try {
      if (categoryId === "all") {
        console.log('Loading all services:', services.length);
        setFilteredServices(services);
      } else {
        // Truyền trực tiếp specialtyId vào API
        console.log('Calling API with specialtyId:', categoryId);
        const servicesBySpecialty = await getServicesBySpecialty(categoryId);
        console.log('API response:', servicesBySpecialty);
        
        // Kiểm tra nếu servicesBySpecialty là array
        if (Array.isArray(servicesBySpecialty)) {
          setFilteredServices(servicesBySpecialty);
        } else {
          console.error('API response is not an array:', servicesBySpecialty);
          setFilteredServices([]);
        }
      }
    } catch (error) {
      console.error('Error filtering services by specialty:', error);
      setFilteredServices([]);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <div className="relative">
      <PageBanner
        backgroundImage={dichvu}
        title="Danh sách dịch vụ"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Dịch vụ", active: true },
        ]}
      />

      {/* Nội dung dịch vụ */}
      <div className="px-20 md:px-20 py-10  mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Sidebar dịch vụ */}
          <div className="w-full  md:w-60 shrink-0 mb-6 md:mb-0">
            <form className="p-2 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded pl-10 pr-4 py-2 text-sm focus:border-gray-200 focus:outline-none"
                  placeholder="Tìm kiếm..."
                />
                <HiSearch
                  className="absolute top-2.5 left-2.5 text-gray-500"
                  size={20}
                />
              </div>

              <div className="flex flex-col gap-2">
                {loading ? (
                  <div className="text-center py-4 text-gray-500">
                    Đang tải chuyên ngành...
                  </div>
                ) : (
                  categories.map((category, i) => {
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => handleCategoryChange(category.id)}
                        className={`flex justify-between items-center px-3 py-2 border border-gray-300 rounded text-s transition cursor-pointer ${
                          isActive
                            ? "bg-emerald-700 text-white"
                            : "hover:bg-gray-100 text-gray-800"
                        }`}
                      >
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </form>
          </div>

          {/* Grid dịch vụ */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center py-8">
                <div className="text-gray-500 text-lg">
                  Đang tải danh sách dịch vụ...
                </div>
              </div>
            ) : filteredServices.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <div className="text-gray-500 text-lg">
                  Không có dịch vụ nào trong chuyên khoa "{categories.find(c => c.id === selectedCategory)?.name || selectedCategory}"
                </div>
              </div>
            ) : (
              filteredServices.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded hover:border-black transition"
                >
                  <a href={`/dich-vu/${item.slug}`} className="block h-full">
                    <div className="overflow-hidden rounded-t">
                      <img
                        src={item.avatar}
                        alt=""
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <h2 className="font-semibold mb-2 text-base">
                        {item.name}
                      </h2>
                      <div
                        className="text-sm text-gray-600 mt-5 prose max-w-none line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </a>
                </div>
              ))
            )}

            {!showAllServices && filteredServices.length > 0 && (
              <div className="col-span-full text-center mt-4">
                <Button
                  type="button"
                  onClick={() => setShowAllServices(true)}
                  variant="primary"
                  className="px-6 py-2 border border-emerald-700 rounded hover:bg-whitegit fet transition"
                >
                  Xem nhiều hơn
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
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

export default Service;
