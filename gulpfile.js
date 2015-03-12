var gulp = require('gulp');
var ejs = require("gulp-ejs");

gulp.task('default', function() {
  // place code for your default task here
});

gulp.src("./index.ejs")
    .pipe(ejs({
    }))
    .pipe(gulp.dest("./"));
