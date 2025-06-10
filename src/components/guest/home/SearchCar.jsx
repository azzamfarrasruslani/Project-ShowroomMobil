
import React from "react";
import { Link } from "react-router-dom";

export default function SearchCar() {
  return (
    <div className="mb-10  p-4 sm:p-6 md:p-8 text-gray-100">
      <div className="rounded-lg border-gray-700 bg-gray-700 p-4 sm:p-6 shadow-xl">
        <div className="mb-3 text-yellow-600">
          <Link to="/cars" className="font-[Outfit] text-xl sm:text-2xl md:text-3xl font-bold">
            Beli Mobil
          </Link>
          <p className="mt-2 text-xs sm:text-sm text-gray-400">
            Temukan mobil impian Anda dari berbagai merek dan kategori.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <label className="mb-2 block text-xs sm:text-sm text-gray-300">Pencarian Mobil</label>
            <input
              type="text"
              placeholder="Cari berdasarkan Merek, Model, atau Kata Kunci"
              className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm sm:text-base text-gray-100 placeholder-gray-400"
            />
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              Pilih kategori yang sesuai dengan kebutuhan Anda:
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Pilihan Favorit", "Mobil Keluarga", "TDP Rendah", "KM Rendah"].map((label) => (
                <img
                  key={label}
                  src={`/image/car_logo/${label.toLowerCase()}.png`}
                  alt={label}
                  className="mx-auto h-10 w-10 transition-transform hover:scale-110"
                />
              ))}
            </div>
            <p className="mt-6 text-xs sm:text-sm text-gray-400">
              Pilih berdasarkan merek:
            </p>
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-4">
              {["Honda", "Toyota", "Suzuki", "Nissan", "Mitsubishi", "Daihatsu"].map((brand) => (
                <div key={brand} className="group text-center">
                  <img
                    src={`/image/car_logo/${brand.toLowerCase()}.png`}
                    alt={brand}
                    className="mx-auto h-10 w-10 transition-transform group-hover:scale-110"
                  />
                  <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                    {brand}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="rounded-md border border-gray-700 bg-gray-800 p-4 sm:p-6 shadow-lg">
            <p className="mb-4 text-base sm:text-lg font-bold text-gray-100">
              Jual Mobil Anda
            </p>
            <label className="mb-2 block text-xs sm:text-sm text-gray-300">Merek Mobil</label>
            <select className="mb-4 w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-sm sm:text-base text-gray-100">
              <option value="">Pilih Merek Mobil</option>
            </select>
            <label className="mb-2 block text-xs sm:text-sm text-gray-300">Model Mobil</label>
            <select className="mb-4 w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-sm sm:text-base text-gray-100">
              <option value="">Pilih Model Mobil</option>
            </select>
            <button className="w-full rounded-md bg-yellow-500 p-3 text-sm sm:text-base font-bold text-gray-900 hover:bg-yellow-600">
              Mulai Disini
            </button>
            <p className="mt-4 text-xs text-gray-400">
              Dengan melanjutkan, saya setuju dengan{' '}
              <span className="text-yellow-500">Kebijakan Privasi</span> &{' '}
              <span className="text-yellow-500">Ketentuan Penggunaan</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}