import {
  Tag,
  Calendar,
  Car,
  GaugeCircle,
  MapPin,
} from "lucide-react";

const CardItem = ({ car }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl">
      <div className="relative">
        <img
          src={car.gambar}
          alt={car.nama}
          className="h-60 w-full object-cover"
        />
        {car.promosi.diskon && (
          <div className="absolute top-2 left-2 rounded bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
            Diskon
          </div>
        )}
        {car.promosi.gratis_ongkir && (
          <div className="absolute top-2 right-2 rounded border border-yellow-500 bg-white px-2 py-1 text-xs font-medium text-yellow-500">
            Gratis Ongkir
          </div>
        )}
      </div>

      <div className="px-4 py-3">
        <h3 className="text-md font-semibold text-gray-800">{car.nama}</h3>
        <p className="text-lg font-bold text-yellow-500">
          Rp{car.harga.toLocaleString("id-ID")}
        </p>

        <div className="mt-3 rounded-lg border border-gray-200 p-3 text-sm text-gray-600">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4" />
            <span>{car.warna}</span>
            <span>•</span>
            <Calendar className="h-4 w-4" />
            <span>{car.tahun_beli}</span>
            <span>•</span>
            <Car className="h-4 w-4" />
            <span>{car.transmisi}</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <GaugeCircle className="h-4 w-4" />
            <span>{car.jarak_tempuh.toLocaleString("id-ID")} km</span>
            <span>•</span>
            <MapPin className="h-4 w-4" />
            <span>{car.daerah}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
