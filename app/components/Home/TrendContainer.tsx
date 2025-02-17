import React, { Suspense } from "react";
import TrendSkeleton from "../skeleton/TrendSkeleton";
import Trends from "./Trends";

const TrendContainer = () => {
  return (
    <Suspense fallback={<TrendSkeleton />}>
      <Trends />
    </Suspense>
  );
};

export default TrendContainer;
