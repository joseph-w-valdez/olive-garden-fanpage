/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       animation: {
        'background-in': 'fadeInBackground 800ms forwards',
        'background-out': 'fadeOutBackground 800ms forwards',
        'title-in': 'fadeInTitle 800ms forwards',
        'title-out': 'fadeOutTitle 800ms forwards',
        'fade-in': 'fadeIn 800ms forwards',
        'fade-out': 'fadeOut 800ms forwards',
      },
      height: {
        'minus-navbar': 'calc(100vh - 3rem)',
      },
       screens: {
        'landscape-sm': { 'raw': '(orientation: landscape) and (max-width: 999px)' },
      },
    },
  },
  plugins: [],
}
