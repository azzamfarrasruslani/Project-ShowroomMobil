export default function Karir() {
  const lowongan = [
    {
      posisi: "Sales Executive",
      lokasi: "Jakarta",
      deskripsi:
        "Bertanggung jawab menjual mobil bekas, menjalin relasi dengan pelanggan, dan mencapai target penjualan.",
      kualifikasi: [
        "Pengalaman minimal 1 tahun di bidang sales",
        "Komunikatif dan berorientasi pada target",
        "Mampu mengoperasikan media sosial",
      ],
    },
    {
      posisi: "Mekanik Mobil Bekas",
      lokasi: "Surabaya",
      deskripsi:
        "Melakukan pengecekan dan perbaikan mobil bekas sebelum dijual ke pelanggan.",
      kualifikasi: [
        "Pengalaman minimal 2 tahun sebagai mekanik",
        "Mengerti kelistrikan dan mesin mobil",
        "Teliti dan bertanggung jawab",
      ],
    },
    {
      posisi: "Customer Service",
      lokasi: "Bandung",
      deskripsi:
        "Menangani pertanyaan pelanggan, memberi informasi produk, dan membantu proses transaksi.",
      kualifikasi: [
        "Komunikatif dan sabar",
        "Mampu menggunakan komputer & WhatsApp bisnis",
        "Berpenampilan menarik",
      ],
    },
    {
      posisi: "Customer Service",
      lokasi: "Bandung",
      deskripsi:
        "Menangani pertanyaan pelanggan, memberi informasi produk, dan membantu proses transaksi.",
      kualifikasi: [
        "Komunikatif dan sabar",
        "Mampu menggunakan komputer & WhatsApp bisnis",
        "Berpenampilan menarik",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Karir di Dunia Mobil Bekas</h2>
        <p className="mt-2 text-gray-600">
          Bergabunglah bersama kami dalam industri otomotif bekas yang terus berkembang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {lowongan.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.posisi}</h3>
                <span className="text-sm text-gray-500">📍 {job.lokasi}</span>
              </div>
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Lowongan
              </span>
            </div>
            <p className="text-sm text-gray-700">{job.deskripsi}</p>
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-1">Kualifikasi:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {job.kualifikasi.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <button className="mt-3 w-full bg-gray-800 hover:bg-yellow-500 text-white text-sm py-2 px-4 rounded-lg transition">
              Lamar Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
