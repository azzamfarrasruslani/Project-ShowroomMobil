import { useState } from "react";
import {
  ChevronDown,
  Car,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  ScrollText,
} from "lucide-react";

// Data FAQ dikelompokkan berdasarkan kategori
const faqData = [
  {
    category: "Pembelian Mobil Bekas",
    icon: Car,
    items: [
      {
        question: "Apa yang perlu dicek sebelum membeli mobil bekas?",
        answer:
          "Cek kondisi mesin, riwayat servis, jarak tempuh (kilometer), catatan kecelakaan, dan kelengkapan dokumen seperti STNK dan BPKB.",
      },
      {
        question: "Kapan waktu terbaik membeli mobil bekas?",
        answer:
          "Akhir tahun atau awal tahun biasanya banyak diskon karena dealer ingin menghabiskan stok.",
      },
      {
        question: "Apa saja keuntungan membeli mobil bekas?",
        answer:
          "Harga lebih terjangkau, depresiasi lebih kecil, dan bisa mendapatkan tipe mobil dengan fitur tinggi di harga lebih murah.",
      },
    ],
  },
  {
    category: "Keamanan & Legalitas",
    icon: ShieldCheck,
    items: [
      {
        question: "Bagaimana cara memastikan mobil bekas bukan hasil curian?",
        answer:
          "Pastikan nomor rangka dan nomor mesin sesuai dengan dokumen. Lakukan pengecekan di Samsat atau gunakan layanan pengecekan kendaraan online.",
      },
      {
        question: "Apakah STNK dan BPKB wajib tersedia saat beli mobil bekas?",
        answer:
          "Ya, kedua dokumen ini wajib ada untuk memastikan status legal kendaraan dan mempermudah balik nama.",
      },
    ],
  },
  {
    category: "Pembayaran & Kredit",
    icon: CreditCard,
    items: [
      {
        question: "Apakah mobil bekas bisa dibeli secara kredit?",
        answer:
          "Ya, banyak dealer maupun leasing yang menawarkan kredit mobil bekas dengan DP dan tenor bervariasi.",
      },
      {
        question: "Apakah bisa tukar tambah dengan mobil lama?",
        answer:
          "Bisa. Anda cukup membawa mobil lama untuk dicek, lalu nilainya akan dikonversi sebagai DP untuk mobil baru.",
      },
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState({});

  const toggle = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenIndex((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <HelpCircle className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
        <h1 className="text-4xl font-bold text-yellow-600 mb-2">
          Pertanyaan Umum (FAQ)
        </h1>
        <p className="text-gray-600 text-md">
          Temukan jawaban atas pertanyaan seputar jual beli mobil bekas, kredit, hingga legalitas.
        </p>
      </div>

      {/* Quick Access Links */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-4">
        {faqData.map((section, idx) => {
          const Icon = section.icon;
          return (
            <a
              key={idx}
              href={`#kategori-${idx}`}
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-2 text-sm text-yellow-800 hover:bg-yellow-200 transition"
            >
              <Icon className="w-4 h-4" />
              {section.category}
            </a>
          );
        })}
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {faqData.map((section, categoryIndex) => {
          const Icon = section.icon;
          return (
            <div key={categoryIndex} id={`kategori-${categoryIndex}`}>
              <h2 className="mb-4 flex items-center text-2xl font-semibold text-gray-800">
                <Icon className="mr-2 w-6 h-6 text-yellow-600" />
                {section.category}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl shadow hover:shadow-md transition p-5"
                    >
                      <button
                        onClick={() => toggle(categoryIndex, itemIndex)}
                        className="flex justify-between items-center w-full text-left"
                      >
                        <span className="text-md font-medium text-gray-800 flex items-center">
                          <ScrollText className="w-4 h-4 mr-2 text-gray-500" />
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transform transition-transform ${
                            openIndex[key] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex[key] && (
                        <div className="mt-3 text-sm text-gray-600">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
