import React from 'react';
import PageBanner from '../../../components/client/PageBanner';
import dichvu from '../../../assets/images/dichvu.png'
const specialties = [
  { name: "Khoa Sản - Phụ khoa", icon: "fa-solid fa-gavel" },
  { name: "Khám Sức Khoẻ Tổng Quát", icon: "fa-solid fa-heart" },
  { name: "Trung tâm IVF Hồng Ngọc", icon: "fa-solid fa-baby" },
  { name: "Tiêm Chứng", icon: "fa-solid fa-syringe" },
  { name: "Khoa Nhi", icon: "fa-solid fa-child" },
  { name: "Khoa Tai Mũi Họng & PT Đầu cổ", icon: "fa-solid fa-head-side-virus" },
  { name: "Khoa Tiêu hóa – Gan – Mật", icon: "fa-solid fa-bowl-food" },
  { name: "Khoa Ngoại Tổng Hợp", icon: "fa-solid fa-user-md" },
  { name: "Đơn nguyên Nam khoa & PT Tiết niệu", icon: "fa-solid fa-male" },
  { name: "Đơn nguyên Chấn Thương Chỉnh Hình", icon: "fa-solid fa-bone" },
  { name: "Khoa Cơ - Xương - Khớp", icon: "fa-solid fa-dumbbell" },
  { name: "Vật lý trị liệu - Phục hồi chức năng", icon: "fa-solid fa-person-walking" },
  { name: "Khoa Thận", icon: "fa-solid fa-kidney" },
  { name: "Khoa Nội tiết", icon: "fa-solid fa-balance-scale" },
  { name: "Khoa Tim mạch", icon: "fa-solid fa-heartbeat" },
  { name: "Khoa Tâm lý và Sức khỏe tâm thần", icon: "fa-solid fa-brain" },
  { name: "Khoa Hô hấp", icon: "fa-solid fa-lungs" },
  { name: "Khoa Ung Bướu", icon: "fa-solid fa-cancer" },
  { name: "Khoa Cấp cứu - Hồi sức tích cực ICU", icon: "fa-solid fa-ambulance" },
];

const SpecialtyList = () => {
  return (
    <div className="p-8">
        <PageBanner
        title="Chuyên khoa"
        backgroundImage={dichvu}
        breadcrumbs={[
            {label:"Trang chủ", href:'/'},
            {label:"Chuyên khoa", active:true}
        ]}
        />
      <h1 className="text-3xl font-bold text-center mb-8 mt-10">Danh Sách Chuyên Khoa</h1>
      <div className="grid grid-cols-4 gap-6">
        {specialties.map((specialty, index) => (
          <div className="bg-gray-200 p-4 rounded-lg text-center shadow-lg hover:border-amber-100" key={index}>
            <div className={`text-4xl mb-4 ${specialty.icon}`} />
            <p className="text-sm font-semibold">{specialty.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyList;
