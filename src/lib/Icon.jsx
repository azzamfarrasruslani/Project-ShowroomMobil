import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faUser, faChevronLeft, faChevronRight, faRightToBracket, faReceipt, faLanguage, faMagnifyingGlass, faFilter, faList , faTv} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
/**
 * Komponen Ikon Universal
 * @param {string} name - Nama ikon (contoh: "home", "user", "coffee")
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
    card: faTv,
    search: faMagnifyingGlass,
    filter: faFilter,
    arrowLeft: faChevronLeft,  
    arrowRight: faChevronRight, 
  };

  return <FontAwesomeIcon icon={icons[name]} className={className} />;
};

export default Icon;
