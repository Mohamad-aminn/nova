import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  params: { params: { id: number } }
) => {
  const { id } = params.params;

  const product = {
    id,
    title: "نام کالا",
    description:
      "آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید",
    img: "/img/iphone-16.avif",
    colors: [
      { label: "بنفش", color: "#9B1FE9" },
      { label: "white", color: "#fff" },
      { label: "black", color: "#000" },
    ],
  };
  return NextResponse.json(product, { status: 200 });
};
