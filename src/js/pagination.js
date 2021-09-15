import fetchEvent from "./apiService";
import getRefs from "./getRefs";
import createPagination from '../tamplates/pagination.hbs';
import { states } from './searchEvent';

const refs = getRefs();

function addPagination() {
  fetchEvent(states.query, states.page).then(data => {
    let totalPages = (data.page.totalPages < 49) ? data.page.totalPages : 49;
    let array = [];

    for (let i = 1; i < 7 && i < totalPages; i += 1) {
      array.push(i + 1);
    }

    if (totalPages > 7) {
      array[4] = '...';
      array[5] = totalPages;
    }

    if (states.page > 4) {
      array[0] = '...';
      array[1] = states.page - 1;
      array[2] = states.page;
      array[3] = states.page + 1;
    }

    if (states.page > totalPages - 2) {
      array[1] = totalPages - 4;
      array[2] = totalPages - 3;
      array[3] = totalPages - 2;
      array[4] = totalPages - 1;
      array[5] = totalPages;
    }

    refs.paginationRef.innerHTML = createPagination(array);
  });
}

export default addPagination;