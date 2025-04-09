import { useState, useMemo } from "react";
import Icon from "../lib/Icon";
import cars from "../data/data_mobil_bekas.json";
import FilterSidebar from "../components/features/cars/FilterSidebar";
import SearchBar from "../components/features/cars/SearchBar";
import CarCard from "../components/features/cars/CarCard";
import ListCard from "../components/features/cars/ListCard";
import TabPagination from "../components/features/cars/TabPagination";
import CheckBoxFilter from "../components/features/cars/CheckBoxFilter";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState("card");
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
        filters.transmisi.length === 0 || filters.transmisi.includes(car.transmisi);

      return matchSearch && matchMerek && matchTransmisi;
    });
  }, [searchTerm, filters]);

  const totalTabs = Math.ceil(filteredCars.length / carsPerPage);
  const currentCars = filteredCars.slice(
    activeTab * carsPerPage,
    (activeTab + 1) * carsPerPage
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
      <div className="h-[400px] max-h-[260px] w-full object-cover sm:min-h-[300px] md:min-h-[200px] lg:min-h-[500px]">
        <img src="/image/Sell_Car_Banner.png" alt="Sell Car Banner" />
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

            <button
              onClick={() => setShowFilter(true)}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-white ring-2 ring-white focus:ring-yellow-500 md:hidden md:px-4 md:text-base"
              title="Tampilkan opsi filter"
            >
              <Icon name="filter" />
              <span>Filter Pencarian</span>
            </button>

            <button
              className="hidden items-center gap-2 rounded-md px-4 py-2 text-white ring-2 ring-white focus:ring-yellow-500 md:flex"
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
              )
            )}
          </div>
        ) : (
          <div className="flex justify-center -mt-20">
            <img
              src="/public/image/error/notfound-01.png"
              alt="notfound"
              className="w-120"
            />
          </div>
        )}

        <p className="text-gray-600">
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
};

export default Cars;
