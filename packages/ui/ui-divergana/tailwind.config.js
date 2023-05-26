/** @type {import('tailwindcss').Config} */
import preset from './tailwind.base';
import merge from 'deepmerge';

import PrimaryButtonTailwind from './src/components/Buttons/PrimaryButton/PrimaryButton.tailwind';

const mergedConfig = merge(
	preset,
	PrimaryButtonTailwind,
);

export default mergedConfig;