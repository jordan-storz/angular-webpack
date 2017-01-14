const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('sass', () => {
  return sass('./src/style/scss/*.scss')
    .pipe(gulp.dest('./src/style/css'));
});
