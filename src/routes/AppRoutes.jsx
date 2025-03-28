import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import SimulasiKredit from "../pages/SimulasiKredit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; 


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* Tambahkan di sini */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/simulasi-kredit" element={<SimulasiKredit />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default AppRoutes;
