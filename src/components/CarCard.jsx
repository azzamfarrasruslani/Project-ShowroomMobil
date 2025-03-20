import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="rounded border p-4 shadow-lg">
      <img
        src={car.image}
        alt={car.name}
        className="h-40 w-full object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{car.name}</h2>
      <p className="text-gray-600">{car.price}</p>
      <Link to={`/cars/${car.id}`} className="text-blue-500 underline">
        Lihat Detail
      </Link>
    </div>
  );
};

export default CarCard;
