const path = require('path');

module.exports = {
	root: true,
	extends: ['custom'],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
	},
};
