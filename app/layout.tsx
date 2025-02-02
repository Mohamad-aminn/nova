import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazir.variable} antialiased`}>{children}</body>
    </html>
  );
}
