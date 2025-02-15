import React from "react";
import TrendCard from "./TrendCard";
import { Commodity, getproducts } from "../actions/product";

const Trends = async () => {
  const trendCommodity: Commodity[] = await getproducts();

  return (
    <div
      key={2}
      className="bg-bgDark border border-border overflow-x-scroll p-4 text-whiteText"
    >
      <div className="container mx-auto">
        <div className="text-xl font-semibold my-4">
          <p>⬅️ کالا های ترند این هفته 🔥</p>
        </div>
        <div className="w-full flex justify-between gap-16">
          {/* {trendCommodity?.map((c) => (
            <TrendCard key={c.id} {...c} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Trends;
