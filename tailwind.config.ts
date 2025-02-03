import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        whiteText: "#ccc",
        laserCyan: "#39fdf9",
        border: "#1A1A1A",
        bgDark: "#0A0A0A",
      },
    },
    fontFamily: {
      vazir: ["var(--font-vazir)"],
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
} satisfies Config;
