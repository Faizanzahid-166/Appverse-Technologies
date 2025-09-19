import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // <- should be "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { user, logout, } = useAuth();
    const cartCount = useSelector((state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)
  );


  return (
    <nav className="bg-gradient-to-r from-purple-600 to-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">E-commerce</Link>
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
              <Link to="/cart" className="hover:text-green-300 transition-colors duration-200">
                Cart
              </Link>
               <span className="bg-blue-800 font-bold p-2">Cart: {cartCount} items</span>
               <span className="p-2 border-2">{user?.name}</span>
              <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors duration-200">
                Logout
              </button>

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
