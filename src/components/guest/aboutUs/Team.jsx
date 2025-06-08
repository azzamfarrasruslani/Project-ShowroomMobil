import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { karyawanAPI } from "../../../services/karyawanAPI";
import Loading from "../Loading";
import Error from "../Error";
import EmptyState from "../EmptyState";

const Team = () => {
  const [karyawanData, setKaryawanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadKaryawan = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await karyawanAPI.fetch();
        setKaryawanData(data);
      } catch (error) {
        console.error("Gagal mengambil data kayawan:", error);
        setError("Gagal mengambil data karwayan");
      } finally {
        setLoading(false);
      }
    };

    loadKaryawan();
  }, []);

  if (loading) return <Loading message="Memuat data karyawan..." />;
  if (error) return <Error message={error} />;
  if (karyawanData.length === 0)
    return <EmptyState message="Belum ada lokasi yang tersedia." />;

  return (
    <section className="bg-white px-4 py-16 text-center">
      <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
        Temui Orang-Orang Hebat di Balik Mobilin
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-gray-600">
        Kami adalah tim inovator, pemecah masalah, dan pemikir besar yang
        bertanya: “Bukankah seharusnya jual beli mobil itu mudah?” Dan kami
        mewujudkannya. Mobilin hadir dengan semangat tim untuk menghadirkan
        pengalaman jual beli mobil bekas yang aman, praktis, dan terpercaya di
        Indonesia.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {karyawanData.map((karyawan) => (
          <div
            key={karyawan.id_karyawan}
            className="rounded-xl bg-gray-50 p-6 shadow transition duration-300 hover:shadow-md"
          >
            <img
              src={karyawan.foto}
              alt={karyawan.nama}
              className="mx-auto mb-4 h-28 w-28 rounded-full border-2 border-gray-900 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {karyawan.nama}
            </h3>
            <p className="mb-2 text-sm text-gray-900">{karyawan.jabatan}</p>
            <p className="mb-4 text-sm text-gray-600">{karyawan.deskripsi}</p>
            <a
              href={`mailto:${karyawan.email}`}
              className="text-sm text-yellow-600 hover:underline"
            >
              {karyawan.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
