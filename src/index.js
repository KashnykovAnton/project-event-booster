import { getRefs } from './js/getRefs';

const refs = getRefs();

refs.formRef.addEventListener('submit', onSearchEvent);
