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
    <div className="p-5 bg-black pb-20 pt-72">
      {/* <div className="size-full">
        <img className="size-full" src="/img/light.png" alt="light" />
      </div> */}

      <div className="wrapper">
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
