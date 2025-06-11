export default function SellCar() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen py-12">
        {/* Background Image pakai <img> */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image/sell_car_hero.png"
            alt="Hero Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto flex h-full flex-col items-center left-20 mt-20 justify-end px-4 md:flex-row">
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

      {/* Step Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold">
            Pengalaman Penjualan Mobil Anda Jadi Bebas Ribet
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Jadwalkan Inspeksi Mobil Gratis",
              desc: "Isi data diri & dapatkan jadwal inspeksi mobil.",
            },
            {
              step: "2",
              title: "Inspeksi Mobil",
              desc: "Tim Inspektor melakukan pengecekan 175 titik.",
            },
            {
              step: "3",
              title: "Jual Mobil Anda",
              desc: "Pilih sistem penawaran terbaik sesuai kondisi mobil.",
            },
            {
              step: "4",
              title: "Pembayaran 2-4 Jam",
              desc: "Serahkan dokumen & nikmati pembayaran cepat.",
            },
          ].map((item, idx) => (
            <div key={idx} className="rounded bg-white p-6 text-left shadow">
              <div className="mb-4 flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 font-bold text-white">
                  {item.step}
                </div>
                <h3 className="ml-4 font-semibold">{item.title}</h3>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:flex-row">
          <div className="space-y-6 md:w-1/2">
            <h2 className="text-2xl font-bold">Kenapa Pilih CARSOME?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="mb-1 font-semibold">
                  Proses Mudah & Tanpa Repot
                </h4>
                <p>Semua proses diurus dari awal hingga akhir.</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Terpercaya & Aman</h4>
                <p>Pengecekan 175 titik oleh profesional.</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Penawaran Terbaik</h4>
                <p>Harga sesuai kondisi mobil Anda.</p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Pembayaran Cepat</h4>
                <p>Pembayaran 2-4 jam setelah transaksi selesai.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex h-80 w-full items-center justify-center rounded-lg bg-gray-300">
              {/* Tempatkan gambar ilustrasi di sini */}
              <p>Gambar Ilustrasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistic Section */}
      <section className="bg-yellow-400 py-16">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="mb-10 md:mb-0 md:w-1/2">
            <div className="flex h-80 w-full items-center justify-center rounded-lg bg-blue-500">
              {/* Tempatkan gambar peta Indonesia */}
              <p>Peta Indonesia</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center md:w-1/2">
            <div>
              <h3 className="text-3xl font-bold">100.000</h3>
              <p>transaksi tahunan</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p>pusat inspeksi</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">18 Juta</h3>
              <p>penawaran diberikan</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">13.000+</h3>
              <p>dealer terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">Kami Siap Membantu</h2>
        <button className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white">
          Buka WhatsApp
        </button>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold">
            Percayakan Pada Kami
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-white p-6 text-left shadow">
                <div className="mb-4 flex h-48 w-full items-center justify-center rounded bg-gray-300">
                  <p>Foto {i}</p>
                </div>
                <h4 className="mb-2 font-semibold">Nama Customer</h4>
                <p>
                  Testimoni singkat dari customer tentang proses jual mobil di
                  Carsome.
                </p>
                <a href="#" className="mt-2 block text-blue-500">
                  Baca selengkapnya
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
