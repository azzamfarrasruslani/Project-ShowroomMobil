/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: gambar naik perlahan saat scroll

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div
      ref={ref} // ini penting untuk efek parallax
      className="relative h-[400px] max-h-[260px] w-full overflow-hidden object-cover sm:min-h-[300px] md:min-h-[200px] lg:min-h-[500px]"
    >
      <motion.img
        src="/image/Sell_Car_Banner.png"
        className="absolute inset-0"
        style={{ y }}
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}
