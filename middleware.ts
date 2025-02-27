// export { auth as middleware } from "@/auth";

import { deleteCookie, getCookie } from "cookies-next";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const middleware = async (req: NextRequest) => {
  const jwt = await getCookie("access_token", { cookies });

  //  auth user here or in dashboard ??
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!jwt)
      return NextResponse.redirect(
        new URL(`/login?callback=${req.nextUrl.pathname}`, req.url)
      );

    const auth = await jwtVerify(jwt, secret);

    if (!auth) {
      await deleteCookie("access_token", { cookies });
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (jwt) return NextResponse.redirect(new URL("/dashboard", req.url));
  }
};
