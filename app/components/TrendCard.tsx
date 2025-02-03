import React from "react";

const TrendCard = ({
  id,
  title,
  price,
}: {
  id: number;
  title: string;
  price: number;
}) => {
  return (
    <div className="border rounded-lg overflow-hidden border-border">
      <div className="size-40">
        <img
          className="size-full object-cover object-center"
          alt="product image"
          src={"/img/meat.jpg"}
        />
      </div>

      <div className="p-5 font-semibold flex flex-col gap-4">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default TrendCard;
