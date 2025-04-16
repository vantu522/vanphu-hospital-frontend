import React, { useState } from "react";
import dichvu from "../../assets/images/dichvu.png";
import hi from '../../assets/images/hi.png';
import { HiSearch } from 'react-icons/hi';

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const categories = ["Tất cả", "Khoa răng hàm mặt", "Khoa tim mạch", "Khoa thần kinh", "Khoa nhi"];

  return (
    <div className="relative">
      {/* ảnh bg */}
      <div className="relative">
        <img src={dichvu} alt="Các bác sĩ" className="w-full object-contain" />
        <div className="absolute inset-0 flex items-center px-20">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Chuyên khoa</h1>
            <div className="flex items-center space-x-2 mt-3 text-gray-600 text-sm">
              <a href="/" className="hover:underline">Trang chủ</a>
              <span>›</span>
              <span className="text-green-600 font-medium">Chuyên khoa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung content */}
      <div className="p-20">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-60">
            <form className="p-2 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded pl-10 pr-4 py-2 text-sm"
                  placeholder="Tìm kiếm"
                />
                <HiSearch className="absolute top-2.5 left-2.5 text-gray-500" size={20} />
              </div>

              <div className="flex flex-col gap-2">
                {categories.map((item, i) => {
                  const isActive = selectedCategory === item;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedCategory(item)}
                      className={`flex justify-between items-center px-3 py-2 border-1 border-gray-300 rounded text-sm transition 
                        ${isActive ? "bg-emerald-700 text-white" : "hover:bg-gray-100 text-gray-800"}`}
                    >
                      <span className="font-medium">{item}</span>
                      <div className={`px-2 py-1 rounded-full text-xs ${isActive ? "bg-white text-black" : "bg-gray-200"}`}>
                        9
                      </div>
                    </button>
                  );
                })}
              </div>
            </form>
          </div>

          {/* Grid dịch vụ */}
          <div className="w-full grid grid-cols-3 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="border border-gray-200 rounded hover:border-black transition">
                <a href="#">
                  <div className="overflow-hidden rounded-t">
                    <img
                      src={hi}
                      alt=""
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="font-semibold mb-2 text-base">
                      Tiêm Cồn Diệt Hạch Gasser - Điều Trị Đau Dây TK V
                    </h2>
                    <p className="text-sm text-gray-600 mt-5">Mô tả nhỏ</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
