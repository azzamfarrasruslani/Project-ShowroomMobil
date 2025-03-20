import CarCard from "../components/CarCard";

const cars = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: "Rp 200 juta",
    image: "/images/avanza.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image: "/images/civic.jpg",
  },
];

const Cars = () => {
  return (
    <div className="container mx-auto min-h-screen p-10">
      <h1 className="mb-6 text-3xl font-bold">Daftar Mobil</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
