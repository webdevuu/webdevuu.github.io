var gulp 			= require('gulp'),
	pug				= require('gulp-pug'),
	sass 			= require('gulp-sass'),
	browserSync 	= require('browser-sync'),
	concat 			= require('gulp-concat');
	uglify 			= require('gulp-uglifyjs'),
	cssnano			= require('gulp-cssnano'),
	rename 			= require('gulp-rename'),
	del 			= require('del'),
	imagemin		= require('gulp-imagemin'),
	pngquant		= require('imagemin-pngquant'),
	cache			= require('gulp-cache'),
	autoprefixer	= require('gulp-autoprefixer'),
	notify 			= require( 'gulp-notify' );

gulp.task('pug', function() {
	return gulp.src('src/pug/**/*.pug')
		.pipe(pug({pretty: true}).on('error', notify.onError(
			{
				message: "<%= error.message %>",
				title  : "Sass Error!"
			}) )
		)
		.pipe(gulp.dest('src/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
		.pipe( sass().on('error', notify.onError(
			{
				message: "<%= error.message %>",
				title  : "Sass Error!"
			}) )
		)
	.pipe((autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('clean', function () {
	return del.sync('dist');
});
gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('img', function () {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'pug'], function() {
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass'], function () {
	var buildCss = gulp.src([
			'src/css/styles.css'
		])
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('src/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch']);