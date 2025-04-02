import CarCard from "../components/pages/cars/CarCard";

const cars = [
  {
    id: 1,
    name: "Toyota Avanza",
    price: "Rp 200 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61155288_001.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "Rp 400 juta",
    image:
      "https://img.kcar.com/carpicture/carpicture05/pic6115/kcarM_61152137_001.jpg",
  },
];

const Cars = () => {
  return (
    <div>
      <div className="h-[400px] max-h-[690px] w-full object-cover sm:min-h-[400px] md:min-h-[600px] lg:min-h-[500px]">
        <img src="/image/Sell_Car_Banner.png" alt="gambar" />
      </div>
      <div className="container mx-auto mt-10 mb-30 flex flex-col gap-6 px-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
