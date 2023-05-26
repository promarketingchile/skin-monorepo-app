import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import PrimaryButton from './PrimaryButton.module';
import { IPrimaryButtonProps } from './PrimaryButton.interface';
import React from 'react';

const StoryBookComponent = {
	title: 'UI-DIVERGANA/PrimaryButton',
	component: PrimaryButton,
	//decorators: [withTests({ results })],
} as Meta<IPrimaryButtonProps>;

const Template: StoryFn<IPrimaryButtonProps> = ({ children, ...args }) => {
	return <PrimaryButton {...args}>{children}</PrimaryButton>;
};

const argTypes: Partial<ArgTypes<IPrimaryButtonProps>> = {
	onClick: { control: false },
	children: { control: false },
	intent: {
		options: ['primary', 'secondary'],
		control: { type: 'select' },
	},
	size: {
		options: ['medium', 'small'],
		control: { type: 'radio' },
	},
};
 
export const PrimaryButtonDefault = Template.bind({});
PrimaryButtonDefault.parameters = {
	jest: './PrimaryButton.test.tsx',
};
PrimaryButtonDefault.argTypes = argTypes;
PrimaryButtonDefault.args = {
	children: 'Text',
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	intent: 'primary',
	size: 'small',
};

export const PrimaryButtonShadow = Template.bind({});
PrimaryButtonShadow.argTypes = argTypes;
PrimaryButtonShadow.args = {
	children: 'Text',
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	intent: 'primary',
	size: 'medium',
};


export default StoryBookComponent;
