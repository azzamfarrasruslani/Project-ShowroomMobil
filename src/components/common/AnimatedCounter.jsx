/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCounter({ to = 1000, duration = 2, prefix = "", suffix = "" }) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration, stiffness: 100, damping: 20 });
  const display = useTransform(spring, (latest) => Math.floor(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      setCurrent(v);
    });

    count.set(to); // Mulai animasi

    return () => unsubscribe(); // Bersihkan saat unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);

  return (
    <motion.span>
      {prefix}
      {current.toLocaleString("id-ID")}
      {suffix}
    </motion.span>
  );
}
