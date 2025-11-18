'use client';
import React from "react";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-1.jpg')" }}
    >
      {/* Textile border */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-6 bg-repeat-x"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-6 bg-repeat-x"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute top-0 left-0 h-full w-6 bg-repeat-y"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-6 bg-repeat-y"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 p-6 rounded-xl border border-white/20 shadow-lg"
          style={{
            backgroundImage: "url('/bg-4.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          The mission of the National Textile Minister&apos;s Conference is to foster
          collaboration and create actionable frameworks that will drive the
          sustainable growth and global competitiveness of India&apos;s textile
          industry. Through modern technology integration, skill development,
          infrastructure enhancement, and environmentally conscious practices,
          the conference aims to position India as a world-leading hub for
          textile innovation, production, and exports.
        </motion.div>

        {/* Mission Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 justify-center">
          {[
            "Foster Collaborative Policy Making",
            "Sustainable Growth",
            "Technological Advancement",
            "Increase Global Presence",
            "Empower Workforce",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-sm shadow-lg"
              style={{
                backgroundImage: "url('/bg-4.jpg')",
                backgroundSize: "cover",
                backgroundBlendMode: "overlay",
              }}
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
