import sprite from 'gulp-svg-sprite';

export const svgSprite = () => $.src($.svgSprite.src)
  .pipe($.plumber($.notify.onError(err => $._notify(err, 'SVG_SPRITE'))))
  .pipe(sprite($._svgSprite))
  .pipe($.dest($.img.build))