import React from "react";

const ClinicStats = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-10 md:py-16 font-sans">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            {/* Stat 1 - Highlighted */}
            <div className="flex-1 text-center p-6 md:p-8 rounded-xl bg-emerald-500 text-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">1200+</div>
              <div className="text-sm md:text-xl font-medium">LƯỢT THĂM KHÁM MỖI NGÀY</div>
            </div>
            
            {/* Stat 2 */}
            <div className="flex-1 text-center p-6 md:p-8 rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-gray-800">250</div>
              <div className="text-sm md:text-xl font-medium text-gray-700">CHUYÊN GIA GIÀU KINH NGHIỆM</div>
            </div>
    
            {/* Stat 3 */}
            <div className="flex-1 text-center p-6 md:p-8 rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-gray-800">20</div>
              <div className="text-sm md:text-xl font-medium text-gray-700">NĂM KINH NGHIỆM</div>
            </div>
            
            {/* Stat 4 */}
            <div className="flex-1 text-center p-6 md:p-8 rounded-xl bg-gray-50 shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-gray-800">07</div>
              <div className="text-sm md:text-xl font-medium text-gray-700">CƠ SỞ Y TẾ TẠI HÀ NỘI</div>
            </div>
          </div>
        </div>
      );
};

export default ClinicStats;