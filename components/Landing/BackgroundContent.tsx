import React from "react";

const BackgroundContent = ({
  image = "/bg-2.jpg",
  cornerImages = [
    "/corner1.png",
    "/corner2.png",
    "/corner3.png",
    "/corner4.png",
  ],
}) => {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-6 text-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Corner Images */}
      <img
        src={cornerImages[0]}
        alt="corner"
        className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 md:w-50 md:h-50"
      />
      <img
        src={cornerImages[1]}
        alt="corner"
        className="absolute top-0 right-0 w-12 h-12 sm:w-20 sm:h-20 md:w-50 md:h-50"
      />
      <img
        src={cornerImages[2]}
        alt="corner"
        className="absolute bottom-0 left-0 w-12 h-12 sm:w-20 sm:h-20 md:w-50 md:h-50"
      />
      <img
        src={cornerImages[3]}
        alt="corner"
        className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 md:w-50 md:h-50"
      />

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-900">
        Background
      </h2>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-black">
        From India to the World
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto leading-relaxed px-2">
        India’s textile industry is a key pillar of the economy, known for its
        rich heritage, skilled workforce, and export potential. However, it
        faces challenges like outdated technology, infrastructure gaps, and
        global competition. To address these, the Ministry of Textiles is
        organizing the{" "}
        <em className="underline">
          National Textile Ministers’ Conference (8th and 9th January 2026)
        </em>
        , bringing together central and state governments to align strategies,
        share best practices, and chart a unified path for the sector’s growth.
      </p>
    </div>
  );
};

export default BackgroundContent;
