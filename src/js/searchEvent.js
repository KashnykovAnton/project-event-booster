import fetchEvent from './apiService';

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
    .then(events => console.log(events))
    .catch();
  states.page += 1;
}

// тестовая функция для пагинации
function onTestNextPage() {
  fetchEvent(states.query, states.page)
    .then(events => console.log(events))
    .catch();

  states.page += 1;
}

export { onSearchEvent, onTestNextPage };
