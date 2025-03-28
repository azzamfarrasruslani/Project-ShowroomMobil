import "../css/styles.css";
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
    <section className="main_visual relative h-auto overflow-hidden mb-40">
      <div className="swiper-container1 visSwiper relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="w-full object-cover h-[400px] max-h-[690px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[500px]"
        >
          <SwiperSlide className="flex items-center justify-center text-white">
            <img src="/image/2.png" alt="gambar"/>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-white">
            <img src="/image/1.png" alt="gambar" />
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full p-3 z-10 hidden lg:block"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-white bg-opacity-50 text-black rounded-full p-3 z-10 hidden lg:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
