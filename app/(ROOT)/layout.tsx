import React from "react";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
