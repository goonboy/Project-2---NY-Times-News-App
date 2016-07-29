var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

gulp.task('default', ['browser-sync']);


gulp.task('watch', function() {

    gulp.watch('js/**/*.js', ['uglify','reload']);
});


gulp.task('watchnow', function() {
  watch.init
});



gulp.task('compress', function() {
  gulp.src(['js/*.js', 'lib/*.js'])
    .pipe(eslint())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('build'));
  });
