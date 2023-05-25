/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: ['tailwind-config/tailwind.config'],
	content: ['./src/**/*.{tsx,js}'],
	plugins: [],
	theme: {
		extend: {
			colors: {
				skin: {
					default: 'var(--color-primary-default)',
				},
				test: {
					default: 'var(--color-secondary-default)',
				},
			},
		},
	},
};
