import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Add this import for getting slug from URL
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import a1 from "../../../assets/images/a1.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { getHealthConsultationBySlug,getAllHealthConsultations } from "../../../services/client/health_consultation";
const HealthDetail = () => {
  const { slug } = useParams(); // Get slug from URL params
  
  // State management
  const [consultation, setConsultation] = useState(null);
  const [relatedConsultations, setRelatedConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch consultation data and related articles
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch main consultation by slug
        const consultationData = await getHealthConsultationBySlug(slug);
        setConsultation(consultationData?.data || consultationData);

        // Fetch related consultations (all consultations for now, you can filter by specialty later)
        const allConsultations = await getAllHealthConsultations();
        const related = (allConsultations || [])
          .filter(item => item.slug !== slug) // Exclude current article
          .slice(0, 5); // Get first 5 related articles
        setRelatedConsultations(related);

      } catch (error) {
        console.error("Error loading consultation data:", error);
        setError("Không thể tải dữ liệu bài tư vấn");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  // Helper function to get image source
  const getImageSource = (item) => {
    return item?.image || a1;
  };

  // Loading state
  if (loading) {
    return (
      <div>
        <PageBanner
          backgroundImage={dichvu}
          title="Chi tiết bài tư vấn"
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Tư vấn sức khoẻ", href: "/tu-van-suc-khoe" },
            { label: "Chi tiết bài tư vấn", active: true },
          ]}
        />
        <div className="flex gap-5 px-20 py-8">
          <div className="flex-7 animate-pulse">
            <div className="bg-gray-300 h-8 w-3/4 mb-4 rounded"></div>
            <div className="bg-gray-300 h-4 w-1/2 mb-4 rounded"></div>
            <div className="bg-gray-300 h-64 w-full mb-4 rounded"></div>
            <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
            <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
            <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
          </div>
          <div className="flex-3 animate-pulse">
            <div className="bg-gray-300 h-6 w-1/2 mb-4 rounded"></div>
            <div className="bg-gray-300 h-20 w-full mb-4 rounded"></div>
            <div className="bg-gray-300 h-20 w-full rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div>
        <PageBanner
          backgroundImage={dichvu}
          title="Chi tiết bài tư vấn"
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Tư vấn sức khoẻ", href: "/tu-van-suc-khoe" },
            { label: "Chi tiết bài tư vấn", active: true },
          ]}
        />
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Lỗi</h2>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={() => window.history.back()}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // No data state
  if (!consultation) {
    return (
      <div>
        <PageBanner
          backgroundImage={dichvu}
          title="Chi tiết bài tư vấn"
          breadcrumbs={[
            { label: "Trang chủ", href: "/" },
            { label: "Tư vấn sức khoẻ", href: "/tu-van-suc-khoe" },
            { label: "Chi tiết bài tư vấn", active: true },
          ]}
        />
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Không tìm thấy bài viết</h2>
            <p className="text-gray-500">Bài tư vấn không tồn tại hoặc đã bị xóa.</p>
            <button 
              onClick={() => window.history.back()}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        backgroundImage={dichvu}
        title="Chi tiết bài tư vấn"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tư vấn sức khoẻ", href: "/tu-van-suc-khoe" },
          { label: consultation.title || "Chi tiết bài tư vấn", active: true },
        ]}
      />
      <div className="flex gap-5 px-20 py-8">
        <div className="flex-7">
          <h1 className="font-bold text-3xl">
            {consultation.title || "5 loại thực phẩm tốt cho sức khoẻ"}
          </h1>
          <div className="flex items-center text-s text-gray-500 mb-2 py-4">
            <AiOutlineCalendar className="mr-2 text-gray-500" />
            <span>{formatDate(consultation.createdAt || consultation.created_at)}</span>
            <span className="mx-2">•</span>
            <span className="font-bold text-rose-600">
              {consultation.specialty_id?.name || "Tư vấn sức khỏe"}
            </span>
          </div>
          <div>
            <p>
              {consultation.description || `Khám sức khỏe tổng quát không chỉ là cách hiệu quả nhất để bảo vệ
              sức khỏe mà còn là biện pháp phòng ngừa quan trọng.Thông qua kiểm
              tra định kỳ giúp đánh giá tình trạng sức khỏe toàn diện của bạn
              tại một thời điểm nhất định bằng cách kiểm tra chức năng của hầu
              hết các cơ quan trong cơ thể, đồng thời giúp phát hiện phát hiện
              các bệnh lý như hô hấp, thần kinh,... và phát hiện sớm dấu ấn bệnh
              ung thư ngay cả khi không có triệu chứng hay biểu hiện trong giai
              đoạn đầu Gói khám sức khỏe chuyên sâu 1 bao gồm hơn 40 danh mục
              như chụp CT/MRI, đo độ loãng xương toàn thân, xét nghiệm tìm dấu
              ấn ung thư trong máu…, giúp tầm soát trên 80 bệnh lý nguy hiểm và
              8 loại ung thư như ung thư tụy, đường mật, vòm họng… áp dụng tại
              cơ sở của BV Hồng Ngọc - 55 Yên Ninh`}
            </p>
            <img 
              src={getImageSource(consultation)} 
              alt={consultation.title || "Health consultation image"} 
            />
          </div>

          {/* Social Share Section */}
          <div className="mt-4 flex gap-5">
            <h2 className="font-semibold text-lg mb-2">Chia sẻ bài viết:</h2>
            <div className="flex gap-4">
              <a 
                href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebookF size={25} />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${consultation.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <FaTwitter size={25} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaYoutube size={25} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-800">
                <FaInstagram size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-3">
          <h1 className="font-bold text-xl">Bài viết liên quan</h1>

          {relatedConsultations.length > 0 ? (
            relatedConsultations.map((item, index) => (
              <div key={item.id || item._id || index} className="p-4 cursor-pointer">
                <div className="flex gap-4">
                  <div className="md:w-1/3">
                    <img 
                      src={getImageSource(item)} 
                      alt={item.title || "Related article"} 
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-medium text-sm">
                      {item.title || "Thông tin sức khoẻ bệnh nhân đang ngày càng phổ biến"}
                    </h3>
                    <div className="text-right mt-2">
                      <a 
                        href={`/tu-van-suc-khoe/${item.slug}`} 
                        className="text-xs text-gray-600"
                      >
                        Xem chi tiết
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Fallback related articles when no data
            [...Array(2)].map((_, index) => (
              <div key={index} className="p-4 cursor-pointer">
                <div className="flex gap-4">
                  <div className="md:w-1/3">
                    <img src={a1} alt="" />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="font-medium text-sm">
                      Thông tin sức khoẻ bệnh nhân đang ngày càng phổ biến
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
    </div>
  );
};

export default HealthDetail;