/** @type {import('tailwindcss').Config} */
import presets from 'tailwind-config/tailwind.config';
module.exports = {
	content: [
			'./stories/**/*.{js,jsx,ts,tsx}',
			'../../packages/ui/**/*.{js,jsx,ts,tsx}'
	],
	plugins: [],
	...presets
};
