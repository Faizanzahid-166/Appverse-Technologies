import React from "react";
import { Link } from "react-router";
import { Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Logo / Name */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">React Library</h2>
          <p className="text-gray-400 max-w-sm">
            Explore popular movies, TV shows, and Marvel heroes. Enjoy interactive content and learn more about your favorite characters.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/marvel" className="hover:text-purple-400 transition-colors">Marvel</Link>
          <a href="#" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Github /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-gray-500 text-center text-sm">
        © {new Date().getFullYear()} React Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
