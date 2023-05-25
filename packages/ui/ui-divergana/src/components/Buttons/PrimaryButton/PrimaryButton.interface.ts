import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { cvaPrimaryButton } from './PrimaryButton.utils';

export interface IPrimaryButtonProps
	extends VariantProps<typeof cvaPrimaryButton>,
	React.HTMLAttributes<HTMLButtonElement> {
	children: JSX.Element | string;
	loading?: boolean;
	disabled?: boolean;
	prepend?: JSX.Element;
	append?: JSX.Element;
}
