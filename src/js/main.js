import {supportsWebp} from './modules/supportsWebp.js';

// SUPPORT WEBP
(async () => {
  (await supportsWebp())
    ? document.querySelector('html').classList.add('webp')
    : document.querySelector('html').classList.add('no-webp');
})();


document.addEventListener('DOMContentLoaded', () => {

});