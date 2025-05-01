// import { CiBoxList } from "react-icons/ci";
// import { FaPeopleGroup, FaCarSide, FaClipboardList } from "react-icons/fa6";
// import { MdDashboard, MdShoppingCartCheckout } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2
  ${isActive ? 
    "text-white bg-gray-400 font-extrabold" : 
    "text-gray-600 hover:text-white hover:bg-gray-200 hover:font-extrabold"
  }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            {/* <MdDashboard /> */}
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-2" to="/orders" className={menuClass}>
            {/* <CiBoxList /> */}
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/customers" className={menuClass}>
            {/* <FaPeopleGroup /> */}
            <span>Customers</span>
          </NavLink>
        </li>

        {/* Menu Tambahan */}
        <li>
          <NavLink id="menu-4" to="/mobil" className={menuClass}>
            {/* <FaCarSide /> */}
            <span>CRUD Mobil</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-5" to="/test-drive" className={menuClass}>
            {/* <FaClipboardList /> */}
            <span>Kelola Test Drive</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-6" to="/pembeli" className={menuClass}>
            {/* <MdShoppingCartCheckout /> */}
            <span>Kelola Pembeli</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
