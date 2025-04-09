import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#111A53",
          light: "#F6F4FD",
        },
        secondary: {
          DEFAULT: "#6EF1BB",
          light: "rgba(110, 241, 187, 0.2)",
        },
        accent: {
          DEFAULT: "#BD05DD",
          light: "rgba(189, 5, 221, 0.62)",
        },
        text: {
          primary: "#1D1D1D",
          secondary: "#717172",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      spacing: {
        "18": "4.5rem",
        "68": "17rem",
        "100": "25rem",
        "120": "30rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        body: [
          "16px",
          { lineHeight: "160%", letterSpacing: "0px", fontWeight: "400" },
        ],

        h6: [
          "16px",
          { lineHeight: "normal", letterSpacing: "0px", fontWeight: "500" },
        ],

        h5: [
          "20px",
          { lineHeight: "normal", letterSpacing: "0px", fontWeight: "500" },
        ],

        h4: [
          "24px",
          { lineHeight: "normal", letterSpacing: "0px", fontWeight: "500" },
        ],

        h3: [
          "32px",
          { lineHeight: "130%", letterSpacing: "0px", fontWeight: "400" },
        ],

        h2: [
          "48px",
          { lineHeight: "normal", letterSpacing: "0px", fontWeight: "500" },
        ],

        h1: [
          "58px",
          { lineHeight: "normal", letterSpacing: "0px", fontWeight: "500" },
        ],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        shine: "shine 1.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
