import webpack from 'webpack-stream';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';


export const js = () => $.src($.js.src, {sourcemaps: $.isDev})
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'HTML'))))
  .pipe($.gulpIf($.isProd, babel()))
  .pipe(webpack({
    mode: $.isDev ? 'development' : 'production',
    output: {
      filename: 'main.min.js'
    }
  }))
  .pipe($.gulpIf($.isProd, uglify()))
  .pipe($.dest($.js.build, {sourcemaps: $.isDev}))
  .pipe($.browserSync.stream())