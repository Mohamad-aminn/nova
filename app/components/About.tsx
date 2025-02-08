"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

gsap.registerPlugin(ScrollTrigger);

const TEXTS = {
  0: "راحتی در خرید",
  1: "با بهترین قیمت",
  2: "ارسال رایگان",
  3: "کونتون رو به ما بسپارید",
};

const About = () => {
  const [status, setStatus] = useState<0 | 1 | 2 | 3>(0);
  const container = useRef(null);

  useGSAP(() => {
    const aboutAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "center center",
        end: "+=3000",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        ontoggle: (self) => {
          console.log(self);
        },
        onUpdate: (self) => {
          if (self.progress <= 0.2) {
            setStatus(0);
          } else if (self.progress <= 0.4) {
            setStatus(1);
          } else if (self.progress <= 0.6) {
            setStatus(2);
          } else if (self.progress <= 0.8) {
            setStatus(3);
          }
        },
      },
    });

    aboutAnimation.to(container.current, {
      position: "fixed",
    });
  }, {});

  return (
    <div id="about" className="min-h-dvh w-screen">
      <div
        ref={container}
        className="w-screen top-0 left-0 flex items-center justify-center z-20 h-screen bg-black"
      >
        <TextTransition
          className="text-7xl font-semibold text-whiteText"
          springConfig={presets.wobbly}
        >
          {TEXTS[status]}
        </TextTransition>
      </div>
    </div>
  );
};

export default About;
