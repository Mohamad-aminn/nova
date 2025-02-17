import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

const NavigationBar = async () => {
  const userDetails = await getCookie("userDetails", { cookies });
  const cartLength = userDetails ? JSON.parse(userDetails).cart.length : 0;
  return (
    <div className="fixed z-50 border-b-0 rounded-t-xl bottom-0 left-0 p-5 sm:hidden w-full bg-black border border-[#39fdfa77]/40">
      <div className="size-full flex items-center justify-around">
        <Link href={"/dashboard"} className="size-full flex justify-center">
          <FaUser size={24} color="#67e8f9" />
        </Link>
        <Link href={"/"} className="size-full flex justify-center">
          <GoHomeFill size={24} color="#67e8f9" />
        </Link>
        <Link
          href={"/dashboard/cart"}
          className="size-full relative flex justify-center"
        >
          {cartLength > 0 && (
            <div className="absolute -top-3 left-[57%]">
              <p className="badge badge-info font-bold text-lg">{cartLength}</p>
            </div>
          )}

          <FaShoppingCart size={24} color="#67e8f9" />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
