import { FiChevronRight, FiChevronLeft, FiPhone, FiInfo, FiHome, FiUser, FiShield, FiDollarSign, FiClock, FiCheckCircle, FiAlertCircle, FiHeart, FiFileText } from "react-icons/fi";
import React, {useState} from "react";
// Mock PageBanner component
const PageBanner = ({ title, backgroundImage, breadcrumbs }) => (
  <div className="relative h-64 bg-gradient-to-r from-emerald-600 to-emerald-700 flex items-center justify-center">
    <div 
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-emerald-900/20" />
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="flex items-center justify-center space-x-2 text-emerald-100">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span className={crumb.active ? "font-semibold" : "hover:text-white cursor-pointer"}>
              {crumb.label}
            </span>
            {index < breadcrumbs.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default function HospitalRules() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { name: "Nội quy bệnh viện", key: 1, icon: <FiHome className="mr-3" /> },
    { name: "Quyền và nghĩa vụ của người bệnh", key: 2, icon: <FiUser className="mr-3" /> },
    { name: "Các đối tượng người bệnh ưu tiên", key: 3, icon: <FiHeart className="mr-3" /> },
    { name: "Quy trình khám chữa bệnh ngoại trú", key: 4, icon: <FiClock className="mr-3" /> },
    { name: "Danh mục kỹ thuật", key: 5, icon: <FiFileText className="mr-3" /> },
    { name: "Bảng giá dịch vụ kỹ thuật", key: 6, icon: <FiDollarSign className="mr-3" /> },
    { name: "Chăm sóc khách hàng", key: 7, icon: <FiPhone className="mr-3" /> },
    { name: "Chính sách bảo mật", key: 8, icon: <FiShield className="mr-3" /> },
  ];

  const getNextSection = () => {
    const currentIndex = sections.findIndex(s => s.key === activeSection);
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].key);
    }
  };

  const getPrevSection = () => {
    const currentIndex = sections.findIndex(s => s.key === activeSection);
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].key);
    }
  };

  const contents = {
    1: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Nội quy bệnh viện</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
            <h3 className="text-lg font-semibold text-emerald-900 mb-4 flex items-center">
              <FiCheckCircle className="mr-2" />
              Quy định chung
            </h3>
            <ul className="space-y-3 text-emerald-800">
              <li>• Giữ gìn vệ sinh cá nhân và môi trường bệnh viện</li>
              <li>• Tuân thủ thời gian khám bệnh theo lịch hẹn</li>
              <li>• Không hút thuốc trong khuôn viên bệnh viện</li>
              <li>• Trang phục lịch sự khi đến khám</li>
              <li>• Giữ im lặng trong khu vực khám bệnh</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FiAlertCircle className="mr-2" />
              Những điều cấm
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li>• Không mang thức ăn có mùi vào bệnh viện</li>
              <li>• Không sử dụng điện thoại khu vực cấm</li>
              <li>• Không tự ý rời khỏi phòng trong lúc điều trị</li>
              <li>• Không làm ồn ảnh hưởng bệnh nhân khác</li>
              <li>• Không mang động vật vào bệnh viện</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Giờ thăm nuôi bệnh nhân</h3>
          <div className="grid md:grid-cols-3 gap-4 text-emerald-800">
            <div className="text-center p-4 bg-white rounded-lg border border-emerald-100">
              <FiClock className="mx-auto mb-2 text-2xl" />
              <p className="font-semibold">Sáng</p>
              <p>8:00 - 11:30</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-emerald-100">
              <FiClock className="mx-auto mb-2 text-2xl" />
              <p className="font-semibold">Chiều</p>
              <p>14:00 - 17:30</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-emerald-100">
              <FiClock className="mx-auto mb-2 text-2xl" />
              <p className="font-semibold">Tối</p>
              <p>19:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
    ),

    2: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Quyền và nghĩa vụ của người bệnh</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4 flex items-center">
                <FiCheckCircle className="mr-3 text-2xl" />
                Quyền của người bệnh
              </h3>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Được khám bệnh, chữa bệnh kịp thời, được giải thích về tình trạng sức khỏe
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Được bảo mật thông tin về bệnh tật, được tôn trọng danh nhân phẩm
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Được lựa chọn cơ sở khám chữa bệnh, bác sĩ điều trị
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Được từ chối điều trị, được chuyển tuyến khi có chỉ định
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Được bồi thường khi có thiệt hại do lỗi của cơ sở y tế
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FiUser className="mr-3 text-2xl" />
                Nghĩa vụ của người bệnh
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cung cấp thông tin đầy đủ, chính xác về tình trạng sức khỏe
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tuân thủ nội quy của cơ sở khám chữa bệnh
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thanh toán đầy đủ chi phí khám chữa bệnh theo quy định
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tôn trọng, hợp tác với nhân viên y tế trong quá trình điều trị
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thực hiện các biện pháp phòng, chống dịch bệnh theo hướng dẫn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    3: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Các đối tượng người bệnh ưu tiên</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Trẻ em dưới 6 tuổi",
              icon: <FiHeart className="text-3xl text-emerald-600" />,
              description: "Trẻ em dưới 6 tuổi được ưu tiên khám và điều trị đầu tiên"
            },
            {
              title: "Người cao tuổi (≥80 tuổi)",
              icon: <FiUser className="text-3xl text-emerald-600" />,
              description: "Người cao tuổi từ 80 tuổi trở lên được ưu tiên đặc biệt"
            },
            {
              title: "Phụ nữ có thai",
              icon: <FiHeart className="text-3xl text-emerald-600" />,
              description: "Phụ nữ mang thai được ưu tiên trong mọi dịch vụ y tế"
            },
            {
              title: "Người khuyết tật",
              icon: <FiShield className="text-3xl text-emerald-600" />,
              description: "Người khuyết tật được hỗ trợ và ưu tiên đặc biệt"
            },
            {
              title: "Thương binh, liệt sĩ",
              icon: <FiShield className="text-3xl text-emerald-600" />,
              description: "Thương binh, gia đình liệt sĩ được ưu tiên cao nhất"
            },
            {
              title: "Cấp cứu",
              icon: <FiAlertCircle className="text-3xl text-red-500" />,
              description: "Bệnh nhân cấp cứu được ưu tiên tuyệt đối"
            }
          ].map((item, index) => (
            <div key={index} className={`${index === 5 ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'} p-6 rounded-xl border hover:shadow-lg transition-shadow`}>
              <div className="text-center mb-4">
                {item.icon}
              </div>
              <h3 className={`text-lg font-semibold ${index === 5 ? 'text-red-800' : 'text-emerald-800'} mb-3 text-center`}>
                {item.title}
              </h3>
              <p className={`${index === 5 ? 'text-red-700' : 'text-emerald-700'} text-center text-sm`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
          <div className="flex items-start">
            <FiInfo className="text-emerald-600 text-2xl mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-emerald-800 mb-3">Lưu ý quan trọng</h3>
              <ul className="text-emerald-700 space-y-2">
                <li>• Vui lòng xuất trình giấy tờ chứng minh đối tượng ưu tiên</li>
                <li>• Đối tượng ưu tiên được áp dụng theo thứ tự: Cấp cứu → Trẻ em → Cao tuổi → Phụ nữ có thai → Khuyết tật</li>
                <li>• Trong cùng nhóm ưu tiên, áp dụng nguyên tắc "đến trước, được phục vụ trước"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    4: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Quy trình khám chữa bệnh ngoại trú</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Đăng ký khám bệnh",
              content: "Xuất trình CCCD/CMND, thẻ BHYT (nếu có). Điền phiếu đăng ký khám bệnh tại quầy lễ tân.",
              icon: <FiFileText className="text-2xl text-blue-500" />
            },
            {
              step: "02", 
              title: "Thanh toán viện phí",
              content: "Thanh toán viện phí tại quầy thu ngân. Giữ biên lai để làm thủ tục hoàn tất sau khám.",
              icon: <FiDollarSign className="text-2xl text-green-500" />
            },
            {
              step: "03",
              title: "Chờ khám theo số thứ tự", 
              content: "Ngồi chờ tại khu vực chờ khám. Theo dõi số thứ tự được gọi trên màn hình hiển thị.",
              icon: <FiClock className="text-2xl text-orange-500" />
            },
            {
              step: "04",
              title: "Khám bệnh với bác sĩ",
              content: "Gặp bác sĩ để khám và tư vấn. Trả lời trung thực các câu hỏi về tình trạng sức khỏe.",
              icon: <FiHeart className="text-2xl text-red-500" />
            },
            {
              step: "05", 
              title: "Thực hiện cận lâm sàng",
              content: "Thực hiện các xét nghiệm, chụp X-quang theo chỉ định của bác sĩ (nếu có).",
              icon: <FiFileText className="text-2xl text-purple-500" />
            },
            {
              step: "06",
              title: "Nhận kết quả và toa thuốc",
              content: "Nhận kết quả khám, toa thuốc và hướng dẫn điều trị từ bác sĩ.",
              icon: <FiCheckCircle className="text-2xl text-teal-500" />
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-600 border-4 border-white shadow-lg">
                  {item.step}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center mb-4">
            <FiClock className="text-blue-600 text-2xl mr-3" />
            <h3 className="text-lg font-semibold text-blue-800">Thời gian khám bệnh</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-blue-700">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">Thứ 2 - Thứ 6</p>
              <p>7:00 - 16:30</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">Thứ 7 - Chủ nhật</p>
              <p>7:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
    ),

    5: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Danh mục kỹ thuật</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <FiFileText className="mr-3" />
                Khám và tư vấn
              </h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Khám tổng quát</li>
                <li>• Khám chuyên khoa</li>
                <li>• Tư vấn dinh dưỡng</li>
                <li>• Tư vấn tâm lý</li>
                <li>• Khám sức khỏe định kỳ</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <FiHeart className="mr-3" />
                Điện tim & Siêu âm
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Điện tim thường</li>
                <li>• Điện tim gắng sức</li>
                <li>• Siêu âm bụng tổng quát</li>
                <li>• Siêu âm tim</li>
                <li>• Siêu âm thai</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <FiFileText className="mr-3" />
                Xét nghiệm
              </h3>
              <ul className="space-y-2 text-purple-700">
                <li>• Xét nghiệm máu</li>
                <li>• Xét nghiệm nước tiểu</li>
                <li>• Xét nghiệm vi khuẩn</li>
                <li>• Xét nghiệm hormone</li>
                <li>• Xét nghiệm ung thư</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center">
                <FiFileText className="mr-3" />
                Chẩn đoán hình ảnh
              </h3>
              <ul className="space-y-2 text-orange-700">
                <li>• X-quang số hóa</li>
                <li>• CT Scanner</li>
                <li>• MRI</li>
                <li>• Nội soi</li>
                <li>• Mammography</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <FiHeart className="mr-3" />
                Thủ thuật điều trị
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Tiểu phẫu</li>
                <li>• Châm cứu</li>
                <li>• Vật lý trị liệu</li>
                <li>• Truyền dịch</li>
                <li>• Thay băng</li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
              <h3 className="text-xl font-semibold text-teal-800 mb-4 flex items-center">
                <FiShield className="mr-3" />
                Dịch vụ khác
              </h3>
              <ul className="space-y-2 text-teal-700">
                <li>• Tiêm phòng</li>
                <li>• Khám nghề nghiệp</li>
                <li>• Cấp giấy chứng nhận sức khỏe</li>
                <li>• Tư vấn trước hôn nhân</li>
                <li>• Chăm sóc sau sinh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    6: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Bảng giá dịch vụ kỹ thuật</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Khám và tư vấn",
              icon: <FiUser className="text-blue-500" />,
              services: [
                { name: "Khám bệnh tổng quát", price: "150,000" },
                { name: "Khám chuyên khoa", price: "200,000" },
                { name: "Tư vấn dinh dưỡng", price: "100,000" },
                { name: "Tư vấn tâm lý", price: "300,000" }
              ]
            },
            {
              title: "Xét nghiệm",
              icon: <FiFileText className="text-green-500" />,
              services: [
                { name: "Công thức máu", price: "80,000" },
                { name: "Đường huyết", price: "50,000" },
                { name: "Chức năng gan", price: "120,000" },
                { name: "Chức năng thận", price: "100,000" }
              ]
            },
            {
              title: "Chẩn đoán hình ảnh", 
              icon: <FiHeart className="text-purple-500" />,
              services: [
                { name: "X-quang ngực", price: "120,000" },
                { name: "Siêu âm bụng", price: "200,000" },
                { name: "CT Scanner", price: "800,000" },
                { name: "MRI", price: "1,500,000" }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.title}</span>
                </h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-gray-600 font-medium">Dịch vụ</th>
                        <th className="text-right py-3 text-gray-600 font-medium">Giá (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.services.map((service, serviceIndex) => (
                        <tr key={serviceIndex} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 text-gray-800">{service.name}</td>
                          <td className="py-3 text-right font-semibold text-green-600">{service.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-start">
            <FiInfo className="text-yellow-600 text-2xl mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Lưu ý về giá dịch vụ</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Giá đã bao gồm VAT theo quy định</li>
                <li>• Được áp dụng bảo hiểm y tế theo quy định</li>
                <li>• Giá có thể thay đổi theo thông báo của bệnh viện</li>
                <li>• Liên hệ 1900-1234 để biết thêm chi tiết</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    7: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Chăm sóc khách hàng</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="prose max-w-none space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Với mục tiêu "Lấy người bệnh làm trung tâm", Hệ thống Y tế Hồng Ngọc đã thiết lập bộ phận chăm sóc khách hàng riêng biệt,
            đáp ứng nhu cầu của từng khoa. Người bệnh có thể dễ dàng liên hệ và nhận hỗ trợ kịp thời với dịch vụ chăm sóc tận tâm và
            chuyên nghiệp.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Mỗi chuyên khoa của bệnh viện đều có đội ngũ chăm sóc khách hàng riêng, được đào tạo bài bản và có hiểu biết sâu sắc về khoa
            cùng các dịch vụ khám chữa bệnh. Đội ngũ có nhiệm vụ tiếp nhận và xử lý thông tin, đảm bảo giải đáp mọi thắc mắc của khách
            hàng một cách nhanh chóng và hiệu quả. Bệnh viện cam kết hỗ trợ tận tình, hướng dẫn các thủ tục và giải đáp mọi yêu cầu của
            bệnh nhân.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Thông tin liên hệ các bộ phận</h3>
          
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-teal-500 to-emerald-600">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">STT</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">BỘ PHẬN</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">SỐ HOTLINE</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">SỐ CHUNG (MÁY BÀN)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { id: 1, department: "Thai Sản", hotline: "0911858619", extension: "8866" },
                  { id: 2, department: "Sản Phụ Khoa", hotline: "0919645271", extension: "8866" },
                  { id: 3, department: "Nhi Khoa", hotline: "0918750845", extension: "6688" },
                  { id: 4, department: "Khoa Khám", hotline: "0888467966", extension: "6688" },
                  { id: 5, department: "Cấp Cứu", hotline: "0932232015", extension: "8866" },
                  { id: 6, department: "Tim Mạch", hotline: "0901234567", extension: "7788" },
                  { id: 7, department: "Nội Khoa", hotline: "0912345678", extension: "7799" },
                  { id: 8, department: "Ngoại Khoa", hotline: "0923456789", extension: "8800" },
                ].map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{item.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <a href={`tel:${item.hotline}`} className="text-emerald-600 hover:text-emerald-800 flex items-center">
                        <FiPhone className="mr-2" /> {item.hotline}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.extension}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <FiClock className="mr-3" />
              Giờ làm việc
            </h3>
            <div className="text-blue-700 space-y-2">
              <p><strong>Thứ 2 - Thứ 6:</strong> 7:00 - 17:00</p>
              <p><strong>Thứ 7:</strong> 7:00 - 12:00</p>
              <p><strong>Chủ nhật:</strong> 8:00 - 12:00</p>
              <p><strong>Cấp cứu:</strong> 24/7</p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <FiPhone className="mr-3" />
              Liên hệ tổng đài
            </h3>
            <div className="text-green-700 space-y-2">
              <p><strong>Tổng đài:</strong> <a href="tel:19001234" className="text-green-600 hover:text-green-800">1900-1234</a></p>
              <p><strong>Email:</strong> info@benhvien.com</p>
              <p><strong>Website:</strong> www.benhvien.com</p>
              <p><strong>Fanpage:</strong> fb.com/benhvien</p>
            </div>
          </div>
        </div>
      </div>
    ),

    8: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Chính sách bảo mật</h2>
          <div className="w-16 h-1 bg-white bg-opacity-70 mt-3 rounded-full"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <FiShield className="mr-3" />
              Cam kết bảo mật thông tin
            </h3>
            <p className="text-blue-700 leading-relaxed">
              Bệnh viện cam kết bảo vệ tuyệt đối thông tin cá nhân và y tế của bệnh nhân. 
              Mọi thông tin được mã hóa và lưu trữ an toàn theo tiêu chuẩn quốc tế về bảo mật dữ liệu y tế.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Thông tin được bảo mật</h3>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  Thông tin cá nhân (tên, địa chỉ, số điện thoại)
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  Hồ sơ bệnh án và kết quả khám
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  Kết quả xét nghiệm và chẩn đoán hình ảnh
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="mr-2 mt-1 flex-shrink-0" />
                  Thông tin thanh toán và bảo hiểm
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">Quyền của bệnh nhân</h3>
              <ul className="text-orange-700 space-y-2">
                <li className="flex items-start">
                  <FiUser className="mr-2 mt-1 flex-shrink-0" />
                  Được biết thông tin nào được thu thập
                </li>
                <li className="flex items-start">
                  <FiUser className="mr-2 mt-1 flex-shrink-0" />
                  Được quyết định chia sẻ thông tin với ai
                </li>
                <li className="flex items-start">
                  <FiUser className="mr-2 mt-1 flex-shrink-0" />
                  Yêu cầu sửa đổi thông tin không chính xác
                </li>
                <li className="flex items-start">
                  <FiUser className="mr-2 mt-1 flex-shrink-0" />
                  Yêu cầu xóa thông tin cá nhân
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
              <FiInfo className="mr-3" />
              Các trường hợp chia sẻ thông tin
            </h3>
            <div className="text-purple-700 space-y-3">
              <p><strong>Với sự đồng ý của bệnh nhân:</strong> Chia sẻ với gia đình, bạn bè theo yêu cầu</p>
              <p><strong>Yêu cầu pháp lý:</strong> Theo quyết định của cơ quan có thẩm quyền</p>
              <p><strong>Cấp cứu:</strong> Khi tính mạng bệnh nhân gặp nguy hiểm</p>
              <p><strong>Nghiên cứu y học:</strong> Sau khi ẩn danh hóa thông tin cá nhân</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <FiAlertCircle className="mr-3" />
              Biện pháp bảo mật kỹ thuật
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-red-700">
              <ul className="space-y-2">
                <li>• Mã hóa dữ liệu SSL 256-bit</li>
                <li>• Hệ thống firewall bảo mật</li>
                <li>• Sao lưu dữ liệu định kỳ</li>
              </ul>
              <ul className="space-y-2">
                <li>• Kiểm soát truy cập nghiêm ngặt</li>
                <li>• Đào tạo nhân viên về bảo mật</li>
                <li>• Audit bảo mật định kỳ</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <div className="flex items-start">
              <FiPhone className="text-yellow-600 text-2xl mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">Liên hệ về bảo mật</h3>
                <div className="text-yellow-700 space-y-1">
                  <p><strong>Email:</strong> privacy@benhvien.com</p>
                  <p><strong>Hotline:</strong> 1900-1234 (phím 9)</p>
                  <p><strong>Địa chỉ:</strong> Phòng IT - Tầng 2, Bệnh viện</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  const dichvu = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <PageBanner
        title="Hướng dẫn khách hàng"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Hướng dẫn khách hàng", active: true },
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Sticky on desktop */}
          <div className="lg:w-80 bg-white rounded-xl shadow-md lg:sticky lg:top-8 h-fit">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
              <h2 className="text-xl font-bold text-emerald-800 flex items-center">
                <FiInfo className="mr-2 text-emerald-600" />
                Hướng dẫn khách hàng
              </h2>
              <p className="text-sm text-emerald-600 mt-2">Thông tin hữu ích cho bệnh nhân</p>
            </div>
            
            <nav className="p-4 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center text-sm ${
                    activeSection === section.key
                      ? "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 font-semibold shadow-sm"
                      : "text-gray-700 hover:bg-emerald-50 hover:shadow-sm"
                  }`}
                >
                  {section.icon}
                  <span className="leading-tight">{section.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {sections.find(s => s.key === activeSection)?.name}
                    </h1>
                    <p className="text-gray-600">
                      Thông tin chi tiết và hướng dẫn dành cho bệnh nhân
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={getPrevSection}
                      disabled={activeSection === sections[0].key}
                      className={`p-3 rounded-lg transition-colors ${
                        activeSection === sections[0].key 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-emerald-700 hover:bg-emerald-50 hover:shadow-sm'
                      }`}
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={getNextSection}
                      disabled={activeSection === sections[sections.length - 1].key}
                      className={`p-3 rounded-lg transition-colors ${
                        activeSection === sections[sections.length - 1].key 
                          ? 'text-gray-400 cursor-not-allowed' 
                          : 'text-emerald-700 hover:bg-emerald-50 hover:shadow-sm'
                      }`}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  {contents[activeSection] || (
                    <div className="text-center py-16">
                      <div className="text-gray-400 mb-6 text-lg">Nội dung đang được cập nhật</div>
                      <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md">
                        Liên hệ để biết thêm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}