/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  
    theme: {
      extend: {
 
       
        colors: {
          transparent: "transparent",
          current: "currentColor",
          alle: {
            50: "#EBF1DF",
            100: "#F4FCFF",
            200: "#E2CACC",
            300: "#D4B0B3",
            400: "#C49296",
            500: "#B6787D",
            600: "#975357",
            700: "#774045",
            800: "#4F2B2E",
            900: "#281517",
            950: "#140B0C",
          },
  
  
          hvid: '#ffffff',
        },
  
        spacing: {
          xxs: "8px",
          xs: "15px",
          s: "30px",
          md: "60px",
          lg: "80px",
          xl: "110px",
          "2xl": "140px",
          "3xl": "180px",
          "4xl": "200px",
          "5xl": "300px",
        },
  
        fontFamily: {
          worksans: ["Work Sans", "sans-serif"],
          minfont: ["Rothenburg-Bold", "sans-serif"],
        },
  
        fontWeight: {
          thin: 100,
          extraLight: 200,
          light: 300,
          regular: 400,
          medium: 500,
          semiBold: 600,
          bold: 700,
          extraBold: 800,
          black: 900,
        },
  
        fontSize: {
          p_desk: ["18px", { lineHeight: "1.75rem" }],
          p_stordesk: ["20px", { lineHeight: "40px" }],
          p_lilledesk: ["16px", { lineHeight: "1.75rem" }],
          h4_desk: ["24px", { lineHeight: "2.25rem" }],
          h3_desk: ["31px", { lineHeight: "3rem" }],
          h2_desk: ["58px", { lineHeight: "3.75rem" }],
          h1_desk: ["96px", { lineHeight: "4.5rem" }],
  
          p_stormobil: ["14px", { lineHeight: "1.50rem" }],
          p_mobil: ["12px", { lineHeight: "1.50rem" }],
          p_lillemobil: ["10px", { lineHeight: "1.50rem" }],
          h4_mobil: ["18px", { lineHeight: "2.25rem" }],
          h3_mobil: ["24px", { lineHeight: "3rem" }],
          h2_mobil: ["32px", { lineHeight: "" }],
          h1_mobil: ["48px", { lineHeight: "4.5rem" }],
        },
  
        // Animationer og keyframes
        animation: {
          rotate: 'rotate 3s linear infinite',
          scaleUp: 'scaleUp 3s infinite',
          moveRight: 'moveRight 3s infinite',
        },
        keyframes: {
          rotate: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          scaleUp: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.5)' },
          },
          moveRight: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(50px)' },
          },
        },
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  };
  