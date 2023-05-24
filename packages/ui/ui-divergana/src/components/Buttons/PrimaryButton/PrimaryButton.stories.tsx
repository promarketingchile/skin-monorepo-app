import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import PrimaryButton, { IPrimaryButtonProps } from './PrimaryButton.module';

const StoryBookComponent = {
	title: 'UI-DIVERGANA/PrimaryButton',
	component: PrimaryButton,
	//decorators: [withTests({ results })],
} as Meta<IPrimaryButtonProps>;

const Template: StoryFn<IPrimaryButtonProps> = (props) => {
  const {children,...args} = props;
	return <PrimaryButton {...args} >{children}</PrimaryButton>;
};

const argTypes: Partial<ArgTypes<IPrimaryButtonProps>> = {
	onClick: { control: false },
  children: { control: false },
	buttonType: {
		options: ['primary', 'secondary'],
		control: { type: 'radio' },
	},
	buttonStyle: {
		options: ['default', 'shadow', 'outlined', 'text'],
		control: { type: 'radio' },
	},
	buttonSize: {
		options: ['large', 'medium', 'small'],
		control: { type: 'radio' },
	},
	loading: { type: 'boolean' },
	disabled: { type: 'boolean' },
};

//PrimaryButton
export const PrimaryButtonDefault = Template.bind({});
PrimaryButtonDefault.parameters = {
	//jest: '../tests/PMUIButton/primary.test.tsx',
};
PrimaryButtonDefault.argTypes = argTypes;
PrimaryButtonDefault.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'primary',
	buttonStyle: 'default',
	buttonSize: 'large'
};

export const PrimaryButtonShadow = Template.bind({});
PrimaryButtonShadow.argTypes = argTypes;
PrimaryButtonShadow.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'primary',
  buttonStyle: 'shadow',
  buttonSize: 'large'
};
export const PrimaryButtonOutlined = Template.bind({});
PrimaryButtonOutlined.argTypes = argTypes;
PrimaryButtonOutlined.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'primary',
  buttonStyle: 'outlined',
  buttonSize: 'large'
};
export const PrimaryButtonText = Template.bind({});
PrimaryButtonText.argTypes = argTypes;
PrimaryButtonText.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'primary',
  buttonStyle: 'text',
  buttonSize: 'large'
};
//Button Secondary
export const SecondaryButtonDefault = Template.bind({});
SecondaryButtonDefault.argTypes = argTypes;
SecondaryButtonDefault.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'secondary',
  buttonStyle: 'default',
  buttonSize: 'large'
};
export const SecondaryButtonShadow = Template.bind({});
SecondaryButtonShadow.argTypes = argTypes;
SecondaryButtonShadow.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'secondary',
  buttonStyle: 'shadow',
  buttonSize: 'large'
};
export const SecondaryButtonOutlined = Template.bind({});
SecondaryButtonOutlined.argTypes = argTypes;
SecondaryButtonOutlined.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'secondary',
  buttonStyle: 'outlined',
  buttonSize: 'large'
};
export const SecondaryButtonText = Template.bind({});
SecondaryButtonText.argTypes = argTypes;
SecondaryButtonText.args = {
  children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
  buttonType: 'secondary',
  buttonStyle: 'text',
  buttonSize: 'large'
};

export default StoryBookComponent;