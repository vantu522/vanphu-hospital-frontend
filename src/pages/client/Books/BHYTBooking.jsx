import React, { useState } from "react";
import StepIndicator from "./components/StepIndicator";
import UserSelection from "./components/UserSelection";
import BHYTVerification from "./components/BHYTVerification";
import BookingConfirmation from "./components/BookingConfirm";
import DepartmentTimeStep from "./components/Department";

const BHYTBooking = () => {
  const [step, setStep] = useState(1);
  const [healthCard, setHealthCard] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]);

  const sampleUsers = [
    { name: "DƯƠNG VĂN TÚ", dob: "23/05/2005", phone: "0393264758", isAccountHolder: true }
  ];

  const steps = [
    { number: 1, title: "Chọn tài khoản" },
    { number: 2, title: "Xác thực BHYT" },
    { number: 3, title: "Chọn khoa & thời gian" },
    { number: 4, title: "Xác nhận đặt lịch" }
  ];

  // Handlers
  const handleUserSelection = (userData) => { 
    nextStep(); 
  };
  
  const handleBHYTInput = (e) => { 
    setHealthCard(e.target.value); 
  };
  
  const handleDepartmentSelection = (dept) => { 
    setSelectedDepartment(dept); 
  };
  
  const handleTimeSelection = (time, session) => { 
    setSelectedTime(time); 
    setSelectedSession(session); 
  };
  
  const generateQRCode = () => { 
    setQrCode("GeneratedQRCode"); 
  };

  // Navigation functions
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
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const backToBooking = () => {
    // Navigate back to /dat-lich
    window.location.href = '/dat-lich';
  };

  const handleStepClick = (stepNumber) => {
    // Allow navigation to completed steps or current step
    if (stepNumber <= step || completedSteps.includes(stepNumber)) {
      setStep(stepNumber);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-6 md:py-10 px-4">
          
        <StepIndicator 
          steps={steps} 
          currentStep={step} 
          completedSteps={completedSteps} 
          onStepClick={handleStepClick}
          onNext={nextStep}
          onPrevious={previousStep}
          onBackToBooking={backToBooking}
        />

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Step 1: User Selection */}
          {step === 1 && (
            <UserSelection 
              sampleUsers={sampleUsers} 
              onUserSelection={handleUserSelection} 
            />
          )}
          
          {/* Step 2: BHYT Verification */}
          {step === 2 && (
            <BHYTVerification 
              healthCard={healthCard} 
              isCardValid={true} 
              isVerifying={false} 
              handleBHYTInput={handleBHYTInput} 
              verifyBHYT={() => {}}
            />
          )}
          
          {/* Step 3: Department & Time Selection */}
          {step === 3 && (
            <DepartmentTimeStep 
              selectedDepartment={selectedDepartment} 
              selectedTime={selectedTime} 
              selectedSession={selectedSession} 
              handleDepartmentSelection={handleDepartmentSelection} 
              handleTimeSelection={handleTimeSelection}
            />
          )}
          
          {/* Step 4: Booking Confirmation */}
          {step === 4 && (
            <BookingConfirmation 
              qrCode={qrCode} 
              generateQRCode={generateQRCode} 
              bookingInfo={sampleUsers}
            />
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {/* Previous Button */}
            {step > 1 && (
              <button 
                onClick={previousStep} 
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors duration-300"
              >
                Quay lại
              </button>
            )}
            
            {/* Next Button */}
            {step < 4 && (
              <button 
                onClick={nextStep} 
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Tiếp theo
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BHYTBooking;
