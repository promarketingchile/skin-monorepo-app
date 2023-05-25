/** CONSTANTS. */
import { cva } from 'class-variance-authority';

/** PRIMARY BUTTON. */
export const classPrimaryDefault = [
	'bg-pmui--btn-primary-default-color',
	'border-pmui--btn-primary-default-color',
	'text-pmui--btn-primary-default-color',
];
export const classPrimaryHover = [
	'hover:bg-pmui--btn-primary-default-hover-color',
	'hover:border-pmui--btn-primary-default-hover-color',
	'hover:text-pmui--btn-primary-default-hover-color',
];
export const classPrimaryPressed = [
	'focus:bg-pmui--btn-primary-default-pressed-color',
	'focus:border-pmui--btn-primary-default-pressed-color',
	'focus:text-pmui--btn-primary-default-pressed-color',
];
export const classPrimaryDisabled = [
	'disabled:bg-pmui--btn-primary-default-disabled-color',
	'disabled:border-pmui--btn-primary-default-disabled-color',
	'disabled:text-pmui--btn-primary-default-disabled-color',
];
export const classesButtonPrimaryDefault = [
	...classPrimaryDefault,
	...classPrimaryHover,
	...classPrimaryPressed,
	...classPrimaryDisabled,
];
export const classesButtonPrimaryShadow = [
	...classesButtonPrimaryDefault,
	...['shadow-pmui--btn'],
];
export const classPrimaryDefaultOutlined = [
	'bg-pmui--btn-primary-outlined-color',
	'border-pmui--btn-primary-outlined-color',
	'text-pmui--btn-primary-outlined-color',
];
export const classPrimaryHoverOutlined = [
	'hover:bg-pmui--btn-primary-outlined-hover-color',
	'hover:border-pmui--btn-primary-outlined-hover-color',
	'hover:text-pmui--btn-primary-outlined-hover-color',
];
export const classPrimaryPressedOutlined = [
	'focus:bg-pmui--btn-primary-outlined-pressed-color',
	'focus:border-pmui--btn-primary-outlined-pressed-color',
	'focus:text-pmui--btn-primary-outlined-pressed-color',
];
export const classPrimaryDisabledOutlined = [
	'disabled:bg-pmui--btn-primary-outlined-disabled-color',
	'disabled:border-pmui--btn-primary-outlined-disabled-color',
	'disabled:text-pmui--btn-primary-outlined-disabled-color',
];
export const classesButtonPrimaryOutlined = [
	...classPrimaryDefaultOutlined,
	...classPrimaryHoverOutlined,
	...classPrimaryPressedOutlined,
	...classPrimaryDisabledOutlined,
];
export const classPrimaryDefaultText = [
	'bg-pmui--btn-primary-text-color',
	'border-pmui--btn-primary-text-color',
	'text-pmui--btn-primary-text-color',
];
export const classPrimaryHoverText = [
	'hover:bg-pmui--btn-primary-text-hover-color',
	'hover:border-pmui--btn-primary-text-hover-color',
	'hover:text-pmui--btn-primary-text-hover-color',
];
export const classPrimaryPressedText = [
	'focus:bg-pmui--btn-primary-text-pressed-color',
	'focus:border-pmui--btn-primary-text-pressed-color',
	'focus:text-pmui--btn-primary-text-pressed-color',
];
export const classPrimaryDisabledText = [
	'disabled:bg-pmui--btn-primary-text-disabled-color',
	'disabled:border-pmui--btn-primary-text-disabled-color',
	'disabled:text-pmui--btn-primary-text-disabled-color',
];
export const classesButtonPrimaryText = [
	...classPrimaryDefaultText,
	...classPrimaryHoverText,
	...classPrimaryPressedText,
	...classPrimaryDisabledText,
];

/** SECONDARY BUTTON. */
export const classSecondaryDefault = [
	'bg-pmui--btn-secondary-default-color',
	'border-pmui--btn-secondary-default-color',
	'text-pmui--btn-secondary-default-color',
];
export const classSecondaryHover = [
	'hover:bg-pmui--btn-secondary-default-hover-color',
	'hover:border-pmui--btn-secondary-default-hover-color',
	'hover:text-pmui--btn-secondary-default-hover-color',
];
export const classSecondaryPressed = [
	'focus:bg-pmui--btn-secondary-default-pressed-color',
	'focus:border-pmui--btn-secondary-default-pressed-color',
	'focus:text-pmui--btn-secondary-default-pressed-color',
];
export const classSecondaryDisabled = [
	'disabled:bg-pmui--btn-secondary-default-disabled-color',
	'disabled:border-pmui--btn-secondary-default-disabled-color',
	'disabled:text-pmui--btn-secondary-default-disabled-color',
];
export const classesButtonSecondaryDefault = [
	...classSecondaryDefault,
	...classSecondaryHover,
	...classSecondaryPressed,
	...classSecondaryDisabled,
];
export const classesButtonSecondaryShadow = [
	...classesButtonSecondaryDefault,
	...['shadow-pmui--btn'],
];
export const classSecondaryDefaultOutlined = [
	'bg-pmui--btn-secondary-outlined-color',
	'border-pmui--btn-secondary-outlined-color',
	'text-pmui--btn-secondary-outlined-color',
];
export const classSecondaryHoverOutlined = [
	'hover:bg-pmui--btn-secondary-outlined-hover-color',
	'hover:border-pmui--btn-secondary-outlined-hover-color',
	'hover:text-pmui--btn-secondary-outlined-hover-color',
];
export const classSecondaryPressedOutlined = [
	'focus:bg-pmui--btn-secondary-outlined-pressed-color',
	'focus:border-pmui--btn-secondary-outlined-pressed-color',
	'focus:text-pmui--btn-secondary-outlined-pressed-color',
];
export const classSecondaryDisabledOutlined = [
	'disabled:bg-pmui--btn-secondary-outlined-disabled-color',
	'disabled:border-pmui--btn-secondary-outlined-disabled-color',
	'disabled:text-pmui--btn-secondary-outlined-disabled-color',
];
export const classesButtonSecondaryOutlined = [
	...classSecondaryDefaultOutlined,
	...classSecondaryHoverOutlined,
	...classSecondaryPressedOutlined,
	...classSecondaryDisabledOutlined,
];
export const classSecondaryDefaultText = [
	'bg-pmui--btn-secondary-text-color',
	'border-pmui--btn-secondary-text-color',
	'text-pmui--btn-secondary-text-color',
];
export const classSecondaryHoverText = [
	'hover:bg-pmui--btn-secondary-text-hover-color',
	'hover:border-pmui--btn-secondary-text-hover-color',
	'hover:text-pmui--btn-secondary-text-hover-color',
];
export const classSecondaryPressedText = [
	'focus:bg-pmui--btn-secondary-text-pressed-color',
	'focus:border-pmui--btn-secondary-text-pressed-color',
	'focus:text-pmui--btn-secondary-text-pressed-color',
];
export const classSecondaryDisabledText = [
	'disabled:bg-pmui--btn-secondary-text-disabled-color',
	'disabled:border-pmui--btn-secondary-text-disabled-color',
	'disabled:text-pmui--btn-secondary-text-disabled-color',
];
export const classesButtonSecondaryText = [
	...classSecondaryDefaultText,
	...classSecondaryHoverText,
	...classSecondaryPressedText,
	...classSecondaryDisabledText,
];

export const classesSizeSmall: string[] = [
	'h-pmui--btn-small',
	'p-pmui--btn-small',
	'font-pmui--btn-small',
	'text-pmui--btn-small',
	'leading-pmui--btn-small',
	'rounded-pmui--btn-small',
];
export const classesSizeMedium: string[] = [
	'h-pmui--btn-medium',
	'p-pmui--btn-medium',
	'font-pmui--btn-medium',
	'text-pmui--btn-medium',
	'leading-pmui--btn-medium',
	'rounded-pmui--btn-medium',
];
export const classesSizeLarge: string[] = [
	'h-pmui--btn-large',
	'p-pmui--btn-large',
	'font-pmui--btn-large',
	'text-pmui--btn-large',
	'leading-pmui--btn-large',
	'rounded-pmui--btn-large',
];

export const cvaPrimaryButton = cva([], {
	variants: {
		buttonSize: {
			small: classesSizeSmall,
			medium: classesSizeMedium,
			large: classesSizeLarge,
		},
		buttonType: {
			primary: '',
			secondary: '',
		},
		buttonStyle: {
			shadow: '',
			outlined: '',
			text: '',
			default: '',
		},
	},
	compoundVariants: [
		/** Variant primary compound cases. */
		{
			/** Compounded case A. */
			buttonType: 'primary',
			buttonStyle: 'shadow',
			className: classesButtonPrimaryShadow,
		},
		{
			/** Compounded case B. */
			buttonType: 'primary',
			buttonStyle: 'outlined',
			className: classesButtonPrimaryOutlined,
		},
		{
			/** Compounded case C. */
			buttonType: 'primary',
			buttonStyle: 'text',
			className: classesButtonPrimaryText,
		},
		{
			/** Compounded case D. */
			buttonType: 'primary',
			buttonStyle: 'default',
			className: classesButtonPrimaryDefault,
		},

		/** Variant secondary compound cases. */
		{
			/** Compounded case A. */
			buttonType: 'secondary',
			buttonStyle: 'shadow',
			className: classesButtonSecondaryShadow,
		},
		{
			/** Compounded case B. */
			buttonType: 'secondary',
			buttonStyle: 'outlined',
			className: classesButtonSecondaryOutlined,
		},
		{
			/** Compounded case C. */
			buttonType: 'secondary',
			buttonStyle: 'text',
			className: classesButtonSecondaryText,
		},
		{
			/** Compounded case D. */
			buttonType: 'secondary',
			buttonStyle: 'default',
			className: classesButtonSecondaryDefault,
		},
	],
	defaultVariants: {},
});
