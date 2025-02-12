"use client";
import React, { useEffect, useState } from "react";
import "./form.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { OtpInput } from "reactjs-otp-input";
import { SessionProvider, signIn } from "next-auth/react";
import Sess from "./Sess";
import { findUser } from "../actions/user";
// import { redirect } from "next/navigation";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const submitHandler = () => {
    console.log("object");
  };

  useEffect(() => {
    findUser();
  }, []);

  useGSAP(
    () => {
      gsap.to("#phone-input", {
        x: showOtp ? 500 : 0,
        duration: 0.3,
        ease: "power1.inOut",
      });

      gsap.to("#otp-input", {
        x: showOtp ? 0 : 500,
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
          <SessionProvider>
            <Sess />
          </SessionProvider>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowOtp(true);
            }}
            id="phone-input"
            className="input-div relative mt-12"
          >
            <label className="login_label mb-1" htmlFor="username">
              شماره موبایل
            </label>
            <input
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
            id="otp-input"
            className="absolute top-[31%] w-[264px] translate-x-96"
          >
            <label className="login_label mb-1" htmlFor="password">
              کد ارسال شده
            </label>
            <OtpInput
              containerStyle={{ direction: "ltr", gap: 8 }}
              inputStyle={{ width: "100%", height: 50, borderRadius: 7 }}
              isInputNum
              value={""}
              onChange={() => {}}
              numInputs={6}
              separator={<span></span>}
            />
            <button
              type="submit"
              onClick={async (e) => {
                try {
                  e.preventDefault();
                  const res = await signIn("credentials", {
                    phone: "09201370140",
                  });
                  console.log(res);
                } catch (error) {
                  console.log(error);
                }
              }}
              className="w-full text-black font-extrabold rounded-xl bg-cyan-600 p-4 mt-20"
            >
              ارسال کد
            </button>
          </form>

          {/* <div className="links">
            <a href="#">forgot password</a>
            <a href="#">sign up</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
