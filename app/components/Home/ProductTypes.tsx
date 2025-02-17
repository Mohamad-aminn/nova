import Link from "next/link";
import React from "react";

const ProductTypes = () => {
  return (
    <div className="p-8 bg-bgDark border-t border-border py-20 z-20 relative">
      <div className="container m-auto">
        <div className="font-bold text-center text-5xl mb-12">
          <p>چی می خوای بخری؟</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2 gap-28">
          <Link
            href={"/cloths"}
            className="border-2 hover: border-cyan-300 p-20 rounded-xl shadow-[0px_0px_7px_3px_#31a38e,_#31a38e_0px_0px_3px_3px_inset]"
          >
            <img
              alt=""
              src="/img/product-cloth-logo.png"
              className="m-auto size-full drop-shadow-[0_70px_70px_#31a38e] transition-all object-none"
            />
          </Link>

          <div className="border-2 flex items-center border-blue-300 p-20 rounded-xl shadow-[0px_0px_7px_3px_#1d4ed8,_#1d4ed8_0px_0px_3px_3px_inset]">
            {/* <div className="mockup-phone m-auto">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1"></div>
            </div>
          </div> */}
            <img
              alt=""
              src="/img/product-phone-logo.png"
              className="m-auto size-full drop-shadow-[0_70px_70px_#1d4ed8] transition-all object-contain"
            />
          </div>

          <div className="border-2 flex items-center border-red-300 p-20 rounded-xl shadow-[0px_0px_7px_3px_#b91c1c,_#b91c1c_0px_0px_3px_3px_inset]">
            <img
              alt=""
              src="/img/product-food-logo.png"
              className="m-auto size-96 drop-shadow-[0_70px_70px_#b91c1c] transition-all object-contain "
            />
          </div>

          <div className="border-2 flex items-center border-purple-300 p-20 rounded-xl shadow-[0px_0px_7px_3px_#7e22ce,_#7e22ce_0px_0px_3px_3px_inset]">
            <img
              alt=""
              src="/img/product-perfume-logo.png"
              className="m-auto size-full drop-shadow-[0_70px_70px_#7e22ce] transition-all object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypes;
