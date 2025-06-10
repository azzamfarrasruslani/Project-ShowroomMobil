
import { useState } from "react";
/* eslint-disable no-unused-vars */
import Carousel from "../../components/guest/home/Carousel";
import SearchCar from "../../components/guest/home/SearchCar";
import Ulasan from "../../components/guest/home/Ulasan";
import Faq from "../../components/guest/home/Faq";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <>
      <section className="relative">
        {/* Carousel sebagai latar */}
        <div className="relative h-[400px] overflow-hidden sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
          <Carousel />
        </div>

        {/* SearchCar mengambang di bawah carousel */}
        {/* SearchCar untuk tampilan Desktop (absolute) */}
        <div className="absolute inset-x-0 bottom-[-300px] z-10 hidden justify-center px-4 lg:flex xl:bottom-[-360px]">
          <div className="w-full max-w-6xl sm:p-6">
            <SearchCar />
          </div>
        </div>

        {/* SearchCar untuk tampilan Mobile (di bawah Carousel) */}
        <div className="mt-4 block px-4 lg:hidden">
          <div className="mx-auto w-full max-w-6xl rounded-xl bg-white p-4 shadow-lg sm:p-6">
            <SearchCar />
          </div>
        </div>
      </section>

      {/* Spacer agar komponen berikut tidak tertutup */}
      <div className="mt-[300px] sm:mt-[500px] md:mt-[550px] lg:mt-[580px] xl:mt-[400px]">
        <Ulasan />
        <Faq />
      </div>
    </>
  );
};

export default Home;
