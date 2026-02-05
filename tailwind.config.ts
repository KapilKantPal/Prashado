import type { Config } from "tailwindcss";

const config: Config = {
    // Ensuring style refresh
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505", // Very dark, almost black
                foreground: "#ededed",
                primary: {
                    DEFAULT: "#d946ef", // Neon Pink/Fuchsia
                    hover: "#c026d3",
                    glow: "rgba(217, 70, 239, 0.5)",
                },
                secondary: {
                    DEFAULT: "#22d3ee", // Neon Cyan
                    hover: "#0891b2",
                    glow: "rgba(34, 211, 238, 0.5)",
                },
                card: "#121212",
                "card-hover": "#1a1a1a",
                accent: {
                    DEFAULT: "#f59e0b", // Amber/Orange
                    hover: "#d97706",
                    glow: "rgba(245, 158, 11, 0.5)",
                },
            },
            fontFamily: {
                sans: ["var(--font-poppins)", "sans-serif"],
                display: ["var(--font-inter)", "sans-serif"],
                handwriting: ["var(--font-dancing)", "cursive"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-pattern": "url('/hero-pattern.png')", // Placeholder
            },
            boxShadow: {
                neon: "0 0 10px var(--tw-shadow-color), 0 0 20px var(--tw-shadow-color)",
            },
            keyframes: {
                gradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            animation: {
                gradient: "gradient 3s ease infinite",
            },
        },
    },
    plugins: [],
};
export default config;
