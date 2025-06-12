import { useParams } from "react-router-dom";
import cars from "../../data/data_mobil_bekas.json";
import { useState } from "react";

export default function TestDrive() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");

  if (!car) {
    return <div className="text-center py-10 text-red-500 font-bold">Mobil tidak ditemukan.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tanggal:", tanggal, "Waktu:", waktu, "Mobil:", car);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-lg shadow">
      {/* Form Test Drive */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Jadwal Test Drive</h2>

        <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4 text-sm">
          💡 Jadwalkan test drive gratis sekarang dan cek 18 mobil serupa yang ada di Showroom.
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pilih Tanggal */}
          <div>
            <label className="block font-medium mb-1">Pilih Tanggal</label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Pilih Waktu */}
          <div>
            <label className="block font-medium mb-1">Pilih Waktu</label>
            <input
              type="time"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div className="text-blue-600 text-sm">
            ℹ️ Kenapa beberapa slot tidak tersedia?
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full mt-4 hover:bg-yellow-600 transition"
          >
            Konfirmasi
          </button>
        </form>
      </div>

      {/* Detail Mobil */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-4">
          <img
            src={car.gambar}
            alt={car.nama}
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
        <div className="font-semibold text-lg">{car.nama}</div>
        <div className="text-sm text-gray-600">
          {car.jarak_tempuh} km | {car.transmisi}
        </div>

        <div className="mt-4">
          <div className="font-medium">📍 Penjual</div>
          <div className="text-sm text-gray-700 mt-1">
            {car.penjual.nama}
            <br />
            Kontak: {car.penjual.kontak}
            <br />
            Rating: {car.penjual.rating} ⭐
          </div>
        </div>
      </div>
    </div>
  );
}
