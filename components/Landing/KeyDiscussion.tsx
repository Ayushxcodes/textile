"use client";
import React, { useState } from "react";
import { Sparkles } from "lucide-react";

// TypeScript Interface for Color Scheme
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
}

export default function DiscussionTopicsSection() {
  // FIX: Explicitly define the state type as number or null.
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const topics: string[] = [
    "Review of State Textile Policies",
    "Boosting Exports & Global Competitiveness",
    "Sustainability & Eco-Friendly Textiles",
    "Technology Upgradation",
    "Skill Development & Employment",
    "Infrastructure Development",
    "Investment & Industry Support",
    "Promotion of Handloom & Handicraft Sector",
    "Technical Textiles Growth",
    "Design Innovation for Global Markets",
    "Support for MSMEs & Weavers Through Design Intervention",
    "Research & Development in Textile Design",
    "Use of Technology in Design",
    "Sustainability in Design",
    "Trend Forecasting & Design Education",
    "Promotion of Regional & Traditional Designs",
    "Collaboration with Fashion Institutes & Industry",
  ];

  const colors: ColorScheme[] = [
    { primary: "#FF6B6B", secondary: "#FFE66D", accent: "#4ECDC4" },
    { primary: "#A8E6CF", secondary: "#FFD3B6", accent: "#FFAAA5" },
    { primary: "#FF8B94", secondary: "#C7CEEA", accent: "#FFEAA7" },
    { primary: "#B4A7D6", secondary: "#C5E3BF", accent: "#FFD4A3" },
    { primary: "#FF9AA2", secondary: "#FFDAC1", accent: "#B5EAD7" },
    { primary: "#E2F0CB", secondary: "#C7CEEA", accent: "#FFAAA5" },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* ========== SVG FABRIC BACKGROUND LAYERS ========== */}

      {/* Woven Fabric Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="weave"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="40" height="2" fill="#f97316" />
              <rect x="0" y="0" width="2" height="40" fill="#22c55e" />
              <rect x="20" y="20" width="40" height="2" fill="#f97316" />
              <rect x="20" y="0" width="2" height="40" fill="#22c55e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#weave)" />
        </svg>
      </div>

      {/* Floating Thread Spools */}
      <div className="absolute top-10 left-20 w-32 h-32 opacity-20 animate-pulse">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="8 4"
          />
          <circle
            cx="50"
            cy="50"
            r="25"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="6 3"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <path
            d="M 20 50 Q 35 30, 50 50 T 80 50"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div
        className="absolute bottom-20 right-10 w-40 h-40 opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeDasharray="10 5"
          />
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="7 4"
          />
          <path
            d="M 10 50 Q 30 25, 50 50 T 90 50"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>

      {/* Stitching Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="stitch"
              x="0"
              y="0"
              width="60"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="10"
                x2="15"
                y2="10"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="2 8"
              />
              <line
                x1="20"
                y1="10"
                x2="35"
                y2="10"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="2 8"
              />
              <line
                x1="40"
                y1="10"
                x2="55"
                y2="10"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="2 8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stitch)" />
        </svg>
      </div>

      {/* Fabric Waves */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          <path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 L1500,0 L0,0 Z"
            fill="#f97316"
          />
          <path
            d="M0,200 Q250,150 500,200 T1000,200 T1500,200 L1500,100 L0,100 Z"
            fill="#22c55e"
          />
          <path
            d="M0,300 Q250,250 500,300 T1000,300 T1500,300 L1500,200 L0,200 Z"
            fill="#f59e0b"
          />
        </svg>
      </div>

      {/* Yarn Ball Decorations */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
          />
          <path
            d="M 10 50 Q 30 20, 50 50 Q 70 80, 90 50"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50 10 Q 20 30, 50 50 Q 80 70, 50 90"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="20"
            ry="35"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title with Textile Decorations */}
        <div className="mb-12 relative">
          <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-orange-500 via-green-500 to-yellow-500 rounded-full opacity-60"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-left leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
              Key Discussion Topics
            </span>
            <br />
            <span className="text-gray-800">
              National Textile Ministers&apos; Conference
            </span>
          </h2>

          {/* Decorative Thread Line */}
          <div className="mt-4 flex items-center space-x-2">
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Topics Grid - Fabric Swatches Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topics.map((topic, index) => {
            const colorScheme = colors[index % colors.length];
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
                style={{
                  transform: isHovered
                    ? "translateY(-8px) rotate(1deg)"
                    : "translateY(0) rotate(0)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Fabric Swatch Card */}
                <div
                  className="relative p-6 rounded-2xl shadow-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colorScheme.primary}20 0%, ${colorScheme.secondary}30 100%)`,
                    border: `2px solid ${
                      isHovered ? colorScheme.accent : colorScheme.primary
                    }40`,
                    boxShadow: isHovered
                      ? `0 20px 40px ${colorScheme.primary}40, 0 0 20px ${colorScheme.accent}30`
                      : "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Fabric Texture Pattern */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <pattern
                        id={`fabric-${index}`}
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="20"
                          y2="0"
                          stroke={colorScheme.primary}
                          strokeWidth="1"
                        />
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="20"
                          stroke={colorScheme.secondary}
                          strokeWidth="1"
                        />
                        <line
                          x1="10"
                          y1="10"
                          x2="20"
                          y2="10"
                          stroke={colorScheme.accent}
                          strokeWidth="0.5"
                        />
                        <line
                          x1="10"
                          y1="10"
                          x2="10"
                          y2="20"
                          stroke={colorScheme.accent}
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#fabric-${index})`}
                    />
                  </svg>

                  {/* Thread Accent Line */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                    style={{
                      background: `linear-gradient(90deg, ${colorScheme.primary}, ${colorScheme.accent}, ${colorScheme.secondary})`,
                      transform: isHovered ? "scaleX(1.1)" : "scaleX(1)",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* Stitching Decoration */}
                  <div className="absolute top-2 left-0 right-0 flex justify-center space-x-2 opacity-40">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full"
                        style={{
                          backgroundColor: colorScheme.primary,
                          animation: isHovered
                            ? `pulse 1s ease-in-out ${i * 0.1}s infinite`
                            : "none",
                        }}
                      />
                    ))}
                  </div>

                  {/* Fabric Tag Corner */}
                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${colorScheme.primary}60, ${colorScheme.accent}60)`,
                      transform: isHovered
                        ? "rotate(180deg) scale(1.2)"
                        : "rotate(0) scale(1)",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    <Sparkles
                      className="w-4 h-4"
                      style={{ color: colorScheme.accent }}
                    />
                  </div>

                  {/* Topic Text */}
                  <p
                    className="relative text-sm md:text-base font-semibold leading-relaxed z-10"
                    style={{
                      color: isHovered ? "#1a1a1a" : "#2d2d2d",
                      transform: isHovered ? "scale(1.02)" : "scale(1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {topic}
                  </p>

                  {/* Fabric Fold Effect */}
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-20"
                    style={{
                      background: `linear-gradient(225deg, transparent 50%, ${colorScheme.primary} 50%)`,
                      transform: isHovered ? "scale(1.5)" : "scale(1)",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* Thread Hanging Animation */}
                  {isHovered && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <svg width="4" height="30" className="animate-pulse">
                        <line
                          x1="2"
                          y1="0"
                          x2="2"
                          y2="30"
                          stroke={colorScheme.accent}
                          strokeWidth="2"
                          strokeDasharray="3 2"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Fabric Shadow Effect */}
                <div
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${colorScheme.primary}15, transparent)`,
                    filter: "blur(10px)",
                    transform: isHovered ? "scale(1.1)" : "scale(0.95)",
                    opacity: isHovered ? 1 : 0,
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Decorative Threads */}
        <div className="mt-16 flex justify-center space-x-4 opacity-30">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </section>
  );
}
