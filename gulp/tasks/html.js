import fileInclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';

const regExp = /(\.\.\/\.\.\/img\/|\.\.\/\.\.\/\.\.\/img\/)/g;

export const html = () => $.src($.html.src)
  .pipe($.plumber($.notify.onError(err => ($._notify(err, 'HTML')))))
  .pipe(fileInclude())
  .pipe($.replace('../../img/', './img/'))
  .pipe($.gulpIf($.isProd, versionNumber($._versionNumber)))
  .pipe($.dest($.html.build))
  .pipe($.browserSync.stream());

