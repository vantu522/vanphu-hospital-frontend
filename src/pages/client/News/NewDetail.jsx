import React from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { FiCalendar, FiClock, FiShare2, FiFacebook, FiTwitter, FiLinkedin, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewsDetail() {
  // Dữ liệu cố định luôn hiển thị
  const news = {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 9/2024",
    date: "09-08-2024",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <h2 class="text-2xl font-bold mb-4">Thông báo tuyển dụng</h2>
      <p class="mb-4">Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng các vị trí trong khối Y tế cho tháng 9/2024 với các yêu cầu cụ thể như sau:</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">1. Các vị trí tuyển dụng</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Bác sĩ đa khoa: 02 vị trí</li>
        <li>Điều dưỡng viên: 05 vị trí</li>
        <li>Kỹ thuật viên xét nghiệm: 02 vị trí</li>
        <li>Kỹ thuật viên hình ảnh y học: 01 vị trí</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">2. Yêu cầu chung</h3>
      <p class="mb-4">- Tốt nghiệp đại học/chuyên khoa các ngành y tế liên quan</p>
      <p class="mb-4">- Có chứng chỉ hành nghề theo quy định</p>
      <p class="mb-4">- Kinh nghiệm từ 2 năm trở lên tại vị trí tương đương</p>
      
      <h3 class="text-xl font-semibold mb-3 mt-6">3. Quyền lợi</h3>
      <p class="mb-4">- Mức lương cạnh tranh, thưởng theo hiệu suất</p>
      <p class="mb-4">- Được đào tạo nâng cao nghiệp vụ</p>
      <p class="mb-4">- Môi trường làm việc chuyên nghiệp</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-medium">Hồ sơ ứng tuyển gửi về:</p>
        <p>Phòng Nhân sự - Bệnh viện Đa khoa Hồng Ngọc</p>
        <p>Email: tuyendung@hongngochospital.vn</p>
        <p>Hotline: 0987 654 321</p>
        <p class="mt-2">Hạn cuối: 30/09/2024</p>
      </div>
    `
  };

  return (
    <div className="relative">
      <PageBanner
        title="Tin tức chi tiết"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", href: "/tin-tuc" },
          { label: news.title, active: true },
        ]}
      />

      {/* Phần nội dung chi tiết giữ nguyên như trước */}
      {/* News Detail Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-6">
            <Link to="/tin-tuc" className="inline-flex items-center text-emerald-600 hover:text-emerald-800">
              <FiArrowLeft className="mr-2" />
              Quay lại trang tin tức
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Featured Image */}
            <div className="h-80 md:h-96 overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* News Header */}
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {news.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  {news.date}
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  {news.readTime}
                </div>
              </div>
              
              {/* Social Sharing */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-gray-700">Chia sẻ:</span>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FiFacebook size={20} />
                </a>
                <a href="#" className="text-sky-500 hover:text-sky-700">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <FiLinkedin size={20} />
                </a>
                <button className="ml-2 text-gray-600 hover:text-gray-800">
                  <FiShare2 size={20} />
                </button>
              </div>
              
              {/* News Content */}
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </div>
          
          {/* Related News */}
          {news.relatedNews && news.relatedNews.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b">
                Tin tức liên quan
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {news.relatedNews.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FiCalendar className="mr-2" />
                        {item.date}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 hover:text-emerald-600">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>
                      <Link 
                        to={item.link} 
                        className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-800"
                      >
                        Đọc tiếp <FiArrowRight className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}