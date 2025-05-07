import React from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const newsList = [
  {
    id: "tuyen-dung-khoi-y-te-thang-9-2024",
    title:
      "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng khối Y tế tháng 9/2024",
    description:
      "Bệnh viện Đa khoa Hồng Ngọc thông báo tuyển dụng các vị trí trong khối Y tế cho tháng 9/2024 với các yêu cầu đặc biệt...",
    date: "09-08-2024",
    link: "tin-tuc-chi-tiet",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  // other news items
];

export default function News() {
  return (
    <div className="relative">
      <PageBanner
        title="Tin tức"
        backgroundImage={dichvu}
        breadcrumbs={[
          { label: "Trang chủ", href: "/" },
          { label: "Tin tức", active: true },
        ]}
      />

      {/* News Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tin tức & Sự kiện
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiCalendar className="mr-2" />
                    {news.date}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    <Link to="/chi-tiet-tin-tuc">{news.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {news.description}
                  </p>

                  <a
                    href="/chi-tiet-tin-tuc"
                    className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
                  >
                    Đọc tiếp <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (optional) */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                1
              </button>
              <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                2
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
