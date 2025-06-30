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
  Info,
  Car,
  Settings,
  MapPin,
} from "lucide-react";

export default function CarDetail({ car }) {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Detail Mobil</h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-yellow-400"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 text-gray-800 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <Car size={20} />,
            label: "Merek & Nama",
            value: `${car.merek} ${car.nama}`,
          },
          {
            icon: <Calendar size={20} />,
            label: "Tahun Pembelian",
            value: car.tahun_beli,
          },
          {
            icon: <Settings size={20} />,
            label: "Transmisi",
            value: car.transmisi,
          },
          {
            icon: <Fuel size={20} />,
            label: "Jenis Bahan Bakar",
            value: "Bensin", // asumsinya
          },
          {
            icon: <PaintBucket size={20} />,
            label: "Warna",
            value: car.warna,
          },
          {
            icon: <GaugeCircle size={20} />,
            label: "Jarak Tempuh",
            value: `${car.jarak_tempuh.toLocaleString("id-ID")} km`,
          },
          {
            icon: <BadgeCheck size={20} />,
            label: "Tipe Mobil",
            value: car.tipe,
          },
          {
            icon: <Users size={20} />,
            label: "Kapasitas",
            value: "7 Penumpang", // asumsinya SUV
          },
          {
            icon: <BookOpen size={20} />,
            label: "Buku Servis",
            value: car.kondisi?.servis_terakhir ? "Ya" : "Tidak",
          },
          {
            icon: <KeyRound size={20} />,
            label: "Kunci Cadangan",
            value: "Ya", // asumsinya
          },
          {
            icon: <CarFront size={20} />,
            label: "Garansi Pabrik",
            value: "Tidak", // asumsinya mobil bekas
          },
          {
            icon: <MapPin size={20} />,
            label: "Lokasi",
            value: car.daerah,
          },
        ].map((item, idx) => (
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
