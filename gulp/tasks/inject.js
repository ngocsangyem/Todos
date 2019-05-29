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
	let filePath = path.join(dir.src, dir.app, dir.css, entries.css);
	let dest = path.join(dir.src, dir.app, dir.css);
	let fileInject = path.join(dir.src, dir.app, dir.component, '**/*.sass');

	gulp.task('injectSASS', () => {
		return gulp
			.src(filePath)
			.pipe(
				plugins.plumber({
					errorHandler: plugins.notify.onError(
						'Error: <%= error.message %>'
					),
				})
			)
			.pipe(
				plugins.inject(gulp.src(fileInject, { read: false }), {
					starttag: '// inject:imports',
					endtag: '// endinject',
					relative: true,
					transform: function(filepath) {
						return '@import ' + filepath;
						// return console.log(filepath)
					},
				})
			)
			.pipe(
				plugins.debug({
					title: 'Injected:',
				})
			)
			.pipe(gulp.dest(dest));
	});
}
