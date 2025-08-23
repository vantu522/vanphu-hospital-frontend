import React from "react";

const LoadingSpinner = ({ size = "md", text = "Đang tải...", overlay = true }) => {
  // Size variants
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  const spinnerClass = `${sizeClasses[size]} border-gray-300 border-t-green-500 rounded-full animate-spin`;

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/10 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <div className={spinnerClass}></div>
          {text && (
            <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Inline version without overlay
  return (
    <div className="flex flex-col items-center space-y-3 p-4">
      <div className={spinnerClass}></div>
      {text && (
        <p className={`${textSizeClasses[size]} text-gray-600 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;