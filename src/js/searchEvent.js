import fetchEvent from './apiService';
import getRefs from './getRefs';
import createMarkup from './grid';

const refs = getRefs();

const states = {
  page: 1,
  query: '',
};

function onSearchEvent(e) {
  e.preventDefault();
  states.query = e.currentTarget.elements.query.value;
  states.page = 1;

  console.log(states.query);

  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));

  states.page += 1;
  refs.mainListRef.innerHTML = '';
}

// тестовая функция для получения нумерованый страниц с API
function onTestNextPage() {
  fetchEvent(states.query, states.page)
    .then(createMarkup)
    .catch(error => console.log(error));

  states.page += 1;
}

export { onSearchEvent, onTestNextPage, states };
