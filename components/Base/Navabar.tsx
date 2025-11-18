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
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #f97316 10px, #f97316 18px),
            repeating-linear-gradient(-45deg, transparent, transparent 10px, #22c55e 10px, #22c55e 18px)`,
        }}
      ></div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-green-500 to-orange-500"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 relative">
        {/* ▶ REDUCED HEIGHT */}
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-7 h-7">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #f97316 25%, transparent 25%, transparent 50%, #f97316 50%, #f97316 75%, transparent 75%, transparent)",
                    backgroundSize: "5px 5px",
                  }}
                ></div>
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, #22c55e 25%, transparent 25%, transparent 50%, #22c55e 50%, #22c55e 75%, transparent 75%, transparent)",
                    backgroundSize: "5px 5px",
                    mixBlendMode: "multiply",
                  }}
                ></div>
              </div>

              <div>
                <h1 className="text-lg font-bold text-gray-800 leading-tight">
                  NATIONAL <span className="text-orange-500">TEXTILE</span> 2026
                </h1>
                <p className="text-[9px] text-gray-500 uppercase tracking-wider -mt-1">
                  MINISTERS CONFERENCE
                </p>
              </div>
            </div>
          </div>

          {/* Event Info (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-3 text-[11px] relative z-[110]">
            <div className="flex items-center space-x-1.5 text-gray-700 bg-orange-50 px-2 py-1 rounded-md border border-orange-200">
              <Calendar className="w-3 h-3 text-orange-500" />
              <span>8–9 Jan 2026</span>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-700 bg-green-50 px-2 py-1 rounded-md border border-green-200">
              <MapPin className="w-3 h-3 text-green-600" />
              <span>Guwahati, Assam</span>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-gray-700 hover:bg-orange-50 border border-orange-200 relative z-[120]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center space-x-1 pb-1.5 relative z-[120]">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-1.5 text-[13px] font-semibold text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 rounded-lg transition-all duration-200 border border-transparent hover:border-orange-200 flex items-center space-x-1">
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === index
                        ? "rotate-180 text-orange-500"
                        : ""
                    }`}
                  />
                )}
              </button>

              {item.hasDropdown && activeDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-orange-100 py-2.5 z-[999]">
                  {item.items.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-green-50 hover:text-orange-600 border-l-4 border-transparent hover:border-orange-500 transition-all"
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-3 animate-in slide-in-from-top duration-300 relative z-[200]">
            <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg space-y-2 border border-orange-200">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <Calendar className="w-4 h-4 text-orange-500" />
                <span>8–9 January 2026</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Guwahati, Assam</span>
              </div>
            </div>

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
                        className="block px-8 py-2.5 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 border-l-4 border-transparent hover:border-orange-500 transition-colors"
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
