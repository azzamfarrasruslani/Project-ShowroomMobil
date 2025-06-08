import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ulasanAPI } from "../../../services/ulasanAPI";
import Loading from "../Loading";
import Error from "../Error";
import EmptyState from "../EmptyState";

const Bintang = ({ jumlah }) => {
  const full = Math.floor(jumlah);
  const half = jumlah % 1 !== 0;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill="#facc15"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5"
        stroke="none"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896 4.666 23.172l1.4-8.174L.132 9.21l8.2-1.192z" />
      </svg>,
    );
  }
  if (half) {
    stars.push(
      <svg
        key="half"
        xmlns="http://www.w3.org/2000/svg"
        fill="#facc15"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896V.587z" />
      </svg>,
    );
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

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

        // Urutkan berdasarkan rating tertinggi → terendah
        const sorted = data.sort((a, b) => b.rating - a.rating);

        // Ambil hanya 3 teratas
        const top3 = sorted.slice(0, 3);

        setUlasanData(top3);
      } catch (error) {
        console.error("Gagal mengambil data ulasan:", error);
        setError("Gagal mengambil data ulasan");
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
    <section className="bg-gray-900 px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Ulasan dari Pelanggan Kami
          </h2>
          <p className="text-lg">
            Temukan apa yang dikatakan pelanggan MOBILIN yang sudah membeli
            mobil
          </p>
          <div className="mx-auto mt-3 h-1 w-10 bg-yellow-400" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ulasanData.map((ulasan, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-gray-800 shadow"
            >
              <div className="mb-3 flex justify-between">
                <Bintang jumlah={ulasan.rating} />
                <span className="text-sm text-gray-500">{ulasan.tanggal}</span>
              </div>
              <span className="mb-2 inline-block rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600">
                {ulasan.kategori}
              </span>
              <h3 className="mb-1 text-lg font-semibold">“{ulasan.judul}”</h3>
              <p className="mb-4 text-gray-600">{ulasan.isi}</p>
              <div className="text-sm text-gray-700">
                <p>{ulasan.nama}</p>
                <p>{ulasan.detail}</p>
                <p>{ulasan.lokasi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <NavLink
            to="/ulasan"
            className="ml-4 inline-block text-blue-200 underline"
          >
            Lihat lebih banyak ulasan
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Ulasan;
