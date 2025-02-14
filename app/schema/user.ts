import { string, z } from "zod";

export const phoneSchema = z.object({
  phone: string({}).regex(/^09[0|1|2|3][0-9]{8}$/gi, {
    message: "شماره تلفن رو به صورت *******09 وارد کنید",
  }),
});

export const loginSchema = z.object({
  phone: string({}).regex(/^09[0|1|2|3][0-9]{8}$/gi, {
    message: "شماره تلفن رو به صورت *******09 وارد کنید",
  }),
  otp: string().length(6, { message: "رمز یکبار مصرف باید 6 کاراکتر باشه" }),
});
