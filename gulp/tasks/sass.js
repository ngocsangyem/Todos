import path from 'path';
import autoprefixer from 'autoprefixer';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import csso from 'gulp-csso';
import mqpacker from 'css-mqpacker';
import objectFitImages from 'postcss-object-fit-images';
import atImport from 'postcss-import';
import inlineSVG from 'postcss-inline-svg';
import cssDeclarationSorter from 'css-declaration-sorter';

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
	let fileInject = path.join(dir.src, dir.app, dir.component, '**/*.sass');
	let dest = path.join(taskTarget, dir.styles);
	let postCssPlugins = [
		autoprefixer({ grid: true }),
		mqpacker({
			sort: true,
		}),
		atImport(),
		inlineSVG(),
		objectFitImages(),
		cssDeclarationSorter({ order: 'smacss' }),
	];
	gulp.task('sass', () => {
		console.log(fileInject);

		return gulp
			.src(filePath)
			.pipe(
				plugins.plumber({
					errorHandler: plugins.notify.onError(
						'Error: <%= error.message %>'
					),
				})
			)
			.pipe(plugins.if(!isProd, plugins.sourcemaps.init()))
			.pipe(
				plugins.debug({
					title: 'Compiles:',
				})
			)
			.pipe(
				plugins
					.sass({
						outputStyle: 'expanded',
						precision: 10,
						includePaths: [__dirname + '/', 'node_modules'],
					})
					.on('error', function(err) {
						showError.apply(this, ['Sass compile error', err]);
					})
			)
			.pipe(postcss(postCssPlugins))
			.pipe(
				plugins.if(
					isProd,
					csso({
						restructure: false,
					})
				)
			)
			.pipe(plugins.if(!isProd, plugins.sourcemaps.write()))
			.pipe(gulp.dest(dest))
			.pipe(
				browserSync.reload({
					stream: true,
				})
			);
	});
}
