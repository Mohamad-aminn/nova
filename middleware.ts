// export { auth as middleware } from "@/auth";

import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const jwt = await getCookie("access_token", { cookies });

  //  auth user here or in dashboard ??
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!jwt) return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (jwt) return NextResponse.redirect(new URL("/dashboard", req.url));
  }
};
