import React,{ useContext } from 'react'
import Home from './page/Home.jsx' //profiles card
import ThemeContext from './context/themeContext.js' //dark theme logic
import { FiSun, FiMoon } from "react-icons/fi"; // 🌞 🌙
import './App.css'

function App() {
 const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
   
      <div className={` min-h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"} p-4`}>

        <h1 className='text-blue-600 text-2xl font-bold text-center p-3 m-3'>
         Appverse-Technologies
        </h1>

        <button  className={`m-auto mb-2 px-4 py-2 flex rounded-md hover:bg-gray-700
                 ${darkMode ? "bg-white text-black" : "bg-black text-white"}`} 
                 onClick={toggleTheme}>
          {darkMode ? <FiSun className="text-yellow-600" /> : <FiMoon className="text-blue-300" />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>

        <Home darkMode={darkMode} />
      
      </div>
   
  )
}

export default App
