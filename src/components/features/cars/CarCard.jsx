import { Link } from "react-router-dom";

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

export default CarCard;
