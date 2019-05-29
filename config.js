const config = {
	entries: {
		js: 'app.js',
		jscore: 'core.js',
		css: 'main.sass',
		csscore: 'core.css',
		pug: '*.pug',
		img: '{jpg, jpeg, gif, svg, png}',
		ts: 'app.ts',
	},
	template: {
		view: 'views/',
		page: 'pages/',
	},
	dir: {
		all: '**/',
		baseUrl: './',
		src: 'src/',
		app: 'app/',
		component: 'components/',
		view: 'views/',
		sass: 'sass/',
		asset: 'assets/',
		script: 'scripts/',
		ts: 'typescript/',
		css: 'sass/',
		port: '8000',
		build: 'build/',
		blocks: 'src/blocks/',
		destination: 'dist/',
		resource: 'resource/',
		styles: 'css/',
		js: 'js/',
		img: 'img/',
		fonts: 'fonts/',
	},
};

module.exports = config;
