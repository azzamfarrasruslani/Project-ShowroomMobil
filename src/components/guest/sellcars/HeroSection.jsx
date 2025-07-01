import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen py-12">
      <div className="flex flex-col-reverse md:flex-col">
        {/* Gambar Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/sell_car_hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
       <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col items-center px-4 py-12 md:items-end md:justify-end">
          {/* Form */}
          <div className="mt-8 w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg md:mt-0">
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
              Cek Harga Mobil Gratis!
            </h2>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Merek Mobil */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Merek Mobil
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Merek</option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                </select>
              </div>

              {/* Model Mobil */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Model Mobil
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Model</option>
                  <option>Avanza</option>
                  <option>Jazz</option>
                  <option>Ertiga</option>
                </select>
              </div>

              {/* Tahun Mobil */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Tahun Mobil
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Tahun</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>

              {/* Tipe Mobil */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Tipe Mobil
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Tipe</option>
                  <option>MPV</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                </select>
              </div>

              {/* Jenis Mesin */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Jenis Mesin
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Mesin</option>
                  <option>Bensin</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                </select>
              </div>

              {/* Transmisi */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Transmisi
                </label>
                <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
                  <option value="">Pilih Transmisi</option>
                  <option>Manual</option>
                  <option>Otomatis</option>
                </select>
              </div>

              {/* Persetujuan */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400"
                    required
                  />
                  <span>
                    Dengan ini saya menyetujui{" "}
                    <Link to="/ketentuan-penggunaan" className="text-blue-500 underline">
                      syarat & ketentuan
                    </Link>{" "}
                    serta   <Link to="/kebijakan-privasi" className="text-blue-500 underline">
                    kebijakan privasi
                    </Link>{" "} yang berlaku.
                  </span>
                </label>
              </div>

              {/* Tombol Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-md bg-yellow-400 px-4 py-2 font-semibold text-white transition hover:bg-yellow-500"
                >
                  Mulai Disini
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
