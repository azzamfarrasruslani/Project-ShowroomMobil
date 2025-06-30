import { useState } from "react";

export default function CaraKerja() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Bagaimana Cara Membeli",
      description: "Panduan bagaimana membeli barang dengan mudah dan aman.",

      items: [
        {
          number: 1,
          title: "Temukan Mobil Anda",
          desc: "Temukan mobil impian Anda secara online yang telah kami pilih melalui proses inspeksi professional.",
          image: "/image/cara_kerja/cara_beli/1.png",
        },
        {
          number: 2,
          title: "Test Drive",
          desc: "Semua mobil kami telah disanitasi sebelum dan setelah test drive, untuk membuat pengalaman Anda aman dan nyaman.",
          image: "/image/cara_kerja/cara_beli/2.png",
        },
        {
          number: 3,
          title: "Pengiriman Langsung Ke Rumah",
          desc: "Pilih untuk mengambil mobil Anda di Mobilin Experience Center terdekat atau kami kirimkan langsung ke rumah Anda.",
          image: "/image/cara_kerja/cara_beli/3.png",
        },
        {
          number: 4,
          title: "Pembelian Tanpa Khawatir",
          desc: "Nikmati jaminan uang kembali dalam 5 hari ketika Anda membeli mobil dari Mobilin.",
          image: "/image/cara_kerja/cara_beli/4.png",
        },
      ],
    },
    {
      id: 2,
      title: "Bagaimana Cara Menjual",
      description: "Cara menjual produk Anda secara efisien dan cepat.",

      items: [
        {
          number: 1,
          title: "Buat Jadwal",
          desc: "Hanya 2 menit untuk membuat jadwal inspeksi.",
          image: "/image/cara_kerja/cara_jual/1.png",
        },
        {
          number: 2,
          title: "Gratis Inspeksi Mobil",
          desc: "Tenaga profesional kami akan menginspeksi mobil Anda hanya dalam 30 menit!",
          image: "/image/cara_kerja/cara_jual/2.png",
        },
        {
          number: 3,
          title: "Jual Mobil Anda",
          desc: "Dapatkan penawaran secara langsung di tempat atau gunakan opsi lelang melalui jaringan dealer Mobilin!",
          image: "/image/cara_kerja/cara_jual/3.png",
        },
        {
          number: 4,
          title: "Terima Pembayaran dalam 24 Jam",
          desc: "Semua pengurusan dokumen akan dilakukan oleh kami demi kenyamanan Anda.",
          image: "/image/cara_kerja/cara_jual/4.png",
        },
      ],
    },
  ];

  const current = steps.find((step) => step.id === currentStep);

  return (
    <div className="mx-auto p-10">
     <h1 className="text-center mb-4 text-5xl font-bold tracking-tight text-yellow-500">
          Cara Jual <span className="text-gray-800">&</span> Beli
        </h1>
      {/* Tabs */}
      <div className="relative flex justify-center space-x-10 border-b border-gray-200">
        {steps.map((step) => (
          <button
            key={step.id}
            className={`relative pb-2 text-sm font-semibold transition-colors duration-300 ${
              currentStep === step.id
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
            onClick={() => setCurrentStep(step.id)}
          >
            {step.title}
            {currentStep === step.id && (
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-yellow-500" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">
          {current.title}
        </h2>
        <p className="mb-6 max-w-xl text-gray-600">{current.description}</p>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
          {current.items.map((item) => (
            <div
              key={item.number}
              className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 w-full rounded object-contain"
              />
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-lg font-bold text-white">
                {item.number}
              </div>
              <h3 className="mb-1 font-semibold text-gray-800">{item.title}</h3>
              <p className="text-center text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
