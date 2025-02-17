import React from "react";
import Product from "./Product";
type Props = {
  data: {
    id: number;
    title: string;
    img: string;
    createdAt: string | null;
    updatedAt: string | null;
    description: string | null;
    price: number;
  }[];
};
const Products = ({ data }: Props) => {
  return (
    <div className="transition-all grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-10 xl:gap-16">
      {data.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Products;
