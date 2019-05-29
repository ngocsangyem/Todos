import path from 'path';
import del from 'del';

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

	// Clean
	gulp.task(
		'clean',
		del.bind(null, [path.join(dir.build), path.join(dir.destination)])
	);
}
