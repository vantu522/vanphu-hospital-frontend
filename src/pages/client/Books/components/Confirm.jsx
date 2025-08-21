import React, { useState } from 'react';
import { Check, X, Clock, User, Calendar, MapPin } from 'lucide-react';

export default function Confirm() {
  const [activeTab, setActiveTab] = useState('service');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      {/* Header */}

      {/* Main Content */}
      <div className="flex min-h-[500px]">
        {/* Left Panel - Appointment Details */}
        <div className="flex-1 p-6 bg-white m-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Thông tin đặt lịch</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Dịch vụ:</label>
                <div className="text-blue-600 font-medium">Khám bệnh</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Thời gian:</label>
                <div className="text-blue-600 font-medium">08:50 - 2025-08-18</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Phòng khám:</label>
                <div className="text-blue-600 font-medium">Khám Tai Mũi Họng - Phòng 22</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">BN (mã):</label>
                <div className="text-blue-600 font-medium">DƯƠNG VĂN TÚ (.)</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">CCCD:</label>
                <div className="font-medium">033205000138</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ngày sinh:</label>
                <div className="font-medium">23/05/2005</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">GT-CC-CN:</label>
                <div className="font-medium">Nam - . cm - . kg</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">BHYT:</label>
                <div className="font-medium">SV40133213391193</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Hạn BHYT:</label>
                <div className="font-medium">31/12/2025</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Địa chỉ:</label>
                <div className="font-medium">Đội 2, Thôn 1, Phường Hồng Châu, Tỉnh Hưng Yên</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Patient Info */}
        <div className="w-80 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 m-4 rounded-lg shadow-lg relative">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Thông tin bệnh nhân</h3>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <div className="font-medium text-gray-800">DƯƠNG VĂN TÚ</div>
                <div className="text-sm text-gray-500">Nam, 20 tuổi</div>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span>Sinh: 23/05/2005</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>Hưng Yên</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gray-400" />
                <span>Khám lúc 08:50</span>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-2 text-gray-800">Lịch sử khám</h4>
            <div className="text-sm text-gray-600">
              <p>• Khám định kỳ - 15/07/2025</p>
              <p>• Khám tai mũi họng - 10/06/2025</p>
              <p>• Tổng quát - 05/05/2025</p>
            </div>
          </div>

          {/* Bottom Action - placed inside the Right Panel */}
          <div className="absolute bottom-6 right-10">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg text-lg font-medium transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              XÁC NHẬN THÔNG TIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
