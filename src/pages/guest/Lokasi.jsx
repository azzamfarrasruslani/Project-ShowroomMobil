import { MapPin, Car, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lokasiAPI } from "../../services/lokasiAPI";
import Loading from "../../components/guest/Loading";
import Error from "../../components/guest/Error";
import EmptyState from "../../components/guest/EmptyState";

export default function Lokasi() {
  const [lokasiData, setLokasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLowongan = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await lokasiAPI.fetch();
        setLokasiData(data);
      } catch (error) {
        console.error("Gagal mengambil data lowongan:", error);
        setError("Gagal mengambil data lowongan");
      } finally {
        setLoading(false);
      }
    };

    loadLowongan();
  }, []);

  if (loading) return <Loading message="Memuat data lokasi..." />;
  if (error) return <Error message={error} />;
  if (lokasiData.length === 0)
    return <EmptyState message="Belum ada lokasi yang tersedia." />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20">
      <div className="relative mb-16 h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-xl">
        <img
          src="/image/lokasi.png" // Ganti ke ilustrasi showroom atau peta lokasi
          alt="Lokasi Mobilin"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 px-6 text-center text-white backdrop-blur-xs">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-300">
            🚗 Jaringan Nasional Mobilin
          </div>
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Temukan <span className="text-yellow-400">Lokasi Terdekat</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
            Showroom & layanan Mobilin kini hadir di berbagai kota. Dapatkan
            pengalaman jual beli mobil yang cepat, aman, dan terpercaya!
          </p>
          <Link
            to="#daftar-lokasi"
            className="mt-6 inline-block rounded-lg bg-yellow-500 px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-yellow-400"
          >
            Lihat Semua Lokasi
          </Link>
        </div>
      </div>

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

            {/* Tambahkan iframe jika tersedia */}
            {lokasi.iframe && (
              <div className="mt-4 overflow-hidden rounded-lg">
                <iframe
                  src={lokasi.iframe}
                  title={`Peta ${lokasi.nama}`}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-md border"
                ></iframe>
              </div>
            )}

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
