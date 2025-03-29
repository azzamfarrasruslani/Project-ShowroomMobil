import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../lib/Icon";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Ref untuk side navbar

  // Event listener untuk menutup menu jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="hidden md:flex items-center border-b-2 border-gray-500/5 px-10">
        <div className="flex w-full items-center justify-end gap-6 py-2">
          <div className="flex items-center gap-2">
            <Icon name="promo" className="text-xl text-gray-800" />
            <p className="font-semibold text-gray-800">Promo</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="login" className="text-xl text-gray-800" />
            <p className="font-semibold text-gray-800">Login/Sign Up</p>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 w-full bg-white p-2 text-black drop-shadow-md">
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
      </nav>

      {/* Mobile Side Menu */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 z-50 h-full w-64 bg-gray-100 p-6 shadow-xl md:hidden"
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <ul className="mt-10 space-y-4 text-lg font-medium">
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
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
