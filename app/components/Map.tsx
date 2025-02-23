"use client";
import dynamic from "next/dynamic";
import React from "react";

const LazyMap = dynamic(() => import("@/app/components/MapComponent"), {
  ssr: false,
  loading: () => <div>loading map...</div>,
});
const Map = () => {
  return <LazyMap />;
};

export default Map;
