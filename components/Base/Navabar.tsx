"use client";
import React, { useState } from "react";
import { ChevronDown, Calendar, MapPin, Menu, X } from "lucide-react";

export default function BharatTexNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", hasDropdown: false, items: [] },
    {
      label: "About the Event",
      hasDropdown: true,
      items: [
        "Event Overview",
        "Vision & Mission",
        "Past Editions",
        "Venue Information",
      ],
    },
    {
      label: "Sessions",
      hasDropdown: true,
      items: [
        "Conference Schedule",
        "Workshops",
        "Panel Discussions",
        "Keynote Speakers",
      ],
    },
    {
      label: "Administrative",
      hasDropdown: true,
      items: ["Registration", "Guidelines", "Exhibitor Info", "Visitor Info"],
    },
    {
      label: "Archive",
      hasDropdown: true,
      items: ["2024 Edition", "2023 Edition", "Photo Gallery", "Video Gallery"],
    },
    { label: "Contact Us", hasDropdown: false, items: [] },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[100] relative">
      {/* Textile Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #f97316 10px, #f97316 20px),
          repeating-linear-gradient(-45deg, transparent, transparent 10px, #22c55e 10px, #22c55e 20px)`,
        }}
      ></div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              {/* Woven Fabric Icon */}
              <div className="relative w-12 h-12">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #f97316 25%, transparent 25%, transparent 50%, #f97316 50%, #f97316 75%, transparent 75%, transparent)",
                    backgroundSize: "8px 8px",
                  }}
                ></div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, #22c55e 25%, transparent 25%, transparent 50%, #22c55e 50%, #22c55e 75%, transparent 75%, transparent)",
                    backgroundSize: "8px 8px",
                    mixBlendMode: "multiply",
                  }}
                ></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  NATIONAL{" "}
                  <span className="text-orange-500">TEXTILE</span> 2026
                </h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  MINISTERS CONFERENCE
                </p>
              </div>
            </div>
          </div>

          {/* Event Info (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm relative z-[110]">
            <div className="flex items-center space-x-2 text-gray-700 bg-orange-50 px-3 py-2 rounded-lg border border-orange-200">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="font-medium">
                8<sup>th</sup>–9<sup>th</sup> January 2026
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 bg-green-50 px-3 py-2 rounded-lg border border-green-200">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="font-medium">Guwahati, Assam</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-orange-50 border-2 border-orange-200 relative z-[120]"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-2 pb-4 relative z-[120] overflow-visible">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 rounded-lg transition-all duration-200 flex items-center space-x-1 border-2 border-transparent hover:border-orange-200">
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === index
                        ? "rotate-180 text-orange-500"
                        : ""
                    }`}
                  />
                )}
              </button>

              {/* FIXED DROPDOWN */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border-2 border-orange-100 py-3 z-[999] overflow-visible">
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #f97316 0px, #f97316 2px, transparent 2px, transparent 6px)",
                    }}
                  ></div>

                  {item.items.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 hover:text-orange-600 transition-all duration-150 border-l-4 border-transparent hover:border-orange-500 font-medium"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top duration-300 relative z-[200]">
            {/* Mobile Event Info */}
            <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg space-y-2 border-2 border-orange-200">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span className="font-medium">8–9 January 2026</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-medium">Guwahati, Assam</span>
              </div>
            </div>

            {/* Mobile Menu Items */}
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full px-4 py-3 text-left text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center justify-between font-semibold"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index
                          ? "rotate-180 text-orange-500"
                          : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasDropdown && activeDropdown === index && (
                  <div className="bg-gray-50 py-2">
                    {item.items.map((dropdownItem, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-8 py-2.5 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors border-l-4 border-transparent hover:border-orange-500"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
