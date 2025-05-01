// src/pages/TestDrive.jsx
import React from 'react';
import SimpleTable from '../../components/admin/dashboard/SimpleTable';
import PageHeader from '../../components/admin/dashboard/PageHeader';

const data = [
  { nama: 'Budi', tanggal: '2025-04-20', mobil: 'Toyota Avanza' },
  { nama: 'Sinta', tanggal: '2025-04-22', mobil: 'Honda Brio' },
];

const columns = [
  { header: 'Nama', accessor: 'nama' },
  { header: 'Tanggal', accessor: 'tanggal' },
  { header: 'Mobil', accessor: 'mobil' },
];

const TestDrive = () => {
  return (
    <div className="p-4">
      <PageHeader title="Kelola Test Drive" />
      <SimpleTable columns={columns} data={data} />
    </div>
  );
};

export default TestDrive;
