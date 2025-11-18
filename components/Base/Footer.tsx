"use client";
import React from "react";

export default function BharatTexFooter() {
  return (
    <footer className="relative bg-white text-gray-800 mt-20 border-t-2 border-orange-300">
      {/* Textile Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, #f97316 12px, #f97316 24px),
          repeating-linear-gradient(-45deg, transparent, transparent 12px, #22c55e 12px, #22c55e 24px)`,
        }}
      />

      {/* Top Decorative Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 — Emblems */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl text-gray-700">अजम छबकाब</h3>
          <h3 className="font-bold text-xl text-gray-700">सत्यमेव जपते</h3>

          <div className="pt-4">
            <h4 className="font-extrabold text-lg text-gray-800">
              वस्त्र मंत्रालय
            </h4>
            <p className="text-sm font-semibold tracking-wide">
              MINISTRY OF TEXTILES <br />
              Govt. of India
            </p>
          </div>

          <div className="pt-4">
            <h4 className="font-extrabold text-lg text-gray-800">
              सप्प्रव जकतो
            </h4>
            <p className="text-sm font-semibold tracking-wide">
              GOVERNMENT OF ASSAM
            </p>
          </div>
        </div>

        {/* Column 2 — Event Title */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-2xl font-bold text-orange-600 leading-tight">
            NATIONAL TEXTILE
          </h3>
          <h3 className="text-2xl font-bold text-green-600 leading-tight">
            MINISTERS CONFERENCE
          </h3>

          <p className="font-semibold text-gray-700 text-lg pt-2">
            8th & 9th January 2026
          </p>
        </div>

        {/* Column 3 — Venue Info */}
        <div className="space-y-2 md:text-right">
          <h4 className="font-bold text-gray-800 text-lg">Venue</h4>

          <p className="text-sm leading-relaxed font-medium">
            Mayfair Spring Valley Resort <br />
            Tapesia Garden Road, <br />
            Batakuchi Gaon Sonapur, <br />
            Guwahati, Assam — 782402
          </p>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>

      {/* Bottom Bar */}
      <div className="relative bg-white/80 py-4 text-center text-xs text-gray-600 border-t border-orange-200">
        © 2026 Ministry of Textiles, Government of India. All Rights Reserved.
      </div>
    </footer>
  );
}
