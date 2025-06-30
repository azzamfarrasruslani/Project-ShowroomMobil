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

  const [selectedList1] = useState(t("navbar.tentang-mobilin"));
  const menuList1 = [
    { label: t("navbar.tentang-kami"), path: "/tentang-kami" },
    { label: t("navbar.artikel"), path: "/artikel" },
    { label: t("navbar.kontak-kami"), path: "/kontak-kami" },
    { label: t("navbar.lokasi-kami"), path: "/lokasi-kami" },
  ];

  const [selectedList2] = useState(t("navbar.lainnya"));
  const menuList2 = [
    { label: t("navbar.karir"), path: "/karir" },
    { label: t("navbar.halaman-paket"), path: "/pricing-page" },
    { label: t("navbar.simulasi-kredit"), path: "/simulasi-kredit" },
    { label: t("navbar.katalog-media"), path: "/katalog-media" }
  ];

  return (
    <>
      {/* <Link to="/">
        <img
          src="/image/Mobilin_Logo_1.png"
          alt="logo mobilin"
          className="w-30"
        />
      </Link> */}
      <ul className="hidden space-x-6 text-lg font-medium capitalize md:flex">
        <li>
          <NavLink to="/buy-cars" className={menuClass}>
            {t("navbar.beli-mobil")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/sell-cars" className={menuClass}>
            {t("navbar.jual-mobil")}
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
