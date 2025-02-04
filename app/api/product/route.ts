import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    [
      { id: 1, title: "کالا 1", price: 1000000, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 2", price: 2000000, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 3", price: 3000000, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 4", price: 50000, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 5", price: 900000, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 6", price: 342436, img: "/img/meat.jpg" },
      { id: 1, title: "کالا 7", price: 3143252, img: "/img/meat.jpg" },
    ],
    { status: 200 }
  );
};
