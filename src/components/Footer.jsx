import Icon from "../lib/Icon";

const Footer = () => {
  return (
    <footer className="ixed bottom-0 mt-auto w-full rounded-t-4xl bg-gray-800 px-40 py-10 text-white">
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

      <div className="flex justify-center gap-5 mt-20 text-center ">
        <Icon name="facebook" className="text-2xl font bg-white rounded-full px-4 py-3 text-black hover:bg-black hover:text-white" />
        <Icon name="instagram" className="text-2xl bg-white rounded-full px-4 py-3 text-black hover:bg-black hover:text-white" />
        <Icon name="youtube" className="text-2xl bg-white rounded-full px-3 py-3 text-black hover:bg-black hover:text-white" />
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        © 2025 Showroom Mobil Bekas Mobilin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
