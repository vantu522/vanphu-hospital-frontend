import { useEffect, useState, useCallback } from "react";
import { getAllBanners } from "../../../../services/client/banner";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const length = banners.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  useEffect(() => {
    const fetchAllBanner = async () => {
      try {
        setLoading(true);
        const data = await getAllBanners();
        setBanners(data);
        console.log("Banners data:", data);
      } catch (error) {
        console.error("Loi fetch banners:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllBanner();
  }, []);

  // Auto slide - chỉ chạy khi có banners
  useEffect(() => {
    if (length > 1) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [length, nextSlide]);

  if (loading) {
    return <div className="w-full h-130 bg-gray-200 animate-pulse"></div>;
  }

  if (length === 0) {
    return <div className="w-full h-130 bg-gray-100 flex items-center justify-center">
      <p>Không có banner nào</p>
    </div>;
  }

  return (
    <div className="relative w-full h-130 overflow-hidden bg-gray-100">
      {/* Debug info - xóa sau khi fix */}
      <div className="absolute top-2 left-2 z-50 bg-black/70 text-white px-2 py-1 rounded text-xs">
        {current + 1}/{length}
      </div>

      {/* Slide wrapper */}
      <div className="w-full h-full relative">
        {banners.map((item, index) => (
          <div
            key={item.id || index} // Sử dụng id từ API làm key
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={item.image}
              alt={item.description || `Banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error(`Lỗi load ảnh banner ${index}:`, item.image);
                e.target.style.display = 'none';
              }}
              onLoad={() => {
                console.log(`Loaded banner ${index}:`, item.image);
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons - chỉ hiện khi có > 1 banner */}
      {length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            disabled={loading}
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
            disabled={loading}
          >
            ❯
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}