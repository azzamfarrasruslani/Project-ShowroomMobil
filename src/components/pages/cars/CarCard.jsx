import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="h-60 w-full object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Time Deal</div>
        <div className="absolute top-2 right-2 bg-white text-red-600 text-xs px-2 py-1 rounded border border-red-600">Gratis Ongkir</div>
      </div>
      <h2 className="mt-2 text-xl font-bold text-gray-800">{car.name}</h2>
      <p className="text-gray-600 text-sm">{car.brand} - {car.year}</p>
      <p className=" font-semibold mt-1 text-red-600">Harga Tunai: {car.price}</p>
      <p className="text-gray-500 text-sm">Cicilan Bulanan: {car.installment} / bulan</p>
      <p className="text-gray-500 mt-2 text-sm line-clamp-2">{car.description}</p>
      <div className="mt-2 text-sm text-gray-500">
        <span>{car.km} km</span> • <span>{car.fuel}</span> • <span>{car.location}</span>
      </div>
      
    </div>
  );
};

export default CarCard;
