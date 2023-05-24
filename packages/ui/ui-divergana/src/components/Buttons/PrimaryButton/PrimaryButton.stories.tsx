import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import PrimaryButton, { IParimaryButtonProps } from './PrimaryButton.module';

const StoryBookComponent = {
	title: 'UI-DIVERGANA/PrimaryButton',
	component: PrimaryButton,
	//decorators: [withTests({ results })],
} as Meta<IParimaryButtonProps>;

const Template: StoryFn<IParimaryButtonProps> = (props) => {
  const {children,...args} = props;
	return <PrimaryButton {...args} >{children}</PrimaryButton>;
};

const argTypes: Partial<ArgTypes<IParimaryButtonProps>> = {
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

export const PMUIButtonPrimaryShadow = Template.bind({});

PMUIButtonPrimaryShadow.argTypes = argTypes;
PMUIButtonPrimaryShadow.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'primary',
	buttonStyle: 'shadow',
	buttonSize: 'large'
};

export const PMUIButtonPrimaryOutlined = Template.bind({});

PMUIButtonPrimaryOutlined.argTypes = argTypes;
PMUIButtonPrimaryOutlined.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'primary',
	buttonStyle: 'outlined',
	buttonSize: 'large'
};

export const PMUIButtonPrimaryText = Template.bind({});

PMUIButtonPrimaryText.argTypes = argTypes;
PMUIButtonPrimaryText.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'primary',
	buttonStyle: 'text',
	buttonSize: 'large'
};

//Button Secondary
export const PMUIButtonSecondaryDefault = Template.bind({});

PMUIButtonSecondaryDefault.argTypes = argTypes;
PMUIButtonSecondaryDefault.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'secondary',
	buttonStyle: 'default',
	buttonSize: 'large'
};

export const PMUIButtonSecondaryShadow = Template.bind({});

PMUIButtonSecondaryShadow.argTypes = argTypes;
PMUIButtonSecondaryShadow.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'secondary',
	buttonStyle: 'shadow',
	buttonSize: 'large'
};

export const PMUIButtonSecondaryOutlined = Template.bind({});

PMUIButtonSecondaryOutlined.argTypes = argTypes;
PMUIButtonSecondaryOutlined.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'secondary',
	buttonStyle: 'outlined',
	buttonSize: 'large'
};

export const PMUIButtonSecondaryText = Template.bind({});

PMUIButtonSecondaryText.argTypes = argTypes;
PMUIButtonSecondaryText.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target),
	buttonType: 'secondary',
	buttonStyle: 'text',
	buttonSize: 'large'
};

export default StoryBookComponent;