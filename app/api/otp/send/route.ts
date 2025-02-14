import db from "@/app/db/db";
import { users } from "@/app/db/schema";
import { phoneSchema } from "@/app/schema/user";
import { generateOtp } from "@/app/utils/otp";
import sms from "@/app/utils/sms";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { phone }: { phone: string } = await req.json();

    // add zod validation here
    const validationPhone = phoneSchema.safeParse({ phone });
    if (!validationPhone.success) {
      return Response.json(validationPhone.error, { status: 400 });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.phone_number, phone),
    });

    if (user?.otp_expiration) {
      if (new Date().getTime() - user.otp_expiration.getTime() <= 0) {
        return Response.json({}, { status: 202 });
      }
    }

    if (!user) {
      await db.insert(users).values({
        phone_number: phone,
      });
    }
    const otp = generateOtp();

    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 4);

    await db
      .update(users)
      .set({ otp_code: otp, otp_expiration: expirationDate });
    const res = await sms.send(
      phone,
      process.env.FROM,
      `${otp}\n کد تایید نوا 🏥\n اگر شما درخواست کد نکردید این پیام رو نادیده بگیرین`
    );

    return Response.json({}, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json(error, { status: 500 });
  }
};

export const GET = async () => {
  // const { phone } = await req.json();

  // const res = await sms.send(
  //   phone,
  //   process.env.FROM,
  //   `\n کد تایید بیمارستان 🏥\n اگر شما درخواست کد نکردید این پیام رو نادیده بگیرین`
  // );
  // console.log(res);

  return Response.json("", { status: 200 });
};
