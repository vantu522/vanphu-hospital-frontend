import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import a1 from "../../../assets/images/a1.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

const HealthDetail = () => {
  return (
    <div>
      <PageBanner
        backgroundImage={dichvu}
        title="Chi tiết bài tư vấn"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tư vấn sức khoẻ", href: "tu-van-suc-khoe" },
          { label: "Chi tiết bài tư vấn", active: true },
        ]}
      />
      <div className="flex gap-5 px-20 py-8 ">
        <div className="flex-7">
          <h1 className="font-bold text-3xl">
            5 loại thực phẩm tốt cho sức khoẻ
          </h1>
          <div className="flex items-center text-s text-gray-500 mb-2 py-4">
            <AiOutlineCalendar className="mr-2 text-gray-500" />{" "}
            {/* Icon lịch */}
            <span>15/04/2025</span>
            <span className="mx-2">•</span>
            <span className="font-bold text-rose-600">Khoa Tim mạch</span>
          </div>
          <div>
            <p>
              Khám sức khỏe tổng quát không chỉ là cách hiệu quả nhất để bảo vệ
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
              cơ sở của BV Hồng Ngọc - 55 Yên Ninh{" "}
            </p>
            <img src={a1} alt="" />
          </div>

          {/* Social Share Section */}
          <div className="mt-4 flex gap-5 ">
            <h2 className="font-semibold text-lg mb-2">Chia sẻ bài viết:</h2>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={25} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
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

        <div className="flex-3 ">
          <h1 className="font-bold text-xl">Bài viết liên quan</h1>

          {/* First section */}
          <div className=" p-4 cursor-pointer">
            <div className="flex gap-4 ">
              <div className="md:w-1/3">
                <img src={a1} alt="" />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-medium text-sm">
                  Thông tin sức khoẻ bệnh nhân đang ngày càng phổ biến
                </h3>
                <div className="text-right mt-2">
                  <a href="#" className="text-xs text-gray-600">
                    Xem chi tiết{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* First section */}
          <div className=" p-4">
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
                    Xem chi tiết{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDetail;
