import { MapPin, Car, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lokasiAPI } from "../../services/lokasiAPI";

export default function Lokasi() {
  const [lokasiData, setLokasiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Panggil API saat komponen mount
    lokasiAPI
      .fetch()
      .then((data) => {
        // Data dari API kemungkinan array objek
        setLokasiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data ulasan:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p>Loading ulasan...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20">
      {/* Judul Halaman */}
      <h1 className="mb-4 text-center text-4xl font-extrabold text-gray-900">
        Lokasi Mobilin
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
        Temukan lokasi terdekat untuk servis mobil, perawatan, atau pengambilan
        kendaraan dengan layanan terbaik dari Mobilin.
      </p>

      {/* Section Experience Center */}
      <div className="mx-auto mb-10 max-w-4xl rounded-2xl bg-white p-6 shadow-md">
        <h2 className="mb-2 text-2xl font-bold text-yellow-600">Lokasi Kami</h2>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">
          Experience Center
        </h3>
        <p className="mb-4 text-gray-600">
          Kunjungi one-stop center kami, tempat di mana Anda bisa membeli,
          menjual, test drive, dan tukar tambah mobil hanya dalam satu
          kunjungan.
        </p>
        <ul className="list-inside list-disc space-y-1 text-gray-600">
          <li>Jadwalkan inspeksi atau kunjungi langsung</li>
          <li>Test Drive GRATIS</li>
          <li>Ambil unit sendiri atau minta diantar ke rumah</li>
          <li>Konsultasi dan tukar tambah</li>
          <li>Inspeksi kendaraan gratis</li>
        </ul>
      </div>

      {/* Daftar Lokasi */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lokasiData.map((lokasi, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 flex items-center gap-4">
              <Car className="text-gray-900" size={32} />
              <h2 className="text-xl font-semibold text-gray-800">
                {lokasi.nama}
              </h2>
            </div>
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="mt-1 text-blue-500" size={18} />
              <p className="text-sm">{lokasi.alamat}</p>
            </div>
            <p className="mt-2 text-sm text-gray-500">Jarak: {lokasi.jarak}</p>

            <Link
              key={lokasi.id_lokasi}
              to={`/karir/${lokasi.id_lokasi}`}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-sm text-white transition hover:bg-yellow-500"
            >
              Lihat Detail
              <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
