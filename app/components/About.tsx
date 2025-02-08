"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [status, setStatus] = useState(0);
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
            setStatus(1);
          } else if (self.progress <= 0.4) {
            setStatus(2);
          } else if (self.progress <= 0.6) {
            setStatus(3);
          } else if (self.progress <= 0.8) {
            setStatus(4);
          }
        },
      },
    });

    aboutAnimation.to(container.current, {
      position: "fixed",
      background: "#fff",
    });
  }, {});

  useEffect(() => {}, [status]);

  return (
    <div id="about" className="min-h-dvh w-screen">
      <div
        ref={container}
        className="w-screen top-0 left-0 z-20 h-screen bg-black"
      >
        <p>random text</p>
      </div>
    </div>
  );
};

export default About;
