/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import SearchCar from "../components/features/home/SearchCar";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <Carousel />
        <SearchCar />
      </section>
    </>
  );
};

export default Home;
