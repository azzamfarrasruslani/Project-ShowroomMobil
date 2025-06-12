import { Link } from "react-router-dom";
export default function StatistikSection() {
    return (
         <section className="bg-yellow-400 py-16">
        <div className="container mx-auto flex flex-col-reverse items-center justify-between px-4 md:flex-row">
          {/* Bagian kiri - Statistik */}
          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-8 text-center text-gray-900 md:w-1/2">
            <div>
              <h3 className="text-4xl font-extrabold">10.000</h3>
              <p className="mt-1 text-lg">transaksi tahunan</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">20+</h3>
              <p className="mt-1 text-lg">pusat Inspeksi MOBILIN di 50+ kota</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">1 Juta</h3>
              <p className="mt-1 text-lg">total penawaran telah diberikan</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold">1.000+</h3>
              <p className="mt-1 text-lg">dealer mobil bekas terpercaya</p>
            </div>

            {/* Tombol */}
            <div className="col-span-2 mt-6">
              <Link
                to="/lokasi-kami"
                className="mx-auto rounded-md bg-gray-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-900"
              >
                Temukan Inspection Center Terdekat
              </Link>
            </div>
          </div>

          {/* Bagian kanan - Peta */}
          <div className="mb-10 w-full md:mb-0 md:w-1/2">
            <img
              src="/image/map-cabang.png"
              alt="Peta Cabang"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    );
}