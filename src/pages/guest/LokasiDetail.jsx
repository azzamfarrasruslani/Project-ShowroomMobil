import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";
import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { lokasiAPI } from "../../services/lokasiAPI";

export default function LokasiDetail() {
  const { id_lokasi } = useParams(); // pastikan :id_lokasi sesuai di Route
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
          setError("Lokasi tidak ditemukan");
          setData(null);
        } else {
          setData(res);
          setError(null);
        }
      })
      .catch(() => {
        setError("Gagal mengambil data lokasi");
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id_lokasi]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <p>Loading data lokasi...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">{error}</h1>
        <p
          className="text-gray-600 cursor-pointer hover:underline"
          onClick={() => navigate("/lokasi-kami")}
        >
          Kembali ke halaman lokasi
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20">
      <div className="max-w-3xl mx-auto rounded-2xl bg-white p-8 shadow-md">
        <Link
          to="/lokasi-kami"
          className="mb-6 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-sm text-white transition hover:bg-yellow-400"
        >
          <ArrowLeft size={18} />
          Kembali ke Daftar Lokasi
        </Link>

        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          📍 {lokasi.nama}
        </h1>

        <div className="flex items-start gap-2 text-gray-700 mb-3">
          <MapPin className="mt-1 text-blue-500" size={18} />
          <p>{lokasi.alamat}</p>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Jarak dari lokasi Anda: <strong>{lokasi.jarak}</strong>
        </p>

        <div className="space-y-3 text-gray-700 text-sm">
          <p className="flex items-center gap-2">
            <Clock className="text-blue-500" size={18} />
            <strong>Jam Operasional:</strong>{" "}
            {lokasi.jam_operasional || "Setiap hari, 08:00 - 17:00"}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="text-blue-500" size={18} />
            <strong>Telepon:</strong> {lokasi.telepon || "0812-3456-7890"}
          </p>
          <p>
            <strong>Layanan Tersedia:</strong>{" "}
            {lokasi.layanan || "Servis, Jual Beli, Tukar Tambah"}
          </p>
        </div>

        {/* Tampilkan iframe jika tersedia */}
        {lokasi.iframe && (
          <div className="mt-6 overflow-hidden rounded-lg">
            <iframe
              src={lokasi.iframe}
              title={`Peta ${lokasi.nama}`}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-md border"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
