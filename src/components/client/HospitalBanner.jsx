import React from "react";

const HospitalBanner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-green-200 to-green-400 text-white p-8 shadow-lg">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold">
              Bệnh Viện Đa Khoa <br /> Hồng Ngọc - Phúc Trường Minh
            </h1>
            <p className="text-lg">
              Bệnh viện Đa khoa Hồng Ngọc – Phúc Trường Minh sẽ là bệnh viện
              thông minh với tỷ lệ phủ xanh lên đến 45%. Đây là bệnh viện đầu tiên
              tại Việt Nam.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/mnt/data/Screenshot 2025-04-21 100425.png"
              alt="Bệnh viện Hồng Ngọc - Phúc Trường Minh"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      );
};

export default HospitalBanner;