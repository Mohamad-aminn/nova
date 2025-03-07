"use server";

import { toast } from "react-toastify";

const url =
  process.env.NODE_ENV === "production"
    ? "https://nova-eight-kappa.vercel.app"
    : "http://localhost:3000";

export type Product = {
  id: number;
  title: string;
  description: string;
  img: string;
  colors: { label: string; color: string }[];
};
export type Commodity = {
  id: number;
  title: string;
  price: number;
};

export const getproducts = async () => {
  try {
    const res = await fetch(`${url}/api/product`);
    const result = await res.json();

    if (!res.ok) {
      return toast.error("error");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: number | string) => {
  const product: Product = await fetch(`${url}/api/product/${id}`).then(
    async (response) => await response.json()
  );

  return product;
};
