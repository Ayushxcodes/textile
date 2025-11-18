"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-1.jpg')" }}
    >
      <div className="relative max-w-6xl mx-auto text-center text-black">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent"
        >
          Mission
        </motion.h2>

        {/* Animated Mission Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 
                     p-6 rounded-xl border border-white/30 shadow-xl 
                     bg-white/20 backdrop-blur-md hover:bg-white/30 
                     transition duration-300"
          style={{
            backgroundImage: "url('/bg-4.jpg')",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        >
          The mission of the National Textile Minister&apos;s Conference is to
          foster collaboration and create actionable frameworks that will drive
          the sustainable growth and global competitiveness of India&apos;s
          textile industry. Through modern technology integration, skill
          development, infrastructure enhancement, and environmentally conscious
          practices, the conference aims to position India as a world-leading
          hub for textile innovation, production, and exports.
        </motion.div>

        {/* Mission Points Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            "Foster Collaborative Policy Making",
            "Sustainable Growth",
            "Technological Advancement",
            "Increase Global Presence",
            "Empower Workforce",
            "Boost Exports & Innovation",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
                transition: { duration: 0.3 },
              }}
              className="bg-white/20 backdrop-blur-lg 
                         border border-white/30 
                         rounded-xl p-5 text-sm font-medium text-black 
                         shadow-lg cursor-pointer
                         hover:bg-white/30 hover:border-white/40 transition"
              style={{
                backgroundImage: "url('/bg-4.jpg')",
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
            >
              {point}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
