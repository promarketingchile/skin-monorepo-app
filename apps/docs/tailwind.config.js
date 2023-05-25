/** @type {import('tailwindcss').Config} */
import presets from 'ui-divergana/tailwind.config';
module.exports = {
	...presets,
	content: [
			'./stories/**/*.{js,jsx,ts,tsx}',
			'../../packages/ui/**/*.{js,jsx,ts,tsx}'
	],
	plugins: [],
};
