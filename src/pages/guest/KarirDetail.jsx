import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lowonganAPI } from "../../services/lowonganAPI";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Wallet,
  Calendar,
  FileText,
  BadgeCheck,
  Phone,
  Mail,
} from "lucide-react";
import Error from "../../components/guest/Error";

export default function KarirDetail() {
  const { id_lowongan } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    lowonganAPI
      .fetchById(id_lowongan)
      .then((res) => {
        if (!res) {
          setError("Lowongan tidak ditemukan");
        } else {
          setData(res);
        }
      })
      .catch(() => setError("Gagal mengambil data lowongan"))
      .finally(() => setLoading(false));
  }, [id_lowongan]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Loading data lowongan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <Error message={error} />
        <button
          onClick={() => navigate("/karir")}
          className="mt-4 text-blue-600 hover:underline"
        >
          Kembali ke halaman karir
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Tombol kembali */}
        <div
          className="mb-6 inline-flex items-center gap-2 text-blue-700 cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
          <span>Kembali</span>
        </div>

        {/* Card Detail */}
        <div className="rounded-xl bg-white p-8 shadow-md">
          <div className="mb-6">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
              <Briefcase size={18} className="text-yellow-700" />
              Detail Lowongan
            </div>
            <h1 className="mt-2 text-3xl font-extrabold text-gray-800">
              {data.posisi}
            </h1>
            <p className="text-gray-600">{data.perusahaan}</p>
          </div>

          {/* Info Umum */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="text-gray-700 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={18} className="text-gray-500" />
                <span>
                  {data.lokasi.kota} - {data.lokasi.alamat}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Briefcase size={18} className="text-gray-500" />
                {data.tipe_pekerjaan}
              </p>
              <p className="flex items-center gap-2">
                <Wallet size={18} className="text-gray-500" />
                {data.gaji.mata_uang} {data.gaji.minimal.toLocaleString()} -{" "}
                {data.gaji.maksimal.toLocaleString()} ({data.gaji.tipe})
              </p>
            </div>
            <div className="text-gray-700 space-y-2">
              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-gray-500" />
                Tanggal Posting: {data.tanggal_posting}
              </p>
              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-red-500" />
                Batas Lamaran: {data.batas_lamaran}
              </p>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="mt-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-800">
              <FileText size={20} className="text-gray-600" />
              Deskripsi Pekerjaan
            </h2>
            <p className="text-gray-700">{data.deskripsi}</p>
          </div>

          {/* Kualifikasi */}
          <div className="mt-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-800">
              <BadgeCheck size={20} className="text-yellow-500" />
              Kualifikasi
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {data.kualifikasi.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div className="mt-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold mb-2 text-gray-800">
              <Phone size={20} className="text-green-600" />
              Kontak
            </h2>
            <p className="text-gray-700 flex items-center gap-2">
              <Mail size={16} className="text-gray-500" />
              Email: {data.kontak.email}
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              Telepon: {data.kontak.telepon}
            </p>
          </div>

          {/* Tombol Lamar */}
          <div className="mt-10">
            <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-white font-semibold transition hover:bg-yellow-500">
              <Briefcase size={18} />
              Lamar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
