import React from "react";
import ProductButton from "./ProductButton";
type Props = {
  product: {
    id: number;
    title: string;
    img: string;
    createdAt: string | null;
    updatedAt: string | null;
    description: string | null;
    price: number;
  };
};
const Product = ({ product }: Props) => {
  return (
    <div className="border rounded-sm mx-auto">
      <img
        className="max-h-96 xl:max-h-[440px] object-center"
        alt={product?.title}
        src={
          "https://twentytwowords.com/wp-content/uploads/2021/10/B08QKYDLS2-870x1024.jpg.webp"
        }
      />
      <div className="size-full p-4 flex flex-col justify-start items-start gap-4">
        <div>{product?.title}</div>
        <div>{product?.description}</div>
        <div>{product?.price}</div>
        <ProductButton id={product?.id} title="اضافه کن" />
      </div>
    </div>
  );
};

export default Product;
