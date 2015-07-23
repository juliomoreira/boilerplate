var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	gm_concat = require('gulp-concat'),
	filter = require('gulp-filter'),
	plumber = require('gulp-plumber');

var dir_styles = 'assets/css/**/*.styl';
var dir_scripts = 'assets/js/**/*.js';

gulp.task('task_watch', function () {
	gulp.watch(dir_styles, ['task_compile_stylus']);
});

gulp.task('task_compile_stylus', function () {
	var filter_styl = filter('assets/css/**/*.styl');
	return gulp.src('assets/css/**/*.styl')
	.pipe(plumber())
	.pipe(stylus())
	.pipe(filter_styl)
	.pipe(filter_styl.restore())
	.pipe(gm_concat('dist.css'))
	.pipe(gulp.dest('assets/dist'));
});

gulp.task('default', ['task_compile_stylus']);
