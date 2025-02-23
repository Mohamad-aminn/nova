import db from "@/app/db/db";
import { purchases } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import React from "react";
import { jwtVerify } from "jose";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { secret } from "@/middleware";
import { redirect } from "next/navigation";

const page = async () => {
  const jwt = await getCookie("access_token", { cookies });

  const userTokenDetail = await jwtVerify(jwt!, secret);

  // find all users purchases based on user id
  const userPurchases = userTokenDetail
    ? await db.query.purchases.findMany({
        where: eq(purchases.buyerId, Number(userTokenDetail.payload.id!)),
      })
    : redirect("/login");
  console.log(userPurchases);
  return <div className="w-full h-full">got all purchases just need style</div>;
};

export default page;
