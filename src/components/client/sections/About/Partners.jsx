import React from "react";

import parther from "../../../../assets/images/parther/parther1.png";
import parther1 from "../../../../assets/images/parther/parther2.png";
import parther2 from "../../../../assets/images/parther/parther3.png";
import parther3 from "../../../../assets/images/parther/parther4.png";
const Partners = () => {
  const partners = [
    { name: "Partner 1", logo: parther, link: "#" },
    { name: "Partner 2", logo: parther1, link: "#" },
    { name: "Partner 3", logo: parther2, link: "#" },
    { name: "Partner 4", logo: parther3, link: "#" },
    { name: "Partner 4", logo: parther3, link: "#" },
    { name: "Partner 4", logo: parther3, link: "#" },
    { name: "Partner 4", logo: parther3, link: "#" },
    { name: "Partner 4", logo: parther3, link: "#" },
    // Thêm các đối tác khác vào đây
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Các đối tác của chúng tôi
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <a href={partner.link} className="block max-w-xs mx-auto">
                <div style={{ maxWidth: "200px", maxHeight: "200px" }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
