const path = require('path');

module.exports = {
	root: true,
	extends: ["next", "next/core-web-vitals","custom"],
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		//sourceType: 'module',
	}
};
