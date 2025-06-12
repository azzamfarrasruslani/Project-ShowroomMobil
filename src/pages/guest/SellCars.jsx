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

      <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col-reverse items-center gap-10 px-4 md:flex-row md:gap-20">
        {/* Kiri: Konten Teks */}
        <div className="space-y-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">Kenapa Pilih MOBILIN?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="mb-1 text-lg font-semibold">Proses Mudah & Tanpa Repot</h4>
              <p>Dapatkan pengalaman yang mudah & nyaman mulai dari proses inspeksi mobil secara gratis hingga proses kepengurusan semua dokumen Anda.</p>
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">Terpercaya & Aman</h4>
              <p>Inspektor profesional kami melakukan pemeriksaan mobil secara menyeluruh untuk mengetahui harga yang sesuai dengan kondisi mobil Anda.</p>
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">Penawaran Terbaik</h4>
              <p>Kami memberikan harga yang sesuai dan kami pastikan memberikan penawaran terbaik untuk Anda.</p>
            </div>
            <div>
              <h4 className="mb-1 text-lg font-semibold">Pembayaran Cepat</h4>
              <p>Kami tidak main-main. Setelah kesepakatan dibuat, kami membayar mobil Anda hanya dalam 24 jam*</p>
            </div>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/image/sell-car-pilihkami.png"
            alt="Kenapa Pilih Mobilin"
            className="rounded-lg w-full max-w-md shadow-lg"
          />
        </div>
      </div>
    </section>

      <StatistikSection />

      {/* <ContactSection /> */}

    </div>
  );
}
