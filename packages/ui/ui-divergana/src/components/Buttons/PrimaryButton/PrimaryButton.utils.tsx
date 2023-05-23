/** CONSTANTS */

import { IParimaryButtonSize, IParimaryButtonStyle, IParimaryButtonType } from "./PrimaryButton.interface";

/** PRIMARY BUTTON */
const classPrimaryDefault =
	'bg-pmui--btn-primary-default-color border-pmui--btn-primary-default-color text-pmui--btn-primary-default-color ';
const classPrimaryHover =
	'hover:bg-pmui--btn-primary-default-hover-color hover:border-pmui--btn-primary-default-hover-color hover:text-pmui--btn-primary-default-hover-color ';
const classPrimaryPressed =
	'focus:bg-pmui--btn-primary-default-pressed-color focus:border-pmui--btn-primary-default-pressed-color focus:text-pmui--btn-primary-default-pressed-color ';
const classPrimaryDisabled =
	'disabled:bg-pmui--btn-primary-default-disabled-color disabled:border-pmui--btn-primary-default-disabled-color disabled:text-pmui--btn-primary-default-disabled-color ';

const classesButtonPrimaryDefault =
	classPrimaryDefault +
	classPrimaryHover +
	classPrimaryPressed +
	classPrimaryDisabled;

const classesButtonPrimaryShadow =
	classesButtonPrimaryDefault + 'shadow-pmui--btn ';

const classPrimaryDefaultOutlined =
	'bg-pmui--btn-primary-outlined-color border-pmui--btn-primary-outlined-color text-pmui--btn-primary-outlined-color ';
const classPrimaryHoverOutlined =
	'hover:bg-pmui--btn-primary-outlined-hover-color hover:border-pmui--btn-primary-outlined-hover-color hover:text-pmui--btn-primary-outlined-hover-color ';
const classPrimaryPressedOutlined =
	'focus:bg-pmui--btn-primary-outlined-pressed-color focus:border-pmui--btn-primary-outlined-pressed-color focus:text-pmui--btn-primary-outlined-pressed-color ';
const classPrimaryDisabledOutlined =
	'disabled:bg-pmui--btn-primary-outlined-disabled-color disabled:border-pmui--btn-primary-outlined-disabled-color disabled:text-pmui--btn-primary-outlined-disabled-color ';

const classesButtonPrimaryOutlined =
	classPrimaryDefaultOutlined +
	classPrimaryHoverOutlined +
	classPrimaryPressedOutlined +
	classPrimaryDisabledOutlined;

const classPrimaryDefaultText =
	'bg-pmui--btn-primary-text-color border-pmui--btn-primary-text-color text-pmui--btn-primary-text-color ';
const classPrimaryHoverText =
	'hover:bg-pmui--btn-primary-text-hover-color hover:border-pmui--btn-primary-text-hover-color hover:text-pmui--btn-primary-text-hover-color ';
const classPrimaryPressedText =
	'focus:bg-pmui--btn-primary-text-pressed-color focus:border-pmui--btn-primary-text-pressed-color focus:text-pmui--btn-primary-text-pressed-color ';
const classPrimaryDisabledText =
	'disabled:bg-pmui--btn-primary-text-disabled-color disabled:border-pmui--btn-primary-text-disabled-color disabled:text-pmui--btn-primary-text-disabled-color ';

const classesButtonPrimaryText =
	classPrimaryDefaultText +
	classPrimaryHoverText +
	classPrimaryPressedText +
	classPrimaryDisabledText;


/** SECONDARY BUTTON */

const classSecondaryDefault =
	'bg-pmui--btn-secondary-default-color border-pmui--btn-secondary-default-color text-pmui--btn-secondary-default-color ';
const classSecondaryHover =
	'hover:bg-pmui--btn-secondary-default-hover-color hover:border-pmui--btn-secondary-default-hover-color hover:text-pmui--btn-secondary-default-hover-color ';
const classSecondaryPressed =
	'focus:bg-pmui--btn-secondary-default-pressed-color focus:border-pmui--btn-secondary-default-pressed-color focus:text-pmui--btn-secondary-default-pressed-color ';
const classSecondaryDisabled =
	'disabled:bg-pmui--btn-secondary-default-disabled-color disabled:border-pmui--btn-secondary-default-disabled-color disabled:text-pmui--btn-secondary-default-disabled-color ';

const classesButtonSecondaryDefault =
	classSecondaryDefault +
	classSecondaryHover +
	classSecondaryPressed +
	classSecondaryDisabled;

const classesButtonSecondaryShadow =
	classesButtonSecondaryDefault + 'shadow-pmui--btn ';

const classSecondaryDefaultOutlined =
	'bg-pmui--btn-secondary-outlined-color border-pmui--btn-secondary-outlined-color text-pmui--btn-secondary-outlined-color ';
const classSecondaryHoverOutlined =
	'hover:bg-pmui--btn-secondary-outlined-hover-color hover:border-pmui--btn-secondary-outlined-hover-color hover:text-pmui--btn-secondary-outlined-hover-color ';
const classSecondaryPressedOutlined =
	'focus:bg-pmui--btn-secondary-outlined-pressed-color focus:border-pmui--btn-secondary-outlined-pressed-color focus:text-pmui--btn-secondary-outlined-pressed-color ';
const classSecondaryDisabledOutlined =
	'disabled:bg-pmui--btn-secondary-outlined-disabled-color disabled:border-pmui--btn-secondary-outlined-disabled-color disabled:text-pmui--btn-secondary-outlined-disabled-color ';

const classesButtonSecondaryOutlined =
	classSecondaryDefaultOutlined +
	classSecondaryHoverOutlined +
	classSecondaryPressedOutlined +
	classSecondaryDisabledOutlined;

const classSecondaryDefaultText =
	'bg-pmui--btn-secondary-text-color border-pmui--btn-secondary-text-color text-pmui--btn-secondary-text-color ';
const classSecondaryHoverText =
	'hover:bg-pmui--btn-secondary-text-hover-color hover:border-pmui--btn-secondary-text-hover-color hover:text-pmui--btn-secondary-text-hover-color ';
const classSecondaryPressedText =
	'focus:bg-pmui--btn-secondary-text-pressed-color focus:border-pmui--btn-secondary-text-pressed-color focus:text-pmui--btn-secondary-text-pressed-color ';
const classSecondaryDisabledText =
	'disabled:bg-pmui--btn-secondary-text-disabled-color disabled:border-pmui--btn-secondary-text-disabled-color disabled:text-pmui--btn-secondary-text-disabled-color ';

const classesButtonSecondaryText =
	classSecondaryDefaultText +
	classSecondaryHoverText +
	classSecondaryPressedText +
	classSecondaryDisabledText;

const btnClassPrimary = (buttonStyle: keyof typeof IParimaryButtonStyle) => {
	switch (buttonStyle) {
		case 'shadow':
			return classesButtonPrimaryShadow;
		case 'outlined':
			return classesButtonPrimaryOutlined;
		case 'text':
			return classesButtonPrimaryText;
		case 'default':
		default:
			return classesButtonPrimaryDefault;
	}
};

const btnClassSecondary = (buttonStyle: keyof typeof IParimaryButtonStyle) => {
	switch (buttonStyle) {
		case 'shadow':
			return classesButtonSecondaryShadow;
		case 'outlined':
			return classesButtonSecondaryOutlined;
		case 'text':
			return classesButtonSecondaryText;
		case 'default':
		default:
			return classesButtonSecondaryDefault;
	}
};

export const btnGetType = (
	type: keyof typeof IParimaryButtonType,
	buttonStyle: keyof typeof IParimaryButtonStyle,
) => {
	switch (type) {
		case 'primary':
			return btnClassPrimary(buttonStyle);
		case 'secondary':
			return btnClassSecondary(buttonStyle);
	}
};

export const btnSize = (propSize: keyof typeof IParimaryButtonSize): string => {
	switch (propSize) {
			case 'small':
					return ' h-pmui--btn-small p-pmui--btn-small font-pmui--btn-small text-pmui--btn-small leading-pmui--btn-small rounded-pmui--btn-small ';
			case 'medium':
					return ' h-pmui--btn-medium p-pmui--btn-medium font-pmui--btn-medium text-pmui--btn-medium leading-pmui--btn-medium rounded-pmui--btn-medium ';
			case 'large':
			default:
					return ' h-pmui--btn-large p-pmui--btn-large font-pmui--btn-large text-pmui--btn-large leading-pmui--btn-large rounded-pmui--btn-large ';
	}
};
