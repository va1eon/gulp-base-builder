import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';
import browserSync from 'browser-sync';

export const plugins = {
  replace,
  plumber,
  notify,
  newer,
  gulpIf,
  browserSync,
}

export const options = {
  _notify: (error, title) => ({
    title: title,
    message: error.message,
  }),

  _versionNumber: {
    'value': '%DT%',
    'append': {
      'key': 'v',
      'cover': 0,
      'to': [
        'css',
        'js',
      ]
    },
    'output': {
      'file': 'gulp/version.json'
    }
  },

  _autoprefixer: {
    cascade: true,
    grid: true,

  },

  _webpCss: {
    webClass: '.webp',
    noWebClass: '.no-webp',
  },

  _imagemin: {
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true,
    optimizationLevel: 3
  },

  _svgSprite: {
    mode: {
      stack: {
        sprite: '../sprite/sprite.svg',
        example: true,
      }
    }
  }
}
