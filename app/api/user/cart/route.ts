import db from "@/app/db/db";
import { carts, users } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const PUT = async (req: NextRequest) => {
  try {
    const { id, cartIds } = await req.json();

    const user = await db.query.users.findFirst({
      where: eq(users.id, Number(id)),
    });

    if (!user) {
      return Response.json({ error: "didnt find user!" }, { status: 404 });
    }

    await db
      .update(carts)
      .set({ products: cartIds })
      .where(eq(carts.buyerId, Number(id)));

    return Response.json({}, { status: 200 });
  } catch (error) {
    return Response.json({ error: "server error!" }, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { id, productId } = await req.json();

    const user = await db.query.users.findFirst({
      where: eq(users.id, Number(id)),
    });

    if (!user) {
      return Response.json({ error: "didnt find user!" }, { status: 404 });
    }
    const cart = await db.query.carts.findFirst({
      where: eq(carts.buyerId, Number(id)),
    });

    await db
      .update(carts)
      .set({ products: [...cart?.products!, id] })
      .where(eq(carts.buyerId, Number(id)));

    return Response.json({}, { status: 200 });
  } catch (error) {
    return Response.json({ error: "server error!" }, { status: 500 });
  }
};
