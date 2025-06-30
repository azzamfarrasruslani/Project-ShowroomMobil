/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import dataArtikel from "../../data/data_artikel.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Pen, Eye, StickyNote, Send } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="mx-auto mb-10 grid max-w-6xl grid-cols-1 gap-8 p-6 lg:grid-cols-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Artikel Utama */}
      <div className="space-y-6 lg:col-span-2">
        <img
          src={artikel.gambar}
          alt={artikel.judul_artikel}
          className="w-full rounded-2xl object-cover shadow-lg"
        />

        <h1 className="text-4xl leading-snug font-bold text-gray-800">
          {artikel.judul_artikel}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {artikel.tanggal_publikasi}
          </span>
          <span className="flex items-center gap-1">
            <Pen className="h-4 w-4" />
            {artikel.penulis}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {artikel.jumlah_view} views
          </span>
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
            {artikel.kategori}
          </span>
        </div>

        <hr className="border-t border-gray-200" />

        <p className="text-lg leading-relaxed font-medium text-gray-700">
          {artikel.pendahuluan}
        </p>

        <div className="text-base leading-loose whitespace-pre-line text-gray-800">
          {artikel.isi}
        </div>

        <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4">
          <p className="flex items-center gap-1 font-semibold text-gray-800">
            <StickyNote className="h-4 w-4" />
            Kesimpulan:
          </p>
          <p className="mt-1 text-gray-700">{artikel.kesimpulan}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {artikel.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Form Komentar */}
        <div className="pt-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Tinggalkan Komentar
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Tulis komentar Anda..."
              className="w-full rounded-lg border px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={komentar}
              onChange={(e) => setKomentar(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
              Kirim Komentar
            </button>
          </form>

          {/* Daftar Komentar */}
          {daftarKomentar.length > 0 && (
            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-gray-700">
                Komentar ({daftarKomentar.length})
              </h4>
              {daftarKomentar.map((kom, idx) => (
                <div key={idx} className="border-b pb-3">
                  <p className="text-sm font-medium text-gray-800">
                    {kom.nama}
                  </p>
                  <p className="text-sm text-gray-600">{kom.isi}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Banner Promosi */}
      <div className="space-y-4">
        {/* Judul Promosi */}
        <h2 className="text-xl font-bold text-gray-800">
          Promo Spesial Bulan Ini
        </h2>

        <div className="top-20 space-y-4">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Gambar */}
            <div className="w-full">
              <img
                src="/image/promo.png"
                alt="Gratis Ongkir"
                className="w-full object-contain"
              />
            </div>

            {/* Teks dan Tombol */}
            <div className="p-4 text-gray-800">
              <h3 className="mb-1 text-base font-semibold text-gray-800">
                🎉 Gratis Ongkir!
              </h3>
              <p className="text-sm text-gray-600">
                Berlaku untuk seluruh pembelian mobil bekas di bulan ini, tanpa
                biaya kirim ke seluruh Jawa.
              </p>
              <Link
                to="/buy-cars"
                className="mt-3 block w-full rounded-lg bg-gray-900 py-2 text-center text-sm text-white transition hover:bg-yellow-500"
              >
                Klaim Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
