import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, User, Plus, Check } from "lucide-react";

const ServiceBooking = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({});
  const [healthCard, setHealthCard] = useState("");
  const [isCardValid, setIsCardValid] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSession, setSelectedSession] = useState(""); // "morning" or "afternoon"
  const [qrCode, setQrCode] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isVerifying, setIsVerifying] = useState(false);

  // Sample user data
  const sampleUsers = [
    {
      name: "DƯƠNG VĂN TÚ",
      dob: "23/05/2005",
      phone: "0393264758",
      isAccountHolder: true
    }
  ];

  const nextStep = () => {
    if (step < 4) {
      // Mark current step as completed
      if (!completedSteps.includes(step)) {
        setCompletedSteps([...completedSteps, step]);
      }
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const verifyBHYT = async (cardNumber) => {
    if (!cardNumber || cardNumber.length < 15) {
      alert("Vui lòng nhập đầy đủ 15 ký tự của mã thẻ BHYT");
      return;
    }

    setIsVerifying(true);
    setIsCardValid(false);

    try {
      // Simulate API call to BHYT system
      console.log("Đang gọi API BHYT để xác thực thẻ:", cardNumber);
      
      // Simulate loading time
      setTimeout(() => {
        // Mock API response - in real implementation, this would be actual BHYT API
        const mockBHYTResponse = {
          isValid: true,
          cardNumber: cardNumber,
          holderName: "DƯƠNG VĂN TÚ",
          facilityCode: "Bệnh viện Đa khoa",
          expiryDate: "31/12/2024",
          status: "active"
        };

        if (mockBHYTResponse.isValid) {
          setIsCardValid(true);
          console.log("Xác thực BHYT thành công:", mockBHYTResponse);
        } else {
          setIsCardValid(false);
          alert("Thẻ BHYT không hợp lệ hoặc đã hết hạn");
        }
        setIsVerifying(false);
      }, 1500);
    } catch (error) {
      console.error("Lỗi khi gọi API BHYT:", error);
      setIsCardValid(false);
      setIsVerifying(false);
      alert("Có lỗi xảy ra khi kiểm tra thẻ BHYT. Vui lòng thử lại.");
    }
  };

  const handleUserSelection = (userData) => {
    setUser(userData);
    nextStep();
  };

  const handleBHYTInput = (e) => {
    setHealthCard(e.target.value);
  };

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
  };

  const handleTimeSelection = (time, session) => {
    setSelectedTime(time);
    setSelectedSession(session);
  };

  const confirmBooking = () => {
    // Mark step 3 as completed and go to step 4
    if (!completedSteps.includes(3)) {
      setCompletedSteps([...completedSteps, 3]);
    }
    nextStep();
  };

  const generateQRCode = () => {
    setQrCode("GeneratedQRCode");
    // Mark final step as completed
    if (!completedSteps.includes(4)) {
      setCompletedSteps([...completedSteps, 4]);
    }
  };

  // Step indicator component
  const StepIndicator = () => {
    const steps = [
      { number: 1, title: "Chọn tài khoản" },
      { number: 2, title: "Xác thực BHYT" },
      { number: 3, title: "Chọn khoa & thời gian" },
      { number: 4, title: "Xác nhận đặt lịch" }
    ];

    const handleStepClick = (stepNumber) => {
      if (stepNumber <= step || completedSteps.includes(stepNumber)) {
        setStep(stepNumber);
      }
    };

    return (
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((stepItem, index) => (
            <React.Fragment key={stepItem.number}>
              <div 
                className={`flex flex-col items-center cursor-pointer group ${
                  stepItem.number <= step || completedSteps.includes(stepItem.number) 
                    ? 'cursor-pointer' : 'cursor-not-allowed'
                }`}
                onClick={() => handleStepClick(stepItem.number)}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 text-sm font-bold transition-all duration-200 ${
                  completedSteps.includes(stepItem.number)
                    ? 'bg-green-500 text-white border-green-500 shadow-lg' 
                    : step >= stepItem.number 
                    ? 'bg-blue-500 text-white border-blue-500 shadow-lg' 
                    : step === stepItem.number - 1
                    ? 'bg-gray-100 text-gray-500 border-gray-300 group-hover:bg-gray-200'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {completedSteps.includes(stepItem.number) ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    stepItem.number
                  )}
                </div>
                <span className={`text-xs mt-2 font-medium transition-colors duration-200 text-center ${
                  completedSteps.includes(stepItem.number)
                    ? 'text-green-600' 
                    : step >= stepItem.number 
                    ? 'text-blue-600' 
                    : step === stepItem.number - 1
                    ? 'text-gray-400 group-hover:text-gray-500'
                    : 'text-gray-400'
                }`}>
                  {stepItem.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-4 mt-[-20px] transition-colors duration-200 ${
                  completedSteps.includes(stepItem.number) ? 'bg-green-500' : 
                  step > stepItem.number ? 'bg-blue-500' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const morningTimes = ["08:00", "09:00", "10:00", "11:00"];
  const afternoonTimes = ["14:00", "15:00", "16:00", "17:00"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
    
      

      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <StepIndicator />

            {/* Navigation Footer */}
        <div className="flex justify-between mt-8">
          {step > 1 && !qrCode && (
            <button 
              onClick={previousStep}
              className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Quay lại
            </button>
          )}
          
          {step === 2 && isCardValid && (
            <button 
              onClick={nextStep}
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors ml-auto"
            >
              Tiếp theo
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>

        {/* Step 1: User Selection */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
              Chọn người tới khám
            </h2>
            
            <div className="space-y-4">
              {sampleUsers.map((userData, index) => (
                <div 
                  key={index}
                  className="flex items-center p-6 border-2 border-gray-200 rounded-xl hover:border-green-300 transition-colors cursor-pointer"
                  onClick={() => handleUserSelection(userData)}
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                    <User className="w-8 h-8 text-gray-500" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{userData.name}</h3>
                    <p className="text-gray-600">Ngày sinh: {userData.dob}</p>
                    <p className="text-gray-600">SĐT: {userData.phone}</p>
                    {userData.isAccountHolder && (
                      <span className="inline-block bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full mt-2">
                        Chủ tài khoản
                      </span>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                      Chỉnh sửa
                    </button>
                    <ChevronRight className="w-5 h-5 text-gray-400 mt-2 ml-auto" />
                  </div>
                </div>
              ))}
              
              <button className="w-full flex items-center justify-center p-6 border-2 border-dashed border-green-300 rounded-xl text-green-500 hover:bg-green-50 transition-colors">
                <Plus className="w-5 h-5 mr-2" />
                Thêm thành viên mới
              </button>
            </div>
          </div>
        )}

        {/* Step 2: BHYT Verification */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
              Xác thực thông tin BHYT
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Cột trái: Thông tin hành chính */}
              <div className="flex-1 bg-blue-50 rounded-lg p-6 min-h-[500px]">
                <h3 className="text-lg font-semibold text-blue-600 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Thông tin hành chính
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ và tên"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Số CCCD/CMND <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="Nhập số CCCD/CMND (12 số)"
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                        maxLength="12"
                      />
                      <button className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap">
                         Quét QR
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Hoặc quét mã QR trên mặt sau CCCD
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Ngày sinh <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      placeholder="Nhập số điện thoại"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Địa chỉ
                    </label>
                    <textarea
                      placeholder="Nhập địa chỉ hiện tại"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              {/* Cột phải: Thông tin bảo hiểm y tế */}
              <div className="flex-1 bg-green-50 rounded-lg p-6 min-h-[500px]">
                <h3 className="text-lg font-semibold text-green-600 mb-6 flex items-center">
                   Thông tin bảo hiểm y tế
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Số thẻ BHYT <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập mã thẻ BHYT (15 ký tự)"
                      value={healthCard}
                      onChange={handleBHYTInput}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      maxLength="15"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Ví dụ: HS4010012345678
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-2 border-dashed border-gray-300 min-h-[200px]">
                    <p className="text-gray-600 text-center mb-3 font-medium">
                      {isCardValid ? 'Thông tin thẻ BHYT' : 'Thông tin thẻ BHYT sẽ hiển thị sau khi xác thực'}
                    </p>
                    {isCardValid ? (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Mã thẻ:</span>
                          <span className="font-semibold text-gray-800">{healthCard}</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Họ tên:</span>
                          <span className="font-semibold text-gray-800">DƯƠNG VĂN TÚ</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Nơi KCB:</span>
                          <span className="font-semibold text-gray-800">Bệnh viện Đa khoa</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Hạn sử dụng:</span>
                          <span className="font-semibold text-green-600">31/12/2024</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Tình trạng:</span>
                          <span className="font-semibold text-green-600">✅ Hợp lệ</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 font-medium">Quyền lợi:</span>
                          <span className="font-semibold text-blue-600">80% chi phí</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                          
                        </div>
                        <p className="text-gray-500 text-sm">
                          Nhập số thẻ BHYT và nhấn kiểm tra
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => verifyBHYT(healthCard)}
                    disabled={!healthCard || isVerifying}
                    className={`w-full py-3 rounded-lg transition-colors font-semibold ${
                      isVerifying
                        ? 'bg-yellow-500 text-white cursor-wait'
                        : healthCard 
                        ? isCardValid 
                          ? 'bg-green-600 text-white hover:bg-green-700' 
                          : 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isVerifying ? '🔄 Đang kiểm tra...' : isCardValid ? '✅ Đã xác thực' : 'Kiểm tra thẻ BHYT'}
                  </button>

                  {/* Ghi chú quan trọng */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Lưu ý:</strong> Vui lòng mang theo thẻ BHYT gốc khi đến khám
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thông báo xác thực thành công */}
            {isCardValid && (
              <div className="mt-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-center">
                <p className="font-semibold">✅ Xác thực thành công!</p>
                <p className="text-sm mt-1">Thông tin BHYT hợp lệ. Có thể tiếp tục đặt lịch khám.</p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Department and Time Selection */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
              Chọn khoa khám bệnh và thời gian
            </h2>
            
            {/* Department Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Chọn khoa khám:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Khoa Nội", "Khoa Ngoại", "Khoa Sản", "Khoa Nhi", "Khoa Mắt", "Khoa Tai Mũi Họng"].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => handleDepartmentSelection(dept)}
                    className={`p-4 border-2 rounded-xl transition-colors text-left ${
                      selectedDepartment === dept 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <h4 className="font-semibold">{dept}</h4>
                    <p className="text-sm text-gray-600 mt-1">Khám và điều trị chuyên khoa</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDepartment && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Chọn thời gian khám:</h3>
                
                {/* Morning Session */}
                <div className="mb-6">
                  <h4 className="text-md font-medium mb-3 text-blue-600"> Buổi sáng</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {morningTimes.map((time) => (
                      <button
                        key={`morning-${time}`}
                        onClick={() => handleTimeSelection(time, "morning")}
                        className={`p-3 border-2 rounded-lg transition-colors text-center ${
                          selectedTime === time && selectedSession === "morning"
                            ? 'border-green-500 bg-green-50 text-green-700' 
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                        }`}
                      >
                        <div className="font-semibold">{time}</div>
                        <div className="text-sm text-gray-600">Còn trống</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Session */}
                <div className="mb-6">
                  <h4 className="text-md font-medium mb-3 text-orange-600"> Buổi chiều</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {afternoonTimes.map((time) => (
                      <button
                        key={`afternoon-${time}`}
                        onClick={() => handleTimeSelection(time, "afternoon")}
                        className={`p-3 border-2 rounded-lg transition-colors text-center ${
                          selectedTime === time && selectedSession === "afternoon"
                            ? 'border-green-500 bg-green-50 text-green-700' 
                            : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                        }`}
                      >
                        <div className="font-semibold">{time}</div>
                        <div className="text-sm text-gray-600">Còn trống</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            {selectedDepartment && selectedTime && (
              <div className="text-center">
                <button 
                  onClick={confirmBooking}
                  className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  Xác nhận lựa chọn
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Booking Confirmation */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center text-green-600 mb-8">
              Xác nhận đặt lịch khám
            </h2>
            
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Thông tin đặt lịch</h3>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Người khám:</span>
                    <span className="font-semibold">{user.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ngày sinh:</span>
                    <span className="font-semibold">{user.dob}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Số điện thoại:</span>
                    <span className="font-semibold">{user.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thẻ BHYT:</span>
                    <span className="font-semibold">{healthCard}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Khoa khám:</span>
                    <span className="font-semibold">{selectedDepartment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Thời gian:</span>
                    <span className="font-semibold">
                      {selectedTime} ({selectedSession === "morning" ? "Sáng" : "Chiều"})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ngày khám:</span>
                    <span className="font-semibold">Hôm nay</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={generateQRCode}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold mb-4"
              >
                Xác nhận đặt lịch
              </button>
              
              {qrCode && (
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-200 mx-auto rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xs text-gray-600">QR Code</span>
                  </div>
                  <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                    <p className="font-semibold">✅ Đặt lịch thành công!</p>
                    <p className="text-sm mt-1">Vui lòng mang mã QR này đến bệnh viện</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

    
      </div>
    </div>
  );
};

export default ServiceBooking;