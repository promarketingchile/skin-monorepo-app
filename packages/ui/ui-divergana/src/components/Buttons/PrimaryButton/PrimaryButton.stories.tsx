// eslint-disable-next-line import/named
import { ArgTypes, Meta, StoryFn } from '@storybook/react';
import PrimaryButton from './PrimaryButton.module';
import { IParimaryButtonProps } from './PrimaryButton.interface';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars

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
};

//PrimaryButton
export const PrimaryButtonDefault = Template.bind({});
PrimaryButtonDefault.parameters = {
	//jest: '../tests/PMUIButton/primary.test.tsx',
};
PrimaryButtonDefault.argTypes = argTypes;
PrimaryButtonDefault.args = {
	children: 'Text',
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => alert(e.target)
};

export default StoryBookComponent;