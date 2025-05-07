import React from "react";

const PageBanner = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <div className="relative w-full">
      {/* Container cho hình ảnh và overlay */}
      <div className="relative">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-[180px] md:h-[300px] object-cover"
        />
        
        {/* Overlay nền mờ để text dễ đọc hơn */}
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Container cho nội dung */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center md:text-left">
              {title}
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 sm:gap-2 mt-3 text-gray-600 text-xs sm:text-sm">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {item.href ? (
                    <a href={item.href} className="hover:underline hover:text-green-600 transition-colors duration-200">
                      {item.label}
                    </a>
                  ) : (
                    <span className={item.active ? "text-green-600 font-medium" : ""}>
                      {item.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-sm sm:text-base mx-1">›</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;