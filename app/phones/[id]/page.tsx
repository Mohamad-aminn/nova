import React from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  img: string;
  colors: { label: string; color: string }[];
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const product: Product = await fetch(
    `http://localhost:3000/api/product/${id}`
  ).then(async (response) => await response.json());

  return (
    <div className="min-h-dvh w-screen bg-bgDark p-20">
      <div className="container mx-auto">
        <div className="size-full overflow-hidden grid grid-col-1 gap-10 lg:grid-cols-2">
          <div className="size-full">
            <img
              src={product.img}
              alt={product.title}
              className="size-full max-w-2xl border border-border object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 my-auto">
            <p>{product.title}</p>

            <div className="max-w-lg">
              <p>{product.description}</p>
            </div>

            <div className="flex items-center w-full gap-2.5">
              {product.colors.map((c, i: number) => (
                <div key={i} className="tooltip" data-tip={c.label}>
                  <button
                    title={c.label}
                    className="size-6 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
