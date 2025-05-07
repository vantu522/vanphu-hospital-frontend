import React, { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Hội thảo chuyển đổi số 2025",
    date: "2025-05-10",
    description:
      "Tham gia hội thảo về xu hướng chuyển đổi số trong các doanh nghiệp nhỏ và vừa.",
    image: "https://source.unsplash.com/400x200/?conference",
  },
  {
    id: 2,
    title: "Sự kiện ra mắt sản phẩm công nghệ mới",
    date: "2025-05-15",
    description:
      "Giới thiệu sản phẩm công nghệ mới nhất với nhiều cải tiến vượt bậc.",
    image: "https://source.unsplash.com/400x200/?tech",
  },
  {
    id: 3,
    title: "Ngày hội việc làm 2025",
    date: "2025-06-01",
    description:
      "Cơ hội kết nối với hàng trăm doanh nghiệp và nhà tuyển dụng uy tín.",
    image: "https://source.unsplash.com/400x200/?jobfair",
  },
  {
    id: 4,
    title: "Hội nghị công nghệ AI",
    date: "2025-06-10",
    description: "Khám phá những đột phá mới trong lĩnh vực trí tuệ nhân tạo.",
    image: "https://source.unsplash.com/400x200/?ai",
  },
  {
    id: 5,
    title: "Diễn đàn khởi nghiệp trẻ",
    date: "2025-07-01",
    description: "Nơi kết nối những ý tưởng sáng tạo và nhà đầu tư.",
    image: "https://source.unsplash.com/400x200/?startup",
  },
  {
    id: 6,
    title: "Workshop phát triển kỹ năng mềm",
    date: "2025-07-15",
    description:
      "Trang bị kỹ năng mềm cần thiết cho sinh viên và người đi làm.",
    image: "https://source.unsplash.com/400x200/?workshop",
  },
];

const ITEMS_PER_PAGE = 3;

export default function NewsEvents() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of news section
      document.getElementById('news-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="news-section" className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Tin tức & Sự kiện</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentNews.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl shadow-md overflow-hidden bg-white flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2 h-14">{item.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10m-11 5h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {new Date(item.date).toLocaleDateString()}
              </div>
              <p className="text-sm text-gray-700 mb-4 flex-grow line-clamp-3">{item.description}</p>
              <button className="w-full px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors duration-300 mt-auto">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-emerald-500 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "border border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}