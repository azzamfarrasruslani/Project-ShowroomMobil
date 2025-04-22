import Icon from "../lib/Icon";

const Footer = () => {
  return (
    <footer className="bottom-0 mt-auto w-full rounded-t-4xl bg-gray-800 px-10 py-10 text-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-start justify-between gap-6">
        {/* Logo */}
        <div className="flex w-full flex-col items-center md:w-auto md:items-start">
          <img
            src="/image/Mobilin_Logo_1.png"
            alt="Mobilin Logo"
            className="h-auto w-50"
          />
        </div>

        {/* Navigasi */}
        <nav className="flex w-full flex-col items-start text-base leading-6 font-medium md:w-auto">
          <h2 className="mb-4 text-xl font-semibold">Navigasi</h2>
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/mobil-bekas" className="mt-2 hover:underline">
            Mobil Bekas
          </a>
          <a href="/promo" className="mt-2 hover:underline">
            Promo
          </a>
          <a href="/tentang-kami" className="mt-2 hover:underline">
            Tentang Kami
          </a>
          <a href="/hubungi-kami" className="mt-2 hover:underline">
            Hubungi Kami
          </a>
        </nav>

        {/* Kontak */}
        <div className="w-full text-base md:w-auto">
          <h2 className="mb-4 text-xl font-semibold">Kontak Kami</h2>
          <p>
            Email:{" "}
            <a href="mailto:info@mobilin.com" className="hover:underline">
              info@mobilin.com
            </a>
          </p>
          <p>
            Telepon:{" "}
            <a href="tel:+6281234567890" className="hover:underline">
              +62 812-3456-7890
            </a>
          </p>
          <p>Alamat: Jl. Raya Otomotif No.123, Jakarta</p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-3 text-center md:gap-5">
        <Icon
          name="facebook"
          className="w-10 rounded-full bg-white py-2.5 text-xl text-gray-800 hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        />
        <Icon
          name="instagram"
          className="w-10 rounded-full bg-white py-2.5 text-xl text-gray-800 hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        />
        <Icon
          name="youtube"
          className="w-10 rounded-full bg-white py-2.5 text-xl text-gray-800 hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        />
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t-2 border-gray-500/80 px-4 text-center">
        <div className="mt-6 text-center text-xs text-gray-400 md:text-sm">
          © 2025 Showroom Mobilin. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
