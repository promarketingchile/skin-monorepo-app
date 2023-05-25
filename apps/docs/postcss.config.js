module.exports = {
<<<<<<< HEAD
  plugins: [
		require("@tailwindcss/nesting"),
		require("postcss-import"),
    require("tailwindcss"),
    require('autoprefixer'),
	],
};
=======
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
>>>>>>> origin/feature/poc-component-class-variance
