import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lowonganAPI } from "../../services/lowonganAPI"; // harus return data dari Supabase
import Error from "../../components/guest/Error";
import EmptyState from "../../components/guest/EmptyState";
import { MapPin, Briefcase } from "lucide-react";

export default function Karir() {
  const [lowonganData, setLowonganData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLowongan = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await lowonganAPI.fetch(); // langsung ambil array

        console.log("Data diterima dari Supabase:", data);
        // await new Promise((resolve) => setTimeout(resolve, 1000)); // simulasi delay

        setLowonganData(data || []);
      } catch (err) {
        console.error("Gagal mengambil data lowongan:", err.message);
        setError("Gagal mengambil data lowongan");
      } finally {
        setLoading(false);
      }
    };

    loadLowongan();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="relative mb-16 h-[350px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg">
        <img
          src="/image/karir.png"
          alt="Mobilin Career"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/40 px-4 text-center text-white backdrop-blur-xs">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800">
            <Briefcase size={18} className="text-yellow-700" />
            Peluang Karir Bersama Mobilin
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Bergabunglah dengan <span className="text-yellow-400">Mobilin</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-100 sm:text-lg">
            Bersama kami membangun masa depan industri mobil bekas yang inovatif
            dan berkelanjutan.
          </p>
        </div>
      </div>

      {/* Daftar Lowongan */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[280px] animate-pulse flex-col justify-between rounded-xl bg-white p-6 shadow-md"
            >
              <div>
                <div className="mb-2 h-5 w-2/3 rounded bg-gray-300" />
                <div className="mb-4 h-4 w-1/3 rounded bg-gray-200" />
                <div className="mb-2 h-3 w-full rounded bg-gray-200" />
                <div className="mb-2 h-3 w-5/6 rounded bg-gray-200" />
                <div className="mb-2 h-3 w-2/3 rounded bg-gray-200" />
              </div>
              <div className="h-10 w-full rounded-lg bg-gray-300" />
            </div>
          ))
        ) : error ? (
          <div className="col-span-full">
            <Error message={error} />
          </div>
        ) : lowonganData.length === 0 ? (
          <div className="col-span-full">
            <EmptyState message="Belum ada lowongan yang tersedia." />
          </div>
        ) : (
          lowonganData.map((job, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <div className="flex-grow space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {job.posisi}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MapPin size={16} className="text-gray-500" />
                      {job.lokasi?.kota || "Lokasi tidak tersedia"}
                    </div>
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
                    {(job.kualifikasi || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                to={`/karir/${job.id_lowongan}`}
                className="mt-4 flex w-full justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-yellow-500"
              >
                Lamar Sekarang
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
