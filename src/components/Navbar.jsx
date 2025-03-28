import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-black drop-shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between p-0">
        {/* Hamburger Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Logo */}
        <Link to="/home">
          <img
            src="/image/Mobilin_Logo_1.png"
            alt="logo mobilin"
            className="w-30"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden space-x-6 text-lg font-medium md:flex">
          <li>
            <Link to="/" className="transition hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cars" className="transition hover:text-blue-600">
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/simulasi-kredit"
              className="transition hover:text-blue-600"
            >
              Simulasi Kredit
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg md:hidden">
          <ul className="space-y-4 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/simulasi-kredit"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Simulasi Kredit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
