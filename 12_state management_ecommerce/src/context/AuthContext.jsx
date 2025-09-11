import { createContext, useContext, useState, useEffect } from "react";
import { createToken, decodeToken, isTokenExpired } from "../jwt_utilites/authexpiry.js";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem("token");
    const p = decodeToken(t);
    return p ? { name: p.name, email: p.email } : null;
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (token && isTokenExpired(token)) logout();
  }, [token]);

  const signup = ({ name, email, password }) => {
    setError("");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) {
      setError("Email already registered");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  const login = ({ email, password }) => {
    setError("");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError("Invalid credentials");
      return;
    }
    const newToken = createToken(user);
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser({ name: user.name, email: user.email });
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, signup, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
