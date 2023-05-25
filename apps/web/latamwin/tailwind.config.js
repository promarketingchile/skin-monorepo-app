/** @type {import('tailwindcss').Config} */
import presets from 'tailwind-config/tailwind.config';
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		...presets.theme,
		extend: { ...presets.extend },
	},
	plugins: [],
};
