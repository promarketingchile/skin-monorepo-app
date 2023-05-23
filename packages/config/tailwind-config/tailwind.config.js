const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		// app content
		// include packages if not transpiling
		'../../packages/ui/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/ui-latamwin/src/components/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brandblue: colors.blue[500],
				brandred: colors.red[500],
			},
		},
	},
	plugins: [],
};
