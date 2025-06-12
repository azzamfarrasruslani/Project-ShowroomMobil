export default function HeroSection() {
  return (
      <section className="relative min-h-screen py-12">
        <div className="absolute inset-0 z-0">
          <img
            src="/image/sell_car_hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative left-20 z-20 container mx-auto mt-20 flex h-full flex-col items-center justify-end px-4 md:flex-row">
          {/* Form */}
          <div className="mt-8 rounded-lg bg-white p-6 shadow-lg md:mt-0 md:w-1/2">
            <h2 className="mb-4 text-center text-xl font-semibold">
              Cek Harga Mobil Gratis!
            </h2>
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Merek Mobil</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Merek
                  </option>
                  <option>Toyota</option>
                  <option>Honda</option>
                  <option>Suzuki</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Model Mobil</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Model
                  </option>
                  <option>Avanza</option>
                  <option>Jazz</option>
                  <option>Ertiga</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tahun Mobil</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Tahun
                  </option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tipe Mobil</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Tipe
                  </option>
                  <option>MPV</option>
                  <option>SUV</option>
                  <option>Hatchback</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Jenis Mesin</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Mesin
                  </option>
                  <option>Bensin</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Transmisi</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    Pilih Transmisi
                  </option>
                  <option>Manual</option>
                  <option>Otomatis</option>
                </select>
              </div>

              {/* Checkbox Persetujuan */}
              <div className="col-span-full">
                <label className="flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm mt-1"
                    required
                  />
                  <span className="text-sm">
                    Dengan ini saya menyetujui{" "}
                    <a href="#" className="text-blue-500 underline">
                      syarat & ketentuan
                    </a>{" "}
                    serta kebijakan privasi yang berlaku.
                  </span>
                </label>
              </div>

              {/* Tombol Submit */}
              <div className="col-span-full">
                <button
                  type="submit"
                  className="btn btn-warning w-full font-semibold"
                >
                  Mulai Disini
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
}