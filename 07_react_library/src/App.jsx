import { useState } from "react";
import {Navbar, Footer} from './layout/index.js'
import { Outlet } from "react-router";

export default function App() {
  return (
  <>  
    <div className="p-6 space-y-6 bg-gray-500">
    {/* navbar */}
       <Navbar />

    {/* outlet */}
    <Outlet />

    {/* Footer */}
    <Footer />
    



    </div>
  </>  
  );
}
