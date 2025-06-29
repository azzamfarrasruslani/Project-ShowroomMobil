import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../lib/Icon";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../locales/i18n"; // Pastikan impor konfigurasi i18n
import LanguageSelector from "../components/navbar/LanguageSelector";
import ListMenu from "../components/navbar/ListMenu";
import MobileNavbar from "../components/navbar/MobileNavbar";

export default function Navbar() {
  // State dan Refs
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

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
                {t("navbar.masuk")} / {t("navbar.daftar")}
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

      <AnimatePresence>
        {isOpen && (
          <MobileNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
          />
        )}
      </AnimatePresence>
    </>
  );
}
