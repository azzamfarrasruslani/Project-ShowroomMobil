import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Guest Pages
import Home from "./pages/guest/Home";
import BuyCars from "./pages/guest/BuyCars";
import SellCar from "./pages/guest/SellCars";
import Faq from "./pages/guest/Faq";
import ContactUs from "./pages/guest/ContactUs";
import SimulasiKredit from "./pages/guest/SimulasiKredit";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import Mobil from "./pages/admin/Mobil";
import Pembeli from "./pages/admin/Pembeli";
import Orders from "./pages/admin/Orders";
import TestDrive from "./pages/admin/TestDrive";

// Layouts
import ScrollToTop from "./layout/ScrollToTop";
import ErrorPage from "./pages/error/errorPage";
import GuestLayout from "./layout/GuestLayout";
import AdminLayout from "./layout/AdminLayout";

function App() {
  return (
    <div className="bg-gray-100">
      <ScrollToTop />
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/buy-cars" element={<BuyCars />} />
          <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
          <Route path="/sell-cars" element={<SellCar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontak-kami" element={<ContactUs />} />
          <Route path="/error/:errorCode" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mobil" element={<Mobil />} />
          <Route path="/pembeli" element={<Pembeli />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/test-drive" element={<TestDrive />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
