import db from "@/app/db/db";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import React from "react";
import SidabarLinks from "./SidabarLinks";

const activeLink = "#0F151A";
const content = "#0F151A";

const Sidebar = async () => {
  const jwt = await getCookie("access_token", { cookies });

  const header = new Headers();
  header.append("token", jwt!);

  const res = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    headers: header,
  });
  const user = await res.json();

  return (
    <div className="w-80 min-h-dvh bg-[#16202A] py-7">
      <div className="size-full flex flex-col">
        <div className="font-bold text-6xl text-center mb-20">Nova</div>
        <div className="flex flex-col gap-4">
          <SidabarLinks />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
