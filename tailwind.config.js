/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dz-black': '#010101',
        'dz-neutral-900': '#18181B',
        'dz-neutral-800': '#27272A',
        'dz-neutral-700': '#3f3f46',
        'dz-purple-500': '#6100FF',
        'dz-neutral-50': '#fafafa',
        'dz-white': '#ffffff',
        'dz-positive-500': '#22c55e',
        'dz-negative-500': '#ec4067',
      },
    },
  },
  plugins: [],
}
