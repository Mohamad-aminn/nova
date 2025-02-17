import React from "react";
import ProductButton from "./ProductButton";

const Product = ({ product }: { product: unknown }) => {
  return (
    <div className="border rounded-sm mx-auto">
      <img alt={product.title} src={product.img} />
      <div className="size-full p-4 flex flex-col justify-start items-start gap-4">
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <ProductButton id={product.id} title="اضافه کن" />
      </div>
    </div>
  );
};

export default Product;
