import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHome, faUser, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Komponen Ikon Universal
 * @param {string} name - Nama ikon (contoh: "home", "user", "coffee")
 * @param {string} className - Tambahan class untuk styling
 */
const Icon = ({ name, className }) => {
  // Daftar ikon yang didukung
  const icons = {
    home: faHome,
    user: faUser,
    coffee: faCoffee,
    arrowLeft: faChevronLeft,  
    arrowRight: faChevronRight, 
  };

  return <FontAwesomeIcon icon={icons[name]} className={className} />;
};

export default Icon;
