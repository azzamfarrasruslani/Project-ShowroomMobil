/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MobileNavbar({ isOpen, setIsOpen, openDropdown, toggleDropdown }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const [pendingPath, setPendingPath] = useState(null);

  // Handle navigasi setelah menu ditutup
  useEffect(() => {
    if (!isOpen && pendingPath) {
      const timeout = setTimeout(() => {
        navigate(pendingPath);
        setPendingPath(null);
      }, 300); // Sesuai durasi exit animation
      return () => clearTimeout(timeout);
    }
  }, [isOpen, pendingPath, navigate]);

  const handleNavigation = (path) => {
    setPendingPath(path);
    setIsOpen(false); // tutup menu, baru navigasi setelah 300ms
  };

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
        <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
        <ul className="mt-10 space-y-4 text-lg font-medium">
          {/* Menu Utama */}
          <li>
            <button onClick={() => handleNavigation("/buy-cars")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              {t("navbar.beli-mobil")}
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/sell-cars")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              {t("navbar.jual-mobil")}
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/faq")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              {t("FAQ")}
            </button>
          </li>

          {/* Dropdown: Tentang Mobilin */}
          <li>
            <button
              onClick={() => toggleDropdown("tentang")}
              className="flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-200"
            >
              {t("navbar.tentang-mobilin")}
              {openDropdown === "tentang" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openDropdown === "tentang" && (
              <motion.div
                key="tentang"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="ml-4 overflow-hidden"
              >
                <button onClick={() => handleNavigation("/tentang-kami")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.tentang-kami")}
                </button>
                <button onClick={() => handleNavigation("/artikel")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.artikel")}
                </button>
                <button onClick={() => handleNavigation("/kontak-kami")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.kontak-kami")}
                </button>
                <button onClick={() => handleNavigation("/lokasi-kami")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.lokasi-kami")}
                </button>
              </motion.div>
            )}
          </li>

          {/* Dropdown: Lainnya */}
          <li>
            <button
              onClick={() => toggleDropdown("lainnya")}
              className="flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-200"
            >
              {t("navbar.lainnya")}
              {openDropdown === "lainnya" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {openDropdown === "lainnya" && (
              <motion.div
                key="lainnya"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="ml-4 overflow-hidden"
              >
                <button onClick={() => handleNavigation("/karir")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.karir")}
                </button>
                <button onClick={() => handleNavigation("/simulasi-kredit")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.simulasi-kredit")}
                </button>
                <button onClick={() => handleNavigation("/katalog-media")} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  {t("navbar.katalog-media")}
                </button>
              </motion.div>
            )}
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
