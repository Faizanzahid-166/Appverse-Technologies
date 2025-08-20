"use client";

import { motion } from "framer-motion";
import { Rocket, Users, Cpu, Palette } from "lucide-react";

export default function About() {
  return (
    <main className="relative bg-gray-950 text-gray-100 min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-pink-600/20 to-cyan-500/20 blur-3xl"></div>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About NeoNFT
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          NeoNFT is a next-gen marketplace where{" "}
          <span className="text-pink-400">creativity</span>,{" "}
          <span className="text-purple-400">technology</span>, and{" "}
          <span className="text-cyan-400">community</span> come together.
        </motion.p>
      </section>

      {/* About Project */}
      <section className="relative z-10 py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What is NeoNFT?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          NeoNFT is built to celebrate digital ownership. From{" "}
          <span className="text-pink-400">classic game art</span> and{" "}
          <span className="text-purple-400">3D designs</span> to{" "}
          <span className="text-cyan-400">photography</span>, creators showcase
          unique NFTs, while collectors trade and explore in an immersive
          experience.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg"
          >
            <Rocket className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mission</h3>
            <p>
              To empower artists and collectors by creating a vibrant ecosystem
              where NFTs represent culture, nostalgia, and innovation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-600 text-white shadow-lg"
          >
            <Users className="w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Vision</h3>
            <p>
              To become the go-to platform for discovering, trading, and
              celebrating digital collectibles worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Built With
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "React", icon: Palette, color: "from-cyan-500 to-blue-500" },
            { name: "Node.js", icon: Cpu, color: "from-green-500 to-emerald-600" },
            { name: "MongoDB", icon: Cpu, color: "from-emerald-500 to-teal-600" },
            { name: "Framer Motion", icon: Palette, color: "from-pink-500 to-purple-600" },
          ].map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-xl bg-gradient-to-r ${tech.color} text-white font-semibold shadow-md flex items-center gap-2`}
            >
              <tech.icon className="w-5 h-5" />
              {tech.name}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
