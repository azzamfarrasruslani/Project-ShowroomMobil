import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faChevronLeft,
  faChevronRight,
  faRightToBracket,
  faReceipt,
  faLanguage,
  faMagnifyingGlass,
  faFilter,
  faList,
  faTableCellsLarge,
  faLocationDot,
  faCircleXmark,
  faCar,
  faShieldAlt,
  faHandshake,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons"; // Semua ikon ini termasuk dalam free-solid-svg-icons

import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Komponen Ikon Universal
 * @param {string} name - Nama ikon (contoh: "home", "user", "car")
 * @param {string} className - Tambahan class untuk styling
 */
const Icon = ({ name, className }) => {
  // Daftar ikon yang didukung
  const icons = {
    facebook: faFacebookF,
    instagram: faInstagram,
    youtube: faYoutube,
    login: faRightToBracket,
    language: faLanguage,
    promo: faReceipt,
    home: faHome,
    user: faUser,
    list: faList,
    close: faCircleXmark,
    card: faTableCellsLarge,
    location: faLocationDot,
    search: faMagnifyingGlass,
    filter: faFilter,
    arrowLeft: faChevronLeft,
    arrowRight: faChevronRight,
    car: faCar,
    shield: faShieldAlt,
    handshake: faHandshake,
    checklist: faClipboardCheck,
  };

  return <FontAwesomeIcon icon={icons[name]} className={className} />;
};

export default Icon;
