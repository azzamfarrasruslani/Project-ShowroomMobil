import React, { Suspense } from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ===========
// Guest Pages
// ===========
const Home = React.lazy(() => import("./pages/guest/Home"));
const BuyCars = React.lazy(() => import("./pages/guest/BuyCars"));
const BuyCarsDetail = React.lazy(() => import("./pages/guest/BuyCarsDetail"));
const SellCars = React.lazy(() => import("./pages/guest/SellCars"));
const Faq = React.lazy(() => import("./pages/guest/Faq"));
const ContactUs = React.lazy(() => import("./pages/guest/ContactUs"));
const AboutUs = React.lazy(() => import("./pages/guest/AboutUs"));
const Artikel = React.lazy(() => import("./pages/guest/Artikel"));
const ArtikelDetail = React.lazy(() => import("./pages/guest/ArtikelDetail"));
const SimulasiKredit = React.lazy(() => import("./pages/guest/SimulasiKredit"));
const Karir = React.lazy(() => import("./pages/guest/Karir"));
const KarirDetail = React.lazy(() => import("./pages/guest/KarirDetail"));
const Lokasi = React.lazy(() => import("./pages/guest/Lokasi"));
const LokasiDetail = React.lazy(() => import("./pages/guest/LokasiDetail"));
const Ulasan = React.lazy(() => import("./pages/guest/Ulasan"));
const KatalogMedia = React.lazy(() => import("./pages/guest/KatalogMedia"));

// ===========
// Admin Pages
// ===========
// Komponen utama
const Dashboard = React.lazy(() => import("./pages/admin/Dashboard"));
const Customers = React.lazy(() => import("./pages/admin/Customers"));
const Orders = React.lazy(() => import("./pages/admin/Orders"));
const Mobil = React.lazy(() => import("./pages/admin/Mobil"));
const MobilDetail = React.lazy(
  () => import("./pages/admin/Detail/DetailMobil"),
);
const TestDrive = React.lazy(() => import("./pages/admin/TestDrive"));
const DetailTestDrive = React.lazy(
  () => import("./pages/admin/Detail/DetailTestDrive"),
);
const DetailPesansaranManajer = React.lazy(
  () => import("./pages/admin/DetailPesansaranManajer"),
);
const Pembeli = React.lazy(() => import("./pages/admin/Pembeli"));
const Errormobilin = React.lazy(() => import("./pages/admin/Errormobilin"));

// Komponen tambahan
const ArtikelManager = React.lazy(
  () => import("./components/admin/ArtikelManager"),
);
const FaqManager = React.lazy(() => import("./components/admin/FaqManager"));
const TeamManager = React.lazy(() => import("./components/admin/TeamManager"));
const JobManager = React.lazy(() => import("./components/admin/JobManager"));
const PesanSaranManager = React.lazy(
  () => import("./pages/admin/Pesansaranmanager"),
);

// ===========
// Auth Pages
// ===========
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/Forgot";

// ===========
// Layouts
// ===========
import ScrollToTop from "./layout/ScrollToTop";
import ErrorPage from "./pages/error/errorPage";
import GuestLayout from "./layout/GuestLayout";
import AdminLayout from "./layout/AdminLayout";
import Loading from "./components/common/Loading";

export default function App() {
  return (
    <div className="bg-gray-100">
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy-cars" element={<BuyCars />} />
            <Route path="/buy-cars/:id" element={<BuyCarsDetail />} />
            <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
            <Route path="/sell-cars" element={<SellCars />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/kontak-kami" element={<ContactUs />} />
            <Route path="/tentang-kami" element={<AboutUs />} />
            <Route path="/artikel" element={<Artikel />} />
            <Route path="/artikel/:id" element={<ArtikelDetail />} />
            <Route path="/karir" element={<Karir />} />
            <Route path="/karir/:id_lowongan" element={<KarirDetail />} />
            <Route path="/lokasi-kami" element={<Lokasi />} />
            <Route path="/lokasi-kami/:id" element={<LokasiDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ulasan" element={<Ulasan />} />
            <Route path="/katalog-media" element={<KatalogMedia />} />
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
            <Route path="/admin/artikel" element={<ArtikelManager />} />
            <Route path="/admin/faq" element={<FaqManager />} />
            <Route path="/admin/tim" element={<TeamManager />} />
            <Route path="/admin/lowongan" element={<JobManager />} />
            <Route path="/pesansaran" element={<PesanSaranManager />} />{" "}
            <Route
              path="/pesansaran/:id"
              element={<DetailPesansaranManajer />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>{" "}
      </Suspense>
    </div>
  );
}
