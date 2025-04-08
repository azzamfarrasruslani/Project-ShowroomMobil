import { useState } from "react";
// Icons
import Icon from "../../../lib/Icon";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const FilterSidebar = ({
    onClose, // Fungsi untuk menutup sidebar
    onFilterChange, // Fungsi untuk menangani perubahan filter
    onResetFilter, // Fungsi untuk mereset filter
    onApplyFilter, // Fungsi untuk menerapkan filter
    filteredCars, // Data mobil yang sudah difilter
  }) => {
    // State untuk melacak tab aktif
    const [activeTab, setActiveTab] = useState("merek");
  
    // Fungsi untuk merender konten berdasarkan tab aktif
    const renderTabContent = () => {
      switch (activeTab) {
        case "merek":
          // Tab "Merek & Model"
          return (
            <div>
              <h3 className="mb-2 font-semibold">Merek & Model</h3>
              <ul className="grid grid-cols-2 gap-4">
                {["Honda", "Toyota", "Suzuki", "Daihatsu"].map((brand) => (
                  <li key={brand} className="flex items-center gap-2">
                    <label>
                      {/* Tombol untuk memilih merek */}
                      <button
                        onClick={() =>
                          onFilterChange({
                            target: { value: brand, checked: true },
                          })
                        }
                        className={`rounded p-2 ${
                          filteredCars.some((car) => car.merek === brand)
                            ? "bg-gray-800/40 ring-2 ring-gray-900" // Jika merek dipilih
                            : "bg-gray-200" // Jika merek tidak dipilih
                        }`}
                      >
                        {/* Logo merek */}
                        <img
                          src={`/image/car_logo/${brand.toLowerCase()}.png`}
                          alt={`${brand} logo`}
                          className="w-10"
                        />
                      </button>
                    </label>
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          );
        case "tahun":
          // Tab "Tahun"
          return (
            <div>
              <h3 className="mb-2 font-semibold">Tahun</h3>
              <ul>
                {[2023, 2022, 2021, 2020].map((year) => (
                  <li key={year}>
                    <label>
                      {/* Checkbox untuk memilih tahun */}
                      <input
                        type="checkbox"
                        value={year}
                        onChange={onFilterChange}
                      />
                      {year}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          );
        case "lokasi":
          // Tab "Lokasi"
          return (
            <div>
              <h3 className="mb-2 font-semibold">Lokasi</h3>
              <ul>
                {["Jakarta", "Bandung", "Surabaya", "Lokasi Saat Ini"].map(
                  (location) => (
                    <li key={location}>
                      <label>
                        {/* Checkbox untuk memilih lokasi */}
                        <input
                          type="checkbox"
                          value={location}
                          onChange={onFilterChange}
                        />
                        {location}
                      </label>
                    </li>
                  ),
                )}
              </ul>
            </div>
          );
        default:
          return null; // Jika tab tidak dikenali
      }
    };
  
    return (
      <motion.div
        className="bg-opacity-50 fixed inset-0 z-50 flex justify-end bg-gray-800/50"
        initial={{ opacity: 0 }} // Animasi awal (transparan)
        animate={{ opacity: 1 }} // Animasi saat muncul (opaque)
        exit={{ opacity: 0 }} // Animasi saat keluar (transparan)
        onClick={onClose} // Menutup sidebar saat area luar diklik
      >
        <motion.div
          className="relative flex h-full w-140 flex-col bg-white"
          initial={{ x: "100%" }} // Posisi awal di luar layar
          animate={{ x: 0 }} // Posisi akhir di dalam layar
          exit={{ x: "100%" }} // Posisi keluar kembali ke luar layar
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Transisi animasi
          onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat area dalam diklik
        >
          {/* Header */}
          <div className="flex justify-between border-b-2 border-gray-500/10 p-5 pb-4">
            <h2 className="font-[Outfit] text-xl font-bold text-gray-800">
              Filter Mobil
            </h2>
            <button onClick={onClose} className="text-gray-800">
              <Icon name="close" className="text-xl" /> {/* Tombol tutup */}
            </button>
          </div>
  
          {/* Tab navigation + content */}
          <div className="flex-grow">
            <div className="flex h-full flex-row gap-4">
              {/* Tab Buttons */}
              <div className="flex h-full w-40 flex-col justify-start gap-1 bg-gray-100 text-sm">
                {[
                  { key: "merek", label: "Merek & Model" },
                  { key: "tahun", label: "Tahun" },
                  { key: "lokasi", label: "Lokasi" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)} // Mengubah tab aktif
                    className={`px-4 py-5 text-left ${
                      activeTab === tab.key
                        ? "border-l-4 border-gray-800 bg-white font-bold text-gray-800 shadow-xs" // Tab aktif
                        : "bg-gray-100 text-gray-600" // Tab tidak aktif
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
  
              {/* Tab Content */}
              <div className="flex flex-grow flex-col gap-4 overflow-y-auto px-10 py-10">
                {renderTabContent()} {/* Konten tab */}
              </div>
            </div>
          </div>
  
          {/* Footer */}
          <div className="sticky bottom-0 flex justify-center gap-4 bg-gray-100 p-4 shadow-2xl">
            <button
              onClick={onResetFilter} // Reset filter
              className="rounded-md bg-gray-300 px-15 py-3 text-gray-600"
            >
              Reset Filter
            </button>
            <button
              onClick={onApplyFilter} // Terapkan filter
              className="rounded-md bg-gray-800 px-15 py-3 text-yellow-500"
            >
              Terapkan
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  export default FilterSidebar;