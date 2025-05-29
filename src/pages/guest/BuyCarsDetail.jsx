import { useParams } from "react-router-dom";
import cars from "../../data/data_mobil_bekas.json";
import ScrollToSectionButton from "../../components/guest/cars/ScrollToSectionButton";

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
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {/* Left - Gambar dan thumbnail */}
        <div className="md:col-span-2">
          <div className="relative">
            <img
              src={car.gambar}
              alt={car.nama}
              className="h-auto w-full rounded-lg object-cover"
            />
            <div className="absolute right-0 bottom-0 rounded-tl-lg bg-blue-900 px-3 py-1 text-sm text-white">
              s/d 31 MAY 2025
            </div>
            <div className="absolute top-0 left-0 rounded-br-lg bg-yellow-400 px-4 py-1 font-bold text-black">
              Rp 2.000.000 OFF
            </div>
          </div>

          {/* Thumbnail */}
          <div className="mt-4 flex gap-2 overflow-x-auto">
            <img
              className={
                "h-16 w-24 cursor-pointer rounded-md border-2 object-cover"
              }
            />
          </div>

          {/* Promo label */}
          <div className="mt-2 w-fit rounded bg-yellow-400 px-4 py-1 text-sm font-bold text-blue-900">
            PROMO KILAT
          </div>
        </div>

        {/* Right - Detail */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-gray-900">
            <span className="mr-2 rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
              Mobilin Value
            </span>
            {car.nama}
          </h1>

          <p className="text-sm text-gray-600">
            {car.jarak_tempuh} km | {car.transmisi}
          </p>

          <div className="space-y-1">
            {/* <p className="text-sm text-gray-400 line-through">Rp 189.000.000</p> */}
            <p className="text-xl font-bold text-red-600">
              {" "}
              Rp{car.harga.toLocaleString("id-ID")}
            </p>
            {/* <p className="text-sm text-gray-600">Rp 192.000.000 (Cash)</p> */}
          </div>

          <ScrollToSectionButton
            className="text-sm text-blue-600 underline"
            label="Simulasi Kredit"
            targetId="tes"
          />

          <button className="flex w-full items-center justify-between rounded border bg-blue-50 px-4 py-3 text-left">
            <span className="font-medium text-blue-800">Detail Promosi</span>
            <span className="text-blue-800">&gt;</span>
          </button>

          <button className="flex w-full items-center justify-between rounded border bg-yellow-100 px-4 py-3 text-left">
            <span className="font-medium text-yellow-800">Voucher Saya</span>
            <span className="text-yellow-800">&gt;</span>
          </button>

          <div>
            <p className="text-sm font-semibold text-gray-700">Lokasi Mobil</p>
            <p className="text-sm text-gray-600">
              {car.daerah}
            </p>
          </div>

          <div className="flex gap-2">
            <button className="w-1/2 rounded bg-blue-100 px-4 py-2 font-semibold text-blue-800">
              Pesan Mobil
              <p className="text-xs font-normal">Dapat Dikembalikan</p>
            </button>
            <button className="w-1/2 rounded bg-yellow-400 px-4 py-2 font-semibold text-yellow-900">
              Tes Drive Gratis
              <p className="text-xs font-normal">Di Experience Center</p>
            </button>
          </div>

          <div className="border-t pt-4 text-sm text-gray-600">
            Butuh bantuan? Hubungi kami melalui
            <span className="ml-1 font-semibold text-green-600">WhatsApp</span>
          </div>
        </div>
      </div>

      <div id="tes" className="">
        <h1>tess</h1>
      </div>
    </div>
  );
}
