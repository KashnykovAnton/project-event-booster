import './sass/main.scss';

import getRefs from './js/getRefs';
import onSearchEvent from './js/searchEvent';

const refs = getRefs();

refs.formRef.addEventListener('submit', onSearchEvent);
