var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

function lessify() {
	return gulp.src('resources/assets/less/*.less')
		.pipe(less())
		.pipe(concat('application.css'))
		.pipe(gulp.dest('public/css'));	
};

function jsify() {
    return browserify('resources/assets/js/index.js')
        .transform(babelify)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('application.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('public/js'));
}

gulp.task('css', lessify);
gulp.task('js', jsify);

gulp.task('default', ['css', 'js']);