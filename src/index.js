import './sass/main.scss';

import getRefs from './js/getRefs';
import { onSearchEvent, onTestNextPage } from './js/searchEvent';

const refs = getRefs();

refs.formRef.addEventListener('submit', onSearchEvent);
refs.btnTestRef.addEventListener('click', onTestNextPage); // слушатель на тестовую кнопку
