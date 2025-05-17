import { useState, useMemo } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../../lib/Icon";
import cars from "../../data/data_mobil_bekas.json";
import FilterSidebar from "../../components/guest/cars/FilterSidebar";
import SearchBar from "../../components/guest/cars/SearchBar";
import TabPagination from "../../components/guest/cars/TabPagination";
import CheckBoxFilter from "../../components/guest/cars/CheckBoxFilter";
import CardItem from "../../components/guest/cars/CardItem";
import HeroSection from "../../components/guest/cars/HeroSection";


export default function BuyCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({ merek: [], transmisi: [] });

  const carsPerPage = 9;

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchSearch =
        car.nama.toLowerCase().includes(searchTerm) ||
        car.merek.toLowerCase().includes(searchTerm) ||
        car.daerah.toLowerCase().includes(searchTerm);

      const matchMerek =
        filters.merek.length === 0 || filters.merek.includes(car.merek);
      const matchTransmisi =
        filters.transmisi.length === 0 ||
        filters.transmisi.includes(car.transmisi);

      return matchSearch && matchMerek && matchTransmisi;
    });
  }, [searchTerm, filters]);

  const totalTabs = Math.ceil(filteredCars.length / carsPerPage);
  const currentCars = filteredCars.slice(
    activeTab * carsPerPage,
    (activeTab + 1) * carsPerPage,
  );

  const handleFilterChange = (category, selectedTags) => {
    setFilters((prev) => ({ ...prev, [category]: selectedTags }));
    setActiveTab(0);
  };

  const handleResetFilter = () => {
    setFilters({ merek: [], transmisi: [] });
    setActiveTab(0);
  };

  const handleApplyFilter = () => {
    setShowFilter(false);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setActiveTab(0);
  };

  const getTagCounts = (field) => {
    const counts = {};
    cars.forEach((car) => {
      const key = car[field];
      counts[key] = (counts[key] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  };

  return (
    <div>
     
     <HeroSection/>

      <div className="container mx-auto mt-10 mb-10 flex w-full flex-col gap-5 rounded-lg bg-slate-800 p-8 text-gray-100 shadow-lg">
        <h2 className="font-[Outfit] text-2xl font-bold text-yellow-500 md:text-4xl">
          Beli Mobil Bekas Berkualitas
        </h2>
        <p className="text-xs text-gray-400 md:text-sm">
          Temukan mobil impianmu dengan harga terbaik. Gunakan fitur pencarian
          dan filter untuk hasil yang lebih spesifik.
        </p>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex gap-4">
            <CheckBoxFilter
              name="Brand & Model"
              onFilterChange={(tags) => handleFilterChange("merek", tags)}
              tag={getTagCounts("merek")}
            />

            <CheckBoxFilter
              name="Transmisi"
              onFilterChange={(tags) => handleFilterChange("transmisi", tags)}
              tag={getTagCounts("transmisi")}
            />

            <motion.button
              onClick={() => setShowFilter(true)}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-white ring-2 ring-white focus:ring-yellow-500 md:hidden md:px-4 md:text-base"
              title="Tampilkan opsi filter"
              whileTap={{ y: 1 }}
            >
              <Icon name="filter" />
              <span>Filter Pencarian</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="hidden items-center gap-2 rounded-md px-4 py-2 text-white ring-2 ring-white focus:ring-yellow-500 md:flex"
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            >
              <Icon
                name={viewMode === "grid" ? "list" : "card"}
                className="text-xl"
              />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-1">
        <p className="md:text-md px-3 text-sm text-gray-600 md:px-0">
          {filteredCars.length} Hasil
        </p>

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
              viewMode === "grid"
                ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-2"
            }
          >
            {currentCars.map((car) => (
              <CardItem key={car.id} car={car} variant={viewMode} />
            ))}
          </div>
        ) : (
          <div className="-mt-20 flex justify-center">
            <img
              src="/image/error/notfound-01.png"
              alt="notfound"
              className="w-120"
            />
          </div>
        )}

        <p className="md:text-md px-3 text-sm text-gray-600 md:px-0">
          Menampilkan {currentCars.length} dari {filteredCars.length} mobil
        </p>

        <TabPagination
          totalTabs={totalTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
}
