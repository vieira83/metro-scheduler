var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
  // place code for your default task here
});
var vlad = gulp.src('./**/*.scss').pipe(concat('css-files.css'));
gulp.task('build-css', function() {
    console.log(vlad);
    return gulp.src('./assets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
});

gulp.task('styles', function () {
  return gulp.src('./assets/**/*.scss')
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build'));
});


gulp.task('watch', function() {
  livereload.listen(32700);
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'],['app'])
    // When there is a change,
    // log a message in the console

    .watch().on('change', livereload.changed)
});