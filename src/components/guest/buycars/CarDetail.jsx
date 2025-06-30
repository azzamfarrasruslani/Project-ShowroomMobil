import {
  Fuel,
  Calendar,
  GaugeCircle,
  KeyRound,
  BookOpen,
  BadgeCheck,
  CarFront,
  Users,
  PaintBucket,
  Car,
  Settings,
  MapPin,
} from "lucide-react";

export default function CarDetail({ car }) {
  const detailItems = [];

  if (car.merek && car.nama) {
    detailItems.push({
      icon: <Car size={20} />,
      label: "Merek & Nama",
      value: `${car.merek} ${car.nama}`,
    });
  }

  if (car.tahun_beli) {
    detailItems.push({
      icon: <Calendar size={20} />,
      label: "Tahun Pembelian",
      value: car.tahun_beli,
    });
  }

  if (car.transmisi) {
    detailItems.push({
      icon: <Settings size={20} />,
      label: "Transmisi",
      value: car.transmisi,
    });
  }

  if (car.bahan_bakar) {
    detailItems.push({
      icon: <Fuel size={20} />,
      label: "Jenis Bahan Bakar",
      value: car.bahan_bakar,
    });
  }

  if (car.warna) {
    detailItems.push({
      icon: <PaintBucket size={20} />,
      label: "Warna",
      value: car.warna,
    });
  }

  if (typeof car.jarak_tempuh === "number") {
    detailItems.push({
      icon: <GaugeCircle size={20} />,
      label: "Jarak Tempuh",
      value: `${car.jarak_tempuh.toLocaleString("id-ID")} km`,
    });
  }

  if (car.tipe) {
    detailItems.push({
      icon: <BadgeCheck size={20} />,
      label: "Tipe Mobil",
      value: car.tipe,
    });
  }

  if (car.kapasitas) {
    detailItems.push({
      icon: <Users size={20} />,
      label: "Kapasitas",
      value: car.kapasitas,
    });
  }

  if (car.kondisi?.servis_terakhir !== undefined) {
    detailItems.push({
      icon: <BookOpen size={20} />,
      label: "Buku Servis",
      value: car.kondisi.servis_terakhir ? "Ya" : "Tidak",
    });
  }

  if (typeof car.kunci_cadangan !== "undefined") {
    detailItems.push({
      icon: <KeyRound size={20} />,
      label: "Kunci Cadangan",
      value: car.kunci_cadangan ? "Ya" : "Tidak",
    });
  }

  if (typeof car.kondisi?.mobil_bekas !== "undefined") {
    detailItems.push({
      icon: <CarFront size={20} />,
      label: "Garansi Pabrik",
      value: car.kondisi.mobil_bekas ? "Tidak" : "Ya",
    });
  }

  if (car.daerah) {
    detailItems.push({
      icon: <MapPin size={20} />,
      label: "Lokasi",
      value: car.daerah,
    });
  }

  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Detail Mobil</h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-yellow-400"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
        {detailItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 rounded-xl border-b border-gray-200 bg-gray-50 p-4 transition hover:bg-yellow-50 hover:shadow-lg"
          >
            <div className="text-blue-600">{item.icon}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
