import {
  Calendar,
  Factory,
  Palette,
  MapPin,
  BadgeDollarSign,
  Settings2,
  Gauge,
  Users,
} from "lucide-react";

export default function CarInfoCard({ car }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <img
        src={car.gambar}
        alt={car.nama}
        className="mb-4 w-full rounded-lg object-cover shadow"
      />
      <h3 className="mb-1 text-xl font-bold text-gray-800">{car.nama}</h3>
      <p className="mb-2 text-sm text-gray-500">Info Singkat Mobil</p>

      <div className="grid grid-cols-1 gap-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-700 md:grid-cols-2">
        <div className="flex items-center gap-2">
          <Factory className="h-4 w-4" /> <span>{car.merek}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" /> <span>Tahun {car.tahun_beli}</span>
        </div>
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4" /> <span>Warna {car.warna}</span>
        </div>
        {car.lokasi && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> <span>{car.lokasi}</span>
          </div>
        )}
        {car.harga && (
          <div className="flex items-center gap-2">
            <BadgeDollarSign className="h-4 w-4" /> <span>Rp {car.harga.toLocaleString()}</span>
          </div>
        )}
        {car.transmisi && (
          <div className="flex items-center gap-2">
            <Settings2 className="h-4 w-4" /> <span>{car.transmisi}</span>
          </div>
        )}
        {car.cc && (
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4" /> <span>{car.cc} cc</span>
          </div>
        )}
        {car.kursi && (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" /> <span>{car.kursi} kursi</span>
          </div>
        )}
        {car.kilometer && (
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4" /> <span>{car.kilometer} km</span>
          </div>
        )}
      </div>
    </div>
  );
}
