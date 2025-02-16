/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.js', './*.html'],
  theme: {
    extend: {},
    supports: {
      p3: 'color: color(display-p3 1 1 1)',
    },
  },
  plugins: [],
};
