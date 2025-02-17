import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const vazir = localFont({
  src: [
    {
      path: "./font/Vazir.ttf",
    },
    {
      path: "./font/Vazir.woff",
    },
    {
      path: "./font/Vazir.woff2",
    },
  ],
  variable: "--font-vazir",
});
export const metadata: Metadata = {
  title: "Nova",
  description: "e-commerce website",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazir.className} antialiased mb-16`}>
        {children}
        <div>
          <ToastContainer
            toastClassName={"font-vazir"}
            limit={4}
            rtl
            theme="dark"
            position="top-center"
          />
        </div>

        <NavigationBar />
      </body>
    </html>
  );
}
