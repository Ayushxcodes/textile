"use client";
import React from "react";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/visionbg.jpg')" }}
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT – Vision Points */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {[
            "Global Leadership",
            "Innovative & Sustainable Industry",
            "Inclusive Growth",
            "A Robust Ecosystem",
            "Excellence in Export & Trade",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 
                         p-4 text-black font-semibold rounded-lg shadow-lg 
                         hover:scale-105 hover:shadow-2xl transition cursor-pointer"
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

        {/* RIGHT – Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-center font-extrabold mb-6 bg-gradient-to-r 
                       from-black to-gray-700 bg-clip-text text-transparent"
          >
            Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-black max-w-xl text-center ml-auto 
                       leading-relaxed bg-white/30 backdrop-blur-sm 
                       p-5 rounded-lg border border-white/40 shadow-md"
          >
            The vision of the National Textile Minister&apos;s Conference is to
            transform India&apos;s textile sector into a global leader by
            promoting innovation, sustainability, and inclusivity. By 2030,
            India&apos;s textile industry will be recognized for its global
            competitiveness, sustainability, technological advancements, and
            skilled workforce contributing significantly to the national
            economy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
