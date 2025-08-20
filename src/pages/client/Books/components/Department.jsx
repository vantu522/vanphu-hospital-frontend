import React from "react";

const DepartmentTimeStep = ({ 
  selectedDepartment, 
  handleDepartmentSelection, 
  selectedTime, 
  selectedSession, 
  handleTimeSelection, 
  confirmBooking 
}) => {
  const morningTimes = ["08:00", "09:00", "10:00", "11:00"];
  const afternoonTimes = ["14:00", "15:00", "16:00", "17:00"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
        
          
          {/* Department Selection */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-4"></div>
              <h3 className="text-xl font-bold text-gray-800">Chọn khoa khám</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Khoa Nội", icon: "❤️", desc: "Tim mạch, tiêu hóa, hô hấp" },
                { name: "Khoa Ngoại", icon: "🔬", desc: "Phẫu thuật và điều trị ngoại khoa" },
                { name: "Khoa Sản", icon: "👶", desc: "Chăm sóc mẹ và bé" },
                { name: "Khoa Nhi", icon: "🧸", desc: "Chuyên khoa trẻ em" },
                { name: "Khoa Mắt", icon: "👁️", desc: "Khám và điều trị mắt" },
                { name: "Khoa Tai Mũi Họng", icon: "👂", desc: "Chuyên khoa TMH" }
              ].map((dept) => (
                <button
                  key={dept.name}
                  onClick={() => handleDepartmentSelection(dept.name)}
                  className={`group relative p-6 border-2 rounded-2xl transition-all duration-300 text-left overflow-hidden ${
                    selectedDepartment === dept.name 
                      ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl scale-105 transform' 
                      : 'border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-white hover:shadow-lg hover:scale-102 hover:transform'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{dept.icon}</span>
                      <h4 className={`font-bold text-lg ${
                        selectedDepartment === dept.name ? 'text-green-700' : 'text-gray-800'
                      }`}>{dept.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{dept.desc}</p>
                  </div>
                  
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-10 translate-x-10 transition-all duration-300 ${
                    selectedDepartment === dept.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}></div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDepartment && (
            <div className="mb-8 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-600 rounded-full mr-4"></div>
                <h3 className="text-xl font-bold text-gray-800">Chọn thời gian khám</h3>
              </div>
              
              {/* Morning Session */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl mr-3 shadow-md">
                    <span className="text-white font-bold">🌅</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700">Buổi sáng</h4>
                  <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    8 slot còn trống
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {morningTimes.map((time) => (
                    <button
                      key={`morning-${time}`}
                      onClick={() => handleTimeSelection(time, "morning")}
                      className={`group relative p-4 border-2 rounded-xl transition-all duration-300 text-center overflow-hidden ${
                        selectedTime === time && selectedSession === "morning"
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg scale-105 transform' 
                          : 'border-gray-200 hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-md hover:scale-102 hover:transform'
                      }`}
                    >
                      <div className="relative z-10">
                        <div className={`font-bold text-lg mb-1 ${
                          selectedTime === time && selectedSession === "morning" ? 'text-blue-700' : 'text-gray-800'
                        }`}>{time}</div>
                        <div className="flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm text-gray-600 font-medium">Còn trống</span>
                        </div>
                      </div>
                      
                      {/* Background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl transition-all duration-300 ${
                        selectedTime === time && selectedSession === "morning" ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
                      }`}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Afternoon Session */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mr-3 shadow-md">
                    <span className="text-white font-bold">🌇</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700">Buổi chiều</h4>
                  <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    6 slot còn trống
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {afternoonTimes.map((time) => (
                    <button
                      key={`afternoon-${time}`}
                      onClick={() => handleTimeSelection(time, "afternoon")}
                      className={`group relative p-4 border-2 rounded-xl transition-all duration-300 text-center overflow-hidden ${
                        selectedTime === time && selectedSession === "afternoon"
                          ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg scale-105 transform' 
                          : 'border-gray-200 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white hover:shadow-md hover:scale-102 hover:transform'
                      }`}
                    >
                      <div className="relative z-10">
                        <div className={`font-bold text-lg mb-1 ${
                          selectedTime === time && selectedSession === "afternoon" ? 'text-orange-700' : 'text-gray-800'
                        }`}>{time}</div>
                        <div className="flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-sm text-gray-600 font-medium">Còn trống</span>
                        </div>
                      </div>
                      
                      {/* Background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl transition-all duration-300 ${
                        selectedTime === time && selectedSession === "afternoon" ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
                      }`}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Confirm Button */}
          {selectedDepartment && selectedTime && (
            <div className="text-center animate-in slide-in-from-bottom-4 duration-700">
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Thông tin đặt lịch</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-600">Khoa:</span>
                    <span className="font-semibold text-green-600 ml-1">{selectedDepartment}</span>
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-600">Thời gian:</span>
                    <span className="font-semibold text-blue-600 ml-1">{selectedTime}</span>
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-600">Buổi:</span>
                    <span className="font-semibold text-orange-600 ml-1">
                      {selectedSession === "morning" ? "Sáng" : "Chiều"}
                    </span>
                  </div>
                </div>
              </div>
              
         
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentTimeStep;