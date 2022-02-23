import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => $.src($.img.src)
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'IMAGES'))))
  .pipe($.newer($.img.build))
  .pipe($.gulpIf($.isProd, webp()))
  .pipe($.gulpIf($.isProd, $.dest($.img.build)))
  .pipe($.gulpIf($.isProd, $.src($.img.src)))
  .pipe($.gulpIf($.isProd, $.newer($.img.build)))
  .pipe($.gulpIf($.isProd, imagemin($._imagemin)))
  .pipe($.dest($.img.build))
  .pipe($.src($.img.srcSvg))
  .pipe($.dest($.img.build))
  .pipe($.browserSync.stream());