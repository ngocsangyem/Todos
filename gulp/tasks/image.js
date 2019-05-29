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
	let filePath = path.join(
		dir.src,
		dir.asset,
		dir.img,
		'**/*+(jpg|jpeg|gif|svg|png)'
	);
	let dest = path.join(taskTarget, dir.img);

	gulp.task('image', () => {
		// console.log(filePath)

		return gulp
			.src(filePath)
			.pipe(plugins.imagemin())
			.pipe(
				plugins.debug({
					title: 'Compiles:',
				})
			)
			.pipe(gulp.dest(dest));
	});
}
