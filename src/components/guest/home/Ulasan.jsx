import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ulasanAPI } from "../../../services/ulasanAPI";

const Bintang = ({ jumlah }) => {
  const full = Math.floor(jumlah);
  const half = jumlah % 1 !== 0;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 inline-block" stroke="none">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896 4.666 23.172l1.4-8.174L.132 9.21l8.2-1.192z" />
      </svg>
    );
  }
  if (half) {
    stars.push(
      <svg key="half" xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 inline-block">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896V.587z" />
      </svg>
    );
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const Ulasan = () => {
  const [ulasanData, setUlasanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUlasan = async () => {
  try {
    const data = await ulasanAPI.fetchNotes();
    console.log('Response ulasan:', data);
    const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
    setUlasanData(sortedData);
  } catch (err) {
    console.error(err);
    setError('Gagal mengambil data ulasan');
  } finally {
    setLoading(false);
  }
};


    fetchUlasan();
  }, []);

  if (loading) return <p className="text-center text-white py-16">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-16">{error}</p>;

  return (
    <section className="bg-gray-900 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Ulasan dari Pelanggan Kami</h2>
          <p className="text-lg">Temukan apa yang dikatakan pelanggan MOBILIN yang sudah membeli mobil</p>
          <div className="w-10 h-1 bg-yellow-400 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ulasanData.map((ulasan, index) => (
            <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow">
              <div className="flex justify-between mb-3">
                <Bintang jumlah={ulasan.rating} />
                <span className="text-sm text-gray-500">{ulasan.tanggal}</span>
              </div>
              <span className="inline-block px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-600 mb-2">{ulasan.kategori}</span>
              <h3 className="text-lg font-semibold mb-1">“{ulasan.judul}”</h3>
              <p className="text-gray-600 mb-4">{ulasan.isi}</p>
              <div className="text-sm text-gray-700">
                <p>{ulasan.nama}</p>
                <p>{ulasan.detail}</p>
                <p>{ulasan.lokasi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <NavLink to="/ulasan" className="inline-block ml-4 text-blue-200 underline">
            Lihat lebih banyak ulasan
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Ulasan;
