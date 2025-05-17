import { useState } from "react";
import dataArtikel from "../../../data/data_artikel.json";
import { Link } from "react-router-dom";
export default function ArtikelCard() {
  const [artikel] = useState(dataArtikel);

  return (
    <div className="grid min-h-screen grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {artikel.map((item, index) => (
        <div
          key={index}
          className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:shadow-2xl"
        >
          <div className="relative">
            <img
              src={item.gambar}
              alt={item.judul_artikel}
              className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 shadow">
              {item.kategori}
            </span>
          </div>

          {/* Kontainer konten yang fleksibel */}
          <div className="flex flex-1 flex-col space-y-3 p-5">
            <h2 className="text-lg font-semibold text-gray-800 transition group-hover:text-blue-600">
              {item.judul_artikel}
            </h2>
            <p className="text-sm text-gray-600">{item.pendahuluan}</p>
            <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
              <span>🗓 {item.tanggal_publikasi}</span>
              <span>👁 {item.jumlah_view}</span>
            </div>
            <div className="text-xs text-gray-400">✍️ {item.penulis}</div>
            <div className="flex flex-wrap gap-1 pt-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-800 transition hover:bg-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Tombol di bawah */}
            <Link
              to={`/artikel/${item.id}`} // gunakan id unik dari artikel
              className="mt-auto w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-white transition hover:bg-blue-600"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
