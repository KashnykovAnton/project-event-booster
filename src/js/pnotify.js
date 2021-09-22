import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
import { clearMarkup, clearPagination } from './searchEvent';

defaults.width = '280px';
defaults.inClass = 'fadeInDown';
defaults.delay = 2000;
defaults.animateSpeed = 'normal';
defaults.sticker = false;
defaults.stickerHover = false;

function showNotify() {
  alert({
    text: 'You are back to the start page!',
  });
}

function showError() {
  error({
    text: 'Sorry, but there are no more events with this name',
  });
  clearMarkup();
  clearPagination();
}

export { showError, showNotify };
