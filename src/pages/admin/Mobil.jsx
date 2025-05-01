// src/pages/Mobil.jsx
import React from 'react';
import dataMobil from '../../data/data_mobil_bekas.json';
import PageHeader from '../../components/admin/dashboard/PageHeader';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
};

const Mobil = () => {
  return (
    <div className="p-4">
      <PageHeader title="Kelola Mobil Bekas" />
      <div className="overflow-x-auto border rounded-lg shadow-md mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">Gambar</th>
              <th className="p-2">Merek</th>
              <th className="p-2">Tipe</th>
              <th className="p-2">Tahun</th>
              <th className="p-2">Transmisi</th>
              <th className="p-2">Jarak Tempuh</th>
              <th className="p-2">Warna</th>
              <th className="p-2">Harga</th>
              <th className="p-2">Daerah</th>
              <th className="p-2">Fitur</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataMobil.map((mobil) => (
              <tr key={mobil.id} className="border-t">
                <td className="p-2">
                  <img src={mobil.gambar} alt={mobil.merek} className="w-20 h-auto rounded" />
                </td>
                <td className="p-2">{mobil.merek}</td>
                <td className="p-2">{mobil.tipe}</td>
                <td className="p-2">{mobil.tahun_beli}</td>
                <td className="p-2">{mobil.transmisi}</td>
                <td className="p-2">{mobil.jarak_tempuh.toLocaleString()} km</td>
                <td className="p-2">{mobil.warna}</td>
                <td className="p-2">{formatRupiah(mobil.harga)}</td>
                <td className="p-2">{mobil.daerah}</td>
                <td className="p-2">
                  <ul className="list-disc pl-5">
                    {mobil.fitur_tambahan.map((fitur, i) => (
                      <li key={i}>{fitur}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-2 space-x-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mobil;
