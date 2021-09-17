import fetchEvent from './apiService';
import getRefs from './getRefs';
import createPagination from '../tamplates/pagination.hbs';
import { states } from './searchEvent';

const refs = getRefs();

async function prePagination() {
  await fetchEvent(states.query, states.page).then(data => {
    states.totalPages = data.page.totalPages < 49 ? data.page.totalPages : 49;

    for (let i = 0; i < 7 && i < states.totalPages; i += 1) {
      states.array.push(i + 1);
    }

    if (states.totalPages > 7) {
      states.array[5] = '...';
      states.array[6] = states.totalPages;
    }

    
    refs.paginationRef.innerHTML = createPagination(states.array);
  });
  refs.selectedRef = document.querySelector('.number-of-page');
  refs.selectedRef.classList.add('number-of-page_active');
}

export default prePagination;
