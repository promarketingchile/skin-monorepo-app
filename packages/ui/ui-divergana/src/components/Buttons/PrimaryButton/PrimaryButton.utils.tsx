
import { cva } from 'class-variance-authority';


export const cvaPrimaryButton = cva('button', {
	variants: {
		intent: {
			primary: [
				'bg-skin-default',
			],
			secondary: [
				'bg-test-default',
			],
		},
		size: {
			small: ['px-2'],
			medium: ['px-4'],
		},
	},
	compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
	defaultVariants: {
		intent: 'primary',
		size: 'medium',
	},
});