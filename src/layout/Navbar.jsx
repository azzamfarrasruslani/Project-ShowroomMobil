import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../lib/Icon";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Pastikan impor konfigurasi i18n
import LanguageSelector from "../components/navbar/LanguageSelector";
import ListMenu from "../components/navbar/ListMenu";

export default function Navbar() {
  // State dan Refs
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  // Handle klik di luar menu
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

  // Internationalization (i18n)
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const currentLang = i18n.language;
  const languages = ["id", "en"];

  return (
    <>
      <div className="hidden items-center border-b-2 border-gray-500/5 bg-white px-10 md:flex">
        <div className="flex w-full items-center justify-end gap-3 py-2">
          <div className="flex items-center gap-2">
            <Icon name="language" className="text-md text-gray-800" />

            <LanguageSelector
              changeLanguage={changeLanguage}
              currentLang={currentLang}
              languages={languages}
            />
          </div>
          <span>|</span>

          <Link to="/login">
            <div className="flex items-center gap-2">
              <Icon name="user" className="text-md text-gray-800" />
              <p className="text-sm font-medium text-gray-800">
                {t("masuk")} / {t("daftar")}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white p-2 text-black drop-shadow-md">
        <div className="container mx-auto flex items-center justify-between p-0">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ListMenu />
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
                  to="/cars"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
