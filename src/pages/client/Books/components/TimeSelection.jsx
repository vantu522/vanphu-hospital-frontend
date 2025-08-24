import React from "react";

const TimeSelector = ({ 
  selectedDepartment,
  selectedTime, 
  selectedSession, 
  handleTimeSelection 
}) => {
  // Cập nhật các thời gian mỗi 15 phút cho buổi sáng và chiều
  const morningTimes = ["08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00"];
  const afternoonTimes = ["14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15"];

  return (
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-green-600 bg-clip-text text-transparent mb-4">
              Chọn Thời Gian Khám
            </h1>
            
            {selectedDepartment && (
              <div className="mt-6 inline-flex items-center bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-6 py-3 rounded-xl">
                <span className="text-gray-600 mr-2">Khoa đã chọn:</span>
                <span className="font-bold text-green-700">{selectedDepartment}</span>
              </div>
            )}
          </div>

          {/* Time Selection */}
          <div className="mb-8">
            
            {/* Morning Session */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-700">Buổi sáng</h4>
                  <p className="text-sm text-gray-500">08:00 - 11:30</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {morningTimes.map((time) => (
                  <button
                    key={`morning-${time}`}
                    onClick={() => handleTimeSelection(time, "morning")}
                    className={`group relative p-4 border-2 rounded-2xl transition-all duration-300 text-center overflow-hidden ${
                      selectedTime === time && selectedSession === "morning"
                        ? 'border-green-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl scale-105 transform' 
                        : 'border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:shadow-lg hover:scale-102 hover:transform'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className={`font-bold text-xl mb-2 ${
                        selectedTime === time && selectedSession === "morning" ? 'text-green-700' : 'text-gray-800'
                      }`}>{time}</div>
                    </div>
                    
                    {/* Selected indicator */}
                    {selectedTime === time && selectedSession === "morning" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                    
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl transition-all duration-300 ${
                      selectedTime === time && selectedSession === "morning" ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon Session */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-700">Buổi chiều</h4>
                  <p className="text-sm text-gray-500">14:00 - 17:30</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {afternoonTimes.map((time) => (
                  <button
                    key={`afternoon-${time}`}
                    onClick={() => handleTimeSelection(time, "afternoon")}
                    className={`group relative p-4 border-2 rounded-2xl transition-all duration-300 text-center overflow-hidden ${
                      selectedTime === time && selectedSession === "afternoon"
                        ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-xl scale-105 transform' 
                        : 'border-gray-200 hover:border-green-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-white hover:shadow-lg hover:scale-102 hover:transform'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className={`font-bold text-xl mb-2 ${
                        selectedTime === time && selectedSession === "afternoon" ? 'text-green-700' : 'text-gray-800'
                      }`}>{time}</div>
                    </div>
                    
                    {/* Selected indicator */}
                    {selectedTime === time && selectedSession === "afternoon" && (
                      <div className="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    )}
                    
                    {/* Background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl transition-all duration-300 ${
                      selectedTime === time && selectedSession === "afternoon" ? 'opacity-30' : 'opacity-0 group-hover:opacity-20'
                    }`}></div>
                  </button>
                ))}
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default TimeSelector;
