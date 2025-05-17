import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

export default function DropdownMenu({ items = [], selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-auto">
      <motion.button
        className="flex items-center justify-between px-4 text-lg font-medium text-gray-800 capitalize transition duration-300 ease-in-out hover:text-yellow-600"
        onClick={() => setIsOpen((prev) => !prev)}
        whileTap={{ scale: 0.97 }}
      >
        {selected}

        <motion.svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-10 mt-2 min-w-44 overflow-hidden rounded-lg bg-slate-100 shadow-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer px-5 py-2 text-base text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-yellow-600"
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
