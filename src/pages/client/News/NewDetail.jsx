import React, { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiShare2, FiFacebook, FiTwitter, FiLinkedin, FiArrowLeft, FiEye, FiTag, FiHeart, FiActivity, FiShield } from "react-icons/fi";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from '../../../assets/images/dichvu.png'
import { getNewsBySlug } from "../../../services/client/news";
import { useParams } from "react-router-dom";


export default function NewsDetail() {
  // Dữ liệu tin tức bệnh viện
  const [newDetail,setNewDetail] = useState({});
  const {slug} = useParams();
  
 
   useEffect(() => {
     const fetchNewDetail = async () => {
       try {
         const response = await getNewsBySlug(slug);
         setNewDetail(response);
         console.log(response);
       } catch (error) {
         console.error("Error fetching service details:", error);
       }
     };
     fetchNewDetail();
   }, [slug]);
  // Format date
  const formatDate = (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };


  return (
    <div className="relative min-h-screen bg-gray-50">
      <PageBanner
        title="Tin tức"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", active: true },
        ]}
      />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <button className="group inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300">
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Quay lại trang tin tức
            </button>
          </div>

          {/* Main Content Card */}
          <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Hero Image */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img 
                src={newDetail.image} 
                alt={newDetail.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  <FiActivity className="mr-2" size={16} />
                  {newDetail.category}
                </div>
              </div>

              {/* View Count & Trust Badge */}
              <div className="absolute top-6 right-6 space-y-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 text-gray-700 text-sm flex items-center shadow-md">
                  <FiEye className="mr-2" />
                  {/* {newDetail.view_count.toLocaleString()} lượt xem */}
                </div>
                <div className="bg-green-500 text-white rounded-full px-3 py-2 text-sm flex items-center shadow-md">
                  <FiShield className="mr-2" size={14} />
                  Đã kiểm duyệt
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {newDetail.title}
              </h1>
              
              {/* Description - Medical Summary */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                  <FiHeart className="mr-2" />
                  Tóm tắt nội dung
                </h3>
                <p className="text-blue-800 leading-relaxed text-lg">
                  {newDetail.description}
                </p>
              </div>
              
              {/* Meta Information */}
              <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-gray-50 rounded-lg border">
                <div className="flex items-center text-gray-700">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FiCalendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ngày xuất bản</p>
                    <p className="font-semibold">{formatDate(newDetail.publish_date)}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <FiClock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Thời gian đọc</p>
                    <p className="font-semibold">5 phút</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-gray-600 font-medium flex items-center">
                    <FiTag className="mr-2" />
                    Từ khóa:
                  </span>
                  {newDetail?.tags?.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Social Sharing */}
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg mb-8 border">
                <span className="text-gray-700 font-semibold">Chia sẻ thông tin hữu ích:</span>
                <div className="flex items-center space-x-3">
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 shadow-md">
                    <FiFacebook size={18} />
                  </button>
                  <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-all hover:scale-110 shadow-md">
                    <FiTwitter size={18} />
                  </button>
                  <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-110 shadow-md">
                    <FiLinkedin size={18} />
                  </button>
                  <button className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-all hover:scale-110 shadow-md">
                    <FiShare2 size={18} />
                  </button>
                </div>
              </div>
              
              {/* Medical Content */}
              <div className="prose prose-lg max-w-none medical-content">
                <div 
                  className="text-gray-700 leading-relaxed text-lg [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-blue-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:my-6 [&_li]:mb-2 [&_li]:text-gray-700 [&_.lead-paragraph]:text-xl [&_.lead-paragraph]:text-gray-600 [&_.lead-paragraph]:mb-6 [&_.lead-paragraph]:font-medium"
                  dangerouslySetInnerHTML={{ __html: newDetail.content }} 
                />
              </div>

              {/* Medical Disclaimer */}
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <FiShield className="text-yellow-700" size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Lưu ý y tế quan trọng</h4>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      Thông tin trong bài viết chỉ mang tính chất tham khảo. 
                      Để được tư vấn và điều trị chính xác, vui lòng liên hệ trực tiếp với đội ngũ y bác sĩ của bệnh viện 
                      hoặc đặt lịch khám qua hotline: <strong>1900 1234</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <FiHeart className="text-blue-600" size={16} />
                  </div>
                  Thông tin bác sĩ
                </h4>
                <div className="flex items-center">
                  {/* <img 
                    src={newDetail.author.avatar} 
                    alt={newDetail.author.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md mr-4"
                  /> */}
                  <div>
                    <p className="text-blue-600 font-medium">{newDetail.title}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Bài viết được xuất bản ngày {formatDate(newDetail.publish_date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Related Medical News */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tin tức y tế liên quan
              </h2>
              <p className="text-gray-600 text-lg">Cập nhật thêm thông tin hữu ích cho sức khỏe của bạn</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Phòng ngừa bệnh tim mạch hiệu quả",
                  image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  category: "Phòng ngừa"
                },
                {
                  title: "Chế độ dinh dưỡng cho người cao tuổi",
                  image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  category: "Dinh dưỡng"
                },
                {
                  title: "Tầm soát ung thư sớm - Chìa khóa sống khỏe",
                  image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                  category: "Tầm soát"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-blue-600 mb-3">
                      <span className="px-2 py-1 bg-blue-100 rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FiCalendar className="mr-2" />
                      20 tháng 1, 2025
                    </div>
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors flex items-center group">
                      Đọc thêm 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center">
            <FiHeart className="mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Cần tư vấn y tế?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Đội ngũ bác sĩ giàu kinh nghiệm của chúng tôi sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Đặt lịch khám
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Hotline: 1900 1234
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}