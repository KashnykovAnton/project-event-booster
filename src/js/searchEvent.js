import fetchEvent from './apiService';
import { createMarkup } from './fetchAndMarkup';
import {refs} from './getRefs';
import {states} from './getStates';
import {fetchAndMarkup} from './fetchAndMarkup'

// console.log(refs);
// console.log(states);


function onSearchEvent(e) {
  e.preventDefault();
  states.query = e.currentTarget.elements.query.value;
  resetPage();
  fetchAndMarkup()
  // incrementPage();
  clearMarkup();
  clearPagination();
}
  
function resetPage(){
  states.page = 1;
}

function incrementPage(){
    states.page += 1;
}

function clearMarkup (){
  refs.mainListRef.innerHTML = '';
}
function clearPagination (){
  refs.paginationRef.innerHTML = '';
}

export {onSearchEvent}

