const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const paths = [
  { src : 'scss/main.scss', dest : 'dist/' }
];

gulp.task('minify-sass', (callback) => {
    paths.map(file => {
      gulp.src(file.src)
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(file.dest));
    });

    callback();
});

const watch = [
  'scss/**/*.scss',
];

gulp.task('default', () => {
  gulp.watch(watch, gulp.series('minify-sass'));
});
