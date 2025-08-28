import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/UserDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Homepage from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import Navbar from "./pages/Navbar.jsx";

export default function App() {
  // Simulate user login state
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser(userData); // Set user after login
  };

  const logoutUser = () => {
    setUser(null); // Logout
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-black">
      {/* Navbar appears on all pages */}
      <Navbar user={user} logout={logoutUser} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login loginUser={loginUser} />}
        />
        <Route path="/productlist" element={<ProductList />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
