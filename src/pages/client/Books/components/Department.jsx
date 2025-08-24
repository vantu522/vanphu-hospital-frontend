import React from "react";

const DepartmentSelector = ({ selectedDepartment, handleDepartmentSelection }) => {
  const departments = [
    { name: "Khám Nội", room: "Phòng 101-105", desc: "Tim mạch, tiêu hóa, hô hấp" },
    { name: "Khám Ngoại", room: "Phòng 201-203", desc: "Phẫu thuật và điều trị ngoại khoa" },
    { name: "Khám Sản", room: "Phòng 301-302", desc: "Chăm sóc mẹ và bé" },
    { name: "Khám Nhi", room: "Phòng 401-404", desc: "Chuyên khoa trẻ em" },
    { name: "Khám Mắt", room: "Phòng 501", desc: "Khám và điều trị mắt" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
    { name: "Khám Tai Mũi Họng", room: "Phòng 502-503", desc: "Chuyên khoa TMH" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br p-4">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Chọn Khoa Khám Bệnh
          </h1>
        </div>

        {/* Department Selection */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
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
                  <div className="mb-4">
                    <h4
                      className={`font-bold text-xl mb-2 ${
                        selectedDepartment === dept.name ? 'text-green-700' : 'text-gray-800'
                      }`}
                    >
                      {dept.name}
                    </h4>
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        selectedDepartment === dept.name
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                      {dept.room}
                    </div>
                  </div>

                  {selectedDepartment === dept.name && (
                    <div className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium">Đã chọn</span>
                    </div>
                  )}
                </div>

                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-12 translate-x-12 transition-all duration-300 ${
                    selectedDepartment === dept.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                ></div>

                {/* Selected indicator */}
                {selectedDepartment === dept.name && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelector;
