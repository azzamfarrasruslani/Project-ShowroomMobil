import { useParams, useNavigate } from "react-router-dom";
import dataArtikel from "../../data/data_artikel.json";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ArtikelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artikel = dataArtikel.find((item) => item.id.toString() === id);

  if (!artikel) return <div className="p-6">Artikel tidak ditemukan.</div>;

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Gambar Utama */}
      <img
        src={artikel.gambar}
        alt={artikel.judul_artikel}
        className="w-full rounded-2xl object-cover shadow-lg"
      />

      {/* Judul Artikel */}
      <h1 className="text-4xl font-bold text-gray-800 leading-snug">{artikel.judul_artikel}</h1>

      {/* Info Meta */}
      <div className="flex flex-wrap items-center text-sm text-gray-600 gap-3">
        <span>🗓 {artikel.tanggal_publikasi}</span>
        <span>✍️ {artikel.penulis}</span>
        <span>👁 {artikel.jumlah_view} views</span>
        <span className="px-2 py-1 rounded-full text-blue-700 bg-blue-100 font-semibold text-xs">
          {artikel.kategori}
        </span>
      </div>

      {/* Garis pemisah */}
      <hr className="border-t border-gray-200" />

      {/* Pendahuluan */}
      <p className="text-lg font-medium text-gray-700 leading-relaxed">
        {artikel.pendahuluan}
      </p>

      {/* Isi artikel */}
      <div className="text-base text-gray-800 leading-loose whitespace-pre-line">
        {artikel.isi}
      </div>

      {/* Kesimpulan */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <p className="text-gray-800 font-semibold">📌 Kesimpulan:</p>
        <p className="text-gray-700 mt-1">{artikel.kesimpulan}</p>
      </div>

      {/* Tags */}
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

      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
      >
        ← Kembali
      </button>
    </motion.div>
  );
}
