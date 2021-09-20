import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.width = '350px';
defaults.inClass = 'fadeInDown';
defaults.delay = 3000;
defaults.animateSpeed = 'normal';
defaults.sticker = false;
defaults.stickerHover = false;
// defaults.closer = false;
// defaults.labels.unstick = true;

function showAlert() {
  alert({
    text: 'All events in your region are shown below',
  });
}
function showError() {
  error({
    text: 'Sorry, but there are no more events with this name',
  });
}

export { showAlert, showError };
