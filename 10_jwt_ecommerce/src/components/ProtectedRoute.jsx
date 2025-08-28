import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import { isTokenExpired } from "../jwt_utilites/authexpiry.js";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  if (!token || isTokenExpired(token)) return <Navigate to="/login" replace />;
  return children;
}
