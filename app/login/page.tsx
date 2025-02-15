"use client";
import React, { useEffect, useState } from "react";
import "./form.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { OtpInput } from "reactjs-otp-input";
import { findUser } from "../actions/user";
import { loginSchema, phoneSchema } from "../schema/user";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSetCookie } from "cookies-next";

type loginData = {
  phone: string;
  otp: string;
};

const verifyPhone = async (
  e: React.FormEvent<HTMLFormElement>,
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  phone: string
) => {
  try {
    e.preventDefault();
    setLoading(true);

    const verifiedResult = phoneSchema.safeParse({ phone });
    if (!verifiedResult.success) {
      toast.error(verifiedResult.error.issues[0].message);
      return;
    }

    const res = await fetch("http://localhost:3000/api/otp/send", {
      method: "POST",
      body: JSON.stringify({ phone }),
    });

    if (res.status === 500) {
      throw Error("مشکلی در سرور به وجود اومده!");
    }

    if (!res.ok) {
      const result = await res.json();
      throw Error(result.error);
    }

    setShowOtp(true);
  } catch (error) {
    if (typeof error === "string") {
      toast.error(error);
    } else if (e instanceof Error) {
      toast.error(e.message); // works, `e` narrowed to Error
    }
  } finally {
    setLoading(false);
  }
};

const page = () => {
  const [data, setData] = useState({
    phone: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const router = useRouter();
  const setCookie = useSetCookie();

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>,
    data: loginData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      e.preventDefault();
      setLoading(true);
      console.log(data);

      const validateData = loginSchema.safeParse(data);
      console.log(validateData);
      if (!validateData.success) {
        return validateData.error.issues.map((i) => toast.error(i.message));
      }

      const res = await fetch("http://localhost:3000/api/otp/verify", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw Error(result.error);
      }
      console.log(result);

      setCookie("access_token", result.access_token, {
        domain: "localhost",
        maxAge: 1200000,
        httpOnly: true,
        path: "/",
        secure: false,
      });

      router.push("/");
    } catch (error) {
      console.log(error);
      if (typeof error === "string") {
        return toast.error(error);
      } else if (error instanceof Error) {
        return toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    findUser();
  }, []);

  useGSAP(
    () => {
      gsap.to("#phone-input", {
        x: showOtp ? 800 : 0,
        duration: 0.3,
        ease: "power1.inOut",
      });

      gsap.to("#otp-input", {
        x: showOtp ? "50%" : 800,
        duration: 0.3,
        ease: "power1.inOut",
      });
    },
    { dependencies: [showOtp] }
  );

  return (
    <div className="w-screen h-dvh flex items-center justify-center">
      <div className="box capitalize">
        {loading && (
          <div className="absolute w-full h-full bg-black/30 z-20 top-0 right-0 flex items-center justify-center">
            <span className="loading text-accent loading-bars loading-lg"></span>
          </div>
        )}
        <div className="login_form">
          <h3 className="text-stone-300 text-center tracking-wide">ثبت نام </h3>

          <form
            onSubmit={(e) => verifyPhone(e, setShowOtp, setLoading, data.phone)}
            id="phone-input"
            className="input-div relative mt-12"
          >
            <label className="login_label mb-1" htmlFor="username">
              شماره موبایل
            </label>
            <input
              value={data.phone}
              onChange={(e) => handleChange(e)}
              name="phone"
              type="text"
              placeholder="این مدلی وارد کنید:  *********09"
              className="input input-bordered w-full max-w-xs"
            />

            <button
              className="w-full text-black font-extrabold rounded-xl bg-cyan-600 p-4 mt-20"
              type="submit"
            >
              کد بفرست
            </button>
          </form>

          <form
            onSubmit={(e) => submitHandler(e, data, setLoading)}
            id="otp-input"
            className="absolute size-full right-1/2 top-[31%] w-[264px] translate-x-[1000px]"
          >
            <label className="login_label mb-1" htmlFor="password">
              کد ارسال شده
            </label>
            <OtpInput
              containerStyle={{ direction: "ltr", gap: 8 }}
              inputStyle={{ width: "100%", height: 50, borderRadius: 7 }}
              isInputNum
              value={data.otp}
              onChange={(e) => {
                setData((prev) => ({ ...prev, otp: e }));
              }}
              numInputs={6}
              separator={<span></span>}
            />
            <button
              type="submit"
              className="w-full text-black font-extrabold rounded-xl bg-cyan-600 p-4 mt-20"
            >
              ارسال کد
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
