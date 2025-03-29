import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import SimulasiKredit from "../pages/SimulasiKredit";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop"; 


const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
