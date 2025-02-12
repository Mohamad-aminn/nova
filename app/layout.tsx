import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

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
      <body className={`${vazir.className} antialiased`}>{children}</body>
    </html>
  );
}
