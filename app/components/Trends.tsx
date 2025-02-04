import React from "react";
import TrendCard from "./TrendCard";
import { getproducts } from "../actions/product";

type Commodity = {
  id: number;
  title: string;
  price: number;
};

const Trends = async () => {
  const trendCommodity = await getproducts();

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
