module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					extensions: ['.ios.js', '.android.js', '.windows.js', '.native.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
					alias: {
						'@utils': ['./src/utils'],
						'@hooks': ['./src/hooks'],
						'@screens': ['./src/screens'],
					},
					cwd: 'packagejson',
				},
			],
			'nativewind/babel',
		],
	};
};
