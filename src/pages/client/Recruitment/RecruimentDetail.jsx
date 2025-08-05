import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const getRecruitmentBySlug = async (slug) => {
  // Tạm thời giả lập bằng dữ liệu cứng
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        slug: "tuyen-dung-khoi-y-te-t7-2025",
        title: "Thông báo tuyển dụng khối Y tế T7/2025",
        deadline: "31-07-2025",
        position: "Bác sĩ",
        hospital: "Bệnh viện A",
        level: "Trưởng khoa",
        profession: "Y tế",
        // Thêm field cho ảnh công văn
        documentImages: [
          "/api/uploads/cong-van-tuyen-dung-trang-1.jpg",
          "/api/uploads/cong-van-tuyen-dung-trang-2.jpg"
        ],
        // Vẫn giữ content HTML để fallback
        content: `
          <p>Kính gửi Quý ứng viên,</p>
          <p>Nhằm đáp ứng nhu cầu nhân lực cho các cơ sở y tế trực thuộc, chúng tôi thông báo tuyển dụng các vị trí làm việc tại bệnh viện với thông tin như sau:</p>
          
          <h3>1. Vị trí tuyển dụng:</h3>
          <ul>
            <li>Bác sĩ chuyên khoa Nội</li>
            <li>Bác sĩ chuyên khoa Ngoại</li>
            <li>Điều dưỡng viên</li>
          </ul>

          <h3>2. Yêu cầu chung:</h3>
          <ul>
            <li>Tốt nghiệp đại học chuyên ngành tương ứng</li>
            <li>Có chứng chỉ hành nghề theo quy định</li>
            <li>Kỹ năng giao tiếp tốt, chịu được áp lực</li>
          </ul>

          <h3>3. Hồ sơ dự tuyển bao gồm:</h3>
          <ul>
            <li>Đơn xin việc</li>
            <li>Sơ yếu lý lịch có xác nhận</li>
            <li>Bằng cấp, chứng chỉ liên quan</li>
            <li>Giấy khám sức khỏe</li>
          </ul>

          <h3>4. Hạn nộp hồ sơ:</h3>
          <p><strong>31/07/2025</strong></p>

          <p>Trân trọng,</p>
          <p>Phòng Tổ chức Nhân sự</p>
        `
      });
    }, 500);
  });
};

const RecruitmentDetail = () => {
  const { slug } = useParams();
  const [recruitment, setRecruitment] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        const data = await getRecruitmentBySlug(slug);
        setRecruitment(data);
      } catch (err) {
        console.error("Lỗi khi tải chi tiết tuyển dụng:", err);
      }
    };
    fetchRecruitment();
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đơn ứng tuyển đã được gửi!");
    console.log(formData);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!recruitment) return <p className="p-10">Đang tải...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-10 gap-10">
      {/* Công văn tuyển dụng */}
      <div className="md:col-span-7">
        <h1 className="text-3xl font-bold mb-4">{recruitment.title}</h1>
        <p className="text-gray-600 mb-6">
          🕒 Hạn nộp hồ sơ:{" "}
          <span className="text-red-600 font-medium">{recruitment.deadline}</span>
        </p>
        <iframe
  src="http://localhost:5000/uploads/pdfs/1754393162227-662583004.pdf"
  width="100%"
  height="600px"
  title="PDF Viewer"
/>


        {/* Hiển thị ảnh công văn nếu có */}
        {recruitment.documentImages && recruitment.documentImages.length > 0 && !imageError ? (
          <div className="space-y-6">
            {/* Navigation cho nhiều trang */}
            {recruitment.documentImages.length > 1 && (
              <div className="flex items-center justify-center space-x-2 mb-4">
                {recruitment.documentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`px-3 py-1 rounded text-sm ${
                      selectedImageIndex === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Trang {index + 1}
                  </button>
                ))}
              </div>
            )}

            {/* Hiển thị ảnh công văn */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <img
                src={recruitment.documentImages[selectedImageIndex]}
                alt={`Công văn tuyển dụng - Trang ${selectedImageIndex + 1}`}
                className="w-full max-w-4xl mx-auto rounded border shadow-sm"
                style={{
                  aspectRatio: '210/297', // Tỉ lệ A4
                  objectFit: 'contain',
                  backgroundColor: '#f9f9f9'
                }}
                onError={handleImageError}
              />
              
              {/* Thông tin trang */}
              {recruitment.documentImages.length > 1 && (
                <p className="text-center text-gray-500 text-sm mt-2">
                  Trang {selectedImageIndex + 1} / {recruitment.documentImages.length}
                </p>
              )}
            </div>

            {/* Điều khiển zoom và download */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.open(recruitment.documentImages[selectedImageIndex], '_blank')}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Xem chi tiết</span>
              </button>
              
              <a
                href={recruitment.documentImages[selectedImageIndex]}
                download={`cong-van-${recruitment.slug}-trang-${selectedImageIndex + 1}.jpg`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Tải xuống</span>
              </a>
            </div>
          </div>
        ) : (
          // Fallback về HTML content nếu không có ảnh hoặc lỗi load ảnh
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: recruitment.content }}
            />
            {imageError && (
              <p className="text-amber-600 text-sm mt-4 p-3 bg-amber-50 rounded">
                ⚠️ Không thể tải ảnh công văn. Đang hiển thị nội dung dạng text.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Form ứng tuyển */}
      <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-md h-fit sticky top-6">
        <h2 className="text-xl font-semibold mb-4">Đăng ký ứng tuyển</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Họ tên</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Số điện thoại</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Thư ngỏ</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={formData.coverLetter}
              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
              placeholder="Chia sẻ về bản thân và lý do ứng tuyển..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Gửi hồ sơ
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentDetail;