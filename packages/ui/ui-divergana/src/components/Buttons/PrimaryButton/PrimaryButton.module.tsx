<<<<<<< HEAD
import React from 'react';
import { IParimaryButtonProps, IParimaryButtonSize, IParimaryButtonStyle, IParimaryButtonType } from "./PrimaryButton.interface";
=======
import "./PrimaryButton.module.scss"; // TODO: is it convenient to load the scss direcly in the module?
import { twMerge } from "tailwind-merge";
import { cvaPrimaryButton } from "./PrimaryButton.utils";
import { IPrimaryButtonProps } from "./PrimaryButton.interface";
>>>>>>> origin/feature/poc-component-class-variance

const PrimaryButton = (props: IPrimaryButtonProps) => {
	const {
		children,
		buttonSize = "medium",
		buttonType = "primary",
		buttonStyle = "default",
		prepend = undefined,
		append = undefined,
		loading = false,
		disabled = false,
		className = '',
	} = props;

<<<<<<< HEAD
import { btnGetType,btnSize } from "./PrimaryButton.utils";
const PrimaryButton = (props:IParimaryButtonProps) => {
    const {
        children,
        buttonSize = IParimaryButtonSize.medium,
        buttonType = IParimaryButtonType.primary,
        buttonStyle = IParimaryButtonStyle.default,
        prepend = undefined,
	    append = undefined,
        loading = false,
	    disabled = false,
        className = '',
    } = props;

    const loadingIcon = loading ? <>...</> : null;

    return <button
			{...props}
			className={
				' font-RobotoCondensed flex items-center border border-2 ' +
				btnGetType(buttonType, buttonStyle) +
				btnSize(buttonSize) +
				className
			}
			disabled={disabled}
			{...(loading && { disabled: true })}
		>
			{prepend && <>{loadingIcon || prepend}</>}
			<span className={(prepend ? 'pl-2 ' : '') + (append ? 'pr-2 ' : '')}>
				{children}
			</span>
			{append && <>{append}</>}
		</button>
=======
	const loadingIcon = loading ? <>...</> : null;

	return <button
		{...props}
		className={'font-RobotoCondensed bg-pink-600 flex items-center ' + twMerge(cvaPrimaryButton({buttonSize,buttonType,buttonStyle}))+' '+className}
		disabled={disabled}
		{...(loading && { disabled: true })}
	>
		{prepend && <>{loadingIcon || prepend}</>}
		<span className={(prepend ? 'pl-2 ' : '') + (append ? 'pr-2 ' : '')}>
			{children}
		</span>
		{append && <>{append}</>}
	</button>
>>>>>>> origin/feature/poc-component-class-variance
}

export default PrimaryButton;