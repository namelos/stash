const gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    express = require('express');

const path = {
  html: '**/*.html',
  js: 'js/**/*.js',
  css: 'css/**/*.css'
};

gulp.task('serve', () => {
  app = express();
  app.use(express.static('.'));
  app.listen(3000, () =>
      console.log('listening at 3000...'));
});

gulp.task('html', () =>
          gulp.src(path.html)
          .pipe(livereload()));

gulp.task('js', () =>
          gulp.src(path.js)
          .pipe(livereload()));

gulp.task('css', () =>
          gulp.src(path.css)
          .pipe(livereload()));

gulp.task('watch', () => {
  gulp.watch(path.html, ['html']);
  gulp.watch(path.js, ['js']);
  gulp.watch(path.css, ['css']);
  livereload.listen();
});

gulp.task('default', ['watch', 'serve']);
