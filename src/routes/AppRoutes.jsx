import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BuyCars from "../pages/BuyCars";
import SellCar from "../pages/SellCars";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import SimulasiKredit from "../pages/SimulasiKredit";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ScrollToTop from "../layout/ScrollToTop";
import ErrorPage from "../pages/error/errorPage"; 
const AppRoutes = () => {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-cars" element={<BuyCars />} />
          <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
          <Route path="/sell-cars" element={<SellCar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontak-kami" element={<ContactUs />} />
          {/* 404 Not Found */}
          <Route path="/error/:errorCode" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
