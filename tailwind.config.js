/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
				
			},
      colors: {
        primary: '#B6964F',
        'primary-variant': '#B6964F',
        brand: '#011632',
        'bg-light': '#E6F6FE',
        accent: '#FFECC9',
        'accent-2': '#FFE4B3',
        muted: '#737373',
        'social-blue': '#0077B5',
        info: '#25B4F8',
        'page-bg': '#f7f7f7'
      }
    },
  },
  plugins: [],
};