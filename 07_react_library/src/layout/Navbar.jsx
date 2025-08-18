// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router"; //  import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define routes for each nav link
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cards", path: "/cards" },
     { name: "VideoGallery", path: "/video" },
    { name: "Cartoon", path: "/cartoon" },
    { name: "TV Shows", path: "/dramas" },
    { name: "Movies", path: "/marvel" }, //  Added Marvel link
  ];

  return (
    <nav className="bg-gray-700 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">React Library</div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="hover:text-red-500 cursor-pointer">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger menu icon (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden z-50">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setMenuOpen(false)}>
              <Link to={link.path} className="hover:text-red-500 cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
