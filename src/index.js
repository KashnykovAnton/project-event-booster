import './sass/main.scss';
import '../node_modules/geolocator/dist/geolocator.min.js';
import './js/geolocator';
import './js/sortByCountry';

import './js/fetchAndMarkup';
import showPage from './js/showPageOfNumber';

import { trackScroll, backToTop } from './js/backToTop';
import { refs } from './js/getRefs';
import { onSearchEvent } from './js/searchEvent';

import * as scroll from './js/scrollPagePagination';

import './js/modal';
import './js/modal-team';

refs.formRef.addEventListener('submit', onSearchEvent);

refs.backToTopBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);

refs.paginationRef.addEventListener('click', showPage);
