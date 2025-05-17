/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icon from "../../lib/Icon";


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4 md:px-10">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto mb-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-yellow-600 mb-4 tracking-tight">
          Tentang <span className="text-gray-800">Mobilin</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Platform terpercaya untuk jual beli mobil bekas berkualitas, aman, dan transparan. Temukan mobil impianmu tanpa ribet.
        </p>
      </motion.div>

      {/* Siapa Kami */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Siapa Kami?</h2>
          <p className="text-base leading-relaxed text-gray-700">
            Mobilin hadir sebagai solusi untuk jual beli mobil bekas dengan mudah, cepat, dan terpercaya. Kami mengedepankan kenyamanan dan keamanan dalam setiap transaksi.
          </p>
          <p className="text-base leading-relaxed text-gray-700">
            Kami hadir dengan jaringan mitra luas dan sistem inspeksi profesional untuk memastikan kualitas terbaik.
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
            <li>Ribuan mobil bekas berkualitas dari berbagai kota</li>
            <li>Inspeksi menyeluruh & pengurusan dokumen lengkap</li>
            <li>Partner dealer dan individu terpercaya</li>
          </ul>
        </motion.div>

        <motion.img
          src="/image/about-us.jpg"
          alt="Mobil bekas berkualitas"
          className="rounded-xl w-full shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Kenapa Pilih Mobilin */}
      <motion.div
        className="mt-24 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Kenapa Pilih <span className="text-yellow-600">Mobilin?</span>
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <Icon name="shield" className="text-yellow-600 text-4xl mb-4" />,
              title: "Transaksi Aman",
              desc: "Setiap mobil dan penjual kami verifikasi demi keamanan Anda.",
            },
            {
              icon: <Icon name="car" className="text-yellow-600 text-4xl mb-4" />,
              title: "Kualitas Terjamin",
              desc: "Mobil melalui inspeksi teknis untuk menjamin performa optimal.",
            },
            {
              icon: <Icon name="handshake" className="text-yellow-600 text-4xl mb-4" />,
              title: "Harga Kompetitif",
              desc: "Harga terbaik langsung dari pemilik dan dealer resmi.",
            },
            {
              icon: <Icon name="checklist" className="text-yellow-600 text-4xl mb-4" />,
              title: "Dokumen Lengkap",
              desc: "Kami bantu semua proses administrasi dengan legalitas terjamin.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-yellow-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          Siap cari mobil impianmu?
        </h2>
        <p className="mb-6 text-gray-600">
          Bergabung bersama ribuan pengguna yang sudah lebih dulu percaya pada Mobilin.
        </p>
        <a
          href="/buy-cars"
          className="inline-block px-8 py-3 bg-yellow-600 text-white font-medium rounded-full shadow hover:bg-yellow-500 transition-all duration-300"
        >
          Mulai Sekarang
        </a>
      </motion.div>
    </div>
  );
}
