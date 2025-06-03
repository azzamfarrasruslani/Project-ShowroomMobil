import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <div className="flex-1 p-4">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
