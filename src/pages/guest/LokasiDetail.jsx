import { ArrowLeft, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import lokasiList from "../../data/data_lokasi.json";

export default function LokasiDetail() {
  const { id } = useParams();
  const lokasi = lokasiList.find((item) => item.id.toString() === id);

  if (!lokasi) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
        <p className="text-lg font-semibold text-red-600">
          Lokasi tidak ditemukan.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 md:px-20 py-10">
      <div className="max-w-3xl mx-auto rounded-xl bg-white p-8 shadow-md">
        <Link
          to="/lokasi-kami"
          className="mb-4 inline-flex items-center text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Kembali ke Daftar Lokasi
        </Link>

        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          📍 {lokasi.nama}
        </h1>
        <div className="flex items-center text-gray-700 mb-4">
          <MapPin size={18} className="mr-2 text-blue-500" />
          <p>{lokasi.alamat}</p>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Jarak dari lokasi Anda: <strong>{lokasi.jarak}</strong>
        </p>

        <div className="mt-4 space-y-3 text-gray-700">
          <p>
            <strong>Jam Operasional:</strong> {lokasi.jam_operasional || "Setiap hari, 08:00 - 17:00"}
          </p>
          <p>
            <strong>Telepon:</strong> {lokasi.telepon || "0812-3456-7890"}
          </p>
          <p>
            <strong>Layanan Tersedia:</strong> {lokasi.layanan || "Servis, Jual Beli, Tukar Tambah"}
          </p>
        </div>
      </div>
    </div>
  );
}
