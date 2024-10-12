/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: 'var(--color-hero)',
        product: 'var(--color-product)',
        about: 'var(--color-about)',
        form: 'var(--color-form)',
        feedback: 'var(--color-feedback)',
        primary: {
          black: 'var(--color-black)',
        },
        primaryBg: 'var(--color-primary-bg)',
        secondaryBg: 'var(--color-secondary-bg)'
      },
      fontFamily: {
        content:['var(--font-poppins)'],
        pacifico: ['var(--font-pacifico)'],
        mainheading:['var(--font-staatliches)'],
      },
    },
  },
  plugins: [],
};
