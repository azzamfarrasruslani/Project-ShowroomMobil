import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../../lib/Icon";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../locales/i18n"; // Pastikan impor konfigurasi i18n
import CustomSelect from "../ui/CustomSelect";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        overlayRef.current &&
        overlayRef.current.contains(event.target)
      ) {
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

  // Ubah bahasa menggunakan i18next
  const { t, i18n } = useTranslation();

  // Fungsi untuk mengubah bahasa
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="hidden items-center border-b-2 border-gray-500/5 bg-white px-10 md:flex">
        <div className="flex w-full items-center justify-end gap-3 py-2">
          <div className="flex items-center gap-2">
            <Icon name="language" className="text-md text-gray-800" />
            <select
              className="appearance-none rounded-lg bg-gray-200 px-3 py-1 text-sm font-bold text-gray-800 transition-all focus:ring-2 focus:ring-blue-900 focus:outline-none"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option className="bg-white text-black" value="id">
                ID
              </option>
              <option className="bg-white text-black" value="en">
                EN
              </option>
            </select>
          </div>
          <span>|</span>
          <div className="flex items-center gap-2">
            <Icon name="user" className="text-md text-gray-800" />
            <p className="text-sm font-medium text-gray-800">
              {t("masuk")} / {t("daftar")}
            </p>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 w-full bg-white p-2 text-black drop-shadow-md">
        <div className="container mx-auto flex items-center justify-between p-0">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link to="/">
            <img
              src="/image/Mobilin_Logo_1.png"
              alt="logo mobilin"
              className="w-30"
            />
          </Link>
          <ul className="hidden space-x-6 text-lg font-medium md:flex">
            <li>
              <Link
                to="/"
                className="font-medium transition hover:text-gray-800"
              >
                {t("beranda")}
              </Link>
            </li>
            <li>
              <Link to="/cars" className="transition hover:text-gray-800">
                {t("beli mobil")}
              </Link>
            </li>
            <li>
              <Link
                to="/simulasi-kredit"
                className="transition hover:text-gray-800"
              >
                Simulasi Kredit
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-60 bg-black/50"
        >
          <motion.div
            ref={menuRef}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
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
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
