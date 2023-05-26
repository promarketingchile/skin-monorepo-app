export const eslintConfig = {
	root: true,
	extends: ['next', 'next/core-web-vitals', 'custom'],
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	env: {
		node: true,
	},
};
