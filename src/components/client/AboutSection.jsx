// components/AboutSection.jsx
import { FaCheckCircle } from "react-icons/fa";
import ImageAbout from "../../assets/images/about/about.png";
const AboutSection = () => {
    const features = [
      "Hơn 250 bác sĩ chuyên gia, giàu kinh nghiệm",
      "Hệ thống trang thiết bị hiện đại, dẫn đầu tiến bộ của y học",
      "Dịch vụ chăm sóc sức khỏe đạt tiêu chuẩn y tế quốc tế",
      "Hiệu quả điều trị cao, sức khỏe bệnh nhân phục hồi sớm"
    ];
  
    return (
        <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={ImageAbout} // Đặt đúng đường dẫn ảnh bạn import
              alt="Giới thiệu Hồng Ngọc"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
  
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Giới thiệu về Hồng Ngọc</h2>
            <p className="text-gray-700 mb-4">
              Năm 2003, Bệnh viện Đa khoa Hồng Ngọc được thành lập, là bệnh viện tư nhân chất lượng cao tại miền Bắc tiên phong trong mô hình "bệnh viện - khách sạn" với cơ sở vật chất đạt tiêu chuẩn quốc tế.
            </p>
            <p className="text-gray-700 mb-6">
              Hơn 20 năm hình thành và phát triển, Hồng Ngọc đã trở thành top bệnh viện hàng đầu khu vực miền Bắc Việt Nam, được nhiều khách hàng tin tưởng lựa chọn sử dụng dịch vụ, với những ưu điểm nổi bật:
            </p>
  
            <ul className="space-y-3 mb-6">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheckCircle className="text-green-700 mt-1 mr-2" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
  
            <button className="bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition">
              Xem nhiều hơn
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;