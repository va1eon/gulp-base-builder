export const server = () => {
  $.browserSync.init({
    server: {
      baseDir: `${$.html.build}`,
    },
    notify: false,
    port: 3030,
  });
}