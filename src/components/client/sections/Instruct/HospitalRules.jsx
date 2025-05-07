import { useState } from "react";
import PageBanner from "../../PageBanner";
import dichvu from "../../../../assets/images/dichvu.png";
import { FiChevronRight, FiChevronLeft, FiPhone, FiInfo, FiHome, FiUser, FiShield } from "react-icons/fi";

export default function HospitalRules() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { name: "Nội quy bệnh viện", key: 1, icon: <FiHome className="mr-3" /> },
    { name: "Quyền và nghĩa vụ của người bệnh", key: 2, icon: <FiUser className="mr-3" /> },
    { name: "Các đối tượng người bệnh ưu tiên", key: 3, icon: <FiUser className="mr-3" /> },
    { name: "Quy trình khám chữa bệnh ngoại trú", key: 4, icon: <FiInfo className="mr-3" /> },
    { name: "Danh mục kỹ thuật", key: 5, icon: <FiInfo className="mr-3" /> },
    { name: "Bảng giá dịch vụ kỹ thuật", key: 6, icon: <FiInfo className="mr-3" /> },
    { name: "Chăm sóc khách hàng", key: 7, icon: <FiPhone className="mr-3" /> },
    { name: "Chính sách bảo mật", key: 8, icon: <FiShield className="mr-3" /> },
  ];

  const getNextSection = () => {
    const currentIndex = sections.findIndex(s => s.key === activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].key);
    }
  };

  const getPrevSection = () => {
    const currentIndex = sections.findIndex(s => s.key === activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].key);
    }
  };

  const contents = {
    7: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Chăm sóc khách hàng</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="prose max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Với mục tiêu "Lấy người bệnh làm trung tâm", Hệ thống Y tế Hồng Ngọc đã thiết lập bộ phận chăm sóc khách hàng riêng biệt,
            đáp ứng nhu cầu của từng khoa. Người bệnh có thể dễ dàng liên hệ và nhận hỗ trợ kịp thời với dịch vụ chăm sóc tận tâm và
            chuyên nghiệp.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Mỗi chuyên khoa của bệnh viện đều có đội ngũ chăm sóc khách hàng riêng, được đào tạo bài bản và có hiểu biết sâu sắc về khoa
            cùng các dịch vụ khám chữa bệnh. Đội ngũ có nhiệm vụ tiếp nhận và xử lý thông tin, đảm bảo giải đáp mọi thắc mắc của khách
            hàng một cách nhanh chóng và hiệu quả. Bệnh viện cam kết hỗ trợ tận tình, hướng dẫn các thủ tục và giải đáp mọi yêu cầu của
            bệnh nhân.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Thông tin liên hệ các bộ phận</h3>
          
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-teal-500 to-emerald-600">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">STT</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">BỘ PHẬN</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">SỐ HOTLINE</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">SỐ CHUNG (MÁY BÀN)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: 1, department: "Thai Sản", hotline: "0911858619", extension: "8866" },
                  { id: 2, department: "Sản Phụ Khoa", hotline: "0919645271", extension: "8866" },
                  { id: 3, department: "Nhi Khoa", hotline: "0918750845", extension: "6688" },
                  { id: 4, department: "Khoa Khám", hotline: "0888467966", extension: "6688" },
                  { id: 5, department: "Cấp Cứu", hotline: "0932232015", extension: "8866" },
                ].map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{item.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <a href={`tel:${item.hotline}`} className="text-emerald-600 hover:text-emerald-800 flex items-center">
                        <FiPhone className="mr-2" /> {item.hotline}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.extension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="relative">
      <PageBanner
        title="Hướng dẫn khách hàng"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Hướng dẫn khách hàng", active: true },
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Sticky on desktop */}
          <div className="lg:w-72 bg-white rounded-xl shadow-md lg:sticky lg:top-8 h-fit">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <FiInfo className="mr-2 text-emerald-600" />
                Nội quy bệnh viện
              </h2>
            </div>
            
            <nav className="p-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                    activeSection === section.key
                      ? "bg-emerald-100 text-emerald-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {section.icon}
                  {section.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {sections.find(s => s.key === activeSection)?.name}
                  </h1>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={getPrevSection}
                      disabled={activeSection === sections[0].key}
                      className={`p-2 rounded-lg ${activeSection === sections[0].key ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={getNextSection}
                      disabled={activeSection === sections[sections.length - 1].key}
                      className={`p-2 rounded-lg ${activeSection === sections[sections.length - 1].key ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  {contents[activeSection] || (
                    <div className="text-center py-12">
                      <div className="text-gray-400 mb-4">Nội dung đang được cập nhật</div>
                      <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        Liên hệ để biết thêm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}