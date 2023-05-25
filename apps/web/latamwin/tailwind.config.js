/** @type {import('tailwindcss').Config} */
import presets from 'tailwind-config/tailwind.config';
module.exports = {
	content: [
		"../../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [],
	...presets,
};
