import React from "react";
import { Link } from "react-router-dom";

export default function SearchCar() {
  return (
    <div className="mb-10 p-4 text-gray-100 sm:p-6 md:p-8">
      <div className="rounded-lg border-gray-700 bg-gray-700 p-4 shadow-xl sm:p-6">
        <div className="mb-3 text-yellow-500">
          <Link
            to="/cars"
            className="font-[Outfit] text-xl font-bold sm:text-2xl md:text-3xl"
          >
            Beli Mobil
          </Link>
          <p className="mt-2 text-xs text-gray-400 sm:text-sm">
            Temukan mobil impian Anda dari berbagai merek dan kategori.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Section */}
          <div>
            <label className="mb-2 block text-xs text-gray-300 sm:text-sm">
              Pencarian Mobil
            </label>
            <input
              type="text"
              placeholder="Cari berdasarkan Merek, Model, atau Kata Kunci"
              className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-sm text-gray-100 placeholder-gray-400 sm:text-base"
            />
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Pilih kategori yang sesuai dengan kebutuhan Anda:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                "Pilihan Favorit",
                "Mobil Keluarga",
                "TDP Rendah",
                "KM Rendah",
              ].map((label) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-lg bg-yellow-500 transition-transform hover:scale-110"
                >
                  <img
                    src={`/image/kategori_mobil/${label.toLowerCase()}.png`}
                    alt={label}
                    className="mb-2 h-20 w-30"
                  />
                  <span className="text-center font-medium text-black">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-400 sm:text-sm">
              Pilih berdasarkan merek:
            </p>
            <div className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {[
                "Honda",
                "Toyota",
                "Suzuki",
                "Nissan",
                "Mitsubishi",
                "Daihatsu",
              ].map((brand) => (
                <div key={brand} className="group text-center">
                  <img
                    src={`/image/car_logo/${brand.toLowerCase()}.png`}
                    alt={brand}
                    className="mx-auto h-10 w-10 transition-transform group-hover:scale-110"
                  />
                  <p className="text-xs text-gray-300 group-hover:text-white sm:text-sm">
                    {brand}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="rounded-md border border-gray-700 bg-gray-800 p-4 shadow-lg sm:p-6">
            <p className="mb-4 text-base font-bold text-gray-100 sm:text-lg">
              Jual Mobil Anda
            </p>
            <label className="mb-2 block text-xs text-gray-300 sm:text-sm">
              Merek Mobil
            </label>
            <select className="mb-4 w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-sm text-gray-100 sm:text-base">
              <option value="">Pilih Merek Mobil</option>
            </select>
            <label className="mb-2 block text-xs text-gray-300 sm:text-sm">
              Model Mobil
            </label>
            <select className="mb-4 w-full rounded-md border border-gray-700 bg-gray-900 p-3 text-sm text-gray-100 sm:text-base">
              <option value="">Pilih Model Mobil</option>
            </select>
            <button className="w-full rounded-md bg-yellow-500 p-3 text-sm font-bold text-gray-900 hover:bg-yellow-600 sm:text-base">
              Mulai Disini
            </button>
            <p className="mt-4 text-xs text-gray-400">
              Dengan melanjutkan, saya setuju dengan{" "}
              <span className="text-yellow-500">Kebijakan Privasi</span> &{" "}
              <span className="text-yellow-500">Ketentuan Penggunaan</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
