import Icon from "../../../lib/Icon";


const CarCard = ({ car }) => {
  return (
    <div className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={car.gambar}
          alt={car.nama}
          className="h-60 w-full rounded-t-lg object-cover"
        />
        <div className="absolute top-2 left-2 rounded bg-yellow-500 px-2 py-1 text-xs text-white">
          Time Deal
        </div>
        <div className="absolute top-2 right-2 rounded border border-yellow-500 bg-white px-2 py-1 text-xs text-yellow-500">
          Gratis Ongkir
        </div>
      </div>

      <div className="p-5">
        <p className="mt-1 text-xl font-extrabold text-yellow-500">
          Rp{car.harga.toLocaleString("id-ID")}
        </p>
        <h2 className="mt-2 text-lg font-bold text-gray-800">{car.nama}</h2>

        <div className="mt-3 rounded-xl border border-gray-200 p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img
              src="../../public/icon/calendar-icon.svg"
              alt="calendar"
              className="h-4 w-4"
            />
            <p>{car.tahun_beli}</p>
            <span className="px-1">•</span>
            <img
              src="../../public/icon/automatic_icon.svg"
              alt="transmission"
              className="h-4 w-4"
            />
            <p>{car.transmisi}</p>
            <span className="px-1">•</span>
            <Icon name="location" className="h-4 w-4 text-gray-600" />
            <p>{car.daerah}</p>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <img
              src="../../public/icon/mileage-icon.svg"
              alt="mileage"
              className="h-4 w-4"
            />
            <p>{car.jarak_tempuh.toLocaleString("id-ID")} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
