export const copy = () => $.src($.copy.src)
  .pipe($.dest($.copy.build));