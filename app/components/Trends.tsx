import React from "react";
import TrendCard from "./TrendCard";

type Commodity = {
  id: number;
  title: string;
  price: number;
};

const Trends = async () => {
  const res = await fetch("http://localhost:3000/api/product");
  const trendCommodity = await res.json();

  console.log(trendCommodity);
  return (
    <div className="bg-bgDark border border-border overflow-x-scroll p-4 text-whiteText">
      <div className="container mx-auto">
        <div className="text-xl font-semibold my-4">
          <p>⬅️ کالا های ترند این هفته 🔥</p>
        </div>
        <div className="w-full flex justify-between ">
          {trendCommodity.map((c: Commodity, i: number) => (
            <div key={i}>
              <TrendCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
