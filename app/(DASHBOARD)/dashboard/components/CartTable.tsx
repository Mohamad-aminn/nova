"use client";
import PersianNumber from "@/app/components/PersianNumber";
import { products } from "@/app/db/schema";
import React from "react";

type Props = {
  userCart: (typeof products.$inferSelect)[];
  cartIds: number[];
};
const CartTable = ({ userCart, cartIds }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="ps-16"> کالا</th>

            <th>تعداد</th>
            <th>قیمت </th>
            <th>حذف </th>
          </tr>
        </thead>
        <tbody>
          {userCart?.map((p) => (
            <tr key={p.id}>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={p.img} alt={p.title} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{p.title}</div>
                  </div>
                </div>
              </td>

              <td>
                <div className="flex items-center justify-start gap-3">
                  <button
                    type="button"
                    className="btn text-xl px-2 btn-outline btn-success"
                  >
                    +
                  </button>
                  <div>{cartIds.filter((n) => n === p.id).length}</div>
                  <button
                    type="button"
                    className="btn text-4xl px-2 btn-outline btn-accent"
                  >
                    -
                  </button>
                </div>
              </td>

              <td>
                <div>
                  <PersianNumber
                    className="bg-transparent"
                    prefix="$"
                    thousandSeparator
                    value={cartIds.filter((n) => n === p.id).length * p.price}
                  />
                </div>
              </td>

              <th>
                <button className="btn btn-error btn-xs rounded-md">
                  &#x274c;
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
