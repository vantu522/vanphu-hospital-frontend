import React from "react";



const PageBanner = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <div className="relative">
      <img
        src={backgroundImage}
        alt={title}
        className="w-full object-contain"
      />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center px-4 md:px-20 text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            {title}
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-2 mt-3 text-gray-600 text-sm">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                ) : (
                  <span className={item.active ? "text-green-600 font-medium" : ""}>
                    {item.label}
                  </span>
                )}
                {index < breadcrumbs.length - 1 && <span className="text-xl">›</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
