import { Info } from "lucide-react";

export default function SlotModal() {
  return (
    <dialog id="slot_modal" className="modal">
      <div className="modal-box">
        <h3 className="mb-2 flex items-center gap-2 text-lg font-bold">
          <Info className="h-5 w-5 text-blue-500" />
          Kenapa beberapa slot tidak tersedia?
        </h3>
        <p className="text-sm text-gray-700">
          Beberapa slot mungkin telah dipesan pengguna lain, berada di luar jam
          operasional showroom, atau belum tersedia karena alasan teknis.
          Silakan pilih tanggal dan waktu lainnya.
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-sm">Tutup</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
