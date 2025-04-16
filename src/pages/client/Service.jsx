import React from "react";
import dichvu from "../../assets/images/dichvu.png";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto  relative">
      {/* ảnh bg  */}
      <div className="relative">
        <img src={dichvu} alt="Các bác sĩ" className="w-full object-contain" />
        
        {/* tiêu đề chữ */}
        <div className="absolute inset-0 flex items-center pl-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Chuyên khoa</h1>
            <div className="flex items-center space-x-2 mt-2 text-gray-600">
              <a href="/" className="text-sm hover:underline">
                Trang chủ
              </a>
              <span>›</span>
              <span className="text-green-600 font-medium text-sm">
                Chuyên khoa
              </span>
            </div>
          </div>
        </div>
      </div>

   

      <div className="serviceContent">
        <div className="main">

        </div>
      </div>
    </div>
  );
};

export default Service;
