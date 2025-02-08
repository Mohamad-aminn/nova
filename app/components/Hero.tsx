import React from "react";
import Pattern from "./Pattern";
import Radialbg from "./Radialbg";

const Hero = () => {
  // 4 * (6 - 1);
  return (
    <div className="z-10 h-dvh relative bg-black overflow-hidden">
      <Pattern component={0} />

      <Radialbg blur={200} className="bg-[#39fdfaa9] h-36 w-[70vw]" />

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
