import React from 'react';

const ulasanData = [
  {
    rating: 5,
    kategori: 'Other',
    judul: 'Perbanyak pilihan kendaraan',
    isi: 'Perbanyak pilihan kendaraan',
    nama: 'Carsomer778',
    detail: '2019 Honda HR-V SE 1.5 Auto',
    lokasi: 'Carsome CARSOME Bekasi Siliwangi',
    tanggal: '30 Mar 2024'
  },
  {
    rating: 5,
    kategori: 'Other',
    judul: 'Mantapp lahh pokonya',
    isi: 'Mantapp lahh pokonya',
    nama: 'Ade Atikoh',
    detail: '2019 Daihatsu TERIOS X DLX 1.5 Manual',
    lokasi: 'Carsome CARSOME Tangerang Selatan',
    tanggal: '02 Mar 2024'
  },
  {
    rating: 4.5,
    kategori: 'Other',
    judul: 'Perbanyak stok mobil',
    isi: 'Perbanyak stok mobil',
    nama: 'Muhammad Resya Elsaya',
    detail: '2018 Honda CR-V TURBO PRESTIGE 1.5 Auto',
    lokasi: 'Carsome CARSOME Tangerang Selatan',
    tanggal: '22 Feb 2024'
  }
];

const Bintang = ({ jumlah }) => {
  const full = Math.floor(jumlah);
  const half = jumlah % 1 !== 0;
  const stars = [];
  for (let i = 0; i < full; i++) {
    stars.push(<svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 inline-block" stroke="none"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896 4.666 23.172l1.4-8.174L.132 9.21l8.2-1.192z"/></svg>);
  }
  if (half) {
    stars.push(<svg key="half" xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" className="w-5 h-5 inline-block"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.174L12 18.896V.587z"/></svg>);
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const Ulasan = () => {
  return (
    <section className="bg-[#12325B] py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Ulasan dari Pelanggan Kami</h2>
          <p className="text-lg">Temukan apa yang dikatakan pelanggan CARSOME yang sudah membeli mobil</p>
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
          <a href="#" className="text-blue-200 underline">Lihat lebih banyak ulasan</a>
        </div>
      </div>
    </section>
  );
};

export default Ulasan;
