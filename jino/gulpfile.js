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
	return gulp.src('src/sass/**/*.scss')
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

gulp.task('scripts', function() {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js',
        'src/libs/bootstrap/dist/js/bootstrap.min.js',
		'src/libs/fancybox/dist/jquery.fancybox.js',
		'src/libs/slick-carousel/slick/slick.min.js',
		'src/libs/sticky-kit/jquery.sticky-kit.js'
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('css-libs', ['sass'], function () {
	return gulp.src([
		'src/libs/bootstrap/dist/css/bootstrap.css',
        'src/libs/font-awesome/css/font-awesome.css',
		'src/libs/fancybox/dist/jquery.fancybox.css',
		'src/libs/slick-carousel/slick/slick.css'
	])
	.pipe(concat('libs.css'))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('src/css'));
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

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'pug'], function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function () {
	var buildCss = gulp.src([
			'src/css/styles.css',
			'src/css/libs.min.css',
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