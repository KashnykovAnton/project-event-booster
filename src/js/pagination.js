
import fetchEvent from "./apiService";
import createPagination from '../templates/pagination.hbs';
import {refs} from './getRefs';
import {states} from './getStates';

function pagination(e) {
  if (states.totalPages > 7) {

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
