import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
