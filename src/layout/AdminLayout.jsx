import { Outlet } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
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
