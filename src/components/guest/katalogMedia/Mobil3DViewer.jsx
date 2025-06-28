import { useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Mobil3DViewer() {
  const totalFrames = 23;
  const [frame, setFrame] = useState(1);
  const lastX = useRef(null);
  const dragDistance = useRef(0);

  const stepSize = 10;

  const handleDragStart = (_, info) => {
    lastX.current = info.point.x;
    dragDistance.current = 0;
  };

  const handleDrag = (_, info) => {
    const deltaX = info.point.x - lastX.current;
    dragDistance.current += deltaX;

    if (dragDistance.current > stepSize) {
      setFrame((prev) => (prev % totalFrames) + 1);
      dragDistance.current = 0;
    } else if (dragDistance.current < -stepSize) {
      setFrame((prev) => (prev - 1 === 0 ? totalFrames : prev - 1));
      dragDistance.current = 0;
    }

    lastX.current = info.point.x;
  };

  return (
    <div className="w-full max-w-xl mx-auto select-none">
      <motion.div
        drag="x"
        dragElastic={0}
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: 0 }} // penting agar elemen tidak bergerak
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        className="cursor-grab active:cursor-grabbing"
      >
        <img
          src={`/image/360-pajero/${frame}.png`}
          alt={`Frame ${frame}`}
          className="w-full rounded-lg shadow-lg pointer-events-none"
          draggable={false}
        />
      </motion.div>
      <p className="mt-2 text-center text-sm text-gray-500">
        Geser kiri atau kanan untuk memutar mobil
      </p>
    </div>
  );
}
