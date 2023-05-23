import React from 'react';
import { IParimaryButtonProps } from "./PrimaryButton.interface";

import "./PrimaryButton.module.scss";

const PrimaryButton = (props:IParimaryButtonProps) => {
    const {children,...buttonProps} = props;
    return <button {...buttonProps} >{children}</button>
}

export default PrimaryButton;