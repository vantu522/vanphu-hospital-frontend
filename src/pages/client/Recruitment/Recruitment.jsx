import { useState } from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";

// Sample job listings with recruitment details
const jobListings = [
  {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 9/2024",
    deadline: "09-08-2024",
    details: "Chuyên khoa Cơ Xương Khớp, Bệnh viện Đa khoa Hồng Ngọc cần tuyển bác sĩ cơ - xương - khớp...",
  },
  {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 10/2024",
    deadline: "12-09-2024",
    details: "Bệnh viện Đa khoa Hồng Ngọc cần tuyển bác sĩ chuyên khoa Y tế tháng 10/2024...",
  },
  {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 10/2024",
    deadline: "08-10-2024",
    details: "Tuyển bác sĩ cho khoa Y tế tháng 10/2024 với các yêu cầu đặc biệt...",
  },
  {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Phi y tế tháng 10/2024",
    deadline: "08-10-2024",
    details: "Cần tuyển nhân viên phi y tế cho Bệnh viện Đa khoa Hồng Ngọc...",
  },
  {
    title: "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 01/2025",
    deadline: "09-01-2025",
    details: "Bệnh viện tuyển bác sĩ Y tế tháng 01/2025 cho các vị trí đặc biệt...",
  },
];

const Recruitment = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = jobListings[activeIndex];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đơn đăng ký đã được gửi!");
    // Handle the form submission here (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="relative">
      <PageBanner
        title="Tuyển dụng"
        backgroundImage={dichvu}
        breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Tuyển dụng", active: true }]}
      />

      <section className="py-12 bg-white px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Danh sách tuyển dụng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Job Listings */}
          <div className="space-y-3">
            {jobListings.map((job, idx) => (
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
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm">Hạn nộp hồ sơ: {job.deadline}</p>
                </div>
                <span className="text-xl">&rarr;</span>
              </div>
            ))}
          </div>

          {/* Right Column: Job Details */}
          <div className="bg-white p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">{active.title}</h3>
            <p className="text-sm mb-4">Hạn nộp hồ sơ: <span className="text-red-500">{active.deadline}</span></p>
            <p className="text-gray-700 mb-5">{active.details}</p>

            {/* Application Form */}
            <h4 className="text-2xl font-semibold mb-5">Nộp đơn ứng tuyển</h4>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required
                  />
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Thư xin việc</label>
                  <textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    rows="4"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800"
                  >
                    Nộp đơn
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recruitment;
