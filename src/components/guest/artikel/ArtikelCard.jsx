import { useState, useEffect } from "react";
import dataArtikel from "../../../data/data_artikel.json";
import { Link } from "react-router-dom";
import { Eye, Pen } from "lucide-react";

// Ambil semua kategori unik dari data
const getKategoriUnik = (data) => {
  const semua = ["Semua"];
  const kategoriLain = [...new Set(data.map((item) => item.kategori))];
  return semua.concat(kategoriLain);
};

export default function ArtikelCard() {
  const [artikel] = useState(dataArtikel);
  const [tabAktif, setTabAktif] = useState("Semua");
  const [page, setPage] = useState(1);
  const itemPerPage = 9;

  const kategoriUnik = getKategoriUnik(dataArtikel);

  // Reset halaman saat tab berubah
  useEffect(() => {
    setPage(1);
  }, [tabAktif]);

  // Filter dan paginasi artikel
  const artikelTerfilter =
    tabAktif === "Semua"
      ? artikel
      : artikel.filter((item) => item.kategori === tabAktif);


      
  const artikelDitampilkan = artikelTerfilter.slice(0, page * itemPerPage);

  return (
    <div className="p-6">
      {/* Tab Navigasi */}
      <div className="mb-6 flex flex-wrap gap-3">
        {kategoriUnik.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setTabAktif(kategori)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              tabAktif === kategori
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {/* Daftar Artikel */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artikelDitampilkan.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={item.gambar}
                alt={item.judul_artikel}
                className="h-48 w-full object-cover transition duration-300 rounded-t-xl"
              />
              <span className="absolute top-3 left-3 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 shadow">
                {item.kategori}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 transition group-hover:text-blue-600">
                  {item.judul_artikel}
                </h2>
                <p className="mt-1 line-clamp-3 text-sm text-gray-600">
                  {item.pendahuluan}
                </p>
              </div>

              <div className="space-y-1 text-xs text-gray-500">
                <div className="flex items-center justify-between">
                  <span>
                    {new Date(item.tanggal_publikasi).toLocaleDateString(
                      "id-ID",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {item.jumlah_view}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Pen className="h-4 w-4" />
                  {item.penulis}
                </div>
              </div>

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

              <Link
                to={`/artikel/${item.id}`}
                className="mt-4 inline-block w-full rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-yellow-600"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Jika tidak ada artikel */}
      {artikelTerfilter.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          Tidak ada artikel pada kategori ini.
        </div>
      )}

      {/* Tombol Next */}
      {artikelDitampilkan.length < artikelTerfilter.length && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="rounded-md bg-gray-900 px-6 py-2 text-white text-sm font-medium transition hover:bg-yellow-600"
          >
            Tampilkan Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}
