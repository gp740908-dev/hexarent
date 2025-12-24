/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Industrial color palette
                charcoal: {
                    DEFAULT: "#1a1a1a",
                    dark: "#0f0f0f",
                    light: "#2a2a2a",
                },
                orange: {
                    DEFAULT: "#FF6B00",
                    light: "#FF8533",
                    dark: "#CC5500",
                },
                yellow: {
                    DEFAULT: "#FFB800",
                    light: "#FFC933",
                },
                steel: {
                    DEFAULT: "#2C5F8D",
                    light: "#4A7FA8",
                    dark: "#1E4A6E",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse 3s ease-in-out infinite",
                "bounce-slow": "bounce 2s ease-in-out infinite",
                "spin-slow": "spin 8s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "glow-orange": "0 0 40px rgba(255, 107, 0, 0.3)",
                "glow-steel": "0 0 40px rgba(44, 95, 141, 0.3)",
            },
        },
    },
    plugins: [],
};
