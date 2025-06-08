import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Carousel from "../../components/guest/home/Carousel";
import SearchCar from "../../components/guest/home/SearchCar";
import Ulasan from "../../components/guest/home/Ulasan";
import Faq from "../../components/guest/home/Faq";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen">
        <Carousel />
        <SearchCar />

        <Ulasan/>
        <Faq />
      </section>
    </>
  );
};

export default Home;
