import React, { useState,useEffect, use } from "react";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import dichvu from '../../../assets/images/dichvu.png'
import PageBanner from "../../../components/client/PageBanner";
import Pagination from "../../../components/client/Pagination";
import HospitalBanner from "../../../components/client/sections/Home/HospitalBanner";
import { getAllDoctors, getDoctorsBySpecialty } from "../../../services/client/doctors";
import { getAllSpecialties } from "../../../services/client/specialties";

const DoctorList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

    const [activeIndex, setActiveIndex] = useState(0);
    const [showAllServices, setShowAllServices] = useState(false);
    const serviceList = [...Array(20)];
    const visibleServices = showAllServices ? serviceList : serviceList.slice(0, 9);
      const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Tạo categories từ API specialties với _id làm key
  const categories = specialties.length > 0 ? [
    { id: "all", name: "Tất cả" },
    ...specialties.map(specialty => ({ id: specialty._id, name: specialty.name }))
  ] : [];
  
  console.log('Specialties:', specialties);
  console.log('Categories:', categories);
  console.log('Selected category:', selectedCategory);

  // Tạo categoryCounts từ API specialties (sử dụng doctor_count nếu có, hoặc random nếu không)
  const categoryCounts = {
    "Tất cả": doctors.length,
    ...specialties.reduce((acc, specialty) => {
      acc[specialty.name] = specialty.doctor_count || Math.floor(Math.random() * 50) + 1;
      return acc;
    }, {})
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
      setLoading(true);
      try {
        const [doctorsData, specialtiesData] = await Promise.all([
          getAllDoctors(),
          getAllSpecialties()
        ]);
        setDoctors(doctorsData);
        setFilteredDoctors(doctorsData);
        setSpecialties(specialtiesData);
        console.log("Doctors fetched successfully:", doctorsData);
        console.log("Specialties fetched successfully:", specialtiesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function để lọc bác sĩ theo chuyên khoa
  const handleCategoryChange = async (categoryId) => {
    console.log('Clicking category with ID:', categoryId);
    setSelectedCategory(categoryId);
    setLoading(true);
    
    try {
      if (categoryId === "all") {
        console.log('Loading all doctors:', doctors.length);
        setFilteredDoctors(doctors);
      } else {
        // Truyền trực tiếp specialtyId vào API
        console.log('Calling API with specialtyId:', categoryId);
        const doctorsBySpecialty = await getDoctorsBySpecialty(categoryId);
        console.log('API response:', doctorsBySpecialty);
        setFilteredDoctors(doctorsBySpecialty);
      }
    } catch (error) {
      console.error('Error filtering doctors by specialty:', error);
      setFilteredDoctors([]);
    } finally {
      setLoading(false);
    }
  };

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
                          className={`flex justify-between cursor-pointer items-center px-3 py-2 border border-gray-300 rounded text-s transition ${
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
            
            {/* Right content with doctors list */}
            <div className="flex-1 md:pl-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (
                  <div className="col-span-2 text-center py-8">
                    <div className="text-gray-500 text-lg">
                      Đang tải danh sách bác sĩ...
                    </div>
                  </div>
                ) : filteredDoctors.length === 0 ? (
                  <div className="col-span-2 text-center py-8">
                    <div className="text-gray-500 text-lg">
                      Không có bác sĩ nào trong chuyên khoa "{categories.find(c => c.id === selectedCategory)?.name || selectedCategory}"
                    </div>
                  </div>
                ) : (
                  filteredDoctors.map((doctor) => (
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
                  ))
                )}
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