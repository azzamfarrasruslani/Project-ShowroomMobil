import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Mobilin</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/simulasi-kredit">Simulasi Kredit</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
