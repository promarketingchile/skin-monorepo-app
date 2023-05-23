module.exports = {
	content: ['./src/**/*.{tsx}'],
	theme: {
		extend: {
			colors: {
				skin: {
					base: '#FF1493',
				},
			},
		},
	},
	plugins: [
		'tailwindcss',
		'autoprefixer',
	],
};