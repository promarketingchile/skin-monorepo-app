/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
import { defineConfig, loadEnv, UserConfigExport } from 'vite';

/**
 * DefaultConfig.
 *
 * @param props - Options.
 * @param props.mode - Mode.
 * @returns Config.
 */
const defaultConfig = ({ mode }): UserConfigExport => {

	const minify = mode === 'development' || mode === 'storybook' ? false : 'terser';
	const sourcempas = mode === 'development' || mode === 'storybook' ? true : false;

	/** merge process.env vars, with loadEnv depending on the enviorment 
	 * This implementation is not yet used in the project, nevertheless it is recommended to implement this additional control over the ENV vars due Vite restrictions on env variables naming convention. 
	 * Note: Eslint rules were adjusted to avoid complains on not typed constants, therefore, IEnvVars was removed. 
	 * TODO: this is optional at this development stage, and can be resolved to be removed. 
	*/
	const ENV_VARS = {
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
			minify: minify,
			reportCompressedSize: true,
			copyPublicDir: false
		},
		define: {
			'process.env': ENV_VARS,
		}
	};

	return defineConfig(config);
};

export default defaultConfig;
