import { Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Trends from "./components/Trends";
import TrendSkeleton from "./components/skeleton/TrendSkeleton";
import ProductTypes from "./components/ProductTypes";
import Brands from "./components/Brands";
import About from "./components/About";
import Footer from "./components/Footer";

const Home = async () => {
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

  return (
    <div className="font-vazir overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProductTypes />
      <Brands />
      <Suspense fallback={<TrendSkeleton />}>
        <Trends />
      </Suspense>
      <About />
      <Footer />
    </div>
  );
};

export default Home;
