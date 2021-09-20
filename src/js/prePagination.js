import fetchEvent from './apiService';
import createPagination from '../templates/pagination.hbs';
import {refs} from './getRefs';
import {states} from './getStates';


async function prePagination() {
    console.log(states.totalPages)
  await fetchEvent.fetchRandom(3).then(data => {
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
