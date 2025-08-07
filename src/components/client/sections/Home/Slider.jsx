import { useEffect, useState } from "react";

import { getAllBanners } from "../../../../services/client/banner";


export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [banners, setBanners] = useState([]);
  const length = banners.length;


  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };
  useEffect(()=>{
     const fetchAllBanner = async () =>{
          try {
            const data = await getAllBanners();
            setBanners(data);
            console.log(data)
          } catch (error){
            console.error("Loi", error)
            throw new error;
          }
        }
        fetchAllBanner();
  },[])

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-130 overflow-hidden ">
      {/* Slide wrapper */}
      <div className="w-full h-auto relative">
        {banners?.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Nút trái */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❮
      </button>

      {/* Nút phải */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ❯
      </button>
    </div>
  );
}
