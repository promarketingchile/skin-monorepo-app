import React from 'react';

import { twMerge } from 'tailwind-merge';
import { cvaPrimaryButton } from './PrimaryButton.utils';
import { IPrimaryButtonProps } from './PrimaryButton.interface';

const PrimaryButton = (props: IPrimaryButtonProps) => {
	const {
		children,
		intent,
		size,
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
				twMerge(cvaPrimaryButton({ intent, size })) +
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
