import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter  } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import './index.css'
import App from './App.jsx'
import store from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter   basename="/Appverse-Technologies/12_state_management">
    <AuthProvider>
     <Provider store={store}>
       <App />
     </Provider>
    </AuthProvider>
    </HashRouter >
  </StrictMode>,
)
