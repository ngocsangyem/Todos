import path from 'path';

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
	let filePath = path.join(dir.src, dir.asset, dir.fonts, '**/*');
	let dest = path.join(taskTarget, dir.fonts);

	gulp.task('font', () => {
		return gulp
			.src(filePath, {
				since: gulp.lastRun('font'),
			})
			.pipe(gulp.dest(dest));
	});
}
