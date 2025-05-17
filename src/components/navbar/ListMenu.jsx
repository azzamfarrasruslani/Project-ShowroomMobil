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

  const [selectedList1] = useState(t("Tentang Mobilin"));
  const menuList1 = [
    { label: t("Tentang Kami"), path: "/tentang-kami" },
    { label: t("Artikel"), path: "/artikel" },
    { label: t("Hubungi Kami"), path: "/kontak-kami" },
  ];

  const [selectedList2] = useState(t("Lainnya"));
  const menuList2 = [
    { label: t("Karir"), path: "/karir" },
    { label: t("Simulasi Kredit"), path: "/simulasi-kredit" }
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
        {/* <li>
          <NavLink to="/" className={menuClass}>
            {t("beranda")}
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/buy-cars" className={menuClass}>
            {t("beli mobil")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={menuClass}>
            {t("FAQ")}
          </NavLink>
        </li>
        <li>
          <DropdownLink items={menuList1} selected={selectedList1} />
        </li>
        <li>
          <DropdownLink items={menuList2} selected={selectedList2} />
        </li>
      </ul>
    </>
  );
}
