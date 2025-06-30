import { Calendar, Clock, Info, User, Phone as PhoneIcon } from "lucide-react";
import AlertBox from "../../common/AlertBox";

export default function TestDriveForm({
  nama,
  setNama,
  nohp,
  setNohp,
  tanggal,
  setTanggal,
  waktu,
  setWaktu,
  handleSubmit,
  loading,
  error,
  success,
}) {
  return (
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
  );
}
