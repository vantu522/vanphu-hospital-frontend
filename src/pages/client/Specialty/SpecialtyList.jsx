import React from 'react';
import PageBanner from '../../../components/client/PageBanner';
import dichvu from '../../../assets/images/dichvu.png'
import ds from '../../../assets/images//dsc.jpg'
import Button from '../../../components/client/ui/button';

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
    <div className="">
      <PageBanner
        title="Chuyên khoa"
        backgroundImage={dichvu}
        breadcrumbs={[
            {label:"Trang chủ", href:'/'},
            {label:"Chuyên khoa", active:true}
        ]}
        />

      <div className='px-20 py-5'>
        <h1 className="text-3xl font-bold text-center mb-8 mt-10">Danh Sách Chuyên Khoa</h1>
        <div className="grid grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              className="bg-gray-200 p-4 rounded-lg text-center shadow-lg hover:shadow-xl hover:bg-white hover:border-2 hover:border-emerald-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" 
              key={index}
            >
              <div className={`text-4xl mb-4 ${specialty.icon} transition-colors duration-300 group-hover:text-emerald-600`} />
              <p className="text-sm font-semibold hover:text-emerald-700 transition-colors duration-300">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>

        <div className='flex'>
          <div className='w-300 h-100'>
              <img src={ds} alt="" />
          </div>
          <div className='p-10'>
              <h1 className='font-bold text-3xl '>Giới thiệu về các Khoa</h1>
              <p className='py-5'>Trải qua 20 năm không ngừng nỗ lực nâng cao chất lượng dịch vụ khám chữa bệnh, cho đến nay, Bệnh viện Hồng Ngọc đã trở thành địa chỉ y tế tin cậy của hàng triệu khách hàng với 25 chuyên khoa chất lượng, đáp ứng mọi nhu cầu chăm sóc sức khỏe của người dân.</p>
              
              <div className='grid grid-cols-2 gap-4 mt-6'>
                  <div className='flex items-center'>
                      <div className='bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                      <span>Hiệu quả điều trị cao</span>
                  </div>
                  
                  <div className='flex items-center'>
                      <div className='bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                      <span>Quy trình khoa học - Toàn diện - Chuyên nghiệp</span>
                  </div>
                  
                  <div className='flex items-center'>
                      <div className='bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                      <span>Đội ngũ chuyên gia đầu ngành</span>
                  </div>
                  
                  <div className='flex items-center'>
                      <div className='bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                      <span>Dịch vụ cao cấp - Chi phí hợp lý</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Vì sao chọn chúng tôi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200 p-6 rounded-md flex flex-col items-center">
            <div className="mb-4 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Đội ngũ bác sĩ chuyên môn cao</h3>
            <p className="text-center">
              Đội ngũ bác sĩ, chuyên gia Hồng Ngọc giàu kinh nghiệm, có thâm niên công tác tại các bệnh viện lớn như Bạch Mai, Nhi Trung Ương, Phụ Sản Trung Ương, Phụ Sản Hà Nội,... có thể xử lý những ca bệnh khó, phức tạp, mang lại sự yên tâm cho hàng triệu bệnh nhân.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 p-6 rounded-md flex flex-col items-center">
            <div className="mb-4 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Trang thiết bị y tế hiện đại</h3>
            <p className="text-center">
              Toàn bộ máy móc, trang thiết bị của bệnh viện, được nhập khẩu từ các nước tiên tiến, công nghệ cao, có kiểm định khắt khe như Anh, Mỹ, Nhật Bản, Hàn Quốc,.. nhằm tiếp cận nhanh triệu chứng bệnh, chẩn đoán chính xác, đưa ra phác đồ điều trị kịp thời và hiệu quả nhất.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 p-6 rounded-md flex flex-col items-center">
            <div className="mb-4 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">Dịch vụ y tế toàn diện</h3>
            <p className="text-center">
              Thương hiệu Bệnh viện Đa khoa Hồng Ngọc nổi bật với dịch vụ hoàn hảo từ tổng thể đến chi tiết như: quy trình khám, tư vấn và điều trị toàn diện, phối hợp chặt chẽ giữa các chuyên khoa, Đội ngũ nhân viên tư vấn, chăm sóc khách hàng chuyên nghiệp, tận tâm, nhẹ nhàng,... mang đến sự hài lòng cho cả những khách hàng khó tính nhất.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
                  type="button"
                  onClick={() => setShowAllServices(true)}
                  variant="primary"
                  className="px-6 py-2 border border-emerald-700 rounded hover:bg-whitegit fet transition"
                >
                  Xem nhiều hơn
            </Button>
        </div>
      </div>

      
    </div>
  );
};

export default SpecialtyList;
