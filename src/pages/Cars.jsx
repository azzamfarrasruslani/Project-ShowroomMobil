import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
// import CarCard from "../components/pages/cars/CarCard";
import Icon from "../lib/Icon";

// Dummy data
const cars = [
  {
    id: 1,
    name: "Honda Civic",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 2,
    name: "Toyota Corolla",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 3,
    name: "Honda Accord",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 4,
    name: "Toyota Camry",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 5,
    name: "Honda CR-V",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 6,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 7,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 8,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 9,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 10,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 11,
    name: "Toyota RAV4",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
];

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
      className="w-full rounded-md border border-gray-300 bg-white p-3 pl-10 focus:ring-2 focus:ring-gray-800 focus:outline-none"
      placeholder="Cari di Mobilin.."
    />
  </div>
);

// --- FilterSidebar Component ---
const FilterSidebar = ({
  onClose,
  onFilterChange,
  onResetFilter,
  onApplyFilter,
}) => (
  <motion.div
    className="bg-opacity-50 fixed inset-0 z-50 flex justify-end bg-gray-800/50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="h-full w-80 bg-white p-4"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
        Close
      </button>
      <h2 className="mb-4 text-lg font-bold">Filter</h2>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-semibold">Merek & Model</h3>
          <ul>
            {["Honda", "Toyota"].map((brand) => (
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
        <div className="flex gap-4">
          <button
            onClick={onResetFilter}
            className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white"
          >
            Reset Filter
          </button>
          <button
            onClick={onApplyFilter}
            className="mt-4 rounded-md bg-green-500 px-4 py-2 text-white"
          >
            Terapkan
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

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
          src={car.image}
          alt={car.name}
          className="h-60 w-full rounded-lg object-cover"
        />
        <div className="absolute top-2 left-2 rounded bg-red-600 px-2 py-1 text-xs text-white">
          Time Deal
        </div>
        <div className="absolute top-2 right-2 rounded border border-red-600 bg-white px-2 py-1 text-xs text-red-600">
          Gratis Ongkir
        </div>
      </div>
      <h2 className="mt-2 text-xl font-bold text-gray-800">{car.name}</h2>
      <p className="text-sm text-gray-600">
        {car.brand} - {car.year}
      </p>
      <p className="mt-1 font-semibold text-red-600">
        Harga Tunai: {car.price}
      </p>
      <p className="text-sm text-gray-500">
        Cicilan Bulanan: {car.installment} / bulan
      </p>
      <p className="mt-2 line-clamp-2 text-sm text-gray-500">
        {car.description}
      </p>
      <div className="mt-2 text-sm text-gray-500">
        <span>{car.km} km</span> • <span>{car.fuel}</span> •{" "}
        <span>{car.location}</span>
      </div>
    </div>
  );
};
const ListCard = ({ car }) => {
  return (
    <div className="flex rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
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
        <h2 className="mt-2 text-xl font-bold text-gray-800">{car.name}</h2>
        <p className="text-sm text-gray-600">
          {car.brand} - {car.year}
        </p>
        <p className="mt-1 font-semibold text-red-600">
          Harga Tunai: {car.price}
        </p>
        <p className="text-sm text-gray-500">
          Cicilan Bulanan: {car.installment} / bulan
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {car.description}
        </p>
        <div className="mt-2 text-sm text-gray-500">
          <span>{car.km} km</span> • <span>{car.fuel}</span> •{" "}
          <span>{car.location}</span>
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

  const carsPerPage = 9;
  const totalTabs = Math.ceil(filteredCars.length / carsPerPage);

  const handleFilterChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      const filtered = cars.filter((car) => car.name.includes(value));
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
    setActiveTab(0);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(term),
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

      <div className="container mx-auto mt-10 mb-10 flex w-full flex-col gap-6 px-4">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <div className="flex gap-4">
          <button
            onClick={() => setShowFilter(true)}
            className="rounded-md bg-white px-4 py-2 text-gray-800 ring-2 ring-gray-800"
          >
            <Icon name="filter" className="" /> Semua Filter
          </button>
          <button
            className="rounded-md bg-white px-4 py-2 text-gray-800 ring-2 ring-gray-800"
            onClick={() => setViewMode(viewMode === "card" ? "list" : "card")}
          >
            {" "}
            <Icon
              name={viewMode === "card" ? "list" : "card"}
              className="mr-2"
            />
            {viewMode === "card" ? "List View" : "Card View"}
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-4">
        <p className="text-gray-600">
          Menampilkan {filteredCars.length} dari {cars.length} mobil
        </p>

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
