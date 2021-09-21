import { refs } from './getRefs';

var btn = $('.pagination');

btn.on('click', function (e) {
  $('html, body').animate({ scrollTop: 200 }, 1300);
});

export * as scroll from '../index';
