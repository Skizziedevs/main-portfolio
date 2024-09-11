/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        xsmax: '414px',
        mid: '700px',
        md: '1024px',
        omd: '1280px',
        lg: '1900px',
        ipad: '768px',
        ld: '1400px',
        xlg: '2000px',
      },
    },
  },
  plugins: [],
}

