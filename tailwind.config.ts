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
        purple: {
          DEFAULT: "#4d28df",
          figma: "#4d28df",
          variant: "#8f03a0",
          particle: "#C754CF",
          particleAlt: "#bc5ac7",
          particleAlt2: "#aa3db6",
          50: "#F6F4FD",
          100: "#E9D5FF",
          200: "#D1AAFF",
          300: "#B97FFF",
          400: "#A155FF",
          500: "#8F03A0",
          600: "#7A0288",
          700: "#650270",
          800: "#500158",
          900: "#3B0140",
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
        "gradient-2-start": "rgba(17, 26, 83, 1)",
        "gradient-2-end": "rgba(38, 58, 185, 1)",
        cyan: {
          400: "#24EDFF",
        },
        pink: {
          400: "#ec4899",
          500: "#dca8e0",
        },
        teal: {
          200: "#abeed2",
          300: "#a1f1d0",
        },
        blog: {
          guides: {
            bg: "#FEF9C3",
            text: "#854D0E",
          },
          industry: {
            bg: "#DCFCE7",
            text: "#166534",
          },
          company: {
            bg: "#DBEAFE",
            text: "#1E40AF",
          },
          filter: {
            active: {
              bg: "#E9D5FF",
              text: "#6B21A8",
            },
          },
        },
      },
      padding: {
        3.75: "0.9375rem",
      },
      maxWidth: {
        "8xl": "90rem",
        privacy: "44rem", // 704px
      },
      spacing: {
        "18": "4.5rem",
        "68": "17rem",
        "100": "25rem",
        "120": "30rem",
      },
      borderRadius: {
        "2rem": "2rem",
      },
      height: {
        "75": "18.75rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
      fontSize: {
        "4.5xl": ["2.5rem", { lineHeight: "1.2" }],
      },
      animation: {
        "scroll-left": "scroll-left 10s linear infinite alternate",
        "scroll-right": "scroll-right 10s linear infinite alternate",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        "scroll-right": {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      screens: {
        xs: "375px",
        xsm: "410px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        "blog-hero-gradient":
          "linear-gradient(to bottom right, #FFFFFF, #C7A0DE 49%, #41B4BC)",
        "blog-blob-purple":
          "linear-gradient(135deg, #8F03A0 0%, rgba(143, 3, 160, 0) 99.5%)",
        "blog-blob-green":
          "linear-gradient(135deg, #6EF1BB 0%, rgba(110, 241, 187, 0) 99.5%)",
      },
      blur: {
        huge: "216px",
      },
      boxShadow: {
        nav: "0 4px 16px 0 rgba(0,0,0,0.05)",
      },
      aspectRatio: {
        blog: "16 / 10",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
