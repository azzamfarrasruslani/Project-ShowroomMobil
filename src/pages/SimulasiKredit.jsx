import { useState } from "react";
import Alert from "../components/Alert";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

export default function SimulasiKredit() {
  const [tenor, setTenor] = useState("");
  const [harga, setHarga] = useState("");
  const [nama, setNama] = useState("");
  const [errors, setErrors] = useState({});
  const [hasilSimulasi, setHasilSimulasi] = useState(null);

  const validate = () => {
    let newErrors = {};
    if (!nama) {
      newErrors.nama = "Nama wajib diisi.";
    } else if (!/^[A-Za-z\s]+$/.test(nama)) {
      newErrors.nama =
        "Nama tidak boleh mengandung angka atau karakter khusus.";
    }

    if (!harga || parseFloat(harga) <= 0) {
      newErrors.harga = "Harga kendaraan wajib diisi.";
    } else if (parseFloat(harga) <= 0) {
      newErrors.harga = "Harga kendaraan harus lebih dari 0.";
    }

    if (!tenor) newErrors.tenor = "Silakan pilih tenor.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const hitungKredit = () => {
    if (!validate()) return;
    const bunga = 0.05;
    const tenorBulan = parseInt(tenor);
    const hargaKendaraan = parseFloat(harga);
    const totalHarga = hargaKendaraan * (1 + bunga * (tenorBulan / 12));
    const cicilanPerBulan = totalHarga / tenorBulan;
    setHasilSimulasi({ totalHarga, cicilanPerBulan });
  };

  return (
    <div className="m-5 flex min-h-screen flex-col items-center justify-center p-5">
      <div className="w-150 rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-blue-800">
          Simulasi Kredit Mobil
        </h2>
        <InputField
          label="Nama Pemohon"
          type="text"
          placeholder="Masukkan nama"
          onChange={(e) => setNama(e.target.value)}
        />
        {errors.nama && <Alert tipe="error" pesan={errors.nama} />}
        <InputField
          label="Harga Kendaraan"
          type="number"
          placeholder="Masukkan harga"
          onChange={(e) => setHarga(e.target.value)}
        />
        {errors.harga && <Alert tipe="error" pesan={errors.harga} />}
        <SelectField
          label="Tenor (Bulan)"
          onChange={(e) => setTenor(e.target.value)}
        />
        {errors.tenor && <Alert tipe="error" pesan={errors.tenor} />}


        <button
          onClick={hitungKredit}
          className="mt-4 w-full rounded bg-blue-500 py-2 text-white"
        >
          Tampilkan Hasil
        </button>

        
        {hasilSimulasi && (
          <div className="mt-4 rounded bg-slate-100 p-4 shadow-md">
            <h3 className="text-lg font-semibold text-blue-900">
              Hasil Simulasi Kredit
            </h3>
            <p>Total Harga: Rp {hasilSimulasi.totalHarga.toLocaleString()}</p>
            <p>
              Cicilan Per Bulan: Rp{" "}
              {hasilSimulasi.cicilanPerBulan.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
