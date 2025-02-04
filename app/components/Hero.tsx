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

  // 4 * (6 - 1);
  return (
    <div className="z-10 h-dvh relative bg-black overflow-hidden">
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
            <div key={num} className="animated-line w-full h-px bg-laserCyan" />
          ))}
        </div>
      </div>

      <div className="hero-radial" />

      <div className="hero-container mt-14">
        <div className="size-full flex flex-col gap-10 items-center text-center">
          <h4 className="font-bold text-6xl md:text-8xl leading-relaxed md:leading-relaxed text-nowrap">
            لذت خرید راحت
            <br /> با امنیت بالا
          </h4>

          <div className="text-sm max-w-sm mb-4">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>

          <div className="flex justify-around items-center size-full">
            <div className="rounded-full border border-white/30 py-8 px-20"></div>
            <div className="rounded-full border border-white/30 py-8 px-20"></div>
            <div className="rounded-full border border-white/30 py-8 px-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
