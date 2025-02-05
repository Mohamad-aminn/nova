"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Brands = () => {
  useGSAP(() => {
    gsap.set(".brand", {
      x: (i) => i * -50,
    });

    gsap.to(".brand", {
      duration: 5,
      ease: "none",
      x: "-=500", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -500), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });
  });

  return (
    <div className="p-5 bg-black py-20">
      {/* <div className="size-full">
        <img className="size-full" src="/img/light.png" alt="light" />
      </div> */}

      <div className="wrapper">
        <div className="relative ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <div
              key={n}
              className={`size-14 
             absolute text-xl leading-relaxed text-center text-black bg-red-300 brand`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
