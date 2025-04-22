import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Carousel from "../components/features/home/Carousel";
import SearchCar from "../components/features/home/SearchCar";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen">
        <Carousel />
        {/* <SearchCar /> */}
      </section>
    </>
  );
};

export default Home;
