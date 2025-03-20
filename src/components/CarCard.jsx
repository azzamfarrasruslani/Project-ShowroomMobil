import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
      <h2 className="text-xl font-bold mt-2">{car.name}</h2>
      <p className="text-gray-600">{car.price}</p>
      <Link to={`/cars/${car.id}`} className="text-blue-500 underline">
        Lihat Detail
      </Link>
    </div>
  );
};

export default CarCard;
