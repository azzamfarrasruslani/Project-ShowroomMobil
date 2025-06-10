
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const updateSwiperNavigation = () => {
      const swiperInstance = document.querySelector(".swiper")?.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    };

    setTimeout(updateSwiperNavigation, 500);
  }, []);

  return (
    <section className="relative h-full overflow-hidden">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="h-full w-full"
        >
          {["2", "3", "1"].map((img, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <img
                src={`/image/${img}.png`}
                alt={`gambar-${idx}`}
                className="h-full w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="bg-opacity-50 absolute top-1/2 left-3 z-10 hidden -translate-y-1/2 transform rounded-full bg-white p-3 text-black lg:block"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          ref={nextRef}
          className="bg-opacity-50 absolute top-1/2 right-3 z-10 hidden -translate-y-1/2 transform rounded-full bg-white p-3 text-black lg:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;