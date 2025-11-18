"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextileObjectiveSectionProps {
  imageUrl: string;
  imageAlt?: string;
  className?: string;
}

export default function TextileObjectiveSection({
  imageUrl,
  imageAlt = "Textiles background",
  className = "",
}: TextileObjectiveSectionProps) {
  // Slideshow images
  const slideshowImages = [
    "/corner1.png",
    "/corner2.png",
    "/corner3.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="National Textile Ministers' Conference objective"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <img src={imageUrl} alt={imageAlt} className="sr-only" />

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT — TEXT WRAPPED IN VISIBILITY DIV */}
        <div>
          <div className="bg-white/40 backdrop-blur-sm p-6 md:p-8 border border-white/30 shadow-md">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-black"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Objective of{" "}
              <span className="bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
                Textile
              </span>{" "}
              Conference
            </motion.h2>

            <motion.p
              className="mt-5 text-base md:text-lg lg:text-xl text-left text-black leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              The National Textile Ministers' Conference, scheduled for the 8th
              and 9th of January 2026, is being organized by the Ministry of
              Textiles, Government of India. The key objective is to align
              national strategies with evolving priorities of India’s textile
              sector. It establishes a collaborative platform for the central
              and state governments to address challenges, explore new
              opportunities, and create a unified roadmap for the sustainable
              development and global competitiveness of India’s textile
              industry.
            </motion.p>
          </div>
        </div>

        {/* RIGHT — IMAGE WITH 3-SIDE SHARP FRAME */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* 3-side sharp border */}
            <div
              className="
                absolute inset-0 
                -translate-x-3 
                -translate-y-3
                border-t-[6px] border-l-[6px] border-r-[6px]
                border-orange-300
              "
            />

            {/* Slideshow image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={slideshowImages[index]}
                alt="Objective visual"
                className="absolute inset-0 w-full h-full object-cover shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
