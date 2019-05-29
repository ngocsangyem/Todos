import path from 'path';
import webpackStream from 'webpack-stream';
import terser from 'gulp-terser';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import babel from 'gulp-babel';

export default function(
	gulp,
	plugins,
	args,
	cfg,
	taskTarget,
	browserSync,
	isProd,
	message,
	showError
) {
	let dir = cfg.dir;
	let entries = cfg.entries;
	let dest = path.join(taskTarget, dir.js);
	const filePath = {
		bundle: `./${dir.src}${dir.app}${dir.script}${entries.js}`,
	};

	gulp.task('buildJs', () => {
		return (
			gulp
				.src(`./${dir.src}${dir.app}${dir.script}${entries.js}`, {
					allowEmpty: true,
				})
				.pipe(
					plugins.plumber({
						errorHandler: plugins.notify.onError(
							'Error: <%= error.message %>'
						),
					})
				)
				.pipe(plugins.if(!isProd, plugins.sourcemaps.init()))
				// .pipe(
				// 	plugins.if(
				// 		isProd,
				// 		webpackStream({
				// 			mode: 'production',
				// 			entry: filePath,
				// 			output: {
				// 				filename: '[name].js',
				// 			},
				// 			module: {
				// 				rules: [
				// 					{
				// 						test: /\.(js)$/,
				// 						exclude: /(node_modules)/,
				// 						loader: 'babel-loader',
				// 						query: {
				// 							presets: ['@babel/preset-env'],
				// 						},
				// 					},
				// 				],
				// 			},
				// 			optimization: {
				// 				minimizer: [
				// 					new UglifyJsPlugin({
				// 						uglifyOptions: {
				// 							output: {
				// 								comments: false,
				// 							},
				// 						},
				// 					}),
				// 				],
				// 			},
				// 			// externals: {
				// 			//   jquery: 'jQuery'
				// 			// }
				// 		})
				// 	)
				// )
				.pipe(
					babel({
						presets: ['@babel/env'],
					})
				)
				.pipe(plugins.if(isProd, terser()))
				.pipe(plugins.if(!isProd, plugins.sourcemaps.write()))
				.pipe(
					plugins.debug({
						title: 'Compiles:',
					})
				)
				.pipe(gulp.dest(dest))
		);
	});
}
