import React, { useState,useEffect, use } from "react";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import dichvu from '../../../assets/images/dichvu.png'
import PageBanner from "../../../components/client/PageBanner";
import Pagination from "../../../components/client/Pagination";
import HospitalBanner from "../../../components/client/sections/Home/HospitalBanner";
import { getAllDoctors } from "../../../services/client/doctors";

const DoctorList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

    const [activeIndex, setActiveIndex] = useState(0);
    const [showAllServices, setShowAllServices] = useState(false);
    const serviceList = [...Array(20)];
    const visibleServices = showAllServices ? serviceList : serviceList.slice(0, 9);
    const [doctors, setDoctors] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const categories = [
    "Tất cả",
    "Đơn nguyên Chấn Thương Chỉnh Hình",
    "Đơn nguyên Nam khoa & PT Tiết niệu",
    "Khoa Cấp cứu - Hồi sức tích cực ICU",
    "Khoa Chẩn đoán hình ảnh và Điện quang can thiệp",
    "Khoa Cơ - Xương - Khớp",
    "Khoa Da Liễu",
    "Khoa Hô hấp",
    "Khoa Mắt",
    "Khoa Ngoại Tổng Hợp",
    "Khoa Nhi",
    "Khoa Nội tiết"
  ];

  const categoryCounts = {
    "Tất cả": 481,
    "Đơn nguyên Chấn Thương Chỉnh Hình": 8,
    "Đơn nguyên Nam khoa & PT Tiết niệu": 4,
    "Khoa Cấp cứu - Hồi sức tích cực ICU": 17,
    "Khoa Chẩn đoán hình ảnh và Điện quang can thiệp": 18,
    "Khoa Cơ - Xương - Khớp": 22,
    "Khoa Da Liễu": 5,
    "Khoa Hô hấp": 6,
    "Khoa Mắt": 14,
    "Khoa Ngoại Tổng Hợp": 29,
    "Khoa Nhi": 121,
    "Khoa Nội tiết": 8
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctors = await getAllDoctors();
        setDoctors(doctors);
        console.log("Doctors fetched successfully:", doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <PageBanner
      backgroundImage={dichvu}
      title="Danh sách bác sĩ"
      breadcrumbs={[
        {label:"Trang chủ", href:"/"},
        {label:"Danh sách bác sĩ", active:true}
      ]}
      />

    <div className="container mx-auto px-20 py-8">
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex items-center mr-4 text-black-600 font-bold">
              <BiFilter className="mr-1" />
              <span>Bộ lọc</span>
            </div>
            
            <div className="relative mr-4">
              <select className="border rounded py-2 px-3 text-gray-600 text-sm bg-white ">
                <option>Tìm theo cơ sở</option>
              </select>
            </div>
            
            <div className="relative">
              <select className="border rounded py-2 px-3 text-gray-600 text-sm bg-white">
                <option>Dịch vụ</option>
              </select>
            </div>
          </div>
          
          
          <div className="flex flex-col md:flex-row">
            {/* Left sidebar with departments - Updated styling */}
            <div className="w-full md:w-60 shrink-0 mb-6 md:mb-0">
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
                  {categories.map((item, i) => {
                    const isActive = selectedCategory === item;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedCategory(item)}
                        className={`flex justify-between cursor-pointer items-center px-3 py-2 border border-gray-300 rounded text-s transition ${
                          isActive
                            ? "bg-emerald-700 text-white"
                            : "hover:bg-gray-100 text-gray-800"
                        }`}
                      >
                        <span className="font-medium">{item}</span>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            isActive ? "bg-white text-black" : "bg-gray-200"
                          }`}
                        >
                          {categoryCounts[item]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </form>
            </div>
            
            {/* Right content with doctors list */}
            <div className="flex-1 md:pl-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="flex bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="w-1/3">
                      <img 
                        src={doctor.avatar} 
                        alt={doctor.full_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-4 ">
                    <a href={`/bac-si/${doctor.slug}`}>
                      <h3 className="text-black-900 font-bold font-medium text-lg cursor-pointer hover:text-emerald-900 ">{doctor.full_name}</h3>
                      <p className="text-emerald-900 italic font-bold text-sm mb-2 underline cursor-pointer hover:text-red-500">Xem chi tiết</p>
                    </a>
    
                      
                      <div className="flex items-center mb-2 text-sm text-gray-700">
                        <FaGraduationCap className="mr-2 text-gray-500" />
                        <span>{doctor.degree}</span>
                      </div>
                      
                      <div className="flex items-start text-sm text-gray-700">
                        <FaMapMarkerAlt className="mr-2 mt-1 text-gray-500" />
                        <span>{doctor.hospital}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              
              />
            </div>
          </div>

          <HospitalBanner/>

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

    </div>
 
  );
};

export default DoctorList;