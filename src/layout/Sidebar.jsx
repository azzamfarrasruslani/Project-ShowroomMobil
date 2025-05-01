import ListMenu from "../components/admin/dashboard/ListMenu";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <img src="/image/Mobilin_Logo_1.png" className="w-33" />
        <span id="logo-subtitle" className="font-semibold text-gray-400"></span>
      </div>

      {/* List Menu */}
      <div>
        <ListMenu />
      </div>
    </div>
  );
}
