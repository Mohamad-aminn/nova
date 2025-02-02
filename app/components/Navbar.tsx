"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const [lastScroll, setLastScroll] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbar = useRef<HTMLDivElement>(null);

  const { y } = useWindowScroll();

  useGSAP(
    () => {
      gsap.to(navbar.current, {
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        duration: 0.2,
        ease: "power1.inOut",
      });
    },
    { dependencies: [visible] }
  );

  useEffect(() => {
    document.addEventListener("visibilitychange", (e) => {
      console.log(document.visibilityState);
    });
  }, []);

  useEffect(() => {
    if (y < 200) {
      navbar.current?.classList.add("whiteNavbar");
      navbar.current?.classList.remove("blackNavbar");

      // gsap.to(navbar.current, {
      //   background: "transparent",
      //   color: "#000",
      //   duration: 0.4,
      //   ease: "power1.inOut",
      // });
    } else if (lastScroll > y) {
      setVisible(true);
      navbar.current?.classList.add("blackNavbar");
      navbar.current?.classList.remove("whiteNavbar");

      // gsap.to(navbar.current, {
      //   background: "#000",
      //   color: "#ccc",
      //   duration: 0.4,
      //   ease: "power1.inOut",
      // });
    } else if (lastScroll < y) {
      setVisible(false);
    }

    setLastScroll(y);
  }, [y]);

  return (
    <div ref={navbar} className="navbar z-20">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-5 font-bold">
          <div className=""> دراپ دون یوزر و منو</div>
          <div>لوگو</div>
        </div>

        <div className="items-center gap-8 hidden md:flex font-semibold">
          <Link href={"#"}>لینک</Link>
          <Link href={"#"}>لینک</Link>
          <Link href={"#"}>لینک</Link>
          <Link href={"#"}>لینک</Link>
          <Link href={"#"}>لینک</Link>
        </div>

        <div className=" md:hidden">همبرگر</div>
      </div>
    </div>
  );
};

export default Navbar;
