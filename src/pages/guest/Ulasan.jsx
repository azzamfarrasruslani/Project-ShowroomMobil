import React from "react";

const ulasanData = [
  {
    nama: "Carsome778",
    tanggal: "30 Mar 2024",
    ulasan: "Perbanyak pilihan kendaraan",
    mobil: "2019 Honda BR-V E 1.5 Auto",
    lokasi: "Carsome CARSOME Bekasi Siliwangi",
    rating: 5,
  },
  {
    nama: "Ade Kioh",
    tanggal: "02 Mar 2024",
    ulasan: "Mantap lah pokonya",
    mobil: "2019 Daihatsu TERIOS X DLX 1.5 Manual",
    lokasi: "Carsome CARSOME Tangerang Selatan",
    rating: 5,
  },
  {
    nama: "Muhammad Heray Elasya",
    tanggal: "22 Feb 2024",
    ulasan: "Perbanyak stok mobil",
    mobil: "2018 Honda BRIO TEMPE RSPEC 1.5 Auto",
    lokasi: "Carsome CARSOME Tangerang Selatan",
    rating: 5,
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="w-4 h-4 text-yellow-400 inline-block mr-1"
  >
    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
  </svg>
);

const Ulasan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Ulasan dari Pelanggan Kami</h2>
        <div className="flex justify-center items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
          <span className="text-gray-600 ml-2">4.8 Bintang dari 171 pelanggan</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ulasanData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <div className="flex items-center mb-2">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} />
              ))}
              <span className="ml-auto text-sm text-gray-500">{item.tanggal}</span>
            </div>
            <p className="font-semibold mb-2">“{item.ulasan}”</p>
            <p className="text-sm text-gray-600 mb-1">{item.mobil}</p>
            <p className="text-xs text-gray-500">{item.lokasi}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 text-blue-600 font-semibold hover:underline">
          Lihat Lebih Banyak Ulasan
        </button>
      </div>
    </div>
  );
};

export default Ulasan;
