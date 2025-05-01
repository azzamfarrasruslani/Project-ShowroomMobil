// src/pages/Pembeli.jsx
import React from 'react';
import SimpleTable from '../../components/admin/dashboard/SimpleTable';
import PageHeader from '../../components/admin/dashboard/PageHeader';

const data = [
  { nama: 'Rina', alamat: 'Jakarta', kontak: '08123456789' },
  { nama: 'Agus', alamat: 'Bandung', kontak: '08198765432' },
];

const columns = [
  { header: 'Nama', accessor: 'nama' },
  { header: 'Alamat', accessor: 'alamat' },
  { header: 'Kontak', accessor: 'kontak' },
];

const Pembeli = () => {
  return (
    <div className="p-4">
      <PageHeader title="Kelola Pembeli" />
      <SimpleTable columns={columns} data={data} />
    </div>
  );
};

export default Pembeli;
