// eslint-disable-next-line no-undef
const path = require('path');
const currentPath = path.resolve(__dirname);

module.exports = {
	globals: {
		React: true,
		google: true,
		context: true,
		expect: true,
		jsdom: true,
		JSX: true,
	},
	extends: [
		path.join(__dirname, 'jsdoc.cjs'),
		path.join(__dirname, 'typescript.cjs'),
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
		'plugin:jsx-a11y/recommended',
		'airbnb-typescript',
		'eslint:recommended',
		'turbo',
	],
	plugins: [
		'react',
		'html',
		'json',
		'prettier',
		'import',
		'jsx-a11y',
		'@typescript-eslint',
	],

	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	overrides: [
		{
			files: ['*.tsx'],
			rules: {
				'react/react-in-jsx-scope': 'off',
				'react/jsx-uses-react': 'off',
				'no-undef': 'off',

				'@typescript-eslint/naming-convention': [
					'off',
					{
						selector: ['enumMember', 'interface'],
						format: ['PascalCase'],
					},
					{
						selector: ['variable', 'function', 'classMethod'],
						leadingUnderscore: 'allow',
						trailingUnderscore: 'allow',
						format: ['camelCase'],
					},
				],
			},
		},
	],
	rules: {
		'jsdoc/require-jsdoc': 'off',
		'jsdoc/require-param': 'off',
		'jsdoc/newline-after-description': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				//devDependencies: ['**/*.stories.*', '**/.storybook/**/*.*'],
				devDependencies: true,
				peerDependencies: true,
				optionalDependencies: true,
				bundledDependencies: true,
			},
		],
		// https://stackoverflow.com/questions/56337176/prettier-and-eslint-indents-not-working-together
		'@typescript-eslint/indent': ['error', 'tab'],
		quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
		'@next/next/no-img-element': 'off',
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: 'React',
				//"varsIgnorePattern": "^(?:React|child)$"
			},
		],

		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: 'React',
				//"varsIgnorePattern": "^(?:React|child)$"
			},
		],
		//semi:  ['error', 'always', { 'omitLastInOneLineClassBody': true }],
		eqeqeq: ['error', 'always'],
		'no-console': 'off',
		'import/no-unresolved': [2, { commonjs: true, amd: true }],
		'import/named': 0,
		'import/namespace': 2,
		'import/default': 2,
		'import/export': 2,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				'': 'never',
			},
		],
	},
};
