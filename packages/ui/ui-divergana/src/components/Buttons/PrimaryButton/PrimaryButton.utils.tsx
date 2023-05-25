 
import { cva } from 'class-variance-authority';


export const cvaPrimaryButton = cva('button', {
	variants: {
		color: {
			primary: [
				'bg-skin-default',
				'text-white',
				'border-transparent',
				'hover:bg-blue-600',
			],
			secondary: [
				'bg-test-default',
				'text-gray-800',
				'border-gray-400',
				'hover:bg-gray-100',
			],
		},
		size: {
			small: ['text-sm', 'py-1', 'px-2'],
			medium: ['text-base', 'py-2', 'px-4'],
		},
	},
	compoundVariants: [{ color: 'primary', size: 'medium', class: 'uppercase' }],
	defaultVariants: {
		color: 'primary',
		size: 'medium',
	},
});