import { useState, useEffect, useRef } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

export default function CheckBoxFilter({ onFilterChange, tag, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    let updatedTags;

    if (isChecked) {
      updatedTags = [...selectedTags, value];
    } else {
      updatedTags = selectedTags.filter((tag) => tag !== value);
    }

    setSelectedTags(updatedTags);
  };

  // Handle apply filter button click
  const handleApplyFilter = () => {
    onFilterChange(selectedTags);
    setIsOpen(false);
  };

  // Handle clear filter button click
  const handleClearFilter = () => {
    setSelectedTags([]);
    onFilterChange([]);
  };

  return (
    <div className="hidden md:relative md:block" ref={dropdownRef}>
      <motion.button
        className="flex items-center gap-2 rounded-md px-4 py-2 text-white ring-2 ring-white focus:ring-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ y: 1 }}
      >
        {name}
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="absolute z-10 mt-4 w-60"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="absolute -top-2 left-4 h-0 w-0 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-white border-l-transparent"></div>

            <div className="rounded-xl bg-white text-gray-800 shadow-lg">
              <div className="max-h-60 overflow-y-auto px-4 py-2">
                <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-2">
                  <h4 className="text-sm font-bold">All</h4>
                </div>
                {tag.map((item) => (
                  <label
                    key={item.name}
                    className="flex items-center justify-between py-1 text-sm font-medium"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value={item.name}
                        checked={selectedTags.includes(item.name)}
                        className="mr-2"
                      />
                      {item.name}
                    </div>
                    <span className="text-gray-400">({item.count})</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-between border-t border-gray-200 px-4 py-2 text-sm">
                <button
                  onClick={handleClearFilter}
                  className="rounded-xl bg-gray-300 px-3 py-2 text-gray-600 transition duration-200 hover:scale-105"
                >
                  Hapus Filter
                </button>
                <button
                  onClick={handleApplyFilter}
                  className="rounded-xl bg-gray-900 px-3 py-2 text-yellow-500 transition duration-200 hover:scale-105"
                >
                  Terapkan
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
