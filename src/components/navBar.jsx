// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Todos
        </Link>
        <Link to="/category/electronics" className="nav-link">
          Electrónica
        </Link>
        <Link to="/category/clothing" className="nav-link">
          Ropa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
