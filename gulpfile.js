var gulp = require('gulp');
var react = require('gulp-react');
gulp.task('react', function(){
  return gulp.src('./jsx/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('./js/'));
});
