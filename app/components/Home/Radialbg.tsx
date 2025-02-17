import React from "react";

const Radialbg = ({
  className,
  blur,
}: {
  className: string;
  blur: number | string;
}) => {
  return (
    <div
      style={{ filter: `blur(${blur}px)` }}
      className={`hero-radial ${className}`}
    ></div>
  );
};

export default Radialbg;
