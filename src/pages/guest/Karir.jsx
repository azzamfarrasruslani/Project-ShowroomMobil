import lowongan from "../../data/data_lowongan.json";
import { Link } from "react-router-dom";
export default function Karir() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Karir di Dunia Mobil Bekas
        </h2>
        <p className="mt-2 text-gray-600">
          Bergabunglah bersama kami dalam industri otomotif bekas yang terus
          berkembang.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {lowongan.map((job, index) => (
          <div
            key={index}
            className="space-y-4 rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.posisi}
                </h3>
                <span className="text-sm text-gray-500">
                  📍 {job.lokasi.kota}
                </span>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                Lowongan
              </span>
            </div>
            <p className="text-sm text-gray-700">{job.deskripsi}</p>
            <div>
              <h4 className="mb-1 text-sm font-medium text-gray-800">
                Kualifikasi:
              </h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                {job.kualifikasi.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <Link
              to={`/karir/${job.id}`}
              className="mt-3 flex w-full justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-yellow-500"
            >
              Lamar Sekarang
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
