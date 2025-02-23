"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GrTransaction } from "react-icons/gr";

const sidebarLinks = [
  {
    icon: <GrTransaction />,
    name: "خانه",
    href: "/dashboard",
  },
  {
    icon: <GrTransaction />,
    name: "سفارش ها",
    href: "/dashboard/transactions",
  },
  {
    icon: <GrTransaction />,
    name: "خروج",
    href: "/dashboard/logout",
  },
];
const SidabarLinks = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {sidebarLinks?.map((l, i: number) => (
        <Link
          key={i}
          href={l.href}
          className={`flex hover:bg-[#0F151A] transition-all relative items-center gap-5 px-8 me-8 py-4 rounded-e-lg ${
            pathname === l.href ? "bg-[#0F151A]" : "text-whiteText/70"
          }`}
        >
          {pathname === l.href && (
            <div className="absolute w-1 h-full bg-blue-700 right-0 top-0"></div>
          )}
          {l.icon}
          <p>{l.name}</p>
        </Link>
      ))}
    </>
  );
};

export default SidabarLinks;
