import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Home/Navbar";
import Trends from "./components/Home/Trends";
import TrendSkeleton from "./components/skeleton/TrendSkeleton";
import ProductTypes from "./components/Home/ProductTypes";
import Brands from "./components/Home/Brands";
import About from "./components/Home/About";
import Footer from "./components/Footer";
import db from "./db/db";
import { eq } from "drizzle-orm";
import { products, users } from "./db/schema";
// import { useGetCookies } from "cookies-next";
import { deleteCookie, getCookie, getCookies } from "cookies-next";
import { cookies } from "next/headers";
import NavigationBar from "./components/NavigationBar";
import { verify } from "jsonwebtoken";

const Home = async () => {
  const allCookies = await getCookies({ cookies });
  console.log(allCookies);

  const jwt = await getCookie("access_token", { cookies });

  // const { data } = await axios.post(
  //   "https://sandbox.zarinpal.com/pg/v4/payment/request.json",
  //   {
  //     merchant_id: "1344b5d4-0048-11e8-94db-005056a205be",
  //     amount: 10000,
  //     callback_url: "http://yoursite.com/verify",
  //     description: "افزایش اعتبار کاربر شماره ۱۱۳۴۶۲۹",
  //     metadata: { mobile: "09121234567", email: "info.test@gmail.com" },
  //   }
  // );
  // redirect(`https://sandbox.zarinpal.com/pg/StartPay/${data.data.authority}`);

  // const user: typeof usersTable.$inferInsert = {
  //   name: "John",
  //   age: 30,
  //   email: "john@example.com",
  // };
  // await db.insert(usersTable).values(user);
  // console.log("New user created!");

  // const users = await db.select().from(usersTable);
  // console.log(users);

  const user = await db.query.users.findFirst({
    where: eq(users.phone_number, "09201370140"),
  });
  const productss = await db.query.products.findMany();

  console.log(productss);
  console.log(user);
  return (
    <div className="font-vazir overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductTypes />
      <Brands />
      <Suspense key={1} fallback={<TrendSkeleton />}>
        <Trends />
      </Suspense>
      <About />
      <Footer />
      <NavigationBar />
    </div>
  );
};

export default Home;
