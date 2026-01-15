/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md}', './public/**/*.html'],
  safelist: [
    'font-light',
    'font-extralight',
    'font-serif',
    'font-sans',
    // Add any others you know you're using dynamically or conditionally
  ],
  theme: {
    extend: {
      colors: {
        brand: '#db5009',
        'brand-light': '#f26a1d',
        'brand-dark': '#b84407',
        'warm-brown': '#a08067',
      },
      fontFamily: {
        sans: ["'Open Sans'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Spectral', 'ui-serif', 'Georgia', 'serif'],
      },
      screens: {
        sm: '640px', // Tailwind default
        md: '840px', // Custom
        lg: '1100px', // Custom
        xl: '1320px', // Custom
        '2xl': '1536px', // Tailwind default
      },
    },
  },
  plugins: [],
};
