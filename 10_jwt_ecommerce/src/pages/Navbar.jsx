import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // <- should be "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx";
import { jwtDecode } from 'jwt-decode';

export default function Navbar() {
  const { user, logout, token } = useAuth();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!token) return;

    try {
      const decoded = jwtDecode(token); // <- fixed here
      const expTime = decoded.exp * 1000;

      const interval = setInterval(() => {
        const now = Date.now();
        const diff = expTime - now;

        if (diff <= 0) {
          setTimeLeft("Expired");
          logout();
          clearInterval(interval);
        } else {
          const minutes = Math.floor(diff / 1000 / 60);
          const seconds = Math.floor((diff / 1000) % 60);
          setTimeLeft(`${minutes}m ${seconds}s`);
        }
      }, 1000);

      return () => clearInterval(interval);
    } catch (err) {
      console.error("Invalid token", err);
      logout();
    }
  }, [token, logout]);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">MyShop</Link>
        </div>
        <div className="space-x-4">
          <Link to="/home" className="hover:text-green-300 transition-colors duration-200">
            Home
          </Link>

          {user && (
            <>
             
              <Link to="/dashboard" className="hover:text-green-300 transition-colors duration-200">
                Dashboard
              </Link>
              <Link to="/productlist" className="hover:text-green-300 transition-colors duration-200">
                Buy Items
              </Link>
               <span className="p-2 border-2">{user?.name}</span>
              <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors duration-200">
                Logout
              </button>
              <span className="bg-white text-black px-2 py-1 rounded">
                Token expires in: {timeLeft}
              </span>
            </>
          )}

          {!user && (
            <>
              <Link to="/signup" className="hover:text-green-300 transition-colors duration-200">
                Signup
              </Link>
              <Link to="/login" className="hover:text-green-300 transition-colors duration-200">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
