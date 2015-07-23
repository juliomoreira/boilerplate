var gm_gulp = require('gulp'),
	gm_stylus = require('gulp-stylus'),
	gm_concat = require('gulp-concat'),
	gm_filter = require('gulp-filter');

var dir_styles = 'assets/css/**/*.styl';
var dir_scripts = 'assets/js/**/*.js';

gm_gulp.task('watch', function () {
	gm_gulp.watch(dir_styles, ['full_css']);
});

gm_gulp.task('full_css', function () {
	var filter = gm_filter('assets/css/**/*.styl');
	return gm_gulp.src([
		'assets/css/**/*.styl'
	])
	.pipe(gm_stylus())
	.pipe(filter)
	.pipe(filter.restore())
	.pipe(gm_concat('dist.css'))
	.pipe(gm_gulp.dest('assets/dist'));
});

gm_gulp.task('default', ['watch', 'full_css']);
