import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
// Icons
import Icon from "../lib/Icon";
// Data
import cars from "../data/data_mobil_bekas.json";
// Components - Features
import FilterSidebar from "../components/features/cars/FilterSidebar";
import SearchBar from "../components/features/cars/SearchBar";
import CarCard from "../components/features/cars/CarCard";
import ListCard from "../components/features/cars/ListCard";
import TabPagination from "../components/features/cars/TabPagination";

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
      <div className="h-[400px] max-h-[260px] w-full object-cover sm:min-h-[300px] md:min-h-[200px] lg:min-h-[500px]">
        <img src="/image/Sell_Car_Banner.png" alt="gambar" />
      </div>

      <div className="container mx-auto mb-10 flex w-full flex-col gap-5 rounded-lg bg-slate-800 p-8 text-gray-100 shadow-lg">
        <h2 className="font-[Outfit] text-2xl font-bold text-yellow-500 md:text-4xl">
          Beli Mobil Bekas Berkualitas
        </h2>
        <p className="text-xs text-gray-400 md:text-sm">
          Temukan mobil impianmu dengan harga terbaik. Gunakan fitur pencarian
          dan filter untuk hasil yang lebih spesifik.
        </p>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        <div className="flex gap-4">
          <button
            onClick={() => setShowFilter(true)}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-white ring-2 ring-white"
            title="Tampilkan opsi filter"
          >
            <Icon name="filter" />
            <span>Filter Pencarian</span>
          </button>

          <button
            className="hidden items-center gap-2 rounded-md px-4 py-2 text-white ring-2 ring-white lg:flex"
            onClick={() => setViewMode(viewMode === "card" ? "list" : "card")}
            title={`Ubah tampilan ke ${viewMode === "card" ? "daftar" : "kartu"}`}
          >
            <Icon
              name={viewMode === "card" ? "list" : "card"}
              className="text-xl"
            />
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-1">
        <p className="text-gray-600">{filteredCars.length} Hasil</p>

        {showFilter && (
          <FilterSidebar
            onClose={() => setShowFilter(false)}
            onFilterChange={handleFilterChange}
            onResetFilter={handleResetFilter}
            onApplyFilter={handleApplyFilter}
            filteredCars={filteredCars}
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
