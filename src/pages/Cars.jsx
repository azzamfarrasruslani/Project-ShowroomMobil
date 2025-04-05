import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icon from "../lib/Icon";
import cars from "../data/data_mobil_bekas.json";

// --- SearchBar Component ---
const SearchBar = ({ searchTerm, onSearch }) => (
  <div className="relative">
    <Icon
      name="search"
      className="text-md absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
    />
    <input
      type="text"
      value={searchTerm}
      onChange={onSearch}
      className="w-full rounded-md border border-gray-300 bg-gray-800 p-3 pl-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:outline-none"
      placeholder="Cari berdasarkan Merek, Model, atau Kata Kunci"
    />
  </div>
);

// --- FilterSidebar Component ---
const FilterSidebar = ({
  onClose,
  onFilterChange,
  onResetFilter,
  onApplyFilter,
}) => {
  const [activeTab, setActiveTab] = useState("merek");

  const renderTabContent = () => {
    switch (activeTab) {
      case "merek":
        return (
          <div>
            <h3 className="mb-2 font-semibold">Merek & Model</h3>
            <ul>
              {["Honda", "Toyota", "Suzuki", "Daihatsu"].map((brand) => (
                <li key={brand}>
                  <label>
                    <input
                      type="checkbox"
                      value={brand}
                      onChange={onFilterChange}
                    />
                    {brand}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      case "tahun":
        return (
          <div>
            <h3 className="mb-2 font-semibold">Tahun</h3>
            <ul>
              {[2023, 2022, 2021, 2020].map((year) => (
                <li key={year}>
                  <label>
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
        return (
          <div>
            <h3 className="mb-2 font-semibold">Lokasi</h3>
            <ul>
              {["Jakarta", "Bandung", "Surabaya", "Lokasi Saat Ini"].map(
                (location) => (
                  <li key={location}>
                    <label>
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
        return null;
    }
  };

  return (
    <motion.div
      className="bg-opacity-50 fixed inset-0 z-50 flex justify-end bg-gray-800/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-full w-140 flex-col bg-white"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between border-b-2 border-gray-500/10 p-5 pb-4">
          <h2 className="font-[Outfit] text-xl font-bold text-gray-800">
            Filter Mobil
          </h2>
          <button onClick={onClose} className="text-gray-800">
            <Icon icon="mdi:close" className="text-xl" />
          </button>
        </div>

        {/* Tab navigation + content */}
        <div className="flex-grow">
          <div className="flex h-full flex-row gap-4">
            {/* Tab Buttons */}
            <div className="flex h-full w-40 flex-col justify-start gap-2 bg-gray-200">
              {[
                { key: "merek", label: "Merek & Model" },
                { key: "tahun", label: "Tahun" },
                { key: "lokasi", label: "Lokasi" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`border-b-2 px-4 py-5 text-left ${
                    activeTab === tab.key
                      ? "bg-white font-bold text-gray-800"
                      : "text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex flex-grow flex-col gap-4 overflow-y-auto px-10 py-10">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex justify-center gap-4 bg-white p-4 shadow-md">
          <button
            onClick={onResetFilter}
            className="rounded-md bg-gray-200 px-8 py-2 text-gray-600"
          >
            Reset Filter
          </button>
          <button
            onClick={onApplyFilter}
            className="rounded-md bg-gray-800 px-8 py-2 text-yellow-500"
          >
            Terapkan
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- TabPagination Component ---
const TabPagination = ({ totalTabs, activeTab, onTabChange }) => (
  <div className="mt-6 flex justify-center">
    {Array.from({ length: totalTabs }, (_, index) => (
      <button
        key={index}
        onClick={() => onTabChange(index)}
        className={`mx-1 rounded px-4 py-2 ${
          activeTab === index
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

const CarCard = ({ car }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={car.gambar}
          alt={car.nama}
          className="h-60 w-full rounded-lg object-cover"
        />
        <div className="absolute top-2 left-2 rounded bg-red-600 px-2 py-1 text-xs text-white">
          Time Deal
        </div>
        <div className="absolute top-2 right-2 rounded border border-red-600 bg-white px-2 py-1 text-xs text-red-600">
          Gratis Ongkir
        </div>
      </div>
      <h2 className="mt-2 text-xl font-bold text-gray-800">{car.nama}</h2>
      <p className="text-sm text-gray-600">
        {car.merek} - {car.tahun_beli}
      </p>
      <p className="mt-1 font-semibold text-red-600">
        Harga Tunai: Rp.{car.harga.toLocaleString("id-ID")}
      </p>
      {/* <p className="text-sm text-gray-500">
        Cicilan Bulanan: {car.installment} / bulan
      </p> */}
      <div className="mt-2 text-sm text-gray-500">
        <span>{car.jarak_tempuh.toLocaleString("id-ID")} km</span> •{" "}
        <span>
          <Icon name="location" className="mr-1" />
          {car.daerah}
        </span>
      </div>
    </div>
  );
};

const ListCard = ({ car }) => {
  return (
    <div className="flex rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={car.gambar}
          alt={car.nama}
          className="h-60 w-full rounded-lg object-cover"
        />
        <div className="absolute top-2 left-2 rounded bg-red-600 px-2 py-1 text-xs text-white">
          Time Deal
        </div>
        <div className="absolute top-2 right-2 rounded border border-red-600 bg-white px-2 py-1 text-xs text-red-600">
          Gratis Ongkir
        </div>
      </div>
      <div className="flex flex-col px-10">
        <h2 className="mt-2 text-xl font-bold text-gray-800">{car.nama}</h2>
        <p className="text-sm text-gray-600">
          {car.merek} - {car.tahun_beli}
        </p>
        <p className="mt-1 font-semibold text-red-600">
          Harga Tunai: Rp.{car.harga.toLocaleString("id-ID")}
        </p>
        {/* <p className="text-sm text-gray-500">
          Cicilan Bulanan: {car.installment} / bulan
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {car.description}
        </p> */}
        <div className="mt-2 text-sm text-gray-500">
          <span>{car.jarak_tempuh.toLocaleString("id-ID")} km</span> •{" "}
          <span>
            <Icon name="location" className="mr-1" />
            {car.daerah}
          </span>
        </div>
      </div>
    </div>
  );
};

// --- Main Cars Component ---
const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState("card");

  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const carsPerPage = 9;
  const totalTabs = Math.ceil(filteredCars.length / carsPerPage);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const filtered = cars.filter((car) => car.merek.includes(value));
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
    setActiveTab(0);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = cars.filter(
      (car) =>
        car.nama.toLowerCase().includes(term) ||
        car.merek.toLowerCase().includes(term) ||
        car.daerah.toLowerCase().includes(term),
    );
    setFilteredCars(filtered);
    setActiveTab(0);
  };

  const handleResetFilter = () => {
    setFilteredCars(cars);
    setActiveTab(0);
  };

  const handleApplyFilter = () => {
    setShowFilter(false);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const currentCars = filteredCars.slice(
    activeTab * carsPerPage,
    (activeTab + 1) * carsPerPage,
  );

  return (
    <div>
      <div className="h-[400px] max-h-[690px] w-full object-cover sm:min-h-[400px] md:min-h-[600px] lg:min-h-[500px]">
        <img src="/image/Sell_Car_Banner.png" alt="gambar" />
      </div>

      <div className="container mx-auto mb-10 flex w-full flex-col gap-6 rounded-lg bg-gray-900 p-8 px-10 text-gray-100 shadow-lg">
        <h2 className="font-[Outfit] text-3xl font-bold text-white">
          Beli Mobil Bekas Berkualitas
        </h2>
        <p className="text-sm text-gray-400">
          Temukan mobil impianmu dengan harga terbaik. Gunakan fitur pencarian
          dan filter untuk hasil yang lebih spesifik.
        </p>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        <div className="flex gap-4">
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 rounded-md bg-yellow-500 px-4 py-2 text-gray-800 ring-2 ring-gray-800"
            title="Tampilkan opsi filter"
          >
            <Icon name="filter" />
            <span>Filter Pencarian</span>
          </button>

          <button
            className="flex items-center gap-2 rounded-md bg-yellow-500 px-4 py-2 text-gray-800 ring-2 ring-gray-800"
            onClick={() => setViewMode(viewMode === "card" ? "list" : "card")}
            title={`Ubah tampilan ke ${viewMode === "card" ? "daftar" : "kartu"}`}
          >
            <Icon name={viewMode === "card" ? "list" : "card"} />
            {/* <span>
              {viewMode === "card" ? "Tampilan Daftar" : "Tampilan Kartu"}
            </span> */}
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-4">
        <p className="text-gray-600">{filteredCars.length} Hasil</p>

        {showFilter && (
          <FilterSidebar
            onClose={() => setShowFilter(false)}
            onFilterChange={handleFilterChange}
            onResetFilter={handleResetFilter}
            onApplyFilter={handleApplyFilter}
          />
        )}

        {currentCars.length > 0 ? (
          <div
            className={
              viewMode === "card"
                ? "grid grid-cols-1 gap-5 md:grid-cols-3"
                : "flex flex-col gap-2"
            }
          >
            {currentCars.map((car) =>
              viewMode === "card" ? (
                <CarCard key={car.id} car={car} />
              ) : (
                <ListCard key={car.id} car={car} />
              ),
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500">Mobil tidak ditemukan.</p>
        )}

        <p className="text-gray-600">
          Menampilkan {filteredCars.length} dari {cars.length} mobil
        </p>

        <TabPagination
          totalTabs={totalTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
};

export default Cars;
