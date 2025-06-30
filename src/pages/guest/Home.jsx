import { useState } from "react";

import Carousel from "../../components/guest/home/Carousel";
import SearchCar from "../../components/guest/home/SearchCar";
import CaraKerja from "../../components/guest/home/CaraKerja";
import Ulasan from "../../components/guest/home/Ulasan";
import Faq from "../../components/guest/home/Faq";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <>
      <section className="relative ">
        <div className="relative ">
          <Carousel />
        </div>
        {/* <div className="mt-4 block px-4 ">
          <div className="mx-auto w-full max-w-6xl rounded-xl bg-white p-4 shadow-lg sm:p-6">
            <SearchCar />
          </div>
        </div> */}
      </section>

      <div className="mt-10">
        <CaraKerja
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <Ulasan />
        <Faq />
      </div>
    </>
  );
};

export default Home;
