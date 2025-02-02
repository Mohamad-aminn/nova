"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to(".animated-line", {
      y: 1000,
      ease: "none",
      duration: 4,
      opacity: 0,
      stagger: {
        each: 1.3,
        repeat: -1,
        repeatDelay: 3.7,
      },
    });
  }, {});

  4 * (6 - 1);
  return (
    <div className="z-10 min-h-dvh relative bg-black overflow-hidden">
      <div className="pattern">
        {/* vertical lines */}
        <div className="flex justify-center size-full gap-16 md:gap-24 lg:gap-40">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <div className={`line-rotate`} key={num} />
          ))}
        </div>
        {/* horizontal lines */}
        <div className="flex flex-col gap-[-14rem] absolute top-0 size-full">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="animated-line w-full h-px bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
