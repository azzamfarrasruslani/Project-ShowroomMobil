import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { karyawanAPI } from "../../../services/karyawanAPI";
const Team = () => {
  // const karyawanData = [
  //   {
  //     id_karyawan: 1,
  //     nama: "Tom Leathes",
  //     jabatan: "CEO & Pendiri",
  //     foto: "/images/team/tom_leathes.jpg",
  //     deskripsi:
  //       "Memimpin visi Mobilin untuk mengubah cara orang menjual dan membeli mobil.",
  //     email: "tom.leathes@example.com",
  //     tanggal_join: "2015-01-01",
  //   },
  //   {
  //     id_karyawan: 2,
  //     nama: "Harry Jones",
  //     jabatan: "Co-Pendiri",
  //     foto: "/images/team/harry_jones.jpg",
  //     deskripsi:
  //       "Berperan penting dalam pengembangan strategi produk dan inovasi teknologi Mobilin.",
  //     email: "harry.jones@example.com",
  //     tanggal_join: "2015-01-01",
  //   },
  //   {
  //     id_karyawan: 3,
  //     nama: "Liz Kistruck",
  //     jabatan: "Kepala Keuangan (CFO)",
  //     foto: "/images/team/liz_kistruck.jpg",
  //     deskripsi:
  //       "Mengelola keuangan dan mendukung pertumbuhan bisnis Mobilin secara berkelanjutan.",
  //     email: "liz.kistruck@example.com",
  //     tanggal_join: "2016-03-15",
  //   },
  // ];

   const [karyawanData, setKaryawanData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Panggil API saat komponen mount
      karyawanAPI
        .fetch()
        .then((data) => {
          // Data dari API kemungkinan array objek
          setKaryawanData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Gagal mengambil data ulasan:", error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return (
        <div className="py-12 text-center">
          <p>Loading ulasan...</p>
        </div>
      );
    }

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Temui Orang-Orang Hebat di Balik Mobilin
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Kami adalah tim inovator, pemecah masalah, dan pemikir besar yang
        bertanya: “Bukankah seharusnya jual beli mobil itu mudah?” Dan kami
        mewujudkannya. Mobilin hadir dengan semangat tim untuk menghadirkan
        pengalaman jual beli mobil bekas yang aman, praktis, dan terpercaya di
        Indonesia.
      </p>

      <div className="grid max-w-6xl mx-auto gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {karyawanData.map((karyawan) => (
          <div
            key={karyawan.id_karyawan}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <img
              src={karyawan.foto}
              alt={karyawan.nama}
              className="mx-auto mb-4 h-28 w-28 rounded-full object-cover border-2 border-gray-900"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {karyawan.nama}
            </h3>
            <p className="text-gray-900 text-sm mb-2">{karyawan.jabatan}</p>
            <p className="text-sm text-gray-600 mb-4">{karyawan.deskripsi}</p>
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
