import { useParams } from "react-router-dom";
import { useState } from "react";
import cars from "../../data/data_mobil_bekas.json";
import { testDriveAPI } from "../../services/testDriveAPI";
import SlotModal from "../../components/guest/testDrive/SlotModal";
import TestDriveForm from "../../components/guest/testDrive/TestDriveForm";
import CarInfoCard from "../../components/guest/testDrive/CarInfoCard";
export default function TestDrive() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!car) {
    return (
      <div className="py-10 text-center font-bold text-red-500">
        Mobil tidak ditemukan.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const data = {
        car_id: car.id,
        nama,
        nohp,
        tanggal,
        waktu,
      };

      await testDriveAPI.create(data);

      setSuccess("Jadwal test drive berhasil dikirim!");
      setNama("");
      setNohp("");
      setTanggal("");
      setWaktu("");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SlotModal />

      <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
          <TestDriveForm
            nama={nama}
            setNama={setNama}
            nohp={nohp}
            setNohp={setNohp}
            tanggal={tanggal}
            setTanggal={setTanggal}
            waktu={waktu}
            setWaktu={setWaktu}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
            success={success}
          />
          <CarInfoCard car={car} />
        </div>
      </div>
    </>
  );
}
