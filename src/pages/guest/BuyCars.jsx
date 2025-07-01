import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import cars from "../../data/data_mobil_bekas.json";
import Icon from "../../lib/Icon";
import SearchBar from "../../components/guest/buycars/SearchBar";
import CheckBoxFilter from "../../components/guest/buycars/CheckBoxFilter";
import CardItem from "../../components/guest/buycars/CardItem";
import HeroSection from "../../components/guest/buycars/HeroSection";
import TabPagination from "../../components/guest/buycars/TabPagination";

export default function BuyCars() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(0);
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
      <HeroSection />

      <div className="container mx-auto mt-10 mb-10 flex w-full flex-col gap-5 rounded-lg bg-slate-800 p-8 text-gray-100 shadow-lg">
        <h2 className="font-[Outfit] text-2xl font-bold text-yellow-500 md:text-4xl">
          Beli Mobil Bekas Berkualitas
        </h2>
        <p className="text-xs text-gray-400 md:text-sm">
          Temukan mobil impianmu dengan harga terbaik. Gunakan fitur pencarian
          dan filter untuk hasil yang lebih spesifik.
        </p>

        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-1">
        <p className="md:text-md px-3 text-sm text-gray-600 md:px-0">
          {filteredCars.length} Hasil
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCars.map((car) => (
            <Link
              key={car.id}
              to={`/buy-cars/${car.id}`}
              className="no-underline"
            >
              <CardItem car={car} />
            </Link>
          ))}
        </div>

        <p className="md:text-md px-3 text-sm text-gray-600 md:px-0">
          Menampilkan {currentCars.length} dari {filteredCars.length} mobil
        </p>

        <TabPagination
          totalTabs={totalTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    </div>
  );
}
