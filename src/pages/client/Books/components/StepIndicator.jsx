import React from "react";
import { Check } from "lucide-react";

const StepIndicator = ({ steps, currentStep, completedSteps, onStepClick }) => {
  const getStepStatus = (stepNumber) => {
    if (completedSteps.includes(stepNumber)) return 'completed';
    if (stepNumber === currentStep) return 'current';
    if (stepNumber < currentStep) return 'accessible';
    return 'upcoming';
  };

  const getStepClasses = (status) => {
    const baseClasses = "flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 text-xs md:text-sm font-bold transition-all duration-300";
    
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-500 text-white border-green-500 shadow-md`;
      case 'current':
        return `${baseClasses} bg-blue-500 text-white border-blue-500 shadow-md scale-110`;
      case 'accessible':
        return `${baseClasses} bg-white text-blue-500 border-blue-300 hover:border-blue-500 cursor-pointer`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-400 border-gray-200`;
    }
  };

  const getTextClasses = (status) => {
    const baseClasses = "text-xs font-medium transition-colors duration-300 text-center";
    
    switch (status) {
      case 'completed':
        return `${baseClasses} text-green-600`;
      case 'current':
        return `${baseClasses} text-blue-600 font-semibold`;
      case 'accessible':
        return `${baseClasses} text-gray-600 hover:text-blue-600`;
      default:
        return `${baseClasses} text-gray-400`;
    }
  };

  const getConnectorClasses = (stepNumber) => {
    const baseClasses = "h-0.5 transition-colors duration-300";
    if (completedSteps.includes(stepNumber) || stepNumber < currentStep) {
      return `${baseClasses} bg-green-400`;
    }
    return `${baseClasses} bg-gray-200`;
  };

  return (
    <div className="mb-6 md:mb-8">
      {/* Mobile Layout - Horizontal scroll with progress bar */}
      <div className="md:hidden">
        {/* Progress bar */}
        <div className="relative mb-4">
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
          <div className="absolute -top-2 right-0 text-xs text-gray-500 font-medium">
            {currentStep}/{steps.length}
          </div>
        </div>
        
        {/* Current step info */}
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={getStepClasses(getStepStatus(currentStep))}>
                {completedSteps.includes(currentStep) ? (
                  <Check className="w-4 h-4" />
                ) : (
                  currentStep
                )}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {steps.find(s => s.number === currentStep)?.title}
                </div>
                <div className="text-xs text-gray-500">
                  Bước {currentStep} / {steps.length}
                </div>
              </div>
            </div>
            
            {/* Mini steps indicator */}
            <div className="flex space-x-1">
              {steps.map((stepItem) => (
                <div
                  key={stepItem.number}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    completedSteps.includes(stepItem.number)
                      ? 'bg-green-400'
                      : stepItem.number === currentStep
                      ? 'bg-blue-400'
                      : stepItem.number < currentStep
                      ? 'bg-blue-200'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Traditional horizontal stepper */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center max-w-4xl mx-auto">
          {steps.map((stepItem, index) => {
            const status = getStepStatus(stepItem.number);
            const isClickable = status === 'completed' || status === 'current' || status === 'accessible';
            
            return (
              <React.Fragment key={stepItem.number}>
                <div
                  className={`flex flex-col items-center ${
                    isClickable ? 'cursor-pointer group' : 'cursor-not-allowed'
                  }`}
                  onClick={() => isClickable && onStepClick(stepItem.number)}
                >
                  <div className={getStepClasses(status)}>
                    {completedSteps.includes(stepItem.number) ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      stepItem.number
                    )}
                  </div>
                  <span className={`${getTextClasses(status)} mt-2 max-w-24 leading-tight`}>
                    {stepItem.title}
                  </span>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div className={`${getConnectorClasses(stepItem.number)} w-full`} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default StepIndicator;