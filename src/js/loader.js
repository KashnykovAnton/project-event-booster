import { refs } from './getRefs';

window.onload = function () {
  setTimeout(() => {
    hideLoader();
  }, 1300);
};

function showLoader() {
  refs.loaderRef.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loaderRef.classList.add('is-hidden');
}

export { showLoader, hideLoader };
