import React, { Suspense } from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Guest Pages
// import Home from "./pages/guest/Home";
// import BuyCars from "./pages/guest/BuyCars";
// import SellCar from "./pages/guest/SellCars";
// import Faq from "./pages/guest/Faq";
// import ContactUs from "./pages/guest/ContactUs";
// import SimulasiKredit from "./pages/guest/SimulasiKredit";

const Home = React.lazy(() => import("./pages/guest/Home"));
const BuyCars = React.lazy(() => import("./pages/guest/BuyCars"));
const SellCars = React.lazy(() => import("./pages/guest/SellCars"));
const Faq = React.lazy(() => import("./pages/guest/Faq"));
const ContactUs = React.lazy(() => import("./pages/guest/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/guest/AboutUs"));
const Artikel = React.lazy(() => import("./pages/guest/Artikel"));
const ArtikelDetail = React.lazy(() => import("./pages/guest/ArtikelDetail"));
const SimulasiKredit = React.lazy(() => import("./pages/guest/SimulasiKredit"));
const Karir = React.lazy(() => import("./pages/guest/Karir"));

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Customers from "./pages/admin/Customers";
import Mobil from "./pages/admin/Mobil";
import Pembeli from "./pages/admin/Pembeli";
import Orders from "./pages/admin/Orders";
import TestDrive from "./pages/admin/TestDrive";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgot";
// Layouts
import ScrollToTop from "./layout/ScrollToTop";
import ErrorPage from "./pages/error/errorPage";
import GuestLayout from "./layout/GuestLayout";
import AdminLayout from "./layout/AdminLayout";
import Loading from "./components/common/Loading";

function App() {
  return (
    <div className="bg-gray-100">
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy-cars" element={<BuyCars />} />
            <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
            <Route path="/sell-cars" element={<SellCars />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/kontak-kami" element={<ContactUs />} />
            <Route path="/tentang-kami" element={<AboutUs />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:id" element={<ArtikelDetail />} />
            <Route path="/karir" element={<Karir />} />
            <Route path="/login" element={<Login />} />
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
        </Routes>{" "}
      </Suspense>
    </div>
  );
}

export default App;
