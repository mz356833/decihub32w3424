/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#a0d8ef',
        },
        pink: {
          400: '#ff6ba9',
          500: '#ff4d8b',
          600: '#ff1a6c',
        },
        yellow: {
          300: '#ffde59',
          400: '#ffd426',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};
