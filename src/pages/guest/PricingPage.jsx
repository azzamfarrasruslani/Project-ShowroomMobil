import { CheckCircle, BadgeDollarSign } from "lucide-react";

export default function PricingPage() {
  const pricingData = [
    {
      nama: "Reguler",
      harga: "Termasuk harga mobil",
      fitur: [
        "Pemeriksaan 100+ titik",
        "Garansi 7 hari",
        "Sertifikat layak jalan",
      ],
      color: "bg-white border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-yellow-500",
      gambar: "/image/pricing/1.jpeg", 
    },
    {
      nama: "Plus",
      harga: "Rp 999.000",
      fitur: [
        "Semua fitur Reguler",
        "Gratis antar mobil ke rumah",
        "Balik nama STNK gratis",
      ],
      color: "bg-blue-50 border-blue-300",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
     gambar: "/image/pricing/2.jpeg", 
    },
    {
      nama: "Ultra",
      harga: "Rp 1.999.000",
      fitur: [
        "Semua fitur Plus",
        "Asuransi 6 bulan",
        "Garansi uang kembali",
        "Bantuan darurat 24/7",
      ],
      color: "bg-yellow-50 border-yellow-400",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    gambar: "/image/pricing/3.jpeg", 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
          <BadgeDollarSign size={18} className="text-yellow-700" />
          Paket Layanan Mobilin
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Pilih Paket yang <span className="text-yellow-500">Cocok</span> untuk
          Anda
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Layanan tambahan untuk kenyamanan dan keamanan saat membeli mobil
          bekas melalui Mobilin.
        </p>
      </div>

      {/* Kartu Paket */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((paket, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between rounded-2xl border p-8 shadow-md transition duration-300 hover:shadow-xl ${paket.color}`}
          >
            <div className="space-y-4">
              <img
                src={paket.gambar}
                alt={`Paket ${paket.nama}`}
                className="h-60 w-full rounded-lg object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{paket.nama}</h3>
              <p className="text-2xl font-extrabold text-gray-700">
                {paket.harga}
              </p>
              <ul className="space-y-3 pt-2 text-sm text-gray-700">
                {paket.fitur.map((fitur, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="mt-[2px] h-4 w-4 text-green-500" />
                    <span>{fitur}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 w-full rounded-xl px-4 py-2 font-medium text-white transition ${paket.buttonColor}`}
            >
              Pilih Paket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
