import Products from "@/app/components/products/Products";
import db from "@/app/db/db";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const userDetails = await getCookie("userDetails", { cookies });
  const products = await db.query.products.findMany();

  return (
    <div className="container px-10 py-20 sm:mx-auto text-white min-h-dvh">
      <Products data={products} />
    </div>
  );
};

export default page;
