/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{jsx,ts,tsx}',
		'../../../apps/web/latamwin/src/**/*.{jsx,ts,tsx}',
	],
	plugins: [],
	theme: {
		height: {
			'pmui--btn-large': 'var(--button-height-large)',
			'pmui--btn-medium': 'var(--button-height-medium)',
			'pmui--btn-small': 'var(--button-height-small)',
		},
		padding: {
			'pmui--btn-large': 'var(--button-padding-large)',
			'pmui--btn-medium': 'var(--button-padding-medium)',
			'pmui--btn-small': 'var(--button-padding-small)',
		},
		fontWeight: {
			'pmui--btn-large': 'var(--button-font-weight-large)',
			'pmui--btn-medium': 'var(--button-font-weight-medium)',
			'pmui--btn-small': 'var(--button-font-weight-small)',
		},
		fontSize: {
			'pmui--btn-large': 'var(--button-font-size-large)',
			'pmui--btn-medium': 'var(--button-font-size-medium)',
			'pmui--btn-small': 'var(--button-font-size-small)',
		},
		lineHeight: {
			'pmui--btn-large': 'var(--button-line-height-large)',
			'pmui--btn-medium': 'var(--button-line-height-medium)',
			'pmui--btn-small': 'var(--button-line-height-small)',
		},
		borderRadius: {
			'pmui--btn-large': 'var(--button-border-radius-large)',
			'pmui--btn-medium': 'var(--button-border-radius-medium)',
			'pmui--btn-small': 'var(--button-border-radius-small)',
		},
		extend: {
			fontFamily: {
				RobotoCondensed: ['RobotoCondensed', 'sans-serif'],
				AlfaSlab: ['AlfaSlabOne', 'sans-serif'],
				NimbusSans: ['NimbusSanL', 'sans-serif'],
				SegoeUI: ['SegoeUI', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
			},
			// height: {
			// 	"pmui--btn": {
			// 		large: "var(--button-height-large)",
			// 		medium: "var(--button-height-medium)",
			// 		small: "var(--button-height-small)",
			// 	},
			// },
			// padding: {
			// 	"pmui--btn": {
			// 		large: "var(--button-padding-large)",
			// 		medium: "var(--button-padding-medium)",
			// 		small: "var(--button-padding-small)",
			// 	},
			// },
			// fontWeight: {
			// 	"pmui--btn": {
			// 		large: "var(--button-font-weight-large)",
			// 		medium: "var(--button-font-weight-medium)",
			// 		small: "var(--button-font-weight-small)",
			// 	},
			// },
			// fontSize: {
			// 	"pmui--btn": {
			// 		large: "var(--button-font-size-large)",
			// 		medium: "var(--button-font-size-medium)",
			// 		small: "var(--button-font-size-small)",
			// 	},
			// },
			// lineHeight: {
			// 	"pmui--btn": {
			// 		large: "var(--button-line-height-large)",
			// 		medium: "var(--button-line-height-medium)",
			// 		small: "var(--button-line-height-small)",
			// 	},
			// },
			// borderRadius: {
			// 	"pmui--btn": {
			// 		large: "var(--button-border-radius-large)",
			// 		medium: "var(--button-border-radius-medium)",
			// 		small: "var(--button-border-radius-small)",
			// 	},
			// },
			textColor: {
				'pmui--btn-primary': {
					'default-color': 'var(--button-primary-default-color-text)',
					'default-hover-color':
						'var(--button-primary-default-hover-color-text)',
					'default-pressed-color':
						'var(--button-primary-default-pressed-color-text)',
					'default-disabled-color':
						'var(--button-primary-default-disabled-color-text)',
					'outlined-color': 'var(--button-primary-outlined-color-text)',
					'outlined-hover-color':
						'var(--button-primary-outlined-hover-color-text)',
					'outlined-pressed-color':
						'var(--button-primary-outlined-pressed-color-text)',
					'outlined-disabled-color':
						'var(--button-primary-outlined-disabled-color-text)',
					'text-color': 'var(--button-primary-text-color-text)',
					'text-hover-color': 'var(--button-primary-text-hover-color-text)',
					'text-pressed-color': 'var(--button-primary-text-pressed-color-text)',
					'text-disabled-color':
						'var(--button-primary-text-disabled-color-text)',
				},
				'pmui--btn-secondary': {
					'default-color': 'var(--button-secondary-default-color-text)',
					'default-hover-color':
						'var(--button-secondary-default-hover-color-text)',
					'default-pressed-color':
						'var(--button-secondary-default-pressed-color-text)',
					'default-disabled-color':
						'var(--button-secondary-default-disabled-color-text)',
					'outlined-color': 'var(--button-secondary-outlined-color-text)',
					'outlined-hover-color':
						'var(--button-secondary-outlined-hover-color-text)',
					'outlined-pressed-color':
						'var(--button-secondary-outlined-pressed-color-text)',
					'outlined-disabled-color':
						'var(--button-secondary-outlined-disabled-color-text)',
					'text-color': 'var(--button-secondary-text-color-text)',
					'text-hover-color': 'var(--button-secondary-text-hover-color-text)',
					'text-pressed-color':
						'var(--button-secondary-text-pressed-color-text)',
					'text-disabled-color':
						'var(--button-secondary-text-disabled-color-text)',
				},
			},
			backgroundColor: {
				'pmui--btn-primary': {
					'default-color': 'var(--button-primary-default-color-bg)',
					'default-hover-color': 'var(--button-primary-default-hover-color-bg)',
					'default-pressed-color':
						'var(--button-primary-default-pressed-color-bg)',
					'default-disabled-color':
						'var(--button-primary-default-disabled-color-bg)',
					'outlined-color': 'var(--button-primary-outlined-color-bg)',
					'outlined-hover-color':
						'var(--button-primary-outlined-hover-color-bg)',
					'outlined-pressed-color':
						'var(--button-primary-outlined-pressed-color-bg)',
					'outlined-disabled-color':
						'var(--button-primary-outlined-disabled-color-bg)',
					'text-color': 'var(--button-primary-text-color-bg)',
					'text-hover-color': 'var(--button-primary-text-hover-color-bg)',
					'text-pressed-color': 'var(--button-primary-text-pressed-color-bg)',
					'text-disabled-color': 'var(--button-primary-text-disabled-color-bg)',
				},
				'pmui--btn-secondary': {
					'default-color': 'var(--button-secondary-default-color-bg)',
					'default-hover-color':
						'var(--button-secondary-default-hover-color-bg)',
					'default-pressed-color':
						'var(--button-secondary-default-pressed-color-bg)',
					'default-disabled-color':
						'var(--button-secondary-default-disabled-color-bg)',
					'outlined-color': 'var(--button-secondary-outlined-color-bg)',
					'outlined-hover-color':
						'var(--button-secondary-outlined-hover-color-bg)',
					'outlined-pressed-color':
						'var(--button-secondary-outlined-pressed-color-bg)',
					'outlined-disabled-color':
						'var(--button-secondary-outlined-disabled-color-bg)',
					'text-color': 'var(--button-secondary-text-color-bg)',
					'text-hover-color': 'var(--button-secondary-text-hover-color-bg)',
					'text-pressed-color': 'var(--button-secondary-text-pressed-color-bg)',
					'text-disabled-color':
						'var(--button-secondary-text-disabled-color-bg)',
				},
			},
			borderColor: {
				'pmui--btn-primary': {
					'default-color': 'var(--button-primary-default-color-border)',
					'default-hover-color':
						'var(--button-primary-default-hover-color-border)',
					'default-pressed-color':
						'var(--button-primary-default-pressed-color-border)',
					'default-disabled-color':
						'var(--button-primary-default-disabled-color-border)',
					'outlined-color': 'var(--button-primary-outlined-color-border)',
					'outlined-hover-color':
						'var(--button-primary-outlined-hover-color-border)',
					'outlined-pressed-color':
						'var(--button-primary-outlined-pressed-color-border)',
					'outlined-disabled-color':
						'var(--button-primary-outlined-disabled-color-border)',
					'text-color': 'var(--button-primary-text-color-border)',
					'text-hover-color': 'var(--button-primary-text-hover-color-border)',
					'text-pressed-color':
						'var(--button-primary-text-pressed-color-border)',
					'text-disabled-color':
						'var(--button-primary-text-disabled-color-border)',
				},
				'pmui--btn-secondary': {
					'default-color': 'var(--button-secondary-default-color-border)',
					'default-hover-color':
						'var(--button-secondary-default-hover-color-border)',
					'default-pressed-color':
						'var(--button-secondary-default-pressed-color-border)',
					'default-disabled-color':
						'var(--button-secondary-default-disabled-color-border)',
					'outlined-color': 'var(--button-secondary-outlined-color-border)',
					'outlined-hover-color':
						'var(--button-secondary-outlined-hover-color-border)',
					'outlined-pressed-color':
						'var(--button-secondary-outlined-pressed-color-border)',
					'outlined-disabled-color':
						'var(--button-secondary-outlined-disabled-color-border)',
					'text-color': 'var(--button-secondary-text-color-border)',
					'text-hover-color': 'var(--button-secondary-text-hover-color-border)',
					'text-pressed-color':
						'var(--button-secondary-text-pressed-color-border)',
					'text-disabled-color':
						'var(--button-secondary-text-disabled-color-border)',
				},
			},
			boxShadow: {
				'pmui--btn': 'var(--button-shadow)',
			},
		},
	},
};
