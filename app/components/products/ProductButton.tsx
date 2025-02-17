import { getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";
import React from "react";

type Props = {
  title: string;
  className?: string;
  id: number;
};
const ProductButton = async ({ title, className, id }: Props) => {
  const userDetails = await getCookie("userDetails", { cookies });

  return (
    <button
      type="button"
      onClick={async () => {
        "use server";
        try {
          let userDetailsObject;

          if (userDetails) {
            userDetailsObject = JSON.parse(userDetails);
          } else {
            await setCookie("userDetails", JSON.stringify({ cart: [] }), {
              cookies,
              path: "/",
              maxAge: 1200000,
              domain: "localhost",
            });

            const userDetails = await getCookie("userDetails", { cookies });
            console.log(userDetails);
            userDetailsObject = JSON.parse(userDetails!);
            console.log(userDetailsObject);
          }

          const cart: number[] = userDetailsObject.cart;
          cart.push(id);
          await setCookie(
            "userDetails",
            JSON.stringify({ ...userDetailsObject, cart }),
            {
              cookies,
              path: "/",
              maxAge: 1200000,
              domain: "localhost",
            }
          );
        } catch (error) {
          console.log(error);
        }
      }}
      className={`p-3 bg-red-400 rounded-md ${className}`}
    >
      {title}
    </button>
  );
};

export default ProductButton;
