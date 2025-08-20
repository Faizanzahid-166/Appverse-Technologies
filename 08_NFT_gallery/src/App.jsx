import React from 'react'
import { Outlet } from "react-router";
import {Navbar, Footer, Contextcontroller} from './layout/index.js'
import './App.css'

function App() {

  return (
    <>
    {/* Navbar */}
    <Navbar />

    {/* Context_controller  */}
    <Contextcontroller />

    <Outlet />

    {/* Footer */}
    <Footer />

    </>
  )
}

export default App
