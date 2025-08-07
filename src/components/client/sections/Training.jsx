import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award, Star, ChevronRight, Play, CheckCircle, Calendar, Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function HospitalTrainingLanding() {
  const [activeTab, setActiveTab] = useState('nursing');

  const programs = {
    nursing: {
      title: "Chương Trình Điều Dưỡng",
      duration: "3 năm",
      students: "500+ sinh viên",
      features: ["Thực hành tại bệnh viện", "Giảng viên giàu kinh nghiệm", "Chứng chỉ quốc tế", "Đảm bảo việc làm 95%"]
    },
    medical: {
      title: "Đào Tạo Bác Sĩ",
      duration: "6 năm",
      students: "300+ sinh viên",
      features: ["Thực tập lâm sàng", "Nghiên cứu khoa học", "Trang thiết bị hiện đại", "Mạng lưới bệnh viện rộng"]
    },
    pharmacy: {
      title: "Dược Sĩ Chuyên Nghiệp",
      duration: "5 năv",
      students: "200+ sinh viên",
      features: ["Phòng thí nghiệm chuẩn", "Hợp tác doanh nghiệp", "Kiến tập thực tế", "Cơ hội xuất ngoại"]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-20 -right-40 w-80 h-80 bg-white opacity-5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-400 rounded-full p-2 mr-4">
                <GraduationCap className="w-8 h-8 text-green-800" />
              </div>
              <span className="text-green-200 text-lg font-medium">Đào Tạo Y Khoa Chuyên Nghiệp</span>
            </div>
            
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Nâng Tầm 
              <span className="text-green-300"> Sự Nghiệp</span>
              <br />Y Khoa Của Bạn
            </h1>
            
            <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-2xl">
              Chương trình đào tạo y khoa hàng đầu với giảng viên chuyên môn cao, 
              cơ sở vật chất hiện đại và cơ hội thực hành thực tế tại bệnh viện.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="flex items-center bg-green-500 bg-opacity-30 rounded-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                <span>Chứng nhận quốc tế</span>
              </div>
              <div className="flex items-center bg-green-500 bg-opacity-30 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>1000+ Sinh viên</span>
              </div>
              <div className="flex items-center bg-green-500 bg-opacity-30 rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>95% Có việc làm</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Đăng Ký Ngay
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Xem Video Giới Thiệu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Chương Trình Đào Tạo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá các chương trình đào tạo chất lượng cao được thiết kế 
            để phát triển kỹ năng và kiến thức chuyên môn trong lĩnh vực y khoa
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-8"></div>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            {Object.keys(programs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-green-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {programs[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Program Content */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-6">
                {programs[activeTab].title}
              </h3>
              <div className="flex gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{programs[activeTab].duration}</div>
                  <div className="text-gray-600">Thời gian đào tạo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{programs[activeTab].students}</div>
                  <div className="text-gray-600">Đang theo học</div>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                {programs[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300">
                Tìm Hiểu Thêm
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-green-100">
                <div className="bg-green-500 rounded-full p-6 w-20 h-20 flex items-center justify-center mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Ưu Điểm Nổi Bật</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Học phí ưu đãi cho sinh viên xuất sắc</li>
                  <li>• Học bổng toàn phần cho top 10%</li>
                  <li>• Cơ hội thực tập tại 20+ bệnh viện</li>
                  <li>• Mạng lưới cựu sinh viên rộng khắp</li>
                  <li>• Hỗ trợ việc làm sau tốt nghiệp</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white mb-20">
          <h3 className="text-4xl font-bold text-center mb-12">Thành Tựu Đào Tạo</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-green-100 text-lg">Năm kinh nghiệm</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-green-100 text-lg">Cựu sinh viên</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-green-100 text-lg">Giảng viên</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-green-100 text-lg">Tỷ lệ việc làm</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Sẵn Sàng Bắt Đầu Hành Trình?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Đăng ký ngay hôm nay để nhận tư vấn miễn phí và khám phá 
              cơ hội phát triển sự nghiệp trong lĩnh vực y khoa
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-green-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Đăng Ký Tư Vấn
              </button>
              <button className="border-2 border-green-500 text-green-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                Tải Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12">Liên Hệ Tư Vấn</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-500 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Hotline Tư Vấn</h4>
                <p className="text-gray-300 text-lg">1900 2024</p>
                <p className="text-gray-300">(024) 3888 9999</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-500 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Email</h4>
                <p className="text-gray-300 text-lg">daotao@benhvien.edu.vn</p>
                <p className="text-gray-300">tuyensinh@benhvien.edu.vn</p>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-green-500 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-semibold mb-3">Cơ Sở Đào Tạo</h4>
                <p className="text-gray-300 text-lg">456 Giải Phóng</p>
                <p className="text-gray-300">Hai Bà Trưng, Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}