export const eslintConfig = {
	root: true,
	extends: ['custom'],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	env: {
		node: true,
	},
};