/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { defineConfig, loadEnv, UserConfigExport } from 'vite';

interface IEnvVars {
	[x: string]: any;
}

/**
 * DefaultConfig.
 *
 * @param props - Options.
 * @param props.mode - Mode.
 * @returns Config.
 */
const defaultConfig = ({ mode }): UserConfigExport => {
	const minify =
		mode === 'development' || mode === 'storybook' ? false : 'terser';
	const sourcempas =
		mode === 'development' || mode === 'storybook' ? true : false;

	const ENV_VARS: IEnvVars = {
		NODE_ENV: mode,
		DEBUG: mode === 'development' || mode === 'storybook' ? true : false,
		// eslint-disable-next-line no-undef
		...process.env,
		// eslint-disable-next-line no-undef
		...loadEnv(mode, process.cwd()),
	};

	const config: UserConfigExport = {
		mode: mode,
		root: './',
		build: {
			sourcemap: sourcempas,
			//minify: 'terser',
			reportCompressedSize: true,
			//minify: true	
			//reportCompressedSize: true,
			copyPublicDir: false
		},
		define: {
			'process.env': ENV_VARS,
		},
		/*resolve: {
			alias: {
				// TODO! Remove this alias when development phase is over.
				'@promarketing/types': './promarketing-types/src/index',
			},
		},*/
	};

	return defineConfig(config);
};

export default defaultConfig;
