import path from 'path';
import terser from 'gulp-terser';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import watchify from 'watchify';
import browserify from 'browserify';
import tsify from 'tsify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

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
		// return (
		// 	gulp
		// 		.src(`./${dir.src}${dir.app}${dir.ts}${entries.ts}`)
		// 		.pipe(
		// 			plugins.plumber({
		// 				errorHandler: plugins.notify.onError(
		// 					'Error: <%= error.message %>'
		// 				),
		// 			})
		// 		)
		// 		.pipe(ts())
		// 		.pipe(plugins.if(!isProd, plugins.sourcemaps.init()))
		// 		// .pipe(plugins.if(isProd, terser()))
		// 		.pipe(plugins.if(!isProd, plugins.sourcemaps.write()))
		// 		.pipe(
		// 			plugins.debug({
		// 				title: 'Compiles:',
		// 			})
		// 		)
		// 		.pipe(gulp.dest(dest))
		// );
		return (
			watchify(
				browserify({
					basedir: './',
					debug: true,
					entries: ['./src/app/typescript/app.ts'],
				}).plugin(tsify)
			)
				.transform('babelify', {
					global: true,
					presets: ['@babel/env'],
					extensions: ['.js', '.ts'],
				})
				.bundle()
				.pipe(source('app.js'))
				.pipe(buffer())
				// .pipe(plugins.if(!isProd, plugins.sourcemaps.init()))
				// .pipe(plugins.if(!isProd, plugins.sourcemaps.write()))
				.pipe(gulp.dest(dest))
		);
	});
}
