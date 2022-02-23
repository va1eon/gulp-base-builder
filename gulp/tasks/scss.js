import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCss from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => $.src($.scss.src, {sourcemaps: $.isDev})
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'SCSS'))))
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe($.replace('../../img/', '../img/'))
  .pipe($.gulpIf($.isProd, groupCss()))
  .pipe($.gulpIf($.isProd, autoprefixer($._autoprefixer)))
  .pipe($.gulpIf($.isProd, webpCss($._webpCss)))
  .pipe($.gulpIf($.isProd, cleanCss()))
  .pipe(rename({suffix: '.min'}))
  .pipe($.dest($.scss.build, {sourcemaps: $.isDev}))
  .pipe($.browserSync.stream());
