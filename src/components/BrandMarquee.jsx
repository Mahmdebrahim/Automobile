import React from 'react';
import audi from "../assets/audi.svg";
import bmw from "../assets/bmw.svg";
import ford from "../assets/ford.svg";
import volks from "../assets/volks.svg";
import kia from "../assets/kia.svg";
import opel from "../assets/opel.svg";
import nissan from "../assets/nissan.svg";
import hyundai from "../assets/hyundai.svg";
import jeep from "../assets/jeep.svg";
import dacia from "../assets/dacia.svg";

const BrandMarquee = () => {
  const brandLogos = [
    { name: "Audi", src: audi },
    { name: "BMW", src: bmw },
    { name: "Ford", src: ford },
    { name: "Volkswagen", src: volks },
    { name: "Kia", src: kia },
    { name: "Opel", src: opel },
    { name: "Nissan", src: nissan },
    { name: "Hyundai", src: hyundai },
    { name: "Jeep", src: jeep },
    { name: "Dacia", src: dacia },
  ];

  return (
    <div className="py-8 md:py-12 bg-white overflow-hidden border-y border-light-lavender">
      <h3 className="text-center text-dark-mauve text-sm md:text-base mb-8 md:mb-12 font-medium px-4">
        Wir arbeiten mit führenden Marken zusammen —
      </h3>
      <div className="relative w-full overflow-hidden select-none">
        {/* Gradients for smooth fade out */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-20 pointer-events-none bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-20 pointer-events-none bg-linear-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee-fast hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
            {brandLogos.map((brand, index) => (
              <div
                key={`set1-${index}`}
                className="shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
          {/* Second set of logos (identical for seamless loop) */}
          <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
            {brandLogos.map((brand, index) => (
              <div
                key={`set2-${index}`}
                className="shrink-0 flex items-center justify-center min-w-[120px] md:min-w-[150px]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
