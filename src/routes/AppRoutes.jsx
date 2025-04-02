import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import SimulasiKredit from "../pages/SimulasiKredit";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";

const AppRoutes = () => {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default AppRoutes;
