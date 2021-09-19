import { alert, defaultModules, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';

defaults.width = '350px';
defaults.inClass = 'fadeInDown';
defaults.delay = 3000;
defaults.animateSpeed = 'normal';
defaults.closer = false;
defaults.labels.unstick = true;

export function showAlert() {
  alert({
    text: 'All events in your region are shown below',
  });
}
export function showError() {
  alert({
    text: 'Please enter a valid request',
  });
}
