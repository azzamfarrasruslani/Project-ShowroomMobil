/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import dataArtikel from "../../data/data_artikel.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Pen, Eye, StickyNote, Send } from "lucide-react";

export default function ArtikelDetail() {
  const { id } = useParams();
  const artikel = dataArtikel.find((item) => item.id.toString() === id);
  const [nama, setNama] = useState("");
  const [komentar, setKomentar] = useState("");
  const [daftarKomentar, setDaftarKomentar] = useState([]);

  if (!artikel) return <div className="p-6">Artikel tidak ditemukan.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !komentar) return;

    setDaftarKomentar((prev) => [...prev, { nama, isi: komentar }]);
    setNama("");
    setKomentar("");
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Artikel Utama */}
      <div className="lg:col-span-2 space-y-6">
        <img
          src={artikel.gambar}
          alt={artikel.judul_artikel}
          className="w-full rounded-2xl object-cover shadow-lg"
        />

        <h1 className="text-4xl font-bold text-gray-800 leading-snug">{artikel.judul_artikel}</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
          <span className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {artikel.tanggal_publikasi}
          </span>
          <span className="flex items-center gap-1">
            <Pen className="w-4 h-4" />
            {artikel.penulis}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {artikel.jumlah_view} views
          </span>
          <span className="px-2 py-1 rounded-full text-blue-700 bg-blue-100 font-semibold text-xs">
            {artikel.kategori}
          </span>
        </div>

        <hr className="border-t border-gray-200" />

        <p className="text-lg font-medium text-gray-700 leading-relaxed">{artikel.pendahuluan}</p>

        <div className="text-base text-gray-800 leading-loose whitespace-pre-line">{artikel.isi}</div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <p className="text-gray-800 font-semibold flex items-center gap-1">
            <StickyNote className="w-4 h-4" />
            Kesimpulan:
          </p>
          <p className="text-gray-700 mt-1">{artikel.kesimpulan}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {artikel.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Form Komentar */}
        <div className="pt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Tinggalkan Komentar</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Tulis komentar Anda..."
              className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              <Send className="w-4 h-4" />
              Kirim Komentar
            </button>
          </form>

          {/* Daftar Komentar */}
          {daftarKomentar.length > 0 && (
            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-gray-700">Komentar ({daftarKomentar.length})</h4>
              {daftarKomentar.map((kom, idx) => (
                <div key={idx} className="border-b pb-3">
                  <p className="text-sm font-medium text-gray-800">{kom.nama}</p>
                  <p className="text-sm text-gray-600">{kom.isi}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Banner Promosi */}
      <div className="space-y-4">
        <div className="top-20 space-y-4">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Promo Spesial!</h3>
            <img
              src="/image/promo-banner.jpg"
              alt="Promo"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-sm text-gray-600">
              Dapatkan diskon hingga 50% untuk pembelian mobil bekas bulan ini.
            </p>
            <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg text-sm transition">
              Lihat Promo
            </button>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Event Terbaru</h3>
            <p className="text-sm text-gray-600">
              Ikuti webinar gratis tentang tips membeli mobil bekas yang aman dan cerdas.
            </p>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
