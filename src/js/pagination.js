import createPagination from '../templates/pagination.hbs';
import { refs } from './getRefs';
import { states } from './getStates';

function pagination() {
  states.array = [];
  for (let i = 0; i < 7 && i < states.totalPages; i += 1) {
    states.array.push(i + 1);
  }

  if (states.totalPages > 7) {
    states.array[6] = states.totalPages;

    if (states.page < 4) {
      states.array[1] = 2;
      states.array[2] = 3;
      states.array[3] = 4;
      states.array[4] = 5;

    }

    if (states.page > 3) {
      states.array[2] = states.page - 1;
      states.array[3] = states.page;
      states.array[4] = states.page + 1;
    }

    if (states.page === 4) {
      states.array[1] = 2;
    }

    if (states.page > 4) {
      states.array[1] = '...';
    }

    if (states.page < states.totalPages - 3) {
      states.array[5] = '...';
    }

    if (states.page > states.totalPages - 4) {
      states.array[2] = states.totalPages - 4;
      states.array[3] = states.totalPages - 3;
      states.array[4] = states.totalPages - 2;
      states.array[5] = states.totalPages - 1;
    }
  }

  refs.paginationRef.innerHTML = createPagination(states.array);
}

export default pagination;
