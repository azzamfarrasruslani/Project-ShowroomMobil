import { useState } from "react";

export default function SimulasiKredit() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;
  return (
    <div className="m-5 flex min-h-screen flex-col items-center justify-center bg-gray-100 p-5">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
          Hitung Gaji Bersih
        </h2>

        <div className="mb-4">{/* Input Gaji */}</div>

        <div className="mb-4">
          <label className="mb-1 block font-medium text-gray-700">
            Pajak: <b class="text-red-500">11%</b>
          </label>
        </div>

        {/*Komponen Kondisi */}
      </div>
    </div>
  );
}
