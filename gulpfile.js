// MAIN MODULE
import gulp from 'gulp';

const {src, dest, watch, series, parallel} = gulp;

// CONFIGURATION FILES
import {path} from './gulp/config/path.js';
import {plugins, options} from  './gulp/config/plugins.js';

global.$ = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  src,
  dest,
  ...path,
  ...plugins,
  ...options
}

import {clean} from './gulp/tasks/clean.js';
import {server} from './gulp/tasks/server.js';
import {html} from './gulp/tasks/html.js';
import {scss} from './gulp/tasks/scss.js';
import {js} from './gulp/tasks/js.js';
import {images} from './gulp/tasks/images.js';
import {svgSprite} from './gulp/tasks/svgSprite.js';
import {otfToTtf, ttfToWoff, createFontsStyle} from './gulp/tasks/fonts.js';
import {copy} from './gulp/tasks/copy.js';

// FILE CHANGE TRACKING
const watcher = () => {
  watch($.html.watch, html);
  watch($.scss.watch, scss);
  watch($.img.watch, images);
  watch($.js.watch, js);
  watch($.copy.watch, copy);
}

const fonts = series(otfToTtf, ttfToWoff, createFontsStyle);
const main = series(fonts, parallel(html, scss, js, images, svgSprite, copy));
const build = series(clean, main);
const start = series(build, parallel(watcher, server));

export {
  build,
  svgSprite,
  clean,
}

export default start;

