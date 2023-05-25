/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
	swcMinify: true,
	reactStrictMode: true,
	transpilePackages: ['ui-divergana'],
	sassOptions: {
		includePaths: [
			'ui-divergana/components/**/*',
			path.join(__dirname, 'styles'),
		],
	},
	eslint: {
		dirs: ['app'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
	},

	/**
	 * Webpack.
	 *
	 * @param config - Config.
	 * @param options - Options.
	 * @param options.buildId - BuildId.
	 * @param options.dev - Dev.
	 * @param options.isServer - IsServer.
	 * @param options.defaultLoaders - DefaultLoaders.
	 * @param options.nextRuntime - NextRuntime.
	 * @param options.webpack - Webpack.
	 * @returns Config.
	 */
	webpack: (
		config,
		// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
		{ buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
	) => {
		config.resolve.extensionAlias = {
			'.js': ['.ts', '.tsx', '.js', '.jsx'],
			'.mjs': ['.mts', '.mjs'],
			'.cjs': ['.cts', '.cjs'],
		};
		// Overcome webpack referencing `window` in chunks
		config.output.globalObject = 'self';

		return config;
	},
};
