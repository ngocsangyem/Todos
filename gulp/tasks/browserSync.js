import path from 'path';
import fs from 'fs';

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
	let url = JSON.parse(fs.readFileSync('./concat.json'));
	// BrowserSync
	gulp.task('browserSync', () => {
		browserSync.init({
			open: 'local',
			// startPath: dir.baseUrl,
			port: dir.port || 3000,
			server: {
				baseDir: taskTarget,
				routes: (() => {
					let routes = {};

					// Map base URL to routes
					routes[dir.baseUrl] = taskTarget;

					return routes;
				})(),
			},
		});

		gulp.watch(
			[
				path.join(dir.src, dir.app, dir.component, '**/*.pug'),
				path.join(dir.src, dir.app, dir.view, '**/*.pug'),
				path.join(dir.src, 'seo.json'),
			],
			gulp.series('pug')
		).on('unlink', function(path) {
			let filePathInBuildDir = path
				.replace(`${dir.src}${dir.app}${dir.view}pages/`, taskTarget)
				.replace('.pug', '.html');
			fs.unlink(filePathInBuildDir, err => {
				if (err) throw err;
				console.log(`---------- Delete:  ${filePathInBuildDir}`);
			});
		});
		gulp.watch(
			[
				path.join(dir.src, dir.app, dir.component, '**/*.+(sass|scss)'),
				path.join(dir.src, dir.app, dir.sass, '**/*.+(sass|scss)'),
			],
			gulp.series('sass')
		);
		gulp.watch(
			[path.join(dir.src, dir.app, dir.component, '**/*.+(sass|scss)')],
			gulp.series('injectSASS')
		);
		gulp.watch(
			[
				path.join(dir.src, dir.app, dir.component, '**/*.js'),
				path.join(dir.src, dir.app, dir.script, '**/*.js'),
			],
			gulp.series('buildJs')
		);
		gulp.watch(
			[path.join(dir.src, dir.app, dir.ts, '**/*.ts')],
			gulp.series('buildTs')
		);
		gulp.watch(['./concat.json'], gulp.series('concatCSS', 'concatJS'));

		gulp.watch(
			[path.join(dir.src, dir.asset, dir.fonts, '**/*')],
			gulp.parallel('font')
		);

		gulp.watch(
			[path.join(dir.src, dir.asset, dir.img, '**/*')],
			gulp.parallel('image')
		);
		gulp.watch([taskTarget]).on('change', browserSync.reload);
	});
}
