import path from 'path';
import data from 'gulp-data';
import prettyHtml from 'gulp-pretty-html';
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
	let template = cfg.template;
	let entries = cfg.entries;
	let dest = path.join(taskTarget);
	let filePath = path.join(
		dir.src,
		dir.app,
		template.view,
		template.page,
		dir.all,
		entries.pug
	);
	let pugOption = {
		pretty: '\t',
		data: { repoUrl: 'https://github.com/ngocsangyem/NNS-Start-Project' },
		filters: { 'show-code': filterShowCode },
	};
	let prettyOption = {
		indent_size: 2,
		indent_char: ' ',
		unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br', 'script'],
		content_unformatted: [],
	};

	gulp.task('pug', () => {
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
				data(function(file) {
					return JSON.parse(fs.readFileSync('./src/seo.json'));
				})
			)
			.pipe(
				plugins.pug(pugOption).on('error', function(err) {
					showError.apply(this, ['Pug compile error', err]);
				})
			)
			.pipe(prettyHtml(prettyOption))
			.pipe(
				plugins.debug({
					title: 'Compiles:',
				})
			)
			.pipe(gulp.dest(dest))
			.pipe(
				browserSync.reload({
					stream: true,
				})
			);
	});
}

/**
 * Pug filter that displays the contents of the pug file as unformatted text
 */
function filterShowCode(text, options) {
	var lines = text.split('\n');
	var result = '<pre class="code">\n';
	if (typeof options['first-line'] !== 'undefined')
		result = `${result}  <code>  ${options['first-line']}  </code>\n`;
	for (var i = 0; i < lines.length - 1; i++) {
		// (lines.length - 1) to cut the last line (blank)
		result =
			result + `<code>  ${lines[i].replace(/</gm, '&lt;')}  </code>\n`;
	}
	result = result + '</pre>\n';
	result = result.replace(/<code><\/code>/g, '<code>&nbsp;</code>');
	return result;
}
