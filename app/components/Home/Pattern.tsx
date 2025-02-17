"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

type Props = {
  component: 0 | 1;
};

const Pattern = ({ component }: Props) => {
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
  return (
    <div className={component === 1 ? "rotate-180" : ""}>
      <div
        className={`pattern ${
          component === 0 ? "-top-[440px]  h-[1200px]" : "h-[1200px] top-[20vh]"
        }`}
      >
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
    </div>
  );
};

export default Pattern;
