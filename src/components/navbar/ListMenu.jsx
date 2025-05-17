import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import DropdownLink from "../common/DropdownLink";

export default function ListMenu() {
  const { t } = useTranslation();

  const menuClass = ({ isActive }) =>
    `hover:text-yellow-600 transition duration-300 ease-in-out ${
      isActive
        ? "text-yellow-600 transition duration-200 ease-in-out"
        : "text-gray-800"
    }`;

  const [selectedList] = useState(t("Tentang Mobilin"));
  const menuList = [
    { label: t("Tentang Kami"), path: "/tentang-kami" },
    { label: t("Artikel"), path: "/artikel" },
    { label: t("Hubungi Kami"), path: "/kontak-kami" },
  ];

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
        <div className="relative w-full sm:w-auto">
          <DropdownLink items={menuList} selected={selectedList} />
        </div>
        {/* <li>
          <NavLink to="/sell-cars" className={menuClass}>
            {t("jual mobil")}
          </NavLink>
        </li> */}
             </ul>
    </>
  );
}
