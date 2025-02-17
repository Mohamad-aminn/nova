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

  const handleClick = async () => {
    try {
      let userDetailsObject;

      if (userDetails) {
        userDetailsObject = JSON.parse(userDetails);
      } else {
        await setCookie("userDetails", JSON.stringify({ cart: [] }), {
          cookies,
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
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`p-3 bg-red-400 rounded-md ${className}`}
    >
      {title}
    </button>
  );
};

export default ProductButton;
