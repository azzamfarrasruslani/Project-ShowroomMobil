import CarCard from "../components/CarCard";

const cars = [
  { id: 1, name: "Toyota Avanza", price: "Rp 200 juta", image: "/images/avanza.jpg" },
  { id: 2, name: "Honda Civic", price: "Rp 400 juta", image: "/images/civic.jpg" },
];

const Cars = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Daftar Mobil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
