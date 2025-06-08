import React, { useEffect, useState } from "react";
import { ulasanAPI } from "../../services/ulasanAPI";
import Loading from "../../components/guest/Loading";
import Error from "../../components/guest/Error";
import EmptyState from "../../components/guest/EmptyState";

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="mr-1 inline-block h-4 w-4 text-yellow-400"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
  </svg>
);

const Ulasan = () => {
  const [ulasanData, setUlasanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUlasan = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await ulasanAPI.fetch();
        setUlasanData(data);
      } catch (error) {
        console.error("Gagal mengambil data lowongan:", error);
        setError("Gagal mengambil data lowongan");
      } finally {
        setLoading(false);
      }
    };

    loadUlasan();
  }, []);

  if (loading) return <Loading message="Memuat data lokasi..." />;
  if (error) return <Error message={error} />;
  if (ulasanData.length === 0)
    return <EmptyState message="Belum ada lokasi yang tersedia." />;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold">Ulasan dari Pelanggan Kami</h2>
        <div className="mt-2 flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
          <span className="ml-2 text-gray-600">
            4.8 Bintang dari 171 pelanggan
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ulasanData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-4 shadow transition hover:shadow-md"
          >
            <div className="mb-2 flex items-center">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} />
              ))}
              <span className="ml-auto text-sm text-gray-500">
                {new Date(item.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="mb-2 font-semibold">“{item.isi || item.ulasan}”</p>
            <p className="mb-1 text-sm text-gray-600">
              {item.detail || item.mobil}
            </p>
            <p className="text-xs text-gray-500">{item.lokasi}</p>
            <p className="mt-2 font-semibold">{item.nama}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 font-semibold text-blue-600 hover:underline">
          Lihat Lebih Banyak Ulasan
        </button>
      </div>
    </div>
  );
};

export default Ulasan;
