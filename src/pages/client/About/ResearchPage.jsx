import React from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900">
     <PageBanner
        backgroundImage={dichvu}
        title="Danh sách dịch vụ"
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Dịch vụ", active: true },
        ]}
      />

      {/* Nội dung nghiên cứu */}
      <div className="max-w-5xl mx-auto py-12 px-4 grid gap-6">
        {/* Box 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Nghiên cứu về điều trị ung thư
          </h2>
          <p className="text-green-800 mb-4">
            Bệnh viện chúng tôi đang tiến hành nghiên cứu các phương pháp điều trị ung thư hiện đại,
            bao gồm liệu pháp miễn dịch và điều trị nhắm trúng đích nhằm nâng cao hiệu quả và giảm
            tác dụng phụ.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Xem Chi Tiết
          </button>
        </div>

        {/* Box 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Công nghệ sinh học trong y học
          </h2>
          <p className="text-green-800 mb-4">
            Ứng dụng công nghệ sinh học để phát triển thuốc mới và chẩn đoán sớm nhiều loại bệnh lý
            là một trong những định hướng nghiên cứu chủ lực của bệnh viện.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Xem Chi Tiết
          </button>
        </div>

        {/* Box 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Hợp tác nghiên cứu quốc tế
          </h2>
          <p className="text-green-800 mb-4">
            Bệnh viện đã và đang hợp tác với các trung tâm nghiên cứu hàng đầu trên thế giới để thực
            hiện các dự án nghiên cứu y học tiên tiến.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Xem Chi Tiết
          </button>
        </div>
      </div>
    </div>
  );
}
