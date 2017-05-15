var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
//var connect = require('gulp-connect');
//var browserSync = require('browser-sync');
//var exec = require('child_process').exec;


//gulp.task('runserver', function() {
//  var proc = exec('python manage.py runserver 8080')
//})
//
//gulp.task('browserSync', function() {
//   browserSync.init({
//      server: {
//         notify: false,
//         proxy: 'http://127.0.0.1:8080/'
//      },
//   })
//})

gulp.task('html', function () {
  gulp.src('./js/**/*.html')
    .pipe(livereload());
});

gulp.watch('build-js', function (files) {
    console.log("update JS files")
    gulp.src('./js/**/*.js')
    .pipe(livereload());
});

gulp.task('build-css', function(files) {
    console.log(files);
    return gulp.src('./assets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'))
        .pipe(livereload());
});

gulp.task('styles', function () {
  return gulp.src('./assets/**/*.scss')
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build'));
});



gulp.task('watch', function() {
    // Watch the input folder for change,
    // and run `sass` task when something happens
//    gulp.watch(input, ['sass'],['build-css'])
    // When there is a change,
    // log a message in the console
    livereload.listen({
        host: '127.0.0.1',
        port: 8000
        // port: 35729
    });
    gulp.watch('./js/**/*.scss',['build-css']);
    gulp.watch('./js/**/*.js', ['build-js']);
//    gulp.watch().on('change', gulpLivereload.changed)
});

//Watch task

gulp.task('default', ['watch']);