"use client";

import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gray-950 text-gray-100 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-purple-700/20 to-cyan-500/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            <ArrowLeftCircle className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
