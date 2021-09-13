import './sass/main.scss';
import {trackScroll, backToTop} from './js/backToTop';
import getRefs from './js/getRefs';
const refs = getRefs();
import './js/modal';

// закомментировано пока нет ссылки на форму, чтобы не было ошибки в консоли
// refs.formRef.addEventListener('submit', onSearchEvent);
refs.backToTopBtn.addEventListener('click', backToTop);
window.addEventListener('scroll', trackScroll);

