import React, { useState, useEffect } from "react";

const FormSimulasiKredit = () => {
  const [hargaMobil, setHargaMobil] = useState("");
  const [uangMuka, setUangMuka] = useState("");
  const [persenUangMuka, setPersenUangMuka] = useState(0);
  const [tenor, setTenor] = useState(1);
  const [estimasiBulanan, setEstimasiBulanan] = useState(0);
  const [totalDP, setTotalDP] = useState(0);
  const [pembayaranPertama, setPembayaranPertama] = useState(0);
  const [premiAsuransi, setPremiAsuransi] = useState(0);

  useEffect(() => {
    const harga = parseFloat(hargaMobil);
    const dp = parseFloat(uangMuka);

    if (!isNaN(harga) && harga > 0 && !isNaN(dp) && dp >= 0 && dp < harga) {
      const persen = (dp / harga) * 100;
      setPersenUangMuka(persen);

      const pokokPinjaman = harga - dp;
      const bungaPerTahun = 0.06;
      const totalBunga = pokokPinjaman * bungaPerTahun * tenor;
      const totalPinjaman = pokokPinjaman + totalBunga;
      const cicilanBulanan = totalPinjaman / (tenor * 12);

      const premi = harga * 0.015;
      const dpTotal = dp + premi;
      const bayarPertama = dpTotal + cicilanBulanan;

      setEstimasiBulanan(Math.round(cicilanBulanan));
      setPremiAsuransi(Math.round(premi));
      setTotalDP(Math.round(dpTotal));
      setPembayaranPertama(Math.round(bayarPertama));
    } else {
      setPersenUangMuka(0);
      setEstimasiBulanan(0);
      setPremiAsuransi(0);
      setTotalDP(0);
      setPembayaranPertama(0);
    }
  }, [hargaMobil, uangMuka, tenor]);

  return (
    <div className="px-4 py-10">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-2xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Simulasi Kredit Mobil
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Form */}
          <section className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-900">
                Harga Mobil (Rp)
              </label>
              <input
                type="number"
                value={hargaMobil}
                onChange={(e) => setHargaMobil(e.target.value)}
                className="w-full rounded-lg border border-blue-200 p-3 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                placeholder="Contoh: 200000000"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                Uang Muka
              </label>
              <div className="flex gap-3">
                <input
                  type="number"
                  value={uangMuka}
                  onChange={(e) => setUangMuka(e.target.value)}
                  className="w-full rounded-lg border border-blue-200 p-3 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Contoh: 50000000"
                />
                <input
                  type="text"
                  value={`${persenUangMuka.toFixed(2)}%`}
                  disabled
                  className="w-24 rounded-lg border border-gray-300 bg-gray-100 p-3 text-center"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                Mitra Pembiayaan
              </label>
              <select className="w-full rounded-lg border border-blue-200 p-3">
                <option>BCA Finance</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                Jenis Asuransi
              </label>
              <select className="w-full rounded-lg border border-blue-200 p-3">
                <option>Total Lost Only (TLO)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                Cakupan Wilayah
              </label>
              <select className="w-full rounded-lg border border-blue-200 p-3">
                <option>DKI Jakarta, Jawa Barat, dan Banten</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-900">
                Tenor Pinjaman
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={tenor}
                  onChange={(e) => setTenor(Number(e.target.value))}
                  className="w-full accent-yellow-600"
                />
                <span className="text-sm font-medium text-gray-900">
                  {tenor} Tahun
                </span>
              </div>
            </div>
          </section>

          {/* Hasil Simulasi */}
          <section className="space-y-5 rounded-2xl bg-gray-900 p-6 text-white shadow-md">
            <div>
              <p className="text-sm text-gray-200">
                Estimasi Cicilan Per Bulan
              </p>
              <h3 className="text-4xl font-bold text-yellow-400">
                Rp {estimasiBulanan.toLocaleString("id-ID")}
              </h3>
            </div>

            <div className="space-y-2 text-sm text-gray-100">
              <div className="flex justify-between">
                <span>Total DP</span>
                <span className="font-semibold text-white">
                  Rp {totalDP.toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Uang Muka</span>
                <span>
                  Rp{" "}
                  {uangMuka
                    ? parseInt(uangMuka).toLocaleString("id-ID")
                    : "Rp 0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Pembayaran Pertama</span>
                <span>Rp {pembayaranPertama.toLocaleString("id-ID")}</span>
              </div>
              <div className="flex justify-between">
                <span>Premi Asuransi</span>
                <span>Rp {premiAsuransi.toLocaleString("id-ID")}</span>
              </div>
            </div>

            <p className="text-xs text-gray-300">
              * Perhitungan hanya simulasi. Hubungi kami untuk informasi lebih
              lanjut.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FormSimulasiKredit;
