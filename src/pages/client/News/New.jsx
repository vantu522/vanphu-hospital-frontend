import React, { useState,useEffect } from "react";
import PageBanner from "../../../components/client/PageBanner";
import dichvu from "../../../assets/images/dichvu.png";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllNews } from "../../../services/client/news";
import { format } from "date-fns";



export default function News() {
  const [news, setNews] = useState([]);


  useEffect(() =>{
    const fetchNews = async () => {
      try {
        const newsList = await getAllNews(); 
        console.log(newsList)
        setNews(newsList);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  },[])

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
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tin tức & Sự kiện
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, idx) => (
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
                     {item.createdAt ? format(new Date(item.createdAt), 'dd/MM/yyyy - HH:mm') : 'Không rõ thời gian'}

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
