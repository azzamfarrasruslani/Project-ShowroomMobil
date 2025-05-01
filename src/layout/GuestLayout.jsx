import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GuestLayout() {
  return (
    <div id="guest-layout">
      <Navbar />

      <main className="flex-grow ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
