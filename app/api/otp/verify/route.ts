import db from "@/app/db/db";
import { users } from "@/app/db/schema";
import { loginSchema } from "@/app/schema/user";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  try {
    const { phone, otp }: { phone: string; otp: string } = await req.json();

    // zod
    const validate = loginSchema.safeParse({ phone, otp });
    if (!validate.success) {
      return Response.json(validate.error, { status: 400 });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.phone_number, phone),
    });
    if (!user) {
      return Response.json(
        { error: "یوزری با این شماره درخواست کد نکرده!" },
        { status: 400 }
      );
    }

    if (new Date().getTime() - user.otp_expiration!.getTime() >= 0) {
      return Response.json(
        { error: "وقت کد تموم شده کد جدید بگیرید" },
        { status: 400 }
      );
    }

    // check otp and gg
    if (otp !== user.otp_code) {
      return Response.json({ error: "کد اشتباه!" }, { status: 400 });
    }

    const jwtToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "14d" }
    );

    return Response.json({ access_token: jwtToken }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "server error" }, { status: 500 });
  }
};
