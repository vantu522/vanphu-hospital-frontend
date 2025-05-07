import {
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaLeaf,
  FaHandsHelping,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function Mision() {
  return (
    <div>
      {/* Phần Tầm nhìn & Sứ mệnh */}
      <div className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tầm nhìn & Sứ mệnh
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <GiHealthNormal className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Tầm nhìn</h3>
              </div>
              <p className="text-gray-700">
                Trở thành hệ thống y tế tư nhân hàng đầu Việt Nam, tiên phong
                trong ứng dụng công nghệ cao và mô hình chăm sóc sức khỏe toàn
                diện, mang lại chất lượng dịch vụ đạt chuẩn quốc tế với chi phí
                hợp lý cho người dân Việt Nam.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MdHealthAndSafety className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sứ mệnh</h3>
              </div>
              <p className="text-gray-700">
                Cung cấp dịch vụ y tế chất lượng cao với đội ngũ chuyên gia
                giỏi, trang thiết bị hiện đại và quy trình chuẩn quốc tế. Đồng
                hành cùng cộng đồng trong chăm sóc sức khỏe toàn diện, từ phòng
                bệnh đến điều trị, với sự tận tâm và trách nhiệm cao nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Giá trị cốt lõi */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những nguyên tắc không thay đổi trong suốt hành trình phát triển
              của chúng tôi
            </p>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Giá trị 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-green-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <FaHeartbeat className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chất lượng vượt trội
              </h3>
              <p className="text-gray-700">
                Cam kết chất lượng dịch vụ y tế đạt chuẩn quốc tế với hệ thống
                quản lý chất lượng toàn diện.
              </p>
            </div>

            {/* Giá trị 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-blue-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                <FaUserMd className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chuyên môn xuất sắc
              </h3>
              <p className="text-gray-700">
                Đội ngũ y bác sĩ trình độ cao, liên tục cập nhật kiến thức và
                phương pháp điều trị tiên tiến.
              </p>
            </div>

            {/* Giá trị 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-amber-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                <FaAward className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Tính chính trực
              </h3>
              <p className="text-gray-700">
                Hoạt động minh bạch, tuân thủ đạo đức y khoa và đặt lợi ích bệnh
                nhân lên hàng đầu.
              </p>
            </div>

            {/* Giá trị 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-emerald-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-emerald-700 transition-colors">
                <FaLeaf className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Môi trường xanh
              </h3>
              <p className="text-gray-700">
                Xây dựng mô hình bệnh viện xanh - thông minh, thân thiện với môi
                trường và người bệnh.
              </p>
            </div>

            {/* Giá trị 5 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-purple-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                <FaHandsHelping className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Đổi mới sáng tạo
              </h3>
              <p className="text-gray-700">
                Tiên phong áp dụng công nghệ mới, cải tiến không ngừng để nâng
                cao chất lượng dịch vụ.
              </p>
            </div>

            {/* Giá trị 6 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-green-300 transition-all duration-300 group">
              <div className="bg-rose-600 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-rose-700 transition-colors">
                <FaHeartbeat className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Chăm sóc tận tâm
              </h3>
              <p className="text-gray-700">
                Đặt bệnh nhân làm trung tâm, mang đến dịch vụ chăm sóc chu đáo
                như người thân trong gia đình.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
