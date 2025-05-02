import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ListMenu() {
  const { t } = useTranslation();

  const menuClass = ({ isActive }) =>
    `hover:text-yellow-600 transition duration-300 ease-in-out ${
      isActive
        ? "text-yellow-600 transition duration-200 ease-in-out"
        : "text-gray-800"
    }`;

  return (
    <>
      <Link to="/">
        <img
          src="/image/Mobilin_Logo_1.png"
          alt="logo mobilin"
          className="w-30"
        />
      </Link>
      <ul className="hidden space-x-6 text-lg font-medium capitalize md:flex">
        <li>
          <NavLink to="/" className={menuClass}>
            {t("beranda")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/buy-cars" className={menuClass}>
            {t("beli mobil")}
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/sell-cars" className={menuClass}>
            {t("jual mobil")}
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to="/faq" className={menuClass}>
            {t("FAQ")}
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/kontak-kami" className={menuClass}>
            {t("kontak kami")}
          </NavLink>
        </li>
      </ul>
    </>
  );
}
