import { ArrowLeft, MapPin } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { lokasiAPI } from "../../services/lokasiAPI";


export default function LokasiDetail() {
 const { id_lokasi } = useParams();

  const navigate = useNavigate();

  const [lokasi, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    lokasiAPI
      .fetchById(id_lokasi)
      .then((res) => {
        if (!res) {
          setError("Lowongan tidak ditemukan");
          setData(null);
        } else {
          setData(res);
          setError(null);
        }
      })
      .catch(() => {
        setError("Gagal mengambil data lowongan");
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id_lokasi]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <p>Loading data lowongan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">{error}</h1>
        <p className="text-gray-600 cursor-pointer hover:underline" onClick={() => navigate("/karir")}>
          Kembali ke halaman karir
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
