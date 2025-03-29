import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHome, faUser, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
    home: faHome,
    user: faUser,
    arrowLeft: faChevronLeft,  
    arrowRight: faChevronRight, 
  };

  return <FontAwesomeIcon icon={icons[name]} className={className} />;
};

export default Icon;
