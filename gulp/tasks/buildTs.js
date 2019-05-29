import path from 'path';
import webpackStream from 'webpack-stream';
import terser from 'gulp-terser';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import merge from 'merge2';

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

	gulp.task('buildTs', () => {
		return (
			gulp
				.src(`./${dir.src}${dir.app}${dir.ts}${entries.ts}`)
				.pipe(
					plugins.plumber({
						errorHandler: plugins.notify.onError(
							'Error: <%= error.message %>'
						),
					})
				)
				.pipe(plugins.if(!isProd, plugins.sourcemaps.init()))
				// .pipe(
				// 	babel({
				// 		presets: ['@babel/env'],
				// 	})
				// )
				.pipe(
					ts({
						noImplicitAny: true,
						outFile: 'app.js',
					})
				)
				// .pipe(plugins.if(isProd, terser()))
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
