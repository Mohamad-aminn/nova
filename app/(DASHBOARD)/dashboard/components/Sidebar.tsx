import db from "@/app/db/db";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import React from "react";

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
    <div className="w-80 min-h-dvh bg-slate-800">
      <div>{user.phone_number}</div>
    </div>
  );
};

export default Sidebar;
