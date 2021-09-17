import fetchEvent from './apiService';
import getRefs from './getRefs';
import createPagination from '../tamplates/pagination.hbs';
import { states } from './searchEvent';
import changeClassActive from './changeClassActive';

const refs = getRefs();

function pagination(e) {
  if (states.totalPages > 7) {
    // проверить как работает если общее число страниц < 7

    if (states.page < 4) {
      states.array[1] = 2;
      states.array[2] = 3;
      states.array[3] = 4;
      states.array[4] = 5;
      // states.array[5] = '...';
    }

    if (states.page > 3) {
      states.array[1] = '...';
      states.array[2] = states.page - 1;
      states.array[3] = states.page;
      states.array[4] = states.page + 1;
    }

    if (states.page < states.totalPages - 3) {
      states.array[5] = '...';
    }
    if (states.page > states.totalPages - 4) {
      states.array[2] = states.totalPages - 4;
      states.array[3] = states.totalPages - 3;
      states.array[4] = states.totalPages - 2;
      states.array[5] = states.totalPages - 1;
      states.array[6] = states.totalPages;
    }
  }

  refs.paginationRef.innerHTML = createPagination(states.array);
}

export default pagination;
