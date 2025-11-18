"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BharatTexHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Hero, 1 = Banner

  const togglePlay = () => {
    const video = document.getElementById("bgVideo") as HTMLVideoElement | null;
    if (video) {
      isPlaying ? video.pause() : video.play();
      setIsPlaying(!isPlaying);
    }
  };

  // AUTO SLIDE FORWARD → BACKWARD
  useEffect(() => {
    const forwardTimer = setTimeout(() => setActiveSlide(1), 5000);
    const backwardTimer = setTimeout(() => setActiveSlide(0), 10000);

    return () => {
      clearTimeout(forwardTimer);
      clearTimeout(backwardTimer);
    };
  }, []);

  const goNext = () => setActiveSlide(1);
  const goPrev = () => setActiveSlide(0);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* ======================== SLIDE WRAPPER ======================== */}
      <div
        className={`flex h-full w-[200%] bg-white md:bg-black transition-transform duration-[1200ms] ease-in-out ${
          activeSlide === 1
            ? "-translate-x-[100vw] md:-translate-x-1/2"
            : "translate-x-0"
        }`}
      >
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative h-full w-full md:w-1/2 flex items-center justify-center text-center px-4 overflow-hidden">
          {/* Prevent black flash */}
          <div className="absolute inset-0 bg-black"></div>

          {/* Background Video */}
          <video
            id="bgVideo"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              NATIONAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                {" "}
                Textile Minister&apos;s Conference
              </span>
            </h1>

            <div className="space-y-3 text-lg">
              <p className="flex justify-center items-center gap-3">
                <Calendar className="w-6 h-6 text-orange-400" />
                8th - 9th January 2026
              </p>

              <p className="flex justify-center items-center gap-3">
                <MapPin className="w-6 h-6 text-green-400" />
                Guwahati, Assam
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Play / Pause Button */}
            <button
              onClick={togglePlay}
              className="mx-auto mt-6 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-gray-900" />
              ) : (
                <Play className="w-6 h-6 text-gray-900 ml-1" />
              )}
            </button>
          </div>
        </section>

        {/* ===================== SECOND BANNER SECTION ===================== */}
        <section className="h-full w-full md:w-1/2 flex items-center justify-center bg-white overflow-hidden">
          <div
            className={`transition-transform duration-700 ${
              activeSlide === 1 ? "translate-y-0" : "translate-y-6"
            }`}
          >
            <img
              src="/slide-1.jpg"
              alt="Banner"
              className="rounded-2xl shadow-2xl w-[90%] max-w-[550px] md:max-w-5xl mx-auto"
            />
          </div>
        </section>
      </div>

      {/* ======================== MANUAL CONTROLS ======================== */}
      <button
        onClick={goPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
}
