import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SpecialtyDoctorSelection from './SpecialtyDoctorSelection';
import DateTimeSelection from './DateTimeSelection';
import PatientInfoForm from './PatientInfoForm';

const MedicalAppointmentBooking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [dateTimeInfo, setDateTimeInfo] = useState(null);

const handleSpecialtyDoctorComplete = (info) => {
  setSelectedInfo(info);
  console.log(info)
  setCurrentStep(2);
};


  const handleDateTimeComplete = (info) => {
    setDateTimeInfo(info);
    setCurrentStep(3);
  };

  const handlePatientInfoComplete = (info) => {


    setCurrentStep(1);
    setSelectedInfo(null);
    setDateTimeInfo(null);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      {['Thông tin bệnh nhân', 'Chọn chuyên khoa và bác sĩ', 'Chọn thời gian'].map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
            index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {index + 1}
          </div>
          <span className={`ml-2 text-sm ${index <= currentStep ? 'text-blue-600' : 'text-gray-500'}`}>
            {step}
          </span>
          {index < 2 && <ChevronRight className="w-4 h-4 mx-4 text-gray-400" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {renderStepIndicator()}

        <div className="bg-white rounded-lg shadow-lg p-8">
          {currentStep === 1 && (
            <SpecialtyDoctorSelection 
              onComplete={handleSpecialtyDoctorComplete}
              onBack={() => setCurrentStep(0)}
            />
          )}

          {currentStep === 2 && (
            <DateTimeSelection 
              onComplete={handleDateTimeComplete}
              onBack={() => setCurrentStep(0)}
              selectedInfo={selectedInfo}
            />
          )}

          {currentStep === 0 && (
            <PatientInfoForm 
              onComplete={handlePatientInfoComplete}
              onBack={() => setCurrentStep(1)}
              selectedInfo={selectedInfo}
              dateTimeInfo={dateTimeInfo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalAppointmentBooking;
