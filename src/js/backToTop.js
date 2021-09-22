import {refs} from './getRefs';

export function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    refs.backToTopBtn.classList.add('back-to-top-show');
  }
  if (scrolled < coords) {
    refs.backToTopBtn.classList.remove('back-to-top-show');
  }
}

export function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -50);
    setTimeout(backToTop, 20);
  }
}

