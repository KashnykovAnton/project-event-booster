import './sass/main.scss';

import startPageLoad from './js/grid.js';
import addPagination from './js/pagination';
import showPageOfNumber from './js/showPageOfNumber';

import { trackScroll, backToTop } from './js/backToTop';

import getRefs from './js/getRefs';
import { onSearchEvent, onTestNextPage } from './js/searchEvent';

const refs = getRefs();

import './js/modal'; // закомментировал чтобы не мешала ошибка

refs.formRef.addEventListener('submit', onSearchEvent);

refs.backToTopBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);

refs.paginationRef.addEventListener('click', showPageOfNumber); // меняет класс, на долю секунды. наверное перебивает innerHTML в pagination

document.addEventListener('DOMContentLoaded', startPageLoad);
document.addEventListener('DOMContentLoaded', addPagination);
