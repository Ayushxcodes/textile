'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const SlidingBanner = ({
  images = ["/slide-1.jpg", "/slide-1.jpg"],
  interval = 3000,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!images.length) return;

    const slide = () => {
      indexRef.current = (indexRef.current + 1) % images.length;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${
          indexRef.current * 100
        }%)`;
      }
    };

    const timer = setInterval(slide, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="overflow-hidden relative w-full h-auto rounded-2xl shadow-xl">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out h-full"
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="banner"
            width={1200}
            height={400}
            className="w-full h-full object-cover flex-shrink-0 min-w-full"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
