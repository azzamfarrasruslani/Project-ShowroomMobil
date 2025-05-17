import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "Apa yang perlu dicek sebelum membeli mobil bekas?",
    answer:
      "Cek kondisi mesin, riwayat servis, jarak tempuh (kilometer), catatan kecelakaan, dan kelengkapan dokumen seperti STNK dan BPKB.",
  },
  {
    question: "Bagaimana cara memastikan mobil bekas bukan hasil curian?",
    answer:
      "Pastikan nomor rangka dan nomor mesin sesuai dengan dokumen. Lakukan pengecekan di Samsat atau gunakan layanan pengecekan kendaraan online.",
  },
  {
    question: "Apakah mobil bekas bisa dibeli secara kredit?",
    answer:
      "Ya, banyak dealer maupun leasing yang menawarkan kredit mobil bekas dengan DP dan tenor bervariasi.",
  },
  {
    question: "Apa saja keuntungan membeli mobil bekas?",
    answer:
      "Harga lebih terjangkau, depresiasi lebih kecil, dan bisa mendapatkan tipe mobil dengan fitur tinggi di harga lebih murah.",
  },
  {
    question: "Kapan waktu terbaik membeli mobil bekas?",
    answer:
      "Akhir tahun atau awal tahun biasanya banyak diskon karena dealer ingin menghabiskan stok.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">FAQ Jual Beli Mobil Bekas</h2>
        <p className="mt-2 text-gray-600">
          Temukan jawaban dari pertanyaan umum seputar pembelian dan penjualan mobil bekas.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-5"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-md font-medium text-gray-800">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="mt-3 text-sm text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
