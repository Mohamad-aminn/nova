"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useState } from "react";
// Nike adidas puma Zara ihpne samsung shiami nestle chopan golrang
const brands = [
  {
    title: "Nike",
    img: "/img/nike-logo.jpg",
    href: "#",
  },
  {
    title: "Adidas",
    img: "/img/adidas-logo.png",
  },
  {
    title: "Puma",
    img: "/img/puma-logo.jpg",
  },
  {
    title: "Zara",
    img: "/img/zara-logo.jpg",
  },
  {
    title: "Apple",
    img: "/img/apple-logo.jpg",
  },
  {
    title: "Samsung",
    img: "/img/samsung-logo.png",
  },
  {
    title: "Xiaomi",
    img: "/img/xiaomi-logo.png",
  },
  {
    title: "Nestle",
    img: "/img/nestle-logo.png",
  },
  {
    title: "چوپان",
    img: "/img/choopan-logo.svg",
  },
  {
    title: "گلرنگ",
    img: "/img/golrang-logo.png",
  },
];

const Brands = () => {
  const [light, setLight] = useState(true);

  const switchLight = () => {
    setLight(!light);
  };

  useGSAP(() => {
    gsap.set(".brand-box", {
      x: (i) => i * -400,
    });

    gsap.to(".brand-box", {
      duration: 18,
      ease: "none",
      x: "-=4000", //move each box 500px to right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -4000), //force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });
  });

  return (
    <div className="p-5 relative bg-black pb-20 pt-60">
      <div
        onClick={switchLight}
        className="absolute -top-10 left-1/2 translate-x-[-50%] rotate-180"
      >
        <img
          alt="light bulb"
          src="/img/light-bulb.png"
          className={`size-40 object-contain z-20 transition-all ${
            light ? "opacity-100" : "opacity-30"
          }`}
        />

        <div className={`light ${light ? "opacity-100" : "opacity-0"}`} />
      </div>

      <div className={`wrapper ${light ? "opacity-100" : "opacity-20"}`}>
        <div className="relative left-[400px]">
          {brands.map((n, i) => (
            <div key={i} className="brand-box">
              <Link href={"#"} className="size-full ">
                <img
                  alt="apple logo"
                  src={n.img}
                  className="size-full object-contain "
                />
                {/* <p className="size-full"></p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
