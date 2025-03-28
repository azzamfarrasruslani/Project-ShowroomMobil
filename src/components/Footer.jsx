const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-40  ixed bottom-0 w-full mt-auto">
      <div className="flex flex-wrap justify-between items-start gap-6 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <img 
            src="/image/Mobilin_Logo_1.png" 
            alt="Mobilin Logo" 
            className="w-50 h-auto"
          />
        </div>

        {/* Navigasi */}
        <nav className="flex flex-col items-start text-base font-medium leading-6 w-full md:w-auto">
          <h2 className="text-xl font-semibold mb-4">Navigasi</h2>
          <a href="/" className="hover:underline">Home</a>
          <a href="/mobil-bekas" className="mt-2 hover:underline">Mobil Bekas</a>
          <a href="/promo" className="mt-2 hover:underline">Promo</a>
          <a href="/tentang-kami" className="mt-2 hover:underline">Tentang Kami</a>
          <a href="/hubungi-kami" className="mt-2 hover:underline">Hubungi Kami</a>
        </nav>

        {/* Kontak */}
        <div className="text-base w-full md:w-auto">
          <h2 className="text-xl font-semibold mb-4">Kontak Kami</h2>
          <p>Email: <a href="mailto:info@mobilin.com" className="hover:underline">info@mobilin.com</a></p>
          <p>Telepon: <a href="tel:+6281234567890" className="hover:underline">+62 812-3456-7890</a></p>
          <p>Alamat: Jl. Raya Otomotif No.123, Jakarta</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Showroom Mobil Bekas Mobilin. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
