import { refs } from './getRefs';

var btn = $('.pagination');

btn.on('click', function () {
  $('html, body').animate({ scrollTop: 200 }, 1300);
});

export * as scroll from '../index';
