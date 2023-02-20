import onResize from './js/resize';
import getCatagories from './js/filter';
import './js/js-header/dark-mode';
import './js/js-header/mobile-menu';
import { mqHandler } from './js/functions/mqHandler';
import './js/js-read/read';

if (window.location.pathname !== '/index.html') {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}
console.log(window.location);
