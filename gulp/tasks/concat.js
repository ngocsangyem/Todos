import fs from 'fs';
import path from 'path';
import babel from 'gulp-babel';
import terser from 'gulp-terser';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import strip from 'gulp-strip-comments';
import stripCssComments from 'gulp-strip-css-comments';

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
	let destJS = path.join(taskTarget, dir.js);
	let destCSS = path.join(taskTarget, dir.styles);
	let url = JSON.parse(fs.readFileSync('./concat.json'), {
		allowEmpty: true,
	});

	gulp.task('concatJS', () => {
		return gulp
			.src(url.scripts)
			.pipe(strip())
			.pipe(plugins.concat(entries.jscore))
			.pipe(terser())
			.pipe(
				plugins.debug({
					title: 'Compiles:',
				})
			)
			.pipe(gulp.dest(destJS));
	});

	gulp.task('concatCSS', () => {
		return gulp
			.src(url.styles)
			.pipe(stripCssComments())
			.pipe(plugins.concat(entries.csscore))
			.pipe(postcss([cssnano()]))
			.pipe(
				plugins.debug({
					title: 'Compiles:',
				})
			)
			.pipe(gulp.dest(destCSS));
	});
}
