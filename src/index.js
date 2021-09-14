import './sass/main.scss';

import createMarkup from './js/grid.js';

import { trackScroll, backToTop } from './js/backToTop';

import getRefs from './js/getRefs';
import { onSearchEvent, onTestNextPage } from './js/searchEvent';

const refs = getRefs();

// import './js/modal'; // закомментировал чтобы не мешала ошибка

refs.formRef.addEventListener('submit', onSearchEvent);
refs.btnTestRef.addEventListener('click', onTestNextPage); // слушатель на тестовую кнопку

refs.backToTopBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);
