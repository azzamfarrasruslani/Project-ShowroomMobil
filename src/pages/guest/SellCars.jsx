import { Contact } from "lucide-react";
import HeroSection from "../../components/guest/sellcars/HeroSection";
import StatistikSection from "../../components/guest/sellcars/StatistikSection";
import ContactSection from "../../components/guest/sellcars/ContactSection";

export default function SellCar() {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />

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
            <h2 className="text-2xl font-bold">Kenapa Pilih MOBILIN?</h2>
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

      <StatistikSection />

      <ContactSection />

    </div>
  );
}
