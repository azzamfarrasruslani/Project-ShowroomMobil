import { useParams, Link } from "react-router-dom";
import { FaMapMarkerAlt, FaWhatsapp, FaTags, FaCar } from "react-icons/fa";
import cars from "../../data/data_mobil_bekas.json";
import ScrollToSectionButton from "../../components/guest/buycars/ScrollToSectionButton";
import SimulasiKredit from "../../components/guest/buycars/SimulasiKredit";

import CarDetail from "../../components/guest/buycars/CarDetail";

export default function CarDetailPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-10 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Mobil tidak ditemukan
        </h1>
        <p className="text-gray-600">Silakan kembali ke daftar mobil.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Gambar Mobil */}
        <div className="space-y-4 md:col-span-2">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={car.gambar}
              alt={car.nama}
              className="h-auto w-full object-cover"
            />
            <div className="absolute top-0 left-0 rounded-br-lg bg-yellow-400 px-4 py-1 font-bold text-black">
              Rp 2.000.000 OFF
            </div>
            <div className="absolute right-0 bottom-0 rounded-tl-lg bg-blue-900 px-3 py-1 text-sm text-white">
              Promo s/d 31 Mei 2025
            </div>
          </div>
        </div>

        {/* Detail Mobil */}
        <div className="space-y-5 rounded-xl bg-white p-4 shadow">
          <div className="flex flex-col gap-1">
            <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
              Mobilin Value
            </span>
            <h1 className="text-2xl font-bold text-gray-900">{car.nama}</h1>
            <p className="text-sm text-gray-600">
              {car.jarak_tempuh} km • {car.transmisi}
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-red-600">
              Rp{car.harga.toLocaleString("id-ID")}
            </p>
          </div>

          <ScrollToSectionButton
            className="text-sm text-blue-600 underline"
            label="Lihat Simulasi Kredit"
            targetId="tes"
          />

          {/* Promo & Voucher */}
          <div className="space-y-2">
            <button className="flex w-full items-center justify-between rounded-lg border bg-blue-50 px-4 py-3 font-medium text-blue-800 transition hover:bg-blue-100">
              <FaTags className="mr-2" />
              Detail Promosi
              <span>&gt;</span>
            </button>

            <button className="flex w-full items-center justify-between rounded-lg border bg-yellow-100 px-4 py-3 font-medium text-yellow-900 transition hover:bg-yellow-200">
              🎁 Voucher Saya
              <span>&gt;</span>
            </button>
          </div>

          {/* Lokasi */}
          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
              <FaMapMarkerAlt /> Lokasi Mobil
            </p>
            <p className="ml-5 text-sm text-gray-600">{car.daerah}</p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-3">
            <button className="w-1/2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700">
              Pesan Mobil
              <p className="text-xs font-normal text-blue-100">
                Bisa Dikembalikan
              </p>
            </button>
            <Link
              to={`/test-drive/${car.id}`}
              className="w-1/2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-yellow-900 shadow hover:bg-yellow-500"
            >
              Tes Drive Gratis
              <p className="text-xs font-normal">Di Experience Center</p>
            </Link>
          </div>

          <div className="border-t pt-4 text-sm text-gray-600">
            Butuh bantuan? Hubungi kami lewat{" "}
            <span className="ml-1 flex items-center gap-1 font-semibold text-green-600">
              <FaWhatsapp /> WhatsApp
            </span>
          </div>
        </div>
      </div>

      <CarDetail car={car} />

      <div id="tes" className="mt-10">
        <SimulasiKredit car={car} />
      </div>
    </div>
  );
}
