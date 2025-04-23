// components/WhyChooseUs.jsx
import FeatureCard from "../../ui/FeatureCard";
import {
  FaUserMd,
  FaMicroscope,
  FaHospitalAlt,
  FaGlobeAmericas,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd />,
      title: "Đội ngũ bác sĩ chuyên môn cao",
      description:
        "Đội ngũ bác sĩ, chuyên gia Hồng Ngọc giàu kinh nghiệm, có thâm niên công tác tại các bệnh viện lớn.",
    },
    {
      icon: <FaMicroscope />,
      title: "Trang thiết bị hiện đại, dẫn đầu tiến bộ của y học",
      description:
        "Máy móc, thiết bị được nhập khẩu từ các nước tiên tiến, công nghệ cao, có độ chính xác vượt trội.",
    },
    {
      icon: <FaHospitalAlt />,
      title: "Dịch vụ y tế hoàn hảo",
      description:
        "Dịch vụ toàn diện từ quản lý hồ sơ, chăm sóc khách hàng đến tư vấn sau khám.",
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Đẩy mạnh hợp tác quốc tế",
      description:
        "Hợp tác với nhiều tổ chức lớn, bệnh viện và chuyên gia nước ngoài để nâng cao chất lượng dịch vụ.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Xem tất cả dịch vụ
          </h2>
          <button className="text-red-500 font-medium hover:underline">
            Xem tất cả →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
