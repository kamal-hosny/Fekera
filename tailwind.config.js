
/** @type {import('tailwindcss').Configuration} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "Readex": ["Readex Pro", "sans-serif"]
            },
            colors: {
                mainColorBackground: "rgba(var(--main-color-background))",
                mainColor: "rgba(var(--main-color))",
                sectionColor: "rgba(var(--section-color))",
                colorText1: "rgba(var(--color-text-1))",
                colorText2: "rgba(var(--color-text-2))",
                hoverColorText: "rgba(var(--color-text-hover))"
            }
        },
    },
    plugins: [],
}