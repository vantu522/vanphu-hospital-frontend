import React, { useState } from "react";
import StepIndicator from "../components/StepIndicator";
import UserSelection from "../components/UserSelection";
import BHYTVerification from "../components/BHYTVerification";
import BookingConfirmation from "../components/BookingConfirm";
import DepartmentTimeStep from "../components/Department";
import Confirm from "../components/Confirm";
import KioskInterface from "./components/KioskInterface";
import DepartmentSelector from "../components/Department";
import TimeSelector from "../components/TimeSelection";

const BHYT = () => {
  const [step, setStep] = useState(1);
  const [healthCard, setHealthCard] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSession, setSelectedSession] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const sampleUsers = [
    { name: "DƯƠNG VĂN TÚ", dob: "23/05/2005", phone: "0393264758", isAccountHolder: true }
  ];

  const steps = [
    { number: 1, title: "Xác thực thông tin" },
    { number: 2, title: "Chọn phòng khám" },
    { number: 3, title: "Chọn thời gian khám" },
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
    setTimeout(()=>{
      if(!completedSteps.includes(2)){
        setCompletedSteps([...completedSteps,2]);

      }
      setStep(3);
    },500)
  };
  
  const handleTimeSelection = (time, session) => { 
    setSelectedTime(time); 
    setSelectedSession(session); 

    setTimeout(()=>{
      if(!completedSteps.includes(3)){
        setCompletedSteps([...completedSteps,3]);
      }
      setStep(4)
    },500)
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
  const handleConfirmBooking =()=>{
    setIsSuccess(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto py-6 md:py-10 px-4">
        
        {/* Step Indicator */}
        <StepIndicator 
          steps={steps} 
          currentStep={step} 
          completedSteps={completedSteps} 
          onStepClick={handleStepClick}
          onNext={nextStep}
          onPrevious={previousStep}
          onBackToBooking={backToBooking}
        />

        {/* Navigation Buttons Above */}
        <div className="flex justify-between mb-6">
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
              Xác nhận
            </button>
          )}
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {step === 1 && (
            <KioskInterface/>
          )}
          
          {/* Step 2: BHYT Verification */}
          {step === 2 && (
          <DepartmentSelector
            selectedDepartment={selectedDepartment}
            handleDepartmentSelection={handleDepartmentSelection}
          />
          )}
          
          {/* Step 3: Department & Time Selection */}
          {step === 3 && (
            <TimeSelector
            selectedTime={selectedTime}
            handleTimeSelection={handleTimeSelection}
            selectedSession={selectedSession}
            />
          )}
          
          {step === 4 && (
            <>
              <Confirm />
              {!isSuccess ? (
                <button
                  onClick={handleConfirmBooking}
                  className="mt-6 w-full px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Xác nhận
                </button>
              ) : (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
                    <span className="text-green-700 text-lg font-bold">✔</span>
                    <span className="text-green-700 text-base font-medium">
                      Đặt lịch thành công!
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default BHYT;
