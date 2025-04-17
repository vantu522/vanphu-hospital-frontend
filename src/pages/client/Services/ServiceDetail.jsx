import React from "react";
import a2 from "../../../assets/images/a2.png";
import a1 from "../../../assets/images/a1.jpg";
import a3 from "../../../assets/images/a3.jpg";
import Button from "../../../components/client/ui/button";




const ServiceDetail = () => {
    return (
        <div className="bg-[#f8f8f8] px-8 py-6">
            {/* Breadcrumb */}
            <nav>
                <ol className="flex gap-2 text-sm text-gray-500 mb-4">
                    <li><a href="/">Trang chủ</a></li>
                    <span>›</span>
                    <li><a href="#">Dịch vụ</a></li>
                    <span>›</span>
                    <li><a href="#">Khoa Da Liễu</a></li>
                    <span>›</span>
                    <li className="text-black">Chi tiết dịch vụ</li>
                </ol>
            </nav>

            {/* Main Content */}
            <div className="flex gap-6">
                {/* Left Content */}
                <div className="w-3/4 bg-white p-6 rounded shadow">
                    <img 
                        src={a1}
                        alt="ACNE MEDIC" 
                        className="rounded mb-4 max-h-[500px] w-full object-cover" 
                    />
                    {/* Thumbnail preview - optional */}
                    <div className="flex gap-2 mt-4">
                        <img 
                            src={a2}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                       <img 
                            src={a3}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                        <img 
                            src={a2}
                            alt="thumb" 
                            className="w-1/3 h-auto border border-red-500" 
                        />
                    </div>
                    
                </div>

                {/* Right Sidebar */}
                <div className="w-1/4 bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-semibold text-green-700 mb-4">Điều trị mụn</h2>
                  <Button className="px-25 py-2 border border-emerald-700 hover:bg-white   "
                    variant="emerald"
                  >
                    Đặt lịch
                  </Button>
                    <div className="text-sm text-gray-700 mt-5">
                        <p className="mb-2 font-medium">Danh sách chi nhánh bệnh viện</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Bệnh viện Đa khoa Hồng Ngọc – Yên Ninh</li>
                            <li>Bệnh viện Đa khoa Hồng Ngọc – Phúc Trường Minh</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
