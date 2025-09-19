import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Appverse-Technologies/10_jwt_ecommerce">
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
