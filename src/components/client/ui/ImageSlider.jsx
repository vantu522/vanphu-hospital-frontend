import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  // Tự động chuyển slide mỗi 3 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handleThumbnailClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-3/4">
      <img
        src={images[current]}
        alt={`Image ${current}`}
        className="main-image rounded mb-4 max-h-[500px] w-full object-cover transition-all duration-500"
      />

      {/* Thumbnail preview */}
      <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover rounded cursor-pointer hover:opacity-80 transition border-2 ${
              current === index ? "border-emerald-600" : "border-transparent"
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
    ); 
}

export default ImageSlider;