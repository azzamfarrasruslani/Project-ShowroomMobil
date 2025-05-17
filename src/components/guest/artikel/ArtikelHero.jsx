/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function ArtikelHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: gambar naik perlahan saat scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]); // semakin besar -150, semakin kuat efek parallax
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div
      className="relative overflow-hidden px-4 py-16 text-gray-800 md:px-10"
      ref={ref}
    >
      {/* Background Image */}
      <motion.img
        src="/image/artikel.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale }}
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay jika ingin teks lebih terbaca */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      {/* Konten di atas gambar */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-5xl text-center text-white">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-yellow-400">
            Semua Artikel
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white">
            Temukan informasi terkini seputar dunia otomotif dan tips membeli
            mobil bekas yang tepat.
          </p>
        </div>
      </div>
    </div>
  );
}
