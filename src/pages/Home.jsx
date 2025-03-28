/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen p-10 text-center">
      {/* Gunakan motion.h1 agar error hilang */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold"
      >
        Selamat Datang di Showroom Mobil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-gray-600"
      >
        Temukan mobil impianmu dengan harga terbaik.
      </motion.p>
    </div>
  );
};

export default Home;
