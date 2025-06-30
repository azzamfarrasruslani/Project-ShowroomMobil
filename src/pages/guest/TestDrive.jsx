import { useParams } from "react-router-dom";
import { useState } from "react";
import cars from "../../data/data_mobil_bekas.json";
import { testDriveAPI } from "../../services/testDriveAPI";
import AlertBox from "../../components/common/AlertBox";
import {
  Calendar,
  Clock,
  MapPin,
  Info,
  User,
  Factory,
  Palette,
  BadgeDollarSign,
  Settings2,
  Gauge,
  Users,
  Phone as PhoneIcon,
} from "lucide-react";

export default function TestDrive() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!car) {
    return (
      <div className="py-10 text-center font-bold text-red-500">
        Mobil tidak ditemukan.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = {
        car_id: car.id,
        nama,
        nohp,
        tanggal,
        waktu,
      };

      await testDriveAPI.create(data);

      setSuccess("Jadwal test drive berhasil dikirim!");
      setNama("");
      setNohp("");
      setTanggal("");
      setWaktu("");

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Modal Informasi */}
      <dialog id="slot_modal" className="modal">
        <div className="modal-box">
          <h3 className="mb-2 flex items-center gap-2 text-lg font-bold">
            <Info className="h-5 w-5 text-blue-500" />
            Kenapa beberapa slot tidak tersedia?
          </h3>
          <p className="text-sm text-gray-700">
            Beberapa slot mungkin telah dipesan pengguna lain, berada di luar
            jam operasional showroom, atau belum tersedia karena alasan teknis.
            Silakan pilih tanggal dan waktu lainnya.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm">Tutup</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Section */}
      <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
          {/* Kartu Form Test Drive */}
          <div className="col-span-2 rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Jadwalkan <span className="text-yellow-500">Test Drive</span>
            </h2>
            <div className="mb-4 flex items-center gap-2 rounded bg-yellow-100 p-3 text-sm text-yellow-800">
              <User className="h-4 w-4" />
              <span>Test drive gratis tersedia di showroom kami.</span>
            </div>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox type="success">{success}</AlertBox>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-1 flex items-center gap-2 font-medium text-gray-700">
                  <User className="h-4 w-4" /> Nama Lengkap
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-2 font-medium text-gray-700">
                  <PhoneIcon className="h-4 w-4" /> Nomor HP
                </label>
                <input
                  type="tel"
                  value={nohp}
                  onChange={(e) => setNohp(e.target.value)}
                  required
                  placeholder="08xxxxxxxxxx"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-2 font-medium text-gray-700">
                  <Calendar className="h-4 w-4" /> Pilih Tanggal
                </label>
                <input
                  type="date"
                  value={tanggal}
                  onChange={(e) => setTanggal(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 flex items-center gap-2 font-medium text-gray-700">
                  <Clock className="h-4 w-4" /> Pilih Waktu
                </label>
                <input
                  type="time"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              <div
                onClick={() => document.getElementById("slot_modal").showModal()}
                className="flex cursor-pointer items-center gap-1 text-sm text-blue-600 hover:underline"
              >
                <Info className="h-4 w-4" />
                Kenapa beberapa slot tidak tersedia?
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-yellow-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-yellow-600"
              >
                {loading ? "Mengirim..." : "Konfirmasi Jadwal"}
              </button>
            </form>
          </div>

          {/* Kartu Info Mobil */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <img
              src={car.gambar}
              alt={car.nama}
              className="mb-4 w-full rounded-lg object-cover shadow"
            />
            <h3 className="mb-1 text-xl font-bold text-gray-800">{car.nama}</h3>
            <p className="mb-2 text-sm text-gray-500">Info Singkat Mobil</p>

            <div className="grid grid-cols-1 gap-3 rounded-lg bg-gray-100 p-4 text-sm text-gray-700 md:grid-cols-2">
              <div className="flex items-center gap-2">
                <Factory className="h-4 w-4" /> <span>{car.merek}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> <span>Tahun {car.tahun_beli}</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" /> <span>Warna {car.warna}</span>
              </div>
              {car.lokasi && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> <span>{car.lokasi}</span>
                </div>
              )}
              {car.harga && (
                <div className="flex items-center gap-2">
                  <BadgeDollarSign className="h-4 w-4" /> <span>Rp {car.harga.toLocaleString()}</span>
                </div>
              )}
              {car.transmisi && (
                <div className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4" /> <span>{car.transmisi}</span>
                </div>
              )}
              {car.cc && (
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4" /> <span>{car.cc} cc</span>
                </div>
              )}
              {car.kursi && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> <span>{car.kursi} kursi</span>
                </div>
              )}
              {car.kilometer && (
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4" /> <span>{car.kilometer} km</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
