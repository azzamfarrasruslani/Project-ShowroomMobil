// Icons
import Icon from "../../../lib/Icon";

const ListCard = ({ car }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg md:flex-row">
      <div className="relative w-full md:w-1/3">
        <img
          src={car.gambar}
          alt={car.nama}
          className="h-60 w-full rounded-lg object-cover"
        />
        <div className="absolute top-2 left-2 rounded bg-yellow-500 px-2 py-1 text-xs text-white">
          Time Deal
        </div>
        <div className="absolute top-2 right-2 rounded border border-yellow-500 bg-white px-2 py-1 text-xs text-yellow-500">
          Gratis Ongkir
        </div>
      </div>

      <div className="mt-4 flex w-full flex-col justify-between px-0 md:mt-0 md:w-1/1 md:px-10">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold text-gray-800 md:text-xl">
            {car.nama}
          </h2>
          <p className="text-lg font-extrabold text-yellow-500 md:text-xl">
            Rp{car.harga.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>
            Kondisi mobil:{" "}
            <span className="font-medium text-gray-700">
              {car.kondisi || "Bekas"}
            </span>
          </p>
          <p>
            Deskripsi singkat:{" "}
            <span className="italic">
              {car.deskripsi || "Mobil terawat, siap pakai, surat lengkap."}
            </span>
          </p>
        </div>
        <div className="mt-4 space-y-2 rounded-xl border border-gray-200 p-3">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <img
                src="/icon/calendar-icon.svg"
                alt="Tahun"
                className="h-4 w-4"
              />
              <span>{car.tahun_beli}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/icon/automatic_icon.svg"
                alt="Transmisi"
                className="h-4 w-4"
              />
              <span>{car.transmisi}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="mdi:map-marker" className="h-4 w-4 text-gray-600" />
              <span>{car.daerah}</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/icon/mileage-icon.svg"
                alt="Jarak Tempuh"
                className="h-4 w-4"
              />
              <span>{car.jarak_tempuh.toLocaleString("id-ID")} km</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListCard;
