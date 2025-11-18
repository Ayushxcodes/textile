"use client";
import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="National Textile Ministers' Conference objective"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Visually-hidden image */}
      <img src={imageUrl} alt={imageAlt} className="sr-only" />

      {/* Content */}
      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black leading-tight"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Objective
          </motion.h2>

          <motion.p
            className="mt-4 text-base text-center md:text-lg lg:text-xl text-black max-w-3xl whitespace-pre-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {`National Textile Ministers' Conference (8th and 9th January 2026) to be organize by the Ministry of Textiles, Government of India, is to align the goals and strategies of India's textile sector with mal priorities, fostering a collaborative environment between the central government and governments. The conference aims to address key challenges, identify opportunities for the, and set a unified course for the future of India's textile industry`}
          </motion.p>
        </div>

        {/* Right-side image */}
        <motion.img
          src="/objectiveimg.png"
          alt="Conference visual"
          className="w-full h-auto rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {/* Decorative textile-pattern border on all four sides */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top border */}
        <div
          className="absolute top-0 left-0 w-full h-6 bg-repeat-x"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 w-full h-6 bg-repeat-x"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        {/* Left border */}
        <div
          className="absolute top-0 left-0 h-full w-6 bg-repeat-y"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
        {/* Right border */}
        <div
          className="absolute top-0 right-0 h-full w-6 bg-repeat-y"
          style={{
            backgroundImage: "url('/textile-border.jpg')",
            backgroundSize: "contain",
          }}
        />
      </div>

      <style jsx>{`
        section {
          min-height: 320px;
        }
        @media (min-width: 768px) {
          section {
            min-height: 420px;
          }
        }
        @media (min-width: 1024px) {
          section {
            min-height: 520px;
          }
        }
        .text-black {
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.35);
        }
      `}</style>
    </section>
  );
}
