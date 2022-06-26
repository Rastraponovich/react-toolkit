/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/public/assets/hero.jpg')",
                cafe: "url('/public/assets/cafe.png')",
                map: "url('/public/assets/map.jpg')",
            },
            fontFamily: {
                "zing-rust": ["zing-rust", "system-ui"],
            },
            keyframes: {
                slideArrow: {
                    "0%,100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                    "30%": {
                        transform: "translate3d(50%, 0, 0)",
                    },

                    "50%": {
                        transform: "translate3d(-200%, 0, 0)",
                        opacity: 1,
                    },
                    "50.1%": {
                        opacity: 0,
                    },
                    "75%": {
                        opacity: 0,

                        transform: "translate3d(200%, 0, 0)",
                    },
                    "75.1%": {
                        opacity: 1,
                    },
                },
            },
            animation: {
                slideArrow: "slideArrow 700ms ease-in-out",
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("not-last-child", "&:not(:last-child)")
        }),
    ],
}
