import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x">

      {/* Animated floating circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-white opacity-10 rounded-full w-32 h-32 top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute bg-white opacity-10 rounded-full w-48 h-48 bottom-20 right-20 animate-pulse-slower"></div>
        <div className="absolute bg-white opacity-10 rounded-full w-24 h-24 top-1/2 left-1/3 animate-pulse-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 animate-bounce">
          Welcome to React Library
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
          Explore popular movies, TV shows, and your favorite Marvel heroes. 
          Discover details, genres, and enjoy interactive content.
        </p>
        <Link
          to="/marvel"
          className="inline-block px-8 py-4 bg-white text-purple-700 font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:bg-purple-50"
        >
          Explore More
        </Link>
      </div>

      {/* Optional extra animated shapes */}
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-10 rounded-full animate-pulse-slower"></div>
    </div>
  );
};

export default Home;
