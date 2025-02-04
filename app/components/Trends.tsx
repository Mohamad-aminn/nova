import React from "react";
import TrendCard from "./TrendCard";
import { Commodity, getproducts } from "../actions/product";

const Trends = async () => {
  const trendCommodity: Commodity[] = await getproducts();
  console.log(trendCommodity);

  return (
    <div className="bg-bgDark border border-border overflow-x-scroll p-4 text-whiteText">
      <div className="container mx-auto">
        <div className="text-xl font-semibold my-4">
          <p>⬅️ کالا های ترند این هفته 🔥</p>
        </div>
        <div className="w-full flex justify-between ">
          {trendCommodity?.map((c) => (
            <div key={c.id}>
              <TrendCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
