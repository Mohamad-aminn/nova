import React from "react";

const TrendSkeleton = () => {
  return (
    <div className="w-full overflow-x-scroll p-4 text-whiteText border bg-bgDark border-border">
      <div className="container mx-auto">
        <div className="skeleton w-60 h-10 my-4" />
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="border rounded-lg overflow-hidden border-border"
            >
              <div className="size-40 skeleton rounded-lg"></div>

              <div className="p-5 font-semibold flex flex-col gap-4">
                <div className="skeleton w-16 h-4"></div>
                <div className="skeleton w-20 h-4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendSkeleton;
