import React from "react";
import a2 from "../../../assets/images/a2.png";
import a1 from "../../../assets/images/a1.jpg";
import a3 from "../../../assets/images/a3.jpg";
import Button from "../../../components/client/ui/button";
import a4 from "../../../assets/images/banner_chung.jpg";
import { FaCheck,FaCheckCircle} from "react-icons/fa";



const ServiceDetail = () => {
    return (
        <div className="bg-gray-100 px-25 py-6">
            {/* Breadcrumb */}
            <nav>
                <ol className="flex gap-2 text-sm text-gray-500 mb-4">
                    <li><a href="/">Trang chủ</a></li>
                    <span>›</span>
                    <li><a href="#">Dịch vụ</a></li>
                    <span>›</span>
                    <li><a href="#">Khoa Da Liễu</a></li>
                    <span>›</span>
                    <li className="text-black">Chi tiết dịch vụ</li>
                </ol>
            </nav>

            {/* Main Content */}
            <div className="flex gap-6">
                {/* Left Content */}
                <div className="w-3/4  ">
                    <img 
                        src={a1}
                        alt="ACNE MEDIC" 
                        className="rounded mb-4 max-h-[500px] w-full object-cover" 
                    />
                    {/* Thumbnail preview - optional */}
                    <div className="flex gap-2 mt-4">
                        <img 
                            src={a2}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                       <img 
                            src={a3}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                        <img 
                            src={a2}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                    </div>

                      {/* Benefits */}
                        <div className="mt-6 border-t border-gray-300 border-b py-6">
                        <ul className="grid grid-cols-3 gap-4 text-sm text-gray-800">
                            <li className="flex items-center gap-2">
                            <FaCheck className="text-green-600 w-5 h-5 mt-0.5" />
                            <span>Thăm dò sâu các vấn đề bên trong đường dẫn khí</span>
                            </li>
                            <li className="flex items-center gap-2">
                            <FaCheck className="text-green-600 w-5 h-5 mt-0.5 items-center justify-center" />
                            <span>Kết hợp làm can thiệp và thủ thuật đơn giản</span>
                            </li>
                            <li className="flex items-center gap-2">
                            <FaCheck className="text-green-600 w-5 h-5 mt-0.5" />
                            <span>Chẩn đoán sớm các bệnh lý nguy hiểm</span>
                            </li>
                        </ul>
                        </div>
                    
                </div>

                {/* Right Sidebar */}
                <div className="w-1/4  h-1/2 p-4 ">
                    <h2 className="text-lg font-semibold text-green-700 mb-4">Điều trị mụn</h2>
                  <Button className="px-20 py-2 border border-emerald-700 hover:bg-white   "
                    variant="emerald"
                  >
                    Đặt lịch
                  </Button>
                    <div className="text-sm text-gray-700 bg-[#FFFFFF] p-3 mt-5">
                        <p className="mb-2 font-medium text-xl">Danh sách chi nhánh bệnh viện</p>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-600 w-5 h-5 mt-1" />
                                <div>
                                <p>Bệnh viện Đa khoa Hồng Ngọc - Tường Minh</p>
                                
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <FaCheckCircle className="text-green-600 w-5 h-5 mt-1" />
                                <div>
                                <p>Bệnh viện Đa khoa Hồng Ngọc - Yên Ninh</p>
                                </div>
                            </li>
                            </ul>

                    </div>
                </div>
            </div>
             {/* Banner  */}
            <div className="py-10">
                <a href="/chi-tiet-dich-vu">
                    <img src={a4} alt="" />
                </a>
            </div>
                {/* Content */}
            <div className="flex gap-10">
                {/* Left Content */}
                <div className="w-3/4">
                    <h2 className="text-xl text-green-800 font-semibold mb-2">
                    NỘI SOI PHẾ QUẢN - PHƯƠNG PHÁP TẦM SOÁT SỚM BỆNH LÝ ĐƯỜNG HÔ HẤP
                    </h2>
                    <p className="text-base text-gray-800 font-medium mb-4">
                    Việc phát hiện và chẩn đoán nguyên nhân sớm của các bệnh đường hô hấp mang lại lợi ích không ngờ. Người bệnh rút ngắn được thời gian điều trị, ngăn chặn nguy cơ tiến triển xấu của bệnh.
                    </p>

                    <h3 className="text-green-700 text-xl font-semibold mb-2">
                    Nội soi phế quản là phương pháp gì?
                    </h3>
                    <p className="text-gray-800 mb-3">
                    Phế quản thuộc hệ hô hấp dưới, là ống dẫn khí nối tiếp phía dưới khí quản. Các ống dẫn khí sau đó phân nhánh để đi sâu vào phổi và tạo thành cây phế quản.
                    </p>
                    <p className="text-gray-800 mb-4">
                    <strong>Nội soi phế quản</strong> là thủ thuật sử dụng ống soi mềm đưa qua mũi để chẩn đoán phần cuống phổi. Thông qua hình ảnh trực chiếu từ TV màu, bác sĩ sẽ phán đoán những bất thường bên trong để đi tới phương án điều trị thích hợp.
                    </p>
                </div>

                {/* Right Form */}
                <div className="w-1/4 bg-white p-4 rounded shadow">
                    <h3 className="text-lg font-bold text-green-800 mb-4">ĐĂNG KÝ TƯ VẤN</h3>
                    <form className="space-y-3">
                    <div>
                        <label className="text-sm text-gray-700">Họ và tên *</label>
                        <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Số điện thoại *</label>
                        <input
                        type="text"
                        placeholder="Số điện thoại"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-700">Yêu cầu</label>
                        <textarea
                        placeholder="Yêu cầu của quý khách"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
                    >
                        Nhận tư vấn
                    </button>
                    </form>
                </div>
                </div>
            {/* Related Services */}
<div className="mt-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Dịch vụ liên quan</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Service Card */}
    <div className="bg-white border rounded shadow hover:shadow-lg transition">
      <img
        src="/images/ct-phoi.jpg"
        alt="Chụp CT Phổi Liều Thấp"
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-bold text-black text-lg">Chụp CT Phổi Liều Thấp</h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
          Tái hiện lại hình ảnh phổi, bao gồm các tổn thương/ khối u nằm trong phổi dù nhỏ đến đâu.
        </p>
      </div>
    </div>

    <div className="bg-white border rounded shadow hover:shadow-lg transition">
      <img
        src="/images/da-ky-ho-hap.jpg"
        alt="Đo Đa Ký Hô Hấp/ Đo Đa Ký Giấc Ngủ"
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-bold text-black text-lg">Đo Đa Ký Hô Hấp/ Đo Đa Ký Giấc Ngủ</h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
          Phương pháp giúp thăm dò cho phép người bệnh phát hiện/ chẩn đoán sự tồn tại của rối loạn hô hấp trong giấc ngủ.
        </p>
      </div>
    </div>

    <div className="bg-white border rounded shadow hover:shadow-lg transition">
      <img
        src="/images/noi-soi-pq.jpg"
        alt="Nội Soi Phế Quản"
        className="w-full h-48 object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-bold text-black text-lg">Nội Soi Phế Quản</h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
          Nội soi phế quản là thủ thuật sử dụng ống soi mềm đưa qua mũi để chẩn đoán tổn thương bên trong đường hô hấp.
        </p>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default ServiceDetail;
