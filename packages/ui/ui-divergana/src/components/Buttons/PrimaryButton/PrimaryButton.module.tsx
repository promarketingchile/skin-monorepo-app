import "./PrimaryButton.module.scss"; // TODO: is it convenient to load the scss direcly in the module?
import { type VariantProps } from "class-variance-authority";
import { cvaPrimaryButton } from "./PrimaryButton.utils";
import { twMerge } from "tailwind-merge";

export interface IParimaryButtonProps extends VariantProps<typeof cvaPrimaryButton>, React.HTMLAttributes<HTMLButtonElement> {
	children: JSX.Element | string,
	loading?: boolean;
	disabled?: boolean;
	prepend?: JSX.Element;
	append?: JSX.Element;
}

const PrimaryButton = (props: IParimaryButtonProps) => {
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

	const loadingIcon = loading ? <>...</> : null;

	return <button
		{...props}
		className={'font-RobotoCondensed flex items-center' +
								twMerge(cvaPrimaryButton({buttonSize,buttonType,buttonStyle}))+' '+className}
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