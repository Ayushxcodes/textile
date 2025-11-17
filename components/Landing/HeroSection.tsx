'use client';
import React, { useState } from "react";
import { Calendar, MapPin, ArrowRight, Play, Pause } from "lucide-react";

export default function BharatTexHero() {
  const [isPlaying, setIsPlaying] = useState(true);

 const togglePlay = () => {
   const video = document.getElementById(
     "heroVideo"
   ) as HTMLVideoElement | null;

   if (video) {
     if (isPlaying) {
       video.pause();
     } else {
       video.play();
     }

     setIsPlaying(!isPlaying);
   }
 };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-12 px-4 overflow-hidden">
      {/* ================= TEXTILE BACKGROUND LAYERS ================= */}

      {/* Layer 1: Woven Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #f97316 0px, #f97316 2px, transparent 2px, transparent 16px),
                           repeating-linear-gradient(90deg, #22c55e 0px, #22c55e 2px, transparent 2px, transparent 16px)`,
          }}
        ></div>
      </div>

      {/* Layer 2: Diagonal Fabric Weave */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #f97316 20px, #f97316 22px, transparent 22px, transparent 40px),
                           repeating-linear-gradient(-45deg, transparent, transparent 20px, #22c55e 20px, #22c55e 22px, transparent 22px, transparent 40px)`,
          }}
        ></div>
      </div>

      {/* Layer 3: Thread Spirals - Top Left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 opacity-50">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Circular thread spools */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="10 5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="6 3"
          />
          {/* Wavy threads */}
          <path
            d="M 20 100 Q 40 80, 60 100 T 100 100 T 140 100 T 180 100"
            stroke="#f97316"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 20 120 Q 40 100, 60 120 T 100 120 T 140 120 T 180 120"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 20 140 Q 40 120, 60 140 T 100 140 T 140 140 T 180 140"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Layer 4: Thread Spirals - Top Right */}
      <div className="absolute -top-32 right-140 w-[500px] h-[500px] opacity-60 transform rotate-45">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M 50 200 Q 100 150, 150 200 T 250 200 T 350 200"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 50 220 Q 100 170, 150 220 T 250 220 T 350 220"
            stroke="#f97316"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 50 240 Q 100 190, 150 240 T 250 240 T 350 240"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="300"
            cy="200"
            r="60"
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="15 10"
          />
        </svg>
      </div>

      {/* Layer 5: Thread Spirals - Bottom Left */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 opacity-15 transform -rotate-12">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path
            d="M 10 150 Q 50 100, 100 150 T 190 150 T 280 150"
            stroke="#f97316"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 10 170 Q 50 120, 100 170 T 190 170 T 280 170"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <circle
            cx="200"
            cy="150"
            r="50"
            fill="none"
            stroke="#f97316"
            strokeWidth="2"
            strokeDasharray="8 5"
          />
          <circle
            cx="200"
            cy="150"
            r="35"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
        </svg>
      </div>

      {/* Layer 6: Thread Spirals - Bottom Right */}
      <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] opacity-10 transform rotate-180">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M 50 200 C 100 150, 150 250, 200 200 S 300 150, 350 200"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M 50 230 C 100 180, 150 280, 200 230 S 300 180, 350 230"
            stroke="#f97316"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="250"
            cy="215"
            r="70"
            fill="none"
            stroke="#f97316"
            strokeWidth="3"
            strokeDasharray="12 8"
          />
          <circle
            cx="250"
            cy="215"
            r="50"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="10 6"
          />
        </svg>
      </div>

      {/* Layer 7: Floating Thread Lines - Center */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-8">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path
            d="M 0 50 Q 75 25, 150 50 T 300 50"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeDasharray="20 10"
          />
          <path
            d="M 0 100 Q 75 75, 150 100 T 300 100"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeDasharray="20 10"
          />
          <path
            d="M 0 150 Q 75 125, 150 150 T 300 150"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            strokeDasharray="20 10"
          />
          <path
            d="M 0 200 Q 75 175, 150 200 T 300 200"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeDasharray="20 10"
          />
        </svg>
      </div>

      {/* Layer 8: Needle and Thread Elements */}
      <div className="absolute top-2/5 right-160 w-64 h-64 opacity-70 transform -rotate-45">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Needle */}
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="#94a3b8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="100" cy="30" r="8" fill="#94a3b8" />
          {/* Thread through needle */}
          <path
            d="M 100 40 Q 80 60, 100 80 T 100 120 T 100 160"
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Layer 9: Fabric Texture Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f97316 2px, transparent 2px),
                         radial-gradient(circle at 80% 50%, #22c55e 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0, 25px 25px",
        }}
      ></div>

      {/* Layer 10: Stitching Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: `repeating-linear-gradient(90deg, #f97316 0px, #f97316 10px, transparent 10px, transparent 20px)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: `repeating-linear-gradient(90deg, #22c55e 0px, #22c55e 10px, transparent 10px, transparent 20px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 -mt-6">
            {/* Textile Tag */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-orange-200">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">
                India&apos;s Premier Textile Event
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              NATIONAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
                {" "}
                Textile
                <br />
              </span>
              MINISTER&apos;S CONFERENCE
            </h1>

            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">
                    Event Dates
                  </p>
                  <p className="text-lg font-bold">8th - 9th January 2026</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Venue</p>
                  <p className="text-lg font-bold">Guwahati, Assam</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-orange-300 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* ================= RIGHT VIDEO SECTION ================= */}
          <div className="relative -mt-8">
  {/* TRICOLOUR BORDER WRAPPER */}
  <div
    className="relative p-6 rounded-2xl"
    style={{
      border: "6px solid transparent",
      borderRadius: "22px",
      background:
        "linear-gradient(white, white) padding-box, linear-gradient(90deg, #FF9933, #FFFFFF, #138808) border-box",
    }}
  >
    {/* VIDEO BOX */}
    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
      <video
        id="heroVideo"
        className="w-full h-full object-cover rounded-lg"
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

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-10"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-gray-800" />
        ) : (
          <Play className="w-6 h-6 text-gray-800 ml-1" />
        )}
      </button>

      {/* LIVE TAG */}
      <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md border-l-4 border-orange-500">
        <p className="text-xs font-bold text-gray-800">LIVE PREVIEW</p>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    </section>
  );
}
