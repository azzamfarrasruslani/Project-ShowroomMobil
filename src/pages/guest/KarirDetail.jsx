import { useParams } from "react-router-dom";
import lowongan from "../../data/data_lowongan.json";

export default function KarirDetail() {
  const { id } = useParams();
  const data = lowongan.find((job) => job.id === id);

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">Lowongan tidak ditemukan</h1>
        <p className="text-gray-600">Silakan kembali ke halaman karir.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{data.posisi}</h1>
      <p className="text-gray-700 text-lg mb-4">{data.perusahaan}</p>

      <div className="space-y-2 text-gray-600">
        <p>
          <strong>Lokasi:</strong> {data.lokasi.kota} - {data.lokasi.alamat}
        </p>
        <p>
          <strong>Tipe Pekerjaan:</strong> {data.tipe_pekerjaan}
        </p>
        <p>
          <strong>Gaji:</strong>{" "}
          {data.gaji.mata_uang} {data.gaji.minimal.toLocaleString()} - {data.gaji.maksimal.toLocaleString()} ({data.gaji.tipe})
        </p>
        <p>
          <strong>Tanggal Posting:</strong> {data.tanggal_posting}
        </p>
        <p>
          <strong>Batas Lamaran:</strong> {data.batas_lamaran}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Deskripsi Pekerjaan</h2>
        <p className="text-gray-700">{data.deskripsi}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Kualifikasi</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {data.kualifikasi.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Kontak</h2>
        <p className="text-gray-700">Email: {data.kontak.email}</p>
        <p className="text-gray-700">Telepon: {data.kontak.telepon}</p>
      </div>
    </div>
  );
}
