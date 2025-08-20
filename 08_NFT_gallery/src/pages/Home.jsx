"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Image, Camera, Shapes } from "lucide-react";
import {Link} from 'react-router'

export default function Home() {
  return (
    <main className="relative bg-gray-950 text-gray-100 min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-pink-600/20 to-cyan-500/20 blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Digital Art NFT Gallery
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover, collect, and trade unique NFTs inspired by{" "}
          <span className="text-pink-400">retro games</span>,{" "}
          <span className="text-purple-400">classic art</span>, and{" "}
          <span className="text-cyan-400">3D creations</span>.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to='/nft_gallery'
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-transform"
          >
            Explore Marketplace <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to='about'
            className="px-6 py-3 rounded-2xl border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Categories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Art", icon: Image, color: "from-pink-500 to-purple-500" },
            { name: "3D", icon: Shapes, color: "from-purple-500 to-cyan-500" },
            { name: "Photography", icon: Camera, color: "from-cyan-500 to-pink-500" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-lg flex flex-col items-center`}
            >
              <cat.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

     
      {/* Floating Sparkle */}
      <motion.div
        className="absolute bottom-10 right-10 text-pink-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
    </main>
  );
}
