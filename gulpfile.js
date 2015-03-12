var gulp = require('gulp');
var ejs = require("gulp-ejs");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('ejs', function() {
  gulp.src("./index.ejs")
    .pipe(ejs({
    }))
    .pipe(gulp.dest("./"));
});
gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      includePaths: require('node-neat').includePaths
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
   // Watch .ejs files
  gulp.watch(['./index.js', 'partials/**/*.ejs'], ['ejs']);
   // Watch .scss files
  gulp.watch('./sass/*.scss', ['sass']);
 });

gulp.task('default', ['ejs', 'sass']);
