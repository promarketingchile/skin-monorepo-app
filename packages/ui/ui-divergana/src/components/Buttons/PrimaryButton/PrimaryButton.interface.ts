import React from "react";

export interface IParimaryButtonProps  extends React.HTMLAttributes<HTMLButtonElement>  {
    children: JSX.Element | string,
    buttonType?: keyof typeof IParimaryButtonType;
		buttonStyle?: keyof typeof IParimaryButtonStyle;
		buttonSize?: keyof typeof IParimaryButtonSize;
		loading?: boolean;
		disabled?: boolean;
		prepend?: JSX.Element;
		append?: JSX.Element;
}

export enum IParimaryButtonSize {
	large = 'large',
	medium = 'medium',
	small = 'small',
}
export enum IParimaryButtonType {
	primary = 'primary',
	secondary = 'secondary',
	error = 'error',
	neutral = 'neutral',
	default = 'default',
}

export enum IParimaryButtonStyle {
	shadow = 'shadow',
	outlined = 'outlined',
	text = 'text',
	default = 'default',
}
