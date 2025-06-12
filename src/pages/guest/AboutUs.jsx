/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icon from "../../lib/Icon";
import Team from "../../components/guest/aboutUs/Team";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-gray-800 md:px-10">
      {/* Header */}
      <motion.div
        className="mx-auto mb-16 max-w-5xl text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-yellow-600">
          Tentang <span className="text-gray-800">Mobilin</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Platform terpercaya untuk jual beli mobil bekas berkualitas, aman, dan
          transparan. Temukan mobil impianmu tanpa ribet.
        </p>
      </motion.div>

      {/* Siapa Kami */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Siapa Kami?</h2>
          <p className="text-base leading-relaxed text-gray-700">
            Mobilin hadir sebagai solusi untuk jual beli mobil bekas dengan
            mudah, cepat, dan terpercaya. Kami mengedepankan kenyamanan dan
            keamanan dalam setiap transaksi.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Kami hadir dengan jaringan mitra luas dan sistem inspeksi
            profesional untuk memastikan kualitas terbaik.
          </p>
          <ul className="list-disc space-y-1 pl-6 text-base text-gray-700">
            <li>Ribuan mobil bekas berkualitas dari berbagai kota</li>
            <li>Inspeksi menyeluruh & pengurusan dokumen lengkap</li>
            <li>Partner dealer dan individu terpercaya</li>
          </ul>
        </motion.div>

        <motion.img
          src="/image/about-us.png"
          alt="Mobil bekas berkualitas"
          className="w-full rounded-xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Kenapa Pilih Mobilin */}
      <motion.div
        className="mx-auto mt-24 max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Kenapa Pilih <span className="text-yellow-600">Mobilin?</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              icon: (
                <Icon name="shield" className="mb-4 text-4xl text-yellow-600" />
              ),
              title: "Transaksi Aman",
              desc: "Setiap mobil dan penjual kami verifikasi demi keamanan Anda.",
            },
            {
              icon: (
                <Icon name="car" className="mb-4 text-4xl text-yellow-600" />
              ),
              title: "Kualitas Terjamin",
              desc: "Mobil melalui inspeksi teknis untuk menjamin performa optimal.",
            },
            {
              icon: (
                <Icon
                  name="handshake"
                  className="mb-4 text-4xl text-yellow-600"
                />
              ),
              title: "Harga Kompetitif",
              desc: "Harga terbaik langsung dari pemilik dan dealer resmi.",
            },
            {
              icon: (
                <Icon
                  name="checklist"
                  className="mb-4 text-4xl text-yellow-600"
                />
              ),
              title: "Dokumen Lengkap",
              desc: "Kami bantu semua proses administrasi dengan legalitas terjamin.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="cursor-pointer rounded-2xl bg-yellow-50 p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4 text-4xl text-yellow-600">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Team />

      {/* CTA */}
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
          Siap cari mobil impianmu?
        </h2>
        <p className="mb-6 text-gray-600">
          Bergabung bersama ribuan pengguna yang sudah lebih dulu percaya pada
          Mobilin.
        </p>
        <a
          href="/buy-cars"
          className="inline-block rounded-full bg-yellow-600 px-8 py-3 font-medium text-white shadow transition-all duration-300 hover:bg-yellow-500"
        >
          Mulai Sekarang
        </a>
      </motion.div>
    </div>
  );
}
