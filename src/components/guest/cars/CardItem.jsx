const CardItem = ({ car, variant = "grid" }) => {
  const isGrid = variant === "grid";

  return (
    <div
      className={`${
        isGrid
          ? "rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
          : "flex flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg md:flex-row"
      }`}
    >
      <div className={`${isGrid ? "relative" : "relative w-full md:w-1/3"}`}>
        <img
          src={car.gambar}
          alt={car.nama}
          className={`${
            isGrid
              ? "h-60 w-full rounded-t-lg object-cover"
              : "h-60 w-full rounded-lg object-cover"
          }`}
        />
        {car.promosi.diskon === true && (
          <div className="absolute top-2 left-2 rounded bg-yellow-500 px-2 py-1 text-xs text-white">
            Diskon
          </div>
        )}

        {car.promosi.gratis_ongkir === true && (
          <div className="absolute top-2 right-2 rounded border border-yellow-500 bg-white px-2 py-1 text-xs text-yellow-500">
            Gratis Ongkir
          </div>
        )}
      </div>

      <div
        className={`${
          isGrid
            ? "p-5"
            : "mt-4 flex w-full flex-col justify-between px-0 md:mt-0 md:w-2/3 md:px-10"
        }`}
      >
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-lg font-bold text-gray-800 md:text-xl">
            {car.nama}
          </h2>
          <p className="text-lg font-extrabold text-yellow-500 md:text-xl">
            Rp{car.harga.toLocaleString("id-ID")}
          </p>
        </div>

        {/* {isGrid ? null : (
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
        )} */}

        <div
          className={`mt-3 rounded-xl border border-gray-300 p-3 ${
            isGrid ? "" : "mt-4"
          }`}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img
              src="icon/brand-icon.svg"
              alt="calendar"
              className="h-4 w-4"
            />
            <p>{car.warna}</p>
            <span className="px-1">•</span>
            <img
              src="icon/calendar-icon.svg"
              alt="calendar"
              className="h-4 w-4"
            />
            <p>{car.tahun_beli}</p>
            <span className="px-1">•</span>
            <img
              src="icon/automatic-icon.svg"
              alt="transmission"
              className="h-4 w-4"
            />
            <p>{car.transmisi}</p>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
            <img
              src="icon/mileage-icon.svg"
              alt="mileage"
              className="h-4 w-4"
            />
            <p>{car.jarak_tempuh.toLocaleString("id-ID")} km</p>
            <span className="px-1">•</span>
            <img
              src="icon/location-icon.svg"
              alt="transmission"
              className="h-4 w-4"
            />
            <p>{car.daerah}</p>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
