/** @type {import('tailwindcss').Config} */
import presets from 'ui-divergana/tailwind.config';
const config = {
	content: [
		"../../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [],
	...presets,
};

export default config;