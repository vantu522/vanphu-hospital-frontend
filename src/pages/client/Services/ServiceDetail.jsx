import React, { useEffect ,useState} from "react";
import a2 from "../../../assets/images/a2.png";
import a1 from "../../../assets/images/a1.jpg";
import a3 from "../../../assets/images/a3.jpg";
import Button from "../../../components/client/ui/button";
import a4 from "../../../assets/images/banner_chung.jpg";
import { FaCheck,FaCheckCircle} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getServiceBySlug } from "../../../services/client/services";
import ImageSlider from "../../../components/client/ui/ImageSlider";



const ServiceDetail = () => {
    const {slug } = useParams();
    const [serviceDetail, setServiceDetail] = useState(null);
    useEffect(() => {
      const fetchServiceDetail = async () => {
        try {
          const response = await getServiceBySlug(slug);
          setServiceDetail(response);
          console.log("Service Detail fetched successfully:", response);
        } catch (error) {
          console.error("Error fetching service details:", error);
        }
      }
      fetchServiceDetail();
    }
    , [slug]);

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
                <ImageSlider images={serviceDetail?.images || [a1, a2, a3]} />
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
                    <h1 className="text-2xl font-bold mb-4">{serviceDetail?.name}</h1>
                    <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: serviceDetail?.description }} />
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
