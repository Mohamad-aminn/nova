import db from "@/app/db/db";
import { products } from "@/app/db/schema";
import { getCookie } from "cookies-next";
import { and, inArray } from "drizzle-orm";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const userDetails = await getCookie("userDetails", { cookies });

  const cartIds: number[] = userDetails ? JSON.parse(userDetails).cart : null;

  const userCartItems = await db
    .select()
    .from(products)
    .where(and(inArray(products.id, cartIds)));

  return (
    <div className=" w-full overflow-scroll min-h-dvh bg-slate-500">
      {userCartItems?.map((item, i) => (
        <div key={i}>
          <div>{item.title}</div>
          <div>تعداد: {cartIds.filter((n) => n === item.id).length}</div>
        </div>
      ))}

      <div>dokme kharid ba function + map + form address </div>
    </div>
  );
};

export default page;
