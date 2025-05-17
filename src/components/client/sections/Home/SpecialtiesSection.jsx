import { useState } from "react";

const specialties = [
  {
    title: "Khoa Cơ - Xương - Khớp",
    subtitle: "Chẩn đoán chính xác - Điều trị chuyên sâu - Hiệu quả tối ưu",
    description:
      "Chuyên khoa Cơ Xương Khớp, Bệnh viện Đa khoa Hồng Ngọc với 20 năm kinh nghiệm...",
    services: [
      "BỆNH LÝ CỘT SỐNG CỔ: Thoái hóa, Thoát vị đĩa đệm",
      "CÁC BỆNH LÝ TỰ MIỄN: Viêm khớp dạng thấp, vẩy nến...",
      "VIÊM GÂN",
      "GÚT (GOUT)",
      "ĐAU CỘT SỐNG THẮT LƯNG: Thoái hóa, Thoát vị đĩa đệm",
      "THOÁI HÓA KHỚP",
      "LOÃNG XƯƠNG",
    ],
  },
  {
    title: "Khoa Ngoại Tổng Hợp",
    subtitle: "Làm chủ phẫu thuật công nghệ cao",
    description: "Thông tin về khoa Ngoại Tổng Hợp...",
    services: [],
  },
  {
    title: "Khoa Sản - Phụ khoa",
    subtitle: "Đi sinh như đi nghỉ dưỡng",
    description: "Thông tin về khoa Sản - Phụ khoa...",
    services: [],
  },
  {
    title: "Khoa Tim mạch",
    subtitle: "Khám Tim mạch - Chọn Hồng Ngọc",
    description: "Thông tin về khoa Tim mạch...",
    services: [],
  },
  {
    title: "Khoa Tai Mũi Họng & PT Đầu cổ",
    subtitle: "An toàn - Hiệu quả - Tận tâm",
    description: "Thông tin về khoa Tai Mũi Họng...",
    services: [],
  },
];

const SpecialtiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = specialties[activeIndex];

  return (
    <section className="py-12 bg-white px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Chuyên khoa nổi bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Cột trái */}
        <div className="space-y-3">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center ${
                idx === activeIndex
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.subtitle}</p>
              </div>
              <span className="text-xl">&rarr;</span>
            </div>
          ))}
          <button className="mt-4 px-6 py-2 border border-green-700 text-green-700 rounded-full hover:bg-green-50">
            Xem tất cả dịch vụ
          </button>
        </div>

        {/* Cột phải */}
        <div>
          <h3 className="text-xl font-bold mb-3">{active.subtitle}</h3>
          <p className="text-gray-700 mb-5">{active.description}</p>

          {active.services.length > 0 && (
            <>
              <h4 className="font-semibold mb-2">Top dịch vụ hàng đầu:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {active.services.map((service, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-4">
            <button className="px-6 py-3 border border-green-700 text-green-700 rounded-full hover:bg-green-50">
              Tìm kiếm Bác sĩ
            </button>
            <button className="px-6 py-3 border border-green-700 text-green-700 rounded-full hover:bg-green-50">
              Chi tiết chuyên khoa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
