import { Routes, Route, Navigate } from "react-router";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/UserDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Homepage from './pages/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
       <Route path="/home" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    </Routes>
  );
}
