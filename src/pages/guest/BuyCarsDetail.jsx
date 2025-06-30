import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Car,
  Gauge,
  Settings,
  Gift,
  PhoneCall,
  Calendar,
  HandCoins,
  ShoppingCart,
  CarFront,
} from "lucide-react";

import cars from "../../data/data_mobil_bekas.json";
import ScrollToSectionButton from "../../components/common/ScrollToSectionButton";
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
        <div className="flex h-full flex-col justify-between rounded-xl bg-white p-4 shadow">
          {/* Bagian Atas */}
          <div className="space-y-5">
            {/* Label & Nama Mobil */}
            <div className="flex flex-col gap-1">
              <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                Mobilin Value
              </span>
              <h1 className="text-2xl font-bold text-gray-900">{car.nama}</h1>

              {/* Info Mobil */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Gauge size={14} /> {car.jarak_tempuh} km
                </div>
                <div className="flex items-center gap-1">
                  <Settings size={14} /> {car.transmisi}
                </div>
                {car.tahun && (
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {car.tahun}
                  </div>
                )}
                {car.warna && (
                  <div className="flex items-center gap-1">
                    <Car size={14} /> Warna: {car.warna}
                  </div>
                )}
              </div>
            </div>

            {/* Harga */}
            <div>
              <p className="text-xl font-bold text-red-600">
                Rp{car.harga.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Promo & Voucher */}
            <div className="space-y-2">
              <ScrollToSectionButton
                className="flex w-full items-center justify-between rounded-lg border bg-blue-50 px-4 py-3 font-medium text-blue-800 transition hover:bg-blue-100"
                targetId="tes"
              >
                <span className="flex items-center gap-2">
                  <HandCoins size={16} />
                  Lihat Simulasi Kredit
                </span>
              </ScrollToSectionButton>

              <button className="flex w-full items-center justify-between rounded-lg border bg-yellow-100 px-4 py-3 font-medium text-yellow-900 transition hover:bg-yellow-200">
                <span className="flex items-center gap-2">
                  <Gift size={16} /> Voucher Saya
                </span>
                <span>&gt;</span>
              </button>
            </div>

            {/* Lokasi */}
            <div>
              <p className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                <MapPin size={14} />{car.daerah}
              </p>
              <p className="ml-5 text-sm text-gray-600"></p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-3">
              <button className="w-1/2 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white shadow hover:bg-blue-700">
                <div className="flex flex-col items-center">
                  <span className="flex items-center justify-center gap-1">
                    <ShoppingCart size={16} />
                    Pesan Mobil
                  </span>
                  <p className="text-xs font-normal text-blue-100">
                    Bisa Dikembalikan
                  </p>
                </div>
              </button>

              <Link
                to={`/test-drive/${car.id}`}
                className="w-1/2 rounded-lg bg-yellow-400 px-4 py-2 text-center text-sm font-medium text-yellow-900 shadow hover:bg-yellow-500"
              >
                <div className="flex flex-col items-center">
                  <span className="flex items-center justify-center gap-1">
                    <CarFront size={16} />
                    Tes Drive Gratis
                  </span>
                  <p className="text-xs font-normal">Di Experience Center</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Bagian Bawah Tetap */}
          <div className="mt-6 border-t pt-4 text-sm text-gray-600">
            Butuh bantuan? Hubungi kami lewat{" "}
            <span className="ml-1 flex items-center gap-1 font-semibold text-green-600">
              <PhoneCall size={14} /> WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Detail Tambahan */}
      <CarDetail car={car} />

      {/* Simulasi Kredit */}
      <div id="tes" className="mt-10">
        <SimulasiKredit car={car} />
      </div>
    </div>
  );
}
