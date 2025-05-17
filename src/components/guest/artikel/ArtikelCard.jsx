import { useState } from "react";
import dataArtikel from "../../../data/data_artikel.json"; 

export default function ArtikelCard() {
  const [artikel] = useState(dataArtikel);

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {artikel.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 group flex flex-col"
        >
          <div className="relative">
            <img
              src={item.gambar}
              alt={item.judul_artikel}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
            <span className="absolute top-3 left-3 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full shadow">
              {item.kategori}
            </span>
          </div>

          {/* Kontainer konten yang fleksibel */}
          <div className="flex-1 flex flex-col p-5 space-y-3">
            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {item.judul_artikel}
            </h2>
            <p className="text-sm text-gray-600">{item.pendahuluan}</p>
            <div className="text-xs text-gray-500 flex justify-between items-center pt-2">
              <span>🗓 {item.tanggal_publikasi}</span>
              <span>👁 {item.jumlah_view}</span>
            </div>
            <div className="text-xs text-gray-400">
              ✍️ {item.penulis}
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded-full transition"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Tombol di bawah */}
            <button className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
