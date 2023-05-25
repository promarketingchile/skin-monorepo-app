/** @type {import('tailwindcss').Config} */
import preset from './tailwind.base.js';
import merge from 'deepmerge';

import PrimaryButtonTailwind from './src/components/Buttons/PrimaryButton/PrimaryButton.tailwind.js'

const mergedConfig = merge(
		preset,
		PrimaryButtonTailwind
);

export default mergedConfig;