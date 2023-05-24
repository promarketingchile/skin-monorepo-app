/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('tailwind-config/tailwind.config')],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/ui-divergana/src/**/*.{ts,tsx}',

	],
};
