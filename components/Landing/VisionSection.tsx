'use client'
import React from "react";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/visionbg.jpg')" }}
    >
      {/* Decorative textile-pattern border on all four sides */}
      

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-black mb-6"
        >
          Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mb-10"
        >
          The vision of the National Textile Minister&apos;s Conference is to
          transform India&apos;s textile sector into a global leader by
          promoting innovation, sustainability, and inclusivity. By 2030,
          India&apos;s textile industry will be recognized for its global
          competitiveness, commitment to sustainability, technological
          advancements, and a skilled workforce contributing significantly to
          the national economy and international trade.
        </motion.p>

        {/* Vision points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 justify-center">
          {[
            "Global Leadership",
            "Innovative & Sustainable Industry",
            "Inclusive Growth",
            "A Robust Ecosystem",
            "Excellence in Export & Trade",
          ].map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-black text-sm shadow-lg"
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
