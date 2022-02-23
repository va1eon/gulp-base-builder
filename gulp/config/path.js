import * as nodePath from 'path';
const root = nodePath.basename(nodePath.resolve());

const buildDir = './dist';
const srcDir = './src'

export const path = {
  html: {
    src: `${srcDir}/html/pages/*.html`,
    build: `${buildDir}/`,
    watch: `${srcDir}/html/**/*.html`
  },
  scss: {
    src: `${srcDir}/scss/main.scss`,
    build: `${buildDir}/css/`,
    watch: `${srcDir}/scss/**/*.scss`,
  },
  js: {
    src: `${srcDir}/js/main.js`,
    build: `${buildDir}/js/`,
    watch: `${srcDir}/js/**/*.js`
  },
  img: {
    src: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    srcSvg: `${srcDir}/img/**/*.svg`,
    build: `${buildDir}/img/`,
    watch: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  svgSprite: {
    src: `${srcDir}/sprite/**/*.svg`,
  },
  fonts: {
    build: `${buildDir}/fonts/`
  },

  clean: buildDir,
  buildDir,
  srcDir,
  root,
}