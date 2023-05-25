import React from 'react';
import './PrimaryButton.module.scss'; // TODO: is it convenient to load the scss direcly in the module?
import { twMerge } from 'tailwind-merge';
import { cvaPrimaryButton } from './PrimaryButton.utils';
import { IPrimaryButtonProps } from './PrimaryButton.interface';

const PrimaryButton = (props: IPrimaryButtonProps) => {
	const {
		children,
		buttonSize = 'medium',
		buttonType = 'primary',
		buttonStyle = 'default',
		prepend = undefined,
		append = undefined,
		loading = false,
		disabled = false,
		className = '',
	} = props;

	const loadingIcon = loading ? <>...</> : null;

	return (
		<button
			{...props}
			className={
				'font-RobotoCondensed flex items-center ' +
				twMerge(cvaPrimaryButton({ buttonSize, buttonType, buttonStyle })) +
				' ' +
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
	);
};

export default PrimaryButton;
