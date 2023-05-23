import { IParimaryButtonProps, IParimaryButtonSize, IParimaryButtonStyle, IParimaryButtonType } from "./PrimaryButton.interface";

import "./PrimaryButton.module.scss"

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
}

export default PrimaryButton;