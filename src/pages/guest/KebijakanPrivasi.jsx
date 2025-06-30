// src/pages/guest/KebijakanPrivasi.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function KebijakanPrivasi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20">
      {/* Header Section */}
      <div className="relative mb-16 h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-xl">
        <img
          src="/image/kebijakan-privasi.jpeg" // Ganti dengan gambar ilustrasi privasi jika ada
          alt="Kebijakan Privasi Mobilin"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 px-6 text-center text-white backdrop-blur-xs">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-300">
            <ShieldCheck size={18} />
            Kebijakan Privasi
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Data Anda <span className="text-yellow-400">Aman & Terlindungi</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
            Mobilin berkomitmen untuk menjaga kerahasiaan data pribadi Anda dalam setiap transaksi.
          </p>
        </div>
      </div>

      {/* Isi Konten */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Kebijakan Umum</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Kami menghargai dan melindungi privasi pengguna kami. Informasi yang Anda berikan kepada Mobilin akan digunakan
          hanya untuk keperluan internal, seperti pemrosesan transaksi, layanan pelanggan, dan peningkatan pengalaman pengguna.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">Informasi yang Dikumpulkan</h3>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Data pribadi seperti nama, email, dan nomor telepon</li>
          <li>Data kendaraan yang dijual/dibeli</li>
          <li>Riwayat aktivitas dan preferensi pengguna</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">Bagaimana Kami Menggunakan Data Anda</h3>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Memproses transaksi jual beli kendaraan</li>
          <li>Meningkatkan layanan dan pengalaman pengguna</li>
          <li>Mengirim informasi promo atau update terkait layanan (dengan izin pengguna)</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">Keamanan Data</h3>
        <p className="mb-6 text-gray-700">
          Data Anda disimpan dengan protokol keamanan terbaik. Kami tidak akan menjual, menyewakan, atau membagikan data
          pribadi Anda kepada pihak ketiga tanpa izin.
        </p>

        <p className="text-sm text-gray-500">
          Untuk pertanyaan lebih lanjut, silakan hubungi kami melalui halaman <Link to="/kontak-kami" className="text-blue-600 hover:underline">Kontak</Link>.
        </p>
      </div>
    </div>
  );
}
