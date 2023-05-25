import { defineConfig, loadEnv, UserConfigExport } from 'vite';
/**
 * DefaultConfig.
 *
 * @param props - Options.
 * @param props.mode - Mode.
 * @returns Config.
 */
const defaultConfig = ({ mode }): UserConfigExport => {
	const config: UserConfigExport = {
		mode: mode,
		root: './',
		build: {
			sourcemap: mode === 'development' || mode === 'storybook' ? true : false,
			minify: mode === 'development' || mode === 'storybook' ? false : 'terser',
			reportCompressedSize: true,
			copyPublicDir: false
		}
	};
	return defineConfig(config);
};
export default defaultConfig;