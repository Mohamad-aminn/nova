"use server";

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
    const res = await fetch("http://localhost:3000/api/product");
    const trendCommodity = await res.json();

    return trendCommodity;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: number | string) => {
  const product: Product = await fetch(
    `http://localhost:3000/api/product/${id}`
  ).then(async (response) => await response.json());

  return product;
};
