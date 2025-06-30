import { useState} from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Icon from "../lib/Icon";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../locales/i18n";
import LanguageSelector from "../components/navbar/LanguageSelector";
import ListMenu from "../components/navbar/ListMenu";
import MobileNavbar from "../components/navbar/MobileNavbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);
  const currentLang = i18n.language;
  const languages = ["id", "en"];

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Bar Atas (Desktop Only) */}
      <div className="hidden items-center border-b border-gray-100 bg-white px-10 md:flex">
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
      <nav className="sticky top-0 z-50 w-full bg-white p-2 text-black shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/image/Mobilin_Logo_1.png" alt="Logo Mobilin" className="h-10 w-auto" />
          </Link>

          {/* Tombol Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex">
            <ListMenu />
          </div>
        </div>

        {/* Mobile Sidebar + Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay hitam semi transparan */}
              <div
                className="fixed inset-0 z-40 bg-black/50 bg-opacity-40"
                onClick={() => setIsOpen(false)}
              />
              {/* Sidebar kiri */}
              <MobileNavbar
                setIsOpen={setIsOpen}
                openDropdown={openDropdown}
                toggleDropdown={toggleDropdown}
              />
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
