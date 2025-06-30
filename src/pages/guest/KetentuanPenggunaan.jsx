// src/pages/guest/KetentuanPenggunaan.jsx
import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function KetentuanPenggunaan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 md:px-20">
      {/* Header Section */}
      <div className="relative mb-16 h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 shadow-xl">
        <img
          src="/image/ketentuan-penggunaan.jpeg" // Ganti dengan gambar ilustrasi ketentuan penggunaan
          alt="Ketentuan Penggunaan Mobilin"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 px-6 text-center text-white backdrop-blur-xs">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1 text-sm font-semibold text-yellow-300 ring-1 ring-yellow-300">
            <BookOpen size={18} />
            Ketentuan Penggunaan
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Aturan <span className="text-yellow-400">Penggunaan Layanan</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-gray-200 sm:text-base md:text-lg">
            Harap baca dengan saksama sebelum menggunakan layanan kami.
          </p>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">1. Persetujuan Penggunaan</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Dengan mengakses dan menggunakan situs Mobilin, Anda menyetujui untuk mematuhi semua ketentuan dan peraturan yang
          berlaku dalam dokumen ini.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">2. Akses Layanan</h3>
        <p className="mb-6 text-gray-700">
          Anda bertanggung jawab atas koneksi internet dan perangkat yang digunakan untuk mengakses platform kami. Kami tidak
          bertanggung jawab atas gangguan atau kerusakan akibat koneksi buruk.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">3. Hak dan Kewajiban Pengguna</h3>
        <ul className="mb-6 list-disc pl-6 text-gray-700">
          <li>Tidak menyalahgunakan layanan untuk tindakan ilegal atau merugikan pihak lain</li>
          <li>Memberikan informasi yang benar dan akurat saat melakukan transaksi</li>
          <li>Menghormati hak kekayaan intelektual dan privasi pihak lain</li>
        </ul>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">4. Hak Milik & Konten</h3>
        <p className="mb-6 text-gray-700">
          Semua konten di situs Mobilin termasuk teks, gambar, logo, dan desain adalah milik Mobilin atau pihak ketiga yang
          memberikan izin. Penggunaan tanpa izin tertulis dilarang keras.
        </p>

        <h3 className="mb-2 text-xl font-semibold text-gray-800">5. Perubahan Ketentuan</h3>
        <p className="mb-6 text-gray-700">
          Mobilin berhak mengubah atau memperbarui ketentuan ini kapan saja. Pengguna disarankan untuk membaca halaman ini
          secara berkala.
        </p>

        <p className="text-sm text-gray-500">
          Untuk pertanyaan atau klarifikasi, silakan hubungi kami melalui halaman{" "}
          <Link to="/kontak" className="text-blue-600 hover:underline">
            Kontak
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
